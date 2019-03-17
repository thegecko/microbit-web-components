import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-temperature'
})
export class MicrobitTemperature {
    @Element() el;
    @Prop() services: Services = undefined;

    /**
     * The interval to check the temperature (ms)
     */
    @Prop() temperaturePeriod: number = 100;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    /**
     * The text shown when no temperature
     */
    @Prop() noTemperature: string = "No temperature found";
    @State() temperature: string = this.disconnectedText;

    @Watch('services')
    async watchHandler() {
        if (!this.services) {
            this.temperature = this.disconnectedText;
            return;
        }

        const service = this.services.temperatureService;

        if (!service) {
            this.temperature = this.noTemperature;
            return;
        }

        await service.setTemperaturePeriod(this.temperaturePeriod);
        service.addEventListener("temperaturechanged", temp => this.temperature = `${temp.detail}°c`);
    }

    render() {
        return this.temperature;
    }
}

DeviceTunnel.injectProps(MicrobitTemperature, ['services']);
