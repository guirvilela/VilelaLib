import { downloadFromBlob, downloadFromByteArray } from '../../shared/src/utils/browser';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
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
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
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

function removeSpecialChar(str) {
  var within = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ';
  var without = 'AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr';
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var change = false;
    for (var a = 0; a < within.length; a++) {
      if (str.substr(i, 1) == within.substr(a, 1)) {
        result += without.substr(a, 1);
        change = true;
        break;
      }
    }
    if (change == false) {
      result += str.substr(i, 1);
    }
  }
  return result;
}
function contentToCsv(content, header) {
  var keys = Object.keys(content[0]);
  var head = (header || keys).join(';');
  var body = (header ? content : content.slice(1)).map(function (x) {
    return removeSpecialChar(Object.values(x).join(';'));
  });
  return [head].concat(_toConsumableArray(body)).join('\n');
}

/**
 * Generate CSV from Array and download file
 * @param name String (nome arquivo)
 * @param content Array (dados a ser utilizado)
 * @param header Array (opcional, quando enviar o header não utilizamos a primeira linha do content como header)
 *
 * @example
 * await exportCSV('nome-arquivo-x', [{ a: 'A', b: 'B', c: 'C' }]);
 */
function exportCSV(name, content, header) {
  var result = contentToCsv(content, header);
  downloadFromByteArray(
  // [new Uint8Array([0xef, 0xbb, 0xbf]), result],
  ["\uFEFF", result], "".concat(name, ".csv"), 'text/csv;charset=utf-8');
}

/**
 * Generate Excel from Array and download file
 * @param name String (nome arquivo)
 * @param content Array (dados a ser utilizado)
 * @param header Array (opcional, quando enviar o header não utilizamos a primeira linha do content como header)
 *
 * @example
 * await exportExcel('nome-arquivo-x', [{ a: 'A', b: 'B', c: 'C' }]);
 */
function exportExcel(name, content, header) {
  var result = contentToCsv(content, header);
  downloadFromByteArray(result, "".concat(name, ".xls"));
}

var config = {
  pdfmakeScript: 'https://cdn.hubert.com.br/pdfmake/pdfmake.min.js',
  pdfmakeFonts: 'https://cdn.hubert.com.br/pdfmake/vfs_fonts.js',
  qrcodeScript: 'https://cdn.hubert.com.br/qrcode/qrcode.min.js',
  htmlToImageScript: 'https://cdn.hubert.com.br/html-to-image/html-to-image.min.js',
  jQueryScript: 'https://cdn.hubert.com.br/jquery/jquery.min.js'
};

function importScripts$2() {
  return _importScripts$2.apply(this, arguments);
}
/**
 * Tipos de imagens disponivel para exportar o arquivo qrcode
 */
function _importScripts$2() {
  _importScripts$2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            if (typeof htmlToImage !== 'undefined') {
              return resolve(true);
            }
            var script = document.createElement('script');
            script.src = config.htmlToImageScript;
            script.onload = function () {
              resolve(true);
            };
            document.head.appendChild(script);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _importScripts$2.apply(this, arguments);
}
var ExportImageType;
(function (ExportImageType) {
  ExportImageType[ExportImageType["PNG"] = 1] = "PNG";
  ExportImageType[ExportImageType["JPEG"] = 2] = "JPEG";
  ExportImageType[ExportImageType["BLOB"] = 3] = "BLOB";
  ExportImageType[ExportImageType["SVG"] = 4] = "SVG";
})(ExportImageType || (ExportImageType = {}));
function filter(node) {
  var _node$classList;
  return !((_node$classList = node.classList) !== null && _node$classList !== void 0 && _node$classList.contains('ignore'));
}
/**
 * Generate Image from HTML and download file
 * @param name String (nome arquivo)
 * @param el HTMLElement (elemento html que sera utilizado)
 * @param type ExportImageType (PNG, JPEG, BLOB, SVG)
 *
 * @example
 * await exportImage('nome-arquivo-x', document.getElementById('asd'));
 * await exportImage('nome-arquivo-x', elementRef.content);
 */
function exportImage(_x, _x2, _x3, _x4) {
  return _exportImage.apply(this, arguments);
}

/**
 * Generate Image from HTML and return url as base64
 * @param el HTMLElement (elemento html que sera utilizado)
 *
 * @example
 * const url = await generateImage(document.getElementById('asd'));
 * const url = await generateImage(elementRef.content);
 */
function _exportImage() {
  _exportImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name, el, type, options) {
    var transform, ext;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (el) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", Promise.resolve());
        case 2:
          _context2.next = 4;
          return importScripts$2();
        case 4:
          ext = '';
          _context2.t0 = type;
          _context2.next = _context2.t0 === ExportImageType.PNG ? 8 : _context2.t0 === ExportImageType.BLOB ? 11 : _context2.t0 === ExportImageType.SVG ? 13 : 16;
          break;
        case 8:
          transform = htmlToImage.toPng;
          ext = '.png';
          return _context2.abrupt("break", 19);
        case 11:
          transform = htmlToImage.toBlob;
          return _context2.abrupt("break", 19);
        case 13:
          transform = htmlToImage.toSvg;
          ext = '.svg';
          return _context2.abrupt("break", 19);
        case 16:
          transform = htmlToImage.toJpeg;
          ext = '.jpeg';
          return _context2.abrupt("break", 19);
        case 19:
          return _context2.abrupt("return", transform(el, _objectSpread2({
            cacheBust: true,
            filter: filter,
            backgroundColor: '#fff'
          }, options)).then(function (url) {
            if (type === ExportImageType.BLOB) {
              return downloadFromBlob(url, name);
            }
            var link = document.createElement('a');
            link.style.display = 'none';
            link.href = url;
            link.download = "".concat(name).concat(ext);
            document.body.appendChild(link);
            link.click();
            setTimeout(function () {
              return document.body.removeChild(link);
            }, 0);
          }));
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _exportImage.apply(this, arguments);
}
function generateImage(_x5, _x6) {
  return _generateImage.apply(this, arguments);
}
function _generateImage() {
  _generateImage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(el, options) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (el) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return", Promise.resolve(''));
        case 2:
          _context3.next = 4;
          return importScripts$2();
        case 4:
          return _context3.abrupt("return", htmlToImage.toPng(el, _objectSpread2({
            cacheBust: true,
            filter: filter,
            backgroundColor: '#fff'
          }, options)));
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _generateImage.apply(this, arguments);
}

/** Tamanhos de pagina */

/** Orientações de pagina */

/** Tipos de alinhamento em celula de tabela */

/** Tipos de alinhamento em estilos */

/** Tipos de decoração de texto em estilos */

/**
 * Objeto de configuração do arquivo final em PDF
 */

/**
 * Objeto de configuração de uma tabela a ser inserida no conteudo do PDF
 */

/**
 * Objeto de configuração dos estilos possiveis a ser aplicado no pdf (tipo css)
 */

var defaultConfig = {
  pageSize: 'A4',
  pageOrientation: 'portrait',
  pageMargins: [16, 16, 16, 48]
};
var defaultTableLayout = {
  hLineColor: function hLineColor() {
    return '#d9d9d9';
  },
  vLineColor: function vLineColor() {
    return '#d9d9d9';
  }
};
var defaultStyles = {
  title: {
    bold: true,
    fontSize: 14
  },
  subtitle: {
    bold: true,
    fontSize: 9
  },
  body: {
    fontSize: 9
  },
  bodyBold: {
    bold: true,
    fontSize: 9
  },
  red: {
    color: '#ed5565'
  },
  green: {
    color: '#1da462'
  },
  gray: {
    color: '#aeaeae'
  },
  bold: {
    bold: true
  },
  italic: {
    italics: true
  },
  centered: {
    alignment: 'center'
  },
  left: {
    alignment: 'left'
  },
  right: {
    alignment: 'right'
  },
  underline: {
    decoration: 'underline'
  },
  bgGray: {
    background: '#eeeeee'
  }
};

/**
 * Objeto de configuração de cada celula (estilo, conteudo, etc)
 */

/**
 * Classe que expoe diversos metodos para construir o conteudo do PDF
 */
var ExportPDFTableUtils = /*#__PURE__*/function () {
  function ExportPDFTableUtils() {
    _classCallCheck(this, ExportPDFTableUtils);
  }
  return _createClass(ExportPDFTableUtils, null, [{
    key: "numberStyle",
    value: function numberStyle(v) {
      return v ? Number(v) <= 0 ? 'red' : '' : '';
    }
  }, {
    key: "HeaderLeft",
    value: function HeaderLeft(v, options) {
      var _options$formatter;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter = options.formatter) === null || _options$formatter === void 0 ? void 0 : _options$formatter.call(options, v)) || v),
        alignment: 'left',
        fillColor: '#eeeeee',
        border: [true, true, false, true],
        style: ['bodyBold', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "HeaderCenter",
    value: function HeaderCenter(v, options) {
      var _options$formatter2;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter2 = options.formatter) === null || _options$formatter2 === void 0 ? void 0 : _options$formatter2.call(options, v)) || v),
        alignment: 'right',
        fillColor: '#eeeeee',
        border: [false, true, false, true],
        style: ['bodyBold', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "HeaderRight",
    value: function HeaderRight(v, options) {
      var _options$formatter3;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter3 = options.formatter) === null || _options$formatter3 === void 0 ? void 0 : _options$formatter3.call(options, v)) || v),
        alignment: 'right',
        fillColor: '#eeeeee',
        border: [false, true, true, true],
        style: ['bodyBold', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "BodyLeft",
    value: function BodyLeft(v, options) {
      var _options$formatter4;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter4 = options.formatter) === null || _options$formatter4 === void 0 ? void 0 : _options$formatter4.call(options, v)) || v),
        alignment: 'left',
        border: [true, true, false, true],
        style: ['body', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "BodyCenter",
    value: function BodyCenter(v, options) {
      var _options$formatter5;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter5 = options.formatter) === null || _options$formatter5 === void 0 ? void 0 : _options$formatter5.call(options, v)) || v),
        alignment: 'right',
        border: [false, true, false, true],
        style: ['body', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "BodyRight",
    value: function BodyRight(v, options) {
      var _options$formatter6;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter6 = options.formatter) === null || _options$formatter6 === void 0 ? void 0 : _options$formatter6.call(options, v)) || v),
        alignment: 'right',
        border: [false, true, true, true],
        style: ['body', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "FooterLeft",
    value: function FooterLeft(v, options) {
      var _options$formatter7;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter7 = options.formatter) === null || _options$formatter7 === void 0 ? void 0 : _options$formatter7.call(options, v)) || v),
        alignment: 'left',
        border: [true, true, false, true],
        style: ['bodyBold', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "FooterCenter",
    value: function FooterCenter(v, options) {
      var _options$formatter8;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter8 = options.formatter) === null || _options$formatter8 === void 0 ? void 0 : _options$formatter8.call(options, v)) || v),
        alignment: 'right',
        border: [false, true, false, true],
        style: ['bodyBold', this.numberStyle(v)]
      }, options);
    }
  }, {
    key: "FooterRight",
    value: function FooterRight(v, options) {
      var _options$formatter9;
      return _objectSpread2({
        text: String((options === null || options === void 0 ? void 0 : (_options$formatter9 = options.formatter) === null || _options$formatter9 === void 0 ? void 0 : _options$formatter9.call(options, v)) || v),
        alignment: 'right',
        border: [false, true, true, true],
        style: ['bodyBold', this.numberStyle(v)]
      }, options);
    }
  }]);
}();
function importScripts$1() {
  return _importScripts$1.apply(this, arguments);
}
/**
 * Função responsavel por criar e exportar o PDF como arquivo
 * @param name Nome do arquivo, sem extensão
 * @param content Conteudo do PDF configurado
 * @param configs Objeto de configuração do arquivo de PDF
 *
 * @example
 * await exportPDF(
 *  'relatorio-reservas',
 *  [{
 *    text: 'RELATORIO RESERVAS',
 *    style: 'title',
 *    alignment: 'center',
 *    margin: [0, 3]
 *  }],
 *  {
 *    pageSize: 'A4',
 *    pageOrientation: 'portrait'
 *  }
 * );
 */
function _importScripts$1() {
  _importScripts$1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            if (typeof pdfMake !== 'undefined') {
              return resolve(true);
            }
            var script = document.createElement('script');
            var fonts = document.createElement('script');
            script.src = config.pdfmakeScript;
            fonts.src = config.pdfmakeFonts;
            script.onload = function () {
              document.head.appendChild(fonts);
            };
            fonts.onload = function () {
              resolve(true);
            };
            document.head.appendChild(script);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _importScripts$1.apply(this, arguments);
}
function exportPDF(_x, _x2, _x3) {
  return _exportPDF.apply(this, arguments);
}
function _exportPDF() {
  _exportPDF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name, content, configs) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return importScripts$1();
        case 2:
          if (configs !== null && configs !== void 0 && configs.fonts) {
            pdfMake.fonts = _objectSpread2(_objectSpread2({}, pdfMake.fonts), configs === null || configs === void 0 ? void 0 : configs.fonts);
          }
          pdfMake.createPdf(_objectSpread2(_objectSpread2(_objectSpread2({}, defaultConfig), configs), {}, {
            content: content === null || content === void 0 ? void 0 : content.map(function (x) {
              return x.table ? _objectSpread2(_objectSpread2({}, x), {}, {
                layout: _objectSpread2(_objectSpread2({}, defaultTableLayout), x.layout)
              }) : x;
            }),
            styles: _objectSpread2(_objectSpread2({}, defaultStyles), configs === null || configs === void 0 ? void 0 : configs.styles)
          })).download("".concat(name, ".pdf"));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _exportPDF.apply(this, arguments);
}

function importScripts() {
  return _importScripts.apply(this, arguments);
}
function _importScripts() {
  _importScripts = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            if (typeof QRCode !== 'undefined') {
              return resolve(true);
            }
            if (typeof jQuery === 'undefined') {
              var jquery = document.createElement('script');
              jquery.src = config.jQueryScript;
              document.head.appendChild(jquery);
            }
            var script = document.createElement('script');
            script.src = config.qrcodeScript;
            script.onload = function () {
              resolve(true);
            };
            document.head.appendChild(script);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _importScripts.apply(this, arguments);
}
var optsDefault = {
  width: 128,
  height: 128,
  colorDark: '#000000',
  colorLight: '#ffffff'
};
/**
 * Generate QRCode render in html
 * @param el HTMLElement
 * @param content String (Conteudo do QRCode, texto normal)
 *
 * @example
 * await renderQrCode(ref.current, 'Hello World!');
 * await renderQrCode(document.getElementById('teste'), 'Hello World!');
 */
function renderQrCode(_x, _x2, _x3) {
  return _renderQrCode.apply(this, arguments);
}

/**
 * Generate QRCode return url in base64
 * @returns url String
 *
 * @example
 * const url = await generateQrCode('Hello World!');
 */
function _renderQrCode() {
  _renderQrCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(el, content, options) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return importScripts();
        case 2:
          new QRCode(el, _objectSpread2(_objectSpread2({}, options || optsDefault), {}, {
            text: content
          }));
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _renderQrCode.apply(this, arguments);
}
function generateQrCode(_x4, _x5) {
  return _generateQrCode.apply(this, arguments);
}

/**
 * Generate QRCode download file
 * @param name String (nome arquivo)
 * @param content String (conteudo do qrcode)
 *
 * @example
 * await exportQrCode('nome-arquivo-x', 'Hello World!');
 */
function _generateQrCode() {
  _generateQrCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(content, options) {
    var el, url;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return importScripts();
        case 2:
          el = document.createElement('div');
          document.body.appendChild(el);
          new QRCode(el, _objectSpread2(_objectSpread2({}, options || optsDefault), {}, {
            text: content
          }));
          _context3.next = 7;
          return generateImage(el);
        case 7:
          url = _context3.sent;
          document.body.removeChild(el);
          return _context3.abrupt("return", url);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _generateQrCode.apply(this, arguments);
}
function exportQrCode(_x6, _x7, _x8) {
  return _exportQrCode.apply(this, arguments);
}
function _exportQrCode() {
  _exportQrCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, content, options) {
    var el;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return importScripts();
        case 2:
          el = document.createElement('div');
          document.body.appendChild(el);
          new QRCode(el, _objectSpread2(_objectSpread2({}, options || optsDefault), {}, {
            text: content
          }));
          _context4.next = 7;
          return exportImage(name, el, ExportImageType.PNG);
        case 7:
          document.body.removeChild(el);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _exportQrCode.apply(this, arguments);
}

export { exportCSV, exportExcel, exportImage, ExportImageType, exportPDF, ExportPDFTableUtils, exportQrCode, generateImage, generateQrCode, renderQrCode };

