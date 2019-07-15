import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitConnection {
    constructor() {
        this.device = null;
        /**
         * The CSS class to use when connected
         */
        this.connectedClass = "microbit-connected";
        /**
         * The CSS class to use when disconnected
         */
        this.disconnectedClass = "microbit-disconnected";
        microbitStore.addListener(this);
    }
    render() {
        const className = this.device ? this.connectedClass : this.disconnectedClass;
        return (h("span", { class: className },
            h("slot", null)));
    }
    static get is() { return "microbit-connection"; }
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
        "connectedClass": {
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
                "text": "The CSS class to use when connected"
            },
            "attribute": "connected-class",
            "reflect": false,
            "defaultValue": "\"microbit-connected\""
        },
        "disconnectedClass": {
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
                "text": "The CSS class to use when disconnected"
            },
            "attribute": "disconnected-class",
            "reflect": false,
            "defaultValue": "\"microbit-disconnected\""
        }
    }; }
    static get elementRef() { return "el"; }
}
