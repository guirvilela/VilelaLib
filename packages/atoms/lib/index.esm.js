import { factoryTestId, uniqueKey, shadeColor, parseDate, array, dateISO, isDateEqual, monthISO, capitalizedCase, getParentBy, scrollPosition, getAbsPosition, isSomething, parsePercent, roundNumber, debounce, $, sorter, numberFormatter } from '@hubert/shared';
import React from 'react';
import styled, { css } from 'styled-components';
import lottie from 'lottie-web';
import { animations, parsePixel, useTheme } from '@hubert/styles';
import { useI18nMessage, useI18nFormatter } from '@hubert/i18n';
import ReactDOM from 'react-dom';
import InputMask from 'react-input-mask';

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

var IconClose$3 = (function (props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.70449 7.99957L11.8522 4.85652C11.9463 4.76242 11.9991 4.6348 11.9991 4.50174C11.9991 4.36867 11.9463 4.24105 11.8522 4.14696C11.7581 4.05286 11.6305 4 11.4975 4C11.3644 4 11.2368 4.05286 11.1427 4.14696L8 7.29501L4.85728 4.14696C4.76319 4.05286 4.63559 4 4.50253 4C4.36948 4 4.24188 4.05286 4.14779 4.14696C4.05371 4.24105 4.00085 4.36867 4.00085 4.50174C4.00085 4.6348 4.05371 4.76242 4.14779 4.85652L7.29551 7.99957L4.14779 11.1426C4.10096 11.1891 4.06379 11.2443 4.03843 11.3052C4.01306 11.3661 4 11.4314 4 11.4974C4 11.5634 4.01306 11.6287 4.03843 11.6896C4.06379 11.7505 4.10096 11.8057 4.14779 11.8522C4.19424 11.899 4.2495 11.9362 4.31039 11.9616C4.37127 11.9869 4.43658 12 4.50253 12C4.56849 12 4.6338 11.9869 4.69468 11.9616C4.75557 11.9362 4.81083 11.899 4.85728 11.8522L8 8.70414L11.1427 11.8522C11.1892 11.899 11.2444 11.9362 11.3053 11.9616C11.3662 11.9869 11.4315 12 11.4975 12C11.5634 12 11.6287 11.9869 11.6896 11.9616C11.7505 11.9362 11.8058 11.899 11.8522 11.8522C11.899 11.8057 11.9362 11.7505 11.9616 11.6896C11.9869 11.6287 12 11.5634 12 11.4974C12 11.4314 11.9869 11.3661 11.9616 11.3052C11.9362 11.2443 11.899 11.1891 11.8522 11.1426L8.70449 7.99957Z",
    fill: "#BE1A25"
  }));
});

var AlertInnerStyle = styled.div.withConfig({
  displayName: "AlertInnerStyle",
  componentId: "sc-19q8q14-0"
})(["display:flex;gap:", ";margin-top:-2px;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[2];
});
var AlertTitleStyle = styled.span.withConfig({
  displayName: "AlertTitleStyle",
  componentId: "sc-19q8q14-1"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.body2.family;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.body2.size;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.body2.letterSpacing;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.neutral[800];
});
var AlertContentStyle = styled.span.withConfig({
  displayName: "AlertContentStyle",
  componentId: "sc-19q8q14-2"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";color:", ";font-weight:400;width:100%;text-overflow:ellipsis;overflow:hidden;"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.body2.family;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.typography.body2.size;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.body2.letterSpacing;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.neutralGrey[700];
});
var AlertCloseStyle = styled.button.withConfig({
  displayName: "AlertCloseStyle",
  componentId: "sc-19q8q14-3"
})(["background-color:transparent;width:", ";height:", ";border:none;color:inherit;cursor:pointer;"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spaces[3];
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spaces[3];
});
var AlertStyle = styled.div.withConfig({
  displayName: "AlertStyle",
  componentId: "sc-19q8q14-4"
})(["display:flex;width:100%;background-color:", ";color:", ";border:1px solid ", ";border-radius:", ";align-items:", ";", " gap:", ";", "{flex-direction:", ";align-items:", ";}", "{font-weight:", ";white-space:", ";}"], function (_ref14) {
  var theme = _ref14.theme,
    color = _ref14.color;
  return color ? theme.colors[color][100] : theme.colors.neutral[100];
}, function (_ref15) {
  var theme = _ref15.theme,
    color = _ref15.color;
  return color ? theme.colors[color][500] : theme.colors.neutral[500];
}, function (_ref16) {
  var theme = _ref16.theme,
    color = _ref16.color;
  return color ? theme.colors[color][500] : theme.colors.neutral[500];
}, function (_ref17) {
  var theme = _ref17.theme,
    radius = _ref17.radius;
  return radius ? theme.spaces[radius] : '4px';
}, function (_ref18) {
  var inline = _ref18.inline;
  return inline ? 'center' : 'start';
}, function (_ref19) {
  var theme = _ref19.theme,
    pad = _ref19.pad;
  if (typeof pad === 'string') {
    return "padding: ".concat(theme.spaces[pad], ";");
  }
  if (Array.isArray(pad)) {
    return "padding: ".concat(pad.reduce(function (acc, x) {
      return acc + "".concat(theme.spaces[x], " ");
    }, ''), ";");
  }
  return "padding: ".concat(theme.spaces[2], ";");
}, function (_ref20) {
  var theme = _ref20.theme,
    gap = _ref20.gap;
  return gap ? theme.spaces[gap] : theme.spaces[2];
}, AlertInnerStyle, function (_ref21) {
  var inline = _ref21.inline;
  return inline ? 'row' : 'column';
}, function (_ref22) {
  var inline = _ref22.inline;
  return inline ? 'center' : 'start';
}, AlertTitleStyle, function (_ref23) {
  var inline = _ref23.inline;
  return inline ? 400 : 600;
}, function (_ref24) {
  var nowrap = _ref24.nowrap;
  return nowrap ? 'nowrap' : undefined;
});

var _excluded$x = ["icon", "title", "content", "actions", "onClose"];
function HubAlert(_ref) {
  var icon = _ref.icon,
    title = _ref.title,
    content = _ref.content,
    actions = _ref.actions,
    onClose = _ref.onClose,
    props = _objectWithoutProperties(_ref, _excluded$x);
  var showAlert = React.useMemo(function () {
    return typeof title !== 'boolean';
  }, [title]);
  return showAlert ? /*#__PURE__*/React.createElement(AlertStyle, props, icon, /*#__PURE__*/React.createElement(AlertInnerStyle, null, /*#__PURE__*/React.createElement(AlertTitleStyle, null, title), content && /*#__PURE__*/React.createElement(AlertContentStyle, null, content), actions), onClose && /*#__PURE__*/React.createElement(AlertCloseStyle, {
    "data-testid": factoryTestId(props, 'close'),
    type: "button",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(IconClose$3, null))) : /*#__PURE__*/React.createElement(React.Fragment, null);
}

var AnimationStyle = styled.div.withConfig({
  displayName: "AnimationStyle",
  componentId: "sc-1t3opvt-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    width = _ref.width,
    height = _ref.height;
  switch (size) {
    case 'xs':
      return "\n          width: ".concat(theme.spaces[2], ";\n          height: ").concat(theme.spaces[2], ";\n          min-width: ").concat(theme.spaces[2], ";\n        ");
    case 'sm':
      return "\n          width: ".concat(theme.spaces[3], ";\n          height: ").concat(theme.spaces[3], ";\n          min-width: ").concat(theme.spaces[3], ";\n        ");
    case 'md':
      return "\n          width: ".concat(theme.spaces[5], ";\n          height: ").concat(theme.spaces[5], ";\n          min-width: ").concat(theme.spaces[5], ";\n        ");
    case 'lg':
      return "\n          width: ".concat(theme.spaces[6], ";\n          height: ").concat(theme.spaces[6], ";\n          min-width: ").concat(theme.spaces[6], ";\n        ");
    default:
      return "\n          width: ".concat(width || theme.spaces[5], ";\n          height: ").concat(height || theme.spaces[5], ";\n          min-width: ").concat(width || theme.spaces[5], ";\n        ");
  }
});

var _excluded$w = ["source", "loop", "autoplay"];
function HubAnimationInner(_ref, ref) {
  var source = _ref.source,
    loop = _ref.loop,
    autoplay = _ref.autoplay,
    props = _objectWithoutProperties(_ref, _excluded$w);
  var el = React.useRef();
  var name = React.useMemo(function () {
    return "hub-animation-".concat(uniqueKey());
  }, []);
  var play = React.useCallback(function () {
    return lottie.play(name);
  }, [name]);
  var pause = React.useCallback(function () {
    return lottie.pause(name);
  }, [name]);
  var stop = React.useCallback(function () {
    return lottie.stop(name);
  }, [name]);
  React.useImperativeHandle(ref, function () {
    return {
      play: play,
      pause: pause,
      stop: stop
    };
  }, []);
  React.useEffect(function () {
    var _lottie$getRegistered;
    var animations = (lottie === null || lottie === void 0 ? void 0 : (_lottie$getRegistered = lottie['getRegisteredAnimations']) === null || _lottie$getRegistered === void 0 ? void 0 : _lottie$getRegistered.call(lottie)) || [];
    if (el.current && !animations.some(function (x) {
      return (x === null || x === void 0 ? void 0 : x.name) === name;
    })) {
      lottie.loadAnimation({
        name: name,
        container: el.current,
        renderer: 'canvas',
        loop: loop !== null && loop !== void 0 ? loop : false,
        autoplay: autoplay !== null && autoplay !== void 0 ? autoplay : true,
        animationData: source
      });
    }
    return function () {
      lottie.destroy(name);
    };
  }, [el.current]);
  return source ? /*#__PURE__*/React.createElement(AnimationStyle, _extends({
    ref: el
  }, props)) : /*#__PURE__*/React.createElement(React.Fragment, null);
}
var HubAnimation = /*#__PURE__*/React.forwardRef(HubAnimationInner);

var AvatarImgStyle = styled.img.withConfig({
  displayName: "AvatarImgStyle",
  componentId: "sc-1hixyww-0"
})(["width:100%;height:100%;background-size:cover;border-radius:50%;"]);
var AvatarInitialsStyle = styled.span.withConfig({
  displayName: "AvatarInitialsStyle",
  componentId: "sc-1hixyww-1"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:50%;"]);
var AvatarStyle = styled.div.withConfig({
  displayName: "AvatarStyle",
  componentId: "sc-1hixyww-2"
})(["", " ", ";border-radius:50%;", "{", " background-color:", ";color:", ";}"], function (_ref) {
  var theme = _ref.theme,
    size = _ref.size;
  if (!size) {
    return "\n        width: ".concat(theme.spaces[7], ";\n        height: ").concat(theme.spaces[7], ";\n        min-width: ").concat(theme.spaces[7], ";\n      ");
  }
  switch (size) {
    case 'xs':
      return "\n          width: ".concat(theme.spaces[3], ";\n          height: ").concat(theme.spaces[3], ";\n          min-width: ").concat(theme.spaces[3], ";\n        ");
    case 'sm':
      return "\n          width: ".concat(theme.spaces[5], ";\n          height: ").concat(theme.spaces[5], ";\n          min-width: ").concat(theme.spaces[5], ";\n        ");
    case 'md':
      return "\n          width: ".concat(theme.spaces[7], ";\n          height: ").concat(theme.spaces[7], ";\n          min-width: ").concat(theme.spaces[7], ";\n        ");
    case 'lg':
      return "\n          width: ".concat(theme.spaces[10], ";\n          height: ").concat(theme.spaces[10], ";\n          min-width: ").concat(theme.spaces[10], ";\n        ");
    default:
      return "\n          width: ".concat(size, ";\n          height: ").concat(size, ";\n          min-width: ").concat(size, ";\n        ");
  }
}, function (_ref2) {
  var borderless = _ref2.borderless,
    theme = _ref2.theme;
  return borderless ? '' : "\n    padding: ".concat(theme.spaces[1], ";\n    border: 1px solid ").concat(theme.colors.neutral[400], ";\n  ");
}, AvatarInitialsStyle, function (_ref3) {
  var theme = _ref3.theme,
    typo = _ref3.typo;
  return "\n      font-family: ".concat(theme.typography[typo || 'h4'].family, ";\n      font-size: ").concat(theme.typography[typo || 'h4'].size, ";\n      line-height: ").concat(theme.typography[typo || 'h4'].lineHeight, ";\n      letter-spacing: ").concat(theme.typography[typo || 'h4'].letterSpacing, ";\n    ");
}, function (_ref4) {
  var theme = _ref4.theme,
    color = _ref4.color,
    colorLevel = _ref4.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : undefined;
}, function (_ref5) {
  var theme = _ref5.theme,
    colorText = _ref5.colorText,
    colorTextLevel = _ref5.colorTextLevel;
  return colorText && colorTextLevel ? theme.colors[colorText][colorTextLevel] : colorText && theme.colors[colorText] ? theme.colors[colorText][500] : colorText ? colorText : theme.colors.neutral[800];
});

var _excluded$v = ["src", "alt", "initials", "onClick"];
function HubAvatar(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    initials = _ref.initials,
    onClick = _ref.onClick,
    props = _objectWithoutProperties(_ref, _excluded$v);
  return /*#__PURE__*/React.createElement(AvatarStyle, _extends({
    onClick: onClick
  }, props), src ? /*#__PURE__*/React.createElement(AvatarImgStyle, {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement(AvatarInitialsStyle, null, initials));
}

var allStyle = css(["display:flex;align-items:center;justify-content:center;text-align:center;gap:", ";", " background-color:", ";color:", ";border-radius:", ";", ";font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:600;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[2];
}, function (_ref2) {
  var theme = _ref2.theme,
    size = _ref2.size,
    width = _ref2.width,
    height = _ref2.height;
  if (width || height) {
    return "\n        width: ".concat(width, ";\n        height: ").concat(height, ";\n      ");
  }
  switch (size) {
    case 'xs':
      return "\n          width: ".concat(theme.spaces[2], ";\n          height: ").concat(theme.spaces[2], ";\n        ");
    case 'sm':
      return "\n          width: ".concat(theme.spaces[3], ";\n          height: ").concat(theme.spaces[3], ";\n        ");
    case 'md':
      return "\n          width: ".concat(theme.spaces[4], ";\n          height: ").concat(theme.spaces[4], ";\n        ");
    case 'lg':
      return "\n          width: ".concat(theme.spaces[5], ";\n          height: ").concat(theme.spaces[5], ";\n        ");
    default:
      return '';
  }
}, function (_ref3) {
  var theme = _ref3.theme,
    color = _ref3.color,
    colorLevel = _ref3.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][100] : theme.colors.neutral[200];
}, function (_ref4) {
  var theme = _ref4.theme,
    color = _ref4.color,
    textColor = _ref4.textColor,
    textColorLevel = _ref4.textColorLevel;
  return textColor && textColorLevel ? theme.colors[textColor][textColorLevel] : textColor ? theme.colors[textColor][500] : color ? theme.colors[color][500] : theme.colors.neutral[500];
}, function (_ref5) {
  var theme = _ref5.theme,
    rounded = _ref5.rounded,
    radius = _ref5.radius;
  return rounded ? '50%' : theme.spaces[radius || '1'];
}, function (_ref6) {
  var theme = _ref6.theme,
    pad = _ref6.pad;
  if (!pad) return "padding: 2px 6px";
  if (typeof pad === 'string') return "padding: ".concat(theme.spaces[pad]);
  if (pad.length === 4) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]], " ").concat(theme.spaces[pad[3]]);
  }
  if (pad.length === 3) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]]);
  }
  if (pad.length === 2) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]]);
  }
  return "padding: ".concat(theme.spaces[pad[0]]);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.body2.family;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.typography.body2.size;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.body2.letterSpacing;
});
var floatStyle = css(["position:relative;&::after{", " position:absolute;content:'", "';border:1px solid ", ";", " ", " padding:0;font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";}"], allStyle, function (_ref11) {
  var content = _ref11.content;
  return content;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.white[500];
}, function (_ref13) {
  var theme = _ref13.theme,
    position = _ref13.position;
  if (position) {
    if (Array.isArray(position)) {
      return "\n            top: -".concat(theme.spaces[position[0]], ";\n            right: -").concat(theme.spaces[position[1]], ";\n          ");
    }
    return "\n          top: -".concat(theme.spaces[position], ";\n          right: -").concat(theme.spaces[position], ";\n        ");
  }
  return "\n        top: -10px;\n        right: -10px;\n      ";
}, function (_ref14) {
  var theme = _ref14.theme;
  return "\n      min-width: ".concat(theme.spaces[4], ";\n      width: ").concat(theme.spaces[4], ";\n      height: ").concat(theme.spaces[4], ";\n    ");
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.body3.family;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.typography.body3.size;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.typography.body3.lineHeight;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.body3.letterSpacing;
});
var BadgeStyle = styled.div.withConfig({
  displayName: "BadgeStyle",
  componentId: "sc-1nxlio8-0"
})(["", ""], function (_ref19) {
  var _float = _ref19["float"],
    content = _ref19.content;
  if (_float) {
    if (content) {
      return floatStyle;
    }
  } else {
    return allStyle;
  }
  return '';
});

var _excluded$u = ["content", "children"];
function HubBadge(_ref) {
  var content = _ref.content,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$u);
  return /*#__PURE__*/React.createElement(BadgeStyle, _extends({
    content: content ? String(content) : undefined
  }, props), children);
}

var ChevronRight = (function (props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.8299 11.2902L10.5899 7.05019C10.497 6.95646 10.3864 6.88207 10.2645 6.8313C10.1427 6.78053 10.012 6.75439 9.87994 6.75439C9.74793 6.75439 9.61723 6.78053 9.49537 6.8313C9.37351 6.88207 9.26291 6.95646 9.16994 7.05019C8.98369 7.23756 8.87915 7.49101 8.87915 7.75519C8.87915 8.01938 8.98369 8.27283 9.16994 8.46019L12.7099 12.0002L9.16994 15.5402C8.98369 15.7276 8.87915 15.981 8.87915 16.2452C8.87915 16.5094 8.98369 16.7628 9.16994 16.9502C9.26338 17.0429 9.3742 17.1162 9.49604 17.166C9.61787 17.2157 9.74834 17.241 9.87994 17.2402C10.0115 17.241 10.142 17.2157 10.2638 17.166C10.3857 17.1162 10.4965 17.0429 10.5899 16.9502L14.8299 12.7102C14.9237 12.6172 14.9981 12.5066 15.0488 12.3848C15.0996 12.2629 15.1257 12.1322 15.1257 12.0002C15.1257 11.8682 15.0996 11.7375 15.0488 11.6156C14.9981 11.4938 14.9237 11.3832 14.8299 11.2902Z",
    fill: "#A3B2BF"
  }));
});

var BreadcrumbsStyle = styled.div.withConfig({
  displayName: "BreadcrumbsStyle",
  componentId: "sc-1a7hcf1-0"
})(["display:flex;align-items:center;overflow:auto;"]);
var BreadcrumbsPathStyle = styled.div.withConfig({
  displayName: "BreadcrumbsPathStyle",
  componentId: "sc-1a7hcf1-1"
})(["display:flex;align-items:center;"]);
var BreadcrumbsIconStyle = styled.div.withConfig({
  displayName: "BreadcrumbsIconStyle",
  componentId: "sc-1a7hcf1-2"
})(["display:flex;align-items:center;justify-content:center;color:", ";margin:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral[400];
}, function (_ref2) {
  var theme = _ref2.theme;
  return "0 ".concat(theme.spaces[2]);
});
var BreadcrumbStyle = styled.span.withConfig({
  displayName: "BreadcrumbStyle",
  componentId: "sc-1a7hcf1-3"
})(["display:flex;align-items:center;gap:", ";font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";color:", ";transition:color 0.5s;font-weight:600;white-space:", ";", " &:hover{color:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[2];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body2.family;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.body2.size;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.body2.letterSpacing;
}, function (_ref8) {
  var theme = _ref8.theme,
    active = _ref8.active;
  return active ? theme.colors.primary[500] : theme.colors.neutral[400];
}, function (_ref9) {
  var nowrap = _ref9.nowrap;
  return nowrap ? 'nowrap' : 'pre-wrap';
}, function (_ref10) {
  var width = _ref10.width;
  return width ? "\n    display: block;\n    max-width: ".concat(width, ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  ") : '';
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.primary[500];
});

var _excluded$t = ["children"],
  _excluded2$6 = ["children"];
function HubBreadcrumbs(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$t);
  return /*#__PURE__*/React.createElement(BreadcrumbsStyle, props, React.Children.map(children, function (child, i) {
    return /*#__PURE__*/React.isValidElement(child) && /*#__PURE__*/React.createElement(BreadcrumbsPathStyle, {
      key: "hub-breadcrumb-".concat(i)
    }, i !== 0 ? /*#__PURE__*/React.createElement(BreadcrumbsIconStyle, null, /*#__PURE__*/React.createElement(ChevronRight, null)) : /*#__PURE__*/React.createElement(React.Fragment, null), child);
  }));
}
function HubBreadcrumb(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2$6);
  return /*#__PURE__*/React.createElement(BreadcrumbStyle, _extends({}, props, {
    title: props.width && typeof children === 'string' ? children : undefined
  }), children);
}

var ButtonSizesStyle = css(["width:", ";height:", ";padding:", ";"], function (_ref) {
  var theme = _ref.theme,
    full = _ref.full,
    size = _ref.size,
    variant = _ref.variant;
  if (full) return '100%';
  if (variant === 'icon') {
    switch (size) {
      case 'xs':
        return theme.spaces[5];
      case 'sm':
        return theme.spaces[6];
      case 'md':
        return theme.spaces[7];
      case 'lg':
        return theme.spaces[8];
    }
  }
  return 'auto';
}, function (_ref2) {
  var theme = _ref2.theme,
    size = _ref2.size,
    variant = _ref2.variant;
  switch (size) {
    case 'xs':
      return theme.spaces[5];
    case 'sm':
      return theme.spaces[6];
    case 'md':
      return theme.spaces[7];
    case 'lg':
      return theme.spaces[8];
    default:
      if (size === '100%') {
        return size;
      }
      if (variant === 'icon' || variant === 'action') {
        return 'auto';
      }
      return theme.spaces[7];
  }
}, function (_ref3) {
  var theme = _ref3.theme,
    variant = _ref3.variant,
    size = _ref3.size,
    noPadding = _ref3.noPadding;
  if (variant === 'icon' || variant === 'action' || noPadding) {
    return undefined;
  }
  switch (size) {
    case 'xs':
      return "".concat(theme.spaces[1], " ").concat(theme.spaces[2]);
    default:
      return "".concat(theme.spaces[1], " ").concat(theme.spaces[3]);
  }
});
var ButtonStylesStyle = css(["", ""], function (_ref4) {
  var theme = _ref4.theme,
    variant = _ref4.variant,
    color = _ref4.color,
    colorLevel = _ref4.colorLevel,
    bgColor = _ref4.bgColor,
    bgColorLevel = _ref4.bgColorLevel,
    borderColor = _ref4.borderColor,
    borderColorLevel = _ref4.borderColorLevel;
  var hash = color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.primary[500];
  var bgHash = bgColor && bgColorLevel ? theme.colors[bgColor][bgColorLevel] : bgColor && theme.colors[bgColor] ? theme.colors[bgColor][500] : bgColor ? bgColor : 'transparent';
  var borderHash = borderColor && borderColorLevel ? theme.colors[borderColor][borderColorLevel] : borderColor && theme.colors[borderColor] ? theme.colors[borderColor][500] : borderColor ? borderColor : hash;
  switch (variant) {
    case 'outline':
      return "\n          background-color: ".concat(bgHash, ";\n          color: ").concat(hash, ";\n          border: 1.5px solid ").concat(borderHash, ";\n        ");
    case 'ghost':
    case 'icon':
    case 'action':
      return "\n          background-color: ".concat(bgHash, ";\n          color: ").concat(hash, ";\n        ");
    default:
      return "\n          background-color: ".concat(hash, ";\n          color: ").concat(theme.colors.white[500], ";\n        ");
  }
});
var ButtonHoverStyle = css(["&:hover:not(:disabled){", "}"], function (_ref5) {
  var theme = _ref5.theme,
    variant = _ref5.variant,
    color = _ref5.color,
    bgHover = _ref5.bgHover;
  var hash = color === 'white' ? theme.colors.neutralGrey[300] : color && theme.colors[color] ? shadeColor(theme.colors[color][500], -5) : color ? color : theme.colors.neutral[600];
  if (bgHover) {
    switch (variant) {
      case 'default':
        return "\n              background-color: ".concat(hash, ";\n            ");
      default:
        return "\n              background-color: ".concat(theme.colors.neutralGrey[100], ";\n            ");
    }
  }
  switch (variant) {
    case 'outline':
      return "\n            background-color: ".concat(theme.colors.neutralGrey[100], ";\n          ");
    case 'ghost':
    case 'icon':
    case 'action':
      return "\n            color: ".concat(hash, ";\n          ");
    default:
      return "\n            background-color: ".concat(hash, ";\n          ");
  }
});
var ButtonActiveStyle = css(["&:not(:disabled){", "}"], function (_ref6) {
  var theme = _ref6.theme,
    color = _ref6.color,
    colorLevel = _ref6.colorLevel;
  var hash = color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.primary[500];
  return "\n        outline: 1px solid ".concat(hash, ";\n      ");
});
var ButtonDisabledStyle = css(["&:disabled{", "}"], function (_ref7) {
  var theme = _ref7.theme,
    variant = _ref7.variant;
  switch (variant) {
    case 'outline':
      return "\n            border-color: ".concat(theme.colors.primary[100], ";\n            color: ").concat(theme.colors.primary[100], ";\n          ");
    case 'ghost':
    case 'icon':
    case 'action':
      return "\n            color: ".concat(theme.colors.primary[100], ";\n          ");
    default:
      return "\n            background-color: ".concat(theme.colors.neutral[300], ";\n          ");
  }
});
var ButtonCommonStyle = css(["display:inline-flex;align-items:center;justify-content:center;gap:", ";border-radius:", ";border:none;font-weight:600;transition:background-color,outline 0.5s;cursor:", ";white-space:nowrap;text-decoration:none;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spaces[2];
}, function (_ref9) {
  var theme = _ref9.theme,
    rounded = _ref9.rounded,
    radius = _ref9.radius;
  return rounded ? '50%' : theme.spaces[radius || 1];
}, function (_ref10) {
  var cursor = _ref10.cursor,
    dragTrigger = _ref10.dragTrigger;
  return dragTrigger ? 'grab' : cursor || 'pointer';
});
var ButtonLoadingStyle = styled.div.withConfig({
  displayName: "ButtonLoadingStyle",
  componentId: "sc-zgmqrr-0"
})(["width:", ";height:", ";border-radius:50%;animation:1s linear infinite ", ",", " 1s ease;"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.spaces[5];
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.spaces[5];
}, function () {
  return animations.spin;
}, function () {
  return animations.fadein;
});
var ButtonShared = css(["", " ", " ", " ", " ", " ", " ", " ", "{", "}"], ButtonCommonStyle, ButtonSizesStyle, ButtonStylesStyle, ButtonDisabledStyle, function (_ref13) {
  var noHover = _ref13.noHover;
  return noHover ? '' : ButtonHoverStyle;
}, function (_ref14) {
  var active = _ref14.active;
  return active ? ButtonActiveStyle : '';
}, function (_ref15) {
  var clickable = _ref15.clickable,
    disabled = _ref15.disabled;
  if (clickable === false) {
    return "\n        pointer-events: none !important;\n        cursor: not-allowed !important;\n      ";
  }
  if (disabled) {
    return "\n        cursor: not-allowed !important;\n      ";
  }
  return '';
}, ButtonLoadingStyle, function (_ref16) {
  var theme = _ref16.theme,
    variant = _ref16.variant,
    color = _ref16.color,
    colorLevel = _ref16.colorLevel;
  switch (variant) {
    case 'outline':
    case 'ghost':
    case 'icon':
    case 'action':
      return "\n              border: 3px solid ".concat(color && theme.colors[color] ? theme.colors[color][100] : color ? color : theme.colors.primary[100], ";\n              border-top: 3px solid ").concat(color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.primary[300], ";\n            ");
    default:
      return "\n              border: 3px solid rgba(255, 255, 255, 0.5);\n              border-top: 3px solid ".concat(color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.white[500], ";\n            ");
  }
});
var ButtonStyle = styled.button.withConfig({
  displayName: "ButtonStyle",
  componentId: "sc-zgmqrr-1"
})(["", ""], ButtonShared);
var ButtonLinkStyle = styled.a.withConfig({
  displayName: "ButtonLinkStyle",
  componentId: "sc-zgmqrr-2"
})(["", ""], ButtonShared);

var _excluded$s = ["children", "disabled", "loading", "noHideLabel", "onHover", "onClick"];
var HubButton = /*#__PURE__*/React.forwardRef(function HubButton(_ref, ref) {
  var children = _ref.children,
    globalDisabled = _ref.disabled,
    globalLoading = _ref.loading,
    noHideLabel = _ref.noHideLabel,
    onHover = _ref.onHover,
    onClick = _ref.onClick,
    props = _objectWithoutProperties(_ref, _excluded$s);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerLoading = _React$useState2[0],
    setInnerLoading = _React$useState2[1];
  var loading = React.useMemo(function () {
    return globalLoading || innerLoading;
  }, [globalLoading, innerLoading]);
  var disabled = React.useMemo(function () {
    return globalDisabled || globalLoading || innerLoading;
  }, [globalDisabled, globalLoading, innerLoading]);
  var handleClick = React.useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!disabled) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            result = onClick === null || onClick === void 0 ? void 0 : onClick(e);
            if (result instanceof Promise) {
              setInnerLoading(true);
              result["finally"](function () {
                return setInnerLoading(false);
              });
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [disabled, onClick]);
  return props.link ? /*#__PURE__*/React.createElement(ButtonLinkStyle, _extends({
    ref: ref,
    disabled: disabled,
    onMouseOver: onHover && function (e) {
      return onHover === null || onHover === void 0 ? void 0 : onHover(e);
    },
    onMouseOut: onHover && function () {
      return onHover === null || onHover === void 0 ? void 0 : onHover(undefined);
    },
    onClick: handleClick
  }, props), loading ? /*#__PURE__*/React.createElement(ButtonLoadingStyle, null) : /*#__PURE__*/React.createElement(React.Fragment, null), !loading || noHideLabel ? children : /*#__PURE__*/React.createElement(React.Fragment, null)) : /*#__PURE__*/React.createElement(ButtonStyle, _extends({
    ref: ref,
    type: props.type || 'button',
    disabled: disabled,
    onMouseOver: onHover && function (e) {
      return onHover === null || onHover === void 0 ? void 0 : onHover(e);
    },
    onMouseOut: onHover && function () {
      return onHover === null || onHover === void 0 ? void 0 : onHover(undefined);
    },
    onClick: handleClick
  }, props), loading ? /*#__PURE__*/React.createElement(ButtonLoadingStyle, null) : /*#__PURE__*/React.createElement(React.Fragment, null), !loading || noHideLabel ? children : /*#__PURE__*/React.createElement(React.Fragment, null));
});

var IconNext = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "7",
    height: "12",
    viewBox: "0 0 7 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.46677 5.48313L2.23243 1.2575C2.1396 1.16409 2.02914 1.08995 1.90745 1.03935C1.78575 0.988757 1.65522 0.962708 1.52338 0.962708C1.39155 0.962708 1.26102 0.988757 1.13932 1.03935C1.01762 1.08995 0.907169 1.16409 0.81433 1.2575C0.628328 1.44423 0.523926 1.69682 0.523926 1.96011C0.523926 2.2234 0.628328 2.476 0.81433 2.66272L4.3496 6.19072L0.81433 9.71872C0.628328 9.90545 0.523926 10.158 0.523926 10.4213C0.523926 10.6846 0.628328 10.9372 0.81433 11.1239C0.907645 11.2163 1.01831 11.2894 1.13999 11.339C1.26166 11.3886 1.39195 11.4137 1.52338 11.413C1.65481 11.4137 1.7851 11.3886 1.90678 11.339C2.02845 11.2894 2.13912 11.2163 2.23243 11.1239L6.46677 6.89831C6.56038 6.80567 6.63467 6.69544 6.68537 6.57399C6.73607 6.45255 6.76218 6.32229 6.76218 6.19072C6.76218 6.05916 6.73607 5.92889 6.68537 5.80745C6.63467 5.686 6.56038 5.57578 6.46677 5.48313Z",
    fill: "#040C12"
  }));
});

var CalendarHeadStyle = styled.div.withConfig({
  displayName: "CalendarHeadStyle",
  componentId: "sc-1qeozud-0"
})(["display:flex;align-items:center;justify-content:space-between;gap:", ";width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[3];
});
var CalendarHeadTitleStyle = styled.div.withConfig({
  displayName: "CalendarHeadTitleStyle",
  componentId: "sc-1qeozud-1"
})(["display:flex;align-items:center;justify-content:center;gap:", ";font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:500;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[2];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.h4.family;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.h4.size;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.h4.lineHeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.h4.letterSpacing;
});
var CalendarHeadLinkStyle = styled.button.withConfig({
  displayName: "CalendarHeadLinkStyle",
  componentId: "sc-1qeozud-2"
})(["background-color:transparent;color:", ";border:none;:hover{text-decoration:underline;cursor:pointer;}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary[200];
});
var CalendarHeadNextStyle = styled.button.withConfig({
  displayName: "CalendarHeadNextStyle",
  componentId: "sc-1qeozud-3"
})(["display:flex;align-items:center;justify-content:center;border:none;background-color:", ";border-radius:50%;cursor:pointer;height:", ";width:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.neutral[200];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spaces[6];
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.spaces[6];
});
var CalendarHeadPrevStyle = styled(CalendarHeadNextStyle).withConfig({
  displayName: "CalendarHeadPrevStyle",
  componentId: "sc-1qeozud-4"
})(["transform:rotate(-180deg);"]);
var CalendarDaysStyle = styled.div.withConfig({
  displayName: "CalendarDaysStyle",
  componentId: "sc-1qeozud-5"
})(["display:grid;align-items:center;justify-content:center;justify-items:center;gap:", ";grid-template-columns:auto auto auto auto auto auto auto;width:100%;"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.spaces[2];
});
var CalendarMonthsStyle = styled.div.withConfig({
  displayName: "CalendarMonthsStyle",
  componentId: "sc-1qeozud-6"
})(["display:grid;grid-template-columns:50% 50%;width:100%;"]);
var CalendarYearsStyle = styled.div.withConfig({
  displayName: "CalendarYearsStyle",
  componentId: "sc-1qeozud-7"
})(["display:grid;grid-template-columns:50% 50%;width:100%;"]);
var CalendarPeriodStyle = styled.span.withConfig({
  displayName: "CalendarPeriodStyle",
  componentId: "sc-1qeozud-8"
})(["display:flex;align-items:center;justify-content:center;font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:400;"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.body3.family;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.body3.size;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.body3.lineHeight;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.body3.letterSpacing;
});
var CalendarDayStyle = styled.button.withConfig({
  displayName: "CalendarDayStyle",
  componentId: "sc-1qeozud-9"
})(["display:flex;align-items:center;justify-content:center;color:", ";background-color:", ";border-radius:50%;border:none;", ";transition:0.5s ease background-color,0.2s ease color;"], function (_ref16) {
  var theme = _ref16.theme,
    selected = _ref16.selected,
    active = _ref16.active,
    previous = _ref16.previous,
    next = _ref16.next,
    disabled = _ref16.disabled,
    today = _ref16.today,
    event = _ref16.event;
  if (selected || active) {
    if (previous || next) {
      if (event && event.color) {
        return theme.colors[event.color][300];
      }
      return theme.colors.neutral[500];
    }
    return theme.colors.white[500];
  }
  if (previous || next) {
    if (event && event.color) {
      return theme.colors[event.color][200];
    }
    return theme.colors.neutral[300];
  }
  if (disabled) {
    if (event && event.color) {
      return theme.colors[event.color][400];
    }
    return theme.colors.neutral[300];
  }
  if (today || event && event.color) {
    if (event && event.color) {
      return theme.colors[event.color][500];
    }
    return theme.colors.info[600];
  }
  return theme.colors.neutral[800];
}, function (_ref17) {
  var theme = _ref17.theme,
    selected = _ref17.selected,
    active = _ref17.active,
    today = _ref17.today,
    event = _ref17.event,
    previous = _ref17.previous,
    next = _ref17.next;
  if (previous || next) {
    if (event && event.color) {
      return theme.colors[event.color][400];
    }
  }
  if (selected) {
    if (event && event.color) {
      return theme.colors[event.color][500];
    }
    return theme.colors.info[500];
  }
  if (active) {
    if (event && event.color) {
      return theme.colors[event.color][300];
    }
    return theme.colors.info[300];
  }
  if (today || event && event.color) {
    if (event && event.color) {
      return theme.colors[event.color][100];
    }
    return theme.colors.info[100];
  }
  return 'transparent';
}, function (_ref18) {
  var disabled = _ref18.disabled;
  return disabled ? 'cursor: not-allowed;' : "cursor: pointer;";
});
var CalendarMonthYearStyle = styled.button.withConfig({
  displayName: "CalendarMonthYearStyle",
  componentId: "sc-1qeozud-10"
})(["display:flex;align-items:center;justify-content:center;padding:", ";background-color:transparent;color:", ";border-radius:50%;border:none;cursor:pointer;:hover{text-decoration:underline;}"], function (_ref19) {
  var theme = _ref19.theme;
  return "".concat(theme.spaces[1], " ").concat(theme.spaces[2]);
}, function (_ref20) {
  var theme = _ref20.theme,
    selected = _ref20.selected,
    active = _ref20.active;
  if (selected) {
    return theme.colors.info[500];
  }
  if (!active) {
    return theme.colors.neutral[300];
  }
  return theme.colors.neutral[800];
});
var CalendarActionsStyle = styled.div.withConfig({
  displayName: "CalendarActionsStyle",
  componentId: "sc-1qeozud-11"
})(["display:grid;align-items:center;justify-content:end;gap:", ";width:100%;padding:", ";"], function (_ref21) {
  var theme = _ref21.theme;
  return theme.spaces[2];
}, function (_ref22) {
  var theme = _ref22.theme;
  return "0 ".concat(theme.spaces[2]);
});
var CalendarTodayStyle = styled.button.withConfig({
  displayName: "CalendarTodayStyle",
  componentId: "sc-1qeozud-12"
})(["border:none;background-color:transparent;color:", ";", ";"], function (_ref23) {
  var theme = _ref23.theme,
    disabled = _ref23.disabled;
  if (disabled) {
    return theme.colors.neutral[300];
  }
  return theme.colors.primary[200];
}, function (_ref24) {
  var disabled = _ref24.disabled;
  return disabled ? '' : "cursor: pointer;";
});
var CalendarStyle = styled.div.withConfig({
  displayName: "CalendarStyle",
  componentId: "sc-1qeozud-13"
})(["display:flex;align-items:center;flex-direction:column;gap:", ";width:", ";", "{", ";}", ",", "{font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:", ";}", ",", "{font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:", ";}"], function (_ref25) {
  var theme = _ref25.theme;
  return theme.spaces[2];
}, function (_ref26) {
  var width = _ref26.width;
  return width || '100%';
}, CalendarDayStyle, function (_ref27) {
  var theme = _ref27.theme,
    size = _ref27.size;
  switch (size) {
    case 'xs':
      return "width: ".concat(theme.spaces[2], "; height: ").concat(theme.spaces[2], ";");
    case 'sm':
      return "width: ".concat(theme.spaces[3], "; height: ").concat(theme.spaces[3], ";");
    case 'md':
      return "width: ".concat(theme.spaces[5], "; height: ").concat(theme.spaces[5], ";");
    case 'lg':
      return "width: ".concat(theme.spaces[6], "; height: ").concat(theme.spaces[6], ";");
    default:
      if (size) {
        return "width: ".concat(size, "; height: ").concat(size, ";");
      }
      return "width: ".concat(theme.spaces[6], "; height: ").concat(theme.spaces[6], ";");
  }
}, CalendarTodayStyle, CalendarDayStyle, function (_ref28) {
  var theme = _ref28.theme,
    typo = _ref28.typo;
  return theme.typography[typo || 'h4'].family;
}, function (_ref29) {
  var theme = _ref29.theme,
    typo = _ref29.typo;
  return theme.typography[typo || 'h4'].size;
}, function (_ref30) {
  var theme = _ref30.theme,
    typo = _ref30.typo;
  return theme.typography[typo || 'h4'].lineHeight;
}, function (_ref31) {
  var theme = _ref31.theme,
    typo = _ref31.typo;
  return theme.typography[typo || 'h4'].letterSpacing;
}, function (_ref32) {
  var typo = _ref32.typo;
  return typo ? typo.includes('body') ? 600 : 400 : 400;
}, CalendarHeadTitleStyle, CalendarHeadLinkStyle, function (_ref33) {
  var theme = _ref33.theme,
    typo = _ref33.typo,
    typoHeader = _ref33.typoHeader;
  return theme.typography[typoHeader || typo || 'h4'].family;
}, function (_ref34) {
  var theme = _ref34.theme,
    typo = _ref34.typo,
    typoHeader = _ref34.typoHeader;
  return theme.typography[typoHeader || typo || 'h4'].size;
}, function (_ref35) {
  var theme = _ref35.theme,
    typo = _ref35.typo,
    typoHeader = _ref35.typoHeader;
  return theme.typography[typoHeader || typo || 'h4'].lineHeight;
}, function (_ref36) {
  var theme = _ref36.theme,
    typo = _ref36.typo,
    typoHeader = _ref36.typoHeader;
  return theme.typography[typoHeader || typo || 'h4'].letterSpacing;
}, function (_ref37) {
  var _ref38;
  var typo = _ref37.typo,
    typoHeader = _ref37.typoHeader;
  return typoHeader || typo ? (_ref38 = typoHeader || typo) !== null && _ref38 !== void 0 && _ref38.includes('body') ? 600 : 400 : 400;
});

var _excluded$r = ["range", "headless", "initialMode", "mandatoryMode", "disabled", "events", "previousDisabled", "nextDisabled", "min", "max", "value", "onChange", "onCalendarChange", "withActions", "children"];
function parseValueDate(v) {
  if (!v) return [];
  if (v[0] && v[1]) return [parseDate(v[0]), parseDate(v[1])];
  if (v[0]) return [parseDate(v[0])];
  return [];
}
function isDisabled(current, v, min, max) {
  if (Array.isArray(v)) {
    return v.some(function (d) {
      return current === d;
    });
  }
  if (typeof v === 'function') {
    return v(current);
  }
  if (v === true) {
    return v;
  }
  if (min && max) {
    return current < min || current > max;
  }
  if (min) {
    return current < min;
  }
  if (max) {
    return current > max;
  }
  return false;
}
function getEvent(current, v) {
  return Array.isArray(v) ? v.find(function (x) {
    return x.date === current;
  }) : typeof v === 'function' ? v(current) : undefined;
}
function HubCalendarInner(_ref, ref) {
  var range = _ref.range,
    headless = _ref.headless,
    initialMode = _ref.initialMode,
    mandatoryMode = _ref.mandatoryMode,
    disabledAll = _ref.disabled,
    events = _ref.events,
    previousDisabled = _ref.previousDisabled,
    nextDisabled = _ref.nextDisabled,
    min = _ref.min,
    max = _ref.max,
    value = _ref.value,
    onChange = _ref.onChange,
    onCalendarChange = _ref.onCalendarChange,
    withActions = _ref.withActions,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$r);
  var t = useI18nMessage();
  var f = useI18nFormatter();
  var _React$useState = React.useState(parseDate(value === null || value === void 0 ? void 0 : value[0])),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentDate = _React$useState2[0],
    setCurrentDate = _React$useState2[1];
  var _React$useState3 = React.useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    hoverDate = _React$useState4[0],
    setHoverDate = _React$useState4[1];
  var _React$useState5 = React.useState(parseValueDate(value)),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    source = _React$useState6[0],
    setSource = _React$useState6[1];
  var _React$useState7 = React.useState(initialMode || 'days'),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    mode = _React$useState8[0],
    setMode = _React$useState8[1];
  var hasHoverEffect = React.useMemo(function () {
    return range && source[0] && !source[1];
  }, [range, source]);
  var days = React.useMemo(function () {
    var lastDayPrevious = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    var firstDayCurrent = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    var lastDayCurrent = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    var firstDayNext = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    var firstPeriodDay = firstDayCurrent.getDay() + 1;
    var lastPeriodDay = lastDayCurrent.getDay() + 1;
    var daysPrevious = array(firstPeriodDay - 1, 0).map(function (_, i) {
      var date = new Date(lastDayPrevious.getFullYear(), lastDayPrevious.getMonth(), lastDayPrevious.getDate() - i);
      var disabled = isDisabled(dateISO(date), disabledAll, min, max);
      var event = getEvent(dateISO(date), events);
      var active = hasHoverEffect ? date > source[0] && hoverDate && date <= hoverDate : date > source[0] && source[1] && date < source[1];
      return {
        previous: true,
        selected: isDateEqual(source[0], date) || isDateEqual(source[1], date),
        active: active,
        today: isDateEqual(new Date(), date),
        label: date.getDate(),
        date: date,
        disabled: disabled,
        event: event
      };
    }).reverse();
    var daysCurrent = array(lastDayCurrent.getDate(), 1, true).map(function (day) {
      var date = new Date(lastDayCurrent.getFullYear(), lastDayCurrent.getMonth(), day);
      var disabled = isDisabled(dateISO(date), disabledAll, min, max);
      var event = getEvent(dateISO(date), events);
      var active = hasHoverEffect ? date > source[0] && hoverDate && date <= hoverDate : date > source[0] && source[1] && date < source[1];
      return {
        selected: isDateEqual(source[0], date) || isDateEqual(source[1], date),
        active: active,
        today: isDateEqual(new Date(), date),
        label: day,
        date: date,
        disabled: disabled,
        event: event
      };
    });
    var daysNext = array(7 - lastPeriodDay, 1, true).map(function (day) {
      var date = new Date(firstDayNext.getFullYear(), firstDayNext.getMonth(), day);
      var disabled = isDisabled(dateISO(date), disabledAll, min, max);
      var event = getEvent(dateISO(date), events);
      var active = hasHoverEffect ? date > source[0] && hoverDate && date <= hoverDate : date > source[0] && source[1] && date < source[1];
      return {
        next: true,
        selected: isDateEqual(source[0], date) || isDateEqual(source[1], date),
        active: active,
        today: isDateEqual(new Date(), date),
        label: day,
        date: date,
        disabled: disabled,
        event: event
      };
    });
    return [].concat(_toConsumableArray(daysPrevious), _toConsumableArray(daysCurrent), _toConsumableArray(daysNext));
  }, [currentDate, source, hoverDate, range, min, max, disabledAll]);
  var months = React.useMemo(function () {
    return array(12, 0, true).map(function (x) {
      var date = new Date(currentDate.getFullYear(), x - 1, min || max ? parseDate(min || max).getDate() : 1);
      var disabled = isDisabled(dateISO(date), disabledAll, min, max);
      return {
        label: t("hub-calendar_month-".concat(x)),
        date: date,
        selected: source[0] && monthISO(source[0]) === monthISO(date),
        disabled: disabled
      };
    });
  }, [currentDate, source, min, max, disabledAll]);
  var years = React.useMemo(function () {
    return [-2, -1, 0, 1, 2, 3].map(function (x) {
      var date = new Date(currentDate.getFullYear() + x, currentDate.getMonth(), min || max ? parseDate(min || max).getDate() : 1);
      var disabled = isDisabled(dateISO(date), disabledAll, min, max);
      return {
        label: date.getFullYear(),
        date: date,
        selected: source[0] && source[0].getFullYear() === date.getFullYear(),
        disabled: disabled
      };
    });
  }, [currentDate, source, min, max, disabledAll]);
  var todayIsDisable = React.useMemo(function () {
    var date = new Date();
    return isDisabled(dateISO(date), disabledAll, min, max);
  }, [min, max, disabledAll]);
  function handleChangeMonth(amount) {
    var date = new Date(currentDate.getFullYear() + (mode !== 'days' ? amount : 0), currentDate.getMonth() + (mode === 'days' ? amount : 0), 1);
    handleCurrentDate(date);
  }
  function handlePrevious() {
    handleChangeMonth(-1);
  }
  function handleNext() {
    handleChangeMonth(1);
  }
  function handleClickDay(v) {
    if (v.disabled) return;
    if (v.previous || v.next) {
      handleCurrentDate(v.date);
    }
    if (range) {
      if (v.date === source[0]) {
        setSource([source[0], v.date]);
        onChange === null || onChange === void 0 ? void 0 : onChange([dateISO(source[0]), dateISO(v.date)]);
      }
      if (!source[0] || source[1]) {
        setSource([v.date]);
        onChange === null || onChange === void 0 ? void 0 : onChange([dateISO(v.date)]);
      } else {
        setSource(v.date < source[0] ? [v.date, source[0]] : [source[0], v.date]);
        onChange === null || onChange === void 0 ? void 0 : onChange(v.date < source[0] ? [dateISO(v.date), dateISO(source[0])] : [dateISO(source[0]), dateISO(v.date)]);
      }
    } else {
      setSource([v.date]);
      onChange === null || onChange === void 0 ? void 0 : onChange([dateISO(v.date)]);
    }
  }
  function handleClickMonth(v) {
    if (mandatoryMode) {
      if (initialMode === 'days') {
        setMode('days');
      }
      if (initialMode === mode) {
        handleClickDay(_objectSpread2(_objectSpread2({}, v), {}, {
          date: v.date
        }));
      } else {
        handleCurrentDate(v.date);
      }
    } else {
      handleCurrentDate(v.date);
      setMode('days');
    }
  }
  function handleClickYear(v) {
    if (mandatoryMode) {
      if (initialMode === 'days' || initialMode === 'months') {
        setMode('months');
      }
      if (initialMode === mode) {
        handleClickDay(_objectSpread2(_objectSpread2({}, v), {}, {
          date: v.date
        }));
      } else {
        handleCurrentDate(v.date);
      }
    } else {
      handleCurrentDate(v.date);
      setMode('months');
    }
  }
  function handleToday() {
    var date = new Date();
    handleCurrentDate(date);
    handleClickDay({
      today: true,
      label: 0,
      date: date,
      disabled: todayIsDisable
    });
  }
  function handleCurrentDate(v) {
    setCurrentDate(v);
    onCalendarChange === null || onCalendarChange === void 0 ? void 0 : onCalendarChange(dateISO(v));
  }
  React.useEffect(function () {
    if (value) {
      var date = parseValueDate(value);
      if (source[0] && date[0] && source[0] !== date[0] || source[1] && date[1] && source[1] !== date[1]) {
        setSource(date);
      }
      if (currentDate && date[0] && currentDate !== date[0]) {
        setCurrentDate(date[0]);
      }
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(CalendarStyle, _extends({}, props, {
    ref: ref
  }), !headless && /*#__PURE__*/React.createElement(CalendarHeadStyle, null, /*#__PURE__*/React.createElement(CalendarHeadPrevStyle, {
    "data-testid": factoryTestId(props, 'previous'),
    type: "button",
    disabled: previousDisabled,
    onClick: handlePrevious
  }, /*#__PURE__*/React.createElement(IconNext, null)), /*#__PURE__*/React.createElement(CalendarHeadTitleStyle, null, mode === 'days' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CalendarHeadLinkStyle, {
    "data-testid": factoryTestId(props, 'head-month'),
    type: "button",
    onClick: function onClick() {
      return setMode('months');
    }
  }, capitalizedCase(f.longMonthFormatter(currentDate))), /*#__PURE__*/React.createElement(CalendarHeadLinkStyle, {
    "data-testid": factoryTestId(props, 'head-year'),
    type: "button",
    onClick: function onClick() {
      return setMode('years');
    }
  }, f.yearFormatter(currentDate))), (mode === 'months' || mode === 'years' && mandatoryMode) && /*#__PURE__*/React.createElement(React.Fragment, null, !mandatoryMode && /*#__PURE__*/React.createElement(CalendarHeadLinkStyle, {
    "data-testid": factoryTestId(props, 'head-day'),
    type: "button",
    onClick: function onClick() {
      return setMode('days');
    }
  }, f.dateMonthFormatter(currentDate)), /*#__PURE__*/React.createElement(CalendarHeadLinkStyle, {
    "data-testid": factoryTestId(props, 'head-year'),
    type: "button",
    onClick: function onClick() {
      return setMode('years');
    }
  }, f.yearFormatter(currentDate))), mode === 'years' && !mandatoryMode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CalendarHeadLinkStyle, {
    "data-testid": factoryTestId(props, 'head-day'),
    type: "button",
    onClick: function onClick() {
      return setMode('days');
    }
  }, f.customDateFormatter({
    day: '2-digit'
  })(currentDate)), /*#__PURE__*/React.createElement(CalendarHeadLinkStyle, {
    "data-testid": factoryTestId(props, 'head-month'),
    type: "button",
    onClick: function onClick() {
      return setMode('months');
    }
  }, capitalizedCase(f.longMonthFormatter(currentDate))))), /*#__PURE__*/React.createElement(CalendarHeadNextStyle, {
    "data-testid": factoryTestId(props, 'next'),
    type: "button",
    disabled: nextDisabled,
    onClick: handleNext
  }, /*#__PURE__*/React.createElement(IconNext, null))), mode === 'days' ? /*#__PURE__*/React.createElement(CalendarDaysStyle, null, array(7, 0, true).map(function (x, i) {
    return /*#__PURE__*/React.createElement(CalendarPeriodStyle, {
      key: "hub-calendar-period-".concat(i)
    }, t("hub-calendar_period-".concat(x)));
  }), days.map(function (day, i) {
    var _day$event, _day$event2, _day$event3;
    return /*#__PURE__*/React.createElement(CalendarDayStyle, _extends({
      key: "hub-calendar-day-".concat(i)
    }, day, {
      "data-testid": factoryTestId(props, "day-".concat(day.label)),
      type: "button",
      title: day.today && (_day$event = day.event) !== null && _day$event !== void 0 && _day$event.reason ? "".concat(t('hub-calendar_today'), "\n\n").concat((_day$event2 = day.event) === null || _day$event2 === void 0 ? void 0 : _day$event2.reason) : day.today ? t('hub-calendar_today') : (_day$event3 = day.event) === null || _day$event3 === void 0 ? void 0 : _day$event3.reason,
      onMouseOver: function onMouseOver() {
        return hasHoverEffect && setHoverDate(day.date);
      },
      onMouseOut: function onMouseOut() {
        return hasHoverEffect && setHoverDate(undefined);
      },
      onClick: function onClick() {
        return handleClickDay(day);
      }
    }), day.label);
  })) : mode === 'months' ? /*#__PURE__*/React.createElement(CalendarMonthsStyle, null, months.map(function (month, i) {
    return /*#__PURE__*/React.createElement(CalendarMonthYearStyle, _extends({
      key: "hub-calendar-month-".concat(i)
    }, month, {
      "data-testid": factoryTestId(props, "month-".concat(month.label)),
      type: "button",
      active: !month.disabled,
      disabled: false,
      onClick: function onClick() {
        return handleClickMonth(month);
      }
    }), month.label);
  })) : /*#__PURE__*/React.createElement(CalendarYearsStyle, null, years.map(function (year, i) {
    return /*#__PURE__*/React.createElement(CalendarMonthYearStyle, _extends({
      key: "hub-calendar-year-".concat(i)
    }, year, {
      "data-testid": factoryTestId(props, "year-".concat(year.label)),
      type: "button",
      active: !year.disabled,
      disabled: false,
      onClick: function onClick() {
        return handleClickYear(year);
      }
    }), year.label);
  })), (withActions || children) && /*#__PURE__*/React.createElement(CalendarActionsStyle, null, withActions && /*#__PURE__*/React.createElement(CalendarTodayStyle, {
    "data-testid": factoryTestId(props, 'today'),
    type: "button",
    disabled: todayIsDisable,
    onClick: handleToday
  }, t('hub-calendar_today')), children));
}
var HubCalendar = /*#__PURE__*/React.forwardRef(HubCalendarInner);

var CardOverlayStyle = styled.div.withConfig({
  displayName: "CardOverlayStyle",
  componentId: "sc-lj1ma8-0"
})(["display:flex;align-items:center;justify-content:center;position:absolute;inset:0;background-color:rgba(255,255,255,0.5);z-index:1;"]);
var CardLoadingStyle = styled.div.withConfig({
  displayName: "CardLoadingStyle",
  componentId: "sc-lj1ma8-1"
})(["width:", ";height:", ";border-radius:50%;animation:1s linear infinite ", ",", " 1s ease;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[5];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[5];
}, function () {
  return animations.spin;
}, function () {
  return animations.fadein;
});
var CardContainerPadStyle = css(["", ";"], function (_ref3) {
  var theme = _ref3.theme,
    pad = _ref3.pad;
  if (!pad) return "padding: ".concat(theme.spaces[3]);
  if (typeof pad === 'string') return "padding: ".concat(theme.spaces[pad]);
  if (pad.length === 4) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]], " ").concat(theme.spaces[pad[3]]);
  }
  if (pad.length === 3) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]]);
  }
  if (pad.length === 2) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]]);
  }
  return "padding: ".concat(theme.spaces[pad[0]]);
});
var CardContainerBgStyle = css(["background-color:", ";", ""], function (_ref4) {
  var theme = _ref4.theme,
    color = _ref4.color,
    colorLevel = _ref4.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][300] : color ? color : theme.colors.white[500];
}, function (_ref5) {
  var theme = _ref5.theme,
    shadow = _ref5.shadow;
  return shadow ? "box-shadow: ".concat(theme.shadows[shadow], ";") : '';
});
var CardContainerAccentStyle = css(["border-left:", ";"], function (_ref6) {
  var theme = _ref6.theme,
    accent = _ref6.accent,
    accentLevel = _ref6.accentLevel;
  return accent && accentLevel ? "10px solid ".concat(theme.colors[accent][accentLevel]) : accent ? "10px solid ".concat(theme.colors[accent][500]) : undefined;
});
var CardStyle = styled.div.withConfig({
  displayName: "CardStyle",
  componentId: "sc-lj1ma8-2"
})(["display:flex;flex-direction:column;width:100%;border-radius:", ";", ";", ";", " min-height:", ";", ";", " ", " ", " ", " ", "{", "}"], function (_ref7) {
  var theme = _ref7.theme,
    radius = _ref7.radius;
  return theme.spaces[radius || 1];
}, function (_ref8) {
  var centered = _ref8.centered;
  return centered && "\n    align-items: center;\n    justify-content: center;\n    ";
}, function (_ref9) {
  var noRelative = _ref9.noRelative;
  return noRelative ? '' : 'position: relative;';
}, function (_ref10) {
  var height = _ref10.height;
  return height && "\n    max-height: ".concat(height, ";\n    overflow: auto;\n  ");
}, function (_ref11) {
  var minHeight = _ref11.minHeight;
  return minHeight;
}, function (_ref12) {
  var theme = _ref12.theme,
    borderless = _ref12.borderless,
    borderSize = _ref12.borderSize,
    borderStyle = _ref12.borderStyle,
    borderColor = _ref12.borderColor,
    borderColorLevel = _ref12.borderColorLevel;
  return borderless ? '' : "border: ".concat(borderSize || '1px', " ").concat(borderStyle || 'solid', " ").concat(borderColor && borderColorLevel ? theme.colors[borderColor][borderColorLevel] : borderColor ? theme.colors[borderColor][300] : theme.colors.neutral[300]);
}, function (_ref13) {
  var theme = _ref13.theme,
    hover = _ref13.hover,
    color = _ref13.color,
    colorLevel = _ref13.colorLevel;
  return hover && "\n    &:hover {\n      background-color: ".concat(color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.black, "80;\n    }\n  ");
}, CardContainerBgStyle, CardContainerAccentStyle, CardContainerPadStyle, CardLoadingStyle, function (_ref14) {
  var theme = _ref14.theme,
    accent = _ref14.accent,
    accentLevel = _ref14.accentLevel;
  return "\n      border: 3px solid ".concat(theme.colors.primary[100], ";\n      border-top: 3px solid ").concat(accent && accentLevel ? theme.colors[accent][accentLevel] : accent ? theme.colors[accent][500] : theme.colors.primary[500], "\n    ");
});

var _excluded$q = ["loading", "children", "onDrag", "onDrop"];
function HubCard(_ref) {
  var loading = _ref.loading,
    children = _ref.children,
    onDrag = _ref.onDrag,
    onDrop = _ref.onDrop,
    props = _objectWithoutProperties(_ref, _excluded$q);
  return /*#__PURE__*/React.createElement(CardStyle, _extends({}, props, {
    onDragStart: onDrag,
    onDrop: onDrop,
    onDragOver: onDrop && function (e) {
      return e.preventDefault();
    }
  }), children, loading && /*#__PURE__*/React.createElement(CardOverlayStyle, null, /*#__PURE__*/React.createElement(CardLoadingStyle, null)));
}

var Checked = (function (_ref) {
  var size = _ref.size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size === 'lg' ? 14 : 10,
    height: size === 'lg' ? 12 : 8,
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.7 1.20039C13.3 0.800391 12.7 0.800391 12.3 1.20039L4.8 8.70039L1.7 5.60039C1.3 5.20039 0.7 5.20039 0.3 5.60039C-0.1 6.00039 -0.1 6.60039 0.3 7.00039L4.1 10.8004C4.3 11.0004 4.5 11.1004 4.8 11.1004C5.1 11.1004 5.3 11.0004 5.5 10.8004L13.7 2.60039C14.1 2.20039 14.1 1.60039 13.7 1.20039Z",
    fill: "currentColor"
  }));
});

var Indeterminate = (function (_ref) {
  var size = _ref.size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size === 'lg' ? 14 : 10,
    height: size === 'lg' ? 12 : 8,
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m 0.16861827,4.4683842 v 3 H 13.832982 v -3 z",
    fill: "white"
  }));
});

var CheckboxIconStyle = styled.div.withConfig({
  displayName: "CheckboxIconStyle",
  componentId: "sc-1ypf65s-0"
})(["display:flex;align-items:center;justify-content:center;transition:background-color 0.5s;"]);
var CheckboxInputStyle = styled.input.withConfig({
  displayName: "CheckboxInputStyle",
  componentId: "sc-1ypf65s-1"
})(["display:none;"]);
var CheckboxLabelStyle = styled.label.withConfig({
  displayName: "CheckboxLabelStyle",
  componentId: "sc-1ypf65s-2"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:400;margin-left:", ";"], function (props) {
  return props.theme.typography.body2.family;
}, function (props) {
  return props.theme.typography.body2.size;
}, function (props) {
  return props.theme.typography.body2.lineHeight;
}, function (props) {
  return props.theme.typography.body2.letterSpacing;
}, function (props) {
  return props.theme.spaces[2];
});
var CheckboxStyle = styled.div.withConfig({
  displayName: "CheckboxStyle",
  componentId: "sc-1ypf65s-3"
})(["display:flex;align-items:center;justify-content:", ";", " ", "{background-color:", ";color:", ";border:1px solid ", ";border-radius:4px;", "}"], function (_ref) {
  var align = _ref.align;
  return align || 'start';
}, function (_ref2) {
  var clickable = _ref2.clickable,
    disabled = _ref2.disabled;
  return disabled ? 'cursor: not-allowed;' : clickable ? 'cursor: pointer;' : undefined;
}, CheckboxIconStyle, function (props) {
  if (!props.checked && props.disabled) {
    return props.color ? props.theme.colors[props.color][100] : props.theme.colors.neutral[200];
  }
  if (props.checked && props.disabled) {
    return props.theme.colors[props.color || 'neutral'][400];
  }
  if (props.checked) {
    return props.theme.colors[props.color || 'primary'][500];
  }
  return props.theme.colors.white[500];
}, function (props) {
  return props.theme.colors[props.colorText || 'white'][500];
}, function (props) {
  if (!props.checked || props.disabled) {
    return props.theme.colors[props.borderColor || props.color || 'neutral'][400];
  }
  return props.theme.colors[props.borderColor || 'transparent'][500];
}, function (props) {
  return "\n      min-width: ".concat(props.size === 'lg' ? props.theme.spaces[5] : props.theme.spaces[3], ";\n      width: ").concat(props.size === 'lg' ? props.theme.spaces[5] : props.theme.spaces[3], ";\n      height: ").concat(props.size === 'lg' ? props.theme.spaces[5] : props.theme.spaces[3], ";\n    ");
});

var _excluded$p = ["onClick", "onChange", "children"];
function HubCheckbox(_ref) {
  var _onClick = _ref.onClick,
    onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$p);
  return /*#__PURE__*/React.createElement(CheckboxStyle, _extends({}, props, {
    checked: props.checked || props.indeterminate,
    clickable: !!onChange || !!_onClick,
    onClick: function onClick(e) {
      e.stopPropagation();
      if (!props.disabled) {
        onChange === null || onChange === void 0 ? void 0 : onChange(!props.checked);
        _onClick === null || _onClick === void 0 ? void 0 : _onClick();
      }
    }
  }), /*#__PURE__*/React.createElement(CheckboxIconStyle, {
    id: "hub-checkbox-icon-".concat(props.id)
  }, props.checked ? /*#__PURE__*/React.createElement(Checked, {
    size: props.size
  }) : props.indeterminate ? /*#__PURE__*/React.createElement(Indeterminate, {
    size: props.size
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement(CheckboxInputStyle, {
    id: "hub-checkbox-".concat(props.id),
    type: "checkbox",
    disabled: props.disabled,
    checked: props.checked,
    onChange: function onChange() {
      return 0;
    }
  }), children && /*#__PURE__*/React.createElement(CheckboxLabelStyle, {
    htmlFor: "hub-checkbox-".concat(props.id)
  }, children));
}

var Arrow = (function (_ref) {
  var style = _ref.style;
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: style
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.9999 13.4108L12.7099 9.1708C12.617 9.07707 12.5064 9.00268 12.3845 8.95191C12.2627 8.90114 12.132 8.875 11.9999 8.875C11.8679 8.875 11.7372 8.90114 11.6154 8.95191C11.4935 9.00268 11.3829 9.07707 11.2899 9.1708L7.04995 13.4108C6.95622 13.5038 6.88183 13.6144 6.83106 13.7362C6.78029 13.8581 6.75415 13.9888 6.75415 14.1208C6.75415 14.2528 6.78029 14.3835 6.83106 14.5054C6.88183 14.6272 6.95622 14.7378 7.04995 14.8308C7.23731 15.017 7.49076 15.1216 7.75495 15.1216C8.01913 15.1216 8.27259 15.017 8.45995 14.8308L11.9999 11.2908L15.5399 14.8308C15.7262 15.0155 15.9776 15.1197 16.2399 15.1208C16.3716 15.1216 16.502 15.0963 16.6239 15.0466C16.7457 14.9968 16.8565 14.9235 16.9499 14.8308C17.047 14.7412 17.1254 14.6332 17.1805 14.5131C17.2356 14.3931 17.2664 14.2633 17.271 14.1312C17.2757 13.9992 17.2541 13.8675 17.2076 13.7439C17.161 13.6202 17.0905 13.507 16.9999 13.4108Z",
    fill: "#CCD5DD"
  }));
});

var CollapseHeader = styled.div.withConfig({
  displayName: "CollapseHeader",
  componentId: "sc-184jzr3-0"
})(["display:flex;gap:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[1];
});
var CollapseHeaderTitle = styled.span.withConfig({
  displayName: "CollapseHeaderTitle",
  componentId: "sc-184jzr3-1"
})(["font-size:", ";font-weight:600;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.body1.size;
});
var CollapseHeaderTrigger = styled.button.withConfig({
  displayName: "CollapseHeaderTrigger",
  componentId: "sc-184jzr3-2"
})(["display:flex;justify-content:center;border:none;background-color:transparent;color:", ";cursor:", ";"], function (_ref3) {
  var theme = _ref3.theme,
    disabled = _ref3.disabled;
  return disabled ? theme.colors.neutral[200] : theme.colors.neutral[300];
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});
var CollapseContent = styled.div.withConfig({
  displayName: "CollapseContent",
  componentId: "sc-184jzr3-3"
})(["animation:0.3s ease-in-out ", ";width:100%;"], function () {
  return animations.fadein;
});
var CollapseStyle = styled.div.withConfig({
  displayName: "CollapseStyle",
  componentId: "sc-184jzr3-4"
})(["display:flex;flex-direction:column;gap:", ";width:", ";", " ", "{", " ", " width:", ";", " ", " ", "}", "{", " width:", ";}", " > svg{transition:0.3s ease-in-out transform;}", "{", "}"], function (_ref5) {
  var theme = _ref5.theme,
    gap = _ref5.gap;
  return theme.spaces[gap || 3];
}, function (_ref6) {
  var width = _ref6.width;
  return width || '100%';
}, function (_ref7) {
  var align = _ref7.align;
  return align ? "align-items: ".concat(align, ";") : '';
}, CollapseHeader, function (_ref8) {
  var titleClickable = _ref8.titleClickable,
    disabled = _ref8.disabled;
  return titleClickable ? disabled ? 'cursor: not-allowed;' : 'cursor: pointer;' : '';
}, function (_ref9) {
  var titleAlign = _ref9.titleAlign;
  return titleAlign ? "align-items: ".concat(titleAlign, ";") : '';
}, function (_ref10) {
  var titleWidth = _ref10.titleWidth;
  return titleWidth || '100%';
}, function (_ref11) {
  var theme = _ref11.theme,
    titlePad = _ref11.titlePad;
  if (!titlePad) return '';
  if (typeof titlePad === 'string') return "padding: ".concat(theme.spaces[titlePad], ";");
  if (titlePad.length === 4) {
    return "padding: ".concat(theme.spaces[titlePad[0]], " ").concat(theme.spaces[titlePad[1]], " ").concat(theme.spaces[titlePad[2]], " ").concat(theme.spaces[titlePad[3]], ";");
  }
  if (titlePad.length === 3) {
    return "padding: ".concat(theme.spaces[titlePad[0]], " ").concat(theme.spaces[titlePad[1]], " ").concat(theme.spaces[titlePad[2]], ";");
  }
  if (titlePad.length === 2) {
    return "padding: ".concat(theme.spaces[titlePad[0]], " ").concat(theme.spaces[titlePad[1]], ";");
  }
  return "padding: ".concat(theme.spaces[titlePad[0]], ";");
}, function (_ref12) {
  var theme = _ref12.theme,
    titleColor = _ref12.titleColor,
    titleColorLevel = _ref12.titleColorLevel;
  return titleColor ? "background-color: ".concat(titleColorLevel ? theme.colors[titleColor][titleColorLevel] : theme.colors[titleColor] ? theme.colors[titleColor][300] : titleColor, ";") : '';
}, function (_ref13) {
  var theme = _ref13.theme,
    titleRadius = _ref13.titleRadius;
  return titleRadius ? "border-radius: ".concat(theme.spaces[titleRadius], ";") : '';
}, CollapseHeaderTitle, function (_ref14) {
  var nowrap = _ref14.nowrap;
  return nowrap ? 'white-space: nowrap;' : '';
}, function (_ref15) {
  var titleWidth = _ref15.titleWidth;
  return titleWidth === 'auto' ? 'auto' : '100%';
}, CollapseHeaderTrigger, CollapseContent, function (_ref16) {
  var height = _ref16.height;
  return height ? "\n      max-height: ".concat(height, ";\n      overflow-y: auto;\n    ") : '';
});

var _excluded$o = ["opened", "title", "hidden", "triggerPosition", "triggerRotateStep", "customTrigger", "onChange", "children"];
function HubCollapse(_ref) {
  var opened = _ref.opened,
    title = _ref.title,
    hidden = _ref.hidden,
    _ref$triggerPosition = _ref.triggerPosition,
    triggerPosition = _ref$triggerPosition === void 0 ? 'right' : _ref$triggerPosition,
    _ref$triggerRotateSte = _ref.triggerRotateStep,
    triggerRotateStep = _ref$triggerRotateSte === void 0 ? 90 : _ref$triggerRotateSte,
    customTrigger = _ref.customTrigger,
    onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$o);
  var _React$useState = React.useState(opened),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    source = _React$useState2[0],
    setSource = _React$useState2[1];
  var handleClick = React.useCallback(function () {
    setSource(!source);
    onChange === null || onChange === void 0 ? void 0 : onChange(!source);
  }, [source, onChange]);
  var Trigger = function Trigger() {
    if (hidden) {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
    if (customTrigger) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, customTrigger(source, handleClick));
    }
    return /*#__PURE__*/React.createElement(CollapseHeaderTrigger, {
      "data-testid": factoryTestId(props, 'change'),
      type: "button",
      disabled: props.disabled,
      onClick: handleClick
    }, /*#__PURE__*/React.createElement(Arrow, {
      style: {
        transform: "rotate(".concat(source ? 90 - triggerRotateStep : 270 - triggerRotateStep, "deg)")
      }
    }));
  };
  React.useEffect(function () {
    setSource(opened);
  }, [opened]);
  return /*#__PURE__*/React.createElement(CollapseStyle, _extends({}, props, {
    opened: source
  }), /*#__PURE__*/React.createElement(CollapseHeader, {
    onClick: function onClick() {
      if (props.titleClickable && !props.disabled) {
        handleClick();
      }
    }
  }, triggerPosition === 'left' && /*#__PURE__*/React.createElement(Trigger, null), /*#__PURE__*/React.createElement(CollapseHeaderTitle, null, title), triggerPosition === 'right' && /*#__PURE__*/React.createElement(Trigger, null)), source && /*#__PURE__*/React.createElement(CollapseContent, null, children));
}

var Check = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.7 1.20039C13.3 0.800391 12.7 0.800391 12.3 1.20039L4.8 8.70039L1.7 5.60039C1.3 5.20039 0.7 5.20039 0.3 5.60039C-0.1 6.00039 -0.1 6.60039 0.3 7.00039L4.1 10.8004C4.3 11.0004 4.5 11.1004 4.8 11.1004C5.1 11.1004 5.3 11.0004 5.5 10.8004L13.7 2.60039C14.1 2.20039 14.1 1.60039 13.7 1.20039Z",
    fill: "white"
  }));
});

var Dropdown = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 21 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.9999 9.84157C16.8126 9.65532 16.5591 9.55078 16.2949 9.55078C16.0308 9.55078 15.7773 9.65532 15.5899 9.84157L11.9999 13.3816L8.45995 9.84157C8.27259 9.65532 8.01913 9.55078 7.75495 9.55078C7.49076 9.55078 7.23731 9.65532 7.04995 9.84157C6.95622 9.93454 6.88183 10.0451 6.83106 10.167C6.78029 10.2889 6.75415 10.4196 6.75415 10.5516C6.75415 10.6836 6.78029 10.8143 6.83106 10.9362C6.88183 11.058 6.95622 11.1686 7.04995 11.2616L11.2899 15.5016C11.3829 15.5953 11.4935 15.6697 11.6154 15.7205C11.7372 15.7712 11.8679 15.7974 11.9999 15.7974C12.132 15.7974 12.2627 15.7712 12.3845 15.7205C12.5064 15.6697 12.617 15.5953 12.7099 15.5016L16.9999 11.2616C17.0937 11.1686 17.1681 11.058 17.2188 10.9362C17.2696 10.8143 17.2957 10.6836 17.2957 10.5516C17.2957 10.4196 17.2696 10.2889 17.2188 10.167C17.1681 10.0451 17.0937 9.93454 16.9999 9.84157Z",
    fill: "#A3B2BF"
  }));
});

var DropdownIconStyle = styled.div.withConfig({
  displayName: "DropdownIconStyle",
  componentId: "sc-mi9hqn-0"
})(["display:flex;align-items:center;justify-content:center;color:", ";border-left:1px solid ", ";svg{margin-left:", ";}cursor:pointer;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutral[400];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.neutral[400];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[2];
});
var DropdownTriggerStyle = styled.div.withConfig({
  displayName: "DropdownTriggerStyle",
  componentId: "sc-mi9hqn-1"
})(["display:flex;align-items:center;justify-content:center;width:100%;", "{svg{transform:", ";transition:0.5s ease-in-out transform;}}"], DropdownIconStyle, function (_ref4) {
  var opened = _ref4.opened;
  return "rotate(".concat(opened ? '180deg' : '0deg', ")");
});
var DropdownOverlayStyle = styled.div.withConfig({
  displayName: "DropdownOverlayStyle",
  componentId: "sc-mi9hqn-2"
})(["position:fixed;inset:0;z-index:60;"]);
var DropdownStyle = styled.ul.withConfig({
  displayName: "DropdownStyle",
  componentId: "sc-mi9hqn-3"
})(["position:absolute;z-index:61;width:", ";padding:", " 0;background:", ";box-shadow:", ";border-radius:4px;animation:0.5s ease ", ";max-height:", ";overflow-y:auto;"], function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spaces[2];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.white[500];
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.shadows[1];
}, function () {
  return animations.fadein;
}, function (_ref9) {
  var height = _ref9.height;
  return height || '200px';
});
var DropdownItemStyle = styled.li.withConfig({
  displayName: "DropdownItemStyle",
  componentId: "sc-mi9hqn-4"
})(["display:flex;align-items:center;gap:", ";padding:", ";color:", ";font-weight:400;transition:background-color 1s;cursor:pointer;font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";", " &:hover{background-color:", ";}"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.spaces[2];
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spaces[2];
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.neutral[800];
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.body2.family;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.body2.size;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.typography.body2.letterSpacing;
}, function (_ref17) {
  var theme = _ref17.theme,
    selected = _ref17.selected;
  return selected ? "background-color: ".concat(theme.colors.neutral[200], ";") : '';
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.colors.neutral[200];
});
var DropdownCheckStyle = styled.div.withConfig({
  displayName: "DropdownCheckStyle",
  componentId: "sc-mi9hqn-5"
})(["display:flex;align-items:center;justify-content:center;border-radius:4px;width:", ";height:", ";color:", ";", ""], function (_ref19) {
  var theme = _ref19.theme;
  return theme.spaces[3];
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.spaces[3];
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.colors.white[500];
}, function (_ref22) {
  var theme = _ref22.theme,
    selected = _ref22.selected;
  if (selected) {
    return "\n        background-color: ".concat(theme.colors.primary[500], ";\n      ");
  }
  return "\n      background-color: ".concat(theme.colors.white[500], ";\n      border: 1px solid ").concat(theme.colors.neutral[400], ";\n    ");
});
var DropdownEmptyStyle = styled.div.withConfig({
  displayName: "DropdownEmptyStyle",
  componentId: "sc-mi9hqn-6"
})(["display:flex;align-items:center;justify-content:center;padding:", ";font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:600;"], function (_ref23) {
  var theme = _ref23.theme;
  return theme.spaces[1];
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.typography.body2.family;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.typography.body2.size;
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.typography.body2.letterSpacing;
});

var _excluded$n = ["position", "width", "onChange", "onOpen", "onClose", "children"];
function HubDropdownInner(_ref, ref) {
  var position = _ref.position,
    width = _ref.width,
    onChange = _ref.onChange,
    onOpen = _ref.onOpen,
    onClose = _ref.onClose,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$n);
  var t = useI18nMessage();
  var _React$useState = React.useState(props.opened),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var _React$useState3 = React.useState(props.items || []),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    source = _React$useState4[0],
    setSource = _React$useState4[1];
  var _React$useState5 = React.useState(),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    triggerSource = _React$useState6[0],
    setTriggerSource = _React$useState6[1];
  var _React$useState7 = React.useState(),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    contentDimensions = _React$useState8[0],
    setContentDimensions = _React$useState8[1];
  var coordinates = React.useMemo(function () {
    if (triggerSource !== null && triggerSource !== void 0 && triggerSource.target && contentDimensions) {
      var _target$getBoundingCl;
      var target = getParentBy(triggerSource === null || triggerSource === void 0 ? void 0 : triggerSource.target, '.DropdownTrigger');
      var scroll = scrollPosition();
      var rect = ((_target$getBoundingCl = target.getBoundingClientRect) === null || _target$getBoundingCl === void 0 ? void 0 : _target$getBoundingCl.call(target)) || {};
      var abs = getAbsPosition(target);
      var top = abs.top || rect.top;
      var left = abs.left || rect.left;
      var pos = position || 'bottom';
      if (top - contentDimensions.h < scroll.top) {
        pos = pos.replace('top', 'bottom');
      }
      if (top + rect.height + contentDimensions.h > scroll.bottom) {
        pos = pos.replace('bottom', 'top');
      }
      var offset = {
        x: 0,
        y: 0
      };
      switch (pos) {
        case 'top':
          offset = {
            x: left,
            y: top - 4 - contentDimensions.h
          };
          break;
        case 'bottom':
          offset = {
            x: left,
            y: top + rect.height + 4
          };
          break;
        case 'above':
          offset = {
            x: left,
            y: top + rect.height / 2 - contentDimensions.h / 2
          };
          break;
      }
      return {
        top: offset.y,
        left: offset.x,
        width: width || rect.width + 'px'
      };
    }
    return undefined;
  }, [triggerSource, contentDimensions, position, width]);
  var getTrigger = React.useCallback(function (el) {
    if (el && !triggerSource) {
      setTriggerSource({
        target: el
      });
    }
  }, [triggerSource]);
  var getContentDimensions = React.useCallback(function (el) {
    if (el && !contentDimensions) {
      setContentDimensions({
        w: el.clientWidth,
        h: el.clientHeight
      });
    }
  }, [contentDimensions]);
  var compare = React.useCallback(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (a, b) {
    if (props.keyValue) {
      if (!isSomething(b)) return false;
      if (typeof props.keyValue === 'string') {
        return a === b[props.keyValue];
      }
      return a === props.keyValue(b);
    }
    if (props.compareKey) {
      if (!isSomething(a) || !isSomething(b)) return false;
      if (typeof props.compareKey === 'string') {
        return a[props.compareKey] === b[props.compareKey];
      }
      return props.compareKey(a) === props.compareKey(b);
    }
    return a === b;
  }, [props.keyValue, props.compareKey]);
  var resolveLabel = React.useCallback(function (item) {
    if (props.keyLabel) {
      if (typeof props.keyLabel === 'string') {
        return item[props.keyLabel];
      }
      return props.keyLabel(item);
    }
    return item;
  }, [props.keyLabel]);
  var resolveValue = React.useCallback(function (item) {
    if (props.keyValue) {
      if (typeof props.keyValue === 'string') {
        return item[props.keyValue];
      }
      return props.keyValue(item);
    }
    return item;
  }, [props.keyValue]);
  var resolveSearch = React.useCallback(function (item) {
    if (props.keySearch) {
      if (typeof props.keySearch === 'string') {
        return item[props.keySearch];
      }
      return props.keySearch(item);
    }
    return item;
  }, [props.keySearch]);
  var isSelected = React.useCallback(function (item) {
    // ? removed because zero === false
    // if (!value) return false;
    if (Array.isArray(props.value)) {
      return props.value.some(function (x) {
        return compare(x, item);
      });
    }
    return compare(props.value, item);
  }, [props.value, compare]);
  var label = React.useMemo(function () {
    var _props$items;
    var selected = (_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.filter(function (item) {
      return isSelected(item);
    });
    return selected === null || selected === void 0 ? void 0 : selected.map(function (item) {
      return resolveLabel(item);
    }).join(', ');
  }, [props.items, props.value, isSelected]);
  function handleResetSource() {
    setSource(props.items || []);
  }
  function handleSelectItem(item, index) {
    if (!onChange) return;
    var itemValue = resolveValue(item);
    if (Array.isArray(props.value)) {
      if (isSelected(item)) {
        onChange(props.value.filter(function (x) {
          return !compare(x, item);
        }), index, item);
      } else {
        onChange([].concat(_toConsumableArray(props.value), [itemValue]), index, item);
      }
    } else {
      onChange(itemValue, index, item);
      handleClose();
    }
    handleResetSource();
  }
  function handleTrigger(e) {
    if (props.disabled) return;
    if (!show) {
      setTriggerSource(e);
      handleOpen();
    } else {
      handleClose();
    }
  }
  function handleOpen() {
    setShow(true);
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
  }
  function handleClose() {
    setShow(false);
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }
  function handleSearch(v) {
    if (v) {
      var _props$items2;
      if (!show) {
        handleOpen();
      }
      var results = (_props$items2 = props.items) === null || _props$items2 === void 0 ? void 0 : _props$items2.filter(function (x) {
        return (props.keySearch ? resolveSearch(x) : "".concat(resolveLabel(x), ";").concat(resolveValue(x))).toLowerCase().includes(v.toLowerCase());
      });
      setSource(results || []);
    } else {
      handleResetSource();
    }
  }
  var isMultiple = React.useMemo(function () {
    return Array.isArray(props.value);
  }, [props.value]);
  React.useEffect(function () {
    handleResetSource();
  }, [props.items]);
  React.useImperativeHandle(ref, function () {
    return {
      open: handleOpen,
      close: handleClose
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DropdownTriggerStyle, {
    ref: getTrigger,
    opened: show,
    onClick: handleTrigger
  }, children === null || children === void 0 ? void 0 : children(label, handleSearch)), show && /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DropdownOverlayStyle, {
    onClick: handleClose
  }), /*#__PURE__*/React.createElement(DropdownStyle, _extends({}, props, {
    ref: getContentDimensions,
    width: (coordinates === null || coordinates === void 0 ? void 0 : coordinates.width) || width,
    style: coordinates
  }), !source.length && /*#__PURE__*/React.createElement(DropdownEmptyStyle, null, t('hub-dropdown_empty')), source.map(function (item, i) {
    return /*#__PURE__*/React.createElement(DropdownItemStyle, {
      key: "hub-dropdown-item-".concat(i),
      "data-testid": factoryTestId(props, 'change'),
      selected: isSelected(item),
      onClick: function onClick() {
        return handleSelectItem(item, i);
      }
    }, isMultiple && (isSelected(item) ? /*#__PURE__*/React.createElement(DropdownCheckStyle, {
      selected: true
    }, /*#__PURE__*/React.createElement(Check, null)) : /*#__PURE__*/React.createElement(DropdownCheckStyle, null)), resolveLabel(item));
  }))), window.document.body));
}
var HubDropdown = /*#__PURE__*/React.forwardRef(HubDropdownInner);
function HubDropdownIcon() {
  return /*#__PURE__*/React.createElement(DropdownIconStyle, null, /*#__PURE__*/React.createElement(Dropdown, null));
}

var IconImage = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.1645 21.9977 19.3284 21.981 19.49 21.95L19.79 21.88H19.86H19.91L20.28 21.74L20.41 21.67C20.51 21.61 20.62 21.56 20.72 21.49C20.8535 21.3918 20.9805 21.2849 21.1 21.17L21.17 21.08C21.2682 20.9805 21.3585 20.8735 21.44 20.76L21.53 20.63C21.5998 20.5187 21.6601 20.4016 21.71 20.28C21.7374 20.232 21.7609 20.1818 21.78 20.13C21.83 20.01 21.86 19.88 21.9 19.75V19.6C21.9567 19.4046 21.9903 19.2032 22 19V5C22 4.20435 21.6839 3.44129 21.1213 2.87868C20.5587 2.31607 19.7956 2 19 2ZM5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V14.69L7.29 11.39C7.38296 11.2963 7.49356 11.2219 7.61542 11.1711C7.73728 11.1203 7.86799 11.0942 8 11.0942C8.13201 11.0942 8.26272 11.1203 8.38458 11.1711C8.50644 11.2219 8.61704 11.2963 8.71 11.39L17.31 20H5ZM20 19C19.9991 19.1233 19.9753 19.2453 19.93 19.36C19.9071 19.4087 19.8804 19.4556 19.85 19.5C19.8232 19.5423 19.7931 19.5825 19.76 19.62L14.41 14.27L15.29 13.39C15.383 13.2963 15.4936 13.2219 15.6154 13.1711C15.7373 13.1203 15.868 13.0942 16 13.0942C16.132 13.0942 16.2627 13.1203 16.3846 13.1711C16.5064 13.2219 16.617 13.2963 16.71 13.39L20 16.69V19ZM20 13.86L18.12 12C17.5477 11.457 16.7889 11.1543 16 11.1543C15.2111 11.1543 14.4523 11.457 13.88 12L13 12.88L10.12 10C9.54772 9.45699 8.7889 9.15428 8 9.15428C7.2111 9.15428 6.45228 9.45699 5.88 10L4 11.86V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V13.86ZM13.5 6C13.2033 6 12.9133 6.08797 12.6666 6.2528C12.42 6.41762 12.2277 6.65189 12.1142 6.92597C12.0006 7.20006 11.9709 7.50166 12.0288 7.79264C12.0867 8.08361 12.2296 8.35088 12.4393 8.56066C12.6491 8.77044 12.9164 8.9133 13.2074 8.97118C13.4983 9.02906 13.7999 8.99935 14.074 8.88582C14.3481 8.77229 14.5824 8.58003 14.7472 8.33335C14.912 8.08668 15 7.79667 15 7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6Z",
    fill: "currentColor"
  }));
});

var FileUploadIconStyle = styled.div.withConfig({
  displayName: "FileUploadIconStyle",
  componentId: "sc-c0nzbh-0"
})([""]);
var FileUploadTitleStyle = styled.div.withConfig({
  displayName: "FileUploadTitleStyle",
  componentId: "sc-c0nzbh-1"
})(["display:flex;gap:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[1];
});
var FileUploadTitleColorStyle = styled.span.withConfig({
  displayName: "FileUploadTitleColorStyle",
  componentId: "sc-c0nzbh-2"
})([""]);
var FileUploadInputStyle = styled.input.withConfig({
  displayName: "FileUploadInputStyle",
  componentId: "sc-c0nzbh-3"
})(["display:none;"]);
var FileUploadExtStyle = styled.span.withConfig({
  displayName: "FileUploadExtStyle",
  componentId: "sc-c0nzbh-4"
})(["display:flex;gap:", ";", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[1];
}, function (_ref3) {
  var theme = _ref3.theme;
  return "\n    font-family: ".concat(theme.typography['body2'].family, ";\n    font-size: ").concat(theme.typography['body2'].size, ";\n    line-height: ").concat(theme.typography['body2'].lineHeight, ";\n    letter-spacing: ").concat(theme.typography['body2'].letterSpacing, ";\n  ");
});
var FileUploadStyle = styled.div.withConfig({
  displayName: "FileUploadStyle",
  componentId: "sc-c0nzbh-5"
})(["display:", ";position:relative;flex-direction:column;justify-content:center;align-items:center;padding:", ";gap:", ";border:1px dashed ", ";border-radius:4px;font-weight:600;width:100%;", " ", " &:hover{border:1px dashed ", ";}", ",", "{color:", ";}", "{color:", ";}"], function (_ref4) {
  var hide = _ref4.hide;
  return hide ? 'none' : 'flex';
}, function (_ref5) {
  var theme = _ref5.theme;
  return "".concat(theme.spaces[3], " ").concat(theme.spaces[2]);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spaces[2];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.neutral[400];
}, function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled ? 'cursor: not-allowed;' : 'cursor: pointer;';
}, function (_ref9) {
  var theme = _ref9.theme,
    disabled = _ref9.disabled;
  return "\n    font-family: ".concat(theme.typography['body1'].family, ";\n    font-size: ").concat(theme.typography['body1'].size, ";\n    line-height: ").concat(theme.typography['body1'].lineHeight, ";\n    letter-spacing: ").concat(theme.typography['body1'].letterSpacing, ";\n    color: ").concat(disabled ? theme.colors.neutralGrey[400] : theme.colors.neutral[800], ";\n  ");
}, function (_ref10) {
  var theme = _ref10.theme,
    color = _ref10.color,
    colorLevel = _ref10.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.info[500];
}, FileUploadTitleColorStyle, FileUploadIconStyle, function (_ref11) {
  var theme = _ref11.theme,
    color = _ref11.color,
    colorLevel = _ref11.colorLevel,
    disabled = _ref11.disabled;
  return disabled ? theme.colors.neutralGrey[300] : color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.info[500];
}, FileUploadExtStyle, function (_ref12) {
  var theme = _ref12.theme,
    disabled = _ref12.disabled;
  return disabled ? theme.colors.neutralGrey[300] : theme.colors.neutralGrey[600];
});
var FileUploadOverlayStyle = styled.div.withConfig({
  displayName: "FileUploadOverlayStyle",
  componentId: "sc-c0nzbh-6"
})(["display:flex;align-items:center;justify-content:center;position:absolute;inset:0;background-color:rgba(255,255,255,0.2);z-index:1;"]);
var FileUploadLoadingStyle = styled.div.withConfig({
  displayName: "FileUploadLoadingStyle",
  componentId: "sc-c0nzbh-7"
})(["width:", ";height:", ";border-radius:50%;animation:1s linear infinite ", ",", " 1s ease;border:3px solid ", ";border-top:3px solid ", ";"], function (_ref13) {
  var theme = _ref13.theme;
  return theme.spaces[5];
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spaces[5];
}, function () {
  return animations.spin;
}, function () {
  return animations.fadein;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.primary[100];
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.primary[500];
});

var _excluded$m = ["disabled", "loading", "value", "onChange", "element"];
function HubFileUpload(_ref) {
  var globalDisabled = _ref.disabled,
    globalLoading = _ref.loading,
    value = _ref.value,
    onChange = _ref.onChange,
    element = _ref.element,
    props = _objectWithoutProperties(_ref, _excluded$m);
  var t = useI18nMessage();
  var _React$useState = React.useState(value),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    source = _React$useState2[0],
    setSource = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    canDrop = _React$useState4[0],
    setCanDrop = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    innerLoading = _React$useState6[0],
    setInnerLoading = _React$useState6[1];
  var loading = React.useMemo(function () {
    return globalLoading || innerLoading;
  }, [globalLoading, innerLoading]);
  var disabled = React.useMemo(function () {
    return globalDisabled || globalLoading || innerLoading;
  }, [globalDisabled, globalLoading, innerLoading]);
  var ref = React.useRef();
  var handleChange = React.useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(files) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!disabled) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setSource(files);
            result = onChange === null || onChange === void 0 ? void 0 : onChange(files);
            if (result instanceof Promise) {
              setInnerLoading(true);
              result["finally"](function () {
                return setInnerLoading(false);
              });
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [disabled, onChange]);
  React.useEffect(function () {
    setSource(value);
  }, [value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileUploadStyle, _extends({}, props, {
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!canDrop && !disabled) setCanDrop(true);
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      setCanDrop(false);
      handleChange === null || handleChange === void 0 ? void 0 : handleChange(Array.from(e.dataTransfer.files || []));
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      if (!disabled) {
        var _ref$current;
        (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.click();
      }
    },
    hide: !!element,
    disabled: disabled
  }), /*#__PURE__*/React.createElement(FileUploadIconStyle, null, /*#__PURE__*/React.createElement(IconImage, null)), canDrop ? t('hub-file-upload_title-drop') : props.title || /*#__PURE__*/React.createElement(FileUploadTitleStyle, null, source !== null && source !== void 0 && source[0] ? source.length > 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileUploadTitleColorStyle, null, source.length), t('hub-file-upload_selected-multi')) : /*#__PURE__*/React.createElement(React.Fragment, null, t('hub-file-upload_selected'), /*#__PURE__*/React.createElement(FileUploadTitleColorStyle, null, source[0].name)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FileUploadTitleColorStyle, null, t('hub-file-upload_title-blue')), t('hub-file-upload_title-content'))), source !== null && source !== void 0 && source[0] ? /*#__PURE__*/React.createElement(FileUploadExtStyle, {
    onClick: function onClick(e) {
      e.stopPropagation();
      handleChange === null || handleChange === void 0 ? void 0 : handleChange([]);
    }
  }, t('hub-file-upload_remove')) : /*#__PURE__*/React.createElement(FileUploadExtStyle, null, t('hub-file-upload_ext-title'), props.extensions, ' ', props.size && /*#__PURE__*/React.createElement(React.Fragment, null, t('hub-file-upload_ext-content'), props.size)), /*#__PURE__*/React.createElement(FileUploadInputStyle, {
    ref: ref,
    type: "file",
    accept: props.accept,
    multiple: props.multiple,
    onChange: function onChange(e) {
      var files = Array.from(e.target.files || []);
      handleChange === null || handleChange === void 0 ? void 0 : handleChange(files);
      e.target.value = '';
    }
  }), loading && /*#__PURE__*/React.createElement(FileUploadOverlayStyle, null, /*#__PURE__*/React.createElement(FileUploadLoadingStyle, null))), /*#__PURE__*/React.isValidElement(element) && /*#__PURE__*/React.cloneElement(element, _objectSpread2(_objectSpread2({}, element.props), {}, {
    onClick: function onClick() {
      if (!disabled) {
        var _ref$current2;
        (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.click();
      }
    }
  })));
}

var FormStyle = styled.form.withConfig({
  displayName: "FormStyle",
  componentId: "sc-19x8hnv-0"
})(["display:flex;flex-direction:column;gap:", ";width:100%;"], function (_ref) {
  var theme = _ref.theme,
    gap = _ref.gap;
  return gap ? theme.spaces[gap] : theme.spaces[3];
});

var _excluded$l = ["onSubmit", "children"];
function HubForm(_ref) {
  var _onSubmit = _ref.onSubmit,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$l);
  return /*#__PURE__*/React.createElement(FormStyle, _extends({
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      _onSubmit === null || _onSubmit === void 0 ? void 0 : _onSubmit(e.target);
    }
  }, props), children);
}

function factoryTemplateGrid(theme, cols, gap) {
  if (cols && cols.reduce) {
    return "grid-template-columns: ".concat(cols.reduce(function (acc, col) {
      var gridcol = theme.grid[col];
      if (gridcol) {
        var gapv = parsePixel(theme.spaces[gap]);
        var colv = parsePercent(gridcol);
        var gapr = roundNumber(gapv - gapv * (colv / 100));
        return acc + " calc(".concat(gridcol, " - ").concat(gapr, "px)");
      }
      return acc + " ".concat(col);
    }, ''), ";");
  }
  return '';
}
var GridGutterStyle = css(["", ";"], function (_ref) {
  var theme = _ref.theme,
    gutter = _ref.gutter;
  if (!gutter || (gutter === null || gutter === void 0 ? void 0 : gutter.length) === 0) return '';
  if (typeof gutter === 'string') return "margin: -".concat(theme.spaces[gutter], " -").concat(theme.spaces[gutter], " -").concat(theme.spaces[gutter], " -").concat(theme.spaces[gutter]);
  if (gutter.length === 4) {
    return "margin: -".concat(theme.spaces[gutter[0]], " -").concat(theme.spaces[gutter[1]], " -").concat(theme.spaces[gutter[2]], " -").concat(theme.spaces[gutter[3]]);
  }
  if (gutter.length === 3) {
    return "margin: -".concat(theme.spaces[gutter[0]], " -").concat(theme.spaces[gutter[1]], " -").concat(theme.spaces[gutter[2]]);
  }
  if (gutter.length === 2) {
    return "margin: -".concat(theme.spaces[gutter[0]], " -").concat(theme.spaces[gutter[1]]);
  }
  return "margin: -".concat(theme.spaces[gutter[0]]);
});
var GridPadStyle = css(["", ";"], function (_ref2) {
  var theme = _ref2.theme,
    pad = _ref2.pad;
  if (!pad) return '';
  if (typeof pad === 'string') return "padding: ".concat(theme.spaces[pad] || pad);
  if (pad.length === 4) {
    return "padding: ".concat(theme.spaces[pad[0]] || pad[0], " ").concat(theme.spaces[pad[1]] || pad[1], " ").concat(theme.spaces[pad[2]] || pad[2], " ").concat(theme.spaces[pad[3]] || pad[3]);
  }
  if (pad.length === 3) {
    return "padding: ".concat(theme.spaces[pad[0]] || pad[0], " ").concat(theme.spaces[pad[1]] || pad[1], " ").concat(theme.spaces[pad[2]] || pad[2]);
  }
  if (pad.length === 2) {
    return "padding: ".concat(theme.spaces[pad[0]] || pad[0], " ").concat(theme.spaces[pad[1]] || pad[1]);
  }
  return "padding: ".concat(theme.spaces[pad[0]] || pad[0]);
});
var GridCols = css(["display:", ";align-items:", ";justify-items:", ";width:", ";", ""], function (_ref3) {
  var block = _ref3.block;
  return block ? 'block' : 'grid';
}, function (_ref4) {
  var align = _ref4.align;
  return align || 'start';
}, function (_ref5) {
  var justify = _ref5.justify;
  return justify || 'start';
}, function (_ref6) {
  var width = _ref6.width;
  return width || '100%';
}, function (_ref7) {
  var theme = _ref7.theme,
    cols = _ref7.cols,
    gap = _ref7.gap;
  return "\n    ".concat(factoryTemplateGrid(theme, cols, gap), "\n  ");
});
var GridFlex = css(["display:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";"], function (_ref8) {
  var block = _ref8.block;
  return block ? 'block' : 'flex';
}, function (_ref9) {
  var row = _ref9.row;
  return row ? 'row' : 'column';
}, function (_ref10) {
  var align = _ref10.align;
  return align || 'start';
}, function (_ref11) {
  var justify = _ref11.justify;
  return justify || 'start';
}, function (_ref12) {
  var width = _ref12.width;
  return width || '100%';
});
var GridFilled = css(["& > *{width:100%;}"]);
var GridExtra = css(["", " ", " ", " ", " ", " ", ""], function (_ref13) {
  var order = _ref13.order;
  return order && "order: ".concat(order, ";");
}, function (_ref14) {
  var rowSize = _ref14.rowSize;
  return rowSize && "grid-auto-rows: ".concat(rowSize, ";");
}, function (_ref15) {
  var columnStart = _ref15.columnStart;
  return columnStart && "grid-column-start: ".concat(columnStart, ";");
}, function (_ref16) {
  var columnEnd = _ref16.columnEnd;
  return columnEnd && "grid-column-end: ".concat(columnEnd, ";");
}, function (_ref17) {
  var rowStart = _ref17.rowStart;
  return rowStart && "grid-row-start: ".concat(rowStart, ";");
}, function (_ref18) {
  var rowEnd = _ref18.rowEnd;
  return rowEnd && "grid-row-end: ".concat(rowEnd, ";");
});
var GridMobile = css(["", ""], function (_ref19) {
  var theme = _ref19.theme,
    responsive = _ref19.responsive,
    row = _ref19.row,
    align = _ref19.align,
    justify = _ref19.justify;
  return responsive ? "\n    @media (".concat(theme.mediaQuery[responsive], ") {\n      display: flex;\n      flex-direction: column;\n      align-items: ").concat((row ? align : justify) || 'start', ";\n      justify-content: ").concat((row ? justify : align) || 'start', ";\n      width: 100%;\n    }\n  ") : '';
});
var GridStyle = styled.div.withConfig({
  displayName: "GridStyle",
  componentId: "sc-q2tqsr-0"
})(["height:", ";min-height:", ";max-height:", ";overflow:", ";position:", ";gap:", ";", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function (_ref20) {
  var height = _ref20.height;
  return height;
}, function (_ref21) {
  var minHeight = _ref21.minHeight;
  return minHeight;
}, function (_ref22) {
  var maxHeight = _ref22.maxHeight;
  return maxHeight;
}, function (_ref23) {
  var overflow = _ref23.overflow;
  return overflow;
}, function (_ref24) {
  var position = _ref24.position;
  return position;
}, function (_ref25) {
  var theme = _ref25.theme,
    gap = _ref25.gap;
  return gap ? theme.spaces[gap] : undefined;
}, function (_ref26) {
  var layer = _ref26.layer;
  return layer ? "z-index: ".concat(layer, ";") : '';
}, function (_ref27) {
  var spacer = _ref27.spacer;
  return spacer ? 'flex: 1 1 auto;' : '';
}, function (_ref28) {
  var flex = _ref28.flex;
  return flex ? 'flex: 1;' : '';
}, function (_ref29) {
  var fluid = _ref29.fluid;
  if (!fluid) return '';
  switch (fluid) {
    case 'horizontal':
      return 'margin: 0 auto;';
    case 'vertical':
      return 'margin: auto 0;';
    default:
      return 'margin: auto;';
  }
}, function (_ref30) {
  var theme = _ref30.theme,
    inset = _ref30.inset;
  if (!inset) return '';
  if (Array.isArray(inset)) {
    return "\n        ".concat(inset[0] ? "top: ".concat(theme.spaces[inset[0]] || inset[0], ";") : '', ";\n        ").concat(inset[1] ? "right: ".concat(theme.spaces[inset[1]] || inset[1], ";") : '', ";\n        ").concat(inset[2] ? "bottom: ".concat(theme.spaces[inset[2]] || inset[2], ";") : '', ";\n        ").concat(inset[3] ? "left: ".concat(theme.spaces[inset[3]] || inset[3], ";") : '', ";\n      ");
  }
  return "inset: ".concat(inset, ";");
}, function (_ref31) {
  var filled = _ref31.filled;
  return filled ? GridFilled : '';
}, function (_ref32) {
  var cols = _ref32.cols;
  return cols ? GridCols : GridFlex;
}, GridGutterStyle, GridPadStyle, GridMobile, GridExtra);

var _excluded$k = ["children"];
function HubGrid(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$k);
  return /*#__PURE__*/React.createElement(GridStyle, props, children);
}

var IconStyle = styled.div.withConfig({
  displayName: "IconStyle",
  componentId: "sc-6459di-0"
})(["display:flex;align-items:center;justify-content:center;border-radius:50%;", " color:", ";background-color:", ";", " svg{height:inherit;width:inherit;min-width:inherit;transition:0.3s ease-in-out transform;}"], function (_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    width = _ref.width,
    height = _ref.height;
  switch (size) {
    case 'xs':
      return "\n          width: calc(".concat(theme.spaces[2], " + 4px);\n          height: calc(").concat(theme.spaces[2], " + 4px);\n          min-width: calc(").concat(theme.spaces[2], " + 4px);\n        ");
    case 'sm':
      return "\n          width: ".concat(theme.spaces[3], ";\n          height: ").concat(theme.spaces[3], ";\n          min-width: ").concat(theme.spaces[3], ";\n        ");
    case 'md':
      return "\n          width: ".concat(theme.spaces[5], ";\n          height: ").concat(theme.spaces[5], ";\n          min-width: ").concat(theme.spaces[5], ";\n        ");
    case 'lg':
      return "\n          width: ".concat(theme.spaces[6], ";\n          height: ").concat(theme.spaces[6], ";\n          min-width: ").concat(theme.spaces[6], ";\n        ");
    default:
      return "\n          width: ".concat(width || theme.spaces[5], ";\n          height: ").concat(height || theme.spaces[5], ";\n          min-width: ").concat(width || theme.spaces[5], ";\n        ");
  }
}, function (_ref2) {
  var theme = _ref2.theme,
    color = _ref2.color,
    colorLevel = _ref2.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : undefined;
}, function (_ref3) {
  var theme = _ref3.theme,
    bgColor = _ref3.bgColor,
    bgColorLevel = _ref3.bgColorLevel;
  return bgColor && bgColorLevel ? theme.colors[bgColor][bgColorLevel] : bgColor && theme.colors[bgColor] ? theme.colors[bgColor][100] : bgColor ? bgColor : undefined;
}, function (_ref4) {
  var theme = _ref4.theme,
    pad = _ref4.pad;
  if (typeof pad === 'string') {
    return "padding: ".concat(theme.spaces[pad], ";");
  }
  if (Array.isArray(pad)) {
    return "padding: ".concat(pad.reduce(function (acc, x) {
      return acc + "".concat(theme.spaces[x], " ");
    }, ''), ";");
  }
  return '';
});

var _excluded$j = ["icon", "rotate"];
function HubIcon(_ref) {
  var Icon = _ref.icon,
    rotate = _ref.rotate,
    props = _objectWithoutProperties(_ref, _excluded$j);
  var iconProps = React.useMemo(function () {
    var props = {
      style: {}
    };
    if (props.style) {
      if (rotate) {
        props.style.transform = "rotate(".concat(rotate, "deg)");
      }
    }
    return props;
  }, [rotate]);
  return /*#__PURE__*/React.createElement(IconStyle, props, /*#__PURE__*/React.createElement(Icon, iconProps));
}

var ListItemStyle = styled.li.withConfig({
  displayName: "ListItemStyle",
  componentId: "sc-qv1qqs-0"
})(["display:flex;align-items:center;background-color:", ";", " width:100%;gap:", ";font-weight:400;transition:background-color 1s;", " ", " ", ""], function (_ref) {
  var theme = _ref.theme,
    active = _ref.active;
  return active ? theme.colors.neutral[200] : undefined;
}, function (_ref2) {
  var theme = _ref2.theme,
    radius = _ref2.radius;
  return radius ? "border-radius: ".concat(theme.spaces[radius], ";") : '';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[2];
}, function (_ref4) {
  var nowrap = _ref4.nowrap;
  return nowrap && 'white-space: nowrap;';
}, function (_ref5) {
  var theme = _ref5.theme,
    border = _ref5.border,
    borderColor = _ref5.borderColor,
    borderColorLevel = _ref5.borderColorLevel,
    fullBorder = _ref5.fullBorder;
  if (!border && !fullBorder) return '';
  if (fullBorder) {
    return "\n          border: 1px solid ".concat(borderColor && borderColorLevel ? theme.colors[borderColor][borderColorLevel] : borderColor ? theme.colors[borderColor][500] : theme.colors.neutral[300], " !important;\n        ");
  }
  return "\n        &:not(:last-of-type) {\n          border-bottom: 1px solid ".concat(borderColor && borderColorLevel ? theme.colors[borderColor][borderColorLevel] : borderColor ? theme.colors[borderColor][500] : theme.colors.neutral[300], " !important;\n        }\n      ");
}, function (_ref6) {
  var theme = _ref6.theme,
    accentBorderColor = _ref6.accentBorderColor,
    accentBorderColorLevel = _ref6.accentBorderColorLevel;
  return accentBorderColor && "\n    border-left: 8px solid ".concat(accentBorderColor && accentBorderColorLevel ? theme.colors[accentBorderColor][accentBorderColorLevel] : theme.colors[accentBorderColor][500], " !important;\n  ");
});
var ListItemHoverStyle = css(["&:hover{background-color:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.neutral[200];
});
var ListStyle = styled.ul.withConfig({
  displayName: "ListStyle",
  componentId: "sc-qv1qqs-1"
})(["display:flex;flex-direction:column;width:100%;", " ", ";", "{", " ", "}"], function (_ref8) {
  var theme = _ref8.theme,
    gap = _ref8.gap;
  return gap ? "gap: ".concat(theme.spaces[gap], ";") : '';
}, function (_ref9) {
  var height = _ref9.height;
  return height && "\n    max-height: ".concat(height, ";\n    overflow: auto;\n  ");
}, ListItemStyle, function (_ref10) {
  var hover = _ref10.hover;
  return hover ? ListItemHoverStyle : '';
}, function (_ref11) {
  var theme = _ref11.theme,
    pad = _ref11.pad;
  if (typeof pad === 'string') {
    return "padding: ".concat(theme.spaces[pad], " ").concat(theme.spaces[pad], ";");
  }
  if (Array.isArray(pad)) {
    return "padding: ".concat(pad.reduce(function (acc, x) {
      return acc + "".concat(theme.spaces[x], " ");
    }, ''), ";");
  }
  return "padding: ".concat(theme.spaces[1], " ").concat(theme.spaces[3], ";");
});
var ListLoadMoreStyle = styled.div.withConfig({
  displayName: "ListLoadMoreStyle",
  componentId: "sc-qv1qqs-2"
})(["display:flex;align-items:center;justify-content:center;position:absolute;z-index:1;bottom:0;left:0;right:0;background-color:", ";color:", ";padding:", " 0;box-shadow:0px -10px 24px -10px rgba(0,0,0,0.2);font-weight:600;border-bottom-left-radius:", ";border-bottom-right-radius:", ";animation:0.5s ease ", ";"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.white[500];
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.neutralGrey[600];
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spaces[2];
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spaces[3];
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.spaces[3];
}, function () {
  return animations.fadein;
});

var _excluded$i = ["onLoadMore", "children"],
  _excluded2$5 = ["children"];
var lazy$1 = debounce(300);
function HubList(_ref) {
  var onLoadMore = _ref.onLoadMore,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$i);
  var t = useI18nMessage();
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loadMore = _React$useState2[0],
    setLoadMore = _React$useState2[1];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleScroll(e) {
    if (e && e.target && onLoadMore) {
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 24) {
        lazy$1(function () {
          onLoadMore();
          setLoadMore(true);
          setTimeout(function () {
            e.target.scroll({
              top: e.target.scrollTop + 100,
              behavior: 'smooth'
            });
            setLoadMore(false);
          }, 1000);
        });
      }
    }
  }
  return /*#__PURE__*/React.createElement(ListStyle, _extends({}, props, {
    onScroll: onLoadMore ? handleScroll : undefined
  }), children, loadMore && /*#__PURE__*/React.createElement(ListLoadMoreStyle, null, t('hub-list_loadmore')));
}
var HubListItem = /*#__PURE__*/React.forwardRef(function HubListItem(_ref2, ref) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2$5);
  return /*#__PURE__*/React.createElement(ListItemStyle, _extends({
    ref: ref
  }, props), children);
});

var IconClose$2 = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.0567 12.7367L17.7783 8.02208C17.9194 7.88094 17.9987 7.68951 17.9987 7.48991C17.9987 7.29031 17.9194 7.09888 17.7783 6.95774C17.6372 6.8166 17.4458 6.7373 17.2462 6.7373C17.0466 6.7373 16.8552 6.8166 16.7141 6.95774L12 11.6798L7.28592 6.95774C7.14479 6.8166 6.95338 6.7373 6.7538 6.7373C6.55422 6.7373 6.36281 6.8166 6.22169 6.95774C6.08056 7.09888 6.00128 7.29031 6.00128 7.48991C6.00128 7.68951 6.08056 7.88094 6.22169 8.02208L10.9433 12.7367L6.22169 17.4513C6.15144 17.5209 6.09569 17.6038 6.05764 17.6952C6.01959 17.7865 6 17.8845 6 17.9834C6 18.0824 6.01959 18.1803 6.05764 18.2717C6.09569 18.363 6.15144 18.4459 6.22169 18.5156C6.29136 18.5858 6.37425 18.6416 6.46558 18.6797C6.55691 18.7177 6.65487 18.7373 6.7538 18.7373C6.85274 18.7373 6.9507 18.7177 7.04203 18.6797C7.13335 18.6416 7.21625 18.5858 7.28592 18.5156L12 13.7935L16.7141 18.5156C16.7838 18.5858 16.8666 18.6416 16.958 18.6797C17.0493 18.7177 17.1473 18.7373 17.2462 18.7373C17.3451 18.7373 17.4431 18.7177 17.5344 18.6797C17.6257 18.6416 17.7086 18.5858 17.7783 18.5156C17.8486 18.4459 17.9043 18.363 17.9424 18.2717C17.9804 18.1803 18 18.0824 18 17.9834C18 17.8845 17.9804 17.7865 17.9424 17.6952C17.9043 17.6038 17.8486 17.5209 17.7783 17.4513L13.0567 12.7367Z",
    fill: "currentColor"
  }));
});

var ModalOverlayStyle = styled.div.withConfig({
  displayName: "ModalOverlayStyle",
  componentId: "sc-1czxd48-0"
})(["inset:0;z-index:40;background-color:", ";animation:0.5s ease ", ";"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.colors.neutral[500], "24");
}, function () {
  return animations.fadein;
});
var ModalHeaderStyle = styled.div.withConfig({
  displayName: "ModalHeaderStyle",
  componentId: "sc-1czxd48-1"
})(["display:flex;align-items:center;justify-content:space-between;padding:", ";border-top-left-radius:4px;border-top-right-radius:4px;font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";border-bottom:1px solid ", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[5];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.h4.family;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.h4.size;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.h4.lineHeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.h4.letterSpacing;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.neutral[300];
});
var ModalHeaderBtnCloseStyle = styled.button.withConfig({
  displayName: "ModalHeaderBtnCloseStyle",
  componentId: "sc-1czxd48-2"
})(["display:flex;border:none;background-color:transparent;color:inherit;cursor:pointer;"]);
var ModalHeaderCloseFloatStyle = styled.div.withConfig({
  displayName: "ModalHeaderCloseFloatStyle",
  componentId: "sc-1czxd48-3"
})(["display:flex;justify-content:flex-end;padding:", ";margin-bottom:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return "".concat(theme.spaces[3], " ").concat(theme.spaces[3], " 0 0");
}, function (_ref9) {
  var theme = _ref9.theme;
  return "-".concat(theme.spaces[2]);
});
var ModalBodyStyle = styled.div.withConfig({
  displayName: "ModalBodyStyle",
  componentId: "sc-1czxd48-4"
})(["", ""], function (_ref10) {
  var minHeight = _ref10.minHeight,
    maxHeight = _ref10.maxHeight,
    offsetHeight = _ref10.offsetHeight;
  if (minHeight && maxHeight) {
    return "\n        min-height: calc(".concat(minHeight, " - ").concat(offsetHeight, "px);\n        max-height: calc(").concat(maxHeight, " - ").concat(offsetHeight, "px);\n        overflow: auto;\n      ");
  }
  if (minHeight) {
    return "\n        min-height: calc(".concat(minHeight, " - ").concat(offsetHeight, "px);\n        overflow: auto;\n      ");
  }
  if (maxHeight) {
    return "\n        max-height: calc(".concat(maxHeight, " - ").concat(offsetHeight, "px);\n        overflow: auto;\n      ");
  }
  return '';
});
var ModalWrapperStyle = styled.div.withConfig({
  displayName: "ModalWrapperStyle",
  componentId: "sc-1czxd48-5"
})(["z-index:42;box-shadow:", ";border-radius:4px;animation:0.5s ease ", ";"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.shadows[1];
}, function () {
  return animations.fadein;
});
var ModalActionsStyle = styled.div.withConfig({
  displayName: "ModalActionsStyle",
  componentId: "sc-1czxd48-6"
})(["display:flex;align-items:center;justify-content:center;gap:", ";padding:", ";background-color:", ";border-bottom-left-radius:4px;border-bottom-right-radius:4px;"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spaces[2];
}, function (_ref13) {
  var theme = _ref13.theme;
  return "".concat(theme.spaces[3], " ").concat(theme.spaces[5]);
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.neutral[200];
});
var ModalStyle = styled.div.withConfig({
  displayName: "ModalStyle",
  componentId: "sc-1czxd48-7"
})(["position:fixed;display:flex;z-index:41;", " ", " ", "{position:fixed;", "}", "{", ";", ";}", "{height:", ";width:", ";min-width:", ";max-width:", ";border-radius:", ";background-color:", ";transition:0.5s width;@media (", "){width:", ";}}", "{color:", ";}", "{padding:", ";border-bottom:none;}", ""], function (_ref15) {
  var position = _ref15.position;
  switch (position) {
    case 'top':
      return "\n          align-items: start;\n          justify-content: center;\n        ";
    case 'right':
      return "\n          align-items: center;\n          justify-content: end;\n        ";
    case 'bottom':
      return "\n          align-items: end;\n          justify-content: center;\n        ";
    case 'left':
      return "\n          align-items: center;\n          justify-content: start;\n        ";
    default:
      return "\n          align-items: center;\n          justify-content: center;\n        ";
  }
}, function (_ref16) {
  var theme = _ref16.theme,
    offset = _ref16.offset;
  if (!offset) return "inset: 0;";
  if (typeof offset === 'string') return "inset: ".concat(theme.spaces[offset] || offset, ";");
  if (offset.length === 4) {
    return "inset: ".concat(theme.spaces[offset[0]] || offset[0], " ").concat(theme.spaces[offset[1]] || offset[1], " ").concat(theme.spaces[offset[2]] || offset[2], " ").concat(theme.spaces[offset[3]] || offset[3], ";");
  }
  if (offset.length === 3) {
    return "inset: ".concat(theme.spaces[offset[0]] || offset[0], " ").concat(theme.spaces[offset[1]] || offset[1], " ").concat(theme.spaces[offset[2]] || offset[2], ";");
  }
  if (offset.length === 2) {
    return "inset: ".concat(theme.spaces[offset[0]] || offset[0], " ").concat(theme.spaces[offset[1]] || offset[1], ";");
  }
  return "inset: ".concat(theme.spaces[offset[0]] || offset[0], ";");
}, ModalOverlayStyle, function (_ref17) {
  var theme = _ref17.theme,
    darkOverlay = _ref17.darkOverlay;
  return darkOverlay ? "background-color: ".concat(theme.colors.neutral[700], "80;") : '';
}, ModalBodyStyle, function (_ref18) {
  var theme = _ref18.theme,
    pad = _ref18.pad;
  if (!pad) return "padding: ".concat(theme.spaces[3]);
  if (typeof pad === 'string') return "padding: ".concat(theme.spaces[pad]);
  if (pad.length === 4) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]], " ").concat(theme.spaces[pad[3]]);
  }
  if (pad.length === 3) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]]);
  }
  if (pad.length === 2) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]]);
  }
  return "padding: ".concat(theme.spaces[pad[0]]);
}, function (_ref19) {
  var overflow = _ref19.overflow;
  return overflow && "\n      overflow-y: ".concat((Array.isArray(overflow) ? overflow[0] : overflow) ? 'auto' : 'hidden', ";\n      overflow-x: ").concat((Array.isArray(overflow) ? overflow[1] : overflow) ? 'auto' : 'hidden', ";\n    ");
}, ModalWrapperStyle, function (_ref20) {
  var height = _ref20.height;
  return height;
}, function (_ref21) {
  var width = _ref21.width;
  return width;
}, function (_ref22) {
  var minWidth = _ref22.minWidth;
  return minWidth;
}, function (_ref23) {
  var maxWidth = _ref23.maxWidth;
  return maxWidth;
}, function (_ref24) {
  var theme = _ref24.theme,
    radius = _ref24.radius;
  return theme.spaces[radius || 1];
}, function (_ref25) {
  var theme = _ref25.theme,
    color = _ref25.color,
    colorLevel = _ref25.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.white[500];
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.mediaQuery.md;
}, function (_ref27) {
  var widthMd = _ref27.widthMd;
  return widthMd || '96vw';
}, ModalHeaderCloseFloatStyle, function (_ref28) {
  var theme = _ref28.theme,
    colorText = _ref28.colorText,
    colorTextLevel = _ref28.colorTextLevel;
  return colorText && colorTextLevel ? theme.colors[colorText][colorTextLevel] : colorText ? theme.colors[colorText][500] : theme.colors.neutralGrey[600];
}, ModalHeaderStyle, function (_ref29) {
  var theme = _ref29.theme;
  return theme.spaces[3];
}, function (_ref30) {
  var noPrintable = _ref30.noPrintable;
  return noPrintable && "\n    @media print {\n      display: none;\n    }\n  ";
});

var _excluded$h = ["opened", "header", "actions", "onClose", "noCloseBtn", "children"];
function HubModal(_ref) {
  var opened = _ref.opened,
    header = _ref.header,
    actions = _ref.actions,
    onClose = _ref.onClose,
    noCloseBtn = _ref.noCloseBtn,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$h);
  var _React$useState = React.useState(opened),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var _React$useState3 = React.useState(header ? 74 : 0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    headerHeight = _React$useState4[0],
    setHeaderHeight = _React$useState4[1];
  var _React$useState5 = React.useState(actions ? 72 : 0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    actionsHeight = _React$useState6[0],
    setActionsHeight = _React$useState6[1];
  React.useEffect(function () {
    setShow(opened);
  }, [opened]);
  return show ? (/*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React.createElement(ModalStyle, props, /*#__PURE__*/React.createElement(ModalOverlayStyle, {
    "data-testid": factoryTestId(props, 'close'),
    onClick: onClose
  }), /*#__PURE__*/React.createElement(ModalWrapperStyle, null, /*#__PURE__*/React.createElement(React.Fragment, null, header ? /*#__PURE__*/React.createElement(ModalHeaderStyle, {
    ref: function ref(el) {
      return setHeaderHeight((el === null || el === void 0 ? void 0 : el.clientHeight) || 74);
    }
  }, header, !noCloseBtn && /*#__PURE__*/React.createElement(ModalHeaderBtnCloseStyle, {
    "data-testid": factoryTestId(props, 'head-close'),
    type: "button",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(IconClose$2, null))) : onClose && !noCloseBtn ? /*#__PURE__*/React.createElement(ModalHeaderCloseFloatStyle, null, /*#__PURE__*/React.createElement(ModalHeaderBtnCloseStyle, {
    "data-testid": factoryTestId(props, 'btn-close'),
    type: "button",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(IconClose$2, null))) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(ModalBodyStyle, {
    minHeight: props.minContentHeight,
    maxHeight: props.contentHeight,
    offsetHeight: headerHeight + actionsHeight
  }, children), actions && /*#__PURE__*/React.createElement(ModalActionsStyle, {
    ref: function ref(el) {
      return setActionsHeight((el === null || el === void 0 ? void 0 : el.clientHeight) || 74);
    }
  }, actions)))), document.body)) : /*#__PURE__*/React.createElement(React.Fragment, null);
}

var NavbarStyle = styled.div.withConfig({
  displayName: "NavbarStyle",
  componentId: "sc-c5f37a-0"
})(["display:flex;align-items:center;width:100%;height:", ";gap:", ";background-color:", ";color:", ";", " ", ""], function (_ref) {
  var height = _ref.height;
  return height || '75px';
}, function (_ref2) {
  var theme = _ref2.theme,
    gap = _ref2.gap;
  return theme.spaces[gap || 5];
}, function (_ref3) {
  var theme = _ref3.theme,
    color = _ref3.color,
    colorLevel = _ref3.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.primary[500];
}, function (_ref4) {
  var theme = _ref4.theme,
    colorText = _ref4.colorText,
    colorTextLevel = _ref4.colorTextLevel;
  return colorText && colorTextLevel ? theme.colors[colorText][colorTextLevel] : colorText && theme.colors[colorText] ? theme.colors[colorText][500] : colorText ? colorText : theme.colors.white[500];
}, function (_ref5) {
  var fixed = _ref5.fixed;
  return fixed ? "\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 31;\n  " : '';
}, function (_ref6) {
  var theme = _ref6.theme,
    pad = _ref6.pad;
  if (typeof pad === 'string') {
    return "padding: 0 ".concat(theme.spaces[pad], ";");
  }
  if (Array.isArray(pad)) {
    return "padding: ".concat(pad.reduce(function (acc, x) {
      return acc + "".concat(theme.spaces[x], " ");
    }, ''), ";");
  }
  return "\n      padding: 0 ".concat(theme.spaces[6], ";\n\n      @media (").concat(theme.mediaQuery.md, ") {\n        padding: 0 ").concat(theme.spaces[3], ";\n      }\n    ");
});
var NavbarSpacerStyle = styled.div.withConfig({
  displayName: "NavbarSpacerStyle",
  componentId: "sc-c5f37a-1"
})(["flex:1 1 auto;"]);
var NavbarContentStyle = styled.div.withConfig({
  displayName: "NavbarContentStyle",
  componentId: "sc-c5f37a-2"
})(["display:flex;align-items:center;gap:", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.spaces[3];
});

var _excluded$g = ["left", "right", "center", "children"];
function HubNavbar(_ref) {
  var left = _ref.left,
    right = _ref.right,
    center = _ref.center,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$g);
  return /*#__PURE__*/React.createElement(NavbarStyle, props, left && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavbarContentStyle, null, left), !center && /*#__PURE__*/React.createElement("div", null)), children, center && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavbarSpacerStyle, null), /*#__PURE__*/React.createElement(NavbarContentStyle, null, center), !right && /*#__PURE__*/React.createElement(NavbarSpacerStyle, null)), right && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavbarSpacerStyle, null), /*#__PURE__*/React.createElement(NavbarContentStyle, null, right)));
}

var IconArrow = (function (props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.88712 7.52655L7.06045 4.69988C6.99847 4.6374 6.92474 4.5878 6.8435 4.55396C6.76226 4.52011 6.67512 4.50269 6.58712 4.50269C6.49911 4.50269 6.41197 4.52011 6.33073 4.55396C6.24949 4.5878 6.17576 4.6374 6.11378 4.69988C5.98962 4.82479 5.91992 4.99376 5.91992 5.16988C5.91992 5.34601 5.98962 5.51498 6.11378 5.63988L8.47378 7.99988L6.11378 10.3599C5.98962 10.4848 5.91992 10.6538 5.91992 10.8299C5.91992 11.006 5.98962 11.175 6.11378 11.2999C6.17608 11.3617 6.24995 11.4106 6.33118 11.4437C6.4124 11.4769 6.49938 11.4937 6.58712 11.4932C6.67485 11.4937 6.76183 11.4769 6.84305 11.4437C6.92428 11.4106 6.99816 11.3617 7.06045 11.2999L9.88712 8.47322C9.9496 8.41124 9.9992 8.33751 10.033 8.25627C10.0669 8.17503 10.0843 8.08789 10.0843 7.99988C10.0843 7.91188 10.0669 7.82474 10.033 7.7435C9.9992 7.66226 9.9496 7.58853 9.88712 7.52655Z",
    fill: "currentColor"
  }));
});

var PaginationButtonStyle = css(["display:flex;align-items:center;gap:", ";font-weight:600;color:", ";border:none;outline:none;background-color:transparent;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[2];
}, function (_ref2) {
  var theme = _ref2.theme,
    active = _ref2.active;
  return active ? theme.colors.primary[500] : theme.colors.neutralGrey[600];
});
var PaginationPrevStyle = styled.button.withConfig({
  displayName: "PaginationPrevStyle",
  componentId: "sc-1o677jw-0"
})(["", " svg{transform:rotate(180deg);}"], PaginationButtonStyle);
var PaginationNextStyle = styled.button.withConfig({
  displayName: "PaginationNextStyle",
  componentId: "sc-1o677jw-1"
})(["", ""], PaginationButtonStyle);
var PaginationIndicatorStyle = styled.button.withConfig({
  displayName: "PaginationIndicatorStyle",
  componentId: "sc-1o677jw-2"
})(["", " justify-content:center;width:", ";height:", ";background-color:", ";border-radius:4px;"], PaginationButtonStyle, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[6];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spaces[6];
}, function (_ref5) {
  var theme = _ref5.theme,
    active = _ref5.active;
  return active ? theme.colors.neutral[200] : undefined;
});
var PaginationSizeContainerStyle = styled.div.withConfig({
  displayName: "PaginationSizeContainerStyle",
  componentId: "sc-1o677jw-3"
})(["display:flex;align-items:center;gap:", ";color:", ";svg{transform:rotate(90deg);}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spaces[1];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary[500];
});
var PaginationSizeChangerStyle = styled.select.withConfig({
  displayName: "PaginationSizeChangerStyle",
  componentId: "sc-1o677jw-4"
})(["display:flex;align-items:center;justify-content:center;min-width:", ";height:", ";color:", ";text-align:center;font-weight:600;border:none;outline:none;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spaces[6];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spaces[6];
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.primary[500];
});
var PaginationStyle = styled.div.withConfig({
  displayName: "PaginationStyle",
  componentId: "sc-1o677jw-5"
})(["display:flex;align-items:center;gap:", ";color:", ";", ",", ",", ",", ",", "{", "}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.spaces[3];
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.neutralGrey[600];
}, PaginationPrevStyle, PaginationNextStyle, PaginationSizeChangerStyle, PaginationSizeContainerStyle, PaginationIndicatorStyle, function (_ref13) {
  var theme = _ref13.theme,
    disabled = _ref13.disabled;
  if (disabled) {
    return "\n          color: ".concat(theme.colors.neutralGrey[500], ";\n          cursor: not-allowed;\n        ");
  }
  return "cursor: pointer;";
});

var _excluded$f = ["current", "pageSize", "totalItems", "pageSizeOptions", "onChange", "onChangePageSize"];
function HubPagination(_ref) {
  var current = _ref.current,
    pageSize = _ref.pageSize,
    totalItems = _ref.totalItems,
    pageSizeOptions = _ref.pageSizeOptions,
    onChange = _ref.onChange,
    onChangePageSize = _ref.onChangePageSize,
    props = _objectWithoutProperties(_ref, _excluded$f);
  var t = useI18nMessage();
  var sizeOptions = React.useMemo(function () {
    return pageSizeOptions || [5, 10, 15, 25, 50];
  }, [pageSizeOptions]);
  var totalPage = React.useMemo(function () {
    return totalItems ? Math.ceil(totalItems / pageSize) : 1;
  }, [totalItems, pageSize]);
  var indicators = React.useMemo(function () {
    if (totalPage <= 5) {
      return new Array(totalPage).fill(1).map(function (_, i) {
        return i + 1;
      });
    }
    if (current >= totalPage - 2) {
      return [1, '...', totalPage - 2, totalPage - 1, totalPage];
    }
    if (current > 3) {
      return [1, '...', current - 1, current, current + 1, '...', totalPage];
    }
    return [1, 2, 3, '...', totalPage];
  }, [totalPage, current]);
  function handlePageSize(e) {
    onChangePageSize === null || onChangePageSize === void 0 ? void 0 : onChangePageSize(Number(e.target.value));
  }
  function handlePageChange(next) {
    if (!props.disabled && typeof next !== 'string') {
      onChange === null || onChange === void 0 ? void 0 : onChange(next);
    }
  }
  React.useEffect(function () {
    if (current > totalPage) {
      onChange === null || onChange === void 0 ? void 0 : onChange(totalPage);
    }
  }, [totalPage]);
  return /*#__PURE__*/React.createElement(PaginationStyle, props, /*#__PURE__*/React.createElement(PaginationPrevStyle, {
    "data-testid": factoryTestId(props, 'previous'),
    type: "button",
    active: current > 1,
    onClick: function onClick() {
      if (!props.disabled && current > 1) {
        var numPage = current - 1;
        onChange === null || onChange === void 0 ? void 0 : onChange(numPage);
      }
    }
  }, /*#__PURE__*/React.createElement(IconArrow, null), props.showLabel && t('hub-pagination_prev-label')), !props.noShowIndicators && indicators.map(function (indicator, i) {
    return /*#__PURE__*/React.createElement(PaginationIndicatorStyle, {
      key: "hub-pagination_indicator-".concat(i),
      "data-testid": factoryTestId(props, "indicator-".concat(indicator)),
      type: "button",
      active: current === indicator,
      onClick: function onClick() {
        return handlePageChange(indicator);
      }
    }, indicator);
  }), /*#__PURE__*/React.createElement(PaginationNextStyle, {
    "data-testid": factoryTestId(props, 'next'),
    type: "button",
    active: current < totalPage,
    onClick: function onClick() {
      if (!props.disabled && current < totalPage) {
        var numPage = current + 1;
        onChange === null || onChange === void 0 ? void 0 : onChange(numPage);
      }
    }
  }, props.showLabel && t('hub-pagination_next-label'), /*#__PURE__*/React.createElement(IconArrow, null)), props.showSizeChanger && /*#__PURE__*/React.createElement(PaginationSizeContainerStyle, null, /*#__PURE__*/React.createElement(PaginationSizeChangerStyle, {
    "data-testid": factoryTestId(props, 'changer'),
    value: pageSize,
    onChange: handlePageSize
  }, sizeOptions.map(function (x, i) {
    return /*#__PURE__*/React.createElement("option", {
      key: "hub-pagination_option-".concat(i),
      value: x
    }, x);
  })), /*#__PURE__*/React.createElement(IconArrow, null)), props.showTotalLabel && /*#__PURE__*/React.createElement(React.Fragment, null, t('hub-pagination_results-label'), current * pageSize - pageSize + 1, " -", ' ', current === totalPage ? totalItems || 1 : current * pageSize, t('hub-pagination_results-of-label'), totalItems || 1));
}

var PasswordContainerStyle = styled.div.withConfig({
  displayName: "PasswordContainerStyle",
  componentId: "sc-1ioe7nt-0"
})(["display:flex;align-items:center;justify-content:center;gap:", ";padding:", " 0;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[1];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[1];
});
var PasswordRectStyle = styled.div.withConfig({
  displayName: "PasswordRectStyle",
  componentId: "sc-1ioe7nt-1"
})(["width:50px;height:6px;border-radius:12px;background-color:", ";"], function (_ref3) {
  var color = _ref3.color;
  return color;
});
var PasswordHintStyle = styled.span.withConfig({
  displayName: "PasswordHintStyle",
  componentId: "sc-1ioe7nt-2"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";color:", ";margin-left:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body2.family;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.body2.size;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.typography.body2.letterSpacing;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.neutral[500];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spaces[2];
});

/* eslint-disable no-plusplus */
var PasswordStrength;
(function (PasswordStrength) {
  PasswordStrength[PasswordStrength["Empty"] = 0] = "Empty";
  PasswordStrength[PasswordStrength["VeryWeak"] = 1] = "VeryWeak";
  PasswordStrength[PasswordStrength["Weak"] = 2] = "Weak";
  PasswordStrength[PasswordStrength["Average"] = 3] = "Average";
  PasswordStrength[PasswordStrength["Strong"] = 4] = "Strong";
  PasswordStrength[PasswordStrength["VeryStrong"] = 5] = "VeryStrong";
})(PasswordStrength || (PasswordStrength = {}));
function getPasswordStrength(password) {
  var score = 0;
  if (!password || password.length < 1) return PasswordStrength.Empty;
  if (password.length < 8) return PasswordStrength.VeryWeak;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[0-9]/g.test(password)) score++;
  if (/[a-z]/g.test(password) && /[A-Z]/g.test(password)) score++;
  if (/[^A-Za-z0-9]/g.test(password)) score++;
  return score;
}
function HubPasswordStrength(props) {
  var theme = useTheme();
  var t = useI18nMessage();
  var strength = React.useMemo(function () {
    return getPasswordStrength(props.password);
  }, [props.password]);
  var color1 = React.useMemo(function () {
    switch (strength) {
      case PasswordStrength.VeryWeak:
      case PasswordStrength.Weak:
        return theme.colors.error[500];
      case PasswordStrength.Average:
        return theme.colors.warning[500];
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);
  var color2 = React.useMemo(function () {
    switch (strength) {
      case PasswordStrength.Weak:
        return theme.colors.error[500];
      case PasswordStrength.Average:
        return theme.colors.warning[500];
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);
  var color3 = React.useMemo(function () {
    switch (strength) {
      case PasswordStrength.Average:
        return theme.colors.warning[500];
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);
  var color4 = React.useMemo(function () {
    switch (strength) {
      case PasswordStrength.Strong:
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);
  var color5 = React.useMemo(function () {
    switch (strength) {
      case PasswordStrength.VeryStrong:
        return theme.colors.success[500];
      default:
        return theme.colors.neutral[200];
    }
  }, [strength, theme]);
  var hint = React.useMemo(function () {
    switch (strength) {
      case PasswordStrength.VeryWeak:
        return t('hub-password-strength_very-weak');
      case PasswordStrength.Weak:
        return t('hub-password-strength_weak');
      case PasswordStrength.Average:
        return t('hub-password-strength_average');
      case PasswordStrength.Strong:
        return t('hub-password-strength_strong');
      case PasswordStrength.VeryStrong:
        return t('hub-password-strength_very-strong');
      default:
        return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
  }, [strength, t]);
  return /*#__PURE__*/React.createElement(PasswordContainerStyle, null, /*#__PURE__*/React.createElement(PasswordRectStyle, {
    color: color1
  }), /*#__PURE__*/React.createElement(PasswordRectStyle, {
    color: color2
  }), /*#__PURE__*/React.createElement(PasswordRectStyle, {
    color: color3
  }), /*#__PURE__*/React.createElement(PasswordRectStyle, {
    color: color4
  }), /*#__PURE__*/React.createElement(PasswordRectStyle, {
    color: color5
  }), /*#__PURE__*/React.createElement(PasswordHintStyle, null, hint));
}

var PopoverOverlayStyle = styled.div.withConfig({
  displayName: "PopoverOverlayStyle",
  componentId: "sc-18p7fya-0"
})(["position:fixed;inset:0;z-index:50;"]);
var PopoverTriggerStyle = styled.div.withConfig({
  displayName: "PopoverTriggerStyle",
  componentId: "sc-18p7fya-1"
})(["display:flex;align-items:center;justify-content:center;", ""], function (_ref) {
  var width = _ref.width;
  return width ? "width: ".concat(width, ";") : '';
});
var PopoverStyle = styled.div.withConfig({
  displayName: "PopoverStyle",
  componentId: "sc-18p7fya-2"
})(["position:absolute;z-index:51;box-shadow:", ";border-radius:", ";animation:0.2s ease-in-out ", ";min-width:200px;", ";max-height:", ";overflow-y:auto;background-color:", ";", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows[1];
}, function (_ref3) {
  var theme = _ref3.theme,
    radius = _ref3.radius;
  return theme.spaces[radius || 1];
}, function () {
  return animations.fadein;
}, function (_ref4) {
  var width = _ref4.width;
  return width ? "width: ".concat(width) : '';
}, function (_ref5) {
  var height = _ref5.height;
  return height || '200px';
}, function (_ref6) {
  var theme = _ref6.theme,
    color = _ref6.color,
    colorLevel = _ref6.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.white[500];
}, function (_ref7) {
  var theme = _ref7.theme,
    pad = _ref7.pad;
  if (!pad) return "padding: ".concat(theme.spaces[2], " 0");
  if (typeof pad === 'string') return "padding: ".concat(theme.spaces[pad]);
  if (pad.length === 4) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]], " ").concat(theme.spaces[pad[3]]);
  }
  if (pad.length === 3) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]]);
  }
  if (pad.length === 2) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]]);
  }
  return "padding: ".concat(theme.spaces[pad[0]]);
});

var _excluded$e = ["opened", "source", "disabled", "trigger", "triggerWidth", "content", "offset", "children", "onClose"];
function HubPopover(_ref) {
  var open = _ref.opened,
    src = _ref.source,
    disabled = _ref.disabled,
    trigger = _ref.trigger,
    triggerWidth = _ref.triggerWidth,
    content = _ref.content,
    offset = _ref.offset,
    children = _ref.children,
    onClose = _ref.onClose,
    props = _objectWithoutProperties(_ref, _excluded$e);
  var _React$useState = React.useState(open),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    opened = _React$useState2[0],
    setOpened = _React$useState2[1];
  var _React$useState3 = React.useState(src),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    source = _React$useState4[0],
    setSource = _React$useState4[1];
  var timer = React.useRef();
  var _React$useState5 = React.useState(),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    contentDimensions = _React$useState6[0],
    setContentDimensions = _React$useState6[1];
  var usingTrigger = React.useMemo(function () {
    return !!children;
  }, [children]);
  var hasOverlay = React.useMemo(function () {
    return !disabled;
  }, [disabled]);
  var coordinates = React.useMemo(function () {
    if (source !== null && source !== void 0 && source.target && contentDimensions) {
      var _getBoundingClientRec, _ref2;
      var scroll = scrollPosition();
      var rect = ((_getBoundingClientRec = (_ref2 = source === null || source === void 0 ? void 0 : source.target).getBoundingClientRect) === null || _getBoundingClientRec === void 0 ? void 0 : _getBoundingClientRec.call(_ref2)) || {};
      var abs = getAbsPosition(source === null || source === void 0 ? void 0 : source.target);
      var top = abs.top || rect.top || source.pageY;
      var left = abs.left || rect.left || source.pageX;
      var result = {
        x: left,
        y: top + rect.height + 4
      };
      if (result.y + contentDimensions.h > scroll.bottom) {
        result.y = scroll.bottom - 16 - contentDimensions.h;
      }
      if (result.x + contentDimensions.w > scroll.right) {
        result.x = scroll.right - 16 - contentDimensions.w;
      }
      return {
        top: result.y + ((offset === null || offset === void 0 ? void 0 : offset[0]) || 0),
        left: result.x + ((offset === null || offset === void 0 ? void 0 : offset[1]) || 0)
      };
    }
    return undefined;
  }, [source, contentDimensions, offset]);
  var getTrigger = React.useCallback(function (el) {
    if (el && !source) {
      setSource({
        target: el
      });
    }
  }, [source]);
  var getContentDimensions = React.useCallback(function (el) {
    if (el && !contentDimensions) {
      setContentDimensions({
        w: el.clientWidth,
        h: el.clientHeight
      });
    }
  }, [contentDimensions]);
  var handleOpened = React.useCallback(function (open) {
    if (disabled) return;
    if (process.env.NODE_ENV === 'test') {
      setOpened(open);
      return;
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(function () {
      return setOpened(open);
    }, open && (!usingTrigger || trigger === 'click') ? 50 : 200);
  }, [usingTrigger, disabled, trigger]);
  var handleEvent = React.useCallback(function (e) {
    if (usingTrigger) {
      if (trigger === 'click' && e.type === 'mouseenter') {
        return;
      }
      if (trigger === 'hover' && e.type === 'click') {
        return;
      }
    }
    setSource(e);
    handleOpened(true);
  }, [usingTrigger, trigger, handleOpened]);
  var handleClose = React.useCallback(function () {
    handleOpened(false);
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onClose, handleOpened]);
  React.useEffect(function () {
    setOpened(open);
  }, [open]);

  //? logica do controle manual (sem utilizar o trigger)
  React.useEffect(function () {
    if (usingTrigger) return;
    if (src) {
      handleEvent(src);
    } else {
      handleOpened(false);
    }
  }, [usingTrigger, src]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, usingTrigger && /*#__PURE__*/React.createElement(PopoverTriggerStyle, {
    ref: getTrigger,
    width: triggerWidth,
    onClick: handleEvent,
    onMouseEnter: handleEvent
  }, children), opened && /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React.createElement(React.Fragment, null, hasOverlay && /*#__PURE__*/React.createElement(PopoverOverlayStyle, {
    "data-testid": factoryTestId(props, 'close'),
    onClick: handleClose
  }), /*#__PURE__*/React.createElement(PopoverStyle, _extends({}, props, {
    ref: getContentDimensions,
    onMouseLeave: handleClose,
    onClick: props.autoClose ? handleClose : undefined,
    style: coordinates
  }), content)), window.document.body));
}

function HubPrintableInner(_ref, ref) {
  var onPrint = _ref.onPrint,
    children = _ref.children;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    printMode = _React$useState2[0],
    setPrintMode = _React$useState2[1];
  var changeAppVisible = React.useCallback(function (visible) {
    var app = $('#__next');
    if (app) {
      if (visible) {
        app['style'].display = 'block';
      } else {
        app['style'].display = 'none';
      }
    }
  }, []);
  var print = React.useCallback(function () {
    setPrintMode(true);
    changeAppVisible(false);
    onPrint === null || onPrint === void 0 ? void 0 : onPrint(true);
    setTimeout(function () {
      window.print();
      changeAppVisible(true);
      setPrintMode(false);
      onPrint === null || onPrint === void 0 ? void 0 : onPrint(false);
    }, 200);
  }, [changeAppVisible]);
  React.useImperativeHandle(ref, function () {
    return {
      print: print
    };
  }, [print]);
  return printMode ? (/*#__PURE__*/ReactDOM.createPortal(children, window.document.body)) : /*#__PURE__*/React.createElement(React.Fragment, null, children);
}
var HubPrintable = /*#__PURE__*/React.forwardRef(HubPrintableInner);

var ProgressBarBgStyle = styled.div.withConfig({
  displayName: "ProgressBarBgStyle",
  componentId: "sc-2pic7e-0"
})(["width:100%;height:100%;overflow:hidden;"]);
var ProgressBarNormalStyle = css(["width:", ";transition:width 1s;"], function (_ref) {
  var percent = _ref.percent;
  return "".concat(percent || 0, "%");
});
var ProgressBarIndeterminateStyle = css(["animation:", " 1s infinite linear;transform-origin:0% 50%;width:100%;"], function () {
  return animations.indeterminate;
});
var ProgressBarPlayAnimStyle = css(["animation:", " ", " forwards linear;"], function (_ref2) {
  var percent = _ref2.percent;
  return animations.growup(percent);
}, function (_ref3) {
  var playSeconds = _ref3.playSeconds;
  return "".concat(playSeconds || 1, "s");
});
var ProgressBarColorStyle = css(["background-color:", ";"], function (_ref4) {
  var theme = _ref4.theme,
    color = _ref4.color,
    colorLevel = _ref4.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.primary[500];
});
var ProgressBarInnerStyle = styled.div.withConfig({
  displayName: "ProgressBarInnerStyle",
  componentId: "sc-2pic7e-1"
})(["height:100%;"]);
var ProgressBarDisplayStyle = styled.span.withConfig({
  displayName: "ProgressBarDisplayStyle",
  componentId: "sc-2pic7e-2"
})(["line-height:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.body1.size;
});
var ProgressBarStyle = styled.div.withConfig({
  displayName: "ProgressBarStyle",
  componentId: "sc-2pic7e-3"
})(["display:flex;align-items:end;gap:", ";width:100%;height:", ";", "{background-color:", ";", "}", "{color:", ";}", "{", " ", " ", "}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spaces[2];
}, function (_ref7) {
  var height = _ref7.height;
  return height || '4px';
}, ProgressBarBgStyle, function (_ref8) {
  var theme = _ref8.theme,
    color = _ref8.color,
    colorLevel = _ref8.colorLevel,
    bgColorless = _ref8.bgColorless;
  return bgColorless ? theme.colors.neutralGrey[300] : color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][200] : theme.colors.primary[200];
}, function (_ref9) {
  var mini = _ref9.mini,
    shaped = _ref9.shaped;
  if (mini) {
    return "\n        width: 98%;\n        margin: auto;\n        border-bottom-left-radius: 16px;\n        border-bottom-right-radius: 16px;\n      ";
  }
  if (shaped) return '';
  return "\n      border-radius: 8px;\n    ";
}, ProgressBarDisplayStyle, function (_ref10) {
  var theme = _ref10.theme,
    color = _ref10.color,
    colorLevel = _ref10.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.primary[500];
}, ProgressBarInnerStyle, ProgressBarColorStyle, function (_ref11) {
  var indeterminate = _ref11.indeterminate,
    play = _ref11.play;
  if (indeterminate) {
    return ProgressBarIndeterminateStyle;
  }
  if (play) {
    return ProgressBarPlayAnimStyle;
  }
  return ProgressBarNormalStyle;
}, function (_ref12) {
  var shaped = _ref12.shaped;
  return shaped ? '' : 'border-radius: 8px;';
});

var _excluded$d = ["display"];
function HubProgressBar(_ref) {
  var display = _ref.display,
    props = _objectWithoutProperties(_ref, _excluded$d);
  return /*#__PURE__*/React.createElement(ProgressBarStyle, props, /*#__PURE__*/React.createElement(ProgressBarBgStyle, null, /*#__PURE__*/React.createElement(ProgressBarInnerStyle, null)), display && /*#__PURE__*/React.createElement(ProgressBarDisplayStyle, null, props.percent, "%"));
}

var Complete = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.7 1.20039C13.3 0.800391 12.7 0.800391 12.3 1.20039L4.8 8.70039L1.7 5.60039C1.3 5.20039 0.7 5.20039 0.3 5.60039C-0.1 6.00039 -0.1 6.60039 0.3 7.00039L4.1 10.8004C4.3 11.0004 4.5 11.1004 4.8 11.1004C5.1 11.1004 5.3 11.0004 5.5 10.8004L13.7 2.60039C14.1 2.20039 14.1 1.60039 13.7 1.20039Z",
    fill: "white"
  }));
});

var ProgressStepInnerStyle = styled.div.withConfig({
  displayName: "ProgressStepInnerStyle",
  componentId: "sc-nv4krx-0"
})(["display:flex;justify-content:center;align-items:center;position:relative;width:100%;"]);
var ProgressStepLineStyle = styled.div.withConfig({
  displayName: "ProgressStepLineStyle",
  componentId: "sc-nv4krx-1"
})(["display:flex;align-items:center;position:absolute;width:100%;z-index:1;"]);
var ProgressStepLineBarStyle = styled.div.withConfig({
  displayName: "ProgressStepLineBarStyle",
  componentId: "sc-nv4krx-2"
})(["width:50%;height:1px;background-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutralGrey[500];
});
var ProgressStepIndicatorStyle = styled.div.withConfig({
  displayName: "ProgressStepIndicatorStyle",
  componentId: "sc-nv4krx-3"
})(["display:flex;align-items:center;justify-content:center;position:absolute;z-index:2;border-radius:50%;gap:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[1];
});
var ProgressStepLabelStyle = styled.span.withConfig({
  displayName: "ProgressStepLabelStyle",
  componentId: "sc-nv4krx-4"
})([""]);
var ProgressStepActiveStyle = styled.span.withConfig({
  displayName: "ProgressStepActiveStyle",
  componentId: "sc-nv4krx-5"
})(["width:12px;height:12px;border-radius:50%;"]);
var ProgressStepStyle = styled.div.withConfig({
  displayName: "ProgressStepStyle",
  componentId: "sc-nv4krx-6"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;text-align:center;gap:", ";", "{background-color:", ";}", "{color:", ";}", "{width:", ";height:", ";", " cursor:", ";}", "{height:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[2];
}, ProgressStepActiveStyle, function (_ref4) {
  var theme = _ref4.theme,
    disabled = _ref4.disabled,
    color = _ref4.color,
    colorLevel = _ref4.colorLevel;
  return disabled ? theme.colors.neutralGrey[500] : color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.primary[500];
}, ProgressStepLabelStyle, function (_ref5) {
  var theme = _ref5.theme,
    disabled = _ref5.disabled,
    color = _ref5.color,
    colorLevel = _ref5.colorLevel;
  return disabled ? theme.colors.neutralGrey[500] : color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.primary[500];
}, ProgressStepIndicatorStyle, function (_ref6) {
  var size = _ref6.size;
  return size || '28px';
}, function (_ref7) {
  var size = _ref7.size;
  return size || '28px';
}, function (_ref8) {
  var theme = _ref8.theme,
    color = _ref8.color,
    colorLevel = _ref8.colorLevel,
    complete = _ref8.complete,
    disabled = _ref8.disabled;
  if (complete) {
    return "\n          color: ".concat(theme.colors.white[500], ";\n          background-color: ").concat(color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.primary[500], ";\n        ");
  }
  if (disabled) {
    return "\n          background-color: ".concat(theme.colors.white[500], ";\n          color: ").concat(theme.colors.neutralGrey[500], ";\n          border: 1px solid ").concat(theme.colors.neutralGrey[500], ";\n        ");
  }
  return "\n        background-color: ".concat(theme.colors.white[500], ";\n        border: 1px solid ").concat(color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.primary[500], ";\n      ");
}, function (_ref9) {
  var clickable = _ref9.clickable,
    disabled = _ref9.disabled;
  return disabled ? 'not-allowed' : clickable ? 'pointer' : undefined;
}, ProgressStepInnerStyle, function (_ref10) {
  var size = _ref10.size;
  return size || '28px';
});
var ProgressStepperStyle = styled.div.withConfig({
  displayName: "ProgressStepperStyle",
  componentId: "sc-nv4krx-7"
})(["display:flex;align-items:center;width:100%;", ":first-of-type ", ":first-of-type{opacity:0;}", ":last-of-type ", ":last-of-type{opacity:0;}"], ProgressStepStyle, ProgressStepLineBarStyle, ProgressStepStyle, ProgressStepLineBarStyle);

var _excluded$c = ["onClick", "children"],
  _excluded2$4 = ["children"];
function HubProgressStep(_ref) {
  var _onClick = _ref.onClick,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$c);
  var ProgressStepIndicator = function ProgressStepIndicator() {
    if (props.complete) {
      return /*#__PURE__*/React.createElement(Complete, null);
    }
    if (props.active) {
      return /*#__PURE__*/React.createElement(ProgressStepActiveStyle, null);
    }
    if (props.label) {
      return /*#__PURE__*/React.createElement(ProgressStepLabelStyle, null, props.label);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return /*#__PURE__*/React.createElement(ProgressStepStyle, _extends({}, props, {
    clickable: !props.disabled && !!_onClick,
    onClick: function onClick(e) {
      e.stopPropagation();
      if (!props.disabled) {
        _onClick === null || _onClick === void 0 ? void 0 : _onClick();
      }
    }
  }), /*#__PURE__*/React.createElement(ProgressStepInnerStyle, null, /*#__PURE__*/React.createElement(ProgressStepLineStyle, null, /*#__PURE__*/React.createElement(ProgressStepLineBarStyle, null), /*#__PURE__*/React.createElement(ProgressStepLineBarStyle, null)), /*#__PURE__*/React.createElement(ProgressStepIndicatorStyle, null, /*#__PURE__*/React.createElement(ProgressStepIndicator, null))), children);
}
function HubProgressStepper(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2$4);
  return /*#__PURE__*/React.createElement(ProgressStepperStyle, props, children);
}

var ProgressTabsStyle = styled.div.withConfig({
  displayName: "ProgressTabsStyle",
  componentId: "sc-2vq1fd-0"
})(["display:flex;align-items:center;gap:", ";width:100%;overflow:auto hidden;"], function (_ref) {
  var theme = _ref.theme,
    gap = _ref.gap;
  return gap ? theme.spaces[gap] : theme.spaces[1];
});
var ProgressTabLabelStyle = styled.div.withConfig({
  displayName: "ProgressTabLabelStyle",
  componentId: "sc-2vq1fd-1"
})([""]);
var ProgressTabIndicatorStyle = styled.div.withConfig({
  displayName: "ProgressTabIndicatorStyle",
  componentId: "sc-2vq1fd-2"
})([""]);
var ProgressTabStyle = styled.div.withConfig({
  displayName: "ProgressTabStyle",
  componentId: "sc-2vq1fd-3"
})(["display:flex;flex-direction:column;gap:", ";width:100%;", " ", " ", "{font-weight:700;color:", ";opacity:", ";}", "{height:", ";width:", ";border-radius:12px;opacity:", ";background-color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[2];
}, function (_ref3) {
  var active = _ref3.active,
    disabled = _ref3.disabled;
  return !active && !disabled ? 'cursor: pointer;' : '';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'cursor: not-allowed;' : '';
}, ProgressTabLabelStyle, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary[500];
}, function (_ref6) {
  var active = _ref6.active,
    disabled = _ref6.disabled;
  return active && !disabled ? 1 : 0.3;
}, ProgressTabIndicatorStyle, function (_ref7) {
  var height = _ref7.height;
  return height || '6px';
}, function (_ref8) {
  var width = _ref8.width;
  return width || '100%';
}, function (_ref9) {
  var active = _ref9.active,
    disabled = _ref9.disabled;
  return active && !disabled ? 1 : 0.3;
}, function (_ref10) {
  var theme = _ref10.theme,
    color = _ref10.color,
    colorLevel = _ref10.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.neutral[300];
});

var _excluded$b = ["onChange", "children"],
  _excluded2$3 = ["children"];
function HubProgressTabs(_ref) {
  var onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$b);
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  React.useEffect(function () {
    if (props.current) {
      setSelected(props.current);
    }
  }, [props.current]);
  return /*#__PURE__*/React.createElement(ProgressTabsStyle, props, React.Children.map(children, function (child, i) {
    return /*#__PURE__*/React.isValidElement(child) && /*#__PURE__*/React.cloneElement(child, {
      disabled: props.disabled || child.props.disabled,
      width: props.width || child.props.width,
      height: props.height || child.props.height,
      active: child.props.active ? child.props.active : child.props.value ? selected === child.props.value : selected === i,
      onClick: function onClick() {
        if (!props.disabled && !child.props.disabled) {
          var _child$props$onClick, _child$props;
          setSelected(i);
          onChange === null || onChange === void 0 ? void 0 : onChange(child.props.value || i);
          (_child$props$onClick = (_child$props = child.props).onClick) === null || _child$props$onClick === void 0 ? void 0 : _child$props$onClick.call(_child$props);
        }
      }
    });
  }));
}
function HubProgressTab(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2$3);
  return /*#__PURE__*/React.createElement(ProgressTabStyle, props, /*#__PURE__*/React.createElement(ProgressTabLabelStyle, null, children), /*#__PURE__*/React.createElement(ProgressTabIndicatorStyle, null));
}

var RadioGroupStyle = styled.div.withConfig({
  displayName: "RadioGroupStyle",
  componentId: "sc-6fx3oy-0"
})(["display:flex;gap:", ";", ";"], function (_ref) {
  var theme = _ref.theme,
    gap = _ref.gap;
  return theme.spaces[gap || 2];
}, function (_ref2) {
  var vertical = _ref2.vertical,
    align = _ref2.align;
  if (vertical) {
    return "\n        flex-direction: column;\n        justify-content: ".concat(align, ";\n      ");
  }
  return "\n      flex-direction: row;\n      align-items: ".concat(align || 'center', ";\n    ");
});
var RadioLabelStyle = styled.label.withConfig({
  displayName: "RadioLabelStyle",
  componentId: "sc-6fx3oy-1"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:400;margin-left:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.body2.family;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body2.size;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.body2.letterSpacing;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spaces[2];
});
var RadioIconStyle = styled.div.withConfig({
  displayName: "RadioIconStyle",
  componentId: "sc-6fx3oy-2"
})(["border-radius:50%;transition:border-color 0.5s;"]);
var RadioInputStyle = styled.input.withConfig({
  displayName: "RadioInputStyle",
  componentId: "sc-6fx3oy-3"
})(["display:none;"]);
var RadioStyle = styled.div.withConfig({
  displayName: "RadioStyle",
  componentId: "sc-6fx3oy-4"
})(["display:flex;align-items:center;", " ", "{background-color:", ";border:", ";", "}"], function (_ref8) {
  var clickable = _ref8.clickable,
    disabled = _ref8.disabled;
  return disabled ? 'cursor: not-allowed;' : clickable ? 'cursor: pointer;' : undefined;
}, RadioIconStyle, function (_ref9) {
  var theme = _ref9.theme,
    checked = _ref9.checked,
    disabled = _ref9.disabled,
    color = _ref9.color;
  if (!checked && disabled) {
    return color ? theme.colors[color][100] : theme.colors.neutral[200];
  }
  return theme.colors.white[500];
}, function (_ref10) {
  var theme = _ref10.theme,
    checked = _ref10.checked,
    disabled = _ref10.disabled,
    color = _ref10.color,
    size = _ref10.size;
  var border = size === 'lg' ? '7px solid' : '4px solid ';
  if (checked && disabled) {
    return border + theme.colors[color || 'neutral'][400];
  }
  if (!checked || disabled) {
    return "1px solid ".concat(theme.colors[color || 'neutral'][400]);
  }
  if (checked) {
    return border + theme.colors[color || 'primary'][500];
  }
  return "".concat(border, " transparent");
}, function (_ref11) {
  var theme = _ref11.theme,
    size = _ref11.size;
  return "\n    min-width: ".concat(size === 'lg' ? theme.spaces[5] : theme.spaces[3], ";\n    width: ").concat(size === 'lg' ? theme.spaces[5] : theme.spaces[3], ";\n    height: ").concat(size === 'lg' ? theme.spaces[5] : theme.spaces[3], ";\n  ");
});

var _excluded$a = ["onChange", "children"],
  _excluded2$2 = ["onChange", "onClick", "children"];
function HubRadioGroup(_ref) {
  var _onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$a);
  return /*#__PURE__*/React.createElement(RadioGroupStyle, props, React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) && /*#__PURE__*/React.cloneElement(child, {
      disabled: props.disabled || child.props.disabled,
      color: props.color || child.props.color,
      size: props.size || child.props.size,
      checked: props.value === child.props.value,
      onChange: function onChange(v) {
        if (!props.disabled && !child.props.disabled) {
          var _child$props$onChange, _child$props;
          _onChange === null || _onChange === void 0 ? void 0 : _onChange(v);
          (_child$props$onChange = (_child$props = child.props).onChange) === null || _child$props$onChange === void 0 ? void 0 : _child$props$onChange.call(_child$props, v);
        }
      },
      onClick: function onClick() {
        if (!props.disabled && !child.props.disabled) {
          var _child$props$onClick, _child$props2;
          _onChange === null || _onChange === void 0 ? void 0 : _onChange(child.props.value);
          (_child$props$onClick = (_child$props2 = child.props).onClick) === null || _child$props$onClick === void 0 ? void 0 : _child$props$onClick.call(_child$props2);
        }
      }
    });
  }));
}
function HubRadio(_ref2) {
  var onChange = _ref2.onChange,
    _onClick = _ref2.onClick,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2$2);
  return /*#__PURE__*/React.createElement(RadioStyle, _extends({}, props, {
    clickable: !!onChange || !!_onClick,
    onClick: function onClick(e) {
      e.stopPropagation();
      if (!props.disabled) {
        onChange === null || onChange === void 0 ? void 0 : onChange(props.value);
        _onClick === null || _onClick === void 0 ? void 0 : _onClick();
      }
    }
  }), /*#__PURE__*/React.createElement(RadioIconStyle, {
    id: "hub-radio-icon-".concat(props.id)
  }), /*#__PURE__*/React.createElement(RadioInputStyle, {
    id: "hub-radio-".concat(props.id),
    type: "radio",
    disabled: props.disabled,
    checked: props.checked,
    onChange: function onChange() {
      return 0;
    }
  }), children && /*#__PURE__*/React.createElement(RadioLabelStyle, {
    htmlFor: "hub-radio-".concat(props.id)
  }, children));
}

var SectionTitleStyle = styled.div.withConfig({
  displayName: "SectionTitleStyle",
  componentId: "sc-vd99xm-0"
})(["padding:", ";font-weight:700;color:", ";background-color:", ";width:100%;border-radius:4px;"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spaces[2], " ").concat(theme.spaces[3]);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary[500];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.neutral[200];
});
var SectionContentStyle = styled.div.withConfig({
  displayName: "SectionContentStyle",
  componentId: "sc-vd99xm-1"
})(["width:100%;"]);
var SectionStyle = styled.div.withConfig({
  displayName: "SectionStyle",
  componentId: "sc-vd99xm-2"
})(["display:flex;flex-direction:column;width:100%;", "{", "}"], SectionContentStyle, function (_ref4) {
  var theme = _ref4.theme,
    pad = _ref4.pad;
  if (typeof pad === 'string') {
    return "padding: ".concat(theme.spaces[pad], " ").concat(theme.spaces[pad], ";");
  }
  if (Array.isArray(pad)) {
    return "padding: ".concat(pad.reduce(function (acc, x) {
      return acc + "".concat(theme.spaces[x], " ");
    }, ''), ";");
  }
  return "padding: ".concat(theme.spaces[3], " ").concat(theme.spaces[2], ";");
});

var _excluded$9 = ["title", "children"];
function HubSection(_ref) {
  var title = _ref.title,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$9);
  return /*#__PURE__*/React.createElement(SectionStyle, props, /*#__PURE__*/React.createElement(SectionTitleStyle, null, title), /*#__PURE__*/React.createElement(SectionContentStyle, null, children));
}

var SeparatorStyle = styled.div.withConfig({
  displayName: "SeparatorStyle",
  componentId: "sc-buedh-0"
})(["border-radius:", ";", ""], function (_ref) {
  var theme = _ref.theme,
    radius = _ref.radius;
  return radius ? theme.spaces[radius] : '2px';
}, function (_ref2) {
  var theme = _ref2.theme,
    color = _ref2.color,
    colorLevel = _ref2.colorLevel,
    borderStyle = _ref2.borderStyle,
    vertical = _ref2.vertical,
    size = _ref2.size,
    length = _ref2.length;
  var hash = color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.neutral[300];
  var height = size ? theme.spaces[size] || size : '1px';
  var width = length ? theme.spaces[length] || length : '100%';
  if (borderStyle) {
    if (vertical) {
      return "\n          border-left: ".concat(height, " ").concat(borderStyle, " ").concat(hash, ";\n          height: ").concat(width, ";\n        ");
    } else {
      return "\n          border-top: ".concat(height, " ").concat(borderStyle, " ").concat(hash, ";\n          width: ").concat(width, ";\n        ");
    }
  }
  if (vertical) {
    return "\n        background-color: ".concat(hash, ";\n        width: ").concat(height, ";\n        height: ").concat(width, ";\n        min-height: ").concat(width, ";\n      ");
  } else {
    return "\n        background-color: ".concat(hash, ";\n        width: ").concat(width, ";\n        height: ").concat(height, ";\n        min-height: ").concat(height, ";\n      ");
  }
});

function HubSeparator(props) {
  return /*#__PURE__*/React.createElement(SeparatorStyle, props);
}

var IconClose$1 = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.0567 11.9994L17.7783 7.28477C17.9194 7.14363 17.9987 6.95221 17.9987 6.7526C17.9987 6.553 17.9194 6.36157 17.7783 6.22043C17.6372 6.07929 17.4458 6 17.2462 6C17.0466 6 16.8552 6.07929 16.7141 6.22043L12 10.9425L7.28592 6.22043C7.14479 6.07929 6.95338 6 6.7538 6C6.55422 6 6.36281 6.07929 6.22169 6.22043C6.08056 6.36157 6.00128 6.553 6.00128 6.7526C6.00128 6.95221 6.08056 7.14363 6.22169 7.28477L10.9433 11.9994L6.22169 16.7139C6.15144 16.7836 6.09569 16.8665 6.05764 16.9579C6.01959 17.0492 6 17.1472 6 17.2461C6 17.3451 6.01959 17.443 6.05764 17.5344C6.09569 17.6257 6.15144 17.7086 6.22169 17.7783C6.29136 17.8485 6.37425 17.9043 6.46558 17.9424C6.55691 17.9804 6.65487 18 6.7538 18C6.85274 18 6.9507 17.9804 7.04203 17.9424C7.13335 17.9043 7.21625 17.8485 7.28592 17.7783L12 13.0562L16.7141 17.7783C16.7838 17.8485 16.8666 17.9043 16.958 17.9424C17.0493 17.9804 17.1473 18 17.2462 18C17.3451 18 17.4431 17.9804 17.5344 17.9424C17.6257 17.9043 17.7086 17.8485 17.7783 17.7783C17.8486 17.7086 17.9043 17.6257 17.9424 17.5344C17.9804 17.443 18 17.3451 18 17.2461C18 17.1472 17.9804 17.0492 17.9424 16.9579C17.9043 16.8665 17.8486 16.7836 17.7783 16.7139L13.0567 11.9994Z",
    fill: "currentColor"
  }));
});

var IconMenu = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z",
    fill: "currentColor"
  }));
});

var SidenavContentStyle = styled.div.withConfig({
  displayName: "SidenavContentStyle",
  componentId: "sc-gx05kw-0"
})(["display:flex;align-items:flex-start;flex-direction:column;width:100%;color:inherit;", ""], function (_ref) {
  var hasOverflow = _ref.hasOverflow;
  return hasOverflow ? 'overflow-y: auto;' : '';
});
var SidenavIconStyle = styled.div.withConfig({
  displayName: "SidenavIconStyle",
  componentId: "sc-gx05kw-1"
})(["display:flex;align-items:center;justify-content:center;cursor:pointer;"]);
var SidenavStyle = styled.div.withConfig({
  displayName: "SidenavStyle",
  componentId: "sc-gx05kw-2"
})(["display:flex;align-items:flex-start;flex-direction:column;width:", ";max-width:", ";height:", ";", " background-color:", ";color:", ";", " ", " ", " @keyframes effect{from{opacity:0;width:0;}to{opacity:1;width:", ";max-width:", ";}}", "{", " ", " ", " ", "}", "{color:", ";}"], function (_ref2) {
  var width = _ref2.width;
  return width || '245px';
}, function (_ref3) {
  var width = _ref3.width;
  return width || '245px';
}, function (_ref4) {
  var offset = _ref4.offset;
  return offset ? "calc(100vh - ".concat(offset, ")") : '100vh';
}, function (_ref5) {
  var theme = _ref5.theme,
    gap = _ref5.gap;
  return gap ? "gap: ".concat(theme.spaces[gap], ";") : '';
}, function (_ref6) {
  var theme = _ref6.theme,
    color = _ref6.color,
    colorLevel = _ref6.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.primary[500];
}, function (_ref7) {
  var theme = _ref7.theme,
    colorText = _ref7.colorText,
    colorTextLevel = _ref7.colorTextLevel;
  return colorText && colorTextLevel ? theme.colors[colorText][colorTextLevel] : colorText && theme.colors[colorText] ? theme.colors[colorText][500] : colorText ? colorText : theme.colors.white[500];
}, function (_ref8) {
  var fixed = _ref8.fixed,
    offset = _ref8.offset;
  return fixed ? "\n    position: fixed;\n    top: ".concat(offset || 0, ";\n    left: 0;\n    z-index: 31;\n  ") : '';
}, function (_ref9) {
  var theme = _ref9.theme,
    pad = _ref9.pad;
  if (typeof pad === 'string') {
    return "padding: ".concat(theme.spaces[pad], " 0;");
  }
  if (Array.isArray(pad)) {
    return "padding: ".concat(pad.reduce(function (acc, x, i) {
      return i % 2 === 0 ? acc + "".concat(theme.spaces[x], " ") : acc;
    }, ''), ";");
  }
  return "padding: ".concat(theme.spaces[3], " 0;");
}, function (_ref10) {
  var noAnimation = _ref10.noAnimation;
  return !noAnimation ? "animation: ease-in-out both 0.4s effect;" : '';
}, function (_ref11) {
  var width = _ref11.width;
  return width || '245px';
}, function (_ref12) {
  var width = _ref12.width;
  return width || '245px';
}, SidenavContentStyle, function (_ref13) {
  var theme = _ref13.theme,
    gap = _ref13.gap;
  return gap ? "gap: ".concat(theme.spaces[gap], ";") : '';
}, function (_ref14) {
  var theme = _ref14.theme,
    pad = _ref14.pad;
  if (typeof pad === 'string') {
    return "padding: 0 ".concat(theme.spaces[pad], ";");
  }
  if (Array.isArray(pad)) {
    return "padding: ".concat(pad.reduce(function (acc, x, i) {
      return i % 2 !== 0 ? acc + "".concat(theme.spaces[x], " ") : acc;
    }, ''), ";");
  }
  return "padding: 0 ".concat(theme.spaces[6], ";");
}, function (_ref15) {
  var theme = _ref15.theme;
  return "\n      font-family: ".concat(theme.typography.body2.family, ";\n      font-size: ").concat(theme.typography.body2.size, ";\n      line-height: ").concat(theme.typography.body2.lineHeight, ";\n      letter-spacing: ").concat(theme.typography.body2.letterSpacing, ";\n    ");
}, function (_ref16) {
  var noContentHeight = _ref16.noContentHeight;
  return noContentHeight ? '' : 'height: 100%;';
}, SidenavIconStyle, function (_ref17) {
  var theme = _ref17.theme,
    colorText = _ref17.colorText,
    colorTextLevel = _ref17.colorTextLevel;
  return colorText && colorTextLevel ? theme.colors[colorText][colorTextLevel] : colorText && theme.colors[colorText] ? theme.colors[colorText][500] : colorText ? colorText : theme.colors.white[500];
});
var SidenavSpacerStyle = styled.div.withConfig({
  displayName: "SidenavSpacerStyle",
  componentId: "sc-gx05kw-3"
})(["flex:1 1 auto;"]);
var SidenavSpaceStyle = styled.div.withConfig({
  displayName: "SidenavSpaceStyle",
  componentId: "sc-gx05kw-4"
})(["margin-top:", ";"], function (_ref18) {
  var theme = _ref18.theme;
  return theme.spaces[3];
});
var SidenavOverlayStyle = styled.div.withConfig({
  displayName: "SidenavOverlayStyle",
  componentId: "sc-gx05kw-5"
})(["position:fixed;inset:0;z-index:30;"]);

var _excluded$8 = ["top", "bottom", "onClose", "children"],
  _excluded2$1 = ["opened", "onChange"];
function HubSidenav(_ref) {
  var top = _ref.top,
    bottom = _ref.bottom,
    onClose = _ref.onClose,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$8);
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.fixed && /*#__PURE__*/React.createElement(SidenavOverlayStyle, {
    "data-testid": factoryTestId(props, 'close'),
    onClick: onClose
  }), /*#__PURE__*/React.createElement(SidenavStyle, props, top && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SidenavContentStyle, null, top), /*#__PURE__*/React.createElement(SidenavSpaceStyle, null)), /*#__PURE__*/React.createElement(SidenavContentStyle, {
    hasOverflow: true
  }, children), bottom && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SidenavSpacerStyle, null), /*#__PURE__*/React.createElement(SidenavContentStyle, null, bottom))));
}
function HubSidenavIcon(_ref2) {
  var opened = _ref2.opened,
    onChange = _ref2.onChange,
    props = _objectWithoutProperties(_ref2, _excluded2$1);
  return /*#__PURE__*/React.createElement(SidenavIconStyle, _extends({}, props, {
    onClick: function onClick() {
      return onChange === null || onChange === void 0 ? void 0 : onChange(!opened);
    }
  }), opened ? /*#__PURE__*/React.createElement(IconClose$1, null) : /*#__PURE__*/React.createElement(IconMenu, null));
}

var SkeletonStyle = styled.div.withConfig({
  displayName: "SkeletonStyle",
  componentId: "sc-1mu7ljg-0"
})(["display:flex;flex-direction:column;gap:", ";padding:", " 0;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[2];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[2];
});
var SkeletonStyleItem = styled.div.withConfig({
  displayName: "SkeletonStyleItem",
  componentId: "sc-1mu7ljg-1"
})(["display:inline-block;height:", ";position:relative;overflow:hidden;background-color:", ";width:", ";margin-bottom:", ";&::after{position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background:linear-gradient( 90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.2) 20%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) );content:'';animation:", " 2s infinite;}"], function (_ref3) {
  var theme = _ref3.theme,
    head = _ref3.head;
  return head ? theme.spaces[5] : theme.spaces[3];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.neutralGrey[300];
}, function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var theme = _ref6.theme,
    head = _ref6.head;
  return head ? theme.spaces[2] : undefined;
}, function () {
  return animations.shimmer;
});

var _excluded$7 = ["count"];
function HubSkeleton(_ref) {
  var count = _ref.count,
    props = _objectWithoutProperties(_ref, _excluded$7);
  var items = React.useMemo(function () {
    var list = new Array(count).fill(1);
    return list.map(function (_, i) {
      return /*#__PURE__*/React.createElement(SkeletonStyle, _extends({
        key: "hub-skeleton-".concat(i)
      }, props), /*#__PURE__*/React.createElement(SkeletonStyleItem, {
        width: "55%",
        head: true
      }), /*#__PURE__*/React.createElement(SkeletonStyleItem, {
        width: "80%"
      }), /*#__PURE__*/React.createElement(SkeletonStyleItem, {
        width: "90%"
      }), /*#__PURE__*/React.createElement(SkeletonStyleItem, {
        width: "83%"
      }), /*#__PURE__*/React.createElement(SkeletonStyleItem, {
        width: "80%"
      }), /*#__PURE__*/React.createElement(SkeletonStyleItem, {
        width: "20%"
      }));
    });
  }, [count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, items);
}

var SortIcon = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "19",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.7099 11.9619C17.617 11.8681 17.5064 11.7938 17.3845 11.743C17.2627 11.6922 17.132 11.6661 16.9999 11.6661C16.8679 11.6661 16.7372 11.6922 16.6154 11.743C16.4935 11.7938 16.3829 11.8681 16.2899 11.9619L12.9999 15.2619V7.67188C12.9999 7.40666 12.8946 7.1523 12.707 6.96477C12.5195 6.77723 12.2652 6.67188 11.9999 6.67188C11.7347 6.67188 11.4804 6.77723 11.2928 6.96477C11.1053 7.1523 10.9999 7.40666 10.9999 7.67188V15.2619L7.70994 11.9619C7.52164 11.7736 7.26624 11.6678 6.99994 11.6678C6.73364 11.6678 6.47825 11.7736 6.28994 11.9619C6.10164 12.1502 5.99585 12.4056 5.99585 12.6719C5.99585 12.9382 6.10164 13.1936 6.28994 13.3819L11.2899 18.3819C11.385 18.4729 11.4972 18.5443 11.6199 18.5919C11.7396 18.6448 11.8691 18.6721 11.9999 18.6721C12.1308 18.6721 12.2602 18.6448 12.3799 18.5919C12.5027 18.5443 12.6148 18.4729 12.7099 18.3819L17.7099 13.3819C17.8037 13.2889 17.8781 13.1783 17.9288 13.0565C17.9796 12.9346 18.0057 12.8039 18.0057 12.6719C18.0057 12.5399 17.9796 12.4092 17.9288 12.2873C17.8781 12.1654 17.8037 12.0548 17.7099 11.9619Z",
    fill: "#868E96"
  }));
});

var NormalIcon = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_4962_7118)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.66667 12H5.33333C5.7 12 6 11.7 6 11.3333C6 10.9667 5.7 10.6667 5.33333 10.6667H2.66667C2.3 10.6667 2 10.9667 2 11.3333C2 11.7 2.3 12 2.66667 12ZM2 4.66667C2 5.03333 2.3 5.33333 2.66667 5.33333H13.3333C13.7 5.33333 14 5.03333 14 4.66667C14 4.3 13.7 4 13.3333 4H2.66667C2.3 4 2 4.3 2 4.66667ZM2.66667 8.66667H9.33333C9.7 8.66667 10 8.36667 10 8C10 7.63333 9.7 7.33333 9.33333 7.33333H2.66667C2.3 7.33333 2 7.63333 2 8C2 8.36667 2.3 8.66667 2.66667 8.66667Z",
    fill: "#868E96"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_4962_7118"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white"
  }))));
});

var TableStyle = styled.table.withConfig({
  displayName: "TableStyle",
  componentId: "sc-787tq0-0"
})(["border-collapse:collapse;table-layout:fixed;width:100%;", ""], function (_ref) {
  var width = _ref.width;
  return width ? "min-width: ".concat(width, ";") : '';
});
var TableHeadColStyle = styled.th.withConfig({
  displayName: "TableHeadColStyle",
  componentId: "sc-787tq0-1"
})(["width:", ";", ";padding:", ";position:sticky;top:0;z-index:2;", " ", ""], function (_ref2) {
  var width = _ref2.width;
  return width || '100%';
}, function (_ref3) {
  var minWidth = _ref3.minWidth;
  return minWidth ? "min-width: ".concat(minWidth, ";") : '';
}, function (_ref4) {
  var theme = _ref4.theme;
  return "0 ".concat(theme.spaces[2]);
}, function (_ref5) {
  var index = _ref5.index,
    sticky = _ref5.sticky;
  return sticky && "\n      &:nth-child(".concat(index + 1, ") {\n        position: sticky;\n        left: 0;\n        z-index: 3;\n      }\n  ");
}, function (_ref6) {
  var printable = _ref6.printable;
  return printable === false && "\n    @media print {\n      display: none;\n    }\n  ";
});
var TableBodyColStyle = styled.td.withConfig({
  displayName: "TableBodyColStyle",
  componentId: "sc-787tq0-2"
})(["width:", ";", ";", " ", " ", ""], function (_ref7) {
  var width = _ref7.width;
  return width || '100%';
}, function (_ref8) {
  var minWidth = _ref8.minWidth;
  return minWidth ? "min-width: ".concat(minWidth, ";") : '';
}, function (_ref9) {
  var theme = _ref9.theme,
    index = _ref9.index,
    sticky = _ref9.sticky;
  return sticky && "\n    &:nth-child(".concat(index + 1, ") {\n      position: sticky;\n      left: 0;\n      z-index: 1;\n      background-color: ").concat(theme.colors.white[500], ";\n    }\n  ");
}, function (_ref10) {
  var printable = _ref10.printable;
  return printable === false && "\n    @media print {\n      display: none;\n    }\n  ";
}, function (_ref11) {
  var theme = _ref11.theme,
    foot = _ref11.foot;
  return foot && "\n    position: sticky;\n    bottom: 0;\n    z-index: 2;\n    background-color: ".concat(theme.colors.neutralGrey['A100'], ";\n    font-weight: 600;\n  ");
});
var TableHeadRowStyle = styled.tr.withConfig({
  displayName: "TableHeadRowStyle",
  componentId: "sc-787tq0-3"
})(["", ""], function (_ref12) {
  var theme = _ref12.theme,
    height = _ref12.height;
  return "\n    ".concat(TableHeadColStyle, " {\n      background-color: ").concat(theme.colors.neutral[200], ";\n      color: ").concat(theme.colors.neutral[800], ";\n      font-family: ").concat(theme.typography.body2.family, ";\n      font-size: ").concat(theme.typography.body2.size, ";\n      line-height: ").concat(theme.typography.body2.lineHeight, ";\n      letter-spacing: ").concat(theme.typography.body2.letterSpacing, ";\n      font-weight: 600;\n      height: ").concat(height || theme.spaces[7], ";\n    }\n  ");
});
var TableBodyColInnerStyle = styled.div.withConfig({
  displayName: "TableBodyColInnerStyle",
  componentId: "sc-787tq0-4"
})(["display:flex;align-items:center;min-width:0;width:100%;height:100%;"]);
var TableBodyColCellStyle = styled.div.withConfig({
  displayName: "TableBodyColCellStyle",
  componentId: "sc-787tq0-5"
})(["width:100%;text-align:", ";", " ", ""], function (_ref13) {
  var align = _ref13.align;
  return align || 'center';
}, function (_ref14) {
  var noOverflow = _ref14.noOverflow,
    nowrap = _ref14.nowrap;
  if (!noOverflow) {
    return "\n        overflow: hidden;\n        text-overflow: ellipsis;\n\n        ".concat(nowrap ? "white-space: nowrap;" : "\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n      ", "\n      ");
  }
  return '';
}, function (_ref15) {
  var theme = _ref15.theme;
  return "\n    font-family: ".concat(theme.typography.body2.family, ";\n    font-size: ").concat(theme.typography.body2.size, ";\n    line-height: ").concat(theme.typography.body2.lineHeight, ";\n    letter-spacing: ").concat(theme.typography.body2.letterSpacing, ";\n  ");
});
var RowBlink = css(["animation:3s linear ", ";"], function () {
  return animations.blink;
});
var TableBodyRowStyle = styled.tr.withConfig({
  displayName: "TableBodyRowStyle",
  componentId: "sc-787tq0-6"
})(["", " ", " ", "{padding:", ";", "}", "{", " padding-top:", ";", "}"], function (_ref16) {
  var blink = _ref16.blink;
  return blink ? RowBlink : '';
}, function (_ref17) {
  var theme = _ref17.theme,
    borderless = _ref17.borderless,
    border = _ref17.border,
    borderColor = _ref17.borderColor,
    accentColor = _ref17.accentColor;
  return borderless || border || borderColor || accentColor ? '' : "border-bottom: 1px solid ".concat(theme.colors.neutral[300], ";");
}, TableBodyColInnerStyle, function (_ref18) {
  var theme = _ref18.theme;
  return "0 ".concat(theme.spaces[2]);
}, function (_ref19) {
  var theme = _ref19.theme,
    height = _ref19.height,
    color = _ref19.color,
    colorLevel = _ref19.colorLevel;
  return "\n      background-color: ".concat(color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : undefined, ";\n      height: ").concat(height || theme.spaces[7], ";\n    ");
}, TableBodyColStyle, function (_ref20) {
  var theme = _ref20.theme,
    border = _ref20.border,
    borderStyle = _ref20.borderStyle,
    borderColor = _ref20.borderColor,
    borderColorLevel = _ref20.borderColorLevel,
    accentColor = _ref20.accentColor,
    accentColorLevel = _ref20.accentColorLevel,
    borderRadius = _ref20.borderRadius;
  var borderHash = borderColor && borderColorLevel ? theme.colors[borderColor][borderColorLevel] : borderColor ? theme.colors[borderColor][500] : theme.colors.neutral[300];
  var accentHash = accentColor && accentColorLevel ? theme.colors[accentColor][accentColorLevel] : accentColor ? theme.colors[accentColor][500] : undefined;
  var borderConfig = "".concat(border || '1px', " ").concat(borderStyle || 'solid', " ").concat(borderHash);
  var radius = theme.spaces[borderRadius || '1'];
  return border || borderColor || accentColor ? "\n        ".concat(TableBodyColInnerStyle, " {\n          border-top: ").concat(borderConfig, ";\n          border-bottom: ").concat(borderConfig, ";\n        }\n\n        &:first-of-type ").concat(TableBodyColInnerStyle, " {\n          border: ").concat(borderConfig, ";\n          border-right: none;\n          border-top-left-radius: ").concat(radius, ";\n          border-bottom-left-radius: ").concat(radius, ";\n          ").concat(accentHash ? "border-left: 8px solid ".concat(accentHash, ";") : '', "\n        }\n\n        &:last-of-type ").concat(TableBodyColInnerStyle, " {\n          border: ").concat(borderConfig, ";\n          border-left: none;\n          border-top-right-radius: ").concat(radius, ";\n          border-bottom-right-radius: ").concat(radius, ";\n        }\n      ") : '';
}, function (_ref21) {
  var theme = _ref21.theme,
    gap = _ref21.gap;
  return gap ? theme.spaces[gap] : 0;
}, function (_ref22) {
  var clickable = _ref22.clickable;
  return clickable ? "\n      cursor: pointer;\n    " : '';
});
var TableHeadOptionsStyle = styled.div.withConfig({
  displayName: "TableHeadOptionsStyle",
  componentId: "sc-787tq0-7"
})(["display:flex;align-items:center;text-align:", ";justify-content:", ";gap:", ";"], function (_ref23) {
  var align = _ref23.align;
  return align || 'center';
}, function (_ref24) {
  var align = _ref24.align;
  return align || 'center';
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.spaces[2];
});
var TableHeadSortStyle = styled.button.withConfig({
  displayName: "TableHeadSortStyle",
  componentId: "sc-787tq0-8"
})(["display:flex;align-items:center;justify-content:center;background-color:transparent;border:none;transform:", ";cursor:pointer;path:first-of-type{fill:", " !important;}"], function (_ref26) {
  var state = _ref26.state;
  return "rotate(".concat(state === 'asc' ? '180deg' : '0deg', ")");
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.colors.neutralGrey[600];
});
var TableContainerStyle = styled.div.withConfig({
  displayName: "TableContainerStyle",
  componentId: "sc-787tq0-9"
})(["width:100%;overflow:auto;max-height:", ";", " @media print{max-height:unset;height:auto;overflow:unset;", ",", "{height:auto;}}", ",", "{@media print{width:unset;}}", "{@media print{display:block;overflow:unset;text-overflow:unset;}}", "{@media print{display:none;}}"], function (_ref28) {
  var height = _ref28.height;
  return height || '100%';
}, function (_ref29) {
  var minHeight = _ref29.minHeight;
  return minHeight ? "min-height: ".concat(minHeight, ";") : '';
}, TableHeadRowStyle, TableBodyColInnerStyle, TableHeadColStyle, TableBodyColStyle, TableBodyColCellStyle, TableHeadSortStyle);
var TableLoadMoreStyle = styled.div.withConfig({
  displayName: "TableLoadMoreStyle",
  componentId: "sc-787tq0-10"
})(["display:flex;align-items:center;justify-content:center;position:absolute;z-index:3;bottom:0;left:0;right:0;background-color:", ";color:", ";padding:", " 0;box-shadow:0px -10px 24px -10px rgba(0,0,0,0.2);font-weight:600;border-bottom-left-radius:", ";border-bottom-right-radius:", ";animation:0.5s ease ", ";"], function (_ref30) {
  var theme = _ref30.theme;
  return theme.colors.white[500];
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.colors.neutralGrey[600];
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.spaces[2];
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.spaces[3];
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.spaces[3];
}, function () {
  return animations.fadein;
});

var _excluded$6 = ["minHeight", "height", "columns", "data", "configs", "rowConfigs", "onLoadMore", "onSort", "onClickRow", "foots", "dataChildrenKey", "children"];
function arrayColumnsToObject(cols) {
  return (cols === null || cols === void 0 ? void 0 : cols.reduce(function (acc, col) {
    acc[col.key] = col.sort;
    return acc;
  }, {})) || {};
}
function recursiveData(data, key, level) {
  var results = [];
  var _iterator = _createForOfIteratorHelper(data),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      results.push.apply(results, [_objectSpread2(_objectSpread2({}, item), {}, {
        level: level
      })].concat(_toConsumableArray(recursiveData(item[key], key, level + 1))));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return results;
}
var lazy = debounce(300);
function HubTableInner(_ref, ref) {
  var minHeight = _ref.minHeight,
    height = _ref.height,
    columns = _ref.columns,
    data = _ref.data,
    configs = _ref.configs,
    rowConfigs = _ref.rowConfigs,
    onLoadMore = _ref.onLoadMore,
    onSort = _ref.onSort,
    onClickRow = _ref.onClickRow,
    foots = _ref.foots,
    dataChildrenKey = _ref.dataChildrenKey,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$6);
  var t = useI18nMessage();
  var refContainer = React.useRef();
  var cols = columns === null || columns === void 0 ? void 0 : columns.map(function (x) {
    return x.filter(function (y) {
      return !y.hidden;
    });
  });
  var lastIndex = cols ? cols.length - 1 : 0;
  var _React$useState = React.useState(data || []),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    source = _React$useState2[0],
    setSource = _React$useState2[1];
  var _React$useState3 = React.useState(arrayColumnsToObject(cols === null || cols === void 0 ? void 0 : cols[lastIndex])),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sourceSort = _React$useState4[0],
    setSourceSort = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    loadMore = _React$useState6[0],
    setLoadMore = _React$useState6[1];
  function dataSorter(items, col) {
    return items === null || items === void 0 ? void 0 : items.sort(function (a, b) {
      var itemA = col.sort === 'asc' ? a : b;
      var itemB = col.sort === 'asc' ? b : a;
      var valueA = itemA[col.key] || itemA;
      var valueB = itemB[col.key] || itemB;
      return col.sorter ? col.sorter(valueA, valueB) : sorter()(valueA, valueB);
    }).slice();
  }
  function handleSort(col) {
    var sort = sourceSort[col.key] !== 'asc' ? 'asc' : 'desc';
    var column = _objectSpread2(_objectSpread2({}, col), {}, {
      sort: sort
    });
    setSourceSort(_objectSpread2(_objectSpread2({}, sourceSort), {}, _defineProperty({}, col.key, sort)));
    if (onSort) {
      var _refContainer$current;
      (_refContainer$current = refContainer.current) === null || _refContainer$current === void 0 ? void 0 : _refContainer$current.scroll({
        top: 0,
        behavior: 'smooth'
      });
      setTimeout(function () {
        return onSort(function (data) {
          return dataSorter(data || source, column);
        }, column);
      }, 500);
    } else {
      setSource(dataSorter(source, column));
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleScroll(e) {
    if (e && e.target && onLoadMore) {
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 24) {
        lazy(function () {
          onLoadMore();
          setLoadMore(true);
          setTimeout(function () {
            return setLoadMore(false);
          }, 1000);
        });
      }
    }
  }
  var TableCell = function TableCell(_ref2) {
    var item = _ref2.item,
      col = _ref2.col,
      index = _ref2.index,
      indexCol = _ref2.indexCol,
      _ref2$foot = _ref2.foot,
      foot = _ref2$foot === void 0 ? false : _ref2$foot;
    var value = col.formatter ? col.formatter(item[col.key]) : item[col.key];
    if (foot && col.renderFoot) {
      value = col.renderFoot({
        value: value,
        item: item,
        key: col.key,
        index: index,
        indexCol: indexCol
      });
    } else if (col.render) {
      value = col.render({
        value: value,
        item: item,
        key: col.key,
        index: index,
        indexCol: indexCol
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      "data-testid": factoryTestId(props, "".concat(foot ? 'foot' : 'body', "-").concat(index, "-col-").concat(indexCol)),
      title: typeof value === 'string' ? value : undefined
    }, value);
  };
  React.useEffect(function () {
    var results = [];
    if (data) {
      if (dataChildrenKey) {
        results = recursiveData(data, dataChildrenKey, 0);
      } else {
        results = data;
      }
    }
    setSource(results);
  }, [data]);
  React.useImperativeHandle(ref, function () {
    return {
      scrollTo: function scrollTo(top) {
        var _refContainer$current2;
        return refContainer === null || refContainer === void 0 ? void 0 : (_refContainer$current2 = refContainer.current) === null || _refContainer$current2 === void 0 ? void 0 : _refContainer$current2.scroll({
          top: typeof top === 'function' ? top(refContainer === null || refContainer === void 0 ? void 0 : refContainer.current) : top,
          behavior: 'smooth'
        });
      }
    };
  }, [refContainer === null || refContainer === void 0 ? void 0 : refContainer.current]);
  return /*#__PURE__*/React.createElement(TableContainerStyle, {
    ref: refContainer,
    "data-testid": factoryTestId(props, 'container'),
    minHeight: minHeight,
    height: height,
    onScroll: onLoadMore ? handleScroll : undefined
  }, /*#__PURE__*/React.createElement(TableStyle, props, !(configs !== null && configs !== void 0 && configs.headless) && /*#__PURE__*/React.createElement("thead", null, cols === null || cols === void 0 ? void 0 : cols.map(function (cols, is) {
    return /*#__PURE__*/React.createElement(TableHeadRowStyle, _extends({
      key: "hub-table-head-row-".concat(is)
    }, rowConfigs), cols.map(function (col, i) {
      return /*#__PURE__*/React.createElement(TableHeadColStyle, {
        key: "hub-table-head-row-".concat(is, "-col-").concat(i),
        "data-testid": factoryTestId(props, "head-".concat(is, "-col-").concat(i)),
        width: col.width,
        minWidth: col.minWidth,
        sticky: col.sticky,
        printable: col.printable,
        colSpan: col.headColspan,
        index: i
      }, /*#__PURE__*/React.createElement(TableHeadOptionsStyle, {
        align: col.headAlign
      }, col.label, col.sort || col.sorter ? /*#__PURE__*/React.createElement(TableHeadSortStyle, {
        "data-testid": factoryTestId(props, "head-".concat(is, "-col-").concat(i, "-sorter")),
        type: "button",
        state: sourceSort[col.key],
        onClick: function onClick() {
          return handleSort(col);
        }
      }, sourceSort[col.key] === 'normal' ? /*#__PURE__*/React.createElement(NormalIcon, null) : /*#__PURE__*/React.createElement(SortIcon, null)) : /*#__PURE__*/React.createElement(React.Fragment, null)));
    }));
  })), /*#__PURE__*/React.createElement("tbody", null, source.map(function (item, i) {
    return /*#__PURE__*/React.createElement(TableBodyRowStyle, _extends({
      key: "hub-table-body-row-".concat(i),
      borderless: configs === null || configs === void 0 ? void 0 : configs.borderless,
      clickable: !!onClickRow
    }, rowConfigs, item.configs, {
      onClick: function onClick() {
        return onClickRow === null || onClickRow === void 0 ? void 0 : onClickRow(item);
      }
    }), cols === null || cols === void 0 ? void 0 : cols[lastIndex].map(function (col, ic) {
      return /*#__PURE__*/React.createElement(TableBodyColStyle, {
        key: "hub-table-body-row-".concat(i, "-col-").concat(ic),
        width: col.width,
        minWidth: col.minWidth,
        sticky: col.sticky,
        printable: col.printable,
        colSpan: item.ignoreColspan ? undefined : col.colspan,
        index: ic
      }, /*#__PURE__*/React.createElement(TableBodyColInnerStyle, null, /*#__PURE__*/React.createElement(TableBodyColCellStyle, {
        align: col.align,
        nowrap: col.nowrap,
        noOverflow: col.noOverflow
      }, /*#__PURE__*/React.createElement(TableCell, {
        item: item,
        col: col,
        index: i,
        indexCol: ic
      }))));
    }));
  })), foots && /*#__PURE__*/React.createElement("tfoot", null, foots === null || foots === void 0 ? void 0 : foots.map(function (item, i) {
    return /*#__PURE__*/React.createElement(TableBodyRowStyle, _extends({
      key: "hub-table-foot-row-".concat(i),
      borderless: configs === null || configs === void 0 ? void 0 : configs.borderless
    }, rowConfigs), cols === null || cols === void 0 ? void 0 : cols[lastIndex].map(function (col, ic) {
      return /*#__PURE__*/React.createElement(TableBodyColStyle, {
        key: "hub-table-foot-row-".concat(i, "-col-").concat(ic),
        width: col.width,
        sticky: col.sticky,
        printable: col.printable,
        colSpan: col.footColspan,
        index: ic,
        foot: true
      }, /*#__PURE__*/React.createElement(TableBodyColInnerStyle, null, /*#__PURE__*/React.createElement(TableBodyColCellStyle, {
        align: col.align,
        nowrap: col.nowrap,
        noOverflow: col.noOverflow
      }, /*#__PURE__*/React.createElement(TableCell, {
        item: item,
        col: col,
        index: i,
        indexCol: ic,
        foot: true
      }))));
    }));
  }))), children, loadMore && /*#__PURE__*/React.createElement(TableLoadMoreStyle, null, t('hub-table_loadmore')));
}
var HubTable = /*#__PURE__*/React.forwardRef(HubTableInner);

var TabsStyle = styled.div.withConfig({
  displayName: "TabsStyle",
  componentId: "sc-51wxdo-0"
})(["display:flex;align-items:center;color:", ";gap:", ";width:100%;overflow:auto hidden;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutralGrey[300];
}, function (_ref2) {
  var theme = _ref2.theme,
    gap = _ref2.gap;
  return gap && theme.spaces[gap];
});
var TabStyle = styled.div.withConfig({
  displayName: "TabStyle",
  componentId: "sc-51wxdo-1"
})(["display:flex;align-items:center;justify-content:center;padding:", ";width:", ";font-weight:600;", " ", " gap:", ";transition:0.5s ease-in-out color,0.3s ease-in-out border-color;white-space:nowrap;", " ", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spaces[3];
}, function (_ref4) {
  var width = _ref4.width;
  return width || '100%';
}, function (_ref5) {
  var active = _ref5.active,
    disabled = _ref5.disabled;
  return !active && !disabled ? 'cursor: pointer;' : '';
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? 'cursor: not-allowed;' : '';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spaces[2];
}, function (_ref8) {
  var theme = _ref8.theme,
    color = _ref8.color,
    colorLevel = _ref8.colorLevel,
    active = _ref8.active,
    disabled = _ref8.disabled;
  var colorHash = disabled ? theme.colors.neutralGrey[300] : !active && color ? theme.colors[color][300] : !active ? theme.colors.neutralGrey[600] : color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.primary[500];
  var borderHash = !active || disabled ? theme.colors[color || 'neutralGrey'][300] : colorHash;
  return "\n      color: ".concat(colorHash, ";\n      border-bottom: 2px solid ").concat(borderHash, ";\n    ");
}, function (_ref9) {
  var theme = _ref9.theme;
  return "\n    @media (".concat(theme.mediaQuery.md, ") {\n      padding: ").concat(function (_ref10) {
    var theme = _ref10.theme;
    return "".concat(theme.spaces[1], " ").concat(theme.spaces[1], " ").concat(theme.spaces[3], " ").concat(theme.spaces[1]);
  }, ";\n    }\n  ");
});

var _excluded$5 = ["onChange", "children"],
  _excluded2 = ["children"];
function HubTabs(_ref) {
  var onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$5);
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  React.useEffect(function () {
    if (props.current) {
      setSelected(props.current);
    }
  }, [props.current]);
  return /*#__PURE__*/React.createElement(TabsStyle, props, React.Children.map(children, function (child, i) {
    return /*#__PURE__*/React.isValidElement(child) && /*#__PURE__*/React.cloneElement(child, {
      disabled: props.disabled || child.props.disabled,
      width: props.width || child.props.width,
      active: child.props.active ? child.props.active : child.props.value ? selected === child.props.value : selected === i,
      onClick: function onClick() {
        if (!props.disabled && !child.props.disabled) {
          var _child$props$onClick, _child$props;
          setSelected(child.props.value || i);
          onChange === null || onChange === void 0 ? void 0 : onChange(child.props.value || i);
          (_child$props$onClick = (_child$props = child.props).onClick) === null || _child$props$onClick === void 0 ? void 0 : _child$props$onClick.call(_child$props);
        }
      }
    });
  }));
}
function HubTab(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement(TabStyle, props, children);
}

var TextCommonStyle = css(["font-weight:", ";text-align:", ";color:", ";white-space:", ";text-decoration:", ";text-transform:", ";font-style:", ";text-overflow:ellipsis;overflow:hidden;", " ", " ", ""], function (props) {
  return props.weight || 400;
}, function (props) {
  return props.align;
}, function (_ref) {
  var theme = _ref.theme,
    color = _ref.color,
    colorLevel = _ref.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : undefined;
}, function (_ref2) {
  var nowrap = _ref2.nowrap,
    prewrap = _ref2.prewrap;
  return nowrap ? 'nowrap' : prewrap ? 'pre-wrap' : undefined;
}, function (_ref3) {
  var decoration = _ref3.decoration;
  return decoration;
}, function (_ref4) {
  var transform = _ref4.transform;
  return transform;
}, function (_ref5) {
  var fontStyle = _ref5.fontStyle;
  return fontStyle;
}, function (_ref6) {
  var theme = _ref6.theme,
    size = _ref6.size;
  return size && "font-size: ".concat(theme.spaces[size], ";");
}, function (_ref7) {
  var spacing = _ref7.spacing;
  return spacing && "letter-spacing: ".concat(spacing, ";");
}, function (_ref8) {
  var theme = _ref8.theme,
    height = _ref8.height;
  return height && "line-height: ".concat(theme.spaces[height] || height, ";");
});
var TextHeading1Style = styled.h1.withConfig({
  displayName: "TextHeading1Style",
  componentId: "sc-15wj16y-0"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";", ""], function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.h1.family;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.h1.size;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.typography.h1.lineHeight;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.h1.letterSpacing;
}, TextCommonStyle);
var TextHeading2Style = styled.h2.withConfig({
  displayName: "TextHeading2Style",
  componentId: "sc-15wj16y-1"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";", ""], function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.h2.family;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.h2.size;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.h2.lineHeight;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.typography.h2.letterSpacing;
}, TextCommonStyle);
var TextHeading3Style = styled.h3.withConfig({
  displayName: "TextHeading3Style",
  componentId: "sc-15wj16y-2"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";", ""], function (_ref17) {
  var theme = _ref17.theme;
  return theme.typography.h3.family;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.typography.h3.size;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.typography.h3.lineHeight;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.typography.h3.letterSpacing;
}, TextCommonStyle);
var TextHeading4Style = styled.h4.withConfig({
  displayName: "TextHeading4Style",
  componentId: "sc-15wj16y-3"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";", ""], function (_ref21) {
  var theme = _ref21.theme;
  return theme.typography.h4.family;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.typography.h4.size;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.typography.h4.lineHeight;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.typography.h4.letterSpacing;
}, TextCommonStyle);
var TextOthersStyle = styled.span.withConfig({
  displayName: "TextOthersStyle",
  componentId: "sc-15wj16y-4"
})(["", " ", ""], function (_ref25) {
  var theme = _ref25.theme,
    typo = _ref25.typo;
  return "\n    font-family: ".concat(theme.typography[typo || 'body1'].family, ";\n    font-size: ").concat(theme.typography[typo || 'body1'].size, ";\n    line-height: ").concat(theme.typography[typo || 'body1'].lineHeight, ";\n    letter-spacing: ").concat(theme.typography[typo || 'body1'].letterSpacing, ";\n  ");
}, TextCommonStyle);

var _excluded$4 = ["max", "children"];
function format(v, max) {
  if (!v || !max) return v;
  if (typeof v === 'string') {
    var str = v.substring(0, max);
    return String(str).length !== String(v).length ? str + '...' : str;
  }
  return v;
}
function HubText(_ref) {
  var max = _ref.max,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$4);
  return React.useMemo(function () {
    var child = format(children, max);
    switch (props.typo) {
      case 'h1':
        return /*#__PURE__*/React.createElement(TextHeading1Style, props, child);
      case 'h2':
        return /*#__PURE__*/React.createElement(TextHeading2Style, props, child);
      case 'h3':
        return /*#__PURE__*/React.createElement(TextHeading3Style, props, child);
      case 'h4':
        return /*#__PURE__*/React.createElement(TextHeading4Style, props, child);
      default:
        return /*#__PURE__*/React.createElement(TextOthersStyle, props, child);
    }
  }, [props]);
}

var IconCalendar = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z",
    fill: "#083350"
  }));
});

var IconClose = (function () {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.70449 7.99957L11.8522 4.85652C11.9463 4.76242 11.9991 4.6348 11.9991 4.50174C11.9991 4.36867 11.9463 4.24105 11.8522 4.14696C11.7581 4.05286 11.6305 4 11.4975 4C11.3644 4 11.2368 4.05286 11.1427 4.14696L8 7.29501L4.85728 4.14696C4.76319 4.05286 4.63559 4 4.50253 4C4.36948 4 4.24188 4.05286 4.14779 4.14696C4.05371 4.24105 4.00085 4.36867 4.00085 4.50174C4.00085 4.6348 4.05371 4.76242 4.14779 4.85652L7.29551 7.99957L4.14779 11.1426C4.10096 11.1891 4.06379 11.2443 4.03843 11.3052C4.01306 11.3661 4 11.4314 4 11.4974C4 11.5634 4.01306 11.6287 4.03843 11.6896C4.06379 11.7505 4.10096 11.8057 4.14779 11.8522C4.19424 11.899 4.2495 11.9362 4.31039 11.9616C4.37127 11.9869 4.43658 12 4.50253 12C4.56849 12 4.6338 11.9869 4.69468 11.9616C4.75557 11.9362 4.81083 11.899 4.85728 11.8522L8 8.70414L11.1427 11.8522C11.1892 11.899 11.2444 11.9362 11.3053 11.9616C11.3662 11.9869 11.4315 12 11.4975 12C11.5634 12 11.6287 11.9869 11.6896 11.9616C11.7505 11.9362 11.8058 11.899 11.8522 11.8522C11.899 11.8057 11.9362 11.7505 11.9616 11.6896C11.9869 11.6287 12 11.5634 12 11.4974C12 11.4314 11.9869 11.3661 11.9616 11.3052C11.9362 11.2443 11.899 11.1891 11.8522 11.1426L8.70449 7.99957Z",
    fill: "#000000"
  }));
});

var LabelStyles = css(["display:flex;align-items:center;font-family:", ";font-size:", ";letter-spacing:", ";font-weight:600;"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.body2.family;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.body2.size;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.body2.letterSpacing;
});
var TextFieldLabelStyle = styled.label.withConfig({
  displayName: "TextFieldLabelStyle",
  componentId: "sc-qqzxct-0"
})(["", " line-height:", ";margin-bottom:", ";"], LabelStyles, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spaces[1];
});
var TextFieldRequiredStyle = styled.span.withConfig({
  displayName: "TextFieldRequiredStyle",
  componentId: "sc-qqzxct-1"
})(["", " color:", ";margin-left:", ";"], LabelStyles, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.error[500];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spaces[1];
});
var TextFieldInputStyle = styled.input.withConfig({
  displayName: "TextFieldInputStyle",
  componentId: "sc-qqzxct-2"
})([""]);
var TextFieldInputMaskStyle = styled(InputMask).withConfig({
  displayName: "TextFieldInputMaskStyle",
  componentId: "sc-qqzxct-3"
})([""]);
var TextFieldTextAreaStyle = styled.textarea.withConfig({
  displayName: "TextFieldTextAreaStyle",
  componentId: "sc-qqzxct-4"
})([""]);
var TextFieldInnerStyle = styled.div.withConfig({
  displayName: "TextFieldInnerStyle",
  componentId: "sc-qqzxct-5"
})(["display:flex;align-items:center;", " width:100%;min-height:", ";border-radius:4px;"], function (_ref8) {
  var theme = _ref8.theme,
    noGap = _ref8.noGap;
  return noGap ? '' : "gap: ".concat(theme.spaces[2], ";");
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spaces[7];
});
var TextFieldHintStyle = styled.div.withConfig({
  displayName: "TextFieldHintStyle",
  componentId: "sc-qqzxct-6"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:400;margin-top:", ";color:", ";width:100%;"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.body3.family;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.typography.body3.size;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.body3.lineHeight;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.body3.letterSpacing;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spaces[1];
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.neutralGrey[600];
});
var TextFieldIconBtn = styled.button.withConfig({
  displayName: "TextFieldIconBtn",
  componentId: "sc-qqzxct-7"
})(["display:flex;border:none;background-color:transparent;color:inherit;cursor:pointer;"]);
var TextFieldLoadingStyle = styled.div.withConfig({
  displayName: "TextFieldLoadingStyle",
  componentId: "sc-qqzxct-8"
})(["width:", ";min-width:", ";height:", ";border-radius:50%;animation:1s linear infinite ", ",", " 1s ease;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.spaces[4];
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.spaces[4];
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.spaces[4];
}, function () {
  return animations.spin;
}, function () {
  return animations.fadein;
});
var TextFieldSpacer = styled.div.withConfig({
  displayName: "TextFieldSpacer",
  componentId: "sc-qqzxct-9"
})(["flex:1 1 auto;"]);
var TextFieldStyle = styled.div.withConfig({
  displayName: "TextFieldStyle",
  componentId: "sc-qqzxct-10"
})(["display:flex;flex-direction:column;width:100%;", ",", ",", "{", " text-align:", ";background-color:transparent;width:100%;border:none;color:", ";&:focus{outline:none;}&::placeholder{color:", ";}}", "{border:1px solid ", ";background-color:", ";", " ", " ", ";}", "{color:", ";}", "{", "}", "{resize:", ";}"], TextFieldInputStyle, TextFieldInputMaskStyle, TextFieldTextAreaStyle, function (_ref19) {
  var theme = _ref19.theme,
    _ref19$typo = _ref19.typo,
    typo = _ref19$typo === void 0 ? 'body2' : _ref19$typo;
  return "\n    font-family: ".concat(theme.typography[typo].family, ";\n    font-size: ").concat(theme.typography[typo].size, ";\n    line-height: ").concat(theme.typography[typo].lineHeight, ";\n    letter-spacing: ").concat(theme.typography[typo].letterSpacing, ";\n  ");
}, function (_ref20) {
  var align = _ref20.align;
  return align;
}, function (_ref21) {
  var theme = _ref21.theme,
    color = _ref21.color,
    colorLevel = _ref21.colorLevel,
    error = _ref21.error;
  return error ? theme.colors.error[500] : color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.neutral[800];
}, function (_ref22) {
  var theme = _ref22.theme,
    placeholderColor = _ref22.placeholderColor,
    placeholderColorLevel = _ref22.placeholderColorLevel;
  return placeholderColor && placeholderColorLevel ? theme.colors[placeholderColor][placeholderColorLevel] : placeholderColor && theme.colors[placeholderColor] ? theme.colors[placeholderColor][500] : placeholderColor ? placeholderColor : theme.colors.neutral[400];
}, TextFieldInnerStyle, function (_ref23) {
  var theme = _ref23.theme,
    color = _ref23.color,
    colorLevel = _ref23.colorLevel,
    borderColor = _ref23.borderColor,
    borderColorLevel = _ref23.borderColorLevel,
    error = _ref23.error;
  if (error) {
    return theme.colors.error[500];
  }
  if (borderColor) {
    return borderColor && borderColorLevel ? theme.colors[borderColor][borderColorLevel] : theme.colors[borderColor] ? theme.colors[borderColor][500] : borderColor;
  }
  return color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.neutral[400];
}, function (_ref24) {
  var theme = _ref24.theme,
    bgColor = _ref24.bgColor,
    bgColorLevel = _ref24.bgColorLevel;
  return bgColor && bgColorLevel ? theme.colors[bgColor][bgColorLevel] : bgColor && theme.colors[bgColor] ? theme.colors[bgColor][500] : bgColor ? bgColor : theme.colors.white[500];
}, function (_ref25) {
  var disabled = _ref25.disabled,
    theme = _ref25.theme;
  return disabled ? "\n        background-color: ".concat(theme.colors.neutral[200], ";\n        cursor: not-allowed;\n      ") : '';
}, function (_ref26) {
  var wrap = _ref26.wrap;
  return wrap ? "flex-wrap: wrap;" : '';
}, function (_ref27) {
  var theme = _ref27.theme,
    pad = _ref27.pad;
  if (!pad) return "padding: ".concat(theme.spaces[2]);
  if (typeof pad === 'string') return "padding: ".concat(theme.spaces[pad]);
  if (pad.length === 4) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]], " ").concat(theme.spaces[pad[3]]);
  }
  if (pad.length === 3) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]], " ").concat(theme.spaces[pad[2]]);
  }
  if (pad.length === 2) {
    return "padding: ".concat(theme.spaces[pad[0]], " ").concat(theme.spaces[pad[1]]);
  }
  return "padding: ".concat(theme.spaces[pad[0]]);
}, TextFieldHintStyle, function (_ref28) {
  var theme = _ref28.theme,
    color = _ref28.color,
    colorLevel = _ref28.colorLevel,
    error = _ref28.error;
  return error ? theme.colors.error[500] : color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : undefined;
}, TextFieldLoadingStyle, function (_ref29) {
  var theme = _ref29.theme,
    color = _ref29.color,
    colorLevel = _ref29.colorLevel;
  return "\n      border: 3px solid ".concat(theme.colors.primary[100], ";\n      border-top: 3px solid ").concat(color && colorLevel ? theme.colors[color][colorLevel] : color && theme.colors[color] ? theme.colors[color][500] : color ? color : theme.colors.primary[500], ";\n    ");
}, TextFieldTextAreaStyle, function (_ref30) {
  var resize = _ref30.resize;
  return resize || 'both';
});

var _excluded$3 = ["id", "className", "clearable", "noShowMask", "value", "defaultValue", "loading", "wrap", "autocomplete", "onChange", "onLazyChange", "onShowPicker", "onClick", "onFocus", "onClear", "containerRef", "noGap", "title", "left", "right", "bottom", "hint", "after", "element", "children"];
var lazyInput = debounce(1000);
var formatChars = {
  '9': '[0-9]',
  a: '[A-Za-z]',
  A: '[A-Z]',
  '*': '[A-Za-z0-9]'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateInputValue(el, v) {
  if (!el || typeof v === 'undefined') return;
  if (el.value === String(v)) return;
  if (el.setInputValue) {
    el.setInputValue(v);
  } else {
    el.value = v;
  }
}
function HubTextFieldInner(_ref, ref) {
  var id = _ref.id,
    className = _ref.className,
    clearable = _ref.clearable,
    noShowMask = _ref.noShowMask,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    loading = _ref.loading,
    wrap = _ref.wrap,
    autocomplete = _ref.autocomplete,
    onChange = _ref.onChange,
    onLazyChange = _ref.onLazyChange,
    onShowPicker = _ref.onShowPicker,
    onClick = _ref.onClick,
    _onFocus = _ref.onFocus,
    onClear = _ref.onClear,
    containerRef = _ref.containerRef,
    noGap = _ref.noGap,
    title = _ref.title,
    left = _ref.left,
    right = _ref.right,
    bottom = _ref.bottom,
    hint = _ref.hint,
    after = _ref.after,
    element = _ref.element,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$3);
  var inputId = React.useMemo(function () {
    return "hub-text-field-".concat(id);
  }, [id]);
  var inputRef = React.useRef();
  var mask = React.useMemo(function () {
    switch (props.type) {
      case 'cpf':
        return '999.999.999-99';
      case 'cnpj':
        return '99.999.999/9999-99';
      case 'phone':
        return '(99) 99999-9999';
      case 'cep':
        return '99999-999';
      case 'uf':
        return 'AA';
      default:
        return props.mask;
    }
  }, [props.type, props.mask]);
  var type = React.useMemo(function () {
    switch (props.type) {
      case 'password':
      case 'email':
      case 'number':
      case 'color':
      case 'date':
      case 'time':
      case 'month':
      case 'week':
        return props.type;
      case 'datetime':
        return 'datetime-local';
      default:
        return 'text';
    }
  }, [props.type]);
  var showPicker = React.useMemo(function () {
    return props.type && ['date', 'time', 'datetime', 'month', 'week'].includes(props.type);
  }, [props.type]);
  var showClearBtn = React.useMemo(function () {
    return clearable && (value || defaultValue) && !props.disabled;
  }, [clearable, value, defaultValue, props.disabled]);
  function mutation(v) {
    switch (props.type) {
      case 'number':
        return Number(v);
      default:
        return v;
    }
  }
  function handleChange(v) {
    if (props.disabled) return;
    var value = mutation(v);
    if (onChange) {
      onChange(value);
    }
    if (onLazyChange) {
      lazyInput(function () {
        return onLazyChange(value);
      });
    }
  }
  function handlePicker() {
    if (inputRef.current) {
      if (onShowPicker) {
        onShowPicker(inputRef.current);
      } else {
        var _inputRef$current$sho, _inputRef$current;
        (_inputRef$current$sho = (_inputRef$current = inputRef.current)['showPicker']) === null || _inputRef$current$sho === void 0 ? void 0 : _inputRef$current$sho.call(_inputRef$current);
      }
    }
  }
  function handleClear() {
    handleChange('');
    updateInputValue(inputRef.current, '');
    onClear === null || onClear === void 0 ? void 0 : onClear();
  }
  function handleScroll(e) {
    if (props.type === 'number') {
      if (e.cancelable) {
        e.preventDefault();
      }
      if (e.target['blur']) {
        e.target['blur']();
      }
    }
  }
  React.useEffect(function () {
    updateInputValue(inputRef.current, defaultValue);
  }, [inputRef.current, defaultValue]);
  React.useEffect(function () {
    updateInputValue(inputRef.current, value);
  }, [inputRef.current, value]);
  React.useImperativeHandle(ref, function () {
    return {
      showPicker: handlePicker,
      clear: handleClear,
      inputRef: inputRef
    };
  }, []);
  return /*#__PURE__*/React.createElement(TextFieldStyle, _extends({}, props, {
    wrap: wrap,
    ref: containerRef
  }), children && /*#__PURE__*/React.createElement(TextFieldLabelStyle, {
    htmlFor: inputId
  }, children, props.required && /*#__PURE__*/React.createElement(TextFieldRequiredStyle, null, "*")), /*#__PURE__*/React.createElement(TextFieldInnerStyle, {
    noGap: noGap
  }, /*#__PURE__*/React.createElement(React.Fragment, null, left, element ? element : mask ? /*#__PURE__*/React.createElement(TextFieldInputMaskStyle, _extends({}, props, {
    "data-testid": factoryTestId(props, 'input'),
    id: inputId,
    className: className,
    ref: inputRef,
    mask: mask,
    type: type,
    autoComplete: autocomplete || 'off',
    formatChars: formatChars,
    alwaysShowMask: !noShowMask,
    value: value,
    title: title || value || defaultValue || props.placeholder,
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    },
    onFocus: function onFocus() {
      return _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(inputRef.current);
    },
    onClick: onClick
  })) : props.type === 'area' ? /*#__PURE__*/React.createElement(TextFieldTextAreaStyle, _extends({}, props, {
    "data-testid": factoryTestId(props, 'input'),
    id: inputId,
    className: className,
    ref: inputRef,
    autoComplete: autocomplete || 'off',
    value: value,
    title: title || value || defaultValue || props.placeholder,
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    },
    onFocus: function onFocus() {
      return _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(inputRef.current);
    },
    onClick: onClick
  })) : /*#__PURE__*/React.createElement(TextFieldInputStyle, _extends({}, props, {
    "data-testid": factoryTestId(props, 'input'),
    id: inputId,
    className: className,
    ref: inputRef,
    type: type,
    autoComplete: autocomplete || 'off',
    value: value,
    title: title || value || defaultValue || props.placeholder,
    onWheel: handleScroll,
    onChange: function onChange(e) {
      return handleChange(e.target.value);
    },
    onFocus: function onFocus() {
      return _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(inputRef.current);
    },
    onClick: onClick
  })), after, (loading || showClearBtn || showPicker || right) && /*#__PURE__*/React.createElement(TextFieldSpacer, null), loading ? /*#__PURE__*/React.createElement(TextFieldLoadingStyle, null) : /*#__PURE__*/React.createElement(React.Fragment, null, showClearBtn ? /*#__PURE__*/React.createElement(TextFieldIconBtn, {
    "data-testid": factoryTestId(props, 'clear'),
    type: "button",
    onClick: handleClear
  }, /*#__PURE__*/React.createElement(IconClose, null)) : right, showPicker && /*#__PURE__*/React.createElement(TextFieldIconBtn, {
    "data-testid": factoryTestId(props, 'picker'),
    type: "button",
    disabled: props.disabled,
    onClick: handlePicker
  }, /*#__PURE__*/React.createElement(IconCalendar, null))))), bottom, (hint || props.error) && /*#__PURE__*/React.createElement(TextFieldHintStyle, null, hint || props.error));
}
var HubTextField = /*#__PURE__*/React.forwardRef(HubTextFieldInner);

var ToggleIconStyle = styled.div.withConfig({
  displayName: "ToggleIconStyle",
  componentId: "sc-vcyrkb-0"
})(["display:flex;align-items:center;justify-content:center;position:relative;border-radius:120px;transition:background-color 0.5s;"]);
var ToggleSwitchStyle = styled.div.withConfig({
  displayName: "ToggleSwitchStyle",
  componentId: "sc-vcyrkb-1"
})(["border-radius:50%;position:absolute;transition:right 0.5s;"]);
var ToggleInputStyle = styled.input.withConfig({
  displayName: "ToggleInputStyle",
  componentId: "sc-vcyrkb-2"
})(["display:none;"]);
var ToggleLabelStyle = styled.label.withConfig({
  displayName: "ToggleLabelStyle",
  componentId: "sc-vcyrkb-3"
})(["font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";font-weight:400;margin-left:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.typography.body2.family;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.body2.size;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.body2.lineHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body2.letterSpacing;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spaces[2];
});
var ToggleStyle = styled.div.withConfig({
  displayName: "ToggleStyle",
  componentId: "sc-vcyrkb-4"
})(["display:flex;align-items:center;", " ", "{background-color:", ";", " cursor:", ";}", "{background-color:", ";", " ", "}"], function (_ref6) {
  var clickable = _ref6.clickable,
    disabled = _ref6.disabled;
  return disabled ? 'cursor: not-allowed;' : clickable ? 'cursor: pointer;' : undefined;
}, ToggleIconStyle, function (_ref7) {
  var theme = _ref7.theme,
    checked = _ref7.checked,
    color = _ref7.color;
  if (checked) {
    return theme.colors[color || 'primary'][500];
  }
  return theme.colors.neutral[400];
}, function (_ref8) {
  var theme = _ref8.theme,
    size = _ref8.size;
  return "\n      min-width: ".concat(size === 'lg' ? theme.spaces[7] : theme.spaces[6], ";\n      width: ").concat(size === 'lg' ? theme.spaces[7] : theme.spaces[6], ";\n      height: ").concat(size === 'lg' ? theme.spaces[5] : theme.spaces[3], ";\n    ");
}, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled ? undefined : 'pointer';
}, ToggleSwitchStyle, function (_ref10) {
  var theme = _ref10.theme,
    disabled = _ref10.disabled;
  if (disabled) {
    return theme.colors.neutral[300];
  }
  return theme.colors.white[500];
}, function (_ref11) {
  var theme = _ref11.theme,
    size = _ref11.size;
  return "\n      min-width: ".concat(size === 'lg' ? theme.spaces[3] : theme.spaces[2], ";\n      width: ").concat(size === 'lg' ? theme.spaces[3] : theme.spaces[2], ";\n      height: ").concat(size === 'lg' ? theme.spaces[3] : theme.spaces[2], ";\n    ");
}, function (_ref12) {
  var theme = _ref12.theme,
    checked = _ref12.checked;
  return "right: ".concat(checked ? theme.spaces[1] : theme.spaces[4], ";");
});

var _excluded$2 = ["onClick", "onChange", "children"];
function HubToggle(_ref) {
  var _onClick = _ref.onClick,
    onChange = _ref.onChange,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return /*#__PURE__*/React.createElement(ToggleStyle, _extends({}, props, {
    clickable: !!onChange,
    onClick: function onClick(e) {
      e.stopPropagation();
      if (!props.disabled) {
        onChange === null || onChange === void 0 ? void 0 : onChange(!props.checked);
        _onClick === null || _onClick === void 0 ? void 0 : _onClick();
      }
    }
  }), /*#__PURE__*/React.createElement(ToggleIconStyle, {
    id: "hub-toggle-icon-".concat(props.id)
  }, /*#__PURE__*/React.createElement(ToggleSwitchStyle, {
    id: "hub-toggle-switch-".concat(props.id)
  })), /*#__PURE__*/React.createElement(ToggleInputStyle, {
    id: "hub-toggle-".concat(props.id),
    type: "checkbox",
    disabled: props.disabled,
    checked: props.checked,
    onChange: function onChange() {
      return 0;
    }
  }), children && /*#__PURE__*/React.createElement(ToggleLabelStyle, {
    htmlFor: "hub-toggle-".concat(props.id)
  }, children));
}

var TokenInputStyle = styled.input.withConfig({
  displayName: "TokenInputStyle",
  componentId: "sc-1e95ggh-0"
})(["text-align:center;background-color:transparent;width:100%;border:none;border-radius:", ";&:focus{outline:none;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spaces[2];
});
var TokenStyle = styled.div.withConfig({
  displayName: "TokenStyle",
  componentId: "sc-1e95ggh-1"
})(["display:flex;align-items:center;gap:", ";", "{", " color:", ";border:1px solid ", ";background-color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[1];
}, TokenInputStyle, function (_ref3) {
  var theme = _ref3.theme,
    _ref3$typo = _ref3.typo,
    typo = _ref3$typo === void 0 ? 'h1' : _ref3$typo;
  return "\n      font-family: ".concat(theme.typography[typo].family, ";\n      font-size: ").concat(theme.typography[typo].size, ";\n      line-height: ").concat(theme.typography[typo].lineHeight, ";\n      letter-spacing: ").concat(theme.typography[typo].letterSpacing, ";\n      width: calc(").concat(theme.spaces[3], " + ").concat(theme.typography[typo].size, ");\n      height: calc(").concat(theme.spaces[6], " + ").concat(theme.typography[typo].size, ");\n    ");
}, function (_ref4) {
  var theme = _ref4.theme,
    color = _ref4.color,
    colorLevel = _ref4.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.neutral[800];
}, function (_ref5) {
  var theme = _ref5.theme,
    color = _ref5.color,
    colorLevel = _ref5.colorLevel,
    borderColor = _ref5.borderColor,
    borderColorLevel = _ref5.borderColorLevel;
  if (borderColor) {
    return borderColor && borderColorLevel ? theme.colors[borderColor][borderColorLevel] : theme.colors[borderColor][500];
  }
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.neutral[400];
}, function (_ref6) {
  var theme = _ref6.theme,
    bgColor = _ref6.bgColor,
    bgColorLevel = _ref6.bgColorLevel;
  return bgColor && bgColorLevel ? theme.colors[bgColor][bgColorLevel] : bgColor ? theme.colors[bgColor][500] : undefined;
});

var _excluded$1 = ["onlyNumber", "length", "value", "onChange"];
function HubToken(_ref) {
  var onlyNumber = _ref.onlyNumber,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? 4 : _ref$length,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    onChange = _ref.onChange,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var refs = [];
  var amount = React.useMemo(function () {
    return array(length, 0, true);
  }, [length]);
  function mountRefs(e) {
    if (e && !refs.some(function (x) {
      return x.id === e.id;
    })) {
      refs.push(e);
    }
  }
  function handleChange(i, v) {
    var newValue = '';
    if (onlyNumber) {
      newValue = numberFormatter(v);
    } else {
      newValue = v;
    }
    if (newValue) {
      var _refs;
      (_refs = refs[i + 1]) === null || _refs === void 0 ? void 0 : _refs.select();
    } else if (!v) {
      var _refs2;
      (_refs2 = refs[i - 1]) === null || _refs2 === void 0 ? void 0 : _refs2.select();
    }
    refs[i].value = newValue;
    onChange === null || onChange === void 0 ? void 0 : onChange(refs.reduce(function (acc, x) {
      return acc += x.value;
    }, ''));
  }
  function handlePaste(e) {
    e.preventDefault();
    var paste = (e.clipboardData || window.Clipboard).getData('text');
    onChange === null || onChange === void 0 ? void 0 : onChange(paste);
  }
  React.useEffect(function () {
    refs.forEach(function (ref, i) {
      if (value && value[i]) {
        ref.value = value[i];
      } else {
        ref.value = '';
      }
    });
  }, [amount, value]);
  return /*#__PURE__*/React.createElement(TokenStyle, props, amount.map(function (x, i) {
    var _refs$i;
    return /*#__PURE__*/React.createElement(TokenInputStyle, {
      key: "hub-token-input-".concat(x),
      "data-testid": factoryTestId(props, 'input'),
      id: "hub-token-input-".concat(x),
      ref: mountRefs,
      type: "text",
      maxLength: 1,
      value: (_refs$i = refs[i]) === null || _refs$i === void 0 ? void 0 : _refs$i.value,
      onChange: function onChange(e) {
        return handleChange(i, e.target.value);
      },
      onPaste: handlePaste
    });
  }));
}

var TooltipContentStyle = styled.div.withConfig({
  displayName: "TooltipContentStyle",
  componentId: "sc-kh1966-0"
})(["display:flex;align-items:center;justify-content:center;text-align:center;position:absolute;padding:", ";border-radius:", ";font-family:", ";font-size:", ";line-height:", ";letter-spacing:", ";animation:0.3s ease-in-out ", ";"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spaces[2], " ").concat(theme.spaces[1]);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spaces[1];
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.body3.family;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.body3.size;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.body3.lineHeight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.typography.body3.letterSpacing;
}, function () {
  return animations.fadein;
});
var TooltipArrowStyle = styled.div.withConfig({
  displayName: "TooltipArrowStyle",
  componentId: "sc-kh1966-1"
})(["position:absolute;border:", ";animation:0.3s ease-in-out ", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return "".concat(theme.spaces[2], " solid ").concat(theme.colors.neutralGrey[700]);
}, function () {
  return animations.fadein;
});
var TooltipTriggerStyle = styled.div.withConfig({
  displayName: "TooltipTriggerStyle",
  componentId: "sc-kh1966-2"
})(["display:flex;align-items:center;justify-content:center;", ""], function (_ref8) {
  var width = _ref8.width;
  return width ? "width: ".concat(width, ";") : '';
});
var TooltipStyle = styled.div.withConfig({
  displayName: "TooltipStyle",
  componentId: "sc-kh1966-3"
})([""]);
var TooltipContainerStyle = styled.div.withConfig({
  displayName: "TooltipContainerStyle",
  componentId: "sc-kh1966-4"
})(["position:absolute;z-index:70;", "{width:", ";", " background-color:", ";color:", ";", "}", "{", "}"], TooltipContentStyle, function (_ref9) {
  var width = _ref9.width;
  return width;
}, function (_ref10) {
  var nowrap = _ref10.nowrap;
  return nowrap ? 'white-space: nowrap;' : '';
}, function (_ref11) {
  var theme = _ref11.theme,
    color = _ref11.color,
    colorLevel = _ref11.colorLevel;
  return color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.neutralGrey[700];
}, function (_ref12) {
  var theme = _ref12.theme,
    colorText = _ref12.colorText,
    colorTextLevel = _ref12.colorTextLevel;
  return colorText && colorTextLevel ? theme.colors[colorText][colorTextLevel] : colorText ? theme.colors[colorText][500] : theme.colors.white[500];
}, function (_ref13) {
  var theme = _ref13.theme,
    position = _ref13.position;
  var margin = "calc(".concat(theme.spaces[2], " + 2px)");
  switch (position) {
    case 'top':
      return "\n            bottom: 100%;\n            margin-bottom: ".concat(margin, ";\n            left: 50%;\n            transform: translateX(-50%);\n          ");
    case 'left':
      return "\n            right: 100%;\n            margin-right: ".concat(margin, ";\n            top: 50%;\n            transform: translateY(-50%);\n          ");
    case 'right':
      return "\n            left: 100%;\n            margin-left: ".concat(margin, ";\n            top: 50%;\n            transform: translateY(-50%);\n          ");
    case 'topLeft':
      return "\n            bottom: 100%;\n            margin-bottom: ".concat(margin, ";\n            left: 50%;\n            transform: translateX(-100%);\n          ");
    case 'topRight':
      return "\n            bottom: 100%;\n            margin-bottom: ".concat(margin, ";\n            left: 50%;\n            transform: translateX(-0%);\n          ");
    case 'bottomLeft':
      return "\n            top: 100%;\n            margin-top: ".concat(margin, ";\n            left: 50%;\n            transform: translateX(-100%);\n          ");
    case 'bottomRight':
      return "\n            top: 100%;\n            margin-top: ".concat(margin, ";\n            left: 50%;\n            transform: translateX(-0%);\n          ");
    default:
      return "\n            top: 100%;\n            margin-top: ".concat(margin, ";\n            left: 50%;\n            transform: translateX(-50%);\n          ");
  }
}, TooltipArrowStyle, function (_ref14) {
  var theme = _ref14.theme,
    position = _ref14.position,
    color = _ref14.color,
    colorLevel = _ref14.colorLevel;
  var hash = color && colorLevel ? theme.colors[color][colorLevel] : color ? theme.colors[color][500] : theme.colors.neutralGrey[700];
  switch (position) {
    case 'top':
      return "\n            bottom: 100%;\n            margin-bottom: -".concat(theme.spaces[1], ";\n            border-color: ").concat(hash, " transparent transparent transparent;\n            left: 50%;\n            transform: translateX(-50%);\n          ");
    case 'left':
      return "\n            right: 100%;\n            margin-right: -".concat(theme.spaces[1], ";\n            border-color: transparent transparent transparent ").concat(hash, ";\n            top: 50%;\n            transform: translateY(-50%);\n          ");
    case 'right':
      return "\n            left: 100%;\n            margin-left: -".concat(theme.spaces[1], ";\n            border-color: transparent ").concat(hash, " transparent transparent;\n            top: 50%;\n            transform: translateY(-50%);\n          ");
    case 'topLeft':
      return "\n            bottom: 100%;\n            margin-bottom: -".concat(theme.spaces[1], ";\n            border-color: ").concat(hash, " transparent transparent transparent;\n            left: 50%;\n            transform: translateX(-150%);\n          ");
    case 'topRight':
      return "\n            bottom: 100%;\n            margin-bottom: -".concat(theme.spaces[1], ";\n            border-color: ").concat(hash, " transparent transparent transparent;\n            left: 50%;\n            transform: translateX(50%);\n          ");
    case 'bottomLeft':
      return "\n            top: 100%;\n            margin-top: -".concat(theme.spaces[1], ";\n            border-color: transparent transparent ").concat(hash, " transparent;\n            left: 50%;\n            transform: translateX(-150%);\n          ");
    case 'bottomRight':
      return "\n            top: 100%;\n            margin-top: -".concat(theme.spaces[1], ";\n            border-color: transparent transparent ").concat(hash, " transparent;\n            left: 50%;\n            transform: translateX(50%);\n          ");
    default:
      return "\n            top: 100%;\n            margin-top: -".concat(theme.spaces[1], ";\n            border-color: transparent transparent ").concat(hash, " transparent;\n            left: 50%;\n            transform: translateX(-50%);\n          ");
  }
});

var _excluded = ["opened", "triggerWidth", "content", "disabled", "position", "children"];
function HubTooltip(_ref) {
  var open = _ref.opened,
    triggerWidth = _ref.triggerWidth,
    content = _ref.content,
    disabled = _ref.disabled,
    position = _ref.position,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _React$useState = React.useState(open),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    opened = _React$useState2[0],
    setOpened = _React$useState2[1];
  var _React$useState3 = React.useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    source = _React$useState4[0],
    setSource = _React$useState4[1];
  var timer = React.useRef();
  var _React$useState5 = React.useState(),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    contentDimensions = _React$useState6[0],
    setContentDimensions = _React$useState6[1];
  var coordinates = React.useMemo(function () {
    if (source !== null && source !== void 0 && source.target && contentDimensions) {
      var _getBoundingClientRec, _ref2;
      var scroll = scrollPosition();
      var rect = ((_getBoundingClientRec = (_ref2 = source.target).getBoundingClientRect) === null || _getBoundingClientRec === void 0 ? void 0 : _getBoundingClientRec.call(_ref2)) || {};
      var abs = getAbsPosition(source.target);
      var top = abs.top || rect.top;
      var left = abs.left || rect.left;
      var pos = position || 'bottom';
      if (top - contentDimensions.h < scroll.top) {
        pos = pos.replace('top', 'bottom');
      }
      if (top + rect.height + contentDimensions.h > scroll.bottom) {
        pos = pos.replace('bottom', 'top');
      }
      if (pos === 'left' && left - contentDimensions.w < scroll.left) {
        pos = 'right';
      }
      if (pos === 'right' && left + rect.width + contentDimensions.w > scroll.right) {
        pos = 'left';
      }
      var offset = {
        x: 0,
        y: 0
      };
      switch (pos) {
        case 'left':
          offset = {
            x: left,
            y: top + rect.height / 2
          };
          break;
        case 'right':
          offset = {
            x: left + rect.width,
            y: top + rect.height / 2
          };
          break;
        case 'top':
        case 'topLeft':
        case 'topRight':
          offset = {
            x: left + rect.width / 2,
            y: top
          };
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          offset = {
            x: left + rect.width / 2,
            y: top + rect.height
          };
          break;
      }
      return {
        top: offset.y,
        left: offset.x,
        pos: pos
      };
    }
    return undefined;
  }, [source, contentDimensions, position]);
  var getTrigger = React.useCallback(function (el) {
    if (el && !source) {
      setSource({
        target: el
      });
    }
  }, [source]);
  var getContentDimensions = React.useCallback(function (el) {
    if (el && !contentDimensions) {
      setContentDimensions({
        w: el.clientWidth,
        h: el.clientHeight
      });
    }
  }, [contentDimensions]);
  var handleOpened = React.useCallback(function (open) {
    if (disabled) return;
    if (process.env.NODE_ENV === 'test') {
      setOpened(open);
      return;
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(function () {
      return setOpened(open);
    }, 200);
  }, [disabled]);
  var handleEvent = React.useCallback(function (e) {
    setSource(e);
    handleOpened(!opened);
  }, [opened]);
  React.useEffect(function () {
    setOpened(open);
  }, [open]);
  return /*#__PURE__*/React.createElement(TooltipStyle, null, /*#__PURE__*/React.createElement(TooltipTriggerStyle, {
    ref: getTrigger,
    width: triggerWidth,
    onClick: handleEvent,
    onMouseEnter: handleEvent,
    onMouseLeave: function onMouseLeave() {
      return handleOpened(false);
    }
  }, children), opened && /*#__PURE__*/ReactDOM.createPortal(/*#__PURE__*/React.createElement(TooltipContainerStyle, _extends({}, props, {
    position: (coordinates === null || coordinates === void 0 ? void 0 : coordinates.pos) || position,
    style: coordinates
  }), /*#__PURE__*/React.createElement(TooltipArrowStyle, null), /*#__PURE__*/React.createElement(TooltipContentStyle, {
    ref: getContentDimensions,
    onMouseEnter: function onMouseEnter() {
      return handleOpened(true);
    },
    onMouseLeave: function onMouseLeave() {
      return handleOpened(false);
    }
  }, content)), window.document.body));
}

export { HubAlert, HubAnimation, HubAvatar, HubBadge, HubBreadcrumb, HubBreadcrumbs, HubButton, HubCalendar, HubCard, HubCheckbox, HubCollapse, HubDropdown, HubDropdownIcon, HubFileUpload, HubForm, HubGrid, HubIcon, HubList, HubListItem, HubModal, HubNavbar, HubPagination, HubPasswordStrength, HubPopover, HubPrintable, HubProgressBar, HubProgressStep, HubProgressStepper, HubProgressTab, HubProgressTabs, HubRadio, HubRadioGroup, HubSection, HubSeparator, HubSidenav, HubSidenavIcon, HubSkeleton, HubTab, HubTable, HubTabs, HubText, HubTextField, HubToggle, HubToken, HubTooltip, getPasswordStrength };
