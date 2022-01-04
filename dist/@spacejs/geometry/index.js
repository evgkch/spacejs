export class Point2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static ['=='](a, b) {
        return a.x === b.x && a.y === b.y;
    }
    static ['+'](a, v) {
        return new Point2(a.x + v.x, a.y + v.y);
    }
    static ['-'](a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
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
    ['+'](v) {
        return Point2["+"](this, v);
    }
    ['-'](a) {
        return Point2["-"](this, a);
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
    static ['+'](a, v) {
        return new Point3(a.x + v.x, a.y + v.y, a.z + v.z);
    }
    static ['-'](a, b) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
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
    ['+'](v) {
        return Point3["+"](this, v);
    }
    ['-'](a) {
        return Point3["-"](this, a);
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
export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static ['=='](v, w) {
        return v.x === w.x && v.y === w.y;
    }
    static ['+'](v, w) {
        return new Vector2(v.x + w.x, v.y + w.y);
    }
    static ['-'](v, w) {
        return new Vector2(v.x - w.x, v.y - w.y);
    }
    static ['*'](v, k) {
        return new Vector2(v.x * k, v.y * k);
    }
    static ['/'](v, k) {
        return new Vector2(v.x / k, v.y / k);
    }
    static ['⋅'](v, w) {
        return v.x * w.x + v.y * w.y;
    }
    static ['∧'](v, w) {
        return v.x * w.y - v.y * w.x;
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
    ['=='](v) {
        return Vector2['=='](this, v);
    }
    ['+'](v) {
        return Vector2["+"](this, v);
    }
    ['-'](v) {
        return Vector2["-"](this, v);
    }
    ['*'](k) {
        return Vector2['*'](this, k);
    }
    ['/'](k) {
        return Vector2['/'](this, k);
    }
    ['⋅'](v) {
        return Vector2["⋅"](this, v);
    }
    ['∧'](v) {
        return Vector2['∧'](this, v);
    }
    ['-='](v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    ['+='](v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    ['*='](k) {
        this.x *= k;
        this.y *= k;
        return this;
    }
    ['/='](k) {
        this.x /= k;
        this.y /= k;
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
export class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static ['=='](v, w) {
        return v.x === w.x && v.y === w.y && v.z === w.z;
    }
    static ['+'](v, w) {
        return new Vector3(v.x + w.x, v.y + w.y, v.z + w.z);
    }
    static ['-'](v, w) {
        return new Vector3(v.x - w.x, v.y - w.y, v.z - w.z);
    }
    static ['*'](v, k) {
        return new Vector3(v.x * k, v.y * k, v.z * k);
    }
    static ['/'](v, k) {
        return new Vector3(v.x / k, v.y / k, v.z / k);
    }
    static ['⋅'](v, w) {
        return v.x * w.x + v.y * w.y + v.z * w.z;
    }
    static ['∧'](v, w) {
        return new Vector3(v.x * w.y - v.y * w.x, v.y * w.z - v.z * w.y, v.z * w.x - v.x * w.z);
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
    ['=='](v) {
        return Vector3['=='](this, v);
    }
    ['+'](v) {
        return Vector3["+"](this, v);
    }
    ['-'](v) {
        return Vector3["-"](this, v);
    }
    ['*'](k) {
        return Vector3['*'](this, k);
    }
    ['/'](k) {
        return Vector3['/'](this, k);
    }
    ['⋅'](v) {
        return Vector3["⋅"](this, v);
    }
    ['∧'](v) {
        return Vector3['∧'](this, v);
    }
    ['-='](v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    ['+='](v) {
        this.x += v.x;
        this.y += v.y;
        this.z -= v.z;
        return this;
    }
    ['*='](k) {
        this.x *= k;
        this.y *= k;
        this.z *= k;
        return this;
    }
    ['/='](k) {
        this.x /= k;
        this.y /= k;
        this.z /= k;
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
