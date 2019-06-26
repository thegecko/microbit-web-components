import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-text")
export class MicrobitText extends LitElement {
    @property()
    public services: Services | null = null;

    /**
     * The text shown on the button
     */
    @property()
    public buttonLabel: string = "";

    /**
     * The speed to scroll the text
     */
    @property()
    public scrollDelay: number = 100;

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
                disabled=${!this.services || !this.services.ledService}
                value=${this.buttonLabel}
                @click=${this.writeText}></input>`;
        }

        return html`
            <span>
                <input
                    type="input"
                    disabled=${!this.services || !this.services.ledService}
                    maxLength=20
                    @keyup=${this.handleKey}></input>
                ${button}
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
        if (this.services && this.services.ledService) {
            await this.services.ledService.setScrollingDelay(this.scrollDelay);
        }
    }

    private async handleKey(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            await this.writeText();
        } else {
            this.text = (event.target as HTMLInputElement).value;
        }
    }

    private async writeText() {
        if (this.services && this.services.ledService) {
            await this.services.ledService.writeText(this.text);
        }
    }
}
