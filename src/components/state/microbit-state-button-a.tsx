import { Component, Prop, Element, Watch, State } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-state-button-a'
})
export class MicrobitStateButtonA {
    @Element() el;
    @Prop() services: Services = undefined;

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
    watchHandler() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }

        const service = this.services.buttonService;
        service.addEventListener("buttonastatechanged", event => {
            this.className = event.detail === 1 ? this.shortPressClass
                : event.detail === 2 ? this.longPressClass
                : this.releaseClass;
        });
    }

    render() {
        return (
            <span class={this.className}>
                <slot />
            </span>
        );
    }
}

DeviceTunnel.injectProps(MicrobitStateButtonA, ['services']);
