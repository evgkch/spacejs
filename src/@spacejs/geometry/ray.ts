import { IVector2, IVector3, IPoint2, IPoint3 } from '/@spacejs/geometry'

export interface IRay2 {
    emit: (t: number) => IPoint2
}

export interface IRay3 {    
    emit: (t: number) => IPoint3
}

export class Ray2 implements IRay2 {
    constructor(private o: IPoint2, private v: IVector2) {}
    emit(t: number) {
        return ( this.o )['+']( (this.v)['*'](t) );
    };
}

export class Ray3 implements IRay3 {
    constructor(private o: IPoint3, private v: IVector3) {}
    emit(t: number) {
        return ( this.o )['+']( (this.v)['*'](t) );
    };
}