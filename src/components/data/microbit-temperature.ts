import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-temperature")
export class MicrobitTemperature extends LitElement {

    @property()
    public services: Services | null = null;

    /**
     * The interval to check the temperature (ms)
     */
    @property({attribute: "temperature-period"})
    public temperaturePeriod: number = 100;

    /**
     * The text to display after the temperature
     */
    @property({attribute: "temperature-suffix"})
    public temperatureSuffix: string = "°c";

    /**
     * The text shown when disconnected
     */
    @property({attribute: "disconnected-text"})
    public disconnectedText: string = "Disconnected";

    /**
     * The text shown when no temperature
     */
    @property({attribute: "no-temperature"})
    public noTemperature: string = "No temperature found";

    private temperature: string = this.disconnectedText;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public createRenderRoot() {
        return this;
    }

    public render() {
        return html`${this.temperature}`;
    }

    public updated(changedProps: Map<string, any>) {
        super.updated(changedProps);

        if (changedProps.has("services")) {
            this.servicesUpdated();
        }
    }

    private async servicesUpdated() {
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
        await service.addEventListener("temperaturechanged", event => this.setTemperature(event.detail));
        this.setTemperature(await service.readTemperature());
    }

    private setTemperature(temperature: number) {
        this.temperature = temperature ? `${temperature}${this.temperatureSuffix}` : this.noTemperature;
        this.requestUpdate();
    }
}
