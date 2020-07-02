import { CanvasContext, Context } from "../core";
import { OnDestroy } from "@angular/core";

/**
 * CanvasContext.ts
 * @author GuoBin 2020-07-01
 */
export class BaseCanvas implements OnDestroy {
  canvas: HTMLCanvasElement;
  ctx: CanvasContext;
  initCanvas: (el: HTMLCanvasElement) => void;
  anim?: number;
  constructor() {
    this.initCanvas = (el: HTMLCanvasElement) => {
      this.canvas = el;
      this.ctx = Context.initContext(el);
    };
  }

  ngOnDestroy(): void {
    if (!isNaN(this.anim)) {
      window.cancelAnimationFrame(this.anim);
    }
  }
}
