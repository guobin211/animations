/**
 * dom.ts
 * @author GuoBin 2020-07-04
 */

export function elementToTop(el: HTMLElement): number {
  const boundingClientRect = el.getBoundingClientRect();
  return boundingClientRect.top + window.scrollY;
}

export function elementToLeft(el: HTMLElement): number {
  const boundingClientRect = el.getBoundingClientRect();
  return boundingClientRect.left + window.scrollX;
}

/**
 * 获取dom元素左上角坐标
 * @param element
 */
export function getPosition(element: HTMLElement) {
  let el: any = element;
  let xPos = 0;
  let yPos = 0;

  while (el) {
    if (el.tagName === "BODY") {
      let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      let yScroll = el.scrollTop || document.documentElement.scrollTop;
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
