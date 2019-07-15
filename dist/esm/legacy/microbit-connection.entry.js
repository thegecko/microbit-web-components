import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitConnection = /** @class */ (function () {
    function MicrobitConnection(hostRef) {
        registerInstance(this, hostRef);
        this.device = null;
        /**
         * The CSS class to use when connected
         */
        this.connectedClass = "microbit-connected";
        /**
         * The CSS class to use when disconnected
         */
        this.disconnectedClass = "microbit-disconnected";
        microbitStore.addListener(this);
    }
    MicrobitConnection.prototype.render = function () {
        var className = this.device ? this.connectedClass : this.disconnectedClass;
        return (h("span", { class: className }, h("slot", null)));
    };
    Object.defineProperty(MicrobitConnection.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitConnection;
}());
export { MicrobitConnection as microbit_connection };
