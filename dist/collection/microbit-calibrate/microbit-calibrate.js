import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitCalibrate {
    constructor() {
        this.services = null;
        /**
         * The button label to calibrate
         */
        this.calibrateLabel = "Calibrate";
        this.disabled = true;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.magnetometerService;
    }
    async calibrate() {
        if (this.services.magnetometerService) {
            await this.services.magnetometerService.calibrate();
        }
    }
    render() {
        return (h("button", { disabled: this.disabled, onClick: () => this.calibrate() }, this.calibrateLabel));
    }
    static get is() { return "microbit-calibrate"; }
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
        "calibrateLabel": {
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
                "text": "The button label to calibrate"
            },
            "attribute": "calibrate-label",
            "reflect": false,
            "defaultValue": "\"Calibrate\""
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
