/**
 * Forces a function to wait time before running again
 * @param wait Number (default = 500)
 */
export function debounce(wait = 500) {
  let timeoutID: NodeJS.Timeout;

  return (callback: () => void) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(callback, wait);
  };
}
