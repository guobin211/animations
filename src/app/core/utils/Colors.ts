/**
 * Colors.ts
 * @author GuoBin 2020-07-02
 */

export class Colors {
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
