import { IVector2, IVector3, Vector2, Vector3 } from '/@spacejs/geometry'

export interface IPoint2 {
    x: number
    y: number
    0: number
    1: number
    ['=='](a: IPoint2): boolean
    ['!='](a: IPoint2): boolean
    ['+'](v: IVector2): IPoint2
    ['-'](a: IPoint2): IVector2
    readonly min: number
    readonly max: number
    ['+='](v: IVector2): this
}

export interface IPoint3 {
    x: number
    y: number
    z: number
    0: number
    1: number
    2: number
    ['=='](a: IPoint3): boolean
    ['!='](a: IPoint3): boolean
    ['+'](v: IVector3): IPoint3
    ['-'](a: IPoint3): IVector3
    readonly min: number
    readonly max: number
    ['+='](v: IVector3): this
}

export class Point2 implements IPoint2 {

    static ['=='](a: IPoint2, b: IPoint2) {
        return a.x === b.x && a.y === b.y;
    }

    static ['!='](a: IPoint2, b: IPoint2) {
        return a.x !== b.x || a.y !== b.y;
    }

    static ['+'](a: IPoint2, v: IVector2) {
        return new Point2(a.x + v.x, a.y + v.y);
    }

    static ['-'](a: IPoint2, b: IPoint2) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static min(a: IPoint2, b: IPoint2) {
        return new Point2(Math.min(a.x, b.x), Math.min(a.y, b.y));
    }

    static max(a: IPoint2, b: IPoint2) {
        return new Point2(Math.max(a.x, b.x), Math.max(a.y, b.y));
    }

    constructor(public x: number = 0, public y: number = 0) {}

    set [0](x: number) {
        this.x = x;
    }

    get [0]() {
        return this.x;
    }

    set [1](y: number) {
        this.y = y;
    }

    get [1]() {
        return this.y;
    }

    ['=='](a: IPoint2): boolean {
        return Point2['=='](this, a);
    }

    ['!='](a: IPoint2): boolean {
        return Point2['!='](this, a);
    }

    ['+'](v: IVector2): IPoint2 {
        return Point2["+"](this, v);
    }

    ['-'](a: IPoint2): IVector2 {
        return Point2["-"](this, a);
    }

    get min() {
        return Math.min(...this);
    }

    get max() {
        return Math.max(...this);
    }

    ['+='](v: IVector2) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    *[Symbol.iterator](): IterableIterator<number> {
        yield this.x;
        yield this.y;
    }

    toString() {
        return `[${this.x},${this.y}]`;
    }

}

export class Point3 implements IPoint3 {

    static ['=='](a: IPoint3, b: IPoint3) {
        return a.x === b.x && a.y === b.y && a.z === b.z;
    }

    static ['!='](a: IPoint3, b: IPoint3) {
        return a.x !== b.x || a.y !== b.y || a.z !== b.z;
    }

    static ['+'](a: IPoint3, v: IVector3) {
        return new Point3(a.x + v.x, a.y + v.y, a.z + v.z);
    }

    static ['-'](a: IPoint3, b: IPoint3) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    static min(a: IPoint3, b: IPoint3) {
        return new Point3(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
    }

    static max(a: IPoint3, b: IPoint3) {
        return new Point3(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
    }

    constructor(public x: number = 0, public y: number = 0, public z: number = 0) {}

    set [0](x: number) {
        this.x = x;
    }

    get [0]() {
        return this.x;
    }

    set [1](y: number) {
        this.y = y;
    }

    get [1]() {
        return this.y;
    }

    set [2](z: number) {
        this.z = z;
    }

    get [2]() {
        return this.z;
    }

    ['=='](a: IPoint3): boolean {
        return Point3['=='](this, a);
    }

    ['!='](a: IPoint3): boolean {
        return Point3['!='](this, a);
    }

    ['+'](v: IVector3): IPoint3 {
        return Point3["+"](this, v);
    }

    ['-'](a: IPoint3): IVector3 {
        return Point3["-"](this, a);
    }

    get min() {
        return Math.min(...this);
    }

    get max() {
        return Math.max(...this);
    }

    ['+='](v: IVector3) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    *[Symbol.iterator](): IterableIterator<number> {
        yield this.x;
        yield this.y;
        yield this.z;
    }

    toString() {
        return `[${this.x},${this.y},${this.z}]`;
    }

}