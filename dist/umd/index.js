(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./src/duration", "./src/utf8", "./src/logger", "./src/assert", "./src/typefunc", "./src/delay"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Delay = exports.UniqFlag = exports.RandomInt = exports.assert = exports.AssertError = exports.NoLog = exports.ConsoleLogger = exports.Utf8 = exports.formatDuration = exports.Millisecond = exports.Microsecond = exports.Minute = exports.Second = exports.Hour = void 0;
    var duration_1 = require("./src/duration");
    Object.defineProperty(exports, "Hour", { enumerable: true, get: function () { return duration_1.Hour; } });
    Object.defineProperty(exports, "Second", { enumerable: true, get: function () { return duration_1.Second; } });
    Object.defineProperty(exports, "Minute", { enumerable: true, get: function () { return duration_1.Minute; } });
    Object.defineProperty(exports, "Microsecond", { enumerable: true, get: function () { return duration_1.Microsecond; } });
    Object.defineProperty(exports, "Millisecond", { enumerable: true, get: function () { return duration_1.Millisecond; } });
    Object.defineProperty(exports, "formatDuration", { enumerable: true, get: function () { return duration_1.formatDuration; } });
    var utf8_1 = require("./src/utf8");
    Object.defineProperty(exports, "Utf8", { enumerable: true, get: function () { return utf8_1.Utf8; } });
    var logger_1 = require("./src/logger");
    Object.defineProperty(exports, "ConsoleLogger", { enumerable: true, get: function () { return logger_1.ConsoleLogger; } });
    Object.defineProperty(exports, "NoLog", { enumerable: true, get: function () { return logger_1.NoLog; } });
    var assert_1 = require("./src/assert");
    Object.defineProperty(exports, "AssertError", { enumerable: true, get: function () { return assert_1.AssertError; } });
    Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return assert_1.assert; } });
    var typefunc_1 = require("./src/typefunc");
    Object.defineProperty(exports, "RandomInt", { enumerable: true, get: function () { return typefunc_1.RandomInt; } });
    Object.defineProperty(exports, "UniqFlag", { enumerable: true, get: function () { return typefunc_1.UniqFlag; } });
    var delay_1 = require("./src/delay");
    Object.defineProperty(exports, "Delay", { enumerable: true, get: function () { return delay_1.Delay; } });
});
//# sourceMappingURL=index.js.map