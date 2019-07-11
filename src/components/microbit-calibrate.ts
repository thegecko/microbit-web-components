import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../microbit-store";

@customElement("microbit-calibrate")
export class MicrobitCalibrate extends LitElement {
    @property()
    public services: Services | null = null;

    /**
     * The button label to calibrate
     */
    @property({attribute: "calibrate-label"})
    public calibrateLabel: string = "Calibrate";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public createRenderRoot() {
        return this;
    }

    public render() {
        const disabled = !(this.services && this.services.magnetometerService);
        return html`
            <button ?disabled=${disabled} @click=${this.calibrate}>
                ${this.calibrateLabel}
            </button>
        `;
    }

    private async calibrate() {
        if (this.services && this.services.magnetometerService) {
            await this.services.magnetometerService.calibrate();
        }
    }
}
