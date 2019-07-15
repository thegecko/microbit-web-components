'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitManufacturer {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no manufacturer name
         */
        this.noInfo = "No manufacturer name found";
        __chunk_2.microbitStore.addListener(this);
    }
    render() {
        return this.deviceInformation ? this.deviceInformation.manufacturer || this.noInfo : this.disconnectedText;
    }
    get el() { return __chunk_1.getElement(this); }
}

exports.microbit_manufacturer = MicrobitManufacturer;
