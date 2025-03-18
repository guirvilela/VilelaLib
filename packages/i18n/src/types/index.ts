/** Localizações disponiveis */
export enum Locale {
  EN_US = 'en-US',
  PT_BR = 'pt-BR'
}

/** Moedas disponiveis */
export enum Currency {
  EN_US = 'USD',
  PT_BR = 'BRL'
}

/** Fuso horario disponiveis */
export enum Timezone {
  EN_US = '',
  PT_BR = 'America/Sao_Paulo'
}

/** Tipagem de um registro (chave:valor) dentro do JSON de traduções */
export type Messages = Record<string, string>;

/** Objeto com a lista de localizações (JSON final) */
export type Lang<T> = {
  [key in Locale]: T;
};

/**
 * Objeto de configuração do I18nProvider
 */
export interface I18nConfig {
  /** Linguagem inicial a ser carregada (default: `PT_BR`) */
  initLocale?: Locale;
  /** Traduções iniciais que serão disponibilizado em todo o projeto (json global) */
  langs?: Lang<Messages>;
}
