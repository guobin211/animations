import { BasePoint } from "./BasePoint";

/**
 * BaseCapture.ts 事件捕获接口
 * @author GuoBin 2020-07-02
 */
export interface BaseCapture {
  /**
   * 在元素上捕获鼠标坐标
   * @param element HTMLElement
   */
  capMouse(element: HTMLElement): BasePoint;
}
