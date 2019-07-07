import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-receive")
export class MicrobitReceive extends LitElement {
    @property()
    public services: Services | null = null;

    private data: string = "";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        const style = {
            whiteSpace: "pre"
        };

        return html`
            <span style=${style}>
                ${this.data}
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
        if (!this.services || !this.services.uartService) {
            this.data = "";
            return;
        }

        const service = this.services.uartService;
        await service.addEventListener("receiveText", event => this.setData(event.detail));
    }

    private setData(data: string) {
        this.data = data;
        this.requestUpdate();
    }
}
