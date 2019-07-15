import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitCalibrate {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The button label to calibrate
         */
        this.calibrateLabel = "Calibrate";
        this.disabled = true;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        this.disabled = !this.services || !this.services.magnetometerService;
    }
    async calibrate() {
        if (this.services.magnetometerService) {
            await this.services.magnetometerService.calibrate();
        }
    }
    render() {
        return (h("button", { disabled: this.disabled, onClick: () => this.calibrate() }, this.calibrateLabel));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitCalibrate as microbit_calibrate };
