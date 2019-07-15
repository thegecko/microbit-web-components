import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitName {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.device = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        microbitStore.addListener(this);
    }
    render() {
        return this.device ? this.device.name : this.disconnectedText;
    }
    get el() { return getElement(this); }
}

export { MicrobitName as microbit_name };
