import { Component, Prop, Element } from "@stencil/core";
import DeviceTunnel from '../../data/device-tunnel';

@Component({
    tag: 'microbit-status',
    styleUrl: 'microbit-status.css',
    shadow: true
})
export class MicrobitStatus {
    @Element() el;
    @Prop() device: BluetoothDevice = undefined;

    /**
     * The text shown when connected
     */
    @Prop() connectedText: string = "Connected to ${device}";

    /**
     * The text shown when disconnected
     */
    @Prop() disconnectedText: string = "Disconnected";

    render() {
        return (
            <div>{this.getText()}</div>
        );
    }

    private getText(): string {
        return this.device ? this.connectedText.replace('${device}', this.device.name) : this.disconnectedText;
    }
}

DeviceTunnel.injectProps(MicrobitStatus, ['device', 'setDevice']);
