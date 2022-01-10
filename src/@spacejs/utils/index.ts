/**
 * The lerp function linearly interpolates between the two provided values.
 * https://www.pbr-book.org/3ed-2018/Utilities/Mathematical_Routines#Lerp
 */
export function lerp(t: number, a: number, b: number): number {
    return (1 - t) * a + t * b;
}