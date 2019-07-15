'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitButtonB {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.services = null;
        /**
         * The CSS class to use when released
         */
        this.releaseClass = "microbit-release";
        /**
         * The CSS class to use when short-pressed
         */
        this.shortPressClass = "microbit-short-press";
        /**
         * The CSS class to use when long-pressed
         */
        this.longPressClass = "microbit-long-press";
        this.className = this.releaseClass;
        __chunk_2.microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }
        const service = this.services.buttonService;
        await service.addEventListener("buttonbstatechanged", event => this.setClassName(event.detail));
        this.setClassName(await service.readButtonBState());
    }
    setClassName(state) {
        this.className = state === 1 ? this.shortPressClass
            : state === 2 ? this.longPressClass
                : this.releaseClass;
    }
    render() {
        return (__chunk_1.h("span", { class: this.className }, __chunk_1.h("slot", null)));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_button_b = MicrobitButtonB;
