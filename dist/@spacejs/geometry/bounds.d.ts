import { IVector2, IVector3, IPoint2, IPoint3, Point2, Point3 } from '/@spacejs/geometry';
export interface IBounds2 {
    pMin: IPoint2;
    pMax: IPoint2;
    0: IPoint2;
    1: IPoint2;
    readonly diagonal: IVector2;
    readonly area: number;
    ['=='](bounds: IBounds2): boolean;
    ['!='](bounds: IBounds2): boolean;
    /**
     * The corner() method returns the coordinates of one of the four corners of the bounding box.
     */
    corner(n: number): IPoint2;
    /**
     * The lerp() method linearly interpolates between the corners of the box
     * by the given amount in each dimension.
     */
    lerp(a: IPoint2): IPoint2;
    /**
     * offset() returns the continuous position of a point relative to the corners of the box,
     * where a point at the minimum corner has offset (0,0),
     * a point at the maximum corner has offset (1,1), and so forth.
     */
    offset(a: IPoint2): IVector2;
    overlaps(b: IBounds2): boolean;
    expand(t: number): this;
}
export interface IBounds3 {
    pMin: IPoint3;
    pMax: IPoint3;
    0: IPoint3;
    1: IPoint3;
    readonly diagonal: IVector3;
    readonly area: number;
    readonly volume: number;
    ['=='](bounds: IBounds3): boolean;
    ['!='](bounds: IBounds3): boolean;
    /**
     * The corner() method returns the coordinates of one of the eight corners of the bounding box.
     */
    corner(n: number): IPoint3;
    /**
     * The lerp() method linearly interpolates between the corners of the box
     * by the given amount in each dimension.
     */
    lerp(a: IPoint3): IPoint3;
    /**
     * offset() returns the continuous position of a point relative to the corners of the box,
     * where a point at the minimum corner has offset (0,0,0),
     * a point at the maximum corner has offset (1,1,1), and so forth.
     */
    offset(a: IPoint3): IVector3;
    overlaps(b: IBounds3): boolean;
    expand(t: number): this;
}
export declare class Bounds2 implements IBounds2 {
    static ['=='](b1: IBounds2, b2: IBounds2): boolean;
    static ['!='](b1: IBounds2, b2: IBounds2): boolean;
    /**
     * Given a bounding box and a point, the union() function returns a new bounding box
     * that encompasses that point as well as the original box.
     */
    static union(b: IBounds2, a: IPoint2): Bounds2;
    /**
     * Intersection of Two Bounding Boxes
     */
    static intersect(b1: IBounds2, b2: IBounds2): Bounds2;
    /**
     * We are able to determine if two bounding boxes overlap by seeing if their extents overlap in all of x and y
     */
    static overlaps(b1: IBounds2, b2: IBounds2): boolean;
    /**
     * Two 1D containment tests determine if a given point is inside the bounding box:
     */
    static inside(a: IPoint2, b: IBounds2): boolean;
    /**
     * The expand() function pads the bounding box by a constant factor in all dimensions.
     */
    static expand(b: IBounds2, t: number): Bounds2;
    pMin: IPoint2;
    pMax: IPoint2;
    constructor(a: IPoint2, b: IPoint2);
    get [0](): IPoint2;
    get [1](): IPoint2;
    get diagonal(): IVector2;
    get area(): number;
    ['=='](b: IBounds2): boolean;
    ['!='](b: IBounds2): boolean;
    corner(n: number): Point2;
    lerp(a: IPoint2): Point2;
    offset(a: IPoint2): IVector2;
    overlaps(b: IBounds2): boolean;
    expand(t: number): this;
    [Symbol.iterator](): IterableIterator<IPoint2>;
}
export declare class Bounds3 implements IBounds3 {
    static ['=='](b1: IBounds3, b2: IBounds3): boolean;
    static ['!='](b1: IBounds3, b2: IBounds3): boolean;
    /**
     * Given a bounding box and a point, the union() function returns a new bounding box
     * that encompasses that point as well as the original box.
     */
    static union(b: IBounds3, a: IPoint3): Bounds3;
    /**
     * Intersection of Two Bounding Boxes
     */
    static intersect(b1: IBounds3, b2: IBounds3): Bounds3;
    /**
     * We are able to determine if two bounding boxes overlap by seeing if their extents overlap in all of x, y and z
     */
    static overlaps(b1: IBounds3, b2: IBounds3): boolean;
    /**
     * Three 1D containment tests determine if a given point is inside the bounding box:
     */
    static inside(a: IPoint3, b: IBounds3): boolean;
    /**
     * The expand() function pads the bounding box by a constant factor in all dimensions.
     */
    static expand(b: IBounds3, t: number): Bounds3;
    pMin: IPoint3;
    pMax: IPoint3;
    constructor(a: IPoint3, b: IPoint3);
    get [0](): IPoint3;
    get [1](): IPoint3;
    get diagonal(): IVector3;
    get area(): number;
    get volume(): number;
    ['=='](b: IBounds3): boolean;
    ['!='](b: IBounds3): boolean;
    corner(n: number): Point3;
    lerp(a: IPoint3): Point3;
    offset(a: IPoint3): IVector3;
    overlaps(b: IBounds3): boolean;
    expand(t: number): this;
    [Symbol.iterator](): IterableIterator<IPoint3>;
}
