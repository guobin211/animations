import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { BaseContext } from "../../core";
import { html, ts } from "./code";
import { Canvas } from "../../core/_impl/Canvas";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent implements AfterViewInit, OnDestroy {
  private canvas: HTMLCanvasElement;
  private ctx: BaseContext;
  private animate: number;
  ts = ts;
  html = html;

  initCanvas(el: HTMLCanvasElement) {
    this.canvas = el;
    this.ctx = Canvas.initContext(el);
  }

  ngAfterViewInit(): void {
    if (this.ctx) {
      this.canvas.style.background = "#323232";
      initAnimate(this.canvas, this.ctx, (v) => (this.animate = v));
    }
  }

  ngOnDestroy(): void {
    window.cancelAnimationFrame(this.animate);
  }
}

function initAnimate(canvas: HTMLCanvasElement, ctx: BaseContext, callback: (v: number) => void) {
  let speed = 0.1;
  const rad = (Math.PI * 2) / 100;
  const w = ctx.width / 2;
  const h = ctx.height / 2;

  function drawFrame() {
    const n = window.requestAnimationFrame(drawFrame);
    callback(n);
    ctx.ctx.clearRect(0, 0, ctx.width, ctx.height);
    whiteCircle(ctx.ctx, w, h);
    text(speed, ctx.ctx, w, h);
    buildCircle(ctx.ctx, speed, w, h, rad);
    if (speed > 100) {
      speed = 0;
    }
    speed += 0.1;
  }

  drawFrame();
}

function text(n: number, context: CanvasRenderingContext2D, centerX: number, centerY: number) {
  context.save();
  context.strokeStyle = "#49f";
  context.font = "40px Arial";
  context.strokeText(n.toFixed(0) + "%", centerX - 25, centerY + 10);
  context.stroke();
  context.restore();
}

function whiteCircle(context: CanvasRenderingContext2D, centerX: number, centerY: number) {
  context.save();
  context.beginPath();
  context.strokeStyle = "white";
  context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
  context.stroke();
  context.closePath();
  context.restore();
}

function buildCircle(
  context: CanvasRenderingContext2D,
  n: number,
  centerX: number,
  centerY: number,
  rad: number
) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#49f";
  context.lineWidth = 5;
  context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
  context.stroke();
  context.closePath();
  context.restore();
}
