import { h } from "@stencil/core";
import { microbitStore } from '../microbit-store';
export class MicrobitButtonA {
    constructor() {
        this.services = null;
        /**
         * The CSS class to use when released
         */
        this.releaseClass = "microbit-release";
        /**
         * The CSS class to use when short-pressed
         */
        this.shortPressClass = "microbit-short-press";
        /**
         * The CSS class to use when long-pressed
         */
        this.longPressClass = "microbit-long-press";
        this.className = this.releaseClass;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }
        const service = this.services.buttonService;
        await service.addEventListener("buttonastatechanged", event => this.setClassName(event.detail));
        this.setClassName(await service.readButtonAState());
    }
    setClassName(state) {
        this.className = state === 1 ? this.shortPressClass
            : state === 2 ? this.longPressClass
                : this.releaseClass;
    }
    render() {
        return (h("span", { class: this.className },
            h("slot", null)));
    }
    static get is() { return "microbit-button-a"; }
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
        "releaseClass": {
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
                "text": "The CSS class to use when released"
            },
            "attribute": "release-class",
            "reflect": false,
            "defaultValue": "\"microbit-release\""
        },
        "shortPressClass": {
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
                "text": "The CSS class to use when short-pressed"
            },
            "attribute": "short-press-class",
            "reflect": false,
            "defaultValue": "\"microbit-short-press\""
        },
        "longPressClass": {
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
                "text": "The CSS class to use when long-pressed"
            },
            "attribute": "long-press-class",
            "reflect": false,
            "defaultValue": "\"microbit-long-press\""
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
