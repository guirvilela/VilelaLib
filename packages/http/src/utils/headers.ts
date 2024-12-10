/**
 * Serialize headers object to Headers
 * @param headers Object
 * @param configs Object
 * @return Headers
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function headersSerializer<T extends object = any, B = any>(
  headers?: T,
  configs?: {
    customSerializer?: (headers: T) => Headers;
    body?: B;
  }
) {
  if (headers) {
    if (headers instanceof Headers) {
      return headers;
    }

    if (configs?.customSerializer) return configs.customSerializer(headers);

    const heads = new Headers();

    for (const key of Object.keys(headers)) {
      if (headers[key]) {
        heads.append(key, String(headers[key]));
      }
    }

    if (!heads.has('Content-Type')) {
      // if (configs?.body instanceof FormData) {
      //   heads.append('Content-Type', 'multipart/form-data');
      // }

      // if (configs?.body instanceof URLSearchParams) {
      //   heads.append('Content-Type', 'application/x-www-form-urlencoded');
      // }

      // if (configs?.body instanceof Blob) {
      //   heads.append('Content-Type', '');
      // }

      // if (!heads.has('Content-Type')) {
      //   heads.append('Content-Type', 'application/json');
      // }

      if (
        !(
          configs?.body instanceof FormData ||
          configs?.body instanceof URLSearchParams ||
          configs?.body instanceof Blob
        )
      ) {
        heads.append('Content-Type', 'application/json');
      }
    }

    return heads;
  }
  return undefined;
}
