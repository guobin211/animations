import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { CanvasEl, R2D } from "../../../typings";
import { Canvas } from "../../core/_impl/Canvas";
import { HTML_CODE, TS_CODE } from "./code";

@Component({
  selector: "app-canvas-image",
  templateUrl: "./canvas-image.component.html",
  styleUrls: ["./canvas-image.component.scss"],
})
export class CanvasImageComponent implements AfterViewInit {
  @ViewChild("canvasElementRef") canvasElRef: ElementRef<HTMLCanvasElement>;
  tsCode = TS_CODE;
  htmlCode = HTML_CODE;
  canvas: CanvasEl;
  ctx: R2D;

  ngAfterViewInit(): void {
    this.ctx = Canvas.initCtx(this.canvasElRef.nativeElement).ctx;
    this.canvas = this.canvasElRef.nativeElement;
    this.canvas.style.background = "#f2f3f5";
    drawClip(this.ctx);
    drawPng(this.ctx);
  }
}

/**
 * 加载img绘制
 * @param ctx R2D
 */
function drawPng(ctx: R2D) {
  const img = new Image(100, 100);
  img.crossOrigin = "anonymous";
  img.src = "assets/img/twitter.png";
  img.onload = () => {
    // 直接绘制到指定区域,自动缩放
    ctx.drawImage(img, 200, 0, 100, 100);
    // 切片 Slicing,从img中切图,前4个参数定义切图起点和宽高
    ctx.drawImage(img, 256, 0, 512, 512, 200, 100, 100, 100);
  };
  const img2 = new Image(100, 100);
  img2.crossOrigin = "anonymous";
  img2.src = "assets/img/instagram-sketched.svg";
  img2.onload = () => {
    // 直接绘制到指定区域,自动缩放
    ctx.drawImage(img2, 200, 200, 100, 100);
  };
}

function drawClip(ctx: R2D) {
  ctx.save();
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 4;
  ctx.stroke();
  // 裁减路径,规定绘制的范围
  ctx.clip();
  // draw background
  const lineGrad = ctx.createLinearGradient(0, -75, 0, 75);
  lineGrad.addColorStop(0, "#232256");
  lineGrad.addColorStop(1, "#143778");
  ctx.fillStyle = lineGrad;
  ctx.fillRect(-75, -75, 150, 150);
  // draw stars
  for (let j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(75 - Math.floor(Math.random() * 150), 75 - Math.floor(Math.random() * 150));
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
  ctx.restore();
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
