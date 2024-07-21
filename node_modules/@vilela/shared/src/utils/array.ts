import { deepFind } from './object';
import { strSearch } from './string';

/**
 * Return total of array list
 * @param compare Function (calcule truthful)
 * @param compareWith Function (return prop to calc)
 * @param operation Function (default is SUM)
 * @return number
 */
export function subtotal<T>(
  compare: (item: T) => boolean,
  compareWith?: (item: T) => number,
  operation?: (acc: number, next: number) => number
) {
  return (data: T[]) =>
    data.reduce((acc, n) => {
      if (compare(n)) {
        const next = compareWith?.(n) || (n as unknown as number);
        return operation?.(acc, next) || (acc += next);
      }
      return acc;
    }, 0);
}

/**
 * Create array
 * @param length Number
 * @param v `<T>` (initial fill value)
 * @param increase Boolean (number increase, 0..N)
 * @return `<T>`
 */
export function array<T>(length?: number, v?: T, increase?: boolean) {
  const arr = (length ? new Array(length) : []).fill(v);
  return (increase ? arr.map((_, i) => i + 1) : arr) as T[];
}

/**
 * Transform array in array nested
 * @param compare Function
 * @param items Array
 * @return Array
 */
export function segregateItems<T, R = T & { items: T[] }>(
  compare: (a: T, b: T) => boolean
) {
  return (items: T[]) => {
    const newItems: T[] = [];
    for (const item of items) {
      if (!newItems.some((x) => compare(item, x))) {
        newItems.push({
          ...item,
          items: items.filter((x) => compare(item, x))
        });
      }
    }
    return newItems as unknown as R[];
  };
}

/**
 * Remove Duplicates of array
 * @param compare Function
 * @param items Array
 * @return New array
 */
export function removeDuplicates<T>(compare?: (a: T, b: T) => boolean) {
  return (items: T[]) =>
    items.filter(
      (x, i, arr) => arr.findIndex((y) => compare?.(y, x) || x === y) === i
    );
}

/**
 * Transform nested array to flat array
 * @param key String (key of nested items)
 * @param source Array (nested array)
 * @param control Array (empty/initial array)
 * @return Array (flat array)
 */
export function flatList<T>(key: keyof T, source: T[], control: T[]) {
  for (const item of source) {
    control.push(item);
    flatList(key, item[key as never] || [], control);
  }
  return control;
}

/**
 * Search string in array
 * @param arr Array
 * @param search String
 * @return Array
 */
export function arrSearch<T extends object>(arr: Array<T>, paths?: string[]) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let fn = (x: object): string[] => [];

  if (paths) {
    fn = (x) => paths.map((y) => deepFind(x, y) || '');
  } else {
    fn = (x) =>
      Object.values(x)
        .filter((y) => !!y)
        .flatMap((y) =>
          typeof y === 'object'
            ? Object.values(y)
                .filter((z) => !!z)
                .map((z) => String(z))
            : [String(y)]
        );
  }

  return (search: string) => arr.filter((x) => strSearch(fn(x))(search));
}
