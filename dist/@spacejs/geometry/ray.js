export class Ray2 {
    constructor(o, v) {
        this.o = o;
        this.v = v;
    }
    emit(t) {
        return (this.o)['+']((this.v)['*'](t));
    }
    ;
}
export class Ray3 {
    constructor(o, v) {
        this.o = o;
        this.v = v;
    }
    emit(t) {
        return (this.o)['+']((this.v)['*'](t));
    }
    ;
}
