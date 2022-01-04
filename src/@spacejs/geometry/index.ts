export interface IPoint2 {
    x: number
    y: number
    0: number
    1: number
    ['=='](a: IPoint2): boolean
    ['+'](v: IVector2): IPoint2
    ['-'](a: IPoint2): IVector2
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
    ['+'](v: IVector3): IPoint3
    ['-'](a: IPoint3): IVector3
    ['+='](v: IVector3): this
}

export interface IVector2 {
    x: number
    y: number
    0: number
    1: number
    ['=='](v: IVector2): boolean
    ['+'](v: IVector2): IVector2
    ['-'](v: IVector2): IVector2
    ['*'](k: number): IVector2
    ['/'](k: number): IVector2    
    // Dot product
    ['⋅'](v: IVector2): number
    // Wedge product (absolute part)
    ['∧'](v: IVector2): number
    ['+='](v: IVector2): this
    ['-='](v: IVector2): this
    ['*='](k: number): this
    ['/='](k: number): this
}

export interface IVector3 {
    x: number
    y: number
    z: number
    0: number
    1: number
    2: number
    ['=='](v: IVector3): boolean
    ['+'](v: IVector3): IVector3
    ['-'](v: IVector3): IVector3
    ['*'](k: number): IVector3
    ['/'](k: number): IVector3    
    // Dot product
    ['⋅'](v: IVector3): number
    // Wedge product [e1 ∧ e2, e2 ∧ e3, e3 ∧ e1]
    ['∧'](v: IVector3): IVector3
    ['+='](v: IVector3): this
    ['-='](v: IVector3): this
    ['*='](k: number): this
    ['/='](k: number): this
}

export class Point2 implements IPoint2 {

    static ['=='](a: IPoint2, b: IPoint2) {
        return a.x === b.x && a.y === b.y;
    }

    static ['+'](a: IPoint2, v: IVector2) {
        return new Point2(a.x + v.x, a.y + v.y);
    }

    static ['-'](a: IPoint2, b: IPoint2) {
        return new Vector2(a.x - b.x, a.y - b.y);
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

    ['+'](v: IVector2): IPoint2 {
        return Point2["+"](this, v);
    }

    ['-'](a: IPoint2): IVector2 {
        return Point2["-"](this, a);
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

    static ['+'](a: IPoint3, v: IVector3) {
        return new Point3(a.x + v.x, a.y + v.y, a.z + v.z);
    }

    static ['-'](a: IPoint3, b: IPoint3) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
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

    ['+'](v: IVector3): IPoint3 {
        return Point3["+"](this, v);
    }

    ['-'](a: IPoint3): IVector3 {
        return Point3["-"](this, a);
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

export class Vector2 implements IVector2 {

    static ['=='](v: IVector2, w: IVector2) {
        return v.x === w.x && v.y === w.y;
    }

    static ['+'](v: IVector2, w: IVector2) {
        return new Vector2(v.x + w.x, v.y + w.y);
    }

    static ['-'](v: IVector2, w: IVector2) {
        return new Vector2(v.x - w.x, v.y - w.y);
    }

    static ['*'](v: IVector2, k: number) {
        return new Vector2(v.x * k, v.y * k);
    }

    static ['/'](v: IVector2, k: number) {
        return new Vector2(v.x / k, v.y / k);
    }

    static ['⋅'](v: IVector2, w: IVector2) {
        return v.x * w.x + v.y * w.y;
    }

    static ['∧'](v: IVector2, w: IVector2) {
        return v.x * w.y - v.y * w.x;
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

    ['=='](v: IVector2): boolean {
        return Vector2['=='](this, v);
    }

    ['+'](v: IVector2): IVector2 {
        return Vector2["+"](this, v);
    }

    ['-'](v: IVector2): IVector2 {
        return Vector2["-"](this, v);
    }

    ['*'](k: number): IVector2 {
        return Vector2['*'](this, k);
    }

    ['/'](k: number): IVector2 {
        return Vector2['/'](this, k);
    }

    ['⋅'](v: IVector2): number {
        return Vector2["⋅"](this, v);
    }

    ['∧'](v: IVector2): number {
        return Vector2['∧'](this, v);
    }

    ['-='](v: IVector2) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    ['+='](v: IVector2) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    ['*='](k: number) {
        this.x *= k;
        this.y *= k;
        return this;
    }

    ['/='](k: number) {
        this.x /= k;
        this.y /= k;
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

export class Vector3 implements IVector3 {

    static ['=='](v: IVector3, w: IVector3) {
        return v.x === w.x && v.y === w.y && v.z === w.z;
    }

    static ['+'](v: IVector3, w: IVector3) {
        return new Vector3(v.x + w.x, v.y + w.y, v.z + w.z);
    }

    static ['-'](v: IVector3, w: IVector3) {
        return new Vector3(v.x - w.x, v.y - w.y, v.z - w.z);
    }

    static ['*'](v: IVector3, k: number) {
        return new Vector3(v.x * k, v.y * k, v.z * k);
    }

    static ['/'](v: IVector3, k: number) {
        return new Vector3(v.x / k, v.y / k, v.z / k);
    }

    static ['⋅'](v: IVector3, w: IVector3) {
        return v.x * w.x + v.y * w.y + v.z * w.z;
    }

    static ['∧'](v: IVector3, w: IVector3) {
        return new Vector3(v.x * w.y - v.y * w.x, v.y * w.z - v.z * w.y, v.z * w.x - v.x * w.z);
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

    ['=='](v: IVector3): boolean {
        return Vector3['=='](this, v);
    }

    ['+'](v: IVector3): IVector3 {
        return Vector3["+"](this, v);
    }

    ['-'](v: IVector3): IVector3 {
        return Vector3["-"](this, v);
    }

    ['*'](k: number): IVector3 {
        return Vector3['*'](this, k);
    }

    ['/'](k: number): IVector3 {
        return Vector3['/'](this, k);
    }

    ['⋅'](v: IVector3): number {
        return Vector3["⋅"](this, v);
    }

    ['∧'](v: IVector3): IVector3 {
        return Vector3['∧'](this, v);
    }

    ['-='](v: IVector3) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    ['+='](v: IVector3) {
        this.x += v.x;
        this.y += v.y;
        this.z -= v.z;
        return this;
    }

    ['*='](k: number) {
        this.x *= k;
        this.y *= k;
        this.z *= k;
        return this;
    }

    ['/='](k: number) {
        this.x /= k;
        this.y /= k;
        this.z /= k;
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
