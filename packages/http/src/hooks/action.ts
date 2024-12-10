import { ISODate, isPtBr, loadCache, saveCache } from "@vilela/shared";
import React from "react";

import { HttpResponse, HttpResponseError } from "../utils";

type ActionRequest<T> = () => Promise<HttpResponse<T> | T>;

/**
 * Type return of useAction Hook
 */
export interface Action<T = unknown, M = T, P = unknown> {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
export function useAction<T = unknown, M = T, P = unknown>(
  initialData?: M
): Action<T, M, P> {
  const defaultValue = initialData || ([] as unknown as M);

  const [payload, setPayload] = React.useState<M>(defaultValue);
  const [success, setSuccess] = React.useState<boolean | string>(false);
  const [error, setError] = React.useState<string>("");
  const [statusCode, setStatusCode] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [pristine, setPristine] = React.useState<boolean>(true);
  const [complete, setComplete] = React.useState<boolean>(false);

  const hasMsg = React.useMemo(() => !!success || !!error, [success, error]);

  function closeMsg() {
    setStatusCode(0);
    setError("");
    setSuccess(false);
  }

  function reset(keepData?: boolean) {
    closeMsg();
    setPristine(true);
    setComplete(false);
    if (!keepData) {
      setPayload(defaultValue);
    }
  }

  function updateData(v: M) {
    setPayload(v);
  }

  async function exec(
    request:
      | ((props?: P) => Promise<HttpResponse<T> | T> | ActionRequest<T>)
      | ActionRequest<T>,
    configs?: ActionConfig<T, M, P>,
    props?: P
  ): Promise<HttpResponse<M>> {
    closeMsg();

    setPristine(false);
    setComplete(false);

    if (!configs?.noLoading) {
      setLoading(true);
    }
    if (!configs?.keepData) {
      setPayload(defaultValue);
    }

    let call = request;
    let usingCache = false;

    // ? if has cache and no force refresh cache, change request to cache data
    if (configs?.cacheKey && !configs?.cacheRefresh) {
      const data = loadCache<HttpResponse<T>>(configs?.cacheKey);
      if (
        data &&
        !configs?.cacheInvalidate?.(
          data.results !== undefined ? data : ({ results: data } as never)
        )
      ) {
        call = () => new Promise<HttpResponse<T>>((resolve) => resolve(data));
        usingCache = true;
      }
    }

    const promise = call(props);

    return (
      (typeof promise === "function" ? promise() : promise)
        // ? save cache if has cache config
        .then((data) => {
          if (configs?.cacheKey && !usingCache) {
            saveCache(configs.cacheKey, data, configs.cacheExpires);
          }
          return data;
        })
        // ? on success flow
        .then((data) => {
          // ? transform data on success (mutation)
          const dataWithResults = data as HttpResponse<T>;
          const transformedData = (
            dataWithResults?.results !== undefined
              ? {
                  ...dataWithResults,
                  results: (configs?.mutation?.(dataWithResults.results) ||
                    dataWithResults.results) as M,
                }
              : {
                  results: (configs?.mutation?.(data as T) || data) as M,
                }
          ) as HttpResponse<M>;

          if (configs?.forceError) {
            return Promise.reject({
              message: configs?.forceError,
              status: transformedData.status,
            });
          }
          if (
            transformedData.status === 204 &&
            configs?.forceErrorOnNoContent
          ) {
            return Promise.reject({
              message: isPtBr() ? "Nenhum item encontrado!" : "No items found!",
              status: transformedData.status,
            });
          }

          try {
            configs?.onSuccess?.(transformedData);
          } catch (err) {
            let message = err;
            if (err instanceof Error) {
              message = err.message;
            }
            return Promise.reject({
              message,
              status: transformedData.status,
            });
          }

          setStatusCode(transformedData.status);
          setPayload(transformedData.results);

          if (configs?.successMsg) {
            setSuccess(configs.successMsg);
          } else {
            setSuccess(true);
          }

          return transformedData;
        })
        // ? on error flow
        .catch((err: HttpResponseError<T>) => {
          configs?.onError?.(err);
          setStatusCode(err.status);
          setError(err.message);
          return Promise.reject(err);
        })
        .finally(() => {
          setLoading(false);
          setComplete(true);
        })
    );
  }

  return {
    payload,
    error,
    statusCode,
    success,
    loading,
    exec,
    closeMsg,
    hasMsg,
    pristine,
    reset,
    updateData,
    complete,
  };
}

/**
 * Type return of useActionStateless Hook
 */
export interface ActionStateless<T = unknown> {
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
export function useActionStateless<T = unknown>(): ActionStateless<T> {
  const [success, setSuccess] = React.useState<string>("");
  const [warning, setWarning] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const hasMsg = React.useMemo(
    () => !!success || !!error || !!warning,
    [success, error, warning]
  );

  function start() {
    setLoading(true);
    clearStatus();
  }

  function finish() {
    setLoading(false);
  }

  function catcher(err: HttpResponse<T>) {
    setError(err.message || (err as never));
  }

  function updateStatus(success?: string, warning?: string, error?: string) {
    setSuccess(success || "");
    setWarning(warning || "");
    setError(error || "");
  }

  function clearStatus() {
    setSuccess("");
    setWarning("");
    setError("");
  }

  return {
    error,
    success,
    warning,
    loading,
    clearStatus,
    hasMsg,
    start,
    finish,
    catcher,
    updateStatus,
  };
}

/**
 * Type return of useAct Hook
 */
export type Act<T = unknown, M = T, P = unknown> = Action<T, M, P> & {
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
export function useAct<T = unknown, M = T, P = unknown>(
  request:
    | ((props?: P) => Promise<HttpResponse<T> | T> | ActionRequest<T>)
    | ActionRequest<T>,
  configs?: ActionConfig<T, M, P>,
  initialData?: M | undefined
): Act<T, M, P> {
  const action = useAction<T, M, P>(initialData);

  const fn = React.useCallback(
    (props?: P) => action.exec(request, configs, props),
    [action]
  );

  return React.useMemo(() => Object.assign(fn, action), [action]);
}

export function useActionMock<T = unknown, M = T>(
  props?: Partial<Action<Partial<T>, M>> & {
    spyExec?: CallableFunction;
    spyCloseMsg?: CallableFunction;
    spyReset?: CallableFunction;
    spyUpdateData?: CallableFunction;
  }
) {
  const emptyFn = new Function();
  return {
    payload: [],
    error: "asdasd",
    success: "asdasd",
    loading: true,
    pristine: false,
    hasMsg: false,
    exec: props?.spyExec || emptyFn,
    closeMsg: props?.spyCloseMsg || emptyFn,
    reset: props?.spyReset || emptyFn,
    updateData: props?.spyUpdateData || emptyFn,
    ...props,
  } as Action<T, M>;
}

export function useActionStatelessMock<T = unknown>(
  props?: Partial<Action<T>> & {
    spyStart?: CallableFunction;
    spyFinish?: CallableFunction;
    spyCatcher?: CallableFunction;
    spyUpdateStatus?: CallableFunction;
    spyClearStatus?: CallableFunction;
    spyCloseMsg?: CallableFunction;
    spyReset?: CallableFunction;
  }
) {
  const emptyFn = new Function();
  return {
    error: "asdasd",
    warning: "asdasd",
    success: "asdasd",
    loading: true,
    hasMsg: false,
    closeMsg: props?.spyCloseMsg || emptyFn,
    reset: props?.spyReset || emptyFn,
    updateStatus: props?.spyUpdateStatus || emptyFn,
    clearStatus: props?.spyClearStatus || emptyFn,
    start: props?.spyStart || emptyFn,
    finish: props?.spyFinish || emptyFn,
    catcher: props?.spyCatcher || emptyFn,
    ...props,
  } as unknown as ActionStateless<T>;
}
