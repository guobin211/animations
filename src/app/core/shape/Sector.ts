/**
 * Sector.ts 扇形或弧形
 * @author GuoBin 2020-07-02
 */
import { BaseShape } from "../_base";

// 扇形或弧形
export class Sector extends BaseShape {
  // 逆时针
  anticlockwise = false;
  // 半径20
  radius = 20;
  // 起点角度 0
  startAngle = 0;
  // 终止角度 PI 半圆
  endAngle = Math.PI;
  constructor(option?: Partial<Sector>) {
    super();
    Object.assign(this, option);
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.fillStyle = this.fillStyle;
    context.strokeStyle = this.strokeStyle;
    context.lineWidth = this.lineWidth;
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
    context.fill();
    context.stroke();
    context.restore();
  }

  remove(): void {}
}
