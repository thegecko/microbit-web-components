import { Component, Prop, Element } from "@stencil/core";
import { requestMicrobit, getServices, Services } from "microbit-web-bluetooth";
import DeviceTunnel from '../../data/device-tunnel';

@Component({
    tag: 'microbit-connect',
    styleUrl: 'microbit-connect.css',
    shadow: true
})
export class MicrobitConnect {
    @Element() el;
    @Prop() device: BluetoothDevice = undefined;
    @Prop() setDevice: (device: BluetoothDevice) => void;
    @Prop() setServices: (services: Services) => void;

    /**
     * The button label to connect
     */
    @Prop() connectLabel: string = "Connect"

    /**
     * The button label to disconnect
     */
    @Prop() disconnectLabel: string = "Disconnect"

    render() {
        return (
            <button onClick={() => this.connectDisconnect()}>{this.getLabel()}</button>
        );
    }

    private getLabel() {
        return this.device ? this.disconnectLabel : this.connectLabel;
    }

    private async connectDisconnect() {
        if (this.device) {
            if (this.device.gatt.connected) {
                await this.device.gatt.disconnect();
            }
            this.setDevice(undefined);
            return;
        }

        const device = await requestMicrobit(window.navigator.bluetooth);
        if (device) {
            this.setDevice(device);
            const services = await getServices(device);
            this.setServices(services);
        }
    }
}

DeviceTunnel.injectProps(MicrobitConnect, ['device', 'setDevice', 'setServices']);
