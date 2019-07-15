'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitDfu {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.services = null;
        /**
         * The button label to initiate DFU mode
         */
        this.dfuLabel = "Initiate DFU";
        this.disabled = true;
        __chunk_2.microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.dfuControlService;
    }
    async calibrate() {
        if (this.services.dfuControlService) {
            await this.services.dfuControlService.requestDfu();
        }
    }
    render() {
        return (__chunk_1.h("button", { disabled: this.disabled, onClick: () => this.calibrate() }, this.dfuLabel));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_dfu = MicrobitDfu;
