import React from "react";
import { useAuth } from "../../../auth";

import { Http, factoryHttpClient, mockHttpClient } from "../utils/client";

const HttpContext = React.createContext<Http>(null as never);

export const useHttp = () => React.useContext(HttpContext);

export interface HttpProviderConfig {
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

/**
 * É um componente React que fornece um contexto Http para seus filhos, criado com React.createContext.
 * Ele usa a função useAuth para obter as informações de autenticação e, em seguida, cria um objeto Http usando as funções factoryHttp ou factoryHttpMock, dependendo das configurações passadas por props.
 */
export function HttpProvider({ configs, children }: HttpProviderProps) {
  const auth = useAuth();

  const value = React.useMemo(
    () =>
      configs?.localMode
        ? mockHttpClient({
            mockServerURL: configs?.mockServerURL || "http://localhost:3003",
          })
        : factoryHttpClient({
            baseURL: "",
            accessToken:
              configs?.tokenSerializer?.(auth?.accessToken, auth?.erpToken) ||
              auth?.accessToken,
            onUnauthorized: auth?.handleUnauthorized,
          }),
    [configs, auth]
  );

  return <HttpContext.Provider value={value}>{children}</HttpContext.Provider>;
}

/**
 * useService é um hook que retorna um serviço criado usando o contexto Http atual e uma função factory.
 * A função factory deve receber um objeto Http como argumento e retornar o serviço desejado.
 * O hook usa a função useHttp para obter o objeto Http atual e cria o serviço usando React.useMemo para evitar recriar o objeto sempre que o componente é atualizado.
 */
export function useService<T>(factory: (http: Http) => T) {
  const http = useHttp();
  const service = React.useMemo(() => factory(http), [factory, http]);
  return service;
}
