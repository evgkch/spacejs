export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static ['=='](v, w) {
        return v.x === w.x && v.y === w.y;
    }
    static ['!='](v, w) {
        return v.x !== w.x || v.y !== w.y;
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
    static min(v, w) {
        return new Vector2(Math.min(v.x, w.x), Math.min(v.y, w.y));
    }
    static max(v, w) {
        return new Vector2(Math.max(v.x, w.x), Math.max(v.y, w.y));
    }
    static normalize(v) {
        return Vector2['/'](v, v.length);
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
    ['!='](v) {
        return Vector2['!='](this, v);
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
    get min() {
        return Math.min(...this);
    }
    get max() {
        return Math.max(...this);
    }
    get lengthSquared() {
        return this.x * this.x + this.y * this.y;
    }
    get length() {
        return Math.sqrt(this.lengthSquared);
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
    static ['!='](v, w) {
        return v.x !== w.x || v.y !== w.y || v.z !== w.z;
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
    static min(v, w) {
        return new Vector3(Math.min(v.x, w.x), Math.min(v.y, w.y), Math.min(v.z, w.z));
    }
    static max(v, w) {
        return new Vector3(Math.max(v.x, w.x), Math.max(v.y, w.y), Math.max(v.z, w.z));
    }
    static normalize(v) {
        return Vector3['/'](v, v.length);
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
    ['!='](v) {
        return Vector3['!='](this, v);
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
    get min() {
        return Math.min(...this);
    }
    get max() {
        return Math.max(...this);
    }
    get lengthSquared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    get length() {
        return Math.sqrt(this.lengthSquared);
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
