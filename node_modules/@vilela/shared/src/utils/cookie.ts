import { Dictionary, ISODate } from '../types';
import { domainFromUrl } from './browser';

/**
 * Create/Update cookie with security
 * @param data Dictionary (key: value)
 * @param expires Date
 */
export function saveCookie(
  data: Dictionary,
  expires?: ISODate,
  sameSite?: 'Strict' | 'Lax' | 'None'
) {
  for (const key of Object.keys(data)) {
    let cookie = `${key}=${data[key]}; Path=/;`;

    if (expires) {
      cookie += ` Expires=${new Date(expires)};`;
    }
    if (typeof window !== 'undefined') {
      cookie += ` Domain=${domainFromUrl(window.location.origin)};`;
    }
    if (sameSite) {
      cookie += ` SameSite=${sameSite};`;
    }
    if (typeof document !== 'undefined') {
      document.cookie = cookie;
    }
  }
}

function getCookie(key: string) {
  if (typeof document !== 'undefined') {
    return document.cookie
      .split('; ')
      .find((x) => x.search(key) > -1)
      ?.split('=')[1];
  }
  return undefined;
}

/**
 * Get/Load cookie with security
 * @param keys String[]
 * @return String[]
 */
export function loadCookies(keys: string | string[]) {
  if (Array.isArray(keys)) {
    return keys.reduce((acc, key) => {
      acc.push(getCookie(key));
      return acc;
    }, [] as (string | undefined)[]);
  }
  return [getCookie(keys)];
}

/**
 * Get/Load cookie with security
 * @param key String
 * @return String
 */
export function loadCookie(key: string) {
  return getCookie(key);
}

/**
 * Remove cookie with security
 * @param keys String (e.g: removeCookie(keyA, keyB, keyC))
 */
export function removeCookie(keys: string | string[]) {
  for (const key of Array.isArray(keys) ? keys : [keys]) {
    let cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    if (typeof window !== 'undefined') {
      cookie += ` domain=${domainFromUrl(window.location.origin)};`;
    }
    if (typeof document !== 'undefined') {
      document.cookie = cookie;
    }
  }
}

/**
 * Remove all cookies
 */
export function purgeCookies() {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    if (cookies.length) {
      const keys = cookies.map((x) => x.split('=')[0]);
      removeCookie(keys);
    }
  }
}
