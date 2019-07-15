import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitSend {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        microbitStore.addListener(this);
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
            button = h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: () => this.sendText() });
        }
        return (h("span", null, h("input", { type: "text", disabled: this.disabled, maxLength: 20, onKeyUp: e => this.handleKey(e) }), button));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitSend as microbit_send };
