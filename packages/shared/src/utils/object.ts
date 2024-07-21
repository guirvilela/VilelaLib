/**
 * Copy object without reference, using JSON tools
 * @param object Any
 * @return object copy
 */
export function objectCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj || {}));
}

/**
 * Get array from enum entries
 * @return Array {key,value}
 */
export function enumToCollection<T extends object>(
  en: T
): { key: string; value: T }[] {
  return Object.entries(en)
    .filter((x) => Number.isNaN(Number(x[0])))
    .map((x) => ({ key: x[0], value: x[1] as T }));
}

/**
 * Get object from enum entries
 * @return Object {key:value}
 */
export function enumToObject<T extends object>(en: T) {
  return Object.keys(en).reduce((acc, key) => {
    if (Number.isNaN(Number(key))) {
      acc[en[key]] = key;
    }
    return acc;
  }, {} as { key: T; value: keyof T });
}

/**
 * Extract deep property in object by path
 * @param object any
 * @param path String (e.g 'foo.bar')
 * @return Generic is last property of path
 */
export function deepFind<T, O = unknown>(
  object: O,
  path: string
): T | undefined {
  const parts = path.split('.');
  if (parts.length === 1) {
    return object[parts[0]];
  }
  return deepFind(object[parts[0]], parts.slice(1).join('.'));
}

/**
 * Validate if object or array is defined (object empty and array length zero is false)
 * @param object any
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isDefined(object: any): boolean {
  if (!object) return false;
  if (Array.isArray(object)) {
    return !!object.length;
  }
  return !!Object.keys(object).length;
}

/**
 * Validate if object A has the same values of object B
 * @param a any
 * @param b any
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEqual(a: any, b: any): boolean {
  if (!a || !b) return false;
  return Object.keys(a).every((key) => a[key] === b[key]);
}

/**
 * Validate if `object` has `search` in values
 * @param object any
 * @param search String
 * @param keys Array
 * @return Boolean
 */
export function searchInObject<T extends object>(
  object: T,
  search: string,
  keys?: (keyof T)[]
): boolean {
  return ((keys as string[]) || Object.keys(object))
    .reduce((acc, key) => (acc += `${object[key]};`), '')
    .toLowerCase()
    .includes(search.toLowerCase());
}

/**
 * Tranform keys of object in camelCase
 * @param data Object
 * @return Object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function camelCaseProps(data: any) {
  if (!data) return {};

  if (
    typeof data !== 'object' ||
    data instanceof ArrayBuffer ||
    data instanceof Blob
  ) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(function (value) {
      if (typeof value === 'object') {
        value = camelCaseProps(value);
      }
      return value;
    });
  }

  return Object.keys(data).reduce((acc, key) => {
    const value = data[key];
    const normalizeKey = key.charAt(0).toLowerCase() + key.substring(1);
    if (typeof value === 'object') {
      acc[normalizeKey] = camelCaseProps(value);
    } else {
      acc[normalizeKey] = value;
    }
    return acc;
  }, {});
}

/**
 * Return true if not undefined or null
 * @param v Object
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSomething(v?: any) {
  return typeof v !== 'undefined' && v !== null;
}

/**
 * Return FormData filled by object
 * @param v Object
 * @return FormData
 */
export function objectToFormData<T extends object>(v: T) {
  const formData = new FormData();

  for (const key of Object.keys(v)) {
    if (v[key]) {
      formData.append(key, v[key]);
    }
  }

  return formData;
}
