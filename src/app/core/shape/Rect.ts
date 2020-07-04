/**
 * Rect.ts
 * @author GuoBin 2020-07-02
 */
import { BaseShape } from "../_base";

export class Rect extends BaseShape {
  height = 100;
  width = 100;
  // 圆角半径
  radius = 20;
  constructor(rect?: Partial<Rect>) {
    super();
    Object.assign(this, rect);
  }

  /**
   * 绘制圆角矩形
   */
  static drawRoundedRect(
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
    Rect.drawRoundedRect(context, this.x, this.y, this.width, this.height, this.radius);
    context.restore();
  }

  remove(): void {
  }
}
