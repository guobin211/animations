/**
 * 复制对象属性
 * @param source 源对象
 * @param target 目标对象
 */
export function mapperTo<T, E>(source: T, target: E): void {
  for (const sourceKey in source) {
    if (source.hasOwnProperty(sourceKey)) {
      (target as any)[sourceKey] = source[sourceKey];
    }
  }
}
