/**
 * utils.ts
 * @author GuoBin 2020-06-30
 */
export class CtxUtils {
  /**
   * 动画
   * @param callback FrameRequestCallback
   */
  static requestAnimationFrame(callback: FrameRequestCallback): number {
    if (!(window as any).requestAnimationFrame) {
      animationSetup();
    }
    return window.requestAnimationFrame(callback);
  }

  /**
   * 取消动画
   * @param handle number
   */
  static cancelAnimationFrame(handle: number): void {
    if (!(window as any).cancelAnimationFrame) {
      animationSetup();
    }
    return window.cancelAnimationFrame(handle);
  }

  static animationSetup(): void {
    animationSetup();
  }

  /**
   * 旋转角度函数
   * @param mx mouse.x
   * @param my mouse.y
   * @param ox object.x
   * @param oy object.y
   */
  static rotationToMouse(mx: number, my: number, ox: number, oy: number): number {
    const dx = mx - ox;
    const dy = my - oy;
    return Math.atan2(dy, dx);
  }

  /**
   * color 转换
   * @param color string | number
   * @param toNumber boolean
   */
  static parseColor(color: string | number, toNumber?: boolean): string {
    if (toNumber === true) {
      if (typeof color === "number") {
        return (color | 0) + "";
      }
      if (typeof color === "string" && color[0] === "#") {
        color = color.slice(1);
      }
      return window.parseInt(color, 16) + "";
    } else {
      if (typeof color === "number") {
        color = "#" + ("00000" + (color | 0).toString(16)).substr(-6);
      }
      return color;
    }
  }

}

function animateCall(callback: () => void): number {
  return (window as any).setTimeout(callback, 1000 / 60);
}

function animationSetup(): void {
  if (!(window as any).requestAnimationFrame) {
    (window as any).requestAnimationFrame = ((window as any).webkitRequestAnimationFrame ||
      (window as any).mozRequestAnimationFrame ||
      (window as any).oRequestAnimationFrame ||
      (window as any).msRequestAnimationFrame ||
      animateCall);
  }
  if (!(window as any).cancelAnimationFrame) {
    (window as any).cancelAnimationFrame = ((window as any).cancelRequestAnimationFrame ||
      (window as any).webkitCancelAnimationFrame || (window as any).webkitCancelRequestAnimationFrame ||
      (window as any).mozCancelAnimationFrame || (window as any).mozCancelRequestAnimationFrame ||
      (window as any).msCancelAnimationFrame || (window as any).msCancelRequestAnimationFrame ||
      (window as any).oCancelAnimationFrame || (window as any).oCancelRequestAnimationFrame ||
      (window as any).clearTimeout);
  }
}
