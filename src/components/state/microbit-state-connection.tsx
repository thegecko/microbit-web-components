import { Component, Prop, Element } from "@stencil/core";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-state-connection'
})
export class MicrobitStateConnection {
    @Element() el;
    @Prop() device: BluetoothDevice = undefined;

    /**
     * The css class to use when connected
     */
    @Prop() connectedClass: string = "microbit-connected";

    /**
     * The css class to use when disconnected
     */
    @Prop() disconnectedClass: string = "microbit-disconnected";

    render() {
        const className = this.device ? this.connectedClass : this.disconnectedClass;
        return (
            <span class={className}>
                <slot />
            </span>
        );
    }
}

DeviceTunnel.injectProps(MicrobitStateConnection, ['device']);
