import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitDfu {
    constructor() {
        this.services = null;
        /**
         * The button label to initiate DFU mode
         */
        this.dfuLabel = "Initiate DFU";
        this.disabled = true;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.dfuControlService;
    }
    async calibrate() {
        if (this.services.dfuControlService) {
            await this.services.dfuControlService.requestDfu();
        }
    }
    render() {
        return (h("button", { disabled: this.disabled, onClick: () => this.calibrate() }, this.dfuLabel));
    }
    static get is() { return "microbit-dfu"; }
    static get properties() { return {
        "services": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "Services",
                "resolved": "Services",
                "references": {
                    "Services": {
                        "location": "import",
                        "path": "microbit-web-bluetooth"
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
        "dfuLabel": {
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
                "text": "The button label to initiate DFU mode"
            },
            "attribute": "dfu-label",
            "reflect": false,
            "defaultValue": "\"Initiate DFU\""
        }
    }; }
    static get states() { return {
        "disabled": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "services",
            "methodName": "servicesUpdated"
        }]; }
}
