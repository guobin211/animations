import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { CSS_CODE, HTML_CODE, TS_CODE } from "./code";
import { R2D } from "../../../typings";
import { Colors } from "../../core/utils";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements AfterViewInit, OnDestroy {
  ts = TS_CODE;
  html = HTML_CODE;
  css = CSS_CODE;
  private animate: number;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dpr = 1;

  ngAfterViewInit(): void {
    this.initContext();
    drawRect(this.ctx);
    drawTranslate(this.ctx);
    drawRotate(this.ctx);
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animate);
  }

  // 获取dom元素，实例化context
  private initContext() {
    const element = document.getElementById("m-canvas-canvas");
    if (element instanceof HTMLCanvasElement) {
      const dpr = window.devicePixelRatio || 1;
      const rect = element.getBoundingClientRect();
      element.width = rect.width * dpr;
      element.height = rect.height * dpr;
      this.canvas = element;
      this.dpr = dpr;
      // 选择渲染方式,更多的渲染方式/core/_impl/Canvas.ts
      this.ctx = element.getContext("2d", {alpha: false, desynchronized: false});
      this.ctx.scale(dpr, dpr);
    } else {
      console.error(`element not canvas!`);
    }
  }
}

/**
 * 绘制矩形
 * @param ctx R2D => CanvasRenderingContext2D
 * R2D 类型简写
 */
function drawRect(ctx: R2D) {
  // 填充颜色
  ctx.fillStyle = Colors.lightTeal;
  ctx.fillRect(150, 150, 100, 100);
}

/**
 * 平移操作
 * @param ctx R2D
 */
function drawTranslate(ctx: R2D) {
  for (let j = 0; j < 3; j++) {
    ctx.save();
    ctx.fillStyle = "rgb(" + (51 * j) + ", " + (255 - 51 * j) + ", 255)";
    // translate(x, y) 平移操作, 将canvas画布水平垂直移动
    ctx.translate(10 + j * 50, 10 + j * 50);
    ctx.fillRect(0, 0, 25, 25);
    ctx.restore();
  }
}

/**
 * 旋转操作,通常配合translate()使用
 * @param ctx R2D
 */
function drawRotate(ctx: R2D) {
  ctx.save();
  // 原图形的位置, 中心点 350， 150
  ctx.fillRect(300, 100, 100, 100);
  ctx.fillStyle = "#f08300";
  // 绕着原图形的中心点旋转
  ctx.translate(350, 150);
  // 1 / 8 弧形
  ctx.rotate(Math.PI / 4);
  // 从新的画布绘制图形
  ctx.fillRect(0, 0, 100, 100);
  ctx.restore();
}
