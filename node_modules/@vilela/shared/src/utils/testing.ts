// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function factoryTestId(props: any, addOn: string) {
  return props['data-testid'] && `${props['data-testid']}-${addOn}`;
}

/**
 * Show log of value and return it self
 */
export function withLog<T = unknown>(v: T, message?: string) {
  console.log(message || 'LOG', v);
  return v;
}
