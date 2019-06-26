import { customElement, LitElement, property, html } from "lit-element";
import { requestMicrobit, getServices } from "microbit-web-bluetooth";
import { microbitStore } from "../microbit-store";

@customElement("microbit-connect")
export class MicrobitConnect extends LitElement {

    @property()
    public device?: BluetoothDevice | null = null;

    /**
     * The button label to connect
     */
    @property()
    public connectLabel: string = "Connect";

    /**
     * The button label to disconnect
     */
    @property()
    public disconnectLabel: string = "Disconnect";

    public createRenderRoot() {
        return this;
    }

    public render() {
        return html`<button @click=${this.connectDisconnect}>${this.getLabel()}</button>`;
    }

    private getLabel() {
        return this.device ? this.disconnectLabel : this.connectLabel;
    }

    private async connectDisconnect() {
        if (this.device) {
            if (this.device.gatt!.connected) {
                await this.device.gatt!.disconnect();
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
