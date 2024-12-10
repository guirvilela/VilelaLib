import { ISODate } from "@vilela/shared";
import React from "react";

interface User {
  nome: string;
  codUsuario: number;
  codigoLogin: number;
  codFavorecido: number;
  cpfCnpj: string;
  rg: string;
  bpo: number;
  email: string;
  login: string;
  tipoUsuario: string;
  foto: string;
}
interface IAuthContext {
  authenticated: boolean | undefined;
  accessToken: string | undefined;
  erpToken: string | undefined;
  user?: User;
  login(
    accessToken: string,
    erpToken: string,
    expires?: ISODate,
    callback?: (redirectTo?: string) => void
  ): void;
  logout(callback?: () => void, purge?: boolean): void;
  redirect(callback: (redirectTo?: string) => void): void;
  handleUnauthorized(redirectTo?: string): void;
  handleChangeAvatar(url?: string): void;
  /** user.tipoUsuario == 'USR' */
  isUsuarioHubert: boolean;
  /** user.tipoUsuario == 'FUNC' */
  isFuncionario: boolean;
  /** user.tipoUsuario == 'SIND' */
  isSindico: boolean;
  /** user.tipoUsuario == 'CONS' */
  isConselheiro: boolean;
  /** user.tipoUsuario == 'UNID' */
  isMorador: boolean;
  /** user.tipoUsuario == 'ADVCO' */
  isAdvogado: boolean;
  /** user.tipoUsuario == 'FORN' */
  isFornecedor: boolean;
  /** codigoPessoa == user.codigoPessoa */
  isSelf: (codigoPessoa: number) => boolean;
  /** isTipoUsuario('USR') == true/false */
  isTipoUsuario: (tipo: string) => boolean;
}
interface AuthConfig {
  accessTokenKey: string | string[];
  erpTokenKey?: string | string[];
  redirectToKey?: string;
  redirectToWhenUnauthorized?: string;
  logoutRemoveAllCookies?: boolean;
}

declare const useAuth: () => IAuthContext;
interface AuthProviderProps {
  configs: AuthConfig;
  children?: React.ReactNode;
}
declare function AuthProvider({
  configs,
  children,
}: AuthProviderProps): JSX.Element;
interface WithAuthConfig {
  onlyUserHubert?: boolean;
}
declare function withAuth(
  config?: WithAuthConfig
): (Component: any) => React.NamedExoticComponent<object>;

export { AuthConfig, AuthProvider, useAuth, User, withAuth };
