import { replaceAll } from '@hubert/shared';
import React from 'react';

import { useI18n } from '../providers';

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
export function useI18nMessage() {
  const i18n = useI18n();

  const fn = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (key: string, values?: Record<string, any>) => {
      const message = i18n?.messages?.[key];
      if (!message) {
        return key;
      }
      if (!values) {
        return message;
      }
      let result = message;
      for (const k of Object.keys(values)) {
        result = replaceAll(result, `{${k}}`, values[k]);
      }
      return result;
    },
    [i18n]
  );

  const render = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (key: string, values?: Record<string, any>) => {
      return <div dangerouslySetInnerHTML={{ __html: fn(key, values) }} />;
    },
    [i18n]
  );

  return React.useMemo(() => Object.assign(fn, { render }), [i18n]);
}
