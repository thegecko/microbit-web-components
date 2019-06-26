import { customElement, LitElement, property, html } from "lit-element";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-name")
export class MicrobitName extends LitElement {
    @property()
    public device: BluetoothDevice | null = null;

    /**
     * The text shown when disconnected
     */
    @property()
    public disconnectedText: string = "Disconnected";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public createRenderRoot() {
        return this;
    }

    public render() {
        return html`${this.device ? this.device.name : this.disconnectedText}`;
    }
}
