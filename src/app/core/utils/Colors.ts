/**
 * Colors.ts
 * @author GuoBin 2020-07-02
 */
export class Colors {
  static blue = "#007bff";
  static indigo = "#6610f2";
  static purple = "#6f42c1";
  static pink = "#e83e8c";
  static red = "#dc3545";
  static orange = "#fd7e14";
  static yellow = "#ffc107";
  static darkYellow = "#f08300";
  static green = "#28a745";
  static teal = "#20c997";
  static lightTeal = "#45cb96";
  static cyan = "#12a2b8";
  static white = "#fff";
  static gray = "#6c757d";
  static grayDark = "#343a40";
  static primary = "#007bff";
  static secondary = "#6c757d";
  static success = "#28a745";
  static info = "#17a2b8";
  static warning = "#ffc107";
  static danger = "#dc3545";
  static light = "#f8f9fa";
  static dark = "#343a40";

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
