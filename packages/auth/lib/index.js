'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@vilela/shared');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var AuthContext = /*#__PURE__*/React__default["default"].createContext(null);
var useAuth = function useAuth() {
  return React__default["default"].useContext(AuthContext);
};
function factoryUser(accessToken) {
  if (accessToken) {
    var jwt = shared.parseJwt(accessToken);
    var obj = shared.camelCaseProps(jwt);
    return _objectSpread2(_objectSpread2({}, obj), {}, {
      codUsuario: Number(obj.codUsuario),
      codigoLogin: Number(obj.codigoLogin),
      codFavorecido: Number(obj.codFavorecido),
      bpo: Number(obj.bPO),
      foto: obj.url_Foto
    });
  }
  return undefined;
}
function AuthProvider(_ref) {
  var configs = _ref.configs,
    children = _ref.children;
  var _React$useState = React__default["default"].useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    accessToken = _React$useState2[0],
    setAccessToken = _React$useState2[1];
  var _React$useState3 = React__default["default"].useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    erpToken = _React$useState4[0],
    setErpToken = _React$useState4[1];
  var _React$useState5 = React__default["default"].useState(),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    authenticated = _React$useState6[0],
    setAuthenticated = _React$useState6[1];
  var _React$useState7 = React__default["default"].useState(),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    user = _React$useState8[0],
    setUser = _React$useState8[1];
  var keys = React__default["default"].useMemo(function () {
    return {
      accounts: Array.isArray(configs.accessTokenKey) ? configs.accessTokenKey[configs.accessTokenKey.length - 1] : configs.accessTokenKey,
      erp: Array.isArray(configs.erpTokenKey) ? configs.erpTokenKey[configs.erpTokenKey.length - 1] : configs.erpTokenKey
    };
  }, [configs]);
  var isUsuarioHubert = React__default["default"].useMemo(function () {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === 'USR';
  }, [user]);
  var isFuncionario = React__default["default"].useMemo(function () {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === 'FUNC';
  }, [user]);
  var isSindico = React__default["default"].useMemo(function () {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === 'SIND';
  }, [user]);
  var isConselheiro = React__default["default"].useMemo(function () {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === 'CONS';
  }, [user]);
  var isMorador = React__default["default"].useMemo(function () {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === 'UNID';
  }, [user]);
  var isAdvogado = React__default["default"].useMemo(function () {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === 'ADVCO';
  }, [user]);
  var isFornecedor = React__default["default"].useMemo(function () {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === 'FORN';
  }, [user]);
  var isSelf = React__default["default"].useCallback(function (codigoPessoa) {
    return codigoPessoa === Number(user === null || user === void 0 ? void 0 : user.codUsuario);
  }, [user]);
  var isTipoUsuario = React__default["default"].useCallback(function (tipo) {
    return (user === null || user === void 0 ? void 0 : user.tipoUsuario) === tipo;
  }, [user]);
  function redirect(callback) {
    if (configs.redirectToKey) {
      var redirectTo = shared.loadCache(configs.redirectToKey);
      setTimeout(function () {
        return callback(redirectTo);
      }, 200);
      shared.removeCache(configs.redirectToKey);
    } else {
      callback();
    }
  }
  function login(accessToken, erpToken, expires, callback) {
    setAccessToken(accessToken);
    shared.saveCookie(_defineProperty({}, keys.accounts, accessToken), expires);
    if (keys.erp && erpToken) {
      setErpToken(erpToken);
      shared.saveCookie(_defineProperty({}, keys.erp, erpToken), expires);
    }
    setUser(factoryUser(accessToken));
    setAuthenticated(true);
    if (callback) {
      redirect(callback);
    }
  }
  function logout(callback) {
    var purge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    setAuthenticated(false);
    setAccessToken(undefined);
    setErpToken(undefined);
    setUser(undefined);
    shared.removeCookie(configs.logoutRemoveAllCookies ? configs.accessTokenKey : keys.accounts);
    if (configs.erpTokenKey && keys.erp) {
      shared.removeCookie(configs.logoutRemoveAllCookies ? configs.erpTokenKey : keys.erp);
    }
    if (purge) {
      shared.purgeCache();
    }
    if (callback) {
      callback();
    }
  }
  function handleUnauthorized(redirectTo) {
    if (configs.redirectToKey && redirectTo) {
      shared.saveCache(configs.redirectToKey, redirectTo);
    }
    logout(function () {
      return window.location.assign(configs.redirectToWhenUnauthorized || '/login');
    }, false);
  }
  function handleChangeAvatar(url) {
    setUser(_objectSpread2(_objectSpread2({}, user), {}, {
      foto: url
    }));
  }
  React__default["default"].useEffect(function () {
    var accessToken = shared.loadCookies(configs.accessTokenKey).find(function (x) {
      return !!x;
    });
    setAccessToken(accessToken);
    if (accessToken) {
      setUser(factoryUser(accessToken));
    }
    if (configs.erpTokenKey) {
      var _erpToken = shared.loadCookies(configs.erpTokenKey).find(function (x) {
        return !!x;
      });
      setErpToken(_erpToken);
    }
    setAuthenticated(!!accessToken);
  }, []);
  var value = React__default["default"].useMemo(function () {
    return {
      authenticated: authenticated,
      accessToken: accessToken,
      erpToken: erpToken,
      user: user,
      login: login,
      logout: logout,
      redirect: redirect,
      handleUnauthorized: handleUnauthorized,
      handleChangeAvatar: handleChangeAvatar,
      isUsuarioHubert: isUsuarioHubert,
      isFuncionario: isFuncionario,
      isSindico: isSindico,
      isConselheiro: isConselheiro,
      isMorador: isMorador,
      isAdvogado: isAdvogado,
      isFornecedor: isFornecedor,
      isSelf: isSelf,
      isTipoUsuario: isTipoUsuario
    };
  }, [authenticated, accessToken, erpToken, user]);
  return /*#__PURE__*/React__default["default"].createElement(AuthContext.Provider, {
    value: value
  }, children);
}
function withAuth(config) {
  return function (Component) {
    return /*#__PURE__*/React__default["default"].memo(function Auth(props) {
      var _useAuth = useAuth(),
        authenticated = _useAuth.authenticated,
        handleUnauthorized = _useAuth.handleUnauthorized,
        isUsuarioHubert = _useAuth.isUsuarioHubert;
      React__default["default"].useEffect(function () {
        if (authenticated === false || config !== null && config !== void 0 && config.onlyUserHubert && !isUsuarioHubert) {
          handleUnauthorized(window.location.pathname + window.location.search);
        }
      }, [authenticated]);
      if (authenticated) {
        return /*#__PURE__*/React__default["default"].createElement(Component, props);
      }
      return null;
    });
  };
}

exports.AuthProvider = AuthProvider;
exports.useAuth = useAuth;
exports.withAuth = withAuth;
