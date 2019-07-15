import { microbitStore } from '../microbit-store';
export class MicrobitMatrix {
    constructor() {
        this.services = null;
        /**
         * The template for identifying child LEDs
         */
        this.idTemplate = "microbit-matrix-${row}-${column}";
        /**
         * The CSS class for off LEDs
         */
        this.offClass = "microbit-matrix-off";
        /**
         * The CSS class for on LEDs
         */
        this.onClass = "microbit-matrix-on";
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        const els = [[], [], [], [], []];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const id = this.idTemplate.replace("${row}", i.toString()).replace("${column}", j.toString());
                const led = document.getElementById(id);
                if (led) {
                    els[i][j] = led;
                    led.onclick = () => this.toggle(i, j);
                    led.classList.toggle(this.onClass, false);
                    led.classList.toggle(this.offClass, false);
                }
            }
        }
        this.elements = els;
        if (!this.services || !this.services.ledService) {
            return;
        }
        this.matrix = await this.services.ledService.readMatrixState();
        await this.updateMatrix();
    }
    async toggle(row, column) {
        this.matrix[row][column] = !this.matrix[row][column];
        await this.services.ledService.writeMatrixState(this.matrix);
        this.updateMatrix();
    }
    updateMatrix() {
        this.matrix.forEach((rows, row) => {
            rows.forEach((value, column) => {
                const led = this.elements[row][column];
                if (led) {
                    led.classList.toggle(this.onClass, value);
                    led.classList.toggle(this.offClass, !value);
                }
            });
        });
    }
    static get is() { return "microbit-matrix"; }
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
        "idTemplate": {
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
                "text": "The template for identifying child LEDs"
            },
            "attribute": "id-template",
            "reflect": false,
            "defaultValue": "\"microbit-matrix-${row}-${column}\""
        },
        "offClass": {
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
                "text": "The CSS class for off LEDs"
            },
            "attribute": "off-class",
            "reflect": false,
            "defaultValue": "\"microbit-matrix-off\""
        },
        "onClass": {
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
                "text": "The CSS class for on LEDs"
            },
            "attribute": "on-class",
            "reflect": false,
            "defaultValue": "\"microbit-matrix-on\""
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "services",
            "methodName": "servicesUpdated"
        }]; }
}
