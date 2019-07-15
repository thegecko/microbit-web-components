import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitName = /** @class */ (function () {
    function MicrobitName(hostRef) {
        registerInstance(this, hostRef);
        this.device = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        microbitStore.addListener(this);
    }
    MicrobitName.prototype.render = function () {
        return this.device ? this.device.name : this.disconnectedText;
    };
    Object.defineProperty(MicrobitName.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitName;
}());
export { MicrobitName as microbit_name };
