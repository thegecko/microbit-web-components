import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { AccelerometerPeriod, AccelerometerData } from "microbit-web-bluetooth/types/services/accelerometer";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-state-movement")
export class MicrobitStateMovement extends LitElement {
    @property()
    public services: Services | null = null;

    /**
     * The sensitivity of the sensor
     */
    @property()
    public sensitivity: number = 1;

    /**
     * The frequency to read the sensor
     */
    @property()
    public frequency: number = 20;

    /**
     * The css class to use when still
     */
    @property()
    public stillClass: string = "microbit-still";

    /**
     * The css class to use when moved
     */
    @property()
    public movedClass: string = "microbit-moved";

    @property({ attribute: false, reflect: false })
    public className = this.stillClass;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        return html`
            <span class=${this.className}>
                <slot />
            </span>
        `;
    }

    private setClassName(data: AccelerometerData) {
        this.className = (Math.abs(data.x) > this.sensitivity
            || Math.abs(data.y) > this.sensitivity
            || Math.abs(data.z) > this.sensitivity) ? this.movedClass
            : this.stillClass;
    }

    public attributeChangedCallback(name: string, oldval: string | null, newval: string | null) {
        super.attributeChangedCallback(name, oldval, newval);

        if (name === "services") {
            this.watchHandler();
        }
    }

    private async watchHandler() {
        if (!this.services || !this.services.accelerometerService) {
            this.className = this.stillClass;
            return;
        }

        const service = this.services.accelerometerService;
        await service.setAccelerometerPeriod(this.frequency as AccelerometerPeriod);
        const data = await service.readAccelerometerData();
        this.setClassName(data);
        await service.addEventListener("accelerometerdatachanged", event => this.setClassName(event.detail));
    }
}
