import { microbitStore } from '../microbit-store';
export class MicrobitName {
    constructor() {
        this.device = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        microbitStore.addListener(this);
    }
    render() {
        return this.device ? this.device.name : this.disconnectedText;
    }
    static get is() { return "microbit-name"; }
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
        }
    }; }
    static get elementRef() { return "el"; }
}
