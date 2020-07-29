import { AfterViewInit, Component } from "@angular/core";
import { AutoCanvasComponent } from "../../shared/auto-canvas/auto-canvas.component";
import { AnimateFn } from "../../../typings";
import { TS_CODE } from "./code";

@Component({
  selector: "app-wave",
  templateUrl: "./wave.component.html",
  styles: []
})
export class WaveComponent extends AutoCanvasComponent implements AfterViewInit {
  constructor() {
    super();
    this.tsCode = TS_CODE;
  }

  handleClick(type: string) {
    switch (type) {
      case "speed+":
        speed += 0.01;
        break;
      case "speed-":
        speed -= 0.01;
        break;
      case "height+":
        waterTop += 10;
        break;
      case "height-":
        waterTop -= 10;
        break;
      case "width+":
        angleChange += 0.001;
        break;
      case "width-":
        angleChange -= 0.001;
        break;
      default:
        return;
    }
  }

  ngAfterViewInit() {
    this.useAnimateFn(animate);
  }
}

let waterLine = 250,   // 水面高度
    waterTop = 50,     // 水波峰值
    angle = 0,
    speed = 0,         // 移动速度
    lineNum = 500,     // 线条数目
    color = "#4411ff",
    speedChange = 0.03,
    angleChange = 0.005;
const animate: AnimateFn = (canvas, context, callback) => {
  function draw(_angle: number) {
    for (let i = 0; i < lineNum; i++) {
      const point = {
        x: i,
        y: waterLine + Math.sin(_angle + speed) * waterTop
      };
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = color;
      context.moveTo(point.x, 500);
      context.lineTo(point.x, point.y);
      context.stroke();
      _angle += angleChange;
    }
    speed += speedChange;
  }

  function start() {
    callback(window.requestAnimationFrame(start));
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw(angle);
  }

  start();
};
