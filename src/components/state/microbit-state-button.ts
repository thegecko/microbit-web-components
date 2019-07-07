import { LitElement, property, html } from "lit-element";
import { Services } from "microbit-web-bluetooth";
import { ButtonService } from "microbit-web-bluetooth/types/services/button";
import { microbitStore } from "../../microbit-store";

export abstract class MicrobitStateButton extends LitElement {
    @property()
    public services: Services | null = null;

    /**
     * The CSS variable to use for the background when released
     */
    @property()
    public releaseBackground: string = "microbit-button-release";

    /**
     * The CSS variable to use for the background when short-pressed
     */
    @property()
    public shortPressBackground: string = "microbit-button-short-press";

    /**
     * The CSS variable to use for the background when long-pressed
     */
    @property()
    public longPressBackground: string = "microbit-button-long-press";

    protected background = this.releaseBackground;

    constructor() {
        super();
        microbitStore.addListener(this);
    }

    public render() {
        const style = `background: var(--${this.background})`;
        return html`
            <span style=${style}>
                <slot />
            </span>
        `;
    }

    public updated(changedProps: Map<string, any>) {
        super.updated(changedProps);

        if (changedProps.has("services")) {
            this.servicesUpdated();
        }
    }

    protected servicesUpdated() {
        if (!this.services || !this.services.buttonService) {
            this.background = this.releaseBackground;
            return;
        }

        this.serviceUpdate(this.services.buttonService);
    }

    protected abstract async serviceUpdate(service: ButtonService): Promise<void>;

    protected setBackground(state: number) {
        this.background = state === 1 ? this.shortPressBackground
            : state === 2 ? this.longPressBackground
            : this.releaseBackground;
        this.requestUpdate();
    }
}
