/**
 * BaseShape.ts
 * @author GuoBin 2020-06-30
 */

export interface BaseShape {
  x: number;
  y: number;
  width: number;
  height: number;
  /**
   * Shape 绘图方法
   * @param context CanvasRenderingContext2D
   */
  draw(context: CanvasRenderingContext2D): void;
}
