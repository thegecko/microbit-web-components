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

    @Element() el;
    @Prop() services: Services = null;

    /**
     * The button label to calibrate
     */
    @Prop() calibrateLabel: string = "Calibrate"

    @State() disabled = true;

    @Watch('services')
    async watchHandler() {
        this.disabled = !this.services || !this.services.magnetometerService;
    }

    render() {
        return (
            <button disabled={this.disabled} onClick={() => this.calibrate()}>{this.calibrateLabel}</button>
        );
    }

    private async calibrate() {
        if (this.services.magnetometerService) {
            await this.services.magnetometerService.calibrate();
        }
    }
}
