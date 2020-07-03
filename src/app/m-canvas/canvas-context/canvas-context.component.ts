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
import { Colors } from "../../core/utils";

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
    drawText(this.ctx);
    drawWithState(this.ctx);
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
    ctx.fillText(renderList[i], 20, 50 * i + 200);
  }
}

/**
 * ctx.save() 将当前的context状态保存到栈中, 方便隔离
 * @param ctx R2D
 */
function drawWithState(ctx: R2D) {
  // 保存默认状态
  ctx.save();
  ctx.fillStyle = "#db0f2c";
  ctx.fillRect(0, 0, 50, 50);
  // 保存状态 1 红色
  ctx.save();
  // 改变状态 2 蓝色
  ctx.fillStyle = "#09F";
  ctx.fillRect(50, 0, 50, 50);
  // 保存状态 2 蓝色
  ctx.save();
  // 改变颜色 3
  ctx.fillStyle = "#f08300";
  ctx.globalAlpha = 0.5;
  ctx.fillRect(100, 0, 50, 50);
  // 恢复到状态 2 蓝色
  ctx.restore();
  ctx.fillRect(150, 0, 50, 50);
  // 恢复到状态 1 红色
  ctx.restore();
  ctx.fillRect(200, 0, 50, 50);
  // 恢复到默认状态
  ctx.restore();
}
