import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { CanvasHelper } from "../../helper/CanvasHelper";
import { Sector } from "../../core/shape";
import { Colors } from "../../core/utils";
import { TS_CODE } from "./code";
import { R2D } from "../../../typings";

@Component({
  selector: "app-bezier",
  templateUrl: "./bezier.component.html",
  styleUrls: ["./bezier.component.scss"],
})
export class BezierComponent extends CanvasHelper implements AfterViewInit, OnDestroy {
  tsCode = TS_CODE;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    const sector = new Sector({
      x: 200,
      y: 75,
      radius: 25,
      fillStyle: Colors.darkYellow,
      strokeStyle: Colors.dark,
      startAngle: 0,
      endAngle: Math.PI + Math.PI / 2,
      lineWidth: 3,
    });
    sector.draw(this.ctx.ctx);
    drawMessage(this.ctx.ctx);
    drawLove(this.ctx.ctx);
    drawPath(this.ctx.ctx);
    drawFillStyle(this.ctx.ctx);
  }

  ngOnDestroy(): void {}
}

function drawMessage(ctx: CanvasRenderingContext2D) {
  ctx.save();
  // 二次贝塞尔曲线
  ctx.beginPath();
  ctx.moveTo(75, 125);
  // 控制点 ~ 结束点
  ctx.quadraticCurveTo(25, 125, 25, 162.5);
  ctx.quadraticCurveTo(25, 200, 50, 200);
  ctx.quadraticCurveTo(50, 220, 30, 225);
  ctx.quadraticCurveTo(60, 220, 65, 200);
  ctx.quadraticCurveTo(125, 205, 125, 175);
  ctx.quadraticCurveTo(135, 125, 75, 125);
  ctx.stroke();
  ctx.restore();
}

function drawLove(ctx: CanvasRenderingContext2D) {
  ctx.save();
  // 三次贝塞尔曲线
  ctx.beginPath();
  ctx.moveTo(75, 40);
  // 三次贝塞尔曲线有两个控制点
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
  ctx.restore();
}

function drawPath(ctx: CanvasRenderingContext2D) {
  // Path2D 对象存储路径
  const rectAngle = new Path2D();
  rectAngle.rect(200, 200, 100, 100);
  const circle = new Path2D();
  circle.moveTo(300, 200);
  circle.arc(300, 200, 25, 0, 2 * Math.PI);
  ctx.stroke(rectAngle);
  ctx.fill(circle);
}

function drawFillStyle(ctx: R2D) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle =
        "rgb(" + Math.floor(255 - 42.5 * i) + "," + Math.floor(255 - 42.5 * j) + ",0)";
      ctx.fillRect(j * 25 + 250, i * 25 + 250, 25, 25);
    }
  }
}
