/**
 * BaseContext.ts canvas context 上下文
 * @author GuoBin 2020-06-30
 */
import { BasePoint } from "./BasePoint";

export interface BaseContext {
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
   * window devicePixelRatio
   */
  dpr: number;
}
