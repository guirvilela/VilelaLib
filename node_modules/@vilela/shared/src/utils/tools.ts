import { randomNumber } from './number';

/**
 * Generate unique key (timestamp + random)
 * @return String
 */
export function uniqueKey() {
  return `${new Date().getTime()}${randomNumber()}`;
}
