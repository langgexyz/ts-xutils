export function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function UniqFlag() {
    return RandomInt(0x10000000, Number.MAX_SAFE_INTEGER).toString(16);
}
//# sourceMappingURL=typefunc.js.map