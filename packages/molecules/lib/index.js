'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var atoms = require('@hubert/atoms');
var shared = require('@hubert/shared');
var styles = require('@hubert/styles');
var React = require('react');
var styled = require('styled-components');
var i18n = require('@hubert/i18n');
var AnimationError = require('@hubert/styles/lib/animations/error.json');
var AnimationInfo = require('@hubert/styles/lib/animations/info.json');
var AnimationSuccess = require('@hubert/styles/lib/animations/success.json');
var AnimationCapture = require('@hubert/styles/lib/animations/capture.json');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var AnimationError__default = /*#__PURE__*/_interopDefaultLegacy(AnimationError);
var AnimationInfo__default = /*#__PURE__*/_interopDefaultLegacy(AnimationInfo);
var AnimationSuccess__default = /*#__PURE__*/_interopDefaultLegacy(AnimationSuccess);
var AnimationCapture__default = /*#__PURE__*/_interopDefaultLegacy(AnimationCapture);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
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

var _excluded$c = ["name", "photo", "width", "menuWidth", "color", "colorLevel", "bgColor", "bgColorLevel", "options"];
var DownArrow = function DownArrow(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a.999.999 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z",
    fill: "#083350"
  }));
};
DownArrow.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function HubAvatarMenu(_ref) {
  var name = _ref.name,
    photo = _ref.photo,
    width = _ref.width,
    menuWidth = _ref.menuWidth,
    color = _ref.color,
    colorLevel = _ref.colorLevel,
    bgColor = _ref.bgColor,
    bgColorLevel = _ref.bgColorLevel,
    options = _ref.options,
    props = _objectWithoutProperties(_ref, _excluded$c);
  var _useResponsive = styles.useResponsive(),
    isMobile = _useResponsive.isMobile;
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubPopover, {
    trigger: "click",
    width: menuWidth,
    content: options && /*#__PURE__*/React__default["default"].createElement(atoms.HubList, {
      hover: true,
      pad: ['2', '3']
    }, options.map(function (x, i) {
      return x.customElement ? x.customElement(/*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
        link: true,
        variant: "action"
      }, /*#__PURE__*/React__default["default"].createElement(atoms.HubListItem, null, x.icon && /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
        icon: x.icon,
        size: "sm"
      }), /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
        typo: "body2",
        weight: "600"
      }, x.label))), i) : /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
        key: "hub-avatar-menu-list-item-".concat(i),
        "data-testid": shared.factoryTestId(props, "item-".concat(i, "-click")),
        link: !!x.href,
        variant: "action",
        href: x.href,
        onClick: x.onClick
      }, /*#__PURE__*/React__default["default"].createElement(atoms.HubListItem, null, x.icon && /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
        icon: x.icon,
        size: "sm"
      }), /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
        typo: "body2",
        weight: "600"
      }, x.label)));
    }))
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, _extends({
    variant: "action"
  }, props), /*#__PURE__*/React__default["default"].createElement(atoms.HubAvatar, {
    src: photo,
    alt: "avatar",
    initials: shared.getInitials(name),
    color: bgColor || 'neutral',
    colorLevel: bgColorLevel,
    colorText: color,
    colorTextLevel: colorLevel,
    borderless: true
  }), !isMobile && /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    row: true,
    align: "center",
    justify: "center",
    gap: "1",
    width: width
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "body1",
    weight: "600",
    color: color,
    colorLevel: colorLevel,
    title: name,
    nowrap: true
  }, name), options && /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
    icon: DownArrow,
    color: color,
    colorLevel: colorLevel
  }))));
}

var ListStyle = styled__default["default"](atoms.HubList).withConfig({
  displayName: "ListStyle",
  componentId: "sc-112axeu-0"
})(["@media print{max-height:unset;height:auto;overflow:unset;}"]);

function HubDataList(_ref) {
  var typo = _ref.typo,
    columns = _ref.columns,
    data = _ref.data,
    height = _ref.height,
    gap = _ref.gap,
    rowConfigs = _ref.rowConfigs,
    onLoadMore = _ref.onLoadMore,
    children = _ref.children;
  function columnToDataListItem(item, index, indexCol) {
    return columns[columns.length - 1].filter(function (col) {
      return !col.hidden;
    }).map(function (col, ci) {
      var _ref2;
      var value = col.formatter ? col.formatter(item[col.key]) : item[col.key];
      var element = ((_ref2 = col.renderMobile || col.render) === null || _ref2 === void 0 ? void 0 : _ref2({
        key: col.key,
        item: item,
        index: index,
        value: value,
        indexCol: indexCol
      })) || value;
      if (col.noMobileTitle) {
        return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
          key: "hub-data-list-item-col-".concat(ci)
        }, element);
      }
      return /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
        key: "hub-data-list-item-col-".concat(ci),
        typo: typo || 'body3'
      }, col.gridCols ? /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
        row: true,
        cols: col.gridCols,
        gap: "1",
        align: "center"
      }, /*#__PURE__*/React__default["default"].createElement("b", null, col.label, ":"), element) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("b", null, col.label, ": "), element));
    });
  }
  return /*#__PURE__*/React__default["default"].createElement(ListStyle, {
    gap: gap || '3',
    height: height,
    onLoadMore: onLoadMore
  }, children, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
    var _item$configs, _item$configs2, _item$configs3, _item$configs4, _item$configs5, _item$configs6;
    return /*#__PURE__*/React__default["default"].createElement(atoms.HubListItem, {
      key: "hub-data-list-item-".concat(index),
      fullBorder: true,
      borderColor: (rowConfigs === null || rowConfigs === void 0 ? void 0 : rowConfigs.borderColor) || ((_item$configs = item.configs) === null || _item$configs === void 0 ? void 0 : _item$configs.borderColor),
      borderColorLevel: (rowConfigs === null || rowConfigs === void 0 ? void 0 : rowConfigs.borderColorLevel) || ((_item$configs2 = item.configs) === null || _item$configs2 === void 0 ? void 0 : _item$configs2.borderColorLevel),
      accentBorderColor: (rowConfigs === null || rowConfigs === void 0 ? void 0 : rowConfigs.accentColor) || ((_item$configs3 = item.configs) === null || _item$configs3 === void 0 ? void 0 : _item$configs3.accentColor),
      accentBorderColorLevel: (rowConfigs === null || rowConfigs === void 0 ? void 0 : rowConfigs.accentColorLevel) || ((_item$configs4 = item.configs) === null || _item$configs4 === void 0 ? void 0 : _item$configs4.accentColorLevel),
      radius: (rowConfigs === null || rowConfigs === void 0 ? void 0 : rowConfigs.borderRadius) || ((_item$configs5 = item.configs) === null || _item$configs5 === void 0 ? void 0 : _item$configs5.borderRadius)
    }, /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
      gap: (rowConfigs === null || rowConfigs === void 0 ? void 0 : rowConfigs.gap) || ((_item$configs6 = item.configs) === null || _item$configs6 === void 0 ? void 0 : _item$configs6.gap) || '1',
      filled: true
    }, columnToDataListItem(item, index, 0)));
  }));
}

var Svg$1 = styled__default["default"].svg.withConfig({
  displayName: "Svg",
  componentId: "sc-1o5g5qg-0"
})(["color:", " !important;"], function (_ref) {
  var fg = _ref.fg;
  return fg;
});
var IlusEmptyState = (function (_ref2) {
  var width = _ref2.width,
    height = _ref2.height,
    bg = _ref2.bg,
    fg = _ref2.fg;
  return /*#__PURE__*/React__default["default"].createElement(Svg$1, {
    width: width,
    height: height,
    viewBox: "0 0 144 144",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    fg: fg
  }, /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "72",
    cy: "72",
    r: "72",
    fill: bg
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M68.1953 45.878C57.5268 45.878 48.8782 54.5265 48.8782 65.1951C48.8782 75.8636 57.5268 84.5121 68.1953 84.5121C78.8638 84.5121 87.5124 75.8636 87.5124 65.1951C87.5124 54.5265 78.8638 45.878 68.1953 45.878ZM42.4392 65.1951C42.4392 50.9704 53.9706 39.439 68.1953 39.439C82.42 39.439 93.9514 50.9704 93.9514 65.1951C93.9514 71.147 91.9325 76.6274 88.5422 80.9888L105.886 98.3332C107.144 99.5905 107.144 101.629 105.886 102.886C104.629 104.144 102.591 104.144 101.333 102.886L83.9891 85.5419C79.6277 88.9323 74.1473 90.9512 68.1953 90.9512C53.9706 90.9512 42.4392 79.4198 42.4392 65.1951Z",
    fill: fg
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M71.6287 65.2144L74.7509 68.3366C75.1907 68.792 75.4341 69.4019 75.4286 70.0351C75.4231 70.6682 75.1692 71.2738 74.7215 71.7215C74.2738 72.1692 73.6681 72.4232 73.035 72.4287C72.4019 72.4342 71.7919 72.1908 71.3365 71.7509L68.2143 68.6288L65.0921 71.7509C64.6367 72.1908 64.0268 72.4342 63.3936 72.4287C62.7605 72.4232 62.1549 72.1692 61.7072 71.7215C61.2595 71.2738 61.0055 70.6682 61 70.0351C60.9945 69.4019 61.2379 68.792 61.6778 68.3366L64.8 65.2144L61.6778 62.0922C61.2379 61.6368 60.9945 61.0268 61 60.3937C61.0055 59.7606 61.2595 59.1549 61.7072 58.7072C62.1549 58.2595 62.7605 58.0056 63.3936 58.0001C64.0268 57.9946 64.6367 58.238 65.0921 58.6778L68.2143 61.8L71.3365 58.6778C71.7919 58.238 72.4019 57.9946 73.035 58.0001C73.6681 58.0056 74.2738 58.2595 74.7215 58.7072C75.1692 59.1549 75.4231 59.7606 75.4286 60.3937C75.4341 61.0268 75.1907 61.6368 74.7509 62.0922L71.6287 65.2144Z",
    fill: fg
  }));
});

var _excluded$b = ["title", "content", "horizontal", "color", "size", "pad"];
function HubDataTableEmpty(_ref) {
  var title = _ref.title,
    content = _ref.content,
    horizontal = _ref.horizontal,
    color = _ref.color,
    size = _ref.size,
    pad = _ref.pad,
    props = _objectWithoutProperties(_ref, _excluded$b);
  var theme = styles.useTheme();
  var t = i18n.useI18nMessage();
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, _extends({
    pad: pad || ['8', '4'],
    justify: "center",
    align: "center",
    gap: "5"
  }, props), /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    row: horizontal,
    justify: "center",
    align: "center",
    gap: "3",
    width: "540px",
    responsive: "md"
  }, /*#__PURE__*/React__default["default"].createElement(IlusEmptyState, {
    width: size || 144,
    height: size || 144,
    bg: color ? theme.colors[color][100] : theme.colors.neutral[200],
    fg: color ? theme.colors[color][500] : theme.colors.primary[500]
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    justify: "center",
    align: horizontal ? 'start' : 'center',
    gap: "3"
  }, typeof title === 'string' || typeof title === 'undefined' ? /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "h2",
    color: color || 'primary',
    weight: "500",
    align: "center"
  }, title || t('hub-data-table-empty_title')) : title, /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "subtitle",
    color: "neutral",
    weight: "600",
    align: horizontal ? 'start' : 'center'
  }, content || t('hub-data-table-empty_content')))));
}

var Svg = styled__default["default"].svg.withConfig({
  displayName: "Svg",
  componentId: "sc-1w8u9r3-0"
})(["color:", " !important;"], function (_ref) {
  var fg = _ref.fg;
  return fg;
});
var IlusSearchEllipse = (function (_ref2) {
  var width = _ref2.width,
    height = _ref2.height,
    bg = _ref2.bg,
    fg = _ref2.fg;
  return /*#__PURE__*/React__default["default"].createElement(Svg, {
    width: width,
    height: height,
    viewBox: "0 0 144 144",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    fg: fg
  }, /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "72",
    cy: "72",
    r: "72",
    fill: bg
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M68.1952 46.2437C57.5267 46.2437 48.8781 54.8923 48.8781 65.5608C48.8781 76.2293 57.5267 84.8779 68.1952 84.8779C78.8637 84.8779 87.5123 76.2293 87.5123 65.5608C87.5123 54.8923 78.8637 46.2437 68.1952 46.2437ZM42.4391 65.5608C42.4391 51.3361 53.9705 39.8047 68.1952 39.8047C82.4199 39.8047 93.9513 51.3361 93.9513 65.5608C93.9513 71.5127 91.9324 76.9931 88.542 81.3546L105.886 98.6989C107.144 99.9562 107.144 101.995 105.886 103.252C104.629 104.509 102.591 104.509 101.333 103.252L83.989 85.9076C79.6275 89.298 74.1471 91.3169 68.1952 91.3169C53.9705 91.3169 42.4391 79.7855 42.4391 65.5608Z",
    fill: fg
  }));
});

var _excluded$a = ["title", "content", "horizontal", "color", "size", "pad"];
function HubDataTableInitial(_ref) {
  var title = _ref.title,
    content = _ref.content,
    horizontal = _ref.horizontal,
    color = _ref.color,
    size = _ref.size,
    pad = _ref.pad,
    props = _objectWithoutProperties(_ref, _excluded$a);
  var theme = styles.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, _extends({
    pad: pad || ['8', '4'],
    justify: "center",
    align: "center",
    gap: "5"
  }, props), /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    row: horizontal,
    justify: "center",
    align: "center",
    gap: "3",
    width: "540px",
    responsive: "md"
  }, /*#__PURE__*/React__default["default"].createElement(IlusSearchEllipse, {
    width: size || 144,
    height: size || 144,
    bg: color ? theme.colors[color][100] : theme.colors.neutral[200],
    fg: color ? theme.colors[color][500] : theme.colors.primary[500]
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    justify: "center",
    align: horizontal ? 'start' : 'center',
    gap: "3"
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "h2",
    color: color || 'primary',
    align: "center",
    weight: "500"
  }, title), /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "subtitle",
    color: "neutral",
    weight: "600",
    align: horizontal ? 'start' : 'center'
  }, content))));
}

var _excluded$9 = ["id", "editable", "width", "height", "onClose", "placeholder", "readOnly", "required", "loading", "wrap", "clearable", "inputTypo", "color", "colorLevel", "borderColor", "borderColorLevel", "bgColor", "bgColorLevel", "error", "onClear", "onClick", "onFocus", "left", "right", "bottom", "hint", "range", "size", "typo", "withActions", "value", "onChange", "children"];
var IconOutlineCalendar = function IconOutlineCalendar(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16v9Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1v3ZM7 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: "#083350"
  }));
};
IconOutlineCalendar.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function HubDate(_ref) {
  var id = _ref.id,
    _ref$editable = _ref.editable,
    editable = _ref$editable === void 0 ? true : _ref$editable,
    width = _ref.width,
    height = _ref.height,
    onClose = _ref.onClose,
    placeholder = _ref.placeholder,
    readOnly = _ref.readOnly,
    required = _ref.required,
    loading = _ref.loading,
    wrap = _ref.wrap,
    clearable = _ref.clearable,
    inputTypo = _ref.inputTypo,
    color = _ref.color,
    colorLevel = _ref.colorLevel,
    borderColor = _ref.borderColor,
    borderColorLevel = _ref.borderColorLevel,
    bgColor = _ref.bgColor,
    bgColorLevel = _ref.bgColorLevel,
    error = _ref.error,
    onClear = _ref.onClear,
    onClick = _ref.onClick,
    onFocus = _ref.onFocus,
    left = _ref.left,
    right = _ref.right,
    bottom = _ref.bottom,
    hint = _ref.hint,
    range = _ref.range,
    size = _ref.size,
    typo = _ref.typo,
    withActions = _ref.withActions,
    value = _ref.value,
    onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$9);
  var f = i18n.useI18nFormatter();
  var ref = React__default["default"].useRef();
  var _React$useState = React__default["default"].useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    opened = _React$useState2[0],
    setOpened = _React$useState2[1];
  var label = React__default["default"].useMemo(function () {
    if (!(value !== null && value !== void 0 && value[0])) return '';
    if (props.mandatoryMode && props.initialMode === 'months') {
      return shared.capitalizedCase(f.longMonthYearFormatter(value === null || value === void 0 ? void 0 : value[0]));
    }
    if (props.mandatoryMode && props.initialMode === 'years') {
      return f.yearFormatter(value === null || value === void 0 ? void 0 : value[0]);
    }
    if (range) {
      return "".concat(f.dateFormatter(value === null || value === void 0 ? void 0 : value[0]), " - ").concat(f.dateFormatter(value === null || value === void 0 ? void 0 : value[1]));
    }
    return f.dateFormatter(value === null || value === void 0 ? void 0 : value[0]);
  }, [range, value]);
  var disabled = React__default["default"].useMemo(function () {
    return Array.isArray(props.disabled) ? props.disabled.some(function (d) {
      return value === null || value === void 0 ? void 0 : value.includes(d);
    }) : props.disabled === true;
  }, [props.disabled, value]);
  function handleClose() {
    setOpened(undefined);
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }
  function handleChange(v) {
    if (v && (range ? v[0] && v[1] : v[0])) {
      setOpened(undefined);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(v);
  }
  function handleInputChange(v) {
    if (!editable) return;
    if (!v) {
      onChange === null || onChange === void 0 ? void 0 : onChange([]);
    } else {
      var dts = String(v).trim();
      if (range) {
        var dates = [dts.substring(0, 10), dts.substring(dts.length - 10, dts.length)];
        if (shared.isDate(dates[0]) && shared.isDate(dates[1])) {
          onChange === null || onChange === void 0 ? void 0 : onChange([shared.dateISO(dates[0]), shared.dateISO(dates[1])]);
        }
      } else {
        if (shared.isDate(dts)) {
          onChange === null || onChange === void 0 ? void 0 : onChange([shared.dateISO(dts)]);
        }
      }
    }
  }
  function handleClick(e) {
    setOpened(e);
    onClick === null || onClick === void 0 ? void 0 : onClick();
  }
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(atoms.HubPopover, {
    "data-testid": shared.factoryTestId(props, 'popover'),
    source: opened,
    onClose: handleClose,
    width: width || '270px',
    height: height || '316px',
    content: /*#__PURE__*/React__default["default"].createElement(atoms.HubCard, {
      pad: ['2', '3', '1', '3'],
      borderless: true
    }, /*#__PURE__*/React__default["default"].createElement(atoms.HubCalendar, _extends({}, props, {
      range: range,
      size: size || 'md',
      typo: typo || 'body2',
      value: value,
      onChange: handleChange,
      withActions: withActions === undefined ? true : withActions
    })))
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubTextField, {
    id: "hub-date-".concat(id),
    "data-testid": shared.factoryTestId(props, 'input'),
    readOnly: props.mandatoryMode || readOnly,
    typo: inputTypo,
    color: color,
    colorLevel: colorLevel,
    borderColor: borderColor,
    borderColorLevel: borderColorLevel,
    bgColor: bgColor,
    bgColorLevel: bgColorLevel,
    placeholder: placeholder,
    required: required,
    loading: loading,
    clearable: clearable,
    wrap: wrap,
    disabled: disabled,
    defaultValue: label,
    error: error,
    left: left,
    right: right || /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      ref: ref,
      "data-testid": shared.factoryTestId(props, 'picker'),
      variant: "icon",
      onClick: handleClick
    }, /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
      icon: IconOutlineCalendar
    })),
    bottom: bottom,
    hint: hint,
    onLazyChange: handleInputChange,
    onClick: !editable ? handleClick : undefined,
    onClear: onClear,
    onFocus: onFocus
  }, children));
}

var v = "5.7.11";
var fr = 60;
var ip = 0;
var op = 300;
var w = 1080;
var h = 1080;
var nm = "Comp 1";
var ddd = 0;
var assets = [
];
var layers = [
	{
		ddd: 0,
		ind: 1,
		ty: 3,
		nm: "Null 1",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 0,
				ix: 11
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 103,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 106,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 109,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 112,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 115,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 118,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 121,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 124,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 127,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 149,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 152,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 155,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 158,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 161,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 164,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 167,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 170,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 173,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 192,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 195,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 198,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 201,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 204,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 207,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 210,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 213,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 216,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 233,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 236,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 239,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 242,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 245,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 248,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 251,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 254,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 257,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 279,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 282,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 285,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 288,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 291,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 294,
						s: [
							0
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 297,
						s: [
							-4
						]
					},
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 300,
						s: [
							0
						]
					},
					{
						t: 303,
						s: [
							-4
						]
					}
				],
				ix: 10
			},
			p: {
				a: 0,
				k: [
					540,
					540,
					0
				],
				ix: 2,
				l: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1,
				l: 2
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6,
				l: 2
			}
		},
		ao: 0,
		ip: 103,
		op: 306,
		st: 6,
		bm: 0
	},
	{
		ddd: 0,
		ind: 2,
		ty: 4,
		nm: "Isolation Mode 2 - Group 1",
		parent: 1,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.667
							],
							y: [
								1
							]
						},
						o: {
							x: [
								0.333
							],
							y: [
								0
							]
						},
						t: 48,
						s: [
							45
						]
					},
					{
						t: 60,
						s: [
							0
						]
					}
				],
				ix: 10,
				x: "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Rotation')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Rotation')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Rotation')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Rotation')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}"
			},
			p: {
				a: 1,
				k: [
					{
						i: {
							x: 0.667,
							y: 1
						},
						o: {
							x: 0.333,
							y: 0
						},
						t: 48,
						s: [
							5.474,
							28.362,
							0
						],
						to: [
							0,
							-6.667,
							0
						],
						ti: [
							0,
							6.667,
							0
						]
					},
					{
						t: 60,
						s: [
							5.474,
							-11.638,
							0
						]
					}
				],
				ix: 2,
				l: 2,
				x: "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}"
			},
			a: {
				a: 0,
				k: [
					5.474,
					-11.638,
					0
				],
				ix: 1,
				l: 2
			},
			s: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.667,
								0.667,
								0.667
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 48,
						s: [
							8,
							8,
							100
						]
					},
					{
						t: 60,
						s: [
							100,
							100,
							100
						]
					}
				],
				ix: 6,
				l: 2,
				x: "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}"
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										11.9,
										-2.8
									],
									[
										0,
										-13.1
									],
									[
										-0.6,
										-7.9
									],
									[
										-1.7,
										-30.1
									],
									[
										-10.2,
										0
									],
									[
										-0.5,
										10.3
									],
									[
										-0.6,
										6.3
									],
									[
										-1.1,
										19.3
									],
									[
										-0.6,
										12.5
									],
									[
										1.7,
										4
									]
								],
								o: [
									[
										-11.9,
										3.4
									],
									[
										0.6,
										7.9
									],
									[
										1.7,
										30.1
									],
									[
										0.6,
										10.2
									],
									[
										10.2,
										0
									],
									[
										0,
										-6.2
									],
									[
										1.1,
										-19.3
									],
									[
										0.6,
										-12.5
									],
									[
										0,
										-4.5
									],
									[
										-5.1,
										-11.2
									]
								],
								v: [
									[
										-0.476,
										-90.485
									],
									[
										-19.776,
										-63.185
									],
									[
										-18.076,
										-39.385
									],
									[
										-12.976,
										50.315
									],
									[
										5.724,
										67.915
									],
									[
										24.424,
										49.715
									],
									[
										25.024,
										31.515
									],
									[
										28.424,
										-26.385
									],
									[
										30.724,
										-63.885
									],
									[
										28.424,
										-76.385
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								1,
								0.706020759134,
								0.074509803922,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 1",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 46,
		op: 328,
		st: 28,
		bm: 0
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "Isolation Mode 2 - Group 3",
		parent: 1,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 1,
				k: [
					{
						i: {
							x: 0.667,
							y: 1
						},
						o: {
							x: 0.333,
							y: 0
						},
						t: 48,
						s: [
							5.436,
							70.016,
							0
						],
						to: [
							0,
							6.667,
							0
						],
						ti: [
							0,
							-6.667,
							0
						]
					},
					{
						t: 60,
						s: [
							5.436,
							110.016,
							0
						]
					}
				],
				ix: 2,
				l: 2
			},
			a: {
				a: 0,
				k: [
					5.436,
					110.016,
					0
				],
				ix: 1,
				l: 2
			},
			s: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.667,
								0.667,
								0.667
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 48,
						s: [
							12,
							12,
							100
						]
					},
					{
						t: 60,
						s: [
							100,
							100,
							100
						]
					}
				],
				ix: 6,
				l: 2
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										13.7,
										0
									],
									[
										0,
										-13.6
									],
									[
										-13.6,
										0
									],
									[
										0.6,
										13
									]
								],
								o: [
									[
										-13.6,
										0
									],
									[
										0,
										13.6
									],
									[
										13.1,
										0
									],
									[
										0.6,
										-14.3
									]
								],
								v: [
									[
										5.724,
										85.016
									],
									[
										-19.276,
										110.016
									],
									[
										5.724,
										135.016
									],
									[
										30.124,
										110.616
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								1,
								0.705882352941,
								0.074509803922,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 3",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 46,
		op: 328,
		st: 28,
		bm: 0
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "Isolation Mode 2 - Group 2",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					545.73,
					534.866,
					0
				],
				ix: 2,
				l: 2
			},
			a: {
				a: 0,
				k: [
					5.73,
					-5.134,
					0
				],
				ix: 1,
				l: 2
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6,
				l: 2
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										8.6,
										-14.9
									],
									[
										17.2,
										0
									],
									[
										0,
										0
									],
									[
										8.5,
										14.7
									],
									[
										-8.6,
										15
									],
									[
										0,
										0
									],
									[
										-17.2,
										0
									],
									[
										-8.5,
										-14.9
									],
									[
										0,
										0
									]
								],
								o: [
									[
										-8.7,
										15
									],
									[
										0,
										0
									],
									[
										-17,
										0
									],
									[
										-8.6,
										-14.9
									],
									[
										0,
										0
									],
									[
										8.5,
										-14.9
									],
									[
										17.1,
										0
									],
									[
										0,
										0
									],
									[
										8.4,
										14.6
									]
								],
								v: [
									[
										203.123,
										154.016
									],
									[
										161.824,
										177.916
									],
									[
										-150.976,
										177.916
									],
									[
										-191.776,
										154.516
									],
									[
										-191.876,
										106.816
									],
									[
										-35.077,
										-164.584
									],
									[
										5.823,
										-188.284
									],
									[
										46.723,
										-164.484
									],
									[
										203.423,
										106.916
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ind: 1,
						ty: "sh",
						ix: 2,
						ks: {
							a: 0,
							k: {
								i: [
									[
										-15.8,
										27.3
									],
									[
										15.6,
										27
									],
									[
										0,
										0
									],
									[
										31.4,
										0
									],
									[
										15.5,
										-27.1
									],
									[
										0,
										0
									],
									[
										-15.8,
										-27.1
									],
									[
										-31.2,
										0
									],
									[
										0,
										0
									]
								],
								o: [
									[
										15.7,
										-27.1
									],
									[
										0,
										0
									],
									[
										-15.5,
										-27.3
									],
									[
										-31.4,
										0
									],
									[
										0,
										0
									],
									[
										-15.6,
										27.3
									],
									[
										15.6,
										26.8
									],
									[
										0,
										0
									],
									[
										31.3,
										0
									]
								],
								v: [
									[
										237.123,
										173.616
									],
									[
										237.324,
										87.216
									],
									[
										80.723,
										-183.984
									],
									[
										5.823,
										-227.484
									],
									[
										-69.077,
										-184.084
									],
									[
										-225.876,
										87.416
									],
									[
										-225.576,
										174.316
									],
									[
										-150.876,
										217.216
									],
									[
										161.923,
										217.216
									]
								],
								c: true
							},
							ix: 2
						},
						nm: "Path 2",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								1,
								0.705882352941,
								0.074509803922,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Group 2",
				np: 3,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			},
			{
				ty: "tm",
				s: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.5
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.5
								],
								y: [
									0
								]
							},
							t: 0,
							s: [
								50
							]
						},
						{
							t: 30,
							s: [
								100
							]
						}
					],
					ix: 1
				},
				e: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							t: 0,
							s: [
								50
							]
						},
						{
							t: 30,
							s: [
								0
							]
						}
					],
					ix: 2
				},
				o: {
					a: 0,
					k: 1,
					ix: 3
				},
				m: 1,
				ix: 2,
				nm: "Trim Paths 1",
				mn: "ADBE Vector Filter - Trim",
				hd: false
			}
		],
		ip: 0,
		op: 300,
		st: 0,
		bm: 0
	}
];
var markers = [
];
var AnimationWarning = {
	v: v,
	fr: fr,
	ip: ip,
	op: op,
	w: w,
	h: h,
	nm: nm,
	ddd: ddd,
	assets: assets,
	layers: layers,
	markers: markers
};

var _excluded$8 = ["opened", "status", "title", "content", "width", "height", "okLabel", "actions", "onOk", "onClose"];
function HubFeedback(_ref) {
  var opened = _ref.opened,
    status = _ref.status,
    title = _ref.title,
    content = _ref.content,
    width = _ref.width,
    height = _ref.height,
    okLabel = _ref.okLabel,
    actions = _ref.actions,
    onOk = _ref.onOk,
    onClose = _ref.onClose,
    props = _objectWithoutProperties(_ref, _excluded$8);
  var t = i18n.useI18nMessage();
  var animation = React__default["default"].useMemo(function () {
    switch (status) {
      case 'success':
        return AnimationSuccess__default["default"];
      case 'warning':
        return AnimationWarning;
      case 'error':
        return AnimationError__default["default"];
      case 'info':
        return AnimationInfo__default["default"];
      default:
        return undefined;
    }
  }, [status]);
  var defaultTitle = React__default["default"].useMemo(function () {
    switch (status) {
      case 'success':
        return t('hub-feedback_title-success');
      case 'warning':
        return t('hub-feedback_title-warning');
      case 'error':
        return t('hub-feedback_title-error');
      default:
        return t('hub-feedback_title-info');
    }
  }, [status]);
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubModal, _extends({}, props, {
    opened: opened,
    width: width || '420px',
    contentHeight: height || '80vh',
    onClose: onClose,
    noCloseBtn: true
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    align: "center",
    gap: "3"
  }, opened && !!animation && /*#__PURE__*/React__default["default"].createElement(atoms.HubAnimation, {
    source: animation,
    width: "64px",
    height: "64px"
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    align: "center",
    gap: "5"
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    align: "center",
    gap: "1"
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "h3"
  }, title || defaultTitle), /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "body1",
    align: "center",
    color: "neutralGrey",
    colorLevel: "700"
  }, content)), actions || /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
    onClick: onOk || onClose
  }, okLabel || t('hub-feedback_done')))));
}

var _excluded$7 = ["header", "gap", "cols", "align", "justify", "contentHeight", "count", "children", "actions", "onSearch"];
var IconOutlineFilter = function IconOutlineFilter(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M9.63 21.611a.75.75 0 0 1-.75-.75v-6.986L2.524 7.249a2.873 2.873 0 0 1 2.07-4.875h14.813a2.869 2.869 0 0 1 2.024 4.905l-6.607 6.596V19.2a.75.75 0 0 1-.488.705l-4.443 1.657a.694.694 0 0 1-.263.05ZM4.594 3.89a1.369 1.369 0 0 0-.986 2.321l6.562 6.829a.75.75 0 0 1 .21.521v6.221l2.944-1.102V13.57a.75.75 0 0 1 .221-.528l6.829-6.81a1.372 1.372 0 0 0-.967-2.344H4.594Z",
    fill: "#083350",
    stroke: "#083350",
    strokeWidth: ".75"
  }));
};
IconOutlineFilter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function HubFilters(_ref) {
  var header = _ref.header,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? '3' : _ref$gap,
    cols = _ref.cols,
    align = _ref.align,
    justify = _ref.justify,
    contentHeight = _ref.contentHeight,
    count = _ref.count,
    children = _ref.children,
    actions = _ref.actions,
    onSearch = _ref.onSearch,
    props = _objectWithoutProperties(_ref, _excluded$7);
  var t = i18n.useI18nMessage();
  var _useResponsive = styles.useResponsive(),
    isMobile = _useResponsive.isMobile;
  var _React$useState = React__default["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showModal = _React$useState2[0],
    setShowModal = _React$useState2[1];
  return isMobile ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(atoms.HubBadge, {
    "float": true,
    content: count,
    rounded: true,
    color: "error",
    colorLevel: "500",
    textColor: "white"
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
    "data-testid": shared.factoryTestId(props, 'show'),
    variant: "icon",
    onClick: function onClick() {
      return setShowModal(true);
    }
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
    icon: IconOutlineFilter
  }))), showModal && /*#__PURE__*/React__default["default"].createElement(atoms.HubModal, {
    opened: true,
    header: header || t('hub-filters_title'),
    minContentHeight: "72vh",
    contentHeight: contentHeight || '92vh',
    actions: actions || /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      "data-testid": shared.factoryTestId(props, 'search'),
      variant: "default",
      full: true,
      onClick: function onClick() {
        setShowModal(false);
        onSearch === null || onSearch === void 0 ? void 0 : onSearch();
      }
    }, t('hub-filters_btn-search')),
    onClose: function onClose() {
      return setShowModal(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    gap: gap,
    align: align,
    justify: justify
  }, children))) : /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    row: true,
    cols: cols,
    gap: gap,
    align: align,
    justify: justify,
    responsive: "md"
  }, children);
}

var InputColor = styled__default["default"].input.attrs({
  type: 'color'
}).withConfig({
  displayName: "InputColor",
  componentId: "sc-rxnw4n-0"
})(["background-color:transparent;border:none;width:", ";border-radius:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[6];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[2];
});

var _excluded$6 = ["id", "defaultValue", "value", "onChange", "onLazyChange", "children"];
var lazyInput = shared.debounce(1000);

// eslint-disable-next-line @typescript-eslint/no-empty-interface

function HubInputColor(_ref) {
  var id = _ref.id,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    onLazyChange = _ref.onLazyChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$6);
  function handleChange(v) {
    if (props.disabled) return;
    if (onChange) {
      onChange(v);
    }
    if (onLazyChange) {
      lazyInput(function () {
        return onLazyChange(v);
      });
    }
  }
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubTextField, _extends({
    id: "hub-input-color-".concat(id),
    "data-testid": shared.factoryTestId(props, 'input')
  }, props, {
    defaultValue: defaultValue,
    value: value,
    onChange: onChange,
    onLazyChange: onLazyChange,
    right: /*#__PURE__*/React__default["default"].createElement(InputColor, {
      value: defaultValue || value,
      onChange: function onChange(e) {
        var _e$target;
        return handleChange === null || handleChange === void 0 ? void 0 : handleChange((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
      }
    })
  }), children);
}

var _excluded$5 = ["opened", "title", "content", "status", "message", "width", "disabled", "loading", "labelCancel", "labelDone", "onDone", "onClose", "onCloseMsg"];
var IconOutlineApprove$1 = function IconOutlineApprove(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 1.41 0l5-5a1.002 1.002 0 1 0-1.41-1.42ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z",
    fill: "#083350"
  }));
};
IconOutlineApprove$1.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconOutlineError$1 = function IconOutlineError(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.299 8.702a.89.89 0 0 0-1.263 0L12 10.746 9.964 8.702a.893.893 0 0 0-1.262 1.262L10.746 12l-2.044 2.036a.889.889 0 0 0 0 1.263.89.89 0 0 0 1.262 0L12 13.254l2.036 2.045a.89.89 0 0 0 1.457-.29.89.89 0 0 0-.194-.973L13.254 12l2.045-2.036a.89.89 0 0 0 0-1.262Zm2.987-2.988A8.891 8.891 0 1 0 5.714 18.286 8.892 8.892 0 0 0 21 12.032a8.893 8.893 0 0 0-2.714-6.318Zm-1.254 11.318A7.113 7.113 0 1 1 19.112 12a7.068 7.068 0 0 1-2.08 5.032Z",
    fill: "#083350"
  }));
};
IconOutlineError$1.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconOutlineExclamationMark$1 = function IconOutlineExclamationMark(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
    fill: "#083350"
  }));
};
IconOutlineExclamationMark$1.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconOutlineHelp$1 = function IconOutlineHelp(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.29 15.29a1.573 1.573 0 0 0-.12.15.762.762 0 0 0-.09.18.643.643 0 0 0-.06.18 1.362 1.362 0 0 0 0 .2.84.84 0 0 0 .08.38.9.9 0 0 0 .54.54.94.94 0 0 0 .76 0 .9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-1.71-.71ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 1 1 0 2 1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7Z",
    fill: "#083350"
  }));
};
IconOutlineHelp$1.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function HubModalAlert(_ref) {
  var opened = _ref.opened,
    title = _ref.title,
    content = _ref.content,
    status = _ref.status,
    message = _ref.message,
    width = _ref.width,
    disabled = _ref.disabled,
    loading = _ref.loading,
    labelCancel = _ref.labelCancel,
    labelDone = _ref.labelDone,
    onDone = _ref.onDone,
    onClose = _ref.onClose,
    onCloseMsg = _ref.onCloseMsg,
    props = _objectWithoutProperties(_ref, _excluded$5);
  var icon = React__default["default"].useMemo(function () {
    switch (status) {
      case 'success':
        return IconOutlineApprove$1;
      case 'warning':
        return IconOutlineExclamationMark$1;
      case 'error':
        return IconOutlineError$1;
      case 'info':
        return IconOutlineHelp$1;
    }
  }, [status]);
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubModal, _extends({}, props, {
    opened: opened,
    width: width || '420px',
    onClose: onClose,
    noCloseBtn: true,
    actions: onClose || onDone ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, onClose && /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      "data-testid": shared.factoryTestId(props, 'close'),
      variant: "ghost",
      full: true,
      onClick: onClose
    }, labelCancel), onDone && /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      "data-testid": shared.factoryTestId(props, 'done'),
      full: true,
      color: status,
      disabled: loading || disabled,
      loading: loading,
      onClick: onDone
    }, labelDone)) : undefined
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    gap: "3",
    align: "center",
    filled: true
  }, title && /*#__PURE__*/React__default["default"].createElement(atoms.HubText, {
    typo: "h4",
    weight: "500",
    align: "center"
  }, title), content, message && /*#__PURE__*/React__default["default"].createElement(atoms.HubAlert, {
    "data-testid": shared.factoryTestId(props, 'alert'),
    color: status,
    icon: icon && /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
      icon: icon,
      color: status,
      size: "sm"
    }),
    title: message,
    inline: true,
    onClose: onCloseMsg
  })));
}

var _excluded$4 = ["labelCancel", "labelDone", "onDone", "onClose", "children"];
function HubModalRight(_ref) {
  var labelCancel = _ref.labelCancel,
    labelDone = _ref.labelDone,
    onDone = _ref.onDone,
    onClose = _ref.onClose,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$4);
  var t = i18n.useI18nMessage();
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubModal, _extends({
    header: t('hub-modal-right_title'),
    position: "right",
    radius: "0",
    width: "300px",
    minContentHeight: "100vh",
    onClose: onClose,
    actions: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, onDone && /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      variant: "outline",
      full: true,
      onClick: onClose
    }, labelCancel || t('hub-modal-right_close')), /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      full: true,
      onClick: onDone || onClose
    }, labelDone || t('hub-modal-right_done')))
  }, props), children);
}

var DDI = [{
  label: 'Brazil (Brasil)',
  flag: '🇧🇷',
  code: '55'
}, {
  label: 'United States (EUA)',
  flag: '🇺🇸',
  code: '1'
}, {
  label: 'Canada',
  flag: '🇨🇦',
  code: '1'
}, {
  label: 'Australia',
  flag: '🇦🇺',
  code: '61'
}, {
  label: 'Bolivia',
  flag: '🇧🇴',
  code: '591'
}, {
  label: 'Chile',
  flag: '🇨🇱',
  code: '56'
}, {
  label: 'China',
  flag: '🇨🇳',
  code: '86'
}, {
  label: 'Japan (Japão)',
  flag: '🇯🇵',
  code: '81'
}, {
  label: 'Portugal',
  flag: '🇵🇹',
  code: '351'
}, {
  label: 'United Kingdom (Reino Unido)',
  flag: '🇬🇧',
  code: '44'
}, {
  label: 'Uruguay (Uruguai)',
  flag: '🇺🇾',
  code: '598'
}, {
  label: 'Paraguay (Paraguai)',
  flag: '🇵🇾',
  code: '595'
}, {
  label: 'Afghanistan',
  flag: '🇦🇫',
  code: '93'
}, {
  label: 'Åland Islands',
  flag: '🇦🇽',
  code: '358'
}, {
  label: 'Albania',
  flag: '🇦🇱',
  code: '355'
}, {
  label: 'Algeria',
  flag: '🇩🇿',
  code: '213'
}, {
  label: 'American Samoa',
  flag: '🇦🇸',
  code: '1684'
}, {
  label: 'Andorra',
  flag: '🇦🇩',
  code: '376'
}, {
  label: 'Angola',
  flag: '🇦🇴',
  code: '244'
}, {
  label: 'Anguilla',
  flag: '🇦🇮',
  code: '1264'
}, {
  label: 'Antarctica',
  flag: '🇦🇶',
  code: '672'
}, {
  label: 'Antigua and Barbuda',
  flag: '🇦🇬',
  code: '1268'
}, {
  label: 'Argentina',
  flag: '🇦🇷',
  code: '54'
}, {
  label: 'Armenia',
  flag: '🇦🇲',
  code: '374'
}, {
  label: 'Aruba',
  flag: '🇦🇼',
  code: '297'
}, {
  label: 'Austria',
  flag: '🇦🇹',
  code: '43'
}, {
  label: 'Azerbaijan',
  flag: '🇦🇿',
  code: '994'
}, {
  label: 'Bahamas',
  flag: '🇧🇸',
  code: '1242'
}, {
  label: 'Bahrain',
  flag: '🇧🇭',
  code: '973'
}, {
  label: 'Bangladesh',
  flag: '🇧🇩',
  code: '880'
}, {
  label: 'Barbados',
  flag: '🇧🇧',
  code: '1246'
}, {
  label: 'Belarus',
  flag: '🇧🇾',
  code: '375'
}, {
  label: 'Belgium',
  flag: '🇧🇪',
  code: '32'
}, {
  label: 'Belize',
  flag: '🇧🇿',
  code: '501'
}, {
  label: 'Benin',
  flag: '🇧🇯',
  code: '229'
}, {
  label: 'Bermuda',
  flag: '🇧🇲',
  code: '1441'
}, {
  label: 'Bhutan',
  flag: '🇧🇹',
  code: '975'
}, {
  label: 'Bosnia and Herzegovina',
  flag: '🇧🇦',
  code: '387'
}, {
  label: 'Botswana',
  flag: '🇧🇼',
  code: '267'
}, {
  label: 'Bouvet Island',
  flag: '🇧🇻',
  code: '47'
}, {
  label: 'British Indian Ocean Territory',
  flag: '🇮🇴',
  code: '246'
}, {
  label: 'Brunei Darussalam',
  flag: '🇧🇳',
  code: '673'
}, {
  label: 'Bulgaria',
  flag: '🇧🇬',
  code: '359'
}, {
  label: 'Burkina Faso',
  flag: '🇧🇫',
  code: '226'
}, {
  label: 'Burundi',
  flag: '🇧🇮',
  code: '257'
}, {
  label: 'Cambodia',
  flag: '🇰🇭',
  code: '855'
}, {
  label: 'Cameroon',
  flag: '🇨🇲',
  code: '237'
}, {
  label: 'Cape Verde',
  flag: '🇨🇻',
  code: '238'
}, {
  label: 'Cayman Islands',
  flag: '🇰🇾',
  code: '345'
}, {
  label: 'Central African Republic',
  flag: '🇨🇫',
  code: '236'
}, {
  label: 'Chad',
  flag: '🇹🇩',
  code: '235'
}, {
  label: 'Christmas Island',
  flag: '🇨🇽',
  code: '61'
}, {
  label: 'Cocos (Keeling) Islands',
  flag: '🇨🇨',
  code: '61'
}, {
  label: 'Colombia',
  flag: '🇨🇴',
  code: '57'
}, {
  label: 'Comoros',
  flag: '🇰🇲',
  code: '269'
}, {
  label: 'Congo',
  flag: '🇨🇬',
  code: '242'
}, {
  label: 'Cook Islands',
  flag: '🇨🇰',
  code: '682'
}, {
  label: 'Costa Rica',
  flag: '🇨🇷',
  code: '506'
}, {
  label: "Cote d'Ivoire",
  flag: '🇨🇮',
  code: '225'
}, {
  label: 'Croatia',
  flag: '🇭🇷',
  code: '385'
}, {
  label: 'Cuba',
  flag: '🇨🇺',
  code: '53'
}, {
  label: 'Cyprus',
  flag: '🇨🇾',
  code: '357'
}, {
  label: 'Czech Republic',
  flag: '🇨🇿',
  code: '420'
}, {
  label: 'Denmark',
  flag: '🇩🇰',
  code: '45'
}, {
  label: 'Djibouti',
  flag: '🇩🇯',
  code: '253'
}, {
  label: 'Dominica',
  flag: '🇩🇲',
  code: '1767'
}, {
  label: 'Dominican Republic',
  flag: '🇩🇴',
  code: '1849'
}, {
  label: 'Ecuador',
  flag: '🇪🇨',
  code: '593'
}, {
  label: 'Egypt',
  flag: '🇪🇬',
  code: '20'
}, {
  label: 'El Salvador',
  flag: '🇸🇻',
  code: '503'
}, {
  label: 'Equatorial Guinea',
  flag: '🇬🇶',
  code: '240'
}, {
  label: 'Eritrea',
  flag: '🇪🇷',
  code: '291'
}, {
  label: 'Estonia',
  flag: '🇪🇪',
  code: '372'
}, {
  label: 'Ethiopia',
  flag: '🇪🇹',
  code: '251'
}, {
  label: 'Falkland Islands (Malvinas)',
  flag: '🇫🇰',
  code: '500'
}, {
  label: 'Faroe Islands',
  flag: '🇫🇴',
  code: '298'
}, {
  label: 'Fiji',
  flag: '🇫🇯',
  code: '679'
}, {
  label: 'Finland',
  flag: '🇫🇮',
  code: '358'
}, {
  label: 'France',
  flag: '🇫🇷',
  code: '33'
}, {
  label: 'French Guiana',
  flag: '🇬🇫',
  code: '594'
}, {
  label: 'French Polynesia',
  flag: '🇵🇫',
  code: '689'
}, {
  label: 'French Southern Territories',
  flag: '🇹🇫',
  code: '262'
}, {
  label: 'Gabon',
  flag: '🇬🇦',
  code: '241'
}, {
  label: 'Gambia',
  flag: '🇬🇲',
  code: '220'
}, {
  label: 'Georgia',
  flag: '🇬🇪',
  code: '995'
}, {
  label: 'Germany',
  flag: '🇩🇪',
  code: '49'
}, {
  label: 'Ghana',
  flag: '🇬🇭',
  code: '233'
}, {
  label: 'Gibraltar',
  flag: '🇬🇮',
  code: '350'
}, {
  label: 'Greece',
  flag: '🇬🇷',
  code: '30'
}, {
  label: 'Greenland',
  flag: '🇬🇱',
  code: '299'
}, {
  label: 'Grenada',
  flag: '🇬🇩',
  code: '1473'
}, {
  label: 'Guadeloupe',
  flag: '🇬🇵',
  code: '590'
}, {
  label: 'Guam',
  flag: '🇬🇺',
  code: '1671'
}, {
  label: 'Guatemala',
  flag: '🇬🇹',
  code: '502'
}, {
  label: 'Guernsey',
  flag: '🇬🇬',
  code: '44'
}, {
  label: 'Guinea-Bissau',
  flag: '🇬🇼',
  code: '245'
}, {
  label: 'Guinea',
  flag: '🇬🇳',
  code: '224'
}, {
  label: 'Guyana',
  flag: '🇬🇾',
  code: '592'
}, {
  label: 'Haiti',
  flag: '🇭🇹',
  code: '509'
}, {
  label: 'Heard Island and Mcdonald Islands',
  flag: '🇭🇲',
  code: '672'
}, {
  label: 'Holy See (Vatican City State)',
  flag: '🇻🇦',
  code: '379'
}, {
  label: 'Honduras',
  flag: '🇭🇳',
  code: '504'
}, {
  label: 'Hong Kong',
  flag: '🇭🇰',
  code: '852'
}, {
  label: 'Hungary',
  flag: '🇭🇺',
  code: '36'
}, {
  label: 'Iceland',
  flag: '🇮🇸',
  code: '354'
}, {
  label: 'India',
  flag: '🇮🇳',
  code: '91'
}, {
  label: 'Indonesia',
  flag: '🇮🇩',
  code: '62'
}, {
  label: 'Iran, Islamic Republic of Persian Gulf',
  flag: '🇮🇷',
  code: '98'
}, {
  label: 'Iraq',
  flag: '🇮🇶',
  code: '964'
}, {
  label: 'Ireland',
  flag: '🇮🇪',
  code: '353'
}, {
  label: 'Isle of Man',
  flag: '🇮🇲',
  code: '44'
}, {
  label: 'Israel',
  flag: '🇮🇱',
  code: '972'
}, {
  label: 'Italy',
  flag: '🇮🇹',
  code: '39'
}, {
  label: 'Jamaica',
  flag: '🇯🇲',
  code: '1876'
}, {
  label: 'Jersey',
  flag: '🇯🇪',
  code: '44'
}, {
  label: 'Jordan',
  flag: '🇯🇴',
  code: '962'
}, {
  label: 'Kazakhstan',
  flag: '🇰🇿',
  code: '7'
}, {
  label: 'Kenya',
  flag: '🇰🇪',
  code: '254'
}, {
  label: 'Kiribati',
  flag: '🇰🇮',
  code: '686'
}, {
  label: 'Korea, Republic of South Korea',
  flag: '🇰🇷',
  code: '82'
}, {
  label: "Korea, Democratic People's Republic of Korea",
  flag: '🇰🇵',
  code: '850'
}, {
  label: 'Kosovo',
  flag: '🇽🇰',
  code: '383'
}, {
  label: 'Kuwait',
  flag: '🇰🇼',
  code: '965'
}, {
  label: 'Kyrgyzstan',
  flag: '🇰🇬',
  code: '996'
}, {
  label: 'Laos',
  flag: '🇱🇦',
  code: '856'
}, {
  label: 'Latvia',
  flag: '🇱🇻',
  code: '371'
}, {
  label: 'Lebanon',
  flag: '🇱🇧',
  code: '961'
}, {
  label: 'Lesotho',
  flag: '🇱🇸',
  code: '266'
}, {
  label: 'Liberia',
  flag: '🇱🇷',
  code: '231'
}, {
  label: 'Libyan Arab Jamahiriya',
  flag: '🇱🇾',
  code: '218'
}, {
  label: 'Liechtenstein',
  flag: '🇱🇮',
  code: '423'
}, {
  label: 'Lithuania',
  flag: '🇱🇹',
  code: '370'
}, {
  label: 'Luxembourg',
  flag: '🇱🇺',
  code: '352'
}, {
  label: 'Macao',
  flag: '🇲🇴',
  code: '853'
}, {
  label: 'Madagascar',
  flag: '🇲🇬',
  code: '261'
}, {
  label: 'Malawi',
  flag: '🇲🇼',
  code: '265'
}, {
  label: 'Malaysia',
  flag: '🇲🇾',
  code: '60'
}, {
  label: 'Maldives',
  flag: '🇲🇻',
  code: '960'
}, {
  label: 'Mali',
  flag: '🇲🇱',
  code: '223'
}, {
  label: 'Malta',
  flag: '🇲🇹',
  code: '356'
}, {
  label: 'Marshall Islands',
  flag: '🇲🇭',
  code: '692'
}, {
  label: 'Martinique',
  flag: '🇲🇶',
  code: '596'
}, {
  label: 'Mauritania',
  flag: '🇲🇷',
  code: '222'
}, {
  label: 'Mauritius',
  flag: '🇲🇺',
  code: '230'
}, {
  label: 'Mayotte',
  flag: '🇾🇹',
  code: '262'
}, {
  label: 'Mexico',
  flag: '🇲🇽',
  code: '52'
}, {
  label: 'Micronesia',
  flag: '🇫🇲',
  code: '691'
}, {
  label: 'Moldova',
  flag: '🇲🇩',
  code: '373'
}, {
  label: 'Monaco',
  flag: '🇲🇨',
  code: '377'
}, {
  label: 'Mongolia',
  flag: '🇲🇳',
  code: '976'
}, {
  label: 'Montenegro',
  flag: '🇲🇪',
  code: '382'
}, {
  label: 'Montserrat',
  flag: '🇲🇸',
  code: '1664'
}, {
  label: 'Morocco',
  flag: '🇲🇦',
  code: '212'
}, {
  label: 'Mozambique',
  flag: '🇲🇿',
  code: '258'
}, {
  label: 'Myanmar',
  flag: '🇲🇲',
  code: '95'
}, {
  label: 'Namibia',
  flag: '🇳🇦',
  code: '264'
}, {
  label: 'Nauru',
  flag: '🇳🇷',
  code: '674'
}, {
  label: 'Nepal',
  flag: '🇳🇵',
  code: '977'
}, {
  label: 'Netherlands Antilles',
  flag: '',
  code: '599'
}, {
  label: 'Netherlands',
  flag: '🇳🇱',
  code: '31'
}, {
  label: 'New Caledonia',
  flag: '🇳🇨',
  code: '687'
}, {
  label: 'New Zealand',
  flag: '🇳🇿',
  code: '64'
}, {
  label: 'Nicaragua',
  flag: '🇳🇮',
  code: '505'
}, {
  label: 'Niger',
  flag: '🇳🇪',
  code: '227'
}, {
  label: 'Nigeria',
  flag: '🇳🇬',
  code: '234'
}, {
  label: 'Niue',
  flag: '🇳🇺',
  code: '683'
}, {
  label: 'Norfolk Island',
  flag: '🇳🇫',
  code: '672'
}, {
  label: 'North Macedonia',
  flag: '🇲🇰',
  code: '389'
}, {
  label: 'Northern Mariana Islands',
  flag: '🇲🇵',
  code: '1670'
}, {
  label: 'Norway',
  flag: '🇳🇴',
  code: '47'
}, {
  label: 'Oman',
  flag: '🇴🇲',
  code: '968'
}, {
  label: 'Pakistan',
  flag: '🇵🇰',
  code: '92'
}, {
  label: 'Palau',
  flag: '🇵🇼',
  code: '680'
}, {
  label: 'Palestinian Territory, Occupied',
  flag: '🇵🇸',
  code: '970'
}, {
  label: 'Panama',
  flag: '🇵🇦',
  code: '507'
}, {
  label: 'Papua New Guinea',
  flag: '🇵🇬',
  code: '675'
}, {
  label: 'Peru',
  flag: '🇵🇪',
  code: '51'
}, {
  label: 'Philippines',
  flag: '🇵🇭',
  code: '63'
}, {
  label: 'Pitcairn',
  flag: '🇵🇳',
  code: '64'
}, {
  label: 'Poland',
  flag: '🇵🇱',
  code: '48'
}, {
  label: 'Puerto Rico',
  flag: '🇵🇷',
  code: '1939'
}, {
  label: 'Qatar',
  flag: '🇶🇦',
  code: '974'
}, {
  label: 'Reunion',
  flag: '🇷🇪',
  code: '262'
}, {
  label: 'Romania',
  flag: '🇷🇴',
  code: '40'
}, {
  label: 'Russia',
  flag: '🇷🇺',
  code: '7'
}, {
  label: 'Rwanda',
  flag: '🇷🇼',
  code: '250'
}, {
  label: 'Saint Barthelemy',
  flag: '🇧🇱',
  code: '590'
}, {
  label: 'Saint Helena',
  flag: '🇸🇭',
  code: '290'
}, {
  label: 'Saint Kitts and Nevis',
  flag: '🇰🇳',
  code: '1869'
}, {
  label: 'Saint Lucia',
  flag: '🇱🇨',
  code: '1758'
}, {
  label: 'Saint Martin',
  flag: '🇲🇫',
  code: '590'
}, {
  label: 'Saint Pierre and Miquelon',
  flag: '🇵🇲',
  code: '508'
}, {
  label: 'Saint Vincent and the Grenadines',
  flag: '🇻🇨',
  code: '1784'
}, {
  label: 'Samoa',
  flag: '🇼🇸',
  code: '685'
}, {
  label: 'San Marino',
  flag: '🇸🇲',
  code: '378'
}, {
  label: 'Sao Tome and Principe',
  flag: '🇸🇹',
  code: '239'
}, {
  label: 'Saudi Arabia',
  flag: '🇸🇦',
  code: '966'
}, {
  label: 'Senegal',
  flag: '🇸🇳',
  code: '221'
}, {
  label: 'Serbia',
  flag: '🇷🇸',
  code: '381'
}, {
  label: 'Seychelles',
  flag: '🇸🇨',
  code: '248'
}, {
  label: 'Sierra Leone',
  flag: '🇸🇱',
  code: '232'
}, {
  label: 'Singapore',
  flag: '🇸🇬',
  code: '65'
}, {
  label: 'Slovakia',
  flag: '🇸🇰',
  code: '421'
}, {
  label: 'Slovenia',
  flag: '🇸🇮',
  code: '386'
}, {
  label: 'Solomon Islands',
  flag: '🇸🇧',
  code: '677'
}, {
  label: 'Somalia',
  flag: '🇸🇴',
  code: '252'
}, {
  label: 'South Africa',
  flag: '🇿🇦',
  code: '27'
}, {
  label: 'South Georgia and the South Sandwich Islands',
  flag: '🇬🇸',
  code: '500'
}, {
  label: 'South Sudan',
  flag: '🇸🇸',
  code: '211'
}, {
  label: 'Spain',
  flag: '🇪🇸',
  code: '34'
}, {
  label: 'Sri Lanka',
  flag: '🇱🇰',
  code: '94'
}, {
  label: 'Sudan',
  flag: '🇸🇩',
  code: '249'
}, {
  label: 'Suriname',
  flag: '🇸🇷',
  code: '597'
}, {
  label: 'Svalbard and Jan Mayen',
  flag: '🇸🇯',
  code: '47'
}, {
  label: 'Swaziland',
  flag: '🇸🇿',
  code: '268'
}, {
  label: 'Sweden',
  flag: '🇸🇪',
  code: '46'
}, {
  label: 'Switzerland',
  flag: '🇨🇭',
  code: '41'
}, {
  label: 'Syrian Arab Republic',
  flag: '🇸🇾',
  code: '963'
}, {
  label: 'Taiwan',
  flag: '🇹🇼',
  code: '886'
}, {
  label: 'Tajikistan',
  flag: '🇹🇯',
  code: '992'
}, {
  label: 'Tanzania, United Republic of Tanzania',
  flag: '🇹🇿',
  code: '255'
}, {
  label: 'Thailand',
  flag: '🇹🇭',
  code: '66'
}, {
  label: 'The Democratic Republic of the Congo',
  flag: '🇨🇩',
  code: '243'
}, {
  label: 'Timor-Leste',
  flag: '🇹🇱',
  code: '670'
}, {
  label: 'Togo',
  flag: '🇹🇬',
  code: '228'
}, {
  label: 'Tokelau',
  flag: '🇹🇰',
  code: '690'
}, {
  label: 'Tonga',
  flag: '🇹🇴',
  code: '676'
}, {
  label: 'Trinidad and Tobago',
  flag: '🇹🇹',
  code: '1868'
}, {
  label: 'Tunisia',
  flag: '🇹🇳',
  code: '216'
}, {
  label: 'Türkiye',
  flag: '🇹🇷',
  code: '90'
}, {
  label: 'Turkmenistan',
  flag: '🇹🇲',
  code: '993'
}, {
  label: 'Turks and Caicos Islands',
  flag: '🇹🇨',
  code: '1649'
}, {
  label: 'Tuvalu',
  flag: '🇹🇻',
  code: '688'
}, {
  label: 'Uganda',
  flag: '🇺🇬',
  code: '256'
}, {
  label: 'Ukraine',
  flag: '🇺🇦',
  code: '380'
}, {
  label: 'United Arab Emirates',
  flag: '🇦🇪',
  code: '971'
}, {
  label: 'Uzbekistan',
  flag: '🇺🇿',
  code: '998'
}, {
  label: 'Vanuatu',
  flag: '🇻🇺',
  code: '678'
}, {
  label: 'Venezuela',
  flag: '🇻🇪',
  code: '58'
}, {
  label: 'Vietnam',
  flag: '🇻🇳',
  code: '84'
}, {
  label: 'Virgin Islands, British',
  flag: '🇻🇬',
  code: '1284'
}, {
  label: 'Virgin Islands, U.S.',
  flag: '🇻🇮',
  code: '1340'
}, {
  label: 'Wallis and Futuna',
  flag: '🇼🇫',
  code: '681'
}, {
  label: 'Yemen',
  flag: '🇾🇪',
  code: '967'
}, {
  label: 'Zambia',
  flag: '🇿🇲',
  code: '260'
}, {
  label: 'Zimbabwe',
  flag: '🇿🇼',
  code: '263'
}];

var _excluded$3 = ["id", "ddd", "ddi", "phone", "disabled", "onChange", "children"];
var Trigger = styled__default["default"].div.withConfig({
  displayName: "Trigger",
  componentId: "sc-1aoutnk-0"
})(["font-family:'Flags';width:", ";min-width:", ";min-height:", ";height:100%;display:flex;align-items:center;justify-content:center;background-color:", ";border-radius:", ";cursor:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[7];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[7];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[7];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.neutralGrey[100];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spaces[1];
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});
var Flag = styled__default["default"].div.withConfig({
  displayName: "Flag",
  componentId: "sc-1aoutnk-1"
})(["font-family:'Flags';"]);
var defaultSource = {
  ddd: '',
  ddi: '55',
  phone: ''
};
function countriesForRows(items, selected) {
  return items.map(function (item) {
    return _objectSpread2(_objectSpread2({}, item), {}, {
      configs: selected === item.code ? {
        color: 'neutralGrey',
        colorLevel: '100'
      } : undefined
    });
  });
}
function HubPhone(_ref7) {
  var id = _ref7.id,
    ddd = _ref7.ddd,
    ddi = _ref7.ddi,
    phone = _ref7.phone,
    disabled = _ref7.disabled,
    onChange = _ref7.onChange,
    children = _ref7.children,
    props = _objectWithoutProperties(_ref7, _excluded$3);
  var t = i18n.useI18nMessage();
  var _React$useState = React__default["default"].useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showModal = _React$useState2[0],
    setShowModal = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState({
      ddd: ddd,
      ddi: ddi || defaultSource.ddi,
      phone: phone
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    source = _React$useState4[0],
    setSource = _React$useState4[1];
  var _React$useState5 = React__default["default"].useState(DDI),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    countries = _React$useState6[0],
    setCountries = _React$useState6[1];
  var _React$useState7 = React__default["default"].useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    search = _React$useState8[0],
    setSearch = _React$useState8[1];
  var label = React__default["default"].useMemo(function () {
    return source ? shared.phoneFormatter(source.phone, source.ddd) : '';
  }, [source]);
  var currentCountry = React__default["default"].useMemo(function () {
    return DDI.find(function (x) {
      return x.code === source.ddi;
    });
  }, [source.ddi]);
  var countriesRows = React__default["default"].useMemo(function () {
    return countriesForRows(countries, source.ddi);
  }, [countries, source.ddi]);
  var handleChange = React__default["default"].useCallback(function (v) {
    var value = _objectSpread2(_objectSpread2({}, defaultSource), {}, {
      ddi: source.ddi
    });
    if (!v) {
      setSource(value);
      onChange === null || onChange === void 0 ? void 0 : onChange(value);
      return;
    }
    var nums = shared.numberFormatter(v);
    if (value.ddi === '55') {
      value.ddd = nums.substring(0, 2);
      value.phone = nums.substring(2);
    } else {
      value.phone = nums;
    }
    setSource(value);
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [source, onChange]);
  var handleSearch = React__default["default"].useCallback(function (v) {
    setSearch(v);
    if (v) {
      setCountries(DDI.filter(function (x) {
        return "".concat(x.label, ";").concat(x.code).toLowerCase().includes(String(v).toLowerCase());
      }));
    } else {
      setCountries(DDI);
    }
  }, [countries]);
  var handleSelectCountry = React__default["default"].useCallback(function (v) {
    var value = _objectSpread2(_objectSpread2({}, source), {}, {
      ddi: v.code
    });
    setSource(value);
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
    setShowModal(false);
  }, [source]);
  var countriesColumns = [[{
    key: 'flag',
    width: '36px',
    render: function render(_ref8) {
      var item = _ref8.item;
      return /*#__PURE__*/React__default["default"].createElement(Flag, null, item.flag);
    }
  }, {
    key: 'label',
    align: 'start'
  }, {
    key: 'code',
    align: 'end',
    width: '120px',
    render: function render(_ref9) {
      var item = _ref9.item;
      return "+".concat(item.code);
    }
  }]];
  React__default["default"].useEffect(function () {
    setSource({
      ddd: ddd,
      ddi: ddi || defaultSource.ddi,
      phone: phone
    });
  }, [ddd, ddi, phone]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(atoms.HubTextField, _extends({}, props, {
    id: "hub-phone-number-".concat(id),
    pad: ['0', '2', '0', '0'],
    disabled: disabled,
    value: label,
    onChange: handleChange,
    left: /*#__PURE__*/React__default["default"].createElement(Trigger, {
      title: currentCountry === null || currentCountry === void 0 ? void 0 : currentCountry.label,
      onClick: function onClick() {
        return !disabled && setShowModal(true);
      },
      disabled: disabled
    }, currentCountry === null || currentCountry === void 0 ? void 0 : currentCountry.flag)
  }), children), /*#__PURE__*/React__default["default"].createElement(atoms.HubModal, {
    opened: showModal,
    header: t('hub-phone-modal-title'),
    onClose: function onClose() {
      return setShowModal(false);
    },
    width: "400px",
    pad: ['0', '3', '3', '3']
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    gap: "2"
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubTextField, {
    id: "hub-phone-search-".concat(id),
    placeholder: t('hub-phone-modal-search'),
    value: search,
    onChange: handleSearch,
    clearable: true
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubTable, {
    columns: countriesColumns,
    data: countriesRows,
    configs: {
      headless: true
    },
    height: "300px",
    onClickRow: handleSelectCountry
  }))));
}

var _excluded$2 = ["status", "message", "timeout", "onCloseMsg"];
var IconOutlineApprove = function IconOutlineApprove(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m14.72 8.79-4.29 4.3-1.65-1.65a1 1 0 1 0-1.41 1.41l2.35 2.36a1 1 0 0 0 1.41 0l5-5a1.002 1.002 0 1 0-1.41-1.42ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z",
    fill: "#083350"
  }));
};
IconOutlineApprove.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconOutlineError = function IconOutlineError(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.299 8.702a.89.89 0 0 0-1.263 0L12 10.746 9.964 8.702a.893.893 0 0 0-1.262 1.262L10.746 12l-2.044 2.036a.889.889 0 0 0 0 1.263.89.89 0 0 0 1.262 0L12 13.254l2.036 2.045a.89.89 0 0 0 1.457-.29.89.89 0 0 0-.194-.973L13.254 12l2.045-2.036a.89.89 0 0 0 0-1.262Zm2.987-2.988A8.891 8.891 0 1 0 5.714 18.286 8.892 8.892 0 0 0 21 12.032a8.893 8.893 0 0 0-2.714-6.318Zm-1.254 11.318A7.113 7.113 0 1 1 19.112 12a7.068 7.068 0 0 1-2.08 5.032Z",
    fill: "#083350"
  }));
};
IconOutlineError.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconOutlineExclamationMark = function IconOutlineExclamationMark(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
    fill: "#083350"
  }));
};
IconOutlineExclamationMark.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconOutlineHelp = function IconOutlineHelp(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11.29 15.29a1.573 1.573 0 0 0-.12.15.762.762 0 0 0-.09.18.643.643 0 0 0-.06.18 1.362 1.362 0 0 0 0 .2.84.84 0 0 0 .08.38.9.9 0 0 0 .54.54.94.94 0 0 0 .76 0 .9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-1.71-.71ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Zm0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 1 1 0 2 1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7Z",
    fill: "#083350"
  }));
};
IconOutlineHelp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function HubStatusAlert(_ref) {
  var status = _ref.status,
    message = _ref.message,
    timeout = _ref.timeout,
    onCloseMsg = _ref.onCloseMsg,
    props = _objectWithoutProperties(_ref, _excluded$2);
  var _React$useState = React__default["default"].useState(message),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    source = _React$useState2[0],
    setSource = _React$useState2[1];
  var icon = React__default["default"].useMemo(function () {
    switch (status) {
      case 'success':
        return IconOutlineApprove;
      case 'warning':
        return IconOutlineExclamationMark;
      case 'error':
        return IconOutlineError;
      case 'info':
        return IconOutlineHelp;
    }
  }, [status]);
  React__default["default"].useEffect(function () {
    setSource(message);
    if (message && timeout && timeout > 0) {
      setTimeout(function () {
        return setSource(undefined);
      }, timeout);
    }
  }, [message]);
  return source ? /*#__PURE__*/React__default["default"].createElement(atoms.HubAlert, _extends({}, props, {
    "data-testid": shared.factoryTestId(props, 'alert'),
    color: status,
    icon: icon && /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
      icon: icon,
      color: status,
      size: "sm"
    }),
    title: source,
    inline: true,
    onClose: onCloseMsg
  })) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
}

var _excluded$1 = ["id", "value", "onChange", "children"];
var IconOutlineDownArrow = function IconOutlineDownArrow(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a.999.999 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z",
    fill: "#083350"
  }));
};
IconOutlineDownArrow.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconOutlineUpArrow = function IconOutlineUpArrow(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "m17 13.41-4.29-4.24a1.001 1.001 0 0 0-1.42 0l-4.24 4.24a1 1 0 1 0 1.41 1.42L12 11.29l3.54 3.54a1 1 0 0 0 1.41 0 .999.999 0 0 0 .05-1.42Z",
    fill: "#083350"
  }));
};
IconOutlineUpArrow.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var lazyDigitavel = shared.debounce(1000);
var lazyUpDown = shared.debounce(500);
function factoryDate(time) {
  if (!time) return '';
  return "".concat(shared.dateISO(new Date()), "T").concat(time);
}
function HubTime(_ref) {
  var id = _ref.id,
    value = _ref.value,
    onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var f = i18n.useI18nFormatter();
  var _React$useState = React__default["default"].useState(factoryDate(value)),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    source = _React$useState2[0],
    setSource = _React$useState2[1];
  var label = React__default["default"].useMemo(function () {
    return source ? f.hourFormatter(source) : '';
  }, [source]);
  var handleChange = React__default["default"].useCallback(function (v) {
    lazyDigitavel(function () {
      if (!v) {
        setSource('');
        onChange === null || onChange === void 0 ? void 0 : onChange('');
        return;
      }
      try {
        var _v$split = v.split(':'),
          _v$split2 = _slicedToArray(_v$split, 2),
          h = _v$split2[0],
          m = _v$split2[1];
        if (!m) {
          m = h.substring(h.length - 2, h.length);
          h = h.substring(h.length - 4, h.length - 2);
          if (!h) {
            h = m;
            m = '0';
          }
        }
        var hour = Number(h),
          min = Number(m);
        if (hour > 23) {
          min = hour;
          hour = 0;
        }
        if (min > 59) {
          min = 0;
        }
        if (hour >= 0 && hour <= 23) {
          if (min >= 0 && min <= 59) {
            var date = shared.setISO(source, {
              hour: hour,
              min: min,
              sec: 0
            });
            setSource(date);
            onChange === null || onChange === void 0 ? void 0 : onChange(shared.timeISO(date));
            return;
          }
        }
      } catch (_unused) {
        //
      }
      setSource(factoryDate(value));
    });
  }, [source, value, onChange]);
  var handleUp = React__default["default"].useCallback(function () {
    try {
      var parsed = shared.parseDate(source);
      var hour = parsed.getHours(),
        min = parsed.getMinutes();
      var date = '';
      if (min === 59) {
        date = shared.setISO(source, {
          hour: hour + 1,
          min: 0,
          sec: 0
        });
      } else if (min >= 0 && min <= 14) {
        date = shared.setISO(source, {
          hour: hour,
          min: 15,
          sec: 0
        });
      } else if (min >= 15 && min <= 29) {
        date = shared.setISO(source, {
          hour: hour,
          min: 30,
          sec: 0
        });
      } else if (min >= 30 && min <= 44) {
        date = shared.setISO(source, {
          hour: hour,
          min: 45,
          sec: 0
        });
      } else {
        date = shared.setISO(source, {
          hour: hour,
          min: 59,
          sec: 0
        });
      }
      setSource(date);
      lazyUpDown(function () {
        return onChange === null || onChange === void 0 ? void 0 : onChange(shared.timeISO(date));
      });
    } catch (_unused2) {
      //
    }
  }, [source, onChange]);
  var handleDown = React__default["default"].useCallback(function () {
    try {
      var parsed = shared.parseDate(source);
      var hour = parsed.getHours(),
        min = parsed.getMinutes();
      var date = '';
      if (min === 0) {
        date = shared.setISO(source, {
          hour: hour - 1,
          min: 59,
          sec: 0
        });
      } else if (min <= 59 && min >= 46) {
        date = shared.setISO(source, {
          hour: hour,
          min: 45,
          sec: 0
        });
      } else if (min <= 45 && min >= 31) {
        date = shared.setISO(source, {
          hour: hour,
          min: 30,
          sec: 0
        });
      } else if (min <= 30 && min >= 16) {
        date = shared.setISO(source, {
          hour: hour,
          min: 15,
          sec: 0
        });
      } else {
        date = shared.setISO(source, {
          hour: hour,
          min: 0,
          sec: 0
        });
      }
      setSource(date);
      lazyUpDown(function () {
        return onChange === null || onChange === void 0 ? void 0 : onChange(shared.timeISO(date));
      });
    } catch (_unused3) {
      //
    }
  }, [source, onChange]);
  React__default["default"].useEffect(function () {
    setSource(factoryDate(value));
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(atoms.HubTextField, _extends({}, props, {
    id: "hub-time-".concat(id),
    defaultValue: label,
    onChange: handleChange,
    right: /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
      width: "auto"
    }, /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      variant: "action",
      "data-testid": shared.factoryTestId(props, 'up'),
      onClick: handleUp
    }, /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
      icon: IconOutlineUpArrow,
      size: "sm"
    })), /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
      variant: "action",
      "data-testid": shared.factoryTestId(props, 'down'),
      onClick: handleDown
    }, /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
      icon: IconOutlineDownArrow,
      size: "sm"
    }))),
    pad: ['1', '2']
  }), children);
}

var VideoContainer = styled__default["default"].video.withConfig({
  displayName: "VideoContainer",
  componentId: "sc-12w9wj9-0"
})(["@media (", "){width:100%;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.mediaQuery.md;
});
var PreviewContainer = styled__default["default"].canvas.withConfig({
  displayName: "PreviewContainer",
  componentId: "sc-12w9wj9-1"
})(["@media (", "){width:100%;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.mediaQuery.md;
});

var _excluded = ["opened", "videoSize", "radius", "onClose", "onDone"];
var IconError = function IconError(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.299 8.702a.89.89 0 0 0-1.263 0L12 10.746 9.964 8.702a.893.893 0 0 0-1.262 1.262L10.746 12l-2.044 2.036a.889.889 0 0 0 0 1.263.89.89 0 0 0 1.262 0L12 13.254l2.036 2.045a.89.89 0 0 0 1.457-.29.89.89 0 0 0-.194-.973L13.254 12l2.045-2.036a.89.89 0 0 0 0-1.262Zm2.987-2.988A8.891 8.891 0 1 0 5.714 18.286 8.892 8.892 0 0 0 21 12.032a8.893 8.893 0 0 0-2.714-6.318Zm-1.254 11.318A7.113 7.113 0 1 1 19.112 12a7.068 7.068 0 0 1-2.08 5.032Z",
    fill: "#083350"
  }));
};
IconError.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var IconExclamation = function IconExclamation(props) {
  return /*#__PURE__*/React__default["default"].createElement("svg", props, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
    fill: "#083350"
  }));
};
IconExclamation.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var stream = null;
function HubWebCam(_ref) {
  var opened = _ref.opened,
    videoSize = _ref.videoSize,
    radius = _ref.radius,
    onClose = _ref.onClose,
    onDone = _ref.onDone,
    props = _objectWithoutProperties(_ref, _excluded);
  var t = i18n.useI18nMessage();
  var _React$useState = React__default["default"].useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    error = _React$useState2[0],
    setError = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    loading = _React$useState4[0],
    setLoading = _React$useState4[1];
  var _React$useState5 = React__default["default"].useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    frontCam = _React$useState6[0],
    setFrontCam = _React$useState6[1];
  var _React$useState7 = React__default["default"].useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    devices = _React$useState8[0],
    setDevices = _React$useState8[1];
  var _React$useState9 = React__default["default"].useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    captured = _React$useState10[0],
    setCaptured = _React$useState10[1];
  var videoId = React__default["default"].useMemo(function () {
    return "hub-webcam-".concat(shared.randomNumber());
  }, []);
  var previewId = React__default["default"].useMemo(function () {
    return "hub-webcam-picture-".concat(shared.randomNumber());
  }, []);
  var size = React__default["default"].useMemo(function () {
    return videoSize || 400;
  }, [videoSize]);
  var closeSteam = React__default["default"].useCallback(function () {
    if (!stream) return;
    try {
      var _iterator = _createForOfIteratorHelper(stream.getTracks()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var track = _step.value;
          track.stop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      stream = null;
    } catch (_unused) {
      //
    }
  }, []);
  var capturePicture = React__default["default"].useCallback(function () {
    var _preview$getContext;
    var video = document.getElementById(videoId);
    var preview = document.getElementById(previewId);
    (_preview$getContext = preview.getContext('2d')) === null || _preview$getContext === void 0 ? void 0 : _preview$getContext.drawImage(video, 0, 0, size, size);
    setCaptured(true);
  }, [videoId, previewId, size]);
  var clearPicture = React__default["default"].useCallback(function () {
    setCaptured(false);
  }, []);
  var openSteam = React__default["default"].useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var video;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          closeSteam();
          setLoading(true);
          _context.prev = 2;
          _context.next = 5;
          return navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: frontCam ? 'user' : 'environment',
              width: size,
              height: size
            }
          });
        case 5:
          stream = _context.sent;
          video = document.getElementById(videoId);
          if (video) {
            video.srcObject = stream;
            video.onloadedmetadata = function () {
              setLoading(false);
            };
          }
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          setError(t('hub-webcam_error'));
          setLoading(false);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 10]]);
  })), [videoId, frontCam, t, size]);
  var handleClose = React__default["default"].useCallback(function () {
    clearPicture();
    closeSteam();
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [clearPicture, closeSteam, onClose]);
  var handleDone = React__default["default"].useCallback(function () {
    var preview = document.getElementById(previewId);
    var file = shared.base64UrlToFile(preview.toDataURL(), previewId + '.png');
    clearPicture();
    closeSteam();
    onDone === null || onDone === void 0 ? void 0 : onDone(file);
  }, [clearPicture, closeSteam, onDone, previewId]);
  React__default["default"].useEffect(function () {
    if (opened) {
      openSteam();
    }
  }, [opened, frontCam]);

  //? check devices
  React__default["default"].useEffect(function () {
    if (process.env.NODE_ENV === 'test') return;
    (function () {
      var _check = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var devices;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return navigator.mediaDevices.enumerateDevices();
            case 2:
              devices = _context2.sent;
              setDevices((devices === null || devices === void 0 ? void 0 : devices.filter(function (x) {
                return x.kind.includes('video');
              })) || []);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function check() {
        return _check.apply(this, arguments);
      }
      return check;
    })()();
  }, []);
  return opened ? /*#__PURE__*/React__default["default"].createElement(atoms.HubModal, _extends({}, props, {
    opened: true,
    onClose: handleClose
  }), /*#__PURE__*/React__default["default"].createElement(atoms.HubCard, {
    loading: loading,
    borderless: true,
    radius: radius,
    pad: "0"
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    gap: "2"
  }, loading && /*#__PURE__*/React__default["default"].createElement(atoms.HubGrid, {
    row: true,
    align: "center",
    justify: "center",
    pad: "5"
  }, /*#__PURE__*/React__default["default"].createElement(atoms.HubAnimation, {
    source: AnimationCapture__default["default"],
    width: size / 2 + 'px',
    height: size / 2 + 'px',
    autoplay: true
  })), /*#__PURE__*/React__default["default"].createElement(PreviewContainer, {
    id: previewId,
    hidden: !captured || loading || !!error,
    width: size,
    height: size
  }), /*#__PURE__*/React__default["default"].createElement(VideoContainer, {
    id: videoId,
    hidden: captured || loading || !!error,
    width: size,
    height: size,
    autoPlay: true
  }), devices.length > 1 && /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
    full: true,
    variant: "outline",
    onClick: function onClick() {
      return setFrontCam(!frontCam);
    }
  }, t('hub-webcam_alt')), error ? /*#__PURE__*/React__default["default"].createElement(atoms.HubAlert, {
    title: error,
    icon: /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
      icon: IconError,
      size: "sm"
    }),
    color: "error",
    onClose: function onClose() {
      return setError(undefined);
    },
    inline: true
  }) : devices.length === 0 ? /*#__PURE__*/React__default["default"].createElement(atoms.HubAlert, {
    title: t('hub-webcam_no-device'),
    icon: /*#__PURE__*/React__default["default"].createElement(atoms.HubIcon, {
      icon: IconExclamation,
      size: "sm"
    }),
    color: "warning",
    inline: true
  }) : captured ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
    full: true,
    variant: "outline",
    onClick: clearPicture
  }, t('hub-webcam_clear')), /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
    full: true,
    onClick: handleDone
  }, t('hub-webcam_send'))) : /*#__PURE__*/React__default["default"].createElement(atoms.HubButton, {
    full: true,
    onClick: capturePicture
  }, t('hub-webcam_capture'))))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
}

exports.HubAvatarMenu = HubAvatarMenu;
exports.HubDataList = HubDataList;
exports.HubDataTableEmpty = HubDataTableEmpty;
exports.HubDataTableInitial = HubDataTableInitial;
exports.HubDate = HubDate;
exports.HubFeedback = HubFeedback;
exports.HubFilters = HubFilters;
exports.HubInputColor = HubInputColor;
exports.HubModalAlert = HubModalAlert;
exports.HubModalRight = HubModalRight;
exports.HubPhone = HubPhone;
exports.HubStatusAlert = HubStatusAlert;
exports.HubTime = HubTime;
exports.HubWebCam = HubWebCam;
