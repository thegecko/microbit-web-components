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
     * TThe CSS variable to use for the background when still
     */
    @property()
    public stillBackground: string = "microbit-still";

    /**
     * The CSS variable to use for the background when moved
     */
    @property()
    public movedBackground: string = "microbit-moved";

    protected background = this.stillBackground;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        const style = `background: var(--${this.background})`;
        return html`
            <span style=${style}>
                <slot />
            </span>
        `;
    }

    public updated(changedProps: Map<string, any>) {
        super.updated(changedProps);

        if (changedProps.has("services")) {
            this.servicesUpdated();
        }
    }

    protected async servicesUpdated() {
        if (!this.services || !this.services.accelerometerService) {
            this.background = this.stillBackground;
            return;
        }

        const service = this.services.accelerometerService;
        await service.setAccelerometerPeriod(this.frequency as AccelerometerPeriod);
        await service.addEventListener("accelerometerdatachanged", event => this.setBackground(event.detail));
        this.setBackground(await service.readAccelerometerData());
    }

    private setBackground(data: AccelerometerData) {
        this.background = (Math.abs(data.x) > this.sensitivity
            || Math.abs(data.y) > this.sensitivity
            || Math.abs(data.z) > this.sensitivity) ? this.movedBackground
            : this.stillBackground;
        this.requestUpdate();
    }
}
