/**
 * The lerp function linearly interpolates between the two provided values.
 * https://www.pbr-book.org/3ed-2018/Utilities/Mathematical_Routines#Lerp
 */
export function lerp(t: number, a: number, b: number): number {
    return (1 - t) * a + t * b;
}

export interface IMatrix4x4 {
    [0]: [number, number, number, number]
    [1]: [number, number, number, number]
    [2]: [number, number, number, number]
    [3]: [number, number, number, number]
    /**
     * Below there are absolute values of the matrix' minors 
     */
    readonly M00: number
    readonly M01: number
    readonly M02: number
    readonly M03: number
    readonly M10: number
    readonly M11: number
    readonly M12: number
    readonly M13: number
    readonly M20: number
    readonly M21: number
    readonly M22: number
    readonly M23: number
    readonly M30: number
    readonly M31: number
    readonly M32: number
    readonly M33: number
    readonly det: number
    readonly Transpose: IMatrix4x4
    readonly Inverse: IMatrix4x4 | false
    ['=='](m: IMatrix4x4): boolean
    ['!='](m: IMatrix4x4): boolean
    ['*'](m: IMatrix4x4): IMatrix4x4
    ['/'](m: IMatrix4x4): IMatrix4x4
    ['*='](m: IMatrix4x4): this
    ['/='](m: IMatrix4x4): this
}

export class Matrix4x4 implements IMatrix4x4 {

    static I() {
        return new Matrix4x4([
            [1,0,0,0],
            [0,1,0,0],
            [0,0,1,0],
            [0,0,0,1]
        ]);
    }

    static Transpose(m: IMatrix4x4) {
        return new Matrix4x4([
            [m[0][0], m[1][0], m[2][0], m[3][0]],
            [m[0][1], m[1][1], m[2][1], m[3][1]],
            [m[0][2], m[1][2], m[2][2] ,m[3][2]],
            [m[0][3], m[1][3], m[2][3], m[3][3]]
        ])
    }

    static Inverse(m: IMatrix4x4) {
        const M00 = m.M00;
        const M01 = m.M01;
        const M02 = m.M02;
        const M03 = m.M03;

        const det = m[0][0] * M00 - m[0][1] * M01 + m[0][2] * M02 - m[0][3] * M03;

        if (det === 0) return false;

        return new Matrix4x4([
            [   M00 / det,   -M01 / det,    M02 / det,   -M03 / det],
            [-m.M10 / det,  m.M11 / det, -m.M12 / det,  m.M13 / det],
            [ m.M20 / det, -m.M21 / det,  m.M22 / det, -m.M23 / det],
            [-m.M30 / det,  m.M31 / det, -m.M32 / det,  m.M33 / det]
        ])
    }

    static ['=='](m1: IMatrix4x4, m2: IMatrix4x4) {
        return (
            m1[0][0] === m2[0][0] &&
            m1[0][1] === m2[0][1] &&
            m1[0][2] === m2[0][2] &&
            m1[0][3] === m2[0][3] &&
            m1[1][0] === m2[1][0] &&
            m1[1][1] === m2[1][1] &&
            m1[1][2] === m2[1][2] &&
            m1[1][3] === m2[1][3] &&
            m1[2][0] === m2[2][0] &&
            m1[2][1] === m2[2][1] &&
            m1[2][2] === m2[2][2] &&
            m1[2][3] === m2[2][3] &&
            m1[3][0] === m2[3][0] &&
            m1[3][1] === m2[3][1] &&
            m1[3][2] === m2[3][2] &&
            m1[3][3] === m2[3][3]
        );
    }

    static ['!='](m1: IMatrix4x4, m2: IMatrix4x4) {
        return (
            m1[0][0] !== m2[0][0] ||
            m1[0][1] !== m2[0][1] ||
            m1[0][2] !== m2[0][2] ||
            m1[0][3] !== m2[0][3] ||
            m1[1][0] !== m2[1][0] ||
            m1[1][1] !== m2[1][1] ||
            m1[1][2] !== m2[1][2] ||
            m1[1][3] !== m2[1][3] ||
            m1[2][0] !== m2[2][0] ||
            m1[2][1] !== m2[2][1] ||
            m1[2][2] !== m2[2][2] ||
            m1[2][3] !== m2[2][3] ||
            m1[3][0] !== m2[3][0] ||
            m1[3][1] !== m2[3][1] ||
            m1[3][2] !== m2[3][2] ||
            m1[3][3] !== m2[3][3]
        );
    }

    static ['*'](m1: IMatrix4x4, m2: IMatrix4x4) {
        
    }

    [0]: [number, number, number, number]
    [1]: [number, number, number, number]
    [2]: [number, number, number, number]
    [3]: [number, number, number, number]

    constructor(m: [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number]
    ] = [
        [1,0,0,0],
        [0,1,0,0],
        [0,0,1,0],
        [0,0,0,1]
    ]) {
        this[0] = m[0];
        this[1] = m[1];
        this[2] = m[2];
        this[3] = m[3];
    }

    get M00() {
        return (
            this[1][1] * this[2][2] * this[3][3] +
            this[1][2] * this[2][3] * this[3][1] +
            this[1][3] * this[2][1] * this[3][2] -
            this[1][3] * this[2][2] * this[3][1] -
            this[1][2] * this[2][1] * this[3][3] -
            this[1][1] * this[2][3] * this[3][2]
        );
    }

    get M01() {
        return (
            this[1][0] * this[2][2] * this[3][3] +
            this[1][2] * this[2][3] * this[3][0] +
            this[1][3] * this[2][0] * this[3][2] -
            this[1][3] * this[2][2] * this[3][0] -
            this[1][2] * this[2][0] * this[3][3] -
            this[1][0] * this[2][3] * this[3][2]
        );
    }

    get M02() {
        return (
            this[1][0] * this[2][1] * this[3][3] +
            this[1][1] * this[2][3] * this[3][0] +
            this[1][3] * this[2][0] * this[3][1] -
            this[1][3] * this[2][1] * this[3][0] -
            this[1][1] * this[2][0] * this[3][3] -
            this[1][0] * this[2][3] * this[3][1]
        );
    }

    get M03() {
        return (
            this[1][0] * this[2][1] * this[3][2] +
            this[1][1] * this[2][2] * this[3][0] +
            this[1][2] * this[2][0] * this[3][1] -
            this[1][2] * this[2][1] * this[3][0] -
            this[1][1] * this[2][0] * this[3][2] -
            this[1][0] * this[2][2] * this[3][1]
        );
    }

    get M10() {
        return (
            this[0][1] * this[2][2] * this[3][3] +
            this[0][2] * this[2][3] * this[3][1] +
            this[0][3] * this[2][1] * this[3][2] -
            this[0][3] * this[2][2] * this[3][1] -
            this[0][2] * this[2][1] * this[3][3] -
            this[0][1] * this[2][3] * this[3][2]
        );
    }

    get M11() {
        return (
            this[0][0] * this[2][2] * this[3][3] +
            this[0][2] * this[2][3] * this[3][0] +
            this[0][3] * this[2][0] * this[3][2] -
            this[0][3] * this[2][2] * this[3][0] -
            this[0][2] * this[2][0] * this[3][3] -
            this[0][0] * this[2][3] * this[3][2]
        );
    }

    get M12() {
        return (
            this[0][0] * this[2][1] * this[3][3] +
            this[0][1] * this[2][3] * this[3][0] +
            this[0][3] * this[2][0] * this[3][1] -
            this[0][3] * this[2][1] * this[3][0] -
            this[0][1] * this[2][0] * this[3][3] -
            this[0][0] * this[2][3] * this[3][1]
        );
    };

    get M13() {
        return (
            this[0][0] * this[2][1] * this[3][2] +
            this[0][1] * this[2][2] * this[3][0] +
            this[0][2] * this[2][0] * this[3][1] -
            this[0][2] * this[2][1] * this[3][0] -
            this[0][1] * this[2][0] * this[3][2] -
            this[0][0] * this[2][2] * this[3][1]
        );
    }

    get M20() {
        return (
            this[0][1] * this[1][2] * this[3][3] +
            this[0][2] * this[1][3] * this[3][1] +
            this[0][3] * this[1][1] * this[3][2] -
            this[0][3] * this[1][2] * this[3][1] -
            this[0][2] * this[1][1] * this[3][3] -
            this[0][1] * this[1][3] * this[3][2]
        );
    }

    get M21() {
        return (
            this[0][0] * this[1][2] * this[3][3] +
            this[0][2] * this[1][3] * this[3][0] +
            this[0][3] * this[1][0] * this[3][2] -
            this[0][3] * this[1][2] * this[3][0] -
            this[0][2] * this[1][0] * this[3][3] -
            this[0][0] * this[1][3] * this[3][2]
        );
    }

    get M22() {
        return (
            this[0][0] * this[1][1] * this[3][3] +
            this[0][1] * this[1][3] * this[3][0] +
            this[0][3] * this[1][0] * this[3][1] -
            this[0][3] * this[1][1] * this[3][0] -
            this[0][1] * this[1][0] * this[3][3] -
            this[0][0] * this[1][3] * this[3][1]
        );
    }

    get M23() {
        return (
            this[0][0] * this[1][1] * this[3][2] +
            this[0][1] * this[1][2] * this[3][0] +
            this[0][2] * this[1][0] * this[3][1] -
            this[0][2] * this[1][1] * this[3][0] -
            this[0][1] * this[1][0] * this[3][2] -
            this[0][0] * this[1][2] * this[3][1]
        );
    }

    get M30() {
        return (
            this[0][1] * this[1][2] * this[2][3] +
            this[0][2] * this[1][3] * this[2][1] +
            this[0][3] * this[1][1] * this[2][2] -
            this[0][3] * this[1][2] * this[2][1] -
            this[0][2] * this[1][1] * this[2][3] -
            this[0][1] * this[1][3] * this[2][2]
        );
    }

    get M31() {
        return (
            this[0][0] * this[1][2] * this[2][3] +
            this[0][2] * this[1][3] * this[2][0] +
            this[0][3] * this[1][0] * this[2][2] -
            this[0][3] * this[1][2] * this[2][0] -
            this[0][2] * this[1][0] * this[2][3] -
            this[0][0] * this[1][3] * this[2][1]
        );
    }

    get M32() {
        return (
            this[0][0] * this[1][1] * this[2][3] +
            this[0][1] * this[1][3] * this[2][0] +
            this[0][3] * this[1][0] * this[2][1] -
            this[0][3] * this[1][1] * this[2][0] -
            this[0][1] * this[1][0] * this[2][3] -
            this[0][0] * this[1][3] * this[2][1]
        );
    }

    get M33() {
        return (
            this[0][0] * this[1][1] * this[2][2] +
            this[0][1] * this[1][2] * this[2][0] +
            this[0][2] * this[1][0] * this[2][1] -
            this[0][2] * this[1][1] * this[2][0] -
            this[0][1] * this[1][0] * this[2][2] -
            this[0][0] * this[1][2] * this[2][1]
        );
    }



    get det() {
        return this[0][0] * this.M00 - this[0][1] * this.M01 + this[0][2] * this.M02 - this[0][3] * this.M03;
    }

    get Transpose() {
        return Matrix4x4.Transpose(this);
    }

    get Inverse() {
        return Matrix4x4.Transpose(this);
    }

}