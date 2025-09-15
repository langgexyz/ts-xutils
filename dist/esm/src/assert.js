export class AssertError {
    constructor(m) {
        this.name = "AssertError";
        this.message = m;
    }
}
export function assert(condition, msg = "") {
    if (!condition) {
        console.assert(condition, msg);
        throw new AssertError(msg);
    }
}
//# sourceMappingURL=assert.js.map