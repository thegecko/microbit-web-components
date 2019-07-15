import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitText {
    constructor() {
        this.services = null;
        /**
         * The text shown on the button
         */
        this.buttonLabel = "";
        /**
         * The speed to scroll the text
         */
        this.scrollDelay = 100;
        this.disabled = true;
        this.text = "";
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.ledService;
        if (this.services && this.services.ledService) {
            await this.services.ledService.setScrollingDelay(this.scrollDelay);
        }
    }
    handleKey(event) {
        if (event.keyCode == 13) {
            this.writeText();
        }
        else {
            this.text = event.target.value;
        }
    }
    async writeText() {
        await this.services.ledService.writeText(this.text);
    }
    render() {
        let button;
        if (this.buttonLabel) {
            button = h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: () => this.writeText() });
        }
        return (h("span", null,
            h("input", { type: "text", disabled: this.disabled, maxLength: 20, onKeyUp: e => this.handleKey(e) }),
            button));
    }
    static get is() { return "microbit-text"; }
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
        "scrollDelay": {
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
                "text": "The speed to scroll the text"
            },
            "attribute": "scroll-delay",
            "reflect": false,
            "defaultValue": "100"
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
