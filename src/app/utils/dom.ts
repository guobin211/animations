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
