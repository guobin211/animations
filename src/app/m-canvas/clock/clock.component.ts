import { AfterViewInit, Component, OnInit } from "@angular/core";
import { AutoCanvasComponent } from "../../shared/auto-canvas/auto-canvas.component";
import { CallBackNum, R2D } from "../../../typings";
import { TS_CODE } from "./code";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styles: [],
})
export class ClockComponent extends AutoCanvasComponent implements AfterViewInit {
  constructor() {
    super();
    this.tsCode = TS_CODE;
  }

  ngAfterViewInit() {
    loadAnimate(this.ctx, (n) => (this.anim = n));
    drawHour(this.ctx);
    drawSeconds(this.ctx, new Date().getSeconds());
  }
}

/**
 * 加载动画
 * @param ctx R2D
 * @param callback CallBackNum
 */
function loadAnimate(ctx: R2D, callback: CallBackNum) {
  (function animate() {
    const n = window.requestAnimationFrame(animate);
    callback(n);
    drawClock(ctx);
  })();
}

/**
 * 绘制时钟
 * @param ctx R2D
 */
function drawClock(ctx: R2D) {
  const now = new Date();
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  // Hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();
  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  let hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;
  ctx.fillStyle = "black";
  // write Hours
  ctx.save();
  ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();
  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();
  // Write seconds
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();
}

/**
 * 旋转绘制时针
 * @param ctx R2D
 */
function drawHour(ctx: R2D) {
  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(175, 175);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();
  ctx.restore();
}

/**
 * 绘制秒针
 * @param ctx R2D
 * @param sec 当前时间秒
 */
function drawSeconds(ctx: R2D, sec: number = 0) {
  ctx.save();
  ctx.translate(300, 300);
  // 计算旋转角度
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();
}
