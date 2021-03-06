export interface IVector2 {
    x: number;
    y: number;
    0: number;
    1: number;
    ['=='](v: IVector2): boolean;
    ['!='](v: IVector2): boolean;
    ['+'](v: IVector2): IVector2;
    ['-'](v: IVector2): IVector2;
    ['*'](k: number): IVector2;
    ['/'](k: number): IVector2;
    ['⋅'](v: IVector2): number;
    ['∧'](v: IVector2): number;
    readonly min: number;
    readonly max: number;
    readonly lengthSquared: number;
    readonly length: number;
    ['+='](v: IVector2): this;
    ['-='](v: IVector2): this;
    ['*='](k: number): this;
    ['/='](k: number): this;
}
export interface IVector3 {
    x: number;
    y: number;
    z: number;
    0: number;
    1: number;
    2: number;
    ['=='](v: IVector3): boolean;
    ['!='](v: IVector3): boolean;
    ['+'](v: IVector3): IVector3;
    ['-'](v: IVector3): IVector3;
    ['*'](k: number): IVector3;
    ['/'](k: number): IVector3;
    ['⋅'](v: IVector3): number;
    ['∧'](v: IVector3): IVector3;
    readonly min: number;
    readonly max: number;
    readonly lengthSquared: number;
    readonly length: number;
    ['+='](v: IVector3): this;
    ['-='](v: IVector3): this;
    ['*='](k: number): this;
    ['/='](k: number): this;
}
export declare class Vector2 implements IVector2 {
    x: number;
    y: number;
    static ['=='](v: IVector2, w: IVector2): boolean;
    static ['!='](v: IVector2, w: IVector2): boolean;
    static ['+'](v: IVector2, w: IVector2): Vector2;
    static ['-'](v: IVector2, w: IVector2): Vector2;
    static ['*'](v: IVector2, k: number): Vector2;
    static ['/'](v: IVector2, k: number): Vector2;
    static ['⋅'](v: IVector2, w: IVector2): number;
    static ['∧'](v: IVector2, w: IVector2): number;
    static min(v: IVector2, w: IVector2): Vector2;
    static max(v: IVector2, w: IVector2): Vector2;
    static normalize(v: IVector2): Vector2;
    constructor(x?: number, y?: number);
    set [0](x: number);
    get [0](): number;
    set [1](y: number);
    get [1](): number;
    ['=='](v: IVector2): boolean;
    ['!='](v: IVector2): boolean;
    ['+'](v: IVector2): IVector2;
    ['-'](v: IVector2): IVector2;
    ['*'](k: number): IVector2;
    ['/'](k: number): IVector2;
    ['⋅'](v: IVector2): number;
    ['∧'](v: IVector2): number;
    get min(): number;
    get max(): number;
    get lengthSquared(): number;
    get length(): number;
    ['-='](v: IVector2): this;
    ['+='](v: IVector2): this;
    ['*='](k: number): this;
    ['/='](k: number): this;
    [Symbol.iterator](): IterableIterator<number>;
    toString(): string;
}
export declare class Vector3 implements IVector3 {
    x: number;
    y: number;
    z: number;
    static ['=='](v: IVector3, w: IVector3): boolean;
    static ['!='](v: IVector3, w: IVector3): boolean;
    static ['+'](v: IVector3, w: IVector3): Vector3;
    static ['-'](v: IVector3, w: IVector3): Vector3;
    static ['*'](v: IVector3, k: number): Vector3;
    static ['/'](v: IVector3, k: number): Vector3;
    static ['⋅'](v: IVector3, w: IVector3): number;
    static ['∧'](v: IVector3, w: IVector3): Vector3;
    static min(v: IVector3, w: IVector3): Vector3;
    static max(v: IVector3, w: IVector3): Vector3;
    static normalize(v: IVector3): Vector3;
    constructor(x?: number, y?: number, z?: number);
    set [0](x: number);
    get [0](): number;
    set [1](y: number);
    get [1](): number;
    set [2](z: number);
    get [2](): number;
    ['=='](v: IVector3): boolean;
    ['!='](v: IVector3): boolean;
    ['+'](v: IVector3): IVector3;
    ['-'](v: IVector3): IVector3;
    ['*'](k: number): IVector3;
    ['/'](k: number): IVector3;
    ['⋅'](v: IVector3): number;
    ['∧'](v: IVector3): IVector3;
    get min(): number;
    get max(): number;
    get lengthSquared(): number;
    get length(): number;
    ['-='](v: IVector3): this;
    ['+='](v: IVector3): this;
    ['*='](k: number): this;
    ['/='](k: number): this;
    [Symbol.iterator](): IterableIterator<number>;
    toString(): string;
}
