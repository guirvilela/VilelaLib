"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
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
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return (
      o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c),
      }),
      a
    );
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r),
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t,
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
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
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
        return h && "object" == typeof h && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
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
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
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
          done: !0,
        };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return {
            value: p.arg,
            done: n.done,
          };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator.return &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0],
    };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [
      {
        tryLoc: "root",
      },
    ]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return {
        __await: t,
      };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
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
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
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
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
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
        return (
          (this.delegate = {
            iterator: values(e),
            resultName: r,
            nextLoc: n,
          }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
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
function _typeof(o) {
  "@babel/helpers - typeof";

  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length)
            return {
              done: true,
            };
          return {
            done: false,
            value: o[i++],
          };
        },
        e: function (e) {
          throw e;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

/**
 * Return total of array list
 * @param compare Function (calcule truthful)
 * @param compareWith Function (return prop to calc)
 * @param operation Function (default is SUM)
 * @return number
 */
function subtotal(compare, compareWith, operation) {
  return function (data) {
    return data.reduce(function (acc, n) {
      if (compare(n)) {
        var _next =
          (compareWith === null || compareWith === void 0
            ? void 0
            : compareWith(n)) || n;
        return (
          (operation === null || operation === void 0
            ? void 0
            : operation(acc, _next)) || (acc += _next)
        );
      }
      return acc;
    }, 0);
  };
}

/**
 * Create array
 * @param length Number
 * @param v `<T>` (initial fill value)
 * @param increase Boolean (number increase, 0..N)
 * @return `<T>`
 */
function array(length, v, increase) {
  var arr = (length ? new Array(length) : []).fill(v);
  return increase
    ? arr.map(function (_, i) {
        return i + 1;
      })
    : arr;
}

/**
 * Transform array in array nested
 * @param compare Function
 * @param items Array
 * @return Array
 */
function segregateItems(compare) {
  return function (items) {
    var newItems = [];
    var _iterator = _createForOfIteratorHelper(items),
      _step;
    try {
      var _loop = function _loop() {
        var item = _step.value;
        if (
          !newItems.some(function (x) {
            return compare(item, x);
          })
        ) {
          newItems.push(
            _objectSpread2(
              _objectSpread2({}, item),
              {},
              {
                items: items.filter(function (x) {
                  return compare(item, x);
                }),
              }
            )
          );
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return newItems;
  };
}

/**
 * Remove Duplicates of array
 * @param compare Function
 * @param items Array
 * @return New array
 */
function removeDuplicates(compare) {
  return function (items) {
    return items.filter(function (x, i, arr) {
      return (
        arr.findIndex(function (y) {
          return compare(y, x);
        }) === i
      );
    });
  };
}

/**
 * Transform nested array to flat array
 * @param key String (key of nested items)
 * @param source Array (nested array)
 * @param control Array (empty/initial array)
 * @return Array (flat array)
 */
function flatList(key, source, control) {
  var _iterator2 = _createForOfIteratorHelper(source),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _item = _step2.value;
      control.push(_item);
      flatList(key, _item[key] || [], control);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return control;
}

/**
 * Extract initials of name
 * @param text String
 * @return String
 */
function getInitials(text) {
  if (!text) return "";
  var _String$toUpperCase$s = String(text).toUpperCase().split(" "),
    _String$toUpperCase$s2 = _slicedToArray(_String$toUpperCase$s, 2),
    _String$toUpperCase$s3 = _String$toUpperCase$s2[0],
    firstName = _String$toUpperCase$s3 === void 0 ? "" : _String$toUpperCase$s3,
    _String$toUpperCase$s4 = _String$toUpperCase$s2[1],
    lastName = _String$toUpperCase$s4 === void 0 ? "" : _String$toUpperCase$s4;
  return firstName.charAt(0) + lastName.charAt(0);
}

/**
 * Transform to TitleCase
 * @param text String
 * @return String
 */
function titleCase(text) {
  return String(text)
    .replace(/(-|_)/g, " ")
    .split(" ")
    .map(function (x) {
      return x.charAt(0).toUpperCase() + x.substring(1).toLowerCase();
    })
    .join("");
}

/**
 * Transform to Capital Case
 * @param text String
 * @return String
 */
function capitalizedCase(text) {
  var x = String(text);
  return x.charAt(0).toUpperCase() + x.substring(1);
}

/**
 * Transform to camelCase
 * @param text String
 * @return String
 */
function camelCase(text) {
  var str = titleCase(text);
  return str.charAt(0).toLowerCase() + str.substring(1);
}

/**
 * Validate email string
 * @param email String
 * @return Boolean
 */
function isEmail(email) {
  return !!(
    email !== null &&
    email !== void 0 &&
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
}

/**
 * Remove characters other than numbers
 * @param value String
 * @return String
 */
function numberFormatter(value) {
  return String(value || "").replace(/[^0-9]/gi, "");
}

/**
 * Remove characters other than text
 * @param value String
 * @return String
 */
function textFormatter(value) {
  return String(value || "").replace(/[^a-zA-Z]/gi, "");
}

/**
 * Remove characters other than alphanumeric
 * @param value String
 * @return String
 */
function alphaNumFormatter(value) {
  return String(value || "").replace(/[^a-zA-Z0-9]/gi, "");
}

/**
 * Format global phone numbers
 * @param value String
 * @return String
 */
function phoneFormatter(v, ddd, ddi, noFormatNumber) {
  var result = "";
  var DDI = Number(numberFormatter(ddi));
  var DDD = Number(numberFormatter(ddd));
  var V = numberFormatter(v);
  if (DDI) {
    result += "+".concat(DDI, " ");
  }
  if (DDD) {
    result += "(".concat(DDD, ") ");
  }
  if (noFormatNumber) {
    result += V;
  } else if (V.length === 9) {
    result += "".concat(V.substring(0, 5), "-").concat(V.substring(5));
  } else if (V.length === 8) {
    result += "".concat(V.substring(0, 4), "-").concat(V.substring(4));
  } else if (V.length === 7) {
    result += "".concat(V.substring(0, 4), " ").concat(V.substring(4));
  } else if (V.length === 10) {
    result += ""
      .concat(V.substring(0, 3), " ")
      .concat(V.substring(3, 6), " ")
      .concat(V.substring(6));
  } else {
    result += V;
  }
  return result;
}

/**
 * Parse value to string
 * @param px any
 * @return String
 */
function parseStr(v) {
  return !v ? "" : String(v);
}

/**
 * Replace all occurrences
 * @param value String
 * @param search String
 * @param replace String
 * @return String
 */
function replaceAll(value, search, replace) {
  if (typeof value !== "string") return value;
  return value.split(search).join(replace || "");
}

/**
 * Lighten or darken color
 * @param color String
 * @param percent Number
 * @return String
 */
function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);
  R = (R * (100 + percent)) / 100;
  G = (G * (100 + percent)) / 100;
  B = (B * (100 + percent)) / 100;
  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;
  R = Math.round(R);
  G = Math.round(G);
  B = Math.round(B);
  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
  return "#" + RR + GG + BB;
}

/**
 * Convert string or number in boolean ("true" -> true, "True" -> true, "False" -> false, "1" -> true, "0" -> false)
 * @param v Any
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseBool(v) {
  if (!v) return false;
  var value = String(v).toLowerCase();
  return ["1", "true"].includes(value);
}

/**
 * Get element position on screen
 * @param element HTMLElement
 * @return Object { x, y }
 */
function getElementPosition(el) {
  var rect = el.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
  };
}

/**
 * Prevent defaults util to functional compose
 * @param fn Function
 * @return Function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function preventDefault(fn) {
  return function (e) {
    e.preventDefault();
    fn === null || fn === void 0 ? void 0 : fn();
  };
}

/**
 * Get position of scroll on screen
 * @return Object coordinates
 */
function scrollPosition() {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var bottom = top + doc.clientHeight;
  var right = left + doc.clientWidth;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };
}

/**
 * Return language of browser
 * @return String
 */
function getLocale() {
  return typeof navigator !== "undefined" ? navigator.language : "";
}

/**
 * Return languages of browser
 * @return String
 */
function getLocales() {
  var _navigator$languages;
  return typeof navigator !== "undefined"
    ? ((_navigator$languages = navigator.languages) === null ||
      _navigator$languages === void 0
        ? void 0
        : _navigator$languages.slice()) || []
    : [];
}

/**
 * Print element dom
 * @param element Element
 * @param title String (optional)
 * @param mode portrait | landscape (optional)
 */
function print(element, title, mode) {
  var w = window.open(
    "",
    "PRINT",
    mode === "portrait" ? "width=1400,height=900" : "width=900,height=1400"
  );
  if (w) {
    var content = "\n      <html>\n        <head>\n          <title>"
      .concat(title, "</title>\n        </head>\n        <body>")
      .concat(element.innerHTML, "</body>\n      </html>\n    ");
    w.document.write(content);
    w.print();
    w.close();
  }
}

/**
 * Create or update css property of element
 * @param key String
 * @param value String
 * @param el HTMLElement (default is root)
 */
function setCssProperty(key, value, el) {
  var element = el || document.documentElement;
  element.style.setProperty(key, value);
}

/**
 * Return true if is Browser
 * @return Boolean
 */
function isBrowser() {
  return typeof window !== "undefined";
}

/**
 * Return true if is Browser for testing (jest)
 * @return Boolean
 */
function isTestingBrowser() {
  var _process$env;
  return (
    typeof process !== "undefined" &&
    typeof window !== "undefined" &&
    ((_process$env = process.env) === null || _process$env === void 0
      ? void 0
      : _process$env.NODE_ENV) === "test"
  );
}

/**
 * Return true if is Safari Browser
 * @return Boolean
 */
function isSafari() {
  if (typeof navigator !== "undefined") {
    return (
      navigator.vendor &&
      navigator.vendor.indexOf("Apple") > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("CriOS") == -1 &&
      navigator.userAgent.indexOf("FxiOS") == -1
    );
  }
  return false;
}

/**
 * Return true if is Firefox Browser
 * @return Boolean
 */
function isFirefox() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("Firefox");
  }
  return false;
}

/**
 * Return true if is Chrome Browser
 * @return Boolean
 */
function isChrome() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("Chrome");
  }
  return false;
}

/**
 * Return true if is Opera Browser
 * @return Boolean
 */
function isOpera() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("Opera");
  }
  return false;
}

/**
 * Return true if is Internet Explorer Browser
 * @return Boolean
 */
function isIE() {
  if (typeof navigator !== "undefined") {
    return navigator.userAgent.includes("MSIE");
  }
  return false;
}

/**
 * Return true if is Mobile Browser
 * @return Boolean
 */
function isMobile() {
  if (isBrowser()) {
    var agent = (navigator.userAgent || navigator.vendor).substring(0, 4);
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        agent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        agent
      )
    );
  }
  return false;
}

/**
 * Return true if is page in iframe
 * @return Boolean
 */
function isIframe() {
  if (isBrowser()) {
    try {
      return window.self !== window.top;
    } catch (_unused) {
      return true;
    }
  }
  return false;
}

/**
 * Return true if is Android Browser
 * @return Boolean
 */
function isAndroid() {
  if (isBrowser()) {
    return /Android/i.test(navigator.userAgent);
  }
  return false;
}

/**
 * Return true if is iOS Browser
 * @return Boolean
 */
function isIOS() {
  if (isBrowser()) {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  return false;
}

/**
 * Send content to Clipboard
 */
function sendToClipboard(content) {
  var el = document.createElement("textarea");
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

/**
 * Create link by Blob
 */
function downloadFromBlob(blob, filename) {
  var blobURL = (window.URL ? window.URL : window["webkitURL"]).createObjectURL(
    blob
  );
  var tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;
  tempLink.setAttribute("download", filename);
  tempLink.setAttribute("target", "_blank");
  document.body.appendChild(tempLink);
  tempLink.click();
  setTimeout(function () {
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }, 0);
}

/**
 * Download file from Array of bytes
 */
function downloadFromByteArray(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data,
  filename
) {
  var contentType =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : "application/octet-stream";
  var blob = new Blob([data], {
    type: contentType,
  });
  downloadFromBlob(blob, filename);
}

/**
 * Download file from Base64
 */
function downloadFromBase64(b64, filename) {
  var contentType =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : "application/octet-stream";
  var sliceSize =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 512;
  var byteCharacters = atob(b64);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  var blob = new Blob(byteArrays, {
    type: contentType,
  });
  downloadFromBlob(blob, filename);
}

/**
 * Download file from url
 */
function downloadFromUrl(url) {
  var tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = url;
  tempLink.setAttribute("download", url.replace(/^.*[\\/]/, ""));
  tempLink.setAttribute("target", "_blank");
  document.body.appendChild(tempLink);
  tempLink.click();
  setTimeout(function () {
    return document.body.removeChild(tempLink);
  }, 0);
}

/**
 * Return domain url
 * @param url String
 * @return String
 */
function domainFromUrl(url) {
  if (!url) return "";
  var hostname = String(
    ["http://", "https://", /:[0-9]{4}/gi].reduce(function (acc, x) {
      return replaceAll(String(acc), x, "");
    }, url)
  );
  var index = hostname.indexOf(".");
  if (index === -1) {
    return hostname;
  }
  // const domain = url.includes('.vilela') ? '.vilela.com.br' : url;
  return hostname.slice(index);
}

/**
 * Extract filename from url/uri string
 * @param url String
 * @return String
 */
function getFilenameFromUrl(url) {
  if (!url) return "";
  return url.replace(/^.*[\\/]/, "");
}

/**
 * Return element by DOM query search
 * @param query String (byTag = elementTag, byID = #elementId, byClass = .className)
 * @return HTMLElement
 */
function $(query) {
  var el;
  var name = query.slice(1);
  if (query.includes("#")) {
    el = document.getElementById(name);
  } else if (query.includes(".")) {
    el = document.getElementsByClassName(name)[0];
  } else {
    el = document.getElementsByTagName(name)[0];
  }
  return el;
}

/**
 * Scroll to position of element
 * @param el Element
 * @param top Number
 * @param left Number
 */
function scrollTo(el, top, left) {
  el.scrollTo({
    top: top,
    left: left,
    behavior: "smooth",
  });
}

/**
 * Return true if url is a external link
 * @param url String
 */
function isExternalLink(url) {
  if (!url) return false;
  return url.includes("http");
}

/**
 * Return true if url is a azure webapp or localhost
 * @param env String
 */
function isLocalhostOrAzureEnv(env) {
  if (isBrowser()) {
    return [env || ["-dev", "-stage"], "localhost"].flat().some(function (x) {
      return window.location.href.includes(x);
    });
  }
  return false;
}

/**
 * Return url with azure webapp env or localhost
 * @param url String (webapp url)
 * @param path String (path and/or params)
 * @param port Number (localhost port)
 * @returns String
 */
function buildUrlWithEnv(url, path, port) {
  if (isBrowser()) {
    var href = window.location.href;
    if (href.includes("localhost")) {
      return "http://localhost:".concat(port || 3000).concat(path);
    }
    var parts = url.split(".");
    if (href.includes("-dev")) {
      parts[0] += "-dev";
    }
    if (href.includes("-stage")) {
      parts[0] += "-stage";
    }
    return "".concat(parts.join(".")).concat(path);
  }
  return "";
}

/**
 * Resize DOM window
 * @param x Number (width)
 * @param y Number (height)
 */
function resizeWindow(x, y) {
  window.innerWidth = x;
  if (y) {
    window.innerHeight = y;
  }
}

/**
 * Read file and return string of File API DOM
 * @param file File
 * @return String | ArrayBuffer
 */
function fileReader(_x) {
  return _fileReader.apply(this, arguments);
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
function _fileReader() {
  _fileReader = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(file) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch ((_context.prev = _context.next)) {
            case 0:
              return _context.abrupt(
                "return",
                new Promise(function (resolve, reject) {
                  var reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = function () {
                    resolve(reader.result || "");
                  };
                  reader.onerror = function (error) {
                    reject(error);
                  };
                })
              );
            case 1:
            case "end":
              return _context.stop();
          }
      }, _callee);
    })
  );
  return _fileReader.apply(this, arguments);
}
function simpleEncodeURI(v) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "/", "%2F");
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
function simpleDecodeURI(v) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "%2F", "/");
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
function doubleEncodeURI(v) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "/", "%252F");
}

/**
 * Custom Vilela backend encode params of uri
 * @param v String
 * @return String
 */
function doubleDecodeURI(v) {
  if (typeof v !== "string") return v;
  return replaceAll(v, "%252F", "/");
}

/**
 * Check if uri exist (return true if OK)
 * @param uri String
 * @return Boolean
 */
function uriExists(uri) {
  if (!uri) return false;
  var http = new XMLHttpRequest();
  http.open("GET", uri, false);
  http.send();
  return http.status < 400;
}

/**
 * Check if uri exist (return uri if OK)
 * @param uri String
 * @return String
 */
function validateUri(uri) {
  try {
    return uriExists(uri) ? uri : undefined;
  } catch (_unused2) {
    return uri;
  }
}

/**
 * Return file object from base64 data url
 * @param dataUrl String
 * @param filename String
 * @return File
 */
function base64UrlToFile(dataUrl, filename) {
  var _arr$0$match;
  if (!dataUrl) return undefined;
  var arr = dataUrl.split(",");
  var mime =
    (_arr$0$match = arr[0].match(/:(.*?);/)) === null || _arr$0$match === void 0
      ? void 0
      : _arr$0$match[1];
  var bstr = atob(arr[arr.length - 1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {
    type: mime,
  });
}

var CPF_BLACKLIST = [
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
  "12345678909",
];
var CNPJ_BLACKLIST = [
  "00000000000000",
  "11111111111111",
  "22222222222222",
  "33333333333333",
  "44444444444444",
  "55555555555555",
  "66666666666666",
  "77777777777777",
  "88888888888888",
  "99999999999999",
];
var CEP_BLACKLIST = [
  "00000000",
  "11111111",
  "22222222",
  "33333333",
  "44444444",
  "55555555",
  "66666666",
  "77777777",
  "88888888",
  "99999999",
  "12345678",
];
function cpfCheckDigits(digits) {
  var numbers = digits.split("").map(function (number) {
    return parseInt(number, 10);
  });
  var modulus = numbers.length + 1;
  var multiplied = numbers.map(function (number, index) {
    return number * (modulus - index);
  });
  var mod =
    multiplied.reduce(function (buffer, number) {
      return buffer + number;
    }) % 11;
  return mod < 2 ? 0 : 11 - mod;
}
function cnpjCheckDigits(digits) {
  var index = 2;
  var reverse = digits.split("").reduce(function (buffer, number) {
    return [parseInt(number, 10)].concat(buffer);
  }, []);
  var sum = reverse.reduce(function (buffer, number) {
    buffer += number * index;
    index = index === 9 ? 2 : index + 1;
    return buffer;
  }, 0);
  var mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
}

/**
 * CPF number validator
 * @param number String
 * @return Boolean
 */
function cpfValidator(number) {
  var nums = numberFormatter(number);

  // CPF must be defined
  if (!nums) {
    return false;
  }

  // CPF must have 11 chars
  if (nums.length !== 11) {
    return false;
  }

  // CPF can't be blacklisted
  if (CPF_BLACKLIST.includes(nums)) {
    return false;
  }
  var numbers = nums.substr(0, 9);
  numbers += cpfCheckDigits(numbers);
  numbers += cpfCheckDigits(numbers);
  return numbers.substr(-2) === nums.substr(-2);
}

/**
 * CNPJ number validator
 * @param number String
 * @return Boolean
 */
function cnpjValidator(number) {
  var nums = numberFormatter(number);

  // CNPJ must be defined
  if (!nums) {
    return false;
  }

  // CNPJ must have 14 chars
  if (nums.length !== 14) {
    return false;
  }

  // CNPJ can't be blacklisted
  if (CNPJ_BLACKLIST.includes(nums)) {
    return false;
  }
  var numbers = nums.substr(0, 12);
  numbers += cnpjCheckDigits(numbers);
  numbers += cnpjCheckDigits(numbers);
  return numbers.substr(-2) === nums.substr(-2);
}

/**
 * CPF/CNPJ number validator
 * @param number String
 * @return Boolean
 */
function cpfCnpjValidator(number) {
  var nums = numberFormatter(number);
  return nums.length > 11 ? cnpjValidator(number) : cpfValidator(number);
}

/**
 * @alias cpfCnpjValidator
 */
function isCpfCnpj(number) {
  return cpfCnpjValidator(number);
}

/**
 * Add special characters to CPF human read
 * @param value String
 * @return String
 */
function cpfFormatter(value) {
  var nums = numberFormatter(value);
  return nums.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

/**
 * Add special characters to CNPJ human read
 * @param value String
 * @return String
 */
function cnpjFormatter(value) {
  var nums = numberFormatter(value);
  return nums.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

/**
 * Add special characters to RG human read
 * @param value String
 * @return String
 */
function rgFormatter(value) {
  var nums = numberFormatter(value);
  return nums.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/, "$1.$2.$3-$4");
}

/**
 * Add special characters to cpf/cnpj human read
 * @param value String
 * @return String
 */
function cpfCnpjFormatter(value) {
  var nums = numberFormatter(value);
  return nums.length > 11 ? cnpjFormatter(value) : cpfFormatter(value);
}

/**
 * @alias cpfValidator
 */
function isCpf(number) {
  return cpfValidator(number);
}

/**
 * @alias cnpjValidator
 */
function isCnpj(number) {
  return cnpjValidator(number);
}

/**
 * CEP number validator
 * @param number String
 * @return Boolean
 */
function cepValidator(value) {
  var nums = numberFormatter(value);
  if (!nums) {
    return false;
  }
  if (nums.length !== 8) {
    return false;
  }
  if (CEP_BLACKLIST.includes(nums)) {
    return false;
  }
  return true;
}

/**
 * Add special characters to cep human read
 * @param value String
 * @return String
 */
function cepFormatter(value) {
  var nums = numberFormatter(value);
  return nums.replace(/^(\d{5})(\d{3})/, "$1-$2");
}

/**
 * Check navigator languages
 * @param value String
 * @return String
 */
function isPtBr() {
  return getLocales().includes("pt");
}

/**
 * Validate RNE string
 * @param value String
 * @return Boolean
 */
function isRNE(value) {
  return !!alphaNumFormatter(value).match(/^[A-Za-z]\d{6}[A-Za-z]$/);
}

/**
 * Generate random number, from 0 to param
 * @param params Number
 * @return Number
 */
function randomNumber() {
  var max =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9999;
  return Math.floor(Math.random() * max);
}

/**
 * Parse value or return 0
 * @param v Number
 * @return Number
 */
function parseNumber(v) {
  return Number(v) || 0;
}

/**
 * Parse string percent or return 0
 * @param v String
 * @return Number
 */
function parsePercent(v) {
  if (!v) return 0;
  return parseNumber(v.replace("%", ""));
}

/**
 * Return two digits if value ten minor (00,01,02)
 * @param v Number
 * @return String
 */
function zeroTwoDigits(v) {
  if (!v) return "00";
  return "".concat(v < 10 ? "0" : "").concat(v);
}

/**
 * Return decimal rounded (2 digits by default)
 * @param v Number
 * @param digts Number
 * @return String
 */
function roundNumber(v, digts) {
  if (!v) return 0;
  return parseNumber(v.toFixed(digts || 2));
}

/**
 * Return true if is valid date
 * @param date ISODate | Date | String (locale format)
 * @return Boolean
 */
function isDate(v) {
  if (!v) return false;
  if (v instanceof Date) {
    return true;
  }
  var dateStr = v.split("T")[0];
  var numbers = numberFormatter(dateStr);
  if (numbers.length === 8) {
    try {
      var day = numbers.substring(6, 8);
      var month = numbers.substring(4, 6);
      var year = numbers.substring(0, 4);
      if (dateStr[2] === "/" || dateStr[2] === "-") {
        day = numbers.substring(0, 2);
        month = numbers.substring(2, 4);
        year = numbers.substring(4);
      }
      return !!new Date(Number(day), Number(month), Number(year));
    } catch (_unused) {
      // nothing
    }
  }
  return false;
}

/**
 * Return true if is empty date
 * @param date ISODate | Date
 * @return Boolean
 */
function isDateEmpty(date) {
  if (!date) return true;
  if (date instanceof Date) {
    return false;
  }
  if (typeof date !== "string") {
    return true;
  }
  if (date.includes("0001-01-01")) {
    return true;
  }
  return false;
}
/**
 * Set values in date
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function setDate(v, values, add) {
  var date = v;
  if (typeof date === "string") date = parseISO(date);
  if (typeof values.day === "number")
    date.setDate(add ? date.getDate() + values.day : values.day);
  if (typeof values.month === "number")
    date.setMonth(add ? date.getMonth() + values.month : values.month - 1);
  if (typeof values.year === "number")
    date.setFullYear(add ? date.getFullYear() + values.year : values.year);
  if (typeof values.hour === "number")
    date.setHours(add ? date.getHours() + values.hour : values.hour);
  if (typeof values.min === "number")
    date.setMinutes(add ? date.getMinutes() + values.min : values.min);
  if (typeof values.sec === "number")
    date.setSeconds(add ? date.getSeconds() + values.sec : values.sec);
  return date;
}

/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function setISO(date, values, add) {
  return formatISO(setDate(date, values, add));
}

/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function setDateISO(date, values, add) {
  return dateISO(setDate(date, values, add));
}

/**
 * Set values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function setTimeISO(date, values, add) {
  return timeISO(setDate(date, values, add));
}
/**
 * Add values in date
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function addDate(date, values) {
  return setDate(
    date,
    {
      day: values.days,
      month: values.months,
      year: values.years,
      hour: values.hours,
      min: values.mins,
      sec: values.secs,
    },
    true
  );
}

/**
 * Add values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function addISO(date, values) {
  return formatISO(addDate(date, values));
}

/**
 * Add values in date ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function addDateISO(date, values) {
  return dateISO(addDate(date, values));
}

/**
 * Add values in time ISO
 * @param date ISODate | Date
 * @param values Object config
 * @return Date
 */
function addTimeISO(date, values) {
  return timeISO(addDate(date, values));
}

/**
 * Parse date from iso date string
 * @param date ISODate | Date
 * @return Date
 */
function parseISO(date) {
  if (date && date instanceof Date) return date;
  var iso = formatISO(date);
  if (iso) {
    return new Date(iso);
  }
  return new Date();
}

/**
 * Parse date from iso or date
 * @param date ISODate | Date
 * @return Date
 */
function parseDate(date) {
  return parseISO(date);
}

/**
 * Create or parse date
 * @param date ISODate | Date
 * @return Date
 */
function date(date) {
  return parseDate(date);
}

/**
 * Return iso date from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
function formatISO(date) {
  if (!date) {
    return "";
  }
  if (date instanceof Date) {
    var year = date.getFullYear(),
      month = zeroTwoDigits(date.getMonth() + 1),
      day = zeroTwoDigits(date.getDate()),
      hours = zeroTwoDigits(date.getHours()),
      mins = zeroTwoDigits(date.getMinutes()),
      secs = zeroTwoDigits(date.getSeconds());
    return ""
      .concat(year, "-")
      .concat(month, "-")
      .concat(day, "T")
      .concat(hours, ":")
      .concat(mins, ":")
      .concat(secs);
  }
  if (typeof date !== "string") {
    return "";
  }
  if (date.includes("0001-01-01")) {
    return "";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _String$split = String(date).split(/(T|\s)/),
    _String$split2 = _slicedToArray(_String$split, 3),
    dateStr = _String$split2[0];
  _String$split2[1];
  var timeStr = _String$split2[2];
  if (!dateStr) {
    return "";
  }
  var numbers = numberFormatter(dateStr);
  var part1 = numbers.substring(6, 8);
  var part2 = numbers.substring(4, 6);
  var part3 = numbers.substring(0, 4);
  if (dateStr[2] === "/" || dateStr[2] === "-") {
    part1 = numbers.substring(0, 2);
    part2 = numbers.substring(2, 4);
    part3 = numbers.substring(4, 8);
  }
  if (!timeStr) {
    return "".concat(part3, "-").concat(part2, "-").concat(part1, "T12:00:00");
  }
  if (timeStr.length === 5) {
    return ""
      .concat(part3, "-")
      .concat(part2, "-")
      .concat(part1, "T")
      .concat(timeStr, ":00");
  }
  if (timeStr.length > 8) {
    return ""
      .concat(part3, "-")
      .concat(part2, "-")
      .concat(part1, "T")
      .concat(timeStr.substring(0, 8));
  }
  return ""
    .concat(part3, "-")
    .concat(part2, "-")
    .concat(part1, "T")
    .concat(timeStr);
}

/**
 * Return only date in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
function dateISO(date) {
  return formatISO(date).split("T")[0];
}

/**
 * Return only year and month in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
function monthISO(date) {
  return dateISO(date).substring(0, 7);
}

/**
 * Return only year and week number in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
function weekISO(date) {
  var x = parseISO(date);
  var onejan = setDate(x, {
    day: 0,
    month: 1,
  });
  var year = x.getFullYear();
  var week = Math.ceil(
    ((x.valueOf() - onejan.valueOf()) / 86400000 + onejan.getDay() + 1) / 7
  );
  return "".concat(year, "-W").concat(zeroTwoDigits(week));
}

/**
 * Return time number in iso from date or string
 * @param date ISODate | Date
 * @return ISODate
 */
function timeISO(date) {
  return formatISO(date).split("T")[1];
}

/**
 * Return true if date A equal B
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
function isDateEqual(a, b) {
  return dateISO(a) === dateISO(b);
}

/**
 * Return difference of days between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
function daysDiff(a, b) {
  var date1 = new Date(a);
  var date2 = new Date(b);
  var diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Return difference of months between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
function monthsDiff(a, b) {
  var months = 0;
  var date1 = new Date(a);
  var date2 = new Date(b);
  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();
  return months <= 0 ? 0 : months;
}

/**
 * Return difference of years between dates
 * @param a ISODate | Date
 * @param b ISODate | Date
 * @return Boolean
 */
function yearsDiff(a, b) {
  var date1 = new Date(a);
  var date2 = new Date(b);
  return date2.getFullYear() - date1.getFullYear();
}

/**
 * Save data in storage with expire
 * @param key String storage key
 * @param data Any to save
 * @param expire Number minutes to invalidate data
 */
function saveCache(key, data, expires) {
  var at = new Date().toISOString();
  var until = expires || null;
  localStorage.setItem(
    key,
    JSON.stringify({
      at: at,
      until: until,
      data: data,
    })
  );
  return data;
}

/**
 * Remove data in storage
 * @param keys String List storage key
 */
function removeCache() {
  for (
    var _len = arguments.length, keys = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    keys[_key] = arguments[_key];
  }
  keys.forEach(function (key) {
    localStorage.removeItem(key);
  });
}

/**
 * Load data in storage with expire
 * @param key String storage key
 */
function loadCache(key) {
  var raw = localStorage.getItem(key);
  if (raw) {
    var cache = JSON.parse(raw);
    if (!cache.until || new Date() < parseISO(cache.until)) {
      return cache.data;
    }
    removeCache(key);
  }
  return undefined;
}

/**
 * Load data in storage with expire
 * @param key String storage key
 */
function loadCacheAndDetails(key) {
  var raw = localStorage.getItem(key);
  if (raw) {
    var cache = JSON.parse(raw);
    if (!cache.until || new Date() < parseISO(cache.until)) {
      return cache;
    }
    removeCache(key);
  }
  return undefined;
}

/**
 * Remove all data in storage expired
 */
function clearCache() {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key) {
      loadCache(key);
    }
  }
}

/**
 * Remove all data in storage
 */
function purgeCache() {
  localStorage.clear();
  sessionStorage.clear();
}

var UF = [
  {
    uf: "AC",
    name: "Acre",
    capital: "Rio Branco",
  },
  {
    uf: "AL",
    name: "Alagoas",
    capital: "Maceió",
  },
  {
    uf: "AP",
    name: "Amapá",
    capital: "Macapá",
  },
  {
    uf: "AM",
    name: "Amazonas",
    capital: "Manaus",
  },
  {
    uf: "BA",
    name: "Bahia",
    capital: "Salvador",
  },
  {
    uf: "CE",
    name: "Ceara",
    capital: "Fortaleza",
  },
  {
    uf: "DF",
    name: "Distrito Federal",
    capital: "Brasília",
  },
  {
    uf: "ES",
    name: "Espírito Santo",
    capital: "Vitória",
  },
  {
    uf: "GO",
    name: "Goiás",
    capital: "Goiânia",
  },
  {
    uf: "MA",
    name: "Maranhão",
    capital: "São Luiz",
  },
  {
    uf: "MT",
    name: "Mato Grosso",
    capital: "Cuiabá",
  },
  {
    uf: "MS",
    name: "Mato Grosso do Sul",
    capital: "Campo Grande",
  },
  {
    uf: "MG",
    name: "Minas Gerais",
    capital: "Belo Horizonte",
  },
  {
    uf: "PA",
    name: "Pará",
    capital: "Belém",
  },
  {
    uf: "PB",
    name: "Paraíba",
    capital: "João Pessoa",
  },
  {
    uf: "PR",
    name: "Paraná",
    capital: "Curitiba",
  },
  {
    uf: "PE",
    name: "Pernambuco",
    capital: "Recife",
  },
  {
    uf: "PI",
    name: "Piauí",
    capital: "Terezina",
  },
  {
    uf: "RJ",
    name: "Rio de Janeiro",
    capital: "Rio de Janeiro",
  },
  {
    uf: "RN",
    name: "Rio Grande do Norte",
    capital: "Natal",
  },
  {
    uf: "RS",
    name: "Rio Grande do Sul",
    capital: "Porto Alegre",
  },
  {
    uf: "RO",
    name: "Rondônia",
    capital: "Porto Velho",
  },
  {
    uf: "RR",
    name: "Roraima",
    capital: "Boa Vista",
  },
  {
    uf: "SC",
    name: "Santa Catarina",
    capital: "Florianópolis",
  },
  {
    uf: "SP",
    name: "São Paulo",
    capital: "São Paulo",
  },
  {
    uf: "SE",
    name: "Sergipe",
    capital: "Aracajú",
  },
  {
    uf: "TO",
    name: "Tocantins",
    capital: "Palmas",
  },
];
var CONST = {
  UF: UF,
};

/**
 * Create/Update cookie with security
 * @param data Dictionary (key: value)
 * @param expires Date
 */
function saveCookie(data, expires, sameSite) {
  for (
    var _i = 0, _Object$keys = Object.keys(data);
    _i < _Object$keys.length;
    _i++
  ) {
    var key = _Object$keys[_i];
    var cookie = "".concat(key, "=").concat(data[key], "; Path=/;");
    if (expires) {
      cookie += " Expires=".concat(new Date(expires), ";");
    }
    if (typeof window !== "undefined") {
      cookie += " Domain=".concat(domainFromUrl(window.location.origin), ";");
    }
    if (sameSite) {
      cookie += " SameSite=".concat(sameSite, ";");
    }
    if (typeof document !== "undefined") {
      document.cookie = cookie;
    }
  }
}
function getCookie(key) {
  if (typeof document !== "undefined") {
    var _document$cookie$spli;
    return (_document$cookie$spli = document.cookie
      .split("; ")
      .find(function (x) {
        return x.search(key) > -1;
      })) === null || _document$cookie$spli === void 0
      ? void 0
      : _document$cookie$spli.split("=")[1];
  }
  return undefined;
}

/**
 * Get/Load cookie with security
 * @param keys String[]
 * @return String[]
 */
function loadCookies(keys) {
  if (Array.isArray(keys)) {
    return keys.reduce(function (acc, key) {
      acc.push(getCookie(key));
      return acc;
    }, []);
  }
  return [getCookie(keys)];
}

/**
 * Get/Load cookie with security
 * @param key String
 * @return String
 */
function loadCookie(key) {
  return getCookie(key);
}

/**
 * Remove cookie with security
 * @param keys String (e.g: removeCookie(keyA, keyB, keyC))
 */
function removeCookie(keys) {
  var _iterator = _createForOfIteratorHelper(
      Array.isArray(keys) ? keys : [keys]
    ),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var key = _step.value;
      var cookie = "".concat(
        key,
        "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      );
      if (typeof window !== "undefined") {
        cookie += " domain=".concat(domainFromUrl(window.location.origin), ";");
      }
      if (typeof document !== "undefined") {
        document.cookie = cookie;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/**
 * Remove all cookies
 */
function purgeCookies() {
  if (typeof document !== "undefined") {
    var cookies = document.cookie.split(";");
    if (cookies.length) {
      var keys = cookies.map(function (x) {
        return x.split("=")[0];
      });
      removeCookie(keys);
    }
  }
}

/**
 * Decode string base64 unicode
 * @param v String
 * @return String
 */
function decodeBase64Unicode(v) {
  return decodeURIComponent(
    atob(v).replace(/(.)/g, function (m, p) {
      var code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = "0" + code;
      }
      return "%" + code;
    })
  );
}

/**
 * Decode string base64
 * @param v String
 * @return String
 */
function decodeBase64(v) {
  var output = v.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return decodeBase64Unicode(output);
  } catch (_unused) {
    return atob(output);
  }
}

/**
 * Return payload of jwt token
 * @param token String
 * @return Object
 */
function parseJwt(token, head) {
  try {
    var payload = token.split(".")[head ? 0 : 1];
    var decoded = decodeBase64(payload);
    return JSON.parse(decoded);
  } catch (_unused2) {
    return undefined;
  }
}

/**
 * Encode string base64
 * @param v String
 * @return String
 */
function tryEncodeBase64(v) {
  try {
    return btoa(v);
  } catch (_unused3) {
    return v;
  }
}

/**
 * Decode string base64
 * @param v String
 * @return String
 */
function tryDecodeBase64(v) {
  try {
    return atob(v);
  } catch (_unused4) {
    return v;
  }
}

/**
 * Function composition
 * @param fns[] functions that modify the value
 * @return value modified
 */
function compose() {
  for (
    var _len = arguments.length, fns = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    fns[_key] = arguments[_key];
  }
  return function (value) {
    return fns.reduce(function (acc, fn) {
      return fn(acc);
    }, value);
  };
}

/**
 * Go back in history
 */
function goBack() {
  if (isBrowser()) {
    window.history.back();
  }
}

/**
 * Copy object without reference, using JSON tools
 * @param object Any
 * @return object copy
 */
function objectCopy(obj) {
  return JSON.parse(JSON.stringify(obj || {}));
}

/**
 * Get array from enum entries
 * @return Array {key,value}
 */
function enumToCollection(en) {
  return Object.entries(en)
    .filter(function (x) {
      return Number.isNaN(Number(x[0]));
    })
    .map(function (x) {
      return {
        key: x[0],
        value: x[1],
      };
    });
}

/**
 * Get object from enum entries
 * @return Object {key:value}
 */
function enumToObject(en) {
  return Object.keys(en).reduce(function (acc, key) {
    if (Number.isNaN(Number(key))) {
      acc[en[key]] = key;
    }
    return acc;
  }, {});
}

/**
 * Extract deep property in object by path
 * @param object any
 * @param path String (e.g 'foo.bar')
 * @return Generic is last property of path
 */
function deepFind(object, path) {
  var parts = path.split(".");
  if (parts.length === 1) {
    return object[parts[0]];
  }
  return deepFind(object[parts[0]], parts.slice(1).join("."));
}

/**
 * Validate if object or array is defined (object empty and array length zero is false)
 * @param object any
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDefined(object) {
  if (!object) return false;
  if (Array.isArray(object)) {
    return !!object.length;
  }
  return !!Object.keys(object).length;
}

/**
 * Validate if object A has the same values of object B
 * @param a any
 * @param b any
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEqual(a, b) {
  if (!a || !b) return false;
  return Object.keys(a).every(function (key) {
    return a[key] === b[key];
  });
}

/**
 * Validate if `object` has `search` in values
 * @param object any
 * @param search String
 * @param keys Array
 * @return Boolean
 */
function searchInObject(object, search, keys) {
  return (keys || Object.keys(object))
    .reduce(function (acc, key) {
      return (acc += "".concat(object[key], ";"));
    }, "")
    .toLowerCase()
    .includes(search.toLowerCase());
}

/**
 * Tranform keys of object in camelCase
 * @param data Object
 * @return Object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function camelCaseProps(data) {
  if (!data) return {};
  if (
    _typeof(data) !== "object" ||
    data instanceof ArrayBuffer ||
    data instanceof Blob
  ) {
    return data;
  }
  if (Array.isArray(data)) {
    return data.map(function (value) {
      if (_typeof(value) === "object") {
        value = camelCaseProps(value);
      }
      return value;
    });
  }
  return Object.keys(data).reduce(function (acc, key) {
    var value = data[key];
    var normalizeKey = key.charAt(0).toLowerCase() + key.substring(1);
    if (_typeof(value) === "object") {
      acc[normalizeKey] = camelCaseProps(value);
    } else {
      acc[normalizeKey] = value;
    }
    return acc;
  }, {});
}

/**
 * Return true if not undefined or null
 * @param v Object
 * @return Boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isSomething(v) {
  return typeof v !== "undefined" && v !== null;
}

/**
 * Return FormData filled by object
 * @param v Object
 * @return FormData
 */
function objectToFormData(v) {
  var formData = new FormData();
  for (
    var _i = 0, _Object$keys = Object.keys(v);
    _i < _Object$keys.length;
    _i++
  ) {
    var key = _Object$keys[_i];
    formData.append(key, v[key]);
  }
  return formData;
}

/**
 * Generate Promise with delay
 * @param data Any
 * @param milliseconds Number (default = 2000)
 */
function delay(data) {
  var milliseconds =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  return new Promise(function (resolve) {
    setTimeout(function () {
      if (typeof data === "function") {
        resolve(data());
      } else {
        resolve(data);
      }
    }, milliseconds);
  });
}

/**
 * Wrap up Components
 * @param ReactNode[] sequence of elements
 * @return wrapper (first element as father and others as children)
 */
function wrapse() {
  for (
    var _len = arguments.length, comps = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    comps[_key] = arguments[_key];
  }
  return comps.reduceRight(function (wrap, comp) {
    return function (_ref) {
      var children = _ref.children;
      return /*#__PURE__*/ React__default["default"].createElement(
        wrap,
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          comp,
          null,
          children
        )
      );
    };
  });
}

/**
 * Sort array of elements
 * @param field String (keys of object A/B)
 * @return Function
 */
function sorter() {
  return function (a, b) {
    return String(a).localeCompare(String(b), undefined, {
      numeric: true,
      sensitivity: "base",
    });
  };
}

/**
 * Sort array of object by field property
 * @param field String (keys of object A/B)
 * @return Function
 */
function sorterByField(field) {
  return function (a, b) {
    return String(a[field]).localeCompare(String(b[field]), undefined, {
      numeric: true,
      sensitivity: "base",
    });
  };
}

/**
 * Sorter array of deep object by path (using deepFind)
 * @param path String (e.g 'foo.bar')
 * @return Function
 */
function sorterDeep(path) {
  return function (a, b) {
    var _deepFind;
    return (
      ((_deepFind = deepFind(a, path)) === null || _deepFind === void 0
        ? void 0
        : _deepFind.localeCompare(deepFind(b, path) || "", undefined, {
            numeric: true,
            sensitivity: "base",
          })) || 0
    );
  };
}

/**
 * Return true if is SSR (util for nextjs)
 * @return boolean
 */
function isServer() {
  return typeof window === "undefined";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function factoryTestId(props, addOn) {
  return (
    props["data-testid"] && "".concat(props["data-testid"], "-").concat(addOn)
  );
}

/**
 * Forces a function to wait time before running again
 * @param wait Number (default = 500)
 */
function debounce() {
  var wait =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var timeoutID;
  return function (callback) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(callback, wait);
  };
}

/**
 * Generate unique key (timestamp + random)
 * @return String
 */
function uniqueKey() {
  return "".concat(new Date().getTime()).concat(randomNumber());
}

/**
 * Type return of useForm Hook
 */

/**
 * Create state to use in forms
 * @param initial Object
 * @param validator Function
 * @return Form
 */
function useForm(initial, validator) {
  var _React$useState = React__default["default"].useState(initial),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    form = _React$useState2[0],
    setForm = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    hasChanges = _React$useState4[0],
    setHasChanges = _React$useState4[1];
  var isValid = React__default["default"].useMemo(
    function () {
      if (validator) {
        return validator(form);
      }
      return true;
    },
    [form, validator]
  );
  function set(field, options) {
    return function (value) {
      setForm(function (v) {
        return _objectSpread2(
          _objectSpread2({}, v),
          {},
          _defineProperty({}, field, value)
        );
      });
      if (!(options !== null && options !== void 0 && options.noMarkChange)) {
        setHasChanges(true);
      }
    };
  }
  function setAll(value, options) {
    setForm(function (v) {
      return _objectSpread2(_objectSpread2({}, v), value);
    });
    if (!(options !== null && options !== void 0 && options.noMarkChange)) {
      setHasChanges(true);
    }
  }
  function reset(ignores, value) {
    if (ignores && initial) {
      setForm(function (f) {
        return Object.keys(f).reduce(function (newForm, key) {
          if (!ignores.includes(key)) {
            newForm[key] = initial[key];
          }
          if (value && value[key]) {
            newForm[key] = value[key];
          }
          return newForm;
        }, _objectSpread2({}, f));
      });
    } else {
      setForm(_objectSpread2(_objectSpread2({}, initial), value));
    }
  }
  function count(compare) {
    return Object.keys(form).filter(function (key) {
      return compare ? compare(key) : !!form[key];
    }).length;
  }
  function pristine(key) {
    if (!initial) return false;
    if (Array.isArray(key)) {
      return key.every(function (k) {
        return form[k] === initial[k];
      });
    }
    if (typeof key === "function") {
      return key(initial, form);
    }
    if (key) {
      return form[key] === initial[key];
    }
    return isEqual(form, initial);
  }
  function markNoChanges() {
    setHasChanges(false);
  }
  return {
    value: form,
    set: set,
    setAll: setAll,
    reset: reset,
    isValid: isValid,
    hasChanges: hasChanges,
    count: count,
    pristine: pristine,
    markNoChanges: markNoChanges,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useFormMock(props) {
  var emptyFn = new Function();
  return _objectSpread2(
    {
      value: {},
      set:
        (props === null || props === void 0 ? void 0 : props.spySet) || emptyFn,
      setAll:
        (props === null || props === void 0 ? void 0 : props.spySetAll) ||
        emptyFn,
      reset:
        (props === null || props === void 0 ? void 0 : props.spyReset) ||
        emptyFn,
      count:
        (props === null || props === void 0 ? void 0 : props.spyCount) ||
        emptyFn,
      pristine:
        (props === null || props === void 0 ? void 0 : props.spyPristine) ||
        emptyFn,
      isValid: true,
      hasChanges: true,
    },
    props
  );
}

/**
 * Type object config of usePagination
 */

/**
 * Type return of usePagination Hook
 */

var INITIALPAGE = 1;
var PAGESIZE = 30;
/**
 * Create state to use in pagination
 * @param config Object
 * @return Pagination
 */
function usePagination(config) {
  var _React$useState = React__default["default"].useState(
      config.initialPage || INITIALPAGE
    ),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentPage = _React$useState2[0],
    setCurrentPage = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    currentData = _React$useState4[0],
    setCurrentData = _React$useState4[1];
  var _React$useState5 = React__default["default"].useState(
      config.initialPageSize || PAGESIZE
    ),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    pageSize = _React$useState6[0],
    setPageSize = _React$useState6[1];
  var totalItems = React__default["default"].useMemo(
    function () {
      var _config$source;
      return (_config$source = config.source) === null ||
        _config$source === void 0
        ? void 0
        : _config$source.length;
    },
    [config.source]
  );
  var totalPage = React__default["default"].useMemo(
    function () {
      return totalItems ? Math.ceil(totalItems / pageSize) : 1;
    },
    [totalItems, pageSize]
  );
  function updateData(page, accumulate) {
    var _config$source2;
    var newPageData =
      ((_config$source2 = config.source) === null || _config$source2 === void 0
        ? void 0
        : _config$source2.slice(
            page * pageSize - pageSize,
            page === totalPage ? totalItems : page * pageSize
          )) || [];
    if (accumulate) {
      setCurrentData(
        [].concat(
          _toConsumableArray(currentData),
          _toConsumableArray(newPageData)
        )
      );
    } else {
      setCurrentData(newPageData);
    }
  }
  function onAccumulate() {
    var nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      setCurrentPage(nextPage);
      updateData(nextPage, true);
    }
  }
  function onChange(page) {
    setCurrentPage(page);
    updateData(page);
  }
  function onChangePageSize(size) {
    setPageSize(size);
  }

  // React.useEffect(() => {
  //   if (config.resetOnChange || totalPage < currentPage) {
  //     onChange(config.initialPage || INITIALPAGE);
  //   } else {
  //     onChange(currentPage);
  //   }
  // }, [config.source, pageSize]);

  React__default["default"].useEffect(
    function () {
      onChange(config.initialPage || INITIALPAGE);
    },
    [config.source]
  );
  React__default["default"].useEffect(
    function () {
      setPageSize(config.initialPageSize || PAGESIZE);
    },
    [config.initialPageSize]
  );
  return {
    data: currentData,
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    onChange: onChange,
    onAccumulate: onAccumulate,
    onChangePageSize: onChangePageSize,
  };
}

/**
 * Creates list with function/tasks to be using in react effects
 * @return Object
 */
function useQueue() {
  var _React$useState = React__default["default"].useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    queue = _React$useState2[0],
    setQueue = _React$useState2[1];
  var addQueue = React__default["default"].useCallback(
    function (task) {
      return setQueue(function (v) {
        return [].concat(_toConsumableArray(v), [task]);
      });
    },
    [queue]
  );
  var runQueue = React__default["default"].useCallback(
    /*#__PURE__*/ (function () {
      var _ref = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(data) {
          var _iterator, _step, task;
          return _regeneratorRuntime().wrap(
            function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (!queue.length) {
                      _context.next = 19;
                      break;
                    }
                    _iterator = _createForOfIteratorHelper(queue);
                    _context.prev = 2;
                    _iterator.s();
                  case 4:
                    if ((_step = _iterator.n()).done) {
                      _context.next = 10;
                      break;
                    }
                    task = _step.value;
                    _context.next = 8;
                    return task(data);
                  case 8:
                    _context.next = 4;
                    break;
                  case 10:
                    _context.next = 15;
                    break;
                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context["catch"](2);
                    _iterator.e(_context.t0);
                  case 15:
                    _context.prev = 15;
                    _iterator.f();
                    return _context.finish(15);
                  case 18:
                    setTimeout(function () {
                      return setQueue([]);
                    }, 500);
                  case 19:
                  case "end":
                    return _context.stop();
                }
            },
            _callee,
            null,
            [[2, 12, 15, 18]]
          );
        })
      );
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })(),
    [queue]
  );
  return {
    queue: queue,
    addQueue: addQueue,
    runQueue: runQueue,
  };
}

exports.$ = $;
exports.CONST = CONST;
exports.addDate = addDate;
exports.addDateISO = addDateISO;
exports.addISO = addISO;
exports.addTimeISO = addTimeISO;
exports.alphaNumFormatter = alphaNumFormatter;
exports.array = array;
exports.base64UrlToFile = base64UrlToFile;
exports.buildUrlWithEnv = buildUrlWithEnv;
exports.camelCase = camelCase;
exports.camelCaseProps = camelCaseProps;
exports.capitalizedCase = capitalizedCase;
exports.cepFormatter = cepFormatter;
exports.cepValidator = cepValidator;
exports.clearCache = clearCache;
exports.cnpjFormatter = cnpjFormatter;
exports.cnpjValidator = cnpjValidator;
exports.compose = compose;
exports.cpfCnpjFormatter = cpfCnpjFormatter;
exports.cpfCnpjValidator = cpfCnpjValidator;
exports.cpfFormatter = cpfFormatter;
exports.cpfValidator = cpfValidator;
exports.date = date;
exports.dateISO = dateISO;
exports.daysDiff = daysDiff;
exports.debounce = debounce;
exports.decodeBase64 = decodeBase64;
exports.decodeBase64Unicode = decodeBase64Unicode;
exports.deepFind = deepFind;
exports.delay = delay;
exports.domainFromUrl = domainFromUrl;
exports.doubleDecodeURI = doubleDecodeURI;
exports.doubleEncodeURI = doubleEncodeURI;
exports.downloadFromBase64 = downloadFromBase64;
exports.downloadFromBlob = downloadFromBlob;
exports.downloadFromByteArray = downloadFromByteArray;
exports.downloadFromUrl = downloadFromUrl;
exports.enumToCollection = enumToCollection;
exports.enumToObject = enumToObject;
exports.factoryTestId = factoryTestId;
exports.fileReader = fileReader;
exports.flatList = flatList;
exports.formatISO = formatISO;
exports.getElementPosition = getElementPosition;
exports.getFilenameFromUrl = getFilenameFromUrl;
exports.getInitials = getInitials;
exports.getLocale = getLocale;
exports.getLocales = getLocales;
exports.goBack = goBack;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isCnpj = isCnpj;
exports.isCpf = isCpf;
exports.isCpfCnpj = isCpfCnpj;
exports.isDate = isDate;
exports.isDateEmpty = isDateEmpty;
exports.isDateEqual = isDateEqual;
exports.isDefined = isDefined;
exports.isEmail = isEmail;
exports.isEqual = isEqual;
exports.isExternalLink = isExternalLink;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIframe = isIframe;
exports.isLocalhostOrAzureEnv = isLocalhostOrAzureEnv;
exports.isMobile = isMobile;
exports.isOpera = isOpera;
exports.isPtBr = isPtBr;
exports.isRNE = isRNE;
exports.isSafari = isSafari;
exports.isServer = isServer;
exports.isSomething = isSomething;
exports.isTestingBrowser = isTestingBrowser;
exports.loadCache = loadCache;
exports.loadCacheAndDetails = loadCacheAndDetails;
exports.loadCookie = loadCookie;
exports.loadCookies = loadCookies;
exports.monthISO = monthISO;
exports.monthsDiff = monthsDiff;
exports.numberFormatter = numberFormatter;
exports.objectCopy = objectCopy;
exports.objectToFormData = objectToFormData;
exports.parseBool = parseBool;
exports.parseDate = parseDate;
exports.parseISO = parseISO;
exports.parseJwt = parseJwt;
exports.parseNumber = parseNumber;
exports.parsePercent = parsePercent;
exports.parseStr = parseStr;
exports.phoneFormatter = phoneFormatter;
exports.preventDefault = preventDefault;
exports.print = print;
exports.purgeCache = purgeCache;
exports.purgeCookies = purgeCookies;
exports.randomNumber = randomNumber;
exports.removeCache = removeCache;
exports.removeCookie = removeCookie;
exports.removeDuplicates = removeDuplicates;
exports.replaceAll = replaceAll;
exports.resizeWindow = resizeWindow;
exports.rgFormatter = rgFormatter;
exports.roundNumber = roundNumber;
exports.saveCache = saveCache;
exports.saveCookie = saveCookie;
exports.scrollPosition = scrollPosition;
exports.scrollTo = scrollTo;
exports.searchInObject = searchInObject;
exports.segregateItems = segregateItems;
exports.sendToClipboard = sendToClipboard;
exports.setCssProperty = setCssProperty;
exports.setDate = setDate;
exports.setDateISO = setDateISO;
exports.setISO = setISO;
exports.setTimeISO = setTimeISO;
exports.shadeColor = shadeColor;
exports.simpleDecodeURI = simpleDecodeURI;
exports.simpleEncodeURI = simpleEncodeURI;
exports.sorter = sorter;
exports.sorterByField = sorterByField;
exports.sorterDeep = sorterDeep;
exports.subtotal = subtotal;
exports.textFormatter = textFormatter;
exports.timeISO = timeISO;
exports.titleCase = titleCase;
exports.tryDecodeBase64 = tryDecodeBase64;
exports.tryEncodeBase64 = tryEncodeBase64;
exports.uniqueKey = uniqueKey;
exports.uriExists = uriExists;
exports.useForm = useForm;
exports.useFormMock = useFormMock;
exports.usePagination = usePagination;
exports.useQueue = useQueue;
exports.validateUri = validateUri;
exports.weekISO = weekISO;
exports.wrapse = wrapse;
exports.yearsDiff = yearsDiff;
exports.zeroTwoDigits = zeroTwoDigits;
