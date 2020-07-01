/**
 * format.ts
 * @author GuoBin 2020-07-01
 */

export class Format {
  static fnToString(fn: any): string {
    let res = "\r\n";
    if (Array.isArray(fn)) {
      for (const f of fn) {
        if (typeof f === "function") {
          res += f.toString() + "\r\n";
        }
      }
    } else {
      if (typeof fn === "function") {
        res += fn.toString() + "\r\n";
      }
    }
    return res;
  }
}
