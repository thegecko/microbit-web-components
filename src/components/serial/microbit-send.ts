import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-send")
export class MicrobitSend extends LitElement {
    @property()
    public services: Services | null = null;

    /**
     * The text shown on the button
     */
    @property({attribute: "button-label"})
    public buttonLabel: string = "";

    /**
     * The delimiter to use
     */
    @property()
    public delimiter: string = "";

    private text = "";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        let button: any;
        const disabled = !(this.services && this.services.uartService);

        if (this.buttonLabel) {
            button = html`
                <input
                    type="submit"
                    value=${this.buttonLabel}
                    @click=${this.sendText}
                    ?disabled=${disabled}>
                </input>
            `;
        }

        return html`
            <span>
                <input
                    type="input"
                    maxLength=20
                    @keyup=${this.handleKey}
                    ?disabled=${disabled}>
                </input>
                ${button}
            </span>
        `;
    }

    private async handleKey(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            await this.sendText();
        } else {
            this.text = (event.target as HTMLInputElement).value;
        }
    }

    private async sendText() {
        if (this.services && this.services.uartService) {
            const text = `${this.text}${this.delimiter}`;
            await this.services.uartService.sendText(text);
        }
    }
}
