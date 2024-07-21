/**
 * Type return of useForm Hook
 */
interface Form<T> {
  /** current value of form */
  value: T;
  /** set value of field */
  set: (f: keyof T, options?: FormSetterOptions) => (v: T[keyof T]) => void;
  /** set more fields, keep others fields */
  setAll: (v: Partial<T>, options?: FormSetterOptions) => void;
  /** reset fields, can ignores any field and set field same time */
  reset: (ignores?: (keyof T)[], value?: Partial<T>) => void;
  /** return by validator */
  isValid: boolean;
  /** return true if change any field */
  hasChanges: boolean;
  /** count changes fields, can custom compare fields */
  count(compare?: (key: keyof T) => boolean): number;
  /** return true if field never changed, can custom validation */
  pristine(key?: keyof T | (keyof T)[] | ((a: T, b: T) => boolean)): boolean;
  /** mark hasChanges to false */
  markNoChanges(): void;
}
interface FormSetterOptions {
  noMarkChange?: boolean;
}
/**
 * Create state to use in forms
 * @param initial Object
 * @param validator Function
 * @return Form
 */
declare function useForm<T extends object>(
  initial?: T,
  validator?: (form: T) => boolean
): Form<T>;
declare function useFormMock<T = any, F = Form<Partial<T>>>(
  props?: Partial<F> & {
    spySet?: CallableFunction;
    spySetAll?: CallableFunction;
    spyReset?: CallableFunction;
    spyCount?: CallableFunction;
    spyPristine?: CallableFunction;
  }
): F;

/**
 * Type object config of usePagination
 */
interface PaginationConfig<T> {
  /** Data source */
  source: T[];
  /** Initial page */
  initialPage?: number;
  /** Items by page */
  initialPageSize?: number;
  /** On change source, set first page */
  resetOnChange?: boolean;
}
/**
 * Type return of usePagination Hook
 */
interface Pagination<T> {
  /** Paged data */
  data: T[];
  /** Length rows of data */
  totalItems: number;
  /** Items by page */
  pageSize: number;
  /** Page selected */
  currentPage: number;
  /** Function call change page */
  onChange: (page: number) => void;
  /** Function call change page size */
  onChangePageSize: (size: number) => void;
  /** Function call accumulate page data */
  onAccumulate: () => void;
}
/**
 * Create state to use in pagination
 * @param config Object
 * @return Pagination
 */
declare function usePagination<T>(config: PaginationConfig<T>): Pagination<T>;

declare type Queue<T> = (...args: T[]) => Promise<void>;
declare type QueueList<T> = Queue<T>[];
/**
 * Creates list with function/tasks to be using in react effects
 * @return Object
 */
declare function useQueue<T>(): {
  queue: QueueList<T>;
  addQueue: (task: Queue<T>) => void;
  runQueue: (data: T) => Promise<void>;
};

/**
 * Object with keys/value string
 */
declare type Dictionary<T = string> = {
  [key: string]: T;
};
/**
 * Util object with label and value
 */
declare type Option<T = any, I = any> = {
  id: I;
  label: string;
  value: T;
};
/**
 * Common types
 */
declare type Raw = number | string;
declare type ISODate = string;
declare type ISOTime = string;
declare type ID = number;
declare type NewID = ID;

/**
 * Return total of array list
 * @param compare Function (calcule truthful)
 * @param compareWith Function (return prop to calc)
 * @param operation Function (default is SUM)
 * @return number
 */
declare function subtotal<T>(
  compare: (item: T) => boolean,
  compareWith?: (item: T) => number,
  operation?: (acc: number, next: number) => number
): (data: T[]) => number;
/**
 * Create array
 * @param length Number
 * @param v `<T>` (initial fill value)
 * @param increase Boolean (number increase, 0..N)
 * @return `<T>`
 */
declare function array<T>(length?: number, v?: T, increase?: boolean): T[];
/**
 * Transform array in array nested
 * @param compare Function
 * @param items Array
 * @return Array
 */
declare function segregateItems<
  T,
  R = T & {
    items: T[];
  }
>(compare: (a: T, b: T) => boolean): (items: T[]) => R[];
/**
 * Remove Duplicates of array
 * @param compare Function
 * @param items Array
 * @return New array
 */
declare function removeDuplicates<T>(
  compare: (a: T, b: T) => boolean
): (items: T[]) => T[];
/**
 * Transform nested array to flat array
 * @param key String (key of nested items)
 * @param source Array (nested array)
 * @param control Array (empty/initial array)
 * @return Array (flat array)
 */
declare function flatList<T>(key: keyof T, source: T[], control: T[]): T[];

/**
 * CPF number validator
 * @param number String
 * @return Boolean
 */
declare function cpfValidator(number: string): boolean;
/**
 * CNPJ number validator
 * @param number String
 * @return Boolean
 */
declare function cnpjValidator(number: string): boolean;
/**
 * CPF/CNPJ number validator
 * @param number String
 * @return Boolean
 */
declare function cpfCnpjValidator(number: string): boolean;
/**
 * @alias cpfCnpjValidator
 */
declare function isCpfCnpj(number: string): boolean;
/**
 * Add special characters to CPF human read
 * @param value String
 * @return String
 */
declare function cpfFormatter(value?: string): string;
/**
 * Add special characters to CNPJ human read
 * @param value String
 * @return String
 */
declare function cnpjFormatter(value?: string): string;
/**
 * Add special characters to RG human read
 * @param value String
 * @return String
 */
declare function rgFormatter(value?: string): string;
/**
 * Add special characters to cpf/cnpj human read
 * @param value String
 * @return String
 */
declare function cpfCnpjFormatter(value?: string): string;
/**
 * @alias cpfValidator
 */
declare function isCpf(number: string): boolean;
/**
 * @alias cnpjValidator
 */
declare function isCnpj(number: string): boolean;
/**
 * CEP number validator
 * @param number String
 * @return Boolean
 */
declare function cepValidator(value?: string): boolean;
/**
 * Add special characters to cep human read
 * @param value String
 * @return String
 */
declare function cepFormatter(value?: string): string;
/**
 * Check navigator languages
 * @param value String
 * @return String
 */
declare function isPtBr(): boolean;
/**
 * Validate RNE string
 * @param value String
 * @return Boolean
 */
declare function isRNE(value?: string): boolean;

/**
 * Get element position on screen
 * @param element HTMLElement
 * @return Object { x, y }
 */
declare function getElementPosition(el: HTMLElement): {
  x: number;
  y: number;
};
/**
 * Prevent defaults util to functional compose
 * @param fn Function
 * @return Function
 */
declare function preventDefault(
  fn?: (...args: any[]) => any
): (e: Event) => void;
/**
 * Get position of scroll on screen
 * @return Object coordinates
 */
declare function scrollPosition(): {
  top: number;
  right: number;
  bottom: number;
  left: number;
};
/**
 * Return language of browser
 * @return String
 */
declare function getLocale(): string;
/**
 * Return languages of browser
 * @return String
 */
declare function getLocales(): string[];
/**
 * Print element dom
 * @param element Element
 * @param title String (optional)
 * @param mode portrait | landscape (optional)
 */
declare function print(
  element: Element,
  title?: string,
  mode?: "portrait" | "landscape"
): void;
/**
 * Create or update css property of element
 * @param key String
 * @param value String
 * @param el HTMLElement (default is root)
 */
declare function setCssProperty(
  key: string,
  value: string,
  el?: HTMLElement
): void;
/**
 * Return true if is Browser
 * @return Boolean
 */
declare function isBrowser(): boolean;
/**
 * Return true if is Browser for testing (jest)
 * @return Boolean
 */
declare function isTestingBrowser(): boolean;
/**
 * Return true if is Safari Browser
 * @return Boolean
 */
declare function isSafari(): boolean | "";
/**
 * Return true if is Firefox Browser
 * @return Boolean
 */
declare function isFirefox(): boolean;
/**
 * Return true if is Chrome Browser
 * @return Boolean
 */
declare function isChrome(): boolean;
/**
 * Return true if is Opera Browser
 * @return Boolean
 */
declare function isOpera(): boolean;
/**
 * Return true if is Internet Explorer Browser
 * @return Boolean
 */
declare function isIE(): boolean;
/**
 * Return true if is Mobile Browser
 * @return Boolean
 */
declare function isMobile(): boolean;
/**
 * Return true if is page in iframe
 * @return Boolean
 */
declare function isIframe(): boolean;
/**
 * Return true if is Android Browser
 * @return Boolean
 */
declare function isAndroid(): boolean;
/**
 * Return true if is iOS Browser
 * @return Boolean
 */
declare function isIOS(): boolean;
/**
 * Send content to Clipboard
 */
declare function sendToClipboard(content: string): void;
/**
 * Create link by Blob
 */
declare function downloadFromBlob(blob: Blob, filename: string): void;
/**
 * Download file from Array of bytes
 */
declare function downloadFromByteArray(
  data: any,
  filename: string,
  contentType?: string
): void;
/**
 * Download file from Base64
 */
declare function downloadFromBase64(
  b64: string,
  filename: string,
  contentType?: string,
  sliceSize?: number
): void;
/**
 * Download file from url
 */
declare function downloadFromUrl(url: string): void;
/**
 * Return domain url
 * @param url String
 * @return String
 */
declare function domainFromUrl(url?: string): string;
/**
 * Extract filename from url/uri string
 * @param url String
 * @return String
 */
declare function getFilenameFromUrl(url?: string): string;
/**
 * Return element by DOM query search
 * @param query String (byTag = elementTag, byID = #elementId, byClass = .className)
 * @return HTMLElement
 */
declare function $<T = HTMLElement>(query: string): T | null;
/**
 * Scroll to position of element
 * @param el Element
 * @param top Number
 * @param left Number
 */
declare function scrollTo(el: HTMLElement, top: number, left?: number): void;
/**
 * Return true if url is a external link
 * @param url String
 */
declare function isExternalLink(url?: string): boolean;
/**
 * Return true if url is a azure webapp or localhost
 * @param env String
 */
declare function isLocalhostOrAzureEnv(env?: string): boolean;
/**
 * Return url with azure webapp env or localhost
 * @param url String (webapp url)
 * @param path String (path and/or params)
 * @param port Number (localhost port)
 * @returns String
 */
declare function buildUrlWithEnv(
  url: string,
  path?: string,
  port?: number
): string;
/**
 * Resize DOM window
 * @param x Number (width)
 * @param y Number (height)
 */
declare function resizeWindow(x: number, y?: number): void;
/**
 * Read file and return string of File API DOM
 * @param file File
 * @return String | ArrayBuffer
 */
declare function fileReader(file: File): Promise<string | ArrayBuffer>;
/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
declare function simpleEncodeURI(v?: string): string | undefined;
/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
declare function simpleDecodeURI(v?: string): string | undefined;
/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
declare function doubleEncodeURI(v?: string): string | undefined;
/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
declare function doubleDecodeURI(v?: string): string | undefined;
/**
 * Check if uri exist (return true if OK)
 * @param uri String
 * @return Boolean
 */
declare function uriExists(uri: string): boolean;
/**
 * Check if uri exist (return uri if OK)
 * @param uri String
 * @return String
 */
declare function validateUri(uri: string): string | undefined;
/**
 * Return file object from base64 data url
 * @param dataUrl String
 * @param filename String
 * @return File
 */
declare function base64UrlToFile(
  dataUrl: string,
  filename: string
): File | undefined;

/**
 * Save data in storage with expire
 * @param key String storage key
 * @param data Any to save
 * @param expire Number minutes to invalidate data
 */
declare function saveCache<T>(key: string, data: T, expires?: ISODate): T;
/**
 * Remove data in storage
 * @param keys String List storage key
 */
declare function removeCache(...keys: string[]): void;
/**
 * Load data in storage with expire
 * @param key String storage key
 */
declare function loadCache<T>(key: string): T | undefined;
/**
 * Load data in storage with expire
 * @param key String storage key
 */
declare function loadCacheAndDetails<T>(key: string):
  | {
      data: T;
      at: ISODate;
      until: ISODate;
    }
  | undefined;
/**
 * Remove all data in storage expired
 */
declare function clearCache(): void;
/**
 * Remove all data in storage
 */
declare function purgeCache(): void;

declare const CONST: {
  UF: {
    uf: string;
    name: string;
    capital: string;
  }[];
};

/**
 * Create/Update cookie with security
 * @param data Dictionary (key: value)
 * @param expires Date
 */
declare function saveCookie(
  data: Dictionary,
  expires?: ISODate,
  sameSite?: "Strict" | "Lax" | "None"
): void;
/**
 * Get/Load cookie with security
 * @param keys String[]
 * @return String[]
 */
declare function loadCookies(keys: string | string[]): (string | undefined)[];
/**
 * Get/Load cookie with security
 * @param key String
 * @return String
 */
declare function loadCookie(key: string): string | undefined;
/**
 * Remove cookie with security
 * @param keys String (e.g: removeCookie(keyA, keyB, keyC))
 */
declare function removeCookie(keys: string | string[]): void;
/**
 * Remove all cookies
 */
declare function purgeCookies(): void;

/**
 * Decode string base64 unicode
 * @param v String
 * @return String
 */
declare function decodeBase64Unicode(v: string): string;
/**
 * Decode string base64
 * @param v String
 * @return String
 */
declare function decodeBase64(v: string): string;
/**
 * Return payload of jwt token
 * @param token String
 * @return Object
 */
declare function parseJwt<T>(token: string, head?: boolean): T | undefined;
/**
 * Encode string base64
 * @param v String
 * @return String
 */
declare function tryEncodeBase64(v: string): string;
/**
 * Decode string base64
 * @param v String
 * @return String
 */
declare function tryDecodeBase64(v: string): string;

/**
 * Return true if is valid date
 * @param date ISODate | Date | String (locale format)
 * @return Boolean
 */
declare function isDate(v?: ISODate | Date): boolean;
/**
 * Return true if is empty date
 * @param date ISODate | Date
 * @return Boolean
 */
declare function isDateEmpty(date?: ISODate | Date): boolean;
interface SetDateValues {
  day?: number;
  month?: number;
  year?: number;
  hour?: number;
  min?: number;
  sec?: number;
}
/**
 * Set values in date
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function setDate(
  v: ISODate | Date,
  values: SetDateValues,
  add?: boolean
): Date;
/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function setISO(
  date: ISODate | Date,
  values: SetDateValues,
  add?: boolean
): string;
/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function setDateISO(
  date: ISODate | Date,
  values: SetDateValues,
  add?: boolean
): string;
/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function setTimeISO(
  date: ISODate | Date,
  values: SetDateValues,
  add?: boolean
): string;
interface AddDateValues {
  days?: number;
  months?: number;
  years?: number;
  hours?: number;
  mins?: number;
  secs?: number;
}
/**
 * Add values in date
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function addDate(date: ISODate | Date, values: AddDateValues): Date;
/**
 * Add values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function addISO(date: ISODate | Date, values: AddDateValues): string;
/**
 * Add values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function addDateISO(
  date: ISODate | Date,
  values: AddDateValues
): string;
/**
 * Add values in time ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
declare function addTimeISO(
  date: ISODate | Date,
  values: AddDateValues
): string;
/**
 * Parse date from iso date string
 * @param date ISODate | Date
 * @return Date
 */
declare function parseISO(date?: ISODate | Date): Date;
/**
 * Parse date from iso or date
 * @param date ISODate | Date
 * @return Date
 */
declare function parseDate(date?: ISODate | Date): Date;
/**
 * Create or parse date
 * @param date ISODate | Date
 * @return Date
 */
declare function date(date?: ISODate | Date): Date;
/**
 * Return iso date from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
declare function formatISO(date?: ISODate | Date): ISODate;
/**
 * Return only date in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
declare function dateISO(date?: ISODate | Date): ISODate;
/**
 * Return only year and month in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
declare function monthISO(date?: ISODate | Date): ISODate;
/**
 * Return only year and week number in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
declare function weekISO(date?: ISODate | Date): ISODate;
/**
 * Return time number in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
declare function timeISO(date?: ISODate | Date): ISODate;
/**
 * Return true if date A equal B
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
declare function isDateEqual(a?: ISODate | Date, b?: ISODate | Date): boolean;
/**
 * Return difference of days between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
declare function daysDiff(a: ISODate | Date, b: ISODate | Date): number;
/**
 * Return difference of months between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
declare function monthsDiff(a: ISODate | Date, b: ISODate | Date): number;
/**
 * Return difference of years between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
declare function yearsDiff(a: ISODate | Date, b: ISODate | Date): number;

/**
 * Function composition
 * @param fns[] functions that modify the value
 * @return value modified
 */
declare function compose(...fns: any[]): (value: any) => any;

/**
 * Go back in history
 */
declare function goBack(): void;

/**
 * Generate random number, from 0 to param
 * @param params Number
 * @return Number
 */
declare function randomNumber(max?: number): number;
/**
 * Parse value or return 0
 * @param v Number
 * @return Number
 */
declare function parseNumber(v?: unknown): number;
/**
 * Parse string percent or return 0
 * @param v String
 * @return Number
 */
declare function parsePercent(v?: string): number;
/**
 * Return two digits if value ten minor (00,01,02)
 * @param v Number
 * @return String
 */
declare function zeroTwoDigits(v?: number): string;
/**
 * Return decimal rounded (2 digits by default)
 * @param v Number
 * @param digts Number
 * @return String
 */
declare function roundNumber(v?: number, digts?: number): number;

/**
 * Copy object without reference, using JSON tools
 * @param object Any
 * @return object copy
 */
declare function objectCopy<T>(obj: T): T;
/**
 * Get array from enum entries
 * @return Array {key,value}
 */
declare function enumToCollection<T extends object>(
  en: T
): {
  key: string;
  value: T;
}[];
/**
 * Get object from enum entries
 * @return Object {key:value}
 */
declare function enumToObject<T extends object>(
  en: T
): {
  key: T;
  value: keyof T;
};
/**
 * Extract deep property in object by path
 * @param object any
 * @param path String (e.g 'foo.bar')
 * @return Generic is last property of path
 */
declare function deepFind<T, O = unknown>(
  object: O,
  path: string
): T | undefined;
/**
 * Validate if object or array is defined (object empty and array length zero is false)
 * @param object any
 * @return Boolean
 */
declare function isDefined(object: any): boolean;
/**
 * Validate if object A has the same values of object B
 * @param a any
 * @param b any
 * @return Boolean
 */
declare function isEqual(a: any, b: any): boolean;
/**
 * Validate if `object` has `search` in values
 * @param object any
 * @param search String
 * @param keys Array
 * @return Boolean
 */
declare function searchInObject<T extends object>(
  object: T,
  search: string,
  keys?: (keyof T)[]
): boolean;
/**
 * Tranform keys of object in camelCase
 * @param data Object
 * @return Object
 */
declare function camelCaseProps(data: any): any;
/**
 * Return true if not undefined or null
 * @param v Object
 * @return Boolean
 */
declare function isSomething(v?: any): boolean;
/**
 * Return FormData filled by object
 * @param v Object
 * @return FormData
 */
declare function objectToFormData<T extends object>(v: T): FormData;

/**
 * Generate Promise with delay
 * @param data Any
 * @param milliseconds Number (default = 2000)
 */
declare function delay<T>(
  data: T | (() => T),
  milliseconds?: number
): Promise<T>;

/**
 * Wrap up Components
 * @param ReactNode[] sequence of elements
 * @return wrapper (first element as father and others as children)
 */
declare function wrapse(...comps: any[]): any;

/**
 * Sort array of elements
 * @param field String (keys of object A/B)
 * @return Function
 */
declare function sorter<A, B>(): (a: A, b: B) => number;
/**
 * Sort array of object by field property
 * @param field String (keys of object A/B)
 * @return Function
 */
declare function sorterByField<
  A = any,
  B = any,
  F extends keyof A & keyof B = any
>(field: F): (a: A, b: B) => number;
/**
 * Sorter array of deep object by path (using deepFind)
 * @param path String (e.g 'foo.bar')
 * @return Function
 */
declare function sorterDeep<A, B>(path: string): (a: A, b: B) => number;

/**
 * Return true if is SSR (util for nextjs)
 * @return boolean
 */
declare function isServer(): boolean;

/**
 * Extract initials of name
 * @param text String
 * @return String
 */
declare function getInitials(text?: string): string;
/**
 * Transform to TitleCase
 * @param text String
 * @return String
 */
declare function titleCase(text: string): string;
/**
 * Transform to Capital Case
 * @param text String
 * @return String
 */
declare function capitalizedCase(text: string): string;
/**
 * Transform to camelCase
 * @param text String
 * @return String
 */
declare function camelCase(text: string): string;
/**
 * Validate email string
 * @param email String
 * @return Boolean
 */
declare function isEmail(email?: string): boolean;
/**
 * Remove characters other than numbers
 * @param value String
 * @return String
 */
declare function numberFormatter(value?: string): string;
/**
 * Remove characters other than text
 * @param value String
 * @return String
 */
declare function textFormatter(value?: string): string;
/**
 * Remove characters other than alphanumeric
 * @param value String
 * @return String
 */
declare function alphaNumFormatter(value?: string): string;
/**
 * Format global phone numbers
 * @param value String
 * @return String
 */
declare function phoneFormatter(
  v?: string,
  ddd?: string,
  ddi?: string,
  noFormatNumber?: boolean
): string;
/**
 * Parse value to string
 * @param px any
 * @return String
 */
declare function parseStr(v?: unknown): string;
/**
 * Replace all occurrences
 * @param value String
 * @param search String
 * @param replace String
 * @return String
 */
declare function replaceAll(
  value: string,
  search: string | RegExp,
  replace?: string
): string;
/**
 * Lighten or darken color
 * @param color String
 * @param percent Number
 * @return String
 */
declare function shadeColor(color: string, percent: number): string;
/**
 * Convert string or number in boolean ("true" -> true, "True" -> true, "False" -> false, "1" -> true, "0" -> false)
 * @param v Any
 * @return Boolean
 */
declare function parseBool(v?: any): boolean;

declare function factoryTestId(props: any, addOn: string): any;

/**
 * Forces a function to wait time before running again
 * @param wait Number (default = 500)
 */
declare function debounce(wait?: number): (callback: () => void) => void;

/**
 * Generate unique key (timestamp + random)
 * @return String
 */
declare function uniqueKey(): string;

export {
  $,
  CONST,
  Dictionary,
  Form,
  ID,
  ISODate,
  ISOTime,
  NewID,
  Option,
  Pagination,
  PaginationConfig,
  Queue,
  QueueList,
  Raw,
  addDate,
  addDateISO,
  addISO,
  addTimeISO,
  alphaNumFormatter,
  array,
  base64UrlToFile,
  buildUrlWithEnv,
  camelCase,
  camelCaseProps,
  capitalizedCase,
  cepFormatter,
  cepValidator,
  clearCache,
  cnpjFormatter,
  cnpjValidator,
  compose,
  cpfCnpjFormatter,
  cpfCnpjValidator,
  cpfFormatter,
  cpfValidator,
  date,
  dateISO,
  daysDiff,
  debounce,
  decodeBase64,
  decodeBase64Unicode,
  deepFind,
  delay,
  domainFromUrl,
  doubleDecodeURI,
  doubleEncodeURI,
  downloadFromBase64,
  downloadFromBlob,
  downloadFromByteArray,
  downloadFromUrl,
  enumToCollection,
  enumToObject,
  factoryTestId,
  fileReader,
  flatList,
  formatISO,
  getElementPosition,
  getFilenameFromUrl,
  getInitials,
  getLocale,
  getLocales,
  goBack,
  isAndroid,
  isBrowser,
  isChrome,
  isCnpj,
  isCpf,
  isCpfCnpj,
  isDate,
  isDateEmpty,
  isDateEqual,
  isDefined,
  isEmail,
  isEqual,
  isExternalLink,
  isFirefox,
  isIE,
  isIOS,
  isIframe,
  isLocalhostOrAzureEnv,
  isMobile,
  isOpera,
  isPtBr,
  isRNE,
  isSafari,
  isServer,
  isSomething,
  isTestingBrowser,
  loadCache,
  loadCacheAndDetails,
  loadCookie,
  loadCookies,
  monthISO,
  monthsDiff,
  numberFormatter,
  objectCopy,
  objectToFormData,
  parseBool,
  parseDate,
  parseISO,
  parseJwt,
  parseNumber,
  parsePercent,
  parseStr,
  phoneFormatter,
  preventDefault,
  print,
  purgeCache,
  purgeCookies,
  randomNumber,
  removeCache,
  removeCookie,
  removeDuplicates,
  replaceAll,
  resizeWindow,
  rgFormatter,
  roundNumber,
  saveCache,
  saveCookie,
  scrollPosition,
  scrollTo,
  searchInObject,
  segregateItems,
  sendToClipboard,
  setCssProperty,
  setDate,
  setDateISO,
  setISO,
  setTimeISO,
  shadeColor,
  simpleDecodeURI,
  simpleEncodeURI,
  sorter,
  sorterByField,
  sorterDeep,
  subtotal,
  textFormatter,
  timeISO,
  titleCase,
  tryDecodeBase64,
  tryEncodeBase64,
  uniqueKey,
  uriExists,
  useForm,
  useFormMock,
  usePagination,
  useQueue,
  validateUri,
  weekISO,
  wrapse,
  yearsDiff,
  zeroTwoDigits,
};
