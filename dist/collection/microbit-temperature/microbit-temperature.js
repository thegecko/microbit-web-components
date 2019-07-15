import { microbitStore } from '../microbit-store';
export class MicrobitTemperature {
    constructor() {
        this.services = null;
        /**
         * The interval to check the temperature (ms)
         */
        this.temperaturePeriod = 100;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no temperature
         */
        this.noTemperature = "No temperature found";
        /**
         * The text to display after the temperature
         */
        this.temperatureSuffix = "°c";
        this.temperature = this.disconnectedText;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services) {
            this.temperature = this.disconnectedText;
            return;
        }
        const service = this.services.temperatureService;
        if (!service) {
            this.temperature = this.noTemperature;
            return;
        }
        const temperature = await service.readTemperature();
        this.temperature = `${temperature}${this.temperatureSuffix}`;
        await service.setTemperaturePeriod(this.temperaturePeriod);
        await service.addEventListener("temperaturechanged", temp => this.temperature = `${temp.detail}${this.temperatureSuffix}`);
    }
    render() {
        return this.temperature;
    }
    static get is() { return "microbit-temperature"; }
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
        "temperaturePeriod": {
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
                "text": "The interval to check the temperature (ms)"
            },
            "attribute": "temperature-period",
            "reflect": false,
            "defaultValue": "100"
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
        },
        "noTemperature": {
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
                "text": "The text shown when no temperature"
            },
            "attribute": "no-temperature",
            "reflect": false,
            "defaultValue": "\"No temperature found\""
        },
        "temperatureSuffix": {
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
                "text": "The text to display after the temperature"
            },
            "attribute": "temperature-suffix",
            "reflect": false,
            "defaultValue": "\"\u00B0c\""
        }
    }; }
    static get states() { return {
        "temperature": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "services",
            "methodName": "servicesUpdated"
        }]; }
}
