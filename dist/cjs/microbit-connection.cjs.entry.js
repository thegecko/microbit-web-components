'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitConnection {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.device = null;
        /**
         * The CSS class to use when connected
         */
        this.connectedClass = "microbit-connected";
        /**
         * The CSS class to use when disconnected
         */
        this.disconnectedClass = "microbit-disconnected";
        __chunk_2.microbitStore.addListener(this);
    }
    render() {
        const className = this.device ? this.connectedClass : this.disconnectedClass;
        return (__chunk_1.h("span", { class: className }, __chunk_1.h("slot", null)));
    }
    get el() { return __chunk_1.getElement(this); }
}

exports.microbit_connection = MicrobitConnection;
