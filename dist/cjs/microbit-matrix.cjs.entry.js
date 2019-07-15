'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitMatrix {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        __chunk_2.microbitStore.addListener(this);
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
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_matrix = MicrobitMatrix;
