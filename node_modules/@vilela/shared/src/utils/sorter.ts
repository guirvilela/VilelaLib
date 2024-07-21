import { deepFind } from './object';

/**
 * Sort array of elements
 * @param field String (keys of object A/B)
 * @return Function
 */
export function sorter<A, B>() {
  return (a: A, b: B) =>
    String(a).localeCompare(String(b), undefined, {
      numeric: true,
      sensitivity: 'base'
    });
}

/**
 * Sort array of object by field property
 * @param field String (keys of object A/B)
 * @return Function
 */
export function sorterByField<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  A = any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  B = any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  F extends keyof A & keyof B = any
>(field: F) {
  return (a: A, b: B) =>
    String(a[field]).localeCompare(String(b[field]), undefined, {
      numeric: true,
      sensitivity: 'base'
    });
}

/**
 * Sorter array of deep object by path (using deepFind)
 * @param path String (e.g 'foo.bar')
 * @return Function
 */
export function sorterDeep<A, B>(path: string) {
  return (a: A, b: B) =>
    String(deepFind<string>(a, path)).localeCompare(
      deepFind<string>(b, path) || '',
      undefined,
      {
        numeric: true,
        sensitivity: 'base'
      }
    ) || 0;
}
