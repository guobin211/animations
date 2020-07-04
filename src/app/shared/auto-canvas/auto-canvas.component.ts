import { Component, OnDestroy } from "@angular/core";
import { AnimateFn, CanvasEl, R2D } from "../../../typings";
import { Canvas } from "../../core/_impl";

@Component({
  selector: "app-auto-canvas",
  template: "",
})
export class AutoCanvasComponent implements OnDestroy {
  ctx: R2D;
  canvas: CanvasEl;
  anim: number;
  tsCode = "";
  htmlCode = "";
  cssCode = "";

  constructor() {}

  initCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = Canvas.initCtx(this.canvas).ctx;
  }

  ngOnDestroy(): void {
    if (this.anim) {
      window.cancelAnimationFrame(this.anim);
    }
  }

  // @before:
  //  ngAfterViewInit() {
  //     drawMoreBall(this.canvas, this.ctx, n => this.anim = n);
  //  }
  // @after:
  //  ngAfterViewInit() {
  //      this.useAnimateFn(drawMoreBall)
  //  }
  useAnimateFn(fn: AnimateFn) {
    fn(this.canvas, this.ctx, (n) => (this.anim = n));
  }
}
