import { ISODate } from '../types';
import { parseISO } from './date';

/**
 * Save data in storage with expire
 * @param key String storage key
 * @param data Any to save
 * @param expire Number minutes to invalidate data
 */
export function saveCache<T>(key: string, data: T, expires?: ISODate) {
  const at = new Date().toISOString();
  const until = expires || null;
  localStorage.setItem(key, JSON.stringify({ at, until, data }));
  return data;
}

/**
 * Remove data in storage
 * @param keys String List storage key
 */
export function removeCache(...keys: string[]) {
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
}

/**
 * Load data in storage with expire
 * @param key String storage key
 */
export function loadCache<T>(key: string) {
  const raw = localStorage.getItem(key);
  if (raw) {
    const cache = JSON.parse(raw);
    if (!cache.until || new Date() < parseISO(cache.until)) {
      return cache.data as T;
    }
    removeCache(key);
  }
  return undefined;
}

/**
 * Load data in storage with expire
 * @param key String storage key
 */
export function loadCacheAndDetails<T>(
  key: string
): { data: T; at: ISODate; until: ISODate } | undefined {
  const raw = localStorage.getItem(key);
  if (raw) {
    const cache = JSON.parse(raw);
    if (!cache.until || new Date() < parseISO(cache.until)) {
      return cache;
    }
    removeCache(key);
  }
  return undefined;
}

/**
 * Remove all data in storage expired
 */
export function clearCache() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      loadCache(key);
    }
  }
}

/**
 * Remove all data in storage
 */
export function purgeCache() {
  localStorage.clear();
  sessionStorage.clear();
}
