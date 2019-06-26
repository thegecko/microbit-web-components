import { customElement, LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from "../../microbit-store";

@customElement("microbit-state-button-b")
export class MicrobitStateButtonB extends LitElement {
    @property()
    public services: Services | null = null;

    /**
     * The css class to use when released
     */
    @property()
    public releaseClass: string = "microbit-release";

    /**
     * The css class to use when short-pressed
     */
    @property()
    public shortPressClass: string = "microbit-short-press";

    /**
     * The css class to use when long-pressed
     */
    @property()
    public longPressClass: string = "microbit-long-press";

    @property({ attribute: false, reflect: false })
    public className = this.releaseClass;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        return html`
            <span class=${this.className}>
                <slot />
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
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }

        const service = this.services.buttonService;
        const state = await service.readButtonBState();
        this.setClassName(state);
        await service.addEventListener("buttonbstatechanged", event => this.setClassName(event.detail));
    }

    private setClassName(state: number) {
        this.className = state === 1 ? this.shortPressClass
        : state === 2 ? this.longPressClass
        : this.releaseClass;
    }
}
