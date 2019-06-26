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
    @property()
    public temperaturePeriod: number = 100;

    /**
     * The text shown when disconnected
     */
    @property()
    public disconnectedText: string = "Disconnected";

    /**
     * The text shown when no temperature
     */
    @property()
    public noTemperature: string = "No temperature found";

    @property({ attribute: false, reflect: false })
    private temperature: string = this.disconnectedText;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        return html`${this.temperature}`;
    }

    public attributeChangedCallback(name: string, oldval: string | null, newval: string | null) {
        super.attributeChangedCallback(name, oldval, newval);

        if (name === "services") {
            this.watchHandler();
        }
    }

    private async watchHandler() {
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
        this.temperature = `${temperature}°c`;
        await service.setTemperaturePeriod(this.temperaturePeriod);
        await service.addEventListener("temperaturechanged", event => this.temperature = `${event.detail}°c`);
    }
}
