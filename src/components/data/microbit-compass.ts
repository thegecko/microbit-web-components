import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-compass")
export class MicrobitCompass extends LitElement {
    @property()
    public services: Services | null = null;

    @property({ attribute: false, reflect: false })
    private bearing?: number = 0;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        const style = {
            position: "absolute",
            transform: `rotate(${this.bearing}deg)`
        };

        return html`<span style=${style}><slot /></span>`;
    }

    public attributeChangedCallback(name: string, oldval: string | null, newval: string | null) {
        super.attributeChangedCallback(name, oldval, newval);

        if (name === "services") {
            this.watchHandler();
        }
    }

    private async watchHandler() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }

        const service = this.services.magnetometerService;
        this.bearing = await service.readMagnetometerBearing();
        await service.addEventListener("magnetometerbearingchanged", event => this.bearing = event.detail);
    }
}
