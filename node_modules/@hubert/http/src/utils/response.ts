/* eslint-disable @typescript-eslint/no-explicit-any */
import { isBrowser, isPtBr } from "@vilela/shared";
import { HttpConfig, HttpStatus } from "./client";

const feedbackPTBR = {
  offline: "Parece que você esta sem conexão, verifique e tente novamente!",
  unauth:
    "Sessão expirada, tente fazer login novamente. Caso o erro persista, entre em contato com o suporte!",
  unknown:
    "Erro desconhecido, já notificamos o suporte. Aguarde um momento e tente novamente! ({v})",
  forbidden:
    "Serviço indisponivel, já notificamos o suporte. Aguarde um momento e tente novamente! ({v})",
  noContent: "Nenhum item encontrado!",
};

const feedbackENUS = {
  offline: "It looks like you have no connection, check and try again!",
  unauth:
    "Session expired, try login in again. If the error persists, contact support!",
  unknown:
    "Unknown error, we have already notified support. Please wait a moment and try again! ({v})",
  forbidden:
    "Service unavailable, we have already notified support. Please wait a moment and try again! ({v})",
  noContent: "No items found!",
};

function replaceVars(str: string, value?: string) {
  return String(str).replace("{v}", value || "empty");
}

export class HttpResponseError<
  T = unknown,
  B extends object = any,
  P extends object = any,
  U extends object = any
> {
  public status: HttpStatus;
  public message: string;
  public results: T;
  public configs: HttpConfig<B, P, T, U>;
  public headers: Headers;

  constructor(
    status?: number,
    data: any = [],
    configs?: HttpConfig<B, P, T, U>,
    headers?: Headers
  ) {
    const messages = isPtBr() ? feedbackPTBR : feedbackENUS;

    this.status = (status || 0) as HttpStatus;
    this.results = data;
    this.configs = configs || ({} as HttpConfig<B, P, T, U>);
    this.headers = headers || ({} as Headers);

    if (!status) {
      if (isBrowser()) {
        if (!navigator.onLine) {
          this.status = 400;
          this.message = messages.offline;
          return;
        }
      }
      this.status = 502;
      this.message = replaceVars(messages.forbidden, configs?.baseURL);
      return;
    }

    if (status === 401) {
      if (isBrowser()) {
        configs?.onUnauthorized?.(
          window.location.pathname + window.location.search
        );
      } else {
        configs?.onUnauthorized?.();
      }
      this.message = messages.unauth;
      return;
    }

    if (data && Array.isArray(data)) {
      this.message = data[0]?.errorMessage || data[0];
      return;
    }

    if (typeof data === "string" && !!data.length) {
      this.message = data;
      return;
    }

    if (data.error && data.error_description) {
      this.message = data.error_description;
      return;
    }

    if (data.error && data.errors.chaveValidacao) {
      this.message = data.errors.chaveValidacao;
      return;
    }

    if (data.errors && Object.keys(data.errors).length) {
      const firstKey = Object.keys(data.errors)[0];
      this.message = data.errors[firstKey];
      return;
    }

    if (data.message || data.messages) {
      this.message = data.message || data.messages;
      return;
    }

    this.message = replaceVars(messages.unknown, configs?.baseURL);
  }
}

export class HttpResponse<
  T = unknown,
  B extends object = any,
  P extends object = any,
  U extends object = any
> {
  public status: HttpStatus;
  public message: string;
  public results: T;
  public configs: HttpConfig<B, P, T, U>;
  public headers: Headers;

  constructor(
    status?: number,
    data: any = [],
    configs?: HttpConfig<B, P, T, U>,
    headers?: Headers
  ) {
    const messages = isPtBr() ? feedbackPTBR : feedbackENUS;

    this.status = (status || 0) as HttpStatus;
    this.results = data;
    this.configs = configs || ({} as HttpConfig<B, P, T, U>);
    this.headers = headers || ({} as Headers);

    if (status === 200 && data.status && data.status.codigoStatus > 1) {
      throw new HttpResponseError<T, B, P, U>(
        400,
        `${data.status.descricaoStatus} (Cod: ${data.status.codigoStatus})`,
        configs,
        headers
      );
    }

    if (status === 200 && (data.traceId || 0) > 1) {
      this.status = 400;
      this.message = data.message;
      return;
    }

    if (status === 200) {
      this.message = "Ok";
      this.results = data.results || data.dados || data;
      return;
    }

    if (status === 204) {
      if (configs?.forceErrorOnNoContent) {
        throw new HttpResponseError<T, B, P, U>(
          400,
          messages.noContent,
          configs,
          headers
        );
      }

      this.message = messages.noContent;
      return;
    }

    throw new HttpResponseError<T, B, P, U>(status, data, configs, headers);
  }
}

/**
 * Serialize response object to custom type
 * @param response Response
 * @return T
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function responseSerializer<T = any>(
  response: Response,
  configs?: {
    customSerializer?: (response: Response) => Promise<T>;
  }
) {
  if (configs?.customSerializer) {
    return configs.customSerializer(response);
  }

  const data = await response.text();
  try {
    return JSON.parse(data) as unknown as T;
  } catch {
    return data as unknown as T;
  }
}
