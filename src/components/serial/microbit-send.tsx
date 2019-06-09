import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-send'
})
export class MicrobitSend {
    @Element() el;
    @Prop() services: Services = undefined;

    /**
     * The text shown on the button
     */
    @Prop() buttonLabel: string = "";

    /**
     * The delimiter to use
     */
    @Prop() delimiter: string = "";

    @State() disabled = true;

    private text = "";

    @Watch('services')
    async watchHandler() {
        this.disabled = !this.services || !this.services.uartService;
    }

    render() {
        let button: JSX.Element;
        
        if (this.buttonLabel) {
            button = <input
                type="submit"
                disabled={this.disabled}
                value={this.buttonLabel}
                onClick={() => this.sendText()}></input>;
        }

        return (
            <span>
                <input
                    type="input"
                    disabled={this.disabled}
                    maxLength={20}
                    onKeyUp={e => this.handleKey(e)}></input>
                {button}
            </span>
        );
    }

    private handleKey(event) {
        if (event.keyCode == 13) {
            this.sendText();
        } else {
            this.text = event.target.value;
        }
    }

    private async sendText() {
        const text = `${this.text}${this.delimiter}`;
        await this.services.uartService.sendText(text);
    }
}

DeviceTunnel.injectProps(MicrobitSend, ['services']);
