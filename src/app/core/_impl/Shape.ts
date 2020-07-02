/**
 * Shape.ts
 * @author GuoBin 2020-07-02
 */
import { BaseShape } from "../_base";

export class Shape implements BaseShape {
  x: number;
  y: number;
  height: number;
  width: number;

  draw(context: CanvasRenderingContext2D): void {}
}
