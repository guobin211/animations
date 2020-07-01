import { CanvasContext, Context } from "../core";

/**
 * CanvasContext.ts
 * @author GuoBin 2020-07-01
 */
export class BaseCanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasContext;
  initCanvas: (el: HTMLCanvasElement) => void;
  constructor() {
    this.initCanvas = (el: HTMLCanvasElement) => {
      this.canvas = el;
      this.ctx = Context.initContext(el);
    };
  }
}
