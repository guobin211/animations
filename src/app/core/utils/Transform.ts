/**
 * Transform.ts
 * @author GuoBin 2020-07-02
 */

export class Transform {
  /**
   * 旋转角度函数
   * @param mx mouse.x
   * @param my mouse.y
   * @param ox object.x
   * @param oy object.y
   */
  static rotateToMouse(mx: number, my: number, ox: number, oy: number): number {
    const dx = mx - ox;
    const dy = my - oy;
    return Math.atan2(dy, dx);
  }
}
