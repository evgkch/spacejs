import { Point2, Point3, Vector2, Vector3 } from '/@spacejs/geometry';
import { lerp } from '/@spacejs/utils';
export class Bounds2 {
    constructor(a, b) {
        this.pMin = Point2.min(a, b);
        this.pMax = Point2.max(a, b);
    }
    static ['=='](b1, b2) {
        return (b1.pMin)['=='](b2.pMin) && (b1.pMax)['=='](b2.pMax);
    }
    static ['!='](b1, b2) {
        return (b1.pMin)['!='](b2.pMin) || (b1.pMax)['!='](b2.pMax);
    }
    /**
     * Given a bounding box and a point, the union() function returns a new bounding box
     * that encompasses that point as well as the original box.
     */
    static union(b, a) {
        return new Bounds2(Point2.min(b.pMin, a), Point2.max(b.pMax, a));
    }
    /**
     * Intersection of Two Bounding Boxes
     */
    static intersect(b1, b2) {
        return new Bounds2(Point2.min(b1.pMin, b2.pMin), Point2.max(b1.pMax, b2.pMax));
    }
    /**
     * We are able to determine if two bounding boxes overlap by seeing if their extents overlap in all of x and y
     */
    static overlaps(b1, b2) {
        const x = (b1.pMax.x >= b2.pMin.x) && (b1.pMin.x <= b2.pMax.x);
        const y = (b1.pMax.y >= b2.pMin.y) && (b1.pMin.y <= b2.pMax.y);
        return x && y;
    }
    /**
     * Two 1D containment tests determine if a given point is inside the bounding box:
     */
    static inside(a, b) {
        return a.x >= b.pMin.x && a.x <= b.pMax.x &&
            a.y >= b.pMin.y && a.y <= b.pMax.y;
    }
    /**
     * The expand() function pads the bounding box by a constant factor in all dimensions.
     */
    static expand(b, t) {
        const v = new Vector2(t, t);
        return new Bounds2((b.pMin)['-'](v), (b.pMax)['+'](v));
    }
    get [0]() {
        return this.pMin;
    }
    get [1]() {
        return this.pMax;
    }
    get diagonal() {
        return (this.pMax)['-'](this.pMin);
    }
    get area() {
        const d = this.diagonal;
        return d.x * d.y;
    }
    ['=='](b) {
        return Bounds2['=='](this, b);
    }
    ['!='](b) {
        return Bounds2['!='](this, b);
    }
    corner(n) {
        return new Point2(this[n & 1 ? 1 : 0].x, this[n & 2 ? 1 : 0].y);
    }
    lerp(a) {
        return new Point2(lerp(a.x, this.pMin.x, this.pMax.x), lerp(a.y, this.pMin.y, this.pMax.y));
    }
    offset(a) {
        const o = (a)['-'](this.pMin);
        if (this.pMax.x > this.pMin.x)
            o.x /= (this.pMax.x - this.pMin.x);
        if (this.pMax.y > this.pMin.y)
            o.y /= (this.pMax.y - this.pMin.y);
        return o;
    }
    overlaps(b) {
        return Bounds2.overlaps(this, b);
    }
    expand(t) {
        this.pMin.x -= t;
        this.pMin.y -= t;
        this.pMax.x += t;
        this.pMax.y += t;
        return this;
    }
    *[Symbol.iterator]() {
        yield this.pMin;
        yield this.pMax;
    }
}
export class Bounds3 {
    constructor(a, b) {
        this.pMin = Point3.min(a, b);
        this.pMax = Point3.max(a, b);
    }
    static ['=='](b1, b2) {
        return (b1.pMin)['=='](b2.pMin) && (b1.pMax)['=='](b2.pMax);
    }
    static ['!='](b1, b2) {
        return (b1.pMin)['!='](b2.pMin) || (b1.pMax)['!='](b2.pMax);
    }
    /**
     * Given a bounding box and a point, the union() function returns a new bounding box
     * that encompasses that point as well as the original box.
     */
    static union(b, a) {
        return new Bounds3(Point3.min(b.pMin, a), Point3.max(b.pMax, a));
    }
    /**
     * Intersection of Two Bounding Boxes
     */
    static intersect(b1, b2) {
        return new Bounds3(Point3.min(b1.pMin, b2.pMin), Point3.max(b1.pMax, b2.pMax));
    }
    /**
     * We are able to determine if two bounding boxes overlap by seeing if their extents overlap in all of x, y and z
     */
    static overlaps(b1, b2) {
        const x = (b1.pMax.x >= b2.pMin.x) && (b1.pMin.x <= b2.pMax.x);
        const y = (b1.pMax.y >= b2.pMin.y) && (b1.pMin.y <= b2.pMax.y);
        const z = (b1.pMax.z >= b2.pMin.z) && (b1.pMin.z <= b2.pMax.z);
        return x && y && z;
    }
    /**
     * Three 1D containment tests determine if a given point is inside the bounding box:
     */
    static inside(a, b) {
        return a.x >= b.pMin.x && a.x <= b.pMax.x &&
            a.y >= b.pMin.y && a.y <= b.pMax.y &&
            a.z >= b.pMin.z && a.z <= b.pMax.z;
    }
    /**
     * The expand() function pads the bounding box by a constant factor in all dimensions.
     */
    static expand(b, t) {
        const v = new Vector3(t, t, t);
        return new Bounds3((b.pMin)['-'](v), (b.pMax)['+'](v));
    }
    get [0]() {
        return this.pMin;
    }
    get [1]() {
        return this.pMax;
    }
    get diagonal() {
        return (this.pMax)['-'](this.pMin);
    }
    get area() {
        const d = this.diagonal;
        return d.x * d.y * d.z;
    }
    get volume() {
        const d = this.diagonal;
        return 2 * (d.x * d.y + d.x * d.z + d.y * d.z);
    }
    ['=='](b) {
        return Bounds3['=='](this, b);
    }
    ['!='](b) {
        return Bounds3['!='](this, b);
    }
    corner(n) {
        return new Point3(this[n & 1 ? 1 : 0].x, this[n & 2 ? 1 : 0].y, this[n & 4 ? 1 : 0].z);
    }
    lerp(a) {
        return new Point3(lerp(a.x, this.pMin.x, this.pMax.x), lerp(a.y, this.pMin.y, this.pMax.y), lerp(a.z, this.pMin.z, this.pMax.z));
    }
    offset(a) {
        const o = (a)['-'](this.pMin);
        if (this.pMax.x > this.pMin.x)
            o.x /= (this.pMax.x - this.pMin.x);
        if (this.pMax.y > this.pMin.y)
            o.y /= (this.pMax.y - this.pMin.y);
        if (this.pMax.z > this.pMin.z)
            o.z /= (this.pMax.z - this.pMin.z);
        return o;
    }
    overlaps(b) {
        return Bounds3.overlaps(this, b);
    }
    expand(t) {
        this.pMin.x -= t;
        this.pMin.y -= t;
        this.pMin.z -= t;
        this.pMax.x += t;
        this.pMax.y += t;
        this.pMax.z += t;
        return this;
    }
    *[Symbol.iterator]() {
        yield this.pMin;
        yield this.pMax;
    }
}
