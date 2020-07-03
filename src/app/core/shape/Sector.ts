/**
 * Sector.ts 扇形或弧形
 * @author GuoBin 2020-07-02
 */
import { Shape } from "../_impl/Shape";
import { Mapper } from "../utils";

export interface BaseSector {
  x: number;
  y: number;
  startAngle: number;
  endAngle: number;
  strokeStyle: string;
  fillStyle: string;
  radius: number;
  anticlockwise: boolean;
  lineWidth: number;
}

// 扇形或弧形
export class Sector extends Shape implements BaseSector {
  // 逆时针
  anticlockwise = false;
  // 半径20
  radius = 20;
  // 起点角度 0
  startAngle = 0;
  // 终止角度 PI 半圆
  endAngle = Math.PI;

  constructor(option?: Partial<BaseSector>) {
    super();
    if (option) {
      Mapper.mapperTo<Partial<BaseSector>, Sector>(option, this);
    }
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
    console.log("fill");
  }
}
