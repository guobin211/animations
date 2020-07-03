/**
 * quick.d.ts 类型简写
 * @author GuoBin 2020-07-03
 */
export type R2D = CanvasRenderingContext2D;
export type RGL = WebGLRenderingContext;
export type RGL2 = WebGL2RenderingContext;
export type RBitMap = ImageBitmapRenderingContext;
export type CanvasEl = HTMLCanvasElement;

export type CallBackNum = (n: number) => void;
export type CallBack<T> = (n: T) => void;
export type CallBackAsync<T, E> = (n: T) => Promise<E>;
