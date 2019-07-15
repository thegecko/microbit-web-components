import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitSerial = /** @class */ (function () {
    function MicrobitSerial(hostRef) {
        registerInstance(this, hostRef);
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no serial number
         */
        this.noInfo = "No serial number found";
        microbitStore.addListener(this);
    }
    MicrobitSerial.prototype.render = function () {
        return this.deviceInformation ? this.deviceInformation.serialNumber || this.noInfo : this.disconnectedText;
    };
    Object.defineProperty(MicrobitSerial.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitSerial;
}());
export { MicrobitSerial as microbit_serial };
