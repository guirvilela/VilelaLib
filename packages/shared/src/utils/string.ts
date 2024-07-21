/**
 * Extract initials of name
 * @param text String
 * @return String
 */
export function getInitials(text?: string): string {
  if (!text) return '';
  const [firstName = '', lastName = ''] = String(text).toUpperCase().split(' ');
  return firstName.charAt(0) + lastName.charAt(0);
}

/**
 * Transform to TitleCase
 * @param text String
 * @return String
 */
export function titleCase(text: string) {
  return String(text)
    .replace(/(-|_)/g, ' ')
    .split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase())
    .join('');
}

/**
 * Transform to Capital Case
 * @param text String
 * @return String
 */
export function capitalizedCase(text: string) {
  const x = String(text);
  return x.charAt(0).toUpperCase() + x.substring(1);
}

/**
 * Transform to camelCase
 * @param text String
 * @return String
 */
export function camelCase(text: string) {
  const str = titleCase(text);
  return str.charAt(0).toLowerCase() + str.substring(1);
}

/**
 * Validate email string
 * @param email String
 * @return Boolean
 */
export function isEmail(email?: string): boolean {
  return !!email?.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

/**
 * Remove characters other than numbers
 * @param value String
 * @return String
 */
export function numberFormatter(value?: string) {
  return String(value || '').replace(/[^0-9]/gi, '');
}

/**
 * Remove characters other than text
 * @param value String
 * @return String
 */
export function textFormatter(value?: string) {
  return String(value || '').replace(/[^a-zA-Z]/gi, '');
}

/**
 * Remove characters other than alphanumeric
 * @param value String
 * @return String
 */
export function alphaNumFormatter(value?: string) {
  return String(value || '').replace(/[^a-zA-Z0-9]/gi, '');
}

/**
 * Format global phone numbers
 * @param value String
 * @return String
 */
export function phoneFormatter(
  v?: string,
  ddd?: string,
  ddi?: string,
  noFormatNumber?: boolean
) {
  let result = '';

  const DDI = Number(numberFormatter(ddi));
  const DDD = Number(numberFormatter(ddd));
  const V = numberFormatter(v);

  if (DDI) {
    result += `+${DDI} `;
  }

  if (DDD) {
    result += `(${DDD}) `;
  }

  if (noFormatNumber) {
    result += V;
  } else if (V.length === 9) {
    result += `${V.substring(0, 5)}-${V.substring(5)}`;
  } else if (V.length === 8) {
    result += `${V.substring(0, 4)}-${V.substring(4)}`;
  } else if (V.length === 7) {
    result += `${V.substring(0, 4)} ${V.substring(4)}`;
  } else if (V.length === 10) {
    result += `${V.substring(0, 3)} ${V.substring(3, 6)} ${V.substring(6)}`;
  } else {
    result += V;
  }

  return result;
}

/**
 * Parse value to string
 * @param px any
 * @return String
 */
export function parseStr(v?: unknown): string {
  return !v ? '' : String(v);
}

/**
 * Replace all occurrences
 * @param value String
 * @param search String
 * @param replace String
 * @return String
 */
export function replaceAll(
  value: string,
  search: string | RegExp,
  replace?: string
) {
  if (typeof value !== 'string') return value;
  return value.split(search).join(replace || '');
}

/**
 * Lighten or darken color
 * @param color String
 * @param percent Number
 * @return String
 */
export function shadeColor(color: string, percent: number) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = (R * (100 + percent)) / 100;
  G = (G * (100 + percent)) / 100;
  B = (B * (100 + percent)) / 100;

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = Math.round(R);
  G = Math.round(G);
  B = Math.round(B);

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

/**
 * Convert string or number in boolean ("true" -> true, "True" -> true, "False" -> false, "1" -> true, "0" -> false)
 * @param v Any
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseBool(v?: any) {
  if (!v) return false;
  const value = String(v).toLowerCase();
  return ['1', 'true'].includes(value);
}

/**
 * Search string in array of strings
 * @param search String
 * @param elements String[]
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function strSearch(elements: any[]) {
  return (search: string) =>
    elements.join(';').toLowerCase().includes(String(search).toLowerCase());
}
