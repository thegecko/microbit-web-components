import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitManufacturer = /** @class */ (function () {
    function MicrobitManufacturer(hostRef) {
        registerInstance(this, hostRef);
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no manufacturer name
         */
        this.noInfo = "No manufacturer name found";
        microbitStore.addListener(this);
    }
    MicrobitManufacturer.prototype.render = function () {
        return this.deviceInformation ? this.deviceInformation.manufacturer || this.noInfo : this.disconnectedText;
    };
    Object.defineProperty(MicrobitManufacturer.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitManufacturer;
}());
export { MicrobitManufacturer as microbit_manufacturer };
