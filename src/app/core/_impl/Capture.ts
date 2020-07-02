import { BasePoint } from "../_base";
import { BaseCapture } from "../_base/BaseCapture";

/**
 * capture.ts 事件捕获
 * @author GuoBin 2020-06-30
 */
export class Capture implements BaseCapture {
  /**
   * 捕获鼠标坐标
   * @param element HTMLElement
   */
  capMouse(element: HTMLElement): BasePoint {
    const mouse: BasePoint = { x: 0, y: 0 };
    element.addEventListener(
      "mousemove",
      (event: MouseEvent) => {
        let x, y;
        if (event.pageX || event.pageY) {
          x = event.pageX;
          y = event.pageY;
        } else {
          x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        mouse.x = x;
        mouse.y = y;
      },
      false
    );
    return mouse;
  }
}
