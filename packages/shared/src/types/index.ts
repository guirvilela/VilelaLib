/**
 * Object with keys/value string
 */
export type Dictionary<T = string> = {
  [key: string]: T;
};

/**
 * Util object with label and value
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Option<T = any, I = any> = {
  id: I;
  label: string;
  value: T;
};

/**
 * Common types
 */
export type Raw = number | string;
export type ISODate = string;
export type ISOTime = string;
export type ID = number;
export type NewID = ID;
