export const Microsecond = 1;
export const Millisecond = 1000 * Microsecond;
export const Second = 1000 * Millisecond;
export const Minute = 60 * Second;
export const Hour = 60 * Minute;
export function formatDuration(d) {
    let ret = "";
    let left = d;
    let v = Math.floor(left / Hour);
    if (v != 0) {
        ret += `${v}h`;
        left -= v * Hour;
    }
    v = Math.floor(left / Minute);
    if (v != 0) {
        ret += `${v}min`;
        left -= v * Minute;
    }
    v = Math.floor(left / Second);
    if (v != 0) {
        ret += `${v}s`;
        left -= v * Second;
    }
    v = Math.floor(left / Millisecond);
    if (v != 0) {
        ret += `${v}ms`;
        left -= v * Millisecond;
    }
    v = Math.floor(left / Microsecond);
    if (v != 0) {
        ret += `${v}us`;
    }
    if (ret.length == 0) {
        ret = "0us";
    }
    return ret;
}
//# sourceMappingURL=duration.js.map