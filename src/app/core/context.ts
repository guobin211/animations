/**
 * context.ts canvas实例
 * @author GuoBin 2020-06-30
 */
import { CanvasContext } from "./_base";
import { Point } from "./_base";

export class Context {
  /**
   * 初始化context
   * @param canvas HTMLCanvasElement
   */
  static initContext(canvas: HTMLCanvasElement): CanvasContext {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    const start: Point = { x: 0, y: 0 };
    const end = { x: canvas.width, y: canvas.height };
    return { ctx, dpr, width: canvas.width, height: canvas.height, start, end };
  }
}
