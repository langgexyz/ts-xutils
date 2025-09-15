"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertError = void 0;
exports.assert = assert;
class AssertError {
    constructor(m) {
        this.name = "AssertError";
        this.message = m;
    }
}
exports.AssertError = AssertError;
function assert(condition, msg = "") {
    if (!condition) {
        console.assert(condition, msg);
        throw new AssertError(msg);
    }
}
//# sourceMappingURL=assert.js.map