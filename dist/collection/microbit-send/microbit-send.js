import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitSend {
    constructor() {
        this.services = null;
        /**
         * The text shown on the button
         */
        this.buttonLabel = "";
        /**
         * The delimiter to use
         */
        this.delimiter = "";
        this.disabled = true;
        this.text = "";
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.uartService;
    }
    handleKey(event) {
        if (event.keyCode == 13) {
            this.sendText();
        }
        else {
            this.text = event.target.value;
        }
    }
    async sendText() {
        const text = `${this.text}${this.delimiter}`;
        await this.services.uartService.sendText(text);
    }
    render() {
        let button;
        if (this.buttonLabel) {
            button = h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: () => this.sendText() });
        }
        return (h("span", null,
            h("input", { type: "text", disabled: this.disabled, maxLength: 20, onKeyUp: e => this.handleKey(e) }),
            button));
    }
    static get is() { return "microbit-send"; }
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
        "buttonLabel": {
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
                "text": "The text shown on the button"
            },
            "attribute": "button-label",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "delimiter": {
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
                "text": "The delimiter to use"
            },
            "attribute": "delimiter",
            "reflect": false,
            "defaultValue": "\"\""
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
