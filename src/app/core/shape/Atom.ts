/**
 * Atom.ts
 * @author GuoBin 2020-07-04
 */
import { BaseShape } from "../_base";

export class Atom extends BaseShape {
  text = "测试文字";
  textColor = "#ffffff";
  bgColor = "rgba(255,255,255, 0.4)";
  speed = 1;
  ratio = 1;
  fontSize = 35;
  scaleX = 1;
  scaleY = 1;
  padding = 35;
  width = 0;
  isNeedBg = false;

  constructor(option?: Partial<Atom>) {
    super();
    Object.assign(this, option);
  }

  draw(context: CanvasRenderingContext2D): void {
    const ctx = context;
    ctx.font = this.fontSize + "px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    let height = this.fontSize + this.padding;
    let width = ctx.measureText(this.text).width + this.padding;
    let radius = height / 2;
    this.width = width + radius * 2;
    if (this.isNeedBg) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.scale(this.scaleX, this.scaleY);
      ctx.fillStyle = this.bgColor;
      ctx.moveTo(this.x, this.y + radius);
      ctx.arc(this.x, this.y + radius, radius, 0, Math.PI * 2);
      ctx.moveTo(this.x + width, this.y + radius);
      ctx.arc(this.x + width, this.y + radius, radius, 0, Math.PI * 2);
      ctx.moveTo(this.x, this.y);
      ctx.rect(this.x, this.y, width, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.fillStyle = this.textColor;
    ctx.beginPath();
    ctx.fillText(this.text, this.x + this.padding / 2, this.y + this.fontSize + this.padding / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  remove(): void {}
}
