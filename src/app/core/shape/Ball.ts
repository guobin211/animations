/**
 * Ball.ts
 * @author GuoBin 2020-06-30
 */
import { CtxUtils } from "../utils";

export class Ball {
  private lineWidth: number;
  private x: number;
  private y: number;
  private vx: number;
  private rotation: number;
  private mass: number;
  private scaleX: number;
  private vy: number;
  private scaleY: number;
  private name: string;
  private color: string;

  constructor(public radius: number = 40, color?: string) {
    if (!color) {
      color = "#f08300";
    }
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.mass = 1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.name = "";
    this.color = CtxUtils.parseColor(color);
    this.lineWidth = 1;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }

  getBounds() {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    };
  }
}
