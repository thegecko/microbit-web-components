import { Component, Prop, Element, State, Watch } from "@stencil/core";
import { Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-receive'
})
export class MicrobitReceive {
    @Element() el;
    @Prop() services: Services = undefined;

    @State() disabled = true;
    @State() data: string = "";

    @Watch('services')
    async watchHandler() {
        this.disabled = !this.services || !this.services.uartService;

        const service = this.services.uartService;

        if (!service) {
            this.data = "";
            return;
        }

        await service.addEventListener("receiveText", event => this.data += event.detail);
    }

    render() {
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

DeviceTunnel.injectProps(MicrobitReceive, ['services']);
