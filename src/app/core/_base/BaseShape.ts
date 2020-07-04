/**
 * BaseShape.ts 图形抽象类
 * @author GuoBin 2020-06-30
 */
export abstract class BaseShape {
  id: string;
  x = 0;
  y = 0;
  // 填充色
  fillStyle = "#ffffff";
  // 描边色
  strokeStyle = "#000000";
  // 描边线宽
  lineWidth = 1;
  // 线末端的类型
  lineCap: CanvasLineCap = "round";
  // 两线相交拐点的类型
  lineJoin: CanvasLineJoin = "round";
  // 斜截面限制比例
  miterLimit = 10;

  /**
   * Shape 绘图方法
   * @param context CanvasRenderingContext2D
   */
  abstract draw(context: CanvasRenderingContext2D): void;

  /**
   * 从canvas中移除当前Shape
   */
  abstract remove(): void;
}
