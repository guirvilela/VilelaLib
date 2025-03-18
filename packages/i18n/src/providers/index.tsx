import React from 'react';

import enUS from '../langs/en_US.json';
import ptBR from '../langs/pt_BR.json';

import {
  Currency,
  I18nConfig,
  Lang,
  Locale,
  Messages,
  Timezone
} from '../types';

/**
 * Objeto com todos as propriedades disponiveis no contexto do `I18nProvider`
 */
export interface Ii18nContext {
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

const I18nContext = React.createContext<Ii18nContext>(null as never);

/**
 * Função que pode ser utilizada nas controllers/pages para acessar o contexto do `I18nProvider`
 *
 * @example
 * const { timezone } = useI18n();
 */
export const useI18n = () => React.useContext(I18nContext);

interface I18nProviderProps {
  configs?: I18nConfig;
  children?: React.ReactNode;
}

interface I18nConfigComplete extends Required<I18nConfig> {
  currency: Lang<Currency>;
  timezone: Lang<Timezone>;
}

/** Objeto com as configurações obrigatorias do i18n */
export const i18nDefaults: I18nConfigComplete = {
  initLocale: Locale.PT_BR,
  timezone: {
    [Locale.EN_US]: Timezone.EN_US,
    [Locale.PT_BR]: Timezone.PT_BR
  },
  currency: {
    [Locale.EN_US]: Currency.EN_US,
    [Locale.PT_BR]: Currency.PT_BR
  },
  langs: {
    [Locale.EN_US]: enUS,
    [Locale.PT_BR]: ptBR
  }
};

function withDefaults(custom?: I18nConfig): I18nConfigComplete {
  if (!custom) return i18nDefaults;

  return {
    ...i18nDefaults,
    langs: Object.keys(i18nDefaults.langs).reduce((acc, key) => {
      acc[key] = {
        ...i18nDefaults.langs[key],
        ...custom.langs?.[key]
      };
      return acc;
    }, {} as Lang<Messages>)
  };
}

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
export function I18nProvider({ configs, children }: I18nProviderProps) {
  const config = withDefaults(configs);

  const [locale, setLocale] = React.useState<Locale>(config.initLocale);
  const [currency, setCurrency] = React.useState<Currency>(
    config.currency[locale]
  );
  const [timezone, setTimezone] = React.useState<Timezone>(
    config.timezone[locale]
  );
  const [messages, setMessages] = React.useState<Messages>(
    config.langs[locale]
  );

  function changeLocale(v: Locale) {
    setLocale(v);
  }

  function changeMessages(v: Messages) {
    const exist = Object.prototype.hasOwnProperty.call(
      messages,
      Object.keys(v)[0]
    );
    if (!exist) {
      setMessages({
        ...config.langs[locale],
        ...v
      });
    }
  }

  React.useEffect(() => {
    if (locale) {
      setCurrency(config.currency[locale]);
      setTimezone(config.timezone[locale]);
      setMessages(config.langs[locale]);
    }
  }, [locale]);

  const value = React.useMemo(
    () => ({
      locale,
      messages,
      currency,
      timezone,
      changeLocale,
      changeMessages
    }),
    [locale, messages, currency, timezone]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withI18n(v: Lang<Promise<any> | Promise<any>[]>) {
  return (Component) =>
    React.memo(function Access(props) {
      const { locale, changeMessages } = useI18n();
      const [isReady, setIsReady] = React.useState(false);

      React.useEffect(() => {
        if (locale && v) {
          const data = v[locale];
          if (Array.isArray(data)) {
            Promise.all(data).then((messages) => {
              changeMessages(
                messages.reduce(
                  (acc, item) => ({ ...acc, ...item.default }),
                  {}
                )
              );
              setIsReady(true);
            });
          } else {
            data.then((messages) => {
              changeMessages(messages.default);
              setIsReady(true);
            });
          }
        }
      }, [locale]);

      if (isReady) {
        return <Component {...props} />;
      }
      return null;
    });
}
