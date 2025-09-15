var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Delay } from "../src/delay";
import { Millisecond, Second } from "../src/duration";
describe("delay", () => {
    let testCases = [Second, 2 * Second, 3 * Second, 4 * Second, 500 * Millisecond, Second + 100 * Millisecond];
    let sum = 0;
    for (const testCase of testCases) {
        sum += testCase;
    }
    jest.setTimeout((sum + Second) / Millisecond);
    test("delay", () => __awaiter(void 0, void 0, void 0, function* () {
        for (const v of testCases) {
            let t1 = Date.now();
            yield Delay(v);
            expect(Math.abs(Date.now() - t1 - v / Millisecond)).toBeLessThan(10);
        }
    }));
});
//# sourceMappingURL=delay.test.js.map