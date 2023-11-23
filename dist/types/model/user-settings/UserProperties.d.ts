export declare class UserProperty {
    ref: string;
    name: string;
    value: any;
    json(): string;
}
export declare class Stringable extends UserProperty {
    value: string;
    constructor(value: string, ref: string, name: string);
    toString(): string;
}
export declare class JSONable extends UserProperty {
    value: any;
    constructor(value: string, ref: string, name: string);
    toString(): string;
    toJson(): any;
}
export declare class Enumerable extends UserProperty {
    values: Array<any>;
    constructor(value: any, values: Array<any>, ref: string, name: string);
    toString(): string;
}
export type UserSettingsIncrementable = "fontSize" | "letterSpacing" | "lineHeight" | "wordSpacing";
export declare class Incremental extends UserProperty {
    value: number;
    min: number;
    max: number;
    step: number;
    suffix: string;
    constructor(value: number, min: number, max: number, step: number, suffix: string, ref: string, name: string);
    toString(): string;
    increment(): void;
    decrement(): void;
    countDecimals: (value: any) => any;
}
export declare class Switchable extends UserProperty {
    value: boolean;
    onValue: string;
    offValue: string;
    constructor(onValue: string, offValue: string, value: boolean, ref: string, name: string);
    toString(): string;
    switch(): void;
}
export declare class UserProperties {
    properties: Array<UserProperty>;
    addIncremental(nValue: number, min: number, max: number, step: number, suffix: string, ref: string, key: string): void;
    addStringable(nValue: string, ref: string, key: string): void;
    addJSONable(nValue: string, ref: string, key: string): void;
    addSwitchable(onValue: string, offValue: string, on: boolean, ref: string, key: string): void;
    addEnumerable(index: number, values: Array<string>, ref: string, key: string): void;
    getByRef(ref: string): UserProperty | null;
    getByKey(key: string): UserProperty | null;
}
