import { Component, Prop, Element } from "@stencil/core";
import DeviceTunnel from '../../device-tunnel';

@Component({
    tag: 'microbit-name'
})
export class MicrobitName {
    @Element() el;
    @Prop() device: BluetoothDevice = undefined;

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    render() {
        return this.device ? this.device.name : this.disconnectedText;
    }
}

DeviceTunnel.injectProps(MicrobitName, ['device']);
