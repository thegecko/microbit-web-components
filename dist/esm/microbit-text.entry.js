import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitText {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The text shown on the button
         */
        this.buttonLabel = "";
        /**
         * The speed to scroll the text
         */
        this.scrollDelay = 100;
        this.disabled = true;
        this.text = "";
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.ledService;
        if (this.services && this.services.ledService) {
            await this.services.ledService.setScrollingDelay(this.scrollDelay);
        }
    }
    handleKey(event) {
        if (event.keyCode == 13) {
            this.writeText();
        }
        else {
            this.text = event.target.value;
        }
    }
    async writeText() {
        await this.services.ledService.writeText(this.text);
    }
    render() {
        let button;
        if (this.buttonLabel) {
            button = h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: () => this.writeText() });
        }
        return (h("span", null, h("input", { type: "text", disabled: this.disabled, maxLength: 20, onKeyUp: e => this.handleKey(e) }), button));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitText as microbit_text };
