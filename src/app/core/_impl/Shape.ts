/**
 * Shape.ts
 * @author GuoBin 2020-07-02
 */
import { BaseShape } from "../_base";

export class Shape implements BaseShape {
  x = 0;
  y = 0;
  // stork line width
  lineWidth: number;
  fillStyle: string;
  strokeStyle: string;

  draw(context: CanvasRenderingContext2D): void {}
}
