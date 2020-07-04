/**
 * Ball.ts
 * @author GuoBin 2020-06-30
 */
import { BaseBounds, BaseShape } from "../_base";

/**
 * 圆形
 */
export class Ball extends BaseShape {
  // 旋转 0 —— Math.PI * 2
  rotation = 0;
  // 半径
  radius = 40;
  color = "#dcdcdc";
  // x轴偏移
  vx = 0;
  // y轴偏移
  vy = 0;
  mass = 1;
  // x轴缩放
  scaleX = 1;
  // y轴缩放
  scaleY = 1;
  constructor(ball?: Partial<Ball>) {
    super();
    Object.assign(this, ball);
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

  remove(): void {
  }
}

