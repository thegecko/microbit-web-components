'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitSend {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.services = null;
        /**
         * The text shown on the button
         */
        this.buttonLabel = "";
        /**
         * The delimiter to use
         */
        this.delimiter = "";
        this.disabled = true;
        this.text = "";
        __chunk_2.microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.uartService;
    }
    handleKey(event) {
        if (event.keyCode == 13) {
            this.sendText();
        }
        else {
            this.text = event.target.value;
        }
    }
    async sendText() {
        const text = `${this.text}${this.delimiter}`;
        await this.services.uartService.sendText(text);
    }
    render() {
        let button;
        if (this.buttonLabel) {
            button = __chunk_1.h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: () => this.sendText() });
        }
        return (__chunk_1.h("span", null, __chunk_1.h("input", { type: "text", disabled: this.disabled, maxLength: 20, onKeyUp: e => this.handleKey(e) }), button));
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_send = MicrobitSend;
