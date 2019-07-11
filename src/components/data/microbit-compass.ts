import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-compass")
export class MicrobitCompass extends LitElement {
    @property()
    public services: Services | null = null;

    private bearing?: number = 0;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        const style = `position: "absolute", transform: rotate(${this.bearing}deg)`;

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

    private async servicesUpdated() {
        if (!this.services || !this.services.magnetometerService) {
            this.bearing = 0;
            return;
        }

        const service = this.services.magnetometerService;
        await service.addEventListener("magnetometerbearingchanged", event => this.setBearing(event.detail));
        this.setBearing(await service.readMagnetometerBearing());
    }

    private setBearing(bearing?: number) {
        if (bearing) {
            this.bearing = bearing;
            this.requestUpdate();
        }
    }
}
