import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { CanvasEl, R2D } from "../../../typings";
import { Canvas } from "../../core/_impl/Canvas";

@Component({
  selector: "app-canvas-image",
  templateUrl: "./canvas-image.component.html",
  styleUrls: ["./canvas-image.component.scss"]
})
export class CanvasImageComponent implements AfterViewInit {
  @ViewChild("canvasElementRef") canvasElRef: ElementRef<HTMLCanvasElement>;
  tsCode = "";
  htmlCode = "";
  canvas: CanvasEl;
  ctx: R2D;
  ngAfterViewInit(): void {
    this.ctx = Canvas.initCtx(this.canvasElRef.nativeElement).ctx;
    this.canvas = this.canvasElRef.nativeElement;
    drawLine(this.ctx);
  }
}

function drawLine(ctx: R2D) {
  const img = new Image(100, 100);
  img.src = "assets/img/twitter.png";
  img.onload = () => {
    // 直接绘制到指定区域,自动缩放
    ctx.drawImage(img, 0, 0, 100, 100);
    // 切片 Slicing,从img中切图,前4个参数定义切图起点和宽高
    ctx.drawImage(img, 256, 0, 512, 512, 100, 100, 100, 100);
  };
}
