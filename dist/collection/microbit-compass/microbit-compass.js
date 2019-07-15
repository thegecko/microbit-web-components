import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitCompass {
    constructor() {
        this.services = null;
        this.bearing = 0;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }
        const service = this.services.magnetometerService;
        await service.addEventListener("magnetometerbearingchanged", event => this.bearing = event.detail);
        this.bearing = await service.readMagnetometerBearing();
    }
    render() {
        const style = {
            position: "absolute",
            transform: `rotate(${this.bearing}deg)`
        };
        return (h("span", { style: style },
            h("slot", null)));
    }
    static get is() { return "microbit-compass"; }
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
        }
    }; }
    static get states() { return {
        "bearing": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "services",
            "methodName": "servicesUpdated"
        }]; }
}
