/**
 * SpaceShip.ts
 * @author GuoBin 2020-07-04
 */
import { BaseShape } from "../_base";

export class SpaceShip extends BaseShape {
  width = 25;
  height = 25;
  rotation = 0;
  showFlame = false;
  constructor(option?: Partial<SpaceShip>) {
    super();
    Object.assign(this, option);
  }

  draw(context: CanvasRenderingContext2D): void {
    context.save();
    context.beginPath();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.fillStyle = this.fillStyle;
    context.strokeStyle = this.strokeStyle;
    context.lineWidth = this.lineWidth;
    context.moveTo(10, 0);
    context.lineTo(-10, 10);
    context.lineTo(-5, 0);
    context.lineTo(-10, -10);
    context.lineTo(10, 0);
    context.closePath();
    context.stroke();
    if (this.showFlame) {
      context.save();
      context.beginPath();
      context.strokeStyle = "#f69";
      context.moveTo(-7.5, -5);
      context.lineTo(-15, 0);
      context.lineTo(-7.5, 5);
      context.stroke();
      context.restore();
    }
    context.restore();
  }

  remove(): void {}
}
