/**
 * Generate random number, from 0 to param
 * @param params Number
 * @return Number
 */
export function randomNumber(max = 9999) {
  return Math.floor(Math.random() * max);
}

/**
 * Parse value or return 0
 * @param v Number
 * @return Number
 */
export function parseNumber(v?: unknown) {
  return Number(v) || 0;
}

/**
 * Parse string percent or return 0
 * @param v String
 * @return Number
 */
export function parsePercent(v?: string) {
  if (!v) return 0;
  return parseNumber(v.replace('%', ''));
}

/**
 * Return two digits if value ten minor (00,01,02)
 * @param v Number
 * @return String
 */
export function zeroTwoDigits(v?: number) {
  if (!v) return '00';
  return `${v < 10 ? '0' : ''}${v}`;
}

/**
 * Return decimal rounded (2 digits by default)
 * @param v Number
 * @param digts Number
 * @return String
 */
export function roundNumber(v?: number, digts?: number) {
  if (!v) return 0;
  return parseNumber(v.toFixed(digts || 2));
}
