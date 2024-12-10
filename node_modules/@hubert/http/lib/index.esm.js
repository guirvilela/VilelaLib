import { useAuth } from '@hubert/auth';
import { camelCaseProps, doubleEncodeURI, isBrowser, isPtBr, loadCache, parseStr, replaceAll, saveCache, simpleEncodeURI } from '@vilela/shared';
import React from 'react';

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

/**
 * Type return of useAction Hook
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars

/**
 * Create util state to use in http request
 * @param initialData Object
 * @return Action
 */
function useAction(initialData) {
  var defaultValue = initialData || [];
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    payload = _React$useState2[0],
    setPayload = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    success = _React$useState4[0],
    setSuccess = _React$useState4[1];
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    error = _React$useState6[0],
    setError = _React$useState6[1];
  var _React$useState7 = React.useState(0),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    statusCode = _React$useState8[0],
    setStatusCode = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    loading = _React$useState10[0],
    setLoading = _React$useState10[1];
  var _React$useState11 = React.useState(true),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    pristine = _React$useState12[0],
    setPristine = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    complete = _React$useState14[0],
    setComplete = _React$useState14[1];
  var hasMsg = React.useMemo(function () {
    return !!success || !!error;
  }, [success, error]);
  function closeMsg() {
    setStatusCode(0);
    setError('');
    setSuccess(false);
  }
  function reset(keepData) {
    closeMsg();
    setPristine(true);
    setComplete(false);
    if (!keepData) {
      setPayload(defaultValue);
    }
  }
  function updateData(v) {
    setPayload(v);
  }
  function exec(_x, _x2, _x3) {
    return _exec.apply(this, arguments);
  }
  function _exec() {
    _exec = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, configs, props) {
      var call, usingCache, _configs$cacheInvalid, data, promise;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            closeMsg();
            setPristine(false);
            setComplete(false);
            if (!(configs !== null && configs !== void 0 && configs.noLoading)) {
              setLoading(true);
            }
            if (!(configs !== null && configs !== void 0 && configs.keepData)) {
              setPayload(defaultValue);
            }
            call = request;
            usingCache = false; // ? if has cache and no force refresh cache, change request to cache data
            if (configs !== null && configs !== void 0 && configs.cacheKey && !(configs !== null && configs !== void 0 && configs.cacheRefresh)) {
              data = loadCache(configs === null || configs === void 0 ? void 0 : configs.cacheKey);
              if (data && !(configs !== null && configs !== void 0 && (_configs$cacheInvalid = configs.cacheInvalidate) !== null && _configs$cacheInvalid !== void 0 && _configs$cacheInvalid.call(configs, data.results !== undefined ? data : {
                results: data
              }))) {
                call = function call() {
                  return new Promise(function (resolve) {
                    return resolve(data);
                  });
                };
                usingCache = true;
              }
            }
            promise = call(props);
            return _context.abrupt("return", (typeof promise === 'function' ? promise() : promise
            // ? save cache if has cache config
            ).then(function (data) {
              if (configs !== null && configs !== void 0 && configs.cacheKey && !usingCache) {
                saveCache(configs.cacheKey, data, configs.cacheExpires);
              }
              return data;
            })
            // ? on success flow
            .then(function (data) {
              var _configs$mutation, _configs$mutation2;
              // ? transform data on success (mutation)
              var dataWithResults = data;
              var transformedData = (dataWithResults === null || dataWithResults === void 0 ? void 0 : dataWithResults.results) !== undefined ? _objectSpread2(_objectSpread2({}, dataWithResults), {}, {
                results: (configs === null || configs === void 0 ? void 0 : (_configs$mutation = configs.mutation) === null || _configs$mutation === void 0 ? void 0 : _configs$mutation.call(configs, dataWithResults.results)) || dataWithResults.results
              }) : {
                results: (configs === null || configs === void 0 ? void 0 : (_configs$mutation2 = configs.mutation) === null || _configs$mutation2 === void 0 ? void 0 : _configs$mutation2.call(configs, data)) || data
              };
              if (configs !== null && configs !== void 0 && configs.forceError) {
                return Promise.reject({
                  message: configs === null || configs === void 0 ? void 0 : configs.forceError,
                  status: transformedData.status
                });
              }
              if (transformedData.status === 204 && configs !== null && configs !== void 0 && configs.forceErrorOnNoContent) {
                return Promise.reject({
                  message: isPtBr() ? 'Nenhum item encontrado!' : 'No items found!',
                  status: transformedData.status
                });
              }
              try {
                var _configs$onSuccess;
                configs === null || configs === void 0 ? void 0 : (_configs$onSuccess = configs.onSuccess) === null || _configs$onSuccess === void 0 ? void 0 : _configs$onSuccess.call(configs, transformedData);
              } catch (err) {
                var message = err;
                if (err instanceof Error) {
                  message = err.message;
                }
                return Promise.reject({
                  message: message,
                  status: transformedData.status
                });
              }
              setStatusCode(transformedData.status);
              setPayload(transformedData.results);
              if (configs !== null && configs !== void 0 && configs.successMsg) {
                setSuccess(configs.successMsg);
              } else {
                setSuccess(true);
              }
              return transformedData;
            })
            // ? on error flow
            ["catch"](function (err) {
              var _configs$onError;
              configs === null || configs === void 0 ? void 0 : (_configs$onError = configs.onError) === null || _configs$onError === void 0 ? void 0 : _configs$onError.call(configs, err);
              setStatusCode(err.status);
              setError(err.message);
              return Promise.reject(err);
            })["finally"](function () {
              setLoading(false);
              setComplete(true);
            }));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _exec.apply(this, arguments);
  }
  return {
    payload: payload,
    error: error,
    statusCode: statusCode,
    success: success,
    loading: loading,
    exec: exec,
    closeMsg: closeMsg,
    hasMsg: hasMsg,
    pristine: pristine,
    reset: reset,
    updateData: updateData,
    complete: complete
  };
}

/**
 * Type return of useActionStateless Hook
 */

/**
 * Create util Action without http state
 * @return ActionStateless
 */
function useActionStateless() {
  var _React$useState15 = React.useState(''),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    success = _React$useState16[0],
    setSuccess = _React$useState16[1];
  var _React$useState17 = React.useState(''),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    warning = _React$useState18[0],
    setWarning = _React$useState18[1];
  var _React$useState19 = React.useState(''),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    error = _React$useState20[0],
    setError = _React$useState20[1];
  var _React$useState21 = React.useState(false),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    loading = _React$useState22[0],
    setLoading = _React$useState22[1];
  var hasMsg = React.useMemo(function () {
    return !!success || !!error || !!warning;
  }, [success, error, warning]);
  function start() {
    setLoading(true);
    clearStatus();
  }
  function finish() {
    setLoading(false);
  }
  function catcher(err) {
    setError(err.message || err);
  }
  function updateStatus(success, warning, error) {
    setSuccess(success || '');
    setWarning(warning || '');
    setError(error || '');
  }
  function clearStatus() {
    setSuccess('');
    setWarning('');
    setError('');
  }
  return {
    error: error,
    success: success,
    warning: warning,
    loading: loading,
    clearStatus: clearStatus,
    hasMsg: hasMsg,
    start: start,
    finish: finish,
    catcher: catcher,
    updateStatus: updateStatus
  };
}

/**
 * Type return of useAct Hook
 */

/**
 * Create util state to use in http request
 * @param request Function
 * @param configs Object
 * @param initialData Object
 * @return Action
 */
function useAct(request, configs, initialData) {
  var action = useAction(initialData);
  var fn = React.useCallback(function (props) {
    return action.exec(request, configs, props);
  }, [action]);
  return React.useMemo(function () {
    return Object.assign(fn, action);
  }, [action]);
}
function useActionMock(props) {
  var emptyFn = new Function();
  return _objectSpread2({
    payload: [],
    error: 'asdasd',
    success: 'asdasd',
    loading: true,
    pristine: false,
    hasMsg: false,
    exec: (props === null || props === void 0 ? void 0 : props.spyExec) || emptyFn,
    closeMsg: (props === null || props === void 0 ? void 0 : props.spyCloseMsg) || emptyFn,
    reset: (props === null || props === void 0 ? void 0 : props.spyReset) || emptyFn,
    updateData: (props === null || props === void 0 ? void 0 : props.spyUpdateData) || emptyFn
  }, props);
}
function useActionStatelessMock(props) {
  var emptyFn = new Function();
  return _objectSpread2({
    error: 'asdasd',
    warning: 'asdasd',
    success: 'asdasd',
    loading: true,
    hasMsg: false,
    closeMsg: (props === null || props === void 0 ? void 0 : props.spyCloseMsg) || emptyFn,
    reset: (props === null || props === void 0 ? void 0 : props.spyReset) || emptyFn,
    updateStatus: (props === null || props === void 0 ? void 0 : props.spyUpdateStatus) || emptyFn,
    clearStatus: (props === null || props === void 0 ? void 0 : props.spyClearStatus) || emptyFn,
    start: (props === null || props === void 0 ? void 0 : props.spyStart) || emptyFn,
    finish: (props === null || props === void 0 ? void 0 : props.spyFinish) || emptyFn,
    catcher: (props === null || props === void 0 ? void 0 : props.spyCatcher) || emptyFn
  }, props);
}

/**
 * Serialize body to XMLHttpRequestBodyInit
 * @param params Object
 * @return XMLHttpRequestBodyInit
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function bodySerializer(body, configs) {
  if (body) {
    if (body instanceof FormData || body instanceof URLSearchParams || body instanceof Blob) {
      return body;
    }
    if (configs !== null && configs !== void 0 && configs.customSerializer) return configs.customSerializer(body);
    return JSON.stringify(body);
  }
  return undefined;
}

/**
 * Serialize headers object to Headers
 * @param params Object
 * @return Headers
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function headersSerializer(headers, configs) {
  if (headers) {
    if (headers instanceof Headers) {
      return headers;
    }
    if (configs !== null && configs !== void 0 && configs.customSerializer) return configs.customSerializer(headers);
    var heads = new Headers();
    for (var _i = 0, _Object$keys = Object.keys(headers); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      if (headers[key]) {
        heads.append(key, String(headers[key]));
      }
    }
    if (!heads.has('Content-Type')) {
      // if (configs?.body instanceof FormData) {
      //   heads.append('Content-Type', 'multipart/form-data');
      // }

      // if (configs?.body instanceof URLSearchParams) {
      //   heads.append('Content-Type', 'application/x-www-form-urlencoded');
      // }

      // if (configs?.body instanceof Blob) {
      //   heads.append('Content-Type', '');
      // }

      // if (!heads.has('Content-Type')) {
      //   heads.append('Content-Type', 'application/json');
      // }

      if (!((configs === null || configs === void 0 ? void 0 : configs.body) instanceof FormData || (configs === null || configs === void 0 ? void 0 : configs.body) instanceof URLSearchParams || (configs === null || configs === void 0 ? void 0 : configs.body) instanceof Blob)) {
        heads.append('Content-Type', 'application/json');
      }
    }
    return heads;
  }
  return undefined;
}

/**
 * Serialize parameters to string (array separate by comma)
 * @param params Object
 * @return string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function paramsSerializer(params, configs) {
  if (!params) return '';
  if (configs !== null && configs !== void 0 && configs.customSerializer) return configs.customSerializer(params);
  var result = configs !== null && configs !== void 0 && configs.withQuestionMark ? '?' : '';
  result += Object.keys(params).reduce(function (qs, key) {
    var value = params[key];
    if (value === undefined || value === '') {
      return qs;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return qs;
      }
      if (configs !== null && configs !== void 0 && configs.arrayRepeat) {
        return "".concat(qs ? "".concat(qs, "&") : '').concat(value.map(function (x) {
          return "".concat(key, "=").concat(configs !== null && configs !== void 0 && configs.noEncodeURI ? x : configs !== null && configs !== void 0 && configs.doubleEncodeURI ? doubleEncodeURI(x) : simpleEncodeURI(x));
        }).join('&'));
      }
      return "".concat(qs ? "".concat(qs, "&") : '').concat(key, "=").concat(value.map(function (x) {
        return configs !== null && configs !== void 0 && configs.noEncodeURI ? x : configs !== null && configs !== void 0 && configs.doubleEncodeURI ? doubleEncodeURI(x) : simpleEncodeURI(x);
      }).join(','));
    }
    return "".concat(qs ? "".concat(qs, "&") : '').concat(key, "=").concat(configs !== null && configs !== void 0 && configs.noEncodeURI ? value : configs !== null && configs !== void 0 && configs.doubleEncodeURI ? doubleEncodeURI(value) : simpleEncodeURI(value));
  }, '');
  return result;
}

/**
 * Serialize parameters of url, return url changed
 * @param url String
 * @param params Object
 * @return string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlParamsSerializer(url, params, configs) {
  if (!params) return url;
  if (configs !== null && configs !== void 0 && configs.customSerializer) return configs.customSerializer(url, params);
  return params ? Object.keys(params).reduce(function (acc, key) {
    return replaceAll(acc, "{".concat(key, "}"), configs !== null && configs !== void 0 && configs.noEncodeURI ? params[key] : configs !== null && configs !== void 0 && configs.doubleEncodeURI ? doubleEncodeURI(params[key]) : simpleEncodeURI(params[key]));
  }, url) : url;
}
function parseParamsValue(v) {
  if (!v) return '';
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (v[0] === '0') return v;
  if (v.length > 7) return v;
  if (Number(v)) return Number(v);
  return v;
}

/**
 * Build parameters of url object/String to object (array separate by comma)
 * Standalone, util for controllers (router.query)
 * @param params Object/String
 * @return Object
 */
function paramsBuilder(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
params, configs) {
  if (!params) return {};
  if (typeof params === 'string') {
    return params.replace('?', '').split('&').reduce(function (acc, x) {
      var _configs$ignoresForma;
      var _x$split = x.split('='),
        _x$split2 = _slicedToArray(_x$split, 2),
        key = _x$split2[0],
        value = _x$split2[1];
      if (!value) return acc;
      var ignore = Array.isArray(configs === null || configs === void 0 ? void 0 : configs.ignoresFormat) ? configs === null || configs === void 0 ? void 0 : (_configs$ignoresForma = configs.ignoresFormat) === null || _configs$ignoresForma === void 0 ? void 0 : _configs$ignoresForma.some(function (x) {
        return x === key;
      }) : configs === null || configs === void 0 ? void 0 : configs.ignoresFormat;
      if (value.includes(',')) {
        acc[key] = value.split(',').map(function (x) {
          return ignore ? x : parseParamsValue(x);
        });
      } else {
        acc[key] = ignore ? value : parseParamsValue(value);
      }
      return acc;
    }, {});
  }
  return Object.keys(params).reduce(function (acc, key) {
    var _configs$ignoresForma2;
    var value = parseStr(params[key]);
    if (!value) return acc;
    var ignore = Array.isArray(configs === null || configs === void 0 ? void 0 : configs.ignoresFormat) ? configs === null || configs === void 0 ? void 0 : (_configs$ignoresForma2 = configs.ignoresFormat) === null || _configs$ignoresForma2 === void 0 ? void 0 : _configs$ignoresForma2.some(function (x) {
      return x === key;
    }) : configs === null || configs === void 0 ? void 0 : configs.ignoresFormat;
    if (value.includes(',')) {
      acc[key] = value.split(',').map(function (x) {
        return ignore ? x : parseParamsValue(x);
      });
    } else {
      acc[key] = ignore ? value : parseParamsValue(value);
    }
    return acc;
  }, {});
}

var feedbackPTBR = {
  offline: 'Parece que você esta sem conexão, verifique e tente novamente!',
  unauth: 'Sessão expirada, tente fazer login novamente. Caso o erro persista, entre em contato com o suporte!',
  unknown: 'Erro desconhecido, já notificamos o suporte. Aguarde um momento e tente novamente! ({v})',
  forbidden: 'Serviço indisponivel, já notificamos o suporte. Aguarde um momento e tente novamente! ({v})',
  noContent: 'Nenhum item encontrado!'
};
var feedbackENUS = {
  offline: 'It looks like you have no connection, check and try again!',
  unauth: 'Session expired, try login in again. If the error persists, contact support!',
  unknown: 'Unknown error, we have already notified support. Please wait a moment and try again! ({v})',
  forbidden: 'Service unavailable, we have already notified support. Please wait a moment and try again! ({v})',
  noContent: 'No items found!'
};
function replaceVars(str, value) {
  return String(str).replace('{v}', value || 'empty');
}
var HttpResponseError = /*#__PURE__*/_createClass(function HttpResponseError(status) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var configs = arguments.length > 2 ? arguments[2] : undefined;
  var headers = arguments.length > 3 ? arguments[3] : undefined;
  _classCallCheck(this, HttpResponseError);
  _defineProperty(this, "status", void 0);
  _defineProperty(this, "message", void 0);
  _defineProperty(this, "results", void 0);
  _defineProperty(this, "configs", void 0);
  _defineProperty(this, "headers", void 0);
  var messages = isPtBr() ? feedbackPTBR : feedbackENUS;
  this.status = status;
  this.results = data;
  this.configs = configs || {};
  this.headers = headers || {};
  if (!status) {
    if (isBrowser()) {
      if (!navigator.onLine) {
        this.status = 400;
        this.message = messages.offline;
        return;
      }
    }
    this.status = 502;
    this.message = replaceVars(messages.forbidden, configs === null || configs === void 0 ? void 0 : configs.baseURL);
    return;
  }
  if (status === 401) {
    if (isBrowser()) {
      var _configs$onUnauthoriz;
      configs === null || configs === void 0 ? void 0 : (_configs$onUnauthoriz = configs.onUnauthorized) === null || _configs$onUnauthoriz === void 0 ? void 0 : _configs$onUnauthoriz.call(configs, window.location.pathname + window.location.search);
    } else {
      var _configs$onUnauthoriz2;
      configs === null || configs === void 0 ? void 0 : (_configs$onUnauthoriz2 = configs.onUnauthorized) === null || _configs$onUnauthoriz2 === void 0 ? void 0 : _configs$onUnauthoriz2.call(configs);
    }
    this.message = messages.unauth;
    return;
  }
  if (data && Array.isArray(data)) {
    var _data$;
    this.message = ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.errorMessage) || data[0];
    return;
  }
  if (typeof data === 'string' && !!data.length) {
    this.message = data;
    return;
  }
  if (data.error && data.error_description) {
    this.message = data.error_description;
    return;
  }
  if (data.error && data.errors.chaveValidacao) {
    this.message = data.errors.chaveValidacao;
    return;
  }
  if (data.errors && Object.keys(data.errors).length) {
    var firstKey = Object.keys(data.errors)[0];
    this.message = data.errors[firstKey];
    return;
  }
  if (data.message || data.messages) {
    this.message = data.message || data.messages;
    return;
  }
  this.message = replaceVars(messages.unknown, configs === null || configs === void 0 ? void 0 : configs.baseURL);
});
var HttpResponse = /*#__PURE__*/_createClass(function HttpResponse(status) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var configs = arguments.length > 2 ? arguments[2] : undefined;
  var headers = arguments.length > 3 ? arguments[3] : undefined;
  _classCallCheck(this, HttpResponse);
  _defineProperty(this, "status", void 0);
  _defineProperty(this, "message", void 0);
  _defineProperty(this, "results", void 0);
  _defineProperty(this, "configs", void 0);
  _defineProperty(this, "headers", void 0);
  var messages = isPtBr() ? feedbackPTBR : feedbackENUS;
  this.status = status;
  this.results = data;
  this.configs = configs || {};
  this.headers = headers || {};
  if (status === 200 && data.status && data.status.codigoStatus > 1) {
    throw new HttpResponseError(400, "".concat(data.status.descricaoStatus, " (Cod: ").concat(data.status.codigoStatus, ")"), configs, headers);
  }
  if (status === 200 && (data.traceId || 0) > 1) {
    this.status = 400;
    this.message = data.message;
    return;
  }
  if (status === 200) {
    this.message = 'Ok';
    this.results = data.results || data.dados || data;
    return;
  }
  if (status === 204) {
    if (configs !== null && configs !== void 0 && configs.forceErrorOnNoContent) {
      throw new HttpResponseError(400, messages.noContent, configs, headers);
    }
    this.message = messages.noContent;
    return;
  }
  throw new HttpResponseError(status, data, configs, headers);
});

/**
 * Serialize response object to custom type
 * @param response Response
 * @return T
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function responseSerializer(_x, _x2) {
  return _responseSerializer.apply(this, arguments);
}
function _responseSerializer() {
  _responseSerializer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response, configs) {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(configs !== null && configs !== void 0 && configs.customSerializer)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", configs.customSerializer(response));
        case 2:
          _context.next = 4;
          return response.text();
        case 4:
          data = _context.sent;
          _context.prev = 5;
          return _context.abrupt("return", JSON.parse(data));
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](5);
          return _context.abrupt("return", data);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 9]]);
  }));
  return _responseSerializer.apply(this, arguments);
}

function dataNormalizer(data) {
  if (typeof data === 'boolean') {
    return data;
  }
  if (typeof data === 'string' && data) {
    return data;
  }
  if (data) {
    return camelCaseProps(data);
  }
  return [];
}
function httpClient(url, configs) {
  var mergedConfigs = _objectSpread2(_objectSpread2({}, this), configs);
  if (!mergedConfigs.baseURL || url.includes('http')) {
    throw new Error("\uD83D\uDC40 don't send BASE URL API in URL, use config [baseURL] instead! (".concat(url, ")"));
  }
  if (url.includes('?')) {
    throw new Error("\uD83D\uDC40 don't use query params in URL, use config [params] instead! (".concat(url, ")"));
  }
  var query = paramsSerializer(mergedConfigs.params, {
    customSerializer: mergedConfigs.paramsSerializer,
    withQuestionMark: true,
    doubleEncodeURI: true
  });
  var urlWithChangedParams = urlParamsSerializer(url, mergedConfigs.urlParams, {
    customSerializer: mergedConfigs.urlParamsSerializer,
    doubleEncodeURI: true
  });
  var uri = "".concat(mergedConfigs.baseURL || '').concat(urlWithChangedParams).concat(query);
  var body = bodySerializer(mergedConfigs.body, {
    customSerializer: mergedConfigs.bodySerializer
  });
  var headers = headersSerializer(_objectSpread2({
    Authorization: mergedConfigs.accessToken && "Bearer ".concat(typeof mergedConfigs.accessToken === 'string' ? mergedConfigs.accessToken : mergedConfigs.accessToken(uri))
  }, mergedConfigs.headers), {
    body: body,
    customSerializer: mergedConfigs.headersSerializer
  });
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, status, responseHeaders, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(uri, {
            method: mergedConfigs.method || 'GET',
            body: body,
            headers: headers
          });
        case 2:
          response = _context.sent;
          status = response.status || 0;
          responseHeaders = response.headers;
          _context.next = 7;
          return responseSerializer(response, {
            customSerializer: mergedConfigs.responseSerializer
          });
        case 7:
          data = _context.sent;
          data = dataNormalizer(data);
          if (!response.ok) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", new HttpResponse(status, data, mergedConfigs, responseHeaders));
        case 11:
          throw new HttpResponseError(status, data, mergedConfigs, responseHeaders);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}
function factoryHttpClient(defaultConfigs) {
  return {
    get: httpClient.bind(_objectSpread2({
      method: 'GET'
    }, defaultConfigs)),
    post: httpClient.bind(_objectSpread2({
      method: 'POST'
    }, defaultConfigs)),
    put: httpClient.bind(_objectSpread2({
      method: 'PUT'
    }, defaultConfigs)),
    patch: httpClient.bind(_objectSpread2({
      method: 'PATCH'
    }, defaultConfigs)),
    "delete": httpClient.bind(_objectSpread2({
      method: 'DELETE'
    }, defaultConfigs))
  };
}
function mockHttpClient(_ref2) {
  var _ref2$mockServerURL = _ref2.mockServerURL,
    mockServerURL = _ref2$mockServerURL === void 0 ? '' : _ref2$mockServerURL;
  return {
    get: function get(url) {
      return httpClient(url, {
        method: 'GET',
        baseURL: mockServerURL
      });
    },
    post: function post(url) {
      return httpClient(url, {
        method: 'POST',
        baseURL: mockServerURL
      });
    },
    put: function put(url) {
      return httpClient(url, {
        method: 'PUT',
        baseURL: mockServerURL
      });
    },
    patch: function patch(url) {
      return httpClient(url, {
        method: 'PATCH',
        baseURL: mockServerURL
      });
    },
    "delete": function _delete(url) {
      return httpClient(url, {
        method: 'DELETE',
        baseURL: mockServerURL
      });
    }
  };
}

var HttpContext = /*#__PURE__*/React.createContext(null);
var useHttp = function useHttp() {
  return React.useContext(HttpContext);
};
function HttpProvider(_ref) {
  var configs = _ref.configs,
    children = _ref.children;
  var auth = useAuth();
  var value = React.useMemo(function () {
    var _configs$tokenSeriali;
    return configs !== null && configs !== void 0 && configs.localMode ? mockHttpClient({
      mockServerURL: (configs === null || configs === void 0 ? void 0 : configs.mockServerURL) || 'http://localhost:3003'
    }) : factoryHttpClient({
      baseURL: '',
      accessToken: (configs === null || configs === void 0 ? void 0 : (_configs$tokenSeriali = configs.tokenSerializer) === null || _configs$tokenSeriali === void 0 ? void 0 : _configs$tokenSeriali.call(configs, auth === null || auth === void 0 ? void 0 : auth.accessToken, auth === null || auth === void 0 ? void 0 : auth.erpToken)) || (auth === null || auth === void 0 ? void 0 : auth.accessToken),
      onUnauthorized: auth === null || auth === void 0 ? void 0 : auth.handleUnauthorized
    });
  }, [configs, auth]);
  return /*#__PURE__*/React.createElement(HttpContext.Provider, {
    value: value
  }, children);
}
function useService(factory) {
  var http = useHttp();
  var service = React.useMemo(function () {
    return factory(http);
  }, [factory, http]);
  return service;
}

/**
 * Fix http protocol of url
 * @param url String
 * @return String
 */
function fixProtocol(url) {
  if (!url) return '';
  return String(url).replace(/http[s]?:/gi, window.location.protocol);
}

export { bodySerializer, fixProtocol, headersSerializer, httpClient, HttpProvider, HttpResponse, HttpResponseError, paramsBuilder, paramsSerializer, responseSerializer, urlParamsSerializer, useAct, useAction, useActionMock, useActionStateless, useActionStatelessMock, useHttp, useService };

