/**
 * Canvas.ts
 * @author GuoBin 2020-07-02
 */
import { BaseCanvas, BaseContext, CanvasOption } from "../_base";
import { animationSetup } from "../hooks";

/**
 * 缩放dpr,并做animate的兼容处理
 * @param canvas HTMLCanvasElement
 */
function setUpDpr(canvas: HTMLCanvasElement): number {
  animationSetup();
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  return dpr;
}

/**
 * Canvas 渲染器工具类
 */
export class Canvas implements BaseCanvas {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly gl: WebGLRenderingContext;
  readonly gl2: WebGL2RenderingContext;
  readonly bitMap: ImageBitmapRenderingContext;
  readonly dpr: number;

  constructor(private readonly options: CanvasOption) {
    animationSetup();
    let ctx;
    const dpr = window.devicePixelRatio || 1;
    const rect = options.dom.getBoundingClientRect();
    options.dom.width = rect.width * dpr;
    options.dom.height = rect.height * dpr;
    this.canvas = options.dom;
    this.dpr = dpr;
    ctx = options.dom.getContext(options.contextId, options.options);
    if (ctx.scale) {
      ctx.scale(dpr, dpr);
    }
    switch (options.contextId) {
      case "2d":
        this.ctx = ctx;
        break;
      case "webgl":
        this.gl = ctx;
        break;
      case "webgl2":
        this.gl2 = ctx;
        break;
      case "bitmaprenderer":
        this.bitMap = ctx;
        break;
      default:
        this.ctx = ctx;
        return;
    }
  }

  /**
   * 初始化带dom信息的BaseContext
   * @param canvas HTMLCanvasElement
   */
  static initContext(canvas: HTMLCanvasElement): BaseContext {
    const dpr = setUpDpr(canvas);
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    return { ctx, dpr, width: canvas.width, height: canvas.height };
  }

  /**
   * 初始化2D Context
   * @param canvas HTMLCanvasElement
   * @param option CanvasRenderingContext2DSettings
   */
  static initCtx(canvas: HTMLCanvasElement, option?: CanvasRenderingContext2DSettings) {
    const dpr = setUpDpr(canvas);
    const ctx = canvas.getContext("2d", option);
    ctx.scale(dpr, dpr);
    return { dpr, ctx };
  }

  /**
   * 初始化WebGL WebGLRenderingContext
   * @param canvas HTMLCanvasElement
   * @param option WebGLContextAttributes
   */
  static initGl(canvas: HTMLCanvasElement, option?: WebGLContextAttributes) {
    const dpr = setUpDpr(canvas);
    const gl: WebGLRenderingContext = canvas.getContext("webgl", option);
    return { dpr, gl };
  }

  /**
   * 初始化WebGL2 WebGL2RenderingContext
   * @param canvas HTMLCanvasElement
   * @param option WebGLContextAttributes
   */
  static initGl2(canvas: HTMLCanvasElement, option?: WebGLContextAttributes) {
    const dpr = setUpDpr(canvas);
    const gl2: WebGL2RenderingContext = canvas.getContext("webgl2", option);
    return { dpr, gl2 };
  }

  /**
   * 初始化 ImageBitmapRendering
   * @param canvas HTMLCanvasElement
   * @param option ImageBitmapRenderingContextSettings
   */
  static initBitMapRenderer(
    canvas: HTMLCanvasElement,
    option?: ImageBitmapRenderingContextSettings
  ) {
    const dpr = setUpDpr(canvas);
    const bMap: ImageBitmapRenderingContext = canvas.getContext("bitmaprenderer", option);
    return { dpr, bMap };
  }
}
