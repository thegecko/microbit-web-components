import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitHardware = /** @class */ (function () {
    function MicrobitHardware(hostRef) {
        registerInstance(this, hostRef);
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no hardware version
         */
        this.noInfo = "No hardware version found";
        microbitStore.addListener(this);
    }
    MicrobitHardware.prototype.render = function () {
        return this.deviceInformation ? this.deviceInformation.hardwareRevision || this.noInfo : this.disconnectedText;
    };
    Object.defineProperty(MicrobitHardware.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitHardware;
}());
export { MicrobitHardware as microbit_hardware };
