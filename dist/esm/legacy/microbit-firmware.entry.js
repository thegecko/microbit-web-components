import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitFirmware = /** @class */ (function () {
    function MicrobitFirmware(hostRef) {
        registerInstance(this, hostRef);
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no firmware version
         */
        this.noInfo = "No firmware version found";
        microbitStore.addListener(this);
    }
    MicrobitFirmware.prototype.render = function () {
        return this.deviceInformation ? this.deviceInformation.firmwareRevision || this.noInfo : this.disconnectedText;
    };
    Object.defineProperty(MicrobitFirmware.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitFirmware;
}());
export { MicrobitFirmware as microbit_firmware };
