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
    @property({attribute: "button-label"})
    public buttonLabel: string = "";

    /**
     * The speed to scroll the text
     */
    @property({attribute: "scroll-delay"})
    public scrollDelay: number = 100;

    private text = "";

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        let button: any;
        const disabled = !(this.services && this.services.ledService);

        if (this.buttonLabel) {
            button = html`
                <input
                    type="submit"
                    value=${this.buttonLabel}
                    @click=${this.writeText}
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

    public updated(changedProps: Map<string, any>) {
        super.updated(changedProps);

        if (changedProps.has("services")) {
            this.servicesUpdated();
        }
    }

    private async servicesUpdated() {
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
