import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitReceive {
    constructor() {
        this.services = null;
        this.disabled = true;
        this.data = "";
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.uartService;
        const service = this.services.uartService;
        if (!service) {
            this.data = "";
            return;
        }
        await service.addEventListener("receiveText", event => this.data += event.detail);
    }
    render() {
        const style = {
            whiteSpace: 'pre'
        };
        return (h("span", { style: style }, this.data));
    }
    static get is() { return "microbit-receive"; }
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
        "disabled": {},
        "data": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "services",
            "methodName": "servicesUpdated"
        }]; }
}
