'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitReceive {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.services = null;
        this.disabled = true;
        this.data = "";
        __chunk_2.microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.uartService;
        const service = this.services.uartService;
        if (!service) {
            this.data = "";
            return;
        }
        await service.addEventListener("receiveText", event => this.data += event.detail);
    }
    render() {
        const style = {
            whiteSpace: 'pre'
        };
        return (__chunk_1.h("span", { style: style }, this.data));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_receive = MicrobitReceive;
