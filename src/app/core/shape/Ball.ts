/**
 * Ball.ts
 * @author GuoBin 2020-06-30
 */
import { BaseBounds } from "../_base";
import { Shape } from "../_impl/Shape";

export interface BallOptions {
  x: number;
  y: number;
  rotation: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  mass: number;
  scaleX: number;
  scaleY: number;
  lineWidth: number;
}

/**
 * 圆形
 */
export class Ball extends Shape implements BallOptions {
  x = 0;
  y = 0;
  rotation = 0;
  radius = 40;
  color = "#f08300";
  vx = 0;
  vy = 0;
  mass = 1;
  scaleX = 1;
  scaleY = 1;
  lineWidth = 1;

  constructor(ball?: Partial<BallOptions>) {
    super();
    if (ball) {
      for (const ballKey in ball) {
        if (ball.hasOwnProperty(ballKey)) {
          this[ballKey] = ball[ballKey];
        }
      }
    }
  }

  draw(context): void {
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

  /**
   * 获取ball的边界
   */
  getBounds(): BaseBounds {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    };
  }

  /**
   * 模拟加速度
   * @param multiplication 乘法系数
   * @param addition 加法系数
   */
  withAcceleration(multiplication: number = 0.99, addition: number = 0.25) {
    this.vy *= multiplication;
    this.vy += addition;
  }
}
