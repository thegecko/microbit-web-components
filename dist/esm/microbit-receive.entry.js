import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitReceive {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        this.disabled = true;
        this.data = "";
        microbitStore.addListener(this);
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
        return (h("span", { style: style }, this.data));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitReceive as microbit_receive };
