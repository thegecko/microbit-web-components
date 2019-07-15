import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';

class MicrobitTemperature {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The interval to check the temperature (ms)
         */
        this.temperaturePeriod = 100;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no temperature
         */
        this.noTemperature = "No temperature found";
        /**
         * The text to display after the temperature
         */
        this.temperatureSuffix = "°c";
        this.temperature = this.disconnectedText;
        microbitStore.addListener(this);
    }
    async servicesUpdated() {
        if (!this.services) {
            this.temperature = this.disconnectedText;
            return;
        }
        const service = this.services.temperatureService;
        if (!service) {
            this.temperature = this.noTemperature;
            return;
        }
        const temperature = await service.readTemperature();
        this.temperature = `${temperature}${this.temperatureSuffix}`;
        await service.setTemperaturePeriod(this.temperaturePeriod);
        await service.addEventListener("temperaturechanged", temp => this.temperature = `${temp.detail}${this.temperatureSuffix}`);
    }
    render() {
        return this.temperature;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

export { MicrobitTemperature as microbit_temperature };
