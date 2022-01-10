import { IVector2, IVector3, Vector2, Vector3 } from '/@spacejs/geometry';
export interface IPoint2 {
    x: number;
    y: number;
    0: number;
    1: number;
    ['=='](a: IPoint2): boolean;
    ['!='](a: IPoint2): boolean;
    ['+'](v: IVector2): IPoint2;
    ['-'](a: IPoint2): IVector2;
    readonly min: number;
    readonly max: number;
    ['+='](v: IVector2): this;
}
export interface IPoint3 {
    x: number;
    y: number;
    z: number;
    0: number;
    1: number;
    2: number;
    ['=='](a: IPoint3): boolean;
    ['!='](a: IPoint3): boolean;
    ['+'](v: IVector3): IPoint3;
    ['-'](a: IPoint3): IVector3;
    readonly min: number;
    readonly max: number;
    ['+='](v: IVector3): this;
}
export declare class Point2 implements IPoint2 {
    x: number;
    y: number;
    static ['=='](a: IPoint2, b: IPoint2): boolean;
    static ['!='](a: IPoint2, b: IPoint2): boolean;
    static ['+'](a: IPoint2, v: IVector2): Point2;
    static ['-'](a: IPoint2, b: IPoint2): Vector2;
    static min(a: IPoint2, b: IPoint2): Point2;
    static max(a: IPoint2, b: IPoint2): Point2;
    constructor(x?: number, y?: number);
    set [0](x: number);
    get [0](): number;
    set [1](y: number);
    get [1](): number;
    ['=='](a: IPoint2): boolean;
    ['!='](a: IPoint2): boolean;
    ['+'](v: IVector2): IPoint2;
    ['-'](a: IPoint2): IVector2;
    get min(): number;
    get max(): number;
    ['+='](v: IVector2): this;
    [Symbol.iterator](): IterableIterator<number>;
    toString(): string;
}
export declare class Point3 implements IPoint3 {
    x: number;
    y: number;
    z: number;
    static ['=='](a: IPoint3, b: IPoint3): boolean;
    static ['!='](a: IPoint3, b: IPoint3): boolean;
    static ['+'](a: IPoint3, v: IVector3): Point3;
    static ['-'](a: IPoint3, b: IPoint3): Vector3;
    static min(a: IPoint3, b: IPoint3): Point3;
    static max(a: IPoint3, b: IPoint3): Point3;
    constructor(x?: number, y?: number, z?: number);
    set [0](x: number);
    get [0](): number;
    set [1](y: number);
    get [1](): number;
    set [2](z: number);
    get [2](): number;
    ['=='](a: IPoint3): boolean;
    ['!='](a: IPoint3): boolean;
    ['+'](v: IVector3): IPoint3;
    ['-'](a: IPoint3): IVector3;
    get min(): number;
    get max(): number;
    ['+='](v: IVector3): this;
    [Symbol.iterator](): IterableIterator<number>;
    toString(): string;
}
