(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ss = { exports: {} },
  sl = {},
  as = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = Symbol.for("react.element"),
  xc = Symbol.for("react.portal"),
  Tc = Symbol.for("react.fragment"),
  Pc = Symbol.for("react.strict_mode"),
  Rc = Symbol.for("react.profiler"),
  Oc = Symbol.for("react.provider"),
  Lc = Symbol.for("react.context"),
  Ic = Symbol.for("react.forward_ref"),
  zc = Symbol.for("react.suspense"),
  Mc = Symbol.for("react.memo"),
  Dc = Symbol.for("react.lazy"),
  Ki = Symbol.iterator;
function Ac(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ki && e[Ki]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var cs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fs = Object.assign,
  ds = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ds),
    (this.updater = n || cs);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ps() {}
ps.prototype = on.prototype;
function Yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ds),
    (this.updater = n || cs);
}
var Xo = (Yo.prototype = new ps());
Xo.constructor = Yo;
fs(Xo, on.prototype);
Xo.isPureReactComponent = !0;
var Qi = Array.isArray,
  hs = Object.prototype.hasOwnProperty,
  Zo = { current: null },
  ms = { key: !0, ref: !0, __self: !0, __source: !0 };
function vs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      hs.call(t, r) && !ms.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: qn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Zo.current,
  };
}
function jc(e, t) {
  return {
    $$typeof: qn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Fc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Gi = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fc("" + e.key)
    : t.toString(36);
}
function Cr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qn:
          case xc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Tl(i, 0) : r),
      Qi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Gi, "$&/") + "/"),
          Cr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Jo(l) &&
            (l = jc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Gi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Qi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Tl(o, u);
      i += Cr(o, t, n, s, l);
    }
  else if (((s = Ac(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Tl(o, u++)), (i += Cr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function ur(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Cr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Uc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Nr = { transition: null },
  $c = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Nr,
    ReactCurrentOwner: Zo,
  };
R.Children = {
  map: ur,
  forEach: function (e, t, n) {
    ur(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ur(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ur(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Jo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = on;
R.Fragment = Tc;
R.Profiler = Rc;
R.PureComponent = Yo;
R.StrictMode = Pc;
R.Suspense = zc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $c;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = fs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Zo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      hs.call(t, s) &&
        !ms.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Oc, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = vs;
R.createFactory = function (e) {
  var t = vs.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: Ic, render: e };
};
R.isValidElement = Jo;
R.lazy = function (e) {
  return { $$typeof: Dc, _payload: { _status: -1, _result: e }, _init: Uc };
};
R.memo = function (e, t) {
  return { $$typeof: Mc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
R.useContext = function (e) {
  return se.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
R.useId = function () {
  return se.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return se.current.useRef(e);
};
R.useState = function (e) {
  return se.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return se.current.useTransition();
};
R.version = "18.2.0";
as.exports = R;
var b = as.exports;
const Hc = Nc(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc = b,
  Vc = Symbol.for("react.element"),
  Wc = Symbol.for("react.fragment"),
  Kc = Object.prototype.hasOwnProperty,
  Qc = Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Kc.call(t, r) && !Gc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Vc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Qc.current,
  };
}
sl.Fragment = Wc;
sl.jsx = ys;
sl.jsxs = ys;
ss.exports = sl;
var H = ss.exports,
  eo = {},
  gs = { exports: {} },
  we = {},
  ws = { exports: {} },
  Ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var P = _.length;
    _.push(T);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        X = _[W];
      if (0 < l(X, T)) (_[W] = T), (_[P] = X), (P = W);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      P = _.pop();
    if (P !== T) {
      _[0] = P;
      e: for (var W = 0, X = _.length, or = X >>> 1; W < or; ) {
        var vt = 2 * (W + 1) - 1,
          xl = _[vt],
          yt = vt + 1,
          ir = _[yt];
        if (0 > l(xl, P))
          yt < X && 0 > l(ir, xl)
            ? ((_[W] = ir), (_[yt] = P), (W = yt))
            : ((_[W] = xl), (_[vt] = P), (W = vt));
        else if (yt < X && 0 > l(ir, P)) (_[W] = ir), (_[yt] = P), (W = yt);
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var P = _.sortIndex - T.sortIndex;
    return P !== 0 ? P : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    S = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= _)
        r(c), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(c);
    }
  }
  function v(_) {
    if (((S = !1), d(_), !w))
      if (n(s) !== null) (w = !0), Cl(k);
      else {
        var T = n(c);
        T !== null && Nl(v, T.startTime - _);
      }
  }
  function k(_, T) {
    (w = !1), S && ((S = !1), f(x), (x = -1)), (g = !0);
    var P = p;
    try {
      for (
        d(T), h = n(s);
        h !== null && (!(h.expirationTime > T) || (_ && !Te()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var X = W(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof X == "function" ? (h.callback = X) : h === n(s) && r(s),
            d(T);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var or = !0;
      else {
        var vt = n(c);
        vt !== null && Nl(v, vt.startTime - T), (or = !1);
      }
      return or;
    } finally {
      (h = null), (p = P), (g = !1);
    }
  }
  var C = !1,
    N = null,
    x = -1,
    V = 5,
    O = -1;
  function Te() {
    return !(e.unstable_now() - O < V);
  }
  function an() {
    if (N !== null) {
      var _ = e.unstable_now();
      O = _;
      var T = !0;
      try {
        T = N(!0, _);
      } finally {
        T ? cn() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var Wi = new MessageChannel(),
      Cc = Wi.port2;
    (Wi.port1.onmessage = an),
      (cn = function () {
        Cc.postMessage(null);
      });
  } else
    cn = function () {
      A(an, 0);
    };
  function Cl(_) {
    (N = _), C || ((C = !0), cn());
  }
  function Nl(_, T) {
    x = A(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Cl(k));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var P = p;
      p = T;
      try {
        return _();
      } finally {
        p = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var P = p;
      p = _;
      try {
        return T();
      } finally {
        p = P;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        _)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = P + X),
        (_ = {
          id: m++,
          callback: T,
          priorityLevel: _,
          startTime: P,
          expirationTime: X,
          sortIndex: -1,
        }),
        P > W
          ? ((_.sortIndex = P),
            t(c, _),
            n(s) === null &&
              _ === n(c) &&
              (S ? (f(x), (x = -1)) : (S = !0), Nl(v, P - W)))
          : ((_.sortIndex = X), t(s, _), w || g || ((w = !0), Cl(k))),
        _
      );
    }),
    (e.unstable_shouldYield = Te),
    (e.unstable_wrapCallback = function (_) {
      var T = p;
      return function () {
        var P = p;
        p = T;
        try {
          return _.apply(this, arguments);
        } finally {
          p = P;
        }
      };
    });
})(Ss);
ws.exports = Ss;
var Yc = ws.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Es = b,
  ge = Yc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ks = new Set(),
  zn = {};
function Lt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (zn[e] = t, e = 0; e < t.length; e++) ks.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  to = Object.prototype.hasOwnProperty,
  Xc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yi = {},
  Xi = {};
function Zc(e) {
  return to.call(Xi, e)
    ? !0
    : to.call(Yi, e)
    ? !1
    : Xc.test(e)
    ? (Xi[e] = !0)
    : ((Yi[e] = !0), !1);
}
function Jc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qc(e, t, n, r) {
  if (t === null || typeof t > "u" || Jc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qo = /[\-:]([a-z])/g;
function bo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qo, bo);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qo, bo);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qo, bo);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ei(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (qc(t, n, l, r) && (n = null),
    r || l === null
      ? Zc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = Es.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sr = Symbol.for("react.element"),
  Mt = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  ti = Symbol.for("react.strict_mode"),
  no = Symbol.for("react.profiler"),
  _s = Symbol.for("react.provider"),
  Cs = Symbol.for("react.context"),
  ni = Symbol.for("react.forward_ref"),
  ro = Symbol.for("react.suspense"),
  lo = Symbol.for("react.suspense_list"),
  ri = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  Ns = Symbol.for("react.offscreen"),
  Zi = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zi && e[Zi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  Pl;
function wn(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || "";
    }
  return (
    `
` +
    Pl +
    e
  );
}
var Rl = !1;
function Ol(e, t) {
  if (!e || Rl) return "";
  Rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Rl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function bc(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ol(e.type, !1)), e;
    case 11:
      return (e = Ol(e.type.render, !1)), e;
    case 1:
      return (e = Ol(e.type, !0)), e;
    default:
      return "";
  }
}
function oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Mt:
      return "Portal";
    case no:
      return "Profiler";
    case ti:
      return "StrictMode";
    case ro:
      return "Suspense";
    case lo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Cs:
        return (e.displayName || "Context") + ".Consumer";
      case _s:
        return (e._context.displayName || "Context") + ".Provider";
      case ni:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ri:
        return (
          (t = e.displayName || null), t !== null ? t : oo(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return oo(e(t));
        } catch {}
    }
  return null;
}
function ef(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return oo(t);
    case 8:
      return t === ti ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tf(e) {
  var t = xs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ar(e) {
  e._valueTracker || (e._valueTracker = tf(e));
}
function Ts(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = xs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function io(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ji(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ps(e, t) {
  (t = t.checked), t != null && ei(e, "checked", t, !1);
}
function uo(e, t) {
  Ps(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? so(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && so(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function so(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ao(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function Rs(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function eu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Os(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function co(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Os(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var cr,
  Ls = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        cr = cr || document.createElement("div"),
          cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function (e) {
  nf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]);
  });
});
function Is(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_n.hasOwnProperty(e) && _n[e])
    ? ("" + t).trim()
    : t + "px";
}
function zs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Is(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var rf = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fo(e, t) {
  if (t) {
    if (rf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function po(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ho = null;
function li(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var mo = null,
  Gt = null,
  Yt = null;
function tu(e) {
  if ((e = tr(e))) {
    if (typeof mo != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = pl(t)), mo(e.stateNode, e.type, t));
  }
}
function Ms(e) {
  Gt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Gt = e);
}
function Ds() {
  if (Gt) {
    var e = Gt,
      t = Yt;
    if (((Yt = Gt = null), tu(e), t)) for (e = 0; e < t.length; e++) tu(t[e]);
  }
}
function As(e, t) {
  return e(t);
}
function js() {}
var Ll = !1;
function Fs(e, t, n) {
  if (Ll) return e(t, n);
  Ll = !0;
  try {
    return As(e, t, n);
  } finally {
    (Ll = !1), (Gt !== null || Yt !== null) && (js(), Ds());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var vo = !1;
if (Ke)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        vo = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    vo = !1;
  }
function lf(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Cn = !1,
  jr = null,
  Fr = !1,
  yo = null,
  of = {
    onError: function (e) {
      (Cn = !0), (jr = e);
    },
  };
function uf(e, t, n, r, l, o, i, u, s) {
  (Cn = !1), (jr = null), lf.apply(of, arguments);
}
function sf(e, t, n, r, l, o, i, u, s) {
  if ((uf.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = jr;
      (Cn = !1), (jr = null);
    } else throw Error(y(198));
    Fr || ((Fr = !0), (yo = c));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Us(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function nu(e) {
  if (It(e) !== e) throw Error(y(188));
}
function af(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return nu(l), e;
        if (o === r) return nu(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function $s(e) {
  return (e = af(e)), e !== null ? Hs(e) : null;
}
function Hs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Bs = ge.unstable_scheduleCallback,
  ru = ge.unstable_cancelCallback,
  cf = ge.unstable_shouldYield,
  ff = ge.unstable_requestPaint,
  K = ge.unstable_now,
  df = ge.unstable_getCurrentPriorityLevel,
  oi = ge.unstable_ImmediatePriority,
  Vs = ge.unstable_UserBlockingPriority,
  Ur = ge.unstable_NormalPriority,
  pf = ge.unstable_LowPriority,
  Ws = ge.unstable_IdlePriority,
  al = null,
  Fe = null;
function hf(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : yf,
  mf = Math.log,
  vf = Math.LN2;
function yf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mf(e) / vf) | 0)) | 0;
}
var fr = 64,
  dr = 4194304;
function En(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = En(u)) : ((o &= i), o !== 0 && (r = En(o)));
  } else (i = n & ~l), i !== 0 ? (r = En(i)) : o !== 0 && (r = En(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function gf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = gf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function go(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ks() {
  var e = fr;
  return (fr <<= 1), !(fr & 4194240) && (fr = 64), e;
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Sf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ii(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function Qs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gs,
  ui,
  Ys,
  Xs,
  Zs,
  wo = !1,
  pr = [],
  rt = null,
  lt = null,
  ot = null,
  An = new Map(),
  jn = new Map(),
  be = [],
  Ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jn.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = tr(t)), t !== null && ui(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function kf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = pn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return An.set(o, pn(An.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), jn.set(o, pn(jn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Js(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Us(n)), t !== null)) {
          (e.blockedOn = t),
            Zs(e.priority, function () {
              Ys(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = So(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ho = r), n.target.dispatchEvent(r), (ho = null);
    } else return (t = tr(n)), t !== null && ui(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ou(e, t, n) {
  xr(e) && n.delete(t);
}
function _f() {
  (wo = !1),
    rt !== null && xr(rt) && (rt = null),
    lt !== null && xr(lt) && (lt = null),
    ot !== null && xr(ot) && (ot = null),
    An.forEach(ou),
    jn.forEach(ou);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wo ||
      ((wo = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, _f)));
}
function Fn(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < pr.length) {
    hn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && hn(rt, e),
      lt !== null && hn(lt, e),
      ot !== null && hn(ot, e),
      An.forEach(t),
      jn.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Js(n), n.blockedOn === null && be.shift();
}
var Xt = Xe.ReactCurrentBatchConfig,
  Hr = !0;
function Cf(e, t, n, r) {
  var l = I,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (I = 1), si(e, t, n, r);
  } finally {
    (I = l), (Xt.transition = o);
  }
}
function Nf(e, t, n, r) {
  var l = I,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (I = 4), si(e, t, n, r);
  } finally {
    (I = l), (Xt.transition = o);
  }
}
function si(e, t, n, r) {
  if (Hr) {
    var l = So(e, t, n, r);
    if (l === null) Bl(e, t, r, Br, n), lu(e, r);
    else if (kf(l, e, t, n, r)) r.stopPropagation();
    else if ((lu(e, r), t & 4 && -1 < Ef.indexOf(e))) {
      for (; l !== null; ) {
        var o = tr(l);
        if (
          (o !== null && Gs(o),
          (o = So(e, t, n, r)),
          o === null && Bl(e, t, r, Br, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
  }
}
var Br = null;
function So(e, t, n, r) {
  if (((Br = null), (e = li(r)), (e = St(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Us(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Br = e), null;
}
function qs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (df()) {
        case oi:
          return 1;
        case Vs:
          return 4;
        case Ur:
        case pf:
          return 16;
        case Ws:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  ai = null,
  Tr = null;
function bs() {
  if (Tr) return Tr;
  var e,
    t = ai,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Tr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Pr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hr() {
  return !0;
}
function iu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? hr
        : iu),
      (this.isPropagationStopped = iu),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = hr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = hr));
      },
      persist: function () {},
      isPersistent: hr,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ci = Se(un),
  er = $({}, un, { view: 0, detail: 0 }),
  xf = Se(er),
  zl,
  Ml,
  mn,
  cl = $({}, er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mn &&
            (mn && e.type === "mousemove"
              ? ((zl = e.screenX - mn.screenX), (Ml = e.screenY - mn.screenY))
              : (Ml = zl = 0),
            (mn = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  uu = Se(cl),
  Tf = $({}, cl, { dataTransfer: 0 }),
  Pf = Se(Tf),
  Rf = $({}, er, { relatedTarget: 0 }),
  Dl = Se(Rf),
  Of = $({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = Se(Of),
  If = $({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zf = Se(If),
  Mf = $({}, un, { data: 0 }),
  su = Se(Mf),
  Df = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Af = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ff(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jf[e]) ? !!t[e] : !1;
}
function fi() {
  return Ff;
}
var Uf = $({}, er, {
    key: function (e) {
      if (e.key) {
        var t = Df[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Af[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fi,
    charCode: function (e) {
      return e.type === "keypress" ? Pr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  $f = Se(Uf),
  Hf = $({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  au = Se(Hf),
  Bf = $({}, er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fi,
  }),
  Vf = Se(Bf),
  Wf = $({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kf = Se(Wf),
  Qf = $({}, cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Gf = Se(Qf),
  Yf = [9, 13, 27, 32],
  di = Ke && "CompositionEvent" in window,
  Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var Xf = Ke && "TextEvent" in window && !Nn,
  ea = Ke && (!di || (Nn && 8 < Nn && 11 >= Nn)),
  cu = " ",
  fu = !1;
function ta(e, t) {
  switch (e) {
    case "keyup":
      return Yf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function na(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Zf(e, t) {
  switch (e) {
    case "compositionend":
      return na(t);
    case "keypress":
      return t.which !== 32 ? null : ((fu = !0), cu);
    case "textInput":
      return (e = t.data), e === cu && fu ? null : e;
    default:
      return null;
  }
}
function Jf(e, t) {
  if (At)
    return e === "compositionend" || (!di && ta(e, t))
      ? ((e = bs()), (Tr = ai = tt = null), (At = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ea && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qf[e.type] : t === "textarea";
}
function ra(e, t, n, r) {
  Ms(r),
    (t = Vr(t, "onChange")),
    0 < t.length &&
      ((n = new ci("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xn = null,
  Un = null;
function bf(e) {
  ha(e, 0);
}
function fl(e) {
  var t = Ut(e);
  if (Ts(t)) return e;
}
function ed(e, t) {
  if (e === "change") return t;
}
var la = !1;
if (Ke) {
  var Al;
  if (Ke) {
    var jl = "oninput" in document;
    if (!jl) {
      var pu = document.createElement("div");
      pu.setAttribute("oninput", "return;"),
        (jl = typeof pu.oninput == "function");
    }
    Al = jl;
  } else Al = !1;
  la = Al && (!document.documentMode || 9 < document.documentMode);
}
function hu() {
  xn && (xn.detachEvent("onpropertychange", oa), (Un = xn = null));
}
function oa(e) {
  if (e.propertyName === "value" && fl(Un)) {
    var t = [];
    ra(t, Un, e, li(e)), Fs(bf, t);
  }
}
function td(e, t, n) {
  e === "focusin"
    ? (hu(), (xn = t), (Un = n), xn.attachEvent("onpropertychange", oa))
    : e === "focusout" && hu();
}
function nd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fl(Un);
}
function rd(e, t) {
  if (e === "click") return fl(t);
}
function ld(e, t) {
  if (e === "input" || e === "change") return fl(t);
}
function od(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : od;
function $n(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!to.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vu(e, t) {
  var n = mu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mu(n);
  }
}
function ia(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ia(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ua() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function id(e) {
  var t = ua(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ia(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = vu(n, o));
        var i = vu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ud = Ke && "documentMode" in document && 11 >= document.documentMode,
  jt = null,
  Eo = null,
  Tn = null,
  ko = !1;
function yu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ko ||
    jt == null ||
    jt !== Ar(r) ||
    ((r = jt),
    "selectionStart" in r && pi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tn && $n(Tn, r)) ||
      ((Tn = r),
      (r = Vr(Eo, "onSelect")),
      0 < r.length &&
        ((t = new ci("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jt))));
}
function mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ft = {
    animationend: mr("Animation", "AnimationEnd"),
    animationiteration: mr("Animation", "AnimationIteration"),
    animationstart: mr("Animation", "AnimationStart"),
    transitionend: mr("Transition", "TransitionEnd"),
  },
  Fl = {},
  sa = {};
Ke &&
  ((sa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ft.animationend.animation,
    delete Ft.animationiteration.animation,
    delete Ft.animationstart.animation),
  "TransitionEvent" in window || delete Ft.transitionend.transition);
function dl(e) {
  if (Fl[e]) return Fl[e];
  if (!Ft[e]) return e;
  var t = Ft[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sa) return (Fl[e] = t[n]);
  return e;
}
var aa = dl("animationend"),
  ca = dl("animationiteration"),
  fa = dl("animationstart"),
  da = dl("transitionend"),
  pa = new Map(),
  gu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  pa.set(e, t), Lt(t, [e]);
}
for (var Ul = 0; Ul < gu.length; Ul++) {
  var $l = gu[Ul],
    sd = $l.toLowerCase(),
    ad = $l[0].toUpperCase() + $l.slice(1);
  pt(sd, "on" + ad);
}
pt(aa, "onAnimationEnd");
pt(ca, "onAnimationIteration");
pt(fa, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(da, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  cd = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function wu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sf(r, t, void 0, e), (e.currentTarget = null);
}
function ha(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          wu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          wu(l, u, c), (o = s);
        }
    }
  }
  if (Fr) throw ((e = yo), (Fr = !1), (yo = null), e);
}
function M(e, t) {
  var n = t[To];
  n === void 0 && (n = t[To] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ma(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), ma(n, e, r, t);
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[vr]) {
    (e[vr] = !0),
      ks.forEach(function (n) {
        n !== "selectionchange" && (cd.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || ((t[vr] = !0), Hl("selectionchange", !1, t));
  }
}
function ma(e, t, n, r) {
  switch (qs(t)) {
    case 1:
      var l = Cf;
      break;
    case 4:
      l = Nf;
      break;
    default:
      l = si;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !vo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = St(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Fs(function () {
    var c = o,
      m = li(n),
      h = [];
    e: {
      var p = pa.get(e);
      if (p !== void 0) {
        var g = ci,
          w = e;
        switch (e) {
          case "keypress":
            if (Pr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = $f;
            break;
          case "focusin":
            (w = "focus"), (g = Dl);
            break;
          case "focusout":
            (w = "blur"), (g = Dl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Vf;
            break;
          case aa:
          case ca:
          case fa:
            g = Lf;
            break;
          case da:
            g = Kf;
            break;
          case "scroll":
            g = xf;
            break;
          case "wheel":
            g = Gf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = zf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = au;
        }
        var S = (t & 4) !== 0,
          A = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Dn(a, f)), v != null && S.push(Bn(a, v, d)))),
            A)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ho &&
            (w = n.relatedTarget || n.fromElement) &&
            (St(w) || w[Qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? St(w) : null),
              w !== null &&
                ((A = It(w)), w !== A || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((S = uu),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = au),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (A = g == null ? p : Ut(g)),
            (d = w == null ? p : Ut(w)),
            (p = new S(v, a + "leave", g, n, m)),
            (p.target = A),
            (p.relatedTarget = d),
            (v = null),
            St(m) === c &&
              ((S = new S(f, a + "enter", w, n, m)),
              (S.target = d),
              (S.relatedTarget = A),
              (v = S)),
            (A = v),
            g && w)
          )
            t: {
              for (S = g, f = w, a = 0, d = S; d; d = zt(d)) a++;
              for (d = 0, v = f; v; v = zt(v)) d++;
              for (; 0 < a - d; ) (S = zt(S)), a--;
              for (; 0 < d - a; ) (f = zt(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = zt(S)), (f = zt(f));
              }
              S = null;
            }
          else S = null;
          g !== null && Su(h, p, g, S, !1),
            w !== null && A !== null && Su(h, A, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ut(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var k = ed;
        else if (du(p))
          if (la) k = ld;
          else {
            k = nd;
            var C = td;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = rd);
        if (k && (k = k(e, c))) {
          ra(h, k, n, m);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            so(p, "number", p.value);
      }
      switch (((C = c ? Ut(c) : window), e)) {
        case "focusin":
          (du(C) || C.contentEditable === "true") &&
            ((jt = C), (Eo = c), (Tn = null));
          break;
        case "focusout":
          Tn = Eo = jt = null;
          break;
        case "mousedown":
          ko = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ko = !1), yu(h, n, m);
          break;
        case "selectionchange":
          if (ud) break;
        case "keydown":
        case "keyup":
          yu(h, n, m);
      }
      var N;
      if (di)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        At
          ? ta(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (ea &&
          n.locale !== "ko" &&
          (At || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && At && (N = bs())
            : ((tt = m),
              (ai = "value" in tt ? tt.value : tt.textContent),
              (At = !0))),
        (C = Vr(c, x)),
        0 < C.length &&
          ((x = new su(x, e, null, n, m)),
          h.push({ event: x, listeners: C }),
          N ? (x.data = N) : ((N = na(n)), N !== null && (x.data = N)))),
        (N = Xf ? Zf(e, n) : Jf(e, n)) &&
          ((c = Vr(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new su("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = N)));
    }
    ha(h, t);
  });
}
function Bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Dn(e, n)),
      o != null && r.unshift(Bn(e, o, l)),
      (o = Dn(e, t)),
      o != null && r.push(Bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function zt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Su(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dn(n, o)), s != null && i.unshift(Bn(n, s, u)))
        : l || ((s = Dn(n, o)), s != null && i.push(Bn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var fd = /\r\n?/g,
  dd = /\u0000|\uFFFD/g;
function Eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fd,
      `
`
    )
    .replace(dd, "");
}
function yr(e, t, n) {
  if (((t = Eu(t)), Eu(e) !== t && n)) throw Error(y(425));
}
function Wr() {}
var _o = null,
  Co = null;
function No(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xo = typeof setTimeout == "function" ? setTimeout : void 0,
  pd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ku = typeof Promise == "function" ? Promise : void 0,
  hd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ku < "u"
      ? function (e) {
          return ku.resolve(null).then(e).catch(md);
        }
      : xo;
function md(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fn(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  je = "__reactFiber$" + sn,
  Vn = "__reactProps$" + sn,
  Qe = "__reactContainer$" + sn,
  To = "__reactEvents$" + sn,
  vd = "__reactListeners$" + sn,
  yd = "__reactHandles$" + sn;
function St(e) {
  var t = e[je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qe] || n[je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((n = e[je])) return n;
          e = _u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function tr(e) {
  return (
    (e = e[je] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function pl(e) {
  return e[Vn] || null;
}
var Po = [],
  $t = -1;
function ht(e) {
  return { current: e };
}
function D(e) {
  0 > $t || ((e.current = Po[$t]), (Po[$t] = null), $t--);
}
function z(e, t) {
  $t++, (Po[$t] = e.current), (e.current = t);
}
var dt = {},
  oe = ht(dt),
  de = ht(!1),
  Nt = dt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Kr() {
  D(de), D(oe);
}
function Cu(e, t, n) {
  if (oe.current !== dt) throw Error(y(168));
  z(oe, t), z(de, n);
}
function va(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, ef(e) || "Unknown", l));
  return $({}, n, r);
}
function Qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Nt = oe.current),
    z(oe, e),
    z(de, de.current),
    !0
  );
}
function Nu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = va(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(de),
      D(oe),
      z(oe, e))
    : D(de),
    z(de, n);
}
var He = null,
  hl = !1,
  Wl = !1;
function ya(e) {
  He === null ? (He = [e]) : He.push(e);
}
function gd(e) {
  (hl = !0), ya(e);
}
function mt() {
  if (!Wl && He !== null) {
    Wl = !0;
    var e = 0,
      t = I;
    try {
      var n = He;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (hl = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), Bs(oi, mt), l);
    } finally {
      (I = t), (Wl = !1);
    }
  }
  return null;
}
var Ht = [],
  Bt = 0,
  Gr = null,
  Yr = 0,
  Ee = [],
  ke = 0,
  xt = null,
  Be = 1,
  Ve = "";
function gt(e, t) {
  (Ht[Bt++] = Yr), (Ht[Bt++] = Gr), (Gr = e), (Yr = t);
}
function ga(e, t, n) {
  (Ee[ke++] = Be), (Ee[ke++] = Ve), (Ee[ke++] = xt), (xt = e);
  var r = Be;
  e = Ve;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Be = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Ve = o + e);
  } else (Be = (1 << o) | (n << l) | r), (Ve = e);
}
function hi(e) {
  e.return !== null && (gt(e, 1), ga(e, 1, 0));
}
function mi(e) {
  for (; e === Gr; )
    (Gr = Ht[--Bt]), (Ht[Bt] = null), (Yr = Ht[--Bt]), (Ht[Bt] = null);
  for (; e === xt; )
    (xt = Ee[--ke]),
      (Ee[ke] = null),
      (Ve = Ee[--ke]),
      (Ee[ke] = null),
      (Be = Ee[--ke]),
      (Ee[ke] = null);
}
var ye = null,
  ve = null,
  j = !1,
  Le = null;
function wa(e, t) {
  var n = _e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xt !== null ? { id: Be, overflow: Ve } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ro(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oo(e) {
  if (j) {
    var t = ve;
    if (t) {
      var n = t;
      if (!xu(e, t)) {
        if (Ro(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ye;
        t && xu(e, t)
          ? wa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e));
      }
    } else {
      if (Ro(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (j = !1), (ye = e);
    }
  }
}
function Tu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function gr(e) {
  if (e !== ye) return !1;
  if (!j) return Tu(e), (j = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !No(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Ro(e)) throw (Sa(), Error(y(418)));
    for (; t; ) wa(e, t), (t = it(t.nextSibling));
  }
  if ((Tu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function Sa() {
  for (var e = ve; e; ) e = it(e.nextSibling);
}
function en() {
  (ve = ye = null), (j = !1);
}
function vi(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var wd = Xe.ReactCurrentBatchConfig;
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xr = ht(null),
  Zr = null,
  Vt = null,
  yi = null;
function gi() {
  yi = Vt = Zr = null;
}
function wi(e) {
  var t = Xr.current;
  D(Xr), (e._currentValue = t);
}
function Lo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zt(e, t) {
  (Zr = e),
    (yi = Vt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (yi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vt === null)) {
      if (Zr === null) throw Error(y(308));
      (Vt = e), (Zr.dependencies = { lanes: 0, firstContext: e });
    } else Vt = Vt.next = e;
  return t;
}
var Et = null;
function Si(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Ea(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Si(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ge(e, r)
  );
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function Ei(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ka(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Si(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  );
}
function Rr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ii(e, n);
  }
}
function Pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Jr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== i &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (m = c = s = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((p = t), (g = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = $({}, h, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (s = h)) : (m = m.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Pt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Ru(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var _a = new Es.Component().refs;
function Io(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = We(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (ze(t, e, l, r), Rr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = We(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (ze(t, e, l, r), Rr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = at(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (ze(t, e, r, n), Rr(t, e, r));
  },
};
function Ou(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, o)
      : !0
  );
}
function Ca(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ne(o))
      : ((l = pe(t) ? Nt : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bt(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ml),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Lu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null);
}
function zo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = _a), Ei(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ne(o))
    : ((o = pe(t) ? Nt : oe.current), (l.context = bt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Io(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ml.enqueueReplaceState(l, l.state, null),
      Jr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === _a && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function wr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Iu(e) {
  var t = e._init;
  return t(e._payload);
}
function Na(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Jl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var k = d.type;
    return k === Dt
      ? m(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Je &&
            Iu(k) === a.type))
      ? ((v = l(a, d.props)), (v.ref = vn(f, a, d)), (v.return = f), v)
      : ((v = Dr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = vn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = ql(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, v, k) {
    return a === null || a.tag !== 7
      ? ((a = Ct(d, f.mode, v, k)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function h(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Jl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case sr:
          return (
            (d = Dr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case Mt:
          return (a = ql(a, f.mode, d)), (a.return = f), a;
        case Je:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Sn(a) || fn(a))
        return (a = Ct(a, f.mode, d, null)), (a.return = f), a;
      wr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var k = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case sr:
          return d.key === k ? s(f, a, d, v) : null;
        case Mt:
          return d.key === k ? c(f, a, d, v) : null;
        case Je:
          return (k = d._init), p(f, a, k(d._payload), v);
      }
      if (Sn(d) || fn(d)) return k !== null ? null : m(f, a, d, v, null);
      wr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case sr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, k);
        case Mt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, k);
        case Je:
          var C = v._init;
          return g(f, a, d, C(v._payload), k);
      }
      if (Sn(v) || fn(v)) return (f = f.get(d) || null), m(a, f, v, k, null);
      wr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var k = null, C = null, N = a, x = (a = 0), V = null;
      N !== null && x < d.length;
      x++
    ) {
      N.index > x ? ((V = N), (N = null)) : (V = N.sibling);
      var O = p(f, N, d[x], v);
      if (O === null) {
        N === null && (N = V);
        break;
      }
      e && N && O.alternate === null && t(f, N),
        (a = o(O, a, x)),
        C === null ? (k = O) : (C.sibling = O),
        (C = O),
        (N = V);
    }
    if (x === d.length) return n(f, N), j && gt(f, x), k;
    if (N === null) {
      for (; x < d.length; x++)
        (N = h(f, d[x], v)),
          N !== null &&
            ((a = o(N, a, x)), C === null ? (k = N) : (C.sibling = N), (C = N));
      return j && gt(f, x), k;
    }
    for (N = r(f, N); x < d.length; x++)
      (V = g(N, f, x, d[x], v)),
        V !== null &&
          (e && V.alternate !== null && N.delete(V.key === null ? x : V.key),
          (a = o(V, a, x)),
          C === null ? (k = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        N.forEach(function (Te) {
          return t(f, Te);
        }),
      j && gt(f, x),
      k
    );
  }
  function S(f, a, d, v) {
    var k = fn(d);
    if (typeof k != "function") throw Error(y(150));
    if (((d = k.call(d)), d == null)) throw Error(y(151));
    for (
      var C = (k = null), N = a, x = (a = 0), V = null, O = d.next();
      N !== null && !O.done;
      x++, O = d.next()
    ) {
      N.index > x ? ((V = N), (N = null)) : (V = N.sibling);
      var Te = p(f, N, O.value, v);
      if (Te === null) {
        N === null && (N = V);
        break;
      }
      e && N && Te.alternate === null && t(f, N),
        (a = o(Te, a, x)),
        C === null ? (k = Te) : (C.sibling = Te),
        (C = Te),
        (N = V);
    }
    if (O.done) return n(f, N), j && gt(f, x), k;
    if (N === null) {
      for (; !O.done; x++, O = d.next())
        (O = h(f, O.value, v)),
          O !== null &&
            ((a = o(O, a, x)), C === null ? (k = O) : (C.sibling = O), (C = O));
      return j && gt(f, x), k;
    }
    for (N = r(f, N); !O.done; x++, O = d.next())
      (O = g(N, f, x, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? x : O.key),
          (a = o(O, a, x)),
          C === null ? (k = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        N.forEach(function (an) {
          return t(f, an);
        }),
      j && gt(f, x),
      k
    );
  }
  function A(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Dt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case sr:
          e: {
            for (var k = d.key, C = a; C !== null; ) {
              if (C.key === k) {
                if (((k = d.type), k === Dt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Je &&
                    Iu(k) === C.type)
                ) {
                  n(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = vn(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Dt
              ? ((a = Ct(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Dr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = vn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Mt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = ql(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case Je:
          return (C = d._init), A(f, a, C(d._payload), v);
      }
      if (Sn(d)) return w(f, a, d, v);
      if (fn(d)) return S(f, a, d, v);
      wr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Jl(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return A;
}
var tn = Na(!0),
  xa = Na(!1),
  nr = {},
  Ue = ht(nr),
  Wn = ht(nr),
  Kn = ht(nr);
function kt(e) {
  if (e === nr) throw Error(y(174));
  return e;
}
function ki(e, t) {
  switch ((z(Kn, t), z(Wn, e), z(Ue, nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : co(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = co(t, e));
  }
  D(Ue), z(Ue, t);
}
function nn() {
  D(Ue), D(Wn), D(Kn);
}
function Ta(e) {
  kt(Kn.current);
  var t = kt(Ue.current),
    n = co(t, e.type);
  t !== n && (z(Wn, e), z(Ue, n));
}
function _i(e) {
  Wn.current === e && (D(Ue), D(Wn));
}
var F = ht(0);
function qr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Kl = [];
function Ci() {
  for (var e = 0; e < Kl.length; e++)
    Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Or = Xe.ReactCurrentDispatcher,
  Ql = Xe.ReactCurrentBatchConfig,
  Tt = 0,
  U = null,
  G = null,
  Z = null,
  br = !1,
  Pn = !1,
  Qn = 0,
  Sd = 0;
function ne() {
  throw Error(y(321));
}
function Ni(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function xi(e, t, n, r, l, o) {
  if (
    ((Tt = o),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Or.current = e === null || e.memoizedState === null ? Cd : Nd),
    (e = n(r, l)),
    Pn)
  ) {
    o = 0;
    do {
      if (((Pn = !1), (Qn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (Z = G = null),
        (t.updateQueue = null),
        (Or.current = xd),
        (e = n(r, l));
    } while (Pn);
  }
  if (
    ((Or.current = el),
    (t = G !== null && G.next !== null),
    (Tt = 0),
    (Z = G = U = null),
    (br = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Ti() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function Ae() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (U.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function xe() {
  if (G === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = Z === null ? U.memoizedState : Z.next;
  if (t !== null) (Z = t), (G = e);
  else {
    if (e === null) throw Error(y(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      Z === null ? (U.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gl(e) {
  var t = xe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var m = c.lane;
      if ((Tt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (U.lanes |= m),
          (Pt |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Me(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (U.lanes |= o), (Pt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = xe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Me(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Pa() {}
function Ra(e, t) {
  var n = U,
    r = xe(),
    l = t(),
    o = !Me(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Pi(Ia.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, La.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Tt & 30 || Oa(n, t, l);
  }
  return l;
}
function Oa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function La(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), za(t) && Ma(e);
}
function Ia(e, t, n) {
  return n(function () {
    za(t) && Ma(e);
  });
}
function za(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Ma(e) {
  var t = Ge(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function zu(e) {
  var t = Ae();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _d.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Da() {
  return xe().memoizedState;
}
function Lr(e, t, n, r) {
  var l = Ae();
  (U.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function vl(e, t, n, r) {
  var l = xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (((o = i.destroy), r !== null && Ni(r, i.deps))) {
      l.memoizedState = Yn(t, n, o, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = Yn(1 | t, n, o, r));
}
function Mu(e, t) {
  return Lr(8390656, 8, e, t);
}
function Pi(e, t) {
  return vl(2048, 8, e, t);
}
function Aa(e, t) {
  return vl(4, 2, e, t);
}
function ja(e, t) {
  return vl(4, 4, e, t);
}
function Fa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ua(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vl(4, 4, Fa.bind(null, t, e), n)
  );
}
function Ri() {}
function $a(e, t) {
  var n = xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ni(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ha(e, t) {
  var n = xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ni(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ba(e, t, n) {
  return Tt & 21
    ? (Me(n, t) || ((n = Ks()), (U.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function Ed(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ql.transition;
  Ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (Ql.transition = r);
  }
}
function Va() {
  return xe().memoizedState;
}
function kd(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wa(e))
  )
    Ka(t, n);
  else if (((n = Ea(e, t, n, r)), n !== null)) {
    var l = ue();
    ze(n, e, r, l), Qa(n, t, r);
  }
}
function _d(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wa(e)) Ka(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Si(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ea(e, t, l, r)),
      n !== null && ((l = ue()), ze(n, e, r, l), Qa(n, t, r));
  }
}
function Wa(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function Ka(e, t) {
  Pn = br = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Qa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ii(e, n);
  }
}
var el = {
    readContext: Ne,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  Cd = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Ae().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Mu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lr(4194308, 4, Fa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ae();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ae();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = kd.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ae();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zu,
    useDebugValue: Ri,
    useDeferredValue: function (e) {
      return (Ae().memoizedState = e);
    },
    useTransition: function () {
      var e = zu(!1),
        t = e[0];
      return (e = Ed.bind(null, e[1])), (Ae().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        l = Ae();
      if (j) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        Tt & 30 || Oa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Mu(Ia.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Yn(9, La.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ae(),
        t = J.identifierPrefix;
      if (j) {
        var n = Ve,
          r = Be;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Sd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Nd = {
    readContext: Ne,
    useCallback: $a,
    useContext: Ne,
    useEffect: Pi,
    useImperativeHandle: Ua,
    useInsertionEffect: Aa,
    useLayoutEffect: ja,
    useMemo: Ha,
    useReducer: Gl,
    useRef: Da,
    useState: function () {
      return Gl(Gn);
    },
    useDebugValue: Ri,
    useDeferredValue: function (e) {
      var t = xe();
      return Ba(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Gl(Gn)[0],
        t = xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Pa,
    useSyncExternalStore: Ra,
    useId: Va,
    unstable_isNewReconciler: !1,
  },
  xd = {
    readContext: Ne,
    useCallback: $a,
    useContext: Ne,
    useEffect: Pi,
    useImperativeHandle: Ua,
    useInsertionEffect: Aa,
    useLayoutEffect: ja,
    useMemo: Ha,
    useReducer: Yl,
    useRef: Da,
    useState: function () {
      return Yl(Gn);
    },
    useDebugValue: Ri,
    useDeferredValue: function (e) {
      var t = xe();
      return G === null ? (t.memoizedState = e) : Ba(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Gn)[0],
        t = xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Pa,
    useSyncExternalStore: Ra,
    useId: Va,
    unstable_isNewReconciler: !1,
  };
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Td = typeof WeakMap == "function" ? WeakMap : Map;
function Ga(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Wo = r)), Mo(e, t);
    }),
    n
  );
}
function Ya(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Mo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Mo(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Du(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Td();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Hd.bind(null, e, t, n)), t.then(e, e));
}
function Au(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ju(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Pd = Xe.ReactCurrentOwner,
  fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? xa(t, null, n, r) : tn(t, e.child, n, r);
}
function Fu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Zt(t, l),
    (r = xi(e, t, n, r, o, l)),
    (n = Ti()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (j && n && hi(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Uu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ji(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Xa(e, t, o, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(i, r) && e.ref === t.ref)
    )
      return Ye(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Xa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($n(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ye(e, t, l);
  }
  return Do(e, t, n, r, l);
}
function Za(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Kt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Kt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Kt, me),
        (me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Kt, me),
      (me |= r);
  return ie(e, t, l, n), t.child;
}
function Ja(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Do(e, t, n, r, l) {
  var o = pe(n) ? Nt : oe.current;
  return (
    (o = bt(t, o)),
    Zt(t, l),
    (n = xi(e, t, n, r, o, l)),
    (r = Ti()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (j && r && hi(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function $u(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Qr(t);
  } else o = !1;
  if ((Zt(t, l), t.stateNode === null))
    Ir(e, t), Ca(t, n, r), zo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = pe(n) ? Nt : oe.current), (c = bt(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Lu(t, i, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (i.state = p),
      Jr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof m == "function" && (Io(t, n, m, r), (s = t.memoizedState)),
          (u = qe || Ou(t, n, u, r, p, s, c))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ka(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Re(t.type, u)),
      (i.props = c),
      (h = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = pe(n) ? Nt : oe.current), (s = bt(t, s)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && Lu(t, i, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (i.state = p),
      Jr(t, r, i, l);
    var w = t.memoizedState;
    u !== h || p !== w || de.current || qe
      ? (typeof g == "function" && (Io(t, n, g, r), (w = t.memoizedState)),
        (c = qe || Ou(t, n, c, r, p, w, s) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ao(e, t, n, r, o, l);
}
function Ao(e, t, n, r, l, o) {
  Ja(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Nu(t, n, !1), Ye(e, t, o);
  (r = t.stateNode), (Pd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = tn(t, e.child, null, o)), (t.child = tn(t, null, u, o)))
      : ie(e, t, u, o),
    (t.memoizedState = r.state),
    l && Nu(t, n, !0),
    t.child
  );
}
function qa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Cu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cu(e, t.context, !1),
    ki(e, t.containerInfo);
}
function Hu(e, t, n, r, l) {
  return en(), vi(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var jo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ba(e, t, n) {
  var r = t.pendingProps,
    l = F.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    z(F, l & 1),
    e === null)
  )
    return (
      Oo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = wl(i, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Fo(n)),
              (t.memoizedState = jo),
              e)
            : Oi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Rd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = Ct(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Fo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = jo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Oi(e, t) {
  return (
    (t = wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Sr(e, t, n, r) {
  return (
    r !== null && vi(r),
    tn(t, e.child, null, n),
    (e = Oi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Rd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xl(Error(y(422)))), Sr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = wl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Ct(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, i),
        (t.child.memoizedState = Fo(i)),
        (t.memoizedState = jo),
        o);
  if (!(t.mode & 1)) return Sr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Xl(o, r, void 0)), Sr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ge(e, l), ze(r, e, l, -1));
    }
    return Ai(), (r = Xl(Error(y(421)))), Sr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = it(l.nextSibling)),
      (ye = t),
      (j = !0),
      (Le = null),
      e !== null &&
        ((Ee[ke++] = Be),
        (Ee[ke++] = Ve),
        (Ee[ke++] = xt),
        (Be = e.id),
        (Ve = e.overflow),
        (xt = t)),
      (t = Oi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Lo(e.return, t, n);
}
function Zl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function ec(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, t, r.children, n), (r = F.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bu(e, n, t);
        else if (e.tag === 19) Bu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(F, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && qr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Zl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && qr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Zl(t, !0, n, null, o);
        break;
      case "together":
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Od(e, t, n) {
  switch (t.tag) {
    case 3:
      qa(t), en();
      break;
    case 5:
      Ta(t);
      break;
    case 1:
      pe(t.type) && Qr(t);
      break;
    case 4:
      ki(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      z(Xr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(F, F.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ba(e, t, n)
          : (z(F, F.current & 1),
            (e = Ye(e, t, n)),
            e !== null ? e.sibling : null);
      z(F, F.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ec(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        z(F, F.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Za(e, t, n);
  }
  return Ye(e, t, n);
}
var tc, Uo, nc, rc;
tc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uo = function () {};
nc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kt(Ue.current);
    var o = null;
    switch (n) {
      case "input":
        (l = io(e, l)), (r = io(e, r)), (o = []);
        break;
      case "select":
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ao(e, l)), (r = ao(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wr);
    }
    fo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (zn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (zn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && M("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
rc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!j)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ld(e, t, n) {
  var r = t.pendingProps;
  switch ((mi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && Kr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        D(de),
        D(oe),
        Ci(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Go(Le), (Le = null)))),
        Uo(e, t),
        re(t),
        null
      );
    case 5:
      _i(t);
      var l = kt(Kn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        nc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = kt(Ue.current)), gr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[je] = t), (r[Vn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) M(kn[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Ji(r, o), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              bi(r, o), M("invalid", r);
          }
          fo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : zn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              ar(r), qi(r, o, !0);
              break;
            case "textarea":
              ar(r), eu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Os(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[je] = t),
            (e[Vn] = r),
            tc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = po(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) M(kn[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Ji(e, r), (l = io(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = $({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                bi(e, r), (l = ao(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            fo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? zs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ls(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Mn(e, s)
                    : typeof s == "number" && Mn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (zn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && M("scroll", e)
                      : s != null && ei(e, o, s, i));
              }
            switch (n) {
              case "input":
                ar(e), qi(e, r, !1);
                break;
              case "textarea":
                ar(e), eu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) rc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = kt(Kn.current)), kt(Ue.current), gr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[je] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[je] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (D(F),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (j && ve !== null && t.mode & 1 && !(t.flags & 128))
          Sa(), en(), (t.flags |= 98560), (o = !1);
        else if (((o = gr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[je] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (o = !1);
        } else Le !== null && (Go(Le), (Le = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || F.current & 1 ? Y === 0 && (Y = 3) : Ai())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        nn(), Uo(e, t), e === null && Hn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return wi(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Kr(), re(t), null;
    case 19:
      if ((D(F), (o = t.memoizedState), o === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) yn(o, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = qr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    yn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(F, (F.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > ln &&
            ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !j)
            )
              return re(t), null;
          } else
            2 * K() - o.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = F.current),
          z(F, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Di(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Id(e, t) {
  switch ((mi(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Kr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        D(de),
        D(oe),
        Ci(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _i(t), null;
    case 13:
      if ((D(F), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D(F), null;
    case 4:
      return nn(), null;
    case 10:
      return wi(t.type._context), null;
    case 22:
    case 23:
      return Di(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1,
  le = !1,
  zd = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function $o(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Vu = !1;
function Md(e, t) {
  if (((_o = Hr), (e = ua()), pi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++m === r && (s = i),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Co = { focusedElem: e, selectionRange: n }, Hr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    A = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Re(t.type, S),
                      A
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (w = Vu), (Vu = !1), w;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && $o(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ho(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[je], delete t[Vn], delete t[To], delete t[vd], delete t[yd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || oc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bo(e, t, n), e = e.sibling; e !== null; ) Bo(e, t, n), (e = e.sibling);
}
function Vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, t, n), e = e.sibling; e !== null; ) Vo(e, t, n), (e = e.sibling);
}
var q = null,
  Oe = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) ic(e, t, n), (n = n.sibling);
}
function ic(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(al, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Wt(n, t);
    case 6:
      var r = q,
        l = Oe;
      (q = null),
        Ze(e, t, n),
        (q = r),
        (Oe = l),
        q !== null &&
          (Oe
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Oe
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vl(e.parentNode, n)
              : e.nodeType === 1 && Vl(e, n),
            Fn(e))
          : Vl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Oe),
        (q = n.stateNode.containerInfo),
        (Oe = !0),
        Ze(e, t, n),
        (q = r),
        (Oe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && $o(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Ku(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zd()),
      t.forEach(function (r) {
        var l = Vd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Oe = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        ic(o, i, l), (q = null), (Oe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) uc(t, e), (t = t.sibling);
}
function uc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), De(e), r & 4)) {
        try {
          Rn(3, e, e.return), yl(3, e);
        } catch (S) {
          B(e, e.return, S);
        }
        try {
          Rn(5, e, e.return);
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 1:
      Pe(t, e), De(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        De(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Mn(l, "");
        } catch (S) {
          B(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ps(l, o),
              po(u, i);
            var c = po(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i],
                h = s[i + 1];
              m === "style"
                ? zs(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Ls(l, h)
                : m === "children"
                ? Mn(l, h)
                : ei(l, m, h, c);
            }
            switch (u) {
              case "input":
                uo(l, o);
                break;
              case "textarea":
                Rs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Qt(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qt(l, !!o.multiple, o.defaultValue, !0)
                      : Qt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Vn] = o;
          } catch (S) {
            B(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fn(t.containerInfo);
        } catch (S) {
          B(e, e.return, S);
        }
      break;
    case 4:
      Pe(t, e), De(e);
      break;
    case 13:
      Pe(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zi = K())),
        r & 4 && Ku(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || m), Pe(t, e), (le = c)) : Pe(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (E = e, m = e.child; m !== null; ) {
            for (h = E = m; E !== null; ) {
              switch (((p = E), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, p, p.return);
                  break;
                case 1:
                  Wt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      B(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Wt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Gu(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (E = g)) : Gu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Is("display", i)));
              } catch (S) {
                B(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (S) {
                B(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), De(e), r & 4 && Ku(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (oc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mn(l, ""), (r.flags &= -33));
          var o = Wu(e);
          Vo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Wu(e);
          Bo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dd(e, t, n) {
  (E = e), sc(e);
}
function sc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Er;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = Er;
        var c = le;
        if (((Er = i), (le = s) && !c))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Yu(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : Yu(l);
        for (; o !== null; ) (E = o), sc(o), (o = o.sibling);
        (E = l), (Er = u), (le = c);
      }
      Qu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : Qu(e);
  }
}
function Qu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ru(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ru(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Fn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Ho(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function Gu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function Yu(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ho(t);
          } catch (s) {
            B(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ho(t);
          } catch (s) {
            B(t, i, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var Ad = Math.ceil,
  tl = Xe.ReactCurrentDispatcher,
  Li = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  L = 0,
  J = null,
  Q = null,
  ee = 0,
  me = 0,
  Kt = ht(0),
  Y = 0,
  Xn = null,
  Pt = 0,
  gl = 0,
  Ii = 0,
  On = null,
  ce = null,
  zi = 0,
  ln = 1 / 0,
  $e = null,
  nl = !1,
  Wo = null,
  st = null,
  kr = !1,
  nt = null,
  rl = 0,
  Ln = 0,
  Ko = null,
  zr = -1,
  Mr = 0;
function ue() {
  return L & 6 ? K() : zr !== -1 ? zr : (zr = K());
}
function at(e) {
  return e.mode & 1
    ? L & 2 && ee !== 0
      ? ee & -ee
      : wd.transition !== null
      ? (Mr === 0 && (Mr = Ks()), Mr)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qs(e.type))),
        e)
    : 1;
}
function ze(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Ko = null), Error(y(185)));
  bn(e, n, r),
    (!(L & 2) || e !== J) &&
      (e === J && (!(L & 2) && (gl |= n), Y === 4 && et(e, ee)),
      he(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((ln = K() + 500), hl && mt()));
}
function he(e, t) {
  var n = e.callbackNode;
  wf(e, t);
  var r = $r(e, e === J ? ee : 0);
  if (r === 0)
    n !== null && ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ru(n), t === 1))
      e.tag === 0 ? gd(Xu.bind(null, e)) : ya(Xu.bind(null, e)),
        hd(function () {
          !(L & 6) && mt();
        }),
        (n = null);
    else {
      switch (Qs(r)) {
        case 1:
          n = oi;
          break;
        case 4:
          n = Vs;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Ws;
          break;
        default:
          n = Ur;
      }
      n = vc(n, ac.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ac(e, t) {
  if (((zr = -1), (Mr = 0), L & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n) return null;
  var r = $r(e, e === J ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var o = fc();
    (J !== e || ee !== t) && (($e = null), (ln = K() + 500), _t(e, t));
    do
      try {
        Ud();
        break;
      } catch (u) {
        cc(e, u);
      }
    while (!0);
    gi(),
      (tl.current = o),
      (L = l),
      Q !== null ? (t = 0) : ((J = null), (ee = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = go(e)), l !== 0 && ((r = l), (t = Qo(e, l)))), t === 1)
    )
      throw ((n = Xn), _t(e, 0), et(e, r), he(e, K()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !jd(l) &&
          ((t = ll(e, r)),
          t === 2 && ((o = go(e)), o !== 0 && ((r = o), (t = Qo(e, o)))),
          t === 1))
      )
        throw ((n = Xn), _t(e, 0), et(e, r), he(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ce, $e);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = zi + 500 - K()), 10 < t))
          ) {
            if ($r(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = xo(wt.bind(null, e, ce, $e), t);
            break;
          }
          wt(e, ce, $e);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ad(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xo(wt.bind(null, e, ce, $e), r);
            break;
          }
          wt(e, ce, $e);
          break;
        case 5:
          wt(e, ce, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, K()), e.callbackNode === n ? ac.bind(null, e) : null;
}
function Qo(e, t) {
  var n = On;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = ll(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Go(t)),
    e
  );
}
function Go(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function jd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~Ii,
      t &= ~gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xu(e) {
  if (L & 6) throw Error(y(327));
  Jt();
  var t = $r(e, 0);
  if (!(t & 1)) return he(e, K()), null;
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = go(e);
    r !== 0 && ((t = r), (n = Qo(e, r)));
  }
  if (n === 1) throw ((n = Xn), _t(e, 0), et(e, t), he(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, $e),
    he(e, K()),
    null
  );
}
function Mi(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && ((ln = K() + 500), hl && mt());
  }
}
function Rt(e) {
  nt !== null && nt.tag === 0 && !(L & 6) && Jt();
  var t = L;
  L |= 1;
  var n = Ce.transition,
    r = I;
  try {
    if (((Ce.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Ce.transition = n), (L = t), !(L & 6) && mt();
  }
}
function Di() {
  (me = Kt.current), D(Kt);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pd(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((mi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Kr();
          break;
        case 3:
          nn(), D(de), D(oe), Ci();
          break;
        case 5:
          _i(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          D(F);
          break;
        case 19:
          D(F);
          break;
        case 10:
          wi(r.type._context);
          break;
        case 22:
        case 23:
          Di();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Q = e = ct(e.current, null)),
    (ee = me = t),
    (Y = 0),
    (Xn = null),
    (Ii = gl = Pt = 0),
    (ce = On = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Et = null;
  }
  return e;
}
function cc(e, t) {
  do {
    var n = Q;
    try {
      if ((gi(), (Or.current = el), br)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        br = !1;
      }
      if (
        ((Tt = 0),
        (Z = G = U = null),
        (Pn = !1),
        (Qn = 0),
        (Li.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (Xn = t), (Q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Au(i);
          if (g !== null) {
            (g.flags &= -257),
              ju(g, i, u, o, t),
              g.mode & 1 && Du(o, c, t),
              (t = g),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Du(o, c, t), Ai();
              break e;
            }
            s = Error(y(426));
          }
        } else if (j && u.mode & 1) {
          var A = Au(i);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              ju(A, i, u, o, t),
              vi(rn(s, u));
            break e;
          }
        }
        (o = s = rn(s, u)),
          Y !== 4 && (Y = 2),
          On === null ? (On = [o]) : On.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ga(o, s, t);
              Pu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ya(o, u, t);
                Pu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pc(n);
    } catch (k) {
      (t = k), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fc() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function Ai() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    J === null || (!(Pt & 268435455) && !(gl & 268435455)) || et(J, ee);
}
function ll(e, t) {
  var n = L;
  L |= 2;
  var r = fc();
  (J !== e || ee !== t) && (($e = null), _t(e, t));
  do
    try {
      Fd();
      break;
    } catch (l) {
      cc(e, l);
    }
  while (!0);
  if ((gi(), (L = n), (tl.current = r), Q !== null)) throw Error(y(261));
  return (J = null), (ee = 0), Y;
}
function Fd() {
  for (; Q !== null; ) dc(Q);
}
function Ud() {
  for (; Q !== null && !cf(); ) dc(Q);
}
function dc(e) {
  var t = mc(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? pc(e) : (Q = t),
    (Li.current = null);
}
function pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Id(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (Q = null);
        return;
      }
    } else if (((n = Ld(n, t, me)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function wt(e, t, n) {
  var r = I,
    l = Ce.transition;
  try {
    (Ce.transition = null), (I = 1), $d(e, t, n, r);
  } finally {
    (Ce.transition = l), (I = r);
  }
  return null;
}
function $d(e, t, n, r) {
  do Jt();
  while (nt !== null);
  if (L & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Sf(e, o),
    e === J && ((Q = J = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      kr ||
      ((kr = !0),
      vc(Ur, function () {
        return Jt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var i = I;
    I = 1;
    var u = L;
    (L |= 4),
      (Li.current = null),
      Md(e, n),
      uc(n, e),
      id(Co),
      (Hr = !!_o),
      (Co = _o = null),
      (e.current = n),
      Dd(n),
      ff(),
      (L = u),
      (I = i),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (kr && ((kr = !1), (nt = e), (rl = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    hf(n.stateNode),
    he(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw ((nl = !1), (e = Wo), (Wo = null), e);
  return (
    rl & 1 && e.tag !== 0 && Jt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ko ? Ln++ : ((Ln = 0), (Ko = e))) : (Ln = 0),
    mt(),
    null
  );
}
function Jt() {
  if (nt !== null) {
    var e = Qs(rl),
      t = Ce.transition,
      n = I;
    try {
      if (((Ce.transition = null), (I = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (rl = 0), L & 6)) throw Error(y(331));
        var l = L;
        for (L |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (E = c; E !== null; ) {
                  var m = E;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (E = h);
                  else
                    for (; E !== null; ) {
                      m = E;
                      var p = m.sibling,
                        g = m.return;
                      if ((lc(m), m === c)) {
                        E = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (E = p);
                        break;
                      }
                      E = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var A = S.sibling;
                    (S.sibling = null), (S = A);
                  } while (S !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = a; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yl(9, u);
                  }
                } catch (k) {
                  B(u, u.return, k);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (E = v);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((L = l), mt(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Zu(e, t, n) {
  (t = rn(n, t)),
    (t = Ga(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ue()),
    e !== null && (bn(e, 1, t), he(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Ya(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ue()),
            t !== null && (bn(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (ee & n) === n &&
      (Y === 4 || (Y === 3 && (ee & 130023424) === ee && 500 > K() - zi)
        ? _t(e, 0)
        : (Ii |= n)),
    he(e, t);
}
function hc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = dr), (dr <<= 1), !(dr & 130023424) && (dr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ge(e, t)), e !== null && (bn(e, t, n), he(e, n));
}
function Bd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hc(e, n);
}
function Vd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), hc(e, n);
}
var mc;
mc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), Od(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), j && t.flags & 1048576 && ga(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ir(e, t), (e = t.pendingProps);
      var l = bt(t, oe.current);
      Zt(t, n), (l = xi(null, t, r, e, l, n));
      var o = Ti();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Qr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ei(t),
            (l.updater = ml),
            (t.stateNode = l),
            (l._reactInternals = t),
            zo(t, r, e, n),
            (t = Ao(null, t, r, !0, o, n)))
          : ((t.tag = 0), j && o && hi(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ir(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Kd(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Do(null, t, r, e, n);
            break e;
          case 1:
            t = $u(null, t, r, e, n);
            break e;
          case 11:
            t = Fu(null, t, r, e, n);
            break e;
          case 14:
            t = Uu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Do(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        $u(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((qa(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ka(e, t),
          Jr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = rn(Error(y(423)), t)), (t = Hu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(y(424)), t)), (t = Hu(e, t, r, n, l));
            break e;
          } else
            for (
              ve = it(t.stateNode.containerInfo.firstChild),
                ye = t,
                j = !0,
                Le = null,
                n = xa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Ye(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ta(t),
        e === null && Oo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        No(r, l) ? (i = null) : o !== null && No(r, o) && (t.flags |= 32),
        Ja(e, t),
        ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Oo(t), null;
    case 13:
      return ba(e, t, n);
    case 4:
      return (
        ki(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Fu(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          z(Xr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Me(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Lo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Lo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Uu(e, t, r, l, n)
      );
    case 15:
      return Xa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ir(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Qr(t)) : (e = !1),
        Zt(t, n),
        Ca(t, r, l),
        zo(t, r, l, n),
        Ao(null, t, r, !0, e, n)
      );
    case 19:
      return ec(e, t, n);
    case 22:
      return Za(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function vc(e, t) {
  return Bs(e, t);
}
function Wd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _e(e, t, n, r) {
  return new Wd(e, t, n, r);
}
function ji(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Kd(e) {
  if (typeof e == "function") return ji(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ni)) return 11;
    if (e === ri) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ji(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Dt:
        return Ct(n.children, l, o, t);
      case ti:
        (i = 8), (l |= 8);
        break;
      case no:
        return (
          (e = _e(12, n, t, l | 2)), (e.elementType = no), (e.lanes = o), e
        );
      case ro:
        return (e = _e(13, n, t, l)), (e.elementType = ro), (e.lanes = o), e;
      case lo:
        return (e = _e(19, n, t, l)), (e.elementType = lo), (e.lanes = o), e;
      case Ns:
        return wl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case _s:
              i = 10;
              break e;
            case Cs:
              i = 9;
              break e;
            case ni:
              i = 11;
              break e;
            case ri:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ct(e, t, n, r) {
  return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function wl(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = Ns),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jl(e, t, n) {
  return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function ql(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Il(0)),
    (this.expirationTimes = Il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Qd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = _e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ei(o),
    e
  );
}
function Gd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function yc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return va(e, n, t);
  }
  return t;
}
function gc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Fi(n, r, !0, e, l, o, i, u, s)),
    (e.context = yc(null)),
    (n = e.current),
    (r = ue()),
    (l = at(n)),
    (o = We(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    bn(e, l, r),
    he(e, r),
    e
  );
}
function Sl(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = at(l);
  return (
    (n = yc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (ze(e, l, i, o), Rr(e, l, i)),
    i
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ui(e, t) {
  Ju(e, t), (e = e.alternate) && Ju(e, t);
}
function Yd() {
  return null;
}
var wc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $i(e) {
  this._internalRoot = e;
}
El.prototype.render = $i.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  Sl(e, t, null, null);
};
El.prototype.unmount = $i.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function () {
      Sl(null, e, null, null);
    }),
      (t[Qe] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Js(e);
  }
};
function Hi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qu() {}
function Xd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ol(i);
        o.call(c);
      };
    }
    var i = gc(t, r, e, 0, null, !1, !1, "", qu);
    return (
      (e._reactRootContainer = i),
      (e[Qe] = i.current),
      Hn(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ol(s);
      u.call(c);
    };
  }
  var s = Fi(e, 0, !1, null, null, !1, !1, "", qu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      Sl(t, s, n, r);
    }),
    s
  );
}
function _l(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ol(i);
        u.call(s);
      };
    }
    Sl(t, i, e, l);
  } else i = Xd(n, t, e, l, r);
  return ol(i);
}
Gs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = En(t.pendingLanes);
        n !== 0 &&
          (ii(t, n | 1), he(t, K()), !(L & 6) && ((ln = K() + 500), mt()));
      }
      break;
    case 13:
      Rt(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ue();
          ze(r, e, 1, l);
        }
      }),
        Ui(e, 1);
  }
};
ui = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = ue();
      ze(t, e, 134217728, n);
    }
    Ui(e, 134217728);
  }
};
Ys = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = ue();
      ze(n, e, t, r);
    }
    Ui(e, t);
  }
};
Xs = function () {
  return I;
};
Zs = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
mo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((uo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = pl(r);
            if (!l) throw Error(y(90));
            Ts(r), uo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
As = Mi;
js = Rt;
var Zd = { usingClientEntryPoint: !1, Events: [tr, Ut, pl, Ms, Ds, Mi] },
  gn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Jd = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Yd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_r.isDisabled && _r.supportsFiber)
    try {
      (al = _r.inject(Jd)), (Fe = _r);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zd;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hi(t)) throw Error(y(200));
  return Gd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Hi(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = wc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qe] = t.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    new $i(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = $s(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Rt(e);
};
we.hydrate = function (e, t, n) {
  if (!kl(t)) throw Error(y(200));
  return _l(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Hi(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = wc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = gc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Qe] = t.current),
    Hn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new El(t);
};
we.render = function (e, t, n) {
  if (!kl(t)) throw Error(y(200));
  return _l(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!kl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Rt(function () {
        _l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Mi;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!kl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return _l(e, t, n, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function Sc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc);
    } catch (e) {
      console.error(e);
    }
}
Sc(), (gs.exports = we);
var qd = gs.exports,
  bu = qd;
(eo.createRoot = bu.createRoot), (eo.hydrateRoot = bu.hydrateRoot);
function bd(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function ep(e) {
  return bd(e).getDay();
}
/**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var tp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Bi = (e, t) => {
    const n = b.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: u = "",
          children: s,
          ...c
        },
        m
      ) =>
        b.createElement(
          "svg",
          {
            ref: m,
            ...tp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${np(e)}`, u].join(" "),
            ...c,
          },
          [
            ...t.map(([h, p]) => b.createElement(h, p)),
            ...(Array.isArray(s) ? s : [s]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = Bi("BellPlus", [
  [
    "path",
    {
      d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",
      key: "guizqy",
    },
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }],
  ["path", { d: "M18 5v6", key: "g5ayrv" }],
]);
/**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lp = Bi("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.343.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const op = Bi("Sparkles", [
    [
      "path",
      {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn",
      },
    ],
    ["path", { d: "M5 3v4", key: "bklmnn" }],
    ["path", { d: "M19 17v4", key: "iiml17" }],
    ["path", { d: "M3 5h4", key: "nem4j1" }],
    ["path", { d: "M17 19h4", key: "lbex7p" }],
  ]),
  ip = () => {
    Notification.requestPermission((e) => {
      e === "granted" && up();
    });
  };
function up() {
  let e = "Você ativou as notificações.",
    t = "./src/assets/bell-ring.svg",
    n = "Você será lembrado do debate na sexta-feira!",
    r = new Notification(e, { body: n, icon: t });
  r.onclick = () => {
    r.close(), window.parent.focus();
  };
}
function sp() {
  const [e, t] = b.useState(!1),
    [n, r] = b.useState("Me lembre!"),
    [l, o] = b.useState("bg-slate-600"),
    [i, u] = b.useState(H.jsx(rp, { className: "text-white" })),
    s = () => {
      e ||
        (ip(),
        t(!0),
        r("Lembrete ativado!"),
        o("bg-slate-800"),
        u(H.jsx(lp, { className: "text-white" })));
    };
  return H.jsxs("button", {
    onClick: s,
    className: `flex p-3 space-x-2 rounded-full focus:outline-none focus:ring focus:ring-violet-800 font-Inter ${l} transition-all duration-300`,
    children: [i, H.jsx("span", { className: "text-white", children: n })],
  });
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var es;
(function (e) {
  (e.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED"),
    (e.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH"),
    (e.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT"),
    (e.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT"),
    (e.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT");
})(es || (es = {}));
var ts;
(function (e) {
  (e.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED"),
    (e.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
    (e.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
    (e.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
    (e.BLOCK_NONE = "BLOCK_NONE");
})(ts || (ts = {}));
var ns;
(function (e) {
  (e.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED"),
    (e.NEGLIGIBLE = "NEGLIGIBLE"),
    (e.LOW = "LOW"),
    (e.MEDIUM = "MEDIUM"),
    (e.HIGH = "HIGH");
})(ns || (ns = {}));
var rs;
(function (e) {
  (e.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"),
    (e.SAFETY = "SAFETY"),
    (e.OTHER = "OTHER");
})(rs || (rs = {}));
var il;
(function (e) {
  (e.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED"),
    (e.STOP = "STOP"),
    (e.MAX_TOKENS = "MAX_TOKENS"),
    (e.SAFETY = "SAFETY"),
    (e.RECITATION = "RECITATION"),
    (e.OTHER = "OTHER");
})(il || (il = {}));
var ls;
(function (e) {
  (e.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED"),
    (e.RETRIEVAL_QUERY = "RETRIEVAL_QUERY"),
    (e.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT"),
    (e.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY"),
    (e.CLASSIFICATION = "CLASSIFICATION"),
    (e.CLUSTERING = "CLUSTERING");
})(ls || (ls = {}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zn extends Error {
  constructor(t) {
    super(`[GoogleGenerativeAI Error]: ${t}`);
  }
}
class os extends Zn {
  constructor(t, n) {
    super(t), (this.response = n);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ap = "https://generativelanguage.googleapis.com",
  cp = "v1",
  fp = "0.2.1",
  dp = "genai-js";
var Ot;
(function (e) {
  (e.GENERATE_CONTENT = "generateContent"),
    (e.STREAM_GENERATE_CONTENT = "streamGenerateContent"),
    (e.COUNT_TOKENS = "countTokens"),
    (e.EMBED_CONTENT = "embedContent"),
    (e.BATCH_EMBED_CONTENTS = "batchEmbedContents");
})(Ot || (Ot = {}));
class rr {
  constructor(t, n, r, l) {
    (this.model = t), (this.task = n), (this.apiKey = r), (this.stream = l);
  }
  toString() {
    let t = `${ap}/${cp}/${this.model}:${this.task}`;
    return this.stream && (t += "?alt=sse"), t;
  }
}
function pp() {
  return `${dp}/${fp}`;
}
async function lr(e, t, n) {
  let r;
  try {
    if (
      ((r = await fetch(
        e.toString(),
        Object.assign(Object.assign({}, hp(n)), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-client": pp(),
            "x-goog-api-key": e.apiKey,
          },
          body: t,
        })
      )),
      !r.ok)
    ) {
      let l = "";
      try {
        const o = await r.json();
        (l = o.error.message),
          o.error.details && (l += ` ${JSON.stringify(o.error.details)}`);
      } catch {}
      throw new Error(`[${r.status} ${r.statusText}] ${l}`);
    }
  } catch (l) {
    const o = new Zn(`Error fetching from ${e.toString()}: ${l.message}`);
    throw ((o.stack = l.stack), o);
  }
  return r;
}
function hp(e) {
  const t = {};
  if ((e == null ? void 0 : e.timeout) >= 0) {
    const n = new AbortController(),
      r = n.signal;
    setTimeout(() => n.abort(), e.timeout), (t.signal = r);
  }
  return t;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vi(e) {
  return (
    (e.text = () => {
      if (e.candidates && e.candidates.length > 0) {
        if (
          (e.candidates.length > 1 &&
            console.warn(
              `This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`
            ),
          Ec(e.candidates[0]))
        )
          throw new os(`${ul(e)}`, e);
        return mp(e);
      } else if (e.promptFeedback)
        throw new os(`Text not available. ${ul(e)}`, e);
      return "";
    }),
    e
  );
}
function mp(e) {
  var t, n, r, l;
  return !(
    (l =
      (r =
        (n =
          (t = e.candidates) === null || t === void 0
            ? void 0
            : t[0].content) === null || n === void 0
          ? void 0
          : n.parts) === null || r === void 0
        ? void 0
        : r[0]) === null || l === void 0
  ) && l.text
    ? e.candidates[0].content.parts[0].text
    : "";
}
const vp = [il.RECITATION, il.SAFETY];
function Ec(e) {
  return !!e.finishReason && vp.includes(e.finishReason);
}
function ul(e) {
  var t, n, r;
  let l = "";
  if ((!e.candidates || e.candidates.length === 0) && e.promptFeedback)
    (l += "Response was blocked"),
      !((t = e.promptFeedback) === null || t === void 0) &&
        t.blockReason &&
        (l += ` due to ${e.promptFeedback.blockReason}`),
      !((n = e.promptFeedback) === null || n === void 0) &&
        n.blockReasonMessage &&
        (l += `: ${e.promptFeedback.blockReasonMessage}`);
  else if (!((r = e.candidates) === null || r === void 0) && r[0]) {
    const o = e.candidates[0];
    Ec(o) &&
      ((l += `Candidate was blocked due to ${o.finishReason}`),
      o.finishMessage && (l += `: ${o.finishMessage}`));
  }
  return l;
}
function Jn(e) {
  return this instanceof Jn ? ((this.v = e), this) : new Jn(e);
}
function yp(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    l,
    o = [];
  return (
    (l = {}),
    i("next"),
    i("throw"),
    i("return"),
    (l[Symbol.asyncIterator] = function () {
      return this;
    }),
    l
  );
  function i(p) {
    r[p] &&
      (l[p] = function (g) {
        return new Promise(function (w, S) {
          o.push([p, g, w, S]) > 1 || u(p, g);
        });
      });
  }
  function u(p, g) {
    try {
      s(r[p](g));
    } catch (w) {
      h(o[0][3], w);
    }
  }
  function s(p) {
    p.value instanceof Jn
      ? Promise.resolve(p.value.v).then(c, m)
      : h(o[0][2], p);
  }
  function c(p) {
    u("next", p);
  }
  function m(p) {
    u("throw", p);
  }
  function h(p, g) {
    p(g), o.shift(), o.length && u(o[0][0], o[0][1]);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const is = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
function gp(e) {
  const t = e.body.pipeThrough(new TextDecoderStream("utf8", { fatal: !0 })),
    n = Ep(t),
    [r, l] = n.tee();
  return { stream: Sp(r), response: wp(l) };
}
async function wp(e) {
  const t = [],
    n = e.getReader();
  for (;;) {
    const { done: r, value: l } = await n.read();
    if (r) return Vi(kp(t));
    t.push(l);
  }
}
function Sp(e) {
  return yp(this, arguments, function* () {
    const n = e.getReader();
    for (;;) {
      const { value: r, done: l } = yield Jn(n.read());
      if (l) break;
      yield yield Jn(Vi(r));
    }
  });
}
function Ep(e) {
  const t = e.getReader();
  return new ReadableStream({
    start(r) {
      let l = "";
      return o();
      function o() {
        return t.read().then(({ value: i, done: u }) => {
          if (u) {
            if (l.trim()) {
              r.error(new Zn("Failed to parse stream"));
              return;
            }
            r.close();
            return;
          }
          l += i;
          let s = l.match(is),
            c;
          for (; s; ) {
            try {
              c = JSON.parse(s[1]);
            } catch {
              r.error(new Zn(`Error parsing JSON response: "${s[1]}"`));
              return;
            }
            r.enqueue(c), (l = l.substring(s[0].length)), (s = l.match(is));
          }
          return o();
        });
      }
    },
  });
}
function kp(e) {
  const t = e[e.length - 1],
    n = { promptFeedback: t == null ? void 0 : t.promptFeedback };
  for (const r of e)
    if (r.candidates)
      for (const l of r.candidates) {
        const o = l.index;
        if (
          (n.candidates || (n.candidates = []),
          n.candidates[o] || (n.candidates[o] = { index: l.index }),
          (n.candidates[o].citationMetadata = l.citationMetadata),
          (n.candidates[o].finishReason = l.finishReason),
          (n.candidates[o].finishMessage = l.finishMessage),
          (n.candidates[o].safetyRatings = l.safetyRatings),
          l.content && l.content.parts)
        ) {
          n.candidates[o].content ||
            (n.candidates[o].content = {
              role: l.content.role || "user",
              parts: [{ text: "" }],
            });
          for (const i of l.content.parts)
            i.text && (n.candidates[o].content.parts[0].text += i.text);
        }
      }
  return n;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function kc(e, t, n, r) {
  const l = new rr(t, Ot.STREAM_GENERATE_CONTENT, e, !0),
    o = await lr(l, JSON.stringify(n), r);
  return gp(o);
}
async function _c(e, t, n, r) {
  const l = new rr(t, Ot.GENERATE_CONTENT, e, !1),
    i = await (await lr(l, JSON.stringify(n), r)).json();
  return { response: Vi(i) };
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function In(e, t) {
  let n = [];
  if (typeof e == "string") n = [{ text: e }];
  else
    for (const r of e) typeof r == "string" ? n.push({ text: r }) : n.push(r);
  return { role: t, parts: n };
}
function bl(e) {
  return e.contents ? e : { contents: [In(e, "user")] };
}
function _p(e) {
  return typeof e == "string" || Array.isArray(e)
    ? { content: In(e, "user") }
    : e;
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const us = "SILENT_ERROR";
class Cp {
  constructor(t, n, r, l) {
    (this.model = n),
      (this.params = r),
      (this.requestOptions = l),
      (this._history = []),
      (this._sendPromise = Promise.resolve()),
      (this._apiKey = t),
      r != null &&
        r.history &&
        (this._history = r.history.map((o) => {
          if (!o.role)
            throw new Error(
              "Missing role for history item: " + JSON.stringify(o)
            );
          return In(o.parts, o.role);
        }));
  }
  async getHistory() {
    return await this._sendPromise, this._history;
  }
  async sendMessage(t) {
    var n, r;
    await this._sendPromise;
    const l = In(t, "user"),
      o = {
        safetySettings:
          (n = this.params) === null || n === void 0
            ? void 0
            : n.safetySettings,
        generationConfig:
          (r = this.params) === null || r === void 0
            ? void 0
            : r.generationConfig,
        contents: [...this._history, l],
      };
    let i;
    return (
      (this._sendPromise = this._sendPromise
        .then(() => _c(this._apiKey, this.model, o, this.requestOptions))
        .then((u) => {
          var s;
          if (u.response.candidates && u.response.candidates.length > 0) {
            this._history.push(l);
            const c = Object.assign(
              { parts: [], role: "model" },
              (s = u.response.candidates) === null || s === void 0
                ? void 0
                : s[0].content
            );
            this._history.push(c);
          } else {
            const c = ul(u.response);
            c &&
              console.warn(
                `sendMessage() was unsuccessful. ${c}. Inspect response object for details.`
              );
          }
          i = u;
        })),
      await this._sendPromise,
      i
    );
  }
  async sendMessageStream(t) {
    var n, r;
    await this._sendPromise;
    const l = In(t, "user"),
      o = {
        safetySettings:
          (n = this.params) === null || n === void 0
            ? void 0
            : n.safetySettings,
        generationConfig:
          (r = this.params) === null || r === void 0
            ? void 0
            : r.generationConfig,
        contents: [...this._history, l],
      },
      i = kc(this._apiKey, this.model, o, this.requestOptions);
    return (
      (this._sendPromise = this._sendPromise
        .then(() => i)
        .catch((u) => {
          throw new Error(us);
        })
        .then((u) => u.response)
        .then((u) => {
          if (u.candidates && u.candidates.length > 0) {
            this._history.push(l);
            const s = Object.assign({}, u.candidates[0].content);
            s.role || (s.role = "model"), this._history.push(s);
          } else {
            const s = ul(u);
            s &&
              console.warn(
                `sendMessageStream() was unsuccessful. ${s}. Inspect response object for details.`
              );
          }
        })
        .catch((u) => {
          u.message !== us && console.error(u);
        })),
      i
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Np(e, t, n, r) {
  const l = new rr(t, Ot.COUNT_TOKENS, e, !1);
  return (
    await lr(
      l,
      JSON.stringify(Object.assign(Object.assign({}, n), { model: t })),
      r
    )
  ).json();
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xp(e, t, n, r) {
  const l = new rr(t, Ot.EMBED_CONTENT, e, !1);
  return (await lr(l, JSON.stringify(n), r)).json();
}
async function Tp(e, t, n, r) {
  const l = new rr(t, Ot.BATCH_EMBED_CONTENTS, e, !1),
    o = n.requests.map((u) =>
      Object.assign(Object.assign({}, u), { model: t })
    );
  return (await lr(l, JSON.stringify({ requests: o }), r)).json();
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pp {
  constructor(t, n, r) {
    (this.apiKey = t),
      n.model.includes("/")
        ? (this.model = n.model)
        : (this.model = `models/${n.model}`),
      (this.generationConfig = n.generationConfig || {}),
      (this.safetySettings = n.safetySettings || []),
      (this.requestOptions = r || {});
  }
  async generateContent(t) {
    const n = bl(t);
    return _c(
      this.apiKey,
      this.model,
      Object.assign(
        {
          generationConfig: this.generationConfig,
          safetySettings: this.safetySettings,
        },
        n
      ),
      this.requestOptions
    );
  }
  async generateContentStream(t) {
    const n = bl(t);
    return kc(
      this.apiKey,
      this.model,
      Object.assign(
        {
          generationConfig: this.generationConfig,
          safetySettings: this.safetySettings,
        },
        n
      ),
      this.requestOptions
    );
  }
  startChat(t) {
    return new Cp(this.apiKey, this.model, t, this.requestOptions);
  }
  async countTokens(t) {
    const n = bl(t);
    return Np(this.apiKey, this.model, n);
  }
  async embedContent(t) {
    const n = _p(t);
    return xp(this.apiKey, this.model, n);
  }
  async batchEmbedContents(t) {
    return Tp(this.apiKey, this.model, t, this.requestOptions);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rp {
  constructor(t) {
    this.apiKey = t;
  }
  getGenerativeModel(t, n) {
    if (!t.model)
      throw new Zn(
        "Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })"
      );
    return new Pp(this.apiKey, t, n);
  }
}
const Op = "AIzaSyAsZogl6HK9Lsc7csx5MEEDO6BmKYajVuk",
  Lp = new Rp(Op);
async function Ip() {
  return (
    await (
      await Lp.getGenerativeModel({ model: "gemini-pro" }).generateContent(
        "Quero criar um debate com minha namorada. Escolha um tema atual e polêmico e interessante que seja possível debater sobre. Apenas um título. Evite temas sobre inteligência artificial. Evite colocar o caractere *"
      )
    ).response
  ).text();
}
const zp = () => {
  let e = "Hoje é dia de debate!",
    t = "Clique na notificação para descobrir qual o tema de hoje!",
    n = new Notification(e, { body: t });
  n.onclick = () => {
    n.close(), window.parent.focus();
  };
};
function Mp() {
  const t = ep(new Date()),
    [n, r] = b.useState(!1);
  return (
    b.useEffect(() => {
      const l = localStorage.getItem("hasNotificationSentToday");
      t === 5 &&
        !n &&
        !l &&
        (zp(), r(!0), localStorage.setItem("hasNotificationSentToday", "true"));
    }),
    t < 5 ? ` ${5 - t}` : t === 5 ? "" : `${5 + (7 - t)}`
  );
}
function Dp() {
  const [e, t] = b.useState(""),
    [n, r] = b.useState(""),
    [l, o] = b.useState(!1),
    i = Mp();
  return (
    b.useEffect(() => {
      const u = localStorage.getItem("generatedNewsHeadline");
      if (Number(i) === 0 && !l)
        if (u) t(u);
        else {
          async function s() {
            try {
              const c = await Ip();
              t(c), localStorage.setItem("generatedNewsHeadline", c);
            } catch (c) {
              console.log("Erro ao fazer o fetch da noticia: ", c);
            }
          }
          s(), o(!0), localStorage.setItem("hasTitleBeenGenerated", "true");
        }
    }, [i, l]),
    b.useEffect(() => {
      Number(i) === 0 ? r("HOJE É DIA DE DEBATE!") : r("PRÓXIMO DEBATE EM:");
    }),
    H.jsxs("div", {
      className:
        "min-h-screen flex flex-col justify-center items-center space-y-10 text-white antialiased font-Inter font-semibold",
      children: [
        H.jsx("img", {
          src: "../public/dDMF-B7pj9KfB.svg",
          alt: " logo da página",
        }),
        H.jsx("h1", { className: "text-4xl", children: n }),
        H.jsx("div", {
          className:
            "flex bg-slate-800 w-auto h-auto p-5 justify-center items-center rounded",
          children:
            Number(i) === 0
              ? H.jsx("div", {
                  children: e
                    ? H.jsx("div", {
                        children: H.jsxs("h3", {
                          className: "flex text-2xl gap-2",
                          children: [H.jsx(op, {}), e],
                        }),
                      })
                    : H.jsx("p", {
                        className: " text-2xl",
                        children: "Carregando título da notícia...",
                      }),
                })
              : H.jsxs("div", {
                  children: [
                    H.jsx("h2", { className: "text-6xl", children: i }),
                    H.jsx("h3", { className: "ml-0.5", children: "DIAS" }),
                  ],
                }),
        }),
        H.jsx("div", { children: H.jsx(sp, {}) }),
        H.jsx("div", {
          children: H.jsx("p", {
            children: "Made with ❤ by Felipe Cavalcanti and Maria Clara",
          }),
        }),
      ],
    })
  );
}
eo.createRoot(document.getElementById("root")).render(
  H.jsx(Hc.StrictMode, { children: H.jsx(Dp, {}) })
);
