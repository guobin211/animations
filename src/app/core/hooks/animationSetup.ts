/**
 * animationSetup.ts
 * @author GuoBin 2020-07-02
 */

function animateCall(callback: () => void): number {
  return (window as any).setTimeout(callback, 1000 / 60);
}

export function animationSetup(): void {
  if (!(window as any).requestAnimationFrame) {
    (window as any).requestAnimationFrame =
      (window as any).webkitRequestAnimationFrame ||
      (window as any).mozRequestAnimationFrame ||
      (window as any).oRequestAnimationFrame ||
      (window as any).msRequestAnimationFrame ||
      animateCall;
  }
  if (!(window as any).cancelAnimationFrame) {
    (window as any).cancelAnimationFrame =
      (window as any).cancelRequestAnimationFrame ||
      (window as any).webkitCancelAnimationFrame ||
      (window as any).webkitCancelRequestAnimationFrame ||
      (window as any).mozCancelAnimationFrame ||
      (window as any).mozCancelRequestAnimationFrame ||
      (window as any).msCancelAnimationFrame ||
      (window as any).msCancelRequestAnimationFrame ||
      (window as any).oCancelAnimationFrame ||
      (window as any).oCancelRequestAnimationFrame ||
      (window as any).clearTimeout;
  }
}
