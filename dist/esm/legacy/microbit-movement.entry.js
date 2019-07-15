var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitMovement = /** @class */ (function () {
    function MicrobitMovement(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The sensitivity of the sensor
         */
        this.sensitivity = 1;
        /**
         * The frequency to read the sensor
         */
        this.frequency = 20;
        /**
         * The CSS class to use when still
         */
        this.stillClass = "microbit-still";
        /**
         * The CSS class to use when moved
         */
        this.movedClass = "microbit-moved";
        this.className = this.stillClass;
        microbitStore.addListener(this);
    }
    MicrobitMovement.prototype.servicesUpdated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var service, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.services || !this.services.accelerometerService) {
                            this.className = this.stillClass;
                            return [2 /*return*/];
                        }
                        service = this.services.accelerometerService;
                        return [4 /*yield*/, service.setAccelerometerPeriod(this.frequency)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, service.readAccelerometerData()];
                    case 2:
                        data = _a.sent();
                        this.setClassName(data);
                        return [4 /*yield*/, service.addEventListener("accelerometerdatachanged", function (event) { return _this.setClassName(event.detail); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MicrobitMovement.prototype.setClassName = function (data) {
        this.className =
            (Math.abs(data.x) > this.sensitivity
                || Math.abs(data.y) > this.sensitivity
                || Math.abs(data.z) > this.sensitivity) ? this.movedClass
                : this.stillClass;
    };
    MicrobitMovement.prototype.render = function () {
        return (h("span", { class: this.className }, h("slot", null)));
    };
    Object.defineProperty(MicrobitMovement.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MicrobitMovement, "watchers", {
        get: function () {
            return {
                "services": ["servicesUpdated"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MicrobitMovement;
}());
export { MicrobitMovement as microbit_movement };
