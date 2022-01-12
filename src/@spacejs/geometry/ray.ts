import { IVector3, IPoint3 } from '/@spacejs/geometry'

export interface IRay {    
    emit: (t: number) => IPoint3
}

export class Ray implements IRay {
    constructor(private o: IPoint3, private v: IVector3) {}
    emit(t: number) {
        return ( this.o )['+']( (this.v)['*'](t) );
    };
}