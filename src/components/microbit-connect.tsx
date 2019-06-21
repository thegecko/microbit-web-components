import { Component, Prop, Element } from "@stencil/core";
import { requestMicrobit, getServices } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';

@Component({
    tag: 'microbit-connect'
})
export class MicrobitConnect {
    @Element() el;
    @Prop({mutable: true}) device: BluetoothDevice = null;

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
            this.device = null;
            microbitStore.empty();
            return;
        }

        const device = await requestMicrobit(window.navigator.bluetooth);
        if (device) {
            this.device = device;
            microbitStore.update("device", device);
            const services = await getServices(device);
            microbitStore.update("services", services);
            if (services.deviceInformationService) {
                const deviceInformation = await services.deviceInformationService.readDeviceInformation();
                microbitStore.update("deviceInformation", deviceInformation);
            }
            device.addEventListener("gattserverdisconnected", this.connectDisconnect.bind(this));
        }
    }
}
