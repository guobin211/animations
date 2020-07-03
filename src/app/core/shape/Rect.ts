/**
 * Rect.ts
 * @author GuoBin 2020-07-02
 */
import { Shape } from "../_impl/Shape";
import { Mapper } from "../utils";

export interface BaseRect {
  width: number;
  height: number;
  x: number;
  y: number;
  radius: number;
}

export class Rect extends Shape implements BaseRect {
  height: number;
  radius: number;
  width: number;

  constructor(options?: Partial<BaseRect>) {
    super();
    if (options) {
      Mapper.mapperTo(options, this);
    }
  }

  static roundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.fillStyle = this.fillStyle;
    context.strokeStyle = this.strokeStyle;
    Rect.roundedRect(context, this.x, this.y, this.width, this.height, this.radius);
    context.restore();
  }
}
