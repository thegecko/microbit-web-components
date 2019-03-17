import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-text'
})
export class MicrobitText {
    @Element() el;
    @Prop() services: Services = undefined;

    /**
     * The text shown on the button
     */
    @Prop() buttonText: string = "Write";

    /**
     * The speed to scroll the text
     */
    @Prop() scrollDelay: number = 100;

    @State() disabled = true;

    private text = "";

    @Watch('services')
    async watchHandler() {
        this.disabled = !this.services || !this.services.ledService;

        if (this.services && this.services.ledService) {
            await this.services.ledService.setScrollingDelay(this.scrollDelay);
        }
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input type="input" disabled={this.disabled} maxLength={20} onChange={text => this.handleChange(text)}></input>
                <input type="submit" disabled={this.disabled} value={this.buttonText}></input>
            </form>
        );
    }

    private handleChange(event) {
        this.text = event.target.value;
    }

    private handleSubmit(event) {
        event.preventDefault();
        this.services.ledService.writeText(this.text);
    }
}

DeviceTunnel.injectProps(MicrobitText, ['services']);
