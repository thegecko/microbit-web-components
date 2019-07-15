'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitCalibrate {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.services = null;
        /**
         * The button label to calibrate
         */
        this.calibrateLabel = "Calibrate";
        this.disabled = true;
        __chunk_2.microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.magnetometerService;
    }
    async calibrate() {
        if (this.services.magnetometerService) {
            await this.services.magnetometerService.calibrate();
        }
    }
    render() {
        return (__chunk_1.h("button", { disabled: this.disabled, onClick: () => this.calibrate() }, this.calibrateLabel));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_calibrate = MicrobitCalibrate;
