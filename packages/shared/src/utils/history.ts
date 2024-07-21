import { isBrowser } from './browser';

/**
 * Go back in history
 */
export function goBack() {
  if (isBrowser()) {
    window.history.back();
  }
}
