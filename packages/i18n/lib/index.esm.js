import { isDateEmpty, parseDate, parseNumber, replaceAll } from '@hubert/shared';
import React from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var enUS = {
	
};

var ptBR = {
	"hub-password-strength_very-weak": "muito fraca",
	"hub-password-strength_weak": "fraca",
	"hub-password-strength_average": "média",
	"hub-password-strength_strong": "forte",
	"hub-password-strength_very-strong": "muito forte",
	"hub-dropdown_empty": "Não há dados",
	"hub-file-upload_title-blue": "Clique para enviar",
	"hub-file-upload_title-content": "ou arraste e solte aqui",
	"hub-file-upload_title-drop": "Solte para enviar.",
	"hub-file-upload_ext-title": "Formatos aceitos: ",
	"hub-file-upload_ext-content": "até ",
	"hub-file-upload_selected-multi": "arquivos selecionados.",
	"hub-file-upload_selected": "Arquivo selecionado:",
	"hub-file-upload_remove": "Clique aqui para remover.",
	"hub-pagination_prev-label": "Anterior",
	"hub-pagination_next-label": "Próximo",
	"hub-pagination_results-label": "Resultado: ",
	"hub-pagination_results-of-label": " de ",
	"hub-data-table-empty_title": "Nenhum resultado encontrado",
	"hub-data-table-empty_content": "Por favor faça uma nova pesquisa.",
	"hub-filters_title": "Filtros",
	"hub-filters_btn-search": "Pesquisar",
	"hub-calendar_period-1": "DOM.",
	"hub-calendar_period-2": "SEG.",
	"hub-calendar_period-3": "TER.",
	"hub-calendar_period-4": "QUA.",
	"hub-calendar_period-5": "QUI.",
	"hub-calendar_period-6": "SEX.",
	"hub-calendar_period-7": "SÁB.",
	"hub-calendar_today": "Hoje",
	"hub-calendar_month-1": "Janeiro",
	"hub-calendar_month-2": "Fevereiro",
	"hub-calendar_month-3": "Março",
	"hub-calendar_month-4": "Abril",
	"hub-calendar_month-5": "Maio",
	"hub-calendar_month-6": "Junho",
	"hub-calendar_month-7": "Julho",
	"hub-calendar_month-8": "Agosto",
	"hub-calendar_month-9": "Setembro",
	"hub-calendar_month-10": "Outubro",
	"hub-calendar_month-11": "Novembro",
	"hub-calendar_month-12": "Dezembro",
	"hub-list_loadmore": "Carregando mais...",
	"hub-table_loadmore": "Carregando mais...",
	"hub-feedback_title-success": "Tudo certo",
	"hub-feedback_title-error": "Ops!",
	"hub-feedback_title-info": "Aviso",
	"hub-feedback_title-warning": "Cuidado",
	"hub-feedback_done": "Ok",
	"hub-phone-modal-title": "Escolha o país",
	"hub-phone-modal-search": "Procurar país ou código",
	"hub-condominio-select_loading": "Carregando...",
	"hub-yes-no_done": "Sim",
	"hub-yes-no_cancel": "Não",
	"hub-modal-right_title": "Mais filtros",
	"hub-modal-right_close": "Fechar",
	"hub-modal-right_done": "Concluir",
	"hub-webcam_alt": "Alterar câmera",
	"hub-webcam_clear": "Tirar outra foto",
	"hub-webcam_send": "Enviar",
	"hub-webcam_capture": "Capturar foto",
	"hub-webcam_error": "Houve um problema ao acessar a câmera. Por favor, entre em contato com o suporte para assistência.",
	"hub-webcam_no-device": "Nenhum dispositivo encontrado!",
	"hub-photo-upload_tooltip": "Alterar foto?",
	"hub-photo-upload_upload": "Enviar do computador",
	"hub-photo-upload_camera": "Utilizar a câmera"
};

/** Localizações disponiveis */
var Locale;

/** Moedas disponiveis */
(function (Locale) {
  Locale["EN_US"] = "en-US";
  Locale["PT_BR"] = "pt-BR";
})(Locale || (Locale = {}));
var Currency;

/** Fuso horario disponiveis */
(function (Currency) {
  Currency["EN_US"] = "USD";
  Currency["PT_BR"] = "BRL";
})(Currency || (Currency = {}));
var Timezone;

/** Tipagem de um registro (chave:valor) dentro do JSON de traduções */
(function (Timezone) {
  Timezone["EN_US"] = "";
  Timezone["PT_BR"] = "America/Sao_Paulo";
})(Timezone || (Timezone = {}));
/** Objeto com a lista de localizações (JSON final) */
/**
 * Objeto de configuração do I18nProvider
 */

/**
 * Objeto com todos as propriedades disponiveis no contexto do `I18nProvider`
 */

var I18nContext = /*#__PURE__*/React.createContext(null);

/**
 * Função que pode ser utilizada nas controllers/pages para acessar o contexto do `I18nProvider`
 *
 * @example
 * const { timezone } = useI18n();
 */
var useI18n = function useI18n() {
  return React.useContext(I18nContext);
};
/** Objeto com as configurações obrigatorias do i18n */
var i18nDefaults = {
  initLocale: Locale.PT_BR,
  timezone: _defineProperty(_defineProperty({}, Locale.EN_US, Timezone.EN_US), Locale.PT_BR, Timezone.PT_BR),
  currency: _defineProperty(_defineProperty({}, Locale.EN_US, Currency.EN_US), Locale.PT_BR, Currency.PT_BR),
  langs: _defineProperty(_defineProperty({}, Locale.EN_US, enUS), Locale.PT_BR, ptBR)
};
function withDefaults(custom) {
  if (!custom) return i18nDefaults;
  return _objectSpread2(_objectSpread2({}, i18nDefaults), {}, {
    langs: Object.keys(i18nDefaults.langs).reduce(function (acc, key) {
      var _custom$langs;
      acc[key] = _objectSpread2(_objectSpread2({}, i18nDefaults.langs[key]), (_custom$langs = custom.langs) === null || _custom$langs === void 0 ? void 0 : _custom$langs[key]);
      return acc;
    }, {})
  });
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
function I18nProvider(_ref) {
  var configs = _ref.configs,
    children = _ref.children;
  var config = withDefaults(configs);
  var _React$useState = React.useState(config.initLocale),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    locale = _React$useState2[0],
    setLocale = _React$useState2[1];
  var _React$useState3 = React.useState(config.currency[locale]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    currency = _React$useState4[0],
    setCurrency = _React$useState4[1];
  var _React$useState5 = React.useState(config.timezone[locale]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    timezone = _React$useState6[0],
    setTimezone = _React$useState6[1];
  var _React$useState7 = React.useState(config.langs[locale]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    messages = _React$useState8[0],
    setMessages = _React$useState8[1];
  function changeLocale(v) {
    setLocale(v);
  }
  function changeMessages(v) {
    var exist = Object.prototype.hasOwnProperty.call(messages, Object.keys(v)[0]);
    if (!exist) {
      setMessages(_objectSpread2(_objectSpread2({}, config.langs[locale]), v));
    }
  }
  React.useEffect(function () {
    if (locale) {
      setCurrency(config.currency[locale]);
      setTimezone(config.timezone[locale]);
      setMessages(config.langs[locale]);
    }
  }, [locale]);
  var value = React.useMemo(function () {
    return {
      locale: locale,
      messages: messages,
      currency: currency,
      timezone: timezone,
      changeLocale: changeLocale,
      changeMessages: changeMessages
    };
  }, [locale, messages, currency, timezone]);
  return /*#__PURE__*/React.createElement(I18nContext.Provider, {
    value: value
  }, children);
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
function withI18n(v) {
  return function (Component) {
    return /*#__PURE__*/React.memo(function Access(props) {
      var _useI18n = useI18n(),
        locale = _useI18n.locale,
        changeMessages = _useI18n.changeMessages;
      var _React$useState9 = React.useState(false),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        isReady = _React$useState10[0],
        setIsReady = _React$useState10[1];
      React.useEffect(function () {
        if (locale && v) {
          var data = v[locale];
          if (Array.isArray(data)) {
            Promise.all(data).then(function (messages) {
              changeMessages(messages.reduce(function (acc, item) {
                return _objectSpread2(_objectSpread2({}, acc), item["default"]);
              }, {}));
              setIsReady(true);
            });
          } else {
            data.then(function (messages) {
              changeMessages(messages["default"]);
              setIsReady(true);
            });
          }
        }
      }, [locale]);
      if (isReady) {
        return /*#__PURE__*/React.createElement(Component, props);
      }
      return null;
    });
  };
}

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
function useI18nFormatter() {
  var _useI18n = useI18n(),
    locale = _useI18n.locale,
    currency = _useI18n.currency;
  var dtf = React.useCallback(function (v, options) {
    if (isDateEmpty(v)) {
      return '';
    }
    return new Intl.DateTimeFormat(locale, _objectSpread2({}, options)).format(parseDate(v));
  }, [locale]);
  var nf = React.useCallback(function (v, options) {
    return new Intl.NumberFormat(locale, options).format(parseNumber(v));
  }, [locale]);
  var numericFormatter = function numericFormatter(v) {
    return nf(v, {
      maximumFractionDigits: 0
    });
  };
  var decimalFormatter = function decimalFormatter(v) {
    return nf(v, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
  var currencyFormatter = function currencyFormatter(v) {
    return nf(v, {
      style: 'currency',
      currency: currency
    });
  };
  var percentFormatter = function percentFormatter(v) {
    return nf(Number(v) / 100, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  };
  var customNumberFormatter = function customNumberFormatter(options) {
    return function (v) {
      return nf(v, _objectSpread2({
        currency: currency
      }, options));
    };
  };
  var dateFormatter = function dateFormatter(v) {
    return dtf(v, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  var dateTimeFormatter = function dateTimeFormatter(v) {
    return dtf(v, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  var dateHourFormatter = function dateHourFormatter(v) {
    return dtf(v, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', ' ');
  };
  var dateMonthFormatter = function dateMonthFormatter(v) {
    return dtf(v, {
      day: '2-digit',
      month: '2-digit'
    });
  };
  var dateLongMonthFormatter = function dateLongMonthFormatter(v) {
    return dtf(v, {
      day: '2-digit',
      month: 'long'
    });
  };
  var timeFormatter = function timeFormatter(v) {
    return dtf(v, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  var hourFormatter = function hourFormatter(v) {
    return dtf(v, {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  var yearFormatter = function yearFormatter(v) {
    return dtf(v, {
      year: 'numeric'
    });
  };
  var monthYearFormatter = function monthYearFormatter(v) {
    return dtf(v, {
      month: '2-digit',
      year: 'numeric'
    });
  };
  var monthFormatter = function monthFormatter(v) {
    return dtf(v, {
      month: '2-digit'
    });
  };
  var shortMonthFormatter = function shortMonthFormatter(v) {
    return dtf(v, {
      month: 'short'
    }).replace('.', '');
  };
  var shortMonthYearFormatter = function shortMonthYearFormatter(v) {
    return dtf(v, {
      month: 'short',
      year: 'numeric'
    }).replace('.', '');
  };
  var longMonthFormatter = function longMonthFormatter(v) {
    return dtf(v, {
      month: 'long'
    });
  };
  var longMonthYearFormatter = function longMonthYearFormatter(v) {
    return dtf(v, {
      month: 'long',
      year: 'numeric'
    });
  };
  var shortDateTimeFormatter = function shortDateTimeFormatter(v) {
    return dtf(v, {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(',', '');
  };
  var customDateFormatter = function customDateFormatter(options) {
    return function (v) {
      return dtf(v, options);
    };
  };
  return {
    numericFormatter: numericFormatter,
    decimalFormatter: decimalFormatter,
    currencyFormatter: currencyFormatter,
    percentFormatter: percentFormatter,
    dateFormatter: dateFormatter,
    dateTimeFormatter: dateTimeFormatter,
    timeFormatter: timeFormatter,
    customNumberFormatter: customNumberFormatter,
    customDateFormatter: customDateFormatter,
    yearFormatter: yearFormatter,
    monthYearFormatter: monthYearFormatter,
    monthFormatter: monthFormatter,
    longMonthFormatter: longMonthFormatter,
    longMonthYearFormatter: longMonthYearFormatter,
    dateHourFormatter: dateHourFormatter,
    hourFormatter: hourFormatter,
    dateMonthFormatter: dateMonthFormatter,
    shortMonthFormatter: shortMonthFormatter,
    dateLongMonthFormatter: dateLongMonthFormatter,
    shortMonthYearFormatter: shortMonthYearFormatter,
    shortDateTimeFormatter: shortDateTimeFormatter
  };
}

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
function useI18nMessage() {
  var i18n = useI18n();
  var fn = React.useCallback(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (key, values) {
    var _i18n$messages;
    var message = i18n === null || i18n === void 0 ? void 0 : (_i18n$messages = i18n.messages) === null || _i18n$messages === void 0 ? void 0 : _i18n$messages[key];
    if (!message) {
      return key;
    }
    if (!values) {
      return message;
    }
    var result = message;
    for (var _i = 0, _Object$keys = Object.keys(values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result = replaceAll(result, "{".concat(k, "}"), values[k]);
    }
    return result;
  }, [i18n]);
  var render = React.useCallback(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (key, values) {
    return /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: fn(key, values)
      }
    });
  }, [i18n]);
  return React.useMemo(function () {
    return Object.assign(fn, {
      render: render
    });
  }, [i18n]);
}

export { Currency, I18nProvider, Locale, Timezone, i18nDefaults, useI18n, useI18nFormatter, useI18nMessage, withI18n };
