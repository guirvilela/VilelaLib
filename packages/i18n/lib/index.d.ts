import { ISODate } from '@hubert/shared';
import React from 'react';

/**
 * Essa função retorna um objeto contendo várias funções para formatar diferentes tipos de dados, como números, datas, moedas, entre outros.
 * Essas funções são úteis para internacionalização (i18n) de aplicações, permitindo que os dados sejam formatados de acordo com a localização do usuário.
 *
 * @example
 * import { useI18nFormatter } from '@hubert/i18n';
 *
 * const { dateFormatter } = useI18nFormatter();
 *
 * const formattedDate = dateFormatter(new Date());
 *
 * //resultado: '10/10/2020'
 */
declare function useI18nFormatter(): {
    numericFormatter: (v?: number | string) => string;
    decimalFormatter: (v?: number | string) => string;
    currencyFormatter: (v?: number | string) => string;
    percentFormatter: (v?: number | string) => string;
    dateFormatter: (v?: ISODate | Date) => string;
    dateTimeFormatter: (v?: ISODate | Date) => string;
    timeFormatter: (v?: ISODate | Date) => string;
    customNumberFormatter: (options: Intl.NumberFormatOptions) => (v?: number | string) => string;
    customDateFormatter: (options: Intl.DateTimeFormatOptions) => (v?: ISODate | Date) => string;
    yearFormatter: (v?: ISODate | Date) => string;
    monthYearFormatter: (v?: ISODate | Date) => string;
    monthFormatter: (v?: ISODate | Date) => string;
    longMonthFormatter: (v?: ISODate | Date) => string;
    longMonthYearFormatter: (v?: ISODate | Date) => string;
    dateHourFormatter: (v?: ISODate | Date) => string;
    hourFormatter: (v?: ISODate | Date) => string;
    dateMonthFormatter: (v?: ISODate | Date) => string;
    shortMonthFormatter: (v?: ISODate | Date) => string;
    dateLongMonthFormatter: (v?: ISODate | Date) => string;
    shortMonthYearFormatter: (v?: ISODate | Date) => string;
    shortDateTimeFormatter: (v?: ISODate | Date) => string;
};

/**
 * Esta função retorna uma função que pode ser usada para obter mensagens internacionalizadas com placeholders para valores.
 * A função retornada tem dois parâmetros: key que é a chave da mensagem e values que é um objeto com os valores a serem substituídos nos placeholders da mensagem.
 * A função retorna a mensagem formatada com os valores fornecidos.
 *
 * @example
 * import { useI18nFormatter } from '@hubert/i18n';
 *
 * const t = useI18nFormatter();
 *
 * <HubButton>{t('button-doc-translate')}</HubButton>;
 * //resultado: <HubButton>Documentação do Botão</HubButton>;
 */
declare function useI18nMessage(): ((key: string, values?: Record<string, any>) => string) & {
    render: (key: string, values?: Record<string, any>) => React.JSX.Element;
};

/** Localizações disponiveis */
declare enum Locale {
    EN_US = "en-US",
    PT_BR = "pt-BR"
}
/** Moedas disponiveis */
declare enum Currency {
    EN_US = "USD",
    PT_BR = "BRL"
}
/** Fuso horario disponiveis */
declare enum Timezone {
    EN_US = "",
    PT_BR = "America/Sao_Paulo"
}
/** Tipagem de um registro (chave:valor) dentro do JSON de traduções */
declare type Messages = Record<string, string>;
/** Objeto com a lista de localizações (JSON final) */
declare type Lang<T> = {
    [key in Locale]: T;
};
/**
 * Objeto de configuração do I18nProvider
 */
interface I18nConfig {
    /** Linguagem inicial a ser carregada (default: `PT_BR`) */
    initLocale?: Locale;
    /** Traduções iniciais que serão disponibilizado em todo o projeto (json global) */
    langs?: Lang<Messages>;
}

/**
 * Objeto com todos as propriedades disponiveis no contexto do `I18nProvider`
 */
interface Ii18nContext {
    /** Linguagem atual selecionada */
    locale: Locale;
    /** Todas as traduções carregada, de acordo com a linguagem selecionada `locale` */
    messages: Messages | undefined;
    /** Moeda atual selecionada */
    currency: Currency | undefined;
    /** Fuso atual selecionada */
    timezone: Timezone | undefined;
    /** Muda manualmente a linguagem selecionada */
    changeLocale: (v: Locale) => void;
    /** Muda manualmente as traduções carregadas */
    changeMessages: (v: Messages) => void;
}
/**
 * Função que pode ser utilizada nas controllers/pages para acessar o contexto do `I18nProvider`
 *
 * @example
 * const { timezone } = useI18n();
 */
declare const useI18n: () => Ii18nContext;
interface I18nProviderProps {
    configs?: I18nConfig;
    children?: React.ReactNode;
}
interface I18nConfigComplete extends Required<I18nConfig> {
    currency: Lang<Currency>;
    timezone: Lang<Timezone>;
}
/** Objeto com as configurações obrigatorias do i18n */
declare const i18nDefaults: I18nConfigComplete;
/**
 * React provider que expoe toda a logica de autenticação.
 *
 * @example
 * <I18nProvider configs={i18nConfig}>
 *   <OutrosComponents />
 * </I18nProvider>
 *
 * const { timezone } = useI18n();
 */
declare function I18nProvider({ configs, children }: I18nProviderProps): React.JSX.Element;
/**
 * Função utilizada para adicionar as traduções de uma pagina (pode ser utilizada com composition)
 *
 * @example
 * export default compose(
 *   withI18n({
 *     [Locale.EN_US]: import('~/i18n/cadastro-page/areas-page/en_US.json'),
 *     [Locale.PT_BR]: import('~/i18n/cadastro-page/areas-page/pt_BR.json')
 *   })
 * )(CadastroAreasPage);
 */
declare function withI18n(v: Lang<Promise<any> | Promise<any>[]>): (Component: any) => React.NamedExoticComponent<object>;

export { Currency, I18nConfig, I18nProvider, Ii18nContext, Lang, Locale, Messages, Timezone, i18nDefaults, useI18n, useI18nFormatter, useI18nMessage, withI18n };
