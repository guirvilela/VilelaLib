import {
  camelCaseProps,
  ISODate,
  loadCache,
  loadCookies,
  parseJwt,
  purgeCache,
  removeCache,
  removeCookie,
  saveCache,
  saveCookie,
} from "@vilela/shared";
import React from "react";
import { AuthConfig, IAuthContext, User } from "./types";

export type { AuthConfig, User };

const AuthContext = React.createContext<IAuthContext>(null as never);

export const useAuth = () => React.useContext(AuthContext);

interface AuthProviderProps {
  configs: AuthConfig;
  children?: React.ReactNode;
}

function factoryUser(accessToken?: string) {
  if (accessToken) {
    const jwt = parseJwt(accessToken);
    const obj = camelCaseProps(jwt);
    return {
      ...obj,
      codUsuario: Number(obj.codUsuario),
      codigoLogin: Number(obj.codigoLogin),
      codFavorecido: Number(obj.codFavorecido),
      bpo: Number(obj.bPO),
      foto: obj.url_Foto,
    } as User;
  }
  return undefined;
}

/**
 * Ela exporta variáveis e funções que podem ser utilizadas em todos projetos como:
  - authenticated,
  - accessToken,
  - erpToken,
  - user,
  - login,
  - logout,
  - handleUnauthorized,
  - handleChangeAvatar
 * @example
 * const { authenticated, handleUnauthorized } = useAuth();
 */
export function AuthProvider({ configs, children }: AuthProviderProps) {
  const [accessToken, setAccessToken] = React.useState<string>();
  const [erpToken, setErpToken] = React.useState<string>();
  const [authenticated, setAuthenticated] = React.useState<boolean>();
  const [user, setUser] = React.useState<User>();

  const keys = React.useMemo(
    () => ({
      accounts: Array.isArray(configs.accessTokenKey)
        ? configs.accessTokenKey[configs.accessTokenKey.length - 1]
        : configs.accessTokenKey,
      erp: Array.isArray(configs.erpTokenKey)
        ? configs.erpTokenKey[configs.erpTokenKey.length - 1]
        : configs.erpTokenKey,
    }),
    [configs]
  );

  const isUsuarioHubert = React.useMemo(
    () => user?.tipoUsuario === "USR",
    [user]
  );
  const isFuncionario = React.useMemo(
    () => user?.tipoUsuario === "FUNC",
    [user]
  );
  const isSindico = React.useMemo(() => user?.tipoUsuario === "SIND", [user]);
  const isConselheiro = React.useMemo(
    () => user?.tipoUsuario === "CONS",
    [user]
  );
  const isMorador = React.useMemo(() => user?.tipoUsuario === "UNID", [user]);
  const isAdvogado = React.useMemo(() => user?.tipoUsuario === "ADVCO", [user]);
  const isFornecedor = React.useMemo(
    () => user?.tipoUsuario === "FORN",
    [user]
  );
  const isSelf = React.useCallback(
    (codigoPessoa: number) => codigoPessoa === Number(user?.codUsuario),
    [user]
  );
  const isTipoUsuario = React.useCallback(
    (tipo: string) => user?.tipoUsuario === tipo,
    [user]
  );

  function redirect(callback: (redirectTo?: string) => void) {
    if (configs.redirectToKey) {
      const redirectTo = loadCache<string>(configs.redirectToKey);
      setTimeout(() => callback(redirectTo), 200);
      removeCache(configs.redirectToKey);
    } else {
      callback();
    }
  }

  function login(
    accessToken: string,
    erpToken?: string,
    expires?: ISODate,
    callback?: (redirectTo?: string) => void
  ) {
    setAccessToken(accessToken);
    saveCookie({ [keys.accounts]: accessToken }, expires);

    if (keys.erp && erpToken) {
      setErpToken(erpToken);
      saveCookie({ [keys.erp]: erpToken }, expires);
    }

    setUser(factoryUser(accessToken));
    setAuthenticated(true);

    if (callback) {
      redirect(callback);
    }
  }

  function logout(callback?: () => void, purge = true) {
    setAuthenticated(false);
    setAccessToken(undefined);
    setErpToken(undefined);
    setUser(undefined);

    removeCookie(
      configs.logoutRemoveAllCookies ? configs.accessTokenKey : keys.accounts
    );
    if (configs.erpTokenKey && keys.erp) {
      removeCookie(
        configs.logoutRemoveAllCookies ? configs.erpTokenKey : keys.erp
      );
    }

    if (purge) {
      purgeCache();
    }

    if (callback) {
      callback();
    }
  }

  function handleUnauthorized(redirectTo?: string) {
    if (configs.redirectToKey && redirectTo) {
      saveCache(configs.redirectToKey, redirectTo);
    }

    logout(
      () =>
        window.location.assign(configs.redirectToWhenUnauthorized || "/login"),
      false
    );
  }

  function handleChangeAvatar(url: string) {
    setUser({ ...user, foto: url } as never);
  }

  React.useEffect(() => {
    const accessToken = loadCookies(configs.accessTokenKey).find((x) => !!x);
    setAccessToken(accessToken);

    if (accessToken) {
      setUser(factoryUser(accessToken));
    }

    if (configs.erpTokenKey) {
      const erpToken = loadCookies(configs.erpTokenKey).find((x) => !!x);
      setErpToken(erpToken);
    }

    setAuthenticated(!!accessToken);
  }, []);

  const value = React.useMemo(
    () => ({
      authenticated,
      accessToken,
      erpToken,
      user,
      login,
      logout,
      redirect,
      handleUnauthorized,
      handleChangeAvatar,
      isUsuarioHubert,
      isFuncionario,
      isSindico,
      isConselheiro,
      isMorador,
      isAdvogado,
      isFornecedor,
      isSelf,
      isTipoUsuario,
    }),
    [authenticated, accessToken, erpToken, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

interface WithAuthConfig {
  onlyUserHubert?: boolean;
}

export function withAuth(config?: WithAuthConfig) {
  return (Component) =>
    React.memo(function Auth(props) {
      const { authenticated, handleUnauthorized, isUsuarioHubert } = useAuth();

      React.useEffect(() => {
        if (
          authenticated === false ||
          (config?.onlyUserHubert && !isUsuarioHubert)
        ) {
          handleUnauthorized(window.location.pathname + window.location.search);
        }
      }, [authenticated]);

      if (authenticated) {
        return <Component {...props} />;
      }
      return null;
    });
}
