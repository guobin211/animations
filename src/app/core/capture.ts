import { Point } from "./_base";

/**
 * capture.ts 事件捕获
 * @author GuoBin 2020-06-30
 */
export class Capture {
  /**
   * 捕获鼠标坐标
   * @param element HTMLElement
   */
  static capMouse(element: HTMLElement): Point {
    const mouse: Point = { x: 0, y: 0 };
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

  static capTouch(element: HTMLElement) {
    // todo
  }
}
