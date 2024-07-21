/**
 * Function composition
 * @param fns[] functions that modify the value
 * @return value modified
 */
export function compose(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}
