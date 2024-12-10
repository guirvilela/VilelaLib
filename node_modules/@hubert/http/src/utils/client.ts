/* eslint-disable @typescript-eslint/no-explicit-any */
import { camelCaseProps } from "@vilela/shared";
import { bodySerializer } from "./body";
import { headersSerializer } from "./headers";
import { paramsSerializer, urlParamsSerializer } from "./params";
import {
  HttpResponse,
  HttpResponseError,
  responseSerializer,
} from "./response";

export type HttpStatus =
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

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "OPTIONS";

function dataNormalizer<T>(data: T) {
  if (typeof data === "boolean") {
    return data;
  }
  if (typeof data === "string" && data) {
    return data;
  }
  if (data) {
    return camelCaseProps(data);
  }
  return [];
}

export interface HttpConfig<
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

export function httpClient<
  T = unknown,
  B extends object = any,
  P extends object = any,
  U extends object = any
>(this: any, url: string, configs: HttpConfig<B, P, T, U>) {
  const mergedConfigs = {
    ...this,
    ...configs,
  } as HttpConfig<B, P, T, U>;

  if (!mergedConfigs.baseURL || url.includes("http")) {
    throw new Error(
      `👀 don't send BASE URL API in URL, use config [baseURL] instead! (${url})`
    );
  }
  if (url.includes("?")) {
    throw new Error(
      `👀 don't use query params in URL, use config [params] instead! (${url})`
    );
  }

  const query = paramsSerializer(mergedConfigs.params, {
    customSerializer: mergedConfigs.paramsSerializer,
    withQuestionMark: true,
    doubleEncodeURI: true,
  });

  const urlWithChangedParams = urlParamsSerializer(
    url,
    mergedConfigs.urlParams,
    {
      customSerializer: mergedConfigs.urlParamsSerializer,
      doubleEncodeURI: true,
    }
  );

  const uri = `${mergedConfigs.baseURL || ""}${urlWithChangedParams}${query}`;

  const body = bodySerializer(mergedConfigs.body, {
    customSerializer: mergedConfigs.bodySerializer,
  });

  const headers = headersSerializer(
    {
      Authorization:
        mergedConfigs.accessToken &&
        `Bearer ${
          typeof mergedConfigs.accessToken === "string"
            ? mergedConfigs.accessToken
            : mergedConfigs.accessToken(uri)
        }`,
      ...mergedConfigs.headers,
    },
    { body, customSerializer: mergedConfigs.headersSerializer }
  );

  return async () => {
    try {
      const response = await fetch(uri, {
        method: mergedConfigs.method || "GET",
        body,
        headers,
      });

      const status = response.status;
      const rheaders = response.headers;

      const content = await responseSerializer<T>(response, {
        customSerializer: mergedConfigs.responseSerializer,
      });

      if (response.ok) {
        return new HttpResponse<T, B, P, U>(
          status,
          dataNormalizer(content),
          mergedConfigs,
          rheaders
        );
      }

      throw new HttpResponseError<unknown, B, P, U>(
        status,
        dataNormalizer(content),
        mergedConfigs,
        rheaders
      );
    } catch (err) {
      if (err instanceof HttpResponseError) {
        throw err;
      }

      throw new HttpResponseError<unknown, B, P, U>(
        0,
        undefined,
        mergedConfigs
      );
    }
  };
}

export function factoryHttpClient(defaultConfigs?: HttpConfig) {
  return {
    get: httpClient.bind({
      method: "GET",
      ...defaultConfigs,
    }),
    post: httpClient.bind({
      method: "POST",
      ...defaultConfigs,
    }),
    put: httpClient.bind({
      method: "PUT",
      ...defaultConfigs,
    }),
    patch: httpClient.bind({
      method: "PATCH",
      ...defaultConfigs,
    }),
    delete: httpClient.bind({
      method: "DELETE",
      ...defaultConfigs,
    }),
  };
}

export type Http = ReturnType<typeof factoryHttpClient>;

export function mockHttpClient({ mockServerURL = "" }) {
  return {
    get: (url: string) =>
      httpClient(url, {
        method: "GET",
        baseURL: mockServerURL,
      }),
    post: (url: string) =>
      httpClient(url, {
        method: "POST",
        baseURL: mockServerURL,
      }),
    put: (url: string) =>
      httpClient(url, {
        method: "PUT",
        baseURL: mockServerURL,
      }),
    patch: (url: string) =>
      httpClient(url, {
        method: "PATCH",
        baseURL: mockServerURL,
      }),
    delete: (url: string) =>
      httpClient(url, {
        method: "DELETE",
        baseURL: mockServerURL,
      }),
  } as Http;
}
