import { h, Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-receive'
})
export class MicrobitReceive {
    constructor() {
        microbitStore.addListener(this);
    }

    @Element()
    protected el;

    @Prop({mutable: true})
    public services: Services = null;

    @State()
    protected disabled = true;

    @State()
    protected data: string = "";

    @Watch('services')
    protected async servicesUpdated() {
        this.disabled = !this.services || !this.services.uartService;

        const service = this.services.uartService;

        if (!service) {
            this.data = "";
            return;
        }

        await service.addEventListener("receiveText", event => this.data += event.detail);
    }

    public render() {
        const style = {
            whiteSpace: 'pre'
        };
        return (
            <span style={style}>
                {this.data}
            </span>
        );
    }
}
