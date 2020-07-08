/**
 * Int.ts
 * @author GuoBin 2020-07-08
 */
export function Int(n: number | string): number {
  if (isNaN(Number(n))) {
    throw new TypeError("n not Digital");
  }
  return parseInt(n.toString(), 10);
}

export function Uint(n: number | string): number {
  const v = Number(n);
  if (isNaN(v) || v < 0) {
    throw new TypeError("n not Digital or n < 0");
  }
  return parseInt(n.toString(), 10);
}
