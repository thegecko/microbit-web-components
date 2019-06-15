import { Component, Prop, Element } from "@stencil/core";
import { requestMicrobit, getServices, Services } from "microbit-web-bluetooth";
import { DeviceInformation } from "microbit-web-bluetooth/types/services/device-information";
import DeviceTunnel from '../device-tunnel';

@Component({
    tag: 'microbit-connect'
})
export class MicrobitConnect {
    @Element() el;
    @Prop() device: BluetoothDevice = undefined;
    @Prop() setDevice: (device: BluetoothDevice) => void;
    @Prop() setServices: (services: Services) => void;
    @Prop() setDeviceInformation: (deviceInformation: DeviceInformation) => void;

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
            this.setServices(undefined);
            this.setDeviceInformation(undefined);
            return;
        }

        const device = await requestMicrobit(window.navigator.bluetooth);
        if (device) {
            this.setDevice(device);
            const services = await getServices(device);
            this.setServices(services);
            if (services.deviceInformationService) {
                const deviceInformation = await services.deviceInformationService.readDeviceInformation();
                this.setDeviceInformation(deviceInformation);
            }
            device.addEventListener("gattserverdisconnected", this.connectDisconnect.bind(this));
        }
    }
}

DeviceTunnel.injectProps(MicrobitConnect, ['device', 'setDevice', 'setServices', 'setDeviceInformation']);
