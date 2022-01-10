import { IVector2, IVector3, IPoint2, IPoint3, Point2, Point3, Vector2, Vector3 } from '/@spacejs/geometry'
import { lerp } from '/@spacejs/utils'

export interface IBounds2 {
    pMin: IPoint2
    pMax: IPoint2
    0: IPoint2
    1: IPoint2
    readonly diagonal: IVector2
    readonly area: number
    ['=='](bounds: IBounds2): boolean
    ['!='](bounds: IBounds2): boolean
    /**     
     * The corner() method returns the coordinates of one of the four corners of the bounding box.
     */
    corner(n: number): IPoint2
    /**
     * The lerp() method linearly interpolates between the corners of the box
     * by the given amount in each dimension.
     */
    lerp(a: IPoint2): IPoint2
    /**     
     * offset() returns the continuous position of a point relative to the corners of the box,
     * where a point at the minimum corner has offset (0,0),
     * a point at the maximum corner has offset (1,1), and so forth.
     */
    offset(a: IPoint2): IVector2
    overlaps(b: IBounds2): boolean
    expand(t: number): this
}

export interface IBounds3 {
    pMin: IPoint3
    pMax: IPoint3
    0: IPoint3
    1: IPoint3
    readonly diagonal: IVector3
    readonly area: number
    readonly volume: number
    ['=='](bounds: IBounds3): boolean
    ['!='](bounds: IBounds3): boolean
    /**     
     * The corner() method returns the coordinates of one of the eight corners of the bounding box.
     */
    corner(n: number): IPoint3
    /**
     * The lerp() method linearly interpolates between the corners of the box
     * by the given amount in each dimension.
     */
    lerp(a: IPoint3): IPoint3
    /**     
     * offset() returns the continuous position of a point relative to the corners of the box,
     * where a point at the minimum corner has offset (0,0,0),
     * a point at the maximum corner has offset (1,1,1), and so forth.
     */
    offset(a: IPoint3): IVector3
    overlaps(b: IBounds3): boolean
    expand(t: number): this
}

export class Bounds2 implements IBounds2 {

    static ['=='](b1: IBounds2, b2: IBounds2): boolean {
        return (b1.pMin)['=='](b2.pMin) && (b1.pMax)['=='](b2.pMax);
    }

    static ['!='](b1: IBounds2, b2: IBounds2): boolean {
        return (b1.pMin)['!='](b2.pMin) || (b1.pMax)['!='](b2.pMax);
    }

    /**
     * Given a bounding box and a point, the union() function returns a new bounding box
     * that encompasses that point as well as the original box.
     */
    static union(b: IBounds2, a: IPoint2) {
        return new Bounds2(
            Point2.min(b.pMin, a),
            Point2.max(b.pMax, a)
        );
    }

    /**     
     * Intersection of Two Bounding Boxes     
     */
    static intersect(b1: IBounds2, b2: IBounds2) {
        return new Bounds2(
            Point2.min(b1.pMin, b2.pMin),
            Point2.max(b1.pMax, b2.pMax)
        );
    }

    /**
     * We are able to determine if two bounding boxes overlap by seeing if their extents overlap in all of x and y
     */
    static overlaps(b1: IBounds2, b2: IBounds2) {
        const x = (b1.pMax.x >= b2.pMin.x) && (b1.pMin.x <= b2.pMax.x);
        const y = (b1.pMax.y >= b2.pMin.y) && (b1.pMin.y <= b2.pMax.y);        
        return x && y;
    }

    /**
     * Two 1D containment tests determine if a given point is inside the bounding box:
     */        
    static inside(a: IPoint2, b: IBounds2) {
        return a.x >= b.pMin.x && a.x <= b.pMax.x &&
               a.y >= b.pMin.y && a.y <= b.pMax.y;                
    }

    /**
     * The expand() function pads the bounding box by a constant factor in all dimensions.
     */
    static expand(b: IBounds2, t: number) {
        const v = new Vector2(t,t);
        return new Bounds2(
            (b.pMin)['-'](v),
            (b.pMax)['+'](v)
        );
    }

    pMin: IPoint2;
    pMax: IPoint2;

    constructor(a: IPoint2, b: IPoint2) {
        this.pMin = Point2.min(a, b);
        this.pMax = Point2.max(a, b);
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

    ['=='](b: IBounds2): boolean {
        return Bounds2['=='](this, b);
    }

    ['!='](b: IBounds2): boolean {
        return Bounds2['!='](this, b);
    }

    corner(n: number) {        
        return new Point2(
            this[n & 1 ? 1 : 0].x,
            this[n & 2 ? 1 : 0].y
        )
    }

    lerp(a: IPoint2) {
        return new Point2(
            lerp(a.x, this.pMin.x, this.pMax.x),
            lerp(a.y, this.pMin.y, this.pMax.y)
        );
    }

    offset(a: IPoint2) {
        const o = (a)['-'](this.pMin);
        if (this.pMax.x > this.pMin.x) o.x /= (this.pMax.x - this.pMin.x);
        if (this.pMax.y > this.pMin.y) o.y /= (this.pMax.y - this.pMin.y);
        return o;
    }

    overlaps(b: IBounds2): boolean {
        return Bounds2.overlaps(this, b);
    }

    expand(t: number): this {        
        this.pMin.x -= t;
        this.pMin.y -= t;
        this.pMax.x += t;
        this.pMax.y += t;
        return this;       
    }

    *[Symbol.iterator](): IterableIterator<IPoint2> {
        yield this.pMin;
        yield this.pMax;        
    }

}

export class Bounds3 implements IBounds3 {

    static ['=='](b1: IBounds3, b2: IBounds3): boolean {
        return (b1.pMin)['=='](b2.pMin) && (b1.pMax)['=='](b2.pMax);
    }

    static ['!='](b1: IBounds3, b2: IBounds3): boolean {
        return (b1.pMin)['!='](b2.pMin) || (b1.pMax)['!='](b2.pMax);
    }

    /**
     * Given a bounding box and a point, the union() function returns a new bounding box
     * that encompasses that point as well as the original box.
     */
    static union(b: IBounds3, a: IPoint3) {
        return new Bounds3(
            Point3.min(b.pMin, a),
            Point3.max(b.pMax, a)
        );
    }

    /**     
     * Intersection of Two Bounding Boxes     
     */
    static intersect(b1: IBounds3, b2: IBounds3) {
        return new Bounds3(
            Point3.min(b1.pMin, b2.pMin),
            Point3.max(b1.pMax, b2.pMax)
        );
    }

    /**
     * We are able to determine if two bounding boxes overlap by seeing if their extents overlap in all of x, y and z
     */
    static overlaps(b1: IBounds3, b2: IBounds3) {
        const x = (b1.pMax.x >= b2.pMin.x) && (b1.pMin.x <= b2.pMax.x);
        const y = (b1.pMax.y >= b2.pMin.y) && (b1.pMin.y <= b2.pMax.y);
        const z = (b1.pMax.z >= b2.pMin.z) && (b1.pMin.z <= b2.pMax.z);        
        return x && y && z;
    }

    /**
     * Three 1D containment tests determine if a given point is inside the bounding box:
     */        
     static inside(a: IPoint3, b: IBounds3) {
        return a.x >= b.pMin.x && a.x <= b.pMax.x &&
               a.y >= b.pMin.y && a.y <= b.pMax.y &&
               a.z >= b.pMin.z && a.z <= b.pMax.z;                
    }

    /**
     * The expand() function pads the bounding box by a constant factor in all dimensions.
     */
    static expand(b: IBounds3, t: number) {
        const v = new Vector3(t,t,t);
        return new Bounds3(
            (b.pMin)['-'](v),
            (b.pMax)['+'](v)
        );
    }

    pMin: IPoint3;
    pMax: IPoint3;

    constructor(a: IPoint3, b: IPoint3) {
        this.pMin = Point3.min(a, b);
        this.pMax = Point3.max(a, b);
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

    ['=='](b: IBounds3): boolean {
        return Bounds3['=='](this, b);
    }

    ['!='](b: IBounds3): boolean {
        return Bounds3['!='](this, b);
    }

    corner(n: number) {        
        return new Point3(
            this[n & 1 ? 1 : 0].x,
            this[n & 2 ? 1 : 0].y,
            this[n & 4 ? 1 : 0].z
        )
    }

    lerp(a: IPoint3) {
        return new Point3(
            lerp(a.x, this.pMin.x, this.pMax.x),
            lerp(a.y, this.pMin.y, this.pMax.y),
            lerp(a.z, this.pMin.z, this.pMax.z)
        );
    }

    offset(a: IPoint3) {
        const o = (a)['-'](this.pMin);
        if (this.pMax.x > this.pMin.x) o.x /= (this.pMax.x - this.pMin.x);
        if (this.pMax.y > this.pMin.y) o.y /= (this.pMax.y - this.pMin.y);
        if (this.pMax.z > this.pMin.z) o.z /= (this.pMax.z - this.pMin.z);
        return o;
    }

    overlaps(b: IBounds3): boolean {
        return Bounds3.overlaps(this, b);
    }

    expand(t: number): this {        
        this.pMin.x -= t;
        this.pMin.y -= t;
        this.pMin.z -= t;
        this.pMax.x += t;
        this.pMax.y += t;
        this.pMax.z += t;
        return this;       
    }

    *[Symbol.iterator](): IterableIterator<IPoint3> {
        yield this.pMin;
        yield this.pMax;
    }

}