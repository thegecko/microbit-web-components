'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0d894813.js');
const __chunk_2 = require('./chunk-6ce037e1.js');

class MicrobitTemperature {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        __chunk_2.microbitStore.addListener(this);
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
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "services": ["servicesUpdated"]
    }; }
}

exports.microbit_temperature = MicrobitTemperature;
