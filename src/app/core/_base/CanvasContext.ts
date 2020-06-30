/**
 * CanvasContext.ts canvas context 上下文
 * @author GuoBin 2020-06-30
 */
import { Point } from "./Point";

export interface CanvasContext {
  /**
   * context
   */
  ctx: CanvasRenderingContext2D;
  /**
   * canvas width
   */
  width: number;
  /**
   * canvas height
   */
  height: number;
  /**
   * canvas left-top
   */
  start: Point;
  /**
   * canvas right-bottom
   */
  end: Point;
  /**
   * window devicePixelRatio
   */
  dpr: number;
}
