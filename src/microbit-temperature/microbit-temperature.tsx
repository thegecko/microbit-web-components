import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-temperature'
})
export class MicrobitTemperature {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    /**
     * The interval to check the temperature (ms)
     */
    @Prop()
    public temperaturePeriod: number = 100;

    /**
     * The text shown when disconnected
     */
    @Prop()
    public disconnectedText: string = "Disconnected";

    /**
     * The text shown when no temperature
     */
    @Prop()
    public noTemperature: string = "No temperature found";

    /**
     * The text to display after the temperature
     */
    @Prop()
    public temperatureSuffix: string = "°c";

    @State()
    protected temperature: string = this.disconnectedText;

    @Watch('services')
    protected async servicesUpdated() {
        if (!this.services) {
            this.temperature = this.disconnectedText;
            return;
        }

        const service = this.services.temperatureService;

        if (!service) {
            this.temperature = this.noTemperature;
            return;
        }

        const temperature = await service.readTemperature();
        this.temperature = `${temperature}${this.temperatureSuffix}`;
        await service.setTemperaturePeriod(this.temperaturePeriod);
        await service.addEventListener("temperaturechanged", temp => this.temperature = `${temp.detail}${this.temperatureSuffix}`);
    }

    public render() {
        return this.temperature;
    }
}
