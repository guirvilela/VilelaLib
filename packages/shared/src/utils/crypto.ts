/**
 * Decode string base64 unicode
 * @param v String
 * @return String
 */
export function decodeBase64Unicode(v: string) {
  return decodeURIComponent(
    atob(v).replace(/(.)/g, function (m, p) {
      let code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = '0' + code;
      }
      return '%' + code;
    })
  );
}

/**
 * Decode string base64
 * @param v String
 * @return String
 */
export function decodeBase64(v: string) {
  let output = v.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw new Error('base64 string is not of the correct length');
  }

  try {
    return decodeBase64Unicode(output);
  } catch {
    return atob(output);
  }
}

/**
 * Return payload of jwt token
 * @param token String
 * @return Object
 */
export function parseJwt<T>(token: string, head?: boolean): T | undefined {
  try {
    const payload = token.split('.')[head ? 0 : 1];
    const decoded = decodeBase64(payload);
    return JSON.parse(decoded) as T;
  } catch {
    return undefined;
  }
}

/**
 * Encode string base64
 * @param v String
 * @return String
 */
export function tryEncodeBase64(v: string): string {
  try {
    return btoa(v);
  } catch {
    return v;
  }
}

/**
 * Decode string base64
 * @param v String
 * @return String
 */
export function tryDecodeBase64(v: string): string {
  try {
    return atob(v);
  } catch {
    return v;
  }
}
