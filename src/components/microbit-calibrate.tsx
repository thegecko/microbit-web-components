import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../device-tunnel';

@Component({
    tag: 'microbit-calibrate'
})
export class MicrobitCalibrate {
    @Element() el;
    @Prop() services: Services = undefined;

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
            this.services.magnetometerService.calibrate();
        }
    }
}

DeviceTunnel.injectProps(MicrobitCalibrate, ['services']);
