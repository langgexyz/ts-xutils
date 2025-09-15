(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hour = exports.Minute = exports.Second = exports.Millisecond = exports.Microsecond = void 0;
    exports.formatDuration = formatDuration;
    exports.Microsecond = 1;
    exports.Millisecond = 1000 * exports.Microsecond;
    exports.Second = 1000 * exports.Millisecond;
    exports.Minute = 60 * exports.Second;
    exports.Hour = 60 * exports.Minute;
    function formatDuration(d) {
        let ret = "";
        let left = d;
        let v = Math.floor(left / exports.Hour);
        if (v != 0) {
            ret += `${v}h`;
            left -= v * exports.Hour;
        }
        v = Math.floor(left / exports.Minute);
        if (v != 0) {
            ret += `${v}min`;
            left -= v * exports.Minute;
        }
        v = Math.floor(left / exports.Second);
        if (v != 0) {
            ret += `${v}s`;
            left -= v * exports.Second;
        }
        v = Math.floor(left / exports.Millisecond);
        if (v != 0) {
            ret += `${v}ms`;
            left -= v * exports.Millisecond;
        }
        v = Math.floor(left / exports.Microsecond);
        if (v != 0) {
            ret += `${v}us`;
        }
        if (ret.length == 0) {
            ret = "0us";
        }
        return ret;
    }
});
//# sourceMappingURL=duration.js.map