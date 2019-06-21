import { Component, Prop, Element, Watch, State } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../../microbit-store';

@Component({
    tag: 'microbit-state-button-a'
})
export class MicrobitStateButtonA {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element() el;
    @Prop({mutable: true}) services: Services = null;

    /**
     * The css class to use when released
     */
    @Prop() releaseClass: string = "microbit-release";

    /**
     * The css class to use when short-pressed
     */
    @Prop() shortPressClass: string = "microbit-short-press";

    /**
     * The css class to use when long-pressed
     */
    @Prop() longPressClass: string = "microbit-long-press";

    @State() className = this.releaseClass;

    @Watch('services')
    async watchHandler() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }

        const service = this.services.buttonService;
        const state = await service.readButtonAState();
        this.setClassName(state);
        await service.addEventListener("buttonastatechanged", event => this.setClassName(event.detail));
    }

    render() {
        return (
            <span class={this.className}>
                <slot />
            </span>
        );
    }

    private setClassName(state: number) {
        this.className = state === 1 ? this.shortPressClass
        : state === 2 ? this.longPressClass
        : this.releaseClass;
    }
}
