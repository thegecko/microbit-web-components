'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitMovement {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        __chunk_2.microbitStore.addListener(this);
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
        return (__chunk_1.h("span", { class: this.className }, __chunk_1.h("slot", null)));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_movement = MicrobitMovement;
