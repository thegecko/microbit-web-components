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
var MicrobitText = /** @class */ (function () {
    function MicrobitText(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The text shown on the button
         */
        this.buttonLabel = "";
        /**
         * The speed to scroll the text
         */
        this.scrollDelay = 100;
        this.disabled = true;
        this.text = "";
        microbitStore.addListener(this);
    }
    MicrobitText.prototype.servicesUpdated = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disabled = !this.services || !this.services.ledService;
                        if (!(this.services && this.services.ledService)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.services.ledService.setScrollingDelay(this.scrollDelay)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MicrobitText.prototype.handleKey = function (event) {
        if (event.keyCode == 13) {
            this.writeText();
        }
        else {
            this.text = event.target.value;
        }
    };
    MicrobitText.prototype.writeText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.services.ledService.writeText(this.text)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MicrobitText.prototype.render = function () {
        var _this = this;
        var button;
        if (this.buttonLabel) {
            button = h("input", { type: "submit", disabled: this.disabled, value: this.buttonLabel, onClick: function () { return _this.writeText(); } });
        }
        return (h("span", null, h("input", { type: "text", disabled: this.disabled, maxLength: 20, onKeyUp: function (e) { return _this.handleKey(e); } }), button));
    };
    Object.defineProperty(MicrobitText.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MicrobitText, "watchers", {
        get: function () {
            return {
                "services": ["servicesUpdated"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MicrobitText;
}());
export { MicrobitText as microbit_text };
