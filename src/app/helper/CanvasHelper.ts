import { BaseContext } from "../core";
import { Canvas } from "../core/_impl/Canvas";

/**
 * CanvasContext.ts
 * @author GuoBin 2020-07-01
 */
export class CanvasHelper {
  canvas: HTMLCanvasElement;
  ctx: BaseContext;
  initCanvas: (el: HTMLCanvasElement) => void;
  /**
   * 动画id
   */
  anim: number;

  constructor() {
    this.initCanvas = (el: HTMLCanvasElement) => {
      this.canvas = el;
      this.ctx = Canvas.initContext(el);
    };
  }

  animate(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    callback: (n: number) => void
  ) {}
}
