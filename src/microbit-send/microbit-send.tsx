import { h, Component, Prop, Element, State, Watch, JSX } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-send'
})
export class MicrobitSend {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    /**
     * The text shown on the button
     */
    @Prop()
    public buttonLabel: string = "";

    /**
     * The delimiter to use
     */
    @Prop()
    public delimiter: string = "";

    @State()
    protected disabled = true;

    private text = "";

    @Watch('services')
    protected async servicesUpdated() {
        this.disabled = !this.services || !this.services.uartService;
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

    public render() {
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
                    type="text"
                    disabled={this.disabled}
                    maxLength={20}
                    onKeyUp={e => this.handleKey(e)}></input>
                {button}
            </span>
        );
    }
}
