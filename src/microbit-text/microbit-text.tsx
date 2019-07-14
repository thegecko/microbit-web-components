import { h, Component, Prop, Element, State, Watch, JSX } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-text'
})
export class MicrobitText {
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
     * The speed to scroll the text
     */
    @Prop()
    public scrollDelay: number = 100;

    @State()
    protected disabled = true;

    private text = "";

    @Watch('services')
    protected async servicesUpdated() {
        this.disabled = !this.services || !this.services.ledService;

        if (this.services && this.services.ledService) {
            await this.services.ledService.setScrollingDelay(this.scrollDelay);
        }
    }

    private handleKey(event) {
        if (event.keyCode == 13) {
            this.writeText();
        } else {
            this.text = event.target.value;
        }
    }

    private async writeText() {
        await this.services.ledService.writeText(this.text);
    }

    public render() {
        let button: JSX.Element;
        
        if (this.buttonLabel) {
            button = <input
                type="submit"
                disabled={this.disabled}
                value={this.buttonLabel}
                onClick={() => this.writeText()}></input>;
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
