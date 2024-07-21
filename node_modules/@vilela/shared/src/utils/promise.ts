/**
 * Generate Promise with delay
 * @param data Any
 * @param milliseconds Number (default = 2000)
 */
export function delay<T>(data: T | (() => T), milliseconds = 2000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof data === 'function') {
        resolve((data as CallableFunction)());
      } else {
        resolve(data);
      }
    }, milliseconds);
  });
}
