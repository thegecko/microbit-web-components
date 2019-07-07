import { customElement, LitElement, property, html } from "lit-element";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-state-connection")
export class MicrobitStateConnection extends LitElement {
    @property()
    public device: BluetoothDevice | null = null;

    /**
     * The CSS variable to use for the background when connected
     */
    @property()
    public connectedBackground: string = "microbit-connected";

    /**
     * The CSS variable to use for the background when disconnected
     */
    @property()
    public disconnectedBackground: string = "microbit-disconnected";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        const background = this.device ? this.connectedBackground : this.disconnectedBackground;
        const style = `background: var(--${background})`;

        return html`
            <span style=${style}>
                <slot />
            </span>
        `;
    }
}
