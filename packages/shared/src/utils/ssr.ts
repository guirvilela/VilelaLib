/**
 * Return true if is SSR (util for nextjs)
 * @return boolean
 */
export function isServer() {
  return typeof window === 'undefined';
}
