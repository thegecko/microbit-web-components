import { h } from "@stencil/core";
import { requestMicrobit, getServices } from "microbit-web-bluetooth";
import { microbitStore } from '../microbit-store';
export class MicrobitConnect {
    constructor() {
        this.device = null;
        /**
         * The button label to connect
         */
        this.connectLabel = "Connect";
        /**
         * The button label to disconnect
         */
        this.disconnectLabel = "Disconnect";
    }
    getLabel() {
        return this.device ? this.disconnectLabel : this.connectLabel;
    }
    async connectDisconnect() {
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
    render() {
        return (h("button", { onClick: () => this.connectDisconnect() }, this.getLabel()));
    }
    static get is() { return "microbit-connect"; }
    static get properties() { return {
        "device": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "BluetoothDevice",
                "resolved": "BluetoothDevice",
                "references": {
                    "BluetoothDevice": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "null"
        },
        "connectLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The button label to connect"
            },
            "attribute": "connect-label",
            "reflect": false,
            "defaultValue": "\"Connect\""
        },
        "disconnectLabel": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The button label to disconnect"
            },
            "attribute": "disconnect-label",
            "reflect": false,
            "defaultValue": "\"Disconnect\""
        }
    }; }
    static get elementRef() { return "el"; }
}
