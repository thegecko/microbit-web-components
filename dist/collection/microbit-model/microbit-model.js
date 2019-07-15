import { microbitStore } from '../microbit-store';
export class MicrobitModel {
    constructor() {
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no model number
         */
        this.noInfo = "No model number found";
        microbitStore.addListener(this);
    }
    render() {
        return this.deviceInformation ? this.deviceInformation.modelNumber || this.noInfo : this.disconnectedText;
    }
    static get is() { return "microbit-model"; }
    static get properties() { return {
        "deviceInformation": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "DeviceInformation",
                "resolved": "DeviceInformation",
                "references": {
                    "DeviceInformation": {
                        "location": "import",
                        "path": "microbit-web-bluetooth/types/services/device-information"
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
        "disconnectedText": {
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
                "text": "The text shown when disconnected"
            },
            "attribute": "disconnected-text",
            "reflect": false,
            "defaultValue": "\"Disconnected\""
        },
        "noInfo": {
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
                "text": "The text shown when no model number"
            },
            "attribute": "no-info",
            "reflect": false,
            "defaultValue": "\"No model number found\""
        }
    }; }
    static get elementRef() { return "el"; }
}
