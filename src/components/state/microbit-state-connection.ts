import { customElement, LitElement, property, html } from "lit-element";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-state-connection")
export class MicrobitStateConnection extends LitElement {
    @property()
    public device: BluetoothDevice | null = null;

    /**
     * The css class to use when connected
     */
    @property()
    public connectedClass: string = "microbit-connected";

    /**
     * The css class to use when disconnected
     */
    @property()
    public disconnectedClass: string = "microbit-disconnected";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        const className = this.device ? this.connectedClass : this.disconnectedClass;
        return html`
            <span class=${className}>
                <slot />
            </span>
        `;
    }
}
