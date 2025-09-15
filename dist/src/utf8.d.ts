export declare class Utf8 {
    readonly raw: Uint8Array;
    private readonly indexes;
    private readonly str;
    readonly byteLength: number;
    readonly length: number;
    constructor(input: ArrayBuffer | string);
    private static loadUTF8CharCode;
    private static putUTF8CharCode;
    private static getUTF8CharLength;
    toString(): string;
    codePointAt(index: number): ArrayBuffer;
    codeUnitAt(index: number): ArrayBuffer;
}
//# sourceMappingURL=utf8.d.ts.map