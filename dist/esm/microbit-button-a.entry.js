import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitButtonA {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.buttonService) {
            this.className = this.releaseClass;
            return;
        }
        const service = this.services.buttonService;
        await service.addEventListener("buttonastatechanged", event => this.setClassName(event.detail));
        this.setClassName(await service.readButtonAState());
    }
    setClassName(state) {
        this.className = state === 1 ? this.shortPressClass
            : state === 2 ? this.longPressClass
                : this.releaseClass;
    }
    render() {
        return (h("span", { class: this.className }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitButtonA as microbit_button_a };
