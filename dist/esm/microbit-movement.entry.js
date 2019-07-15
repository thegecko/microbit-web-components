import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitMovement {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The sensitivity of the sensor
         */
        this.sensitivity = 1;
        /**
         * The frequency to read the sensor
         */
        this.frequency = 20;
        /**
         * The CSS class to use when still
         */
        this.stillClass = "microbit-still";
        /**
         * The CSS class to use when moved
         */
        this.movedClass = "microbit-moved";
        this.className = this.stillClass;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.accelerometerService) {
            this.className = this.stillClass;
            return;
        }
        const service = this.services.accelerometerService;
        await service.setAccelerometerPeriod(this.frequency);
        const data = await service.readAccelerometerData();
        this.setClassName(data);
        await service.addEventListener("accelerometerdatachanged", event => this.setClassName(event.detail));
    }
    setClassName(data) {
        this.className =
            (Math.abs(data.x) > this.sensitivity
                || Math.abs(data.y) > this.sensitivity
                || Math.abs(data.z) > this.sensitivity) ? this.movedClass
                : this.stillClass;
    }
    render() {
        return (h("span", { class: this.className }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitMovement as microbit_movement };
