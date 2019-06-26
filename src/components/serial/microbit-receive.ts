import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-receive")
export class MicrobitReceive extends LitElement {
    @property()
    public services: Services | null = null;

    @property({ attribute: false, reflect: false })
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

    public attributeChangedCallback(name: string, oldval: string | null, newval: string | null) {
        super.attributeChangedCallback(name, oldval, newval);

        if (name === "services") {
            this.watchHandler();
        }
    }

    private async watchHandler() {
        const service = this.services!.uartService;

        if (!service) {
            this.data = "";
            return;
        }

        await service.addEventListener("receiveText", event => this.data += event.detail);
    }
}
