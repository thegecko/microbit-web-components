import { h, Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-calibrate'
})
export class MicrobitCalibrate {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    /**
     * The button label to calibrate
     */
    @Prop()
    public calibrateLabel: string = "Calibrate"

    @State()
    protected disabled = true;

    @Watch('services')
    protected async servicesUpdated() {
        this.disabled = !this.services || !this.services.magnetometerService;
    }

    private async calibrate() {
        if (this.services.magnetometerService) {
            await this.services.magnetometerService.calibrate();
        }
    }

    public render() {
        return (
            <button disabled={this.disabled} onClick={() => this.calibrate()}>{this.calibrateLabel}</button>
        );
    }
}
