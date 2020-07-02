/**
 * BaseCanvas.ts
 * @author GuoBin 2020-07-02
 */

export interface BaseCanvas {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly gl: WebGLRenderingContext;
  readonly gl2: WebGL2RenderingContext;
  readonly bitMap: ImageBitmapRenderingContext;
  readonly dpr: number;
}

export enum ContextID {
  DEFAULT = "2d",
  BITMAP = "bitmaprenderer",
  GL = "webgl",
  GLL = "webgl2",
}

export interface CanvasOption {
  /**
   * canvas 元素
   */
  dom: HTMLCanvasElement;
  /**
   * 渲染方式
   */
  contextId?: ContextID | string[];
  /**
   * 渲染引擎配置
   */
  options?:
    | CanvasRenderingContext2DSettings
    | ImageBitmapRenderingContextSettings
    | WebGLContextAttributes;
}
