import { IVector2, IVector3, IPoint2, IPoint3 } from '/@spacejs/geometry';
export interface IRay2 {
    emit: (t: number) => IPoint2;
}
export interface IRay3 {
    emit: (t: number) => IPoint3;
}
export declare class Ray2 implements IRay2 {
    private o;
    private v;
    constructor(o: IPoint2, v: IVector2);
    emit(t: number): IPoint2;
}
export declare class Ray3 implements IRay3 {
    private o;
    private v;
    constructor(o: IPoint3, v: IVector3);
    emit(t: number): IPoint3;
}
