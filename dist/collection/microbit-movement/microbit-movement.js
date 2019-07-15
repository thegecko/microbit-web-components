import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitMovement {
    constructor() {
        this.services = null;
        /**
         * The sensitivity of the sensor
         */
        this.sensitivity = 1;
        /**
         * The frequency to read the sensor
         */
        this.frequency = 20;
        /**
         * The CSS class to use when still
         */
        this.stillClass = "microbit-still";
        /**
         * The CSS class to use when moved
         */
        this.movedClass = "microbit-moved";
        this.className = this.stillClass;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.accelerometerService) {
            this.className = this.stillClass;
            return;
        }
        const service = this.services.accelerometerService;
        await service.setAccelerometerPeriod(this.frequency);
        const data = await service.readAccelerometerData();
        this.setClassName(data);
        await service.addEventListener("accelerometerdatachanged", event => this.setClassName(event.detail));
    }
    setClassName(data) {
        this.className =
            (Math.abs(data.x) > this.sensitivity
                || Math.abs(data.y) > this.sensitivity
                || Math.abs(data.z) > this.sensitivity) ? this.movedClass
                : this.stillClass;
    }
    render() {
        return (h("span", { class: this.className },
            h("slot", null)));
    }
    static get is() { return "microbit-movement"; }
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
        "sensitivity": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The sensitivity of the sensor"
            },
            "attribute": "sensitivity",
            "reflect": false,
            "defaultValue": "1"
        },
        "frequency": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The frequency to read the sensor"
            },
            "attribute": "frequency",
            "reflect": false,
            "defaultValue": "20"
        },
        "stillClass": {
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
                "text": "The CSS class to use when still"
            },
            "attribute": "still-class",
            "reflect": false,
            "defaultValue": "\"microbit-still\""
        },
        "movedClass": {
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
                "text": "The CSS class to use when moved"
            },
            "attribute": "moved-class",
            "reflect": false,
            "defaultValue": "\"microbit-moved\""
        }
    }; }
    static get states() { return {
        "className": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "services",
            "methodName": "servicesUpdated"
        }]; }
}
