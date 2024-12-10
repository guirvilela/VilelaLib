import { ISODate } from "@vilela/shared";
import React from "react";

/**
 * Serialize body to XMLHttpRequestBodyInit
 * @param params Object
 * @return XMLHttpRequestBodyInit
 */
declare function bodySerializer<T extends object = any>(
  body?: T,
  configs?: {
    customSerializer?: (body: T) => XMLHttpRequestBodyInit;
  }
): string | Blob | ArrayBufferView | ArrayBuffer | FormData | undefined;

/**
 * Serialize headers object to Headers
 * @param params Object
 * @return Headers
 */
declare function headersSerializer<T extends object = any, B = any>(
  headers?: T,
  configs?: {
    customSerializer?: (headers: T) => Headers;
    body?: B;
  }
): Headers | undefined;

/**
 * Serialize parameters to string (array separate by comma)
 * @param params Object
 * @return string
 */
declare function paramsSerializer<T extends object = any>(
  params?: T,
  configs?: {
    customSerializer?: (params: T) => string;
    withQuestionMark?: boolean;
    arrayRepeat?: boolean;
    noEncodeURI?: boolean;
    doubleEncodeURI?: boolean;
  }
): string;
/**
 * Serialize parameters of url, return url changed
 * @param url String
 * @param params Object
 * @return string
 */
declare function urlParamsSerializer<T extends object = any>(
  url: string,
  params?: T,
  configs?: {
    customSerializer?: (url: string, params: T) => string;
    noEncodeURI?: boolean;
    doubleEncodeURI?: boolean;
  }
): string;
/**
 * Build parameters of url object/String to object (array separate by comma)
 * Standalone, util for controllers (router.query)
 * @param params Object/String
 * @return Object
 */
declare function paramsBuilder<T>(
  params: any,
  configs?: {
    ignoresFormat?: boolean | (keyof T)[];
  }
): T;

declare type HttpStatus =
  | 200
  | 201
  | 204
  | 301
  | 307
  | 308
  | 400
  | 401
  | 403
  | 404
  | 405
  | 418
  | 500
  | 501
  | 502
  | 503
  | 507;
declare type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS";
interface HttpConfig<
  B extends object = any,
  P extends object = any,
  T = unknown,
  U extends object = any,
  H = Record<string, any>
> {
  baseURL: string;
  method?: HttpMethod;
  headers?: H;
  headersSerializer?: (headers: H) => Headers;
  body?: B;
  bodySerializer?: (body: B) => XMLHttpRequestBodyInit;
  params?: P;
  urlParams?: U;
  paramsSerializer?: (params: P) => string;
  urlParamsSerializer?: (url: string, params: U) => string;
  responseSerializer?: (response: Response) => Promise<T>;
  forceErrorOnNoContent?: boolean;
  accessToken?: string | ((url: string) => string);
  onUnauthorized?: (redirectTo?: string) => void;
}
declare function httpClient<
  T = unknown,
  B extends object = any,
  P extends object = any,
  U extends object = any
>(
  this: any,
  url: string,
  configs: HttpConfig<B, P, T, U>
): () => Promise<HttpResponse<T, B, P, U>>;
declare function factoryHttpClient(defaultConfigs?: HttpConfig): {
  get: typeof httpClient;
  post: typeof httpClient;
  put: typeof httpClient;
  patch: typeof httpClient;
  delete: typeof httpClient;
};
declare type Http = ReturnType<typeof factoryHttpClient>;

declare class HttpResponseError<
  T = unknown,
  B extends object = any,
  P extends object = any,
  U extends object = any
> {
  status: HttpStatus;
  message: string;
  results: T;
  configs: HttpConfig<B, P, T, U>;
  headers: Headers;
  constructor(
    status?: number,
    data?: any,
    configs?: HttpConfig<B, P, T, U>,
    headers?: Headers
  );
}
declare class HttpResponse<
  T = unknown,
  B extends object = any,
  P extends object = any,
  U extends object = any
> {
  status: HttpStatus;
  message: string;
  results: T;
  configs: HttpConfig<B, P, T, U>;
  headers: Headers;
  constructor(
    status?: number,
    data?: any,
    configs?: HttpConfig<B, P, T, U>,
    headers?: Headers
  );
}
/**
 * Serialize response object to custom type
 * @param response Response
 * @return T
 */
declare function responseSerializer<T = any>(
  response: Response,
  configs?: {
    customSerializer?: (response: Response) => Promise<T>;
  }
): Promise<T>;

/**
 * Fix http protocol of url
 * @param url String
 * @return String
 */
declare function fixProtocol(url?: string): string;

declare type ActionRequest<T> = () => Promise<HttpResponse<T> | T>;
/**
 * Type return of useAction Hook
 */
interface Action<T = unknown, M = T, P = unknown> {
  /** request results on done and after mutation */
  payload: M;
  /** request error message */
  error: string;
  /** request status code */
  statusCode: number;
  /** request success feedback (can be message if has config successMsg) */
  success: boolean | string;
  /** true on starting request and false on done */
  loading: boolean;
  /** true if action has not yet been called */
  pristine: boolean;
  /** true if action called and finish */
  complete: boolean;
  /** execute http request */
  exec: (
    request:
      | (() => Promise<HttpResponse<T> | T> | ActionRequest<T>)
      | ActionRequest<T>,
    configs?: ActionConfig<T, M, P>,
    props?: P
  ) => Promise<HttpResponse<M>>;
  /** true if exist success or error message */
  hasMsg: boolean;
  /** reset success or error message */
  closeMsg: () => void;
  /** manual set payload value */
  updateData: (v: M) => void;
  /** reset all props of action to initial state */
  reset: (keepData?: boolean) => void;
}
interface ActionConfig<T, M, P> {
  /** don't clear payload before request */
  keepData?: boolean;
  /** don't set loading true */
  noLoading?: boolean;
  /** if request success set message */
  successMsg?: string;
  /** if request success force error with message */
  forceError?: string;
  /** cache Control */
  cacheKey?: string;
  /** cache Control: force request refresh */
  cacheRefresh?: boolean;
  /** cache Control: expire time */
  cacheExpires?: ISODate;
  /** cache Control: invalidate logic */
  cacheInvalidate?: (data: HttpResponse<T>) => boolean;
  /** call it if request success (status 2xx) */
  onSuccess?: (response: HttpResponse<M>) => void;
  /** call it if request error (status 4xx,5xx) */
  onError?: (error: HttpResponseError<T>) => void;
  /** change data after request success, before set payload and call onSuccess */
  mutation?: (response: T) => M;
  /** force request error on result status code 204 */
  forceErrorOnNoContent?: boolean;
}
/**
 * Create util state to use in http request
 * @param initialData Object
 * @return Action
 */
declare function useAction<T = unknown, M = T, P = unknown>(
  initialData?: M
): Action<T, M, P>;
/**
 * Type return of useActionStateless Hook
 */
interface ActionStateless<T = unknown> {
  /** request success message (use updateStatus) */
  success: string;
  /** request warning message (use updateStatus) */
  warning: string;
  /** request error message (use updateStatus) */
  error: string;
  /** request loading between start and finally */
  loading: boolean;
  /** true if has any status message */
  hasMsg: boolean;
  /** change status message */
  updateStatus: (success?: string, warning?: string, error?: string) => void;
  /** call on init request */
  start: () => void;
  /** call on finally request */
  finish: () => void;
  /** change error message */
  catcher: (err: HttpResponse<T>) => void;
  /** clear status messages */
  clearStatus: () => void;
}
/**
 * Create util Action without http state
 * @return ActionStateless
 */
declare function useActionStateless<T = unknown>(): ActionStateless<T>;
/**
 * Type return of useAct Hook
 */
declare type Act<T = unknown, M = T, P = unknown> = Action<T, M, P> & {
  /** execute http request preconfigured */
  (props?: P): Promise<HttpResponse<M>>;
};
/**
 * Create util state to use in http request
 * @param request Function
 * @param configs Object
 * @param initialData Object
 * @return Action
 */
declare function useAct<T = unknown, M = T, P = unknown>(
  request:
    | ((props?: P) => Promise<HttpResponse<T> | T> | ActionRequest<T>)
    | ActionRequest<T>,
  configs?: ActionConfig<T, M, P>,
  initialData?: M | undefined
): Act<T, M, P>;
declare function useActionMock<T = unknown, M = T>(
  props?: Partial<Action<Partial<T>, M>> & {
    spyExec?: CallableFunction;
    spyCloseMsg?: CallableFunction;
    spyReset?: CallableFunction;
    spyUpdateData?: CallableFunction;
  }
): Action<T, M, unknown>;
declare function useActionStatelessMock<T = unknown>(
  props?: Partial<Action<T>> & {
    spyStart?: CallableFunction;
    spyFinish?: CallableFunction;
    spyCatcher?: CallableFunction;
    spyUpdateStatus?: CallableFunction;
    spyClearStatus?: CallableFunction;
    spyCloseMsg?: CallableFunction;
    spyReset?: CallableFunction;
  }
): ActionStateless<T>;

declare const useHttp: () => {
  get: typeof httpClient;
  post: typeof httpClient;
  put: typeof httpClient;
  patch: typeof httpClient;
  delete: typeof httpClient;
};
interface HttpProviderConfig {
  mockServerURL?: string;
  localMode?: boolean;
  tokenSerializer?: (
    accessToken: string | undefined,
    erpToken: string | undefined
  ) => (url: string) => string;
}
interface HttpProviderProps {
  configs?: HttpProviderConfig;
  children?: React.ReactNode;
}
declare function HttpProvider({
  configs,
  children,
}: HttpProviderProps): JSX.Element;
declare function useService<T>(factory: (http: Http) => T): T;

export {
  Act,
  Action,
  ActionStateless,
  bodySerializer,
  fixProtocol,
  headersSerializer,
  Http,
  httpClient,
  HttpConfig,
  HttpMethod,
  HttpProvider,
  HttpProviderConfig,
  HttpResponse,
  HttpResponseError,
  HttpStatus,
  paramsBuilder,
  paramsSerializer,
  responseSerializer,
  urlParamsSerializer,
  useAct,
  useAction,
  useActionMock,
  useActionStateless,
  useActionStatelessMock,
  useHttp,
  useService,
};
