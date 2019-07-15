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
import { r as registerInstance, h as h$1, g as getElement } from './chunk-e22b57f2.js';
import { m as microbitStore } from './chunk-ede9ed58.js';
var t, e, n, r;
t = document, e = "script", (n = t.createElement(e)).async = 1, n.src = "//" + (location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1", (r = t.getElementsByTagName(e)[0]).parentNode.insertBefore(n, r);
var i = function (t, e) { return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
    e.hasOwnProperty(n) && (t[n] = e[n]); })(t, e); };
function a(t, e) { function n() { this.constructor = t; } i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }
function o(t, e, n, r) { return new (n || (n = Promise))(function (i, a) { function o(t) { try {
    s(r.next(t));
}
catch (t) {
    a(t);
} } function u(t) { try {
    s(r.throw(t));
}
catch (t) {
    a(t);
} } function s(t) { t.done ? i(t.value) : new n(function (e) { e(t.value); }).then(o, u); } s((r = r.apply(t, e || [])).next()); }); }
function u(t, e) { var n, r, i, a, o = { label: 0, sent: function () { if (1 & i[0])
        throw i[1]; return i[1]; }, trys: [], ops: [] }; return a = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function () { return this; }), a; function u(a) { return function (u) { return function (a) { if (n)
    throw new TypeError("Generator is already executing."); for (; o;)
    try {
        if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done)
            return i;
        switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
            case 0:
            case 1:
                i = a;
                break;
            case 4: return o.label++, { value: a[1], done: !1 };
            case 5:
                o.label++, r = a[1], a = [0];
                continue;
            case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;
            default:
                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    o = 0;
                    continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    o.label = a[1];
                    break;
                }
                if (6 === a[0] && o.label < i[1]) {
                    o.label = i[1], i = a;
                    break;
                }
                if (i && o.label < i[2]) {
                    o.label = i[2], o.ops.push(a);
                    break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
        }
        a = e.call(t, o);
    }
    catch (t) {
        a = [6, t], r = 0;
    }
    finally {
        n = i = 0;
    } if (5 & a[0])
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; }([a, u]); }; } }
var s, c = function () { function t(t) { void 0 === t && (t = 1), this.concurrent = t, this.queue = [], this.running = 0; } return t.prototype.pump = function () { return o(this, void 0, void 0, function () { var t, e, n; return u(this, function (r) { switch (r.label) {
    case 0:
        if (this.running >= this.concurrent)
            return [2];
        if (!(t = this.queue.shift()))
            return [2];
        this.running++, r.label = 1;
    case 1: return r.trys.push([1, 3, , 4]), [4, t.fn()];
    case 2: return e = r.sent(), t.resolve(e), [3, 4];
    case 3: return n = r.sent(), t.reject(n), [3, 4];
    case 4: return this.running--, [2, this.pump()];
} }); }); }, t.prototype.add = function (t) { var e = this; return new Promise(function (n, r) { return e.queue.push({ fn: t, resolve: n, reject: r }), e.pump(); }); }, t; }(), h = function () { function t(t, e) { this.service = t, this.emitter = e; } return t.prototype.getCharacteristic = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { switch (n.label) {
    case 0: return this.characteristics ? [3, 2] : (e = this, [4, this.service.getCharacteristics()]);
    case 1: e.characteristics = n.sent(), n.label = 2;
    case 2: return [2, this.characteristics.find(function (e) { return e.uuid === t; })];
} }); }); }, t.prototype.getCharacteristicValue = function (e) { return o(this, void 0, void 0, function () { var n, r = this; return u(this, function (i) { switch (i.label) {
    case 0: return [4, this.getCharacteristic(e)];
    case 1:
        if (!(n = i.sent()))
            throw new Error("Unable to locate characteristic");
        return [4, t.queue.add(function () { return o(r, void 0, void 0, function () { return u(this, function (t) { return [2, n.readValue()]; }); }); })];
    case 2: return [2, i.sent()];
} }); }); }, t.prototype.setCharacteristicValue = function (e, n) { return o(this, void 0, void 0, function () { var r, i = this; return u(this, function (a) { switch (a.label) {
    case 0: return [4, this.getCharacteristic(e)];
    case 1:
        if (!(r = a.sent()))
            throw new Error("Unable to locate characteristic");
        return [4, t.queue.add(function () { return o(i, void 0, void 0, function () { return u(this, function (t) { return [2, r.writeValue(n)]; }); }); })];
    case 2: return a.sent(), [2];
} }); }); }, t.prototype.handleListener = function (e, n, r) { return o(this, void 0, void 0, function () { var i, a = this; return u(this, function (s) { switch (s.label) {
    case 0: return [4, this.getCharacteristic(n)];
    case 1: return (i = s.sent()) ? [4, t.queue.add(function () { return o(a, void 0, void 0, function () { return u(this, function (t) { return [2, i.startNotifications()]; }); }); })] : [2];
    case 2: return s.sent(), this.emitter.on("newListener", function (n) { if (!(n !== e || a.emitter.listenerCount(e) > 0))
        return t.queue.add(function () { return o(a, void 0, void 0, function () { return u(this, function (t) { return [2, i.addEventListener("characteristicvaluechanged", r)]; }); }); }); }), this.emitter.on("removeListener", function (n) { if (!(n !== e || a.emitter.listenerCount(e) > 0))
        return t.queue.add(function () { return o(a, void 0, void 0, function () { return u(this, function (t) { return [2, i.removeEventListener("characteristicvaluechanged", r)]; }); }); }); }), [2];
} }); }); }, t.queue = new c, t; }();
!function (t) { t.modelNumber = "00002a24-0000-1000-8000-00805f9b34fb", t.serialNumber = "00002a25-0000-1000-8000-00805f9b34fb", t.firmwareRevision = "00002a26-0000-1000-8000-00805f9b34fb", t.hardwareRevision = "00002a27-0000-1000-8000-00805f9b34fb", t.manufacturer = "00002a29-0000-1000-8000-00805f9b34fb"; }(s || (s = {}));
var f = function () { function t(t) { this.helper = new h(t); } return t.create = function (e) { return o(this, void 0, void 0, function () { return u(this, function (n) { return [2, new t(e)]; }); }); }, t.prototype.readDeviceInformation = function () { return o(this, void 0, void 0, function () { var t, e, n, r, i, a; return u(this, function (o) { switch (o.label) {
    case 0: return t = {}, [4, this.readStringCharacteristic(s.modelNumber)];
    case 1: return (e = o.sent()) && (t.modelNumber = e), [4, this.readStringCharacteristic(s.serialNumber)];
    case 2: return (n = o.sent()) && (t.serialNumber = n), [4, this.readStringCharacteristic(s.firmwareRevision)];
    case 3: return (r = o.sent()) && (t.firmwareRevision = r), [4, this.readStringCharacteristic(s.hardwareRevision)];
    case 4: return (i = o.sent()) && (t.hardwareRevision = i), [4, this.readStringCharacteristic(s.manufacturer)];
    case 5: return (a = o.sent()) && (t.manufacturer = a), [2, t];
} }); }); }, t.prototype.readStringCharacteristic = function (t) { return o(this, void 0, void 0, function () { var e, n; return u(this, function (r) { switch (r.label) {
    case 0: return r.trys.push([0, 2, , 3]), [4, this.helper.getCharacteristicValue(t)];
    case 1: return e = r.sent(), n = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength), [2, String.fromCharCode.apply(null, Array.from(new Uint8Array(n)))];
    case 2: return r.sent(), [2, void 0];
    case 3: return [2];
} }); }); }, t.uuid = "0000180a-0000-1000-8000-00805f9b34fb", t; }();
function d() { }
function l() { l.init.call(this); }
function v(t) { return void 0 === t._maxListeners ? l.defaultMaxListeners : t._maxListeners; }
function p(t, e, n, r) { var i, a, o, u; if ("function" != typeof n)
    throw new TypeError('"listener" argument must be a function'); if ((a = t._events) ? (a.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), a = t._events), o = a[e]) : (a = t._events = new d, t._eventsCount = 0), o) {
    if ("function" == typeof o ? o = a[e] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), !o.warned && (i = v(t)) && i > 0 && o.length > i) {
        o.warned = !0;
        var s = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + e + " listeners added. Use emitter.setMaxListeners() to increase limit");
        s.name = "MaxListenersExceededWarning", s.emitter = t, s.type = e, s.count = o.length, u = s, "function" == typeof console.warn ? console.warn(u) : console.log(u);
    }
}
else
    o = a[e] = n, ++t._eventsCount; return t; }
function g(t, e, n) { var r = !1; function i() { t.removeListener(e, i), r || (r = !0, n.apply(t, arguments)); } return i.listener = n, i; }
function m(t) { var e = this._events; if (e) {
    var n = e[t];
    if ("function" == typeof n)
        return 1;
    if (n)
        return n.length;
} return 0; }
function w(t, e) { for (var n = new Array(e); e--;)
    n[e] = t[e]; return n; }
d.prototype = Object.create(null), l.EventEmitter = l, l.usingDomains = !1, l.prototype.domain = void 0, l.prototype._events = void 0, l.prototype._maxListeners = void 0, l.defaultMaxListeners = 10, l.init = function () { this.domain = null, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new d, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0; }, l.prototype.setMaxListeners = function (t) { if ("number" != typeof t || t < 0 || isNaN(t))
    throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = t, this; }, l.prototype.getMaxListeners = function () { return v(this); }, l.prototype.emit = function (t) { var e, n, r, i, a, o, u, s = "error" === t; if (o = this._events)
    s = s && null == o.error;
else if (!s)
    return !1; if (u = this.domain, s) {
    if (e = arguments[1], !u) {
        if (e instanceof Error)
            throw e;
        var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
        throw c.context = e, c;
    }
    return e || (e = new Error('Uncaught, unspecified "error" event')), e.domainEmitter = this, e.domain = u, e.domainThrown = !1, u.emit("error", e), !1;
} if (!(n = o[t]))
    return !1; var h = "function" == typeof n; switch (r = arguments.length) {
    case 1:
        !function (t, e, n) { if (e)
            t.call(n);
        else
            for (var r = t.length, i = w(t, r), a = 0; a < r; ++a)
                i[a].call(n); }(n, h, this);
        break;
    case 2:
        !function (t, e, n, r) { if (e)
            t.call(n, r);
        else
            for (var i = t.length, a = w(t, i), o = 0; o < i; ++o)
                a[o].call(n, r); }(n, h, this, arguments[1]);
        break;
    case 3:
        !function (t, e, n, r, i) { if (e)
            t.call(n, r, i);
        else
            for (var a = t.length, o = w(t, a), u = 0; u < a; ++u)
                o[u].call(n, r, i); }(n, h, this, arguments[1], arguments[2]);
        break;
    case 4:
        !function (t, e, n, r, i, a) { if (e)
            t.call(n, r, i, a);
        else
            for (var o = t.length, u = w(t, o), s = 0; s < o; ++s)
                u[s].call(n, r, i, a); }(n, h, this, arguments[1], arguments[2], arguments[3]);
        break;
    default:
        for (i = new Array(r - 1), a = 1; a < r; a++)
            i[a - 1] = arguments[a];
        !function (t, e, n, r) { if (e)
            t.apply(n, r);
        else
            for (var i = t.length, a = w(t, i), o = 0; o < i; ++o)
                a[o].apply(n, r); }(n, h, this, i);
} return !0; }, l.prototype.addListener = function (t, e) { return p(this, t, e, !1); }, l.prototype.on = l.prototype.addListener, l.prototype.prependListener = function (t, e) { return p(this, t, e, !0); }, l.prototype.once = function (t, e) { if ("function" != typeof e)
    throw new TypeError('"listener" argument must be a function'); return this.on(t, g(this, t, e)), this; }, l.prototype.prependOnceListener = function (t, e) { if ("function" != typeof e)
    throw new TypeError('"listener" argument must be a function'); return this.prependListener(t, g(this, t, e)), this; }, l.prototype.removeListener = function (t, e) { var n, r, i, a, o; if ("function" != typeof e)
    throw new TypeError('"listener" argument must be a function'); if (!(r = this._events))
    return this; if (!(n = r[t]))
    return this; if (n === e || n.listener && n.listener === e)
    0 == --this._eventsCount ? this._events = new d : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
else if ("function" != typeof n) {
    for (i = -1, a = n.length; a-- > 0;)
        if (n[a] === e || n[a].listener && n[a].listener === e) {
            o = n[a].listener, i = a;
            break;
        }
    if (i < 0)
        return this;
    if (1 === n.length) {
        if (n[0] = void 0, 0 == --this._eventsCount)
            return this._events = new d, this;
        delete r[t];
    }
    else
        !function (t, e) { for (var n = e, r = n + 1, i = t.length; r < i; n += 1, r += 1)
            t[n] = t[r]; t.pop(); }(n, i);
    r.removeListener && this.emit("removeListener", t, o || e);
} return this; }, l.prototype.removeAllListeners = function (t) { var e, n; if (!(n = this._events))
    return this; if (!n.removeListener)
    return 0 === arguments.length ? (this._events = new d, this._eventsCount = 0) : n[t] && (0 == --this._eventsCount ? this._events = new d : delete n[t]), this; if (0 === arguments.length) {
    for (var r, i = Object.keys(n), a = 0; a < i.length; ++a)
        "removeListener" !== (r = i[a]) && this.removeAllListeners(r);
    return this.removeAllListeners("removeListener"), this._events = new d, this._eventsCount = 0, this;
} if ("function" == typeof (e = n[t]))
    this.removeListener(t, e);
else if (e)
    do {
        this.removeListener(t, e[e.length - 1]);
    } while (e[0]); return this; }, l.prototype.listeners = function (t) { var e, n = this._events; return n && (e = n[t]) ? "function" == typeof e ? [e.listener || e] : function (t) { for (var e = new Array(t.length), n = 0; n < e.length; ++n)
    e[n] = t[n].listener || t[n]; return e; }(e) : []; }, l.listenerCount = function (t, e) { return "function" == typeof t.listenerCount ? t.listenerCount(e) : m.call(t, e); }, l.prototype.listenerCount = m, l.prototype.eventNames = function () { return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []; };
var y, b, C = function (t) { function e() { var e = null !== t && t.apply(this, arguments) || this; return e.isEventListenerObject = function (t) { return void 0 !== t.handleEvent; }, e; } return a(e, t), e.prototype.addEventListener = function (e, n) { if (n) {
    var r = this.isEventListenerObject(n) ? n.handleEvent : n;
    t.prototype.addListener.call(this, e, r);
} }, e.prototype.removeEventListener = function (e, n) { if (n) {
    var r = this.isEventListenerObject(n) ? n.handleEvent : n;
    t.prototype.removeListener.call(this, e, r);
} }, e.prototype.dispatchEvent = function (e, n) { var r; return r = "string" == typeof e ? new CustomEvent(e, { detail: n }) : e, t.prototype.emit.call(this, r.type, r); }, e; }(l);
!function (t) { t.buttonAState = "e95dda90-251d-470a-a062-fa1922dfa9a8", t.buttonBState = "e95dda91-251d-470a-a062-fa1922dfa9a8"; }(y || (y = {})), function (t) { t[t.Release = 0] = "Release", t[t.ShortPress = 1] = "ShortPress", t[t.LongPress = 2] = "LongPress"; }(b || (b = {}));
var V, L = function (t) { function e(e) { var n = t.call(this) || this; return n.helper = new h(e, n), n; } return a(e, t), e.create = function (t) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return [4, (n = new e(t)).init()];
    case 1: return r.sent(), [2, n];
} }); }); }, e.prototype.init = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.handleListener("buttonastatechanged", y.buttonAState, this.buttonAStateChangedHandler.bind(this))];
    case 1: return t.sent(), [4, this.helper.handleListener("buttonbstatechanged", y.buttonBState, this.buttonBStateChangedHandler.bind(this))];
    case 2: return t.sent(), [2];
} }); }); }, e.prototype.readButtonAState = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.getCharacteristicValue(y.buttonAState)];
    case 1: return [2, t.sent().getUint8(0)];
} }); }); }, e.prototype.readButtonBState = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.getCharacteristicValue(y.buttonBState)];
    case 1: return [2, t.sent().getUint8(0)];
} }); }); }, e.prototype.buttonAStateChangedHandler = function (t) { var e = t.target.value; this.dispatchEvent("buttonastatechanged", e.getUint8(0)); }, e.prototype.buttonBStateChangedHandler = function (t) { var e = t.target.value; this.dispatchEvent("buttonbstatechanged", e.getUint8(0)); }, e.uuid = "e95d9882-251d-470a-a062-fa1922dfa9a8", e; }(C);
!function (t) { t.ledMatrixState = "e95d7b77-251d-470a-a062-fa1922dfa9a8", t.ledText = "e95d93ee-251d-470a-a062-fa1922dfa9a8", t.scrollingDelay = "e95d0d2d-251d-470a-a062-fa1922dfa9a8"; }(V || (V = {}));
var D, E = function () { function t(t) { this.helper = new h(t); } return t.create = function (e) { return o(this, void 0, void 0, function () { return u(this, function (n) { return [2, new t(e)]; }); }); }, t.prototype.writeText = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return e = this.encodeString(t), [2, this.helper.setCharacteristicValue(V.ledText, e)]; }); }); }, t.prototype.readMatrixState = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(V.ledMatrixState)];
    case 1: return t = e.sent(), [2, this.viewToLedMatrix(t)];
} }); }); }, t.prototype.writeMatrixState = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return e = this.ledMatrixToView(t), [2, this.helper.setCharacteristicValue(V.ledMatrixState, e)]; }); }); }, t.prototype.getScrollingDelay = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.getCharacteristicValue(V.scrollingDelay)];
    case 1: return [2, t.sent().getUint16(0, !0)];
} }); }); }, t.prototype.setScrollingDelay = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return (e = new DataView(new ArrayBuffer(2))).setUint16(0, t, !0), [2, this.helper.setCharacteristicValue(V.scrollingDelay, e)]; }); }); }, t.prototype.encodeString = function (t) { for (var e = new ArrayBuffer(t.length), n = new Uint8Array(e), r = 0; r < t.length; r++)
    n[r] = t.charCodeAt(r); return e; }, t.prototype.viewToLedMatrix = function (t) { for (var e = [], n = 0; n < 5; n++)
    e[n] = this.byteToBoolArray(t.getUint8(n)); return e; }, t.prototype.byteToBoolArray = function (t) { for (var e = [!1, !1, !1, !1, !1], n = 0; n < e.length; n++)
    e[n] = 1 == (1 & t), t >>= 1; return e.reverse(); }, t.prototype.ledMatrixToView = function (t) { for (var e = new DataView(new ArrayBuffer(5)), n = 0; n < 5; n++)
    e.setUint8(n, this.boolArrayToByte(t[n])); return e; }, t.prototype.boolArrayToByte = function (t) { return t.reduce(function (t, e) { return t << 1 | (e ? 1 : 0); }, 0); }, t.uuid = "e95dd91d-251d-470a-a062-fa1922dfa9a8", t; }();
!function (t) { t.temperature = "e95d9250-251d-470a-a062-fa1922dfa9a8", t.temperaturePeriod = "e95d1b25-251d-470a-a062-fa1922dfa9a8"; }(D || (D = {}));
var S, A = function (t) { function e(e) { var n = t.call(this) || this; return n.helper = new h(e, n), n; } return a(e, t), e.create = function (t) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return [4, (n = new e(t)).init()];
    case 1: return r.sent(), [2, n];
} }); }); }, e.prototype.init = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.handleListener("temperaturechanged", D.temperature, this.temperatureChangedHandler.bind(this))];
    case 1: return t.sent(), [2];
} }); }); }, e.prototype.readTemperature = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.getCharacteristicValue(D.temperature)];
    case 1: return [2, t.sent().getInt8(0)];
} }); }); }, e.prototype.getTemperaturePeriod = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.getCharacteristicValue(D.temperaturePeriod)];
    case 1: return [2, t.sent().getUint16(0, !0)];
} }); }); }, e.prototype.setTemperaturePeriod = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { switch (n.label) {
    case 0: return (e = new DataView(new ArrayBuffer(2))).setUint16(0, t, !0), [4, this.helper.setCharacteristicValue(D.temperaturePeriod, e)];
    case 1: return [2, n.sent()];
} }); }); }, e.prototype.temperatureChangedHandler = function (t) { var e = t.target.value; this.dispatchEvent("temperaturechanged", e.getInt8(0)); }, e.uuid = "e95d6100-251d-470a-a062-fa1922dfa9a8", e; }(C);
!function (t) { t.accelerometerData = "e95dca4b-251d-470a-a062-fa1922dfa9a8", t.accelerometerPeriod = "e95dfb24-251d-470a-a062-fa1922dfa9a8"; }(S || (S = {}));
var T, U, x = function (t) { function e(e) { var n = t.call(this) || this; return n.helper = new h(e, n), n; } return a(e, t), e.create = function (t) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return [4, (n = new e(t)).init()];
    case 1: return r.sent(), [2, n];
} }); }); }, e.prototype.init = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.handleListener("accelerometerdatachanged", S.accelerometerData, this.accelerometerDataChangedHandler.bind(this))];
    case 1: return t.sent(), [2];
} }); }); }, e.prototype.readAccelerometerData = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(S.accelerometerData)];
    case 1: return t = e.sent(), [2, this.dataViewToAccelerometerData(t)];
} }); }); }, e.prototype.getAccelerometerPeriod = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.getCharacteristicValue(S.accelerometerPeriod)];
    case 1: return [2, t.sent().getUint16(0, !0)];
} }); }); }, e.prototype.setAccelerometerPeriod = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return (e = new DataView(new ArrayBuffer(2))).setUint16(0, t, !0), [2, this.helper.setCharacteristicValue(S.accelerometerPeriod, e)]; }); }); }, e.prototype.accelerometerDataChangedHandler = function (t) { var e = t.target.value, n = this.dataViewToAccelerometerData(e); this.dispatchEvent("accelerometerdatachanged", n); }, e.prototype.dataViewToAccelerometerData = function (t) { return { x: t.getInt16(0, !0) / 1e3, y: t.getInt16(2, !0) / 1e3, z: t.getInt16(4, !0) / 1e3 }; }, e.uuid = "e95d0753-251d-470a-a062-fa1922dfa9a8", e; }(C);
!function (t) { t.magnetometerData = "e95dfb11-251d-470a-a062-fa1922dfa9a8", t.magnetometerPeriod = "e95d386c-251d-470a-a062-fa1922dfa9a8", t.magnetometerBearing = "e95d9715-251d-470a-a062-fa1922dfa9a8", t.magnetometerCalibration = "e95db358-251d-470a-a062-fa1922dfa9a8"; }(T || (T = {})), function (t) { t[t.unknown = 0] = "unknown", t[t.requested = 1] = "requested", t[t.completed = 2] = "completed", t[t.errored = 3] = "errored"; }(U || (U = {}));
var _, B, P, M = function (t) { function e(e) { var n = t.call(this) || this; return n.helper = new h(e, n), n; } return a(e, t), e.create = function (t) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return [4, (n = new e(t)).init()];
    case 1: return r.sent(), [2, n];
} }); }); }, e.prototype.init = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.handleListener("magnetometerdatachanged", T.magnetometerData, this.magnetometerDataChangedHandler.bind(this))];
    case 1: return t.sent(), [4, this.helper.handleListener("magnetometerbearingchanged", T.magnetometerBearing, this.magnetometerBearingChangedHandler.bind(this))];
    case 2: return t.sent(), [4, this.helper.handleListener("magnetometercalibrationchanged", T.magnetometerCalibration, this.magnetometerCalibrationChangedHandler.bind(this))];
    case 3: return t.sent(), [2];
} }); }); }, e.prototype.calibrate = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { return [2, this.helper.setCharacteristicValue(T.magnetometerCalibration, new Uint8Array([1]))]; }); }); }, e.prototype.readMagnetometerData = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(T.magnetometerData)];
    case 1: return t = e.sent(), [2, this.dataViewToMagnetometerData(t)];
} }); }); }, e.prototype.readMagnetometerBearing = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(T.magnetometerBearing)];
    case 1: return 2 === (t = e.sent()).byteLength ? [2, t.getUint16(0, !0)] : [2, void 0];
} }); }); }, e.prototype.getMagnetometerPeriod = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.getCharacteristicValue(T.magnetometerPeriod)];
    case 1: return [2, t.sent().getUint16(0, !0)];
} }); }); }, e.prototype.setMagnetometerPeriod = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return (e = new DataView(new ArrayBuffer(2))).setUint16(0, t, !0), [2, this.helper.setCharacteristicValue(T.magnetometerPeriod, e)]; }); }); }, e.prototype.magnetometerDataChangedHandler = function (t) { var e = t.target.value, n = this.dataViewToMagnetometerData(e); this.dispatchEvent("magnetometerdatachanged", n); }, e.prototype.magnetometerBearingChangedHandler = function (t) { var e = t.target.value; 2 === e.byteLength && this.dispatchEvent("magnetometerbearingchanged", e.getUint16(0, !0)); }, e.prototype.magnetometerCalibrationChangedHandler = function (t) { var e = t.target.value; 1 === e.byteLength && this.dispatchEvent("magnetometercalibrationchanged", e.getUint8(0)); }, e.prototype.dataViewToMagnetometerData = function (t) { return { x: t.getInt16(0, !0), y: t.getInt16(1, !0), z: t.getInt16(2, !0) }; }, e.uuid = "e95df2d8-251d-470a-a062-fa1922dfa9a8", e; }(C);
!function (t) { t.pinData = "e95d8d00-251d-470a-a062-fa1922dfa9a8", t.pinAdConfiguration = "e95d5899-251d-470a-a062-fa1922dfa9a8", t.pinIoConfiguration = "e95db9fe-251d-470a-a062-fa1922dfa9a8", t.pwmControl = "e95dd822-251d-470a-a062-fa1922dfa9a8"; }(_ || (_ = {})), function (t) { t[t.Digital = 0] = "Digital", t[t.Analogue = 1] = "Analogue"; }(B || (B = {})), function (t) { t[t.Output = 0] = "Output", t[t.Input = 1] = "Input"; }(P || (P = {}));
var q, H = function (t) { function e(e) { var n = t.call(this) || this; return n.helper = new h(e, n), n; } return a(e, t), e.create = function (t) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return [4, (n = new e(t)).init()];
    case 1: return r.sent(), [2, n];
} }); }); }, e.prototype.init = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.handleListener("pindatachanged", _.pinData, this.pinDataChangedHandler.bind(this))];
    case 1: return t.sent(), [2];
} }); }); }, e.prototype.readPinData = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(_.pinData)];
    case 1: return t = e.sent(), [2, this.dataViewToPinData(t)];
} }); }); }, e.prototype.writePinData = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return e = this.pinDataToDataView(t), [2, this.helper.setCharacteristicValue(_.pinData, e)]; }); }); }, e.prototype.getAdConfiguration = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(_.pinAdConfiguration)];
    case 1: return t = e.sent(), [2, this.dataViewToConfig(t)];
} }); }); }, e.prototype.setAdConfiguration = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return e = this.configToDataView(t), [2, this.helper.setCharacteristicValue(_.pinAdConfiguration, e)]; }); }); }, e.prototype.getIoConfiguration = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(_.pinIoConfiguration)];
    case 1: return t = e.sent(), [2, this.dataViewToConfig(t)];
} }); }); }, e.prototype.setIoConfiguration = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return e = this.configToDataView(t), [2, this.helper.setCharacteristicValue(_.pinIoConfiguration, e)]; }); }); }, e.prototype.setPwmControl = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return e = this.pwmControlDataToDataView(t), [2, this.helper.setCharacteristicValue(_.pwmControl, e)]; }); }); }, e.prototype.pinDataChangedHandler = function (t) { var e = t.target.value, n = this.dataViewToPinData(e); this.dispatchEvent("pindatachanged", n); }, e.prototype.dataViewToPinData = function (t) { for (var e = [], n = 0; n < t.byteLength; n += 2)
    e.push({ pin: t.getUint8(n), value: t.getUint8(n + 1) }); return e; }, e.prototype.pinDataToDataView = function (t) { var e = new DataView(new ArrayBuffer(2 * t.length)); return t.forEach(function (t, n) { e.setUint8(2 * n, t.pin), e.setUint8(2 * n + 1, t.value); }), e; }, e.prototype.dataViewToConfig = function (t) { for (var e = [], n = (t.getUint16(0) << 8) + t.getUint8(2), r = 0; r < 24; r++)
    e.push(n >> r); return e; }, e.prototype.configToDataView = function (t) { for (var e = new DataView(new ArrayBuffer(3)), n = 0, r = 0; r < t.length; r++)
    n &= 1 << t[r]; return e.setUint16(0, n >> 8), e.setUint8(2, 255 & n), e; }, e.prototype.pwmControlDataToDataView = function (t) { var e = new DataView(new ArrayBuffer(7)); return e.setUint8(0, t.pin), e.setUint16(1, t.value), e.setUint32(3, t.period), e; }, e.uuid = "e95d127b-251d-470a-a062-fa1922dfa9a8", e; }(C);
!function (t) { t.tx = "6e400002-b5a3-f393-e0a9-e50e24dcca9e", t.rx = "6e400003-b5a3-f393-e0a9-e50e24dcca9e"; }(q || (q = {}));
var R, I = function (t) { function e(e) { var n = t.call(this) || this; return n.helper = new h(e, n), n; } return a(e, t), e.create = function (t) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return [4, (n = new e(t)).init()];
    case 1: return r.sent(), [2, n];
} }); }); }, e.prototype.init = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.handleListener("receive", q.tx, this.receiveHandler.bind(this))];
    case 1: return t.sent(), [4, this.helper.handleListener("receiveText", q.tx, this.receiveTextHandler.bind(this))];
    case 2: return t.sent(), [2];
} }); }); }, e.prototype.send = function (t) { return o(this, void 0, void 0, function () { return u(this, function (e) { return [2, this.helper.setCharacteristicValue(q.rx, t)]; }); }); }, e.prototype.sendText = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { return e = t.split("").map(function (t) { return t.charCodeAt(0); }), [2, this.helper.setCharacteristicValue(q.rx, new Uint8Array(e).buffer)]; }); }); }, e.prototype.receiveHandler = function (t) { var e = t.target.value, n = new Uint8Array(e.buffer); this.dispatchEvent("receive", n); }, e.prototype.receiveTextHandler = function (t) { var e = t.target.value, n = Array.prototype.slice.call(new Uint8Array(e.buffer)), r = String.fromCharCode.apply(null, n); this.dispatchEvent("receiveText", r); }, e.uuid = "6e400001-b5a3-f393-e0a9-e50e24dcca9e", e; }(C);
!function (t) { t.microBitRequirements = "e95db84c-251d-470a-a062-fa1922dfa9a8", t.microBitEvent = "e95d9775-251d-470a-a062-fa1922dfa9a8", t.clientRequirements = "e95d23c4-251d-470a-a062-fa1922dfa9a8", t.clientEvent = "e95d5404-251d-470a-a062-fa1922dfa9a8"; }(R || (R = {}));
var O, k = function (t) { function e(e) { var n = t.call(this) || this; return n.helper = new h(e, n), n; } return a(e, t), e.create = function (t) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return [4, (n = new e(t)).init()];
    case 1: return r.sent(), [2, n];
} }); }); }, e.prototype.init = function () { return o(this, void 0, void 0, function () { return u(this, function (t) { switch (t.label) {
    case 0: return [4, this.helper.handleListener("microbitevent", R.microBitEvent, this.eventHandler.bind(this))];
    case 1: return t.sent(), [4, this.helper.handleListener("microbitrequirementschanged", R.microBitRequirements, this.microbitRequirementsChangedHandler.bind(this))];
    case 2: return t.sent(), [2];
} }); }); }, e.prototype.getMicrobitRequirements = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(R.microBitRequirements)];
    case 1: return t = e.sent(), [2, this.viewToMicrobitEvent(t)];
} }); }); }, e.prototype.setClientRequirements = function (t, e) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return (n = new DataView(new ArrayBuffer(4))).setUint16(0, t, !0), n.setUint16(1, e, !0), [4, this.helper.setCharacteristicValue(R.clientRequirements, n)];
    case 1: return [2, r.sent()];
} }); }); }, e.prototype.readMicrobitEvent = function () { return o(this, void 0, void 0, function () { var t; return u(this, function (e) { switch (e.label) {
    case 0: return [4, this.helper.getCharacteristicValue(R.microBitEvent)];
    case 1: return t = e.sent(), [2, this.viewToMicrobitEvent(t)];
} }); }); }, e.prototype.writeClientEvent = function (t, e) { return o(this, void 0, void 0, function () { var n; return u(this, function (r) { switch (r.label) {
    case 0: return (n = new DataView(new ArrayBuffer(4))).setUint16(0, t, !0), n.setUint16(1, e, !0), [4, this.helper.setCharacteristicValue(R.clientEvent, n)];
    case 1: return [2, r.sent()];
} }); }); }, e.prototype.microbitRequirementsChangedHandler = function (t) { var e = t.target.value, n = this.viewToMicrobitEvent(e); this.dispatchEvent("microbitrequirementschanged", n); }, e.prototype.eventHandler = function (t) { var e = t.target.value, n = this.viewToMicrobitEvent(e); this.dispatchEvent("microbitevent", n); }, e.prototype.viewToMicrobitEvent = function (t) { return { type: t.getUint16(0, !0), value: t.getUint16(1, !0) }; }, e.uuid = "e95d93af-251d-470a-a062-fa1922dfa9a8", e; }(C);
!function (t) { t.dfuControl = "e95d93b1-251d-470a-a062-fa1922dfa9a8"; }(O || (O = {}));
var N = function () { function t(t) { this.helper = new h(t); } return t.create = function (e) { return o(this, void 0, void 0, function () { return u(this, function (n) { return [2, new t(e)]; }); }); }, t.prototype.requestDfu = function () { return this.helper.setCharacteristicValue(O.dfuControl, new Uint8Array([1])); }, t.prototype.requestFlashCode = function () { return this.helper.setCharacteristicValue(O.dfuControl, new Uint8Array([2])); }, t.uuid = "e95d93b0-251d-470a-a062-fa1922dfa9a8", t; }(), j = function () { function t(t) { this.services = t; } return t.prototype.createService = function (t) { return o(this, void 0, void 0, function () { var e; return u(this, function (n) { switch (n.label) {
    case 0: return (e = this.services.find(function (e) { return e.uuid === t.uuid; })) ? [4, t.create(e)] : [2, void 0];
    case 1: return [2, n.sent()];
} }); }); }, t; }(), z = function (t) { return o(void 0, void 0, void 0, function () { return u(this, function (e) { switch (e.label) {
    case 0: return [4, t.requestDevice({ filters: [{ namePrefix: "BBC micro:bit" }], optionalServices: [f.uuid, L.uuid, E.uuid, A.uuid, x.uuid, M.uuid, H.uuid, I.uuid, k.uuid, N.uuid] })];
    case 1: return [2, e.sent()];
} }); }); }, F = function (t) { return o(void 0, void 0, void 0, function () { var e, n, r, i, a, o, s, c, h, d, l, v; return u(this, function (u) { switch (u.label) {
    case 0: return t && t.gatt ? t.gatt.connected ? [3, 2] : [4, t.gatt.connect()] : [2, {}];
    case 1: u.sent(), u.label = 2;
    case 2: return [4, t.gatt.getPrimaryServices()];
    case 3: return e = u.sent(), [4, (n = new j(e)).createService(f)];
    case 4: return r = u.sent(), [4, n.createService(L)];
    case 5: return i = u.sent(), [4, n.createService(E)];
    case 6: return a = u.sent(), [4, n.createService(A)];
    case 7: return o = u.sent(), [4, n.createService(x)];
    case 8: return s = u.sent(), [4, n.createService(M)];
    case 9: return c = u.sent(), [4, n.createService(I)];
    case 10: return h = u.sent(), [4, n.createService(k)];
    case 11: return d = u.sent(), [4, n.createService(N)];
    case 12: return l = u.sent(), [4, n.createService(H)];
    case 13: return v = u.sent(), [2, { deviceInformationService: r, buttonService: i, ledService: a, temperatureService: o, accelerometerService: s, magnetometerService: c, uartService: h, eventService: d, dfuControlService: l, ioPinService: v }];
} }); }); };
var MicrobitConnect = /** @class */ (function () {
    function MicrobitConnect(hostRef) {
        registerInstance(this, hostRef);
        this.device = null;
        /**
         * The button label to connect
         */
        this.connectLabel = "Connect";
        /**
         * The button label to disconnect
         */
        this.disconnectLabel = "Disconnect";
    }
    MicrobitConnect.prototype.getLabel = function () {
        return this.device ? this.disconnectLabel : this.connectLabel;
    };
    MicrobitConnect.prototype.connectDisconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var device, services, deviceInformation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.device) return [3 /*break*/, 3];
                        if (!this.device.gatt.connected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.device.gatt.disconnect()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.device = null;
                        microbitStore.empty();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, z(window.navigator.bluetooth)];
                    case 4:
                        device = _a.sent();
                        if (!device) return [3 /*break*/, 8];
                        this.device = device;
                        microbitStore.update("device", device);
                        return [4 /*yield*/, F(device)];
                    case 5:
                        services = _a.sent();
                        microbitStore.update("services", services);
                        if (!services.deviceInformationService) return [3 /*break*/, 7];
                        return [4 /*yield*/, services.deviceInformationService.readDeviceInformation()];
                    case 6:
                        deviceInformation = _a.sent();
                        microbitStore.update("deviceInformation", deviceInformation);
                        _a.label = 7;
                    case 7:
                        device.addEventListener("gattserverdisconnected", this.connectDisconnect.bind(this));
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    MicrobitConnect.prototype.render = function () {
        var _this = this;
        return (h$1("button", { onClick: function () { return _this.connectDisconnect(); } }, this.getLabel()));
    };
    Object.defineProperty(MicrobitConnect.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return MicrobitConnect;
}());
export { MicrobitConnect as microbit_connect };
