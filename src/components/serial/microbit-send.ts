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
    @property()
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

        if (this.buttonLabel) {
            button = html`<input
                type="submit"
                disabled=${!this.services || !this.services.uartService}
                value=${this.buttonLabel}
                @click=${this.sendText}></input>`;
        }

        return html`
            <span>
                <input
                    type="input"
                    disabled=${!this.services || !this.services.uartService}
                    maxLength=20
                    @keyup=${this.handleKey}></input>
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
