/**
 * Serialize body to XMLHttpRequestBodyInit
 * @param body Object
 * @param configs Object
 * @return XMLHttpRequestBodyInit
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function bodySerializer<T extends object = any>(
  body?: T,
  configs?: {
    customSerializer?: (body: T) => XMLHttpRequestBodyInit;
  }
) {
  if (body) {
    if (
      body instanceof FormData ||
      body instanceof URLSearchParams ||
      body instanceof Blob
    ) {
      return body;
    }

    if (configs?.customSerializer) return configs.customSerializer(body);

    return JSON.stringify(body);
  }
  return undefined;
}
