import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitDfu {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The button label to initiate DFU mode
         */
        this.dfuLabel = "Initiate DFU";
        this.disabled = true;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.dfuControlService;
    }
    async calibrate() {
        if (this.services.dfuControlService) {
            await this.services.dfuControlService.requestDfu();
        }
    }
    render() {
        return (h("button", { disabled: this.disabled, onClick: () => this.calibrate() }, this.dfuLabel));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitDfu as microbit_dfu };
