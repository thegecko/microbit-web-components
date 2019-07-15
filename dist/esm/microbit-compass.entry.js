import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitCompass {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        this.bearing = 0;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services || !this.services.magnetometerService) {
            return;
        }
        const service = this.services.magnetometerService;
        await service.addEventListener("magnetometerbearingchanged", event => this.bearing = event.detail);
        this.bearing = await service.readMagnetometerBearing();
    }
    render() {
        const style = {
            position: "absolute",
            transform: `rotate(${this.bearing}deg)`
        };
        return (h("span", { style: style }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitCompass as microbit_compass };
