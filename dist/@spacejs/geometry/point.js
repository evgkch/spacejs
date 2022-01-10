import { Vector2, Vector3 } from '/@spacejs/geometry';
export class Point2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static ['=='](a, b) {
        return a.x === b.x && a.y === b.y;
    }
    static ['!='](a, b) {
        return a.x !== b.x || a.y !== b.y;
    }
    static ['+'](a, v) {
        return new Point2(a.x + v.x, a.y + v.y);
    }
    static ['-'](a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }
    static min(a, b) {
        return new Point2(Math.min(a.x, b.x), Math.min(a.y, b.y));
    }
    static max(a, b) {
        return new Point2(Math.max(a.x, b.x), Math.max(a.y, b.y));
    }
    set [0](x) {
        this.x = x;
    }
    get [0]() {
        return this.x;
    }
    set [1](y) {
        this.y = y;
    }
    get [1]() {
        return this.y;
    }
    ['=='](a) {
        return Point2['=='](this, a);
    }
    ['!='](a) {
        return Point2['!='](this, a);
    }
    ['+'](v) {
        return Point2["+"](this, v);
    }
    ['-'](a) {
        return Point2["-"](this, a);
    }
    get min() {
        return Math.min(...this);
    }
    get max() {
        return Math.max(...this);
    }
    ['+='](v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }
    toString() {
        return `[${this.x},${this.y}]`;
    }
}
export class Point3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static ['=='](a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z;
    }
    static ['!='](a, b) {
        return a.x !== b.x || a.y !== b.y || a.z !== b.z;
    }
    static ['+'](a, v) {
        return new Point3(a.x + v.x, a.y + v.y, a.z + v.z);
    }
    static ['-'](a, b) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }
    static min(a, b) {
        return new Point3(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
    }
    static max(a, b) {
        return new Point3(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
    }
    set [0](x) {
        this.x = x;
    }
    get [0]() {
        return this.x;
    }
    set [1](y) {
        this.y = y;
    }
    get [1]() {
        return this.y;
    }
    set [2](z) {
        this.z = z;
    }
    get [2]() {
        return this.z;
    }
    ['=='](a) {
        return Point3['=='](this, a);
    }
    ['!='](a) {
        return Point3['!='](this, a);
    }
    ['+'](v) {
        return Point3["+"](this, v);
    }
    ['-'](a) {
        return Point3["-"](this, a);
    }
    get min() {
        return Math.min(...this);
    }
    get max() {
        return Math.max(...this);
    }
    ['+='](v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
    }
    toString() {
        return `[${this.x},${this.y},${this.z}]`;
    }
}
