export * from './body';
export * from './headers';
export * from './params';
export * from './response';

// HttpClient
export { httpClient } from './client';
export type { Http, HttpConfig, HttpMethod, HttpStatus } from './client';

/**
 * Fix http protocol of url
 * @param url String
 * @return String
 */
export function fixProtocol(url?: string) {
  if (!url) return '';
  return String(url).replace(/http[s]?:/gi, window.location.protocol);
}
