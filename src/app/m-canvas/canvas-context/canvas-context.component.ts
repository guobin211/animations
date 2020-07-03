import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { HTML_CODE, TS_CODE } from "./code";
import { CanvasEl, R2D, RBitMap, RGL, RGL2 } from "../../../typings";
import { Canvas } from "../../core/_impl/Canvas";

@Component({
  selector: "app-canvas-context",
  templateUrl: "./canvas-context.component.html",
  styleUrls: ["./canvas-context.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasContextComponent implements AfterViewInit, OnDestroy {
  @ViewChild("canvasElementRef") canvasElementRef: ElementRef<HTMLCanvasElement>;
  anim: number;
  tsCode = TS_CODE;
  htmlCode = HTML_CODE;
  canvas: CanvasEl;
  ctx: R2D;
  gl: RGL;
  gl2: RGL2;
  bMap: RBitMap;

  ngAfterViewInit(): void {
    this.canvas = this.canvasElementRef.nativeElement;
    this.ctx = Canvas.initCtx(this.canvas).ctx;
    // 只能选择一种渲染方式
    // this.gl = this.canvas.getContext("webgl");
    // this.gl2 = this.canvas.getContext("webgl2");
    // this.bMap = this.canvas.getContext("bitmaprenderer");
    drawText(this.ctx);
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.anim);
  }
}

function drawText(ctx: R2D) {
  const renderList = [
    "CanvasRenderingContext2D",
    "WebGLRenderingContext",
    "WebGL2RenderingContext",
    "ImageBitmapRenderingContext",
  ];
  ctx.font = "24px Roboto";
  for (let i = 0; i < renderList.length; i++) {
    ctx.fillText(renderList[i], 20, 50 * (i + 1));
  }
}
