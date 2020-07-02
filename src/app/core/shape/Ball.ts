/**
 * Ball.ts
 * @author GuoBin 2020-06-30
 */
import { BaseBounds } from "../_base";

export interface BallOptions {
  rotation: number;
  radius: number;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  scaleX: number;
  scaleY: number;
  lineWidth: number;
}

export class Ball {
  readonly name = "Ball";
  rotation = 0;
  radius = 40;
  color = "#f08300";
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
  mass = 1;
  scaleX = 1;
  scaleY = 1;
  lineWidth = 1;

  constructor(ball?: Partial<BallOptions>) {
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

  getBounds(): BaseBounds {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    };
  }
}
