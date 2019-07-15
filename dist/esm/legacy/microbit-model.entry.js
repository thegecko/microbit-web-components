import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitModel = /** @class */ (function () {
    function MicrobitModel(hostRef) {
        registerInstance(this, hostRef);
        this.deviceInformation = null;
        /**
         * The text shown when disconnected
         */
        this.disconnectedText = "Disconnected";
        /**
         * The text shown when no model number
         */
        this.noInfo = "No model number found";
        microbitStore.addListener(this);
    }
    MicrobitModel.prototype.render = function () {
        return this.deviceInformation ? this.deviceInformation.modelNumber || this.noInfo : this.disconnectedText;
    };
    Object.defineProperty(MicrobitModel.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitModel;
}());
export { MicrobitModel as microbit_model };
