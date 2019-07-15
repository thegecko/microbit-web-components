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
import { r as registerInstance, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var MicrobitMatrix = /** @class */ (function () {
    function MicrobitMatrix(hostRef) {
        registerInstance(this, hostRef);
        this.services = null;
        /**
         * The template for identifying child LEDs
         */
        this.idTemplate = "microbit-matrix-${row}-${column}";
        /**
         * The CSS class for off LEDs
         */
        this.offClass = "microbit-matrix-off";
        /**
         * The CSS class for on LEDs
         */
        this.onClass = "microbit-matrix-on";
        microbitStore.addListener(this);
    }
    MicrobitMatrix.prototype.servicesUpdated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var els, _loop_1, this_1, i, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        els = [[], [], [], [], []];
                        _loop_1 = function (i) {
                            var _loop_2 = function (j) {
                                var id = this_1.idTemplate.replace("${row}", i.toString()).replace("${column}", j.toString());
                                var led = document.getElementById(id);
                                if (led) {
                                    els[i][j] = led;
                                    led.onclick = function () { return _this.toggle(i, j); };
                                    led.classList.toggle(this_1.onClass, false);
                                    led.classList.toggle(this_1.offClass, false);
                                }
                            };
                            for (var j = 0; j < 5; j++) {
                                _loop_2(j);
                            }
                        };
                        this_1 = this;
                        for (i = 0; i < 5; i++) {
                            _loop_1(i);
                        }
                        this.elements = els;
                        if (!this.services || !this.services.ledService) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.services.ledService.readMatrixState()];
                    case 1:
                        _a.matrix = _b.sent();
                        return [4 /*yield*/, this.updateMatrix()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MicrobitMatrix.prototype.toggle = function (row, column) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.matrix[row][column] = !this.matrix[row][column];
                        return [4 /*yield*/, this.services.ledService.writeMatrixState(this.matrix)];
                    case 1:
                        _a.sent();
                        this.updateMatrix();
                        return [2 /*return*/];
                }
            });
        });
    };
    MicrobitMatrix.prototype.updateMatrix = function () {
        var _this = this;
        this.matrix.forEach(function (rows, row) {
            rows.forEach(function (value, column) {
                var led = _this.elements[row][column];
                if (led) {
                    led.classList.toggle(_this.onClass, value);
                    led.classList.toggle(_this.offClass, !value);
                }
            });
        });
    };
    Object.defineProperty(MicrobitMatrix.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MicrobitMatrix, "watchers", {
        get: function () {
            return {
                "services": ["servicesUpdated"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return MicrobitMatrix;
}());
export { MicrobitMatrix as microbit_matrix };
