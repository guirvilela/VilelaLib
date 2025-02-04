import { keyframes, createGlobalStyle, ThemeProvider as ThemeProvider$1, ThemeContext } from 'styled-components';
import React from 'react';

var fadein = keyframes(["from{opacity:0;}to{opacity:1;}"]);
var fadeout = keyframes(["from{opacity:1;}to{opacity:0;}"]);
var spin = keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var indeterminate = keyframes(["0%{transform:translateX(0) scaleX(0);}40%{transform:translateX(0) scaleX(0.4);}100%{transform:translateX(100%) scaleX(0.5);}"]);
var shimmer = keyframes(["100%{transform:translateX(100%);}"]);
var growup = function growup(percent) {
  return keyframes(["from{width:0%;}to{width:", "%;}"], percent || 100);
};
var blink = keyframes(["0%{background-color:inherit;}20%{background-color:#FFE9C8;}100%{background-color:inherit;}"]);

/** Objeto que contem animações prontas */
var animations = {
  fadein: fadein,
  fadeout: fadeout,
  spin: spin,
  indeterminate: indeterminate,
  shimmer: shimmer,
  growup: growup,
  blink: blink
};

/** Objeto que contem animações prontas */

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
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
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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

/**
 * Cores definidas pelo style-guide.
 */
var colors = {
  primary: {
    A900: '#072D46',
    A800: '#23465D',
    A700: '#3F5E73',
    A600: '#5B778A',
    A500: '#7690A1',
    A400: '#92A8B7',
    A300: '#AEC1CE',
    A200: '#CAD9E5',
    A100: '#E8F4FD',
    '900': '#051E2E',
    '800': '#062336',
    '700': '#06283F',
    '600': '#072E47',
    '500': '#083350',
    '400': '#335B78',
    '300': '#65829E',
    '200': '#98AAC1',
    '100': '#CAD3E1'
  },
  condominios: {
    A900: '#0E3E58',
    A800: '#26536C',
    A700: '#3F6980',
    A600: '#577E93',
    A500: '#7094A7',
    A400: '#88A9BB',
    A300: '#A0BECF',
    A200: '#B9D4E3',
    A100: '#D3EBF8',
    '900': '#071F2C',
    '800': '#174159',
    '700': '#266486',
    '600': '#3686B2',
    '500': '#46AAE1',
    '400': '#5EBBF3',
    '300': '#7DCAFF',
    '200': '#A1DAFF',
    '100': '#CCEBFF'
  },
  imoveis: {
    A900: '#19344D',
    A800: '#314A62',
    A700: '#486076',
    A600: '#60768B',
    A500: '#788C9F',
    A400: '#8FA2B4',
    A300: '#A7B8C8',
    A200: '#BECEDD',
    A100: '#D8E6F3',
    '900': '#0C1A27',
    '800': '#1E374F',
    '700': '#305577',
    '600': '#42729F',
    '500': '#5591C8',
    '400': '#6DA4DC',
    '300': '#8AB8EC',
    '200': '#ACCDF7',
    '100': '#D2E4FD'
  },
  outsourcing: {
    A900: '#123A3B',
    A800: '#2E6162',
    A700: '#4B898A',
    A600: '#67B0B1',
    A500: '#85D9DA',
    A400: '#94DDDF',
    A300: '#A3E2E3',
    A200: '#B2E7E8',
    A100: '#EBF9F9',
    '900': '#0B2228',
    '800': '#214952',
    '700': '#376F7C',
    '600': '#4D96A6',
    '500': '#64BED2',
    '400': '#7ACEE4',
    '300': '#94DBF1',
    '200': '#B3E7FA',
    '100': '#D6F3FF'
  },
  info: {
    A900: '#0E3858',
    A800: '#264E6C',
    A700: '#3F6480',
    A600: '#577993',
    A500: '#708FA7',
    A400: '#88A5BB',
    A300: '#A0BBCF',
    A200: '#B9D0E3',
    A100: '#D3E8F8',
    '900': '#071C2C',
    '800': '#0F3857',
    '700': '#165483',
    '600': '#1E71AE',
    '500': '#268EDB',
    '400': '#50B4FE',
    '300': '#8BCEFF',
    '200': '#BCE3FF',
    '100': '#EEF8FF'
  },
  success: {
    A900: '#273F37',
    A800: '#38534A',
    A700: '#49675D',
    A600: '#5A7B70',
    A500: '#6C9083',
    A400: '#7DA496',
    A300: '#8FB9AA',
    A200: '#B7D2C8',
    A100: '#E0EBE7',
    '900': '#092A11',
    '800': '#10481D',
    '700': '#17662A',
    '600': '#1E8536',
    '500': '#25A443',
    '400': '#74EB90',
    '300': '#A9FFBD',
    '200': '#C7FFD4',
    '100': '#E5FFEB'
  },
  error: {
    A900: '#5A190C',
    A800: '#722B1D',
    A700: '#8B3E2F',
    A600: '#A35040',
    A500: '#BB6351',
    A400: '#D37563',
    A300: '#ED8975',
    A200: '#F3B0A3',
    A100: '#F9D8D2',
    '900': '#2D0609',
    '800': '#510B10',
    '700': '#751017',
    '600': '#99151E',
    '500': '#BE1A25',
    '400': '#FD606B',
    '300': '#ED8975',
    '200': '#F6B8AE',
    '100': '#FFE7E8'
  },
  warning: {
    A900: '#5B3E0B',
    A800: '#745622',
    A700: '#8D6E39',
    A600: '#A68650',
    A500: '#BF9E67',
    A400: '#D8B67E',
    A300: '#F2D096',
    A200: '#F5DDB4',
    A100: '#F9EBD2',
    '900': '#301E03',
    '800': '#593705',
    '700': '#835107',
    '600': '#AC6A09',
    '500': '#D7850B',
    '400': '#FFBE5B',
    '300': '#FFDFAF',
    '200': '#FFE9C8',
    '100': '#FFF3E2'
  },
  neutral: {
    A900: '#213545',
    A800: '#253B4C',
    A700: '#284154',
    A600: '#2C475B',
    A500: '#304D63',
    A400: '#5B7385',
    A300: '#8699A8',
    A200: '#B0BFCA',
    A100: '#DDE7EE',
    '900': '#020C12',
    '800': '#040C12',
    '700': '#061A27',
    '600': '#08273C',
    '500': '#304A5D',
    '400': '#A2B2BF',
    '300': '#CCD5DD',
    '200': '#E8EEF4',
    '100': '#FBFDFD'
  },
  neutralGrey: {
    A900: '#2D3339',
    A800: '#464C51',
    A700: '#606469',
    A600: '#797D81',
    A500: '#929699',
    A400: '#ACAEB0',
    A300: '#C5C7C8',
    A200: '#DFDFE0',
    A100: '#FAFAFA',
    '900': '#212529',
    '800': '#343A40',
    '700': '#495057',
    '600': '#868E96',
    '500': '#ADB5BD',
    '400': '#CED4DA',
    '300': '#DEE2E6',
    '200': '#E9ECEF',
    '100': '#F1F3F5'
  },
  white: {
    A900: '#FFFFFF',
    A800: '#FFFFFF',
    A700: '#FFFFFF',
    A600: '#FFFFFF',
    A500: '#FFFFFF',
    A400: '#FFFFFF',
    A300: '#FFFFFF',
    A200: '#FFFFFF',
    A100: '#FFFFFF',
    '900': '#FFFFFF',
    '800': '#FFFFFF',
    '700': '#FFFFFF',
    '600': '#FFFFFF',
    '500': '#FFFFFF',
    '400': '#FFFFFF',
    '300': '#FFFFFF',
    '200': '#FFFFFF',
    '100': '#FFFFFF'
  },
  black: {
    A900: '#000000',
    A800: '#000000',
    A700: '#000000',
    A600: '#000000',
    A500: '#000000',
    A400: '#000000',
    A300: '#000000',
    A200: '#000000',
    A100: '#000000',
    '900': '#000000',
    '800': '#000000',
    '700': '#000000',
    '600': '#000000',
    '500': '#000000',
    '400': '#000000',
    '300': '#000000',
    '200': '#000000',
    '100': '#000000'
  },
  transparent: {
    A900: 'transparent',
    A800: 'transparent',
    A700: 'transparent',
    A600: 'transparent',
    A500: 'transparent',
    A400: 'transparent',
    A300: 'transparent',
    A200: 'transparent',
    A100: 'transparent',
    '900': 'transparent',
    '800': 'transparent',
    '700': 'transparent',
    '600': 'transparent',
    '500': 'transparent',
    '400': 'transparent',
    '300': 'transparent',
    '200': 'transparent',
    '100': 'transparent'
  }
};

/**
 * Cores definidas pelo style-guide.
 */

/**
 * Lista de cores disponiveis no style-guide.
 */
var colorsList = Object.keys(colors);

/**
 * Nome da cor no style-guide.
 */

/**
 * Nivel da cor alternativa no style-guide.
 */

/**
 * Nivel da cor no style-guide.
 */

/**
 * Lista de niveis de cor disponivel no style-guide.
 */
var colorLevels = Object.values(colors).reduce(function (acc, color) {
  var levels = Object.keys(color);
  return Array.from(new Set([].concat(_toConsumableArray(acc), levels)));
}, []);

/**
 * Converte pixel de string para numero
 * @param px String
 * @return Number
 */
function parsePixel(px) {
  if (!px) return 0;
  var result = Number(px.replace(/[^0-9]/gi, ''));
  if (px.includes('%')) {
    result = 0;
  }
  if (px.includes('vh')) {
    result = result / 100 * (document.body.clientHeight || 0);
  }
  if (px.includes('vw')) {
    result = result / 100 * (document.body.clientWidth || 0);
  }
  return result;
}

/**
 * Retorna uma cor aleatória do style-guide
 * @return Color
 */
function randomColor() {
  var colors = colorsList.filter(function (x) {
    return !['black', 'white'].includes(x);
  });
  var indexColor = Math.floor(Math.random() * (colors.length - 1));
  return colors[indexColor];
}

/**
 * Retorna um nivel de cor aleatória do style-guide
 * @return ColorLevel
 */
function randomColorLevel() {
  var indexLevel = Math.floor(Math.random() * (colorLevels.length - 1));
  return colorLevels[indexLevel];
}

/**
 * Util para adicionar alpha em cor hexadecimal
 * @param color String (Hex color)
 * @param opacity Number (Decimal)
 * @return String (Hex color with alpha)
 */
function addAlphaHex(color, opacity) {
  // prettier-ignore
  var alphas = ['FF', 'FC', 'FA', 'F7', 'F5', 'F2', 'F0', 'ED', 'EB', 'E8', 'E6', 'E3', 'E0', 'DE', 'DB', 'D9', 'D6', 'D4', 'D1', 'CF', 'CC', 'C9', 'C7', 'C4', 'C2', 'BF', 'BD', 'BA', 'B8', 'B5', 'B3', 'B0', 'AD', 'AB', 'A8', 'A6', 'A3', 'A1', '9E', '9C', '99', '96', '94', '91', '8F', '8C', '8A', '87', '85', '82', '80', '7D', '7A', '78', '75', '73', '70', '6E', '6B', '69', '66', '63', '61', '5E', '5C', '59', '57', '54', '52', '4F', '4D', '4A', '47', '45', '42', '40', '3D', '3B', '38', '36', '33', '30', '2E', '2B', '29', '26', '24', '21', '1F', '1C', '1A', '17', '14', '12', '0F', '0D', '0A', '08', '05', '03', '00'];
  if (opacity) {
    return "".concat(alphas[opacity * 100]).concat(color);
  }
  return "".concat(alphas[0]).concat(color);
}

/**
 * Breakpoints disponiveis a ser utilizado pelos utils
 */
var Breakpoint;
/**
 * Objeto com a configuração de cada breakpoint
 */
(function (Breakpoint) {
  Breakpoint["xs"] = "xs";
  Breakpoint["sm"] = "sm";
  Breakpoint["md"] = "md";
  Breakpoint["lg"] = "lg";
  Breakpoint["xl"] = "xl";
  Breakpoint["xxl"] = "xxl";
})(Breakpoint || (Breakpoint = {}));
var breakpoints = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Breakpoint.xs, '480px'), Breakpoint.sm, '576px'), Breakpoint.md, '768px'), Breakpoint.lg, '992px'), Breakpoint.xl, '1200px'), Breakpoint.xxl, '1600px');

/**
 * Objeto com a configuração de cada breakpoint
 */

/**
 * Lista de breakpoints disponiveis no style-guide.
 */
var breakpointList = Object.keys(breakpoints);

/** Lista de alinhamentos utilizados nos componentes/estilos */
var align = ['start', 'center', 'end'];
/** Alinhamento utilizado nos estilos */

/** Lista de tamanhos utilizados nos componentes/estilos */
var size = ['xs', 'sm', 'md', 'lg'];
/** Tamanho utilizado nos estilos */

/** Lista de decoração de texto utilizados nos componentes/estilos */
var textDecoration = ['overline', 'line-through', 'underline', 'none'];
/** Decoração de texto utilizado nos estilos */

/** Lista de estilo de fonte utilizados nos componentes/estilos */
var fontStyle = ['oblique', 'italic', 'normal'];
/** Estilo de fonte utilizado nos estilos */

/** Lista de transformação de texto utilizados nos componentes/estilos */
var textTransform = ['capitalize', 'lowercase', 'uppercase', 'none'];
/** Transformação de texto utilizado nos estilos */

/** Lista de posições/alinhamento utilizados nos componentes/estilos */
var position = ['top', 'right', 'bottom', 'left'];
/** Posição/Alinhamento utilizado nos estilos */

/** Lista de posições complexas utilizados nos componentes/estilos */
var positionExtra = [].concat(position, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
/** Posição complexa utilizado nos estilos */

/** Lista de displays css utilizados nos componentes/estilos */
var displayPosition = ['relative', 'absolute', 'fixed', 'static', 'sticky'];
/** Display css utilizado nos estilos */

/** Lista de ordenações utilizados nos componentes/estilos */
var sort = ['normal', 'asc', 'desc'];
/** Ordenação utilizado nos estilos */

/** Lista de gatilhos/evento utilizados nos componentes/estilos */
var trigger = ['hover', 'focus', 'click'];
/** Gatilho/evento utilizado nos estilos */

/** Lista de overflow utilizados nos componentes/estilos */
var overflow = ['auto', 'hidden', 'overlay'];
/** Overflow css utilizado nos estilos */

/** Lista de estilos de botões utilizados nos componentes/estilos */
var variant = ['default', 'outline', 'ghost', 'icon', 'action'];
/** Estilo de botão utilizado nos estilos */

/** Lista de tipos de botão utilizados nos componentes/estilos */
var type = ['button', 'reset', 'submit'];
/** Tipo de botão utilizado nos estilos */

/** Lista de tipo de redirect de links utilizados nos componentes/estilos */
var target = ['_blank', '_parent', '_self'];
/** Tipo de redirect de link utilizado nos estilos */

/** Lista de tipos de inputs utilizados nos componentes/estilos */
var inputType = ['text', 'cpf', 'cnpj', 'area', 'cep', 'phone', 'date', 'time', 'datetime', 'month', 'week', 'color', 'email', 'uf', 'number', 'password'];
/** Tipos de inputs utilizado nos estilos */

/** Lista de estilos de borda utilizados nos componentes/estilos */
var borderStyle = ['dotted', 'dashed', 'solid', 'none', 'hidden'];
/** Estilo de borda utilizado nos estilos */

/** Lista de tipos de autocomplete utilizados nos componentes/estilos */
var autocomplete = ['username', 'current-password', 'new-password', 'on', 'off'];
/** Tipo de autocomplete utilizado nos estilos */

/** Lista de cursores de mouse utilizados nos componentes/estilos */
var cursor = ['default', 'pointer', 'not-allowed', 'context-menu', 'help', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', 'grab', 'grabbing'];
/** Cursor de mouse utilizado nos estilos */

/** Lista de tipos de resize utilizados nos componentes/estilos */
var resize = ['none', /** default */
'both', 'horizontal', 'vertical'];
/** Tipo de resize utilizado nos estilos */

/**
 * Objeto com a configuração do grid de 12 colunas.
 */
var grid = {
  /** Return 0% */
  '0': '0%',
  /** Return 8.333333333% */
  '1': '8.333333333%',
  /** Return 16.66666667% */
  '2': '16.66666667%',
  /** Return 25% */
  '3': '25%',
  /** Return 33.33333333% */
  '4': '33.33333333%',
  /** Return 41.66666667% */
  '5': '41.66666667%',
  /** Return 50% */
  '6': '50%',
  /** Return 58.33333333% */
  '7': '58.33333333%',
  /** Return 66.66666667% */
  '8': '66.66666667%',
  /** Return 75% */
  '9': '75%',
  /** Return 83.33333333% */
  '10': '83.33333333%',
  /** Return 91.66666667% */
  '11': '91.66666667%',
  /** Return 100% */
  '12': '100%'
};

/**
 * Objeto com a configuração do grid de 12 colunas.
 */

/**
 * Tipo que representa um tamanho de coluna dentro do grid de 12 colunas
 */

/**
 * Lista de tamanhos de coluna do grid disponivel no style-guide.
 */
var gridList = Object.keys(grid);

var xs = "max-width: ".concat(breakpoints.xs);
var sm = "max-width: ".concat(breakpoints.sm);
var md = "max-width: ".concat(breakpoints.md);
var lg = "max-width: ".concat(breakpoints.lg);
var xl = "max-width: ".concat(breakpoints.xl);
var xxl = "max-width: ".concat(breakpoints.xxl);
var custom = function custom(size) {
  return "max-width: ".concat(size);
};
var gtXs = "min-width: ".concat(breakpoints.xs);
var gtSm = "min-width: ".concat(breakpoints.sm);
var gtMd = "min-width: ".concat(breakpoints.md);
var gtLg = "min-width: ".concat(breakpoints.lg);
var gtXl = "min-width: ".concat(breakpoints.xl);
var gtXxl = "min-width: ".concat(breakpoints.xxl);
var gtCustom = function gtCustom(size) {
  return "min-width: ".concat(size);
};

/**
 * Objeto a configuração dos media query, utilizando os breakpoints pré-configurados.
 */
var mediaQuery = {
  /** max-width: 480px */
  xs: xs,
  /** max-width: 576px */
  sm: sm,
  /** max-width: 768px */
  md: md,
  /** max-width: 992px */
  lg: lg,
  /** max-width: 1200px */
  xl: xl,
  /** max-width: 1600px */
  xxl: xxl,
  /** max-width: {size} */
  custom: custom,
  /** min-width: 480px */
  gtXs: gtXs,
  /** min-width: 576px */
  gtSm: gtSm,
  /** min-width: 768px */
  gtMd: gtMd,
  /** min-width: 992px */
  gtLg: gtLg,
  /** min-width: 1200px */
  gtXl: gtXl,
  /** min-width: 1600px */
  gtXxl: gtXxl,
  /** min-width: {size} */
  gtCustom: gtCustom
};

/**
 * Objeto a configuração dos media query, utilizando os breakpoints pré-configurados.
 */

/**
 * Representa um media query, utilizando os breakpoints pré-configurados.
 */

/**
 * Sombras definidas pelo style-guide.
 */
var shadows = {
  '1': '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  '2': '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  '3': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
};

/**
 * Sombras definidas pelo style-guide.
 */

/**
 * Sombra definida pelo style-guide.
 */

/**
 * Lista de sombras disponiveis no style-guide.
 */
var shadowsList = Object.keys(shadows);

/**
 * Espaçamentos definidos pelo style-guide.
 */
var spaces = {
  /** return 0px */
  '0': '0px',
  /** return 4px */
  '1': '4px',
  /** return 8px */
  '2': '8px',
  /** return 16px */
  '3': '16px',
  /** return 20px */
  '4': '20px',
  /** return 24px */
  '5': '24px',
  /** return 32px */
  '6': '32px',
  /** return 40px */
  '7': '40px',
  /** return 48px */
  '8': '48px',
  /** return 56px */
  '9': '56px',
  /** return 64px */
  '10': '64px',
  /** return 72px */
  '11': '72px',
  /** return 80px */
  '12': '80px',
  /** return 88px */
  '13': '88px',
  /** return 96px */
  '14': '96px',
  /** return 104px */
  '15': '104px',
  /** return 112px */
  '16': '112px',
  /** return 120px */
  '17': '120px',
  /** return 128px */
  '18': '128px'
};

/**
 * Espaçamentos definidos pelo style-guide.
 */

/**
 * Espaçamento definido pelo style-guide.
 */

/**
 * Lista de espaçamentos disponiveis no style-guide.
 */
var spacesList = Object.keys(spaces);

/**
 * Lista de tipografias disponiveis no style-guide.
 */
var typography = {
  /** Family: Kanit, Size: 40px */
  h1: {
    family: 'Kanit',
    size: '40px',
    lineHeight: 1.2105263157894737,
    letterSpacing: '-0.02em'
  },
  /** Family: Kanit, Size: 32px */
  h2: {
    family: 'Kanit',
    size: '32px',
    lineHeight: 1.2666666666666666,
    letterSpacing: '-0.01em'
  },
  /** Family: Kanit, Size: 24px */
  h3: {
    family: 'Kanit',
    size: '24px',
    lineHeight: 1.3333333333333333,
    letterSpacing: '0em'
  },
  /** Family: Kanit, Size: 20px */
  h4: {
    family: 'Kanit',
    size: '20px',
    lineHeight: 1.4,
    letterSpacing: '0.01em'
  },
  /** Family: Nunito Sans, Size: 18px */
  subtitle: {
    family: 'Nunito Sans',
    size: '18px',
    lineHeight: 1.5,
    letterSpacing: '0.01em'
  },
  /** Family: Kanit, Size: 16px */
  subtitle2: {
    family: 'Kanit',
    size: '16px',
    lineHeight: 1.5714285714285714,
    letterSpacing: '-0.01em'
  },
  /** Family: Nunito Sans, Size: 16px */
  body1: {
    family: 'Nunito Sans',
    size: '16px',
    lineHeight: 1.5714285714285714,
    letterSpacing: '0.01em'
  },
  /** Family: Nunito Sans, Size: 14px */
  body2: {
    family: 'Nunito Sans',
    size: '14px',
    lineHeight: 1.6666666666666667,
    letterSpacing: '0.01em'
  },
  /** Family: Nunito Sans, Size: 12px */
  body3: {
    family: 'Nunito Sans',
    size: '12px',
    lineHeight: 1.6666666666666667,
    letterSpacing: '0.01em'
  }
};

/**
 * Lista de tipografias disponiveis no style-guide.
 */

/**
 * Tipografia disponivel no style-guide.
 */

/**
 * Espessura da tipografia disponivel no style-guide.
 */

/**
 * Lista de tipografias disponiveis no style-guide.
 */
var typoList = Object.keys(typography);

/**
 * Lista de espessuras de tipografia disponiveis no style-guide.
 */
var weightList = ['400', '500', '600', '700', '800'];

/** Objeto com todas as variaveis do style-guide */

/** Objeto com todas as variaveis do style-guide */
var theme = {
  typography: typography,
  spaces: spaces,
  colors: colors,
  breakpoints: breakpoints,
  mediaQuery: mediaQuery,
  shadows: shadows,
  grid: grid
};

/**
 * Hook com utils para trabalhar com responsividade
 * Exporta o breakpoint atual e funções utils
 *
 * @example
 * const { isMobile } = useResponsive();
 */
function useResponsive() {
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    breakpoint = _React$useState2[0],
    setBreakPoint = _React$useState2[1];
  var _React$useState3 = React.useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    windowSize = _React$useState4[0],
    setWindowSize = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    isIframe = _React$useState6[0],
    setIsIframe = _React$useState6[1];
  var isMobile = React.useMemo(function () {
    return breakpoint ? [Breakpoint.xs, Breakpoint.md, Breakpoint.sm, Breakpoint.md].includes(breakpoint) : false;
  }, [breakpoint]);
  var isDesktop = React.useMemo(function () {
    return breakpoint ? [Breakpoint.lg, Breakpoint.xl, Breakpoint.xxl].includes(breakpoint) : false;
  }, [breakpoint]);
  var isLargeDesktop = React.useMemo(function () {
    return breakpoint === Breakpoint.xxl;
  }, [breakpoint]);
  var isBreakpoint = React.useCallback(function (v) {
    return breakpoint === v;
  }, [breakpoint]);
  var updateBreakpoint = React.useCallback(function () {
    if (windowSize.width <= parsePixel(breakpoints.sm)) {
      setBreakPoint(Breakpoint.xs);
    } else if (windowSize.width <= parsePixel(breakpoints.md)) {
      setBreakPoint(Breakpoint.sm);
    } else if (windowSize.width <= parsePixel(breakpoints.lg)) {
      setBreakPoint(Breakpoint.md);
    } else if (windowSize.width <= parsePixel(breakpoints.xl)) {
      setBreakPoint(Breakpoint.lg);
    } else if (windowSize.width <= parsePixel(breakpoints.xxl)) {
      setBreakPoint(Breakpoint.xl);
    } else {
      setBreakPoint(Breakpoint.xxl);
    }
  }, [windowSize]);
  React.useEffect(function () {
    updateBreakpoint();
  }, [windowSize]);
  React.useEffect(function () {
    var handleResize = function handleResize() {
      return setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  React.useEffect(function () {
    try {
      setIsIframe(window.self !== window.top);
    } catch (_unused) {
      setIsIframe(true);
    }
  }, []);
  return {
    breakpoint: breakpoint,
    isMobile: isMobile,
    isDesktop: isDesktop,
    isIframe: isIframe,
    isLargeDesktop: isLargeDesktop,
    isBreakpoint: isBreakpoint
  };
}

/**
 * Função utilizada para adicionar um layout pré-configurado em uma pagina (pode ser utilizada com composition)
 *
 * @example
 * export default compose(
 *   withLayout(DefaultLayout)
 * )(CadastroAreasPage);
 */
function withLayout(LayoutElement, layoutProps) {
  return function (Component) {
    return /*#__PURE__*/React.memo(function Layout(props) {
      return (
        /*#__PURE__*/
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        React.createElement(LayoutElement, layoutProps, /*#__PURE__*/React.createElement(Component, props))
      );
    });
  };
}

/** @ignore */
var ThemeGlobals = createGlobalStyle(["html{overflow-x:hidden;scroll-behavior:smooth;}body{font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:400;position:relative;min-height:", ";background-color:", ";color:", ";@media (", "){font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.body1.family;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.body1.size;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.body1.lineHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body1.letterSpacing;
}, function (_ref5) {
  var height = _ref5.height;
  return height || '100vh';
}, function (_ref6) {
  var bgColor = _ref6.bgColor,
    bgColorLevel = _ref6.bgColorLevel;
  return bgColor && bgColorLevel ? function (_ref7) {
    var theme = _ref7.theme;
    return theme.colors[bgColor][bgColorLevel];
  } : bgColor ? function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors[bgColor][500];
  } : function (_ref9) {
    var theme = _ref9.theme;
    return theme.colors.white[500];
  };
}, function (_ref10) {
  var textColor = _ref10.textColor,
    textColorLevel = _ref10.textColorLevel;
  return textColor && textColorLevel ? function (_ref11) {
    var theme = _ref11.theme;
    return theme.colors[textColor][textColorLevel];
  } : textColor ? function (_ref12) {
    var theme = _ref12.theme;
    return theme.colors[textColor][500];
  } : function (_ref13) {
    var theme = _ref13.theme;
    return theme.colors.neutral[800];
  };
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.mediaQuery.md;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.body2.family;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.typography.body2.size;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.body2.letterSpacing;
});

/**
 * React provider que expoe toda a logica do style-guide.
 *
 * @example
 * <ThemeProvider configs={themeConfig}>
 *   <OutrosComponents />
 * </ThemeProvider>
 *
 * const theme = useTheme();
 */
var ThemeProvider = function ThemeProvider(_ref) {
  var configs = _ref.configs,
    children = _ref.children;
  var _React$useState = React.useState(configs === null || configs === void 0 ? void 0 : configs.customTheme),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    customTheme = _React$useState2[0],
    setCustomTheme = _React$useState2[1];
  var changeTheme = React.useCallback(function (v) {
    return setCustomTheme(v);
  }, []);
  var value = React.useMemo(function () {
    return _objectSpread2(_objectSpread2(_objectSpread2({}, theme), customTheme), {}, {
      changeTheme: changeTheme
    });
  }, [customTheme]);
  return /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: value
  }, (configs === null || configs === void 0 ? void 0 : configs.withGlobals) && /*#__PURE__*/React.createElement(ThemeGlobals, configs), children);
};

/**
 * Função que pode ser utilizada nas controllers/pages para acessar o contexto do ThemeProvider
 *
 * @example
 * const theme = useTheme();
 */
var useTheme = function useTheme() {
  return React.useContext(ThemeContext);
};

export { Breakpoint, ThemeProvider, addAlphaHex, align, animations, autocomplete, borderStyle, breakpointList, breakpoints, colorLevels, colors, colorsList, cursor, displayPosition, fontStyle, grid, gridList, inputType, mediaQuery, overflow, parsePixel, position, positionExtra, randomColor, randomColorLevel, resize, shadows, shadowsList, size, sort, spaces, spacesList, target, textDecoration, textTransform, theme, trigger, type, typoList, typography, useResponsive, useTheme, variant, weightList, withLayout };
