'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitCompass {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.services = null;
        this.bearing = 0;
        __chunk_2.microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }
        const service = this.services.magnetometerService;
        await service.addEventListener("magnetometerbearingchanged", event => this.bearing = event.detail);
        this.bearing = await service.readMagnetometerBearing();
    }
    render() {
        const style = {
            position: "absolute",
            transform: `rotate(${this.bearing}deg)`
        };
        return (__chunk_1.h("span", { style: style }, __chunk_1.h("slot", null)));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_compass = MicrobitCompass;
