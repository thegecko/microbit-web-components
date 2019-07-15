var Store = /** @class */ (function () {
    function Store() {
        this.data = {};
        this.listeners = [];
    }
    Store.prototype._update = function (key, value) {
        this.data[key.toString()] = value;
        this.listeners.forEach(function (listener) {
            if (listener[key] !== undefined) {
                listener[key] = value;
            }
        });
    };
    Store.prototype.addListener = function (listener) {
        var _this = this;
        this.listeners.push(listener);
        Object.keys(this.data).forEach(function (key) {
            if (listener[key] !== undefined) {
                listener[key] = _this.data[key];
            }
        });
    };
    Store.prototype.update = function (key, value) {
        this._update(key, value);
    };
    Store.prototype.empty = function () {
        var _this = this;
        Object.keys(this.data).forEach(function (key) {
            _this._update(key, null);
        });
    };
    return Store;
}());
var microbitStore = new Store();
export { microbitStore as m };
