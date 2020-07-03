/**
 * Canvas.ts
 * @author GuoBin 2020-07-02
 */
import { BaseCanvas, BaseContext, CanvasOption } from "../_base";
import { animationSetup } from "../hooks";

export class Canvas implements BaseCanvas {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly gl: WebGLRenderingContext;
  readonly gl2: WebGL2RenderingContext;
  readonly bitMap: ImageBitmapRenderingContext;
  readonly dpr: number;

  constructor(private readonly options: CanvasOption) {
    animationSetup();
    let ctx, gl, gl2, map;
    const dpr = window.devicePixelRatio || 1;
    const rect = options.dom.getBoundingClientRect();
    options.dom.width = rect.width * dpr;
    options.dom.height = rect.height * dpr;
    this.canvas = options.dom;
    this.dpr = dpr;
    if (Array.isArray(options.contextId)) {
      if (options.contextId.length === 0) {
        ctx = options.dom.getContext("2d", options.options);
      } else {
        for (const id of options.contextId) {
          if (id === "2d" && !ctx) {
            ctx = options.dom.getContext("2d", options.options);
          }
          if (id === "webgl" && !gl) {
            gl = options.dom.getContext("webgl", options.options);
          }
          if (id === "webgl2" && !gl2) {
            gl2 = options.dom.getContext("webgl2", options.options);
          }
          if (id === "bitmaprenderer" && !map) {
            map = options.dom.getContext("bitmaprenderer", options.options);
          }
        }
      }
    } else {
      ctx = options.dom.getContext(options.contextId, options.options);
    }
    ctx?.scale(dpr, dpr);
    gl?.scale(dpr, dpr);
    gl2?.scale(dpr, dpr);
    map?.scale(dpr, dpr);
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
        this.gl = gl;
        this.gl2 = gl2;
        this.bitMap = map;
        return;
    }
  }

  static initContext(canvas: HTMLCanvasElement): BaseContext {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    return { ctx, dpr, width: canvas.width, height: canvas.height };
  }
}
