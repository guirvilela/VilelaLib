import { isDateEmpty, ISODate, parseDate, parseNumber } from '@hubert/shared';
import React from 'react';

import { useI18n } from '../providers';

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
export function useI18nFormatter() {
  const {
    locale,
    currency
    // timezone
  } = useI18n();

  const dtf = React.useCallback(
    (v?: ISODate | Date, options?: Intl.DateTimeFormatOptions) => {
      if (isDateEmpty(v)) {
        return '';
      }
      return new Intl.DateTimeFormat(locale, {
        ...options
        //? formatar timezone desativado
        // timeZone: timezone
      }).format(parseDate(v));
    },
    [locale]
  );

  const nf = React.useCallback(
    (v?: number | string, options?: Intl.NumberFormatOptions) => {
      return new Intl.NumberFormat(locale, options).format(parseNumber(v));
    },
    [locale]
  );

  const numericFormatter = (v?: number | string) =>
    nf(v, {
      maximumFractionDigits: 0
    });

  const decimalFormatter = (v?: number | string) =>
    nf(v, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  const currencyFormatter = (v?: number | string) =>
    nf(v, { style: 'currency', currency });

  const percentFormatter = (v?: number | string) =>
    nf(Number(v) / 100, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });

  const customNumberFormatter =
    (options: Intl.NumberFormatOptions) => (v?: number | string) =>
      nf(v, { currency, ...options });

  const dateFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

  const dateTimeFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

  const dateHourFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', ' ');

  const dateMonthFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      day: '2-digit',
      month: '2-digit'
    });

  const dateLongMonthFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      day: '2-digit',
      month: 'long'
    });

  const timeFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

  const hourFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      hour: '2-digit',
      minute: '2-digit'
    });

  const yearFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      year: 'numeric'
    });

  const monthYearFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      month: '2-digit',
      year: 'numeric'
    });

  const monthFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      month: '2-digit'
    });

  const shortMonthFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      month: 'short'
    }).replace('.', '');

  const shortMonthYearFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      month: 'short',
      year: 'numeric'
    }).replace('.', '');

  const longMonthFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      month: 'long'
    });

  const longMonthYearFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      month: 'long',
      year: 'numeric'
    });

  const shortDateTimeFormatter = (v?: ISODate | Date) =>
    dtf(v, {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', '');

  const customDateFormatter =
    (options: Intl.DateTimeFormatOptions) => (v?: ISODate | Date) =>
      dtf(v, options);

  return {
    numericFormatter,
    decimalFormatter,
    currencyFormatter,
    percentFormatter,
    dateFormatter,
    dateTimeFormatter,
    timeFormatter,
    customNumberFormatter,
    customDateFormatter,
    yearFormatter,
    monthYearFormatter,
    monthFormatter,
    longMonthFormatter,
    longMonthYearFormatter,
    dateHourFormatter,
    hourFormatter,
    dateMonthFormatter,
    shortMonthFormatter,
    dateLongMonthFormatter,
    shortMonthYearFormatter,
    shortDateTimeFormatter
  };
}
