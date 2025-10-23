var io = t => {
    throw TypeError(t)
}
;
var Cs = (t, e, n) => e.has(t) || io("Cannot " + n);
var E = (t, e, n) => (Cs(t, e, "read from private field"),
n ? n.call(t) : e.get(t))
  , ae = (t, e, n) => e.has(t) ? io("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n)
  , te = (t, e, n, i) => (Cs(t, e, "write to private field"),
i ? i.call(t, n) : e.set(t, n),
n)
  , Ue = (t, e, n) => (Cs(t, e, "access private method"),
n);
var Si = (t, e, n, i) => ({
    set _(s) {
        te(t, e, s, n)
    },
    get _() {
        return E(t, e, i)
    }
});
import {P as $, W as zi, h as kl, g as Il, e as Ws, d as Ml, c as Rl, a as Al, f as jl, i as Gt, A as bn, j as Ma, k as Pl, C as wr, l as so, m as ro, n as bs, o as El, p as Hs, q as Ll, r as Tl, s as Dl, t as Fl, u as Nl, v as Bl, w as zl, x as Qi, y as Ol, z as Li, B as $l, D as Ul, E as Wl} from "./backendUrl-JTRS_kt1.js";
import {b as oo, p as Hl} from "./___vite-browser-external_commonjs-proxy-6ZTq1dOW.js";
import {r as C, R as Vt, j as l} from "./client-Ckw6QIE1.js";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @lightSyntaxTransform
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 */
var Gl = Object.create
  , Xi = Object.defineProperty
  , Vl = Object.getOwnPropertyDescriptor
  , ql = Object.getOwnPropertyNames
  , Kl = Object.getPrototypeOf
  , Zl = Object.prototype.hasOwnProperty
  , Yl = (t, e) => {
    for (var n in e)
        Xi(t, n, {
            get: e[n],
            enumerable: !0
        })
}
  , Ra = (t, e, n, i) => {
    if (e && typeof e == "object" || typeof e == "function")
        for (let s of ql(e))
            !Zl.call(t, s) && s !== n && Xi(t, s, {
                get: () => e[s],
                enumerable: !(i = Vl(e, s)) || i.enumerable
            });
    return t
}
  , Ql = (t, e, n) => (n = t != null ? Gl(Kl(t)) : {},
Ra(!t || !t.__esModule ? Xi(n, "default", {
    value: t,
    enumerable: !0
}) : n, t))
  , Xl = t => Ra(Xi({}, "__esModule", {
    value: !0
}), t)
  , Aa = {};
Yl(Aa, {
    $dispatcherGuard: () => n0,
    $makeReadOnly: () => s0,
    $reset: () => i0,
    $structuralCheck: () => c0,
    c: () => t0,
    clearRenderCounterRegistry: () => r0,
    renderCounterRegistry: () => Qn,
    useRenderCounter: () => l0
});
var Be = Xl(Aa), wn = Ql(C), {useRef: Jl, useEffect: e0, isValidElement: fn} = wn, ao, Gs = (ao = wn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) != null ? ao : wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vs = Symbol.for("react.memo_cache_sentinel"), lo, t0 = typeof ((lo = wn.__COMPILER_RUNTIME) == null ? void 0 : lo.c) == "function" ? wn.__COMPILER_RUNTIME.c : function(e) {
    return wn.useMemo( () => {
        const n = new Array(e);
        for (let i = 0; i < e; i++)
            n[i] = Vs;
        return n[Vs] = !0,
        n
    }
    , [])
}
, Oi = {};
["readContext", "useCallback", "useContext", "useEffect", "useImperativeHandle", "useInsertionEffect", "useLayoutEffect", "useMemo", "useReducer", "useRef", "useState", "useDebugValue", "useDeferredValue", "useTransition", "useMutableSource", "useSyncExternalStore", "useId", "unstable_isNewReconciler", "getCacheSignal", "getCacheForType", "useCacheRefresh"].forEach(t => {
    Oi[t] = () => {
        throw new Error(`[React] Unexpected React hook call (${t}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)
    }
}
);
var Kn = null;
Oi.useMemoCache = t => {
    if (Kn == null)
        throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");
    return Kn.useMemoCache(t)
}
;
function _i(t) {
    return Gs.ReactCurrentDispatcher.current = t,
    Gs.ReactCurrentDispatcher.current
}
var mn = [];
function n0(t) {
    const e = Gs.ReactCurrentDispatcher.current;
    if (t === 0) {
        if (mn.push(e),
        mn.length === 1 && (Kn = e),
        e === Oi)
            throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");
        _i(Oi)
    } else if (t === 1) {
        const n = mn.pop();
        if (n == null)
            throw new Error("React Compiler internal error: unexpected null in guard stack");
        mn.length === 0 && (Kn = null),
        _i(n)
    } else if (t === 2)
        mn.push(e),
        _i(Kn);
    else if (t === 3) {
        const n = mn.pop();
        if (n == null)
            throw new Error("React Compiler internal error: unexpected null in guard stack");
        _i(n)
    } else
        throw new Error("React Compiler internal error: unreachable block" + t)
}
function i0(t) {
    for (let e = 0; e < t.length; e++)
        t[e] = Vs
}
function s0() {
    throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")
}
var Qn = new Map;
function r0() {
    for (const t of Qn.values())
        t.forEach(e => {
            e.count = 0
        }
        )
}
function o0(t, e) {
    let n = Qn.get(t);
    n == null && (n = new Set,
    Qn.set(t, n)),
    n.add(e)
}
function a0(t, e) {
    const n = Qn.get(t);
    n != null && n.delete(e)
}
function l0(t) {
    const e = Jl(null);
    e.current != null && (e.current.count += 1),
    e0( () => {
        if (e.current == null) {
            const n = {
                count: 0
            };
            o0(t, n),
            e.current = n
        }
        return () => {
            e.current !== null && a0(t, e.current)
        }
    }
    )
}
var co = new Set;
function c0(t, e, n, i, s, r) {
    function o(u, d, h, f) {
        const m = `${i}:${r} [${s}] ${n}${h} changed from ${u} to ${d} at depth ${f}`;
        co.has(m) || (co.add(m),
        console.error(m))
    }
    const a = 2;
    function c(u, d, h, f) {
        if (!(f > a)) {
            if (u === d)
                return;
            if (typeof u != typeof d)
                o(`type ${typeof u}`, `type ${typeof d}`, h, f);
            else if (typeof u == "object") {
                const m = Array.isArray(u)
                  , g = Array.isArray(d);
                if (u === null && d !== null)
                    o("null", `type ${typeof d}`, h, f);
                else if (d === null)
                    o(`type ${typeof u}`, "null", h, f);
                else if (u instanceof Map)
                    if (!(d instanceof Map))
                        o("Map instance", "other value", h, f);
                    else if (u.size !== d.size)
                        o(`Map instance with size ${u.size}`, `Map instance with size ${d.size}`, h, f);
                    else
                        for (const [p,v] of u)
                            d.has(p) ? c(v, d.get(p), `${h}.get(${p})`, f + 1) : o(`Map instance with key ${p}`, `Map instance without key ${p}`, h, f);
                else if (d instanceof Map)
                    o("other value", "Map instance", h, f);
                else if (u instanceof Set)
                    if (!(d instanceof Set))
                        o("Set instance", "other value", h, f);
                    else if (u.size !== d.size)
                        o(`Set instance with size ${u.size}`, `Set instance with size ${d.size}`, h, f);
                    else
                        for (const p of d)
                            u.has(p) || o(`Set instance without element ${p}`, `Set instance with element ${p}`, h, f);
                else if (d instanceof Set)
                    o("other value", "Set instance", h, f);
                else if (m || g)
                    if (m !== g)
                        o(`type ${m ? "array" : "object"}`, `type ${g ? "array" : "object"}`, h, f);
                    else if (u.length !== d.length)
                        o(`array with length ${u.length}`, `array with length ${d.length}`, h, f);
                    else
                        for (let p = 0; p < u.length; p++)
                            c(u[p], d[p], `${h}[${p}]`, f + 1);
                else if (fn(u) || fn(d))
                    fn(u) !== fn(d) ? o(`type ${fn(u) ? "React element" : "object"}`, `type ${fn(d) ? "React element" : "object"}`, h, f) : u.type !== d.type ? o(`React element of type ${u.type}`, `React element of type ${d.type}`, h, f) : c(u.props, d.props, `[props of ${h}]`, f + 1);
                else {
                    for (const p in d)
                        p in u || o(`object without key ${p}`, `object with key ${p}`, h, f);
                    for (const p in u)
                        p in d ? c(u[p], d[p], `${h}.${p}`, f + 1) : o(`object with key ${p}`, `object without key ${p}`, h, f)
                }
            } else {
                if (typeof u == "function")
                    return;
                isNaN(u) || isNaN(d) ? isNaN(u) !== isNaN(d) && o(`${isNaN(u) ? "NaN" : "non-NaN value"}`, `${isNaN(d) ? "NaN" : "non-NaN value"}`, h, f) : u !== d && o(u, d, h, f)
            }
        }
    }
    c(t, e, "", 0)
}
var Sr = {};
Object.defineProperty(Sr, "__esModule", {
    value: !0
});
Sr.parse = g0;
Sr.serialize = y0;
const u0 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/
  , d0 = /^[\u0021-\u003A\u003C-\u007E]*$/
  , h0 = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
  , f0 = /^[\u0020-\u003A\u003D-\u007E]*$/
  , m0 = Object.prototype.toString
  , p0 = ( () => {
    const t = function() {};
    return t.prototype = Object.create(null),
    t
}
)();
function g0(t, e) {
    const n = new p0
      , i = t.length;
    if (i < 2)
        return n;
    const s = (e == null ? void 0 : e.decode) || v0;
    let r = 0;
    do {
        const o = t.indexOf("=", r);
        if (o === -1)
            break;
        const a = t.indexOf(";", r)
          , c = a === -1 ? i : a;
        if (o > c) {
            r = t.lastIndexOf(";", o - 1) + 1;
            continue
        }
        const u = uo(t, r, o)
          , d = ho(t, o, u)
          , h = t.slice(u, d);
        if (n[h] === void 0) {
            let f = uo(t, o + 1, c)
              , m = ho(t, c, f);
            const g = s(t.slice(f, m));
            n[h] = g
        }
        r = c + 1
    } while (r < i);
    return n
}
function uo(t, e, n) {
    do {
        const i = t.charCodeAt(e);
        if (i !== 32 && i !== 9)
            return e
    } while (++e < n);
    return n
}
function ho(t, e, n) {
    for (; e > n; ) {
        const i = t.charCodeAt(--e);
        if (i !== 32 && i !== 9)
            return e + 1
    }
    return n
}
function y0(t, e, n) {
    const i = (n == null ? void 0 : n.encode) || encodeURIComponent;
    if (!u0.test(t))
        throw new TypeError(`argument name is invalid: ${t}`);
    const s = i(e);
    if (!d0.test(s))
        throw new TypeError(`argument val is invalid: ${e}`);
    let r = t + "=" + s;
    if (!n)
        return r;
    if (n.maxAge !== void 0) {
        if (!Number.isInteger(n.maxAge))
            throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
        r += "; Max-Age=" + n.maxAge
    }
    if (n.domain) {
        if (!h0.test(n.domain))
            throw new TypeError(`option domain is invalid: ${n.domain}`);
        r += "; Domain=" + n.domain
    }
    if (n.path) {
        if (!f0.test(n.path))
            throw new TypeError(`option path is invalid: ${n.path}`);
        r += "; Path=" + n.path
    }
    if (n.expires) {
        if (!x0(n.expires) || !Number.isFinite(n.expires.valueOf()))
            throw new TypeError(`option expires is invalid: ${n.expires}`);
        r += "; Expires=" + n.expires.toUTCString()
    }
    if (n.httpOnly && (r += "; HttpOnly"),
    n.secure && (r += "; Secure"),
    n.partitioned && (r += "; Partitioned"),
    n.priority)
        switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
        case "low":
            r += "; Priority=Low";
            break;
        case "medium":
            r += "; Priority=Medium";
            break;
        case "high":
            r += "; Priority=High";
            break;
        default:
            throw new TypeError(`option priority is invalid: ${n.priority}`)
        }
    if (n.sameSite)
        switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
        case !0:
        case "strict":
            r += "; SameSite=Strict";
            break;
        case "lax":
            r += "; SameSite=Lax";
            break;
        case "none":
            r += "; SameSite=None";
            break;
        default:
            throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)
        }
    return r
}
function v0(t) {
    if (t.indexOf("%") === -1)
        return t;
    try {
        return decodeURIComponent(t)
    } catch {
        return t
    }
}
function x0(t) {
    return m0.call(t) === "[object Date]"
}
var fo = "popstate";
function C0(t={}) {
    function e(i, s) {
        let {pathname: r, search: o, hash: a} = i.location;
        return qs("", {
            pathname: r,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }
    function n(i, s) {
        return typeof s == "string" ? s : Xn(s)
    }
    return w0(e, n, null, t)
}
function ye(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function ft(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function b0() {
    return Math.random().toString(36).substring(2, 10)
}
function mo(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function qs(t, e, n=null, i) {
    return {
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: "",
        ...typeof e == "string" ? Nn(e) : e,
        state: n,
        key: e && e.key || i || b0()
    }
}
function Xn({pathname: t="/", search: e="", hash: n=""}) {
    return e && e !== "?" && (t += e.charAt(0) === "?" ? e : "?" + e),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function Nn(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substring(n),
        t = t.substring(0, n));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substring(i),
        t = t.substring(0, i)),
        t && (e.pathname = t)
    }
    return e
}
function w0(t, e, n, i={}) {
    let {window: s=document.defaultView, v5Compat: r=!1} = i
      , o = s.history
      , a = "POP"
      , c = null
      , u = d();
    u == null && (u = 0,
    o.replaceState({
        ...o.state,
        idx: u
    }, ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        a = "POP";
        let v = d()
          , x = v == null ? null : v - u;
        u = v,
        c && c({
            action: a,
            location: p.location,
            delta: x
        })
    }
    function f(v, x) {
        a = "PUSH";
        let y = qs(p.location, v, x);
        u = d() + 1;
        let b = mo(y, u)
          , S = p.createHref(y);
        try {
            o.pushState(b, "", S)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError")
                throw k;
            s.location.assign(S)
        }
        r && c && c({
            action: a,
            location: p.location,
            delta: 1
        })
    }
    function m(v, x) {
        a = "REPLACE";
        let y = qs(p.location, v, x);
        u = d();
        let b = mo(y, u)
          , S = p.createHref(y);
        o.replaceState(b, "", S),
        r && c && c({
            action: a,
            location: p.location,
            delta: 0
        })
    }
    function g(v) {
        return S0(v)
    }
    let p = {
        get action() {
            return a
        },
        get location() {
            return t(s, o)
        },
        listen(v) {
            if (c)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(fo, h),
            c = v,
            () => {
                s.removeEventListener(fo, h),
                c = null
            }
        },
        createHref(v) {
            return e(s, v)
        },
        createURL: g,
        encodeLocation(v) {
            let x = g(v);
            return {
                pathname: x.pathname,
                search: x.search,
                hash: x.hash
            }
        },
        push: f,
        replace: m,
        go(v) {
            return o.go(v)
        }
    };
    return p
}
function S0(t, e=!1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href),
    ye(n, "No window.location.(origin|href) available to create URL");
    let i = typeof t == "string" ? t : Xn(t);
    return i = i.replace(/ $/, "%20"),
    !e && i.startsWith("//") && (i = n + i),
    new URL(i,n)
}
function ja(t, e, n="/") {
    return _0(t, e, n, !1)
}
function _0(t, e, n, i) {
    let s = typeof e == "string" ? Nn(e) : e
      , r = Rt(s.pathname || "/", n);
    if (r == null)
        return null;
    let o = Pa(t);
    k0(o);
    let a = null;
    for (let c = 0; a == null && c < o.length; ++c) {
        let u = La(r);
        a = T0(o[c], u, i)
    }
    return a
}
function Pa(t, e=[], n=[], i="") {
    let s = (r, o, a) => {
        let c = {
            relativePath: a === void 0 ? r.path || "" : a,
            caseSensitive: r.caseSensitive === !0,
            childrenIndex: o,
            route: r
        };
        c.relativePath.startsWith("/") && (ye(c.relativePath.startsWith(i), `Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        c.relativePath = c.relativePath.slice(i.length));
        let u = It([i, c.relativePath])
          , d = n.concat(c);
        r.children && r.children.length > 0 && (ye(r.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${u}".`),
        Pa(r.children, e, d, u)),
        !(r.path == null && !r.index) && e.push({
            path: u,
            score: E0(u, r.index),
            routesMeta: d
        })
    }
    ;
    return t.forEach( (r, o) => {
        var a;
        if (r.path === "" || !((a = r.path) != null && a.includes("?")))
            s(r, o);
        else
            for (let c of Ea(r.path))
                s(r, o, c)
    }
    ),
    e
}
function Ea(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[n,...i] = e
      , s = n.endsWith("?")
      , r = n.replace(/\?$/, "");
    if (i.length === 0)
        return s ? [r, ""] : [r];
    let o = Ea(i.join("/"))
      , a = [];
    return a.push(...o.map(c => c === "" ? r : [r, c].join("/"))),
    s && a.push(...o),
    a.map(c => t.startsWith("/") && c === "" ? "/" : c)
}
function k0(t) {
    t.sort( (e, n) => e.score !== n.score ? n.score - e.score : L0(e.routesMeta.map(i => i.childrenIndex), n.routesMeta.map(i => i.childrenIndex)))
}
var I0 = /^:[\w-]+$/
  , M0 = 3
  , R0 = 2
  , A0 = 1
  , j0 = 10
  , P0 = -2
  , po = t => t === "*";
function E0(t, e) {
    let n = t.split("/")
      , i = n.length;
    return n.some(po) && (i += P0),
    e && (i += R0),
    n.filter(s => !po(s)).reduce( (s, r) => s + (I0.test(r) ? M0 : r === "" ? A0 : j0), i)
}
function L0(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (i, s) => i === e[s]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function T0(t, e, n=!1) {
    let {routesMeta: i} = t
      , s = {}
      , r = "/"
      , o = [];
    for (let a = 0; a < i.length; ++a) {
        let c = i[a]
          , u = a === i.length - 1
          , d = r === "/" ? e : e.slice(r.length) || "/"
          , h = Jn({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: u
        }, d)
          , f = c.route;
        if (!h && u && n && !i[i.length - 1].route.index && (h = Jn({
            path: c.relativePath,
            caseSensitive: c.caseSensitive,
            end: !1
        }, d)),
        !h)
            return null;
        Object.assign(s, h.params),
        o.push({
            params: s,
            pathname: It([r, h.pathname]),
            pathnameBase: z0(It([r, h.pathnameBase])),
            route: f
        }),
        h.pathnameBase !== "/" && (r = It([r, h.pathnameBase]))
    }
    return o
}
function Jn(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[n,i] = D0(t.path, t.caseSensitive, t.end)
      , s = e.match(n);
    if (!s)
        return null;
    let r = s[0]
      , o = r.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: i.reduce( (u, {paramName: d, isOptional: h}, f) => {
            if (d === "*") {
                let g = a[f] || "";
                o = r.slice(0, r.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const m = a[f];
            return h && !m ? u[d] = void 0 : u[d] = (m || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: r,
        pathnameBase: o,
        pattern: t
    }
}
function D0(t, e=!1, n=!0) {
    ft(t === "*" || !t.endsWith("*") || t.endsWith("/*"), `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`);
    let i = []
      , s = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, c) => (i.push({
        paramName: a,
        isOptional: c != null
    }),
    c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,e ? void 0 : "i"), i]
}
function La(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return ft(!1, `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),
        t
    }
}
function Rt(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length
      , i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/"
}
function F0(t, e="/") {
    let {pathname: n, search: i="", hash: s=""} = typeof t == "string" ? Nn(t) : t;
    return {
        pathname: n ? n.startsWith("/") ? n : N0(n, e) : e,
        search: O0(i),
        hash: $0(s)
    }
}
function N0(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(s => {
        s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function ws(t, e, n, i) {
    return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function B0(t) {
    return t.filter( (e, n) => n === 0 || e.route.path && e.route.path.length > 0)
}
function Ta(t) {
    let e = B0(t);
    return e.map( (n, i) => i === e.length - 1 ? n.pathname : n.pathnameBase)
}
function Da(t, e, n, i=!1) {
    let s;
    typeof t == "string" ? s = Nn(t) : (s = {
        ...t
    },
    ye(!s.pathname || !s.pathname.includes("?"), ws("?", "pathname", "search", s)),
    ye(!s.pathname || !s.pathname.includes("#"), ws("#", "pathname", "hash", s)),
    ye(!s.search || !s.search.includes("#"), ws("#", "search", "hash", s)));
    let r = t === "" || s.pathname === "", o = r ? "/" : s.pathname, a;
    if (o == null)
        a = n;
    else {
        let h = e.length - 1;
        if (!i && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                h -= 1;
            s.pathname = f.join("/")
        }
        a = h >= 0 ? e[h] : "/"
    }
    let c = F0(s, a)
      , u = o && o !== "/" && o.endsWith("/")
      , d = (r || o === ".") && n.endsWith("/");
    return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"),
    c
}
var It = t => t.join("/").replace(/\/\/+/g, "/")
  , z0 = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , O0 = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , $0 = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function U0(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
var Fa = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Fa);
var W0 = ["GET", ...Fa];
new Set(W0);
var Bn = C.createContext(null);
Bn.displayName = "DataRouter";
var Ji = C.createContext(null);
Ji.displayName = "DataRouterState";
var Na = C.createContext({
    isTransitioning: !1
});
Na.displayName = "ViewTransition";
var H0 = C.createContext(new Map);
H0.displayName = "Fetchers";
var G0 = C.createContext(null);
G0.displayName = "Await";
var bt = C.createContext(null);
bt.displayName = "Navigation";
var ui = C.createContext(null);
ui.displayName = "Location";
var wt = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
wt.displayName = "Route";
var _r = C.createContext(null);
_r.displayName = "RouteError";
function V0(t, {relative: e}={}) {
    ye(zn(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: n, navigator: i} = C.useContext(bt)
      , {hash: s, pathname: r, search: o} = di(t, {
        relative: e
    })
      , a = r;
    return n !== "/" && (a = r === "/" ? n : It([n, r])),
    i.createHref({
        pathname: a,
        search: o,
        hash: s
    })
}
function zn() {
    return C.useContext(ui) != null
}
function mt() {
    return ye(zn(), "useLocation() may be used only in the context of a <Router> component."),
    C.useContext(ui).location
}
function P6(t) {
    ye(zn(), "useMatch() may be used only in the context of a <Router> component.");
    let {pathname: e} = mt();
    return C.useMemo( () => Jn(t, La(e)), [e, t])
}
var Ba = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function za(t) {
    C.useContext(bt).static || C.useLayoutEffect(t)
}
function kr() {
    let {isDataRoute: t} = C.useContext(wt);
    return t ? rc() : q0()
}
function q0() {
    ye(zn(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = C.useContext(Bn)
      , {basename: e, navigator: n} = C.useContext(bt)
      , {matches: i} = C.useContext(wt)
      , {pathname: s} = mt()
      , r = JSON.stringify(Ta(i))
      , o = C.useRef(!1);
    return za( () => {
        o.current = !0
    }
    ),
    C.useCallback( (c, u={}) => {
        if (ft(o.current, Ba),
        !o.current)
            return;
        if (typeof c == "number") {
            n.go(c);
            return
        }
        let d = Da(c, JSON.parse(r), s, u.relative === "path");
        t == null && e !== "/" && (d.pathname = d.pathname === "/" ? e : It([e, d.pathname])),
        (u.replace ? n.replace : n.push)(d, u.state, u)
    }
    , [e, n, r, s, t])
}
C.createContext(null);
function E6() {
    let {matches: t} = C.useContext(wt)
      , e = t[t.length - 1];
    return e ? e.params : {}
}
function di(t, {relative: e}={}) {
    let {matches: n} = C.useContext(wt)
      , {pathname: i} = mt()
      , s = JSON.stringify(Ta(n));
    return C.useMemo( () => Da(t, JSON.parse(s), i, e === "path"), [t, s, i, e])
}
function K0(t, e) {
    return Oa(t, e)
}
function Oa(t, e, n, i) {
    var x;
    ye(zn(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: s} = C.useContext(bt)
      , {matches: r} = C.useContext(wt)
      , o = r[r.length - 1]
      , a = o ? o.params : {}
      , c = o ? o.pathname : "/"
      , u = o ? o.pathnameBase : "/"
      , d = o && o.route;
    {
        let y = d && d.path || "";
        $a(c, !d || y.endsWith("*") || y.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y === "/" ? "*" : `${y}/*`}">.`)
    }
    let h = mt(), f;
    if (e) {
        let y = typeof e == "string" ? Nn(e) : e;
        ye(u === "/" || ((x = y.pathname) == null ? void 0 : x.startsWith(u)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${y.pathname}" was given in the \`location\` prop.`),
        f = y
    } else
        f = h;
    let m = f.pathname || "/"
      , g = m;
    if (u !== "/") {
        let y = u.replace(/^\//, "").split("/");
        g = "/" + m.replace(/^\//, "").split("/").slice(y.length).join("/")
    }
    let p = ja(t, {
        pathname: g
    });
    ft(d || p != null, `No routes matched location "${f.pathname}${f.search}${f.hash}" `),
    ft(p == null || p[p.length - 1].route.element !== void 0 || p[p.length - 1].route.Component !== void 0 || p[p.length - 1].route.lazy !== void 0, `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let v = J0(p && p.map(y => Object.assign({}, y, {
        params: Object.assign({}, a, y.params),
        pathname: It([u, s.encodeLocation ? s.encodeLocation(y.pathname).pathname : y.pathname]),
        pathnameBase: y.pathnameBase === "/" ? u : It([u, s.encodeLocation ? s.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
    })), r, n, i);
    return e && v ? C.createElement(ui.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...f
            },
            navigationType: "POP"
        }
    }, v) : v
}
function Z0() {
    let t = sc()
      , e = U0(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t)
      , n = t instanceof Error ? t.stack : null
      , i = "rgba(200,200,200, 0.5)"
      , s = {
        padding: "0.5rem",
        backgroundColor: i
    }
      , r = {
        padding: "2px 4px",
        backgroundColor: i
    }
      , o = null;
    return console.error("Error handled by React Router default ErrorBoundary:", t),
    o = C.createElement(C.Fragment, null, C.createElement("p", null, "💿 Hey developer 👋"), C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", C.createElement("code", {
        style: r
    }, "ErrorBoundary"), " or", " ", C.createElement("code", {
        style: r
    }, "errorElement"), " prop on your route.")),
    C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), n ? C.createElement("pre", {
        style: s
    }, n) : null, o)
}
var Y0 = C.createElement(Z0, null)
  , Q0 = class extends C.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, e) {
        return e.location !== t.location || e.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : e.error,
            location: e.location,
            revalidation: t.revalidation || e.revalidation
        }
    }
    componentDidCatch(t, e) {
        console.error("React Router caught the following error during render", t, e)
    }
    render() {
        return this.state.error !== void 0 ? C.createElement(wt.Provider, {
            value: this.props.routeContext
        }, C.createElement(_r.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function X0({routeContext: t, match: e, children: n}) {
    let i = C.useContext(Bn);
    return i && i.static && i.staticContext && (e.route.errorElement || e.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = e.route.id),
    C.createElement(wt.Provider, {
        value: t
    }, n)
}
function J0(t, e=[], n=null, i=null) {
    if (t == null) {
        if (!n)
            return null;
        if (n.errors)
            t = n.matches;
        else if (e.length === 0 && !n.initialized && n.matches.length > 0)
            t = n.matches;
        else
            return null
    }
    let s = t
      , r = n == null ? void 0 : n.errors;
    if (r != null) {
        let c = s.findIndex(u => u.route.id && (r == null ? void 0 : r[u.route.id]) !== void 0);
        ye(c >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let o = !1
      , a = -1;
    if (n)
        for (let c = 0; c < s.length; c++) {
            let u = s[c];
            if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (a = c),
            u.route.id) {
                let {loaderData: d, errors: h} = n
                  , f = u.route.loader && !d.hasOwnProperty(u.route.id) && (!h || h[u.route.id] === void 0);
                if (u.route.lazy || f) {
                    o = !0,
                    a >= 0 ? s = s.slice(0, a + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, u, d) => {
        let h, f = !1, m = null, g = null;
        n && (h = r && u.route.id ? r[u.route.id] : void 0,
        m = u.route.errorElement || Y0,
        o && (a < 0 && d === 0 ? ($a("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        f = !0,
        g = null) : a === d && (f = !0,
        g = u.route.hydrateFallbackElement || null)));
        let p = e.concat(s.slice(0, d + 1))
          , v = () => {
            let x;
            return h ? x = m : f ? x = g : u.route.Component ? x = C.createElement(u.route.Component, null) : u.route.element ? x = u.route.element : x = c,
            C.createElement(X0, {
                match: u,
                routeContext: {
                    outlet: c,
                    matches: p,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (u.route.ErrorBoundary || u.route.errorElement || d === 0) ? C.createElement(Q0, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: h,
            children: v(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : v()
    }
    , null)
}
function Ir(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function ec(t) {
    let e = C.useContext(Bn);
    return ye(e, Ir(t)),
    e
}
function tc(t) {
    let e = C.useContext(Ji);
    return ye(e, Ir(t)),
    e
}
function nc(t) {
    let e = C.useContext(wt);
    return ye(e, Ir(t)),
    e
}
function Mr(t) {
    let e = nc(t)
      , n = e.matches[e.matches.length - 1];
    return ye(n.route.id, `${t} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function ic() {
    return Mr("useRouteId")
}
function sc() {
    var i;
    let t = C.useContext(_r)
      , e = tc("useRouteError")
      , n = Mr("useRouteError");
    return t !== void 0 ? t : (i = e.errors) == null ? void 0 : i[n]
}
function rc() {
    let {router: t} = ec("useNavigate")
      , e = Mr("useNavigate")
      , n = C.useRef(!1);
    return za( () => {
        n.current = !0
    }
    ),
    C.useCallback(async (s, r={}) => {
        ft(n.current, Ba),
        n.current && (typeof s == "number" ? t.navigate(s) : await t.navigate(s, {
            fromRouteId: e,
            ...r
        }))
    }
    , [t, e])
}
var go = {};
function $a(t, e, n) {
    !e && !go[t] && (go[t] = !0,
    ft(!1, n))
}
C.memo(oc);
function oc({routes: t, future: e, state: n}) {
    return Oa(t, void 0, n, e)
}
function ac(t) {
    ye(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function lc({basename: t="/", children: e=null, location: n, navigationType: i="POP", navigator: s, static: r=!1}) {
    ye(!zn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let o = t.replace(/^\/*/, "/")
      , a = C.useMemo( () => ({
        basename: o,
        navigator: s,
        static: r,
        future: {}
    }), [o, s, r]);
    typeof n == "string" && (n = Nn(n));
    let {pathname: c="/", search: u="", hash: d="", state: h=null, key: f="default"} = n
      , m = C.useMemo( () => {
        let g = Rt(c, o);
        return g == null ? null : {
            location: {
                pathname: g,
                search: u,
                hash: d,
                state: h,
                key: f
            },
            navigationType: i
        }
    }
    , [o, c, u, d, h, f, i]);
    return ft(m != null, `<Router basename="${o}"> is not able to match the URL "${c}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),
    m == null ? null : C.createElement(bt.Provider, {
        value: a
    }, C.createElement(ui.Provider, {
        children: e,
        value: m
    }))
}
function L6({children: t, location: e}) {
    return K0(Ks(t), e)
}
function Ks(t, e=[]) {
    let n = [];
    return C.Children.forEach(t, (i, s) => {
        if (!C.isValidElement(i))
            return;
        let r = [...e, s];
        if (i.type === C.Fragment) {
            n.push.apply(n, Ks(i.props.children, r));
            return
        }
        ye(i.type === ac, `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        ye(!i.props.index || !i.props.children, "An index route cannot have child routes.");
        let o = {
            id: i.props.id || r.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            hydrateFallbackElement: i.props.hydrateFallbackElement,
            HydrateFallback: i.props.HydrateFallback,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.hasErrorBoundary === !0 || i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (o.children = Ks(i.props.children, r)),
        n.push(o)
    }
    ),
    n
}
var Ti = "get"
  , Di = "application/x-www-form-urlencoded";
function es(t) {
    return t != null && typeof t.tagName == "string"
}
function cc(t) {
    return es(t) && t.tagName.toLowerCase() === "button"
}
function uc(t) {
    return es(t) && t.tagName.toLowerCase() === "form"
}
function dc(t) {
    return es(t) && t.tagName.toLowerCase() === "input"
}
function hc(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function fc(t, e) {
    return t.button === 0 && (!e || e === "_self") && !hc(t)
}
function Zs(t="") {
    return new URLSearchParams(typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams ? t : Object.keys(t).reduce( (e, n) => {
        let i = t[n];
        return e.concat(Array.isArray(i) ? i.map(s => [n, s]) : [[n, i]])
    }
    , []))
}
function mc(t, e) {
    let n = Zs(t);
    return e && e.forEach( (i, s) => {
        n.has(s) || e.getAll(s).forEach(r => {
            n.append(s, r)
        }
        )
    }
    ),
    n
}
var ki = null;
function pc() {
    if (ki === null)
        try {
            new FormData(document.createElement("form"),0),
            ki = !1
        } catch {
            ki = !0
        }
    return ki
}
var gc = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Ss(t) {
    return t != null && !gc.has(t) ? (ft(!1, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`),
    null) : t
}
function yc(t, e) {
    let n, i, s, r, o;
    if (uc(t)) {
        let a = t.getAttribute("action");
        i = a ? Rt(a, e) : null,
        n = t.getAttribute("method") || Ti,
        s = Ss(t.getAttribute("enctype")) || Di,
        r = new FormData(t)
    } else if (cc(t) || dc(t) && (t.type === "submit" || t.type === "image")) {
        let a = t.form;
        if (a == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let c = t.getAttribute("formaction") || a.getAttribute("action");
        if (i = c ? Rt(c, e) : null,
        n = t.getAttribute("formmethod") || a.getAttribute("method") || Ti,
        s = Ss(t.getAttribute("formenctype")) || Ss(a.getAttribute("enctype")) || Di,
        r = new FormData(a,t),
        !pc()) {
            let {name: u, type: d, value: h} = t;
            if (d === "image") {
                let f = u ? `${u}.` : "";
                r.append(`${f}x`, "0"),
                r.append(`${f}y`, "0")
            } else
                u && r.append(u, h)
        }
    } else {
        if (es(t))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = Ti,
        i = null,
        s = Di,
        o = t
    }
    return r && s === "text/plain" && (o = r,
    r = void 0),
    {
        action: i,
        method: n.toLowerCase(),
        encType: s,
        formData: r,
        body: o
    }
}
function Rr(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
async function vc(t, e) {
    if (t.id in e)
        return e[t.id];
    try {
        let n = await import(t.module);
        return e[t.id] = n,
        n
    } catch (n) {
        return console.error(`Error loading route module \`${t.module}\`, reloading page...`),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function xc(t) {
    return t == null ? !1 : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string"
}
async function Cc(t, e, n) {
    let i = await Promise.all(t.map(async s => {
        let r = e.routes[s.route.id];
        if (r) {
            let o = await vc(r, n);
            return o.links ? o.links() : []
        }
        return []
    }
    ));
    return _c(i.flat(1).filter(xc).filter(s => s.rel === "stylesheet" || s.rel === "preload").map(s => s.rel === "stylesheet" ? {
        ...s,
        rel: "prefetch",
        as: "style"
    } : {
        ...s,
        rel: "prefetch"
    }))
}
function yo(t, e, n, i, s, r) {
    let o = (c, u) => n[u] ? c.route.id !== n[u].route.id : !0
      , a = (c, u) => {
        var d;
        return n[u].pathname !== c.pathname || ((d = n[u].route.path) == null ? void 0 : d.endsWith("*")) && n[u].params["*"] !== c.params["*"]
    }
    ;
    return r === "assets" ? e.filter( (c, u) => o(c, u) || a(c, u)) : r === "data" ? e.filter( (c, u) => {
        var h;
        let d = i.routes[c.route.id];
        if (!d || !d.hasLoader)
            return !1;
        if (o(c, u) || a(c, u))
            return !0;
        if (c.route.shouldRevalidate) {
            let f = c.route.shouldRevalidate({
                currentUrl: new URL(s.pathname + s.search + s.hash,window.origin),
                currentParams: ((h = n[0]) == null ? void 0 : h.params) || {},
                nextUrl: new URL(t,window.origin),
                nextParams: c.params,
                defaultShouldRevalidate: !0
            });
            if (typeof f == "boolean")
                return f
        }
        return !0
    }
    ) : []
}
function bc(t, e, {includeHydrateFallback: n}={}) {
    return wc(t.map(i => {
        let s = e.routes[i.route.id];
        if (!s)
            return [];
        let r = [s.module];
        return s.clientActionModule && (r = r.concat(s.clientActionModule)),
        s.clientLoaderModule && (r = r.concat(s.clientLoaderModule)),
        n && s.hydrateFallbackModule && (r = r.concat(s.hydrateFallbackModule)),
        s.imports && (r = r.concat(s.imports)),
        r
    }
    ).flat(1))
}
function wc(t) {
    return [...new Set(t)]
}
function Sc(t) {
    let e = {}
      , n = Object.keys(t).sort();
    for (let i of n)
        e[i] = t[i];
    return e
}
function _c(t, e) {
    let n = new Set;
    return new Set(e),
    t.reduce( (i, s) => {
        let r = JSON.stringify(Sc(s));
        return n.has(r) || (n.add(r),
        i.push({
            key: r,
            link: s
        })),
        i
    }
    , [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var kc = new Set([100, 101, 204, 205]);
function Ic(t, e) {
    let n = typeof t == "string" ? new URL(t,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : t;
    return n.pathname === "/" ? n.pathname = "_root.data" : e && Rt(n.pathname, e) === "/" ? n.pathname = `${e.replace(/\/$/, "")}/_root.data` : n.pathname = `${n.pathname.replace(/\/$/, "")}.data`,
    n
}
function Ua() {
    let t = C.useContext(Bn);
    return Rr(t, "You must render this element inside a <DataRouterContext.Provider> element"),
    t
}
function Mc() {
    let t = C.useContext(Ji);
    return Rr(t, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    t
}
var Ar = C.createContext(void 0);
Ar.displayName = "FrameworkContext";
function Wa() {
    let t = C.useContext(Ar);
    return Rr(t, "You must render this element inside a <HydratedRouter> element"),
    t
}
function Rc(t, e) {
    let n = C.useContext(Ar)
      , [i,s] = C.useState(!1)
      , [r,o] = C.useState(!1)
      , {onFocus: a, onBlur: c, onMouseEnter: u, onMouseLeave: d, onTouchStart: h} = e
      , f = C.useRef(null);
    C.useEffect( () => {
        if (t === "render" && o(!0),
        t === "viewport") {
            let p = x => {
                x.forEach(y => {
                    o(y.isIntersecting)
                }
                )
            }
              , v = new IntersectionObserver(p,{
                threshold: .5
            });
            return f.current && v.observe(f.current),
            () => {
                v.disconnect()
            }
        }
    }
    , [t]),
    C.useEffect( () => {
        if (i) {
            let p = setTimeout( () => {
                o(!0)
            }
            , 100);
            return () => {
                clearTimeout(p)
            }
        }
    }
    , [i]);
    let m = () => {
        s(!0)
    }
      , g = () => {
        s(!1),
        o(!1)
    }
    ;
    return n ? t !== "intent" ? [r, f, {}] : [r, f, {
        onFocus: Hn(a, m),
        onBlur: Hn(c, g),
        onMouseEnter: Hn(u, m),
        onMouseLeave: Hn(d, g),
        onTouchStart: Hn(h, m)
    }] : [!1, f, {}]
}
function Hn(t, e) {
    return n => {
        t && t(n),
        n.defaultPrevented || e(n)
    }
}
function Ac({page: t, ...e}) {
    let {router: n} = Ua()
      , i = C.useMemo( () => ja(n.routes, t, n.basename), [n.routes, t, n.basename]);
    return i ? C.createElement(Pc, {
        page: t,
        matches: i,
        ...e
    }) : null
}
function jc(t) {
    let {manifest: e, routeModules: n} = Wa()
      , [i,s] = C.useState([]);
    return C.useEffect( () => {
        let r = !1;
        return Cc(t, e, n).then(o => {
            r || s(o)
        }
        ),
        () => {
            r = !0
        }
    }
    , [t, e, n]),
    i
}
function Pc({page: t, matches: e, ...n}) {
    let i = mt()
      , {manifest: s, routeModules: r} = Wa()
      , {basename: o} = Ua()
      , {loaderData: a, matches: c} = Mc()
      , u = C.useMemo( () => yo(t, e, c, s, i, "data"), [t, e, c, s, i])
      , d = C.useMemo( () => yo(t, e, c, s, i, "assets"), [t, e, c, s, i])
      , h = C.useMemo( () => {
        if (t === i.pathname + i.search + i.hash)
            return [];
        let g = new Set
          , p = !1;
        if (e.forEach(x => {
            var b;
            let y = s.routes[x.route.id];
            !y || !y.hasLoader || (!u.some(S => S.route.id === x.route.id) && x.route.id in a && ((b = r[x.route.id]) != null && b.shouldRevalidate) || y.hasClientLoader ? p = !0 : g.add(x.route.id))
        }
        ),
        g.size === 0)
            return [];
        let v = Ic(t, o);
        return p && g.size > 0 && v.searchParams.set("_routes", e.filter(x => g.has(x.route.id)).map(x => x.route.id).join(",")),
        [v.pathname + v.search]
    }
    , [o, a, i, s, u, e, t, r])
      , f = C.useMemo( () => bc(d, s), [d, s])
      , m = jc(d);
    return C.createElement(C.Fragment, null, h.map(g => C.createElement("link", {
        key: g,
        rel: "prefetch",
        as: "fetch",
        href: g,
        ...n
    })), f.map(g => C.createElement("link", {
        key: g,
        rel: "modulepreload",
        href: g,
        ...n
    })), m.map( ({key: g, link: p}) => C.createElement("link", {
        key: g,
        ...p
    })))
}
function Ec(...t) {
    return e => {
        t.forEach(n => {
            typeof n == "function" ? n(e) : n != null && (n.current = e)
        }
        )
    }
}
var Ha = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Ha && (window.__reactRouterVersion = "7.6.2")
} catch {}
function T6({basename: t, children: e, window: n}) {
    let i = C.useRef();
    i.current == null && (i.current = C0({
        window: n,
        v5Compat: !0
    }));
    let s = i.current
      , [r,o] = C.useState({
        action: s.action,
        location: s.location
    })
      , a = C.useCallback(c => {
        C.startTransition( () => o(c))
    }
    , [o]);
    return C.useLayoutEffect( () => s.listen(a), [s, a]),
    C.createElement(lc, {
        basename: t,
        children: e,
        location: r.location,
        navigationType: r.action,
        navigator: s
    })
}
var Ga = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Va = C.forwardRef(function({onClick: e, discover: n="render", prefetch: i="none", relative: s, reloadDocument: r, replace: o, state: a, target: c, to: u, preventScrollReset: d, viewTransition: h, ...f}, m) {
    let {basename: g} = C.useContext(bt), p = typeof u == "string" && Ga.test(u), v, x = !1;
    if (typeof u == "string" && p && (v = u,
    Ha))
        try {
            let P = new URL(window.location.href)
              , w = u.startsWith("//") ? new URL(P.protocol + u) : new URL(u)
              , A = Rt(w.pathname, g);
            w.origin === P.origin && A != null ? u = A + w.search + w.hash : x = !0
        } catch {
            ft(!1, `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let y = V0(u, {
        relative: s
    })
      , [b,S,k] = Rc(i, f)
      , I = Dc(u, {
        replace: o,
        state: a,
        target: c,
        preventScrollReset: d,
        relative: s,
        viewTransition: h
    });
    function R(P) {
        e && e(P),
        P.defaultPrevented || I(P)
    }
    let T = C.createElement("a", {
        ...f,
        ...k,
        href: v || y,
        onClick: x || r ? e : R,
        ref: Ec(m, S),
        target: c,
        "data-discover": !p && n === "render" ? "true" : void 0
    });
    return b && !p ? C.createElement(C.Fragment, null, T, C.createElement(Ac, {
        page: y
    })) : T
});
Va.displayName = "Link";
var qa = C.forwardRef(function({"aria-current": e="page", caseSensitive: n=!1, className: i="", end: s=!1, style: r, to: o, viewTransition: a, children: c, ...u}, d) {
    let h = di(o, {
        relative: u.relative
    })
      , f = mt()
      , m = C.useContext(Ji)
      , {navigator: g, basename: p} = C.useContext(bt)
      , v = m != null && Oc(h) && a === !0
      , x = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname
      , y = f.pathname
      , b = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
    n || (y = y.toLowerCase(),
    b = b ? b.toLowerCase() : null,
    x = x.toLowerCase()),
    b && p && (b = Rt(b, p) || b);
    const S = x !== "/" && x.endsWith("/") ? x.length - 1 : x.length;
    let k = y === x || !s && y.startsWith(x) && y.charAt(S) === "/", I = b != null && (b === x || !s && b.startsWith(x) && b.charAt(x.length) === "/"), R = {
        isActive: k,
        isPending: I,
        isTransitioning: v
    }, T = k ? e : void 0, P;
    typeof i == "function" ? P = i(R) : P = [i, k ? "active" : null, I ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
    let w = typeof r == "function" ? r(R) : r;
    return C.createElement(Va, {
        ...u,
        "aria-current": T,
        className: P,
        ref: d,
        style: w,
        to: o,
        viewTransition: a
    }, typeof c == "function" ? c(R) : c)
});
qa.displayName = "NavLink";
var Lc = C.forwardRef( ({discover: t="render", fetcherKey: e, navigate: n, reloadDocument: i, replace: s, state: r, method: o=Ti, action: a, onSubmit: c, relative: u, preventScrollReset: d, viewTransition: h, ...f}, m) => {
    let g = Bc()
      , p = zc(a, {
        relative: u
    })
      , v = o.toLowerCase() === "get" ? "get" : "post"
      , x = typeof a == "string" && Ga.test(a)
      , y = b => {
        if (c && c(b),
        b.defaultPrevented)
            return;
        b.preventDefault();
        let S = b.nativeEvent.submitter
          , k = (S == null ? void 0 : S.getAttribute("formmethod")) || o;
        g(S || b.currentTarget, {
            fetcherKey: e,
            method: k,
            navigate: n,
            replace: s,
            state: r,
            relative: u,
            preventScrollReset: d,
            viewTransition: h
        })
    }
    ;
    return C.createElement("form", {
        ref: m,
        method: v,
        action: p,
        onSubmit: i ? c : y,
        ...f,
        "data-discover": !x && t === "render" ? "true" : void 0
    })
}
);
Lc.displayName = "Form";
function Tc(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Ka(t) {
    let e = C.useContext(Bn);
    return ye(e, Tc(t)),
    e
}
function Dc(t, {target: e, replace: n, state: i, preventScrollReset: s, relative: r, viewTransition: o}={}) {
    let a = kr()
      , c = mt()
      , u = di(t, {
        relative: r
    });
    return C.useCallback(d => {
        if (fc(d, e)) {
            d.preventDefault();
            let h = n !== void 0 ? n : Xn(c) === Xn(u);
            a(t, {
                replace: h,
                state: i,
                preventScrollReset: s,
                relative: r,
                viewTransition: o
            })
        }
    }
    , [c, a, u, n, i, e, t, s, r, o])
}
function D6(t) {
    ft(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let e = C.useRef(Zs(t))
      , n = C.useRef(!1)
      , i = mt()
      , s = C.useMemo( () => mc(i.search, n.current ? null : e.current), [i.search])
      , r = kr()
      , o = C.useCallback( (a, c) => {
        const u = Zs(typeof a == "function" ? a(s) : a);
        n.current = !0,
        r("?" + u, c)
    }
    , [r, s]);
    return [s, o]
}
var Fc = 0
  , Nc = () => `__${String(++Fc)}__`;
function Bc() {
    let {router: t} = Ka("useSubmit")
      , {basename: e} = C.useContext(bt)
      , n = ic();
    return C.useCallback(async (i, s={}) => {
        let {action: r, method: o, encType: a, formData: c, body: u} = yc(i, e);
        if (s.navigate === !1) {
            let d = s.fetcherKey || Nc();
            await t.fetch(d, n, s.action || r, {
                preventScrollReset: s.preventScrollReset,
                formData: c,
                body: u,
                formMethod: s.method || o,
                formEncType: s.encType || a,
                flushSync: s.flushSync
            })
        } else
            await t.navigate(s.action || r, {
                preventScrollReset: s.preventScrollReset,
                formData: c,
                body: u,
                formMethod: s.method || o,
                formEncType: s.encType || a,
                replace: s.replace,
                state: s.state,
                fromRouteId: n,
                flushSync: s.flushSync,
                viewTransition: s.viewTransition
            })
    }
    , [t, e, n])
}
function zc(t, {relative: e}={}) {
    let {basename: n} = C.useContext(bt)
      , i = C.useContext(wt);
    ye(i, "useFormAction must be used inside a RouteContext");
    let[s] = i.matches.slice(-1)
      , r = {
        ...di(t || ".", {
            relative: e
        })
    }
      , o = mt();
    if (t == null) {
        r.search = o.search;
        let a = new URLSearchParams(r.search)
          , c = a.getAll("index");
        if (c.some(d => d === "")) {
            a.delete("index"),
            c.filter(h => h).forEach(h => a.append("index", h));
            let d = a.toString();
            r.search = d ? `?${d}` : ""
        }
    }
    return (!t || t === ".") && s.route.index && (r.search = r.search ? r.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (r.pathname = r.pathname === "/" ? n : It([n, r.pathname])),
    Xn(r)
}
function Oc(t, e={}) {
    let n = C.useContext(Na);
    ye(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: i} = Ka("useViewTransitionState")
      , s = di(t, {
        relative: e.relative
    });
    if (!n.isTransitioning)
        return !1;
    let r = Rt(n.currentLocation.pathname, i) || n.currentLocation.pathname
      , o = Rt(n.nextLocation.pathname, i) || n.nextLocation.pathname;
    return Jn(s.pathname, o) != null || Jn(s.pathname, r) != null
}
[...kc];
const Za = async t => new Promise(e => setTimeout(e, t));
function F6(t, e) {
    const n = new Set;
    if (e) {
        let i = 0;
        for (const s of t)
            n.add(e(s, i++, t))
    } else
        for (const i of t)
            n.add(i);
    return Array.from(n)
}
const rt = (t, e=!0) => {
    if (t == null)
        return t;
    const n = t.toLowerCase().trim();
    return n.length ? ["yes", "y", "true", "t", e ? "1" : ""].includes(n) ? !0 : ["no", "n", "false", "f", e ? "0" : ""].includes(n) ? !1 : null : null
}
  , $c = t => {
    const e = t % 10
      , n = Math.floor(t / 10) % 10;
    let i = "th";
    return n !== 1 && 1 <= e && e <= 3 && (i = ["st", "nd", "rd"][e - 1]),
    i
}
  , N6 = t => `${t}${$c(t)}`
  , Uc = ["Zeroth", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"]
  , Wc = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
  , B6 = t => {
    const e = {};
    for (const n of Object.keys(t)) {
        const i = t[n];
        i !== void 0 && (e[n] = i)
    }
    return e
}
  , Hc = (t, e) => (t % e + e) % e
  , Gc = (t, e, n) => (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
(e || n) && (t = t.slice(e, n)),
btoa(String.fromCharCode.apply(null, t)))
  , Fi = (t, e) => !!(t & 1 << e)
  , z6 = (t, e, n) => {
    let i = typeof t == "bigint" ? 1n << BigInt(e) : 1 << e;
    return n ? t | i : t & ~i
}
  , O6 = (t, e) => {
    if (!t)
        return t;
    if (e) {
        const n = [];
        let i = 0;
        for (const s of t) {
            if (s == null)
                continue;
            const r = e(s, i++);
            r != null && n.push(r)
        }
        return n
    }
    return t.filter(n => n != null)
}
  , $6 = (t, e, n, i) => (t - e) * n ** i + e
  , U6 = (t, e=2, n) => {
    if (t == null)
        return t;
    if (t > 10 ** (1 - e)) {
        const c = t.toFixed(e);
        return parseFloat(c)
    }
    let[i,s] = t.toString().split(".");
    if (!s)
        return t;
    let r = ""
      , o = 0;
    for (let c = 0; c < s.length && (s[c] !== "0" && o++,
    r += s[c],
    o !== e); c++)
        ;
    o < e && (r += "0".repeat(e - o));
    const a = `${i}.${r}`;
    return parseFloat(a)
}
  , W6 = (t, e=2) => {
    if (!t)
        return t;
    const n = Math.floor(Math.log10(Math.abs(t)))
      , i = 10 ** (e - 1 - n);
    return Math.round(t * i) / i
}
  , H6 = (t, e=2) => {
    if (!t)
        return t;
    const n = 10 ** e;
    return Math.round(t * n) / n
}
  , Ya = (t, e, n=0) => {
    if (!n) {
        if (t === e)
            return t;
        if (t == null || typeof t != "object" || e == null || typeof e != "object")
            return e
    }
    let i = !1;
    const s = Object.keys(e)
      , r = Object.keys(t).length;
    for (const o of s) {
        const a = e[o]
          , c = t[o];
        if (c === a)
            continue;
        if (a == null || typeof a != "object" || c == null || typeof t != "object") {
            i = !0;
            continue
        }
        const u = Ya(c, a, n + 1);
        u === a ? i = !0 : u === c && (e[o] = c)
    }
    if (i)
        return e;
    if (!n || r === s.length)
        return t
}
  , G6 = (t, e) => {
    const n = 3.141592653589793
      , i = 1.5707963267948966
      , s = .995354
      , r = -.288679
      , o = .079331
      , a = Math.abs(e) < Math.abs(t)
      , c = a ? e / t : t / e
      , u = c * c;
    let d = c * (s + u * (r + u * o));
    return a && (d = (c >= 0 ? i : -1.5707963267948966) - d),
    e < 0 && t >= 0 ? d += n : e < 0 && t < 0 && (d -= n),
    d
}
  , V6 = t => {
    const e = 1.5707963267948966
      , n = .995354
      , i = -.288679
      , s = .079331
      , r = Math.abs(t) > 1;
    r && (t = 1 / t);
    const o = t * t;
    let a = t * (n + o * (i + o * s));
    return r && (a = e - a),
    a
}
;
BigInt(Number.MIN_SAFE_INTEGER);
BigInt(Number.MAX_SAFE_INTEGER);
function q6(t) {
    if (!t)
        return;
    const [e,n,i] = t.split("-")
      , s = i.padStart(2, "0")
      , r = n.padStart(2, "0");
    return `${s}/${r}`
}
const K6 = t => (t = Math.max(0, Math.min(t, 1)),
t * t * (3 - 2 * t))
  , Z6 = (t, e=2) => 1 / (1 + 1 / Math.pow(t / (1 - t), e))
  , vo = (t, e="short") => {
    const n = [[1e3, "ms", "ms", "millisecond"], [60, "s", "sec", "second"], [60, "m", "min", "minute"], [24, "h", "hr", "hour"], [1, "d", "day", "day"]];
    let i = t
      , s = 0;
    for (; s < n.length - 1; s++) {
        const [o] = n[s]
          , a = Math.round(i);
        if (a < o)
            break;
        if (a === o) {
            s++,
            i = 1;
            break
        }
        i = i / o
    }
    i = Math.round(i);
    const r = n[s];
    return e === "long" ? `${i} ${r[3]}${i === 1 ? "" : "s"}` : e === "medium" ? `${i} ${r[2]}` : `${i}${r[1]}`
}
  , Qa = 16383
  , Vc = (t, e, n=0, i=0, s=1) => {
    const r = Qa;
    let o = n;
    for (let a = i; a < i + s; a++) {
        const c = t[a];
        if (c != null && (c < -16383 || r < c || !Number.isInteger(c)))
            throw new Error(`Invalid value ${c}: must be null or integer in [-${r}, ${r}]`);
        if (c === null) {
            e[o++] = 128,
            e[o++] = 128;
            continue
        }
        if (0 <= c && c < 128) {
            e[o++] = c;
            continue
        }
        c >= 0 ? (e[o++] = 128 | 127 & c,
        e[o++] = c >> 7) : (e[o++] = 128 | 127 & -c,
        e[o++] = 128 | -c >> 7)
    }
    return o
}
  , Y6 = (t, e, n=[], i=!1) => {
    const s = Qa >> 1;
    let r = null;
    for (let a = 0; a < t.length; a++)
        if (t[a] == null)
            t[a] = r = null;
        else {
            let c = Math.round(t[a] * e);
            c < -8191 && (c = -8191),
            c > s && (c = s),
            t[a] = r != null ? c - r : c,
            r = c
        }
    if (i)
        return t;
    const o = Vc(t, n, 0, 0, t.length);
    return Gc(n, 0, o)
}
  , Q6 = t => (t--,
t |= t >> 1,
t |= t >> 2,
t |= t >> 4,
t |= t >> 8,
t |= t >> 16,
t++,
t)
  , qc = t => {
    let e, n, i;
    return Array.isArray(t) ? [e,n,i] = t : (e = t.getFullYear(),
    n = t.getMonth(),
    i = t.getDate()),
    e * 1e4 + (n + 1) * 100 + i
}
  , Kc = (t, e="-") => {
    let n, i, s;
    Array.isArray(t) ? [n,i,s] = t : (n = t.getFullYear(),
    i = t.getMonth(),
    s = t.getDate());
    const r = n.toString()
      , o = i.toString().padStart(2, "0")
      , a = s.toString().padStart(2, "0");
    return `${r}${e}${o}${e}${a}`
}
  , pn = (t, ...e) => {
    for (const n of e) {
        const i = t.get(n) ?? t.get(n.replace(/-/g, ""));
        if (i)
            return i
    }
}
  , Ni = () => {}
;
function Zc(t, e) {
    return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function"
}
let _s = !1;
function Yc(t) {
    var e = _s;
    try {
        return _s = !0,
        t()
    } finally {
        _s = e
    }
}
function Qc(t, e, n) {
    if (t == null)
        return e(void 0),
        Ni;
    const i = Yc( () => t.subscribe(e, n));
    return i.unsubscribe ? () => i.unsubscribe() : i
}
const gn = [];
function B(t, e=Ni) {
    let n = null;
    const i = new Set;
    function s(a) {
        if (Zc(t, a) && (t = a,
        n)) {
            const c = !gn.length;
            for (const u of i)
                u[1](),
                gn.push(u, t);
            if (c) {
                for (let u = 0; u < gn.length; u += 2)
                    gn[u][0](gn[u + 1]);
                gn.length = 0
            }
        }
    }
    function r(a) {
        s(a(t))
    }
    function o(a, c=Ni) {
        const u = [a, c];
        return i.add(u),
        i.size === 1 && (n = e(s, r) || Ni),
        a(t),
        () => {
            i.delete(u),
            i.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: s,
        update: r,
        subscribe: o
    }
}
function Kt(t) {
    let e;
    return Qc(t, n => e = n)(),
    e
}
function xo(t, e, n) {
    return (e = Xc(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function Xc(t) {
    var e = Jc(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function Jc(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
class Sn {
    constructor(e, n) {
        xo(this, "value", null),
        xo(this, "alpha", void 0),
        this.alpha = e,
        n != null && (this.value = n)
    }
    update(e) {
        return this.value = Sn.update(e, this.alpha, this.value),
        this.value
    }
    static update(e, n, i) {
        return i == null ? e : e * n + i * (1 - n)
    }
    serialize() {
        return {
            value: this.value,
            alpha: this.alpha
        }
    }
    static deserialize(e) {
        const n = new Sn(e.alpha);
        return n.value = e.value,
        n
    }
    reset(e=null) {
        this.value = e
    }
}
const M = {
    Invincibility: 1,
    SuperBoost: 2,
    IceBomb: 3,
    Wall: 4,
    Arrow: 5,
    ZoomOut: 6
}
  , X6 = 6
  , Et = {
    Revive: 7
}
  , Xa = [M.Wall, M.IceBomb, M.SuperBoost, M.ZoomOut, M.Invincibility, M.Arrow]
  , J6 = Object.fromEntries(Xa.map( (t, e) => [t, e]))
  , jr = Object.values(M)
  , e2 = [M.IceBomb, M.Wall, M.Arrow];
function e8(t) {
    return e2.includes(t)
}
const Ys = {
    [M.Invincibility]: "Invincibility",
    [M.SuperBoost]: "Super Boost",
    [M.IceBomb]: "Ice Bomb",
    [M.Wall]: "Wall",
    [M.Arrow]: "Arrow",
    [M.ZoomOut]: "Vision Pro",
    [Et.Revive]: "Revive"
}
  , t2 = {
    [M.Invincibility]: "Become unkillable for 2s (except by walls!).",
    [M.SuperBoost]: "Increase boost speed by 25% for 10s.",
    [M.IceBomb]: "Slow other werms by 33% for 5s.",
    [M.Wall]: "Creates a wall that lasts for 5 minutes (or until you die).",
    [M.Arrow]: "Fire a rapid instant kill arrow.",
    [M.ZoomOut]: "Double field of view for 25s.",
    [Et.Revive]: "Revive after death."
}
  , tn = {
    [M.Invincibility]: "Become unkillable.",
    [M.SuperBoost]: "Increase your boost speed by 25%.",
    [M.IceBomb]: "Fire a projectile that slows affected werms by 33%.",
    [M.Wall]: "Launch a wall that kills any werm that hits it.",
    [M.Arrow]: "Fires a rapid instant kill arrow.",
    [M.ZoomOut]: "Increase field of view by 100%.",
    [Et.Revive]: "Revive after death."
}
  , n2 = {
    [M.Invincibility]: "Become unkillable.",
    [M.SuperBoost]: "Increase your boost speed.",
    [M.IceBomb]: "Slow down other werms.",
    [M.Wall]: "Kill any werm that hits it.",
    [M.Arrow]: "Shoot down other werms.",
    [M.ZoomOut]: "Increase field of view",
    [Et.Revive]: "Revive after death."
}
  , ei = {
    Duration: 0,
    MinDurationDeath: 1,
    MaxDurationDeath: 2,
    LeaveOrDuration: 3,
    LeaveOrMinDurationDeath: 4,
    LeaveOrMaxDurationDeath: 5
}
  , De = {
    InvalidMessage: 1,
    Unknown: 2,
    InternalError: 3,
    Cooldown: 4,
    Disabled: 5,
    NotAlive: 6,
    ConditionsNotMet: 7,
    NoUsesRemaining: 8,
    AllItemsDisabled: 9,
    GamePhase: 10,
    Spawning: 11,
    AlreadyScheduled: 12,
    InvalidItemOrder: 13,
    ReorderingDisabled: 14,
    MaxConcurrentInstances: 15,
    RequiresUpgrade: 16
};
Object.fromEntries(Object.entries(De).map( ([t,e]) => [e, t]));
const t8 = {
    [De.InvalidMessage]: "The message was invalid",
    [De.Unknown]: "The type of item is unknown",
    [De.InternalError]: "The item could not be activated due to some internal error",
    [De.Cooldown]: "The item cannot be used until the cooldown period ends",
    [De.Disabled]: "The item has been disabled",
    [De.NotAlive]: "The item can only be used when you are alive",
    [De.ConditionsNotMet]: "The item cannot currently be used",
    [De.NoUsesRemaining]: "You do not have any remaining uses of the item",
    [De.AllItemsDisabled]: "Items cannot be used in this game",
    [De.GamePhase]: "The game has not started yet",
    [De.Spawning]: "The item cannot be used while spawning",
    [De.AlreadyScheduled]: "The item is scheduled to activate when invincibility ends",
    [De.InvalidItemOrder]: "The requested item order was invalid",
    [De.ReorderingDisabled]: "You cannot reorder items within the game",
    [De.MaxConcurrentInstances]: "The item cannot be used because you have too many instances on the map",
    [De.RequiresUpgrade]: "The item cannot be used because you do not have the upgrade"
}
  , Je = {
    ManualRespawnRequired: 0,
    InvalidState: 1,
    Disabled: 2,
    InternalError: 3,
    ReviveDisabled: 4,
    ReviveNotAvailable: 5,
    ReviveRejected: 6,
    ReviveConsecutive: 7,
    ReviveQuantity: 8,
    ReviveCooldown: 9,
    ReviveNotPending: 10,
    ReviveDecisionTimeout: 16
};
Object.fromEntries(Object.entries(Je).map( ([t,e]) => [e, t]));
const n8 = {
    [Je.ManualRespawnRequired]: "Auto spawn disabled",
    [Je.InvalidState]: "You cannot respawn at this time",
    [Je.Disabled]: "You cannot respawn in this game",
    [Je.InternalError]: "Something went wrong when respawning",
    [Je.ReviveDisabled]: "Revive is disabled in this game",
    [Je.ReviveNotAvailable]: "You cannot revive at this time",
    [Je.ReviveRejected]: "Your revive request was rejected",
    [Je.ReviveConsecutive]: "You cannot use revive consecutively",
    [Je.ReviveQuantity]: "You do not have any revives remaining",
    [Je.ReviveCooldown]: "You cannot revive yet",
    [Je.ReviveNotPending]: "There is no pending revive decision",
    [Je.ReviveDecisionTimeout]: "You did not respond to the revive decision in time"
}
  , Co = ["Q", "W", "E", "R", "F", "D", "S", "A"]
  , i2 = (t, e=!1) => {
    switch (t.type) {
    case M.Invincibility:
        return {
            t: t.type,
            a: t.activation,
            d: t.duration,
            o: t.oneWay,
            as: t.allowSpawn,
            ru: t.requiresUpgrade
        };
    case M.SuperBoost:
        return {
            t: t.type,
            d: t.duration,
            s: t.speed,
            as: t.allowSpawn,
            ru: t.requiresUpgrade
        };
    case M.IceBomb:
        return {
            t: t.type,
            a: t.activation,
            d: t.duration,
            f: t.fadeDuration,
            fo: t.fadeOutDuration,
            td: t.throwDistance,
            r: t.radius,
            s: t.speed,
            o: t.oneWay,
            w: t.angularVelocity,
            eed: t.extendExitDuration,
            ree: t.resetExitOnEnter,
            as: t.allowSpawn,
            ro: t.removalConditions,
            mi: t.maxConcurrentInstances,
            do: t.deleteOldestOnMaxConcurrent,
            mrd: t.mapRemovalDistance,
            ru: t.requiresUpgrade,
            sdr: t.spawnCollisionDisableRadius
        };
    case M.Wall:
        return {
            t: t.type,
            a: t.activation,
            d: t.duration,
            fo: t.fadeOutDuration,
            td: t.throwDistance,
            w: t.width,
            l: t.length,
            o: t.oneWay,
            an: t.angles,
            as: t.allowSpawn,
            ro: t.removalConditions,
            mi: t.maxConcurrentInstances,
            do: t.deleteOldestOnMaxConcurrent,
            mrd: t.mapRemovalDistance,
            ru: t.requiresUpgrade,
            sdr: t.spawnCollisionDisableRadius
        };
    case M.Arrow:
        return {
            t: t.type,
            a: t.activation,
            d: t.duration,
            fo: t.fadeOutDuration,
            w: t.width,
            l: t.length,
            o: t.oneWay,
            v: t.invincibility,
            s: t.speed,
            b: t.superBoostSpeed,
            m: t.multiKill,
            as: t.allowSpawn,
            mi: t.maxConcurrentInstances,
            do: t.deleteOldestOnMaxConcurrent,
            ru: t.requiresUpgrade
        };
    case M.ZoomOut:
        return {
            t: t.type,
            d: t.duration,
            m: t.multiplier,
            l: t.limits,
            as: t.allowSpawn,
            ru: t.requiresUpgrade
        };
    default:
        {
            if (!e)
                return null;
            let n;
            try {
                n = `${JSON.stringify(t)} was not an InGameItem`
            } catch (i) {
                n = `'${t}' (type '${t.type}', unserializable: ${i}) was not an InGameItem`
            }
            throw new Error(n)
        }
    }
}
  , i8 = (t, e, n) => {
    const i = i2({
        type: t,
        ...e
    }, n);
    if (i == null)
        return null;
    const {t: s, ...r} = i;
    return r
}
  , s2 = (t, e) => {
    switch (t.t) {
    case M.Invincibility:
        return {
            type: t.t,
            activation: t.a,
            duration: t.d,
            oneWay: t.o,
            allowSpawn: t.as,
            requiresUpgrade: t.ru
        };
    case M.SuperBoost:
        return {
            type: t.t,
            duration: t.d,
            speed: t.s,
            allowSpawn: t.as,
            requiresUpgrade: t.ru
        };
    case M.IceBomb:
        return {
            type: t.t,
            activation: t.a,
            duration: t.d,
            fadeDuration: t.f,
            fadeOutDuration: t.fo,
            throwDistance: t.td,
            radius: t.r,
            speed: t.s,
            oneWay: t.o,
            angularVelocity: t.w,
            extendExitDuration: t.eed,
            resetExitOnEnter: t.ree,
            allowSpawn: t.as,
            removalConditions: t.ro,
            maxConcurrentInstances: t.mi,
            mapRemovalDistance: t.mrd,
            requiresUpgrade: t.ru,
            spawnCollisionDisableRadius: t.sdr
        };
    case M.Wall:
        return {
            type: t.t,
            activation: t.a,
            duration: t.d,
            fadeOutDuration: t.fo,
            throwDistance: t.td,
            width: t.w,
            length: t.l,
            oneWay: t.o,
            angles: t.an,
            allowSpawn: t.as,
            removalConditions: t.ro,
            maxConcurrentInstances: t.mi,
            mapRemovalDistance: t.mrd,
            requiresUpgrade: t.ru,
            spawnCollisionDisableRadius: t.sdr
        };
    case M.Arrow:
        return {
            type: t.t,
            activation: t.a,
            duration: t.d,
            fadeOutDuration: t.fo,
            width: t.w,
            length: t.l,
            oneWay: t.o,
            invincibility: t.v,
            speed: t.s,
            superBoostSpeed: t.b,
            multiKill: t.m,
            allowSpawn: t.as,
            maxConcurrentInstances: t.mi,
            requiresUpgrade: t.ru
        };
    case M.ZoomOut:
        return {
            type: t.t,
            duration: t.d,
            multiplier: t.m,
            limits: t.l,
            allowSpawn: t.as,
            requiresUpgrade: t.ru
        };
    default:
        {
            if (!e)
                return null;
            let n;
            try {
                n = `${JSON.stringify(t)} was not an InGameItem`
            } catch (i) {
                n = `'${t}' (type '${t.type}', unserializable: ${i}) was not an InGameItem`
            }
            throw new Error(n)
        }
    }
}
  , s8 = (t, e, n) => {
    const i = s2({
        t,
        ...e
    }, n);
    if (i == null)
        return null;
    const {type: s, ...r} = i;
    return r
}
  , r2 = {
    [M.Invincibility]: "무적",
    [M.SuperBoost]: "슈퍼 부스트",
    [M.IceBomb]: "얼음 폭탄",
    [M.Wall]: "벽",
    [M.Arrow]: "화살",
    [M.ZoomOut]: "비전 프로",
    [Et.Revive]: "죽은 후 부활"
}
  , o2 = {
    [M.Invincibility]: "2초 동안 죽지 않습니다. 재사용 대기시간: 30초.",
    [M.SuperBoost]: "부스트 속도가 10초 동안 25% 증가합니다. 재사용 대기시간: 45초.",
    [M.IceBomb]: "다른 벌름을 5초 동안 33% 느려지게 하는 투사체를 발사합니다.",
    [M.Wall]: "충돌한 벌름을 처치하는 벽을 생성합니다. 벽은 당신이 죽을 때까지 유지됩니다. 재사용 대기시간: 25초.",
    [M.Arrow]: "즉시 처치하는 빠른 화살을 발사합니다. 재사용 대기시간: 20초.",
    [M.ZoomOut]: "시야가 25초 동안 증가합니다. 재사용 대기시간: 25초.",
    [Et.Revive]: "죽은 후 부활"
}
  , a2 = {
    [M.Invincibility]: "죽지 않음",
    [M.SuperBoost]: "부스트 속도 25% 증가",
    [M.IceBomb]: "33% 느려지는 투사체 발사",
    [M.Wall]: "충돌 시 처치하는 벽 생성",
    [M.Arrow]: "즉시 처치하는 화살 발사",
    [M.ZoomOut]: "시야 100% 증가",
    [Et.Revive]: "죽은 후 부활"
}
  , l2 = {
    [M.Invincibility]: "죽지 않음",
    [M.SuperBoost]: "부스트 속도 증가",
    [M.IceBomb]: "다른 벌름을 느려지게 함",
    [M.Wall]: "충돌 시 처치",
    [M.Arrow]: "벌름을 쏘아 맞힘",
    [M.ZoomOut]: "시야 증가",
    [Et.Revive]: "죽은 후 부활"
}
  , r8 = {
    en: Ys,
    ko: r2
}
  , o8 = {
    en: t2,
    ko: o2
}
  , a8 = {
    en: tn,
    ko: a2
}
  , l8 = {
    en: n2,
    ko: l2
}
  , se = {
    Invincibility: 1,
    SuperBoost: 2,
    IceBomb: 3,
    Wall: 4,
    Arrow: 5,
    ZoomOut: 6
}
  , c8 = [se.Invincibility, se.SuperBoost, se.IceBomb, se.Wall, se.Arrow, se.ZoomOut]
  , u8 = {
    [se.Invincibility]: M.Invincibility,
    [se.SuperBoost]: M.SuperBoost,
    [se.IceBomb]: M.IceBomb,
    [se.Wall]: M.Wall,
    [se.Arrow]: M.Arrow,
    [se.ZoomOut]: M.ZoomOut
}
  , d8 = {
    [M.Invincibility]: [se.Invincibility],
    [M.SuperBoost]: [se.SuperBoost],
    [M.IceBomb]: [se.IceBomb],
    [M.Wall]: [se.Wall],
    [M.Arrow]: [se.Arrow],
    [M.ZoomOut]: [se.ZoomOut]
}
  , h8 = Object.values(se)
  , bo = {
    [se.Invincibility]: "Invincibility",
    [se.SuperBoost]: "Super Boost",
    [se.IceBomb]: "Ice Bomb",
    [se.Wall]: "Wall",
    [se.Arrow]: "Arrow",
    [se.ZoomOut]: "Vision Pro"
}
  , f8 = {
    [se.Invincibility]: tn[M.Invincibility],
    [se.SuperBoost]: tn[M.SuperBoost],
    [se.IceBomb]: tn[M.IceBomb],
    [se.Wall]: tn[M.Wall],
    [se.Arrow]: tn[M.Arrow],
    [se.ZoomOut]: tn[M.ZoomOut]
}
  , m8 = (t, e, n, i=!1) => {
    let s = 1n
      , r = 0n
      , o = 0n
      , a = 0
      , c = BigInt(n);
    for (const d of t) {
        const h = e[d];
        if (h == null) {
            if (i)
                continue;
            throw new Error(`Upgrade ${bo[d]} (${d}) not found in config`)
        }
        if (h.disabled) {
            if (i)
                continue;
            throw new Error(`Upgrade ${bo[d]} (${d}) is disabled`)
        }
        const f = BigInt(h.spawnMultiplier);
        switch (h.mode) {
        case "mul":
            s *= f,
            a++;
            break;
        case "add-pre":
            r += f;
            break;
        case "add-post":
            o += f;
            break
        }
    }
    let u = (c + r) * s / c ** BigInt(a) + o;
    return Number(u)
}
  , ks = 768;
/*! @license Rematrix v0.2.2

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
function Qs(t) {
    if (t.constructor !== Array)
        throw new TypeError("Expected array.");
    if (t.length === 16)
        return t;
    if (t.length === 6) {
        var e = On();
        return e[0] = t[0],
        e[1] = t[1],
        e[4] = t[2],
        e[5] = t[3],
        e[12] = t[4],
        e[13] = t[5],
        e
    }
    throw new RangeError("Expected array with either 6 or 16 values.")
}
function On() {
    for (var t = [], e = 0; e < 16; e++)
        e % 5 == 0 ? t.push(1) : t.push(0);
    return t
}
function c2(t, e) {
    for (var n = Qs(t), i = Qs(e), s = [], r = 0; r < 4; r++)
        for (var o = [n[r], n[r + 4], n[r + 8], n[r + 12]], a = 0; a < 4; a++) {
            var c = a * 4
              , u = [i[c], i[c + 1], i[c + 2], i[c + 3]]
              , d = o[0] * u[0] + o[1] * u[1] + o[2] * u[2] + o[3] * u[3];
            s[r + c] = d
        }
    return s
}
function u2(t) {
    if (typeof t == "string") {
        var e = t.match(/matrix(3d)?\(([^)]+)\)/);
        if (e) {
            var n = e[2].split(", ").map(parseFloat);
            return Qs(n)
        }
    }
    return On()
}
function d2(t) {
    var e = On();
    return e[0] = t,
    e
}
function h2(t) {
    var e = On();
    return e[5] = t,
    e
}
function f2(t) {
    var e = On();
    return e[12] = t,
    e
}
function m2(t) {
    var e = On();
    return e[13] = t,
    e
}
var Bi = function(t) {
    return typeof t == "number"
}
  , Ja = function(t) {
    return typeof t == "function"
}
  , e1 = function(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
  , _n = function(t) {
    return Array.prototype.slice.apply(t)
}
  , t1 = function(t) {
    var e = t.reduce(function(n, i) {
        return n[i] = (n[i] || 0) + 1,
        n
    }, {});
    return Object.keys(e).filter(function(n) {
        return e[n] > 1
    })
};
function Bt(t) {
    return [].slice.call(arguments, 1).forEach(function(e) {
        if (e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    }),
    t
}
var Xs, Js = function(t, e, n) {
    return t + (e - t) * n
}, n1 = {
    __proto__: null,
    isNumber: Bi,
    isFunction: Ja,
    isObject: e1,
    toArray: _n,
    getDuplicateValsAsStrings: t1,
    assign: Bt,
    tweenProp: Js
}, Pr = "data-flip-id", Er = "data-inverse-flip-id", Lr = "data-portal-key", p2 = "data-exit-container", Ii = {
    __proto__: null,
    DATA_FLIP_ID: Pr,
    DATA_INVERSE_FLIP_ID: Er,
    DATA_FLIP_CONFIG: "data-flip-config",
    DATA_PORTAL_KEY: Lr
}, er = {
    noWobble: {
        stiffness: 200,
        damping: 26
    },
    gentle: {
        stiffness: 120,
        damping: 14
    },
    veryGentle: {
        stiffness: 130,
        damping: 17
    },
    wobbly: {
        stiffness: 180,
        damping: 12
    },
    stiff: {
        stiffness: 260,
        damping: 26
    }
}, wo = function(t) {
    return e1(t) ? t : Object.keys(er).indexOf(t) > -1 ? er[t] : {}
};
typeof window < "u" && (Xs = window.requestAnimationFrame);
var g2 = Xs = Xs || function(t) {
    window.setTimeout(t, 1e3 / 60)
}
  , y2 = Date.now()
  , v2 = typeof performance == "object" && typeof performance.now == "function" ? function() {
    return performance.now()
}
: function() {
    return Date.now() - y2
}
;
function i1(t, e) {
    var n = t.indexOf(e);
    n !== -1 && t.splice(n, 1)
}
var x2 = function() {
    function t() {}
    return t.prototype.run = function() {
        var e = this;
        g2(function() {
            e.springSystem.loop(v2())
        })
    }
    ,
    t
}()
  , Is = function() {
    this.position = 0,
    this.velocity = 0
}
  , C2 = 0
  , ot = .001
  , b2 = function() {
    function t(n) {
        this._id = "s" + C2++,
        this._springSystem = n,
        this.listeners = [],
        this._startValue = 0,
        this._currentState = new Is,
        this._displacementFromRestThreshold = .001,
        this._endValue = 0,
        this._overshootClampingEnabled = !1,
        this._previousState = new Is,
        this._restSpeedThreshold = .001,
        this._tempState = new Is,
        this._timeAccumulator = 0,
        this._wasAtRest = !0,
        this._cachedSpringConfig = {}
    }
    var e = t.prototype;
    return e.getId = function() {
        return this._id
    }
    ,
    e.destroy = function() {
        this.listeners = [],
        this._springSystem.deregisterSpring(this)
    }
    ,
    e.setSpringConfig = function(n) {
        return this._springConfig = n,
        this
    }
    ,
    e.getCurrentValue = function() {
        return this._currentState.position
    }
    ,
    e.getDisplacementDistanceForState = function(n) {
        return Math.abs(this._endValue - n.position)
    }
    ,
    e.setEndValue = function(n) {
        if (n === this._endValue)
            return this;
        if (this.prevEndValue = n,
        this._endValue === n && this.isAtRest())
            return this;
        this._startValue = this.getCurrentValue(),
        this._endValue = n,
        this._springSystem.activateSpring(this.getId());
        for (var i = 0, s = this.listeners.length; i < s; i++) {
            var r = this.listeners[i].onSpringEndStateChange;
            r && r(this)
        }
        return this
    }
    ,
    e.setVelocity = function(n) {
        return n === this._currentState.velocity || (this._currentState.velocity = n,
        this._springSystem.activateSpring(this.getId())),
        this
    }
    ,
    e.setCurrentValue = function(n) {
        this._startValue = n,
        this._currentState.position = n;
        for (var i = 0, s = this.listeners.length; i < s; i++) {
            var r = this.listeners[i];
            r.onSpringUpdate && r.onSpringUpdate(this)
        }
        return this
    }
    ,
    e.setAtRest = function() {
        return this._endValue = this._currentState.position,
        this._tempState.position = this._currentState.position,
        this._currentState.velocity = 0,
        this
    }
    ,
    e.setOvershootClampingEnabled = function(n) {
        return this._overshootClampingEnabled = n,
        this
    }
    ,
    e.isOvershooting = function() {
        var n = this._startValue
          , i = this._endValue;
        return this._springConfig.tension > 0 && (n < i && this.getCurrentValue() > i || n > i && this.getCurrentValue() < i)
    }
    ,
    e.advance = function(n, i) {
        var s = this.isAtRest();
        if (!s || !this._wasAtRest) {
            var r = i;
            i > .064 && (r = .064),
            this._timeAccumulator += r;
            for (var o, a, c, u, d, h, f = this._springConfig.tension, m = this._springConfig.friction, g = this._currentState.position, p = this._currentState.velocity, v = this._tempState.position, x = this._tempState.velocity; this._timeAccumulator >= ot; )
                this._timeAccumulator -= ot,
                this._timeAccumulator < ot && (this._previousState.position = g,
                this._previousState.velocity = p),
                a = f * (this._endValue - v) - m * p,
                u = f * (this._endValue - (v = g + (o = p) * ot * .5)) - m * (x = p + a * ot * .5),
                h = f * (this._endValue - (v = g + (c = x) * ot * .5)) - m * (x = p + u * ot * .5),
                v = g + (d = x) * ot,
                g += 1 / 6 * (o + 2 * (c + d) + (x = p + h * ot)) * ot,
                p += 1 / 6 * (a + 2 * (u + h) + (f * (this._endValue - v) - m * x)) * ot;
            this._tempState.position = v,
            this._tempState.velocity = x,
            this._currentState.position = g,
            this._currentState.velocity = p,
            this._timeAccumulator > 0 && this._interpolate(this._timeAccumulator / ot),
            (this.isAtRest() || this._overshootClampingEnabled && this.isOvershooting()) && (this._springConfig.tension > 0 ? (this._startValue = this._endValue,
            this._currentState.position = this._endValue) : (this._endValue = this._currentState.position,
            this._startValue = this._endValue),
            this.setVelocity(0),
            s = !0);
            var y = !1;
            this._wasAtRest && (this._wasAtRest = !1,
            y = !0);
            var b = !1;
            s && (this._wasAtRest = !0,
            b = !0),
            this.notifyPositionUpdated(y, b)
        }
    }
    ,
    e.notifyPositionUpdated = function(n, i) {
        var s = this;
        this.listeners.filter(Boolean).forEach(function(r) {
            n && r.onSpringActivate && !s._onActivateCalled && (r.onSpringActivate(s),
            s._onActivateCalled = !0),
            r.onSpringUpdate && r.onSpringUpdate(s),
            i && r.onSpringAtRest && r.onSpringAtRest(s)
        })
    }
    ,
    e.systemShouldAdvance = function() {
        return !this.isAtRest() || !this.wasAtRest()
    }
    ,
    e.wasAtRest = function() {
        return this._wasAtRest
    }
    ,
    e.isAtRest = function() {
        return Math.abs(this._currentState.velocity) < this._restSpeedThreshold && (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || this._springConfig.tension === 0)
    }
    ,
    e._interpolate = function(n) {
        this._currentState.position = this._currentState.position * n + this._previousState.position * (1 - n),
        this._currentState.velocity = this._currentState.velocity * n + this._previousState.velocity * (1 - n)
    }
    ,
    e.addListener = function(n) {
        return this.listeners.push(n),
        this
    }
    ,
    e.addOneTimeListener = function(n) {
        var i = this;
        return Object.keys(n).forEach(function(s) {
            var r;
            n[s] = (r = n[s],
            function() {
                r.apply(void 0, [].slice.call(arguments)),
                i.removeListener(n)
            }
            )
        }),
        this.listeners.push(n),
        this
    }
    ,
    e.removeListener = function(n) {
        return i1(this.listeners, n),
        this
    }
    ,
    t
}()
  , s1 = function() {
    function t(n) {
        this.looper = n || new x2,
        this.looper.springSystem = this,
        this.listeners = [],
        this._activeSprings = [],
        this._idleSpringIndices = [],
        this._isIdle = !0,
        this._lastTimeMillis = -1,
        this._springRegistry = {}
    }
    var e = t.prototype;
    return e.createSpring = function(n, i) {
        return this.createSpringWithConfig({
            tension: n,
            friction: i
        })
    }
    ,
    e.createSpringWithConfig = function(n) {
        var i = new b2(this);
        return this.registerSpring(i),
        i.setSpringConfig(n),
        i
    }
    ,
    e.getIsIdle = function() {
        return this._isIdle
    }
    ,
    e.registerSpring = function(n) {
        this._springRegistry[n.getId()] = n
    }
    ,
    e.deregisterSpring = function(n) {
        i1(this._activeSprings, n),
        delete this._springRegistry[n.getId()]
    }
    ,
    e.advance = function(n, i) {
        for (var s = this; this._idleSpringIndices.length > 0; )
            this._idleSpringIndices.pop();
        for (this._activeSprings.filter(Boolean).forEach(function(o) {
            o.systemShouldAdvance() ? o.advance(n / 1e3, i / 1e3) : s._idleSpringIndices.push(s._activeSprings.indexOf(o))
        }); this._idleSpringIndices.length > 0; ) {
            var r = this._idleSpringIndices.pop();
            r >= 0 && this._activeSprings.splice(r, 1)
        }
    }
    ,
    e.loop = function(n) {
        var i;
        this._lastTimeMillis === -1 && (this._lastTimeMillis = n - 1);
        var s = n - this._lastTimeMillis;
        this._lastTimeMillis = n;
        var r = 0
          , o = this.listeners.length;
        for (r = 0; r < o; r++)
            (i = this.listeners[r]).onBeforeIntegrate && i.onBeforeIntegrate(this);
        for (this.advance(n, s),
        this._activeSprings.length === 0 && (this._isIdle = !0,
        this._lastTimeMillis = -1),
        r = 0; r < o; r++)
            (i = this.listeners[r]).onAfterIntegrate && i.onAfterIntegrate(this);
        this._isIdle || this.looper.run()
    }
    ,
    e.activateSpring = function(n) {
        var i = this._springRegistry[n];
        this._activeSprings.indexOf(i) === -1 && this._activeSprings.push(i),
        this.getIsIdle() && (this._isIdle = !1,
        this.looper.run())
    }
    ,
    t
}()
  , w2 = new s1
  , r1 = function(t) {
    var e = t.springConfig
      , n = e.overshootClamping
      , i = t.getOnUpdateFunc
      , s = t.onAnimationEnd
      , r = t.onSpringActivate
      , o = w2.createSpring(e.stiffness, e.damping);
    o.setOvershootClampingEnabled(!!n);
    var a = {
        onSpringActivate: r,
        onSpringAtRest: function() {
            o.destroy(),
            s()
        },
        onSpringUpdate: i({
            spring: o,
            onAnimationEnd: s
        })
    };
    return o.addListener(a),
    o
}
  , So = function(t) {
    var e = r1(t);
    return e.setEndValue(1),
    e
}
  , _o = function(t, e) {
    if (e === void 0 && (e = {}),
    t && t.length) {
        e.reverse && t.reverse();
        var n, i = typeof (n = e.speed) != "number" ? 1.1 : 1 + Math.min(Math.max(5 * n, 0), 5), s = 1 / Math.max(Math.min(t.length, 100), 10), r = t.map(function(o, a) {
            var c = o.getOnUpdateFunc;
            return o.getOnUpdateFunc = function(u) {
                var d = c(u);
                return function(h) {
                    var f = h.getCurrentValue();
                    (f = f < .01 ? 0 : f > .99 ? 1 : f) >= s && r[a + 1] && r[a + 1](Math.max(Math.min(f * i, 1), 0)),
                    d(h)
                }
            }
            ,
            o
        }).map(function(o) {
            var a = r1(o);
            if (a)
                return a.setEndValue.bind(a)
        }).filter(Boolean);
        r[0] && r[0](1)
    }
}
  , ko = function(t) {
    return [0, 1, 4, 5, 12, 13].map(function(e) {
        return t[e]
    })
}
  , Io = function(t) {
    return t.top < window.innerHeight && t.bottom > 0 && t.left < window.innerWidth && t.right > 0
};
function Mo(t) {
    return JSON.parse(t.dataset.flipConfig || "{}")
}
var o1 = function(t, e) {
    var n;
    return Bt(t, ((n = {})[e[0]] = e[1],
    n))
}
  , a1 = function(t, e) {
    return _n(e ? document.querySelectorAll("[" + Lr + '="' + e + '"]') : t.querySelectorAll("[" + Pr + "]"))
}
  , l1 = function(t) {
    return t.map(function(e) {
        return [e, e.getBoundingClientRect()]
    })
}
  , Tr = !0
  , S2 = function() {
    return Tr = !1
}
  , _2 = function() {
    return Tr = !0
}
  , k2 = function(t) {
    var e = t.cachedOrderedFlipIds
      , n = e === void 0 ? [] : e
      , i = t.inProgressAnimations
      , s = i === void 0 ? {} : i
      , r = t.flippedElementPositionsBeforeUpdate
      , o = r === void 0 ? {} : r
      , a = t.flipCallbacks
      , c = a === void 0 ? {} : a
      , u = t.containerEl
      , d = t.applyTransformOrigin
      , h = t.spring
      , f = t.debug
      , m = t.portalKey
      , g = t.staggerConfig
      , p = g === void 0 ? {} : g
      , v = t.decisionData
      , x = v === void 0 ? {} : v
      , y = t.handleEnterUpdateDelete
      , b = t.onComplete
      , S = t.onStart;
    if (Tr && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var k, I = l1(a1((k = {
            element: u,
            portalKey: m
        }).element, k.portalKey)).map(function(j) {
            var Z = j[0]
              , Q = j[1]
              , N = window.getComputedStyle(Z);
            return [Z.dataset.flipId, {
                element: Z,
                rect: Q,
                opacity: parseFloat(N.opacity),
                transform: N.transform
            }]
        }).reduce(o1, {}), R = function(j) {
            var Z = j.containerEl
              , Q = j.portalKey;
            return Q ? function(N) {
                return function(O) {
                    return _n(document.querySelectorAll("[" + Lr + '="' + N + '"]' + O))
                }
            }(Q) : Z ? function(N) {
                var O = Math.random().toFixed(5);
                return N.dataset.flipperId = O,
                function(Y) {
                    return _n(N.querySelectorAll('[data-flipper-id="' + O + '"] ' + Y))
                }
            }(Z) : function() {
                return []
            }
        }({
            containerEl: u,
            portalKey: m
        }), T = function(j) {
            return function(Z) {
                return j("[" + Pr + '="' + Z + '"]')[0]
            }
        }(R), P = function(j) {
            return o[j] && I[j]
        }, w = Object.keys(o).concat(Object.keys(I)).filter(function(j) {
            return !P(j)
        }), A = {
            flipCallbacks: c,
            getElement: T,
            flippedElementPositionsBeforeUpdate: o,
            flippedElementPositionsAfterUpdate: I,
            inProgressAnimations: s,
            decisionData: x
        }, D = function(j) {
            var Z, Q = j.unflippedIds, N = j.flipCallbacks, O = j.getElement, Y = j.flippedElementPositionsBeforeUpdate, ue = j.flippedElementPositionsAfterUpdate, pe = j.inProgressAnimations, q = j.decisionData, W = Q.filter(function(X) {
                return ue[X]
            }).filter(function(X) {
                return N[X] && N[X].onAppear
            }), ie = Q.filter(function(X) {
                return Y[X] && N[X] && N[X].onExit
            }), ne = new Promise(function(X) {
                Z = X
            }
            ), le = [], Ae = 0, V = ie.map(function(X, xe) {
                var ge = Y[X].domDataForExitAnimations
                  , de = ge.element
                  , _e = ge.parent
                  , he = ge.childPosition
                  , Ce = he.top
                  , ze = he.left
                  , we = he.width
                  , ve = he.height;
                getComputedStyle(_e).position === "static" && (_e.style.position = "relative"),
                de.style.transform = "matrix(1, 0, 0, 1, 0, 0)",
                de.style.position = "absolute",
                de.style.top = Ce + "px",
                de.style.left = ze + "px",
                de.style.height = ve + "px",
                de.style.width = we + "px";
                var Oe = le.filter(function(st) {
                    return st[0] === _e
                })[0];
                Oe || (Oe = [_e, document.createDocumentFragment()],
                le.push(Oe)),
                Oe[1].appendChild(de),
                Ae += 1;
                var He = function() {
                    try {
                        _e.removeChild(de)
                    } catch {} finally {
                        (Ae -= 1) == 0 && Z()
                    }
                };
                return pe[X] = {
                    stop: He
                },
                function() {
                    return N[X].onExit(de, xe, He, q)
                }
            });
            return le.forEach(function(X) {
                X[0].appendChild(X[1])
            }),
            V.length || Z(),
            {
                hideEnteringElements: function() {
                    W.forEach(function(X) {
                        var xe = O(X);
                        xe && (xe.style.opacity = "0")
                    })
                },
                animateEnteringElements: function() {
                    W.forEach(function(X, xe) {
                        var ge = O(X);
                        ge && N[X].onAppear(ge, xe, q)
                    })
                },
                animateExitingElements: function() {
                    return V.forEach(function(X) {
                        return X()
                    }),
                    ne
                }
            }
        }(Bt({}, A, {
            unflippedIds: w
        })), _ = D.hideEnteringElements, z = D.animateEnteringElements, F = D.animateExitingElements, U = Bt({}, A, {
            containerEl: u,
            flippedIds: n.filter(P),
            applyTransformOrigin: d,
            spring: h,
            debug: f,
            staggerConfig: p,
            scopedSelector: R,
            onComplete: b
        });
        S && S(u, x);
        var G = function(j) {
            var Z, Q = j.flippedIds, N = j.flipCallbacks, O = j.inProgressAnimations, Y = j.flippedElementPositionsBeforeUpdate, ue = j.flippedElementPositionsAfterUpdate, pe = j.applyTransformOrigin, q = j.spring, W = j.getElement, ie = j.debug, ne = j.staggerConfig, le = ne === void 0 ? {} : ne, Ae = j.decisionData, V = Ae === void 0 ? {} : Ae, X = j.onComplete, xe = j.containerEl, ge = new Promise(function(H) {
                Z = H
            }
            );
            if (X && ge.then(function() {
                return X(xe, V)
            }),
            !Q.length)
                return function() {
                    return Z([]),
                    ge
                }
                ;
            var de = []
              , _e = W(Q[0])
              , he = _e ? _e.ownerDocument.querySelector("body") : document.querySelector("body");
            t1(Q);
            var Ce = Q.map(function(H) {
                var fe = Y[H].rect
                  , ke = ue[H].rect
                  , Qt = Y[H].opacity
                  , fi = ue[H].opacity
                  , mi = ke.width < 1 || ke.height < 1
                  , Te = ue[H].element;
                if (!Io(fe) && !Io(ke) || !Te)
                    return !1;
                var pi, gi, yi, lt = Mo(Te), vi = (yi = (gi = (pi = {
                    flipperSpring: q,
                    flippedSpring: lt.spring
                }) === void 0 ? {} : pi).flippedSpring,
                Bt({}, er.noWobble, wo(gi.flipperSpring), wo(yi))), xi = lt.stagger === !0 ? "default" : lt.stagger, fs = {
                    element: Te,
                    id: H,
                    stagger: xi,
                    springConfig: vi
                };
                if (N[H] && N[H].shouldFlip && !N[H].shouldFlip(V.previous, V.current))
                    return !1;
                var ms = Math.abs(fe.left - ke.left) + Math.abs(fe.top - ke.top)
                  , ps = Math.abs(fe.width - ke.width) + Math.abs(fe.height - ke.height)
                  , gs = Math.abs(fi - Qt);
                if (fe.height === 0 && ke.height === 0 || fe.width === 0 && ke.width === 0 || ms < .5 && ps < .5 && gs < .01)
                    return !1;
                var Lt = u2(ue[H].transform)
                  , Xt = {
                    matrix: Lt
                }
                  , Tt = {
                    matrix: []
                }
                  , $n = [Lt];
                lt.translate && ($n.push(f2(fe.left - ke.left)),
                $n.push(m2(fe.top - ke.top))),
                lt.scale && ($n.push(d2(Math.max(fe.width, 1) / Math.max(ke.width, 1))),
                $n.push(h2(Math.max(fe.height, 1) / Math.max(ke.height, 1)))),
                lt.opacity && (Tt.opacity = Qt,
                Xt.opacity = fi);
                var Ci = [];
                if (!N[H] || !N[H].shouldInvert || N[H].shouldInvert(V.previous, V.current)) {
                    var Cl = function($e, Ke) {
                        return _n($e.querySelectorAll("[" + Er + '="' + Ke + '"]'))
                    }(Te, H);
                    Ci = Cl.map(function($e) {
                        return [$e, Mo($e)]
                    })
                }
                Tt.matrix = ko($n.reduce(c2)),
                Xt.matrix = ko(Xt.matrix);
                var ys, Zr = function($e) {
                    var Ke = $e.element
                      , Jt = $e.invertedChildren
                      , Un = $e.body;
                    return function(hn) {
                        var en = hn.matrix
                          , bi = hn.opacity
                          , vs = hn.forceMinVals;
                        if (Bi(bi) && (Ke.style.opacity = bi + ""),
                        vs && (Ke.style.minHeight = "1px",
                        Ke.style.minWidth = "1px"),
                        en) {
                            var wl = function(Wn) {
                                return "matrix(" + Wn.join(", ") + ")"
                            }(en);
                            Ke.style.transform = wl,
                            Jt && function(Wn) {
                                var wi = Wn.matrix
                                  , Sl = Wn.body;
                                Wn.invertedChildren.forEach(function(Xr) {
                                    var Jr = Xr[0]
                                      , eo = Xr[1];
                                    if (Sl.contains(Jr)) {
                                        var to = wi[0]
                                          , no = wi[3]
                                          , _l = wi[5]
                                          , Dt = {
                                            translateX: 0,
                                            translateY: 0,
                                            scaleX: 1,
                                            scaleY: 1
                                        }
                                          , xs = "";
                                        eo.translate && (Dt.translateX = -wi[4] / to,
                                        Dt.translateY = -_l / no,
                                        xs += "translate(" + Dt.translateX + "px, " + Dt.translateY + "px)"),
                                        eo.scale && (Dt.scaleX = 1 / to,
                                        Dt.scaleY = 1 / no,
                                        xs += " scale(" + Dt.scaleX + ", " + Dt.scaleY + ")"),
                                        Jr.style.transform = xs
                                    }
                                })
                            }({
                                invertedChildren: Jt,
                                matrix: en,
                                body: Un
                            })
                        }
                    }
                }({
                    element: Te,
                    invertedChildren: Ci,
                    body: he
                });
                if (N[H] && N[H].onComplete) {
                    var bl = N[H].onComplete;
                    ys = function() {
                        return bl(Te, V)
                    }
                }
                var Yr = Bi(Tt.opacity) && Bi(Xt.opacity) && Tt.opacity !== Xt.opacity
                  , Qr = !1;
                return Bt({}, fs, {
                    stagger: xi,
                    springConfig: vi,
                    getOnUpdateFunc: function($e) {
                        var Ke = $e.spring
                          , Jt = $e.onAnimationEnd;
                        return O[H] = {
                            destroy: Ke.destroy.bind(Ke),
                            onAnimationEnd: Jt
                        },
                        function(Un) {
                            N[H] && N[H].onSpringUpdate && N[H].onSpringUpdate(Un.getCurrentValue()),
                            Qr || (Qr = !0,
                            N[H] && N[H].onStart && N[H].onStart(Te, V));
                            var hn = Un.getCurrentValue();
                            if (he.contains(Te)) {
                                var en = {
                                    matrix: []
                                };
                                en.matrix = Tt.matrix.map(function(bi, vs) {
                                    return Js(bi, Xt.matrix[vs], hn)
                                }),
                                Yr && (en.opacity = Js(Tt.opacity, Xt.opacity, hn)),
                                Zr(en)
                            } else
                                Un.destroy()
                        }
                    },
                    initializeFlip: function() {
                        Zr({
                            matrix: Tt.matrix,
                            opacity: Yr ? Tt.opacity : void 0,
                            forceMinVals: mi
                        }),
                        N[H] && N[H].onStartImmediate && N[H].onStartImmediate(Te, V),
                        lt.transformOrigin ? Te.style.transformOrigin = lt.transformOrigin : pe && (Te.style.transformOrigin = "0 0"),
                        Ci.forEach(function($e) {
                            var Ke = $e[0]
                              , Jt = $e[1];
                            Jt.transformOrigin ? Ke.style.transformOrigin = Jt.transformOrigin : pe && (Ke.style.transformOrigin = "0 0")
                        })
                    },
                    onAnimationEnd: function($e) {
                        delete O[H],
                        Ja(ys) && ys(),
                        Te.style.transform = "",
                        Ci.forEach(function(Ke) {
                            Ke[0].style.transform = ""
                        }),
                        mi && Te && (Te.style.minHeight = "",
                        Te.style.minWidth = ""),
                        $e || (de.push(H),
                        de.length >= Ce.length && Z(de))
                    },
                    delayUntil: lt.delayUntil
                })
            }).filter(Boolean);
            if (Ce.forEach(function(H) {
                return (0,
                H.initializeFlip)()
            }),
            ie)
                return function() {}
                ;
            var ze = Ce.filter(function(H) {
                return H.delayUntil && (fe = H.delayUntil,
                Ce.filter(function(ke) {
                    return ke.id === fe
                }).length);
                var fe
            })
              , we = {}
              , ve = {}
              , Oe = {};
            ze.forEach(function(H) {
                H.stagger ? (Oe[H.stagger] = !0,
                ve[H.delayUntil] ? ve[H.delayUntil].push(H.stagger) : ve[H.delayUntil] = [H.stagger]) : we[H.delayUntil] ? we[H.delayUntil].push(H) : we[H.delayUntil] = [H]
            });
            var He = Ce.filter(function(H) {
                return H.stagger
            }).reduce(function(H, fe) {
                return H[fe.stagger] ? H[fe.stagger].push(fe) : H[fe.stagger] = [fe],
                H
            }, {})
              , st = Ce.filter(function(H) {
                return ze.indexOf(H) === -1
            });
            return st.forEach(function(H) {
                H.onSpringActivate = function() {
                    we[H.id] && we[H.id].forEach(So),
                    ve[H.id] && Object.keys(ve[H.id].reduce(function(fe, ke) {
                        var Qt;
                        return Bt(fe, ((Qt = {})[ke] = !0,
                        Qt))
                    }, {})).forEach(function(fe) {
                        _o(He[fe], le[fe])
                    })
                }
            }),
            function() {
                return Ce.length || Z([]),
                st.filter(function(H) {
                    return !H.stagger
                }).forEach(So),
                Object.keys(He).forEach(function(H) {
                    Oe[H] || _o(He[H], le[H])
                }),
                ge
            }
        }(U);
        y ? y({
            hideEnteringElements: _,
            animateEnteringElements: z,
            animateExitingElements: F,
            animateFlippedElements: G
        }) : (_(),
        F().then(z),
        G())
    }
}
  , I2 = function(t) {
    var e = t.element
      , n = t.flipCallbacks
      , i = n === void 0 ? {} : n
      , s = t.inProgressAnimations
      , r = s === void 0 ? {} : s
      , o = a1(e, t.portalKey)
      , a = _n(e.querySelectorAll("[" + Er + "]"))
      , c = {}
      , u = []
      , d = {};
    o.filter(function(m) {
        return i && i[m.dataset.flipId] && i[m.dataset.flipId].onExit
    }).forEach(function(m) {
        var g = m.parentNode;
        if (m.closest) {
            var p = m.closest("[" + p2 + "]");
            p && (g = p)
        }
        var v = u.findIndex(function(x) {
            return x[0] === g
        });
        v === -1 && (u.push([g, g.getBoundingClientRect()]),
        v = u.length - 1),
        c[m.dataset.flipId] = u[v][1],
        d[m.dataset.flipId] = g
    });
    var h = l1(o)
      , f = h.map(function(m) {
        var g = m[0]
          , p = m[1]
          , v = {};
        if (i && i[g.dataset.flipId] && i[g.dataset.flipId].onExit) {
            var x = c[g.dataset.flipId];
            Bt(v, {
                element: g,
                parent: d[g.dataset.flipId],
                childPosition: {
                    top: p.top - x.top,
                    left: p.left - x.left,
                    width: p.width,
                    height: p.height
                }
            })
        }
        return [g.dataset.flipId, {
            rect: p,
            opacity: parseFloat(window.getComputedStyle(g).opacity || "1"),
            domDataForExitAnimations: v
        }]
    }).reduce(o1, {});
    return function(m, g) {
        Object.keys(m).forEach(function(p) {
            m[p].destroy && m[p].destroy(),
            m[p].onAnimationEnd && m[p].onAnimationEnd(!0),
            delete m[p]
        }),
        g.forEach(function(p) {
            p.style.transform = "",
            p.style.opacity = ""
        })
    }(r, o.concat(a)),
    {
        flippedElementPositions: f,
        cachedOrderedFlipIds: h.map(function(m) {
            return m[0].dataset.flipId
        })
    }
};
new s1;
function $i() {
    return $i = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    $i.apply(this, arguments)
}
function tr(t, e) {
    return tr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    tr(t, e)
}
function c1(t, e) {
    if (t == null)
        return {};
    var n, i, s = {}, r = Object.keys(t);
    for (i = 0; i < r.length; i++)
        e.indexOf(n = r[i]) >= 0 || (s[n] = t[n]);
    return s
}
var u1 = C.createContext({})
  , d1 = C.createContext("portal")
  , M2 = function(t) {
    var e, n;
    function i() {
        for (var r, o = arguments.length, a = new Array(o), c = 0; c < o; c++)
            a[c] = arguments[c];
        return (r = t.call.apply(t, [this].concat(a)) || this).inProgressAnimations = {},
        r.flipCallbacks = {},
        r.el = void 0,
        r
    }
    n = t,
    (e = i).prototype = Object.create(n.prototype),
    e.prototype.constructor = e,
    tr(e, n);
    var s = i.prototype;
    return s.getSnapshotBeforeUpdate = function(r) {
        return r.flipKey !== this.props.flipKey && this.el ? I2({
            element: this.el,
            flipCallbacks: this.flipCallbacks,
            inProgressAnimations: this.inProgressAnimations,
            portalKey: this.props.portalKey
        }) : null
    }
    ,
    s.componentDidUpdate = function(r, o, a) {
        this.props.flipKey !== r.flipKey && this.el && k2({
            flippedElementPositionsBeforeUpdate: a.flippedElementPositions,
            cachedOrderedFlipIds: a.cachedOrderedFlipIds,
            containerEl: this.el,
            inProgressAnimations: this.inProgressAnimations,
            flipCallbacks: this.flipCallbacks,
            applyTransformOrigin: this.props.applyTransformOrigin,
            spring: this.props.spring,
            debug: this.props.debug,
            portalKey: this.props.portalKey,
            staggerConfig: this.props.staggerConfig,
            handleEnterUpdateDelete: this.props.handleEnterUpdateDelete,
            decisionData: {
                previous: r.decisionData,
                current: this.props.decisionData
            },
            onComplete: this.props.onComplete,
            onStart: this.props.onStart
        })
    }
    ,
    s.render = function() {
        var r = this
          , o = this.props
          , a = o.portalKey
          , c = Vt.createElement(u1.Provider, {
            value: this.flipCallbacks
        }, Vt.createElement(o.element, {
            className: o.className,
            ref: function(u) {
                return r.el = u
            }
        }, this.props.children));
        return a && (c = Vt.createElement(d1.Provider, {
            value: a
        }, c)),
        c
    }
    ,
    i
}(C.Component);
M2.defaultProps = {
    applyTransformOrigin: !0,
    element: "div"
};
var R2 = ["children", "flipId", "inverseFlipId", "portalKey"]
  , A2 = ["children", "flipId", "shouldFlip", "shouldInvert", "onAppear", "onStart", "onStartImmediate", "onComplete", "onExit", "onSpringUpdate"]
  , Ro = function(t) {
    var e, n = t.children, i = t.flipId, s = t.inverseFlipId, r = t.portalKey, o = c1(t, R2), a = n, c = function(d) {
        return typeof d == "function"
    }(a);
    if (!c)
        try {
            a = C.Children.only(n)
        } catch {
            throw new Error("Each Flipped component must wrap a single child")
        }
    o.scale || o.translate || o.opacity || n1.assign(o, {
        translate: !0,
        scale: !0,
        opacity: !0
    });
    var u = ((e = {})[Ii.DATA_FLIP_CONFIG] = JSON.stringify(o),
    e);
    return i !== void 0 ? u[Ii.DATA_FLIP_ID] = String(i) : s && (u[Ii.DATA_INVERSE_FLIP_ID] = String(s)),
    r !== void 0 && (u[Ii.DATA_PORTAL_KEY] = r),
    c ? a(u) : C.cloneElement(a, u)
}
  , j2 = function(t) {
    var e = t.children
      , n = t.flipId
      , i = t.shouldFlip
      , s = t.shouldInvert
      , r = t.onAppear
      , o = t.onStart
      , a = t.onStartImmediate
      , c = t.onComplete
      , u = t.onExit
      , d = t.onSpringUpdate
      , h = c1(t, A2);
    return e ? h.inverseFlipId ? Vt.createElement(Ro, $i({}, h), e) : Vt.createElement(d1.Consumer, null, function(f) {
        return Vt.createElement(u1.Consumer, null, function(m) {
            return n1.isObject(m) && n && (m[n] = {
                shouldFlip: i,
                shouldInvert: s,
                onAppear: r,
                onStart: o,
                onStartImmediate: a,
                onComplete: c,
                onExit: u,
                onSpringUpdate: d
            }),
            Vt.createElement(Ro, $i({
                flipId: n
            }, h, {
                portalKey: f
            }), e)
        })
    }) : null
};
j2.displayName = "Flipped";
function Mi(t, e, n) {
    return (e = P2(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function P2(t) {
    var e = E2(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function E2(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
const L2 = {
    Idle: 1,
    Game: 2,
    GameOver: 3
}
  , p8 = {};
class T2 {
    constructor(e=B(null), n=B(null), i=B(null), s=B(null), r=B(null), o=B(null), a=B(null), c=B(null), u=B(null), d=B(null), h=B(null), f=B(null), m=B(null), g=B(null), p=B(null), v=B(null), x=B(null), y=B(null), b=B(null), S=B(null), k=B(null), I=B(null), R=B(null), T=B(null), P=B(null), w=B(null), A=B(null), D=B(null), _=B(null), z=B(null), F=B(null), U=B(null), G=B(null), j=B(null), Z=B(null), Q=B(null), N=B(null), O=B(null), Y=B(null), ue=B(null), pe=B(null), q=B(null), W=B(null), ie=B(null), ne=B(null), le=B(null), Ae=B(null), V=B(null), X=B(null), xe=B(null), ge=B(null), de=B(null), _e=B(null), he=B(null), Ce=B(null), ze=B(null), we=B(null), ve=B(null), Oe=B(null), He=B(null), st=B(null), H=B(null), fe=B(Co), ke=B(null), Qt=B(null), fi=B(null), mi=B(null), Te=B(null), pi=B(null), gi=B(null), yi=B(null), lt=B(null), vi=B(null), xi=B(null), fs=B(null), ms=B(null), ps=B(null), gs=B(null)) {
        this.scene = e,
        this.sessionId = n,
        this.sessionName = i,
        this.sessionColor = s,
        this.sessionStarted = r,
        this.teamId = o,
        this.practice = a,
        this.observer = c,
        this.zeroSum = u,
        this.replay = d,
        this.roomMetadata = h,
        this.gameMetadata = f,
        this.zeroSumScoring = m,
        this.gameIsLoading = g,
        this.gameStartTime = p,
        this.gameEndTime = v,
        this.gameStartsIn = x,
        this.gameEndsIn = y,
        this.spawnsIn = b,
        this.reviveDecisionEndsIn = S,
        this.challengeStartsIn = k,
        this.challengeEndsIn = I,
        this.exitCompletesAt = R,
        this.exitT = T,
        this.orientation = P,
        this.forcedOrientation = w,
        this.isMobileView = A,
        this.isGameMobileView = D,
        this.score = _,
        this.matchPoints = z,
        this.maxDeltaMatchPoints = F,
        this.spawnBonus = U,
        this.scoreDecoupled = G,
        this.spawnBonusAvailable = j,
        this.zeroSumMatchPoints = Z,
        this.tick = Q,
        this.serverPingAvg = N,
        this.gameTeamMap = O,
        this.serverInputResponseTimeAvg = Y,
        this.inputResponseTimeAvg = ue,
        this.fpsAvg = pe,
        this.serverTps = q,
        this.patchRenderTickError = W,
        this.showBoostMessage = ie,
        this.gameEndsSoon = ne,
        this.isPointer = le,
        this.isBoosting = Ae,
        this.canBoost = V,
        this.alive = X,
        this.playerFlags = xe,
        this.invincible = ge,
        this.inGameMessage = de,
        this.gameChatFocused = _e,
        this.gameChatShown = he,
        this.inGameUserMessageFreeform = Ce,
        this.inGameItems = ze,
        this.selectedGameItemsBitmask = we,
        this.feedingFrenzyOngoing = ve,
        this.scores = Oe,
        this.numPlayers = He,
        this.gameOver = st,
        this.preloadComplete = H,
        this.inGameItemKeybindings = fe,
        this.killed = ke,
        this.respawnPayload = Qt,
        this.fxMuted = fi,
        this.musicMuted = mi,
        this.keyupNonMapItems = Te,
        this.autoBotInactivityDelay = pi,
        this.captureTheFlag = gi,
        this.minimapSize = yi,
        this.safeAreaInsets = lt,
        this.tgFullscreenInsets = vi,
        this.blitzChallenge = xi,
        this.blitzChallengeResult = fs,
        this.startChallengeResponse = ms,
        this.challengesResponse = ps,
        this.zeroSumExitDown = gs,
        Mi(this, "window", null),
        Mi(this, "_serverInputResponseTimeAvg", null),
        Mi(this, "_inputResponseTimeAvg", null),
        Mi(this, "_fpsAvg", null),
        this.serverInputResponseTimeAvg.subscribe(Lt => this._serverInputResponseTimeAvg = Lt),
        this.inputResponseTimeAvg.subscribe(Lt => this._inputResponseTimeAvg = Lt),
        this.fpsAvg.subscribe(Lt => this._fpsAvg = Lt)
    }
    setWindow(e) {
        this.window = e
    }
    updateServerInputResponseTime(e) {
        this.serverInputResponseTimeAvg.set(Sn.update(e, .3, this._serverInputResponseTimeAvg))
    }
    updateInputResponseTime(e) {
        this.inputResponseTimeAvg.set(Sn.update(e, .05, this._inputResponseTimeAvg))
    }
    updateFps(e) {
        return this.fpsAvg.set(Sn.update(1e3 / e, .05, this._fpsAvg))
    }
    computeOrientation(e, n=Kt(this.forcedOrientation), i) {
        const s = e.x <= ks
          , r = 1.5;
        let o;
        n != null ? o = n : i && !["android", "ios"].includes(i) ? o = 0 : o = e.y / e.x > r ? 1 : 0;
        const a = Math.min(e.x, e.y)
          , c = Math.max(e.x, e.y)
          , u = a < ks && c < ks * r;
        this.isMobileView.set(s),
        this.isGameMobileView.set(u),
        this.orientation.set(o),
        o % 2 ? S2() : _2()
    }
    reset({orientation: e=!1, gameTeamMap: n=!1, preloadComplete: i=!1, keybindings: s=!1, isPointer: r=!1, gameIsLoading: o=!1}={}) {
        this.scene.set(null),
        this.sessionId.set(null),
        this.sessionName.set(null),
        this.sessionColor.set(null),
        this.sessionStarted.set(null),
        this.teamId.set(null),
        this.practice.set(null),
        this.observer.set(null),
        this.zeroSum.set(null),
        this.replay.set(null),
        this.roomMetadata.set(null),
        this.gameMetadata.set(null),
        this.zeroSumScoring.set(null),
        this.zeroSumMatchPoints.set(null),
        this.gameStartTime.set(null),
        this.gameEndTime.set(null),
        this.gameStartsIn.set(null),
        this.gameEndsIn.set(null),
        this.exitCompletesAt.set(null),
        this.exitT.set(null),
        this.spawnsIn.set(null),
        this.reviveDecisionEndsIn.set(null),
        this.challengeStartsIn.set(null),
        this.challengeEndsIn.set(null),
        o && this.gameIsLoading.set(null),
        e && (this.forcedOrientation.set(null),
        this.orientation.set(null),
        this.isMobileView.set(null),
        this.isGameMobileView.set(null),
        this.safeAreaInsets.set(null),
        this.tgFullscreenInsets.set(null)),
        this.tick.set(null),
        this.score.set(null),
        this.matchPoints.set(null),
        this.maxDeltaMatchPoints.set(null),
        this.spawnBonus.set(null),
        this.scoreDecoupled.set(null),
        this.spawnBonusAvailable.set(null),
        this.gameOver.set(null),
        this.scores.set(null),
        this.numPlayers.set(null),
        this.showBoostMessage.set(null),
        this.gameEndsSoon.set(null),
        r && this.isPointer.set(null),
        this.isBoosting.set(null),
        this.canBoost.set(null),
        this.alive.set(null),
        this.invincible.set(null),
        this.playerFlags.set(null),
        this.inGameMessage.set(null),
        this.gameChatFocused.set(null),
        this.gameChatShown.set(null),
        this.inGameUserMessageFreeform.set(null),
        this.inGameItems.set(null),
        this.selectedGameItemsBitmask.set(null),
        this.feedingFrenzyOngoing.set(null),
        this.serverPingAvg.set(null),
        this.serverInputResponseTimeAvg.set(null),
        this.inputResponseTimeAvg.set(null),
        this.fpsAvg.set(null),
        this.serverTps.set(null),
        this.patchRenderTickError.set(null),
        this.killed.set(null),
        this.respawnPayload.set(null),
        this.captureTheFlag.set(null),
        this.minimapSize.set(null),
        this.blitzChallenge.set(null),
        this.blitzChallengeResult.set(null),
        this.startChallengeResponse.set(null),
        this.zeroSumExitDown.set(null),
        n && this.gameTeamMap.set(null),
        i && this.preloadComplete.set(null),
        s && (this.inGameItemKeybindings.set(Co),
        this.keyupNonMapItems.set(null),
        this.autoBotInactivityDelay.set(null))
    }
}
const ti = new T2
  , Cn = Symbol("initial")
  , nr = t => {
    const e = Be.c(6)
      , [n,i] = C.useState(Cn);
    let s, r;
    e[0] !== t ? (s = () => t.subscribe(i),
    r = [t],
    e[0] = t,
    e[1] = s,
    e[2] = r) : (s = e[1],
    r = e[2]),
    C.useEffect(s, r);
    let o;
    return e[3] !== t || e[4] !== n ? (o = n === Cn ? Kt(t) : n,
    e[3] = t,
    e[4] = n,
    e[5] = o) : o = e[5],
    o
}
  , g8 = t => {
    const e = Be.c(16)
      , [n,i] = C.useState(Cn);
    let s;
    e[0] !== t || e[1] !== n ? (s = n === Cn ? Kt(t) : n,
    e[0] = t,
    e[1] = n,
    e[2] = s) : s = e[2];
    const r = C.useRef(s);
    let o;
    e[3] !== t || e[4] !== n ? (o = () => {
        const f = n === Cn ? Kt(t) : n;
        r.current = f,
        i(f)
    }
    ,
    e[3] = t,
    e[4] = n,
    e[5] = o) : o = e[5];
    let a;
    e[6] !== t ? (a = [t],
    e[6] = t,
    e[7] = a) : a = e[7],
    C.useEffect(o, a);
    let c, u;
    e[8] !== t ? (c = () => t.subscribe(f => {
        i(f),
        r.current = f
    }
    ),
    u = [t],
    e[8] = t,
    e[9] = c,
    e[10] = u) : (c = e[9],
    u = e[10]),
    C.useEffect(c, u);
    let d;
    e[11] !== t || e[12] !== n ? (d = n === Cn ? Kt(t) : n,
    e[11] = t,
    e[12] = n,
    e[13] = d) : d = e[13];
    let h;
    return e[14] !== d ? (h = [d, r],
    e[14] = d,
    e[15] = h) : h = e[15],
    h
}
  , y8 = t => {
    const e = Be.c(5);
    let n;
    e[0] !== t ? (n = Kt(t),
    e[0] = t,
    e[1] = n) : n = e[1];
    const i = C.useRef(n);
    let s, r;
    return e[2] !== t ? (s = () => t.subscribe(o => {
        i.current = o
    }
    ),
    r = [t],
    e[2] = t,
    e[3] = s,
    e[4] = r) : (s = e[3],
    r = e[4]),
    C.useEffect(s, r),
    i
}
  , v8 = (t, e) => {
    const n = new Set
      , i = {}
      , s = [];
    let r = performance.now(), o;
    for (const [a,c] of Object.entries(t))
        s.push(c.subscribe(u => {
            i[a] = u;
            const d = performance.now()
              , h = d - r;
            if (e == null || h >= e) {
                r = d;
                for (const f of n)
                    f(i)
            } else
                o === void 0 && (o = setTimeout( () => {
                    r = performance.now();
                    for (const f of n)
                        f(i);
                    o = void 0
                }
                , e - h))
        }
        ));
    return {
        _state: i,
        subscribe: a => (n.add(a),
        a(i),
        () => {
            n.delete(a)
        }
        ),
        get() {
            return i
        },
        destroy: () => {
            clearTimeout(o);
            for (const a of s)
                a();
            n.clear()
        }
    }
}
  , D2 = C.createContext(null)
  , ts = () => C.useContext(D2);
var h1 = {
    exports: {}
}
  , f1 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi = C;
function F2(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var N2 = typeof Object.is == "function" ? Object.is : F2
  , B2 = hi.useSyncExternalStore
  , z2 = hi.useRef
  , O2 = hi.useEffect
  , $2 = hi.useMemo
  , U2 = hi.useDebugValue;
f1.useSyncExternalStoreWithSelector = function(t, e, n, i, s) {
    var r = z2(null);
    if (r.current === null) {
        var o = {
            hasValue: !1,
            value: null
        };
        r.current = o
    } else
        o = r.current;
    r = $2(function() {
        function c(m) {
            if (!u) {
                if (u = !0,
                d = m,
                m = i(m),
                s !== void 0 && o.hasValue) {
                    var g = o.value;
                    if (s(g, m))
                        return h = g
                }
                return h = m
            }
            if (g = h,
            N2(d, m))
                return g;
            var p = i(m);
            return s !== void 0 && s(g, p) ? (d = m,
            g) : (d = m,
            h = p)
        }
        var u = !1, d, h, f = n === void 0 ? null : n;
        return [function() {
            return c(e())
        }
        , f === null ? void 0 : function() {
            return c(f())
        }
        ]
    }, [e, n, i, s]);
    var a = B2(t, r[0], r[1]);
    return O2(function() {
        o.hasValue = !0,
        o.value = a
    }, [a]),
    U2(a),
    a
}
;
h1.exports = f1;
var W2 = h1.exports
  , H2 = C.version.startsWith("19")
  , G2 = Symbol.for(H2 ? "react.transitional.element" : "react.element")
  , V2 = Symbol.for("react.portal")
  , q2 = Symbol.for("react.fragment")
  , K2 = Symbol.for("react.strict_mode")
  , Z2 = Symbol.for("react.profiler")
  , Y2 = Symbol.for("react.consumer")
  , Q2 = Symbol.for("react.context")
  , m1 = Symbol.for("react.forward_ref")
  , X2 = Symbol.for("react.suspense")
  , J2 = Symbol.for("react.suspense_list")
  , Dr = Symbol.for("react.memo")
  , eu = Symbol.for("react.lazy")
  , tu = m1
  , nu = Dr;
function iu(t) {
    if (typeof t == "object" && t !== null) {
        const {$$typeof: e} = t;
        switch (e) {
        case G2:
            switch (t = t.type,
            t) {
            case q2:
            case Z2:
            case K2:
            case X2:
            case J2:
                return t;
            default:
                switch (t = t && t.$$typeof,
                t) {
                case Q2:
                case m1:
                case eu:
                case Dr:
                    return t;
                case Y2:
                    return t;
                default:
                    return e
                }
            }
        case V2:
            return e
        }
    }
}
function su(t) {
    return iu(t) === Dr
}
function ru(t, e, n, i, {areStatesEqual: s, areOwnPropsEqual: r, areStatePropsEqual: o}) {
    let a = !1, c, u, d, h, f;
    function m(y, b) {
        return c = y,
        u = b,
        d = t(c, u),
        h = e(i, u),
        f = n(d, h, u),
        a = !0,
        f
    }
    function g() {
        return d = t(c, u),
        e.dependsOnOwnProps && (h = e(i, u)),
        f = n(d, h, u),
        f
    }
    function p() {
        return t.dependsOnOwnProps && (d = t(c, u)),
        e.dependsOnOwnProps && (h = e(i, u)),
        f = n(d, h, u),
        f
    }
    function v() {
        const y = t(c, u)
          , b = !o(y, d);
        return d = y,
        b && (f = n(d, h, u)),
        f
    }
    function x(y, b) {
        const S = !r(b, u)
          , k = !s(y, c, b, u);
        return c = y,
        u = b,
        S && k ? g() : S ? p() : k ? v() : f
    }
    return function(b, S) {
        return a ? x(b, S) : m(b, S)
    }
}
function ou(t, {initMapStateToProps: e, initMapDispatchToProps: n, initMergeProps: i, ...s}) {
    const r = e(t, s)
      , o = n(t, s)
      , a = i(t, s);
    return ru(r, o, a, t, s)
}
function au(t, e) {
    const n = {};
    for (const i in t) {
        const s = t[i];
        typeof s == "function" && (n[i] = (...r) => e(s(...r)))
    }
    return n
}
function ir(t) {
    return function(n) {
        const i = t(n);
        function s() {
            return i
        }
        return s.dependsOnOwnProps = !1,
        s
    }
}
function Ao(t) {
    return t.dependsOnOwnProps ? !!t.dependsOnOwnProps : t.length !== 1
}
function p1(t, e) {
    return function(i, {displayName: s}) {
        const r = function(a, c) {
            return r.dependsOnOwnProps ? r.mapToProps(a, c) : r.mapToProps(a, void 0)
        };
        return r.dependsOnOwnProps = !0,
        r.mapToProps = function(a, c) {
            r.mapToProps = t,
            r.dependsOnOwnProps = Ao(t);
            let u = r(a, c);
            return typeof u == "function" && (r.mapToProps = u,
            r.dependsOnOwnProps = Ao(u),
            u = r(a, c)),
            u
        }
        ,
        r
    }
}
function Fr(t, e) {
    return (n, i) => {
        throw new Error(`Invalid value of type ${typeof t} for ${e} argument when connecting component ${i.wrappedComponentName}.`)
    }
}
function lu(t) {
    return t && typeof t == "object" ? ir(e => au(t, e)) : t ? typeof t == "function" ? p1(t) : Fr(t, "mapDispatchToProps") : ir(e => ({
        dispatch: e
    }))
}
function cu(t) {
    return t ? typeof t == "function" ? p1(t) : Fr(t, "mapStateToProps") : ir( () => ({}))
}
function uu(t, e, n) {
    return {
        ...n,
        ...t,
        ...e
    }
}
function du(t) {
    return function(n, {displayName: i, areMergedPropsEqual: s}) {
        let r = !1, o;
        return function(c, u, d) {
            const h = t(c, u, d);
            return r ? s(h, o) || (o = h) : (r = !0,
            o = h),
            o
        }
    }
}
function hu(t) {
    return t ? typeof t == "function" ? du(t) : Fr(t, "mergeProps") : () => uu
}
function fu(t) {
    t()
}
function mu() {
    let t = null
      , e = null;
    return {
        clear() {
            t = null,
            e = null
        },
        notify() {
            fu( () => {
                let n = t;
                for (; n; )
                    n.callback(),
                    n = n.next
            }
            )
        },
        get() {
            const n = [];
            let i = t;
            for (; i; )
                n.push(i),
                i = i.next;
            return n
        },
        subscribe(n) {
            let i = !0;
            const s = e = {
                callback: n,
                next: null,
                prev: e
            };
            return s.prev ? s.prev.next = s : t = s,
            function() {
                !i || t === null || (i = !1,
                s.next ? s.next.prev = s.prev : e = s.prev,
                s.prev ? s.prev.next = s.next : t = s.next)
            }
        }
    }
}
var jo = {
    notify() {},
    get: () => []
};
function g1(t, e) {
    let n, i = jo, s = 0, r = !1;
    function o(p) {
        d();
        const v = i.subscribe(p);
        let x = !1;
        return () => {
            x || (x = !0,
            v(),
            h())
        }
    }
    function a() {
        i.notify()
    }
    function c() {
        g.onStateChange && g.onStateChange()
    }
    function u() {
        return r
    }
    function d() {
        s++,
        n || (n = e ? e.addNestedSub(c) : t.subscribe(c),
        i = mu())
    }
    function h() {
        s--,
        n && s === 0 && (n(),
        n = void 0,
        i.clear(),
        i = jo)
    }
    function f() {
        r || (r = !0,
        d())
    }
    function m() {
        r && (r = !1,
        h())
    }
    const g = {
        addNestedSub: o,
        notifyNestedSubs: a,
        handleChangeWrapper: c,
        isSubscribed: u,
        trySubscribe: f,
        tryUnsubscribe: m,
        getListeners: () => i
    };
    return g
}
var pu = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , gu = pu()
  , yu = () => typeof navigator < "u" && navigator.product === "ReactNative"
  , vu = yu()
  , xu = () => gu || vu ? C.useLayoutEffect : C.useEffect
  , Ui = xu();
function Po(t, e) {
    return t === e ? t !== 0 || e !== 0 || 1 / t === 1 / e : t !== t && e !== e
}
function Ms(t, e) {
    if (Po(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    const n = Object.keys(t)
      , i = Object.keys(e);
    if (n.length !== i.length)
        return !1;
    for (let s = 0; s < n.length; s++)
        if (!Object.prototype.hasOwnProperty.call(e, n[s]) || !Po(t[n[s]], e[n[s]]))
            return !1;
    return !0
}
var Cu = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , bu = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , wu = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , y1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , Su = {
    [tu]: wu,
    [nu]: y1
};
function Eo(t) {
    return su(t) ? y1 : Su[t.$$typeof] || Cu
}
var _u = Object.defineProperty
  , ku = Object.getOwnPropertyNames
  , Lo = Object.getOwnPropertySymbols
  , Iu = Object.getOwnPropertyDescriptor
  , Mu = Object.getPrototypeOf
  , To = Object.prototype;
function sr(t, e) {
    if (typeof e != "string") {
        if (To) {
            const r = Mu(e);
            r && r !== To && sr(t, r)
        }
        let n = ku(e);
        Lo && (n = n.concat(Lo(e)));
        const i = Eo(t)
          , s = Eo(e);
        for (let r = 0; r < n.length; ++r) {
            const o = n[r];
            if (!bu[o] && !(s && s[o]) && !(i && i[o])) {
                const a = Iu(e, o);
                try {
                    _u(t, o, a)
                } catch {}
            }
        }
    }
    return t
}
var Rs = Symbol.for("react-redux-context")
  , As = typeof globalThis < "u" ? globalThis : {};
function Ru() {
    if (!C.createContext)
        return {};
    const t = As[Rs] ?? (As[Rs] = new Map);
    let e = t.get(C.createContext);
    return e || (e = C.createContext(null),
    t.set(C.createContext, e)),
    e
}
var At = Ru()
  , Au = [null, null];
function ju(t, e, n) {
    Ui( () => t(...e), n)
}
function Pu(t, e, n, i, s, r) {
    t.current = i,
    n.current = !1,
    s.current && (s.current = null,
    r())
}
function Eu(t, e, n, i, s, r, o, a, c, u, d) {
    if (!t)
        return () => {}
        ;
    let h = !1
      , f = null;
    const m = () => {
        if (h || !a.current)
            return;
        const p = e.getState();
        let v, x;
        try {
            v = i(p, s.current)
        } catch (y) {
            x = y,
            f = y
        }
        x || (f = null),
        v === r.current ? o.current || u() : (r.current = v,
        c.current = v,
        o.current = !0,
        d())
    }
    ;
    return n.onStateChange = m,
    n.trySubscribe(),
    m(),
    () => {
        if (h = !0,
        n.tryUnsubscribe(),
        n.onStateChange = null,
        f)
            throw f
    }
}
function Lu(t, e) {
    return t === e
}
function Tu(t, e, n, {pure: i, areStatesEqual: s=Lu, areOwnPropsEqual: r=Ms, areStatePropsEqual: o=Ms, areMergedPropsEqual: a=Ms, forwardRef: c=!1, context: u=At}={}) {
    const d = u
      , h = cu(t)
      , f = lu(e)
      , m = hu(n)
      , g = !!t;
    return v => {
        const x = v.displayName || v.name || "Component"
          , y = `Connect(${x})`
          , b = {
            shouldHandleStateChanges: g,
            displayName: y,
            wrappedComponentName: x,
            WrappedComponent: v,
            initMapStateToProps: h,
            initMapDispatchToProps: f,
            initMergeProps: m,
            areStatesEqual: s,
            areStatePropsEqual: o,
            areOwnPropsEqual: r,
            areMergedPropsEqual: a
        };
        function S(R) {
            const [T,P,w] = C.useMemo( () => {
                const {reactReduxForwardedRef: V, ...X} = R;
                return [R.context, V, X]
            }
            , [R])
              , A = C.useMemo( () => {
                let V = d;
                return T != null && T.Consumer,
                V
            }
            , [T, d])
              , D = C.useContext(A)
              , _ = !!R.store && !!R.store.getState && !!R.store.dispatch
              , z = !!D && !!D.store
              , F = _ ? R.store : D.store
              , U = z ? D.getServerState : F.getState
              , G = C.useMemo( () => ou(F.dispatch, b), [F])
              , [j,Z] = C.useMemo( () => {
                if (!g)
                    return Au;
                const V = g1(F, _ ? void 0 : D.subscription)
                  , X = V.notifyNestedSubs.bind(V);
                return [V, X]
            }
            , [F, _, D])
              , Q = C.useMemo( () => _ ? D : {
                ...D,
                subscription: j
            }, [_, D, j])
              , N = C.useRef(void 0)
              , O = C.useRef(w)
              , Y = C.useRef(void 0)
              , ue = C.useRef(!1)
              , pe = C.useRef(!1)
              , q = C.useRef(void 0);
            Ui( () => (pe.current = !0,
            () => {
                pe.current = !1
            }
            ), []);
            const W = C.useMemo( () => () => Y.current && w === O.current ? Y.current : G(F.getState(), w), [F, w])
              , ie = C.useMemo( () => X => j ? Eu(g, F, j, G, O, N, ue, pe, Y, Z, X) : () => {}
            , [j]);
            ju(Pu, [O, N, ue, w, Y, Z]);
            let ne;
            try {
                ne = C.useSyncExternalStore(ie, W, U ? () => G(U(), w) : W)
            } catch (V) {
                throw q.current && (V.message += `
The error may be correlated with this previous error:
${q.current.stack}

`),
                V
            }
            Ui( () => {
                q.current = void 0,
                Y.current = void 0,
                N.current = ne
            }
            );
            const le = C.useMemo( () => C.createElement(v, {
                ...ne,
                ref: P
            }), [P, v, ne]);
            return C.useMemo( () => g ? C.createElement(A.Provider, {
                value: Q
            }, le) : le, [A, le, Q])
        }
        const I = C.memo(S);
        if (I.WrappedComponent = v,
        I.displayName = S.displayName = y,
        c) {
            const T = C.forwardRef(function(w, A) {
                return C.createElement(I, {
                    ...w,
                    reactReduxForwardedRef: A
                })
            });
            return T.displayName = y,
            T.WrappedComponent = v,
            sr(T, v)
        }
        return sr(I, v)
    }
}
var x8 = Tu;
function Du(t) {
    const {children: e, context: n, serverState: i, store: s} = t
      , r = C.useMemo( () => {
        const c = g1(s);
        return {
            store: s,
            subscription: c,
            getServerState: i ? () => i : void 0
        }
    }
    , [s, i])
      , o = C.useMemo( () => s.getState(), [s]);
    Ui( () => {
        const {subscription: c} = r;
        return c.onStateChange = c.notifyNestedSubs,
        c.trySubscribe(),
        o !== s.getState() && c.notifyNestedSubs(),
        () => {
            c.tryUnsubscribe(),
            c.onStateChange = void 0
        }
    }
    , [r, o]);
    const a = n || At;
    return C.createElement(a.Provider, {
        value: r
    }, e)
}
var C8 = Du;
function Nr(t=At) {
    return function() {
        return C.useContext(t)
    }
}
var v1 = Nr();
function x1(t=At) {
    const e = t === At ? v1 : Nr(t)
      , n = () => {
        const {store: i} = e();
        return i
    }
    ;
    return Object.assign(n, {
        withTypes: () => n
    }),
    n
}
var Fu = x1();
function Nu(t=At) {
    const e = t === At ? Fu : x1(t)
      , n = () => e().dispatch;
    return Object.assign(n, {
        withTypes: () => n
    }),
    n
}
var ns = Nu()
  , Bu = (t, e) => t === e;
function zu(t=At) {
    const e = t === At ? v1 : Nr(t)
      , n = (i, s={}) => {
        const {equalityFn: r=Bu} = typeof s == "function" ? {
            equalityFn: s
        } : s
          , o = e()
          , {store: a, subscription: c, getServerState: u} = o;
        C.useRef(!0);
        const d = C.useCallback({
            [i.name](f) {
                return i(f)
            }
        }[i.name], [i])
          , h = W2.useSyncExternalStoreWithSelector(c.addNestedSub, a.getState, u || a.getState, d, r);
        return C.useDebugValue(h),
        h
    }
    ;
    return Object.assign(n, {
        withTypes: () => n
    }),
    n
}
var Re = zu();
const b8 = {
    min: 1,
    max: 15,
    messageMax: "Name can be at most 15 characters long"
}
  , Do = {
    max: 60,
    default: "You got out-wermed",
    minLevelView: 20,
    minLevelSet: 30
}
  , Ou = {
    maxInventoryCount: 10,
    minLevel: 10
}
  , w8 = ["gsvm!", "Eclipse everything", "gg", "Better luck next time", "Try again. I'll wait.", "That was embarrassing", "You blinked, I didn't", "Nice strategy. Didn't work.", "404: Skill not found.", "Even bots try harder.", "Was that your plan?", "Should've dodged.", "Practice more, worry less.", "Another soul claimed.", "Fate has spoken.", "You fought well. I fought better.", "Your legend ends here.", "Ashes to ashes.", "I am inevitable.", "Your time is up.", "The void is hungry.", "Oopsie!", "You died doing what you loved: failing.", "You dropped this: 🧠", "Respawn and rethink.", "My grandma plays better.", "Thanks for the warm-up.", "At least you tried.", "Skill sold separately.", "Alt+F4 might help.", "Lag, right?", "Skill issue.", "Ctrl+Z?", "Install skill.exe", "Low FPS, high excuses.", "That was close!", "Respect.", "Well played.", "ggwp", "See you in the next round.", "Stop chasing me!"]
  , S8 = {
    name: {
        min: 3,
        max: 100,
        regExp: /^[\p{Script=Hangul}\p{Script=Latin}\p{Emoji} \-\(\)\[\]\\\|\$\*\^\._:'"!?@#%&,<>~+=]+$/u
    },
    duration: {
        min: 60,
        max: 600,
        default: 300
    },
    minPlayers: {
        min: 1,
        max: 30,
        default: 4
    },
    maxPlayers: {
        default: 20
    },
    amount: {
        min: .1,
        max: 50,
        default: 1
    }
}
  , _8 = 8
  , k8 = 1e3
  , I8 = 1e4
  , M8 = 400
  , R8 = {
    Boost: 0,
    Bot: 1,
    Exit: 2
}
  , A8 = t => ({
    t: t.tick,
    p: t.peerLag,
    s: t.sequenceNumber,
    a: t.targetAngle,
    f: t.flags,
    i: t.itemPreview,
    m: t.aimedItem,
    drt: t.deciRenderTick,
    pt: t.patchTick,
    ct: t.clientTimestamp
})
  , Ri = {
    GoodGame: 1,
    LOL: 2,
    KillTheKing: 3,
    OhFuck: 4
}
  , j8 = {
    [Ri.GoodGame]: "gg",
    [Ri.LOL]: "😂",
    [Ri.KillTheKing]: "kill the king!",
    [Ri.OhFuck]: "oh fuck"
}
  , pt = {
    InvalidMessage: 0,
    InvalidId: 1,
    InternalError: 2,
    FixedMessageDisabled: 5,
    FixedMessageInvalidValue: 6,
    FixedMessageUnknown: 7,
    FreeformMessageDisabled: 10,
    FreeformMessageEmpty: 11,
    FreeformMessageTooLong: 12,
    ReadOnly: 13
}
  , P8 = {
    [pt.InvalidMessage]: "The message was invalid",
    [pt.InvalidId]: "The message ID was invalid",
    [pt.InternalError]: "The message could not be sent due to some internal error",
    [pt.FixedMessageDisabled]: "Fixed messages are not enabled for this game",
    [pt.FixedMessageInvalidValue]: "The enum value was not a valid value",
    [pt.FixedMessageUnknown]: "The enum value is not known by the server",
    [pt.FreeformMessageDisabled]: "Freeform messages are not enabled for this game",
    [pt.FreeformMessageEmpty]: "The freeform message, after trimming, was empty",
    [pt.FreeformMessageTooLong]: "The freeform message was too long",
    [pt.ReadOnly]: "Read only; you do not have permission to send messages"
}
  , Ye = {
    UserInput: 1,
    AvailableItemsRequest: 2,
    ActivateItemRequest: 3,
    RespawnRequest: 4,
    UpdateItemsRequest: 5,
    ReviveReject: 6,
    PingSyn: 10,
    PingSynAck: 11,
    PingAck: 12,
    InGameUserMessageFixed: 24,
    InGameUserMessageFreeform: 25,
    FetchInGameUserMessages: 28,
    GamePerformanceMetrics: 30,
    GameMetadata: 31,
    InGameChallengeConfigRequest: 40,
    StartInGameChallengeRequest: 42,
    SystemAnnouncementsRequest: 60,
    GetDefaultToken: 104,
    Deposit: 105,
    DepositResult: 106,
    LeaveWaitingRoom: 107,
    SignInWithSolanaRequest: 108,
    SignInWithSolanaResponse: 109,
    AllRoomsRequest: 110,
    ServerRegionsRequest: 111,
    OfflineUntilRequest: 112,
    SignOut: 113,
    AllTokensRequest: 114,
    CreateRoomRequest: 115,
    CloseRoomRequest: 116,
    UpdateRoomRequest: 117,
    SubscribeToRoomStats: 120,
    UserGamePlayStatsRequest: 122,
    CompetitiveLeaderboardRequest: 123,
    CheckUserNameAvailable: 124,
    SetUserName: 125,
    BasicUserInfoRequest: 126,
    StreakInfoRequest: 127,
    ClaimStreakRequest: 128,
    ActiveRoomRequest: 129,
    JoinGameError: 130,
    ServerPingStats: 131,
    ChallengesRequest: 132,
    ClaimChallengeRequest: 133,
    MarketplaceListingsRequest: 134,
    MarketplacePurchaseRequest: 135,
    MarketplaceInventoryRequest: 136,
    MarketplaceInventoryOrderRequest: 137,
    ClaimPeriodicReviveRequest: 138,
    JoinPracticeGameRequest: 141,
    JoinChatRoom: 142,
    LockedTokenGlobalRequest: 160,
    LockedTokenRequest: 161,
    UnlockTokenRequest: 162,
    UnlockTokenResult: 163,
    PracticeLeaderboardRequest: 170,
    BlitzLeaderboardRequest: 171,
    PointsLeaderboardRequest: 172,
    RecentBlockhashRequest: 180,
    TEMP_PracticePrizeRequest: 181,
    TEMP_PracticePrizeResult: 182,
    TEMP_PredictionEventsRequest: 183,
    TEMP_PredictionDepositRequest: 184,
    TEMP_PredictionDepositResult: 185,
    TEMP_SuperBlitzEventsRequest: 186,
    TEMP_SuperBlitzDepositRequest: 187,
    TEMP_SuperBlitzDepositResult: 188,
    DynamicAuthRequest: 189,
    RoomEarningsRequest: 190,
    UsageAnalyticsRequest: 191,
    FrontendErrorRequest: 192,
    UpdateUserRequest: 193,
    UserNotificationsRequest: 194,
    UserWeeklyStatsRequest: 195,
    ReplaySpeed: 200,
    TokenPriceRequest: 201
}
  , E8 = Object.fromEntries(Object.entries(Ye).map( ([t,e]) => [e, t]))
  , J = {
    UserInputResponse: 1,
    AvailableItemsResponse: 2,
    ActivateItemResponse: 3,
    RespawnResponse: 4,
    ReviveReject: 5,
    GameConstants: 9,
    PingSyn: 10,
    PingSynAck: 11,
    PingAck: 12,
    Killed: 20,
    GameOver: 21,
    InGameMessage: 22,
    ShowBoostMessage: 23,
    InGameUserMessageFixed: 24,
    InGameUserMessageFreeform: 25,
    InGameUserMessageFixedResult: 26,
    InGameUserMessageFreeformResult: 27,
    FetchInGameUserMessagesResult: 28,
    SpawnMetrics: 29,
    DebugMetrics: 30,
    GameMetadata: 31,
    InGameChallengeConfig: 40,
    InGameChallengeResult: 41,
    StartInGameChallengeResponse: 42,
    ServerError: 50,
    RefreshPage: 51,
    SystemAnnouncements: 60,
    InvalidMessage: 98,
    RateLimit: 99,
    AuthToken: 101,
    DefaultToken: 104,
    DepositResponse: 105,
    DepositResult: 106,
    LeaveWaitingRoomResult: 107,
    SignInWithSolanaInput: 108,
    SignInWithSolanaResult: 109,
    AllRoomsResponse: 110,
    ServerRegionsResult: 111,
    OfflineUntilResponse: 112,
    SignOutResponse: 113,
    AllTokensResponse: 114,
    CreateRoomResponse: 115,
    CloseRoomResponse: 116,
    UpdateRoomResponse: 117,
    RoomStats: 120,
    RoomStatusChange: 121,
    UserGamePlayStatsResponse: 122,
    CompetitiveLeaderboardResponse: 123,
    UserNameAvailableResponse: 124,
    SetUserNameResult: 125,
    BasicUserInfoResponse: 126,
    StreakInfoResponse: 127,
    ClaimStreakResponse: 128,
    ActiveRoomResponse: 129,
    ChallengesResponse: 132,
    ClaimChallengeResponse: 133,
    MarketplaceListingsResponse: 134,
    MarketplacePurchaseResponse: 135,
    MarketplaceInventoryResponse: 136,
    MarketplaceInventoryOrderResponse: 137,
    ClaimPeriodicReviveResponse: 138,
    SeatReservation: 140,
    JoinPracticeGameResponse: 141,
    JoinChatRoomResult: 142,
    GameResults: 150,
    WithdrawResult: 151,
    AutoWaitingRoomEntryCreated: 152,
    WithdrawSwaps: 153,
    LockedTokenGlobalResponse: 160,
    LockedTokenResponse: 161,
    UnlockTokenResponse: 162,
    UnlockTokenResult: 163,
    PracticeLeaderboardResponse: 170,
    BlitzLeaderboardResponse: 171,
    PointsLeaderboardResponse: 172,
    RecentBlockhashResponse: 180,
    TEMP_PracticePrizeResponse: 181,
    TEMP_PredictionEventsResponse: 183,
    TEMP_PredictionDepositResponse: 184,
    TEMP_PredictionDepositResult: 185,
    TEMP_SuperBlitzEventsResponse: 186,
    TEMP_SuperBlitzDepositResponse: 187,
    TEMP_SuperBlitzDepositResult: 188,
    DynamicAuthResponse: 189,
    RoomEarningsResponse: 190,
    UsageAnalyticsResponse: 191,
    FrontendErrorResponse: 192,
    UpdateUserResponse: 193,
    UserNotificationsResponse: 194,
    UserWeeklyStatsResponse: 195,
    ReplaySpeed: 200,
    TokenPriceResponse: 201
}
  , L8 = Object.fromEntries(Object.entries(J).map( ([t,e]) => [e, t]))
  , $u = Object.values(J)
  , T8 = {
    Freeform: 1,
    Died: 2,
    FeedingFrenzy: 3,
    FeedingFrenzyEnd: 4,
    PlayerJoined: 5,
    PlayerLeft: 6,
    PlayerRevived: 7,
    PlayerExited: 8
};
function Fo(t, e, n) {
    return (e = Uu(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function Uu(t) {
    var e = Wu(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function Wu(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
const Se = Math.PI * 2;
class re {
    constructor(e, n) {
        Fo(this, "x", void 0),
        Fo(this, "y", void 0),
        typeof e == "number" ? (this.x = e,
        this.y = n ?? this.x) : (this.x = e.x,
        this.y = e.y)
    }
    set(e, n) {
        return typeof e == "number" ? (this.x = e,
        this.y = n ?? this.x) : (e.x != null && (this.x = e.x),
        e.y != null && (this.y = e.y)),
        this
    }
    static ensure(e) {
        return e instanceof re ? e : new re(e)
    }
    static xy(e, n) {
        return new re({
            x: e,
            y: n
        })
    }
    static polar(e, n) {
        return new re({
            x: e * Math.cos(n),
            y: e * Math.sin(n)
        })
    }
    setPolar(e, n) {
        return this.x = e * Math.cos(n),
        this.y = e * Math.sin(n),
        this
    }
    neg(e=this) {
        return e.x = -this.x,
        e.y = -this.y,
        e
    }
    transpose(e=this) {
        const n = this.x;
        return e.x = this.y,
        e.y = n,
        e
    }
    add(e, n=this) {
        return typeof e == "number" ? (n.x = this.x + e,
        n.y = this.y + e) : (n.x = this.x + (e.x ?? 0),
        n.y = this.y + (e.y ?? 0)),
        n
    }
    sub(e, n=this) {
        return typeof e == "number" ? (n.x = this.x - e,
        n.y = this.y - e) : (n.x = this.x - (e.x ?? 0),
        n.y = this.y - (e.y ?? 0)),
        n
    }
    subFrom(e, n=this) {
        return typeof e == "number" ? (n.x = e - this.x,
        n.y = e - this.y) : (n.x = e.x - this.x,
        n.y = e.y - this.y),
        n
    }
    mul(e, n=this) {
        return typeof e == "number" ? (n.x = this.x * e,
        n.y = this.y * e) : (n.x = this.x * e.x,
        n.y = this.y * e.y),
        n
    }
    div(e, n=this) {
        return typeof e == "number" ? (n.x = this.x / e,
        n.y = this.y / e) : (n.x = this.x / e.x,
        n.y = this.y / e.y),
        n
    }
    get maxComponent() {
        return Math.max(this.x, this.y)
    }
    get minComponent() {
        return Math.min(this.x, this.y)
    }
    abs(e=this) {
        return e.x = Math.abs(this.x),
        e.y = Math.abs(this.y),
        e
    }
    get xDivY() {
        return this.x / this.y
    }
    get yDivX() {
        return this.y / this.x
    }
    get aspectRatio() {
        return this.xDivY
    }
    get inverseAspectRatio() {
        return this.yDivX
    }
    static fromYX(e) {
        return re.xy(e[1], e[0])
    }
    static fromXY(e) {
        return re.xy(e[0], e[1])
    }
    static zero() {
        return re.xy(0, 0)
    }
    get isZero() {
        return this.x == 0 && this.y == 0
    }
    equals(e, n=null) {
        return n === null ? this.x == e.x && this.y == e.y : Math.abs(this.x - e.x) < n && Math.abs(this.y - e.y) < n
    }
    copy(e) {
        return e ? (e.x = this.x,
        e.y = this.y,
        e) : new re(this)
    }
    setX(e, n=this) {
        return n.x = e,
        n
    }
    setY(e, n=this) {
        return n.y = e,
        n
    }
    x0(e=this) {
        return e.x = 0,
        e
    }
    y0(e=this) {
        return e.y = 0,
        e
    }
    get atan2() {
        return Math.atan2(this.y, this.x)
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    get lengthSquared() {
        return this.x * this.x + this.y * this.y
    }
    unitVector(e=this) {
        return this.div(this.length, e)
    }
    interpolate(e, n, i) {
        i || (i = this);
        const s = Math.min(1, Math.max(0, n));
        return i.x = this.x + (e.x - this.x) * s,
        i.y = this.y + (e.y - this.y) * s,
        i
    }
    static interpolate(e, n, i, s) {
        s || (s = {});
        const r = Math.min(1, Math.max(0, i));
        return s.x = e.x + (n.x - e.x) * r,
        s.y = e.y + (n.y - e.y) * r,
        s
    }
    withLength(e, n=this) {
        const i = e / this.length;
        return n.x = this.x * i,
        n.y = this.y * i,
        n
    }
    normalized(e=this) {
        const n = this.length;
        return e.x = this.x / n,
        e.y = this.y / n,
        e
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    angle(e) {
        const n = this.x * this.x + this.y * this.y
          , i = e.x * e.x + e.y * e.y
          , s = Math.sqrt(n * i)
          , r = this.x * e.x + this.y * e.y;
        return Math.acos(Math.max(-1, Math.min(1, r / s)))
    }
    static angleFlat(e, n, i, s) {
        const r = e * e + n * n
          , o = i * i + s * s
          , a = Math.sqrt(r * o)
          , c = e * i + n * s;
        return Math.acos(Math.max(-1, Math.min(1, c / a)))
    }
    distanceTo(e, n=!1) {
        const i = this.x - e.x
          , s = this.y - e.y
          , r = i * i + s * s;
        return n ? r : Math.sqrt(r)
    }
    floor(e=this) {
        return e.x = Math.floor(this.x),
        e.y = Math.floor(this.y),
        e
    }
    ceil(e=this) {
        return e.x = Math.ceil(this.x),
        e.y = Math.ceil(this.y),
        e
    }
    get product() {
        return this.x * this.y
    }
    get asArr() {
        return [this.x, this.y]
    }
    toString() {
        return `(x = ${this.x}, y = ${this.y})`
    }
    apply(e, n=this) {
        return n.x = e(this.x),
        n.y = e(this.y),
        n
    }
    min(e, n, i) {
        return typeof n == "number" ? (i || (i = this),
        i.x = Math.min(this.x, e),
        i.y = Math.min(this.y, n),
        i) : typeof e == "number" ? (n || (n = this),
        n.x = Math.min(this.x, e),
        n.y = Math.min(this.y, e),
        n) : (n || (n = this),
        n.x = Math.min(this.x, e.x),
        n.y = Math.min(this.y, e.y),
        n)
    }
    max(e, n, i) {
        return typeof n == "number" ? (i || (i = this),
        i.x = Math.max(this.x, e),
        i.y = Math.max(this.y, n),
        i) : typeof e == "number" ? (n || (n = this),
        n.x = Math.max(this.x, e),
        n.y = Math.max(this.y, e),
        n) : (n || (n = this),
        n.x = Math.max(this.x, e.x),
        n.y = Math.max(this.y, e.y),
        n)
    }
    clamp(e, n, i=this) {
        return this.max(e, i),
        i.min(n, i),
        i
    }
    clampMagnitude(e, n=this) {
        const i = this.lengthSquared;
        if (i <= e * e)
            return n === this ? this : (n.x = this.x,
            n.y = this.y,
            n);
        const s = Math.sqrt(i)
          , r = e / s;
        return n.x = this.x * r,
        n.y = this.y * r,
        n
    }
    round(e=0, n=this) {
        if (e === 0)
            n.x = Math.round(this.x),
            n.y = Math.round(this.y);
        else if (e !== null) {
            const i = 10 ** e;
            n.x = Math.round(this.x * i) / i,
            n.y = Math.round(this.y * i) / i
        }
        return n
    }
    static round(e, n=0, i=e) {
        if (n === 0)
            i.x = Math.round(e.x),
            i.y = Math.round(e.y);
        else if (n !== null) {
            const s = 10 ** n;
            i.x = Math.round(e.x * s) / s,
            i.y = Math.round(e.y * s) / s
        }
        return i
    }
    rotateRight(e=this) {
        const {x: n, y: i} = this;
        return e.x = i,
        e.y = -n,
        e
    }
    rotateLeft(e=this) {
        const {x: n, y: i} = this;
        return e.x = -i,
        e.y = n,
        e
    }
    static rotateStep(e, n, i, s) {
        0 <= n && n < 4 || (n = (n % 4 + 4) % 4),
        s == null && (s = i ?? 0),
        i == null && (i = 0);
        const r = e.x - i
          , o = e.y - s;
        switch (n) {
        case 0:
            break;
        case 1:
            {
                e.x = o,
                e.y = -r;
                break
            }
        case 2:
            {
                e.x = -r,
                e.y = -o;
                break
            }
        case 3:
            {
                e.x = -o,
                e.y = r;
                break
            }
        }
        return e.x += i,
        e.y += s,
        e
    }
    rotate(e, n, i=this) {
        if (e === 0)
            return i !== this && i.set(this),
            i;
        const s = Math.cos(e)
          , r = Math.sin(e);
        n && (i.x = this.x - n.x,
        i.y = this.y - n.y);
        const {x: o, y: a} = i;
        return i.x = s * o - r * a,
        i.y = s * a + r * o,
        n && (i.x += n.x,
        i.y += n.y),
        i
    }
    static rotate(e, n, i=0, s=0) {
        if (n === 0)
            return e;
        const r = Math.cos(n)
          , o = Math.sin(n);
        e.x -= i,
        e.y -= s;
        const a = e.x
          , c = e.y;
        return e.x = r * a - o * c,
        e.y = r * c + o * a,
        e.x += i,
        e.y += s,
        e
    }
    static intersectsTriangle(e, n, i, s) {
        const r = e.x - n.x
          , o = e.y - n.y
          , a = i.x - n.x
          , c = i.y - n.y
          , u = a * o - c * r > 0
          , d = s.x - i.x
          , h = s.y - i.y
          , f = e.x - i.x
          , m = e.y - i.y;
        if (d * m - h * f > 0 != u)
            return !1;
        const p = n.x - s.x
          , v = n.y - s.y
          , x = e.x - s.x
          , y = e.y - s.y;
        return p * y - v * x > 0 == u
    }
    static lineLineSegmentIntersection({line: e, segment: n, forwardOnly: i=!1, epsilon: s=1e-10, out: r={
        x: 0,
        y: 0
    }}) {
        const {point: o, direction: a} = e
          , {start: c, end: u} = n
          , d = r;
        d.x = u.x - c.x,
        d.y = u.y - c.y;
        const h = a.x * d.y - a.y * d.x;
        if (Math.abs(h) < s)
            return null;
        const f = ((c.x - o.x) * d.y - (c.y - o.y) * d.x) / h;
        if (i && f < 0)
            return null;
        const m = ((c.x - o.x) * a.y - (c.y - o.y) * a.x) / h;
        return m >= 0 && m <= 1 ? (d.x = o.x + f * a.x,
        d.y = o.y + f * a.y,
        d) : null
    }
    static rayRayIntersection(e, n, i, s, r, o, a, c, u, d=1e-10) {
        const h = i * c - s * a;
        if (Math.abs(h) < d)
            return null;
        const f = ((r - e) * c - (o - n) * a) / h
          , m = ((r - e) * s - (o - n) * i) / h;
        return u ? (u[0] = f,
        u[1] = m,
        u) : [f, m]
    }
    static projectPoint(e, n, i, s=!0, r) {
        const o = i.x - e.x
          , a = i.y - e.y
          , c = (o * n.x + a * n.y) / (n.x * n.x + n.y * n.y);
        return s ? (r || (r = {
            x: 0,
            y: 0
        }),
        r.x = e.x + n.x * c,
        r.y = e.y + n.y * c,
        r) : c
    }
    freeze() {
        return Object.freeze(this)
    }
    static nearestConeCircleIntersection(e, n, i, s, r, o, a) {
        r.x -= e.x,
        r.y -= e.y;
        const c = r.x * r.x + r.y * r.y;
        if (c <= o * o)
            return r.x += e.x,
            r.y += e.y,
            a ? (a[0] ? (a[0].x = e.x,
            a[0].y = e.y,
            a[0].l2 = 0) : a[0] = {
                x: e.x,
                y: e.y,
                l2: 0
            },
            a[0]) : {
                x: e.x,
                y: e.y,
                l2: 0
            };
        const u = Math.sqrt(c)
          , d = r.x - r.x * o / u
          , h = r.y - r.y * o / u
          , f = Math.atan2(h, d)
          , m = d * d + h * h
          , g = (i % Se + Se) % Se
          , p = ((i + s) % Se + Se) % Se
          , v = (f % Se + Se) % Se;
        let x = !1;
        if (g < p ? x = v >= g && v <= p : x = v >= g || v <= p,
        x && m <= n * n)
            return r.x += e.x,
            r.y += e.y,
            a ? (a[0] ? (a[0].x = d,
            a[0].y = h,
            a[0].l2 = m) : a[0] = {
                x: d,
                y: h,
                l2: m
            },
            a[0]) : {
                x: d,
                y: h,
                l2: m
            };
        a || (a = []);
        let y = 0;
        for (const T of [g, p]) {
            const P = Math.cos(T)
              , w = Math.sin(T)
              , A = r.x * P + r.y * w
              , D = c - o * o
              , _ = 4 * (A * A - D);
            if (_ >= 0) {
                const z = Math.sqrt(_)
                  , F = (2 * A - z) / 2
                  , U = (2 * A + z) / 2;
                F >= 0 && F <= n && (a[y] ? (a[y].x = F * P,
                a[y].y = F * w,
                a[y++].l2 = F * F) : a[y++] = {
                    x: F * P,
                    y: F * w,
                    l2: F * F
                }),
                U >= 0 && U <= n && (a[y] ? (a[y].x = U * P,
                a[y].y = U * w,
                a[y++].l2 = U * U) : a[y++] = {
                    x: U * P,
                    y: U * w,
                    l2: U * U
                })
            }
        }
        const b = c
          , k = (n * n + b - o * o) / (2 * n);
        if (b !== 0) {
            const T = Math.atan2(r.y, r.x)
              , P = k / Math.sqrt(b);
            if (Math.abs(P) <= 1) {
                const w = Math.acos(P);
                for (const A of [T - w, T + w]) {
                    const D = (A % Se + Se) % Se;
                    let _ = !1;
                    if (g < p ? _ = D >= g && D <= p : _ = D >= g || D <= p,
                    _) {
                        const z = n * Math.cos(D)
                          , F = n * Math.sin(D)
                          , U = n * n;
                        a[y] ? (a[y].x = z,
                        a[y].y = F,
                        a[y++].l2 = U) : a[y++] = {
                            x: z,
                            y: F,
                            l2: U
                        }
                    }
                }
            }
        }
        if (r.x += e.x,
        r.y += e.y,
        y === 0)
            return;
        let I = a[0]
          , R = I.l2;
        for (let T = 1; T < y; T++) {
            const P = a[T];
            P.l2 >= R || (R = P.l2,
            I = P)
        }
        return I.x += e.x,
        I.y += e.y,
        I
    }
    static nearestConeRectangleIntersection_untransform(e, n, i, s, r, o, a, c, u) {
        if (u.x += e.x,
        u.y += e.y,
        e.x = n,
        e.y = i,
        !o)
            return u;
        const d = u.x - s
          , h = u.y - r;
        return u.x = a * d + c * h + s,
        u.y = a * h - c * d + r,
        u
    }
    static nearestConeRectangleIntersection_radialLineIntersection(e, n, i, s, r, o, a, c) {
        const u = i / e;
        if (!(0 <= u && u <= o))
            return;
        const d = u * n;
        if (!(s <= d && d <= r))
            return;
        const h = i * i + d * d;
        return a ? (a.x = c ? d : i,
        a.y = c ? i : d,
        a.l2 = h,
        a) : c ? {
            x: d,
            y: i,
            l2: h
        } : {
            x: i,
            y: d,
            l2: h
        }
    }
    static nearestConeRectangleIntersection_radialArcHit(e, n, i, s, r, o, a) {
        const u = ((a ? o.atan2(e, n) : o.atan2(n, e)) % Se + Se) % Se;
        if (!(i < s ? u >= i && u <= s : u >= i || u <= s))
            return;
        const d = e * e + n * n;
        return r ? (r.x = a ? n : e,
        r.y = a ? e : n,
        r.l2 = d,
        r) : a ? {
            x: n,
            y: e,
            l2: d
        } : {
            x: e,
            y: n,
            l2: d
        }
    }
    static nearestConeRectangleIntersection(e, n, i, s, r, o, a=0, c, u=Math) {
        const d = re.nearestConeRectangleIntersection_untransform
          , h = re.nearestConeRectangleIntersection_radialLineIntersection
          , f = re.nearestConeRectangleIntersection_radialArcHit;
        let m = r.origin.x
          , g = r.origin.x + r.size.x
          , p = r.origin.y + r.size.y
          , v = r.origin.y;
        a && (m -= a,
        g += a,
        v -= a,
        p += a);
        const x = r.origin.x + r.size.x / 2
          , y = r.origin.y + r.size.y / 2
          , b = e.x
          , S = e.y;
        let k, I;
        if (o) {
            i -= o,
            k = u.cos(-o),
            I = u.sin(-o);
            const q = e.x - x
              , W = e.y - y;
            e.x = k * q - I * W + x,
            e.y = k * W + I * q + y
        }
        if (m -= e.x,
        g -= e.x,
        p -= e.y,
        v -= e.y,
        0 >= m && 0 <= g && 0 >= v && 0 <= p) {
            let q = c == null ? void 0 : c[0];
            return q ? (q.x = e.x,
            q.y = e.y,
            q.l2 = 0) : q = {
                x: e.x,
                y: e.y,
                l2: 0
            },
            c && !c[0] && (c[0] = q),
            d(e, b, S, x, y, o, k, I, q)
        }
        const R = Math.max(m, Math.min(g, 0))
          , T = Math.max(v, Math.min(p, 0))
          , P = R * R + T * T;
        i = (i % Se + Se) % Se;
        const w = (i + s) % Se
          , A = (u.atan2(T, R) + Se) % Se;
        if ((i < w ? A >= i && A <= w : A >= i || A <= w) && P <= n * n) {
            let q = c == null ? void 0 : c[0];
            return q ? (q.x = R + e.x,
            q.y = T + e.y,
            q.l2 = P) : q = {
                x: R + e.x,
                y: T + e.y,
                l2: P
            },
            c && !c[0] && (c[0] = q),
            d(e, b, S, x, y, o, k, I, q)
        }
        let _ = 0;
        c || (c = []);
        const z = u.cos(i)
          , F = u.sin(i)
          , U = u.cos(w)
          , G = u.sin(w);
        let j, Z, Q, N, O, Y;
        if (j = z,
        Z = F,
        j !== 0 && (Q = m,
        Y = h(j, Z, Q, v, p, n, c[_], !1),
        Y && (c[_++] = Y),
        Q = g,
        Y = h(j, Z, Q, v, p, n, c[_], !1),
        Y && (c[_++] = Y)),
        Z !== 0 && (N = v,
        Y = h(Z, j, N, m, g, n, c[_], !0),
        Y && (c[_++] = Y),
        N = p,
        Y = h(Z, j, N, m, g, n, c[_], !0),
        Y && (c[_++] = Y)),
        j = U,
        Z = G,
        j !== 0 && (Q = m,
        Y = h(j, Z, Q, v, p, n, c[_], !1),
        Y && (c[_++] = Y),
        Q = g,
        Y = h(j, Z, Q, v, p, n, c[_], !1),
        Y && (c[_++] = Y)),
        Z !== 0 && (N = v,
        Y = h(Z, j, N, m, g, n, c[_], !0),
        Y && (c[_++] = Y),
        N = p,
        Y = h(Z, j, N, m, g, n, c[_], !0),
        Y && (c[_++] = Y)),
        Q = m,
        O = n * n - Q * Q,
        0 <= O) {
            const q = u.sqrt(O);
            if (N = -q,
            v <= N && N <= p) {
                const W = f(Q, N, i, w, c[_], u, !1);
                W && (c[_++] = W)
            }
            if (N = q,
            v <= N && N <= p) {
                const W = f(Q, N, i, w, c[_], u, !1);
                W && (c[_++] = W)
            }
        }
        if (Q = g,
        O = n * n - Q * Q,
        0 <= O) {
            const q = u.sqrt(O);
            let W = -q;
            if (v <= W && W <= p) {
                const ie = f(Q, W, i, w, c[_], u, !1);
                ie && (c[_++] = ie)
            }
            if (W = q,
            v <= W && W <= p) {
                const ie = f(Q, W, i, w, c[_], u, !1);
                ie && (c[_++] = ie)
            }
        }
        if (N = v,
        O = n * n - N * N,
        0 <= O) {
            const q = u.sqrt(O);
            let W = -q;
            if (m <= W && W <= g) {
                const ie = f(W, N, i, w, c[_], u, !0);
                ie && (c[_++] = ie)
            }
            if (W = q,
            m <= W && W <= g) {
                const ie = f(W, N, i, w, c[_], u, !0);
                ie && (c[_++] = ie)
            }
        }
        if (N = p,
        O = n * n - N * N,
        0 <= O) {
            const q = u.sqrt(O);
            let W = -q;
            if (m <= W && W <= g) {
                const ie = f(W, N, i, w, c[_], u, !0);
                ie && (c[_++] = ie)
            }
            if (W = q,
            m <= W && W <= g) {
                const ie = f(W, N, i, w, c[_], u, !0);
                ie && (c[_++] = ie)
            }
        }
        if (_ === 0) {
            e.x = b,
            e.y = S;
            return
        }
        let ue = c[0]
          , pe = ue.l2;
        for (let q = 1; q < _; q++) {
            const W = c[q];
            W.l2 >= pe || (pe = W.l2,
            ue = W)
        }
        return d(e, b, S, x, y, o, k, I, ue)
    }
    static circleTangentLines(e, n, i, s) {
        const r = n.x - e.x
          , o = n.y - e.y;
        let a = r * r + o * o;
        if (a <= i * i)
            return;
        const c = Math.asin(i / Math.sqrt(a))
          , u = Math.atan2(o, r);
        return s || (s = []),
        s[0] || (s[0] = {
            x: 0,
            y: 0
        }),
        s[1] || (s[1] = {
            x: 0,
            y: 0
        }),
        s[0].x = i * -Math.sin(u - c),
        s[0].y = i * Math.cos(u - c),
        s[1].x = i * Math.sin(u + c),
        s[1].y = i * -Math.cos(u + c),
        s
    }
    static findLinearIntersection(e, n, i) {
        const s = Math.cos(n.d)
          , r = Math.sin(n.d);
        let o, a;
        if (i) {
            const v = i.v * i.t * Math.cos(i.d)
              , x = i.v * i.t * Math.sin(i.d)
              , y = n.v * i.t * s
              , b = n.v * i.t * r;
            o = n.p.x + y - (e.p.x + v),
            a = n.p.y + b - (e.p.y + x)
        } else
            o = n.p.x - e.p.x,
            a = n.p.y - e.p.y;
        const c = o * o + a * a
          , u = o * s + a * r
          , d = 2 * n.v * u * (2 * n.v * u) - 4 * c * (n.v * n.v - e.v * e.v);
        if (d < 0)
            return null;
        const h = Math.sqrt(d);
        let f = (-2 * n.v * u - h) / (2 * c)
          , m = (-2 * n.v * u + h) / (2 * c);
        if (f < 0 && m < 0)
            return null;
        let g;
        if (f > 0 && m > 0) {
            const v = n.v * s + f * o
              , x = n.v * r + f * a
              , y = n.v * s + m * o
              , b = n.v * r + m * a
              , S = v * o + x * a
              , k = y * o + b * a;
            if (S > 0 && k > 0)
                g = f > m ? f : m;
            else if (S > 0)
                g = f;
            else if (k > 0)
                g = m;
            else
                return null
        } else
            g = f > 0 ? f : m;
        const p = 1 / g;
        return e.d = Math.atan2(n.v * r + g * a, n.v * s + g * o),
        {
            a: e,
            b: n,
            t: p
        }
    }
    static calculateRayIntersectionTime(e, n, i, s, r, o, a, c=1e-4) {
        const u = Math.cos(e)
          , d = Math.sin(e)
          , h = n * Math.cos(i)
          , f = n * Math.sin(i)
          , m = o * Math.cos(a)
          , g = o * Math.sin(a)
          , p = m - h
          , v = g - f
          , x = p * d - v * u;
        if (Math.abs(x) < c) {
            const S = s * d - r * u;
            return Math.abs(S) < c && (s * u + r * d >= 0 || Math.sqrt(s * s + r * r) <= c) ? 0 : null
        }
        return (u * r - d * s) / x
    }
    static compareArea(e, n) {
        return e.x === n.x && e.y === n.y ? 0 : e.x < n.x && e.y < n.y ? -1 : e.x > n.x && e.y > n.y ? 1 : e.x * e.y < n.x * n.y ? -1 : 1
    }
    static smallerOf(e, n) {
        return re.compareArea(e, n) <= 0 ? e : n
    }
    static largerOf(e, n) {
        return re.compareArea(e, n) >= 0 ? e : n
    }
}
function No(t, e, n) {
    return (e = Hu(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function Hu(t) {
    var e = Gu(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function Gu(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
class Le {
    constructor(e, n, i, s) {
        if (No(this, "origin", void 0),
        No(this, "size", void 0),
        i === !0)
            this.origin = e,
            this.size = n;
        else if (s != null)
            this.origin = new re(e,n),
            this.size = new re(i,s);
        else if (n == null)
            if (e != null && "origin"in e && "size"in e)
                this.origin = new re(e.origin),
                this.size = new re(e.size);
            else if (e != null && "x"in e && "y"in e && "width"in e && "height"in e)
                this.origin = new re(e),
                this.size = new re(e.width,e.height);
            else
                throw new Error("Invalid input for Rect2D constructor");
        else
            this.origin = e == null ? re.zero() : new re(e),
            this.size = new re(n)
    }
    static ensure(e) {
        return e instanceof Le ? e : new Le(e)
    }
    lineIntersection(...e) {
        return Le.lineIntersection(this, ...e)
    }
    static lineIntersection(e, n, i, s=!1, r) {
        const o = e.origin.x
          , a = e.origin.x + e.size.x
          , c = e.origin.y
          , u = e.origin.y + e.size.y;
        r || (r = []);
        let d = 0
          , h = 0
          , f = 0
          , m = 0;
        if (i.x !== 0) {
            if (h = o,
            m = (h - n.x) / i.x,
            f = n.y + m * i.y,
            !(m < 0 && s) && c <= f && f <= u) {
                const v = h - n.x
                  , x = f - n.y
                  , y = v * v + x * x
                  , b = r[d];
                b ? (b.x = h,
                b.y = f,
                b.l2 = y,
                b.t = m) : r[d] = {
                    x: h,
                    y: f,
                    l2: y,
                    t: m
                },
                d++
            }
            if (h = a,
            m = (h - n.x) / i.x,
            f = n.y + m * i.y,
            !(m < 0 && s) && c <= f && f <= u) {
                const v = h - n.x
                  , x = f - n.y
                  , y = v * v + x * x
                  , b = r[d];
                b ? (b.x = h,
                b.y = f,
                b.l2 = y,
                b.t = m) : r[d] = {
                    x: h,
                    y: f,
                    l2: y,
                    t: m
                },
                d++
            }
        }
        if (i.y !== 0) {
            if (f = c,
            m = (f - n.y) / i.y,
            h = n.x + m * i.x,
            !(m < 0 && s) && o <= h && h <= a) {
                const v = h - n.x
                  , x = f - n.y
                  , y = v * v + x * x
                  , b = r[d];
                b ? (b.x = h,
                b.y = f,
                b.l2 = y,
                b.t = m) : r[d] = {
                    x: h,
                    y: f,
                    l2: y,
                    t: m
                },
                d++
            }
            if (f = u,
            m = (f - n.y) / i.y,
            h = n.x + m * i.x,
            !(m < 0 && s) && o <= h && h <= a) {
                const v = h - n.x
                  , x = f - n.y
                  , y = v * v + x * x
                  , b = r[d];
                b ? (b.x = h,
                b.y = f,
                b.l2 = y,
                b.t = m) : r[d] = {
                    x: h,
                    y: f,
                    l2: y,
                    t: m
                },
                d++
            }
        }
        if (d <= 1)
            return d;
        if (d > 4)
            return console.warn("lineIntersection out array > 4 el long"),
            r.sort( (v, x) => v.l2 - x.l2),
            d;
        const g = r;
        let p = g[0];
        return d >= 2 && g[0].l2 > g[1].l2 && (p = g[0],
        g[0] = g[1],
        g[1] = p),
        d >= 3 && (g[1].l2 > g[2].l2 && (p = g[1],
        g[1] = g[2],
        g[2] = p),
        g[0].l2 > g[1].l2 && (p = g[0],
        g[0] = g[1],
        g[1] = p)),
        d === 4 && (g[2].l2 > g[3].l2 && (p = g[2],
        g[2] = g[3],
        g[3] = p),
        g[1].l2 > g[2].l2 && (p = g[1],
        g[1] = g[2],
        g[2] = p),
        g[0].l2 > g[1].l2 && (p = g[0],
        g[0] = g[1],
        g[1] = p)),
        d
    }
    static center(e, n, i, s) {
        let r, o, a, c;
        return typeof e == "number" ? (r = e,
        o = n,
        a = i,
        c = s ?? i) : typeof n == "number" ? (r = (e == null ? void 0 : e.x) ?? 0,
        o = (e == null ? void 0 : e.y) ?? 0,
        a = n,
        c = i ?? n) : (r = (e == null ? void 0 : e.x) ?? 0,
        o = (e == null ? void 0 : e.y) ?? 0,
        a = (n == null ? void 0 : n.x) ?? 0,
        c = (n == null ? void 0 : n.y) ?? 0),
        new Le(r - a,o - c,a * 2,c * 2)
    }
    contains(e, n=!1) {
        return this.origin.x <= e.x && (!n && e.x < this.origin.x + this.size.x || n && e.x <= this.origin.x + this.size.x) && this.origin.y <= e.y && (!n && e.y < this.origin.y + this.size.y || n && e.y <= this.origin.y + this.size.y)
    }
    clamp(e, n, i=!1) {
        return n || (n = {}),
        n.x = Math.max(this.minX, Math.min(this.maxX - (i ? 1 : 0), e.x)),
        n.y = Math.max(this.minY, Math.min(this.maxY - (i ? 1 : 0), e.y)),
        n
    }
    get minX() {
        return this.origin.x
    }
    get midX() {
        return this.origin.x + this.size.x / 2
    }
    get maxX() {
        return this.origin.x + this.size.x
    }
    get minY() {
        return this.origin.y
    }
    get midY() {
        return this.origin.y + this.size.y / 2
    }
    get maxY() {
        return this.origin.y + this.size.y
    }
    get min() {
        return this.origin.copy()
    }
    get mid() {
        return re.xy(this.midX, this.midY)
    }
    get max() {
        return re.xy(this.maxX, this.maxY)
    }
    vertices(e=0, n, i, s=0) {
        const r = this.minX
          , o = this.minY
          , a = this.maxX
          , c = this.maxY
          , u = (n == null ? void 0 : n.x) ?? this.origin.x + this.size.x / 2
          , d = (n == null ? void 0 : n.y) ?? this.origin.y + this.size.y / 2;
        if (i || (i = []),
        i[s + 0] ? (i[s + 0].x = r,
        i[s + 0].y = o) : i[s + 0] = new re(r,o),
        i[s + 1] ? (i[s + 1].x = a,
        i[s + 1].y = o) : i[s + 1] = new re(a,o),
        i[s + 2] ? (i[s + 2].x = a,
        i[s + 2].y = c) : i[s + 2] = new re(a,c),
        i[s + 3] ? (i[s + 3].x = r,
        i[s + 3].y = c) : i[s + 3] = new re(r,c),
        e === 0)
            return i;
        const h = Math.cos(e)
          , f = Math.sin(e);
        for (let m = s; m < s + 4; m++) {
            const g = i[m];
            g.x -= u,
            g.y -= d;
            const p = g.x;
            g.x = h * p - f * g.y,
            g.y = h * g.y + f * p,
            g.x += u,
            g.y += d
        }
        return i
    }
    get width() {
        return this.size.x
    }
    get height() {
        return this.size.y
    }
    offsetSize(e, n=this) {
        let i, s;
        return typeof e == "number" ? i = s = e : (i = e.x,
        s = e.y),
        i * 2 + this.size.x < 0 ? (n.origin.x = this.origin.x + this.size.x / 2,
        n.size.x = 0) : (n.origin.x = this.origin.x - i,
        n.size.x = this.size.x + i * 2),
        s * 2 + this.size.y < 0 ? (n.origin.y = this.origin.y + this.size.y / 2,
        n.size.y = 0) : (n.origin.y = this.origin.y - s,
        n.size.y = this.size.y + s * 2),
        n
    }
    set({origin: e, size: n}) {
        return (e == null ? void 0 : e.x) != null && (this.origin.x = e.x),
        (e == null ? void 0 : e.y) != null && (this.origin.y = e.y),
        (n == null ? void 0 : n.x) != null && (this.size.x = n.x),
        (n == null ? void 0 : n.y) != null && (this.size.y = n.y),
        this
    }
    setFlat(e, n, i, s) {
        return typeof e == "object" ? (this.origin.x = e.x,
        this.origin.y = e.y,
        this.size.x = e.width,
        this.size.y = e.height) : (this.origin.x = e,
        this.origin.y = n,
        this.size.x = i,
        this.size.y = s),
        this
    }
    toFlat() {
        return {
            x: this.origin.x,
            y: this.origin.y,
            width: this.size.x,
            height: this.size.y
        }
    }
    setCenter(e, n, i, s) {
        if (typeof e == "object")
            if (n) {
                const {x: r, y: o} = n;
                this.origin.x = e.x - r,
                this.origin.y = e.y - o,
                this.size.x = r * 2,
                this.size.y = o * 2
            } else
                this.origin.x = e.x - this.size.x * .5,
                this.origin.y = e.y - this.size.y * .5;
        else
            i != null ? (this.origin.x = e - i,
            this.origin.y = n - s,
            this.size.x = i * 2,
            this.size.y = s * 2) : (this.origin.x = e - this.size.x * .5,
            this.origin.y = n - this.size.y * .5);
        return this
    }
    scaleCentered(e, n=this) {
        const i = this.origin.x + this.size.x / 2
          , s = this.origin.y + this.size.y / 2;
        return n.size.x = this.size.x * e,
        n.size.y = this.size.y * e,
        n.origin.x = i - n.size.x / 2,
        n.origin.y = s - n.size.y / 2,
        n
    }
    divScaleCentered(e, n=this) {
        const i = this.origin.x + this.size.x / 2
          , s = this.origin.y + this.size.y / 2;
        return n.size.x = this.size.x / e,
        n.size.y = this.size.y / e,
        n.origin.x = i - n.size.x / 2,
        n.origin.y = s - n.size.y / 2,
        n
    }
    mulMagnitude(e, n=this) {
        return n.size.x = this.size.x * e,
        n.size.y = this.size.y * e,
        n.origin.x = this.origin.x * e,
        n.origin.y = this.origin.y * e,
        this
    }
    divMagnitude(e, n=this) {
        return n.size.x = this.size.x / e,
        n.size.y = this.size.y / e,
        n.origin.x = this.origin.x / e,
        n.origin.y = this.origin.y / e,
        this
    }
    freeze() {
        return Object.freeze(this),
        Object.freeze(this.origin),
        Object.freeze(this.size),
        this
    }
    freezeWithCenter() {
        const e = this.mid;
        return this.center = e,
        Object.freeze(this),
        Object.freeze(this.origin),
        Object.freeze(this.size),
        Object.freeze(e),
        this
    }
    copy(e) {
        return e ? (e.origin || (e.origin = {}),
        e.size || (e.size = {}),
        e.origin.x = this.origin.x,
        e.origin.y = this.origin.y,
        e.size.x = this.size.x,
        e.size.y = this.size.y,
        e) : new Le(this)
    }
    intersectsCircle(e, n, i=0, s=!1) {
        let r, o, a = e.x, c = e.y;
        if (i) {
            const p = this.origin.x + this.size.x / 2
              , v = this.origin.y + this.size.y / 2
              , x = Math.cos(-i)
              , y = Math.sin(-i);
            a -= p,
            c -= v;
            const b = a;
            a = x * b - y * c,
            c = x * c + y * b,
            a += p,
            c += v
        }
        const u = this.origin.x
          , d = this.origin.y
          , h = this.origin.x + this.size.x
          , f = this.origin.y + this.size.y;
        a < u ? r = u : !s && a >= h || s && a > h ? r = h : r = a,
        c < d ? o = d : !s && c >= f || s && c > f ? o = f : o = c;
        const m = r - a
          , g = o - c;
        return m <= n && g <= n && m * m + g * g <= n * n
    }
    static intersectsCircle(e, n, i, s) {
        const r = i.x
          , o = i.y
          , a = i.x + s.x
          , c = i.y + s.y
          , u = e.x < r ? r : e.x > a ? a : e.x
          , d = e.y < o ? o : e.y > c ? c : e.y
          , h = u - e.x
          , f = d - e.y;
        return h > n || f > n ? !1 : h <= n && f <= n && h * h + f * f <= n * n
    }
    static containsCircle(e, n, i, s, r) {
        const o = e.origin.x
          , a = e.origin.y
          , c = e.origin.x + e.size.x
          , u = e.origin.y + e.size.y;
        if (e.size.x === 0 || e.size.y === 0)
            return !1;
        const d = Math.min(o, c)
          , h = Math.max(o, c)
          , f = Math.min(a, u)
          , m = Math.max(a, u);
        return (r ? n < d || n > h || i < f || i > m : n <= d || n >= h || i <= f || i >= m) ? !1 : r ? n + s <= h && n - s >= d && i + s <= m && i - s >= f : n + s < h && n - s > d && i + s < m && i - s > f
    }
    sdf(e, n, i=!1) {
        const s = this.size.x / 2
          , r = this.size.y / 2
          , o = this.origin.x + s
          , a = this.origin.y + r;
        let c = e.x - o
          , u = e.y - a;
        if (n) {
            const m = Math.cos(-n)
              , g = Math.sin(-n)
              , p = c;
            c = m * p - g * u,
            u = m * u + g * p
        }
        let d = Math.abs(c) - s
          , h = Math.abs(u) - r;
        if (d < 0 && h < 0) {
            const m = d < h ? d : h;
            return i ? -(m * m) : m
        }
        d < 0 && (d = 0),
        h < 0 && (h = 0);
        const f = d * d + h * h;
        return i ? f : Math.sqrt(f)
    }
    intersectsRect(e, n) {
        return n ? this.origin.x <= e.origin.x + e.size.x && e.origin.x <= this.origin.x + this.size.x && this.origin.y <= e.origin.y + e.size.y && e.origin.y <= this.origin.y + this.size.y : this.origin.x < e.origin.x + e.size.x && e.origin.x < this.origin.x + this.size.x && this.origin.y < e.origin.y + e.size.y && e.origin.y < this.origin.y + this.size.y
    }
    containsRect(e, n) {
        return n ? this.origin.x < e.origin.x && e.origin.x + e.size.x < this.origin.x + this.size.x && this.origin.y < e.origin.y && e.origin.y + e.size.y < this.origin.y + this.size.y : this.origin.x <= e.origin.x && e.origin.x + e.size.x <= this.origin.x + this.size.x && this.origin.y <= e.origin.y && e.origin.y + e.size.y <= this.origin.y + this.size.y
    }
    getRandomPoint(e= (i, s) => Math.floor(i + Math.random() * (s - i)), n) {
        return n || (n = {}),
        n.x = e(this.origin.x, this.origin.x + this.size.x),
        n.y = e(this.origin.y, this.origin.y + this.size.y),
        n
    }
    transpose(e=this) {
        const n = this.origin.x + this.size.x / 2
          , i = this.origin.y + this.size.y / 2;
        e.origin.x = n - this.size.y / 2,
        e.origin.y = i - this.size.x / 2;
        const s = this.size.x;
        return e.size.x = this.size.y,
        e.size.y = s,
        e
    }
    shiftMin(e, n) {
        return new Le({
            origin: {
                x: this.origin.x + (e.x ?? 0),
                y: this.origin.y + (e.y ?? 0)
            },
            size: n ? this.size : {
                x: this.size.x - (e.x ?? 0),
                y: this.size.y - (e.y ?? 0)
            }
        })
    }
    shiftMax(e, n) {
        return new Le({
            origin: n ? {
                x: this.origin.x - (e.x ?? 0),
                y: this.origin.y - (e.y ?? 0)
            } : this.origin,
            size: {
                x: this.size.x + (e.x ?? 0),
                y: this.size.y + (e.y ?? 0)
            }
        })
    }
    closestPoint(e, n=0, i, s) {
        s ? e !== s && (s.x = e.x,
        s.y = e.y) : s = {
            x: e.x,
            y: e.y
        };
        const r = this.origin.x + this.size.x / 2
          , o = this.origin.y + this.size.y / 2;
        n && re.rotate(s, -n, r, o);
        let a = s.x
          , c = s.y;
        const u = typeof i == "number" ? i : (i == null ? void 0 : i.x) ?? 0
          , d = typeof i == "number" ? i : (i == null ? void 0 : i.y) ?? 0
          , h = Math.min(this.origin.y - d, r)
          , f = Math.max(h + this.size.y + d * 2, o)
          , m = Math.min(this.origin.x - u, r)
          , g = Math.max(m + this.size.x + u * 2, r);
        a = Math.max(m, Math.min(a, g)),
        c = Math.max(h, Math.min(c, f));
        const p = Math.abs(a - m)
          , v = Math.abs(a - g)
          , x = Math.abs(c - h)
          , y = Math.abs(c - f)
          , b = Math.min(p, v, x, y);
        return b == x ? (s.x = a,
        s.y = h) : b == y ? (s.x = a,
        s.y = f) : b == p ? (s.x = m,
        s.y = c) : (s.x = g,
        s.y = c),
        n && re.rotate(s, n, r, o),
        s
    }
    static rectIntersect(e, n, i=0, s=0, r, o=1e-10) {
        r || (r = []);
        for (let u = r.length; u < 8; u++)
            r.push({
                x: 0,
                y: 0
            });
        typeof i == "number" ? e.vertices(i, void 0, r, 0) : e.vertices(i.angle, i.origin, r, 0),
        typeof s == "number" ? n.vertices(s, void 0, r, 4) : n.vertices(s.angle, s.origin, r, 4);
        const a = (typeof i == "number" ? i : i.angle) - (typeof s == "number" ? s : s.angle)
          , c = Hc(a, Math.PI / 2) < o;
        for (let u = 0; u < (c ? 1 : 2); u++) {
            const d = r[u * 4 + 0]
              , h = r[u * 4 + 1]
              , f = r[u * 4 + 2];
            let m, g;
            for (let p = 0; p < 2; p++) {
                p == 0 ? (m = -(h.y - d.y),
                g = h.x - d.x) : (m = -(f.y - h.y),
                g = f.x - h.x);
                let v, x, y, b;
                for (let S = 0; S < 4; S++) {
                    const k = r[0 + S].x * m + r[0 + S].y * g
                      , I = r[4 + S].x * m + r[4 + S].y * g;
                    S == 0 ? (v = x = k,
                    y = b = I) : (v = Math.min(v, k),
                    x = Math.max(x, k),
                    y = Math.min(y, I),
                    b = Math.max(b, I))
                }
                if (x < y - o || b < v - o)
                    return !1
            }
        }
        return !0
    }
    rotate(e=this) {
        const n = (this.size.x - this.size.y) / 2;
        e.origin.x = this.origin.x + n,
        e.origin.y = this.origin.y - n;
        const i = e.size.x;
        return e.size.x = this.size.y,
        e.size.y = i,
        e
    }
    equals(e, n=null) {
        return this.origin.equals(e.origin, n) && this.size.equals(e.size, n)
    }
    toLocal(e, n, i=!1) {
        return n || (n = {}),
        n.x = (e.x - this.origin.x) / this.size.x,
        n.y = (e.y - this.origin.y) / this.size.y,
        i && (n.x = Math.max(0, Math.min(1, n.x)),
        n.y = Math.max(0, Math.min(1, n.y))),
        n
    }
    fromLocal(e, n) {
        return n || (n = {}),
        n.x = this.origin.x + e.x * this.size.x,
        n.y = this.origin.y + e.y * this.size.y,
        n
    }
}
function oe(t, e, n) {
    return (e = Vu(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function Vu(t) {
    var e = qu(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function qu(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
const jt = {
    RowMajor: 0,
    Spiral: 1
}
  , Ct = {
    None: 0,
    Inner: 1,
    Outer: 2
};
Object.fromEntries(Object.entries(jt).map( ([t,e]) => [e, t]));
class C1 {
    constructor() {
        oe(this, "layout", void 0),
        oe(this, "map", void 0),
        oe(this, "outerMap", void 0),
        oe(this, "bounds", void 0),
        oe(this, "grid", void 0),
        oe(this, "cellSize", void 0),
        oe(this, "cellCount", void 0),
        oe(this, "fractionalCellCount", void 0),
        oe(this, "cellRects", void 0),
        oe(this, "gridToCellIndex", void 0),
        oe(this, "cellIndexToGrid", void 0)
    }
    gridToIndex(e, n, i) {
        return this.gridToIndexFlat(e.x, e.y, n, i)
    }
    outOfBounds(e, n, i) {
        if (!i)
            return !1;
        const s = i === Ct.Outer ? this.outerMap : this.map;
        return !(s.origin.x <= e && e < s.origin.x + s.size.x && s.origin.y <= n && n < s.origin.y + s.size.y)
    }
    gridOutOfBounds(e, n, i) {
        if (!i)
            return !1;
        const s = this.grid;
        return !(s.origin.x <= e && e < s.origin.x + s.size.x && s.origin.y <= n && n < s.origin.y + s.size.y)
    }
    pointToGridFlat(e, n, i=Ct.Inner, s) {
        return this.outOfBounds(e, n, i) ? null : (e = Math.floor((e - this.outerMap.origin.x) / this.cellSize.x) + this.grid.origin.x,
        n = Math.floor((n - this.outerMap.origin.y) / this.cellSize.y) + this.grid.origin.y,
        s ? (s.x = e,
        s.y = n,
        s) : {
            x: e,
            y: n
        })
    }
    pointToGrid(e, n, i) {
        return this.pointToGridFlat(e.x, e.y, n, i)
    }
    pointToCellIndex(e, n, i) {
        return this.pointToCellIndexFlat(e.x, e.y, n, i)
    }
    cellOriginFlat(e, n, i=!0, s={}) {
        return i && this.gridOutOfBounds(e, n, !0) ? null : (s.x = this.outerMap.origin.x + (e - this.grid.origin.x) * this.cellSize.x,
        s.y = this.outerMap.origin.y + (n - this.grid.origin.y) * this.cellSize.y,
        s)
    }
    cellOrigin(e, n, i) {
        return this.cellOriginFlat(e.x, e.y, n, i)
    }
    static precompute(e, n) {
        const i = e.grid.origin;
        return e.gridToCellIndex = Array.from({
            length: e.grid.size.y
        }, (s, r) => Array.from({
            length: e.grid.size.x
        }, (o, a) => e.gridToIndexFlat(i.x + a, i.y + r, !1, !1))),
        e.cellIndexToGrid = Array.from({
            length: e.cellCount
        }, (s, r) => {
            var o;
            return e.indexToGrid(r, !1, (o = n == null ? void 0 : n.iPoint2DPool) == null ? void 0 : o.pop(), !1)
        }
        ),
        e.cellRects = e.cellIndexToGrid.map(s => {
            var a, c, u;
            const r = (a = n == null ? void 0 : n.rect2DPool) == null ? void 0 : a.pop()
              , o = (r == null ? void 0 : r.origin) ?? ((c = n == null ? void 0 : n.point2DPool) == null ? void 0 : c.pop()) ?? new re(0,0);
            return e.cellOrigin(s, !1, o),
            r ? ((u = n == null ? void 0 : n.point2DPool) == null || u.push(r.size),
            r.size = e.cellSize,
            r) : new Le(o,e.cellSize,!0)
        }
        ),
        e
    }
    resize(e, n=e, i=!0, s) {
        var a, c, u, d;
        const r = this.constructor;
        if (!i && this.map.size.x === e && this.map.size.y === n)
            return;
        this.map.size.x = e,
        this.map.size.y = n,
        r.map(this.map.size, this.cellSize, this.map),
        r.outerMap(this.map.size, this.cellSize, this.outerMap),
        r.grid(this.map.size, this.cellSize, this.grid);
        const o = this.cellCount;
        if (this.cellCount = this.grid.size.product,
        this.fractionalCellCount = this.map.size.product / this.cellSize.product,
        !i) {
            (this.gridToCellIndex || this.cellIndexToGrid || this.cellRects) && r.precompute(this, s);
            return
        }
        if (o !== this.cellCount) {
            if (this.gridToCellIndex) {
                this.gridToCellIndex.length = this.grid.size.y;
                for (let h = 0; h < this.grid.size.y; h++) {
                    let f = this.gridToCellIndex[h];
                    f ? f.length = this.grid.size.x : f = this.gridToCellIndex[h] = new Array(this.grid.size.x);
                    for (let m = 0; m < this.grid.size.x; m++)
                        f[m] = this.gridToIndexFlat(this.grid.origin.x + m, this.grid.origin.y + h, !1, !1)
                }
            }
            if (this.cellIndexToGrid) {
                if (this.cellIndexToGrid.length < this.cellCount && (s != null && s.iPoint2DPool)) {
                    const h = this.cellIndexToGrid.splice(this.cellCount);
                    s.iPoint2DPool.push(...h)
                }
                this.cellIndexToGrid.length = this.cellCount;
                for (let h = 0; h < this.cellCount; h++)
                    this.cellIndexToGrid[h] = this.indexToGrid(h, !1, this.cellIndexToGrid[h] ?? ((a = s == null ? void 0 : s.iPoint2DPool) == null ? void 0 : a.pop()), !1)
            }
        }
        if (this.cellRects) {
            if (this.cellCount < this.cellRects.length && (s != null && s.point2DPool)) {
                const f = this.cellRects.splice(this.cellCount);
                for (const m of f)
                    s.rect2DPool && s.point2DPool.length ? (m.size = s.point2DPool.pop(),
                    s.rect2DPool.push(m)) : s.point2DPool.push(m.origin)
            }
            this.cellRects.length = this.cellCount;
            let h = this.cellIndexToGrid ? void 0 : {
                x: 0,
                y: 0
            };
            for (let f = 0; f < this.cellCount; f++) {
                const m = this.cellIndexToGrid ? this.cellIndexToGrid[f] : this.indexToGrid(f, !1, h, !1);
                if (this.cellRects[f])
                    this.cellOrigin(m, !1, this.cellRects[f].origin);
                else {
                    const g = (c = s == null ? void 0 : s.rect2DPool) == null ? void 0 : c.pop()
                      , p = (g == null ? void 0 : g.origin) ?? ((u = s == null ? void 0 : s.point2DPool) == null ? void 0 : u.pop()) ?? new re(0,0);
                    this.cellOrigin(m, !1, p),
                    g ? ((d = s == null ? void 0 : s.point2DPool) == null || d.push(g.size),
                    g.size = this.cellSize,
                    this.cellRects[f] = g) : this.cellRects[f] = new Le(p,this.cellSize,!0)
                }
            }
        }
    }
    cellRect(e, n=!0) {
        const i = this.cellOrigin(e, n);
        return i == null ? null : new Le(i,new re(this.cellSize))
    }
    rectCellBounds(e, n, i, s, r, o=!0) {
        if (this.pointToGridFlat(e.x - n, e.y - i, !1, s),
        this.pointToGridFlat(e.x + n, e.y + i, !1, r),
        o) {
            const a = this.grid.origin.x
              , c = this.grid.origin.y
              , u = a + this.grid.size.x - 1
              , d = c + this.grid.size.y - 1;
            s.x < a ? s.x = a : u < s.x && (s.x = u),
            r.x < a ? r.x = a : u < r.x && (r.x = u),
            s.y < c ? s.y = c : d < s.y && (s.y = d),
            r.y < c ? r.y = c : d < r.y && (r.y = d)
        }
    }
    nearbyCellCoords(e, n, i=[], s=!1, r=!0, o) {
        var f, m, g, p;
        const a = (o == null ? void 0 : o.pop()) ?? {
            x: 0,
            y: 0
        }
          , c = (o == null ? void 0 : o.pop()) ?? {
            x: 0,
            y: 0
        };
        this.rectCellBounds(e, n, n, a, c, r);
        const u = (o == null ? void 0 : o.pop()) ?? {
            x: 0,
            y: 0
        };
        let d = 0;
        const h = this.grid.origin;
        for (let v = a.y; v <= c.y; v++) {
            const x = v - h.y;
            for (let y = a.x; y <= c.x; y++) {
                const b = y - h.x
                  , S = ((m = (f = this.gridToCellIndex) == null ? void 0 : f[x]) == null ? void 0 : m[b]) ?? this.gridToIndexFlat(y, v, !1)
                  , k = ((p = (g = this.cellRects) == null ? void 0 : g[S]) == null ? void 0 : p.origin) ?? this.cellOriginFlat(y, v, !1, u);
                if (Le.intersectsCircle(e, n, k, this.cellSize))
                    if (s)
                        i[d++] = S;
                    else {
                        const I = i[d] ?? (o == null ? void 0 : o.pop());
                        I ? (I.x = y,
                        I.y = v,
                        i[d++] = I) : i[d++] = {
                            x: y,
                            y: v
                        }
                    }
            }
        }
        return o == null || o.push(a, c, u),
        d
    }
    cellsInRect(e, n, i=!0, s, r, o) {
        var b, S;
        const a = e.origin
          , c = (s == null ? void 0 : s.pop()) ?? {
            x: 0,
            y: 0
        };
        c.x = e.origin.x + e.size.x,
        c.y = e.origin.y + e.size.y;
        const u = this.pointToGrid(a, Ct.None, s == null ? void 0 : s.pop())
          , d = this.pointToGrid(c, Ct.None, s == null ? void 0 : s.pop())
          , h = this.outerMap.origin.x + (d.x - this.grid.origin.x) * this.cellSize.x
          , f = this.outerMap.origin.y + (d.y - this.grid.origin.y) * this.cellSize.y;
        h === c.x && d.x--,
        f === c.y && d.y--;
        const m = this.grid.origin.x
          , g = this.grid.origin.y
          , p = m + this.grid.size.x - 1
          , v = g + this.grid.size.y - 1;
        i && (u.x = Math.max(u.x, m),
        u.y = Math.max(u.y, g),
        d.x = Math.min(d.x, p),
        d.y = Math.min(d.y, v));
        const x = r ?? [];
        let y = o ?? 0;
        if (n)
            for (let k = u.y; k <= d.y; k++)
                for (let I = u.x; I <= d.x; I++)
                    x[y++] = ((S = (b = this.gridToCellIndex) == null ? void 0 : b[k - g]) == null ? void 0 : S[I - m]) ?? this.gridToIndexFlat(I, k, !1);
        else
            for (let k = u.y; k <= d.y; k++)
                for (let I = u.x; I <= d.x; I++) {
                    const R = s == null ? void 0 : s.pop();
                    R ? (R.x = I,
                    R.y = k,
                    x[y++] = R) : x[y++] = {
                        x: I,
                        y: k
                    }
                }
        return s == null || s.push(c, u, d),
        r ? y : x
    }
}
class kn extends C1 {
    constructor(e, n, i) {
        super(),
        oe(this, "layout", jt.RowMajor),
        oe(this, "cellSize", void 0),
        oe(this, "map", void 0),
        oe(this, "outerMap", void 0),
        oe(this, "bounds", void 0),
        oe(this, "grid", void 0),
        oe(this, "cellCount", void 0),
        oe(this, "fractionalCellCount", void 0),
        oe(this, "cellRects", void 0),
        oe(this, "gridToCellIndex", void 0),
        oe(this, "cellIndexToGrid", void 0),
        this.map = kn.map(e, n, new Le(0,0,0,0)),
        this.outerMap = kn.outerMap(e, n, new Le(0,0,0,0)),
        this.bounds = {
            [Ct.Inner]: this.map,
            [Ct.Outer]: this.outerMap
        },
        this.grid = kn.grid(e, n, new Le(0,0,0,0)),
        this.cellCount = this.grid.size.product,
        this.cellSize = new re(n).freeze(),
        this.fractionalCellCount = this.map.size.product / this.cellSize.product,
        i && qt.precompute(this, i === !0 ? void 0 : i)
    }
    static gridSize(e, n, i={}) {
        let s, r;
        return typeof n == "number" ? (s = n,
        r = n) : (s = n.x,
        r = n.y),
        i.x = Math.ceil(e.x / s),
        i.y = Math.ceil(e.y / r),
        i
    }
    static grid(e, n, i={
        origin: {
            x: 0,
            y: 0
        },
        size: {
            x: 0,
            y: 0
        }
    }) {
        return i.origin.x = 0,
        i.origin.y = 0,
        this.gridSize(e, n, i.size),
        i
    }
    static map(e, n, i={
        origin: {},
        size: {}
    }) {
        return i.origin.x = -Math.ceil(e.x / 2),
        i.origin.y = -Math.ceil(e.y / 2),
        i.size.x = e.x,
        i.size.y = e.y,
        i
    }
    static outerMap(e, n, i={
        origin: {},
        size: {}
    }) {
        i.origin.x = -Math.ceil(e.x / 2),
        i.origin.y = -Math.ceil(e.y / 2);
        let s, r;
        return typeof n == "number" ? (s = n,
        r = n) : (s = n.x,
        r = n.y),
        i.size.x = Math.ceil(e.x / s) * s,
        i.size.y = Math.ceil(e.y / r) * r,
        i
    }
    gridToIndexFlat(e, n, i=!0) {
        return i && this.gridOutOfBounds(e, n, i) ? null : n * this.grid.size.x + e
    }
    indexToGrid(e, n=!0, i={}) {
        const s = this.grid.size;
        return e == null || n && (e < 0 || e > this.cellCount) ? null : (i.y = e / s.x | 0,
        i.x = e - i.y * s.x,
        i)
    }
    static indexToGrid(e, n, i, s=!0, r={}) {
        return this.gridSize(e, n, r),
        i == null || s && (i < 0 || i > r.x * r.y) ? null : (r.y = i / r.x | 0,
        r.x = i - r.y * r.x,
        r)
    }
    static cellIndexOrigin(e, n, i, s=!0, r={}) {
        if (r = this.indexToGrid(e, n, i, s, r),
        r == null)
            return null;
        let o, a;
        return typeof n == "number" ? (o = n,
        a = n) : (o = n.x,
        a = n.y),
        r.x = -Math.ceil(e.x / 2) + r.x * o,
        r.y = -Math.ceil(e.y / 2) + r.y * a,
        r
    }
    pointToCellIndexFlat(e, n, i=Ct.Inner) {
        return i && this.outOfBounds(e, n, i) ? null : (e = Math.floor((e - this.outerMap.origin.x) / this.cellSize.x) + this.grid.origin.x,
        n = Math.floor((n - this.outerMap.origin.y) / this.cellSize.y) + this.grid.origin.y,
        n * this.grid.size.x + e)
    }
    cellIndexOrigin(e, n=!0, i={}) {
        if (n && (e < 0 || e > this.cellCount))
            return null;
        const s = this.grid.size
          , r = e / s.x | 0
          , o = e - r * s.x;
        return i.x = o * this.cellSize.x + this.outerMap.origin.x,
        i.y = r * this.cellSize.y + this.outerMap.origin.y,
        i
    }
}
const Ai = (t, e={
    x: 0,
    y: 0
}) => {
    if (t === 0)
        return e.x = 0,
        e.y = 0,
        e;
    --t;
    const n = Math.floor((Math.sqrt(t + 1) - 1) / 2) + 1
      , i = 8 * n * (n - 1) / 2
      , s = n * 2
      , r = (1 + t - i) % (n * 8);
    switch (Math.floor(r / (n * 2))) {
    case 0:
        e.x = n,
        e.y = r % s - n;
        break;
    case 1:
        e.x = n - r % s,
        e.y = n;
        break;
    case 2:
        e.x = -n,
        e.y = n - r % s;
        break;
    case 3:
        e.x = r % s - n,
        e.y = -n;
        break;
    default:
        throw new Error(`Unexpected spiral index ${t}`)
    }
    return e
}
  , Bo = (t, e) => {
    let n = 1;
    t > 0 ? n = 2 * t : t < 0 && (n = -2 * t + 1),
    e > 0 ? n = Math.max(n, 2 * e) : e < 0 && (n = Math.max(n, -2 * e + 1));
    const i = n * 2 - 1
      , s = Math.floor(n / 2);
    let r;
    return n % 2 === 0 ? Math.abs(t) > Math.abs(e) ? r = i - (s + e) : r = s + t - 1 : Math.abs(t) > Math.abs(e) || Math.abs(t) >= Math.abs(e) && t < 0 ? r = i - (s - e) - 1 : r = s - t,
    n * n - 1 - r
}
;
class qt extends C1 {
    constructor(e, n, i) {
        super(),
        oe(this, "layout", jt.Spiral),
        oe(this, "cellSize", void 0),
        oe(this, "map", void 0),
        oe(this, "outerMap", void 0),
        oe(this, "bounds", void 0),
        oe(this, "grid", void 0),
        oe(this, "cellCount", void 0),
        oe(this, "fractionalCellCount", void 0),
        oe(this, "cellRects", void 0),
        oe(this, "gridToCellIndex", void 0),
        oe(this, "cellIndexToGrid", void 0),
        oe(this, "partialCoverIndex", void 0),
        this.map = qt.map(e, n, new Le(0,0,0,0)),
        this.outerMap = qt.outerMap(e, n, new Le(0,0,0,0)),
        this.bounds = {
            [Ct.Inner]: this.map,
            [Ct.Outer]: this.outerMap
        },
        this.grid = qt.grid(e, n, new Le(0,0,0,0)),
        this.cellCount = this.grid.size.product,
        this.cellSize = new re(n).freeze(),
        this.fractionalCellCount = this.map.size.product / this.cellSize.product,
        i && qt.precompute(this, i === !0 ? void 0 : i),
        this.partialCoverIndex = this.computePartialCoverIndex()
    }
    static gridSize(e, n, i={}) {
        let s, r;
        return typeof n == "number" ? (s = n,
        r = n) : (s = n.x,
        r = n.y),
        i.x = (e.x + s - 1) / s | 0,
        i.y = (e.y + r - 1) / r | 0,
        i.x & 1 || i.x++,
        i.y & 1 || i.y++,
        i
    }
    static grid(e, n, i={
        origin: {
            x: 0,
            y: 0
        },
        size: {
            x: 0,
            y: 0
        }
    }) {
        return this.gridSize(e, n, i.size),
        i.origin.x = -(i.size.x >> 1),
        i.origin.y = -(i.size.y >> 1),
        i
    }
    static map(e, n, i={
        origin: {},
        size: {}
    }) {
        return i.origin.x = -e.x / 2,
        i.origin.y = -e.y / 2,
        i.size.x = e.x,
        i.size.y = e.y,
        i
    }
    static outerMap(e, n, i={
        origin: {
            x: 0,
            y: 0
        },
        size: {
            x: 0,
            y: 0
        }
    }) {
        let s, r;
        return typeof n == "number" ? (s = n,
        r = n) : (s = n.x,
        r = n.y),
        i.size.x = (e.x + s - 1) / s | 0,
        i.size.y = (e.y + r - 1) / r | 0,
        i.size.x & 1 || i.size.x++,
        i.size.y & 1 || i.size.y++,
        i.size.x *= s,
        i.size.y *= r,
        i.origin.x = -i.size.x / 2,
        i.origin.y = -i.size.y / 2,
        i
    }
    resize(...e) {
        super.resize(...e),
        this.partialCoverIndex = this.computePartialCoverIndex()
    }
    computePartialCoverIndexLowerBound(e=0) {
        const n = e
          , i = this.map
          , s = i.origin.x + n
          , r = i.origin.x + i.size.x - n * 2
          , o = i.origin.y + n
          , a = i.origin.y + i.size.y - n * 2
          , c = Math.min(Math.abs(s) - this.cellSize.x / 2, Math.abs(r) - this.cellSize.x / 2, Math.abs(o) - this.cellSize.y / 2, Math.abs(a) - this.cellSize.y / 2);
        if (c <= 0)
            return 0;
        const u = Math.floor(c / Math.max(this.cellSize.x, this.cellSize.y))
          , d = 8 * u * (u - 1) / 2;
        return Math.max(0, d)
    }
    computePartialCoverIndex(e=0) {
        var a;
        const n = e
          , i = n * 2;
        let s;
        const r = this.map
          , o = this.computePartialCoverIndexLowerBound(e);
        for (let c = o; c < this.cellCount; c++) {
            let u = (a = this.cellIndexToGrid) == null ? void 0 : a[c];
            u || (s = u = this.indexToGrid(c, !1, s));
            let d = (u.x * 2 - 1) * this.cellSize.x / 2
              , h = (u.y * 2 - 1) * this.cellSize.y / 2
              , f = d + this.cellSize.x
              , m = h + this.cellSize.y;
            if (!(r.origin.x + n <= d && f < r.origin.x + r.size.x - i && r.origin.y + n <= h && m < r.origin.y + r.size.y - i))
                return c
        }
        return this.cellCount
    }
    gridToIndexFlat(e, n, i=!0, s=!0) {
        var o, a;
        return i && this.gridOutOfBounds(e, n, i) ? null : (s ? (a = (o = this.gridToCellIndex) == null ? void 0 : o[n - this.grid.origin.y]) == null ? void 0 : a[e - this.grid.origin.x] : void 0) ?? Bo(e, n)
    }
    indexToGrid(e, n=!0, i={}, s=!0) {
        var r;
        if (e == null || n && (e < 0 || e > this.cellCount))
            return null;
        if (s) {
            const o = (r = this.cellIndexToGrid) == null ? void 0 : r[e];
            if (o)
                return i.x = o.x,
                i.y = o.y,
                i
        }
        return Ai(e, i),
        i
    }
    static indexToGrid(e, n, i, s=!0, r={}) {
        return this.gridSize(e, n, r),
        i == null || s && (i < 0 || i > r.x * r.y) ? null : (Ai(i, r),
        r)
    }
    static cellIndexOrigin(e, n, i, s=!0, r={}) {
        if (r = this.indexToGrid(e, n, i, s, r),
        r == null)
            return null;
        let o, a;
        return typeof n == "number" ? (o = n,
        a = n) : (o = n.x,
        a = n.y),
        r.x = (r.x * 2 - 1) * o / 2,
        r.y = (r.y * 2 - 1) * a / 2,
        r
    }
    pointToCellIndexFlat(e, n, i=Ct.Inner, s=!0) {
        var o, a;
        return i && this.outOfBounds(e, n, i) ? null : (e = Math.floor((e - this.outerMap.origin.x) / this.cellSize.x) + this.grid.origin.x,
        n = Math.floor((n - this.outerMap.origin.y) / this.cellSize.y) + this.grid.origin.y,
        (s ? (a = (o = this.gridToCellIndex) == null ? void 0 : o[n - this.grid.origin.y]) == null ? void 0 : a[e - this.grid.origin.x] : void 0) ?? Bo(e, n))
    }
    cellIndexOrigin(e, n=!0, i={}, s=!0) {
        var o;
        if (n && (e < 0 || e > this.cellCount))
            return null;
        const r = s ? ((o = this.cellIndexToGrid) == null ? void 0 : o[e]) ?? Ai(e, i) : Ai(e, i);
        return i.x = (r.x * 2 - 1) * this.cellSize.x / 2,
        i.y = (r.y * 2 - 1) * this.cellSize.y / 2,
        i
    }
}
class Ku extends kn {
    constructor(e, n, i) {
        super(e, n, i ?? !0)
    }
}
class Zu extends qt {
    constructor(e, n, i) {
        super(e, n, i ?? !0)
    }
}
const Yu = class extends Ku {
    constructor(...t) {
        super(...t)
    }
}
  , Qu = class extends Zu {
    constructor(...t) {
        super(...t)
    }
}
  , D8 = {
    [jt.RowMajor]: kn,
    [jt.Spiral]: qt
}
  , F8 = {
    [jt.RowMajor]: Yu,
    [jt.Spiral]: Qu
}
  , N8 = {
    competitive: "competitive",
    practice: "practice",
    control: "control",
    chat: "chat",
    replay: "replay"
}
  , et = {
    Standard: 1,
    Large: 2,
    MatchPoints: 3
}
  , B8 = Object.values(et)
  , z8 = {
    [et.Standard]: "Standard",
    [et.Large]: "Large",
    [et.MatchPoints]: "Match Points"
}
  , ee = 256
  , Xu = 8
  , We = {
    SCALE: ee,
    SCALE_LOG2: Xu,
    mapSize: {
        x: 1e4 * ee,
        y: 1e4 * ee
    },
    player: {
        baseSpeed: 600 * ee,
        boostSpeed: 1400 * ee,
        maxAngularVelocity: Math.PI * 2.5,
        spacing: 45 * ee,
        radius: 35 * ee,
        visualRadius: 45 * ee,
        historyMargin: 10,
        scaling: {
            min: 1,
            max: 5,
            rate: .4,
            power: {
                breakpoint: null,
                n: .5,
                s: .001,
                o: 1
            },
            camera: {
                min: 1,
                max: 2,
                rate: .1,
                resetRate: .4
            },
            angularVelocity: {
                m: .5,
                c: .5
            }
        },
        boostLossRate: 20,
        minBoostLength: 5,
        segments: {
            linear: {
                m: .1,
                c: 5
            },
            power: {
                breakpoint: 1e3,
                n: .001,
                s: 1,
                o: 0
            }
        },
        initialScore: 300,
        foodDroppedPerPointLost: .25,
        deleteDelay: 30,
        foodDroppedOnDeath: {
            valueCurve: void 0,
            foodType: et.Large,
            denominator: 1,
            body: {
                proportion: {
                    score: .4,
                    matchPoints: 0,
                    mode: "max"
                },
                radius: {
                    parallel: 10 * ee,
                    perpendicular: 30 * ee,
                    attempts: 5
                }
            },
            head: {
                proportion: {
                    score: .2,
                    matchPoints: 0,
                    mode: "max"
                },
                radius: 30 * ee,
                attempts: 5
            }
        },
        initialInvincibility: 4,
        spawnInvincibilityIgnoreFoodCollisions: !0,
        decimalPlaces: null
    },
    renderer: {
        player: {
            radius: 8,
            scale: 6,
            facePosition: {
                x: 30,
                y: 15
            },
            opacity: 1,
            invincibleOpacity: .6,
            fill: {
                color: 16711680,
                opacity: 1
            },
            strokes: [{
                color: 0,
                opacity: .5,
                width: 2
            }],
            scaleSortHysteresis: .2,
            strokesEnemy: void 0,
            glow: {
                color: 16776766,
                width: 24
            },
            ice: {
                color: 5759999,
                width: -10
            },
            smoke: {
                spritesheet: {
                    alias: "super_boost_smoke",
                    frames: 5,
                    frameWidth: 16 * 4,
                    frameHeight: 16 * 4,
                    margin: 2 * 4,
                    spacing: 2 * 4
                },
                fill: {
                    color: 15656019,
                    opacity: 1
                },
                duration: 500,
                opacity: 1,
                updateProbability: 10,
                segmentProbability: .4,
                minSegmentIndex: 3,
                maxSegmentIndex: 6,
                maxSegments: 1,
                distance: [.5, 1.5],
                angle: 20,
                scale: [1, 2]
            }
        },
        food: {
            properties: {
                [et.Standard]: {
                    radius: 3,
                    scale: 5
                },
                [et.Large]: {
                    radius: 3,
                    scale: 10
                }
            },
            stroke: {
                color: 0,
                opacity: .5,
                width: 3
            }
        },
        name: {
            fontSize: 64,
            fontFamily: "Born2bSporty FS",
            color: 16777215,
            enemyColor: void 0,
            shadow: {
                color: "#000",
                stroke: !0,
                fill: !0,
                blur: 20
            },
            padding: {
                x: 20,
                y: 10
            }
        },
        userMessage: {
            fontSize: 48,
            fontColor: "#FFF",
            shadow: void 0,
            padding: {
                x: 4,
                y: 4
            },
            textOffset: {
                x: 3,
                y: 5
            },
            corner: {
                radius: 3,
                scale: 5
            },
            fill: {
                color: 16502755,
                opacity: .6
            },
            rampDuration: 300,
            sustainDuration: 3e3,
            maxStrLength: 20
        },
        leaderOrnaments: {
            fontFamily: "icons",
            padding: {
                x: 20,
                y: 20
            },
            crown: {
                fontSize: 96
            }
        }
    },
    food: {
        maxRadius: 30 * ee,
        captureRadius: 100 * ee,
        spawnRatePerCell: {
            base: .05,
            basePlayerCount: 2,
            perAdditionalPlayer: .005,
            max: .2
        },
        initialCountPerCell: 10,
        maxInitialSpawnPerTick: 20,
        maxCount: 8e3,
        deleteDelay: 30,
        properties: {
            [et.Standard]: {
                radius: 15 * ee,
                points: 2
            },
            [et.Large]: {
                radius: 30 * ee,
                points: 10
            },
            [et.MatchPoints]: {
                radius: 30 * ee,
                points: 0
            }
        },
        spawnPadding: 20 * ee
    },
    gridCellSize: 1e3 * ee,
    gridCellSubdivisions: 10,
    gridLayout: jt.RowMajor,
    cameraViewportSize: 3e3 * ee,
    spawnPadding: 400 * ee,
    spawnWallItemPadding: 300 * ee,
    spawnVectorPadding: 800 * ee,
    spawnAffinity: {
        affinity: .8,
        diffusion: {
            iterations: 5,
            rate: .2
        },
        foodWeight: 1,
        playerPresenceWeight: 40
    },
    tickRate: 60,
    patchRate: 30,
    maxTickAdvance: 60,
    maxTickHistory: 60,
    maxItemLatencyTicks: 300,
    maxPeerLag: 0,
    clientInputTickBuffer: 2,
    clientInputFeedbackRate: 6,
    clientPerformanceMetrics: {
        batchSize: 60,
        multiplier: 10,
        tickMultiplier: 100
    },
    clientInputTickBufferAlphaNegative: .7,
    clientInputTickBufferAlphaPositive: .3,
    maxInGameItems: 3,
    unlimitedItems: !0,
    server: {
        roomInfoUpdatePeriod: 2 * 1e3,
        authTokenValidityDuration: 24 * 60 * 60 * 1e3,
        maxPriceAge: 60 * 1e3,
        fallbackDepositTimeout: 10 * 1e3
    }
}
  , O8 = {
    ...We,
    mapSize: {
        x: 3e4 * ee,
        y: 3e4 * ee
    },
    gridLayout: jt.RowMajor,
    player: {
        ...We.player,
        scaling: {
            ...We.player.scaling,
            power: {
                ...We.player.scaling.power,
                s: 5e-4
            }
        },
        initialScore: 50
    }
}
  , Ju = {
    ...We,
    food: {
        ...We.food,
        properties: {
            ...We.food.properties,
            [et.MatchPoints]: {
                ...We.food.properties[et.MatchPoints]
            }
        }
    },
    player: {
        ...We.player,
        scaling: {
            ...We.player.scaling,
            power: {
                ...We.player.scaling.power
            }
        },
        foodDroppedOnDeath: {
            body: {
                ...We.player.foodDroppedOnDeath.body
            },
            head: {
                ...We.player.foodDroppedOnDeath.head
            }
        }
    }
}
  , b1 = {
    proportions: [[], [1e3], [840, 160], [800, 150, 50]],
    denominator: 1e3,
    lockPeriod: [0, 24, 72, 168],
    proportional: !0
}
  , e3 = {
    ...structuredClone(b1),
    scoring: {
        type: "scoreWithSpawnKillBonus",
        killProportion: {
            score: .25,
            matchPoints: 0,
            spawnBonus: 0,
            mode: "max"
        },
        spawnScoreFromMatchPoints: !0
    },
    preventExcessDeposits: !1,
    preventDepositsBeforeGameEnd: 0 * 1e3,
    refundQueuedDeposits: !0,
    ignoreHostDisableDepositsDuringGame: !0,
    seatReservationTime: 15 * 1e3,
    respawnDecisionDuration: 10 * 1e3,
    respawnGuaranteedPlacementDuration: 15 * 1e3,
    gameCreationBlockOverride: null,
    minimumRespawnTimeRemaining: 40 * 1e3,
    userSpawnDelay: 3 * 1e3,
    gameStartDelay: 3 * 1e3,
    upgradesDenominator: 1e6,
    upgradesMaxCount: 1,
    upgrades: {
        [se.Invincibility]: {
            spawnMultiplier: 1e7,
            disabled: !1,
            extraItemSlot: !0,
            mode: "add-pre"
        },
        [se.SuperBoost]: {
            spawnMultiplier: 1e6,
            disabled: !0,
            extraItemSlot: !0,
            mode: "add-pre"
        },
        [se.IceBomb]: {
            spawnMultiplier: 1e6,
            disabled: !0,
            extraItemSlot: !0,
            mode: "add-pre"
        },
        [se.Wall]: {
            spawnMultiplier: 1e6,
            disabled: !0,
            extraItemSlot: !0,
            mode: "add-pre"
        },
        [se.Arrow]: {
            spawnMultiplier: 1e7,
            disabled: !1,
            extraItemSlot: !0,
            mode: "add-pre"
        },
        [se.ZoomOut]: {
            spawnMultiplier: 2e6,
            disabled: !1,
            extraItemSlot: !0,
            mode: "add-pre"
        }
    }
}
  , t3 = {
    type: "zeroSum",
    foodPointValue: 5e4,
    denominator: 1e6,
    exit: {
        duration: 3 * 1e3,
        disableItems: !0,
        disableInputs: !0
    }
}
  , $8 = {
    ...structuredClone(e3),
    scoring: structuredClone(t3)
};
({
    ...structuredClone(b1)
});
const rr = {
    PeriodicFoodClusters: "PeriodicFoodClusters"
}
  , n3 = {
    [rr.PeriodicFoodClusters]: {
        rate: {
            period: 60 * 1e3
        },
        firstMinTime: .1,
        lastMaxTime: .25,
        spawnDuration: {
            rate: 10,
            duration: [.05, .25]
        },
        foodType: et.Large,
        maxClusterValue: 5e3,
        valueProportion: .7,
        topSort: "score",
        spread: 1e3 * ee,
        centerPadding: 400 * ee,
        numCenterCandidates: 10,
        centerCandidateIndex: 0,
        randomCandidateProbability: .1
    }
}
  , zt = {
    BasicSpiral: "BasicSpiral",
    BasicRandomWalk: "BasicRandomWalk",
    StatelessRaycast: "StatelessRaycast"
}
  , zo = {
    [zt.BasicSpiral]: {
        radius: {
            min: 300 * ee,
            max: 2e3 * ee,
            rate: 100 * ee
        }
    },
    [zt.BasicRandomWalk]: {
        poisson: {
            targetAngle: 1,
            boost: {
                on: .5,
                off: 1
            },
            speedWeighted: !0
        },
        wallAvoidance: {
            d: 1e3 * ee,
            kappa: {
                min: .1,
                max: 5
            }
        }
    },
    [zt.StatelessRaycast]: {
        maxDistance: 2e3 * ee,
        n: 32,
        food: {
            w: .5,
            minDenominator: 100
        },
        directionalBias: .1,
        directionalStiffness: .5,
        blur: [.3, .2, .15, .1, .05],
        stretchFactor: 1,
        boost: {
            poisson: {
                on: .2 * We.player.baseSpeed,
                off: 1 * We.player.baseSpeed
            }
        },
        ticks: 2,
        items: {
            [M.Wall]: {
                period: 120 * 1e3,
                overrideCooldown: !0,
                minPeriod: 90 * 1e3
            },
            [M.Arrow]: {
                period: 3 * 60 * 1e3,
                minPeriod: -2 * 60 * 1e3,
                overrideCooldown: !0,
                pTarget: .5,
                pBot: .5,
                maxAimError: 1,
                aimOffsetStdev: 1,
                aimDuration: 2e3,
                maxAimRange: 3e3 * ee,
                minPlayerAge: 30 * 1e3
            }
        }
    }
}
  , Ze = {
    requiresAuth: !1,
    maxClients: 100,
    seatReservationTime: 15 * 1e3,
    gameDuration: 5 * 60 * 1e3,
    disableCollisions: !1,
    disposeOnGameOverDelay: 0,
    disposeOnNoUsers: !1,
    removePlayersAfterDisconnect: !1,
    gameStartDelay: 0,
    gameStartDelayRequiresPlayers: 30 * 1e3,
    disposeIfNoPlayersJoin: !1,
    playerEnableDelay: 0,
    gameStatsPeriod: 1e3,
    performanceStatsPeriod: 10 * 1e3,
    performanceStatsHistogramQuantiles: [.5, .9, .99],
    performanceStatsHistogramRollingN: 6,
    performanceStatsTickDeltaQuantiles: [.01, .05],
    performanceStatsTickDeltaRollingWindowN: 10,
    reconnectionDuration: !0,
    respawn: !1,
    revive: !1,
    reviveConsecutive: 1,
    reviveDecisionDelay: 0,
    practice: !1,
    removeDeadPlayersAfterDisconnect: !0,
    removeInactivePlayers: null,
    leaveTrailOnLeave: !1,
    preventDuplicateColors: !0,
    rememberSpawnAngle: !0,
    scoring: {
        type: "score"
    },
    respawnDeweightFactor: .5,
    headToHeadCollisions: 0,
    rateLimits: {
        global: {
            maxTokens: 80,
            refillRate: 80
        },
        [Ye.UserInput]: {
            maxTokens: 70,
            refillRate: 70
        },
        [Ye.ActivateItemRequest]: {
            maxTokens: 8,
            refillRate: 4
        },
        [Ye.InGameUserMessageFixed]: {
            maxTokens: 3,
            refillRate: 1
        },
        [Ye.InGameUserMessageFreeform]: {
            maxTokens: 1,
            refillRate: 1,
            baseCost: 1,
            costPerCharacter: 0
        },
        [Ye.FetchInGameUserMessages]: {
            maxTokens: 1,
            refillRate: 1,
            baseCost: 1,
            costPerCount: 0
        },
        [Ye.GamePerformanceMetrics]: {
            maxTokens: 3,
            refillRate: 2
        }
    },
    fixedUserMessagesStrictValidation: !1,
    allowFixedUserMessages: !0,
    allowFreeformUserMessages: !0,
    freeFormUserMessagesMaxLength: 100,
    userMessageHistoryLength: 100,
    sendKilledPositions: "item",
    recordingDirectory: "./game_recordings/",
    record: !1,
    recordingCompression: "brotli",
    trustRecordingPaths: !1,
    sendRecording: !1,
    deleteRecordingAfterSend: !0,
    sendRecordingCompression: "brotli",
    sendRecordingMaxChunkSize: 1024 * 1024,
    recordingReduceSize: !0,
    recordingIncludePings: !0,
    recordingIncludeClientPerformanceMetrics: !0,
    recordingIncludeMinimalSnapshots: 600,
    forwardChatMessages: !0,
    turtlingPreventionStrategy: {
        strategy: rr.PeriodicFoodClusters,
        params: {
            ...n3[rr.PeriodicFoodClusters],
            valueProportion: {
                matchPoints: .7,
                mode: "max"
            }
        }
    },
    friendlyFire: !0,
    itemsEnabled: !0,
    itemReorderingEnabled: !1,
    itemCooldownsExposed: !0,
    items: {
        [M.Invincibility]: {
            activation: 0,
            duration: 2e3,
            cooldown: 42 * 1e3,
            oneWay: !0,
            allowSpawn: !1,
            defaultCount: void 0,
            disabled: !0
        },
        [M.SuperBoost]: {
            speed: 1.25,
            duration: 10 * 1e3,
            cooldown: 45 * 1e3,
            allowSpawn: !1,
            defaultCount: void 0
        },
        [M.IceBomb]: {
            activation: 400,
            duration: 10 * 1e3,
            cooldown: 40 * 1e3,
            fadeDuration: 5 * 1e3,
            throwDistance: 1500 * ee,
            radius: 500 * ee,
            speed: .5,
            oneWay: !0,
            angularVelocity: [.4, .1],
            extendExitDuration: !0,
            resetExitOnEnter: !0,
            allowSpawn: !1,
            defaultCount: void 0,
            removalConditions: ei.Duration,
            mapRemovalDistance: 2e3 * ee,
            spawnCollisionDisableRadius: 1e3 * ee
        },
        [M.Wall]: {
            activation: 1500,
            duration: 0,
            cooldown: 45 * 1e3,
            throwDistance: 1250 * ee,
            width: 60 * ee,
            length: 1e3 * ee,
            angles: [90],
            oneWay: !1,
            allowSpawn: !1,
            defaultCount: void 0,
            removalConditions: ei.Duration,
            mapRemovalDistance: 2e3 * ee,
            spawnCollisionDisableRadius: 1e3 * ee
        },
        [M.Arrow]: {
            activation: 0,
            duration: 1 * 1e3,
            fadeOutDuration: 500,
            cooldown: 45 * 1e3,
            width: 30 * ee,
            length: 180 * ee,
            oneWay: !0,
            invincibility: !1,
            speed: 2500 * ee,
            superBoostSpeed: 2500 * ee,
            multiKill: !1,
            allowSpawn: !1,
            defaultCount: void 0,
            disabled: !0
        },
        [M.ZoomOut]: {
            duration: 25 * 1e3,
            multiplier: .5,
            cooldown: 50 * 1e3,
            allowSpawn: !1,
            defaultCount: void 0,
            disabled: !0
        }
    },
    constants: We
}
  , i3 = {
    ...Ze,
    bots: [{
        count: 0,
        strategy: zt.BasicSpiral,
        names: ["mobius", "escher", "klein", "torus", "eddie", "whirlpool"]
    }, {
        count: 0,
        strategy: zt.BasicRandomWalk,
        names: ["heisenberg", "lichtenberg", "monte", "markov", "poisson"]
    }, {
        count: 20,
        strategy: zt.StatelessRaycast,
        names: ["wren", "finch", "woodpecker", "magpie", "sparrow", "jay", "raven", "owl", "kiwi", "mole", "meerkat", "ferret", "badger", "fox", "otter", "beaver", "squirrel", "emu", "koala", "bunny", "platypus", "moa", "ostrich", "penguin", "kea", "stork", "wallaby", "duck", "goose", "panda", "joey", "puffin", "quail", "robin", "canary", "thrush", "parrot", "tui", "hedgehog", "gecko", "crow", "peacock", "gull", "pelican"],
        params: {
            ...zo[zt.StatelessRaycast],
            items: {
                ...zo[zt.StatelessRaycast].items,
                [M.Arrow]: null
            }
        }
    }],
    items: {
        ...Ze.items,
        [M.Invincibility]: {
            ...Ze.items[M.Invincibility],
            disabled: !1
        },
        [M.IceBomb]: {
            ...Ze.items[M.IceBomb],
            removalConditions: ei.LeaveOrDuration
        },
        [M.Wall]: {
            ...Ze.items[M.Wall],
            duration: 5 * 60 * 1e3,
            removalConditions: ei.LeaveOrMaxDurationDeath
        },
        [M.Arrow]: {
            ...Ze.items[M.Arrow],
            disabled: !1
        },
        [M.ZoomOut]: {
            ...Ze.items[M.ZoomOut],
            disabled: !1
        }
    }
}
  , s3 = {
    ...Ze,
    itemFixedOrder: [M.Wall, M.IceBomb, M.SuperBoost, M.Invincibility, M.Arrow, M.ZoomOut],
    items: {
        ...Ze.items,
        [M.Wall]: {
            ...Ze.items[M.Wall],
            maxConcurrentInstances: 5,
            deleteOldestOnMaxConcurrent: !0,
            removalConditions: ei.LeaveOrMinDurationDeath,
            duration: 0,
            cooldown: 20 * 1e3
        },
        [M.Arrow]: {
            ...Ze.items[M.Arrow],
            requiresUpgrade: !0,
            disabled: !1,
            cooldown: 20 * 1e3
        },
        [M.Invincibility]: {
            ...Ze.items[M.Invincibility],
            requiresUpgrade: !0,
            disabled: !1,
            cooldown: 22 * 1e3
        },
        [M.ZoomOut]: {
            ...Ze.items[M.ZoomOut],
            requiresUpgrade: !0,
            disabled: !1,
            cooldown: 40 * 1e3
        }
    },
    constants: Ju
}
  , r3 = {
    DifficultyHard: 0
}
  , me = {
    ScoreEnd: "score_end",
    ScoreAny: "score_any",
    BoostNone: "boost_none",
    BoostLeader: "boost_leader",
    BoostDuration: "boost_duration",
    KillScoreRatio: "kill_score_ratio",
    KillCount: "kill_count",
    FoodEaten: "food_eaten",
    Placement: "placement",
    Placements: "placements",
    ItemKills: "item_kills",
    WinningsSum: "winnings_sum",
    BlitzAttempts: "blitz_attempts",
    BlitzScore: "blitz_score",
    KillsUnique: "kills_unique",
    DailyMatchPoints: "daily_match_points",
    DailyBlitzLeaderboardRank: "daily_blitz_leaderboard_rank",
    WeeklyPracticeLeaderboardRank: "weekly_practice_leaderboard_rank"
}
  , Ie = (t, e) => {
    var n, i, s;
    return ((s = (i = (n = t == null ? void 0 : t.challenge) == null ? void 0 : n.template) == null ? void 0 : i.config) == null ? void 0 : s.type) === e
}
  , U8 = ["practice", "competitive", "blitz", "points"]
  , W8 = {
    domain: "practice",
    period: "week"
}
  , o3 = {
    Home: 1,
    Rooms: 2,
    Profile: 3,
    Dynamic: 4,
    Settings: 5,
    CreateRoom: 6,
    Room: 7,
    ZeroSum: 8
}
  , H8 = Object.fromEntries(Object.entries(o3).map( ([t,e]) => [e, t]))
  , ni = {
    Click: 1,
    ToggleOn: 2,
    ToggleOff: 3,
    OpenPopup: 4,
    ClosePopup: 5,
    OpenTooltip: 6,
    CloseTooltip: 7,
    ClosePopupBackground: 8,
    ClosePopupX: 9,
    ClosePopupText: 10,
    ClosePopupNavigateProfile: 11,
    ClosePopupNavigateProfileLeaveGame: 12,
    ClickTwitterShareLink: 13,
    ClickCopyDomImage: 14,
    AutoOpen: 15,
    AutoClose: 16,
    Accept: 17,
    Dismiss: 18,
    Reject: 19,
    Cancel: 20,
    Back: 21,
    Refresh: 22,
    Retry: 23
}
  , G8 = Object.fromEntries(Object.entries(ni).map( ([t,e]) => [e, t]))
  , Me = {
    MusicOn: 1,
    AudioFxOn: 2,
    PopupBlitzExplanation: 3,
    StatsWeeklyHighlightsTooltip: 4,
    StatsWeeklyHighlightsTournamentTooltip: 5,
    LevelThemeUnlock: 6,
    ChallengeNataInfo: 7,
    ChallengeNataUnlock: 8,
    ChallengeTurboCowInfo: 9,
    ChallengeTurboCowUnlock: 10,
    LeaveGame: 11,
    PracticeKilledOverlayLeaveGame: 12,
    PracticeKilledOverlayPlayAgain: 13,
    PracticeKilledOverlayItems: 14,
    PracticeKilledOverlayItemsInfo: 15,
    PracticeKilledOverlayMusicOn: 16,
    PracticeKilledOverlaySoundOn: 17,
    ProfileShareOverlay: 18,
    BlitzDailyBonusNotification: 19,
    ChallengeTurboRacerInfo: 20,
    ChallengeTurboRacerUnlock: 21,
    JoinPracticeGame: 22,
    StatsWeeklyHighlightSection: 23,
    KillQuoteLockedTooltip: 24,
    SetKillQuoteModal: 25,
    SetKillQuoteSave: 26,
    SetKillQuoteRandomize: 27,
    ChallengeSkullInfo: 28,
    ChallengeSkullUnlock: 29,
    ChallengeSkullInfoSetKillQuoteModal: 30,
    PracticeKilledOverlaySetKillQuote: 31,
    MobileChipHomeOpenLeaderboard: 32,
    MobileChipRoomsOpenLeaderboard: 33,
    MobileChipProfileOpenLeaderboard: 34,
    ProfileOpenLeaderboard: 35,
    PopupReviveExplanation: 36,
    RevivePeriodicClaimModal: 37,
    ReviveFeatureUnlockModal: 38,
    PracticeKillOverlayReviveModal: 39,
    PracticeKillOverlayReviveAccept: 40,
    PracticeKillOverlayReviveReject: 41,
    ChallengeFrostInfo: 42,
    ChallengeFrostUnlock: 43,
    ScheduledGamePromoNavigate: 44,
    ScheduledGamePromoDismiss: 45,
    PopupTurboBlitzAnnouncement: 46,
    BadgesModal: 47,
    PopupLeaderboard: 48,
    ChallengeLightningInfo: 49,
    ChallengeLightningUnlock: 50,
    ReviveChip: 51,
    BlitzChip: 52,
    SuperBlitzChip: 53,
    SuperBlitzModal: 54,
    SuperBlitzModalInfo: 55,
    SuperBlitzModalDeposit: 56,
    SuperBlitzModalLeaderboard: 57,
    SuperBlitzDepositResultModal: 58,
    SuperBlitzResultModal: 59,
    SuperBlitzResultModalLeaderboard: 60,
    SuperBlitzResultModalPlayAgain: 61,
    ZeroSumDeposit: 62,
    ZeroSumDepositCloseError: 63,
    ZeroSumRefreshBalance: 64,
    ZeroSumRetryFetchBalance: 65,
    ZeroSumHowToPlay: 66,
    ZeroSumChainSelector: 67,
    ZeroSumCopyAddress: 68,
    ZeroSumWithdraw: 69,
    ZeroSumBalanceModal: 70,
    ZeroSumBalanceModalSwitchChain: 71,
    ZeroSumBalanceModalCopyAddress: 72
}
  , V8 = Object.fromEntries(Object.entries(Me).map( ([t,e]) => [e, t]))
  , a3 = {
    EscapeHatch: 0,
    Leaderboard: 1,
    TabNavigate: 4,
    ButtonAction: 5,
    ProfileThemeChange: 6,
    ControlConnect: 7,
    ControlConnectionCount: 8,
    ServerPings: 9,
    FrontendError: 10,
    KillQuoteView: 11,
    ControlConnected: 12,
    ControlDisconnected: 13,
    ServerStart: 14,
    CreateUser: 15,
    BadgeViewAnalytics: 16
};
Object.fromEntries(Object.entries(a3).map( ([t,e]) => [e, t]));
const or = {
    [$.Nata]: {
        info: Me.ChallengeNataInfo,
        unlock: Me.ChallengeNataUnlock,
        challengeType: me.ItemKills
    },
    [$.TurboCow]: {
        info: Me.ChallengeTurboCowInfo,
        unlock: Me.ChallengeTurboCowUnlock,
        challengeType: me.WinningsSum
    },
    [$.TurboRacer]: {
        info: Me.ChallengeTurboRacerInfo,
        unlock: Me.ChallengeTurboRacerUnlock,
        challengeType: me.BlitzAttempts
    },
    [$.Skull]: {
        info: Me.ChallengeSkullInfo,
        unlock: Me.ChallengeSkullUnlock,
        challengeType: me.KillsUnique
    },
    [$.Frost]: {
        info: Me.ChallengeFrostInfo,
        unlock: Me.ChallengeFrostUnlock,
        challengeType: me.DailyMatchPoints
    },
    [$.Lightning]: {
        info: Me.ChallengeLightningInfo,
        unlock: Me.ChallengeLightningUnlock,
        challengeType: me.BlitzScore
    }
}
  , tt = {
    LOADING: "LOADING",
    CONFIRMING: "CONFIRMING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    IDLE: "IDLE"
}
  , K = {
    tokenAddress: "token_address",
    tokenAddressSet: "token_address_set",
    roomId: "room_id",
    roomIdSet: "room_id_set",
    reconnectionToken: "reconnection_token",
    reconnectionTokenExpires: "reconnection_token_expires",
    reconnectionPublicAddress: "reconnection_public_address",
    fxMuted: "muted",
    musicMuted: "music_muted",
    chatOpen: "chat_open",
    boostMessageShown: "boostMessageShown",
    discordBannerHidden: "discord_banner_hidden",
    showLifetimePoints: "showLifetimePoints",
    regionId: "region_id",
    phantomExchangeSecret: "phantom_exchange_secret",
    phantomSharedSecret: "phantom_shared_secret",
    phantomSession: "phantom_session_id",
    phantomWalletKey: "phantom_wallet_key",
    language: "lang",
    createAccountPopupDismissed: "create_account_popup_dismissed",
    highPingWarningDismissed: "high_ping_warning_dismissed",
    chatRoomLastReadTimestampPrefix: "chat_room_last_read_timestamp_room_",
    cashGamePromoDismissedPrefix: "cashGamePromoDismissed_",
    globalLeaderboardDomain: "global_leaderboard_practice",
    globalLeaderboardPeriod: "global_leaderboard_period",
    connectionAlertDismissed: "connection_alert_dismissed",
    crashHeartbeat: "crash_heartbeat",
    practiceKilledSetKillQuoteTooltipDismissed: "practice_killed_set_kill_quote_tooltip_dismissed",
    hasClickedItemsButton: "hasClickedItemsButton",
    superBlitzRejectedSignature: "super_blitz_rejected_signature",
    depositMultiplier: "deposit_multiplier",
    selectedUpgrades: "selected_upgrades"
}
  , js = {
    globalLeaderboardPlayOverlayDismissed: "global_leaderboard_play_overlay_dismissed",
    globalLeaderboardAnalyticsInteracted: "global_leaderboard_analytics_interacted"
}
  , l3 = t => !!t && t.challenge.theme === zi && t.challenge.template.config.type === or[zi].challengeType
  , c3 = "game";
function Fe(t) {
    return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `
}
var u3 = typeof Symbol == "function" && Symbol.observable || "@@observable"
  , Oo = u3
  , Ps = () => Math.random().toString(36).substring(7).split("").join(".")
  , d3 = {
    INIT: `@@redux/INIT${Ps()}`,
    REPLACE: `@@redux/REPLACE${Ps()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ps()}`
}
  , Wi = d3;
function Br(t) {
    if (typeof t != "object" || t === null)
        return !1;
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; )
        e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null
}
function w1(t, e, n) {
    if (typeof t != "function")
        throw new Error(Fe(2));
    if (typeof e == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
        throw new Error(Fe(0));
    if (typeof e == "function" && typeof n > "u" && (n = e,
    e = void 0),
    typeof n < "u") {
        if (typeof n != "function")
            throw new Error(Fe(1));
        return n(w1)(t, e)
    }
    let i = t
      , s = e
      , r = new Map
      , o = r
      , a = 0
      , c = !1;
    function u() {
        o === r && (o = new Map,
        r.forEach( (v, x) => {
            o.set(x, v)
        }
        ))
    }
    function d() {
        if (c)
            throw new Error(Fe(3));
        return s
    }
    function h(v) {
        if (typeof v != "function")
            throw new Error(Fe(4));
        if (c)
            throw new Error(Fe(5));
        let x = !0;
        u();
        const y = a++;
        return o.set(y, v),
        function() {
            if (x) {
                if (c)
                    throw new Error(Fe(6));
                x = !1,
                u(),
                o.delete(y),
                r = null
            }
        }
    }
    function f(v) {
        if (!Br(v))
            throw new Error(Fe(7));
        if (typeof v.type > "u")
            throw new Error(Fe(8));
        if (typeof v.type != "string")
            throw new Error(Fe(17));
        if (c)
            throw new Error(Fe(9));
        try {
            c = !0,
            s = i(s, v)
        } finally {
            c = !1
        }
        return (r = o).forEach(y => {
            y()
        }
        ),
        v
    }
    function m(v) {
        if (typeof v != "function")
            throw new Error(Fe(10));
        i = v,
        f({
            type: Wi.REPLACE
        })
    }
    function g() {
        const v = h;
        return {
            subscribe(x) {
                if (typeof x != "object" || x === null)
                    throw new Error(Fe(11));
                function y() {
                    const S = x;
                    S.next && S.next(d())
                }
                return y(),
                {
                    unsubscribe: v(y)
                }
            },
            [Oo]() {
                return this
            }
        }
    }
    return f({
        type: Wi.INIT
    }),
    {
        dispatch: f,
        subscribe: h,
        getState: d,
        replaceReducer: m,
        [Oo]: g
    }
}
function h3(t) {
    Object.keys(t).forEach(e => {
        const n = t[e];
        if (typeof n(void 0, {
            type: Wi.INIT
        }) > "u")
            throw new Error(Fe(12));
        if (typeof n(void 0, {
            type: Wi.PROBE_UNKNOWN_ACTION()
        }) > "u")
            throw new Error(Fe(13))
    }
    )
}
function f3(t) {
    const e = Object.keys(t)
      , n = {};
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        typeof t[o] == "function" && (n[o] = t[o])
    }
    const i = Object.keys(n);
    let s;
    try {
        h3(n)
    } catch (r) {
        s = r
    }
    return function(o={}, a) {
        if (s)
            throw s;
        let c = !1;
        const u = {};
        for (let d = 0; d < i.length; d++) {
            const h = i[d]
              , f = n[h]
              , m = o[h]
              , g = f(m, a);
            if (typeof g > "u")
                throw a && a.type,
                new Error(Fe(14));
            u[h] = g,
            c = c || g !== m
        }
        return c = c || i.length !== Object.keys(o).length,
        c ? u : o
    }
}
function Hi(...t) {
    return t.length === 0 ? e => e : t.length === 1 ? t[0] : t.reduce( (e, n) => (...i) => e(n(...i)))
}
function m3(...t) {
    return e => (n, i) => {
        const s = e(n, i);
        let r = () => {
            throw new Error(Fe(15))
        }
        ;
        const o = {
            getState: s.getState,
            dispatch: (c, ...u) => r(c, ...u)
        }
          , a = t.map(c => c(o));
        return r = Hi(...a)(s.dispatch),
        {
            ...s,
            dispatch: r
        }
    }
}
function p3(t) {
    return Br(t) && "type"in t && typeof t.type == "string"
}
var S1 = Symbol.for("immer-nothing")
  , $o = Symbol.for("immer-draftable")
  , nt = Symbol.for("immer-state");
function ht(t, ...e) {
    throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)
}
var Fn = Object.getPrototypeOf;
function un(t) {
    return !!t && !!t[nt]
}
function Pt(t) {
    var e;
    return t ? _1(t) || Array.isArray(t) || !!t[$o] || !!((e = t.constructor) != null && e[$o]) || ss(t) || rs(t) : !1
}
var g3 = Object.prototype.constructor.toString();
function _1(t) {
    if (!t || typeof t != "object")
        return !1;
    const e = Fn(t);
    if (e === null)
        return !0;
    const n = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
    return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === g3
}
function Gi(t, e) {
    is(t) === 0 ? Reflect.ownKeys(t).forEach(n => {
        e(n, t[n], t)
    }
    ) : t.forEach( (n, i) => e(i, n, t))
}
function is(t) {
    const e = t[nt];
    return e ? e.type_ : Array.isArray(t) ? 1 : ss(t) ? 2 : rs(t) ? 3 : 0
}
function ar(t, e) {
    return is(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e)
}
function k1(t, e, n) {
    const i = is(t);
    i === 2 ? t.set(e, n) : i === 3 ? t.add(n) : t[e] = n
}
function y3(t, e) {
    return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e
}
function ss(t) {
    return t instanceof Map
}
function rs(t) {
    return t instanceof Set
}
function nn(t) {
    return t.copy_ || t.base_
}
function lr(t, e) {
    if (ss(t))
        return new Map(t);
    if (rs(t))
        return new Set(t);
    if (Array.isArray(t))
        return Array.prototype.slice.call(t);
    const n = _1(t);
    if (e === !0 || e === "class_only" && !n) {
        const i = Object.getOwnPropertyDescriptors(t);
        delete i[nt];
        let s = Reflect.ownKeys(i);
        for (let r = 0; r < s.length; r++) {
            const o = s[r]
              , a = i[o];
            a.writable === !1 && (a.writable = !0,
            a.configurable = !0),
            (a.get || a.set) && (i[o] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: t[o]
            })
        }
        return Object.create(Fn(t), i)
    } else {
        const i = Fn(t);
        if (i !== null && n)
            return {
                ...t
            };
        const s = Object.create(i);
        return Object.assign(s, t)
    }
}
function zr(t, e=!1) {
    return os(t) || un(t) || !Pt(t) || (is(t) > 1 && (t.set = t.add = t.clear = t.delete = v3),
    Object.freeze(t),
    e && Object.entries(t).forEach( ([n,i]) => zr(i, !0))),
    t
}
function v3() {
    ht(2)
}
function os(t) {
    return Object.isFrozen(t)
}
var x3 = {};
function dn(t) {
    const e = x3[t];
    return e || ht(0, t),
    e
}
var ii;
function I1() {
    return ii
}
function C3(t, e) {
    return {
        drafts_: [],
        parent_: t,
        immer_: e,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}
function Uo(t, e) {
    e && (dn("Patches"),
    t.patches_ = [],
    t.inversePatches_ = [],
    t.patchListener_ = e)
}
function cr(t) {
    ur(t),
    t.drafts_.forEach(b3),
    t.drafts_ = null
}
function ur(t) {
    t === ii && (ii = t.parent_)
}
function Wo(t) {
    return ii = C3(ii, t)
}
function b3(t) {
    const e = t[nt];
    e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0
}
function Ho(t, e) {
    e.unfinalizedDrafts_ = e.drafts_.length;
    const n = e.drafts_[0];
    return t !== void 0 && t !== n ? (n[nt].modified_ && (cr(e),
    ht(4)),
    Pt(t) && (t = Vi(e, t),
    e.parent_ || qi(e, t)),
    e.patches_ && dn("Patches").generateReplacementPatches_(n[nt].base_, t, e.patches_, e.inversePatches_)) : t = Vi(e, n, []),
    cr(e),
    e.patches_ && e.patchListener_(e.patches_, e.inversePatches_),
    t !== S1 ? t : void 0
}
function Vi(t, e, n) {
    if (os(e))
        return e;
    const i = e[nt];
    if (!i)
        return Gi(e, (s, r) => Go(t, i, e, s, r, n)),
        e;
    if (i.scope_ !== t)
        return e;
    if (!i.modified_)
        return qi(t, i.base_, !0),
        i.base_;
    if (!i.finalized_) {
        i.finalized_ = !0,
        i.scope_.unfinalizedDrafts_--;
        const s = i.copy_;
        let r = s
          , o = !1;
        i.type_ === 3 && (r = new Set(s),
        s.clear(),
        o = !0),
        Gi(r, (a, c) => Go(t, i, s, a, c, n, o)),
        qi(t, s, !1),
        n && t.patches_ && dn("Patches").generatePatches_(i, n, t.patches_, t.inversePatches_)
    }
    return i.copy_
}
function Go(t, e, n, i, s, r, o) {
    if (un(s)) {
        const a = r && e && e.type_ !== 3 && !ar(e.assigned_, i) ? r.concat(i) : void 0
          , c = Vi(t, s, a);
        if (k1(n, i, c),
        un(c))
            t.canAutoFreeze_ = !1;
        else
            return
    } else
        o && n.add(s);
    if (Pt(s) && !os(s)) {
        if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
            return;
        Vi(t, s),
        (!e || !e.scope_.parent_) && typeof i != "symbol" && Object.prototype.propertyIsEnumerable.call(n, i) && qi(t, s)
    }
}
function qi(t, e, n=!1) {
    !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && zr(e, n)
}
function w3(t, e) {
    const n = Array.isArray(t)
      , i = {
        type_: n ? 1 : 0,
        scope_: e ? e.scope_ : I1(),
        modified_: !1,
        finalized_: !1,
        assigned_: {},
        parent_: e,
        base_: t,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: !1
    };
    let s = i
      , r = Or;
    n && (s = [i],
    r = si);
    const {revoke: o, proxy: a} = Proxy.revocable(s, r);
    return i.draft_ = a,
    i.revoke_ = o,
    a
}
var Or = {
    get(t, e) {
        if (e === nt)
            return t;
        const n = nn(t);
        if (!ar(n, e))
            return S3(t, n, e);
        const i = n[e];
        return t.finalized_ || !Pt(i) ? i : i === Es(t.base_, e) ? (Ls(t),
        t.copy_[e] = hr(i, t)) : i
    },
    has(t, e) {
        return e in nn(t)
    },
    ownKeys(t) {
        return Reflect.ownKeys(nn(t))
    },
    set(t, e, n) {
        const i = M1(nn(t), e);
        if (i != null && i.set)
            return i.set.call(t.draft_, n),
            !0;
        if (!t.modified_) {
            const s = Es(nn(t), e)
              , r = s == null ? void 0 : s[nt];
            if (r && r.base_ === n)
                return t.copy_[e] = n,
                t.assigned_[e] = !1,
                !0;
            if (y3(n, s) && (n !== void 0 || ar(t.base_, e)))
                return !0;
            Ls(t),
            dr(t)
        }
        return t.copy_[e] === n && (n !== void 0 || e in t.copy_) || Number.isNaN(n) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = n,
        t.assigned_[e] = !0),
        !0
    },
    deleteProperty(t, e) {
        return Es(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1,
        Ls(t),
        dr(t)) : delete t.assigned_[e],
        t.copy_ && delete t.copy_[e],
        !0
    },
    getOwnPropertyDescriptor(t, e) {
        const n = nn(t)
          , i = Reflect.getOwnPropertyDescriptor(n, e);
        return i && {
            writable: !0,
            configurable: t.type_ !== 1 || e !== "length",
            enumerable: i.enumerable,
            value: n[e]
        }
    },
    defineProperty() {
        ht(11)
    },
    getPrototypeOf(t) {
        return Fn(t.base_)
    },
    setPrototypeOf() {
        ht(12)
    }
}
  , si = {};
Gi(Or, (t, e) => {
    si[t] = function() {
        return arguments[0] = arguments[0][0],
        e.apply(this, arguments)
    }
}
);
si.deleteProperty = function(t, e) {
    return si.set.call(this, t, e, void 0)
}
;
si.set = function(t, e, n) {
    return Or.set.call(this, t[0], e, n, t[0])
}
;
function Es(t, e) {
    const n = t[nt];
    return (n ? nn(n) : t)[e]
}
function S3(t, e, n) {
    var s;
    const i = M1(e, n);
    return i ? "value"in i ? i.value : (s = i.get) == null ? void 0 : s.call(t.draft_) : void 0
}
function M1(t, e) {
    if (!(e in t))
        return;
    let n = Fn(t);
    for (; n; ) {
        const i = Object.getOwnPropertyDescriptor(n, e);
        if (i)
            return i;
        n = Fn(n)
    }
}
function dr(t) {
    t.modified_ || (t.modified_ = !0,
    t.parent_ && dr(t.parent_))
}
function Ls(t) {
    t.copy_ || (t.copy_ = lr(t.base_, t.scope_.immer_.useStrictShallowCopy_))
}
var _3 = class {
    constructor(t) {
        this.autoFreeze_ = !0,
        this.useStrictShallowCopy_ = !1,
        this.produce = (e, n, i) => {
            if (typeof e == "function" && typeof n != "function") {
                const r = n;
                n = e;
                const o = this;
                return function(c=r, ...u) {
                    return o.produce(c, d => n.call(this, d, ...u))
                }
            }
            typeof n != "function" && ht(6),
            i !== void 0 && typeof i != "function" && ht(7);
            let s;
            if (Pt(e)) {
                const r = Wo(this)
                  , o = hr(e, void 0);
                let a = !0;
                try {
                    s = n(o),
                    a = !1
                } finally {
                    a ? cr(r) : ur(r)
                }
                return Uo(r, i),
                Ho(s, r)
            } else if (!e || typeof e != "object") {
                if (s = n(e),
                s === void 0 && (s = e),
                s === S1 && (s = void 0),
                this.autoFreeze_ && zr(s, !0),
                i) {
                    const r = []
                      , o = [];
                    dn("Patches").generateReplacementPatches_(e, s, r, o),
                    i(r, o)
                }
                return s
            } else
                ht(1, e)
        }
        ,
        this.produceWithPatches = (e, n) => {
            if (typeof e == "function")
                return (o, ...a) => this.produceWithPatches(o, c => e(c, ...a));
            let i, s;
            return [this.produce(e, n, (o, a) => {
                i = o,
                s = a
            }
            ), i, s]
        }
        ,
        typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze),
        typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy)
    }
    createDraft(t) {
        Pt(t) || ht(8),
        un(t) && (t = k3(t));
        const e = Wo(this)
          , n = hr(t, void 0);
        return n[nt].isManual_ = !0,
        ur(e),
        n
    }
    finishDraft(t, e) {
        const n = t && t[nt];
        (!n || !n.isManual_) && ht(9);
        const {scope_: i} = n;
        return Uo(i, e),
        Ho(void 0, i)
    }
    setAutoFreeze(t) {
        this.autoFreeze_ = t
    }
    setUseStrictShallowCopy(t) {
        this.useStrictShallowCopy_ = t
    }
    applyPatches(t, e) {
        let n;
        for (n = e.length - 1; n >= 0; n--) {
            const s = e[n];
            if (s.path.length === 0 && s.op === "replace") {
                t = s.value;
                break
            }
        }
        n > -1 && (e = e.slice(n + 1));
        const i = dn("Patches").applyPatches_;
        return un(t) ? i(t, e) : this.produce(t, s => i(s, e))
    }
}
;
function hr(t, e) {
    const n = ss(t) ? dn("MapSet").proxyMap_(t, e) : rs(t) ? dn("MapSet").proxySet_(t, e) : w3(t, e);
    return (e ? e.scope_ : I1()).drafts_.push(n),
    n
}
function k3(t) {
    return un(t) || ht(10, t),
    R1(t)
}
function R1(t) {
    if (!Pt(t) || os(t))
        return t;
    const e = t[nt];
    let n;
    if (e) {
        if (!e.modified_)
            return e.base_;
        e.finalized_ = !0,
        n = lr(t, e.scope_.immer_.useStrictShallowCopy_)
    } else
        n = lr(t, !0);
    return Gi(n, (i, s) => {
        k1(n, i, R1(s))
    }
    ),
    e && (e.finalized_ = !1),
    n
}
var it = new _3
  , A1 = it.produce;
it.produceWithPatches.bind(it);
it.setAutoFreeze.bind(it);
it.setUseStrictShallowCopy.bind(it);
it.applyPatches.bind(it);
it.createDraft.bind(it);
it.finishDraft.bind(it);
function j1(t) {
    return ({dispatch: n, getState: i}) => s => r => typeof r == "function" ? r(n, i, t) : s(r)
}
var I3 = j1()
  , M3 = j1
  , R3 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length !== 0)
        return typeof arguments[0] == "object" ? Hi : Hi.apply(null, arguments)
}
;
function Vo(t, e) {
    function n(...i) {
        if (e) {
            let s = e(...i);
            if (!s)
                throw new Error(Mt(0));
            return {
                type: t,
                payload: s.payload,
                ..."meta"in s && {
                    meta: s.meta
                },
                ..."error"in s && {
                    error: s.error
                }
            }
        }
        return {
            type: t,
            payload: i[0]
        }
    }
    return n.toString = () => `${t}`,
    n.type = t,
    n.match = i => p3(i) && i.type === t,
    n
}
var P1 = class Vn extends Array {
    constructor(...e) {
        super(...e),
        Object.setPrototypeOf(this, Vn.prototype)
    }
    static get[Symbol.species]() {
        return Vn
    }
    concat(...e) {
        return super.concat.apply(this, e)
    }
    prepend(...e) {
        return e.length === 1 && Array.isArray(e[0]) ? new Vn(...e[0].concat(this)) : new Vn(...e.concat(this))
    }
}
;
function qo(t) {
    return Pt(t) ? A1(t, () => {}
    ) : t
}
function ji(t, e, n) {
    return t.has(e) ? t.get(e) : t.set(e, n(e)).get(e)
}
function A3(t) {
    return typeof t == "boolean"
}
var j3 = () => function(e) {
    const {thunk: n=!0, immutableCheck: i=!0, serializableCheck: s=!0, actionCreatorCheck: r=!0} = e ?? {};
    let o = new P1;
    return n && (A3(n) ? o.push(I3) : o.push(M3(n.extraArgument))),
    o
}
  , P3 = "RTK_autoBatch"
  , Ko = t => e => {
    setTimeout(e, t)
}
  , E3 = (t={
    type: "raf"
}) => e => (...n) => {
    const i = e(...n);
    let s = !0
      , r = !1
      , o = !1;
    const a = new Set
      , c = t.type === "tick" ? queueMicrotask : t.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ko(10) : t.type === "callback" ? t.queueNotification : Ko(t.timeout)
      , u = () => {
        o = !1,
        r && (r = !1,
        a.forEach(d => d()))
    }
    ;
    return Object.assign({}, i, {
        subscribe(d) {
            const h = () => s && d()
              , f = i.subscribe(h);
            return a.add(d),
            () => {
                f(),
                a.delete(d)
            }
        },
        dispatch(d) {
            var h;
            try {
                return s = !((h = d == null ? void 0 : d.meta) != null && h[P3]),
                r = !s,
                r && (o || (o = !0,
                c(u))),
                i.dispatch(d)
            } finally {
                s = !0
            }
        }
    })
}
  , L3 = t => function(n) {
    const {autoBatch: i=!0} = n ?? {};
    let s = new P1(t);
    return i && s.push(E3(typeof i == "object" ? i : void 0)),
    s
}
;
function q8(t) {
    const e = j3()
      , {reducer: n=void 0, middleware: i, devTools: s=!0, preloadedState: r=void 0, enhancers: o=void 0} = t || {};
    let a;
    if (typeof n == "function")
        a = n;
    else if (Br(n))
        a = f3(n);
    else
        throw new Error(Mt(1));
    let c;
    typeof i == "function" ? c = i(e) : c = e();
    let u = Hi;
    s && (u = R3({
        trace: !1,
        ...typeof s == "object" && s
    }));
    const d = m3(...c)
      , h = L3(d);
    let f = typeof o == "function" ? o(h) : h();
    const m = u(...f);
    return w1(a, r, m)
}
function E1(t) {
    const e = {}
      , n = [];
    let i;
    const s = {
        addCase(r, o) {
            const a = typeof r == "string" ? r : r.type;
            if (!a)
                throw new Error(Mt(28));
            if (a in e)
                throw new Error(Mt(29));
            return e[a] = o,
            s
        },
        addMatcher(r, o) {
            return n.push({
                matcher: r,
                reducer: o
            }),
            s
        },
        addDefaultCase(r) {
            return i = r,
            s
        }
    };
    return t(s),
    [e, n, i]
}
function T3(t) {
    return typeof t == "function"
}
function D3(t, e) {
    let[n,i,s] = E1(e), r;
    if (T3(t))
        r = () => qo(t());
    else {
        const a = qo(t);
        r = () => a
    }
    function o(a=r(), c) {
        let u = [n[c.type], ...i.filter( ({matcher: d}) => d(c)).map( ({reducer: d}) => d)];
        return u.filter(d => !!d).length === 0 && (u = [s]),
        u.reduce( (d, h) => {
            if (h)
                if (un(d)) {
                    const m = h(d, c);
                    return m === void 0 ? d : m
                } else {
                    if (Pt(d))
                        return A1(d, f => h(f, c));
                    {
                        const f = h(d, c);
                        if (f === void 0) {
                            if (d === null)
                                return d;
                            throw Error("A case reducer on a non-draftable value must not return undefined")
                        }
                        return f
                    }
                }
            return d
        }
        , a)
    }
    return o.getInitialState = r,
    o
}
var F3 = Symbol.for("rtk-slice-createasyncthunk");
function N3(t, e) {
    return `${t}/${e}`
}
function B3({creators: t}={}) {
    var n;
    const e = (n = t == null ? void 0 : t.asyncThunk) == null ? void 0 : n[F3];
    return function(s) {
        const {name: r, reducerPath: o=r} = s;
        if (!r)
            throw new Error(Mt(11));
        const a = (typeof s.reducers == "function" ? s.reducers($3()) : s.reducers) || {}
          , c = Object.keys(a)
          , u = {
            sliceCaseReducersByName: {},
            sliceCaseReducersByType: {},
            actionCreators: {},
            sliceMatchers: []
        }
          , d = {
            addCase(S, k) {
                const I = typeof S == "string" ? S : S.type;
                if (!I)
                    throw new Error(Mt(12));
                if (I in u.sliceCaseReducersByType)
                    throw new Error(Mt(13));
                return u.sliceCaseReducersByType[I] = k,
                d
            },
            addMatcher(S, k) {
                return u.sliceMatchers.push({
                    matcher: S,
                    reducer: k
                }),
                d
            },
            exposeAction(S, k) {
                return u.actionCreators[S] = k,
                d
            },
            exposeCaseReducer(S, k) {
                return u.sliceCaseReducersByName[S] = k,
                d
            }
        };
        c.forEach(S => {
            const k = a[S]
              , I = {
                reducerName: S,
                type: N3(r, S),
                createNotation: typeof s.reducers == "function"
            };
            W3(k) ? G3(I, k, d, e) : U3(I, k, d)
        }
        );
        function h() {
            const [S={},k=[],I=void 0] = typeof s.extraReducers == "function" ? E1(s.extraReducers) : [s.extraReducers]
              , R = {
                ...S,
                ...u.sliceCaseReducersByType
            };
            return D3(s.initialState, T => {
                for (let P in R)
                    T.addCase(P, R[P]);
                for (let P of u.sliceMatchers)
                    T.addMatcher(P.matcher, P.reducer);
                for (let P of k)
                    T.addMatcher(P.matcher, P.reducer);
                I && T.addDefaultCase(I)
            }
            )
        }
        const f = S => S
          , m = new Map
          , g = new WeakMap;
        let p;
        function v(S, k) {
            return p || (p = h()),
            p(S, k)
        }
        function x() {
            return p || (p = h()),
            p.getInitialState()
        }
        function y(S, k=!1) {
            function I(T) {
                let P = T[S];
                return typeof P > "u" && k && (P = ji(g, I, x)),
                P
            }
            function R(T=f) {
                const P = ji(m, k, () => new WeakMap);
                return ji(P, T, () => {
                    const w = {};
                    for (const [A,D] of Object.entries(s.selectors ?? {}))
                        w[A] = z3(D, T, () => ji(g, T, x), k);
                    return w
                }
                )
            }
            return {
                reducerPath: S,
                getSelectors: R,
                get selectors() {
                    return R(I)
                },
                selectSlice: I
            }
        }
        const b = {
            name: r,
            reducer: v,
            actions: u.actionCreators,
            caseReducers: u.sliceCaseReducersByName,
            getInitialState: x,
            ...y(o),
            injectInto(S, {reducerPath: k, ...I}={}) {
                const R = k ?? o;
                return S.inject({
                    reducerPath: R,
                    reducer: v
                }, I),
                {
                    ...b,
                    ...y(R, !0)
                }
            }
        };
        return b
    }
}
function z3(t, e, n, i) {
    function s(r, ...o) {
        let a = e(r);
        return typeof a > "u" && i && (a = n()),
        t(a, ...o)
    }
    return s.unwrapped = t,
    s
}
var O3 = B3();
function $3() {
    function t(e, n) {
        return {
            _reducerDefinitionType: "asyncThunk",
            payloadCreator: e,
            ...n
        }
    }
    return t.withTypes = () => t,
    {
        reducer(e) {
            return Object.assign({
                [e.name](...n) {
                    return e(...n)
                }
            }[e.name], {
                _reducerDefinitionType: "reducer"
            })
        },
        preparedReducer(e, n) {
            return {
                _reducerDefinitionType: "reducerWithPrepare",
                prepare: e,
                reducer: n
            }
        },
        asyncThunk: t
    }
}
function U3({type: t, reducerName: e, createNotation: n}, i, s) {
    let r, o;
    if ("reducer"in i) {
        if (n && !H3(i))
            throw new Error(Mt(17));
        r = i.reducer,
        o = i.prepare
    } else
        r = i;
    s.addCase(t, r).exposeCaseReducer(e, r).exposeAction(e, o ? Vo(t, o) : Vo(t))
}
function W3(t) {
    return t._reducerDefinitionType === "asyncThunk"
}
function H3(t) {
    return t._reducerDefinitionType === "reducerWithPrepare"
}
function G3({type: t, reducerName: e}, n, i, s) {
    if (!s)
        throw new Error(Mt(18));
    const {payloadCreator: r, fulfilled: o, pending: a, rejected: c, settled: u, options: d} = n
      , h = s(t, r, d);
    i.exposeAction(e, h),
    o && i.addCase(h.fulfilled, o),
    a && i.addCase(h.pending, a),
    c && i.addCase(h.rejected, c),
    u && i.addMatcher(h.settled, u),
    i.exposeCaseReducer(e, {
        fulfilled: o || Pi,
        pending: a || Pi,
        rejected: c || Pi,
        settled: u || Pi
    })
}
function Pi() {}
function Mt(t) {
    return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `
}
const V3 = {
    GameScore: "gScore",
    GameMatchPoints: "gMPoints",
    GamePlace: "gPlace",
    GameKills: "gKills",
    GameKingKills: "gKingKills",
    GameBoostDuration: "gBoost",
    GameBoostTop: "gBoostTop",
    Streaks: "streaks",
    Challenge: "challenge",
    PracticeGameScore: "pgScore",
    PracticeGameMatchPoints: "pgMPoints",
    BlitzBonusPoints: "blitzBonus",
    BlitzDailyRank: "blitzRank",
    BlitzDailyPct: "blitzPct",
    PracticeGameWeeklyRank: "pgWRank",
    GameSpawnDuration: "gSpD",
    GameSpawnMaxScore: "gSpMS",
    Admin: "admin"
};
Object.fromEntries(Object.values(V3).map( (t, e) => [t, e]));
const K8 = null
  , Zo = [0, 200, 400, 600, 900, 1300, 1800, 2400, 2800, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4e3, 4100, 4200, 4400, 4600, 4800, 5e3, 5200, 5400, 5600, 5800, 6e3, 6500, 7e3, 7500, 8e3, 9e3, 1e4, 11e3, 12e3, 13e3, 15e3, 16e3, 17e3, 18e3, 19e3, 2e4, 21e3, 22e3, 23e3, 24e3, 25e3, 26e3, 27e3, 28e3, 29e3, 3e4, 31e3, 32e3, 33e3, 34e3, 35e3, 36e3, 37e3, 38e3, 39e3, 4e4, 41e3, 42e3, 43e3, 44e3, 45e3, 46e3, 47e3, 48e3, 49e3, 5e4, 51e3, 52e3, 53e3, 54e3, 55e3, 56e3, 57e3, 58e3, 59e3, 6e4, 61e3, 62e3, 63e3, 64e3, 65e3, 67e3, 69e3, 71e3, 73e3, 75e3, 78e3, 81e3, 84e3, 87e3, 9e4, 93e3, 96e3, 99e3, 102e3, 105e3, 108e3, 111e3, 114e3, 117e3, 12e4, 125e3, 13e4, 135e3, 14e4, 145e3, 15e4, 155e3, 16e4, 165e3, 17e4, 177e3, 184e3, 191e3, 198e3, 205e3, 212e3, 219e3, 226e3, 233e3, 24e4, 249e3, 258e3, 267e3, 276e3, 285e3, 294e3, 303e3, 312e3, 321e3, 33e4, 342e3, 354e3, 366e3, 378e3, 39e4, 402e3, 414e3, 426e3, 438e3, 45e4, 465e3, 465e3, 465e3, 465e3, 465e3, 465e3, 465e3, 465e3, 465e3, 465e3, 484e3, 484e3, 484e3, 484e3, 484e3, 484e3, 484e3, 484e3, 484e3, 484e3, 506e3, 506e3, 506e3, 506e3, 506e3, 506e3, 506e3, 506e3, 506e3, 506e3, 533e3, 533e3, 533e3, 533e3, 533e3, 533e3, 533e3, 533e3, 533e3, 533e3, 564e3, 564e3, 564e3, 564e3, 564e3, 564e3, 564e3, 564e3, 564e3, 564e3, 599e3, 599e3, 599e3, 599e3, 599e3, 599e3, 599e3, 599e3, 599e3, 599e3, 638e3, 638e3, 638e3, 638e3, 638e3, 638e3, 638e3, 638e3, 638e3, 638e3, 681e3, 681e3, 681e3, 681e3, 681e3, 681e3, 681e3, 681e3, 681e3, 681e3, 728e3, 728e3, 728e3, 728e3, 728e3, 728e3, 728e3, 728e3, 728e3, 728e3, 779e3, 779e3, 779e3, 779e3, 779e3, 779e3, 779e3, 779e3, 779e3, 779e3, 834e3, 834e3, 834e3, 834e3, 834e3, 834e3, 834e3, 834e3, 834e3, 834e3, 893e3, 893e3, 893e3, 893e3, 893e3, 893e3, 893e3, 893e3, 893e3, 893e3, 956e3, 956e3, 956e3, 956e3, 956e3, 956e3, 956e3, 956e3, 956e3, 956e3, 1023e3, 1023e3, 1023e3, 1023e3, 1023e3, 1023e3, 1023e3, 1023e3, 1023e3, 1023e3, 1094e3, 1094e3, 1094e3, 1094e3, 1094e3, 1094e3, 1094e3, 1094e3, 1094e3, 1094e3]
  , fr = [0, 200, 600, 1200, 2100, 3400, 5200, 7600, 10400, 13500, 16700, 2e4, 23400, 26900, 30500, 34200, 38e3, 41900, 45900, 5e4, 54200, 58600, 63200, 68e3, 73e3, 78200, 83600, 89200, 95e3, 101e3, 107500, 114500, 122e3, 13e4, 139e3, 149e3, 16e4, 172e3, 185e3, 2e5, 216e3, 233e3, 251e3, 27e4, 29e4, 311e3, 333e3, 356e3, 38e4, 405e3, 431e3, 458e3, 486e3, 515e3, 545e3, 576e3, 608e3, 641e3, 675e3, 71e4, 746e3, 783e3, 821e3, 86e4, 9e5, 941e3, 983e3, 1026e3, 107e4, 1115e3, 1161e3, 1208e3, 1256e3, 1305e3, 1355e3, 1406e3, 1458e3, 1511e3, 1565e3, 162e4, 1676e3, 1733e3, 1791e3, 185e4, 191e4, 1971e3, 2033e3, 2096e3, 216e4, 2225e3, 2292e3, 2361e3, 2432e3, 2505e3, 258e4, 2658e3, 2739e3, 2823e3, 291e4, 3e6, 3093e3, 3189e3, 3288e3, 339e4, 3495e3, 3603e3, 3714e3, 3828e3, 3945e3, 4065e3, 419e4, 432e4, 4455e3, 4595e3, 474e4, 489e4, 5045e3, 5205e3, 537e4, 554e4, 5717e3, 5901e3, 6092e3, 629e4, 6495e3, 6707e3, 6926e3, 7152e3, 7385e3, 7625e3, 7874e3, 8132e3, 8399e3, 8675e3, 896e4, 9254e3, 9557e3, 9869e3, 1019e4, 1052e4, 10862e3, 11216e3, 11582e3, 1196e4, 1235e4, 12752e3, 13166e3, 13592e3, 1403e4, 1448e4, 14945e3, 1541e4, 15875e3, 1634e4, 16805e3, 1727e4, 17735e3, 182e5, 18665e3, 1913e4, 19614e3, 20098e3, 20582e3, 21066e3, 2155e4, 22034e3, 22518e3, 23002e3, 23486e3, 2397e4, 24476e3, 24982e3, 25488e3, 25994e3, 265e5, 27006e3, 27512e3, 28018e3, 28524e3, 2903e4, 29563e3, 30096e3, 30629e3, 31162e3, 31695e3, 32228e3, 32761e3, 33294e3, 33827e3, 3436e4, 34924e3, 35488e3, 36052e3, 36616e3, 3718e4, 37744e3, 38308e3, 38872e3, 39436e3, 4e7, 40599e3, 41198e3, 41797e3, 42396e3, 42995e3, 43594e3, 44193e3, 44792e3, 45391e3, 4599e4, 46628e3, 47266e3, 47904e3, 48542e3, 4918e4, 49818e3, 50456e3, 51094e3, 51732e3, 5237e4, 53051e3, 53732e3, 54413e3, 55094e3, 55775e3, 56456e3, 57137e3, 57818e3, 58499e3, 5918e4, 59908e3, 60636e3, 61364e3, 62092e3, 6282e4, 63548e3, 64276e3, 65004e3, 65732e3, 6646e4, 67239e3, 68018e3, 68797e3, 69576e3, 70355e3, 71134e3, 71913e3, 72692e3, 73471e3, 7425e4, 75084e3, 75918e3, 76752e3, 77586e3, 7842e4, 79254e3, 80088e3, 80922e3, 81756e3, 8259e4, 83483e3, 84376e3, 85269e3, 86162e3, 87055e3, 87948e3, 88841e3, 89734e3, 90627e3, 9152e4, 92476e3, 93432e3, 94388e3, 95344e3, 963e5, 97256e3, 98212e3, 99168e3, 100124e3, 10108e4, 102103e3, 103126e3, 104149e3, 105172e3, 106195e3, 107218e3, 108241e3, 109264e3, 110287e3, 11131e4, 112404e3, 113498e3, 114592e3, 115686e3, 11678e4, 117874e3, 118968e3, 120062e3, 121156e3, 12225e4]
  , L1 = (t, e) => {
    if (t >= Zo.length)
        return null;
    const n = Zo[t];
    return e ? BigInt(n) : n
}
  , T1 = (t, e) => t > fr.length ? null : fr[t - 1]
  , Z8 = (t, e=1) => {
    const n = fr;
    for (let i = Math.min(e - 1, 0); i < n.length; i++)
        if (n[i] > t)
            return i;
    return n.length
}
  , q3 = t => Math.max(1, 1 + (t - 1) / 10)
  , Yo = (t, e=1, n=!0) => {
    const i = ["", "K", "M", "B", "T", "Q"]
      , s = Math.log10(t)
      , r = Math.max(0, Math.floor(Math.min(i.length - 1, s / 3)) * 3)
      , o = t / 10 ** r
      , a = i[r / 3];
    e = Math.max(0, e - s % 3);
    const c = o.toFixed(r ? e : 0);
    return `${n ? c : +c}${a}`
}
  , Y8 = ["invincibility", "super_boost", "ice_bomb", "wall", "arrow", "zoom_out"]
  , mr = {
    invincibility: M.Invincibility,
    super_boost: M.SuperBoost,
    ice_bomb: M.IceBomb,
    wall: M.Wall,
    arrow: M.Arrow,
    zoom_out: M.ZoomOut
}
  , Q8 = {
    ...mr,
    revive: Et.Revive
}
  , as = {
    [M.Invincibility]: "invincibility",
    [M.SuperBoost]: "super_boost",
    [M.IceBomb]: "ice_bomb",
    [M.Wall]: "wall",
    [M.Arrow]: "arrow",
    [M.ZoomOut]: "zoom_out"
}
  , X8 = t => t !== "revive"
  , J8 = jr.filter(t => {
    var e;
    return !((e = Ze.items[t]) != null && e.disabled)
}
).map(t => as[t])
  , eh = jr.filter(t => {
    var e;
    return !((e = s3.items[t]) != null && e.disabled)
}
).map(t => as[t])
  , th = jr.filter(t => {
    var e;
    return !((e = i3.items[t]) != null && e.disabled)
}
).map(t => as[t])
  , D1 = Xa.map(t => as[t]);
Object.fromEntries(D1.map( (t, e) => [t, e]));
const K3 = [...D1, "revive"]
  , Qo = Object.fromEntries(K3.map( (t, e) => [t, e]))
  , Z3 = (t, e, n, i= () => {}
) => "success"in t ? e(t.success) : "failure"in t ? n(t.failure) : i(t)
  , nh = (t, e, n) => {
    if ("success"in t)
        return t.success;
    if ("failure"in t) {
        const i = t.failure;
        throw e ? e(i) : i
    }
    throw n ? n(t) : new Error(`ResultMessage did not contain 'success' or 'failure' properties: ${Object.keys(t)}`)
}
;
function Pe(t) {
    return !!t && "success"in t
}
function Y3(t) {
    return "failure"in t
}
const ih = t => {
    const e = t;
    if ("failure"in e)
        return e.failure
}
  , Ts = {
    admin: 1,
    community: 2,
    autoName: 3
}
  , Ne = {
    Freeform: 1,
    ThemeUnlockable: 10,
    ThemeUnlocked: 11,
    BlitzDailyRank: 20,
    BlitzDailyPct: 21,
    PracticeGameWeeklyRank: 22,
    ReviveFeatureUnlocked: 30,
    GroupChallengeClaimed: 40,
    FeatureAnnouncement: 50,
    Popup: 51,
    SuperBlitzResult: 60,
    SuperBlitzDepositResult: 61
};
Object.fromEntries(Object.entries(Ne).map( ([t,e]) => [e, t]));
const F1 = {
    Badges: 1
};
Object.fromEntries(Object.entries(F1).map( ([t,e]) => [e, t]));
const N1 = {
    BadgesAnnouncement: 1
};
Object.fromEntries(Object.entries(N1).map( ([t,e]) => [e, t]));
const Q3 = {
    [Ne.ThemeUnlocked]: ["ucId"],
    [Ne.BlitzDailyRank]: ["pId"],
    [Ne.BlitzDailyPct]: ["pId"],
    [Ne.GroupChallengeClaimed]: ["ucId"],
    [Ne.SuperBlitzResult]: ["eId"],
    [Ne.SuperBlitzDepositResult]: ["eId", "dId"]
};
Object.fromEntries(Object.entries(Q3).map( ([t,e]) => [t, Object.fromEntries(e.map(n => [n, !0]))]));
const X3 = "_scroll_rddvn_89"
  , J3 = "_header_rddvn_102"
  , ed = "_center_rddvn_113"
  , td = "_content_rddvn_136"
  , nd = "_reject_rddvn_187"
  , id = "_accept_rddvn_195"
  , sd = "_tint_rddvn_195"
  , rd = "_acknowledge_rddvn_195"
  , od = "_title_rddvn_286"
  , ad = "_description_rddvn_322"
  , ld = "_bold_rddvn_323"
  , cd = "_flex_rddvn_387"
  , ud = "_domain_rddvn_440"
  , dd = "_portrait_rddvn_456"
  , hd = "_tip_rddvn_512"
  , fd = "_countdown_rddvn_520"
  , md = "_action_rddvn_155"
  , pd = "_short_rddvn_579"
  , gd = "_long_rddvn_583"
  , yd = "_body_rddvn_656"
  , vd = "_footer_rddvn_663"
  , xd = "_value_rddvn_743"
  , Cd = "_heading_rddvn_745"
  , bd = "_italics_rddvn_752"
  , wd = "_icon_rddvn_354"
  , Sd = "_points_rddvn_770"
  , _d = "_scoring_rddvn_777"
  , kd = "_attempts_rddvn_780"
  , Id = "_text_rddvn_806"
  , Md = "_keybinding_rddvn_791"
  , Rd = "_landscape_rddvn_854"
  , Ad = "_progress_rddvn_944"
  , jd = "_complete_rddvn_1001"
  , Pd = "_expires_rddvn_1001"
  , Ed = "_difficulty_rddvn_1001"
  , Ld = "_mt_rddvn_1090"
  , Td = "_requirements_rddvn_1095"
  , Dd = "_transposed_rddvn_1150"
  , Fd = "_first_rddvn_1195"
  , Nd = "_result_rddvn_1358"
  , Bd = "_bonus_rddvn_1370"
  , zd = "_label_rddvn_1391"
  , Od = "_numerator_rddvn_1416"
  , $d = "_separator_rddvn_1420"
  , Ud = "_denominator_rddvn_1423"
  , Wd = "_delta_rddvn_1447"
  , Hd = "_percentage_rddvn_1481"
  , Gd = "_buttons_rddvn_1486"
  , Vd = "_share_rddvn_1521"
  , qd = "_copy_rddvn_1527"
  , Kd = {
    "modal-background": "_modal-background_rddvn_1",
    "default-styling": "_default-styling_rddvn_12",
    "popup-container": "_popup-container_rddvn_18",
    "close-button": "_close-button_rddvn_62",
    scroll: X3,
    "scroll-container": "_scroll-container_rddvn_96",
    header: J3,
    center: ed,
    "horizontal-header": "_horizontal-header_rddvn_120",
    content: td,
    "action-container": "_action-container_rddvn_155",
    "no-styles": "_no-styles_rddvn_164",
    reject: nd,
    accept: id,
    tint: sd,
    acknowledge: rd,
    "reverse-button-order": "_reverse-button-order_rddvn_221",
    "full-width-buttons": "_full-width-buttons_rddvn_224",
    "alert-dot": "_alert-dot_rddvn_234",
    "popup-theme": "_popup-theme_rddvn_246",
    "title-group": "_title-group_rddvn_286",
    "above-title": "_above-title_rddvn_290",
    title: od,
    "title-super": "_title-super_rddvn_296",
    description: ad,
    bold: ld,
    "precondition-button": "_precondition-button_rddvn_335",
    "icon-wrapper": "_icon-wrapper_rddvn_354",
    "call-to-action": "_call-to-action_rddvn_361",
    "action-button": "_action-button_rddvn_376",
    flex: cd,
    "secondary-action-button": "_secondary-action-button_rddvn_425",
    domain: ud,
    portrait: dd,
    "popup-level-30-profile-unlockable": "_popup-level-30-profile-unlockable_rddvn_476",
    "popup-level-40-profile-unlockable": "_popup-level-40-profile-unlockable_rddvn_477",
    "popup-level-30-profile-unlock-event": "_popup-level-30-profile-unlock-event_rddvn_501",
    tip: hd,
    "countdown-container": "_countdown-container_rddvn_520",
    countdown: fd,
    "popup-level-30-profile-unlocked": "_popup-level-30-profile-unlocked_rddvn_551",
    "required-actions": "_required-actions_rddvn_563",
    action: md,
    short: pd,
    long: gd,
    "unlock-tip": "_unlock-tip_rddvn_588",
    "popup-level-profile-unlocked": "_popup-level-profile-unlocked_rddvn_603",
    "popup-blitz": "_popup-blitz_rddvn_621",
    body: yd,
    footer: vd,
    "increment-time": "_increment-time_rddvn_694",
    value: xd,
    heading: Cd,
    italics: bd,
    icon: wd,
    points: Sd,
    scoring: _d,
    attempts: kd,
    "keybinding-container": "_keybinding-container_rddvn_791",
    text: Id,
    keybinding: Md,
    "popup-weekly-theme-challenge-info": "_popup-weekly-theme-challenge-info_rddvn_830",
    "popup-weekly-theme-challenge-unlocked": "_popup-weekly-theme-challenge-unlocked_rddvn_831",
    "popup-blitz-daily-bonus": "_popup-blitz-daily-bonus_rddvn_833",
    landscape: Rd,
    "image-container": "_image-container_rddvn_855",
    "flip-x": "_flip-x_rddvn_869",
    "popup-nata": "_popup-nata_rddvn_906",
    "claimed-count": "_claimed-count_rddvn_919",
    "progress-group": "_progress-group_rddvn_944",
    progress: Ad,
    "status-bar": "_status-bar_rddvn_995",
    complete: jd,
    expires: Pd,
    difficulty: Ed,
    "progress-group-container": "_progress-group-container_rddvn_1025",
    "progress-text": "_progress-text_rddvn_1030",
    mt: Ld,
    requirements: Td,
    "unlock-date": "_unlock-date_rddvn_1104",
    transposed: Dd,
    "fade-in": "_fade-in_rddvn_1",
    "fade-out": "_fade-out_rddvn_1",
    "content-wrapper": "_content-wrapper_rddvn_1179",
    first: Fd,
    "not-first": "_not-first_rddvn_1226",
    "result-container": "_result-container_rddvn_1358",
    result: Nd,
    bonus: Bd,
    label: zd,
    numerator: Od,
    separator: $d,
    denominator: Ud,
    delta: Wd,
    "progress-labels": "_progress-labels_rddvn_1476",
    percentage: Hd,
    buttons: Gd,
    share: Vd,
    copy: qd,
    "copy-result": "_copy-result_rddvn_1534"
}
  , Zd = t => l.jsxs("svg", {
    viewBox: "0 0 30 30",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("path", {
        d: "m0 0v9l15 7.5 15-7.5v-9l-15 7.5z"
    }), l.jsx("path", {
        d: "m0 13.5v9l15 7.5 15-7.5v-9l-15 7.5z"
    })]
})
  , sh = Zd
  , rh = t => l.jsx("svg", {
    viewBox: "0 0 22 22",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M9.18978 11.906C9.57848 12.4262 10.0744 12.8566 10.6439 13.168C11.2134 13.4795 11.8431 13.6647 12.4904 13.7111C13.1377 13.7575 13.7874 13.664 14.3954 13.437C15.0034 13.21 15.5555 12.8547 16.0143 12.3953L18.7296 9.67721C19.554 8.82282 20.0101 7.67851 19.9998 6.49073C19.9895 5.30296 19.5136 4.16675 18.6745 3.32684C17.8354 2.48692 16.7004 2.01049 15.5138 2.00017C14.3272 1.98985 13.184 2.44646 12.3305 3.27165L10.7737 4.82095M12.8102 10.094C12.4215 9.57381 11.9256 9.1434 11.3561 8.83195C10.7866 8.5205 10.1569 8.33529 9.5096 8.28889C8.86232 8.24248 8.21264 8.33597 7.60462 8.563C6.99661 8.79004 6.44449 9.14531 5.9857 9.60473L3.27037 12.3228C2.44601 13.1772 1.98986 14.3215 2.00017 15.5093C2.01048 16.697 2.48643 17.8332 3.3255 18.6732C4.16457 19.5131 5.29964 19.9895 6.48622 19.9998C7.6728 20.0101 8.81596 19.5535 9.66949 18.7283L11.2172 17.1791",
        stroke: "var(--icon-color)",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , B1 = t => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M3.3335 10H2.66683C2.31321 10 1.97407 9.85956 1.72402 9.60952C1.47397 9.35947 1.3335 9.02033 1.3335 8.66671V2.66671C1.3335 2.31309 1.47397 1.97395 1.72402 1.7239C1.97407 1.47385 2.31321 1.33337 2.66683 1.33337H8.66683C9.02045 1.33337 9.35959 1.47385 9.60964 1.7239C9.85969 1.97395 10.0002 2.31309 10.0002 2.66671V3.33337M7.3335 6.00004H13.3335C14.0699 6.00004 14.6668 6.59699 14.6668 7.33337V13.3334C14.6668 14.0698 14.0699 14.6667 13.3335 14.6667H7.3335C6.59712 14.6667 6.00016 14.0698 6.00016 13.3334V7.33337C6.00016 6.59699 6.59712 6.00004 7.3335 6.00004Z",
        stroke: "var(--icon-color)",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , Yd = t => l.jsx("svg", {
    viewBox: "0 0 22 22",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M17 12V18C17 18.5304 16.7893 19.0391 16.4142 19.4142C16.0391 19.7893 15.5304 20 15 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H10M14 2H20M20 2V8M20 2L9 13",
        stroke: "var(--icon-color)",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , oh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 58 59",
    fill: "none",
    ...t,
    children: [l.jsx("path", {
        d: "m26.383 5.799c1.117-2.1895 4.2486-2.1802 5.3526 0.01577l6.6202 13.168c0.5093 1.0131 1.5464 1.6525 2.6803 1.6525h9.9883c2.6224 0 3.9825 3.1277 2.1942 5.0458l-8.0255 8.6078c-0.6865 0.7363-0.9579 1.7678-0.7227 2.7466l3.2426 13.496c0.6493 2.7022-2.4075 4.7584-4.6657 3.1384l-12.204-8.7553c-1.0547-0.7566-2.4762-0.7492-3.5229 0.0184l-11.524 8.4506c-2.2757 1.6689-5.3872-0.442-4.6778-3.1734l3.4047-13.108c0.2636-1.015-0.0219-2.0939-0.7529-2.8457l-8.2954-8.5304c-1.8493-1.9016-0.50182-5.0914 2.1507-5.0914h9.3511c1.1276 0 2.1599-0.6323 2.6724-1.6367l6.7337-13.199z",
        fill: "#E7C770"
    }), l.jsxs("g", {
        stroke: "#000",
        strokeLinecap: "round",
        strokeOpacity: "0.6",
        strokeWidth: "4",
        children: [l.jsx("path", {
            d: "m28.164 6.7079c0.3724-0.72982 1.4162-0.72674 1.7843 0.00526l6.6201 13.168c0.8489 1.6885 2.5773 2.7541 4.4672 2.7541h9.9883c0.8741 0 1.3275 1.0425 0.7314 1.6819l-8.0255 8.6078c-1.1442 1.2272-1.5965 2.9464-1.2046 4.5778l3.2427 13.496c0.2164 0.9007-0.8025 1.5861-1.5553 1.0461l-12.204-8.7553c-1.7577-1.261-4.127-1.2486-5.8714 0.0307l-11.524 8.4506c-0.7586 0.5563-1.7958-0.1473-1.5593-1.0578l3.4047-13.108c0.4393-1.6916-0.0365-3.4898-1.2549-4.7428-8.2954-8.5304-2.7836-2.8624-8.2954-8.5304-0.61642-0.6339-0.16729-1.6971 0.71691-1.6971h9.3511c1.8793 0 3.5999-1.0538 4.4539-2.7278z",
            strokeLinejoin: "round"
        }), l.jsx("path", {
            d: "m23.723 25.802v6.2455"
        }), l.jsx("path", {
            d: "m34.727 25.802v6.2455"
        })]
    })]
})
  , ah = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 52 112",
    ...t,
    children: [l.jsxs("mask", {
        id: "pull-tab-mask",
        children: [l.jsx("rect", {
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            fill: "#FFF"
        }), l.jsx("ellipse", {
            cx: "12",
            cy: "5",
            rx: "3.25",
            ry: "2.75",
            fill: "#000"
        }), l.jsx("rect", {
            x: "9.25",
            y: "9",
            width: "5.5",
            height: "3.5",
            rx: "2",
            ry: "2",
            fill: "#000"
        })]
    }), l.jsx("path", {
        "data-svg-role": "can-pull-tab",
        d: "m12 1c-2.5 0-4.5 1.8-4.5 4 0 1.2 0.3 4.4 0.5 6s1.8 4 4 4 3.8-2.4 4-4 0.5-4.8 0.5-6c0-2.2-2-4-4.5-4z",
        fill: "#000",
        mask: "url(#pull-tab-mask)"
    }), l.jsxs("g", {
        "data-svg-role": "can-body",
        fill: "#3ebb1f",
        stroke: "#190101",
        strokeWidth: "2",
        strokeLinecap: "round",
        children: [l.jsx("rect", {
            x: "2",
            y: "13",
            width: "48",
            height: "3",
            rx: "2",
            ry: "2"
        }), l.jsx("path", {
            d: "m2 20v83l4 4h40l4-4v-83l-4-4h-40z"
        }), l.jsx("rect", {
            x: "2",
            y: "107",
            width: "48",
            height: "3",
            rx: "2",
            ry: "2"
        })]
    }), l.jsx("path", {
        "data-svg-role": "lightning-bolt",
        fill: "#222",
        d: "m15.6 86.7c-0.2 0-0.4-0-0.5-0.1-0.6-0.3-0.9-0.9-0.7-1.5l8.2-25.1h-6.1c-0.4 0-0.8-0.2-1-0.5s-0.3-0.7-0.2-1.1l6.6-22.4c0.2-0.5 0.6-0.9 1.2-0.9h11.1c0.4 0 0.8 0.2 1 0.5s0.3 0.8 0.1 1.1l-5.6 14.1h7.2c0.5 0 0.9 0.2 1.1 0.6s0.2 0.9-0 1.2l-21.3 33.4c-0.2 0.4-0.6 0.6-1.1 0.6z"
    })]
})
  , lh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 104 116",
    ...t,
    children: [l.jsxs("g", {
        strokeWidth: "4",
        fill: "#6499D5",
        stroke: "#1F4785",
        children: [l.jsx("path", {
            d: "m83.639 30.129c4.6009-2.4558 7.5626-4.3637 7.5559-10.388-0.0067-6.0243-3.2744-11.176-8.5863-11.946s-7.2995 1.3934-10.322 3.1164c-3.0225 1.723-8.3747 1.5051-14.406 0.5194",
            fill: "none",
            strokeLinecap: "round"
        }), l.jsx("rect", {
            transform: "rotate(45 75.665 21.673)",
            x: "75.665",
            y: "21.673",
            width: "23.946",
            height: "10.51",
            rx: "5.2551"
        }), l.jsx("circle", {
            cx: "50",
            cy: "60",
            r: "35"
        })]
    }), l.jsxs("g", {
        "data-svg-role": "optional",
        "data-svg-name": "fizzle",
        children: [l.jsx("path", {
            d: "m49.906 10.235 2.036 2.3308-3.1418 2.0865-1.6197 1.0756 6.2599-0.5196 0.3627 4.6322 0.1071 1.3673 0.798-1.1154 2.5653-3.5853 6.0114 2.9942-0.922-1.4925-2.6094-4.6366 4.2318-0.20697 1.3282-0.1018-1.0672-0.7973-2.9263-1.6367 3.4632-6.4509 1.2264-2.1476-8.785 6.7196-3.423-4.8713v6.5216l-5.0141-1.4462z",
            fill: "#e9752c",
            stroke: "#1f4785",
            strokeMiterlimit: "16"
        }), l.jsx("path", {
            d: "m57.02 10.307 5.532-4.2805-2.766 4.8999 2.3168 1.0891-4.0426 0.4492 2.6478 4.6559-3.688-1.8583-2.1513 3.0418-0.2522-4.1924-3.7432 0.5312 2.766-1.8582-1.8439-2.1356 3.0733 1.067v-4.5062z",
            fill: "#fdb91a"
        })]
    }), l.jsxs("g", {
        opacity: "0.75",
        "data-svg-role": "optional",
        "data-svg-name": "face",
        fill: "#020103",
        stroke: "#020103",
        children: [l.jsx("circle", {
            cx: "40",
            cy: "55",
            r: "4",
            stroke: "none"
        }), l.jsx("circle", {
            cx: "60",
            cy: "55",
            r: "4",
            stroke: "none"
        }), l.jsx("path", {
            d: "m 42,65 c 3,2 5,3 8,3 C 53,68 55,67 58,65",
            fill: "none",
            strokeLinecap: "round",
            strokeWidth: "2"
        })]
    })]
})
  , ch = ({strokeWidth: t=4, ...e}={}) => l.jsx("svg", {
    viewBox: `-${t / 2} -${t / 2} ${100 + t} ${64 + t}`,
    ...e,
    children: l.jsxs("g", {
        stroke: "black",
        strokeWidth: t ?? void 0,
        children: [l.jsx("rect", {
            x: "0",
            y: "0",
            width: "80",
            height: "16",
            fill: "#B13359"
        }), l.jsx("rect", {
            x: "80",
            y: "0",
            width: "20",
            height: "16",
            fill: "#892442"
        }), l.jsx("rect", {
            x: "0",
            y: "16",
            width: "25",
            height: "16",
            fill: "#6B2035"
        }), l.jsx("rect", {
            x: "25",
            y: "16",
            width: "75",
            height: "16",
            fill: "#B13359"
        }), l.jsx("rect", {
            x: "0",
            y: "32",
            width: "15",
            height: "16",
            fill: "#490F1D"
        }), l.jsx("rect", {
            x: "15",
            y: "32",
            width: "50",
            height: "16",
            fill: "#6B2035"
        }), l.jsx("rect", {
            x: "65",
            y: "32",
            width: "20",
            height: "16",
            fill: "#B13359"
        }), l.jsx("rect", {
            x: "85",
            y: "32",
            width: "15",
            height: "16",
            fill: "#892442"
        }), l.jsx("rect", {
            x: "0",
            y: "48",
            width: "45",
            height: "16",
            fill: "#B13359"
        }), l.jsx("rect", {
            x: "45",
            y: "48",
            width: "55",
            height: "16",
            fill: "#6B2035"
        })]
    })
})
  , uh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 104 124",
    stroke: "#000",
    ...t,
    children: [l.jsx("g", {
        fill: "#c79a83",
        strokeWidth: "2",
        "data-svg-role": "bow-body",
        children: l.jsx("path", {
            d: "m14 3c2 16 12 21 31 29 17 10 19 15 11 30 8 15 6 20-11 30-19 8-29 13-31 29 15-16 27-21 49-27 11-12 13-18 6-32 7-14 5-20-6-32-22-6-34-11-49-27z"
        })
    }), l.jsxs("g", {
        strokeLinejoin: "round",
        strokeWidth: "2",
        "data-svg-role": "arrow",
        children: [l.jsx("rect", {
            x: "13",
            y: "60",
            width: "77",
            height: "4",
            rx: "2",
            fill: "#c79a83",
            "data-svg-role": "arrow-body"
        }), l.jsxs("g", {
            fill: "#fcca3d",
            "data-svg-role": "arrow-ends",
            children: [l.jsx("path", {
                d: "m2 55h14l5 7-5 7h-14l4-7z"
            }), l.jsx("path", {
                d: "m103 62-17 8-4-8 4-8z"
            })]
        })]
    }), l.jsx("path", {
        d: "m25 22v40 40l3-2v-38-38l-3-2z",
        fill: "#e0e0e0",
        strokeWidth: "1",
        "data-svg-role": "bow-string"
    })]
})
  , dh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 39 42",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M34.1667 25.3333V34.1333C34.1667 36.1868 34.1667 37.2137 33.767 37.998C33.4155 38.6879 32.8545 39.2489 32.1647 39.6003C31.3804 40 30.3535 40 28.3 40H10.7C8.64648 40 7.61971 40 6.83537 39.6003C6.14543 39.2489 5.5845 38.6879 5.23298 37.998C4.83333 37.2137 4.83333 36.1868 4.83333 34.1333V25.3333M14 19.8333H25M14.5238 27.1667H24.4762C28.3856 27.1667 30.3405 27.1667 31.8484 26.4405C33.3453 25.7196 34.553 24.512 35.2738 23.0151C36 21.5072 36 19.5524 36 15.6429C36 12.7107 36 11.2447 35.4553 10.1136C34.9147 8.99105 34.009 8.08528 32.8865 7.54467C31.7553 7 30.2893 7 27.3571 7H11.6429C8.71072 7 7.24466 7 6.11364 7.54467C4.99105 8.08528 4.08528 8.99105 3.54467 10.1136C3 11.2447 3 12.7107 3 15.6429C3 19.5524 3 21.5072 3.72622 23.0151C4.44705 24.512 5.65472 25.7196 7.15153 26.4405C8.65955 27.1667 10.6143 27.1667 14.5238 27.1667Z",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , hh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 23 49",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("path", {
        d: "m1.862 47.811 7e-5 1e-4c0.16762 0.2743 0.47008 0.4387 0.7922 0.4387h17.691c0.3221 0 0.6246-0.1642 0.7923-0.4387l1e-4 -1e-4 0.9743-1.5966c5e-4 -7e-4 9e-4 -0.0014 0.0014-0.0021 0.085-0.1344 0.1348-0.2928 0.1363-0.462v-38.489c0-0.33758-0.1374-0.65738-0.3154-0.93293-0.1296-0.20074-0.2874-0.38828-0.4485-0.55534l0.3004-0.29525c-2e-6 -2.4e-6 0-6.7e-6 0-1e-5 0.17-0.16701 0.267-0.39343 0.267-0.63159v-1.1271c0-0.50424-0.4212-0.89738-0.9216-0.89738h-9.9053l0.8814-0.33981c0.4694-0.18096 0.709-0.70299 0.5151-1.1706l-1e-4 -1.4e-4c-0.192-0.46221-0.728-0.6776-1.1938-0.49794v4e-6l-5.2088 2.0086h-4.3523c-0.50033 0-0.92156 0.39314-0.92156 0.89738v1.1271c0 0.23815 0.097042 0.46458 0.26695 0.63159l1e-5 1e-5 0.30041 0.29525c-0.1611 0.16706-0.31887 0.3546-0.4485 0.55534-0.17794 0.27555-0.31537 0.59534-0.31537 0.93293v38.487h-7e-6l1.4e-5 0.0019c0.001312 0.1696 0.051409 0.328 0.13629 0.4622 4.62e-4 8e-4 9.26e-4 0.0015 0.00139 0.0022zm18.545-40.482v37.516h-17.814v-37.516c0.00707-0.01246 0.01877-0.03147 0.0374-0.05759 0.03581-0.0502 0.08634-0.11174 0.1495-0.18092 0.1096-0.12005 0.24934-0.25446 0.39803-0.38068h16.644c0.1489 0.12632 0.2886 0.26075 0.3982 0.38078 0.0631 0.06916 0.1136 0.13067 0.1494 0.18084 0.0186 0.0261 0.0303 0.04511 0.0374 0.05756zm-0.6422-2.4139h-16.53l-0.30358-0.29835h3.4464c0.01214 2.6e-4 0.02438 2.6e-4 0.03655 0h13.654z",
        strokeLinejoin: "round",
        strokeWidth: "0.5"
    }), l.jsx("path", {
        d: "m17.663 23.011-11.559 17.572 4.0099-11.686 1.37e-4 -1.49e-4c0.12452-0.4115 0.05432-0.85969-0.18582-1.2051-0.23945-0.34438-0.61724-0.54365-1.0146-0.54365h-3.0241l4.1096-15.114h5.3368l-3.1597 9.1485-1.38e-4 1.48e-4c-0.1538 0.41582-0.10194 0.88445 0.13628 1.2503 0.2374 0.36482 0.62682 0.57765 1.0374 0.57765z",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        stroke: "var(--icon-color)",
        strokeWidth: "2"
    })]
})
  , fh = ({color: t="#666", ...e}={}) => l.jsxs("svg", {
    viewBox: "1 6 30 16",
    ...e,
    children: [l.jsx("path", {
        stroke: "rgba(100, 100, 100, 0.3)",
        d: "M12,6h3M11,7h3M11,8h2M9,9h4M9,10h3M7,11h4M7,12h3M5,13h4M25,13h3M5,14h3M25,14h3M3,15h4M25,15h3M3,16h3M19,16h2M2,17h3M19,17h2M2,18h2M19,18h4M1,19h3M19,19h4M1,20h2M21,20h3M1,21h2M21,21h3M1,22h2M21,22h3"
    }), l.jsx("path", {
        stroke: t === null ? "var(--icon-color)" : typeof t == "string" ? t : kl(Il(t)),
        d: "M15,6h10M14,7h13M13,8h14M13,9h16M12,10h17M11,11h19M10,12h20M9,13h16M28,13h3M8,14h17M28,14h3M7,15h18M28,15h3M6,16h13M21,16h10M5,17h14M21,17h10M4,18h13M23,18h8M4,19h13M23,19h8M3,20h13M24,20h7M3,21h13M24,21h7M3,22h13M24,22h7"
    })]
})
  , mh = ({left: t, right: e, wheel: n, selectFill: i="#000", ...s}={}) => l.jsx("svg", {
    viewBox: "0 0 20 30",
    fill: "#505050",
    ...s,
    children: l.jsxs("g", {
        children: [l.jsx("path", {
            d: "m0 10v10a10 10 0 0 0 10 10 10 10 0 0 0 10-10v-10h-8v0.5c0 1.108-0.892 2-2 2s-2-0.892-2-2v-0.5z",
            "data-svg-role": "mouse-bottom"
        }), l.jsx("path", {
            d: "m8.875 0.087891a10 10 0 0 0-8.7578 8.4121h7.8828v-0.5c0-0.68998 0.34644-1.297 0.875-1.6562z",
            "data-svg-role": "mouse-left",
            fill: t ? i : void 0
        }), l.jsx("path", {
            d: "m11.125 0.0625v6.2812c0.52856 0.35921 0.875 0.96627 0.875 1.6562v0.5h7.8848a10 10 0 0 0-8.7598-8.4375z",
            "data-svg-role": "mouse-right",
            fill: e ? i : void 0
        }), l.jsx("rect", {
            x: "8.75",
            y: "6.75",
            width: "2.5",
            height: "5",
            rx: "1.25",
            ry: "1.25",
            "data-svg-role": "mouse-wheel",
            fill: n ? i : void 0
        })]
    })
})
  , ph = t => l.jsx("svg", {
    viewBox: "0 0 16 18",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M5.19488 17.5594C6.15584 17.5656 7.10842 17.3864 7.99691 17.0324C8.7553 17.3822 9.58544 17.5623 10.4257 17.5594C11.2659 17.5564 12.0947 17.3705 12.8505 17.0155C13.6062 16.6605 14.2696 16.1454 14.7912 15.5085C15.3129 14.8717 15.6795 14.1294 15.8638 13.3367C16.0481 12.5441 16.0453 11.7216 15.8558 10.9301C15.6662 10.1386 15.2947 9.39863 14.7688 8.76502C14.2429 8.1314 13.5762 7.62046 12.8181 7.27012C12.06 6.91978 11.23 6.73904 10.3898 6.74133V3.90777C10.3898 2.02774 8.108 0.55957 5.19488 0.55957C2.28175 0.55957 0 2.02774 0 3.90777V14.2112C0 16.0912 2.28175 17.5594 5.19488 17.5594ZM10.3898 8.28677C11.1801 8.28677 11.9527 8.51337 12.6098 8.93791C13.267 9.36244 13.7792 9.96586 14.0816 10.6718C14.3841 11.3778 14.4632 12.1547 14.309 12.9041C14.1548 13.6536 13.7743 14.342 13.2154 14.8824C12.6565 15.4227 11.9445 15.7907 11.1693 15.9397C10.3942 16.0888 9.59071 16.0123 8.86053 15.7199C8.13034 15.4274 7.50625 14.9322 7.06715 14.2969C6.62806 13.6615 6.39369 12.9145 6.39369 12.1504C6.39496 11.1261 6.81638 10.144 7.56551 9.41975C8.31465 8.69545 9.33032 8.288 10.3898 8.28677ZM5.19488 2.10501C7.31439 2.10501 8.79133 3.05546 8.79133 3.90777C8.79133 4.76008 7.31439 5.7113 5.19488 5.7113C3.07537 5.7113 1.59842 4.76085 1.59842 3.90777C1.59842 3.05468 3.07537 2.10501 5.19488 2.10501ZM1.59842 6.34106C2.68524 6.9651 3.93113 7.28231 5.19488 7.25674C6.45862 7.28231 7.70451 6.9651 8.79133 6.34106V6.97315C7.56147 7.32906 6.49493 8.08179 5.76951 9.10586C5.5785 9.12208 5.38909 9.14526 5.19488 9.14526C3.07537 9.14526 1.59842 8.19482 1.59842 7.34251V6.34106ZM1.59842 9.7758C2.63091 10.3679 3.80899 10.681 5.00946 10.6822C4.86851 11.1597 4.79643 11.6538 4.79527 12.1504C4.79527 12.2879 4.80646 12.4231 4.81685 12.5584C2.90593 12.4517 1.59842 11.5762 1.59842 10.7765V9.7758ZM1.59842 13.2098C2.68294 13.8323 3.9259 14.1492 5.18688 14.1247C5.45641 14.7864 5.85806 15.3903 6.36892 15.9019C5.98209 15.9749 5.589 16.0124 5.19488 16.014C3.07537 16.014 1.59842 15.0635 1.59842 14.2112V13.2098Z"
    })
})
  , gh = t => l.jsx("svg", {
    viewBox: "0 0 15 19",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M14 3.55C14 4.95832 11.0899 6.1 7.5 6.1C3.91015 6.1 1 4.95832 1 3.55M14 3.55C14 2.14168 11.0899 1 7.5 1C3.91015 1 1 2.14168 1 3.55M14 3.55V15.45C14 16.8584 11.0899 18 7.5 18C3.91015 18 1 16.8584 1 15.45V3.55M14 7.51661C14 8.92498 11.0899 10.0666 7.5 10.0666C3.91015 10.0666 1 8.92498 1 7.51661M14 11.4805C14 12.8889 11.0899 14.0305 7.5 14.0305C3.91015 14.0305 1 12.8889 1 11.4805",
        strokeWidth: "var(--icon-stroke-width, 1.5)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , yh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 20",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M14 18V8M8 18V2M2 18V12",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , vh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 17 17",
    ...t,
    children: l.jsx("path", {
        d: "M12.2329 15.4936H4.7287C4.43355 15.4936 4.19497 15.7326 4.19497 16.0271C4.19497 16.3215 4.43355 16.5605 4.7287 16.5605H12.2329C12.5275 16.5605 12.7666 16.3215 12.7666 16.0271C12.7666 15.7326 12.528 15.4936 12.2329 15.4936ZM16.9281 2.05268C16.8773 1.80461 16.6585 1.62643 16.4055 1.62643H13.7929V1.09402C13.7929 0.799544 13.5538 0.560547 13.2592 0.560547H3.66018C3.36503 0.560547 3.12646 0.799544 3.12646 1.09402V1.62643H0.595C0.342015 1.62643 0.122654 1.80461 0.07195 2.05268C0.056472 2.1295 -0.301657 3.9988 0.737505 5.27274C1.33528 6.0052 2.24848 6.38823 3.44776 6.42238C4.13146 8.44211 5.85059 9.93798 7.92091 10.161V13.8772H6.32347C6.02832 13.8772 5.78974 14.1162 5.78974 14.4106C5.78974 14.7051 6.02832 14.9441 6.32347 14.9441H10.6381C10.9327 14.9441 11.1718 14.7051 11.1718 14.4106C11.1718 14.1162 10.9327 13.8772 10.6381 13.8772H8.98836V10.1615C11.0624 9.94278 12.7853 8.44745 13.4706 6.42558C14.7104 6.40744 15.6508 6.0212 16.2625 5.2722C17.3017 3.99826 16.9435 2.1295 16.9281 2.05214V2.05268ZM1.56851 4.60216C1.09617 4.02707 1.04813 3.17831 1.07268 2.69338H3.12699V4.4944C3.12699 4.78247 3.15368 5.06415 3.19264 5.34102C2.46411 5.27327 1.91704 5.02734 1.56851 4.60216ZM12.7255 4.4944C12.7255 7.04654 10.8121 9.12336 8.4605 9.12336C6.10784 9.12336 4.19391 7.04654 4.19391 4.4944V1.6275H12.726L12.7255 4.4944ZM15.432 4.60216C15.0707 5.04281 14.4975 5.29354 13.7262 5.35009C13.7663 5.07055 13.7929 4.78621 13.7929 4.4944V2.69338H15.9278C15.9519 3.17884 15.9044 4.02707 15.4315 4.60216H15.432Z",
        fill: "var(--icon-color)"
    })
})
  , xh = ({muted: t=!1, ...e}={}) => l.jsx("svg", {
    viewBox: "0 0 20 20",
    fill: "var(--icon-color)",
    ...e,
    children: t ? l.jsx("path", {
        d: "M 18.908203 4.2050781 A 0.80000001 0.80000001 0 0 0 18.611328 4.3007812 L 16.097656 5.6972656 C 15.853937 5.3516155 15.582273 5.0237742 15.279297 4.7207031 A 0.80000001 0.80000001 0 0 0 14.146484 4.7207031 A 0.80000001 0.80000001 0 0 0 14.146484 5.8535156 C 14.343428 6.0505203 14.524154 6.2603365 14.689453 6.4804688 L 13.158203 7.3300781 C 13.083925 7.2421097 13.007802 7.1562661 12.925781 7.0742188 A 0.80000001 0.80000001 0 0 0 12.359375 6.8398438 A 0.80000001 0.80000001 0 0 0 11.794922 7.0742188 A 0.80000001 0.80000001 0 0 0 11.736328 8.1191406 L 10.132812 9.0117188 L 10.132812 5.3339844 A 0.80008001 0.80008001 0 0 0 9.6796875 4.6132812 A 0.80008001 0.80008001 0 0 0 8.8339844 4.7089844 L 5.71875 7.2011719 L 3.3320312 7.2011719 A 0.80008001 0.80008001 0 0 0 2.5332031 8 L 2.5332031 12 A 0.80008001 0.80008001 0 0 0 3.3164062 12.796875 L 0.61132812 14.300781 A 0.80000001 0.80000001 0 0 0 0.30078125 15.388672 A 0.80000001 0.80000001 0 0 0 1.3886719 15.699219 L 6.0820312 13.091797 L 8.8339844 15.291016 A 0.80008001 0.80008001 0 0 0 10.132812 14.666016 L 10.132812 10.841797 L 12.490234 9.53125 C 12.51877 9.6837275 12.535156 9.8386997 12.535156 9.9960938 C 12.535156 10.66818 12.268096 11.31183 11.792969 11.787109 A 0.80000001 0.80000001 0 0 0 11.794922 12.919922 A 0.80000001 0.80000001 0 0 0 12.925781 12.919922 C 13.700452 12.145003 14.134766 11.091766 14.134766 9.9960938 C 14.134766 9.5615533 14.066312 9.134622 13.935547 8.7285156 L 15.464844 7.8789062 C 15.725339 8.5491003 15.865234 9.2666626 15.865234 10 C 15.865234 11.555946 15.246529 13.04804 14.146484 14.148438 A 0.80000001 0.80000001 0 0 0 14.146484 15.279297 A 0.80000001 0.80000001 0 0 0 15.279297 15.279297 C 16.678849 13.879296 17.464844 11.97959 17.464844 10 C 17.464844 8.9926316 17.259356 8.0063813 16.875 7.0957031 L 19.388672 5.6992188 A 0.80000001 0.80000001 0 0 0 19.699219 4.6113281 A 0.80000001 0.80000001 0 0 0 18.908203 4.2050781 z M 8.5332031 6.9980469 L 8.5332031 9.9003906 L 6.1464844 11.226562 A 0.80008001 0.80008001 0 0 0 6 11.201172 L 4.1328125 11.201172 L 4.1328125 8.8007812 L 6 8.8007812 A 0.80008001 0.80008001 0 0 0 6.5 8.625 L 8.5332031 6.9980469 z M 8.5332031 11.730469 L 8.5332031 13.003906 L 7.59375 12.251953 L 8.5332031 11.730469 z"
    }) : l.jsx("path", {
        d: "M 9.6796875,4.6132812 A 0.80008001,0.80008001 0 0 0 8.8339844,4.7089844 L 5.71875,7.2011719 H 3.3320313 A 0.80008001,0.80008001 0 0 0 2.5332031,8 v 4 a 0.80008001,0.80008001 0 0 0 0.7988282,0.800781 H 5.71875 l 3.1152344,2.490235 a 0.80008001,0.80008001 0 0 0 1.2988286,-0.625 V 5.3339844 A 0.80008001,0.80008001 0 0 0 9.6796875,4.6132812 Z m 4.4667965,0.1074219 a 0.80000001,0.80000001 0 0 0 0,1.1328125 c 1.100043,1.1003856 1.71875,2.5905496 1.71875,4.1464844 0,1.555946 -0.618705,3.04804 -1.71875,4.148438 a 0.80000001,0.80000001 0 0 0 0,1.130859 0.80000001,0.80000001 0 0 0 1.132813,0 C 16.678849,13.879296 17.464844,11.97959 17.464844,10 c 0,-1.9795816 -0.785992,-3.879305 -2.185547,-5.2792969 a 0.80000001,0.80000001 0 0 0 -1.132813,0 z m -1.787109,2.1191406 a 0.80000001,0.80000001 0 0 0 -0.564453,0.234375 0.80000001,0.80000001 0 0 0 -0.002,1.1308594 c 0.47513,0.4752826 0.742187,1.1189298 0.742187,1.7910157 0,0.6720862 -0.26706,1.3157362 -0.742187,1.7910152 a 0.80000001,0.80000001 0 0 0 0.002,1.132813 0.80000001,0.80000001 0 0 0 1.130859,0 c 0.774671,-0.774919 1.208985,-1.828156 1.208985,-2.9238282 0,-1.0956724 -0.434317,-2.1469589 -1.208985,-2.9218751 A 0.80000001,0.80000001 0 0 0 12.359375,6.8398437 Z M 8.5332031,6.9980469 V 13.003906 L 6.5,11.375 A 0.80008001,0.80008001 0 0 0 6,11.201172 H 4.1328125 V 8.8007813 H 6 A 0.80008001,0.80008001 0 0 0 6.5,8.625 Z"
    })
})
  , Ch = ({muted: t=!1, ...e}={}) => l.jsx("svg", {
    viewBox: "0 0 20 20",
    fill: "var(--icon-color)",
    ...e,
    children: t ? l.jsx("path", {
        d: "M 18.605469 3.2070312 A 0.80000001 0.80000001 0 0 0 18.013672 3.3652344 L 16.400391 4.5996094 L 16.400391 4 A 0.80008001 0.80008001 0 0 0 15.46875 3.2109375 L 7.46875 4.5449219 A 0.80008001 0.80008001 0 0 0 6.7988281 5.3339844 L 6.7988281 11.472656 C 6.4342291 11.297618 6.0281437 11.199219 5.5996094 11.199219 C 4.0626893 11.199219 2.7988281 12.46308 2.7988281 14 C 2.7988281 14.309526 2.8528361 14.607436 2.9472656 14.886719 L 1.0136719 16.365234 A 0.80000001 0.80000001 0 0 0 0.86523438 17.486328 A 0.80000001 0.80000001 0 0 0 1.9863281 17.634766 L 3.8710938 16.193359 C 4.3488348 16.571633 4.9485535 16.800781 5.5996094 16.800781 C 7.1365295 16.800781 8.4003906 15.53692 8.4003906 14 L 8.4003906 12.730469 L 14.798828 7.8378906 L 14.798828 10.138672 C 14.434229 9.9636336 14.028143 9.8652344 13.599609 9.8652344 C 12.062689 9.8652344 10.798828 11.129095 10.798828 12.666016 C 10.798828 14.202936 12.062689 15.466797 13.599609 15.466797 C 15.136529 15.466797 16.400391 14.202936 16.400391 12.666016 L 16.400391 6.6113281 L 18.986328 4.6347656 A 0.80000001 0.80000001 0 0 0 19.134766 3.5136719 A 0.80000001 0.80000001 0 0 0 18.605469 3.2070312 z M 14.798828 4.9453125 L 14.798828 5.8242188 L 8.4003906 10.716797 L 8.4003906 6.0117188 L 14.798828 4.9453125 z M 13.599609 11.466797 C 14.271826 11.466797 14.798828 11.993799 14.798828 12.666016 C 14.798828 13.338232 14.271826 13.865234 13.599609 13.865234 C 12.927392 13.865234 12.400391 13.338232 12.400391 12.666016 C 12.400391 11.993799 12.927392 11.466797 13.599609 11.466797 z M 5.5996094 12.800781 C 5.6232516 12.800781 5.6466555 12.8034 5.6699219 12.804688 L 4.4238281 13.755859 C 4.5338901 13.204655 5.0114198 12.800781 5.5996094 12.800781 z M 6.796875 13.957031 C 6.7973577 13.971335 6.7988281 13.985559 6.7988281 14 C 6.7988281 14.672217 6.2718261 15.199219 5.5996094 15.199219 C 5.4735687 15.199219 5.3535479 15.181023 5.2402344 15.146484 L 6.796875 13.957031 z"
    }) : l.jsx("path", {
        d: "M 15.468922,3.2108906 7.4689218,4.544875 A 0.80008001,0.80008001 0 0 0 6.799,5.3339375 V 11.472609 C 6.434401,11.297571 6.0283155,11.199172 5.5997812,11.199172 4.0628611,11.199172 2.799,12.463033 2.799,13.999953 c 0,1.53692 1.2638611,2.800781 2.8007812,2.800781 1.5369201,0 2.8007812,-1.263861 2.8007812,-2.800781 V 6.0116719 L 14.799,4.9452656 V 10.138625 C 14.434401,9.9635867 14.028315,9.8651875 13.599781,9.8651875 c -1.53692,0 -2.800781,1.2638605 -2.800781,2.8007815 0,1.53692 1.263861,2.800781 2.800781,2.800781 1.53692,0 2.800781,-1.263861 2.800781,-2.800781 V 3.9999531 A 0.80008001,0.80008001 0 0 0 15.468922,3.2108906 Z M 13.599781,11.46675 c 0.672217,0 1.199219,0.527002 1.199219,1.199219 0,0.672216 -0.527002,1.199218 -1.199219,1.199218 -0.672217,0 -1.199219,-0.527002 -1.199219,-1.199218 0,-0.672217 0.527002,-1.199219 1.199219,-1.199219 z m -7.9999998,1.333984 c 0.6722167,0 1.1992187,0.527002 1.1992188,1.199219 0,0.672217 -0.5270021,1.199219 -1.1992188,1.199219 -0.6722167,0 -1.1992187,-0.527002 -1.1992188,-1.199219 0,-0.672217 0.5270021,-1.199219 1.1992188,-1.199219 z"
    })
})
  , bh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 14 14",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M6.91667 3.66667V6.91667L9.08333 8M12.3333 6.91667C12.3333 9.90821 9.90821 12.3333 6.91667 12.3333C3.92512 12.3333 1.5 9.90821 1.5 6.91667C1.5 3.92512 3.92512 1.5 6.91667 1.5C9.90821 1.5 12.3333 3.92512 12.3333 6.91667Z",
        stroke: "var(--icon-color)",
        strokeWidth: "var(--icon-stroke-width, 2)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , wh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 18 19",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M5.84424 18.9998C6.92532 19.0067 7.99697 18.8065 8.99653 18.4108C9.84971 18.8017 10.7836 19.003 11.7289 18.9998C12.6742 18.9965 13.6065 18.7887 14.4568 18.3919C15.307 17.9951 16.0533 17.4194 16.6401 16.7077C17.227 15.9959 17.6394 15.1662 17.8467 14.2804C18.0541 13.3945 18.051 12.4752 17.8378 11.5906C17.6245 10.706 17.2065 9.87895 16.6149 9.1708C16.0233 8.46264 15.2732 7.89158 14.4204 7.50002C13.5675 7.10847 12.6338 6.90647 11.6885 6.90903V3.7421C11.6885 1.64089 9.1215 0 5.84424 0C2.56697 0 0 1.64089 0 3.7421V15.2577C0 17.3589 2.56697 18.9998 5.84424 18.9998ZM11.6885 8.63628C12.5776 8.63628 13.4468 8.88954 14.1861 9.36402C14.9254 9.83851 15.5016 10.5129 15.8418 11.3019C16.1821 12.091 16.2711 12.9592 16.0977 13.7969C15.9242 14.6345 15.496 15.4039 14.8673 16.0078C14.2386 16.6117 13.4376 17.023 12.5655 17.1896C11.6935 17.3562 10.7896 17.2707 9.96809 16.9439C9.14664 16.617 8.44453 16.0636 7.95055 15.3535C7.45657 14.6433 7.19291 13.8085 7.19291 12.9544C7.19433 11.8096 7.66843 10.7121 8.5112 9.90255C9.35398 9.09304 10.4966 8.63766 11.6885 8.63628ZM5.84424 1.72726C8.22868 1.72726 9.89025 2.78952 9.89025 3.7421C9.89025 4.69468 8.22868 5.75781 5.84424 5.75781C3.45979 5.75781 1.79823 4.69555 1.79823 3.7421C1.79823 2.78866 3.45979 1.72726 5.84424 1.72726ZM1.79823 6.46167C3.0209 7.15912 4.42252 7.51365 5.84424 7.48507C7.26595 7.51365 8.66757 7.15912 9.89025 6.46167V7.16812C8.50665 7.56591 7.3068 8.40719 6.4907 9.55173C6.27581 9.56987 6.06272 9.59578 5.84424 9.59578C3.45979 9.59578 1.79823 8.53351 1.79823 7.58093V6.46167ZM1.79823 10.3005C2.95978 10.9623 4.28512 11.3122 5.63564 11.3135C5.47707 11.8472 5.39599 12.3994 5.39468 12.9544C5.39468 13.1082 5.40727 13.2593 5.41896 13.4104C3.26918 13.2912 1.79823 12.3128 1.79823 11.4189V10.3005ZM1.79823 14.1385C3.01831 14.8342 4.41663 15.1884 5.83525 15.161C6.13846 15.9005 6.59032 16.5755 7.16503 17.1473C6.72985 17.2289 6.28762 17.2708 5.84424 17.2726C3.45979 17.2726 1.79823 16.2103 1.79823 15.2577V14.1385Z"
    })
})
  , Sh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M8 2V14M2 8H14",
        stroke: "var(--icon-color)",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , _h = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: [l.jsx("circle", {
        cx: "8",
        cy: "8",
        r: "6.667",
        stroke: "var(--icon-color)",
        strokeWidth: "var(--icon-stroke-width, 1.6)"
    }), l.jsx("path", {
        d: "M8 5.333V10.667M5.333 8H10.667",
        stroke: "var(--icon-color)",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })]
})
  , kh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 19 18",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M1.91663 9.22135L17.0833 9.22135M17.0833 9.22135L9.49996 16.8047M17.0833 9.22135L9.49996 1.63802",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , Ih = ({strength: t=3, grey: e="#AFB1B1", ...n}={}) => l.jsxs("svg", {
    viewBox: "0 0 20 16",
    fill: "var(--icon-color)",
    ...n,
    children: [l.jsx("path", {
        d: "M9.92871 10.2227C9.28906 10.2227 8.64941 10.4668 8.16113 10.9551C7.18457 11.9316 7.18457 13.5137 8.16113 14.4902C9.1377 15.4668 10.7197 15.4668 11.6963 14.4902C12.6729 13.5137 12.6729 11.9316 11.6963 10.9551C11.208 10.4668 10.5684 10.2227 9.92871 10.2227Z",
        fill: t >= 1 ? void 0 : e ?? void 0
    }), l.jsx("path", {
        d: "M9.96103 5.20724C7.99784 5.22181 6.04929 5.98906 4.70143 7.46042L4.07633 8.14511C3.60751 8.65013 3.64169 9.44166 4.15447 9.90298C4.66724 10.3643 5.45838 10.3254 5.92232 9.81557L6.54741 9.13573C8.14434 7.39243 11.7484 7.27589 13.4528 9.13573L14.0779 9.81557C14.5418 10.3254 15.333 10.3643 15.8457 9.90298C16.3536 9.44166 16.3927 8.65013 15.9239 8.14511L15.2988 7.46042C13.8923 5.93078 11.9193 5.19267 9.96103 5.20724Z",
        fill: t >= 2 ? void 0 : e ?? void 0
    }), l.jsx("path", {
        d: "M10 0.222656C6.72801 0.222656 3.45113 1.38323 1.00446 3.7141L0.384249 4.31139C-0.113875 4.78242 -0.128525 5.56909 0.345181 6.0644C0.82377 6.55971 1.61491 6.57428 2.11303 6.10325L2.73813 5.51082C6.59615 1.83484 13.4038 1.83484 17.2619 5.51082L17.887 6.10325C18.3851 6.57428 19.1762 6.55971 19.6548 6.0644C20.1285 5.56909 20.1139 4.78242 19.6158 4.31139L18.9955 3.7141C16.5489 1.38323 13.272 0.222656 10 0.222656Z",
        fill: t >= 3 ? void 0 : e ?? void 0
    })]
})
  , Mh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 21 20",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M18.8307 9.72103C18.8307 14.3234 15.0998 18.0544 10.4974 18.0544M18.8307 9.72103C18.8307 5.11866 15.0998 1.3877 10.4974 1.3877M18.8307 9.72103H2.16406M10.4974 18.0544C5.89502 18.0544 2.16406 14.3234 2.16406 9.72103M10.4974 18.0544C12.5818 15.7724 13.7664 12.811 13.8307 9.72103C13.7664 6.63106 12.5818 3.66966 10.4974 1.3877M10.4974 18.0544C8.413 15.7724 7.22844 12.811 7.16406 9.72103C7.22844 6.63106 8.413 3.66966 10.4974 1.3877M2.16406 9.72103C2.16406 5.11866 5.89502 1.3877 10.4974 1.3877",
        strokeWidth: "2.5"
    })
})
  , Rh = ({reflectionFillOpacity: t=.5, fill: e="#275A1B", ...n}={}) => l.jsxs("svg", {
    viewBox: "0 0 253.29 231.41",
    ...n,
    fill: e ?? "var(--icon-color)",
    children: [l.jsx("path", {
        d: "m249.66 149.19-41.3-121.83c-0.748-2.207-2.154-4.133-4.029-5.517-1.848-1.364-4.115-2.756-6.693-4.029-2.746-11.074-9.532-18.648-25.041-17.738-17.145 1.005-22.494 11.061-23.109 24.221-1.141 1.109-2.269 2.295-3.374 3.598-1.513 1.783-2.442 3.987-2.662 6.315l-0.706 7.495h-32.193l-0.706-7.495c-0.219-2.328-1.149-4.532-2.662-6.315-1.105-1.303-2.233-2.488-3.374-3.598-0.616-13.16-5.964-23.216-23.109-24.221-15.509-0.91-22.296 6.664-25.042 17.738-2.578 1.273-4.845 2.665-6.693 4.029-1.875 1.385-3.28 3.31-4.028 5.517l-41.3 121.83c-0.096 0.283-0.169 0.567-0.242 0.852-2.189 6.295-3.395 13.047-3.395 20.079 0 33.797 27.497 61.293 61.295 61.293 33.734 0 61.187-27.396 61.287-61.107 1e-3 -0.043 4e-3 -0.086 4e-3 -0.129 0-0.018 1e-3 -0.038 1e-3 -0.057 0-3.661-0.341-7.243-0.96-10.729l-2.444-25.966h14.927l-2.444 25.966c-0.619 3.486-0.96 7.068-0.96 10.729 0 0.018 1e-3 0.038 1e-3 0.057 0 0.043 3e-3 0.086 3e-3 0.129 0.1 33.712 27.553 61.107 61.287 61.107 33.798 0 61.295-27.496 61.295-61.293 0-7.032-1.206-13.784-3.395-20.079-0.07-0.285-0.144-0.569-0.239-0.852zm-190.01 59.401c-21.247 0-38.471-17.224-38.471-38.472 0-21.246 17.224-38.471 38.471-38.471s38.471 17.225 38.471 38.471c0 21.248-17.224 38.472-38.471 38.472zm134 0c-21.247 0-38.471-17.224-38.471-38.472 0-21.246 17.224-38.471 38.471-38.471s38.471 17.225 38.471 38.471c0 21.248-17.224 38.472-38.471 38.472z"
    }), l.jsx("path", {
        opacity: t,
        d: "m194.8 190.55c-3.902-0.663-8.032-2.081-11.169-4.571-0.907-0.721-1.797-1.422-2.651-2.204-0.056-0.052-0.463-0.44-0.498-0.459-3.762-4.126-6.348-8.796-7.298-14.395-1.248-7.358 0.997-14.173 4.487-20.546-4.45 3.047-7.693 7.088-9.491 12.209-3.759 10.707 0.057 22.42 8.395 29.733 5.014 4.771 12.809 7.036 19.586 6.622 7.858-0.479 14.761-4.439 19.187-10.887-6.373 3.498-13.184 5.749-20.548 4.498z"
    }), l.jsx("path", {
        opacity: t,
        d: "m64.928 190.81c-6.651-0.497-12.86-3.644-17.336-8.542-3.812-4.172-6.161-9.752-6.579-15.385-0.5-6.737 1.555-12.686 4.741-18.504-2.37 1.623-4.498 3.445-6.185 5.799-8.006 11.178-5.386 27.213 4.899 35.982 5.498 4.689 12.52 7.227 19.777 6.783 7.858-0.479 14.761-4.439 19.187-10.887-5.814 3.192-11.763 5.258-18.504 4.754z"
    })]
})
  , Ah = (t={}) => l.jsx("svg", {
    viewBox: "0 0 30 35",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M2.5 5.43401C2.5 3.07322 5.10067 1.63746 7.09844 2.89531L26.4679 15.0909C28.3367 16.2675 28.3367 18.9917 26.468 20.1683L7.09844 32.3639C5.10067 33.6218 2.5 32.186 2.5 29.8252V5.43401Z",
        fill: "var(--icon-color)",
        stroke: "var(--icon-color)",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , jh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M6 14.6666V7.99998H10V14.6666M2 5.99998L8 1.33331L14 5.99998V13.3333C14 13.6869 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6666 12.6667 14.6666H3.33333C2.97971 14.6666 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.6869 2 13.3333V5.99998Z",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
    })
})
  , Ph = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M12.6668 7.99992H3.3335M3.3335 7.99992L8.00016 12.6666M3.3335 7.99992L8.00016 3.33325",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
    })
})
  , Qd = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M3.33331 7.99992H12.6666M12.6666 7.99992L7.99998 3.33325M12.6666 7.99992L7.99998 12.6666",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none"
    })
})
  , Eh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 32 32",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M11.9562 9.46762V14.401L14.3562 14.601C19.2895 15.0676 23.0895 17.0676 25.4895 19.601C22.7562 18.6676 19.2895 18.201 14.7562 18.001L11.9562 17.8676V22.601L5.42287 16.0676L11.9562 9.46762ZM13.8895 4.00095C13.7851 3.99506 13.681 4.01657 13.5874 4.06334C13.4938 4.11012 13.4141 4.18054 13.3562 4.26762L2.35621 15.401C2.19222 15.5843 2.10156 15.8216 2.10156 16.0676C2.10156 16.3136 2.19222 16.5509 2.35621 16.7343L13.3562 27.7343C13.4141 27.8214 13.4938 27.8918 13.5874 27.9386C13.681 27.9853 13.7851 28.0068 13.8895 28.001C13.9947 27.9926 14.0972 27.9634 14.1911 27.9153C14.285 27.8671 14.3684 27.8008 14.4366 27.7202C14.5047 27.6397 14.5563 27.5464 14.5883 27.4459C14.6202 27.3453 14.632 27.2394 14.6229 27.1343V20.6676C25.0895 21.1343 28.6895 23.201 30.2895 26.801C30.5562 27.3343 30.8229 27.5343 31.0229 27.5343C31.2229 27.5343 31.4229 27.2676 31.4229 26.8676C31.2895 19.8676 24.7562 12.9343 14.6229 11.9343V4.86762C14.632 4.76249 14.6202 4.65659 14.5883 4.55603C14.5563 4.45546 14.5047 4.36222 14.4366 4.28166C14.3684 4.20111 14.285 4.13483 14.1911 4.08665C14.0972 4.03848 13.9947 4.00935 13.8895 4.00095Z"
    })
})
  , Lh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 8 12",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M4 0.765625L0 5.34824H2.99941V11.7656H5.00059V5.34824H8L4 0.765625Z"
    })
})
  , Th = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    ...t,
    children: l.jsx("path", {
        d: "M4 6L8 10L12 6",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        stroke: "var(--icon-color)"
    })
})
  , Dh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    ...t,
    children: l.jsx("path", {
        d: "M12 10L8 6L4 10",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        stroke: "var(--icon-color)"
    })
})
  , Fh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    ...t,
    children: l.jsx("path", {
        d: "M10 12L6 8L10 4",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        stroke: "var(--icon-color)"
    })
})
  , Nh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    ...t,
    children: l.jsx("path", {
        d: "M6 12L10 8L6 4",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        stroke: "var(--icon-color)"
    })
})
  , Xd = ({r: t=8, ...e}={}) => l.jsxs("svg", {
    viewBox: `-${t} -${t} ${t * 2} ${t * 2}`,
    fill: "none",
    ...e,
    children: [l.jsx("circle", {
        cx: "0",
        cy: "0",
        r: t,
        fill: "var(--icon-color, #57C771)"
    }), l.jsx("path", {
        d: "m5.33 -2.733 -7.333 7.333 -3.333 -3.333",
        stroke: "var(--icon-color-secondary, #FFF)",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })]
})
  , Bh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M13.3333 4L5.99999 11.3333L2.66666 8",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , Jd = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: [l.jsx("defs", {
        children: l.jsx("clipPath", {
            id: "clip0_68_16049",
            children: l.jsx("rect", {
                width: "16",
                height: "16",
                fill: "white"
            })
        })
    }), l.jsx("g", {
        clipPath: "url(#clip0_68_16049)",
        children: l.jsx("path", {
            d: "M15.3334 4L9.00008 10.3333L5.66675 7L0.666748 12M15.3334 4H11.3334M15.3334 4L15.3334 8",
            strokeWidth: "var(--icon-stroke-width, 1.6)",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    })]
})
  , zh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: [l.jsx("defs", {
        children: l.jsx("clipPath", {
            id: "clip0_68_15637",
            children: l.jsx("rect", {
                width: "16",
                height: "16",
                fill: "white"
            })
        })
    }), l.jsx("g", {
        clipPath: "url(#clip0_68_15637)",
        children: l.jsx("path", {
            d: "M14.6668 7.38662V7.99995C14.666 9.43756 14.2005 10.8364 13.3397 11.9878C12.4789 13.1393 11.269 13.9816 9.8904 14.3892C8.51178 14.7968 7.03834 14.7479 5.68981 14.2497C4.34128 13.7515 3.18993 12.8307 2.40747 11.6247C1.62501 10.4186 1.25336 8.99199 1.34795 7.55749C1.44254 6.12299 1.9983 4.7575 2.93235 3.66467C3.8664 2.57183 5.12869 1.81021 6.53096 1.49338C7.93323 1.17656 9.40034 1.32151 10.7135 1.90662M14.6668 2.66662L8.00017 9.33995L6.00017 7.33995",
            strokeWidth: "var(--icon-stroke-width, 1.6)",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    })]
})
  , Oh = t => {
    const e = Be.c(5);
    let n;
    e[0] !== t ? (n = t === void 0 ? {} : t,
    e[0] = t,
    e[1] = n) : n = e[1];
    const i = n;
    let s;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (s = l.jsx("g", {
        children: l.jsx("path", {
            id: "Icon",
            d: "M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5M18.6667 19.8333L24.5 14M24.5 14L18.6667 8.16667M24.5 14H10.5",
            strokeWidth: "var(--icon-stroke-width, 3)",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }),
    e[2] = s) : s = e[2];
    let r;
    return e[3] !== i ? (r = l.jsx("svg", {
        viewBox: "0 0 28 28",
        fill: "none",
        stroke: "var(--icon-color)",
        ...i,
        children: s
    }),
    e[3] = i,
    e[4] = r) : r = e[4],
    r
}
  , $h = (t={}) => l.jsx("svg", {
    viewBox: "0 0 37 37",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M13.4378 37L12.7015 31.08C12.3027 30.9258 11.9268 30.7408 11.574 30.525C11.2212 30.3092 10.876 30.0779 10.5386 29.8313L5.06219 32.1437L0 23.3563L4.74005 19.7488C4.70937 19.5329 4.69403 19.3248 4.69403 19.1244V17.8756C4.69403 17.6752 4.70937 17.4671 4.74005 17.2512L0 13.6438L5.06219 4.85625L10.5386 7.16875C10.876 6.92208 11.2289 6.69083 11.597 6.475C11.9652 6.25917 12.3333 6.07417 12.7015 5.92L13.4378 0H23.5622L24.2985 5.92C24.6973 6.07417 25.0732 6.25917 25.426 6.475C25.7788 6.69083 26.124 6.92208 26.4614 7.16875L31.9378 4.85625L37 13.6438L32.2599 17.2512C32.2906 17.4671 32.306 17.6752 32.306 17.8756V19.1244C32.306 19.3248 32.2753 19.5329 32.2139 19.7488L36.954 23.3563L31.8918 32.1437L26.4614 29.8313C26.124 30.0779 25.7711 30.3092 25.403 30.525C25.0348 30.7408 24.6667 30.9258 24.2985 31.08L23.5622 37H13.4378ZM18.592 24.975C20.3715 24.975 21.8901 24.3429 23.148 23.0788C24.4059 21.8146 25.0348 20.2883 25.0348 18.5C25.0348 16.7117 24.4059 15.1854 23.148 13.9213C21.8901 12.6571 20.3715 12.025 18.592 12.025C16.7819 12.025 15.2556 12.6571 14.0131 13.9213C12.7705 15.1854 12.1493 16.7117 12.1493 18.5C12.1493 20.2883 12.7705 21.8146 14.0131 23.0788C15.2556 24.3429 16.7819 24.975 18.592 24.975Z"
    })
})
  , Uh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M8.00016 4.66667C8.00016 3.95942 7.71921 3.28115 7.21911 2.78105C6.71902 2.28095 6.04074 2 5.3335 2H1.3335V12H6.00016C6.5306 12 7.0393 12.2107 7.41438 12.5858C7.78945 12.9609 8.00016 13.4696 8.00016 14M8.00016 4.66667V14M8.00016 4.66667C8.00016 3.95942 8.28111 3.28115 8.78121 2.78105C9.28131 2.28095 9.95959 2 10.6668 2H14.6668V12H10.0002C9.46973 12 8.96102 12.2107 8.58595 12.5858C8.21088 12.9609 8.00016 13.4696 8.00016 14",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , Wh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M7.99992 1.33325L10.0599 5.50659L14.6666 6.17992L11.3333 9.42659L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66659 9.42659L1.33325 6.17992L5.93992 5.50659L7.99992 1.33325Z",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , Hh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "var(--icon-color)"
    })
})
  , Gh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 22 23",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("path", {
        d: "M0.507594 13.1134C0.802003 13.3632 1.09732 13.6681 1.34685 13.9511C1.00337 14.3687 0.649836 14.767 0.287212 15.1055C0.13708 15.2475 -0.00688477 15.3699 -0.146065 15.4873C-0.313204 15.2841 -0.511602 15.0538 -0.666568 14.9007C-0.885806 14.6853 -1.13099 14.4704 -1.32343 14.3065C-1.20238 14.1716 -1.08149 14.0268 -0.965645 13.8708C-0.666211 13.4652 -0.380909 13.0494 -0.110251 12.6241C0.0703394 12.7573 0.278999 12.921 0.507594 13.1134Z"
    }), l.jsx("path", {
        d: "M4.80515 7.75473C3.82717 9.04242 4.12672 10.0025 4.55935 10.4722C4.17515 10.5823 3.69275 11.0347 3.30747 11.4757C3.11625 11.1886 2.874 10.8552 2.61133 10.5627C2.41968 10.3486 1.99625 9.94521 1.70306 9.67108C2.2037 8.94595 2.77823 8.27636 3.59816 7.63678C4.13946 7.21589 4.91712 6.86733 5.88265 6.99737C5.55018 7.09692 5.08931 7.37863 4.80515 7.75473Z"
    }), l.jsx("path", {
        d: "M4.69177 18.5815C4.18938 19.1007 4.01692 19.5625 3.97391 19.9071C3.59684 18.9677 3.47692 17.8847 3.6184 16.7194C3.65556 16.4139 3.71218 16.1081 3.77864 15.8085C4.04818 15.6289 4.52276 15.3924 5.13322 15.431C5.8021 15.4719 6.49581 16.0378 6.84003 16.3581C6.74949 16.9695 6.75299 17.5792 6.92156 18.1668C6.50546 18.0131 5.48762 17.759 4.69177 18.5815Z"
    }), l.jsx("path", {
        d: "M8.20138 12.2976C7.941 11.9467 7.41443 11.3861 6.58378 11.1727C6.0251 11.0279 5.54685 11.2385 5.27072 11.4117C5.36727 10.969 5.33293 10.6549 5.06951 10.5149C5.11188 10.5272 5.02698 10.4929 5.06951 10.5149C4.8196 10.0114 4.54678 9.19846 5.3177 8.14124C5.79197 7.48953 6.49446 7.30439 7.08615 7.38546C8.57564 8.21399 9.02888 9.74406 8.20138 12.2976Z"
    }), l.jsx("path", {
        d: "M5.40459 14.8156C4.74655 14.7437 4.26772 14.9187 3.97681 15.0808C4.31638 13.9285 4.79054 12.8746 5.07401 12.0606C5.35822 11.8856 5.86236 11.6713 6.47324 11.8348C7.23888 12.0395 7.74195 12.6507 7.958 12.9683C7.9253 13.0516 7.89585 13.1348 7.86161 13.2229C7.55454 13.9822 7.20488 14.8151 6.99009 15.6636C6.6741 15.3834 6.03664 14.8846 5.40459 14.8156Z"
    }), l.jsx("path", {
        d: "M1.01399 12.7903C0.758924 12.5658 0.451917 12.339 0.18446 12.1504C0.625183 11.4311 0.998708 10.7681 1.39238 10.1469C1.65739 10.3842 2.00672 10.719 2.29124 11.0581C2.51457 11.3253 2.73274 11.6737 2.89972 11.9661C2.52301 12.4346 2.12944 12.9633 1.71791 13.4842C1.51313 13.2605 1.27395 13.0163 1.01399 12.7903Z"
    }), l.jsx("path", {
        d: "M5.08015 19.0348C5.75845 18.4624 6.71787 18.6153 7.23125 18.7674C7.51285 19.126 7.94234 19.4044 8.45163 19.5047C8.25488 19.7707 7.87396 20.3787 7.87145 21.1167C7.86836 22.1158 8.44149 22.8459 8.85673 23.2446C8.72356 23.2338 8.59029 23.2165 8.45531 23.1944C6.54254 22.8627 5.19159 21.9767 4.40087 20.736C4.3803 20.2725 4.46426 19.5559 5.08015 19.0348Z"
    }), l.jsx("path", {
        d: "M8.68586 21.1494C8.61761 20.5472 8.98093 19.8551 9.17992 19.5275C9.69777 19.4573 10.2532 19.2032 10.7929 18.6883C10.8852 18.9722 11.1303 19.484 11.7829 20.1155C12.4306 20.7422 13.1426 21.0353 13.5484 21.16C12.5051 22.2185 11.2706 22.9995 9.93595 23.2048C9.55079 22.8608 8.79005 22.0641 8.68586 21.1494Z"
    }), l.jsx("path", {
        d: "M15.8488 8.34625C15.2214 8.06791 14.454 7.35721 14.0864 6.9951C14.1808 6.71945 14.2817 6.44368 14.394 6.16935C16.0095 2.21773 19.1575 0.230874 21.0847 2.13723C22.5437 3.57772 21.605 5.28322 20.9362 5.84245C20.4866 6.21804 19.8752 6.42113 19.0043 7.11669C18.6905 7.3684 18.4063 7.93588 18.1493 8.68295C17.6944 8.73424 16.7751 8.75752 15.8488 8.34625Z"
    }), l.jsx("path", {
        d: "M12.3732 19.5536C11.8168 18.9546 11.467 18.3927 11.3194 18.0934C11.3575 18.0441 11.3972 17.9932 11.4337 17.9391C13.0441 15.6548 12.7549 11.7622 13.8 7.94165C14.0764 8.27607 14.6836 8.80938 15.9814 9.32481C16.5838 9.56302 17.4632 9.58419 17.8767 9.57899C17.379 11.3761 16.9799 13.7442 16.6227 15.5017C16.2969 17.0982 15.4111 18.9666 14.1707 20.4695C13.7457 20.3678 12.8752 20.0967 12.3732 19.5536Z"
    })]
})
  , St = (t={}) => l.jsx("svg", {
    viewBox: "0 0 22 22",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M20 2L2 20M2 2L20 20",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "var(--icon-stroke-width, 4)",
        stroke: "var(--icon-color)"
    })
})
  , Vh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: "var(--icon-color)"
    })
})
  , qh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 35 29",
    ...t,
    children: l.jsx("path", {
        d: "m6.0859 0.13086c-2.216 0-4 1.784-4 4v2.0781c1.8245-2.4284 4.7289-4 8-4h14.859c0.77869 0 1.5362 0.091365 2.2637 0.25977-0.6288-1.3807-2.0156-2.3379-3.6367-2.3379h-17.486zm4 4.0781c-4.4493 0-8 3.5507-8 8v6.4434c0 4.4493 3.5507 8 8 8h14.859c4.4493 0 8-3.5507 8-8v-6.4434c2e-6 -4.4493-3.5507-8-8-8h-14.859z",
        fill: "var(--icon-color)"
    })
})
  , $r = (t={}) => l.jsx("svg", {
    viewBox: "0 0 25 22",
    ...t,
    children: l.jsx("path", {
        d: "M14.8784 9.3155L24.1852 0H21.9798L13.8987 8.08852L7.44433 0H0L9.76025 12.2313L0 22H2.20554L10.7394 13.4583L17.5557 22H25L14.8779 9.3155H14.8784ZM11.8576 12.339L10.8687 11.1211L3.00023 1.42965H6.38781L12.7378 9.25094L13.7267 10.4689L21.9808 20.6354H18.5933L11.8576 12.3395V12.339Z",
        fill: "var(--icon-color)"
    })
})
  , Kh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 127.14 96.36",
    ...t,
    children: l.jsx("path", {
        d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z",
        fill: "var(--icon-color)"
    })
})
  , Zh = t => l.jsxs("svg", {
    viewBox: "0 0 1000 1000",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("path", {
        d: "M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z"
    }), l.jsx("path", {
        d: "M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z"
    }), l.jsx("path", {
        d: "M675.555 746.667C663.282 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.555V817.778C875.555 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.555Z"
    })]
})
  , Yh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 39 34",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("path", {
        d: "M16.1456 28.4404L5.11986 17.4148C4.84343 17.1384 4.84343 16.689 5.11986 16.4126L6.12207 15.4104C6.39849 15.134 6.84786 15.134 7.12428 15.4104L18.15 26.436C18.4264 26.7124 18.4264 27.1617 18.15 27.4382L17.1478 28.4404C16.8714 28.7182 16.4234 28.7182 16.1456 28.4404ZM4.83918 29.1619C3.73207 28.0548 1.93744 28.0548 0.830333 29.1619C-0.276778 30.269 -0.276778 32.0636 0.830333 33.1706C1.93744 34.2777 3.73207 34.2777 4.83918 33.1706C5.94629 32.0636 5.94629 30.269 4.83918 29.1619Z"
    }), l.jsx("path", {
        d: "M11.6133 25.9197L6.74963 29.5188C6.53841 29.0198 6.23364 28.5591 5.83814 28.165C5.44264 27.7695 4.98335 27.4648 4.48438 27.2536L8.08355 22.39L11.6133 25.9197ZM33.1714 0.00726915L25.769 2.00457C25.6017 2.02866 25.4472 2.1123 25.3352 2.23987L11.6175 17.9064L15.6575 21.9463L31.3244 8.22893C31.452 8.11694 31.5356 7.96385 31.5597 7.79516L33.9724 0.808172C34.039 0.341805 33.6392 -0.0593546 33.1714 0.00726915Z"
    }), l.jsx("path", {
        d: "M22.3622 28.4404L33.388 17.4148C33.6644 17.1384 33.6644 16.689 33.388 16.4126L32.3857 15.4104C32.1093 15.134 31.66 15.134 31.3835 15.4104L20.3578 26.436C20.0814 26.7124 20.0814 27.1617 20.3578 27.4382L21.36 28.4404C21.6364 28.7182 22.0844 28.7182 22.3622 28.4404ZM33.6686 29.1619C34.7757 28.0548 36.5704 28.0548 37.6775 29.1619C38.7846 30.269 38.7846 32.0636 37.6775 33.1706C36.5704 34.2777 34.7757 34.2777 33.6686 33.1706C32.5615 32.0636 32.5615 30.269 33.6686 29.1619Z"
    }), l.jsx("path", {
        d: "M26.8946 25.9197L31.7582 29.5188C31.9694 29.0198 32.2742 28.5591 32.6697 28.165C33.0652 27.7695 33.5245 27.4648 34.0234 27.2536L30.4243 22.39L26.8946 25.9197ZM5.33637 0.00726915L12.7388 2.00457C12.9061 2.02866 13.0606 2.1123 13.1726 2.23987L26.8903 17.9064L22.8503 21.9463L7.18344 8.22893C7.05586 8.11694 6.97223 7.96385 6.94813 7.79516L4.53545 0.808172C4.46882 0.341805 4.86858 -0.0593546 5.33637 0.00726915Z"
    })]
})
  , Qh = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 34 39",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("circle", {
        cx: "17",
        cy: "10",
        r: "9"
    }), l.jsx("path", {
        d: "m9.5 23.834c-2.4011 0-4.7007 0.99198-6.3828 2.7363-1.6821 1.7444-2.6172 4.0952-2.6172 6.541v5.3887h33v-5.3887c0-2.4459-0.93513-4.7967-2.6172-6.541-1.6821-1.7444-3.9817-2.7363-6.3828-2.7363z"
    })]
})
  , Xh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 35 32",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "m11.387 5c-4.4036 0-8.2747 2.8711-9.4141 6.9824l-0.0078124 0.027344-0.0058594 0.027343-1.8125 7.4492-0.0058594 0.021484-0.0039062 0.021485c-0.66644 3.0681 1.1565 6.1125 4.2402 7.082l0.10938 0.033203c0.63164 0.199 1.2916 0.30078 1.957 0.30078 2.2332 0 4.3144-1.15 5.4512-3.0059l1.543-2.2031 0.037109-0.05664 0.035157-0.056641c0.0545-0.0918 0.15527-0.14844 0.26367-0.14844h7.4531c0.1085 0 0.20927 0.056638 0.26367 0.14844l0.035157 0.056641 0.039062 0.05664 1.541 2.2031c1.1369 1.8559 3.2194 3.0059 5.4531 3.0059 0.6654 0 1.3242-0.10068 1.959-0.30078l0.10547-0.033203c3.083-0.9689 4.9057-4.0144 4.2402-7.082l-0.003906-0.021485-0.005859-0.021484-1.8125-7.4492-0.00586-0.027343-0.007812-0.027344c-1.1394-4.1114-5.0105-6.9824-9.4141-6.9824h-12.227zm13.602 4.8945c0.7976 1e-7 1.4434 0.62343 1.4434 1.3945 0 0.77-0.64576 1.3945-1.4434 1.3945-0.7966 0-1.4415-0.62453-1.4414-1.3945 0-0.7711 0.64481-1.3945 1.4414-1.3945zm-16.527 0.52734h2.293v2.5449h2.6348v2.2148h-2.6348v2.5469h-2.293v-2.5469h-2.6328v-2.2148h2.6328v-2.5449zm13.639 2.2617c0.7972 0 1.4414 0.62503 1.4414 1.3945 0 0.7711-0.64421 1.3945-1.4414 1.3945-0.7965 0-1.4434-0.62343-1.4434-1.3945 0-0.7695 0.64686-1.3945 1.4434-1.3945zm5.7715 0c0.7971 0 1.4434 0.62503 1.4434 1.3945 0 0.7711-0.64626 1.3945-1.4434 1.3945-0.7966 0-1.4414-0.62343-1.4414-1.3945 0-0.7695 0.64481-1.3945 1.4414-1.3945zm-2.8828 2.7891c0.7976 0 1.4434 0.62343 1.4434 1.3945 0 0.77-0.64576 1.3945-1.4434 1.3945-0.7966 0-1.4414-0.62453-1.4414-1.3945 0-0.7711 0.64481-1.3945 1.4414-1.3945z"
    })
})
  , Jh = (t={}) => l.jsx("svg", {
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M5.254 5.325C5.39506 4.924 5.67349 4.58586 6.03997 4.37048C6.40645 4.1551 6.83734 4.07636 7.25631 4.14823C7.67527 4.22009 8.05529 4.43791 8.32905 4.76312C8.6028 5.08832 8.75263 5.49991 8.752 5.925C8.752 7.125 6.952 7.725 6.952 7.725M7 10.125H7.006M13 7.125C13 10.4387 10.3137 13.125 7 13.125C3.68629 13.125 1 10.4387 1 7.125C1 3.81129 3.68629 1.125 7 1.125C10.3137 1.125 13 3.81129 13 7.125Z",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , e7 = ({offset: t=0, ...e}={}) => l.jsxs("svg", {
    viewBox: `-${7.5 + t} -${7.5 + t} ${15 + t * 2} ${15 + t * 2}`,
    fill: "none",
    stroke: "var(--icon-color)",
    ...e,
    children: [l.jsx("circle", {
        cx: "0",
        cy: "0",
        r: "6.5",
        strokeWidth: "var(--icon-stroke-width, 1.5)"
    }), l.jsx("path", {
        d: "M0 2.6V0M0 -2.6H0",
        strokeWidth: "var(--icon-stroke-width, 1.5)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })]
})
  , t7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 23 17",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M21.0517 5.13197C22.0144 5.13074 22.8087 5.88487 22.8574 6.84626V12.2063C22.8666 12.7458 22.661 13.2669 22.2859 13.6548C21.9109 14.0428 21.397 14.2658 20.8574 14.2748L20.5717 14.2748L20.5717 16.5605H16.0003L16.0003 14.2748H6.85741L6.85744 16.5605H2.28601L2.286 14.2748L2.00029 14.2748C1.46074 14.2658 0.946882 14.0428 0.571793 13.6548C0.196704 13.2669 -0.00887604 12.7458 0.000294127 12.2063V6.84626C0.049034 5.88487 0.843381 5.13074 1.80601 5.13197C2.70197 5.21217 3.39785 5.94725 3.42887 6.84626V10.8463H19.4289V6.84626C19.4548 5.94513 20.1534 5.20721 21.0517 5.13197ZM17.1432 0.560547C19.0367 0.560547 20.5717 2.09557 20.5717 3.98912C19.3094 3.98912 18.286 5.01247 18.286 6.27483V9.7034H4.57172V6.27483C4.57172 5.01247 3.54837 3.98912 2.28601 3.98912C2.28601 2.09557 3.82103 0.560547 5.71458 0.560547H17.1432Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
    })
})
  , n7 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 18 19",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("path", {
        d: "M8.54699 15.6174L2.7103 9.78028C2.56397 9.63394 2.56397 9.39604 2.7103 9.24971L3.24084 8.71913C3.38717 8.57279 3.62505 8.57279 3.77138 8.71913L9.60807 14.5562C9.7544 14.7026 9.7544 14.9404 9.60807 15.0868L9.07753 15.6174C8.9312 15.7645 8.69407 15.7645 8.54699 15.6174ZM2.56171 15.9993C1.97564 15.4132 1.02562 15.4132 0.439553 15.9993C-0.146518 16.5855 -0.146518 17.5355 0.439553 18.1216C1.02562 18.7078 1.97564 18.7078 2.56171 18.1216C3.14779 17.5355 3.14779 16.5855 2.56171 15.9993Z"
    }), l.jsx("path", {
        d: "M6.14882 14.2828L3.57416 16.1882C3.46235 15.9241 3.30101 15.6802 3.09164 15.4715C2.88228 15.2622 2.63914 15.1008 2.375 14.989L4.28029 12.4142L6.14882 14.2828ZM17.5611 0.564395L13.6424 1.62179C13.5539 1.63455 13.4721 1.67883 13.4128 1.74637L6.15107 10.0405L8.28974 12.1793L16.5833 4.91707C16.6508 4.85778 16.6951 4.77673 16.7078 4.68742L17.985 0.988405C18.0203 0.741504 17.8087 0.529124 17.5611 0.564395Z"
    })]
})
  , i7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 840 840",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "m420.62 59c-39.3 0-70.9 32.1-70.9 72.24 0 40.16 31.6 72.16 70.9 72.16s73.5-32 73.5-72.16c0-40.14-34.2-72.24-73.5-72.24zm-48.4 222.1c-39.7 119.2-100.8 151.7-100.8 151.7s-51.7-145.4-108.9-231.2c-23.3 51.5-46.8 86-96.3 99.3-0.8 44.8 51.2 208.8 55.7 290.7h600c2.5-78.9 55.8-256.2 55.8-288.7-38.4-15.3-85-50.8-96.3-101.3-63.2 85.8-109 231.2-109 231.2s-61-32.5-100.7-151.7c-26.9 13.1-77.8 13.4-99.5 0zm-297.2-222.1c-39.4 0-73.55 32.13-73.55 72.3 0 39.9 34.15 72.1 73.55 72.1 39.2 0 70.8-32.2 70.8-72.1 0-40.17-31.6-72.3-70.8-72.3zm47.1 603.1v118.9h600v-118.9zm644.1-603.1c-40.1 0-72.1 32.13-72.1 72.4 0 39.8 32 72 72.1 72 40.3 0 72.3-32.2 72.3-72 0-40.27-32-72.4-72.3-72.4z"
    })
})
  , s7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 20 16",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M0.5 16V0L19.5 8L0.5 16ZM2.5 13L14.35 8L2.5 3V6.5L8.5 8L2.5 9.5V13ZM2.5 13V8V3V6.5V9.5V13Z"
    })
})
  , ri = ({fill: t="var(--icon-color, #ff9ab7)", stroke: e="var(--icon-color-secondary, #e2638c)", eyeFill: n="var(--icon-color-tertiary, #702f3c)", ...i}={}) => l.jsxs("svg", {
    viewBox: "0 0 220 150",
    stroke: (e === !1 ? t : e) ?? void 0,
    fill: t ?? void 0,
    strokeWidth: "5",
    ...i,
    children: [l.jsxs("g", {
        children: [l.jsx("path", {
            d: "m178.86 69.618c2.0185-4.0235 7.781-3.5867 10.7-3.7145 2.9193-0.12779 13.172-1.3239 18.521-5.1292s8.7223-7.543 8.6757-14.175c-0.0466-6.6321-3.2319-13.924-7.537-20.293-4.305-6.3692-14.476-14.718-25.537-18.395-11.06-3.6773-24.393-4.1868-35.951 2.4062-11.558 6.5929-19.843 13.807-22.989 22.001-3.1464 8.1938-4.7088 17.926-2.3211 29.735 2.3877 11.809 3.107 20.153-1.5015 26.333s-9.9189 12.189-19.122 4.254c-9.203-7.9346-9.9935-12.099-19.864-24.214s-24.157-14.083-32.638-13.282-13.918 4.3211-28.098 16.277c-14.18 11.956-16.81 28.198-17.686 37.357-0.53472 5.5922-0.57705 11.3 2.7493 16.14 1.992 2.8982 5.6957 6.2189 13.171 6.35s12.502-3.3032 17.417-8.9614c2.8202-3.2467 5.4746-8.143 8.2209-10.601s5.4409-2.7809 9.1602-1.7616c3.7192 1.0193 9.972 5.6689 13.971 10.213 3.9991 4.5445 12.973 12.369 21.383 16.738s10.33 4.9901 17.16 6.596c10.713 2.519 22.34 1.065 32.808-2.1751 8.4505-2.6159 18.153-9.4926 22.479-14.016s7.6663-11.014 9.1076-14.051c1.4413-3.0368 1.9704-4.0095 4.0249-9.5817 2.0545-5.5722 3.1073-15.51 3.0173-23.992 0 0-0.0919-4.3903-0.0555-5.2361 0.0364-0.84588-0.0151-3.3282 0.73235-4.8181z",
            style: n === "mask" ? {
                clipPath: "path('M0,0 H220 V150 H0 Z M174.8 26.688c-8.047 1.8442-6.7035 19.207 2.1167 17.183 5.4615-1.2533 6.1706-8.7564 4.4797-13.089 -1.0131-2.595-3.6809-4.7614-6.5963-4.0934 Z')",
                clipRule: "evenodd"
            } : void 0
        }), l.jsx("path", {
            d: "m122.42 62.052c18.17-2.3668 32.857 12.341 55.705 12.384m-96.193-6.0113c-13.342 8.7124-26.647 20.158-27.703 41.517m-9.1602 1.7616c-11.949-9.6542-22.963-23.729-23.872-40.284m80.6 21.219c-18.003 10.801-13.58 31.012-12.213 44.254m81.555-23.646c-25.776-0.89751-38.722-18.284-50.22-24.861",
            fill: "none"
        })]
    }), n !== "mask" && l.jsx("path", {
        d: "m174.8 26.688c-8.047 1.8442-6.7035 19.207 2.1167 17.183 5.4615-1.2533 6.1706-8.7564 4.4797-13.089-1.0131-2.595-3.6809-4.7614-6.5963-4.0934",
        fill: n ?? void 0,
        stroke: "none"
    })]
})
  , pr = t => {
    const e = Be.c(8);
    let n;
    e[0] !== t ? (n = t === void 0 ? {} : t,
    e[0] = t,
    e[1] = n) : n = e[1];
    const i = n;
    let s;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (s = l.jsxs(l.Fragment, {
        children: [l.jsx("path", {
            d: "m57 248c2 8 5 16 14 16 9-0.1 48-0.3 48-0.3 8-0.6 14-7 17-17l19-53 14 49c3 10 3 22 21 21l34 0.2c15-0.5 20-11 23-24 0 0 49-194 51-204s-0.3-22-17-21c-13 0.5-24-0.02-36 0.5s-17 11-20 22-25 114-25 114l-20-66c-3-9-7-16-16-16l-15 0.2c-10 0.1-15 10-18 17l-24 66-21-126c-1-6-8-11-15-11l-42 1c-10 0.3-15 10-13 22 15 73 28 149 41 209z"
        }), l.jsx("path", {
            d: "m521 77-4 50s21 1 35-9c13-9 10-27 0.8-34-9-6-22-7-32-7zm-35-63s32-0.1 52 0.06 53 8 70 28c17 19 18 47 13 67-4 23-17 48-41 60 0 0 29 51 32 58s3 17-5 21c-9 4-32 15-39 18s-16-2-19-10c-4-8-29-64-29-64l-6 0.07s-4 45-4 53c-0.5 8-5 18-17 18s-27-0.1-35-0.1c-9-0.02-14-7-14-18 0.8-11 12-155 14-201 2-27 10-30 28-30z"
        }), l.jsx("path", {
            d: "m672 15c10 0.2 19 0.1 28 0.2 9 0.09 16 3 21 12s30 96 30 96 36-86 40-94 13-14 25-14c0 0 20-0.1 32 0.2 12 0.2 19 11 19 24-0.3 13-11 202-12 211-2 9-8 16-17 16s-29 0.4-37 0.01c-8-0.4-14-7-13-15s6-106 6-106-27 53-36 66-31 13-38-3-25-64-25-64-6 93-8 104-8 20-20 19c-12-0.4-18-0.1-27-0.4s-16-8-14-22c2-15 22-201 23-213s12-17 22-17z"
        }), l.jsx("path", {
            d: "m304 264c9 0.2 115-0.6 115-0.6 8-2 14-8 14-16l0.6-36c-0.2-8-6-11-11-11-8-0.6-65-1-65-1l1-28s32 0.2 43 0.2 16-5 18-14 2-26 2-33-4-14-14-14-47 0.05-47 0.05l2-27s57 1 65 0.9c8-0.08 15-5 16-12 1-8 3-42 3-42s-0.2-15-16-15c-10 0.3-107-0.5-107-0.5-11 0.2-19 6-20 18-6 71-15 189-17 207s8 24 17 24z"
        })]
    }),
    e[2] = s) : s = e[2];
    const r = s;
    let o;
    e[3] === Symbol.for("react.memo_cache_sentinel") ? (o = l.jsx("g", {
        fill: "#fa78a4",
        children: r
    }),
    e[3] = o) : o = e[3];
    let a, c;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (a = l.jsxs("g", {
        fill: "#fca3c2",
        children: [l.jsx("path", {
            d: "m75 17c9 3 14 28 15 48-12-9-15-33-15-33-0.9-4-3-5-9-5 0 0-22 0.8-28 1-10 0.4-15-4-15-4 16-8 44-11 53-7z"
        }), l.jsx("path", {
            d: "m173 73c4 2 17 45 17 45s-10 0.4-13-7c-2-6-7-22-7-22-1-3-2-9-7-9-2-0.1-11-0.08-14-0.2s-7-7-7-7 22-4 31 0.3z"
        }), l.jsx("path", {
            d: "m235 20s7 7 17 7c5 0.09 43-0.6 43-0.6l-2-7z"
        }), l.jsx("path", {
            d: "m311 20c7 13 91 8 133 8l-2-10z"
        }), l.jsx("path", {
            d: "m474 22c7 8 54 2 81 7 26 5 55 23 55 23s-4-28-44-35c-35-5-59-5-89-0.7z"
        }), l.jsx("path", {
            d: "m712 21 6 9-34-1c-6-0.1-9-2-11-8z"
        }), l.jsx("path", {
            d: "m860 21 6 9-42-0.8c-6-0.3-10-3-12-9z"
        })]
    }),
    c = l.jsx("g", {
        fill: "none",
        stroke: "#a92561",
        strokeWidth: 15,
        strokeLinejoin: "round",
        children: r
    }),
    e[4] = a,
    e[5] = c) : (a = e[4],
    c = e[5]);
    let u;
    return e[6] !== i ? (u = l.jsxs("svg", {
        viewBox: `${6.5} ${2.5} 871 270`,
        ...i,
        children: [o, a, c]
    }),
    e[6] = i,
    e[7] = u) : u = e[7],
    u
}
  , z1 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 78 33",
    ...t,
    children: [l.jsx("rect", {
        width: "78",
        height: "33",
        rx: "4",
        fill: "#AA2563"
    }), l.jsx("path", {
        d: "M16.6331 8.248C18.1691 8.248 19.3931 8.376 20.3051 8.632C21.2171 8.872 21.8731 9.304 22.2731 9.928C22.6731 10.552 22.8731 11.432 22.8731 12.568C22.8731 13.752 22.6411 14.656 22.1771 15.28C21.7131 15.888 20.9371 16.24 19.8491 16.336V16.48C21.1771 16.592 22.1051 17.024 22.6331 17.776C23.1611 18.512 23.4251 19.544 23.4251 20.872C23.4251 22.008 23.2091 22.888 22.7771 23.512C22.3611 24.136 21.7131 24.576 20.8331 24.832C19.9531 25.072 18.8171 25.192 17.4251 25.192C16.2411 25.192 15.1931 25.184 14.2811 25.168C13.3851 25.168 12.5531 25.152 11.7851 25.12C11.0331 25.088 10.2651 25.048 9.48113 25L9.86513 21.592C10.2811 21.608 11.0891 21.624 12.2891 21.64C13.4891 21.656 14.8891 21.664 16.4891 21.664C16.9691 21.664 17.3371 21.616 17.5931 21.52C17.8491 21.424 18.0171 21.24 18.0971 20.968C18.1931 20.696 18.2411 20.312 18.2411 19.816C18.2411 19.304 18.1931 18.912 18.0971 18.64C18.0011 18.368 17.8251 18.184 17.5691 18.088C17.3291 17.992 16.9611 17.944 16.4651 17.944H9.84113V14.896H16.4171C16.8171 14.896 17.1211 14.856 17.3291 14.776C17.5531 14.696 17.7051 14.544 17.7851 14.32C17.8651 14.08 17.9051 13.744 17.9051 13.312C17.9051 12.88 17.8651 12.56 17.7851 12.352C17.7051 12.128 17.5531 11.976 17.3291 11.896C17.1051 11.816 16.7851 11.776 16.3691 11.776C15.3611 11.776 14.4811 11.776 13.7291 11.776C12.9771 11.76 12.2971 11.76 11.6891 11.776C11.0811 11.776 10.4731 11.8 9.86513 11.848L9.48113 8.44C10.2011 8.376 10.9051 8.336 11.5931 8.32C12.2811 8.288 13.0251 8.272 13.8251 8.272C14.6411 8.256 15.5771 8.248 16.6331 8.248ZM14.5691 8.44V25H9.48113V8.44H14.5691ZM29.5729 8.344C30.5329 8.344 31.5169 8.352 32.5249 8.368C33.5489 8.368 34.5489 8.392 35.5249 8.44C36.5009 8.472 37.3889 8.544 38.1889 8.656L37.9489 12.328H31.8769C31.5729 12.328 31.3329 12.408 31.1569 12.568C30.9809 12.728 30.8929 12.936 30.8929 13.192V20.248C30.8929 20.504 30.9809 20.712 31.1569 20.872C31.3329 21.032 31.5729 21.112 31.8769 21.112H37.9489L38.1889 24.784C37.3889 24.88 36.5009 24.952 35.5249 25C34.5489 25.048 33.5489 25.072 32.5249 25.072C31.5169 25.088 30.5329 25.096 29.5729 25.096C28.4369 25.096 27.5009 24.752 26.7649 24.064C26.0449 23.36 25.6849 22.448 25.6849 21.328V12.112C25.6849 10.992 26.0449 10.088 26.7649 9.4C27.5009 8.696 28.4369 8.344 29.5729 8.344ZM26.1169 14.8H37.0849V18.256H26.1169V14.8ZM49.4138 8.44V25H44.2057V8.44H49.4138ZM54.0458 8.44V12.328H39.5737V8.44H54.0458ZM63.9441 8.44C64.3601 8.44 64.7281 8.56 65.0481 8.8C65.3681 9.04 65.5841 9.368 65.6961 9.784L69.9921 25H64.6881L62.1921 14.224C62.1281 13.92 62.0721 13.608 62.0241 13.288C61.9761 12.952 61.9361 12.632 61.9041 12.328H61.2561C61.2241 12.632 61.1841 12.952 61.1361 13.288C61.0881 13.608 61.0321 13.92 60.9681 14.224L58.4721 25H53.1681L57.4641 9.784C57.5761 9.368 57.7921 9.04 58.1121 8.8C58.4321 8.56 58.8001 8.44 59.2161 8.44H63.9441ZM65.9841 17.776V21.424H57.1761V17.776H65.9841Z",
        fill: "#FDCEDD"
    })]
})
  , e4 = ({classNameIcon: t, classNameText: e, classNameBeta: n, classNameNonBetaWrapper: i, styleIcon: s, styleText: r, styleBeta: o, styleNonBetaWrapper: a}) => l.jsxs(l.Fragment, {
    children: [i !== void 0 ? l.jsxs("div", {
        className: i ?? void 0,
        style: a,
        children: [t !== null && l.jsx(ri, {
            className: t,
            fill: "#fa78a4",
            stroke: "#a92561",
            style: s
        }), e !== null && l.jsx(pr, {
            className: e,
            style: r
        })]
    }) : l.jsxs(l.Fragment, {
        children: [t !== null && l.jsx(ri, {
            className: t,
            fill: "#fa78a4",
            stroke: "#a92561",
            style: s
        }), e !== null && l.jsx(pr, {
            className: e,
            style: r
        })]
    }), n !== null && l.jsx(z1, {
        className: n,
        style: o
    })]
})
  , r7 = ({style: t, classNameIcon: e, classNameText: n, classNameBeta: i, classNameNonBetaWrapper: s, styleIcon: r, styleText: o, styleBeta: a, styleNonBetaWrapper: c, betaAbsolute: u, ...d}) => l.jsx("div", {
    ...d,
    style: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "end",
        position: u ? "relative" : void 0,
        ...t
    },
    children: l.jsx(e4, {
        classNameNonBetaWrapper: e !== null ? null : void 0,
        styleNonBetaWrapper: {
            display: "grid",
            gridTemplateRows: e !== null ? "1fr 1fr" : "1fr",
            height: "100%",
            maxWidth: "100%",
            ...c
        },
        styleIcon: {
            height: "100%",
            maxWidth: "100%",
            justifySelf: "center",
            ...r
        },
        styleText: {
            height: "100%",
            maxWidth: "100%",
            justifySelf: "center",
            ...o
        },
        styleBeta: {
            height: e !== null ? "20%" : "40%",
            justifySelf: "end",
            alignSelf: "end",
            ...u ? {
                right: 0,
                bottom: 0,
                position: "absolute",
                transform: "translateX(100%)"
            } : {},
            ...a
        },
        classNameIcon: e,
        classNameText: n,
        classNameBeta: i
    })
})
  , t4 = ({style: t, classNameText: e, classNameBeta: n, styleText: i, styleBeta: s, beta: r, ...o}) => l.jsxs("div", {
    ...o,
    style: {
        display: "grid",
        gridTemplateColumns: r ? "10fr 3fr" : "1fr",
        justifyContent: "center",
        alignItems: "end",
        ...t
    },
    children: [l.jsx(pr, {
        className: e,
        style: {
            width: "100%",
            ...i
        }
    }), r && l.jsx(z1, {
        className: n,
        style: {
            width: "100%",
            ...s
        }
    })]
})
  , o7 = ({fill: t="var(--icon-color, #FB8CA3)", stroke: e="var(--icon-color-secondary, #CE5672)", eyeFill: n="var(--icon-color-tertiary, #FB8CA3)", strokeWidth: i=20, ...s}) => l.jsxs("svg", {
    viewBox: "0 0 1024 1024",
    fill: "none",
    ...s,
    children: [l.jsxs("g", {
        stroke: e ?? void 0,
        strokeWidth: i ?? void 0,
        children: [l.jsx("path", {
            d: "m624 323c-37-5-85-13-104-43s-23-61 1-101 91-63 175-33c36 13 76 36 107 68 41 43 70 97 84 136 24 68 34 156 17 232s-67 163-114 207-136 117-275 119-200-46-252-85-107-116-129-186-19-159-4-213 33-111 96-172 136-95 199-96c63-0.9 53 74 4 93-49 20-68 31-94 56s-54 64-68 101-20 107-5 148 37 85 69 112 85 64 157 64c73-0.07 130-29 169-66s64-75 72-117 10-87-12-138-55-81-93-86z",
            fill: t ?? void 0
        }), l.jsx("path", {
            d: "m 717,409 c 74,16 120,-2 170,-59 M 335,305 C 304,270 275,252 226,252 m 41,154 c -51,-14 -90,-6 -137,18 m 132,130 c -55,1 -90,27 -128,83 m 197,29 c -42,24 -77,76 -68,157 m 225,-93 c -25,62 -20,115 27,178 M 657,664 c 18,69 58,105 133,125 M 729,547 c 0,0 37,36 81,43 45,7 94,-8 94,-8",
            fill: "none"
        })]
    }), l.jsx("ellipse", {
        cx: "665",
        cy: "235",
        rx: "22",
        ry: "33",
        fill: n ?? void 0
    })]
})
  , a7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M15.3333 2.66655V6.66655M15.3333 6.66655H11.3333M15.3333 6.66655L12.24 3.75989C11.5235 3.04303 10.637 2.51936 9.66342 2.23774C8.68979 1.95612 7.6607 1.92572 6.67215 2.14939C5.6836 2.37306 4.76783 2.84351 4.01027 3.51683C3.25271 4.19016 2.67807 5.04441 2.33996 5.99989M0.666626 13.3332V9.33322M0.666626 9.33322H4.66663M0.666626 9.33322L3.75996 12.2399C4.47646 12.9567 5.36287 13.4804 6.3365 13.762C7.31012 14.0437 8.33922 14.0741 9.32777 13.8504C10.3163 13.6267 11.2321 13.1563 11.9896 12.4829C12.7472 11.8096 13.3218 10.9554 13.66 9.99989",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , n4 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M4.66667 7.33337V4.66671C4.66667 3.78265 5.01786 2.93481 5.64298 2.30968C6.2681 1.68456 7.11595 1.33337 8 1.33337C8.88406 1.33337 9.7319 1.68456 10.357 2.30968C10.9821 2.93481 11.3333 3.78265 11.3333 4.66671V7.33337M3.33333 7.33337H12.6667C13.403 7.33337 14 7.93033 14 8.66671V13.3334C14 14.0698 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0698 2 13.3334V8.66671C2 7.93033 2.59695 7.33337 3.33333 7.33337Z",
        strokeWidth: "var(--icon-stroke-width, 1.6)",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , l7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
        stroke: "var(--icon-color)",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , c7 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 25 25",
    fill: "none",
    ...t,
    children: [l.jsx("circle", {
        cx: "12.5",
        cy: "12.5",
        r: "12",
        fill: "var(--icon-stroke-color)"
    }), l.jsx("path", {
        d: "M12.5 22.3281C6.977 22.3281 2.5 17.8511 2.5 12.3281C2.5 6.80513 6.977 2.32812 12.5 2.32812C18.023 2.32812 22.5 6.80513 22.5 12.3281C22.5 17.8511 18.023 22.3281 12.5 22.3281ZM8.42 9.56213V9.66412C8.42 9.79673 8.47268 9.92391 8.56645 10.0177C8.66021 10.1114 8.78739 10.1641 8.92 10.1641H9.917C9.98253 10.1641 10.0474 10.1512 10.108 10.1261C10.1685 10.1011 10.2235 10.0643 10.2698 10.018C10.3162 9.97163 10.3529 9.91662 10.378 9.85608C10.4031 9.79554 10.416 9.73065 10.416 9.66512C10.416 8.37512 11.414 7.68612 12.756 7.68612C14.064 7.68612 14.924 8.37512 14.924 9.35612C14.924 10.2841 14.442 10.7151 13.238 11.2661L12.894 11.4201C11.879 11.8681 11.5 12.5381 11.5 13.7091V13.8281C11.5 13.9607 11.5527 14.0879 11.6464 14.1817C11.7402 14.2754 11.8674 14.3281 12 14.3281H12.997C13.0625 14.3281 13.1274 14.3152 13.188 14.2901C13.2485 14.2651 13.3035 14.2283 13.3498 14.182C13.3962 14.1356 13.4329 14.0806 13.458 14.0201C13.4831 13.9595 13.496 13.8947 13.496 13.8291C13.496 13.3131 13.634 13.1061 14.046 12.9171L14.391 12.7621C15.836 12.1081 16.92 11.2481 16.92 9.37212V9.26912C16.92 7.29112 15.2 5.82812 12.756 5.82812C10.278 5.82812 8.42 7.25612 8.42 9.56213ZM11 17.3191C11 18.1861 11.659 18.8281 12.491 18.8281C13.341 18.8281 14 18.1861 14 17.3191C14 16.4521 13.341 15.8281 12.491 15.8281C11.659 15.8281 11 16.4521 11 17.3191Z",
        fill: "var(--icon-fill-color)"
    })]
})
  , u7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 9 14",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M2.605 7.71063L2 12.2656L4.5 10.7656L7 12.2656L6.395 7.70563M8 4.76562C8 6.69862 6.433 8.26562 4.5 8.26562C2.567 8.26562 1 6.69862 1 4.76562C1 2.83263 2.567 1.26562 4.5 1.26562C6.433 1.26562 8 2.83263 8 4.76562Z",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , d7 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 10 13",
    ...t,
    children: [l.jsx("path", {
        d: "M2.01407 9.95846L2.42804 8.44847L2.84983 7.14844H8.04993L8.47172 8.44847L8.88572 9.95846C9.29412 11.4482 9.49835 12.193 9.2258 12.6009C9.13032 12.7437 9.0022 12.8585 8.85354 12.9341C8.42934 13.1501 7.77432 12.8089 6.46435 12.1263C6.02846 11.8992 5.81051 11.7856 5.57897 11.7609C5.49311 11.7517 5.40665 11.7517 5.32079 11.7609C5.08925 11.7856 4.8713 11.8992 4.4354 12.1263C3.12544 12.8089 2.47045 13.1501 2.04623 12.9341C1.89756 12.8585 1.76944 12.7437 1.67394 12.6009C1.40143 12.193 1.60564 11.4482 2.01407 9.95846Z",
        fill: "var(--icon-color-secondary, var(--icon-color))"
    }), l.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.4495 9.10025C7.96245 9.10025 9.99959 7.06309 9.99959 4.55013C9.99959 2.03716 7.96245 0 5.4495 0C2.93656 0 0.899414 2.03716 0.899414 4.55013C0.899414 7.06309 2.93656 9.10025 5.4495 9.10025ZM5.4495 2.60007C5.26483 2.60007 5.14133 2.82162 4.89433 3.26472L4.83043 3.37936C4.76029 3.50527 4.72519 3.56823 4.67046 3.60977C4.61573 3.65131 4.54761 3.66673 4.4113 3.69757L4.28721 3.72565C3.80754 3.83418 3.56772 3.88844 3.51066 4.07192C3.45361 4.2554 3.6171 4.44659 3.94409 4.82897L4.02869 4.9279C4.12161 5.03655 4.16807 5.09088 4.189 5.15809C4.20986 5.2253 4.20284 5.29778 4.1888 5.44279L4.176 5.57475C4.12657 6.08495 4.10186 6.34001 4.2512 6.45344C4.40064 6.56681 4.62516 6.46345 5.07425 6.25668L5.19041 6.20319C5.31807 6.14442 5.38184 6.11504 5.4495 6.11504C5.51717 6.11504 5.58093 6.14442 5.7086 6.20319L5.82475 6.25668C6.27385 6.46345 6.49836 6.56681 6.6478 6.45344C6.79717 6.34001 6.77241 6.08495 6.72301 5.57475L6.7102 5.44279C6.69616 5.29778 6.68914 5.2253 6.71001 5.15809C6.73094 5.09088 6.77741 5.03655 6.8703 4.9279L6.95493 4.82897C7.28189 4.44659 7.44543 4.2554 7.38836 4.07192C7.33129 3.88844 7.09143 3.83418 6.61179 3.72565L6.4877 3.69757C6.35139 3.66673 6.28327 3.65131 6.22854 3.60977C6.17381 3.56823 6.13871 3.50527 6.06857 3.37936L6.00468 3.26472C5.75767 2.82162 5.63417 2.60007 5.4495 2.60007Z",
        fill: "var(--icon-color)"
    })]
})
  , h7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 15 13",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M3.30011 0.36098C3.4901 0.132292 3.77199 0 4.0693 0H10.9307C11.228 0 11.5099 0.132292 11.6999 0.36098L14.4582 3.68112C14.7708 4.0574 14.7653 4.6046 14.4451 4.97451L8.25617 12.1262C7.85737 12.587 7.14263 12.587 6.74383 12.1262L0.554866 4.97451C0.23475 4.6046 0.22924 4.0574 0.541843 3.68111L3.30011 0.36098Z"
    })
})
  , f7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("circle", {
        cx: "8",
        cy: "8",
        r: "8"
    })
})
  , m7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 18",
    fill: "none",
    stroke: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M1.5 9V15.4C1.5 15.8243 1.6712 16.2313 1.97595 16.5314C2.2807 16.8314 2.69402 17 3.125 17H12.875C13.306 17 13.7193 16.8314 14.024 16.5314C14.3288 16.2313 14.5 15.8243 14.5 15.4V9M11.25 4.2L8 1M8 1L4.75 4.2M8 1V11.4",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , i4 = t => {
    const e = Be.c(15);
    let n;
    e[0] !== t ? (n = t === void 0 ? {} : t,
    e[0] = t,
    e[1] = n) : n = e[1];
    let i, s;
    e[2] !== n ? ({silhouette: s, ...i} = n,
    e[2] = n,
    e[3] = i,
    e[4] = s) : (i = e[3],
    s = e[4]);
    const r = s === void 0 ? !1 : s
      , o = C.useId()
      , a = C.useId();
    let c;
    e[5] !== o || e[6] !== a || e[7] !== r ? (c = !r && l.jsxs(l.Fragment, {
        children: [l.jsxs("radialGradient", {
            id: o,
            cx: "68.88",
            cy: "124.3",
            r: "70.59",
            gradientTransform: "matrix(-1 -.004343 -.007126 1.641 132 -79.35)",
            gradientUnits: "userSpaceOnUse",
            children: [l.jsx("stop", {
                stopColor: "#FF9800",
                offset: ".3144"
            }), l.jsx("stop", {
                stopColor: "#FF6D00",
                offset: ".6616"
            }), l.jsx("stop", {
                stopColor: "#F44336",
                offset: ".9715"
            })]
        }), l.jsxs("radialGradient", {
            id: a,
            cx: "64.92",
            cy: "54.06",
            r: "73.86",
            gradientTransform: "matrix(-.0101 .9999 .7525 .007604 26.15 -11.27)",
            gradientUnits: "userSpaceOnUse",
            children: [l.jsx("stop", {
                stopColor: "#FFF176",
                offset: ".2141"
            }), l.jsx("stop", {
                stopColor: "#FFF27D",
                offset: ".3275"
            }), l.jsx("stop", {
                stopColor: "#FFF48F",
                offset: ".4868"
            }), l.jsx("stop", {
                stopColor: "#FFF7AD",
                offset: ".6722"
            }), l.jsx("stop", {
                stopColor: "#FFF9C4",
                offset: ".7931"
            }), l.jsx("stop", {
                stopColor: "#FFF8BD",
                stopOpacity: ".804",
                offset: ".8221"
            }), l.jsx("stop", {
                stopColor: "#FFF6AB",
                stopOpacity: ".529",
                offset: ".8627"
            }), l.jsx("stop", {
                stopColor: "#FFF38D",
                stopOpacity: ".2088",
                offset: ".9101"
            }), l.jsx("stop", {
                stopColor: "#FFF176",
                stopOpacity: "0",
                offset: ".9409"
            })]
        }), l.jsx("path", {
            d: "m76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37 0.3-0.7-0.5-1.36-1.13-0.93-3.91 2.66-11.92 8.92-15.65 17.73-5.05 11.91-4.69 17.74-1.7 24.86 1.8 4.29-0.29 5.2-1.34 5.36-1.02 0.16-1.96-0.52-2.71-1.23-2.15-2.05-3.7-4.72-4.44-7.6-0.16-0.62-0.97-0.79-1.34-0.28-2.8 3.87-4.25 10.08-4.32 14.47-0.22 13.57 10.99 24.57 24.55 24.57 17.09 0 29.54-18.9 19.72-34.7-2.85-4.6-5.53-7.61-8.85-11.88z",
            fill: `url(#${a})`
        })]
    }),
    e[5] = o,
    e[6] = a,
    e[7] = r,
    e[8] = c) : c = e[8];
    const u = r ? "var(--icon-color)" : `url(#${o})`;
    let d;
    e[9] !== u ? (d = l.jsx("path", {
        d: "m35.56 40.73c-0.57 6.08-0.97 16.84 2.62 21.42 0 0-1.69-11.82 13.46-26.65 6.1-5.97 7.51-14.09 5.38-20.18-1.21-3.45-3.42-6.3-5.34-8.29-1.12-1.17-0.26-3.1 1.37-3.03 9.86 0.44 25.84 3.18 32.63 20.22 2.98 7.48 3.2 15.21 1.78 23.07-0.9 5.02-4.1 16.18 3.2 17.55 5.21 0.98 7.73-3.16 8.86-6.14 0.47-1.24 2.1-1.55 2.98-0.56 8.8 10.01 9.55 21.8 7.73 31.95-3.52 19.62-23.39 33.9-43.13 33.9-24.66 0-44.29-14.11-49.38-39.65-2.05-10.31-1.01-30.71 14.89-45.11 1.18-1.08 3.11-0.12 2.95 1.5z",
        fill: u
    }),
    e[9] = u,
    e[10] = d) : d = e[10];
    let h;
    return e[11] !== i || e[12] !== c || e[13] !== d ? (h = l.jsxs("svg", {
        viewBox: "0 0 128 128",
        ...i,
        children: [c, d]
    }),
    e[11] = i,
    e[12] = c,
    e[13] = d,
    e[14] = h) : h = e[14],
    h
}
  , p7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 0.6914 1",
    ...t,
    children: l.jsx("path", {
        d: "m0.01213 0.07071 0.3586 0.3586a0.1 0.1 90 0 1 0 0.1414l-0.3586 0.3586a0.04142 0.04142 67.5 0 0 0.02929 0.07071h0.65v-1h-0.65a0.04142 0.04142 112.5 0 0-0.02929 0.07071z"
    })
})
  , g7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 0.6914 1",
    ...t,
    children: l.jsx("path", {
        d: "m0.6793 0.9293-0.3586-0.3586a0.1 0.1 90 0 1 0-0.1414l0.3586-0.3586a0.04142 0.04142 67.5 0 0-0.02929-0.07071h-0.65v1h0.65a0.04142 0.04142 112.5 0 0 0.02929-0.07071z"
    })
})
  , s4 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 48 44",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "M24 44C21.1831 44 18.5446 43.4682 16.0845 42.4046C13.6244 41.341 11.4836 39.9042 9.66197 38.0942C7.84038 36.2841 6.39437 34.1569 5.32394 31.7125C4.25352 29.268 3.71831 26.6463 3.71831 23.8473C3.71831 21.0483 4.25352 18.4266 5.32394 15.9822C6.39437 13.5377 7.84038 11.4105 9.66197 9.60051C11.4836 7.7905 13.6244 6.35369 16.0845 5.29008C18.5446 4.22646 21.1831 3.69466 24 3.69466C26.8169 3.69466 29.4554 4.22646 31.9155 5.29008C34.3756 6.35369 36.5164 7.7905 38.338 9.60051C40.1596 11.4105 41.6056 13.5377 42.6761 15.9822C43.7465 18.4266 44.2817 21.0483 44.2817 23.8473C44.2817 26.6463 43.7465 29.268 42.6761 31.7125C41.6056 34.1569 40.1596 36.2841 38.338 38.0942C36.5164 39.9042 34.3756 41.341 31.9155 42.4046C29.4554 43.4682 26.8169 44 24 44ZM30.3099 33.2519L33.4648 30.117L26.2535 22.9517V12.6514H21.7465V24.743L30.3099 33.2519ZM9.57747 0L12.7324 3.13486L3.15493 12.6514L0 9.51654L9.57747 0ZM38.4225 0L48 9.51654L44.8451 12.6514L35.2676 3.13486L38.4225 0Z"
    })
})
  , y7 = (t={}) => l.jsxs("svg", {
    viewBox: "-9 -9 18 18",
    ...t,
    fill: "var(--icon-color)",
    children: [l.jsx("rect", {
        x: -8,
        y: -8,
        width: 16,
        height: 16,
        rx: 2,
        ry: 2,
        strokeWidth: 2,
        fill: "none",
        stroke: "var(--icon-color)"
    }), l.jsx("circle", {
        cx: -3,
        cy: -3,
        r: 1.5
    }), l.jsx("circle", {
        cx: 3,
        cy: -3,
        r: 1.5
    }), l.jsx("circle", {
        cx: 0,
        cy: 0,
        r: 1.5
    }), l.jsx("circle", {
        cx: -3,
        cy: 3,
        r: 1.5
    }), l.jsx("circle", {
        cx: 3,
        cy: 3,
        r: 1.5
    })]
})
  , v7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 22 21",
    fill: "none",
    children: l.jsx("path", {
        d: "M7 9.46375H7.01M11 9.46375H11.01M15 9.46375H15.01M20 18.7787L16.6757 17.0584C16.4237 16.928 16.2977 16.8628 16.1656 16.8168C16.0484 16.776 15.9277 16.7465 15.8052 16.7287C15.6672 16.7088 15.5263 16.7087 15.2446 16.7087H5.2C4.07989 16.7087 3.51984 16.7087 3.09202 16.4831C2.71569 16.2847 2.40973 15.968 2.21799 15.5785C2 15.1358 2 14.5561 2 13.3967V5.53075C2 4.37144 2 3.79178 2.21799 3.34899C2.40973 2.95949 2.71569 2.64282 3.09202 2.44437C3.51984 2.21875 4.0799 2.21875 5.2 2.21875H16.8C17.9201 2.21875 18.4802 2.21875 18.908 2.44437C19.2843 2.64282 19.5903 2.95949 19.782 3.34899C20 3.79178 20 4.37145 20 5.53075V18.7787Z",
        stroke: "var(--icon-color)",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , x7 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 37 43",
    fill: "var(--icon-color)",
    ...t,
    children: [l.jsx("path", {
        d: "M12.7112 22.2731V24.5893C12.7112 25.0067 13.0628 25.3466 13.4977 25.3466H15.4155C15.849 25.3466 16.2006 25.0067 16.2006 24.5893V22.6497H16.8554V24.5893C16.8554 25.0067 17.207 25.3466 17.6405 25.3466H19.5596C19.9932 25.3466 20.346 25.0067 20.346 24.5893V22.6497H20.9997V24.5893C20.9997 25.0067 21.3512 25.3466 21.7861 25.3466H23.7039C24.1375 25.3466 24.489 25.0067 24.489 24.5893V22.2731C26.4875 21.6877 29.8244 20.3295 30.9598 17.5841C31.7839 15.588 31.4611 12.9607 30.2267 7.89638C28.9897 2.82945 25.3963 0 18.5987 0C11.8011 0 8.20896 2.82945 6.9734 7.89638C5.73784 12.9607 5.41362 15.588 6.24038 17.5841C7.37445 20.3295 10.7114 21.6865 12.7112 22.2731ZM23.343 9.14052C25.1502 8.84261 26.913 10.2783 27.2802 12.3452C27.6461 14.4135 26.4782 16.3308 24.6723 16.63C22.8626 16.9266 21.0984 15.4936 20.7326 13.424C20.3668 11.357 21.5359 9.43969 23.343 9.14052ZM21.1441 18.588H18.5987H16.0559L18.5987 15.5224L21.1441 18.588ZM9.91847 12.3452C10.2883 10.2783 12.0485 8.84261 13.8556 9.14052C15.664 9.43977 16.8345 11.3571 16.4661 13.424C16.1002 15.4936 14.3387 16.9266 12.5302 16.63C10.7205 16.3308 9.55259 14.4135 9.91847 12.3452Z"
    }), l.jsx("path", {
        d: "M34.6826 33.4168C33.3168 32.8079 31.7115 33.3197 30.9759 34.552C30.4356 35.2292 29.5958 34.964 29.2104 34.7935C28.9239 34.6661 25.9372 33.3354 22.3906 31.7566C25.4385 30.3498 27.9552 29.1884 28.4591 28.9561C29.8509 28.3143 30.8508 27.9639 31.7687 28.7225C32.5694 29.7987 34.0771 30.2015 35.3582 29.611C36.7969 28.9482 37.405 27.2854 36.7162 25.8984C36.3009 25.0585 35.5041 24.5151 34.6226 24.3616C35.0523 23.6031 35.1135 22.666 34.6956 21.8249C34.0081 20.4377 32.2843 19.8524 30.8456 20.5151C29.5997 21.0899 28.9786 22.4128 29.2807 23.6582C29.3523 24.5952 27.9683 25.3459 27.0504 25.7698C26.4098 26.0651 22.4518 27.926 18.2204 29.8997C14.2416 28.128 10.5649 26.4916 9.94125 26.2147C8.53904 25.5899 7.62113 25.0716 7.64071 23.9075C7.98968 22.6267 7.3504 21.25 6.0601 20.6739C4.61364 20.0309 2.89763 20.6398 2.22844 22.0362C1.82356 22.8814 1.89772 23.8183 2.3391 24.5729C1.45892 24.7369 0.669995 25.2894 0.266364 26.1346C-0.401577 27.5323 0.229868 29.1858 1.67774 29.8302C2.93154 30.3879 4.3845 30.0047 5.18526 28.9863C5.88961 28.3341 7.37123 28.8827 8.29307 29.2961C8.77477 29.51 11.1314 30.5402 14.0725 31.8302C10.5311 33.4706 7.53138 34.8421 7.06009 34.993C6.7802 35.0836 6.52889 35.0941 6.30758 35.0613C6.29066 35.0233 6.27633 34.9825 6.25683 34.9458C5.57073 33.5586 3.84555 32.9721 2.40692 33.6361C0.968218 34.2988 0.360189 35.9629 1.04896 37.35C1.46559 38.1873 2.2611 38.7319 3.14252 38.8854C2.71415 39.6439 2.65299 40.5823 3.06828 41.4222C3.7583 42.8094 5.48082 43.3959 6.91952 42.7332C8.27882 42.1046 8.8946 40.5888 8.38031 39.2555C8.18499 38.4235 8.93101 37.9668 9.31381 37.7896C9.6562 37.6335 13.8603 35.6925 18.2518 33.6662C23.0496 35.7804 27.8721 37.9261 28.4163 38.2529C28.6663 38.4025 28.8355 38.5823 28.9501 38.7673C28.9292 38.8041 28.9084 38.8395 28.8902 38.8776C28.2222 40.274 28.8524 41.9262 30.3015 42.5732C31.7493 43.2162 33.464 42.6073 34.1332 41.2109C34.5368 40.3671 34.4626 39.4288 34.0225 38.6755C34.9027 38.5101 35.6904 37.9563 36.0953 37.1138C36.7631 35.716 36.1317 34.0611 34.6826 33.4168Z"
    })]
})
  , Ds = (t={}) => l.jsx("svg", {
    viewBox: "-50 -50 100 100",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M -42.5,0 C -42.5,0 -20,5 -12.5,12.5 C -5,20 0,42.5 0,42.5 C 0,42.5 5,20 12.5,12.5 C 20,5 42.5,0 42.5,0 C 42.5,0 20,-5 12.5,-12.5 C 5,-20 0,-42.5 0,-42.5 C 0,-42.5 -5,-20 -12.5,-12.5 C -20,-5 -42.5,0 -42.5,0 Z",
        fill: "var(--icon-color, #ebd37c)",
        stroke: "var(--icon-color-secondary, #d5a84e)",
        strokeWidth: "var(--icon-stroke-width, 7.5)",
        strokeLinejoin: "round"
    })
})
  , O1 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 650 650",
    ...t,
    children: [l.jsx("path", {
        "data-svg-role": "main-fill",
        d: "m271.9 641.7c27.32 0 38.61-13.26 62.88-13.04 24.27 0.229 39.38 13.04 74.38 13.04s183.3-48.45 210.9-241.5c27.54-193.1-129.9-233.9-167.9-233.9-38.08 0-64.33 28.85-111.2 23.53-46.92-5.312-56.78-23.79-115.1-23.89-58.29-0.1007-213.9 73.64-161.6 265.4s180.5 210.4 207.8 210.4z",
        fill: "#ea3c22"
    }), l.jsx("path", {
        "data-svg-role": "stem-shadow",
        d: "m252 208.7c1.965-5.003 45.11 8.087 70.94 8.223s72.89-15.29 76.09-8.325c3.201 6.961-21.7 25.99-72.04 26.53s-76.96-21.43-74.99-26.43z",
        fill: "#c8260c"
    }), l.jsx("path", {
        "data-svg-role": "main-dark",
        d: "m271.9 641.7c27.32 0 38.61-13.26 62.88-13.04 24.27 0.229 39.38 13.04 74.38 13.04s183.3-48.45 210.9-241.5c10.96-76.85-14.03-137.9-35.81-165.2 0 0 44.37 140.6-26.49 242.5-46.7 67.18-95.46 105.3-146.8 120.5-26.56 7.85-59.09 3.795-79.75 6.198s-55.96 19.04-89.04 13.23c-47.32-8.321-107.1-48.34-107.1-48.34 51.32 54.51 109.6 72.67 136.9 72.67z",
        fill: "#ca260d"
    }), l.jsx("circle", {
        "data-svg-role": "main-light-circle",
        cx: "109.8",
        cy: "326.2",
        r: "15.38",
        fill: "#fac0ac"
    }), l.jsx("ellipse", {
        "data-svg-role": "main-light-eclipse",
        transform: "matrix(.691 .7228 -.7348 .6783 0 0)",
        cx: "292.6",
        cy: "68.3",
        rx: "23.33",
        ry: "45.05",
        fill: "#fac0ac"
    }), l.jsx("path", {
        "data-svg-role": "main-stroke",
        d: "m271.9 641.7c27.32 0 38.61-13.26 62.88-13.04 24.27 0.229 39.38 13.04 74.38 13.04s183.3-48.45 210.9-241.5c27.54-193.1-129.9-233.9-167.9-233.9-38.08 0-64.33 28.85-111.2 23.53-46.92-5.312-56.78-23.79-115.1-23.89-58.29-0.1007-213.9 73.64-161.6 265.4s180.5 210.4 207.8 210.4z",
        fill: "none",
        stroke: "#3d1606",
        strokeWidth: "15"
    }), l.jsx("path", {
        "data-svg-role": "stem",
        d: "m244.5 81.9 23.02-16.53s44.56 34.96 56.66 76.73c12.11 41.77 8.853 86.16 8.853 86.16l-13.25-0.1518s-11.8-52.37-24.52-81.87-50.76-64.34-50.76-64.34z",
        fill: "#782207",
        stroke: "#3d1606",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "15"
    }), l.jsx("path", {
        "data-svg-role": "leaf-fill",
        d: "m334.8 191.7s-18.03-81.52 47.22-139.9c65.25-58.37 148.1-41.32 148.1-41.32s-0.2963 82.69-56.66 131.6c-56.37 48.93-138.7 49.58-138.7 49.58z",
        fill: "#85850f"
    }), l.jsx("path", {
        "data-svg-role": "leaf-dark",
        d: "m341.5 193.3c-13.21-3.976 0.2381-55.08 40.44-90.4 40.2-35.32 78.52-44.82 78.52-44.82s-38.99 27.98-72.99 64.99c-33.99 37.01-45.97 70.23-45.97 70.23z",
        fill: "#727204"
    }), l.jsx("path", {
        "data-svg-role": "leaf-light",
        d: "m334.8 191.7s-18.03-81.52 47.22-139.9c65.25-58.37 148.1-41.32 148.1-41.32s-73.06 17.96-126.6 73.51c-53.53 55.54-68.78 107.7-68.78 107.7z",
        fill: "#9da01e"
    }), l.jsx("path", {
        "data-svg-role": "leaf-stroke",
        d: "m334.8 191.7s-18.03-81.52 47.22-139.9c65.25-58.37 148.1-41.32 148.1-41.32s-0.2963 82.69-56.66 131.6c-56.37 48.93-138.7 49.58-138.7 49.58z",
        fill: "none",
        stroke: "#3d1606",
        strokeLinejoin: "round",
        strokeWidth: "15"
    })]
})
  , $1 = ({className: t, ...e}={}) => l.jsxs("div", {
    className: `relative aspect-square ${t ?? ""}`,
    ...e,
    children: [l.jsx(O1, {
        className: "scale-80"
    }), l.jsx(Ds, {
        className: "h-[100%] absolute top-0 left-0 -translate-x-[35%] -translate-y-[30%] scale-[0.2]"
    }), l.jsx(Ds, {
        className: "h-[100%] absolute top-0 left-0 translate-x-[28%] translate-y-[42%] scale-[0.15]"
    }), l.jsx(Ds, {
        className: "h-[100%] absolute top-0 left-0 translate-x-[40%] translate-y-[30%] scale-[0.15]"
    })]
})
  , C7 = ({className: t, ...e}={}) => l.jsx("svg", {
    viewBox: "0 0 30 25",
    className: `${t ?? ""}`,
    ...e,
    children: l.jsx("path", {
        d: "M10.2003 6.34262V11.276L12.6003 11.476C17.5337 11.9426 21.3337 13.9426 23.7337 16.476C21.0003 15.5426 17.5337 15.076 13.0003 14.876L10.2003 14.7426V19.476L3.66701 12.9426L10.2003 6.34262ZM12.1337 0.875953C12.0293 0.87006 11.9251 0.891567 11.8315 0.938344C11.738 0.98512 11.6583 1.05554 11.6003 1.14262L0.600347 12.276C0.436362 12.4593 0.345703 12.6966 0.345703 12.9426C0.345703 13.1886 0.436362 13.4259 0.600347 13.6093L11.6003 24.6093C11.6583 24.6964 11.738 24.7668 11.8315 24.8136C11.9251 24.8603 12.0293 24.8818 12.1337 24.876C12.2389 24.8676 12.3414 24.8384 12.4352 24.7903C12.5291 24.7421 12.6126 24.6758 12.6807 24.5952C12.7489 24.5147 12.8004 24.4214 12.8324 24.3209C12.8644 24.2203 12.8761 24.1144 12.867 24.0093V17.5426C23.3337 18.0093 26.9337 20.076 28.5337 23.676C28.8003 24.2093 29.067 24.4093 29.267 24.4093C29.467 24.4093 29.667 24.1426 29.667 23.7426C29.5337 16.7426 23.0003 9.80929 12.867 8.80929V1.74262C12.8761 1.63749 12.8644 1.53159 12.8324 1.43103C12.8004 1.33046 12.7489 1.23722 12.6807 1.15666C12.6126 1.07611 12.5291 1.00983 12.4352 0.961654C12.3414 0.913478 12.2389 0.884352 12.1337 0.875953Z",
        fill: "#F7F5F5"
    })
})
  , b7 = ({silhouette: t, ...e}={}) => l.jsx("svg", {
    viewBox: "0 0 128 128",
    ...e,
    children: t ? l.jsx("path", {
        d: "m98.29 3.18c-0.07671 0-0.2545 0.1108-0.4785 0.2676-4.359 2.711-40.72 33.54-47.39 38.8-6.98 5.51-31.13 26-31.13 26s-2.148 1.321-1.818 2.971 1.77 1.719 2.43 1.719 34.85-0.1802 36.84-0.2402c0.3863-0.01095 0.6897 0.07386 0.9395 0.2109-0.4301 0.6715-0.8119 1.254-1.4 2.209-0.9 1.46-23.94 40.07-26.34 44.02-2.47 4.067-2.488 4.803-2.391 4.906-0.00278 0.01444-0.03906 0.07312-0.03906 0.08398 0 1.31 1.581 1.96 3.051 1.08 1.14-0.68 74.84-63.13 78.09-67.42 0.88-1.17 1.329-4.25-2.301-4.25-0.02989 0-0.09366 0.01059-0.127 0.01172-0.2105 0.001563-26.6 0.1936-36.36 0.1914 0.3639-0.5829 28.79-46.12 29.45-47.27 0.66-1.16 0.7985-3.291-1.021-3.291z",
        fill: "var(--icon-color)"
    }) : l.jsxs(l.Fragment, {
        children: [l.jsx("path", {
            d: "M69.68,54.04 C69.68,54.04 98.65,7.63 99.31,6.47 C99.97,5.31 100.11,3.18 98.29,3.18 C96.47,3.18 51.34,49.25 51.34,49.25 L19.29,68.25 C19.29,68.25 17.14,69.57 17.47,71.22 C17.8,72.87 19.24,72.94 19.9,72.94 C20.56,72.94 54.75,72.76 56.74,72.7 C59.21,72.63 58.6,76.14 58.6,76.14 L36.96,110.16 C36.96,110.16 27.51,123.24 27.51,124.13 C27.51,125.44 29.09,126.09 30.56,125.21 C31.7,124.53 105.4,62.08 108.65,57.79 C109.53,56.62 109.98,53.54 106.35,53.54 C102.72,53.54 73.81,61.96 73.81,61.96 L69.68,54.04 Z",
            fill: "#FEA804"
        }), l.jsx("path", {
            d: "M64.61,50.35 C63.72,51.57 63.48,53.61 65.4,53.73 C67.31,53.84 106.35,53.55 106.35,53.55 C106.35,53.55 78.46,79.18 70.02,86.83 C61.58,94.48 33.63,119.26 31.75,121.01 C29.91,122.73 28.24,124.31 27.56,124.09 C27.45,124.06 27.31,123.47 29.94,119.14 C32.34,115.19 55.38,76.58 56.28,75.12 C57.18,73.66 57.97,72.42 58.42,71.74 C58.87,71.06 60.33,67.35 57.29,67.35 C54.25,67.35 19.29,68.25 19.29,68.25 C19.29,68.25 43.44,47.76 50.42,42.25 C57.4,36.74 96.96,3.18 98.29,3.18 C99.62,3.18 65.51,49.12 64.61,50.35 Z",
            fill: "#FFC927"
        }), l.jsx("path", {
            d: "M63.45,70.75 C65.25,68.16 67.02,67.97 68.09,68.61 C69.47,69.44 69.61,71.35 67.87,73.66 C65.13,77.32 44.99,104.27 44.22,105.22 C42.76,107.02 40.61,106.23 42.01,103.62 C43.18,101.46 61.59,73.43 63.45,70.75 Z",
            fill: "#FFE567"
        }), l.jsx("path", {
            d: "M34.83,65.49 C31.38,67.8 28.17,64.35 30.48,61.82 C32.79,59.29 47.95,46.67 51.02,44.06 C54.09,41.45 72.01,25.86 73.4,24.74 C75.24,23.26 76.38,24.76 75.22,26.3 C74.07,27.84 61.4,40.5 55.81,45.64 C51.49,49.62 38.11,63.29 34.83,65.49 Z",
            fill: "#FFE567"
        })]
    })
})
  , w7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 280 59",
    fill: "var(--icon-color, #0A0A0A)",
    ...t,
    children: l.jsx("path", {
        d: "M13.7266 58.5156C9.62305 58.5156 6.31445 57.2373 3.80078 54.6807C1.30859 52.124 0.0625 48.5469 0.0625 43.9492V17.7812C0.0625 12.2812 1.14746 8.07031 3.31738 5.14844C5.50879 2.22656 9.06445 0.765625 13.9844 0.765625C16.6699 0.765625 19.0547 1.25977 21.1387 2.24805C23.2441 3.23633 24.8984 4.71875 26.1016 6.69531C27.3047 8.65039 27.9062 11.1211 27.9062 14.1074V23.9043H16.627V15.5254C16.627 13.8281 16.4121 12.6895 15.9824 12.1094C15.5527 11.5078 14.8867 11.207 13.9844 11.207C12.9316 11.207 12.2227 11.5938 11.8574 12.3672C11.4922 13.1191 11.3096 14.1289 11.3096 15.3965V43.7881C11.3096 45.3564 11.5352 46.4629 11.9863 47.1074C12.459 47.752 13.125 48.0742 13.9844 48.0742C14.9512 48.0742 15.6279 47.6768 16.0146 46.8818C16.4229 46.0869 16.627 45.0557 16.627 43.7881V33.5723H28.0352V44.3037C28.0352 49.2881 26.7783 52.9082 24.2646 55.1641C21.751 57.3984 18.2383 58.5156 13.7266 58.5156ZM30.291 58L35.7695 1.28125H55.0088L60.3906 58H49.6592L48.8535 48.8477H42.0215L41.3125 58H30.291ZM42.8271 39.792H47.9834L45.502 10.9492H44.9863L42.8271 39.792ZM77.3418 58.5156C72.1641 58.5156 68.4258 57.2266 66.127 54.6484C63.8496 52.0703 62.7109 47.9668 62.7109 42.3379V36.7949H73.9258V43.8848C73.9258 45.1953 74.1191 46.2266 74.5059 46.9785C74.9141 47.709 75.6123 48.0742 76.6006 48.0742C77.6318 48.0742 78.3408 47.7734 78.7275 47.1719C79.1357 46.5703 79.3398 45.582 79.3398 44.207C79.3398 42.4668 79.168 41.0166 78.8242 39.8564C78.4805 38.6748 77.8789 37.5576 77.0195 36.5049C76.1816 35.4307 75.0107 34.1846 73.5068 32.7666L68.415 27.9326C64.6123 24.3447 62.7109 20.2412 62.7109 15.6221C62.7109 10.7881 63.8281 7.10352 66.0625 4.56836C68.3184 2.0332 71.5732 0.765625 75.8271 0.765625C81.0264 0.765625 84.7109 2.15137 86.8809 4.92285C89.0723 7.69434 90.168 11.9053 90.168 17.5557H78.6309V13.6562C78.6309 12.8828 78.4053 12.2812 77.9541 11.8516C77.5244 11.4219 76.9336 11.207 76.1816 11.207C75.2793 11.207 74.6133 11.4648 74.1836 11.9805C73.7754 12.4746 73.5713 13.1191 73.5713 13.9141C73.5713 14.709 73.7861 15.5684 74.2158 16.4922C74.6455 17.416 75.4941 18.4795 76.7617 19.6826L83.3037 25.9668C84.6143 27.2129 85.8174 28.5342 86.9131 29.9307C88.0088 31.3057 88.8896 32.917 89.5557 34.7646C90.2217 36.5908 90.5547 38.8252 90.5547 41.4678C90.5547 46.7959 89.5664 50.9746 87.5898 54.0039C85.6348 57.0117 82.2188 58.5156 77.3418 58.5156ZM94.3574 58V1.28125H105.637V21.5518H110.986V1.28125H122.266V58H110.986V32.2832H105.637V58H94.3574ZM154.46 58.5156C146.36 58.5156 142.311 52.7148 142.311 41.1133V16.6533C142.311 6.06152 146.951 0.765625 156.232 0.765625C160.057 0.765625 162.989 1.53906 165.03 3.08594C167.071 4.61133 168.479 6.8457 169.252 9.78906C170.025 12.7324 170.412 16.3203 170.412 20.5527H159.326V15.5254C159.326 14.3008 159.154 13.2803 158.811 12.4639C158.488 11.626 157.801 11.207 156.748 11.207C155.438 11.207 154.567 11.6475 154.138 12.5283C153.729 13.4092 153.525 14.376 153.525 15.4287V42.918C153.525 44.4434 153.719 45.6895 154.105 46.6562C154.514 47.6016 155.298 48.0742 156.458 48.0742C157.661 48.0742 158.456 47.6016 158.843 46.6562C159.251 45.6895 159.455 44.4219 159.455 42.8535V34.7646H156.426V24.9678H170.283V58H165.739L163.806 53.2305C161.829 56.7539 158.714 58.5156 154.46 58.5156ZM173.248 58L178.727 1.28125H197.966L203.348 58H192.616L191.811 48.8477H184.979L184.27 58H173.248ZM185.784 39.792H190.94L188.459 10.9492H187.943L185.784 39.792ZM206.828 58V1.28125H224.102L228.871 35.8604L233.608 1.28125H251.043V58H240.666V17.1367L234.156 58H223.973L217.076 17.1367V58H206.828ZM256.07 58V1.28125H278.758V12.2383H267.607V23.292H278.307V33.959H267.607V46.9463H279.499V58H256.07Z"
    })
})
  , S7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 11.75 20",
    fill: "var(--icon-color)",
    ...t,
    children: l.jsx("path", {
        d: "m4.276 13.77v-1.257q0-0.9016 0.2869-1.626 0.3006-0.7377 0.9017-1.352 0.6148-0.6148 1.544-1.175 0.7924-0.4918 1.271-0.9563 0.4919-0.4781 0.7105-1.038 0.2186-0.5601 0.2186-1.284v-0.01361q0-0.8607-0.4235-1.516-0.4099-0.6694-1.161-1.038-0.7515-0.3825-1.763-0.3825-1.025 0-1.79 0.3825-0.7515 0.3825-1.189 1.066-0.4372 0.6694-0.5328 1.585l-0.0136 0.1366h-2.336l0.0136-0.1776q0.1093-1.393 0.7788-2.555 0.6831-1.175 1.967-1.872 1.284-0.6967 3.197-0.6967 1.722 0 3.019 0.6557 1.312 0.6421 2.036 1.762 0.7378 1.107 0.7378 2.527v0.01361q0 1.066-0.3552 1.94-0.3416 0.8606-0.9837 1.544-0.6422 0.6831-1.517 1.216-0.8608 0.5055-1.353 0.9699-0.4782 0.4645-0.6831 0.9973-0.1913 0.5328-0.1913 1.257v0.888zm1.202 6.23q-0.6558 0-1.107-0.4508-0.4509-0.4508-0.4509-1.107 0-0.6694 0.4509-1.107 0.4509-0.4508 1.107-0.4508 0.6695 0 1.107 0.4508 0.4509 0.4372 0.4509 1.107 0 0.6557-0.4509 1.107-0.4372 0.4508-1.107 0.4508z"
    })
})
  , _7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 14 14",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M4 1V13M10 1V13M1 7H13M1 4H4M1 10H4M10 10H13M10 4H13M2.308 1H11.692C12.4144 1 13 1.58561 13 2.308V11.692C13 12.4144 12.4144 13 11.692 13H2.308C1.58561 13 1 12.4144 1 11.692V2.308C1 1.58561 1.58561 1 2.308 1Z",
        stroke: "#141414",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , k7 = (t={}) => l.jsx("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    ...t,
    children: l.jsx("path", {
        d: "M15 10.3333V13.4444C15 13.857 14.8361 14.2527 14.5444 14.5444C14.2527 14.8361 13.857 15 13.4444 15H2.55556C2.143 15 1.74733 14.8361 1.45561 14.5444C1.16389 14.2527 1 13.857 1 13.4444V10.3333M11.8889 4.88889L8 1M8 1L4.11111 4.88889M8 1V10.3333",
        stroke: "var(--icon-color, #5C5C5C)",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
})
  , I7 = ({checked: t, childrenClassName: e, className: n, ...i}={}) => l.jsxs("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "var(--icon-color)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "var(--icon-stroke-width, 1.5)",
    className: `group transition-[stroke-dasharray,stroke-dashoffset] ${n}`,
    ...i,
    children: [l.jsx("path", {
        d: "M 5.5,6.5 8,9 15,1.5",
        className: `${e} ${t ? "[stroke-dasharray:20_0]" : "[stroke-dasharray:0_20] [stroke-dashoffset:1]"}`
    }), l.jsx("rect", {
        x: "1",
        y: "1",
        width: "14",
        height: "14",
        rx: "2",
        ry: "2",
        className: `${e} ${t ? "[stroke-dasharray:40_8] [stroke-dashoffset:-16]" : "[stroke-dasharray:60_0] [stroke-dashoffset:-12]"}`
    })]
});
function Xo(t, e, n) {
    return (e = r4(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function r4(t) {
    var e = o4(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function o4(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
class Ur extends Error {
    constructor(e, n, i) {
        super(n),
        Xo(this, "errorCode", void 0),
        Xo(this, "cause", void 0),
        this.name = "APIError",
        this.errorCode = e,
        this.cause = i,
        Error.captureStackTrace && Error.captureStackTrace(this, Ur)
    }
}
function a4(t, e, n) {
    return (e = l4(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function l4(t) {
    var e = c4(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function c4(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
class Zn extends Error {
    constructor(e, n) {
        super(e ?? (n == null ? "TimeoutError" : `Timeout occurred after ${n}ms`)),
        a4(this, "duration", void 0),
        Error.captureStackTrace && Error.captureStackTrace(this, Zn)
    }
}
const u4 = "WERM"
  , M7 = `${u4} | `
  , gr = "tutorial"
  , U1 = "kill-quote"
  , d4 = ({...t}={}) => l.jsx("svg", {
    viewBox: "0 0 36 36",
    ...t,
    children: l.jsx("path", {
        d: "M 10,35 H 2 V 16 l 9,-4.5 -9,0 V 5 H 14 L 8,1 H 22 v 4 h 12 v 6.5 l -9,0 9,4.5 v 19 h -8 v -11 h 6 L 22,19 V 35 H 14 V 19 L 4,24 H 10 Z"
    })
})
  , h4 = ({...t}={}) => l.jsxs("svg", {
    viewBox: "0 0 550 550",
    ...t,
    children: [l.jsx("circle", {
        cx: "275",
        cy: "275",
        r: "275",
        "data-token-icon-role": "background",
        fill: "white"
    }), l.jsx("path", {
        d: "m275 0a275 275 0 0 0-275 275 275 275 0 0 0 16.08 90.725l53.551-37.643a212.5 212.5 0 0 1-7.1309-53.082 212.5 212.5 0 0 1 212.5-212.5 212.5 212.5 0 0 1 212.5 212.5 212.5 212.5 0 0 1-7.1309 53.082l53.551 37.643a275 275 0 0 0 16.08-90.725 275 275 0 0 0-275-275zm12.5 80.705v89.295h151.56a195 195 0 0 0-18.316-24.5h-103.24v-60.752a195 195 0 0 0-30-4.043zm-25 0.23047a195 195 0 0 0-70.27 17.648l40.27 46.916h-103.07a195 195 0 0 0-18.32 24.5h151.39zm-163.92 111.56a195 195 0 0 0-9.6934 24.9l101.11 0.0996-108.65 76.377a195 195 0 0 0 3.9883 23.162l177.16-124.54zm188.92 0 177.16 124.54a195 195 0 0 0 3.9883-23.162l-108.65-76.377 101.28-0.0996a195 195 0 0 0-9.6914-24.9zm-25 22.5-171.8 120.77a195 195 0 0 0 119.3 122.44v-138.21h-55l80-55v282.01a275 275 0 0 0 27.5 2.0918v-83.865zm25 0v334.11a275 275 0 0 0 27.5-2.0918v-282.01l80 55h-55v138.21a195 195 0 0 0 119.3-122.44zm-212.06 131.49-52.713 37.057a275 275 0 0 0 187.27 158.03v-64.598a212.5 212.5 0 0 1-134.56-130.48zm399.11 0a212.5 212.5 0 0 1-134.56 130.48v64.598a275 275 0 0 0 187.27-158.03z"
    })]
})
  , Jo = t => {
    const e = Be.c(25);
    let n;
    e[0] !== t ? (n = t === void 0 ? {} : t,
    e[0] = t,
    e[1] = n) : n = e[1];
    let i, s, r;
    e[2] !== n ? ({circle: s, monochrome: r, ...i} = n,
    e[2] = n,
    e[3] = i,
    e[4] = s,
    e[5] = r) : (i = e[3],
    s = e[4],
    r = e[5]);
    const o = s === void 0 ? !1 : s
      , a = r === void 0 ? !1 : r
      , c = o === !1 ? 182 : o === !0 ? 256 : o
      , u = `-${c} -${c} ${c * 2} ${c * 2}`;
    let d;
    e[6] !== a ? (d = !a && l.jsxs(l.Fragment, {
        children: [l.jsxs("linearGradient", {
            id: "SVGID_1_",
            x1: "360.9",
            x2: "141.2",
            y1: "351.5",
            y2: "-69.29",
            gradientTransform: "matrix(.9143 0 0 -.9143 -181.8 144.6)",
            gradientUnits: "userSpaceOnUse",
            children: [l.jsx("stop", {
                stopColor: "#00FFA3",
                offset: "0"
            }), l.jsx("stop", {
                stopColor: "#DC1FFF",
                offset: "1"
            })]
        }), l.jsxs("linearGradient", {
            id: "SVGID_2_",
            x1: "264.8",
            x2: "45.16",
            y1: "401.6",
            y2: "-19.15",
            gradientTransform: "matrix(.9143 0 0 -.9143 -181.8 144.6)",
            gradientUnits: "userSpaceOnUse",
            children: [l.jsx("stop", {
                stopColor: "#00FFA3",
                offset: "0"
            }), l.jsx("stop", {
                stopColor: "#DC1FFF",
                offset: "1"
            })]
        }), l.jsxs("linearGradient", {
            id: "SVGID_3_",
            x1: "312.6",
            x2: "92.88",
            y1: "376.7",
            y2: "-44.06",
            gradientTransform: "matrix(.9143 0 0 -.9143 -181.8 144.6)",
            gradientUnits: "userSpaceOnUse",
            children: [l.jsx("stop", {
                stopColor: "#00FFA3",
                offset: "0"
            }), l.jsx("stop", {
                stopColor: "#DC1FFF",
                offset: "1"
            })]
        })]
    }),
    e[6] = a,
    e[7] = d) : d = e[7];
    let h;
    e[8] !== o || e[9] !== c ? (h = o !== !1 && l.jsx("circle", {
        r: c
    }),
    e[8] = o,
    e[9] = c,
    e[10] = h) : h = e[10];
    const f = a ? void 0 : "url(#SVGID_1_)";
    let m;
    e[11] !== f ? (m = l.jsx("path", {
        d: "m-122.7 75.02c2.194-2.194 5.211-3.474 8.411-3.474h290.2c5.303 0 7.954 6.4 4.206 10.15l-57.33 57.33c-2.194 2.194-5.211 3.474-8.411 3.474h-290.2c-5.303 0-7.954-6.4-4.206-10.15z",
        fill: f
    }),
    e[11] = f,
    e[12] = m) : m = e[12];
    const g = a ? void 0 : "url(#SVGID_2_)";
    let p;
    e[13] !== g ? (p = l.jsx("path", {
        d: "m-122.7-139c2.286-2.194 5.303-3.474 8.411-3.474h290.2c5.303 0 7.954 6.4 4.206 10.15l-57.33 57.33c-2.194 2.194-5.211 3.474-8.411 3.474h-290.2c-5.303 0-7.954-6.4-4.206-10.15z",
        fill: g
    }),
    e[13] = g,
    e[14] = p) : p = e[14];
    const v = a ? void 0 : "url(#SVGID_3_)";
    let x;
    e[15] !== v ? (x = l.jsx("path", {
        d: "m122.7-32.69c-2.194-2.194-5.211-3.474-8.411-3.474h-290.2c-5.303 0-7.954 6.4-4.206 10.15l57.33 57.33c2.194 2.194 5.211 3.474 8.411 3.474h290.2c5.303 0 7.954-6.4 4.206-10.15z",
        fill: v
    }),
    e[15] = v,
    e[16] = x) : x = e[16];
    let y;
    return e[17] !== i || e[18] !== p || e[19] !== x || e[20] !== u || e[21] !== d || e[22] !== h || e[23] !== m ? (y = l.jsxs("svg", {
        viewBox: u,
        ...i,
        children: [d, h, m, p, x]
    }),
    e[17] = i,
    e[18] = p,
    e[19] = x,
    e[20] = u,
    e[21] = d,
    e[22] = h,
    e[23] = m,
    e[24] = y) : y = e[24],
    y
}
  , f4 = ({...t}={}) => l.jsxs("svg", {
    viewBox: "0 0 64 64",
    fill: "#2775ca",
    ...t,
    children: [l.jsx("circle", {
        cx: "32",
        cy: "32",
        r: "32",
        fill: "#2775ca"
    }), l.jsx("path", {
        d: "m39.022 9.4336c0.26071 0.026484 0.51168 0.13219 0.75977 0.21484 0.68566 0.22835 1.3607 0.49822 2.0195 0.79492 2.9517 1.3296 5.6002 3.2387 7.8047 5.6074 6.6542 7.1498 8.2463 17.982 3.9961 26.76-1.1698 2.4159-2.7638 4.6346-4.6621 6.5312-2.085 2.0832-4.5637 3.7718-7.2598 4.9629-0.58383 0.25796-1.1782 0.48069-1.7773 0.69922-0.33621 0.12281-0.71736 0.2998-1.084 0.26367-0.37927-0.0373-0.69143-0.29187-0.80078-0.6582-0.0949-0.31756-0.04297-0.69473-0.04297-1.0234 0-0.81876-0.18812-1.8605 0.63281-2.3633 0.39586-0.2426 0.89675-0.36747 1.3242-0.55078 0.72482-0.31094 1.4274-0.67479 2.1094-1.0703 2.5185-1.4605 4.6993-3.5068 6.3652-5.8887 3.6552-5.2261 4.5458-12.064 2.4102-18.059-0.91189-2.5603-2.3761-4.9368-4.2285-6.9238-1.5093-1.6189-3.2943-2.9738-5.2402-4.0254-0.84803-0.45831-1.7583-0.75266-2.6211-1.168-1.0101-0.4861-0.75195-1.8462-0.75195-2.7539 0-0.58427 0.06983-1.243 0.7832-1.3457 0.08917-0.01285 0.17677-0.012734 0.26367-0.00391zm-14.152 0.00391c0.44613-0.0642 0.89321 0.1513 1.043 0.59375 0.11581 0.34213 0.07227 0.72821 0.07227 1.084 0 0.80553 0.15289 1.7423-0.57227 2.3008-0.24846 0.19132-0.58496 0.27351-0.87305 0.38867-0.49057 0.19606-0.97474 0.4143-1.4473 0.65039-1.3786 0.68874-2.6638 1.5357-3.8555 2.5117-5.33 4.3652-7.9855 11.351-7.0703 18.139 0.7109 5.2732 3.6855 10.235 8.0039 13.352 1.0457 0.75434 2.1474 1.4257 3.3145 1.9766 0.40505 0.19114 0.81852 0.36314 1.2344 0.5293 0.23137 0.0924 0.49808 0.15628 0.69336 0.31641 0.78818 0.64658 0.57227 1.7617 0.57227 2.668 0 0.50359-0.051 1.0628-0.60352 1.2617-0.46343 0.16676-0.94802-0.06536-1.3848-0.2168-1.0798-0.37476-2.1639-0.82474-3.1641-1.3789-4.2139-2.334-7.5775-5.5774-9.9531-9.7793-3.2519-5.7514-3.7943-13.049-1.6348-19.266 1.5105-4.3474 4.2425-8.2548 7.8828-11.09 1.649-1.2843 3.4433-2.3578 5.3633-3.1855 0.73573-0.31721 1.5806-0.74052 2.3789-0.85547zm7.9141 6.8848c0.42228 0.02754 0.81272 0.14104 1.0352 0.48242 0.22142 0.33969 0.15039 0.78805 0.15039 1.1738v2.5586c2.3091 0.29855 4.4642 1.7119 5.4297 3.8516 0.25547 0.56663 0.73884 1.5471 0.46289 2.168-0.37295 0.83906-1.8079 0.54102-2.5508 0.54102-0.31963 0-0.64559 0.03637-0.93359-0.13086-0.39585-0.2297-0.44895-0.65916-0.61133-1.043-0.21932-0.51828-0.52066-1.0049-0.95508-1.3711-0.37838-0.31908-0.81955-0.55441-1.2949-0.69336-1.9558-0.57156-5.3127-0.35505-5.8613 2.0957-0.0761 0.33918-0.07822 0.67769-0.07422 1.0234 0.0307 2.5788 3.3014 2.9023 5.2422 3.1816 2.6378 0.37987 6.075 1.0847 7.3105 3.7715 0.29343 0.63783 0.47637 1.3188 0.55469 2.0156 0.0795 0.70708 0.09455 1.4323-2e-3 2.1387-0.15122 1.1011-0.59426 2.1878-1.2715 3.0703-0.87696 1.1432-2.063 1.9681-3.3984 2.4922-0.44888 0.17609-0.91482 0.30974-1.3848 0.41602-0.15755 0.0355-0.49864 0.03929-0.61523 0.1543-0.14189 0.13998-0.04687 0.68913-0.04687 0.88086v1.6543c0 0.27814 0.0439 0.60275-0.0293 0.87305-0.25788 0.95119-1.4888 0.72266-2.2305 0.72266-0.25034 0-0.50387 9e-3 -0.75391-2e-3 -0.42025-0.0187-0.81277-0.27826-0.94141-0.68945-0.0892-0.28626-0.05273-0.60841-0.05273-0.9043v-1.5957c0-0.20076 0.09938-0.79376-0.04883-0.93945-0.13797-0.13515-0.60422-0.13591-0.79492-0.17383-0.59618-0.1192-1.1791-0.29453-1.7461-0.51367-1.9519-0.75433-3.4651-2.3185-4.127-4.3027-0.18087-0.54211-0.53125-1.3604-0.29883-1.9258 0.11014-0.26791 0.353-0.46246 0.62891-0.53711 0.26616-0.0719 0.57015-0.03516 0.84375-0.03516 0.66814 0 1.7668-0.21217 2.3184 0.23242 0.37925 0.30583 0.38569 0.8451 0.53516 1.2734 0.21645 0.62008 0.54939 1.2026 1.0332 1.6523 0.67361 0.6261 1.5742 0.93531 2.4707 1.0645 2.0196 0.29108 4.5596-0.05497 5.502-2.1445 0.645-1.4308 0.23227-3.2001-1.1641-3.9785-1.19-0.66312-2.6526-0.82626-3.9766-1.0312-1.9708-0.30553-4.1736-0.73554-5.7539-2.0371-2.5284-2.083-2.5365-6.3114-0.5-8.7266 1.2508-1.4832 3.1736-2.3481 5.0781-2.5898v-2.4062c0-0.38307-0.0629-0.82763 0.13086-1.1758 0.13556-0.24362 0.35523-0.40415 0.62305-0.47656 0.26601-0.0719 0.57021-0.03516 0.84375-0.03516 0.3487 0 0.80232-0.05683 1.2246-0.0293z",
        fill: "#fff"
    })]
})
  , m4 = ({fill: t, ...e}={}) => l.jsxs("svg", {
    viewBox: "0 0 515 500",
    ...e,
    fill: t !== null ? t ?? "#a1fea0" : void 0,
    children: [l.jsx("path", {
        d: "M138.54,427.17c-47.46,0-76.35-38.48-64.52-85.95l45.49-182.44c11.83-47.46,59.91-85.95,107.38-85.95h248.01C440.11,27.82,384.22,0,315.38,0,177.31,0,39.47,111.92,7.5,250c-31.96,138.08,54.04,250,192.12,250,68.84,0,137.61-27.82,193.24-72.83h-254.32Z"
    }), l.jsx("path", {
        d: "M262.29,143.07c-11.87,0-23.89,9.62-26.84,21.49l-12.55,50.32h193.15l-17.51,70.24h-193.15l-12.55,50.32c-2.96,11.87,4.26,21.49,16.13,21.49h249.81c22.87-32.42,39.87-68.67,48.73-106.93,8.86-38.26,8.64-74.51.78-106.93h-246Z"
    })]
})
  , p4 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 540 879.4",
    ...t,
    children: [l.jsx("path", {
        d: "m269.9 325.2-269.9 122.7 269.9 159.6 270-159.6z",
        opacity: ".6"
    }), l.jsx("path", {
        d: "m0.1 447.8 269.9 159.6v-607.4z",
        opacity: ".45"
    }), l.jsx("path", {
        d: "m270 0v607.4l269.9-159.6z",
        opacity: ".8"
    }), l.jsx("path", {
        d: "m0 499 269.9 380.4v-220.9z",
        opacity: ".45"
    }), l.jsx("path", {
        d: "m269.9 658.5v220.9l270.1-380.4z",
        opacity: ".8"
    })]
})
  , g4 = (t={}) => l.jsx("svg", {
    viewBox: "-19 -19 38 38",
    fill: "#00DE73",
    ...t,
    children: l.jsx("path", {
        d: "m-3.917-16.65-4.729 1.271 2.695 10.12c0.2298 0.8669 0.1142 1.774-0.334 2.549-0.4482 0.7803-1.166 1.335-2.027 1.566l-10.07 2.711 1.264 4.756 10.07-2.709 0.0059-0.0059 5.82-10.14zm7.832 0-2.695 10.12 5.82 10.14 0.0059 0.0059 10.07 2.709 1.266-4.756-10.07-2.711c-0.8619-0.2312-1.581-0.7861-2.029-1.566-0.4481-0.7744-0.5638-1.682-0.334-2.549l2.695-10.13zm-9.738 22.41-7.373 7.416 3.459 3.479 7.373-7.414c0.6321-0.6357 1.465-0.9824 2.361-0.9824s1.729 0.3467 2.361 0.9824l7.371 7.414 3.459-3.479-7.371-7.416z",
        fill: "#00DE73"
    })
})
  , y4 = (t={}) => l.jsxs("svg", {
    viewBox: "0 0 45 45",
    fill: "#E33E3F",
    ...t,
    children: [l.jsx("path", {
        d: "m34.28 32.3c1.55 0 2.324 0 2.806 0.4814 0.4814 0.4813 0.4814 1.256 0.4814 2.806v2.191c0 3.099 0 4.648-0.9626 5.611-0.9628 0.9627-2.512 0.9627-5.611 0.9627h-16.98c-3.099 0-4.648 0-5.611-0.9627-0.9627-0.9628-0.9627-2.512-0.9627-5.611v-2.191c0-1.55-9.6e-6 -2.324 0.4814-2.806 0.4814-0.4814 1.256-0.4814 2.806-0.4814z"
    }), l.jsx("path", {
        d: "m22.5 6.964c15.28 0 15.07 10.19 15.07 15.07v5.478c0 0.9076-0.7358 1.644-1.644 1.644h-26.84c-0.9077 0-1.643-0.7359-1.643-1.644 0 0-1e-7 -0.6025 0-5.478 0-4.876-0.2193-15.07 15.07-15.07zm0 3.883c-2.572 0-4.656 2.085-4.656 4.657 0 2.572 2.085 4.656 4.656 4.656 2.572 0 4.656-2.085 4.656-4.656 0-2.572-2.085-4.657-4.656-4.657z",
        clipRule: "evenodd",
        fillRule: "evenodd"
    }), l.jsx("path", {
        d: "m22.5 0.6472c3.298 0 6.185 1.153 6.949 3.03 0.1151 0.3239 0.1725 0.4859 0.0703 0.6061-0.1023 0.1203-0.3001 0.08442-0.6957 0.01271-1.023-0.1853-2.47-0.3128-3.745-0.3504-0.8132-0.04371-1.671-0.06635-2.574-0.06635-0.9023 0-1.76 0.02268-2.573 0.06635-1.281 0.03763-2.733 0.165-3.76 0.3441-0.3872 0.06757-0.5809 0.1013-0.6824-0.0186-0.1014-0.1199-0.04537-0.279 0.06688-0.5969 0.7574-1.871 3.646-3.027 6.943-3.027z"
    })]
})
  , v4 = ({transparentBackground: t=!1, tight: e=!1, ...n}={}) => l.jsxs("svg", {
    viewBox: e ? "20 20 90 90" : "0 0 128 128",
    ...n,
    children: [!t && l.jsx("rect", {
        width: "128",
        height: "128",
        fill: "#AB9FF2"
    }), l.jsx("path", {
        d: "m82.63 29.33c-0.9059 0-1.815 0.03384-2.725 0.1016-0.9093 0.06772-1.82 0.1683-2.73 0.3008-0.9106 0.1325-1.821 0.2978-2.73 0.4922-0.9099 0.1944-1.819 0.4185-2.727 0.6719-0.9072 0.2533-1.812 0.5364-2.715 0.8457-0.9024 0.3094-1.802 0.6454-2.697 1.008-0.8955 0.3624-1.787 0.7495-2.674 1.162-0.8867 0.4126-1.769 0.8507-2.645 1.311-0.8757 0.4598-1.745 0.9431-2.607 1.447-0.8627 0.5041-1.719 1.029-2.566 1.574-0.8477 0.5455-1.687 1.111-2.518 1.695s-1.653 1.185-2.465 1.805c-0.8116 0.6195-1.612 1.256-2.402 1.908s-1.571 1.32-2.338 2.002c-0.7672 0.6817-1.522 1.377-2.264 2.086-0.742 0.7085-1.471 1.43-2.186 2.162-0.7147 0.7323-1.416 1.475-2.102 2.229-0.6853 0.7532-1.354 1.516-2.008 2.287-0.654 0.7711-1.294 1.552-1.914 2.338s-1.224 1.579-1.809 2.377-1.152 1.603-1.699 2.41c-0.5476 0.8074-1.076 1.618-1.584 2.432-0.508 0.8137-0.9945 1.63-1.461 2.447-0.4664 0.817-0.9132 1.634-1.336 2.451s-0.8221 1.634-1.199 2.449c-0.3771 0.8149-0.7312 1.628-1.061 2.438s-0.6345 1.615-0.9141 2.416c-0.2796 0.801-0.534 1.597-0.7617 2.387s-0.4277 1.574-0.6016 2.35c-0.1739 0.7754-0.3215 1.543-0.4395 2.301-0.118 0.7583-0.2076 1.506-0.2676 2.244-0.06 0.7382-0.08984 1.467-0.08984 2.182 0 0.5616 0.01807 1.097 0.05469 1.605 0.03662 0.5087 0.09114 0.991 0.1621 1.449 0.07096 0.4583 0.1587 0.8926 0.2617 1.303s0.2226 0.7958 0.3555 1.16 0.279 0.7063 0.4395 1.027 0.3338 0.6204 0.5195 0.9004c0.1857 0.28 0.385 0.5419 0.5938 0.7832 0.2087 0.2413 0.4268 0.4629 0.6562 0.668 0.2295 0.205 0.4688 0.3933 0.7168 0.5645 0.248 0.1711 0.5053 0.3253 0.7695 0.4648 0.2642 0.1396 0.5363 0.2646 0.8145 0.375 0.2782 0.1104 0.5636 0.2055 0.8535 0.2891s0.5835 0.1557 0.8828 0.2148 0.6037 0.1055 0.9102 0.1426c0.3065 0.03706 0.6163 0.06469 0.9277 0.08203 0.3114 0.01734 0.6234 0.02539 0.9375 0.02539 0.6643 0 1.319-0.03598 1.963-0.1055s1.276-0.1731 1.898-0.3066c0.6225-0.1335 1.235-0.2981 1.836-0.4902s1.192-0.4111 1.771-0.6562c0.5795-0.2452 1.147-0.5158 1.705-0.8086 0.5576-0.2928 1.105-0.6083 1.641-0.9434 0.5354-0.335 1.059-0.6907 1.572-1.062s1.016-0.7591 1.506-1.162c0.4902-0.403 0.9684-0.8212 1.436-1.25 0.4672-0.4288 0.9233-0.8692 1.367-1.318 0.4438-0.4492 0.8747-0.907 1.295-1.371 0.4202-0.464 0.8283-0.9347 1.225-1.408 0.3963-0.4735 0.7821-0.9503 1.154-1.428 0.3722-0.4774 0.7304-0.9538 1.078-1.43 0.6954-0.9519 1.342-1.895 1.938-2.809-0.145 0.404-0.273 0.8079-0.3848 1.211-0.1117 0.403-0.2067 0.8051-0.2832 1.205-0.0765 0.4-0.1346 0.7965-0.1738 1.191-0.03926 0.3949-0.05859 0.7879-0.05859 1.176 0 0.2667 0.008235 0.5285 0.02734 0.7852s0.04775 0.5082 0.08594 0.7539c0.03819 0.2457 0.0873 0.4849 0.1445 0.7188s0.123 0.4624 0.1992 0.6836 0.1626 0.4349 0.2578 0.6426 0.2003 0.4084 0.3145 0.6016c0.1142 0.1932 0.238 0.3788 0.3711 0.5566s0.2757 0.3482 0.4277 0.5098c0.152 0.1616 0.3135 0.3145 0.4844 0.459 0.1708 0.1445 0.3494 0.2797 0.5391 0.4062s0.3892 0.2439 0.5977 0.3516c0.2085 0.1076 0.4271 0.207 0.6543 0.2949 0.2272 0.08787 0.463 0.1652 0.709 0.2324 0.246 0.06723 0.501 0.1242 0.7656 0.1699 0.2647 0.0457 0.5389 0.08022 0.8223 0.1035s0.5769 0.03516 0.8789 0.03516c0.4147 0 0.8308-0.02226 1.248-0.06641 0.4173-0.04414 0.8359-0.1096 1.254-0.1953 0.418-0.08566 0.8352-0.1918 1.252-0.3164 0.4168-0.1246 0.8324-0.2688 1.246-0.4297 0.4137-0.1609 0.8256-0.3387 1.234-0.5332 0.4087-0.1945 0.8149-0.4053 1.217-0.6309s0.8002-0.4667 1.193-0.7207c0.3931-0.254 0.7816-0.521 1.164-0.8008s0.7589-0.572 1.129-0.875c0.37-0.303 0.7323-0.6159 1.088-0.9395 0.3556-0.3235 0.7037-0.6566 1.043-0.998 0.3393-0.3415 0.6711-0.692 0.9922-1.049 0.3211-0.3568 0.6326-0.7203 0.9336-1.09 0.301-0.3695 0.5901-0.7454 0.8691-1.125 0.2791-0.3796 0.5475-0.7633 0.8027-1.15 0.2552-0.3871 0.4971-0.7761 0.7266-1.168-0.1288 0.4525-0.2246 0.8884-0.2891 1.309-0.06441 0.4202-0.0957 0.8231-0.0957 1.211 0 0.3717 0.02566 0.7267 0.07812 1.062 0.05247 0.3358 0.1311 0.6542 0.2363 0.9512 0.1052 0.297 0.2364 0.5731 0.3945 0.8281s0.3433 0.4891 0.5547 0.6992c0.2114 0.2101 0.45 0.3965 0.7148 0.5586 0.2649 0.1621 0.5564 0.299 0.875 0.4102 0.3186 0.1111 0.6626 0.1968 1.035 0.2539 0.3726 0.05707 0.7724 0.08594 1.199 0.08594 0.3362 0 0.6738-0.02005 1.01-0.05664 0.336-0.03659 0.6707-0.09024 1.006-0.1621s0.6703-0.1617 1.004-0.2676 0.6647-0.2267 0.9961-0.3652c0.3314-0.1385 0.6617-0.293 0.9902-0.4629s0.6555-0.3567 0.9805-0.5566c0.325-0.1999 0.6479-0.4139 0.9688-0.6426 0.3208-0.2286 0.6391-0.4705 0.9551-0.7266s0.631-0.5264 0.9414-0.8086 0.6176-0.5758 0.9219-0.8828c0.3042-0.307 0.605-0.6266 0.9023-0.957 0.2974-0.3305 0.591-0.6728 0.8809-1.025 0.2899-0.3526 0.5757-0.7163 0.8574-1.09 0.2817-0.3735 0.5592-0.7573 0.832-1.15 0.5457-0.7861 1.074-1.61 1.58-2.467 0.5063-0.8565 0.9915-1.746 1.453-2.662 0.4616-0.9164 0.8989-1.86 1.311-2.826s0.798-1.952 1.154-2.957c0.3563-1.005 0.6828-2.027 0.9785-3.061s0.5593-2.078 0.7891-3.129c0.2298-1.051 0.4255-2.109 0.584-3.168 0.07924-0.5294 0.1486-1.059 0.209-1.588 0.06043-0.5293 0.1114-1.06 0.1524-1.588 0.04094-0.5279 0.07294-1.055 0.09375-1.58 0.0208-0.5252 0.03125-1.047 0.03125-1.568 0-0.8121-0.02597-1.618-0.07813-2.416-0.05216-0.7976-0.1304-1.587-0.2363-2.365-0.1059-0.7782-0.239-1.545-0.4004-2.299-0.1614-0.754-0.3519-1.496-0.5703-2.221s-0.465-1.434-0.7422-2.125c-0.2771-0.6911-0.5844-1.363-0.9219-2.016-0.1687-0.3262-0.3452-0.6472-0.5293-0.9629-0.1841-0.3156-0.3764-0.6272-0.5762-0.9316-0.1997-0.3045-0.4075-0.6019-0.623-0.8945-0.2155-0.2927-0.4384-0.581-0.6699-0.8613-0.2315-0.2803-0.471-0.553-0.7188-0.8203-0.2477-0.2673-0.5034-0.5275-0.7676-0.7812s-0.5357-0.5007-0.8164-0.7402c-0.2808-0.2395-0.5716-0.4726-0.8691-0.6973-0.2976-0.2247-0.6034-0.4411-0.918-0.6504-0.3146-0.2093-0.6369-0.4102-0.9688-0.6035-0.3318-0.1933-0.6722-0.38-1.021-0.5566s-0.7073-0.3444-1.074-0.5039c-0.3669-0.1595-0.7422-0.3095-1.127-0.4512-0.3847-0.1416-0.7788-0.2752-1.182-0.3984-0.4028-0.1232-0.8153-0.2357-1.236-0.3398-0.421-0.1042-0.8515-0.2006-1.291-0.2852-0.4395-0.08456-0.8875-0.1583-1.346-0.2227-0.4582-0.06433-0.9253-0.1186-1.402-0.1621s-0.9648-0.07561-1.461-0.09766c-0.4961-0.02205-1-0.0332-1.516-0.0332zm-6.754 18.3c0.3124 0 0.6197 0.03068 0.9199 0.08984 0.3002 0.05916 0.5926 0.1473 0.873 0.2656 0.2804 0.1183 0.5498 0.2659 0.8027 0.4434 0.2529 0.1775 0.4893 0.3845 0.707 0.6211 0.2177 0.2366 0.417 0.503 0.5918 0.7988 0.1748 0.2958 0.325 0.6216 0.4492 0.9766 0.1242 0.355 0.2211 0.7382 0.2871 1.152s0.1016 0.8588 0.1016 1.332-0.0356 0.916-0.1016 1.33c-0.06596 0.4141-0.1629 0.7993-0.2871 1.154-0.1242 0.355-0.2744 0.6808-0.4492 0.9766-0.1748 0.2958-0.3741 0.5622-0.5918 0.7988s-0.4541 0.4436-0.707 0.6211c-0.2529 0.1775-0.5223 0.325-0.8027 0.4434s-0.5728 0.2065-0.873 0.2656c-0.3002 0.05916-0.6076 0.08984-0.9199 0.08984-0.3171 0-0.6288-0.03068-0.9316-0.08984-0.3028-0.05916-0.5976-0.1473-0.8789-0.2656-0.2813-0.1183-0.5502-0.2659-0.8027-0.4434s-0.4886-0.3845-0.7051-0.6211-0.4127-0.503-0.5859-0.7988c-0.1733-0.2958-0.3226-0.6216-0.4453-0.9766-0.1228-0.355-0.2182-0.7402-0.2832-1.154-0.065-0.4141-0.09961-0.8568-0.09961-1.33s0.03461-0.9179 0.09961-1.332 0.1605-0.7974 0.2832-1.152c0.1228-0.355 0.2721-0.6808 0.4453-0.9766 0.1733-0.2958 0.3694-0.5622 0.5859-0.7988 0.2165-0.2366 0.4525-0.4436 0.7051-0.6211s0.5214-0.325 0.8027-0.4434c0.2813-0.1183 0.5761-0.2065 0.8789-0.2656 0.3028-0.05916 0.6145-0.08984 0.9316-0.08984zm14.2 0c0.3124 0 0.6197 0.03068 0.9199 0.08984 0.3002 0.05916 0.5926 0.1473 0.873 0.2656s0.5498 0.2659 0.8027 0.4434 0.4893 0.3845 0.707 0.6211c0.2177 0.2366 0.415 0.503 0.5898 0.7988s0.3269 0.6216 0.4512 0.9766c0.1242 0.355 0.2211 0.7402 0.2871 1.154 0.06596 0.4141 0.1016 0.8568 0.1016 1.33 0 0.4733-0.0356 0.9179-0.1016 1.332-0.06596 0.4141-0.1629 0.7974-0.2871 1.152-0.1242 0.355-0.2764 0.6808-0.4512 0.9766s-0.3721 0.5622-0.5898 0.7988c-0.2177 0.2366-0.4541 0.4436-0.707 0.6211s-0.5223 0.325-0.8027 0.4434-0.5728 0.2065-0.873 0.2656c-0.3002 0.05916-0.6076 0.08984-0.9199 0.08984-0.3171 0-0.6288-0.03068-0.9316-0.08984-0.3028-0.05916-0.5976-0.1473-0.8789-0.2656s-0.5502-0.2659-0.8027-0.4434-0.4886-0.3845-0.7051-0.6211-0.4127-0.503-0.5859-0.7988-0.3245-0.6216-0.4473-0.9766c-0.1228-0.355-0.2182-0.7382-0.2832-1.152-0.065-0.4141-0.09961-0.8588-0.09961-1.332 0-0.4733 0.03461-0.916 0.09961-1.33 0.065-0.4141 0.1604-0.7993 0.2832-1.154 0.1228-0.3549 0.274-0.6808 0.4473-0.9766s0.3694-0.5622 0.5859-0.7988c0.2165-0.2366 0.4525-0.4436 0.7051-0.6211s0.5214-0.325 0.8027-0.4434 0.5761-0.2065 0.8789-0.2656c0.3028-0.05916 0.6145-0.08984 0.9316-0.08984z",
        fill: "#FFFDF8"
    }), t && l.jsxs("g", {
        fill: "#AB9FF2",
        children: [l.jsx("path", {
            d: "m75.88 47.64c-0.3171 0-0.6288 0.03068-0.9316 0.08984-0.3028 0.05916-0.5976 0.1473-0.8789 0.2656-0.2813 0.1183-0.5502 0.2659-0.8027 0.4434s-0.4886 0.3845-0.7051 0.6211c-0.2165 0.2366-0.4127 0.503-0.5859 0.7988-0.1733 0.2958-0.3226 0.6216-0.4453 0.9766-0.1228 0.355-0.2182 0.7382-0.2832 1.152s-0.09961 0.8588-0.09961 1.332 0.03461 0.916 0.09961 1.33c0.065 0.4141 0.1605 0.7993 0.2832 1.154 0.1228 0.355 0.2721 0.6808 0.4453 0.9766 0.1733 0.2958 0.3694 0.5622 0.5859 0.7988s0.4525 0.4436 0.7051 0.6211 0.5214 0.325 0.8027 0.4434c0.2813 0.1183 0.5761 0.2065 0.8789 0.2656 0.3028 0.05916 0.6145 0.08984 0.9316 0.08984 0.3124 0 0.6197-0.03068 0.9199-0.08984 0.3002-0.05916 0.5926-0.1473 0.873-0.2656s0.5498-0.2659 0.8027-0.4434c0.2529-0.1775 0.4893-0.3845 0.707-0.6211s0.417-0.503 0.5918-0.7988c0.1748-0.2958 0.325-0.6216 0.4492-0.9766 0.1242-0.355 0.2211-0.7402 0.2871-1.154 0.06596-0.4141 0.1016-0.8568 0.1016-1.33s-0.0356-0.9179-0.1016-1.332-0.1629-0.7974-0.2871-1.152c-0.1242-0.355-0.2744-0.6808-0.4492-0.9766-0.1748-0.2958-0.3741-0.5622-0.5918-0.7988-0.2177-0.2366-0.4541-0.4436-0.707-0.6211-0.2529-0.1775-0.5223-0.325-0.8027-0.4434-0.2804-0.1183-0.5728-0.2065-0.873-0.2656-0.3002-0.05916-0.6076-0.08984-0.9199-0.08984z"
        }), l.jsx("path", {
            d: "m90.08 47.64c-0.3171 0-0.6288 0.03068-0.9316 0.08984-0.3028 0.05916-0.5976 0.1473-0.8789 0.2656s-0.5502 0.2659-0.8027 0.4434-0.4886 0.3845-0.7051 0.6211c-0.2165 0.2366-0.4127 0.503-0.5859 0.7988s-0.3245 0.6216-0.4473 0.9766c-0.1228 0.355-0.2182 0.7402-0.2832 1.154-0.065 0.4141-0.09961 0.8568-0.09961 1.33 0 0.4733 0.03461 0.9179 0.09961 1.332 0.065 0.4141 0.1604 0.7974 0.2832 1.152 0.1228 0.355 0.274 0.6808 0.4473 0.9766s0.3694 0.5622 0.5859 0.7988 0.4525 0.4436 0.7051 0.6211 0.5214 0.325 0.8027 0.4434 0.5761 0.2065 0.8789 0.2656c0.3028 0.05916 0.6145 0.08984 0.9316 0.08984 0.3124 0 0.6197-0.03068 0.9199-0.08984 0.3002-0.05916 0.5926-0.1473 0.873-0.2656s0.5498-0.2659 0.8027-0.4434 0.4893-0.3845 0.707-0.6211c0.2177-0.2366 0.415-0.503 0.5898-0.7988s0.3269-0.6216 0.4512-0.9766c0.1242-0.355 0.2211-0.7382 0.2871-1.152 0.06596-0.4141 0.1016-0.8588 0.1016-1.332 0-0.4733-0.0356-0.916-0.1016-1.33-0.06596-0.4141-0.1629-0.7993-0.2871-1.154-0.1242-0.3549-0.2764-0.6808-0.4512-0.9766s-0.3721-0.5622-0.5898-0.7988c-0.2177-0.2366-0.4541-0.4436-0.707-0.6211s-0.5223-0.325-0.8027-0.4434-0.5728-0.2065-0.873-0.2656c-0.3002-0.05916-0.6076-0.08984-0.9199-0.08984z"
        })]
    })]
})
  , x4 = ({circle: t=!1, ...e}={}) => l.jsx("svg", {
    viewBox: "0 0 1280 1280",
    ...e,
    fill: "blue",
    children: t ? l.jsx("circle", {
        cx: "640",
        cy: "640",
        r: "640"
    }) : l.jsx("path", {
        d: "M0,101.12c0-34.64,0-51.95,6.53-65.28,6.25-12.76,16.56-23.07,29.32-29.32C49.17,0,66.48,0,101.12,0h1077.76c34.63,0,51.96,0,65.28,6.53,12.75,6.25,23.06,16.56,29.32,29.32,6.52,13.32,6.52,30.64,6.52,65.28v1077.76c0,34.63,0,51.96-6.52,65.28-6.26,12.75-16.57,23.06-29.32,29.32-13.32,6.52-30.65,6.52-65.28,6.52H101.12c-34.64,0-51.95,0-65.28-6.52-12.76-6.26-23.07-16.57-29.32-29.32-6.53-13.32-6.53-30.65-6.53-65.28V101.12Z"
    })
})
  , C4 = ({circle: t=!1, ...e}={}) => l.jsxs("svg", {
    viewBox: "0 0 24 24",
    ...e,
    children: [t && l.jsx("circle", {
        cx: "12",
        cy: "12",
        r: "12",
        fill: "white"
    }), l.jsxs("g", {
        transform: "matrix(0.9906,0,0,0.97980,0.0094,0.0202)",
        children: [l.jsx("path", {
            d: "m21.38 16.85-2.394-1.891c-0.402-0.3175-0.9871-0.186-1.224 0.2718-0.5876 1.135-1.508 2.071-2.564 2.709l-2.509-2.548c-0.1349-0.1371-0.318-0.2142-0.5091-0.2142-0.191 0-0.3741 0.0771-0.509 0.2142l-2.67 2.711c-2.076-1.117-3.493-3.333-3.493-5.88 0-3.666 2.938-6.65 6.548-6.65 2.184 0 4.276 0.9656 5.658 3.286 0.2478 0.4159 0.7931 0.5265 1.179 0.2392l2.323-1.729c0.3448-0.2565 0.4363-0.7404 0.2091-1.108-2.015-3.267-5.539-5.265-9.37-5.265-6.096 0-11.06 5.036-11.06 11.23 0 6.191 4.959 11.23 11.06 11.23 2.084 0 4.115-0.5926 5.873-1.713 1.503-0.9582 2.754-2.266 3.652-3.81 0.2091-0.3593 0.1233-0.8208-0.2012-1.077zm-10.91 1.825 1.706-1.732 1.617 1.642c-0.576 0.1874-1.165 0.2877-1.74 0.2877-0.5456 0-1.075-0.0691-1.583-0.1973zm1.533-8.174c-0.0026 0.0547-0.0029 0.7822 1.792 2.025 1.34 0.9274 0.7121 2.775 0.4378 3.382-0.1266-0.3781-0.3448-0.8925-0.728-1.43-0.4606-0.6462-0.9722-1.062-1.329-1.308-0.3756 0.2337-0.9917 0.6885-1.486 1.47-0.2992 0.4736-0.4638 0.9244-0.5579 1.267l-0.0011-0.0019c-0.5463-1.492-0.3528-2.237-0.0705-2.642 0.2214-0.3178 0.6237-0.7569 0.6237-0.7569 0.3514-0.3549 0.7222-0.7003 1.079-1.402 0.2192-0.4317 0.2384-0.5816 0.2399-0.604z",
            fill: "black"
        }), l.jsx("path", {
            d: "m10.69 12.52s-0.4033 0.4387-0.6258 0.7562c-0.2831 0.4046-0.477 1.149 0.0708 2.64-3.122-2.764 0.0929-5.586 0.0287-5.371-0.2389 0.7985 0.5263 1.975 0.5263 1.975zm0.7615-0.8691c0.1092-0.1567 0.2167-0.3326 0.3194-0.5341 0.2403-0.4711 0.241-0.6073 0.241-0.6073s-0.0758 0.735 1.798 2.027c1.344 0.9266 0.7144 2.773 0.4392 3.379 0 0 1.586-1.023 1.361-2.75-0.2704-2.078-1.382-1.891-2.208-3.43-0.7706-1.436 0.5455-2.586 0.5455-2.586s-1.762-0.09582-2.568 1.778c-0.8501 1.974 0.073 2.724 0.073 2.724z",
            fill: "#FF6D01"
        })]
    })]
})
  , b4 = {
    SLERF: {
        url: "/assets/tokens/slerf-64.png",
        urlSmall: "/assets/tokens/slerf-128.png"
    },
    2080: {
        url: "/assets/tokens/fidelion-36.svg",
        urlSmall: "/assets/tokens/2080-128.png",
        icon: t => l.jsx(d4, {
            ...t
        })
    },
    VALOR: {
        url: "/assets/tokens/valor.svg",
        urlSmall: "/assets/tokens/valor-128.png",
        icon: t => l.jsx(h4, {
            ...t
        })
    },
    SOL: {
        url: "/assets/tokens/solana-sol-logo.svg",
        urlSmall: "/assets/tokens/sol-128.png",
        icon: t => l.jsx(Jo, {
            ...t
        })
    },
    USDC: {
        url: "/assets/tokens/usdc.svg",
        urlSmall: "/assets/tokens/usdc-128.png",
        icon: t => l.jsx(f4, {
            ...t
        })
    },
    DH: {
        url: "/assets/tokens/dh.png",
        urlSmall: "/assets/tokens/dh-128.png"
    },
    ETH: {
        url: "/assets/tokens/ethereum-circle.svg",
        urlSmall: "/assets/tokens/ethereum-circle-128.png",
        icon: t => l.jsx(p4, {
            ...t
        })
    },
    SOLANA: {
        url: "/assets/tokens/solana-sol-logo.svg",
        urlSmall: "/assets/tokens/sol-128.png",
        icon: t => l.jsx(Jo, {
            ...t
        })
    },
    ECLIPSE: {
        url: "/assets/tokens/eclipse-circle-green.svg",
        urlSmall: "/assets/tokens/eclipse-circle-green-128.png",
        icon: t => l.jsx(m4, {
            ...t
        })
    },
    ABSTRACT: {
        url: "/assets/tokens/abstract.svg",
        urlSmall: "/assets/tokens/abstract-128.png",
        icon: t => l.jsx(g4, {
            ...t
        })
    },
    BACKPACK: {
        url: "/assets/tokens/backpack.svg",
        urlSmall: "/assets/tokens/backpack-circle-128.png",
        icon: t => l.jsx(y4, {
            ...t
        })
    },
    PHANTOM: {
        url: "/assets/tokens/phantom.svg",
        urlSmall: "/assets/tokens/phantom-circle-128.png",
        icon: t => l.jsx(v4, {
            tight: !0,
            transparentBackground: !0,
            ...t
        }),
        backgroundColor: "#AB9FF2"
    },
    BASE: {
        url: "/assets/tokens/base-blue-circle.svg",
        urlSmall: "/assets/tokens/base-blue-circle-128.png",
        icon: t => l.jsx(x4, {
            circle: !0,
            ...t
        })
    },
    CAMP: {
        url: "/assets/tokens/camp.svg",
        urlSmall: "/assets/tokens/camp-black-circle-128.png",
        icon: t => l.jsx(C4, {
            circle: !0,
            ...t
        }),
        backgroundColor: "#FFF"
    }
}
  , W1 = B("")
  , w4 = "/fc"
  , S4 = [w4]
  , R7 = ["", ...S4]
  , H1 = [U1, gr]
  , G1 = (t, e, n) => {
    if (!e && !(n != null && n.length))
        return t;
    const i = new URLSearchParams(t);
    return n == null || n.forEach(s => i.delete(s)),
    e && Object.entries(e).forEach( ([s,r]) => {
        r === null ? i.delete(s) : i.set(s, r)
    }
    ),
    i.toString()
}
  , V1 = Vt.forwardRef( ({to: t, search: e, unpreservedSearchParams: n, usePathPrefixStore: i=!0, ...s}, r) => {
    const o = mt()
      , a = C.useMemo( () => G1(o.search, e, n ?? H1), [o.search, e, n])
      , c = i ? nr(W1) : void 0;
    return l.jsx(qa, {
        ...s,
        to: {
            pathname: c && t.startsWith("/") ? c + t : t,
            search: a,
            hash: o.hash
        },
        ref: r
    })
}
)
  , _4 = () => {
    const t = Be.c(3)
      , e = kr()
      , n = mt();
    let i;
    return t[0] !== n || t[1] !== e ? (i = (...s) => {
        var o, a, c, u;
        const r = s;
        return typeof r[0] == "string" ? e(((o = r[1]) == null ? void 0 : o.preserve) === !1 ? r[0] : {
            pathname: (a = r[1]) != null && a.usePathPrefixStore && r[0].startsWith("/") ? Kt(W1) + r[0] : r[0],
            search: G1(n.search, (c = r[1]) == null ? void 0 : c.search, ((u = r[1]) == null ? void 0 : u.unpreservedSearchParams) ?? H1),
            hash: n.hash
        }, r[1]) : e(r[0])
    }
    ,
    t[0] = n,
    t[1] = e,
    t[2] = i) : i = t[2],
    i
}
  , A7 = {
    stub: !0,
    accountSwitchState: "idle",
    authMode: "connect-and-sign",
    awaitingSignatureState: "idle",
    bridgeChains: [],
    bridgeChainsToConnect: [],
    getNameService: async () => Promise.resolve(void 0),
    handleLogOut: async () => {}
    ,
    handleUnlinkWallet: async () => {}
    ,
    loadingNetwork: !1,
    locale: {
        changeLanguage: async () => Promise.resolve( () => {}
        )
    },
    loginWithEmail: !1,
    multiWalletWidgetState: "idle",
    network: "mainnet",
    networkConfigurations: {},
    primaryWallet: null,
    qrcodeUri: "",
    refetchProjectSettings: async () => {}
    ,
    removeWallet: async () => {}
    ,
    sdkHasLoaded: !1,
    selectedTabIndex: 0,
    sendWagmiSettings: t => {}
    ,
    setAuthMode: () => {}
    ,
    setLogInWithEmail: () => {}
    ,
    setMultiWalletWidgetState: () => {}
    ,
    setSelectedTabIndex: () => {}
    ,
    setShowAuthFlow: () => {}
    ,
    setShowBridgeWidget: () => {}
    ,
    setShowDynamicUserProfile: () => {}
    ,
    setShowQrcodeModal: () => {}
    ,
    shadowDOMEnabled: !1,
    showAuthFlow: !1,
    showDynamicUserProfile: !1,
    showQrcodeModal: !1,
    user: void 0,
    userWithMissingInfo: void 0
}
  , yr = t => t.chain === "SOL"
  , q1 = t => t.chain === "EVM";
C.createContext(null);
const k4 = t => {
    var A, D, _, z, F, U, G;
    const e = Be.c(36)
      , {visible: n, onClose: i, evm: s, solana: r} = t;
    if (!n)
        return null;
    const o = n === "all" || n === "evm"
      , a = n === "all" || n === "svm";
    let c;
    e[0] !== ((A = s == null ? void 0 : s.connect) == null ? void 0 : A.connectors) ? (c = ((D = s == null ? void 0 : s.connect) == null ? void 0 : D.connectors) ?? [],
    e[0] = (_ = s == null ? void 0 : s.connect) == null ? void 0 : _.connectors,
    e[1] = c) : c = e[1];
    const u = c
      , d = (z = s == null ? void 0 : s.connect) == null ? void 0 : z.connectAsync;
    let h;
    e: {
        const j = (U = (F = s == null ? void 0 : s.connect) == null ? void 0 : F.variables) == null ? void 0 : U.connector;
        if (!j) {
            h = void 0;
            break e
        }
        const {id: Z} = j;
        if (typeof Z == "string") {
            h = Z;
            break e
        }
        if (typeof Z == "number") {
            let Q;
            e[2] !== Z ? (Q = Z.toString(),
            e[2] = Z,
            e[3] = Q) : Q = e[3],
            h = Q;
            break e
        }
        h = void 0
    }
    const f = h
      , m = ((G = s == null ? void 0 : s.connect) == null ? void 0 : G.status) === "pending";
    let g;
    e[4] !== s ? (g = () => {
        var j;
        return (j = s == null ? void 0 : s.setPreferredProvider) == null ? void 0 : j.call(s, "evm")
    }
    ,
    e[4] = s,
    e[5] = g) : g = e[5];
    const p = g;
    let v;
    e[6] !== r ? (v = () => {
        var j;
        return (j = r == null ? void 0 : r.setPreferredProvider) == null ? void 0 : j.call(r, "svm")
    }
    ,
    e[6] = r,
    e[7] = v) : v = e[7];
    const x = v;
    let y, b;
    e[8] === Symbol.for("react.memo_cache_sentinel") ? (y = l.jsx("span", {
        className: "sr-only",
        children: "Close"
    }),
    b = l.jsx(St, {
        className: "p-[25%]"
    }),
    e[8] = y,
    e[9] = b) : (y = e[8],
    b = e[9]);
    let S;
    e[10] !== i ? (S = l.jsxs("button", {
        "aria-label": "Close",
        className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 icon-[#FFF4] hover:bg-black/10 hover:icon-[#FFF8] focus:outline-none focus:ring-2 focus:ring-indigo-400/60 cursor-pointer",
        onClick: i,
        children: [y, b]
    }),
    e[10] = i,
    e[11] = S) : S = e[11];
    let k;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (k = l.jsxs("div", {
        className: "px-6 pb-4 pt-6 sm:px-8 sm:pt-8",
        children: [l.jsx("h2", {
            className: "text-[1.5rem] font-semibold text-slate-900 dark:text-white",
            children: "Connect Wallet"
        }), l.jsx("p", {
            className: "text-sm text-slate-600 dark:text-white/70",
            children: "Choose a wallet to continue"
        })]
    }),
    e[12] = k) : k = e[12];
    let I;
    e[13] !== d || e[14] !== u || e[15] !== (s == null ? void 0 : s.loading) || e[16] !== p || e[17] !== m || e[18] !== i || e[19] !== f || e[20] !== o ? (I = o && l.jsxs("section", {
        className: "mb-6",
        children: [l.jsx("h3", {
            className: "text-[1.3rem] font-semibold uppercase tracking-wide text-slate-700 dark:text-white/60",
            children: "EVM Wallets"
        }), l.jsxs("div", {
            className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2",
            children: [u.map( (j, Z) => {
                var O;
                const N = j.id ?? `${j.name ?? "connector"}-${Z}`;
                return l.jsxs("button", {
                    onClick: () => {
                        d && d({
                            connector: j
                        }).then( () => {
                            p == null || p(),
                            i()
                        }
                        ).catch(j4)
                    }
                    ,
                    disabled: !d,
                    className: "group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 text-base disabled:cursor-not-allowed disabled:opacity-70",
                    children: [j.icon ? l.jsx("img", {
                        src: j.icon,
                        alt: "",
                        className: "h-6 w-6 rounded"
                    }) : l.jsx("div", {
                        className: "flex h-6 w-6 items-center justify-center rounded bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white/80",
                        children: l.jsx("span", {
                            className: "text-xs font-bold",
                            children: ((O = j.name) == null ? void 0 : O[0]) ?? "?"
                        })
                    }), l.jsxs("span", {
                        className: "flex-1 truncate font-medium",
                        children: [j.name ?? "Unnamed Wallet", f && `${f}` == `${j.id}` && m ? " (connecting...)" : ""]
                    })]
                }, N)
            }
            ), u.length === 0 && l.jsx("div", {
                className: "rounded-lg border border-dashed border-slate-300/70 p-4 text-center text-sm text-slate-600 dark:border-white/10 dark:text-white/60",
                children: s != null && s.loading ? "Loading EVM wallets..." : "No EVM wallets available"
            })]
        })]
    }),
    e[13] = d,
    e[14] = u,
    e[15] = s == null ? void 0 : s.loading,
    e[16] = p,
    e[17] = m,
    e[18] = i,
    e[19] = f,
    e[20] = o,
    e[21] = I) : I = e[21];
    let R;
    e[22] !== x || e[23] !== i || e[24] !== a || e[25] !== r ? (R = a && r && l.jsxs("section", {
        children: [l.jsx("h3", {
            className: "text-[1.3rem] font-semibold uppercase tracking-wide text-slate-700 dark:text-white/60",
            children: "Solana Wallets"
        }), l.jsxs("div", {
            className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2",
            children: [r.adapters.map(j => {
                var Z;
                return l.jsxs("button", {
                    onClick: () => {
                        r.selectAdapter(j.name),
                        x == null || x(),
                        i()
                    }
                    ,
                    className: "group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 cursor-pointer text-base",
                    children: [j.icon ? l.jsx("img", {
                        src: j.icon,
                        alt: "",
                        className: "h-6 w-6 rounded"
                    }) : l.jsx("div", {
                        className: "flex h-6 w-6 items-center justify-center rounded bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white/80",
                        children: l.jsx("span", {
                            className: "text-xs font-bold",
                            children: ((Z = j.name) == null ? void 0 : Z[0]) ?? "S"
                        })
                    }), l.jsx("span", {
                        className: "flex-1 truncate font-medium",
                        children: j.name
                    })]
                }, j.name)
            }
            ), r.adapters.length === 0 && l.jsx("div", {
                className: "rounded-lg border border-dashed border-slate-300/70 p-4 text-center text-sm text-slate-600 dark:border-white/10 dark:text-white/60",
                children: "No Solana wallets available"
            })]
        })]
    }),
    e[22] = x,
    e[23] = i,
    e[24] = a,
    e[25] = r,
    e[26] = R) : R = e[26];
    let T;
    e[27] !== R || e[28] !== I ? (T = l.jsxs("div", {
        className: "max-h-[70vh] overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8",
        children: [I, R]
    }),
    e[27] = R,
    e[28] = I,
    e[29] = T) : T = e[29];
    let P;
    e[30] !== T || e[31] !== S ? (P = l.jsx("div", {
        className: "w-full max-w-lg sm:max-w-2xl",
        children: l.jsxs("div", {
            className: "relative w-full rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl ring-1 ring-black/5 dark:ring-white/10",
            children: [S, k, T]
        })
    }),
    e[30] = T,
    e[31] = S,
    e[32] = P) : P = e[32];
    let w;
    return e[33] !== i || e[34] !== P ? (w = l.jsx(W5, {
        onClose: i,
        className: "z-[100] font-sans-serif",
        children: P
    }),
    e[33] = i,
    e[34] = P,
    e[35] = w) : w = e[35],
    w
}
  , I4 = () => Pl.flatMap(t => {
    const e = wr[t];
    if (!(e != null && e.rpcUrl))
        return [];
    const n = Gt[e.chainId];
    if (!n)
        return [];
    const i = e.wsRpcUrl ?? e.rpcUrl.replace(/^http/, "ws");
    return [{
        id: n,
        name: t,
        rpcUrl: e.rpcUrl,
        wsRpcUrl: i
    }]
}
)
  , M4 = t => t.length > 0 ? t : [{
    id: bn,
    name: "Anvil",
    rpcUrl: `http://127.0.0.1:${Ma}`
}]
  , R4 = ({id: t, name: e, rpcUrl: n, wsRpcUrl: i}) => ({
    id: t,
    name: e,
    nativeCurrency: {
        decimals: 18,
        name: "Ether",
        symbol: "ETH"
    },
    rpcUrls: {
        default: {
            http: [n],
            webSocket: i ? [i] : void 0
        }
    }
})
  , A4 = () => M4(I4()).map( ({id: e, name: n, rpcUrl: i, wsRpcUrl: s}) => e === oo.id ? oo : R4({
    id: e,
    name: n,
    rpcUrl: i,
    wsRpcUrl: s
}))
  , j7 = t => {
    const e = A4();
    return t.createConfig({
        chains: e,
        connectors: [t.injected()],
        transports: e.reduce( (n, i) => (n[i.id] = t.http(),
        n), {})
    })
}
  , P7 = t => {
    var i;
    const e = (i = t.overrides) == null ? void 0 : i.evmNetworks
      , n = {
        ...t.overrides,
        evmNetworks: s => {
            const o = [...e ? e(s) : s]
              , a = Gt["camp:mainnet"];
            return Ws.includes("camp") && !o.find(u => u.chainId === a) && o.push({
                chainId: a,
                networkId: a,
                name: jl.camp,
                blockExplorerUrls: [Al["camp:mainnet"]],
                iconUrls: ["data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAGobWV0YQAAAAAAAAAvaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAFBpY3R1cmVIYW5kbGVyAAAAAA5waXRtAAAAAAABAAAALGlsb2MAAAAARAAAAgABAAAAAQAAAdAAAACBAAIAAAABAAACUQAAAgUAAABCaWluZgAAAAAAAgAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAGmluZmUCAAAAAAIAAGF2MDFBbHBoYQAAAAAaaXJlZgAAAAAAAAAOYXV4bAACAAEAAQAAANdpcHJwAAAAsWlwY28AAAAUaXNwZQAAAAAAAACAAAAAgAAAABBwaXhpAAAAAAMICAgAAAAMYXYxQ4EADAAAAAATY29scm5jbHgAAgACAAIAAAAAFGlzcGUAAAAAAAAAgAAAAIAAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAADhhdXhDAAAAAHVybjptcGVnOm1wZWdCOmNpY3A6c3lzdGVtczphdXhpbGlhcnk6YWxwaGEAAAAAHmlwbWEAAAAAAAAAAgABBAECgwQAAgQFBocIAAACjm1kYXQKCgAAAAM3/+f/zAIycxQAJkAABCACwhwCtIDxYqam8gUPvhcpjW//0n0szmmRlmlBMqXFMdaqY91EDCWUDHqMigzjqJDJh5Uq8W/8I8cABJrYTwFkzmN7QKQJRx95jdwU7//zVa/Im3GyGZXDGul/R43TX3G2Ud/aP78zyy7e+4AKCgAAAAM3/+f/zVAy9gMUACZAJJize4D5KmN+Y3j8y/NMF5zKkO7AncW20lX+d6/XpzUAtgLFh7ooTz43UfJzMY+nGk0L1rpO6k8pLSx6/nZ09LD7KGIjKEQmIi/dbp9dPzlNfWnrb+GF3vLUOqh4NFphR0ATTBHrEfLasU3p5MbIMDwy6Rna+3sfIkhN1XZizzkC6yGCrEWWu815MkB4+og2fxwFCfRw9FfsSjy7b1vFgFJIJssGOgoGaGmiYo/NjYjm6S1eLuLL/1Ldtg+aHJ+JZ8JXfZ+Wu8hlI/F9l5lvueYOji3YwfqBIoC4JN4BBySvIiTqV1NFlUCl5yFqvc2SzspCIdXLG+m4lyw4iTzF1sX/7e7jZr3ifPBKRrcBpSEjnC3wqaHJHtdxrs0gPFdtvPGfOwUhvHpz9TMHtxrDfBvxtt/l/35CO7h0K348c3nAeApjpmYhWXDSKBYYgPGF6+sIuhkj6nIblRZf7eHQVsE95oeaTLYKOOnL9VSA4ZrC41UIIw7V11UyGg4eQ6/MCTIZOcLVxMZ56zS3i5/P3atIxKNPc0JyT+zftk509IBgNZiJnfn+C4Q/lnmR3jSD4PQuvCbwbbC5XKkaUQeIjINowdTMs6dlhWZclLPKEZV69hx7LMJ5mSUQy7SrmL4+3q9/XuoCSRxdMRkvbs2zaIIm"],
                nativeCurrency: Rl.camp,
                rpcUrls: [Ml["camp:mainnet"]]
            }),
            !o.find(u => u.chainId === bn) && typeof window < "u" && window.location.protocol === "http:" && o.push({
                chainId: bn,
                networkId: bn,
                name: "Anvil (Local)",
                blockExplorerUrls: ["http://example.com"],
                iconUrls: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRoge3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABmmDh1QAAAABJRU5ErkJggg=="],
                nativeCurrency: {
                    decimals: 18,
                    name: "Ether",
                    symbol: "ETH"
                },
                rpcUrls: [`http://127.0.0.1:${Ma}`]
            }),
            o
        }
    };
    return {
        ...t,
        overrides: n
    }
}
;
function j4(t) {
    console.error("Failed to connect EVM wallet:", t)
}
const P4 = `
.dynamic-modal {
--dynamic-font-family-primary: var(--font-sans-serif);
--dynamic-font-family-numbers: var(--font-sans-serif);
}
.dynamic-widget-modal {
--scale: 0.8;
overflow-y: auto;
max-height: calc(100dvh / var(--scale));
padding-top: 4em;
transform: translate(-50%, -50%) scale(var(--scale));
max-width: 20rem;
width: calc(100dvw / var(--scale));
position: fixed;
pointer-events: none;
& > * {
pointer-events: auto;
}
}
@media(pointer: coarse) {
.dynamic-widget-modal {
transform-origin: bottom;
transform: translate(-50%, 0) scale(var(--scale));
max-width: unset;
top: unset;
right: unset;
left: 50%;
bottom: 0;
}
.dynamic-widget-card {
border-width: 0px;
/* border-bottom-left-radius: var(--dynamic-border-radius);
border-bottom-right-radius: var(--dynamic-border-radius); */
}
.footer-options-switcher__container {
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
}
}
`
  , E4 = () => {
    var t;
    for (const e of document.querySelectorAll(".dynamic-shadow-dom")) {
        if (e.querySelector(".injected"))
            continue;
        const n = document.createElement("style");
        n.classList.add("injected"),
        n.textContent = P4,
        (t = e.shadowRoot) == null || t.appendChild(n)
    }
}
  , K1 = (t=10, e=200) => {
    var i, s;
    const n = (s = (i = document.querySelector("#dynamic-send-transaction .dynamic-shadow-dom")) == null ? void 0 : i.shadowRoot) == null ? void 0 : s.querySelector(".modal-card");
    if (n) {
        n.style.maxHeight = "100dvh",
        n.style.overflowY = "auto";
        return
    }
    if (t === null || t > 0)
        return setTimeout( () => K1(t === null ? null : t - 1), e)
}
  , Fs = async (t, e) => {
    var s;
    let n = e;
    if (Dl(n))
        throw new Error("Cannot set chain ID to localnet");
    let i = Z1[n] ?? Gt[e];
    if (yr(t) || q1(t)) {
        const r = t.connector.getEnabledNetworks();
        if (!r.find(o => o.chainId.toString() === i.toString())) {
            let o = r.map(a => `${a.name} (${a.chainId})`).join(", ");
            if (yr(t)) {
                const a = r.find(c => {
                    var u;
                    return (parseInt((u = c.chainId) == null ? void 0 : u.toString()) / 100 | 0) === (i / 100 | 0)
                }
                );
                if (a)
                    console.warn(`Chain ${n}:${i} not enabled: switch to ${a.name} (${a.chainId}) instead`),
                    i = parseInt((s = a.chainId) == null ? void 0 : s.toString());
                else
                    throw new Error(`Chain ${n} (${i}) not enabled. Available chains: ${o}`)
            } else
                throw new Error(`Chain ${n} (${i}) not enabled. Available chains: ${o}`)
        }
    }
    if (!i)
        throw new Error(`Unknown chain ID: ${n}`);
    return console.log(`Switch dynamic network to ${n}:${i}`),
    await t.switchNetwork(i)
}
  , Z1 = {
    "solana:mainnet": 101,
    "solana:testnet": 102,
    "solana:devnet": 103,
    "eclipse:mainnet": 201,
    "eclipse:testnet": 202,
    "eclipse:devnet": 203,
    ...Gt
};
Object.fromEntries(Object.entries(Z1).map( ([t,e]) => [e, t]));
const Y1 = C.createContext(null);
function L4({svm: t, evm: e, dynamic: n, dynamicRef: i, dynamicIsLoading: s, dynamicSwitchWalletRef: r, showDynamicUserProfile: o, svmHelpers: a, SiweMessage: c, chainId: u, chainName: d, modal: h, preferredProvider: f, setPreferredProvider: m, disabled: g}) {
    var p;
    return C.useMemo( () => {
        var I, R, T, P, w, A, D;
        if (g)
            return {
                isDynamic: !1,
                isSvm: !1,
                isEvm: !1,
                preferredProvider: "dynamic",
                secondaries: [],
                disabled: g
            };
        const v = {
            dynamic: n,
            showDynamicUserProfile: o,
            svm: t,
            evm: e,
            svmHelpers: a,
            modal: h,
            preferredProvider: f,
            setPreferredProvider: m
        };
        let x, y, b;
        if (n && n.primaryWallet && yr(n.primaryWallet)) {
            const _ = n.primaryWallet;
            let z, F;
            const U = n.network ? parseInt(n.network) : void 0;
            z = U && !Number.isNaN(U) ? 101 <= U && U <= 103 ? "solana" : 201 <= U && U <= 203 ? "eclipse" : void 0 : void 0,
            F = z && U ? z + ":" + ["mainnet", "testnet", "devnet"][U % 100 - 1] : void 0,
            x = {
                isDynamic: !0,
                isSvm: !0,
                isEvm: !1,
                publicKey: _.address,
                publicKeyNative: _.address,
                walletName: _ == null ? void 0 : _.connector.name,
                disconnect: () => n.handleLogOut(),
                getConnection: () => _.getConnection(),
                signAndSendTransaction: async (G, j, Z) => _.getSigner().then(Q => (K1(),
                Q.signAndSendTransaction(G, j))).then(Q => Q.signature),
                chainName: z,
                chainId: F,
                setChainId: _.connector.supportsNetworkSwitching() ? G => Fs(_, G) : void 0
            }
        } else if (n && n.primaryWallet && q1(n.primaryWallet)) {
            const _ = n.primaryWallet;
            let z, F;
            const U = (I = _.connector) == null ? void 0 : I.currentEvmNetwork
              , G = U == null ? void 0 : U.chainId;
            if (G) {
                if (G === bn) {
                    for (const j of Ws)
                        if (so(j) && Gt[`${j}:localnet`] === G) {
                            F = `${j}:localnet`;
                            break
                        }
                }
                F == null && (F = ro[G]),
                F && (z = bs(F))
            }
            (!F || !z) && (console.warn(`No chain mapping found for chain ${G}`),
            F = void 0,
            z = void 0),
            x = {
                isDynamic: !0,
                isSvm: !1,
                isEvm: !0,
                publicKey: _.address.toLowerCase(),
                publicKeyNative: _.address,
                walletName: _.connector.name,
                disconnect: () => n.handleLogOut(),
                evmSignAndSendTransaction: async j => (await _.getWalletClient()).sendTransaction(j),
                chainName: z ?? d,
                chainId: F ?? u,
                setChainId: _.connector.supportsNetworkSwitching() ? j => Fs(_, j) : void 0
            }
        }
        if (e != null && e.account) {
            let _ = (R = e.account.chain) == null ? void 0 : R.id, z;
            if (_ === bn) {
                for (const U of Ws)
                    if (so(U) && Gt[`${U}:localnet`] === _) {
                        z = `${U}:localnet`;
                        break
                    }
            }
            u = z ?? (_ ? ro[_] : void 0) ?? u,
            d || (d = u ? bs(u) : void 0);
            const F = e.account.address;
            b = {
                isDynamic: !1,
                isSvm: !1,
                isEvm: !!F,
                publicKey: F == null ? void 0 : F.toLowerCase(),
                publicKeyNative: F,
                walletName: (T = e.account.connector) == null ? void 0 : T.name,
                icon: (P = e.account.connector) == null ? void 0 : P.icon,
                disconnect: F && e.disconnect ? () => {
                    var U;
                    return ((U = e.disconnect) == null ? void 0 : U.call(e)) ?? Promise.resolve()
                }
                : void 0,
                signIn: F && c ? async U => {
                    const G = new c({
                        ...U,
                        chainId: U.chainId ? parseInt(U.chainId) : 1
                    });
                    return await e.signMessage.signMessageAsync({
                        message: G.prepareMessage()
                    })
                }
                : void 0,
                evmSignAndSendTransaction: F ? e.sendTransaction.sendTransactionAsync : void 0,
                chainName: d,
                chainId: u,
                setChainId: async U => {
                    const G = Gt[U];
                    if (!G)
                        throw new Error(`Unsupported chain ID: ${G}`);
                    await e.switchChain.switchChainAsync({
                        chainId: G
                    })
                }
            }
        }
        if (t != null && t.wallet && ((w = t.wallet.wallet) != null && w.adapter)) {
            const _ = t.wallet.wallet.adapter
              , z = (A = _.publicKey) == null ? void 0 : A.toBase58();
            y = {
                svmAdapter: _,
                isDynamic: !1,
                isSvm: !0,
                isEvm: !1,
                publicKey: z,
                publicKeyNative: z,
                walletName: _.name,
                icon: _.icon,
                disconnect: () => _.disconnect(),
                getConnection: () => {
                    var F;
                    return Promise.resolve((F = t.connection) == null ? void 0 : F.connection)
                }
                ,
                signIn: (D = t.wallet.signIn) == null ? void 0 : D.bind(t.wallet),
                signAndSendTransaction: async (F, U, G=(j => (j = t.connection) == null ? void 0 : j.connection)()) => {
                    if (!G)
                        throw new Error(`RPC connection is required for ${_.name}`);
                    return await _.sendTransaction(F, G, U)
                }
                ,
                chainName: d,
                chainId: u
            }
        }
        const S = {
            isDynamic: !1,
            isSvm: !1,
            isEvm: !1
        };
        let k = x;
        return !k && !s && (k = y ?? b),
        f === "svm" && y && (k = y),
        f === "evm" && b && (k = b),
        k || (k = S),
        Object.assign(k, v),
        k.setChainOrVm = async (_, z) => {
            var N, O, Y, ue, pe, q;
            const F = "mainnet";
            let U = Fl(_) ? _ : void 0;
            const G = U ? bs(U) : El(_) ? _ : void 0;
            !U && G && (U = (N = wr[G]) == null ? void 0 : N.chainId);
            const j = G ? Hs(G) : Nl(_) ? _ : void 0;
            if (!j)
                throw new Error(`Invalid chain or VM: ${_}`);
            const Z = !k.isDynamic && (k.isSvm || k.isEvm) && (j === "svm" && t || j === "evm" && e)
              , Q = k.chainName ? Hs(k.chainName) : void 0;
            if (z !== !1 && n && !Z) {
                m == null || m("dynamic");
                let W = (O = n.primaryWallet) == null ? void 0 : O.id;
                if (Q !== j) {
                    const ne = (Y = n.user) == null ? void 0 : Y.verifiedCredentials.find(le => le.chain === Ll[j] && le.walletProvider === Tl);
                    if (!ne)
                        throw new Error(`No ${j} dynamic wallet found`);
                    if (W = ne.id,
                    !(r != null && r.current))
                        throw new Error("Cannot switch dynamic wallet");
                    console.log(`Switching dynamic wallet ${ne.id} (${ne.chain}:${ne.address})`),
                    await ((ue = r == null ? void 0 : r.current) == null ? void 0 : ue.call(r, ne.id)),
                    await Za(500)
                }
                const ie = (pe = i.current) == null ? void 0 : pe.primaryWallet;
                if (!ie || W !== ie.id)
                    throw new Error("Unexpected dynamic wallet");
                U && await Fs(ie, U)
            } else if (z !== !0) {
                if ((e && j === "evm" || t && j === "svm") && (m == null || m(j)),
                j === "evm" && G) {
                    if (!e)
                        throw new Error("EVM not available");
                    const W = Gt[U ?? `${G}:${F}`];
                    if (!W)
                        throw new Error(`Unsupported chain ID: ${U}`);
                    if (((q = e.client) == null ? void 0 : q.chain.id) === W)
                        return;
                    await e.switchChain.switchChainAsync({
                        chainId: W
                    })
                } else if (j === "svm" && G)
                    throw new Error("Cannot switch SVM chain")
            }
        }
        ,
        k
    }
    , [(p = t == null ? void 0 : t.wallet.wallet) == null ? void 0 : p.adapter, t == null ? void 0 : t.wallet.publicKey, t == null ? void 0 : t.connection, e == null ? void 0 : e.account, e == null ? void 0 : e.account.address, e == null ? void 0 : e.account.chainId, e == null ? void 0 : e.disconnect, e == null ? void 0 : e.sendTransaction, u, h, r, n == null ? void 0 : n.primaryWallet, n == null ? void 0 : n.network, s, o, f, m, g])
}
const E7 = ({useDynamicContext: t, setDynamicContext: e, setSdkHasLoaded: n, setShowDynamicUserProfile: i, somethingDidChange: s}) => {
    var a, c, u, d, h, f, m, g, p;
    const r = t()
      , o = C.useRef(r);
    return o.current = r,
    C.useEffect( () => {
        e(o.current)
    }
    , [(a = r.primaryWallet) == null ? void 0 : a.address, (c = r.primaryWallet) == null ? void 0 : c.chain, (u = r.primaryWallet) == null ? void 0 : u.isAuthenticated, r.network, (d = r.user) == null ? void 0 : d.userId, r.sdkHasLoaded, r.showDynamicUserProfile]),
    C.useEffect( () => {
        n(r.sdkHasLoaded),
        r.sdkHasLoaded && setTimeout(E4, 1e3)
    }
    , [r.sdkHasLoaded]),
    C.useEffect( () => i(r.showDynamicUserProfile), [r.showDynamicUserProfile]),
    C.useEffect( () => s(), [(h = r.primaryWallet) == null ? void 0 : h.address, (f = r.primaryWallet) == null ? void 0 : f.chain, (m = r.primaryWallet) == null ? void 0 : m.isAuthenticated, r.network, (g = r.user) == null ? void 0 : g.userId, (p = r.user) == null ? void 0 : p.verifiedCredentials.reduce( (v, x) => v + x.id, "")]),
    null
}
  , L7 = t => {
    const e = Be.c(16)
      , {useEmbeddedWallet: n, setEmbeddedWallet: i, setEmbeddedWalletState: s, useSwitchWallet: r, setSwitchWallet: o} = t
      , a = n()
      , c = r();
    let u;
    e[0] !== a || e[1] !== s ? (u = () => {
        const {isLoadingEmbeddedWallet: p, isSessionActive: v} = a;
        s({
            isLoadingEmbeddedWallet: p,
            isSessionActive: v
        })
    }
    ,
    e[0] = a,
    e[1] = s,
    e[2] = u) : u = e[2];
    let d;
    e[3] !== a.isLoadingEmbeddedWallet || e[4] !== a.isSessionActive ? (d = [a.isLoadingEmbeddedWallet, a.isSessionActive],
    e[3] = a.isLoadingEmbeddedWallet,
    e[4] = a.isSessionActive,
    e[5] = d) : d = e[5],
    C.useEffect(u, d);
    let h;
    e[6] !== a || e[7] !== i ? (h = () => {
        i(a)
    }
    ,
    e[6] = a,
    e[7] = i,
    e[8] = h) : h = e[8];
    let f;
    e[9] !== a ? (f = [a],
    e[9] = a,
    e[10] = f) : f = e[10],
    C.useEffect(h, f);
    let m;
    e[11] !== o || e[12] !== c ? (m = () => {
        o(c)
    }
    ,
    e[11] = o,
    e[12] = c,
    e[13] = m) : m = e[13];
    let g;
    return e[14] !== c ? (g = [c],
    e[14] = c,
    e[15] = g) : g = e[15],
    C.useEffect(m, g),
    null
}
  , T7 = t => {
    var a;
    const e = Be.c(8)
      , n = C.useContext(t.ConnectionContext)
      , i = C.useContext(t.WalletContext);
    let s;
    e[0] !== n || e[1] !== t || e[2] !== i ? (s = () => t.setContexts({
        connection: n,
        wallet: i
    }),
    e[0] = n,
    e[1] = t,
    e[2] = i,
    e[3] = s) : s = e[3];
    const r = (a = i.wallet) == null ? void 0 : a.adapter;
    let o;
    return e[4] !== n.connection || e[5] !== r || e[6] !== i.publicKey ? (o = [n.connection, i.publicKey, r],
    e[4] = n.connection,
    e[5] = r,
    e[6] = i.publicKey,
    e[7] = o) : o = e[7],
    C.useEffect(s, o),
    null
}
  , D7 = t => {
    var f;
    const e = t.wagmi.useAccount()
      , {connectAsync: n, connectors: i, status: s, variables: r} = t.wagmi.useConnect()
      , {disconnectAsync: o} = t.wagmi.useDisconnect()
      , a = t.wagmi.useSendTransaction()
      , c = t.wagmi.useSignMessage()
      , u = t.wagmi.useClient()
      , d = t.wagmi.useSwitchChain()
      , h = C.useMemo( () => ({
        account: e,
        connect: {
            connectors: i,
            connectAsync: n,
            status: s,
            variables: r
        },
        disconnectAsync: o,
        sendTransaction: a,
        signMessage: c,
        client: u,
        switchChain: d
    }), [e, e.chainId, e.address, e.status, e.status, (f = e.connector) == null ? void 0 : f.id, i, n, s, r, o, a, c, u, d]);
    return C.useEffect( () => {
        t.setContexts(h)
    }
    , [h]),
    null
}
  , F7 = t => ({
    deserializeVersionedTransaction: t.VersionedTransaction.deserialize,
    createTransferTransaction: ({payer: e, from: n, to: i, lamports: s, recentBlockhash: r}) => new t.VersionedTransaction(new t.TransactionMessage({
        payerKey: new t.PublicKey(e ?? n),
        recentBlockhash: r,
        instructions: [t.SystemProgram.transfer({
            fromPubkey: new t.PublicKey(n),
            toPubkey: new t.PublicKey(i),
            lamports: s
        })]
    }).compileToV0Message())
})
  , N7 = t => {
    const e = Be.c(49)
      , {children: n, dynamicContent: i, svmNodes: s, evmNodes: r, solana: o, solanaContexts: a, evmContexts: c, modalVisible: u, setModalVisible: d, preferredProvider: h, setPreferredProvider: f, dynamic: m, dynamicRef: g, dynamicSwitchWalletRef: p, dynamicIsLoading: v, showDynamicUserProfile: x, svmHelpers: y, chainId: b, solanaIsLoading: S, evmLoading: k, disabled: I} = t;
    let R;
    e: {
        if (!c) {
            R = void 0;
            break e
        }
        let G;
        e[0] !== c.disconnectAsync ? (G = c.disconnectAsync ? () => c.disconnectAsync() : void 0,
        e[0] = c.disconnectAsync,
        e[1] = G) : G = e[1];
        let j;
        e[2] !== c.account || e[3] !== c.client || e[4] !== c.sendTransaction || e[5] !== c.signMessage || e[6] !== c.switchChain || e[7] !== G ? (j = {
            account: c.account,
            sendTransaction: c.sendTransaction,
            signMessage: c.signMessage,
            client: c.client,
            disconnect: G,
            switchChain: c.switchChain
        },
        e[2] = c.account,
        e[3] = c.client,
        e[4] = c.sendTransaction,
        e[5] = c.signMessage,
        e[6] = c.switchChain,
        e[7] = G,
        e[8] = j) : j = e[8],
        R = j
    }
    const T = R;
    let P;
    e[9] !== u || e[10] !== d ? (P = {
        visible: u,
        setVisible: d
    },
    e[9] = u,
    e[10] = d,
    e[11] = P) : P = e[11];
    let w;
    e[12] !== b || e[13] !== I || e[14] !== m || e[15] !== v || e[16] !== g || e[17] !== p || e[18] !== T || e[19] !== h || e[20] !== f || e[21] !== x || e[22] !== a || e[23] !== S || e[24] !== y || e[25] !== P ? (w = {
        svm: a,
        solanaIsLoading: S,
        dynamic: m,
        dynamicRef: g,
        dynamicSwitchWalletRef: p,
        dynamicIsLoading: v,
        showDynamicUserProfile: x,
        svmHelpers: y,
        chainId: b,
        evm: T,
        modal: P,
        preferredProvider: h,
        setPreferredProvider: f,
        disabled: I
    },
    e[12] = b,
    e[13] = I,
    e[14] = m,
    e[15] = v,
    e[16] = g,
    e[17] = p,
    e[18] = T,
    e[19] = h,
    e[20] = f,
    e[21] = x,
    e[22] = a,
    e[23] = S,
    e[24] = y,
    e[25] = P,
    e[26] = w) : w = e[26];
    const A = L4(w);
    let D;
    e[27] !== d ? (D = () => d(null),
    e[27] = d,
    e[28] = D) : D = e[28];
    let _;
    e[29] !== c || e[30] !== k || e[31] !== f ? (_ = c ? {
        connect: c.connect,
        loading: k,
        setPreferredProvider: f ? G => f(G) : void 0
    } : void 0,
    e[29] = c,
    e[30] = k,
    e[31] = f,
    e[32] = _) : _ = e[32];
    let z;
    e[33] !== f || e[34] !== o || e[35] !== a ? (z = typeof o == "object" && (a != null && a.wallet) ? {
        adapters: o.adapters,
        selectAdapter: a.wallet.select,
        setPreferredProvider: f ? G => f(G) : void 0
    } : void 0,
    e[33] = f,
    e[34] = o,
    e[35] = a,
    e[36] = z) : z = e[36];
    let F;
    e[37] !== u || e[38] !== D || e[39] !== _ || e[40] !== z ? (F = l.jsx(k4, {
        visible: u,
        onClose: D,
        evm: _,
        solana: z
    }),
    e[37] = u,
    e[38] = D,
    e[39] = _,
    e[40] = z,
    e[41] = F) : F = e[41];
    let U;
    return e[42] !== n || e[43] !== i || e[44] !== r || e[45] !== s || e[46] !== F || e[47] !== A ? (U = l.jsxs(Y1.Provider, {
        value: A,
        children: [n, s, r, F, i]
    }),
    e[42] = n,
    e[43] = i,
    e[44] = r,
    e[45] = s,
    e[46] = F,
    e[47] = A,
    e[48] = U) : U = e[48],
    U
}
  , Q1 = t => {
    const e = t === void 0 ? !1 : t
      , n = C.useContext(Y1);
    if (!e && !n)
        throw new Error("useUnifiedWallet must be used within a UnifiedWalletProvider");
    return n
}
  , T4 = {
    home: "/",
    zeroSum: "/death-match",
    practice: "/",
    rooms: "/rooms",
    roomPrefix: "/room",
    roomCreate: "/room/create",
    profile: "/profile"
}
  , D4 = t => Uint8Array.from(atob(t), e => e.charCodeAt(0))
  , X1 = () => ({
    userAgent: navigator.userAgent.slice(0, 300),
    touch: !!navigator.maxTouchPoints,
    window: {
        innerWidth: window.innerWidth > 0 && window.innerWidth < 65535 ? Math.round(window.innerWidth) : void 0,
        innerHeight: window.innerHeight > 0 && window.innerHeight < 65535 ? Math.round(window.innerHeight) : void 0,
        devicePixelRatio: window.devicePixelRatio > 0 && window.devicePixelRatio < 10 ? window.devicePixelRatio : void 0
    }
})
  , B7 = ({text: t, className: e, disabled: n, chain: i, tokenAddress: s, tokens: r, tokenIconClassName: o, createRoom: a, setError: c, spinnerClassName: u}) => {
    var Q, N;
    const d = Q1(!0)
      , h = _4()
      , f = Re(O => O.game.depositStatus)
      , m = Re(O => O.game.controlConnected)
      , g = (Q = Re(O => O.game.selectedRoomId)) == null ? void 0 : Q.id
      , p = Re(O => O.game[J.DepositResult])
      , v = C.useRef(p);
    C.useEffect( () => {
        v.current = p
    }
    , [p]);
    const x = ns()
      , y = ts()
      , b = Re(O => O.game.user)
      , S = Re(O => O.game.selectedTokenAddress)
      , k = ((N = Re(O => O.game.selectedRoomStats)) == null ? void 0 : N.tokens) ?? r
      , I = C.useMemo( () => S != null && S.address ? k == null ? void 0 : k.find(O => O.chain === S.chain && O.address === S.address) : void 0, [k, S])
      , R = C.useMemo( () => I ? b4[I.name.toUpperCase()] : void 0, [I])
      , T = Re(O => O.game.allRooms)
      , P = Re(O => O.game.roomStats)
      , w = Re(O => O.game.isFetchingAllRooms)
      , [A,D] = C.useState(null);
    C.useEffect( () => {
        !y || !m || A != null && p && Pe(p.payload.result) && (w || X5(y, x))
    }
    , [A, p, y, x, w]),
    C.useEffect( () => {
        if (!A)
            return;
        const O = (T == null ? void 0 : T.find(Y => Y.roomId === A)) ?? P[A];
        O && (x(Us(tt.IDLE)),
        h == null || h(`${T4.roomPrefix}/${O.code ?? O.roomId}`))
    }
    , [A, T, P]);
    const _ = s ?? (S == null ? void 0 : S.address)
      , z = i ?? (S == null ? void 0 : S.chain) ?? (d == null ? void 0 : d.chainName) ?? wr.primaryChain
      , F = d && !!(d != null && d.publicKey) && (a || g != null) && !!(b != null && b.name) && _
      , U = f === tt.IDLE && F && m
      , G = C.useCallback( () => {
        Y5(),
        ti.reset()
    }
    , [])
      , j = C.useCallback(async O => {
        var ue, pe;
        if (!(U && (y != null && y.connected) && O))
            return;
        const Y = d == null ? void 0 : d.publicKey;
        try {
            if (x(Us(tt.LOADING)),
            !(d != null && d.publicKey)) {
                c({
                    message: "Wallet not connected - public key not available",
                    tokenAddress: _,
                    chain: z
                });
                return
            }
            let q;
            if (Z3(await y.sendAndWait(Ye.Deposit, {
                roomId: O,
                publicKey: d.publicKey,
                token: _,
                chain: z,
                info: {
                    walletName: d.walletName,
                    ...X1()
                }
            }, J.DepositResponse, {
                timeout: 1e3 * 10
            }), ne => {
                console.log("Deposit response success"),
                q = ne
            }
            , ne => {
                console.log("Deposit response failed"),
                c({
                    ...ne,
                    tokenAddress: _,
                    walletAddress: Y,
                    chain: z
                })
            }
            , () => {
                throw new Error("Received invalid response from server")
            }
            ),
            !q)
                return;
            if (!(y != null && y.connected))
                throw console.warn("Control room disconnected after deposit transaction"),
                new Error("Server disconnected: please try again");
            let W;
            try {
                const ne = D4(q.transaction)
                  , le = (ue = d.svmHelpers) == null ? void 0 : ue.deserializeVersionedTransaction(ne);
                if (!(d != null && d.signAndSendTransaction) || !le)
                    throw new Error("Cannot send transaction with the current wallet adapter");
                W = await (d == null ? void 0 : d.signAndSendTransaction(le))
            } catch (ne) {
                throw y.sendAndWait(Ye.DepositResult, {
                    memo: q.memo,
                    walletName: d == null ? void 0 : d.walletName,
                    publicKey: d == null ? void 0 : d.publicKey,
                    result: {
                        failure: {
                            message: (ne == null ? void 0 : ne.toString()) ?? ""
                        }
                    }
                }, "*").catch(le => {
                    le instanceof Zn || console.error(`Failed to send deposit result to server: ${le.message} ${le == null ? void 0 : le.stack}`)
                }
                ),
                ne
            }
            if (!W)
                return;
            y != null && y.connected ? y.sendAndWait(Ye.DepositResult, {
                memo: q.memo,
                walletName: d == null ? void 0 : d.walletName,
                publicKey: d == null ? void 0 : d.publicKey,
                result: {
                    success: {
                        signature: W
                    }
                }
            }, "*").catch(ne => {
                ne instanceof Zn || console.error(`Failed to send deposit result to server: ${ne.message} ${ne == null ? void 0 : ne.stack}`)
            }
            ) : console.warn("Control room not connected; could not send transaction signature");
            const ie = (pe = v.current) == null ? void 0 : pe.payload;
            (ie == null ? void 0 : ie.memo) !== q.memo && x(Us(tt.CONFIRMING)),
            Kt(ti.scene) === L2.GameOver && G()
        } catch (q) {
            const W = q;
            console.error("Transaction signing failed"),
            console.error(W),
            Bl.includes(W.name) ? c({
                ...W,
                tokenAddress: _,
                walletAddress: Y,
                chain: z
            }) : W instanceof Ur ? c({
                message: W.message,
                code: W.errorCode,
                tokenAddress: _,
                walletAddress: Y,
                chain: z
            }) : W instanceof Zn ? c({
                message: "Deposit timed out - Please try again",
                tokenAddress: _,
                walletAddress: Y,
                chain: z
            }) : c({
                message: (W == null ? void 0 : W.toString()) ?? "Unknown error",
                tokenAddress: _,
                walletAddress: Y,
                chain: z
            })
        }
    }
    , [d, y, m, _, U])
      , Z = async () => {
        if (d != null && d.chainName && d.chainName !== z) {
            c({
                message: `Your wallet is using ${d.chainName} but the token you are depositing is on ${z}.`,
                tokenAddress: _,
                chain: z
            });
            return
        }
        let O;
        if (a) {
            if (!y || !m || (O = await a(),
            !O))
                return;
            await j(O),
            D(O)
        } else
            O = g,
            await j(O)
    }
    ;
    return l.jsxs("button", {
        disabled: n || !U || !F,
        onClick: Z,
        className: e ?? "btn",
        type: "button",
        children: [u != null && l.jsx("div", {
            className: u
        }), l.jsx("span", {
            children: t
        }), o != null && (R != null && R.icon ? l.jsx("div", {
            style: {
                display: R ? "block" : "none"
            },
            children: R.icon({
                className: o,
                "aria-label": I == null ? void 0 : I.name
            })
        }) : l.jsx("img", {
            src: R == null ? void 0 : R.urlSmall,
            className: o,
            alt: I == null ? void 0 : I.name,
            style: {
                display: R ? "block" : "none"
            }
        }))]
    })
}
  , F4 = "_spinner_1teii_44"
  , N4 = {
    "join-practice-match-button": "_join-practice-match-button_1teii_1",
    spinner: F4
}
  , z7 = t => {
    if (!t)
        return;
    const {practice: e, competitive: n, blitz: i} = t;
    let s = e ?? n ?? i;
    if (s != null)
        return e && e < s && (s = e),
        n && n < s && (s = n),
        i && i < s && (s = i),
        s + 1e3 * 60 * 60 * 24 * 8
}
  , O7 = t => {
    const e = new URLSearchParams(window.location.search.toLowerCase());
    return t ? e.set(gr, "true") : e.delete(gr),
    {
        pathname: window.location.pathname,
        search: e.toString(),
        hash: window.location.hash
    }
}
  , $7 = (t=new URL(window.location.href).searchParams) => ["0", "1", "2", "3"].includes(t.get("orientation") ?? "") ? Number(t.get("orientation")) : null
  , B4 = (t=zl) => {
    const e = {
        debug: {
            initial: {}
        }
    }
      , n = {
        debug: {},
        experimental: {}
    }
      , i = new URL(window.location.href.toLowerCase()).searchParams;
    if (t)
        return {
            joinRoomParams: e,
            params: n
        };
    rt(i.get("debug")) && (n.debug.enabled = !0),
    rt(i.get("observer")) && (e.debug.observer = !0,
    n.debug.observer = !0),
    rt(i.get("invincible")) && (e.debug.initial.invincibility = 1e3);
    const s = Number.parseInt(pn(i, "initial-score", "score") ?? "-1");
    s >= 0 && (e.debug.initial.score = s),
    e.debug.persistCooldown = rt(pn(i, "persist-cooldown")) ?? void 0;
    const r = rt(i.get("respawn"));
    r != null && (e.debug.respawn = r,
    n.debug.autoRespawn = r);
    const o = Number.parseInt(i.get("countdown") ?? "-1");
    o >= 0 && (e.gameStartDelay = o * 1e3,
    e.debug.countdown = o * 1e3);
    const a = Number.parseInt(i.get("duration") ?? "-1");
    a >= 0 && (e.gameDuration = a * 1e3);
    const c = Number.parseInt(i.get("x") ?? "!")
      , u = Number.parseInt(i.get("y") ?? "!");
    if (!Number.isNaN(c) && !Number.isNaN(u) && (e.debug.initial.position = {
        x: c,
        y: u
    }),
    i.has("color")) {
        const g = parseInt(i.get("color"));
        Number.isNaN(g) || (n.debug.color = g)
    }
    n.debug.zeroSum = rt(pn(i, "zero-sum")) ?? void 0;
    const d = rt(i.get("reconnect"))
      , h = rt(i.get("chat")) ?? (rt(i.get("minimal")) === !0 ? !1 : void 0);
    let f = i.get("url");
    f && !f.match(/^\w+:\/\//) && (f = `${window.location.protocol.replace(/^http/, "ws")}//${f}`),
    n.debug.replay = rt(i.get("replay")) ?? void 0;
    const m = pn(i, "replay-id");
    return m && (e.recordingFileName = m,
    n.debug.replay == null && (n.debug.replay = !0),
    n.debug.replayFollowName = i.get("follow") ?? void 0),
    n.debug.logMessages = !!rt(pn(i, "log-messages", "log")),
    n.debug.logLatePatches = !!rt(pn(i, "log-late-patches", "log")),
    {
        joinRoomParams: e,
        params: n,
        showChat: h,
        reconnect: d,
        url: f
    }
}
  , ea = Qi(N4)
  , z4 = ({containerClassName: t, btnClassName: e, containerStyle: n, btnStyle: i, defaultStyles: s, btnText: r="Practice", debug: o=!1, regionId: a, errorClassName: c, icon: u, iconInSpan: d, spinner: h, onBeforeRequest: f, onSuccess: m, disabled: g, userName: p, error: v, buttonId: x}) => {
    var q, W, ie, ne, le, Ae;
    const y = ts()
      , b = Re(V => V.game.controlConnected)
      , [S,k] = C.useState(void 0)
      , I = Re(V => V.game[J.ServerRegionsResult])
      , R = Re(V => V.game.user)
      , T = (p === void 0 ? (R == null ? void 0 : R.name) ?? (R == null ? void 0 : R.tempName) : p) ?? void 0
      , P = Re(V => V.game.isJoiningGame)
      , [w,A] = C.useState(!1)
      , [D,_] = C.useState(void 0)
      , z = Re(V => V.game.pings)
      , F = Re(V => V.game.closestPing)
      , U = Re(V => V.game.isFetchingServerRegions);
    C.useEffect( () => {
        y && b && (I || U || J5(y, j))
    }
    , [y, b]);
    const G = Q1(!0)
      , j = ns()
      , Z = C.useState()
      , [Q,N] = v ?? Z
      , O = C.useCallback(async (V, X, xe) => {
        var ge, de, _e;
        if (!(!y || !b)) {
            A(!0);
            try {
                if (f) {
                    const ve = await (f == null ? void 0 : f());
                    if (typeof ve == "string") {
                        A(!1),
                        N(ve);
                        return
                    }
                }
                let he, Ce, ze;
                if (o) {
                    const ve = B4();
                    he = (de = (ge = ve.joinRoomParams.debug) == null ? void 0 : ge.initial) == null ? void 0 : de.score,
                    Ce = (_e = ve.joinRoomParams.debug) == null ? void 0 : _e.persistCooldown,
                    ze = ve.params.debug.color
                }
                const we = await y.sendAndWait(Ye.JoinPracticeGameRequest, {
                    regionId: X,
                    publicKey: G == null ? void 0 : G.publicKey,
                    info: X1(),
                    color: ze,
                    buttonId: x,
                    userName: V,
                    teamId: xe,
                    debug: he == null && Ce == null ? void 0 : {
                        initial: {
                            score: he
                        },
                        persistCooldown: Ce
                    }
                }, J.JoinPracticeGameResponse);
                m == null || m(),
                Y3(we) ? N(we.failure.message ?? "Server error") : (N(void 0),
                j(Z5({
                    tempName: we.success.tempName ?? null,
                    require: {
                        uuid: we.success.uuid
                    }
                })))
            } catch (he) {
                N((he == null ? void 0 : he.toString()) ?? "Unknown error")
            }
            A(!1)
        }
    }
    , [y, b, G == null ? void 0 : G.publicKey, f, R == null ? void 0 : R.name, o, x, m])
      , Y = V => {
        const X = V.target.value;
        k(X || void 0)
    }
      , ue = C.useMemo( () => !Object.values(z).find(V => V && !V.error), [z])
      , pe = !w && !P && !a && !F && !g && !ue;
    return l.jsxs("div", {
        className: t,
        style: !t && o ? {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ...n
        } : n,
        children: [o && l.jsxs(l.Fragment, {
            children: [l.jsxs("fieldset", {
                onChange: Y,
                children: [l.jsx("legend", {
                    children: "Server"
                }), (W = (q = I == null ? void 0 : I.payload) == null ? void 0 : q.regions) == null ? void 0 : W.map( ({id: V, name: X}) => {
                    var xe, ge, de, _e, he, Ce;
                    return l.jsxs("label", {
                        style: {
                            display: "flex"
                        },
                        children: [l.jsx("input", {
                            type: "radio",
                            name: "region",
                            value: V
                        }), X ?? V, ((xe = z[V]) == null ? void 0 : xe.result) && l.jsxs("span", {
                            children: [" ", "[ping = ", (de = (ge = z[V]) == null ? void 0 : ge.result) == null ? void 0 : de.value.toFixed(), "ms]"]
                        }), ((_e = z[V]) == null ? void 0 : _e.inProgress) && l.jsxs("span", {
                            children: ["[ping =", l.jsx("div", {
                                className: "snake-spinner",
                                style: {
                                    display: "inline-block",
                                    "--size": "1em",
                                    "--animation-pre-transform": "translateY(0.2em)"
                                }
                            }), "]"]
                        }), ((he = z[V]) == null ? void 0 : he.error) && l.jsxs("span", {
                            children: [" ", "[ping = ", (Ce = z[V]) == null ? void 0 : Ce.error, "]"]
                        })]
                    }, V)
                }
                ), !!((ne = (ie = I == null ? void 0 : I.payload) == null ? void 0 : ie.regions) != null && ne.length) && l.jsxs("label", {
                    style: {
                        display: "flex"
                    },
                    children: [l.jsx("input", {
                        type: "radio",
                        name: "region",
                        value: "",
                        defaultChecked: !0
                    }), "Any"]
                })]
            }), l.jsx("input", {
                type: "number",
                value: D,
                onChange: V => {
                    let X = parseInt(V.target.value);
                    (Number.isNaN(X) || X < 0 || X > 255) && (X = void 0),
                    _(X)
                }
                ,
                placeholder: "Team ID"
            })]
        }), l.jsxs("button", {
            className: `${s ? ea.joinPracticeMatchButton : ""} ${e ?? ""}`,
            onClick: () => o ? O(T, S, D) : O(T, a ?? (F == null ? void 0 : F.regionId)),
            type: "button",
            disabled: !y || !b || w || !!P || !a && !((Ae = (le = I == null ? void 0 : I.payload) == null ? void 0 : le.regions) != null && Ae.length) || !a && !o && !F && !ue || g,
            onPointerDown: V => ti.isPointer.set(V.pointerType !== "touch"),
            "data-status": pe ? "selecting-server" : "",
            style: i,
            children: [!d && u, l.jsxs("span", {
                children: [d && u, pe ? "Picking server…" : r]
            }), (h && w || pe) && l.jsx("div", {
                className: `snake-spinner ${typeof h == "string" ? h : ""} ${s ? ea.spinner : ""}`,
                style: h && typeof h == "object" ? h : void 0
            })]
        }), c !== null && l.jsx("div", {
            className: c,
            children: Q ?? ""
        })]
    })
}
;
function je(t, e, n) {
    return (e = O4(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function O4(t) {
    var e = $4(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function $4(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e);
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
const U7 = ["en", "ko"]
  , Ns = ({name: t, ...e}) => ({
    name: {
        full: typeof t.full == "string" ? {
            singular: t.full,
            plural: t.full + "s",
            space: !0
        } : t.full,
        medium: typeof t.medium == "string" ? {
            singular: t.medium,
            plural: t.medium,
            space: !0
        } : t.medium,
        short: typeof t.short == "string" ? {
            singular: t.short,
            plural: t.short,
            space: !1
        } : t.short
    },
    ...e,
    id: e.id ?? (typeof t.short == "string" ? t.short : t.short.singular)
})
  , U4 = t => {
    if (t.length === 0)
        return [];
    const e = t[0];
    let n = e.interval * e.count;
    const i = [{
        width: e.count.toString().length,
        ...Ns({
            name: e.name,
            interval: e.interval,
            max: n
        })
    }];
    for (let s = 1; s < t.length - 1; s++) {
        const r = t[s]
          , o = n;
        n *= r.count,
        i.push({
            width: e.count.toString().length,
            ...Ns({
                name: r.name,
                interval: o,
                max: n
            })
        })
    }
    if (t.length >= 2) {
        const s = t[t.length - 1];
        i.push({
            width: null,
            ...Ns({
                name: s.name,
                interval: n,
                max: null
            })
        })
    }
    return i
}
  , In = U4([{
    name: {
        full: "second",
        medium: "sec",
        short: "s"
    },
    interval: 1e3,
    count: 60
}, {
    name: {
        full: "minute",
        medium: "min",
        short: "m"
    },
    count: 60
}, {
    name: {
        full: "hour",
        medium: "hr",
        short: "h"
    },
    count: 24
}, {
    name: {
        full: "day",
        medium: "day",
        short: "d"
    }
}])
  , ta = {
    en: In,
    ko: ( () => {
        const t = {
            s: "초",
            m: "분",
            h: "시간",
            d: "일"
        };
        return In.map(e => ({
            ...e,
            name: {
                ...e.name,
                medium: {
                    singular: t[e.id],
                    plural: t[e.id]
                },
                full: {
                    singular: t[e.id],
                    plural: t[e.id]
                }
            }
        }))
    }
    )()
}
  , na = {
    en: " ago",
    ko: " 전"
};
class Gn {
    constructor(e=In, n=!0) {
        je(this, "intervals", void 0),
        je(this, "ignoreMax", void 0),
        this.intervals = e,
        this.ignoreMax = n
    }
    intervalIndex(e) {
        const n = Math.abs(e)
          , i = this.intervals.findIndex(s => s.max === null || n < s.max);
        return i === -1 ? this.ignoreMax && this.intervals.length ? this.intervals.length - 1 : null : i
    }
    interval(e) {
        const n = this.intervalIndex(e);
        return n == null ? null : this.intervals[n]
    }
    components({timeDelta: e, unitLength: n="full", numUnits: i=1, minNumUnits: s=0}) {
        const r = this.intervalIndex(e);
        if (r == null)
            throw new Error("No usable interval found");
        const o = [];
        let a = Math.abs(e);
        const c = Math.max(s, Math.min(i, r + 1))
          , u = Math.max(0, r - c + 1)
          , d = u + c - 1;
        for (let h = d; h >= u; h--) {
            const f = this.intervals[h];
            let m;
            h > r ? m = 0 : (m = (h === u && e < 0 ? Math.ceil : Math.floor)(a / f.interval),
            a -= m * f.interval),
            o.push({
                value: m,
                suffix: "",
                width: f.width,
                id: f.id,
                space: !1
            })
        }
        for (let h = o.length - 1; h >= 0; h--) {
            const f = o[h]
              , m = this.intervals[d - h]
              , g = m.max == null ? null : m.max / m.interval;
            if (h > 0 && g != null && f.value >= g && (f.value -= g,
            o[h - 1].value += 1),
            n !== null) {
                const p = m.name[n];
                f.suffix = p[f.value === 1 ? "singular" : "plural"],
                f.space = p.space
            }
        }
        return o
    }
    updateIn({timeDelta: e, numUnits: n=1}) {
        const i = this.intervalIndex(e);
        if (i == null)
            throw new Error("No usable interval found");
        const s = this.intervals[Math.max(0, i - n + 1)]
          , r = e < 0
          , o = e < 0 ? -1 : 1
          , a = Math.abs(e);
        let c = (Math.floor(a / s.interval) + o) * s.interval;
        if (r) {
            const u = this.intervalIndex(c);
            if (u == null)
                return e;
            const d = this.intervals[Math.max(0, u - n + 1)];
            return s !== d ? a - (d.max ?? s.max ?? 1e3) : (c = (Math.ceil(a / s.interval) + o) * s.interval,
            a - c)
        } else
            return c - e
    }
}
const W7 = {
    closure: t => {
        let e = "";
        for (let n = 0; n < t.length; n++) {
            const {value: i, width: s} = t[n];
            n && (e += ":"),
            e += s ? i.toString().padStart(s, "0") : i.toString()
        }
        return e
    }
};
class sn {
    get getCurrentTime() {
        return this._getCurrentTime
    }
    set getCurrentTime(e) {
        e !== this._getCurrentTime && (this._getCurrentTime = e === "performance" ? performance.now.bind(performance) : e ?? Date.now,
        this.recalculate())
    }
    get timestamp() {
        return this._timestamp
    }
    set timestamp(e) {
        const n = typeof e == "number" ? e : new Date(e).getTime();
        n !== this._timestamp && (this._timestamp = n,
        this.previousSign = null,
        this.recalculate())
    }
    static intervals(e, n, i=In, s=!0) {
        const r = e == null ? 0 : i.findIndex(c => c.id === e);
        if (r === -1)
            throw new Error(`Could not find interval with ID '${e}'`);
        const o = n == null ? i.length - 1 : i.findIndex(c => c.id === n);
        if (o === -1)
            throw new Error(`Could not find interval with ID '${n}'`);
        if (r > o)
            throw new Error(`Min unit '${r}' is larger than max unit '${n}'`);
        const a = i.slice(r, o + 1);
        if (s) {
            const c = a.at(-1);
            c && (c.max || c.width) && (a[a.length - 1] = {
                ...c,
                max: null,
                width: null
            })
        }
        return a
    }
    get minUnit() {
        return this.counter.intervals.at(0).id
    }
    set minUnit(e) {
        this.counter = new Gn(sn.intervals(e, this.maxUnit, this.counter.intervals)),
        this.recalculate()
    }
    get maxUnit() {
        return this.counter.intervals.at(-1).id
    }
    set maxUnit(e) {
        this.counter = new Gn(sn.intervals(this.minUnit, e, this.counter.intervals)),
        this.recalculate()
    }
    get unitLength() {
        return this._unitLength
    }
    set unitLength(e) {
        e !== this._unitLength && (this._unitLength = e,
        this.recalculate())
    }
    get numUnits() {
        return this._numUnits
    }
    set numUnits(e) {
        if (e !== this._numUnits) {
            if (this.unitLengthValid(e),
            e < this.minNumUnits)
                throw new Error(`numUnits must be >= minNumUnits: got ${e} for minNumUnits ${this.minNumUnits}`);
            this._numUnits = e,
            this.recalculate()
        }
    }
    unitLengthValid(e) {
        if (e < 1 || e > In.length)
            throw new Error(`numUnits must be in [1, ${In.length}]: got ${e}`)
    }
    get minNumUnits() {
        return this._minNumUnits
    }
    set minNumUnits(e) {
        if (e !== this._minNumUnits) {
            if (e < 0)
                throw new Error(`minNumUnits must be >= 0: got ${e}`);
            if (e > this.numUnits)
                throw new Error(`minNumUnits must be <= numUnits: got ${e} for numUnits ${this.numUnits}`);
            this._minNumUnits = e,
            this.recalculate()
        }
    }
    get direction() {
        return this._direction
    }
    set direction(e) {
        e !== this._direction && (this._direction = e,
        this.recalculate())
    }
    get endString() {
        return this._endString
    }
    set endString(e) {
        e !== this._endString && (this._endString = e,
        this.recalculate())
    }
    get intervals() {
        return this.counter.intervals
    }
    set intervals(e) {
        e !== this.counter.intervals && (this.counter = new Gn(sn.intervals(this.minUnit, this.maxUnit, e)))
    }
    get agoStr() {
        return this._agoStr
    }
    set agoStr(e) {
        this._agoStr = e
    }
    set language(e) {
        const n = ta[e];
        this.agoStr = na[e],
        n !== this.counter.intervals && (this.counter = new Gn(sn.intervals(this.minUnit, this.maxUnit, n)))
    }
    constructor(e, {direction: n="both", unitLength: i="full", endString: s="now", numUnits: r=2, minNumUnits: o=0, minUnit: a, maxUnit: c, getCurrentTime: u, ...d}={}) {
        var p, v;
        je(this, "counter", void 0),
        je(this, "intervalId", void 0),
        je(this, "_timestamp", void 0),
        je(this, "_unitLength", void 0),
        je(this, "_numUnits", void 0),
        je(this, "_minNumUnits", void 0),
        je(this, "_direction", void 0),
        je(this, "_endString", void 0),
        je(this, "previousSign", null),
        je(this, "_getCurrentTime", void 0),
        je(this, "valueStore", void 0),
        je(this, "value", void 0),
        je(this, "componentsStore", void 0),
        je(this, "components", void 0),
        je(this, "delegate", void 0),
        je(this, "_agoStr", " ago"),
        this.counter = new Gn(sn.intervals(a, c, "intervals"in d ? d.intervals : "language"in d && d.language ? ta[d.language] : void 0)),
        "language"in d && d.language && (this._agoStr = na[d.language]),
        this._timestamp = typeof e == "number" ? e : new Date(e).getTime(),
        this._direction = n,
        this._unitLength = i,
        this.unitLengthValid(r),
        this._numUnits = r,
        this._minNumUnits = o,
        this._getCurrentTime = u === "performance" ? performance.now.bind(performance) : u ?? Date.now,
        this._endString = s;
        const [h,f,m,g] = this._recalculate(this._getCurrentTime());
        f != null && this.setTimeout(f),
        this.value = h,
        this.valueStore = B(h),
        this.components = g,
        this.componentsStore = B(g),
        (v = (p = this.delegate) == null ? void 0 : p.onValueChange) == null || v.call(p, h),
        this.previousSign = m
    }
    recalculate() {
        var r, o, a, c;
        const [e,n,i,s] = this._recalculate(this._getCurrentTime());
        n != null && this.setTimeout(n),
        this.value = e,
        this.valueStore.set(e),
        this.components = s,
        this.componentsStore.set(s),
        (o = (r = this.delegate) == null ? void 0 : r.onValueChange) == null || o.call(r, e),
        i !== this.previousSign && (this.previousSign != null && ((c = (a = this.delegate) == null ? void 0 : a.onSignChange) == null || c.call(a, this.previousSign, i)),
        this.previousSign = i)
    }
    clearTimeout() {
        typeof window == "object" && window.clearTimeout(this.intervalId)
    }
    setTimeout(e) {
        typeof window == "object" && (this.intervalId = window.setTimeout(this.recalculate.bind(this), e))
    }
    _recalculate(e) {
        clearTimeout(this.intervalId);
        let n = e - this._timestamp;
        if (n > 0 && this._direction === "down" || n < 0 && this._direction === "up") {
            if (this._endString)
                return [this._endString, null, 0, null];
            n = 0
        }
        const i = n ? n > 0 ? 1 : -1 : 0
          , s = this.counter.components({
            timeDelta: n,
            unitLength: typeof this._unitLength == "string" ? this._unitLength : typeof this._unitLength == "function" ? null : this._unitLength.unitName ?? null,
            numUnits: this._numUnits,
            minNumUnits: this._minNumUnits
        });
        let r;
        if (typeof this.unitLength == "string") {
            r = "";
            for (let a = 0; a < s.length; a++) {
                const {value: c, suffix: u, space: d} = s[a];
                r += `${a ? ", " : ""}${c}${d ? " " : ""}${u}`
            }
        } else if (typeof this.unitLength == "function")
            r = this.unitLength(s, this._timestamp, e);
        else if ("closure"in this.unitLength && typeof this.unitLength.closure == "function")
            r = this.unitLength.closure(s, this._timestamp, e).toString();
        else {
            const {padStart: a, separator: c, unitName: u} = this.unitLength;
            r = "";
            for (let d = 0; d < s.length; d++) {
                const {value: h, suffix: f, space: m} = s[d];
                r += `${d ? c ?? ", " : ""}${typeof a == "object" ? h.toString().padStart(a.padFirst === !1 && !d ? 0 : a.length, a.prefix ?? "0") : h.toString().padStart(a ?? 0, "0")}${m && u !== null ? " " : ""}${u === null ? "" : f}`
            }
        }
        n > 0 && (r += this.agoStr);
        const o = this.counter.updateIn({
            timeDelta: n,
            numUnits: this.numUnits
        });
        return [r, o, i, s]
    }
}
const ls = ({timestamp: t, direction: e="down", unitLength: n="full", minNumUnits: i=0, numUnits: s=Math.max(1, i), minUnit: r=null, maxUnit: o=null, endString: a=null, language: c, onSignChange: u, body: d, className: h, getCurrentTime: f, prefix: m, suffix: g}) => {
    const [p] = C.useState( () => new sn(t,{
        direction: e,
        unitLength: n,
        numUnits: s,
        minNumUnits: i,
        minUnit: r,
        maxUnit: o,
        endString: a,
        language: c,
        getCurrentTime: f
    }))
      , v = nr(p.valueStore)
      , x = nr(p.componentsStore);
    return C.useEffect( () => {
        p.delegate = {
            onSignChange: u
        }
    }
    , [u, p]),
    C.useEffect( () => {
        p.timestamp = t
    }
    , [t, p]),
    C.useEffect( () => {
        p.direction = e
    }
    , [e, p]),
    C.useEffect( () => {
        p.unitLength = n
    }
    , [n, p]),
    C.useEffect( () => {
        p.numUnits = s
    }
    , [s, p]),
    C.useEffect( () => {
        p.minNumUnits = i
    }
    , [i, p]),
    C.useEffect( () => {
        p.minUnit = r
    }
    , [r, p]),
    C.useEffect( () => {
        p.maxUnit = o
    }
    , [o, p]),
    C.useEffect( () => {
        p.endString = a
    }
    , [a, p]),
    C.useEffect( () => {
        p.getCurrentTime = f
    }
    , [f, p]),
    C.useEffect( () => {
        p.language = c ?? "en"
    }
    , [c, p]),
    C.useEffect( () => {
        p.recalculate();
        const y = () => {
            document.visibilityState === "visible" ? p.recalculate() : p.clearTimeout()
        }
        ;
        return document.addEventListener("visibilitychange", y),
        () => {
            p.clearTimeout(),
            document.removeEventListener("visibilitychange", y)
        }
    }
    , [p]),
    d ? d(x, v) : l.jsxs("span", {
        className: h,
        children: [m ?? "", v, g ?? ""]
    })
}
  , H7 = {
    unitName: "short",
    closure: (t, e, n) => {
        const i = t[0];
        if (!i)
            return "";
        if (i.id === "s" && i.value <= 1)
            return "Just now";
        if (i.id === "d" && i.value > 7) {
            const s = new Date(e)
              , r = new Date(n);
            return s.toLocaleDateString("en-US", {
                year: s.getFullYear() === r.getFullYear() ? void 0 : "numeric",
                month: "short",
                day: "numeric"
            })
        }
        return `${i.value}${i.id}`
    }
}
  , W4 = {
    [$.Homeless]: "/assets/a/werms/dioramas/homeless.denoised.512.avif",
    [$.Soldier]: "/assets/a/werms/dioramas/spartan_basic_sword.denoised.512.avif",
    [$.Elite]: "/assets/a/werms/dioramas/spartan_advanced_sword_shield.denoised.512.avif",
    [$.Spartan]: "/assets/a/werms/dioramas/hercules.denoised.512.avif",
    [$.Commander]: "/assets/a/werms/dioramas/commander.denoised.512.avif",
    [$.GenesisTurbo]: "/assets/a/werms/dioramas/genesis_floating_island.denoised.512.avif",
    [$.GenesisChain]: "/assets/a/werms/dioramas/genesis_chains.denoised.512.avif",
    [$.GenesisFlame]: "/assets/a/werms/dioramas/genesis_flame.denoised.512.avif",
    [$.GenesisDefender]: "/assets/a/werms/dioramas/genesis_defender.denoised.512.avif",
    [$.GenesisGuardian]: "/assets/a/werms/dioramas/genesis_zen.denoised.512.avif",
    [$.SamuraiTraining]: "/assets/a/werms/dioramas/samurai_midnight_training_sword_leaf.denoised.512.avif",
    [$.Melody]: "/assets/a/werms/dioramas/playing_flute_floating_island_sunset.denoised.512.avif",
    [$.Alien]: "/assets/a/werms/dioramas/alien_solar_eclipse.denoised.512.avif",
    [$.FireGod]: "/assets/a/werms/dioramas/fire_god.denoised.512.avif",
    [$.WermWerm]: "/assets/a/werms/dioramas/playing_werm.denoised.512.avif",
    [$.JujutsuKaisen]: "/assets/a/werms/dioramas/jujutsu_kaisen.denoised.512.avif",
    [$.Napoleon]: "/assets/a/werms/dioramas/napoleon_charge_snail_mount.denoised.512.avif",
    [$.IceGod]: "/assets/a/werms/dioramas/ice_god.denoised.512.avif",
    [$.SamuraiRaid]: "/assets/a/werms/dioramas/samurai_koi_carp_air_raid.denoised.512.avif",
    [$.Meadow]: "/assets/a/werms/dioramas/stone_werm_in_meadow_campfire.denoised.512.avif",
    [$.Void]: "/assets/a/werms/dioramas/void_tea_party.denoised.512.avif",
    [$.Praying]: "/assets/a/werms/dioramas/praying_pizza_shrine.denoised.512.avif",
    [$.Steampunk]: "/assets/a/werms/dioramas/steampunk_clock.denoised.512.avif",
    [$.Sage]: "/assets/a/werms/dioramas/village_planting_sapling.denoised.512.avif",
    [$.Elizabeth]: "/assets/a/werms/dioramas/elizabeth_missile_launcher.denoised.512.avif",
    [$.PlatedHerald]: "/assets/a/werms/dioramas/plated_horned_herald.denoised.512.avif",
    [$.PlatedCapedHerald]: "/assets/a/werms/dioramas/plated_horned_caped_herald.denoised.512.avif",
    [$.Pharaoh]: "/assets/a/werms/dioramas/pharaoh_magic_circle.denoised.512.avif",
    [$.CyberDive]: "/assets/a/werms/dioramas/cyber_dive.denoised.512.avif",
    [$.Necromancer]: "/assets/a/werms/dioramas/necromancer_eclipse.denoised.512.avif",
    [$.Commander2]: "/assets/a/werms/dioramas/commander_explorer.denoised.512.avif",
    [$.Granite]: "/assets/a/werms/dioramas/stone_golem_in_valley.denoised.512.avif",
    [$.Ronin]: "/assets/a/werms/dioramas/ronin_in_snow.denoised.512.avif",
    [$.Patriot]: "/assets/a/werms/dioramas/usa_civil_war_soldier_gun_flag_eagle.denoised.512.avif",
    [$.Musketeer]: "/assets/a/werms/dioramas/musketeer_rapier_dungeon.denoised.512.avif",
    [$.Phoenix]: "/assets/a/werms/dioramas/phoenix_moonlight.denoised.512.avif",
    [$.SpecOps]: "/assets/a/werms/dioramas/special_operations_night_assault.denoised.512.avif",
    [$.DJ]: "/assets/a/werms/dioramas/dj.denoised.512.avif",
    [$.Pilot]: "/assets/a/werms/dioramas/time_travelling_aviator.denoised.512.avif",
    [$.Chef]: "/assets/a/werms/dioramas/chef_preparing_roast_chicken.denoised.512.avif",
    [$.Origin]: "/assets/a/werms/dioramas/rainbow_ice_werm.denoised.512.avif",
    [$._0xGrsk]: "/assets/a/werms/dioramas/nuclear_hazmat.denoised.512.avif",
    [$.Alucard]: "/assets/a/werms/dioramas/alucard_throne.denoised.512.avif",
    [$.Nata]: "/assets/a/werms/dioramas/nata_army_charge.denoised.512.avif",
    [$.TurboCow]: "/assets/a/werms/dioramas/turbo_cow_rocket.denoised.512.avif",
    [$.TurboRacer]: "/assets/a/werms/dioramas/racing_werm_pink_space.denoised.512.avif",
    [$.Skull]: "/assets/a/werms/dioramas/skull_rally.denoised.512.avif",
    [$.Frost]: "/assets/a/werms/dioramas/ice_werm_floating_summoning_vortex.denoised.512.avif",
    [$.Lightning]: "/assets/a/werms/dioramas/lightning_werm_catching_lightning.denoised.512.avif",
    [$.UndeadPirate]: "/assets/a/werms/dioramas/ghost_pirate_captain.denoised.512.avif",
    [$.PlagueDoctor]: "/assets/a/werms/dioramas/plague_doctor.denoised.512.avif",
    [$.Panda]: "/assets/a/werms/dioramas/panda_hot_spring.denoised.512.avif",
    [$.Corona]: "/assets/a/werms/dioramas/solar_eclipse_summoning.denoised.512.avif"
}
  , H4 = {
    [$.Homeless]: "/assets/a/werms/homeless.512.avif",
    [$.Soldier]: "/assets/a/werms/spartan_basic_sword.512.avif",
    [$.Elite]: "/assets/a/werms/spartan_advanced_sword_shield.512.avif",
    [$.Spartan]: "/assets/a/werms/hercules.512.avif",
    [$.Commander]: "/assets/a/werms/commander.512.avif",
    [$.GenesisTurbo]: "/assets/a/werms/genesis_cape.denoised.512.avif",
    [$.GenesisChain]: "/assets/a/werms/genesis_cape.denoised.512.avif",
    [$.GenesisFlame]: "/assets/a/werms/genesis_cape.denoised.512.avif",
    [$.GenesisDefender]: "/assets/a/werms/genesis_cape.denoised.512.avif",
    [$.GenesisGuardian]: "/assets/a/werms/genesis_cape.denoised.512.avif",
    [$.Alucard]: "/assets/a/werms/alucard.denoised.512.avif"
}
  , G4 = (t, e=!1) => {
    let n;
    return Ol(t) ? n = W4[t] : n = `/assets/a/nft/collection_one/${t}.512.avif`,
    n && e ? `url(${n})` : n
}
  , G7 = (t, e=!1) => {
    const n = H4[t];
    return n && e ? `url(${n})` : n
}
  , V7 = {
    OuterWall: "/assets/a/werms/dioramas/no_entry.512.avif",
    WallItem: "/assets/a/werms/dioramas/brick_wall.denoised.512.avif",
    Bot: "/assets/a/werms/dioramas/bot_factory.denoised.512.avif"
};
function V4(t, e) {
    if (t.match(/^[a-z]+:\/\//i))
        return t;
    if (t.match(/^\/\//))
        return window.location.protocol + t;
    if (t.match(/^[a-z]+:/i))
        return t;
    const n = document.implementation.createHTMLDocument()
      , i = n.createElement("base")
      , s = n.createElement("a");
    return n.head.appendChild(i),
    n.body.appendChild(s),
    e && (i.href = e),
    s.href = t,
    s.href
}
const q4 = ( () => {
    let t = 0;
    const e = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
    return () => (t += 1,
    `u${e()}${t}`)
}
)();
function Zt(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++)
        e.push(t[n]);
    return e
}
let yn = null;
function J1(t={}) {
    return yn || (t.includeStyleProperties ? (yn = t.includeStyleProperties,
    yn) : (yn = Zt(window.getComputedStyle(document.documentElement)),
    yn))
}
function Ki(t, e) {
    const i = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
    return i ? parseFloat(i.replace("px", "")) : 0
}
function K4(t) {
    const e = Ki(t, "border-left-width")
      , n = Ki(t, "border-right-width");
    return t.clientWidth + e + n
}
function Z4(t) {
    const e = Ki(t, "border-top-width")
      , n = Ki(t, "border-bottom-width");
    return t.clientHeight + e + n
}
function el(t, e={}) {
    const n = e.width || K4(t)
      , i = e.height || Z4(t);
    return {
        width: n,
        height: i
    }
}
function Y4() {
    let t, e;
    try {
        e = Hl
    } catch {}
    const n = e && e.env ? e.env.devicePixelRatio : null;
    return n && (t = parseInt(n, 10),
    Number.isNaN(t) && (t = 1)),
    t || window.devicePixelRatio || 1
}
const Xe = 16384;
function Q4(t) {
    (t.width > Xe || t.height > Xe) && (t.width > Xe && t.height > Xe ? t.width > t.height ? (t.height *= Xe / t.width,
    t.width = Xe) : (t.width *= Xe / t.height,
    t.height = Xe) : t.width > Xe ? (t.height *= Xe / t.width,
    t.width = Xe) : (t.width *= Xe / t.height,
    t.height = Xe))
}
function X4(t, e={}) {
    return t.toBlob ? new Promise(n => {
        t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1)
    }
    ) : new Promise(n => {
        const i = window.atob(t.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1])
          , s = i.length
          , r = new Uint8Array(s);
        for (let o = 0; o < s; o += 1)
            r[o] = i.charCodeAt(o);
        n(new Blob([r],{
            type: e.type ? e.type : "image/png"
        }))
    }
    )
}
function Zi(t) {
    return new Promise( (e, n) => {
        const i = new Image;
        i.onload = () => {
            i.decode().then( () => {
                requestAnimationFrame( () => e(i))
            }
            )
        }
        ,
        i.onerror = n,
        i.crossOrigin = "anonymous",
        i.decoding = "async",
        i.src = t
    }
    )
}
async function J4(t) {
    return Promise.resolve().then( () => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e => `data:image/svg+xml;charset=utf-8,${e}`)
}
async function e5(t, e, n) {
    const i = "http://www.w3.org/2000/svg"
      , s = document.createElementNS(i, "svg")
      , r = document.createElementNS(i, "foreignObject");
    return s.setAttribute("width", `${e}`),
    s.setAttribute("height", `${n}`),
    s.setAttribute("viewBox", `0 0 ${e} ${n}`),
    r.setAttribute("width", "100%"),
    r.setAttribute("height", "100%"),
    r.setAttribute("x", "0"),
    r.setAttribute("y", "0"),
    r.setAttribute("externalResourcesRequired", "true"),
    s.appendChild(r),
    r.appendChild(t),
    J4(s)
}
const Qe = (t, e) => {
    if (t instanceof e)
        return !0;
    const n = Object.getPrototypeOf(t);
    return n === null ? !1 : n.constructor.name === e.name || Qe(n, e)
}
;
function t5(t) {
    const e = t.getPropertyValue("content");
    return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`
}
function n5(t, e) {
    return J1(e).map(n => {
        const i = t.getPropertyValue(n)
          , s = t.getPropertyPriority(n);
        return `${n}: ${i}${s ? " !important" : ""};`
    }
    ).join(" ")
}
function i5(t, e, n, i) {
    const s = `.${t}:${e}`
      , r = n.cssText ? t5(n) : n5(n, i);
    return document.createTextNode(`${s}{${r}}`)
}
function ia(t, e, n, i) {
    const s = window.getComputedStyle(t, n)
      , r = s.getPropertyValue("content");
    if (r === "" || r === "none")
        return;
    const o = q4();
    try {
        e.className = `${e.className} ${o}`
    } catch {
        return
    }
    const a = document.createElement("style");
    a.appendChild(i5(o, n, s, i)),
    e.appendChild(a)
}
function s5(t, e, n) {
    ia(t, e, ":before", n),
    ia(t, e, ":after", n)
}
const sa = "application/font-woff"
  , ra = "image/jpeg"
  , r5 = {
    woff: sa,
    woff2: sa,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: ra,
    jpeg: ra,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp"
};
function o5(t) {
    const e = /\.([^./]*?)$/g.exec(t);
    return e ? e[1] : ""
}
function Wr(t) {
    const e = o5(t).toLowerCase();
    return r5[e] || ""
}
function a5(t) {
    return t.split(/,/)[1]
}
function vr(t) {
    return t.search(/^(data:)/) !== -1
}
function l5(t, e) {
    return `data:${e};base64,${t}`
}
async function tl(t, e, n) {
    const i = await fetch(t, e);
    if (i.status === 404)
        throw new Error(`Resource "${i.url}" not found`);
    const s = await i.blob();
    return new Promise( (r, o) => {
        const a = new FileReader;
        a.onerror = o,
        a.onloadend = () => {
            try {
                r(n({
                    res: i,
                    result: a.result
                }))
            } catch (c) {
                o(c)
            }
        }
        ,
        a.readAsDataURL(s)
    }
    )
}
const Bs = {};
function c5(t, e, n) {
    let i = t.replace(/\?.*/, "");
    return n && (i = t),
    /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, "")),
    e ? `[${e}]${i}` : i
}
async function Hr(t, e, n) {
    const i = c5(t, e, n.includeQueryParams);
    if (Bs[i] != null)
        return Bs[i];
    n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + new Date().getTime());
    let s;
    try {
        const r = await tl(t, n.fetchRequestInit, ({res: o, result: a}) => (e || (e = o.headers.get("Content-Type") || ""),
        a5(a)));
        s = l5(r, e)
    } catch (r) {
        s = n.imagePlaceholder || "";
        let o = `Failed to fetch resource: ${t}`;
        r && (o = typeof r == "string" ? r : r.message),
        o && console.warn(o)
    }
    return Bs[i] = s,
    s
}
async function u5(t) {
    const e = t.toDataURL();
    return e === "data:," ? t.cloneNode(!1) : Zi(e)
}
async function d5(t, e) {
    if (t.currentSrc) {
        const r = document.createElement("canvas")
          , o = r.getContext("2d");
        r.width = t.clientWidth,
        r.height = t.clientHeight,
        o == null || o.drawImage(t, 0, 0, r.width, r.height);
        const a = r.toDataURL();
        return Zi(a)
    }
    const n = t.poster
      , i = Wr(n)
      , s = await Hr(n, i, e);
    return Zi(s)
}
async function h5(t, e) {
    var n;
    try {
        if (!((n = t == null ? void 0 : t.contentDocument) === null || n === void 0) && n.body)
            return await cs(t.contentDocument.body, e, !0)
    } catch {}
    return t.cloneNode(!1)
}
async function f5(t, e) {
    return Qe(t, HTMLCanvasElement) ? u5(t) : Qe(t, HTMLVideoElement) ? d5(t, e) : Qe(t, HTMLIFrameElement) ? h5(t, e) : t.cloneNode(nl(t))
}
const m5 = t => t.tagName != null && t.tagName.toUpperCase() === "SLOT"
  , nl = t => t.tagName != null && t.tagName.toUpperCase() === "SVG";
async function p5(t, e, n) {
    var i, s;
    if (nl(e))
        return e;
    let r = [];
    return m5(t) && t.assignedNodes ? r = Zt(t.assignedNodes()) : Qe(t, HTMLIFrameElement) && (!((i = t.contentDocument) === null || i === void 0) && i.body) ? r = Zt(t.contentDocument.body.childNodes) : r = Zt(((s = t.shadowRoot) !== null && s !== void 0 ? s : t).childNodes),
    r.length === 0 || Qe(t, HTMLVideoElement) || await r.reduce( (o, a) => o.then( () => cs(a, n)).then(c => {
        c && e.appendChild(c)
    }
    ), Promise.resolve()),
    e
}
function g5(t, e, n) {
    const i = e.style;
    if (!i)
        return;
    const s = window.getComputedStyle(t);
    s.cssText ? (i.cssText = s.cssText,
    i.transformOrigin = s.transformOrigin) : J1(n).forEach(r => {
        let o = s.getPropertyValue(r);
        r === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - .1}px`),
        Qe(t, HTMLIFrameElement) && r === "display" && o === "inline" && (o = "block"),
        r === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`),
        i.setProperty(r, o, s.getPropertyPriority(r))
    }
    )
}
function y5(t, e) {
    Qe(t, HTMLTextAreaElement) && (e.innerHTML = t.value),
    Qe(t, HTMLInputElement) && e.setAttribute("value", t.value)
}
function v5(t, e) {
    if (Qe(t, HTMLSelectElement)) {
        const n = e
          , i = Array.from(n.children).find(s => t.value === s.getAttribute("value"));
        i && i.setAttribute("selected", "")
    }
}
function x5(t, e, n) {
    return Qe(e, Element) && (g5(t, e, n),
    s5(t, e, n),
    y5(t, e),
    v5(t, e)),
    e
}
async function C5(t, e) {
    const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
    if (n.length === 0)
        return t;
    const i = {};
    for (let r = 0; r < n.length; r++) {
        const a = n[r].getAttribute("xlink:href");
        if (a) {
            const c = t.querySelector(a)
              , u = document.querySelector(a);
            !c && u && !i[a] && (i[a] = await cs(u, e, !0))
        }
    }
    const s = Object.values(i);
    if (s.length) {
        const r = "http://www.w3.org/1999/xhtml"
          , o = document.createElementNS(r, "svg");
        o.setAttribute("xmlns", r),
        o.style.position = "absolute",
        o.style.width = "0",
        o.style.height = "0",
        o.style.overflow = "hidden",
        o.style.display = "none";
        const a = document.createElementNS(r, "defs");
        o.appendChild(a);
        for (let c = 0; c < s.length; c++)
            a.appendChild(s[c]);
        t.appendChild(o)
    }
    return t
}
async function cs(t, e, n) {
    return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then(i => f5(i, e)).then(i => p5(t, i, e)).then(i => x5(t, i, e)).then(i => C5(i, e))
}
const il = /url\((['"]?)([^'"]+?)\1\)/g
  , b5 = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g
  , w5 = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function S5(t) {
    const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")
}
function _5(t) {
    const e = [];
    return t.replace(il, (n, i, s) => (e.push(s),
    n)),
    e.filter(n => !vr(n))
}
async function k5(t, e, n, i, s) {
    try {
        const r = n ? V4(e, n) : e
          , o = Wr(e);
        let a;
        return s || (a = await Hr(r, o, i)),
        t.replace(S5(e), `$1${a}$3`)
    } catch {}
    return t
}
function I5(t, {preferredFontFormat: e}) {
    return e ? t.replace(w5, n => {
        for (; ; ) {
            const [i,,s] = b5.exec(n) || [];
            if (!s)
                return "";
            if (s === e)
                return `src: ${i};`
        }
    }
    ) : t
}
function sl(t) {
    return t.search(il) !== -1
}
async function rl(t, e, n) {
    if (!sl(t))
        return t;
    const i = I5(t, n);
    return _5(i).reduce( (r, o) => r.then(a => k5(a, o, e, n)), Promise.resolve(i))
}
async function vn(t, e, n) {
    var i;
    const s = (i = e.style) === null || i === void 0 ? void 0 : i.getPropertyValue(t);
    if (s) {
        const r = await rl(s, null, n);
        return e.style.setProperty(t, r, e.style.getPropertyPriority(t)),
        !0
    }
    return !1
}
async function M5(t, e) {
    await vn("background", t, e) || await vn("background-image", t, e),
    await vn("mask", t, e) || await vn("-webkit-mask", t, e) || await vn("mask-image", t, e) || await vn("-webkit-mask-image", t, e)
}
async function R5(t, e) {
    const n = Qe(t, HTMLImageElement);
    if (!(n && !vr(t.src)) && !(Qe(t, SVGImageElement) && !vr(t.href.baseVal)))
        return;
    const i = n ? t.src : t.href.baseVal
      , s = await Hr(i, Wr(i), e);
    await new Promise( (r, o) => {
        t.onload = r,
        t.onerror = e.onImageErrorHandler ? (...c) => {
            try {
                r(e.onImageErrorHandler(...c))
            } catch (u) {
                o(u)
            }
        }
        : o;
        const a = t;
        a.decode && (a.decode = r),
        a.loading === "lazy" && (a.loading = "eager"),
        n ? (t.srcset = "",
        t.src = s) : t.href.baseVal = s
    }
    )
}
async function A5(t, e) {
    const i = Zt(t.childNodes).map(s => ol(s, e));
    await Promise.all(i).then( () => t)
}
async function ol(t, e) {
    Qe(t, Element) && (await M5(t, e),
    await R5(t, e),
    await A5(t, e))
}
function j5(t, e) {
    const {style: n} = t;
    e.backgroundColor && (n.backgroundColor = e.backgroundColor),
    e.width && (n.width = `${e.width}px`),
    e.height && (n.height = `${e.height}px`);
    const i = e.style;
    return i != null && Object.keys(i).forEach(s => {
        n[s] = i[s]
    }
    ),
    t
}
const oa = {};
async function aa(t) {
    let e = oa[t];
    if (e != null)
        return e;
    const i = await (await fetch(t)).text();
    return e = {
        url: t,
        cssText: i
    },
    oa[t] = e,
    e
}
async function la(t, e) {
    let n = t.cssText;
    const i = /url\(["']?([^"')]+)["']?\)/g
      , r = (n.match(/url\([^)]+\)/g) || []).map(async o => {
        let a = o.replace(i, "$1");
        return a.startsWith("https://") || (a = new URL(a,t.url).href),
        tl(a, e.fetchRequestInit, ({result: c}) => (n = n.replace(o, `url(${c})`),
        [o, c]))
    }
    );
    return Promise.all(r).then( () => n)
}
function ca(t) {
    if (t == null)
        return [];
    const e = []
      , n = /(\/\*[\s\S]*?\*\/)/gi;
    let i = t.replace(n, "");
    const s = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");
    for (; ; ) {
        const c = s.exec(i);
        if (c === null)
            break;
        e.push(c[0])
    }
    i = i.replace(s, "");
    const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi
      , o = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})"
      , a = new RegExp(o,"gi");
    for (; ; ) {
        let c = r.exec(i);
        if (c === null) {
            if (c = a.exec(i),
            c === null)
                break;
            r.lastIndex = a.lastIndex
        } else
            a.lastIndex = r.lastIndex;
        e.push(c[0])
    }
    return e
}
async function P5(t, e) {
    const n = []
      , i = [];
    return t.forEach(s => {
        if ("cssRules"in s)
            try {
                Zt(s.cssRules || []).forEach( (r, o) => {
                    if (r.type === CSSRule.IMPORT_RULE) {
                        let a = o + 1;
                        const c = r.href
                          , u = aa(c).then(d => la(d, e)).then(d => ca(d).forEach(h => {
                            try {
                                s.insertRule(h, h.startsWith("@import") ? a += 1 : s.cssRules.length)
                            } catch (f) {
                                console.error("Error inserting rule from remote css", {
                                    rule: h,
                                    error: f
                                })
                            }
                        }
                        )).catch(d => {
                            console.error("Error loading remote css", d.toString())
                        }
                        );
                        i.push(u)
                    }
                }
                )
            } catch (r) {
                const o = t.find(a => a.href == null) || document.styleSheets[0];
                s.href != null && i.push(aa(s.href).then(a => la(a, e)).then(a => ca(a).forEach(c => {
                    o.insertRule(c, o.cssRules.length)
                }
                )).catch(a => {
                    console.error("Error loading remote stylesheet", a)
                }
                )),
                console.error("Error inlining remote css file", r)
            }
    }
    ),
    Promise.all(i).then( () => (t.forEach(s => {
        if ("cssRules"in s)
            try {
                Zt(s.cssRules || []).forEach(r => {
                    n.push(r)
                }
                )
            } catch (r) {
                console.error(`Error while reading CSS rules from ${s.href}`, r)
            }
    }
    ),
    n))
}
function E5(t) {
    return t.filter(e => e.type === CSSRule.FONT_FACE_RULE).filter(e => sl(e.style.getPropertyValue("src")))
}
async function L5(t, e) {
    if (t.ownerDocument == null)
        throw new Error("Provided element is not within a Document");
    const n = Zt(t.ownerDocument.styleSheets)
      , i = await P5(n, e);
    return E5(i)
}
function al(t) {
    return t.trim().replace(/["']/g, "")
}
function T5(t) {
    const e = new Set;
    function n(i) {
        (i.style.fontFamily || getComputedStyle(i).fontFamily).split(",").forEach(r => {
            e.add(al(r))
        }
        ),
        Array.from(i.children).forEach(r => {
            r instanceof HTMLElement && n(r)
        }
        )
    }
    return n(t),
    e
}
async function D5(t, e) {
    const n = await L5(t, e)
      , i = T5(t);
    return (await Promise.all(n.filter(r => i.has(al(r.style.fontFamily))).map(r => {
        const o = r.parentStyleSheet ? r.parentStyleSheet.href : null;
        return rl(r.cssText, o, e)
    }
    ))).join(`
`)
}
async function F5(t, e) {
    const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await D5(t, e);
    if (n) {
        const i = document.createElement("style")
          , s = document.createTextNode(n);
        i.appendChild(s),
        t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
    }
}
async function N5(t, e={}) {
    const {width: n, height: i} = el(t, e)
      , s = await cs(t, e, !0);
    return await F5(s, e),
    await ol(s, e),
    j5(s, e),
    await e5(s, n, i)
}
async function B5(t, e={}) {
    const {width: n, height: i} = el(t, e)
      , s = await N5(t, e)
      , r = await Zi(s)
      , o = document.createElement("canvas")
      , a = o.getContext("2d")
      , c = e.pixelRatio || Y4()
      , u = e.canvasWidth || n
      , d = e.canvasHeight || i;
    return o.width = u * c,
    o.height = d * c,
    e.skipAutoScale || Q4(o),
    o.style.width = `${u}`,
    o.style.height = `${d}`,
    e.backgroundColor && (a.fillStyle = e.backgroundColor,
    a.fillRect(0, 0, o.width, o.height)),
    a.drawImage(r, 0, 0, o.width, o.height),
    o
}
async function z5(t, e={}) {
    const n = await B5(t, e);
    return await X4(n)
}
const O5 = "_container_1yewr_1"
  , $5 = "_locked_1yewr_33"
  , U5 = {
    container: O5,
    "badge-group-item-background": "_badge-group-item-background_1yewr_7",
    "coming-soon": "_coming-soon_1yewr_20",
    locked: $5,
    "selected-group": "_selected-group_1yewr_38"
}
  , zs = {
    weekly_practice: {
        name: "Elite Werm",
        w: 1024,
        h: 2048,
        box: {
            x: 12,
            y: 500,
            w: 1e3,
            h: 1450
        },
        images: [{
            name: "1.512.avif",
            box: {
                x: 51,
                y: 606,
                w: 848,
                h: 1050
            }
        }, {
            name: "2.512.avif",
            box: {
                x: 113,
                y: 640,
                w: 878,
                h: 1006
            }
        }, {
            name: "3.512.avif",
            box: {
                x: 127,
                y: 638,
                w: 770,
                h: 990
            }
        }, {
            name: "4.512.avif",
            box: {
                x: 123,
                y: 639,
                w: 777,
                h: 1033
            }
        }, {
            name: "5.512.avif",
            box: {
                x: 108,
                y: 521,
                w: 808,
                h: 1111
            }
        }]
    }
};
({
    ...zs.weekly_practice
},
{
    ...zs.weekly_practice
}),
{
    ...zs.weekly_practice
};
Qi(U5);
const L = Qi(Kd)
  , ce = L
  , W5 = t => {
    const e = Be.c(25);
    let n, i, s, r, o, a, c, u, d;
    e[0] !== t ? ({className: o, defaultStyling: a, noStyles: c, onAppear: i, onClose: s, stopPropagation: u, timeout: d, children: n, ...r} = t,
    e[0] = t,
    e[1] = n,
    e[2] = i,
    e[3] = s,
    e[4] = r,
    e[5] = o,
    e[6] = a,
    e[7] = c,
    e[8] = u,
    e[9] = d) : (n = e[1],
    i = e[2],
    s = e[3],
    r = e[4],
    o = e[5],
    a = e[6],
    c = e[7],
    u = e[8],
    d = e[9]);
    const h = o === void 0 ? "" : o
      , f = a === void 0 ? !0 : a
      , m = c === void 0 ? !1 : c
      , g = u === void 0 ? !1 : u
      , p = d === void 0 ? !1 : d
      , v = C.useRef(!1);
    let x;
    e[10] !== i ? (x = () => {
        i == null || i()
    }
    ,
    e[10] = i,
    e[11] = x) : x = e[11];
    let y;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (y = [],
    e[12] = y) : y = e[12],
    C.useEffect(x, y);
    const b = `${m ? "" : ce.modalBackground} ${f ? ce.defaultStyling : ""} ${h}`;
    let S, k, I;
    e[13] === Symbol.for("react.memo_cache_sentinel") ? (I = P => {
        v.current = P.target === P.currentTarget
    }
    ,
    S = () => {
        v.current = !1
    }
    ,
    k = () => {
        v.current = !1
    }
    ,
    e[13] = S,
    e[14] = k,
    e[15] = I) : (S = e[13],
    k = e[14],
    I = e[15]);
    let R;
    e[16] !== s || e[17] !== g || e[18] !== p ? (R = P => {
        v.current && (v.current = !1,
        P.target === P.currentTarget && (g && P.stopPropagation(),
        s && (p ? setTimeout( () => s(P), 0) : s(P))))
    }
    ,
    e[16] = s,
    e[17] = g,
    e[18] = p,
    e[19] = R) : R = e[19];
    let T;
    return e[20] !== n || e[21] !== r || e[22] !== R || e[23] !== b ? (T = l.jsx("div", {
        ...r,
        className: b,
        onPointerDown: I,
        onPointerLeave: S,
        onPointerCancel: k,
        onPointerUp: R,
        children: n
    }),
    e[20] = n,
    e[21] = r,
    e[22] = R,
    e[23] = b,
    e[24] = T) : T = e[24],
    T
}
  , Yt = t => {
    const e = Be.c(44)
      , {className: n, alertDot: i, onClose: s, title: r, img: o, horizontalHeader: a, fullWidthButtons: c, reverseButtonOrder: u, children: d, acknowledge: h, onAcknowledge: f, reject: m, onReject: g, accept: p, onAccept: v, tintAccept: x, actionChildren: y, headerClassName: b, titleClassName: S, contentClassName: k, actionsContainerClassName: I, acceptClassName: R, rejectClassName: T, acknowledgeClassName: P, titleCenter: w, scroll: A, acceptDefaultStyling: D, acknowledgeDefaultStyling: _, rejectDefaultStyling: z} = t
      , F = a === void 0 ? !1 : a
      , U = c === void 0 ? !1 : c
      , G = u === void 0 ? !1 : u
      , j = b === void 0 ? "" : b
      , Z = S === void 0 ? "" : S
      , Q = k === void 0 ? "" : k
      , N = I === void 0 ? "" : I
      , O = R === void 0 ? "" : R
      , Y = T === void 0 ? "" : T
      , ue = P === void 0 ? "" : P
      , pe = w === void 0 ? !1 : w
      , q = A === void 0 ? !0 : A
      , W = D === void 0 ? !0 : D
      , ie = _ === void 0 ? !0 : _
      , ne = z === void 0 ? !0 : z
      , le = `${n ?? ""} ${ce.popupContainer} ${i ? ce.alertDot : ""} ${q ? ce.scroll : ""}`;
    let Ae;
    e[0] !== s ? (Ae = s && l.jsx("button", {
        className: ce.closeButton,
        onClick: s,
        children: l.jsx(St, {})
    }),
    e[0] = s,
    e[1] = Ae) : Ae = e[1];
    const V = `${ce.header} ${F ? ce.horizontalHeader : ""} ${j}`
      , X = `${Z} ${pe ? ce.center : ""}`;
    let xe;
    e[2] !== X || e[3] !== r ? (xe = l.jsx("h4", {
        className: X,
        children: r
    }),
    e[2] = X,
    e[3] = r,
    e[4] = xe) : xe = e[4];
    let ge;
    e[5] !== o ? (ge = o && l.jsx("img", {
        src: o
    }),
    e[5] = o,
    e[6] = ge) : ge = e[6];
    let de;
    e[7] !== V || e[8] !== xe || e[9] !== ge ? (de = l.jsxs("div", {
        className: V,
        children: [xe, ge]
    }),
    e[7] = V,
    e[8] = xe,
    e[9] = ge,
    e[10] = de) : de = e[10];
    const _e = `${ce.content} ${Q}`;
    let he;
    e[11] !== d || e[12] !== _e ? (he = l.jsx("div", {
        className: _e,
        children: d
    }),
    e[11] = d,
    e[12] = _e,
    e[13] = he) : he = e[13];
    const Ce = `${ce.actionContainer} ${U ? ce.fullWidthButtons : ""} ${G ? ce.reverseButtonOrder : ""} ${N}`;
    let ze;
    e[14] !== g || e[15] !== m || e[16] !== Y || e[17] !== ne ? (ze = m && l.jsx("button", {
        className: `${ne ? ce.reject : ce.noStyles} ${Y}`,
        onClick: g,
        disabled: !g,
        children: m
    }),
    e[14] = g,
    e[15] = m,
    e[16] = Y,
    e[17] = ne,
    e[18] = ze) : ze = e[18];
    let we;
    e[19] !== p || e[20] !== O || e[21] !== W || e[22] !== v || e[23] !== x ? (we = p && l.jsx("button", {
        className: `${W ? ce.accept : ce.noStyles} ${x ? ce.tint : ""} ${O}`,
        onClick: v,
        disabled: !v,
        children: p
    }),
    e[19] = p,
    e[20] = O,
    e[21] = W,
    e[22] = v,
    e[23] = x,
    e[24] = we) : we = e[24];
    let ve;
    e[25] !== h || e[26] !== ue || e[27] !== ie || e[28] !== f ? (ve = h && l.jsx("button", {
        className: `${ie ? ce.acknowledge : ce.noStyles} ${ue}`,
        onClick: f,
        disabled: !f,
        children: h
    }),
    e[25] = h,
    e[26] = ue,
    e[27] = ie,
    e[28] = f,
    e[29] = ve) : ve = e[29];
    let Oe;
    e[30] !== y || e[31] !== Ce || e[32] !== ze || e[33] !== we || e[34] !== ve ? (Oe = l.jsxs("div", {
        className: Ce,
        children: [ze, we, ve, y]
    }),
    e[30] = y,
    e[31] = Ce,
    e[32] = ze,
    e[33] = we,
    e[34] = ve,
    e[35] = Oe) : Oe = e[35];
    let He;
    e[36] !== de || e[37] !== he || e[38] !== Oe ? (He = l.jsxs("div", {
        className: ce.scrollContainer,
        children: [de, he, Oe]
    }),
    e[36] = de,
    e[37] = he,
    e[38] = Oe,
    e[39] = He) : He = e[39];
    let st;
    return e[40] !== le || e[41] !== Ae || e[42] !== He ? (st = l.jsxs("div", {
        className: le,
        children: [Ae, He]
    }),
    e[40] = le,
    e[41] = Ae,
    e[42] = He,
    e[43] = st) : st = e[43],
    st
}
  , q7 = ({className: t, onReject: e, onAccept: n, alertDot: i, onClose: s}) => l.jsx(Yt, {
    className: t,
    alertDot: i,
    title: "Create an account to save progress!",
    img: "/assets/a/werms/crown_vibrant.512.avif",
    reject: "Maybe Later",
    onReject: e,
    accept: "Sign up",
    onAccept: n,
    onClose: s,
    horizontalHeader: !0,
    children: l.jsxs("ul", {
        children: [l.jsx("li", {
            children: "Unlock cash tournaments at Lvl 10"
        }), l.jsx("li", {
            children: "Save your level and points progress"
        })]
    })
})
  , K7 = ({className: t, onAcknowledge: e, onClose: n}) => l.jsx(Yt, {
    className: t,
    title: "How levels work",
    img: "/assets/a/werms/in_coin_pile.512.avif",
    acknowledge: "Got it",
    onAcknowledge: e,
    onClose: n,
    children: l.jsxs("ul", {
        children: [l.jsx("li", {
            children: "Play games to gain points and level up"
        }), l.jsx("li", {
            children: "Unlock cash tournaments at Lvl 10"
        }), l.jsx("li", {
            children: "The higher your level, the higher stakes you can play"
        })]
    })
})
  , Z7 = t => {
    const e = Be.c(15)
      , {className: n, onClose: i, tokenName: s, publicKey: r} = t
      , [o,a] = C.useState();
    let c;
    e[0] !== r || e[1] !== o ? (c = r ? l.jsxs(l.Fragment, {
        children: [l.jsx(B1, {}), l.jsx("span", {
            children: o ? "Copied" : "Copy my wallet address"
        })]
    }) : void 0,
    e[0] = r,
    e[1] = o,
    e[2] = c) : c = e[2];
    let u;
    e[3] !== r || e[4] !== o ? (u = r ? () => {
        r && (clearTimeout(o),
        navigator.clipboard.writeText(r),
        a(setTimeout( () => {
            a(void 0)
        }
        , 2e3)))
    }
    : void 0,
    e[3] = r,
    e[4] = o,
    e[5] = u) : u = e[5];
    const d = s ?? "token";
    let h;
    e[6] !== d ? (h = l.jsxs("p", {
        children: ["You don't have enough ", d, " in your wallet to play this game."]
    }),
    e[6] = d,
    e[7] = h) : h = e[7];
    let f;
    e[8] === Symbol.for("react.memo_cache_sentinel") ? (f = l.jsx("p", {
        children: "Try again after adding more funds."
    }),
    e[8] = f) : f = e[8];
    let m;
    return e[9] !== n || e[10] !== i || e[11] !== c || e[12] !== u || e[13] !== h ? (m = l.jsxs(Yt, {
        className: n,
        title: "Need more money!",
        img: "/assets/a/werms/napoleon_sad.512.avif",
        onClose: i,
        fullWidthButtons: !0,
        reverseButtonOrder: !0,
        accept: c,
        onAccept: u,
        reject: "Close",
        onReject: i,
        children: [h, f]
    }),
    e[9] = n,
    e[10] = i,
    e[11] = c,
    e[12] = u,
    e[13] = h,
    e[14] = m) : m = e[14],
    m
}
  , Y7 = ({className: t, onClose: e, onAccept: n, firstParagraph: i}) => l.jsx(Yt, {
    className: t,
    title: "Wallet not connected",
    img: "/assets/a/werms/horned_eclipse_jacket.512.avif",
    onClose: e,
    fullWidthButtons: !0,
    reverseButtonOrder: !0,
    accept: "Sign up or log in",
    onAccept: n,
    tintAccept: !0,
    reject: "Close",
    onReject: e,
    children: typeof i == "string" ? l.jsx("p", {
        children: i
    }) : i ?? l.jsx("p", {
        children: "You must connect your wallet to play cash games."
    })
})
  , H5 = t => l.jsxs(Yt, {
    title: "Start with free games",
    img: "/assets/a/werms/viking_sword_shield.512.avif",
    fullWidthButtons: !0,
    reverseButtonOrder: !0,
    accept: "Start free game",
    tintAccept: !0,
    reject: "Close",
    onReject: t.onClose,
    acknowledge: t.onSignIn ? "Sign in with Wallet" : void 0,
    onAcknowledge: t.onSignIn,
    ...t,
    children: [l.jsx("p", {
        children: "Unlock cash tournaments by reaching level 10 in the free game."
    }), l.jsx("p", {
        children: "This ensures you come to the competitive tournament mode ready to win!"
    })]
})
  , Q7 = ({className: t, onClose: e, onSignIn: n}) => l.jsx(H5, {
    className: t,
    onClose: e,
    onAccept: void 0,
    accept: void 0,
    onSignIn: n,
    actionChildren: l.jsx(z4, {
        btnText: "Start free game",
        btnClassName: `${ce.accept} ${ce.tint}`,
        spinner: {
            "--size": "1.5em",
            position: "absolute",
            right: "var(--size)",
            filter: "grayscale(1) invert() contrast(3)"
        }
    })
})
  , X7 = ({className: t, onClose: e, minCount: n}) => l.jsx(Yt, {
    className: t,
    title: "Minimum player count",
    img: "/assets/a/werms/cook.512.avif",
    onClose: e,
    acknowledge: "Ok",
    onAcknowledge: e,
    children: l.jsxs("p", {
        children: ["The game will automatically start when ", n === 1 ? "one player has deposited" : n ? `${n} players have deposited` : "the minimum number of players have deposited", "."]
    })
})
  , J7 = ({className: t, onClose: e}) => l.jsxs(Yt, {
    className: t,
    title: "Game duration",
    img: "/assets/a/werms/viking_sword_shield.512.avif",
    onClose: e,
    acknowledge: "Ok",
    onAcknowledge: e,
    children: [l.jsx("p", {
        children: "Games run for 5 minutes."
    }), l.jsx("p", {
        children: "Players can join until the last 60s of the game. After that, they will be put into the queue for the next game."
    })]
})
  , ef = ({className: t, onClose: e}) => l.jsxs(Yt, {
    className: t,
    title: "How much do I win?",
    img: "/assets/a/werms/spartan_knight.512.avif",
    onClose: e,
    acknowledge: "Ok",
    onAcknowledge: e,
    children: [l.jsxs("p", {
        children: ["Your winnings are determined by the ", l.jsx("b", {
            children: "share of the total score"
        }), " you hold at the end of the game."]
    }), l.jsx("h6", {
        children: "Example"
    }), l.jsx("p", {
        children: "At the end of a game:"
    }), l.jsxs("ul", {
        children: [l.jsx("li", {
            children: "Your score = 1,000"
        }), l.jsx("li", {
            children: "Combined total score of all players = 10,000"
        })]
    }), l.jsx("p", {
        children: "Your share = 1,000 / 10,000 = 10%"
    }), l.jsx("p", {
        children: "If the prize pool for this game was $20, you would win $2. "
    })]
})
  , Gr = t => `https://x.com/intent/tweet?text=${encodeURIComponent(t)}`
  , tf = ({className: t="", level: e, theme: n, portrait: i, onProfile: s, onClose: r, onClickTwitterShare: o}) => l.jsxs("div", {
    className: `${L.popupTheme} ${L.popupLevelProfileUnlocked} ${i ? L.portrait : L.landscape} ${t}`,
    children: [l.jsx("button", {
        className: ce.closeButton,
        onClick: r,
        children: l.jsx(St, {})
    }), l.jsx("img", {
        src: G4(n),
        alt: Li(n)
    }), l.jsxs("div", {
        className: L.content,
        children: [l.jsxs("div", {
            className: L.titleGroup,
            children: [l.jsxs("div", {
                className: L.titleSuper,
                children: [l.jsx("span", {
                    children: "You've reached"
                }), l.jsx("span", {
                    children: "You've reached"
                })]
            }), l.jsxs("div", {
                className: L.title,
                children: [l.jsxs("span", {
                    children: ["Level ", e ?? "??", "!"]
                }), l.jsxs("span", {
                    children: ["Level ", e ?? "??", "!"]
                })]
            })]
        }), l.jsxs("span", {
            className: L.description,
            children: [l.jsx("span", {
                className: L.bold,
                children: "Unlocked: "
            }), l.jsx("br", {}), Li(n), " profile"]
        }), l.jsxs("a", {
            className: L.actionButton,
            href: Gr(`Just reached Level ${e ?? "??"} on werm.fun and unlocked the ${Li(n)} profile!`),
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: o,
            children: [l.jsx("div", {
                className: L.iconWrapper,
                children: l.jsx($r, {})
            }), l.jsxs("span", {
                children: ["Share on X!", l.jsx(Yd, {})]
            })]
        }), s && l.jsx(V1, {
            className: L.secondaryActionButton,
            to: "/profile",
            onClick: s,
            children: l.jsx("span", {
                children: "Go to profile"
            })
        })]
    })]
})
  , nf = t => {
    const e = Be.c(39)
      , {attempts: n, onClose: i} = t;
    let s;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = l.jsx(St, {}),
    e[0] = s) : s = e[0];
    let r;
    e[1] !== i ? (r = l.jsx("button", {
        className: ce.closeButton,
        onClick: i,
        children: s
    }),
    e[1] = i,
    e[2] = r) : r = e[2];
    let o;
    e[3] === Symbol.for("react.memo_cache_sentinel") ? (o = l.jsx("img", {
        src: "/assets/a/werms/dioramas/magma_werm_speeding.denoised.512.avif",
        alt: "blitz"
    }),
    e[3] = o) : o = e[3];
    let a;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (a = l.jsx(i4, {}),
    e[4] = a) : a = e[4];
    let c;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (c = l.jsxs("div", {
        className: L.title,
        children: [a, "How to ", l.jsx("span", {
            children: "Blitz"
        })]
    }),
    e[5] = c) : c = e[5];
    let u;
    e[6] !== n ? (u = (n == null ? void 0 : n.m) === 0 ? l.jsx("span", {
        children: "Blitz is not currently available"
    }) : n != null && n.ni ? l.jsxs("div", {
        className: L.incrementTime,
        children: ["+1 Blitz in  ", l.jsx(ls, {
            timestamp: n.ni,
            numUnits: 2,
            unitLength: {
                unitName: "short",
                padStart: 2,
                separator: " "
            }
        })]
    }) : null,
    e[6] = n,
    e[7] = u) : u = e[7];
    let d;
    e[8] === Symbol.for("react.memo_cache_sentinel") ? (d = l.jsx("div", {
        className: L.icon,
        children: l.jsx("span", {
            children: "2×"
        })
    }),
    e[8] = d) : d = e[8];
    let h;
    e[9] === Symbol.for("react.memo_cache_sentinel") ? (h = l.jsx("div", {
        className: L.heading,
        children: "Double Werm points"
    }),
    e[9] = h) : h = e[9];
    let f;
    e[10] === Symbol.for("react.memo_cache_sentinel") ? (f = l.jsxs("li", {
        className: L.points,
        children: [d, l.jsxs("div", {
            className: L.value,
            children: [h, l.jsxs("div", {
                className: L.description,
                children: ["2× points on every ", l.jsx("span", {
                    className: L.italics,
                    children: "Blitz"
                }), " score. Level up faster!"]
            })]
        })]
    }),
    e[10] = f) : f = e[10];
    let m;
    e[11] === Symbol.for("react.memo_cache_sentinel") ? (m = l.jsx("div", {
        className: L.icon,
        children: l.jsx(Jd, {})
    }),
    e[11] = m) : m = e[11];
    let g;
    e[12] === Symbol.for("react.memo_cache_sentinel") ? (g = l.jsx("div", {
        className: L.heading,
        children: "Your best life counts"
    }),
    e[12] = g) : g = e[12];
    let p;
    e[13] === Symbol.for("react.memo_cache_sentinel") ? (p = l.jsx("span", {
        className: L.italics,
        children: "Blitz"
    }),
    e[13] = p) : p = e[13];
    let v;
    e[14] === Symbol.for("react.memo_cache_sentinel") ? (v = l.jsxs("li", {
        className: L.scoring,
        children: [m, l.jsxs("div", {
            className: L.value,
            children: [g, l.jsxs("div", {
                className: L.description,
                children: ["Your ", p, " score = the most points you gain in one life during the 2-minute ", l.jsx("span", {
                    className: L.italics,
                    children: "Blitz"
                })]
            })]
        })]
    }),
    e[14] = v) : v = e[14];
    let x;
    e[15] === Symbol.for("react.memo_cache_sentinel") ? (x = l.jsx(s4, {}),
    e[15] = x) : x = e[15];
    const y = (n == null ? void 0 : n.p) ?? 27e5;
    let b;
    e[16] !== y ? (b = vo(y, "medium"),
    e[16] = y,
    e[17] = b) : b = e[17];
    let S;
    e[18] !== b ? (S = l.jsxs("div", {
        className: L.icon,
        children: [x, l.jsx("span", {
            children: b
        })]
    }),
    e[18] = b,
    e[19] = S) : S = e[19];
    let k;
    e[20] === Symbol.for("react.memo_cache_sentinel") ? (k = l.jsx("div", {
        className: L.heading,
        children: "Blitz blitz blitz"
    }),
    e[20] = k) : k = e[20];
    const I = (n == null ? void 0 : n.p) ?? 27e5;
    let R;
    e[21] !== I ? (R = vo(I, "long"),
    e[21] = I,
    e[22] = R) : R = e[22];
    let T;
    e[23] !== R ? (T = l.jsxs("div", {
        className: L.value,
        children: [k, l.jsxs("div", {
            className: L.description,
            children: ["Get a new run every ", R]
        })]
    }),
    e[23] = R,
    e[24] = T) : T = e[24];
    let P;
    e[25] !== S || e[26] !== T ? (P = l.jsxs("ul", {
        children: [f, v, l.jsxs("li", {
            className: L.attempts,
            children: [S, T]
        })]
    }),
    e[25] = S,
    e[26] = T,
    e[27] = P) : P = e[27];
    let w;
    e[28] === Symbol.for("react.memo_cache_sentinel") ? (w = l.jsxs("div", {
        className: L.text,
        children: ["Start ", l.jsx("span", {
            children: "Blitz"
        }), " any time in game"]
    }),
    e[28] = w) : w = e[28];
    let A;
    e[29] === Symbol.for("react.memo_cache_sentinel") ? (A = l.jsxs("div", {
        className: L.keybindingContainer,
        children: [w, l.jsx("div", {
            className: L.keybinding,
            children: l.jsx("span", {
                children: "Space"
            })
        })]
    }),
    e[29] = A) : A = e[29];
    let D;
    e[30] !== P || e[31] !== u ? (D = l.jsxs("div", {
        className: L.body,
        children: [o, l.jsxs("div", {
            className: L.content,
            children: [c, u, P, A]
        })]
    }),
    e[30] = P,
    e[31] = u,
    e[32] = D) : D = e[32];
    let _;
    e[33] !== i ? (_ = l.jsx("div", {
        className: L.footer,
        children: l.jsx("button", {
            onClick: i,
            children: "Close"
        })
    }),
    e[33] = i,
    e[34] = _) : _ = e[34];
    let z;
    return e[35] !== r || e[36] !== D || e[37] !== _ ? (z = l.jsxs("div", {
        className: L.popupBlitz,
        children: [r, D, _]
    }),
    e[35] = r,
    e[36] = D,
    e[37] = _,
    e[38] = z) : z = e[38],
    z
}
  , ll = (t=Date.now()) => {
    var e;
    return t < (((e = us[zi]) == null ? void 0 : e.expires) ?? 0)
}
  , us = {
    [$.Nata]: {
        title: "The Bullseye Challenge",
        backgroundColor: "#255B26",
        backgroundGradient: "linear-gradient(180deg, #303818 50%, #121509 100%)",
        accentColor: "#FEB900",
        expires: Date.parse("2025-05-19T15:00:00Z"),
        button: {
            color: "#255B26",
            backgroundColor: "#FEB900",
            backgroundColorHover: "#FFBF12"
        },
        progress: t => {
            var e, n, i;
            return Ie(t, me.ItemKills) ? {
                i: (((e = t.metadata) == null ? void 0 : e.cKills) ?? 0) + (((n = t.metadata) == null ? void 0 : n.pKills) ?? 0),
                n: t.challenge.template.config.n,
                str: `${((i = t.metadata) == null ? void 0 : i.cKills) ?? 0} / ${t.challenge.template.config.n}`,
                segments: t.challenge.template.config.n >> 2
            } : {
                i: 0,
                n: 10,
                str: "0 / 10",
                segments: 5
            }
        }
        ,
        chip: {
            header: {
                color: "#FEB900"
            },
            description: t => Ie(t, me.ItemKills) ? `Get ${t.challenge.template.config.n} kills using ${Ys[mr[t.challenge.template.config.item]].toLowerCase()} to unlock the Goatnataaaaa skin!` : "Get 10 kills using arrow to unlock the Goatnataaaaa skin!"
        },
        info: {
            image: {
                src: "/assets/a/werms/dioramas/nata_arrow_training.denoised.512.avif",
                alt: "Nata attempting to shoot arrow at target",
                aspectRatio: 1.5
            },
            description: t => Ie(t, me.ItemKills) ? `Get ${t.challenge.template.config.n} kills using ${Ys[mr[t.challenge.template.config.item]].toLowerCase()} to unlock the Goatnataaaaa skin!` : "Get 10 kills using arrow to unlock the Goatnataaaaa skin!",
            boxShadowColor: "#30381833",
            borderColor: "#282527"
        },
        unlocked: {
            twitter: t => `Just unlocked the Goatnataaaaa skin on werm.fun by getting ${Ie(t, me.ItemKills) ? t.challenge.template.config.n : 1} arrow kills! 🏹

@werm_fun`,
            background: "#274D19",
            title: {
                text: "Goatnataaaaa skin unlocked!",
                color: "#FCCD39",
                backgroundColor: "#144B22"
            },
            image: {
                src: "/assets/a/werms/dioramas/nata_arrow_challenge_complete.denoised.512.avif",
                alt: "Nata with bow",
                aspectRatio: .9,
                flipX: !1,
                landscape: {
                    objectPosition: "10% center"
                },
                portrait: {
                    objectPosition: "2% center"
                }
            }
        }
    },
    [$.TurboCow]: {
        title: "The Turbo Challenge",
        backgroundColor: "#181B26",
        backgroundGradient: "linear-gradient(180deg, #13151E 50%, #282C3E 100%)",
        accentColor: "#A7FDA1",
        expires: Date.parse("2025-05-25T15:00:00Z"),
        button: {
            color: "#271102",
            backgroundColor: "#A7FDA1",
            backgroundColorHover: "#B4FCAF"
        },
        progress: t => {
            var s;
            if (!Ie(t, me.WinningsSum))
                return {
                    i: 0,
                    n: 10,
                    str: "$0 / $1",
                    segments: 10
                };
            let e = (s = t.metadata) == null ? void 0 : s.sumUsd;
            const {sumUsd: n, decimals: i} = t.challenge.template.config;
            return e != null && i != null && (e = +e.toFixed(i)),
            e != null && n < e && (e = n),
            {
                i: e ?? 0,
                n,
                str: `$${e ?? 0} / $${n}`,
                segments: 10
            }
        }
        ,
        chip: {
            header: {
                color: "#A7FDA1"
            },
            description: t => `Earn the Turbo Cow skin by earning $${Ie(t, me.WinningsSum) ? t.challenge.template.config.sumUsd : 1} in tournaments!`
        },
        info: {
            image: {
                src: "/assets/a/werms/dioramas/turbo_cow_red_samurai_duel.denoised.512.avif",
                alt: "Turbo cow dueling with samurai werm",
                aspectRatio: 1.5
            },
            description: t => `Earn $${Ie(t, me.WinningsSum) ? t.challenge.template.config.sumUsd : 1} in tournaments to instantly unlock the Turbo Cow skin!`,
            boxShadowColor: "#30381833",
            borderColor: "#282527"
        },
        unlocked: {
            twitter: t => `Just unlocked the @turbothecow skin on werm.fun by winning $${Ie(t, me.WinningsSum) ? t.challenge.template.config.sumUsd : 1} in tournaments!

@werm_fun`,
            background: "#90FD92",
            title: {
                text: "Turbo Cow skin unlocked!",
                color: "#FCCD39",
                backgroundColor: "#144B22"
            },
            image: {
                src: "/assets/a/werms/dioramas/turbo_cow_jumping_sword_with_samurai.denoised.512.avif",
                alt: "Turbo cow celebrating",
                aspectRatio: 1.5,
                flipX: !0
            },
            description: {
                color: "black",
                colorBold: "black"
            },
            footer: {
                iconColor: "#0005"
            }
        }
    },
    [$.TurboRacer]: {
        title: "The Blitz Challenge",
        backgroundColor: "#2C2520",
        backgroundGradient: "linear-gradient(180deg, #13151E 50%, #282C3E 100%)",
        accentColor: "#FD3775",
        expires: Date.parse("2025-06-10T15:00:00Z"),
        button: {
            color: "#000",
            backgroundColor: "#FD3775",
            backgroundColorHover: "#FF588C"
        },
        progress: t => {
            var i;
            if (!Ie(t, me.BlitzAttempts))
                return {
                    i: 0,
                    n: 10,
                    str: "0 / 10",
                    segments: 10
                };
            let e = (i = t.metadata) == null ? void 0 : i.n;
            const {n} = t.challenge.template.config;
            return e != null && n < e && (e = n),
            {
                i: e ?? 0,
                n,
                str: `${e ?? 0} / ${n}`,
                segments: n ?? 10
            }
        }
        ,
        chip: {
            header: {
                color: "#FD3775"
            },
            description: t => `Earn the Turbo Racer skin by playing ${Ie(t, me.BlitzAttempts) ? t.challenge.template.config.n : 10} Blitz runs by 09 June!`
        },
        info: {
            image: {
                src: "/assets/a/werms/dioramas/racing_werm_pink_city.denoised.512.avif",
                alt: "Turbo Racer werm racing along the information superhighway",
                aspectRatio: 1.5
            },
            description: t => `Play ${Ie(t, me.BlitzAttempts) ? t.challenge.template.config.n : 10} Blitz runs by 09 June to unlock the Turbo Racer skin!`,
            boxShadowColor: "#30381833",
            borderColor: "#282527"
        },
        unlocked: {
            twitter: t => `${Ie(t, me.BlitzAttempts) ? t.challenge.template.config.n : 1} Blitz runs: complete ✅
Turbo racer werm: unlocked 🏎 

Love the new Blitz update on @werm_fun!`,
            background: "#070D29",
            title: {
                text: "Turbo Racer skin unlocked!",
                color: "#FD3775",
                backgroundColor: "#070D29"
            },
            image: {
                src: "/assets/a/werms/dioramas/racing_werm_pink_success.denoised.512.avif",
                alt: "Turbo Racer werm on the podium",
                aspectRatio: 1.5,
                flipX: !1
            },
            description: {
                color: "#FFF",
                colorBold: "#FFF"
            },
            footer: {
                iconColor: "#FB7B9C50"
            }
        }
    },
    [$.Skull]: {
        title: "The Reaper Challenge",
        backgroundColor: "#1A1A1A",
        backgroundGradient: "#1A1A1A",
        accentColor: "#F5EDD9",
        expires: Date.parse("2025-06-22T15:00:00Z"),
        button: {
            color: "#000",
            backgroundColor: "#F5EDD9",
            backgroundColorHover: "#FBF7EF"
        },
        progress: t => {
            var i;
            if (!Ie(t, me.KillsUnique))
                return {
                    i: 0,
                    n: 30,
                    str: "0 / 30",
                    segments: 10
                };
            let e = (i = t.metadata) == null ? void 0 : i.n;
            const {n} = t.challenge.template.config;
            return e != null && n < e && (e = n),
            {
                i: e ?? 0,
                n,
                str: `${e ?? 0} / ${n}`,
                segments: Math.max(1, Math.ceil(n / 3))
            }
        }
        ,
        chip: {
            header: {
                color: "#F5EDD9"
            },
            description: t => "Earn the Skull werm skin!"
        },
        info: {
            image: {
                src: "/assets/a/werms/dioramas/skull_tomb.denoised.512.avif",
                alt: "Skull werm escaping their tomb",
                aspectRatio: 1.5
            },
            description: t => l.jsxs(l.Fragment, {
                children: [l.jsx("p", {
                    children: "Earn the Skull werm skin by: "
                }), l.jsxs("ol", {
                    children: [l.jsx("li", {
                        children: "Setting a kill quote"
                    }), l.jsxs("li", {
                        children: ["Getting ", (t == null ? void 0 : t.challenge.template.config.type) === me.KillsUnique ? t.challenge.template.config.n : 30, " views on your kill card between 12 Jun and 22 Jun"]
                    })]
                })]
            }),
            preconditionAction: t => {
                var c;
                const e = ts()
                  , n = ns()
                  , i = Re(u => u.game.user)
                  , s = us[$.Skull]
                  , r = L.preconditionButton
                  , o = {
                    "--button-color": s.button.color,
                    "--button-background-color": s.button.backgroundColor,
                    "--button-hover-background-color": s.button.backgroundColorHover
                };
                if (i != null && i.killQuote || t != null && t.claimable || t != null && t.claimed)
                    return;
                const a = Do.minLevelSet;
                return (((c = i == null ? void 0 : i.points) == null ? void 0 : c.level) ?? 0) < a ? l.jsxs("button", {
                    disabled: !0,
                    className: r,
                    style: o,
                    children: [l.jsx("div", {
                        className: L.iconWrapper,
                        children: l.jsx(n4, {})
                    }), l.jsxs("span", {
                        children: ["Unlock kill quotes at Level ", Do.minLevelSet]
                    })]
                }) : l.jsxs(V1, {
                    to: "/profile",
                    search: {
                        [U1]: "true"
                    },
                    className: r,
                    style: o,
                    onClick: () => {
                        n(Q5(null)),
                        e == null || e.sendAnalytics(Me.ChallengeSkullInfoSetKillQuoteModal)
                    }
                    ,
                    children: [l.jsx("span", {
                        children: "Set kill quote"
                    }), l.jsx("div", {
                        className: L.iconWrapper,
                        children: l.jsx(Qd, {})
                    })]
                })
            }
            ,
            boxShadowColor: "#0003",
            borderColor: "#222"
        },
        unlocked: {
            maxWidth: "35em",
            twitter: t => `Just unlocked the Skull werm by getting ${Ie(t, me.KillsUnique) ? t.challenge.template.config.n : 30} kills.

Pure carnage!

Come at me on @werm_fun`,
            background: "#1A1A1A",
            title: {
                text: "Skull werm skin unlocked!",
                color: "#F5EDD9",
                backgroundColor: "#1A1A1A"
            },
            image: {
                src: "/assets/a/werms/dioramas/skull_rally.denoised.512.avif",
                alt: "Skull werm giving speech to their minions in a stone hall",
                aspectRatio: 1.5,
                landscape: {
                    aspectRatio: 1.25
                },
                flipX: !1
            },
            description: {
                color: "#FFF",
                colorBold: "#FFF"
            },
            footer: {
                iconColor: "#AAA5"
            }
        }
    },
    [$.Frost]: {
        title: "The Frost Challenge",
        backgroundColor: "#13538A",
        backgroundGradient: "linear-gradient(to bottom, #13538A, #196FB8)",
        accentColor: "#CEF7F7",
        expires: Date.parse("2025-07-07T15:00:00Z"),
        button: {
            color: "#0F3A60",
            backgroundColor: "#CEF7F7",
            backgroundColorHover: "#E0FCFC"
        },
        progress: t => {
            var i;
            let[e,n] = Ie(t, me.DailyMatchPoints) ? [((i = t.metadata) == null ? void 0 : i.days.length) ?? 0, t.challenge.template.config.days] : [0, 3];
            return {
                i: e,
                n,
                str: `${e} / ${n} ${n === 1 ? "day" : "days"} complete`,
                segments: n,
                long: !0
            }
        }
        ,
        chip: {
            header: {
                color: "#CEF7F7"
            },
            description: t => "Earn the Frost werm skin!"
        },
        info: {
            image: {
                src: "/assets/a/werms/dioramas/ice_werm_floating.denoised.512.avif",
                alt: "Frost werm summoning an ice storm",
                aspectRatio: .8,
                flipX: !1,
                portrait: {
                    aspectRatio: 1.5
                }
            },
            mini: {
                title: {
                    color: "#CEF7F7"
                },
                color: "#FFF",
                hoverBackground: "linear-gradient(#0003, #0003), linear-gradient(to bottom, #13538A, #196FB8), linear-gradient(to bottom, #13538A, #196FB8)",
                hoverImageForeground: "linear-gradient(#0003, #0003)"
            },
            description: t => {
                var r, o, a, c, u, d, h, f;
                const [e,n] = C.useState(0)
                  , {hasCompletedToday: i, dayEndUtc: s} = C.useMemo( () => {
                    var m, g, p, v, x;
                    try {
                        const y = new Date
                          , b = (Ie(t, me.DailyMatchPoints) ? (p = (g = (m = t == null ? void 0 : t.challenge) == null ? void 0 : m.template) == null ? void 0 : g.config) == null ? void 0 : p.timeZone : void 0) ?? "Asia/Seoul"
                          , S = new Intl.DateTimeFormat("en-US",{
                            timeZone: b,
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        });
                        let k = y.getUTCFullYear()
                          , I = y.getUTCMonth() + 1
                          , R = y.getUTCDate();
                        for (const {type: G, value: j} of S.formatToParts(y))
                            G === "year" && (k = Number(j)),
                            G === "month" && (I = Number(j)),
                            G === "day" && (R = Number(j));
                        const T = `${Kc([k, I, R + 1])}T00:00:00.000`
                          , P = new Date(T)
                          , w = new Date(P.toLocaleString("en-US", {
                            timeZone: b
                        }))
                          , A = new Date(P.toLocaleString("en-US", {
                            timeZone: "UTC"
                        }))
                          , D = w.getTime() - A.getTime()
                          , _ = P.getTime() - A.getTime()
                          , z = P.getTime() + _ - D
                          , F = qc([k, I - 1, R]);
                        return {
                            hasCompletedToday: Ie(t, me.DailyMatchPoints) ? (x = (v = t.metadata) == null ? void 0 : v.days) == null ? void 0 : x.includes(F) : void 0,
                            dayEndUtc: z
                        }
                    } catch (y) {
                        return console.error(`Failed to determine day end for challenge: ${y} ${y == null ? void 0 : y.stack}`),
                        {
                            hasCompletedToday: void 0,
                            dayEndUtc: null
                        }
                    }
                }
                , [t, e]);
                return l.jsxs(l.Fragment, {
                    children: [l.jsxs("p", {
                        children: ["Earn the Frost werm skin by getting a score above ", Ie(t, me.DailyMatchPoints) ? (c = (a = (o = (r = t == null ? void 0 : t.challenge) == null ? void 0 : r.template) == null ? void 0 : o.config) == null ? void 0 : a.n) == null ? void 0 : c.toLocaleString() : "20,000", " ", ((f = Wc[Ie(t, me.DailyMatchPoints) ? (h = (d = (u = t == null ? void 0 : t.challenge) == null ? void 0 : u.template) == null ? void 0 : d.config) == null ? void 0 : h.days : 3]) == null ? void 0 : f.toLowerCase()) ?? "three", " days in a row."]
                    }), !(t != null && t.claimed) && l.jsxs("div", {
                        className: "bg-[#CEF7F7] flex items-center gap-2 p-2 rounded-lg mt-4",
                        children: [l.jsx(Xd, {
                            className: `w-8 aspect-square icon-secondary-[#E9FBFB] ${i ? "icon-[#57C771]" : "icon-[#999]"}`
                        }), l.jsxs("div", {
                            className: "flex flex-col",
                            children: [l.jsxs("div", {
                                className: "text-[#1A1A1A] font-semibold",
                                children: ["Today: ", i ? "complete!" : "not complete!"]
                            }), l.jsxs("div", {
                                className: "text-[#333]",
                                children: ["Day ends in ", s == null ? "??" : l.jsx(ls, {
                                    className: "tabular-nums",
                                    timestamp: s,
                                    numUnits: 2,
                                    direction: "down",
                                    onSignChange: () => n(m => m + 1),
                                    unitLength: {
                                        unitName: "short",
                                        padStart: 2,
                                        separator: " "
                                    }
                                })]
                            })]
                        })]
                    })]
                })
            }
            ,
            boxShadowColor: "#0003",
            borderColor: "#196FB8",
            difficulty: {
                background: "#071B2C",
                color: "#D0DEEA"
            },
            claimedCount: {
                crownImageSrc: null
            }
        },
        unlocked: {
            maxWidth: "35em",
            twitter: (t, e) => e != null ? `Frost Werm unlocked! Only ${e ?? "??"} player${e === 1 ? " has" : "s have"} completed this so far ❄️

Will you be joining us?

@werm_fun` : `Frost Werm unlocked!

20k points, 3 days in a row. Hardest challenge so far.

Are you up for the challenge?

@werm_fun`,
            background: "radial-gradient(circle, #13538A, #1F87E0)",
            title: {
                text: "Frost werm skin unlocked!",
                color: "#CEF7F7",
                backgroundColor: "transparent"
            },
            image: {
                src: "/assets/a/werms/dioramas/ice_werm_success.denoised.512.avif",
                alt: "Frost werm celebrating",
                aspectRatio: 1.5,
                landscape: {
                    aspectRatio: 1.25
                },
                flipX: !1
            },
            description: {
                color: "#FFF",
                colorBold: "#FFF"
            },
            footer: {
                iconColor: "#FFF9"
            }
        },
        claimedCount: {
            background: "#CEF7F740",
            color: "#CEF7F7",
            crownImageSrc: "/assets/a/crown.ice.denoised.256.avif"
        }
    },
    [$.Lightning]: {
        title: "The Lightning Challenge",
        backgroundColor: "#022740",
        backgroundGradient: "linear-gradient(180deg, #022740 0%, #007CA3 100%)",
        accentColor: "#FDD621",
        expires: Date.parse("2025-07-20T15:00:00Z"),
        button: {
            color: "#022740",
            backgroundColor: "#FDD621",
            backgroundColorHover: "#FFE066"
        },
        progress: void 0,
        chip: {
            header: {
                color: "#FDD621"
            },
            description: t => {
                var e, n, i, s, r, o, a;
                return `Score higher than ${((a = ((i = (n = (e = t == null ? void 0 : t.challenge) == null ? void 0 : e.template) == null ? void 0 : n.config) == null ? void 0 : i.type) === "blitz_score" ? (o = (r = (s = t == null ? void 0 : t.challenge) == null ? void 0 : s.template) == null ? void 0 : r.config) == null ? void 0 : o.score : void 0) == null ? void 0 : a.toLocaleString()) ?? "7,500"} in Blitz to unlock the Lightning Werm skin`
            }
        },
        info: {
            image: {
                src: "/assets/a/werms/dioramas/lightning_werm_arena.denoised.512.avif",
                alt: "Lightning Werm in arena",
                aspectRatio: 1.5,
                flipX: !0
            },
            description: t => {
                var e, n, i, s, r, o, a;
                return l.jsx(l.Fragment, {
                    children: l.jsxs("p", {
                        children: ["Score higher than ", ((a = ((i = (n = (e = t == null ? void 0 : t.challenge) == null ? void 0 : e.template) == null ? void 0 : n.config) == null ? void 0 : i.type) === "blitz_score" ? (o = (r = (s = t == null ? void 0 : t.challenge) == null ? void 0 : s.template) == null ? void 0 : r.config) == null ? void 0 : o.score : void 0) == null ? void 0 : a.toLocaleString()) ?? "7,500", " in a single Blitz run to unlock the Lightning Werm skin."]
                    })
                })
            }
            ,
            boxShadowColor: "#0003",
            borderColor: "#007CA3",
            difficulty: {
                background: "#FDD006",
                color: "#000"
            },
            claimedCount: {
                crownImageSrc: null
            },
            mini: {
                bigTitle: !0,
                title: {
                    color: "#FDD720"
                },
                background: "linear-gradient(90deg, #022740 0%, #007CA3 100%)",
                hoverImageForeground: "linear-gradient(#0003, #0003)",
                hoverBackgroundForeground: "linear-gradient(#0003, #0003)"
            }
        },
        unlocked: {
            twitter: (t, e) => e != null ? `Lightning Werm unlocked! Only ${e} player${e === 1 ? " has" : "s have"} completed this so far ⚡️

Will you be joining us? 

@werm_fun` : `Lightning Werm unlocked!

Will you be joining us? 

@werm_fun`,
            background: "linear-gradient(90deg, #13538A 0%, #000C16 100%)",
            title: {
                text: "Lightning Werm skin unlocked!",
                color: "#FCE154",
                backgroundColor: "transparent"
            },
            image: {
                src: "/assets/a/werms/dioramas/lightning_werm_arena.denoised.512.avif",
                alt: "Lightning Werm in arena",
                aspectRatio: 1.5,
                flipX: !1
            },
            description: {
                color: "#FFF",
                colorBold: "#FCE154"
            },
            footer: {
                iconColor: "#87ADCE"
            }
        },
        claimedCount: {
            background: "#FFF4",
            color: "#FFF"
        }
    }
};
let Ft;
const sf = ({className: t="", portrait: e=!0, transposed: n=!1, theme: i, style: s=us[i], userChallenge: r, onClose: o, onCloseText: a}) => {
    var c, u, d, h, f, m, g, p, v, x, y, b, S, k;
    return l.jsxs("div", {
        className: `${L.popupTheme} ${L.popupWeeklyThemeChallengeInfo} ${e ? L.portrait : L.landscape} ${n ? L.transposed : ""} ${t}`,
        style: {
            background: s.backgroundGradient
        },
        children: [o && l.jsx("button", {
            className: ce.closeButton,
            onClick: o,
            children: l.jsx(St, {})
        }), l.jsx("div", {
            className: `${L.imageContainer} ${s.info.image.flipX ? L.flipX : ""}`,
            style: {
                aspectRatio: (e ? (c = s.info.image.portrait) == null ? void 0 : c.aspectRatio : (u = s.info.image.landscape) == null ? void 0 : u.aspectRatio) ?? s.info.image.aspectRatio
            },
            children: l.jsx("img", {
                src: s.info.image.src,
                alt: s.info.image.alt
            })
        }), l.jsxs("div", {
            className: L.content,
            children: [l.jsx("div", {
                className: L.titleGroup,
                children: l.jsx("div", {
                    className: L.title,
                    style: {
                        color: s.accentColor
                    },
                    children: s.title
                })
            }), l.jsxs("div", {
                className: L.statusBar,
                children: [Fi((r == null ? void 0 : r.challenge.template.flags) ?? 0, r3.DifficultyHard) && l.jsx("div", {
                    className: L.difficulty,
                    style: {
                        background: (d = s.info.difficulty) == null ? void 0 : d.background,
                        color: (h = s.info.difficulty) == null ? void 0 : h.color
                    },
                    children: "Difficulty: Hard"
                }), r != null && r.claimed ? l.jsx("div", {
                    className: L.complete,
                    children: "Challenge complete"
                }) : l.jsx("div", {
                    className: L.expires,
                    children: (r == null ? void 0 : r.challenge.expires) ?? s.expires ? l.jsxs(l.Fragment, {
                        children: ["Ends in ", l.jsx("span", {
                            children: l.jsx(ls, {
                                timestamp: (r == null ? void 0 : r.challenge.expires) ?? s.expires,
                                numUnits: 2,
                                unitLength: {
                                    unitName: "short",
                                    padStart: 2,
                                    separator: " "
                                }
                            })
                        })]
                    }) : l.jsx("span", {
                        children: "The challenge is not currently available"
                    })
                })]
            }), l.jsx("div", {
                className: L.description,
                children: s.info.description(r)
            }), ((m = (f = s.info).preconditionAction) == null ? void 0 : m.call(f, r)) ?? (((g = s.progress) == null ? void 0 : g.call(s, r)) && (Ft = s.progress(r),
            l.jsxs("div", {
                className: `${L.progressGroupContainer} ${Ft.long ? L.long : ""}`,
                children: [l.jsx("div", {
                    className: L.progressGroup,
                    style: {
                        "--n": Ft.segments
                    },
                    children: Array.from({
                        length: Ft.segments
                    }, (I, R) => l.jsx("div", {
                        className: L.progress,
                        style: {
                            "--progress": Math.max(0, Math.min(1, Ft.i / Ft.n * Ft.segments - R))
                        }
                    }, R))
                }), l.jsx("span", {
                    className: L.progressText,
                    children: Ft.str
                })]
            }))), (r == null ? void 0 : r.challenge.claimedCount) != null && (s.info.claimedCount ?? s.claimedCount) && l.jsxs("div", {
                className: L.claimedCount,
                style: {
                    background: ((p = s.info.claimedCount) == null ? void 0 : p.background) ?? ((v = s.claimedCount) == null ? void 0 : v.background),
                    color: ((x = s.info.claimedCount) == null ? void 0 : x.color) ?? ((y = s.claimedCount) == null ? void 0 : y.color)
                },
                children: [l.jsx("img", {
                    src: (((b = s.info.claimedCount) == null ? void 0 : b.crownImageSrc) === null ? void 0 : ((S = s.info.claimedCount) == null ? void 0 : S.crownImageSrc) ?? ((k = s.claimedCount) == null ? void 0 : k.crownImageSrc)) ?? "/assets/a/crown.gold.shiny.denoised.256.avif",
                    alt: "Crown"
                }), l.jsxs("span", {
                    children: [r.challenge.claimedCount, " player", r.challenge.claimedCount === 1 ? " has" : "s have", " completed this challenge"]
                })]
            }), a && l.jsx("button", {
                className: L.secondaryActionButton,
                onClick: a,
                children: "Close"
            })]
        })]
    })
}
  , rf = ({className: t="", portrait: e, transposed: n, theme: i, style: s=us[i], userChallenge: r, claimedCount: o, onClose: a, onClickTwitterShare: c}) => {
    var u, d, h, f, m, g, p, v, x, y, b, S, k, I, R;
    return l.jsxs("div", {
        className: `${L.popupTheme} ${L.popupWeeklyThemeChallengeUnlocked} ${e ? L.portrait : L.landscape} ${n ? L.transposed : ""} ${t}`,
        style: {
            background: s.unlocked.background ?? s.backgroundGradient,
            "--popup-theme-landscape-max-width": s.unlocked.maxWidth
        },
        children: [l.jsx("button", {
            className: ce.closeButton,
            onClick: a,
            children: l.jsx(St, {})
        }), l.jsx("div", {
            className: `${L.imageContainer} ${s.unlocked.image.flipX ? L.flipX : ""}`,
            style: {
                aspectRatio: (e ? (u = s.unlocked.image.portrait) == null ? void 0 : u.aspectRatio : (d = s.unlocked.image.landscape) == null ? void 0 : d.aspectRatio) ?? s.unlocked.image.aspectRatio,
                objectPosition: (e ? (h = s.unlocked.image.portrait) == null ? void 0 : h.objectPosition : (f = s.unlocked.image.landscape) == null ? void 0 : f.objectPosition) ?? s.unlocked.image.objectPosition
            },
            children: l.jsx("img", {
                src: s.unlocked.image.src,
                alt: s.unlocked.image.alt
            })
        }), l.jsxs("div", {
            className: L.content,
            children: [l.jsx("div", {
                className: L.titleGroup,
                style: {
                    background: s.unlocked.title.backgroundColor
                },
                children: l.jsx("div", {
                    className: L.title,
                    style: {
                        color: s.unlocked.title.color
                    },
                    children: s.unlocked.title.text ?? "Challenge Complete!"
                })
            }), l.jsxs("div", {
                className: L.description,
                style: {
                    color: (m = s.unlocked.description) == null ? void 0 : m.color
                },
                children: [l.jsx("span", {
                    children: "Congratulations on unlocking the "
                }), l.jsxs("span", {
                    className: L.bold,
                    style: {
                        color: (g = s.unlocked.description) == null ? void 0 : g.colorBold
                    },
                    children: [Li(i), " skin!"]
                }), l.jsx("br", {}), l.jsx("span", {
                    className: L.mt,
                    children: "Go to your profile to equip!"
                }), o != null && (s.unlocked.claimedCount ?? s.claimedCount) && l.jsxs("div", {
                    className: L.claimedCount,
                    style: {
                        background: ((p = s.unlocked.claimedCount) == null ? void 0 : p.background) ?? ((v = s.claimedCount) == null ? void 0 : v.background),
                        color: ((x = s.unlocked.claimedCount) == null ? void 0 : x.color) ?? ((y = s.claimedCount) == null ? void 0 : y.color)
                    },
                    children: [l.jsx("img", {
                        src: (((b = s.info.claimedCount) == null ? void 0 : b.crownImageSrc) === null ? void 0 : ((S = s.info.claimedCount) == null ? void 0 : S.crownImageSrc) ?? ((k = s.claimedCount) == null ? void 0 : k.crownImageSrc)) ?? "/assets/a/crown.gold.shiny.denoised.256.avif",
                        alt: "Crown"
                    }), l.jsx("span", {
                        children: o < 3 ? `You are the ${(I = Uc[o]) == null ? void 0 : I.toLowerCase()} to complete this challenge!` : `${o} players have completed this challenge`
                    })]
                })]
            }), l.jsxs("a", {
                className: `${L.actionButton} ${L.flex}`,
                href: Gr(s.unlocked.twitter(r, o)),
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: c,
                children: [l.jsx("div", {
                    className: L.iconWrapper,
                    children: l.jsx($r, {})
                }), l.jsx("span", {
                    children: "Share on X!"
                })]
            }), l.jsxs("div", {
                className: L.footer,
                style: {
                    "--icon-color": (R = s.unlocked.footer) == null ? void 0 : R.iconColor
                },
                children: [l.jsx(ri, {
                    eyeFill: "mask"
                }), l.jsx("span", {
                    children: window.location.hostname
                })]
            })]
        })]
    })
}
  , of = ({className: t="", portrait: e, points: n, score: i, rank: s, threshold: r, userPoints: o, first: a, onClose: c, onClickTwitterShare: u, onClickCopyImage: d}) => {
    const h = C.useMemo( () => {
        if (!o)
            return;
        const v = T1(o.level)
          , x = L1(o.level)
          , y = Math.max(0, Math.min((o.lifetime - (v ?? 0)) / (x ?? 1), 1))
          , b = Math.max(0, (x ?? 0) - ((o.lifetime ?? 0) - (v ?? 0)));
        return {
            t: y,
            toNext: b,
            level: o.level
        }
    }
    , [o])
      , f = C.useMemo( () => {
        const v = ((s == null ? void 0 : s[0]) ?? 0) + 1
          , x = (s == null ? void 0 : s[1]) ?? 0
          , y = i == null ? void 0 : i.toLocaleString();
        let b;
        return v <= 1 ? b = `Crushed ${x - 1} other Werm${x === 2 ? "" : "s"} in Blitz for 1st place!

My score was ${y}. Can you beat it?

@werm_fun` : v <= 10 ? b = `So close to glory. Placed ${v} out of ${x} in Blitz with a score of ${y}.

Can you beat it?

@werm_fun` : b = `Ranked top ${r} in Blitz!

Score: ${y}. Can you do better?

@werm_fun`,
        Gr(b)
    }
    , [s, i, r])
      , m = C.useRef(null)
      , [g,p] = C.useState();
    return l.jsxs("div", {
        className: `${L.popupBlitzDailyBonus} ${a ? L.first : L.notFirst} ${e ? L.portrait : L.landscape} ${t}`,
        children: [c && l.jsx("button", {
            className: ce.closeButton,
            onClick: c,
            children: l.jsx(St, {})
        }), l.jsxs("div", {
            className: `${L.contentWrapper}`,
            ref: m,
            children: [l.jsx("div", {
                className: `${L.imageContainer} ${L.flipX}`,
                children: l.jsx("img", {
                    src: "/assets/a/werms/dioramas/" + (a ? "magma_werm_holding_torch.denoised.512.avif" : "magma_werm_holding_torch_cave.denoised.512.avif"),
                    alt: "Blitz werm holding torch"
                })
            }), l.jsxs("div", {
                className: L.content,
                children: [l.jsx("div", {
                    className: L.title,
                    children: (a ? `You placed #${((s == null ? void 0 : s[0]) ?? 0) + 1} in Blitz!` : "Blitz Bonus Earned").split(" ").map( (v, x) => l.jsxs("div", {
                        children: [!!x && l.jsx("span", {
                            children: " "
                        }), v.split("").map( (y, b) => l.jsx("span", {
                            style: {
                                "--content": `"${y}"`
                            },
                            children: y
                        }, b))]
                    }, x))
                }), l.jsxs("div", {
                    className: L.resultContainer,
                    children: [l.jsxs("div", {
                        className: L.result,
                        children: [l.jsx("span", {
                            className: L.heading,
                            children: "Your result"
                        }), l.jsxs("div", {
                            className: L.value,
                            children: [l.jsx("span", {
                                className: L.numerator,
                                children: r > 10 ? `Top ${r}!` : `#${((s == null ? void 0 : s[0]) ?? 0) + 1}`
                            }), l.jsx("span", {
                                className: L.separator,
                                children: " / "
                            }), l.jsx("span", {
                                className: L.denominator,
                                children: (s == null ? void 0 : s[1]) ?? 0
                            })]
                        }), l.jsxs("div", {
                            className: L.label,
                            children: ["Score: ", i == null ? void 0 : i.toLocaleString()]
                        })]
                    }), l.jsxs("div", {
                        className: L.bonus,
                        children: [l.jsx("span", {
                            className: L.heading,
                            children: "Your bonus"
                        }), l.jsx("div", {
                            className: L.value,
                            children: e ? Yo(n, 0) : n.toLocaleString()
                        }), l.jsxs("div", {
                            className: L.label,
                            children: [l.jsx(ri, {
                                eyeFill: null,
                                stroke: null
                            }), "Werm points"]
                        })]
                    })]
                }), l.jsxs("div", {
                    className: L.points,
                    children: [l.jsxs("div", {
                        className: L.delta,
                        children: [l.jsx(ri, {
                            eyeFill: null,
                            stroke: null
                        }), l.jsxs("span", {
                            children: ["+", n == null ? void 0 : n.toLocaleString()]
                        })]
                    }), l.jsx("div", {
                        className: L.progress,
                        style: {
                            "--t": (h == null ? void 0 : h.t) ?? 0
                        }
                    }), l.jsxs("div", {
                        className: L.progressLabels,
                        children: [l.jsx("span", {
                            className: L.percentage,
                            children: h ? `${(h.t * 100).toFixed(0)}%` : "0%"
                        }), l.jsx("span", {
                            children: h ? `${Yo(h.toNext, 2)} points to level ${h.level + 1}` : "0%"
                        })]
                    })]
                })]
            })]
        }), l.jsxs("div", {
            className: L.buttons,
            children: [l.jsxs("button", {
                className: L.copy,
                onClick: v => {
                    d == null || d(v);
                    const x = m.current;
                    if (!x || (g == null ? void 0 : g.type) === "pending")
                        return;
                    p({
                        type: "pending"
                    });
                    const y = navigator.userAgent.match("Safari");
                    let b;
                    const S = (I=5) => z5(x).then(async R => {
                        if (!R)
                            throw new Error("Blob not generated");
                        return !y || I <= 0 || (await Za(100),
                        console.log(R.size, b === R.size),
                        b === R.size) ? R : (b = R.size,
                        S(--I))
                    }
                    )
                      , k = new window.ClipboardItem({
                        "image/png": S()
                    });
                    return navigator.clipboard.write([k]).then( () => {
                        const I = setTimeout( () => {
                            p(R => (R == null ? void 0 : R.timeoutId) === I ? void 0 : R)
                        }
                        , 3e3);
                        p({
                            type: "success",
                            text: "Copied to clipboard",
                            timeoutId: I
                        })
                    }
                    ).catch(I => {
                        const R = setTimeout( () => {
                            p(T => (T == null ? void 0 : T.timeoutId) === R ? void 0 : T)
                        }
                        , 3e3);
                        p({
                            type: "error",
                            text: (I == null ? void 0 : I.toString()) ?? "Failed to copy to clipboard",
                            timeoutId: R
                        })
                    }
                    )
                }
                ,
                children: [l.jsx(B1, {}), l.jsx("span", {
                    children: (g == null ? void 0 : g.type) === "pending" ? "Copying" : "Copy image"
                }), ((g == null ? void 0 : g.type) === "success" || (g == null ? void 0 : g.type) === "error") && l.jsx("div", {
                    className: L.copyResult,
                    children: (g == null ? void 0 : g.type) === "success" ? "Copied to clipboard" : "Copy failed"
                })]
            }), l.jsxs("a", {
                className: L.share,
                href: f,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: u,
                children: [l.jsx($r, {}), l.jsx("span", {
                    children: "Share on X"
                })]
            })]
        })]
    })
}
  , af = ({onClose: t, delta: e, portrait: n, className: i=""}) => l.jsxs("div", {
    className: `font-sans-serif relative bg-[radial-gradient(circle,_#DDF4D7_0%,_#98DD88_100%)] border-[#448852] border-3 rounded-2xl p-8 overflow-y-auto max-h-full ${i}`,
    children: [t && l.jsx("button", {
        className: `${ce.closeButton} [--close-button-background-color:#CCC]  [--close-button-hover-background-color:#EEE] [--close-button-color:#333] [--close-button-hover-color:#333] [--icon-stroke-width:0.15em] [--close-button-size:0.75em] [--close-button-padding:0.25em] [--close-button-offset:0.25em] rounded-full z-1`,
        onClick: t,
        children: l.jsx(St, {})
    }), l.jsxs("div", {
        className: `${n ? "flex flex-col" : "grid grid-cols-2"} gap-4`,
        children: [l.jsxs("div", {
            className: "flex flex-col items-center justify-center gap-2",
            children: [l.jsx($1, {
                className: "w-full max-w-[8em]"
            }), l.jsxs("div", {
                className: "font-bold text-xl p-2 bg-white/50 rounded-xl text-black w-fit",
                children: ["+", e, " Apple", e === 1 ? "" : "s"]
            })]
        }), l.jsxs("div", {
            className: "text-black/75 flex flex-col gap-4 leading-8 justify-evenly",
            children: [l.jsx("h4", {
                className: `text-black font-bold text-[1.5em] ${n ? "text-center" : "text-left"}`,
                children: "Apples unlocked"
            }), l.jsxs("div", {
                className: `text-[0.9em] ${n ? "text-center" : "text-left"}`,
                children: [l.jsx("p", {
                    children: "Use apples to revive and continue a great run."
                }), l.jsx("p", {
                    children: "Earn more by logging in daily!"
                })]
            })]
        })]
    })]
})
  , G5 = ({onClose: t, onClick: e, revives: n, state: i, className: s="", disabled: r}) => l.jsxs("div", {
    className: `font-sans-serif relative bg-[radial-gradient(circle,_#DDF4D7_0%,_#98DD88_100%)] border-[#448852] sm:border-3 sm:rounded-2xl p-8 overflow-y-auto max-h-full ${s} sm:w-[15em] flex sm:block`,
    children: [t && l.jsx("button", {
        className: `${ce.closeButton} [--close-button-background-color:#CCC]  [--close-button-hover-background-color:#EEE] [--close-button-color:#333] [--close-button-hover-color:#333] [--icon-stroke-width:0.15em] [--close-button-size:0.75em] [--close-button-padding:0.25em] [--close-button-offset:0.25em] rounded-full z-1`,
        onClick: t,
        children: l.jsx(St, {})
    }), l.jsxs("div", {
        className: "flex flex-col items-center align-center gap-2 w-full sm:w-none",
        children: [l.jsxs("h4", {
            className: "text-black font-bold text-[1.5em] text-left",
            children: ["+", n.delta, " Apple", n.delta === 1 ? "" : "s", "!"]
        }), l.jsx($1, {
            className: "min-h-[5em] max-h-[min(100%,10em)]"
        }), l.jsxs("p", {
            className: "text-black/75 text-[0.8em] text-center",
            children: ["You now have ", n.n + n.delta, " apple", n.n + n.delta === 1 ? "" : "s", "."]
        }), l.jsx("p", {
            className: "text-black/75 text-[0.8em] text-center",
            children: n.n == null || n.m == null || n.m == -1 || n.n == -1 || n.n < n.m ? "Come back in 24 hours for another!" : "Max apples reached."
        }), l.jsxs("div", {
            className: "flex flex-col sm:flex-col-reverse mt-auto sm:mt-0 gap-4 w-full",
            children: [i.phase === "error" && l.jsx("div", {
                className: "bg-red-900 rounded-lg text-white flex justify-center items-center text-center p-2",
                children: l.jsx("span", {
                    className: "text-sm font-normal",
                    children: i.error
                })
            }), l.jsxs("button", {
                className: "bg-[#FEECA9] enabled:hover:bg-[#FEF2C3] text-black shadow-[0_0.25em_0_0_#F4C549CC] disabled:shadow-none font-medium grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-4 w-full rounded-full p-2",
                disabled: r,
                onClick: e,
                children: [l.jsx("span", {
                    className: "col-start-2 text-center",
                    children: "Yay"
                }), l.jsx("div", {
                    className: `${i.phase === "pending" ? "snake-spinner-black" : ""} h-8 w-8 justify-self-end`
                })]
            })]
        })]
    })]
})
  , lf = t => {
    const e = Be.c(26);
    let n;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
        phase: "idle"
    },
    e[0] = n) : n = e[0];
    const [i,s] = C.useState(n)
      , r = ts()
      , o = ns()
      , a = Re(V5);
    let c;
    e[1] !== t ? (c = () => {
        var v;
        (v = t.onAppear) == null || v.call(t)
    }
    ,
    e[1] = t,
    e[2] = c) : c = e[2];
    let u;
    e[3] === Symbol.for("react.memo_cache_sentinel") ? (u = [],
    e[3] = u) : u = e[3],
    C.useEffect(c, u);
    let d;
    e[4] !== r ? (d = async v => {
        if (!r)
            return s({
                phase: "error",
                error: "No connection to server"
            }),
            !1;
        s({
            phase: "pending"
        });
        try {
            const x = await r.sendAndWait(Ye.ClaimPeriodicReviveRequest, {
                uuid: v
            }, J.ClaimPeriodicReviveResponse);
            return Pe(x) ? (s({
                phase: "success"
            }),
            !0) : (s({
                phase: "error",
                error: x.failure.message
            }),
            !1)
        } catch (x) {
            const y = x;
            return s({
                phase: "error",
                error: (y == null ? void 0 : y.toString()) ?? "Unknown error"
            }),
            !1
        }
    }
    ,
    e[4] = r,
    e[5] = d) : d = e[5];
    const h = d;
    let f;
    e[6] !== t.revives || e[7] !== r || e[8] !== o || e[9] !== i.phase || e[10] !== a ? (f = i.phase === "error" ? () => {
        r == null || r.sendAnalytics(Me.RevivePeriodicClaimModal, ni.ClosePopupX),
        o(fa({
            uuid: a,
            next: t.revives.next
        }))
    }
    : void 0,
    e[6] = t.revives,
    e[7] = r,
    e[8] = o,
    e[9] = i.phase,
    e[10] = a,
    e[11] = f) : f = e[11];
    let m;
    e[12] !== t || e[13] !== h || e[14] !== r || e[15] !== o || e[16] !== a ? (m = v => {
        r == null || r.sendAnalytics(Me.RevivePeriodicClaimModal, ni.ClosePopupText),
        h(a).then(x => {
            var y;
            x && (o(fa({
                uuid: a,
                next: t.revives.next
            })),
            (y = t.onSuccess) == null || y.call(t))
        }
        )
    }
    ,
    e[12] = t,
    e[13] = h,
    e[14] = r,
    e[15] = o,
    e[16] = a,
    e[17] = m) : m = e[17];
    const g = t.disabled || i.phase === "pending";
    let p;
    return e[18] !== t.className || e[19] !== t.portrait || e[20] !== t.revives || e[21] !== i || e[22] !== f || e[23] !== m || e[24] !== g ? (p = l.jsx(G5, {
        state: i,
        onClose: f,
        onClick: m,
        revives: t.revives,
        portrait: t.portrait,
        className: t.className,
        disabled: g
    }),
    e[18] = t.className,
    e[19] = t.portrait,
    e[20] = t.revives,
    e[21] = i,
    e[22] = f,
    e[23] = m,
    e[24] = g,
    e[25] = p) : p = e[25],
    p
}
  , cf = ({onClose: t, closeX: e=!1, revives: n={
    n: 0,
    m: Ou.maxInventoryCount
}, className: i=""}) => l.jsxs("div", {
    className: `font-sans-serif relative bg-[radial-gradient(circle,_#DDF4D7_0%,_#98DD88_100%)] border-[#448852] sm:border-3 sm:rounded-2xl p-8 overflow-y-auto max-h-full ${i} sm:max-w-[17.5em] flex sm:block`,
    children: [e && l.jsx("button", {
        className: `${ce.closeButton} [--close-button-background-color:#CCC]  [--close-button-hover-background-color:#EEE] [--close-button-color:#333] [--close-button-hover-color:#333] [--icon-stroke-width:0.15em] [--close-button-size:0.75em] [--close-button-padding:0.25em] [--close-button-offset:0.25em] rounded-full z-1`,
        onClick: s => t == null ? void 0 : t(s, ni.ClosePopupX),
        children: l.jsx(St, {})
    }), l.jsxs("div", {
        className: "flex flex-col items-center justify-center gap-4",
        children: [l.jsx(O1, {
            className: "w-full max-w-[8em] min-w-[4em]"
        }), l.jsx("h4", {
            className: "text-black font-bold text-4xl w-full sm:w-none",
            children: "Use apples to revive"
        }), l.jsxs("div", {
            className: "w-full",
            children: [n.m !== -1 && l.jsx("div", {
                className: `${L.progressGroup} [--progress-background-color:#BBBCC0] [--progress-color:#3BDD49]`,
                children: Array.from({
                    length: Math.ceil(n.m / 2)
                }, (s, r) => l.jsx("div", {
                    className: L.progress,
                    style: {
                        "--progress": Math.max(0, Math.min(1, n.n / n.m * Math.ceil(n.m / 2) - r))
                    }
                }, r))
            }), l.jsxs("div", {
                className: "text-black/75 text-[0.8em] font-medium text-center",
                children: [n.n === -1 ? "∞" : n.n, n.m === -1 ? " apples" : `/${n.m}`]
            })]
        }), l.jsx("div", {
            className: "tabular-nums text-[#262F24] bg-[#EEF9EB] border-black border-1 rounded-full text-center text-[0.8em] w-fit px-4",
            children: n.m !== -1 && n.n < n.m ? l.jsxs(l.Fragment, {
                children: ["+1 apple in ", n.next != null ? l.jsx(ls, {
                    timestamp: n.next,
                    direction: "down",
                    numUnits: 2,
                    unitLength: {
                        separator: " ",
                        unitName: "short",
                        padStart: 2
                    }
                }) : "—"]
            }) : "Max apples reached"
        }), l.jsxs("div", {
            className: "leading-8",
            children: [l.jsx("div", {
                className: "text-black/90 font-bold",
                children: "One revive per game"
            }), l.jsx("div", {
                className: "text-black/75 text-[0.9em] font-medium mb-4",
                children: "Save your run and go for a high score"
            }), l.jsx("div", {
                className: "text-black/90 font-bold",
                children: "An apple a day"
            }), l.jsx("div", {
                className: "text-black/75 text-[0.9em] font-medium mb-4",
                children: "Simply log in to get an apple. You can get one every 24 hours!"
            }), l.jsxs("div", {
                className: "text-black/90 font-bold",
                children: ["Store up to ", n.m === -1 ? "∞" : n.m, " apples"]
            }), l.jsx("div", {
                className: "text-black/75 text-[0.9em] font-medium",
                children: "Don't let them go to waste!"
            })]
        }), l.jsx("button", {
            className: "bg-[#FEECA9] enabled:hover:bg-[#FEF2C3] text-black shadow-[0_0.25em_0_0_#F4C549CC] disabled:shadow-none font-medium items-center justify-center gap-4 w-full rounded-full p-2 mt-auto sm:mt-0",
            onClick: s => t == null ? void 0 : t(s, ni.ClosePopupText),
            children: l.jsx("span", {
                children: "Close"
            })
        })]
    })]
});
function V5(t) {
    var e;
    return (e = t.game.user) == null ? void 0 : e.uuid
}
const q5 = t => t.startsWith("0x") ? "evm" : "svm"
  , K5 = {
    publicKey: null,
    walletVm: null,
    depositStatus: tt.IDLE,
    depositState: {
        phase: "idle"
    },
    reconnectionToken: null,
    reconnectionPublicAddress: null,
    depositConfirmation: null,
    gameConnected: !1,
    controlFirstConnectionAttemptStarted: !1,
    controlFirstConnectionAttemptEnded: !1,
    controlHasSuccessfullyConnected: !1,
    controlConnecting: !1,
    isAuthenticating: !1,
    isSigningIn: !1,
    isSigningInWithDynamic: !1,
    controlConnected: !1,
    authenticated: null,
    autoSignUpPhase: "none",
    message: null,
    depositsOfflineUntil: null,
    maintenance: {
        online: !1
    },
    cashGameBanner: {
        showBanner: !1
    },
    activeRoomStats: null,
    selectedRoom: null,
    selectedRoomStats: null,
    activeRoom: null,
    selectedRoomId: null,
    selectedRegion: null,
    selectedRegionId: null,
    selectedTokenAddress: null,
    autoScheduledRoom: null,
    autoZeroSumRoom: null,
    automaticRoom: !0,
    customName: "",
    pings: {},
    closestPing: null,
    selectedRegionPing: null,
    fxMuted: !1,
    musicMuted: !1,
    hasClickedAnywhere: !1,
    boostMessageShown: !1,
    chatOpen: !1,
    discordBannerHidden: null,
    user: null,
    userInventory: null,
    showLifetimePoints: !1,
    isFetchingAllRooms: !1,
    isFetchingServerRegions: !1,
    isJoiningGame: null,
    joinedGame: null,
    navbarOpen: !1,
    hideBottomNav: !1,
    hideAllNav: !1,
    allRooms: null,
    enableAutoSiws: !0,
    ...Object.fromEntries($u.map(t => [t, null])),
    roomStats: {},
    phantomExchangeKey: null,
    phantomSession: null,
    language: "en",
    homePageMessage: null,
    createAccountPopupDismissed: !1,
    joinGameError: null,
    showSettings: !1,
    highPingWarningDismissed: null,
    globalLeaderboardPeriod: null,
    globalLeaderboardDomain: null,
    globalLeaderboardPlayOverlayDismissed: null,
    globalLeaderboardUserCache: null,
    globalLeaderboardAnalyticsInteracted: null,
    supressNotificationModals: 0,
    themeEventModal: null,
    showBlitzModal: !1,
    showSuperBlitzModal: !1,
    showReviveModal: !1,
    showBadgesModal: !1,
    showProfileThemesModal: !1,
    themeChallenge: null,
    connectionAlertDismissed: !1,
    hideNavSidebar: !1,
    practiceKilledSetKillQuoteTooltipDismissed: !1,
    claimPeriodicReviveModalDismissed: null,
    showBadgesFeatureAnnouncementModal: !1,
    showBadgesNewIndicator: !1,
    claimedBadgesNotifications: null,
    superBlitzDepositResultNotification: null,
    superBlitzResultNotification: null,
    superBlitzMostRecentRejectedSignature: null,
    depositMultiplier: 1,
    selectedUpgrades: [],
    farcasterMiniApp: null,
    hideCashGames: null
}
  , Vr = t => {
    const e = T1(t.level)
      , n = L1(t.level);
    return {
        ...t,
        levelProgress: [t.lifetime - (e ?? 0), n ?? 0],
        pointsMultiplier: q3(t.level)
    }
}
  , qn = (t, e, n=Date.now()) => {
    var i, s, r;
    if (t.user = e ? {
        uuid: e.uuid,
        wallets: e.wallets,
        walletsStr: (i = e.wallets) == null ? void 0 : i.map(o => `${o.chain}:${o.address}`).sort().join(","),
        name: "userName"in e ? e.userName ?? void 0 : "name"in e ? e.name : void 0,
        tempName: e.tempName,
        telegramName: e.telegramName,
        twitterHandle: e.twitterHandle,
        farcasterUsername: e.farcasterUsername,
        created: e.created,
        flags: e.flags ?? 0,
        admin: Fi(e.flags ?? 0, Ts.admin),
        community: Fi(e.flags ?? 0, Ts.community),
        autoName: Fi(e.flags ?? 0, Ts.autoName),
        color: e.color,
        theme: e.theme,
        unlockedThemes: e.unlockedThemes && Wl ? e.unlockedThemes.filter(o => o !== zi) : e.unlockedThemes,
        points: e.points ? Vr(e.points) : void 0,
        streak: e.streak ? {
            expires: e.streak.expires,
            claimable: e.streak.claimable
        } : void 0,
        challenges: e.challenges ? {
            claimable: e.challenges.claimable,
            expires: e.challenges.expires
        } : void 0,
        revives: e.revives ? {
            n: e.revives.n,
            m: e.revives.m,
            next: e.revives.next
        } : void 0,
        maxPracticeScore: e.maxPracticeScore,
        blitz: e.blitz ? cl(e.blitz, n) : void 0,
        killQuote: e.killQuote ? {
            ...e.killQuote
        } : void 0,
        killQuoteUnlocked: e.killQuoteUnlocked
    } : null,
    t.claimPeriodicReviveModalDismissed && ((r = (s = t.user) == null ? void 0 : s.revives) != null && r.next)) {
        const {uuid: o, next: a} = t.claimPeriodicReviveModalDismissed;
        o === t.user.uuid && a === t.user.revives.next && (t.claimPeriodicReviveModalDismissed = null)
    }
}
  , cl = (t, e=Date.now()) => {
    const n = {
        ...t
    };
    if (n._n == null && (n._n = n.n),
    n._ni == null && (n._ni = n.ni),
    n._t == null && (n._t = e),
    !n.p || !n.m || !n.ni || e < n.ni)
        return n;
    let i = Math.floor(1 + (e - n.ni) / n.p);
    return i <= 0 || (n.m != null && n.m !== -1 && (i = Math.min(i, Math.max(0, n.m - n.n))),
    n.n = n.n + i,
    n.ni = n.m === -1 || n.n < n.m ? n.ni + n.p * (i + 1) : 0,
    n.u = n.ni + n.p * i),
    n
}
  , Os = (t, e) => {
    var g, p, v;
    const {name: n, tempName: i, wallets: s, killQuote: r, killQuoteUnlocked: o, points: a, maxPracticeScore: c, revives: u, blitz: d, allowSet: h, require: f, now: m} = e;
    if (!t.user) {
        h && qn(t, {
            uuid: h,
            name: n === null ? void 0 : n,
            tempName: i === null ? void 0 : i,
            wallets: s === null ? void 0 : s,
            blitz: d === null ? void 0 : d,
            killQuote: r === null ? void 0 : r,
            killQuoteUnlocked: o === null ? void 0 : o,
            points: a === null ? void 0 : a,
            maxPracticeScore: c === null ? void 0 : c,
            revives: u === null ? void 0 : u
        }, m);
        return
    }
    if (!(f != null && f.uuid && f.uuid !== t.user.uuid) && (n !== void 0 && (t.user.name = n ?? void 0),
    i !== void 0 && (t.user.tempName = i ?? void 0),
    s !== void 0 && (t.user.wallets = s ?? void 0,
    t.user.walletsStr = (g = t.user.wallets) == null ? void 0 : g.map(x => `${x.chain}:${x.address}`).sort().join(",")),
    d !== void 0 && (t.user.blitz = d ? cl(d, m) : void 0),
    a !== void 0 && (t.user.points = a ? Vr(a) : void 0),
    c !== void 0 && (t.user.maxPracticeScore = c ?? void 0),
    u !== void 0 && (t.user.revives = u ?? void 0),
    t.claimPeriodicReviveModalDismissed && ((v = (p = t.user) == null ? void 0 : p.revives) != null && v.next))) {
        const {uuid: x, next: y} = t.claimPeriodicReviveModalDismissed;
        x === t.user.uuid && y === t.user.revives.next && (t.claimPeriodicReviveModalDismissed = null)
    }
}
  , gt = t => {
    var o;
    const {allRooms: e, roomStats: n, selectedRegionId: i} = t;
    if (!e) {
        t.autoScheduledRoom = null,
        t.autoZeroSumRoom = null;
        return
    }
    let s, r;
    for (const a of e)
        a.hidden || i !== null && ((o = a.region) == null ? void 0 : o.id) !== i || (a.disabledFrom != null && a.disabledUntil != null && ((s == null ? void 0 : s.disabledUntil) == null || a.disabledUntil <= s.disabledUntil) && (a.disabledUntil !== (s == null ? void 0 : s.disabledUntil) || a.roomId < s.roomId) && (s = a),
        a.scoringMethod === "zeroSum" && (r == null || (a.disabledUntil ?? 0) < (r.disabledUntil ?? 0) || a.roomId > r.roomId) && (r = a));
    t.autoScheduledRoom = s ? n[s.roomId] ?? s : null,
    t.autoZeroSumRoom = r ? n[r.roomId] ?? r : null
}
  , ua = (t, e) => {
    var s, r, o;
    t.roomStats[e] = null,
    ((s = t.activeRoom) == null ? void 0 : s.roomId) === e && (t.activeRoom = null,
    t.activeRoomStats = null),
    ((r = t.selectedRoomId) == null ? void 0 : r.id) === e && (t.selectedRoomId = null,
    localStorage.removeItem(K.roomId),
    localStorage.removeItem(K.roomIdSet),
    t.selectedRoom = null,
    t.selectedRoomStats = null);
    const n = (o = t.allRooms) == null ? void 0 : o.findIndex(a => a.roomId === e);
    t.allRooms && n != null && n >= 0 && (t.allRooms = [...t.allRooms.slice(0, n), ...t.allRooms.slice(n + 1)]),
    gt(t);
    const i = t[J.DepositResult];
    i && Pe(i.payload.result) && i.payload.roomId === e && t.depositStatus === tt.SUCCESS && (t.depositStatus = tt.IDLE),
    t.depositState.roomId === t.depositState.roomId && (t.depositState = {
        phase: "idle"
    })
}
  , Yn = (t, e) => {
    if (t.selectedTokenAddress = e ? {
        chain: e.chain,
        address: e.address,
        set: e.set ?? Date.now()
    } : null,
    t.selectedTokenAddress) {
        const {chain: n, address: i, set: s} = t.selectedTokenAddress;
        localStorage.setItem(K.tokenAddress, `${n}:${i ?? ""}`),
        localStorage.setItem(K.tokenAddressSet, s.toString())
    } else
        localStorage.removeItem(K.tokenAddress),
        localStorage.removeItem(K.tokenAddressSet)
}
  , $s = (t, e, n) => {
    let i = null
      , s = null
      , r = null
      , o = null;
    for (const a of e)
        if (!a.read)
            e: switch (a.type) {
            case Ne.ThemeUnlockable:
                switch (a.data.t) {
                default:
                    console.warn(`Unhandled theme unlockable notification: ${JSON.stringify(a)}`);
                    break e
                }
            case Ne.ThemeUnlocked:
                {
                    switch (a.data.t) {
                    default:
                        const c = a.data.t;
                        or[c] ? ll() && !i && (i = {
                            kind: "weekly-profile-theme-challenge-unlock",
                            notificationId: a.id,
                            popupId: or[c].unlock,
                            theme: c,
                            claimedCount: a.data.cn
                        }) : $l.includes(a.data.t) ? console.warn(`Level unlock theme notification for placeholder received: ${JSON.stringify(a)}`) : Ul.includes(a.data.t) ? i || (i = {
                            kind: "level-unlock",
                            notificationId: a.id,
                            theme: a.data.t,
                            popupId: Me.LevelThemeUnlock,
                            levelThreshold: a.data.l
                        }) : console.warn(`Unhandled theme unlock notification: ${JSON.stringify(a)}`)
                    }
                    break
                }
            case Ne.BlitzDailyRank:
                i || (i = {
                    kind: "blitz-daily-bonus",
                    popupId: Me.BlitzDailyBonusNotification,
                    notificationId: a.id,
                    data: a.data,
                    preventBackgroundClose: !0
                });
                break;
            case Ne.PracticeGameWeeklyRank:
                i || (i = {
                    kind: "practice-weekly-bonus",
                    popupId: void 0,
                    notificationId: a.id,
                    data: a.data
                });
                break;
            case Ne.ReviveFeatureUnlocked:
                i || (i = {
                    kind: "revive-feature-unlock",
                    popupId: Me.ReviveFeatureUnlockModal,
                    notificationId: a.id,
                    levelThreshold: a.data.l,
                    quantity: a.data.q,
                    preventBackgroundClose: !1,
                    backgroundBlur: 2
                });
                break;
            case Ne.FeatureAnnouncement:
                a.data.t === F1.Badges && (t.showBadgesNewIndicator = a.id);
                break;
            case Ne.Popup:
                a.data.t === N1.BadgesAnnouncement && (t.showBadgesFeatureAnnouncementModal = a.id);
                break;
            case Ne.GroupChallengeClaimed:
                s || (s = []),
                s.push(a);
                break;
            case Ne.SuperBlitzDepositResult:
                r = a;
                break;
            case Ne.SuperBlitzResult:
                o ? a.data.evId === o[0].data.evId && o.push(a) : o = [a];
                break;
            default:
                console.warn(`Unhandled notification: ${JSON.stringify(a)}`);
                break e
            }
    i ? t.themeEventModal = i : n || (t.themeEventModal = null),
    s ? t.claimedBadgesNotifications = s : n || (t.claimedBadgesNotifications = null),
    r ? t.superBlitzDepositResultNotification = r : n || (t.superBlitzDepositResultNotification = null),
    o ? t.superBlitzResultNotification = o : n || (t.superBlitzResultNotification = null)
}
  , xn = t => {
    var o, a, c, u, d;
    const e = (o = t.selectedRoom) == null ? void 0 : o.tokens;
    if (!(e != null && e.length))
        return;
    const n = t.selectedTokenAddress
      , i = (a = t[J.DefaultToken]) == null ? void 0 : a.payload.token
      , s = h => {
        const f = h.address ? e.find(g => g.chain === h.chain && g.address === h.address) : void 0;
        if (f)
            return f;
        const m = e.find(g => g.chain === h.chain);
        return m || null
    }
    ;
    if (n) {
        const h = s(n);
        if (h && h.address === n.address)
            return;
        if (h) {
            n.chain === h.chain && !n.address || console.warn(`Selected token ${n.chain}:${n.address ?? ""} not in room ${(c = t.selectedRoom) == null ? void 0 : c.roomId}; using ${h.chain}:${h.address}`),
            Yn(t, h);
            return
        }
    }
    if (i) {
        const h = s(i);
        if (h) {
            console.warn(`Using default token ${h.chain}:${h.address} for room ${(u = t.selectedRoom) == null ? void 0 : u.roomId}`),
            Yn(t, h);
            return
        }
    }
    const r = (t.walletVm ? e.find(h => Hs(h.chain) === t.walletVm) : void 0) ?? e[0];
    r && (console.warn(`No valid token found for room ${(d = t.selectedRoom) == null ? void 0 : d.roomId}; using first available token ${r.chain}:${r.address}`),
    Yn(t, r))
}
  , ul = O3({
    name: c3,
    initialState: K5,
    reducers: {
        setPublicKey: (t, {payload: e}) => {
            t.publicKey = e,
            t.walletVm = e ? q5(e) : null
        }
        ,
        setDepositStatus: (t, {payload: e}) => {
            typeof e == "object" ? e.from && (Array.isArray(e.from) ? !e.from.includes(t.depositStatus) : e.from !== t.depositStatus) && (t.depositStatus = e.to) : t.depositStatus = e
        }
        ,
        setDepositState: (t, {payload: e}) => {
            const n = t.depositState
              , {require: i, ...s} = e;
            if (i != null && i.phase) {
                if (Array.isArray(i.phase)) {
                    if (!i.phase.includes(s.phase))
                        return
                } else if (i.phase !== s.phase)
                    return
            }
            if ((i == null ? void 0 : i.roomId) != null && n.roomId !== i.roomId || (i == null ? void 0 : i.signature) != null && n.signature !== i.signature || (i == null ? void 0 : i.memo) != null && n.memo !== i.memo || (i == null ? void 0 : i.created) != null && n.created !== i.created)
                return;
            t.depositState = s;
            const {previous: r, ...o} = n;
            t.depositState.previous = o
        }
        ,
        setSeatReservation: (t, {payload: e}) => {
            e ? (t[J.SeatReservation] = {
                payload: e,
                timestamp: Date.now()
            },
            t.depositStatus = tt.IDLE,
            e.roomId === t.depositState.roomId && !(e.created != null && t.depositState.created != null && e.created !== t.depositState.created) && (t.depositState = {
                phase: "idle"
            })) : t[J.SeatReservation] = null
        }
        ,
        setServerMessage: (t, {payload: e}) => {
            var i, s, r, o, a, c, u, d, h, f, m, g, p, v, x, y, b, S, k, I, R, T, P;
            if (!e.payload) {
                t[e.type] = null,
                e.type === J.RoomStats && (t.roomStats = {},
                t.selectedRoomStats = null,
                t.activeRoomStats = null,
                gt(t));
                return
            }
            const n = e.timestamp == null ? Date.now() : typeof e.timestamp == "number" ? e.timestamp : e.timestamp.getTime();
            switch (t[e.type],
            t[e.type] = {
                payload: e.payload,
                timestamp: n
            },
            e.type) {
            case J.AllRoomsResponse:
                {
                    if (t.allRooms = e.payload.rooms,
                    e.payload != null && t.selectedRoomId) {
                        const w = t.allRooms.find(A => A.roomId === t.selectedRoomId.id);
                        if (w) {
                            t.selectedRoom = w,
                            xn(t);
                            const A = (i = w.region) == null ? void 0 : i.id;
                            t.selectedRegionId !== A && (t.selectedRegionId = A,
                            t.selectedRegion = w.region,
                            t.selectedRegionPing = A && ((r = (s = t.pings[A]) == null ? void 0 : s.result) == null ? void 0 : r.value) != null ? {
                                regionId: A,
                                value: t.pings[A].result.value,
                                inProgress: t.pings[A].inProgress
                            } : null,
                            A ? localStorage.setItem(K.regionId, A) : localStorage.removeItem(K.regionId),
                            gt(t))
                        } else
                            console.log(`Selected room ${t.selectedRoomId.id} not in AllRoomsResponse: unset room`),
                            t.selectedRoomId = null,
                            t.selectedRoom = null,
                            t.selectedRoomStats = null,
                            localStorage.removeItem(K.roomId),
                            localStorage.removeItem(K.roomIdSet)
                    }
                    gt(t);
                    break
                }
            case J.RoomStats:
                {
                    const w = Array.isArray(e.payload) ? e.payload : [e.payload];
                    for (let A of w) {
                        const D = t.roomStats[A.roomId];
                        if (D && (A.timestamp = D == null ? void 0 : D.timestamp),
                        A = Ya(D, A),
                        A.timestamp = Date.now(),
                        t.roomStats[A.roomId] = A,
                        A.queuePosition != null) {
                            const _ = t.activeRoom;
                            _ && _.roomId === A.roomId && _.confirmed === !0 && _.queuePosition === A.queuePosition || (t.activeRoom = {
                                roomId: A.roomId,
                                confirmed: !0,
                                queuePosition: A.queuePosition,
                                created: A.queueCreated
                            })
                        } else if (D && D.queuePosition != null && ((o = t.activeRoom) == null ? void 0 : o.roomId) === D.roomId) {
                            t.activeRoom = null,
                            t.activeRoomStats = null;
                            const _ = t[J.DepositResult];
                            _ && Pe(_.payload.result) && _.payload.roomId === D.roomId && t.depositStatus === tt.SUCCESS && (t.depositStatus = tt.IDLE),
                            t.depositState.roomId === D.roomId && t.depositState.phase === "confirmed" && (t.depositState = {
                                phase: "idle"
                            })
                        }
                        if (A.roomId === ((a = t.activeRoom) == null ? void 0 : a.roomId) && (t.activeRoomStats = A),
                        A.roomId === ((c = t.selectedRoomId) == null ? void 0 : c.id)) {
                            t.selectedRoom = A,
                            t.selectedRoomStats = A,
                            xn(t);
                            const _ = (u = A.region) == null ? void 0 : u.id;
                            _ !== t.selectedRegionId && (t.selectedRegionId = (d = A.region) == null ? void 0 : d.id,
                            t.selectedRegion = A.region,
                            t.selectedRegionPing = _ && ((f = (h = t.pings[_]) == null ? void 0 : h.result) == null ? void 0 : f.value) != null ? {
                                regionId: _,
                                value: t.pings[_].result.value,
                                inProgress: t.pings[_].inProgress
                            } : null,
                            _ ? localStorage.setItem(K.regionId, _) : localStorage.removeItem(K.regionId))
                        }
                    }
                    gt(t);
                    break
                }
            case J.ActiveRoomResponse:
                {
                    const w = e.payload;
                    if (Pe(w)) {
                        t.activeRoom = w.success;
                        const A = (m = t.activeRoom) == null ? void 0 : m.roomId;
                        if (A) {
                            const D = t.roomStats[A];
                            D && (t.activeRoomStats = D)
                        }
                    }
                    break
                }
            case J.MarketplaceInventoryResponse:
            case J.MarketplaceInventoryOrderResponse:
                {
                    const w = e.payload;
                    Pe(w) && (t.userInventory = w.success);
                    break
                }
            case J.MarketplacePurchaseResponse:
                {
                    const w = e.payload;
                    if (Pe(w)) {
                        const A = (g = t.userInventory) == null ? void 0 : g.findIndex(_ => _.itemId === w.success.itemId)
                          , D = Qo;
                        t.userInventory && A != null && A >= 0 ? t.userInventory = [...t.userInventory.slice(0, A), w.success, ...t.userInventory.slice(A + 1)] : t.userInventory = [...t.userInventory ?? [], w.success].sort( (_, z) => _.position - z.position || D[_.itemId] - D[z.itemId])
                    }
                    break
                }
            case J.OfflineUntilResponse:
                {
                    const w = e.payload;
                    if (!w.deposits.enabled && w.deposits.enabledIn) {
                        const A = Date.now() + w.deposits.enabledIn;
                        t.depositsOfflineUntil = A
                    } else
                        typeof w.deposits.enabled == "boolean" ? t.depositsOfflineUntil = !w.deposits.enabled : t.depositsOfflineUntil = null;
                    t.depositsOfflineMessage = w.deposits.message,
                    t.maintenance = {
                        online: w.online,
                        offlineFrom: w.offlineFrom,
                        message: w.message,
                        showNotification: Date.now() < w.offlineFrom
                    };
                    break
                }
            case J.SystemAnnouncements:
                {
                    if (t.maintenance.showNotification)
                        break;
                    const w = e.payload;
                    if (w.messages.length < 1)
                        break;
                    t.cashGameBanner = {
                        showBanner: !0,
                        header: (p = w.messages.at(0)) == null ? void 0 : p.message,
                        body: (v = w.messages.at(0)) == null ? void 0 : v.body,
                        regionId: (y = (x = w.messages.at(0)) == null ? void 0 : x.audience) == null ? void 0 : y.regionId
                    };
                    break
                }
            case J.SeatReservation:
                {
                    const w = e.payload.roomId;
                    typeof w == "number" && ((b = t.activeRoom) == null ? void 0 : b.roomId) !== w && (t.activeRoom = {
                        roomId: w,
                        confirmed: !0
                    },
                    t.activeRoomStats = t.roomStats[w] ?? null);
                    break
                }
            case J.DepositResult:
                {
                    const w = e.payload
                      , A = w.roomId
                      , D = (S = t[J.DepositResponse]) == null ? void 0 : S.payload;
                    if (D && Pe(D) && w.memo === D.success.memo && (console.log("Deposit transaction result received", w),
                    Pe(w.result) ? t.depositStatus === tt.CONFIRMING && (t.depositStatus = tt.SUCCESS) : t.depositStatus = tt.ERROR,
                    Pe(w.result) ? t.depositState = {
                        phase: "confirmed",
                        roomId: w.roomId,
                        memo: w.memo ?? void 0,
                        created: w.created,
                        ...w.result.success
                    } : (t.depositState.phase === "idle" || t.depositState.phase === "error" || w.created && w.created === t.depositState.created || w.memo && w.memo === t.depositState.memo || w.signature && w.roomId === t.depositState.roomId) && (t.depositState = {
                        phase: "error",
                        roomId: w.roomId,
                        memo: w.memo ?? void 0,
                        created: w.created,
                        signature: w.signature,
                        message: ((k = w.result.failure) == null ? void 0 : k.message) ?? "Deposit request failed",
                        code: (I = w.result.failure) == null ? void 0 : I.code
                    })),
                    Pe(w.result) && typeof A == "number") {
                        ((R = t.activeRoom) == null ? void 0 : R.roomId) !== A && (t.activeRoom = {
                            roomId: A,
                            confirmed: !0
                        },
                        t.activeRoomStats = t.roomStats[A] ?? null);
                        const _ = t[J.CreateRoomResponse];
                        if (_ && Pe(_.payload)) {
                            const z = _.payload.success;
                            z.roomId === A && t.allRooms && !t.allRooms.find(F => F.roomId === A) && (t.allRooms = [...t.allRooms, {
                                ...z,
                                hidden: !1
                            }],
                            gt(t))
                        }
                    }
                    break
                }
            case J.ServerRegionsResult:
                {
                    if (!t.selectedRegionId)
                        break;
                    const w = e.payload.regions
                      , A = w == null ? void 0 : w.find(D => D.id === t.selectedRegionId);
                    w && !A ? (t.selectedRegionId = null,
                    t.selectedRegion = null,
                    t.selectedRegionPing = null,
                    localStorage.removeItem(K.regionId),
                    gt(t)) : t.selectedRegion = A ?? {
                        id: t.selectedRegionId
                    };
                    break
                }
            case J.RoomStatusChange:
                {
                    const w = e.payload
                      , {id: A, type: D} = w;
                    if (D === "disabled" && ua(t, A),
                    D === "enabled" && t.allRooms) {
                        const _ = t.allRooms.findIndex(z => z.roomId === w.room.roomId);
                        t.allRooms = _ === -1 ? [...t.allRooms, w.room] : [...t.allRooms.slice(0, _), w.room, ...t.allRooms.slice(_ + 1)],
                        gt(t)
                    }
                    break
                }
            case J.GameResults:
                {
                    const w = (T = e.payload) == null ? void 0 : T.user;
                    t.user && w && qn(t, {
                        ...t.user,
                        ...w
                    });
                    break
                }
            case J.UpdateUserResponse:
            case J.UserWeeklyStatsResponse:
                {
                    const w = e.payload;
                    Pe(w) && !w.success.dryRun && qn(t, w.success);
                    break
                }
            case J.UserNotificationsResponse:
                {
                    const w = e.payload;
                    Pe(w) && w.success.rows.length && $s(t, w.success.rows.toSorted( (A, D) => A.created - D.created), w.success.push);
                    break
                }
            case J.ClaimChallengeResponse:
                {
                    const w = e.payload;
                    Pe(w) && ((P = w.success.notifications) != null && P.length) && $s(t, w.success.notifications.toSorted( (A, D) => A.created - D.created), !0);
                    break
                }
            case J.ChallengesResponse:
                {
                    const w = e.payload;
                    if (Pe(w) && ll()) {
                        const A = w.success.challenges.find(l3);
                        A && (t.themeChallenge = A)
                    }
                    break
                }
            case J.BasicUserInfoResponse:
                {
                    const w = e.payload;
                    Pe(w) && (w.success.self || w.success.reqSelf) && qn(t, w.success);
                    break
                }
            case J.ClaimPeriodicReviveResponse:
                {
                    const w = e.payload;
                    Pe(w) ? Os(t, {
                        ...w.success,
                        require: {
                            uuid: w.success.uuid
                        }
                    }) : w.failure.revives && Os(t, {
                        revives: w.failure.revives,
                        require: {
                            uuid: w.failure.uuid
                        }
                    })
                }
            }
        }
        ,
        setShowMaintenanceNotification: (t, {payload: e}) => {
            t.maintenance.showNotification = e
        }
        ,
        setShowCashGameBanner: (t, {payload: e}) => {
            t.cashGameBanner.showBanner = e
        }
        ,
        setMessage: (t, {payload: e}) => {
            t.message = e
        }
        ,
        setGameConnected: (t, {payload: e}) => {
            t.gameConnected = e
        }
        ,
        setIsSigningIn: (t, {payload: e}) => {
            t.isSigningIn = e
        }
        ,
        setIsSigningInWithDynamic: (t, {payload: e}) => {
            if (typeof e == "object") {
                if (typeof e.from == "string" ? e.from !== t.isSigningInWithDynamic : e.from !== !!t.isSigningInWithDynamic)
                    return;
                t.isSigningInWithDynamic = e.to
            } else
                t.isSigningInWithDynamic = e
        }
        ,
        setControlFirstConnectionAttemptedStarted: (t, {payload: e}) => {
            t.controlFirstConnectionAttemptStarted !== e && (t.controlFirstConnectionAttemptStarted = e)
        }
        ,
        setControlFirstConnectionAttemptedEnded: (t, {payload: e}) => {
            t.controlFirstConnectionAttemptEnded !== e && (t.controlFirstConnectionAttemptEnded = e)
        }
        ,
        setControlHasSuccessfullyConnected: (t, {payload: e}) => {
            t.controlHasSuccessfullyConnected !== e && (t.controlHasSuccessfullyConnected = e)
        }
        ,
        setControlConnected: (t, {payload: e}) => {
            t.controlConnected = e
        }
        ,
        setControlConnecting: (t, {payload: e}) => {
            t.controlConnecting = e
        }
        ,
        setAuthenticated: (t, {payload: e}) => {
            t.authenticated = e
        }
        ,
        setIsAuthenticating: (t, {payload: e}) => {
            t.isAuthenticating = e
        }
        ,
        setReconnectionTokenExpires: (t, {payload: e}) => {
            t.reconnectionToken && (t.reconnectionToken.expires = e,
            localStorage.setItem("reconnection_token_expires", e.toString()))
        }
        ,
        setReconnectionToken: (t, {payload: e}) => {
            if (e) {
                const n = e.expires;
                t.reconnectionToken = {
                    token: e.token,
                    expires: n
                },
                localStorage.setItem(K.reconnectionToken, e.token),
                localStorage.setItem(K.reconnectionTokenExpires, n.toString())
            } else
                t.reconnectionToken = null,
                localStorage.removeItem(K.reconnectionToken),
                localStorage.removeItem(K.reconnectionTokenExpires)
        }
        ,
        setReconnectionPublicAddress: (t, {payload: e}) => {
            t.reconnectionPublicAddress = e,
            e ? localStorage.setItem(K.reconnectionPublicAddress, e) : localStorage.removeItem(K.reconnectionPublicAddress)
        }
        ,
        setDepositConfirmation: (t, {payload: e}) => {
            t.depositConfirmation = e
        }
        ,
        setSelectedRoomId: (t, {payload: e}) => {
            var n, i, s, r, o;
            if (t.selectedRoomId = e ? {
                id: e.id,
                set: e.set ?? Date.now()
            } : null,
            t.selectedRoomId) {
                localStorage.setItem(K.roomId, t.selectedRoomId.id.toString()),
                localStorage.setItem(K.roomIdSet, t.selectedRoomId.set.toString());
                const a = (n = t.allRooms) == null ? void 0 : n.find(u => u.roomId === t.selectedRoomId.id);
                a && (t.selectedRoom = a,
                xn(t)),
                t.selectedRoomStats = t.roomStats[t.selectedRoomId.id] ?? null,
                t.selectedRoomStats && (t.selectedRoom = t.selectedRoomStats,
                xn(t));
                const c = (s = (i = t.selectedRoom) == null ? void 0 : i.region) == null ? void 0 : s.id;
                t.selectedRoom && t.selectedRegionId != c && (t.selectedRegionId = c,
                t.selectedRegion = t.selectedRoom.region,
                t.selectedRegionPing = c && ((o = (r = t.pings[c]) == null ? void 0 : r.result) == null ? void 0 : o.value) != null ? {
                    regionId: c,
                    value: t.pings[c].result.value,
                    inProgress: t.pings[c].inProgress
                } : null,
                c ? localStorage.setItem(K.regionId, c) : localStorage.removeItem(K.regionId),
                gt(t))
            } else
                t.selectedRoomStats = null,
                t.selectedRoom = null,
                localStorage.removeItem(K.roomId),
                localStorage.removeItem(K.roomIdSet)
        }
        ,
        setAutomaticRoom: (t, {payload: e}) => {
            t.automaticRoom = e
        }
        ,
        setSelectedRegionId: (t, {payload: e}) => {
            var n, i, s, r, o;
            if (t.selectedRegionId = e,
            t.selectedRegion = e != null ? ((i = (n = t[J.ServerRegionsResult]) == null ? void 0 : n.payload.regions) == null ? void 0 : i.find(a => a.id === e)) ?? null : e,
            t.selectedRegionPing = e && ((r = (s = t.pings[e]) == null ? void 0 : s.result) == null ? void 0 : r.value) != null ? {
                regionId: e,
                value: t.pings[e].result.value,
                inProgress: t.pings[e].inProgress
            } : null,
            e ? localStorage.setItem(K.regionId, e) : localStorage.removeItem(K.regionId),
            t.selectedRoomId) {
                const a = t.selectedRoom;
                a && ((o = a.region) == null ? void 0 : o.id) !== e && (console.log(`Selected room ${a.roomId} not in region ${e}: unset selected room`),
                t.selectedRoomId = null,
                t.selectedRoom = null,
                t.selectedRoomStats = null,
                localStorage.removeItem(K.roomId),
                localStorage.removeItem(K.roomIdSet))
            }
            gt(t)
        }
        ,
        setSelectedTokenAddress: (t, {payload: e}) => {
            Yn(t, e),
            xn(t)
        }
        ,
        setSelectedChain: (t, {payload: e}) => {
            const n = t.selectedTokenAddress;
            typeof e == "object" && e.onlyIfDifferent && (n == null ? void 0 : n.chain) === e.chain || (Yn(t, {
                chain: typeof e == "string" ? e : e.chain
            }),
            xn(t))
        }
        ,
        setPingEntry: (t, {payload: e}) => {
            var r, o, a;
            e.value == null ? t.pings[e.regionId] = void 0 : t.pings[e.regionId] = e.value,
            e.regionId === t.selectedRegionId && (t.selectedRegionPing = ((o = (r = e.value) == null ? void 0 : r.result) == null ? void 0 : o.value) != null ? {
                regionId: e.regionId,
                value: e.value.result.value,
                inProgress: e.value.inProgress
            } : null);
            let n, i, s = !1;
            for (const [c,u] of Object.entries(t.pings))
                !u || ((a = u.result) == null ? void 0 : a.value) === void 0 || (i == null || u.result.value < i) && (n = c,
                i = u.result.value,
                s = u.inProgress);
            n && i != null ? t.closestPing = {
                regionId: n,
                value: i,
                inProgress: s
            } : t.closestPing = null
        }
        ,
        setCustomName: (t, {payload: e}) => {
            t.customName = e
        }
        ,
        setConnectionAlertDismissed: (t, {payload: e}) => {
            t.connectionAlertDismissed = e,
            localStorage.setItem(K.connectionAlertDismissed, e.toString())
        }
        ,
        setFxMuted: (t, {payload: e}) => {
            t.fxMuted = e,
            ti.fxMuted.set(e),
            localStorage.setItem(K.fxMuted, e.toString())
        }
        ,
        setMusicMuted: (t, {payload: e}) => {
            t.musicMuted = e,
            ti.musicMuted.set(e),
            localStorage.setItem(K.musicMuted, e.toString())
        }
        ,
        setHasClickedAnywhere: (t, {payload: e}) => {
            t.hasClickedAnywhere = e
        }
        ,
        setChatOpen: (t, {payload: e}) => {
            t.chatOpen = e,
            localStorage.setItem(K.chatOpen, e.toString())
        }
        ,
        setBoostMessageShown: (t, {payload: e}) => {
            t.boostMessageShown = e,
            localStorage.setItem(K.boostMessageShown, e ? "1" : "0")
        }
        ,
        setDiscordBannerHidden: (t, {payload: e}) => {
            t.discordBannerHidden = e,
            e ? localStorage.setItem(K.discordBannerHidden, e.toString()) : localStorage.removeItem(K.discordBannerHidden)
        }
        ,
        setUserPoints: (t, {payload: e}) => {
            if (t.user) {
                if (!e) {
                    t.user = {
                        ...t.user,
                        points: void 0
                    };
                    return
                }
                t.user = {
                    ...t.user,
                    points: Vr(e)
                }
            }
        }
        ,
        setUser: (t, {payload: e}) => {
            qn(t, e)
        }
        ,
        updateUser: (t, {payload: e}) => {
            Os(t, e)
        }
        ,
        setUserInventory: (t, {payload: e}) => {
            if (!e) {
                t.userInventory = null;
                return
            }
            const n = t.userInventory
              , i = Object.fromEntries(e.update ? (n == null ? void 0 : n.map(r => [r.itemId, r])) ?? [] : [])
              , s = Qo;
            t.userInventory = Object.values(i).sort( (r, o) => r.position - o.position || s[r.itemId] - s[o.itemId])
        }
        ,
        setShowLifetimePoints: (t, {payload: e}) => {
            t.showLifetimePoints = e,
            localStorage.setItem(K.showLifetimePoints, e ? "1" : "0")
        }
        ,
        clearGameMessages: t => {
            for (const e of [J.SeatReservation, J.GameResults, J.WithdrawSwaps, J.WithdrawResult, J.AutoWaitingRoomEntryCreated, J.LeaveWaitingRoomResult])
                t[e] = null
        }
        ,
        signOut: t => {
            t.user = null,
            t.userInventory = null,
            t.authenticated = null,
            t[J.ActiveRoomResponse] = null,
            t.activeRoom = null,
            t.activeRoomStats = null;
            for (const e of Object.values(t.roomStats))
                e && (e.queuePosition = void 0,
                e.gameLeaderboardPosition = void 0)
        }
        ,
        removeRoom(t, {payload: e}) {
            ua(t, e.roomId)
        },
        setIsFetchingAllRooms(t, {payload: e}) {
            e.fetching ? t.isFetchingAllRooms = e.rid ?? !0 : e.rid != null && typeof t.isFetchingAllRooms == "number" && e.rid !== t.isFetchingAllRooms || (t.isFetchingAllRooms = !1)
        },
        setIsFetchingServerRegions(t, {payload: e}) {
            e.fetching ? t.isFetchingServerRegions = e.rid ?? !0 : (e.rid == null || typeof t.isFetchingAllRooms != "number" || e.rid === t.isFetchingAllRooms) && (t.isFetchingServerRegions = !1)
        },
        unsetActiveRoom(t, {payload: e}) {
            var n;
            (e.ifRoomId == null || ((n = t.activeRoom) == null ? void 0 : n.roomId) === e.ifRoomId) && (t.activeRoom = null,
            t.activeRoomStats = null)
        },
        setNavbarOpen(t, {payload: e}) {
            t.navbarOpen = e
        },
        setHideBottomNav(t, {payload: e}) {
            t.hideBottomNav = e,
            e ? document.body.classList.add("bottom-nav-hidden") : document.body.classList.remove("bottom-nav-hidden")
        },
        setHideAllNav(t, {payload: e}) {
            t.hideAllNav = e,
            e ? document.body.classList.add("all-nav-hidden") : document.body.classList.remove("all-nav-hidden")
        },
        setAutoSignUpPhase(t, {payload: e}) {
            if (typeof e == "string") {
                t.autoSignUpPhase = e;
                return
            }
            if (Array.isArray(e.from)) {
                if (e.from.indexOf(t.autoSignUpPhase) === -1)
                    return
            } else if (t.autoSignUpPhase !== e.from)
                return;
            e.isSigningInWithDynamic != null && (typeof e.isSigningInWithDynamic == "boolean" ? e.isSigningInWithDynamic !== !!e.isSigningInWithDynamic : e.isSigningInWithDynamic !== t.isSigningInWithDynamic) || (t.autoSignUpPhase = e.to)
        },
        setPhantomExchangeKey(t, {payload: e}) {
            t.phantomExchangeKey = e,
            e ? localStorage.setItem(K.phantomExchangeSecret, e) : localStorage.removeItem(K.phantomExchangeSecret)
        },
        setPhantomSession(t, {payload: e}) {
            t.phantomSession = e,
            e ? (localStorage.setItem(K.phantomSharedSecret, e.secret),
            localStorage.setItem(K.phantomWalletKey, e.wallet),
            localStorage.setItem(K.phantomSession, e.session)) : (localStorage.removeItem(K.phantomSharedSecret),
            localStorage.removeItem(K.phantomWalletKey),
            localStorage.removeItem(K.phantomSession))
        },
        setIsJoiningGame: (t, {payload: e}) => {
            e == null ? t.isJoiningGame = null : "from"in e && "to"in e ? (e.from && "room"in e.from && t.isJoiningGame && "room"in t.isJoiningGame && e.from.room.roomId === t.isJoiningGame.room.roomId && e.from.sessionId === t.isJoiningGame.sessionId || e.from && "reconnectionToken"in e.from && t.isJoiningGame && "reconnectionToken"in t.isJoiningGame && e.from.reconnectionToken.token === t.isJoiningGame.reconnectionToken.token || e.from == null && t.isJoiningGame == null) && (t.isJoiningGame = e.to) : t.isJoiningGame = e
        }
        ,
        setJoinedGame: (t, {payload: e}) => {
            t.joinedGame = e
        }
        ,
        setEnableAutoSiws: (t, {payload: e}) => {
            t.enableAutoSiws = e
        }
        ,
        setLanguage: (t, {payload: e}) => {
            t.language = e,
            localStorage.setItem(K.language, e)
        }
        ,
        setHomePageMessage: (t, {payload: e}) => {
            t.homePageMessage = e
        }
        ,
        setCreateAccountPopupDismissed: (t, {payload: e}) => {
            t.createAccountPopupDismissed = e,
            localStorage.setItem(K.createAccountPopupDismissed, e.toString())
        }
        ,
        setJoinGameError: (t, {payload: e}) => {
            t.joinGameError = e
        }
        ,
        setShowSettings: (t, {payload: e}) => {
            t.showSettings = e
        }
        ,
        setHighPingWarningDismissed: (t, {payload: e}) => {
            t.highPingWarningDismissed = e,
            e ? localStorage.setItem(K.highPingWarningDismissed, e.toString()) : localStorage.removeItem(K.highPingWarningDismissed)
        }
        ,
        setGlobalLeaderboard: (t, {payload: e}) => {
            e.period !== void 0 && (t.globalLeaderboardPeriod = e.period,
            e.period == null ? localStorage.removeItem(K.globalLeaderboardPeriod) : localStorage.setItem(K.globalLeaderboardPeriod, e.period.toString())),
            e.domain !== void 0 && (t.globalLeaderboardDomain = e.domain,
            e.domain == null ? localStorage.removeItem(K.globalLeaderboardDomain) : localStorage.setItem(K.globalLeaderboardDomain, e.domain.toString())),
            e.userInteraction !== !1 && (t.globalLeaderboardAnalyticsInteracted = !0,
            localStorage.setItem(js.globalLeaderboardAnalyticsInteracted, "true"))
        }
        ,
        setGlobalLeaderboardAnalyticsInteracted: (t, {payload: e}) => {
            t.globalLeaderboardAnalyticsInteracted = e,
            sessionStorage.setItem(js.globalLeaderboardAnalyticsInteracted, e.toString())
        }
        ,
        setGlobalLeaderboardPlayOverlayDismissed: (t, {payload: e}) => {
            t.globalLeaderboardPlayOverlayDismissed = e,
            sessionStorage.setItem(js.globalLeaderboardPlayOverlayDismissed, e.toString())
        }
        ,
        setGlobalLeaderboardUserCache: (t, {payload: e}) => {
            if (e == null)
                t.globalLeaderboardUserCache = null;
            else {
                if (!e.overwrite && (t.globalLeaderboardDomain != e.domain || t.globalLeaderboardPeriod != e.period))
                    return;
                t.globalLeaderboardUserCache = e
            }
        }
        ,
        setThemeEventModal: (t, {payload: e}) => {
            t.themeEventModal = e
        }
        ,
        setSupressNotificationModals: (t, {payload: e}) => {
            "value"in e ? t.supressNotificationModals = e.value : t.supressNotificationModals += e.delta
        }
        ,
        onReceiveNotifications: (t, {payload: e}) => {
            $s(t, e.notifications, e.partial)
        }
        ,
        setShowBlitzModal: (t, {payload: e}) => {
            t.showBlitzModal = e
        }
        ,
        setShowSuperBlitzModal: (t, {payload: e}) => {
            t.showSuperBlitzModal = e
        }
        ,
        setShowReviveModal: (t, {payload: e}) => {
            t.showReviveModal = e
        }
        ,
        setHideNavSidebar: (t, {payload: e}) => {
            t.hideNavSidebar = e
        }
        ,
        setPracticeKilledSetKillQuoteTooltipDismissed: (t, {payload: e}) => {
            t.practiceKilledSetKillQuoteTooltipDismissed = e,
            localStorage.setItem(K.practiceKilledSetKillQuoteTooltipDismissed, e.toString())
        }
        ,
        setClaimPeriodicReviveModalDismissed: (t, {payload: e}) => {
            t.claimPeriodicReviveModalDismissed = e
        }
        ,
        setShowBadgesModal: (t, {payload: e}) => {
            t.showBadgesModal = e
        }
        ,
        setShowBadgesFeatureAnnouncementModal: (t, {payload: e}) => {
            t.showBadgesFeatureAnnouncementModal = e
        }
        ,
        setShowBadgesNewIndicator: (t, {payload: e}) => {
            t.showBadgesNewIndicator = e
        }
        ,
        setShowProfileThemesModal: (t, {payload: e}) => {
            t.showProfileThemesModal = e
        }
        ,
        setSuperBlitzDepositResultNotification: (t, {payload: e}) => {
            t.superBlitzDepositResultNotification = e
        }
        ,
        setSuperBlitzResultNotification: (t, {payload: e}) => {
            t.superBlitzResultNotification = e
        }
        ,
        setSuperBlitzMostRecentRejectedSignature: (t, {payload: e}) => {
            t.superBlitzMostRecentRejectedSignature = e,
            e ? localStorage.setItem(K.superBlitzRejectedSignature, e) : localStorage.removeItem(K.superBlitzRejectedSignature)
        }
        ,
        setDepositMultiplier: (t, {payload: e}) => {
            t.depositMultiplier = e,
            localStorage.setItem(K.depositMultiplier, e.toString())
        }
        ,
        setSelectedUpgrades: (t, {payload: e}) => {
            t.selectedUpgrades = e,
            localStorage.setItem(K.selectedUpgrades, JSON.stringify(e))
        }
        ,
        setFarcasterMiniApp: (t, {payload: e}) => {
            t.farcasterMiniApp = e
        }
        ,
        setHideCashGames: (t, {payload: e}) => {
            t.hideCashGames = e
        }
    }
})
  , {setPublicKey: uf, setDepositStatus: Us, setDepositState: df, setSeatReservation: hf, setServerMessage: ff, setReconnectionToken: mf, setReconnectionTokenExpires: pf, setReconnectionPublicAddress: gf, setDepositConfirmation: yf, setGameConnected: vf, setIsSigningIn: xf, setIsSigningInWithDynamic: Cf, setControlFirstConnectionAttemptedStarted: bf, setControlFirstConnectionAttemptedEnded: wf, setControlHasSuccessfullyConnected: Sf, setControlConnected: _f, setControlConnecting: kf, setIsAuthenticating: If, setAuthenticated: Mf, setMessage: Rf, setSelectedRoomId: Af, setPingEntry: jf, setSelectedRegionId: Pf, setSelectedTokenAddress: Ef, setSelectedChain: Lf, setCustomName: Tf, setAutomaticRoom: Df, setFxMuted: Ff, setMusicMuted: Nf, setHasClickedAnywhere: Bf, setChatOpen: zf, setBoostMessageShown: Of, setDiscordBannerHidden: $f, setUser: Uf, setUserPoints: Wf, setUserInventory: Hf, updateUser: Z5, setShowLifetimePoints: Gf, clearGameMessages: Y5, signOut: Vf, removeRoom: qf, setIsFetchingAllRooms: da, setIsFetchingServerRegions: ha, unsetActiveRoom: Kf, setNavbarOpen: Zf, setHideBottomNav: Yf, setHideAllNav: Qf, setAutoSignUpPhase: Xf, setPhantomExchangeKey: Jf, setPhantomSession: e9, setIsJoiningGame: t9, setJoinedGame: n9, setEnableAutoSiws: i9, setLanguage: s9, setHomePageMessage: r9, setCreateAccountPopupDismissed: o9, setJoinGameError: a9, setShowSettings: l9, setHighPingWarningDismissed: c9, setGlobalLeaderboard: u9, setGlobalLeaderboardPlayOverlayDismissed: d9, setGlobalLeaderboardUserCache: h9, setGlobalLeaderboardAnalyticsInteracted: f9, setThemeEventModal: Q5, setSupressNotificationModals: m9, onReceiveNotifications: p9, setShowMaintenanceNotification: g9, setShowCashGameBanner: y9, setShowBlitzModal: v9, setShowSuperBlitzModal: x9, setShowReviveModal: C9, setConnectionAlertDismissed: b9, setHideNavSidebar: w9, setPracticeKilledSetKillQuoteTooltipDismissed: S9, setClaimPeriodicReviveModalDismissed: fa, setShowBadgesModal: _9, setShowBadgesFeatureAnnouncementModal: k9, setShowBadgesNewIndicator: I9, setShowProfileThemesModal: M9, setSuperBlitzDepositResultNotification: R9, setSuperBlitzResultNotification: A9, setSuperBlitzMostRecentRejectedSignature: j9, setDepositMultiplier: P9, setSelectedUpgrades: E9, setFarcasterMiniApp: L9, setHideCashGames: T9} = ul.actions
  , X5 = (t, e) => {
    let n;
    return t.sendAndWait(Ye.AllRoomsRequest, {}, J.AllRoomsResponse, {
        afterSend: i => {
            n = i,
            e(da({
                rid: n,
                fetching: !0
            }))
        }
    }).finally( () => {
        n != null && e(da({
            rid: n,
            fetching: !1
        }))
    }
    )
}
  , J5 = (t, e) => {
    let n;
    return t.sendAndWait(Ye.ServerRegionsRequest, {}, J.ServerRegionsResult, {
        afterSend: i => {
            n = i,
            e(ha({
                rid: n,
                fetching: !0
            }))
        }
    }).finally( () => {
        n != null && e(ha({
            rid: n,
            fetching: !1
        }))
    }
    )
}
  , D9 = ul.reducer
  , e6 = "_container_1jkxf_34"
  , t6 = "_clouds_translate_right_animation_1jkxf_1"
  , n6 = "_logo_1jkxf_44"
  , i6 = "_werm_1jkxf_52"
  , s6 = "_clouds_1jkxf_62"
  , r6 = {
    "approx-window-width": "_approx-window-width_1jkxf_1",
    container: e6,
    clouds_translate_right_animation: t6,
    logo: n6,
    werm: i6,
    clouds: s6,
    "bg-cloud-large-1": "_bg-cloud-large-1_1jkxf_89",
    "bg-cloud-large-2": "_bg-cloud-large-2_1jkxf_96",
    "bg-cloud-large-3": "_bg-cloud-large-3_1jkxf_102",
    "bg-cloud-medium-1": "_bg-cloud-medium-1_1jkxf_108",
    "bg-cloud-medium-2": "_bg-cloud-medium-2_1jkxf_114",
    "bg-cloud-small-1": "_bg-cloud-small-1_1jkxf_120",
    "bg-cloud-small-2": "_bg-cloud-small-2_1jkxf_126",
    "bg-cloud-small-3": "_bg-cloud-small-3_1jkxf_132",
    "bg-cloud-small-4": "_bg-cloud-small-4_1jkxf_138",
    "bg-cloud-small-5": "_bg-cloud-small-5_1jkxf_144"
}
  , Ge = Qi(r6)
  , F9 = ({className: t="", cloudsClassName: e="", beta: n}) => l.jsxs("div", {
    className: `${Ge.container} ${Ge.approxWindowWidth} ${t}`,
    children: [l.jsx(t4, {
        className: Ge.logo,
        beta: n
    }), l.jsx("img", {
        src: "/assets/a/werms/golden_horned_floating_island.512.avif",
        className: Ge.werm
    }), l.jsxs("div", {
        className: `${Ge.clouds} ${e}`,
        children: [l.jsx("div", {
            className: Ge.bgCloudLarge1
        }), l.jsx("div", {
            className: Ge.bgCloudLarge2
        }), l.jsx("div", {
            className: Ge.bgCloudLarge3
        }), l.jsx("div", {
            className: Ge.bgCloudMedium1
        }), l.jsx("div", {
            className: Ge.bgCloudMedium2
        }), l.jsx("div", {
            className: Ge.bgCloudSmall1
        }), l.jsx("div", {
            className: Ge.bgCloudSmall2
        }), l.jsx("div", {
            className: Ge.bgCloudSmall3
        }), l.jsx("div", {
            className: Ge.bgCloudSmall4
        }), l.jsx("div", {
            className: Ge.bgCloudSmall5
        })]
    })]
});
var ds = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , hs = typeof window > "u" || "Deno"in globalThis;
function ct() {}
function o6(t, e) {
    return typeof t == "function" ? t(e) : t
}
function a6(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function l6(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function xr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function c6(t, e) {
    return typeof t == "function" ? t(e) : t
}
function ma(t, e) {
    const {type: n="all", exact: i, fetchStatus: s, predicate: r, queryKey: o, stale: a} = t;
    if (o) {
        if (i) {
            if (e.queryHash !== qr(o, e.options))
                return !1
        } else if (!ai(e.queryKey, o))
            return !1
    }
    if (n !== "all") {
        const c = e.isActive();
        if (n === "active" && !c || n === "inactive" && c)
            return !1
    }
    return !(typeof a == "boolean" && e.isStale() !== a || s && s !== e.state.fetchStatus || r && !r(e))
}
function pa(t, e) {
    const {exact: n, status: i, predicate: s, mutationKey: r} = t;
    if (r) {
        if (!e.options.mutationKey)
            return !1;
        if (n) {
            if (oi(e.options.mutationKey) !== oi(r))
                return !1
        } else if (!ai(e.options.mutationKey, r))
            return !1
    }
    return !(i && e.state.status !== i || s && !s(e))
}
function qr(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || oi)(t)
}
function oi(t) {
    return JSON.stringify(t, (e, n) => Cr(n) ? Object.keys(n).sort().reduce( (i, s) => (i[s] = n[s],
    i), {}) : n)
}
function ai(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(n => ai(t[n], e[n])) : !1
}
function dl(t, e) {
    if (t === e)
        return t;
    const n = ga(t) && ga(e);
    if (n || Cr(t) && Cr(e)) {
        const i = n ? t : Object.keys(t)
          , s = i.length
          , r = n ? e : Object.keys(e)
          , o = r.length
          , a = n ? [] : {}
          , c = new Set(i);
        let u = 0;
        for (let d = 0; d < o; d++) {
            const h = n ? d : r[d];
            (!n && c.has(h) || n) && t[h] === void 0 && e[h] === void 0 ? (a[h] = void 0,
            u++) : (a[h] = dl(t[h], e[h]),
            a[h] === t[h] && t[h] !== void 0 && u++)
        }
        return s === o && u === s ? t : a
    }
    return e
}
function N9(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function ga(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function Cr(t) {
    if (!ya(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const n = e.prototype;
    return !(!ya(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function ya(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function u6(t) {
    return new Promise(e => {
        setTimeout(e, t)
    }
    )
}
function d6(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== !1 ? dl(t, e) : e
}
function h6(t, e, n=0) {
    const i = [...t, e];
    return n && i.length > n ? i.slice(1) : i
}
function f6(t, e, n=0) {
    const i = [e, ...t];
    return n && i.length > n ? i.slice(0, -1) : i
}
var Kr = Symbol();
function hl(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Kr ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
function B9(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
var rn, Ot, Mn, xa, m6 = (xa = class extends ds {
    constructor() {
        super();
        ae(this, rn);
        ae(this, Ot);
        ae(this, Mn);
        te(this, Mn, e => {
            if (!hs && window.addEventListener) {
                const n = () => e();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        E(this, Ot) || this.setEventListener(E(this, Mn))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = E(this, Ot)) == null || e.call(this),
        te(this, Ot, void 0))
    }
    setEventListener(e) {
        var n;
        te(this, Mn, e),
        (n = E(this, Ot)) == null || n.call(this),
        te(this, Ot, e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(e) {
        E(this, rn) !== e && (te(this, rn, e),
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(n => {
            n(e)
        }
        )
    }
    isFocused() {
        var e;
        return typeof E(this, rn) == "boolean" ? E(this, rn) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
    }
}
,
rn = new WeakMap,
Ot = new WeakMap,
Mn = new WeakMap,
xa), fl = new m6, Rn, $t, An, Ca, p6 = (Ca = class extends ds {
    constructor() {
        super();
        ae(this, Rn, !0);
        ae(this, $t);
        ae(this, An);
        te(this, An, e => {
            if (!hs && window.addEventListener) {
                const n = () => e(!0)
                  , i = () => e(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        E(this, $t) || this.setEventListener(E(this, An))
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || ((e = E(this, $t)) == null || e.call(this),
        te(this, $t, void 0))
    }
    setEventListener(e) {
        var n;
        te(this, An, e),
        (n = E(this, $t)) == null || n.call(this),
        te(this, $t, e(this.setOnline.bind(this)))
    }
    setOnline(e) {
        E(this, Rn) !== e && (te(this, Rn, e),
        this.listeners.forEach(i => {
            i(e)
        }
        ))
    }
    isOnline() {
        return E(this, Rn)
    }
}
,
Rn = new WeakMap,
$t = new WeakMap,
An = new WeakMap,
Ca), Yi = new p6;
function g6() {
    let t, e;
    const n = new Promise( (s, r) => {
        t = s,
        e = r
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function i(s) {
        Object.assign(n, s),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = s => {
        i({
            status: "fulfilled",
            value: s
        }),
        t(s)
    }
    ,
    n.reject = s => {
        i({
            status: "rejected",
            reason: s
        }),
        e(s)
    }
    ,
    n
}
function y6(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function ml(t) {
    return (t ?? "online") === "online" ? Yi.isOnline() : !0
}
var pl = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
;
function gl(t) {
    let e = !1, n = 0, i;
    const s = g6()
      , r = () => s.status !== "pending"
      , o = p => {
        var v;
        r() || (f(new pl(p)),
        (v = t.abort) == null || v.call(t))
    }
      , a = () => {
        e = !0
    }
      , c = () => {
        e = !1
    }
      , u = () => fl.isFocused() && (t.networkMode === "always" || Yi.isOnline()) && t.canRun()
      , d = () => ml(t.networkMode) && t.canRun()
      , h = p => {
        r() || (i == null || i(),
        s.resolve(p))
    }
      , f = p => {
        r() || (i == null || i(),
        s.reject(p))
    }
      , m = () => new Promise(p => {
        var v;
        i = x => {
            (r() || u()) && p(x)
        }
        ,
        (v = t.onPause) == null || v.call(t)
    }
    ).then( () => {
        var p;
        i = void 0,
        r() || (p = t.onContinue) == null || p.call(t)
    }
    )
      , g = () => {
        if (r())
            return;
        let p;
        const v = n === 0 ? t.initialPromise : void 0;
        try {
            p = v ?? t.fn()
        } catch (x) {
            p = Promise.reject(x)
        }
        Promise.resolve(p).then(h).catch(x => {
            var I;
            if (r())
                return;
            const y = t.retry ?? (hs ? 0 : 3)
              , b = t.retryDelay ?? y6
              , S = typeof b == "function" ? b(n, x) : b
              , k = y === !0 || typeof y == "number" && n < y || typeof y == "function" && y(n, x);
            if (e || !k) {
                f(x);
                return
            }
            n++,
            (I = t.onFail) == null || I.call(t, n, x),
            u6(S).then( () => u() ? void 0 : m()).then( () => {
                e ? f(x) : g()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        status: () => s.status,
        cancel: o,
        continue: () => (i == null || i(),
        s),
        cancelRetry: a,
        continueRetry: c,
        canStart: d,
        start: () => (d() ? g() : m().then(g),
        s)
    }
}
var v6 = t => setTimeout(t, 0);
function x6() {
    let t = []
      , e = 0
      , n = a => {
        a()
    }
      , i = a => {
        a()
    }
      , s = v6;
    const r = a => {
        e ? t.push(a) : s( () => {
            n(a)
        }
        )
    }
      , o = () => {
        const a = t;
        t = [],
        a.length && s( () => {
            i( () => {
                a.forEach(c => {
                    n(c)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let c;
            e++;
            try {
                c = a()
            } finally {
                e--,
                e || o()
            }
            return c
        }
        ,
        batchCalls: a => (...c) => {
            r( () => {
                a(...c)
            }
            )
        }
        ,
        schedule: r,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            i = a
        }
        ,
        setScheduler: a => {
            s = a
        }
    }
}
var qe = x6(), on, ba, yl = (ba = class {
    constructor() {
        ae(this, on)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        a6(this.gcTime) && te(this, on, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (hs ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        E(this, on) && (clearTimeout(E(this, on)),
        te(this, on, void 0))
    }
}
,
on = new WeakMap,
ba), jn, Pn, at, an, Ee, li, ln, ut, _t, wa, C6 = (wa = class extends yl {
    constructor(e) {
        super();
        ae(this, ut);
        ae(this, jn);
        ae(this, Pn);
        ae(this, at);
        ae(this, an);
        ae(this, Ee);
        ae(this, li);
        ae(this, ln);
        te(this, ln, !1),
        te(this, li, e.defaultOptions),
        this.setOptions(e.options),
        this.observers = [],
        te(this, an, e.client),
        te(this, at, E(this, an).getQueryCache()),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        te(this, jn, w6(this.options)),
        this.state = e.state ?? E(this, jn),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var e;
        return (e = E(this, Ee)) == null ? void 0 : e.promise
    }
    setOptions(e) {
        this.options = {
            ...E(this, li),
            ...e
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && E(this, at).remove(this)
    }
    setData(e, n) {
        const i = d6(this.state.data, e, this.options);
        return Ue(this, ut, _t).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        i
    }
    setState(e, n) {
        Ue(this, ut, _t).call(this, {
            type: "setState",
            state: e,
            setStateOptions: n
        })
    }
    cancel(e) {
        var i, s;
        const n = (i = E(this, Ee)) == null ? void 0 : i.promise;
        return (s = E(this, Ee)) == null || s.cancel(e),
        n ? n.then(ct).catch(ct) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(E(this, jn))
    }
    isActive() {
        return this.observers.some(e => c6(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Kr || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => xr(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !l6(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var n;
        const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (n = E(this, Ee)) == null || n.continue()
    }
    onOnline() {
        var n;
        const e = this.observers.find(i => i.shouldFetchOnReconnect());
        e == null || e.refetch({
            cancelRefetch: !1
        }),
        (n = E(this, Ee)) == null || n.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        E(this, at).notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(n => n !== e),
        this.observers.length || (E(this, Ee) && (E(this, ln) ? E(this, Ee).cancel({
            revert: !0
        }) : E(this, Ee).cancelRetry()),
        this.scheduleGc()),
        E(this, at).notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ue(this, ut, _t).call(this, {
            type: "invalidate"
        })
    }
    async fetch(e, n) {
        var c, u, d, h, f, m, g, p, v, x, y, b;
        if (this.state.fetchStatus !== "idle" && ((c = E(this, Ee)) == null ? void 0 : c.status()) !== "rejected") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (E(this, Ee))
                return E(this, Ee).continueRetry(),
                E(this, Ee).promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const S = this.observers.find(k => k.options.queryFn);
            S && this.setOptions(S.options)
        }
        const i = new AbortController
          , s = S => {
            Object.defineProperty(S, "signal", {
                enumerable: !0,
                get: () => (te(this, ln, !0),
                i.signal)
            })
        }
          , r = () => {
            const S = hl(this.options, n)
              , I = ( () => {
                const R = {
                    client: E(this, an),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(R),
                R
            }
            )();
            return te(this, ln, !1),
            this.options.persister ? this.options.persister(S, I, this) : S(I)
        }
          , a = ( () => {
            const S = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: E(this, an),
                state: this.state,
                fetchFn: r
            };
            return s(S),
            S
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        te(this, Pn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && Ue(this, ut, _t).call(this, {
            type: "fetch",
            meta: (h = a.fetchOptions) == null ? void 0 : h.meta
        }),
        te(this, Ee, gl({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: i.abort.bind(i),
            onFail: (S, k) => {
                Ue(this, ut, _t).call(this, {
                    type: "failed",
                    failureCount: S,
                    error: k
                })
            }
            ,
            onPause: () => {
                Ue(this, ut, _t).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ue(this, ut, _t).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        }));
        try {
            const S = await E(this, Ee).start();
            if (S === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(S),
            (m = (f = E(this, at).config).onSuccess) == null || m.call(f, S, this),
            (p = (g = E(this, at).config).onSettled) == null || p.call(g, S, this.state.error, this),
            S
        } catch (S) {
            if (S instanceof pl) {
                if (S.silent)
                    return E(this, Ee).promise;
                if (S.revert) {
                    if (this.setState({
                        ...E(this, Pn),
                        fetchStatus: "idle"
                    }),
                    this.state.data === void 0)
                        throw S;
                    return this.state.data
                }
            }
            throw Ue(this, ut, _t).call(this, {
                type: "error",
                error: S
            }),
            (x = (v = E(this, at).config).onError) == null || x.call(v, S, this),
            (b = (y = E(this, at).config).onSettled) == null || b.call(y, this.state.data, S, this),
            S
        } finally {
            this.scheduleGc()
        }
    }
}
,
jn = new WeakMap,
Pn = new WeakMap,
at = new WeakMap,
an = new WeakMap,
Ee = new WeakMap,
li = new WeakMap,
ln = new WeakMap,
ut = new WeakSet,
_t = function(e) {
    const n = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...b6(i.data, this.options),
                fetchMeta: e.meta ?? null
            };
        case "success":
            const s = {
                ...i,
                data: e.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return te(this, Pn, e.manual ? s : void 0),
            s;
        case "error":
            const r = e.error;
            return {
                ...i,
                error: r,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: r,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...e.state
            }
        }
    }
    ;
    this.state = n(this.state),
    qe.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        E(this, at).notify({
            query: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
wa);
function b6(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ml(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function w6(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , n = e !== void 0
      , i = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var yt, Sa, S6 = (Sa = class extends ds {
    constructor(e={}) {
        super();
        ae(this, yt);
        this.config = e,
        te(this, yt, new Map)
    }
    build(e, n, i) {
        const s = n.queryKey
          , r = n.queryHash ?? qr(s, n);
        let o = this.get(r);
        return o || (o = new C6({
            client: e,
            queryKey: s,
            queryHash: r,
            options: e.defaultQueryOptions(n),
            state: i,
            defaultOptions: e.getQueryDefaults(s)
        }),
        this.add(o)),
        o
    }
    add(e) {
        E(this, yt).has(e.queryHash) || (E(this, yt).set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const n = E(this, yt).get(e.queryHash);
        n && (e.destroy(),
        n === e && E(this, yt).delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        qe.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return E(this, yt).get(e)
    }
    getAll() {
        return [...E(this, yt).values()]
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => ma(n, i))
    }
    findAll(e={}) {
        const n = this.getAll();
        return Object.keys(e).length > 0 ? n.filter(i => ma(e, i)) : n
    }
    notify(e) {
        qe.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    onFocus() {
        qe.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        qe.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
,
yt = new WeakMap,
Sa), vt, Ve, cn, xt, Nt, _a, _6 = (_a = class extends yl {
    constructor(e) {
        super();
        ae(this, xt);
        ae(this, vt);
        ae(this, Ve);
        ae(this, cn);
        this.mutationId = e.mutationId,
        te(this, Ve, e.mutationCache),
        te(this, vt, []),
        this.state = e.state || k6(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        E(this, vt).includes(e) || (E(this, vt).push(e),
        this.clearGcTimeout(),
        E(this, Ve).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        te(this, vt, E(this, vt).filter(n => n !== e)),
        this.scheduleGc(),
        E(this, Ve).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        E(this, vt).length || (this.state.status === "pending" ? this.scheduleGc() : E(this, Ve).remove(this))
    }
    continue() {
        var e;
        return ((e = E(this, cn)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var r, o, a, c, u, d, h, f, m, g, p, v, x, y, b, S, k, I, R, T;
        const n = () => {
            Ue(this, xt, Nt).call(this, {
                type: "continue"
            })
        }
        ;
        te(this, cn, gl({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
            onFail: (P, w) => {
                Ue(this, xt, Nt).call(this, {
                    type: "failed",
                    failureCount: P,
                    error: w
                })
            }
            ,
            onPause: () => {
                Ue(this, xt, Nt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, Ve).canRun(this)
        }));
        const i = this.state.status === "pending"
          , s = !E(this, cn).canStart();
        try {
            if (i)
                n();
            else {
                Ue(this, xt, Nt).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: s
                }),
                await ((o = (r = E(this, Ve).config).onMutate) == null ? void 0 : o.call(r, e, this));
                const w = await ((c = (a = this.options).onMutate) == null ? void 0 : c.call(a, e));
                w !== this.state.context && Ue(this, xt, Nt).call(this, {
                    type: "pending",
                    context: w,
                    variables: e,
                    isPaused: s
                })
            }
            const P = await E(this, cn).start();
            return await ((d = (u = E(this, Ve).config).onSuccess) == null ? void 0 : d.call(u, P, e, this.state.context, this)),
            await ((f = (h = this.options).onSuccess) == null ? void 0 : f.call(h, P, e, this.state.context)),
            await ((g = (m = E(this, Ve).config).onSettled) == null ? void 0 : g.call(m, P, null, this.state.variables, this.state.context, this)),
            await ((v = (p = this.options).onSettled) == null ? void 0 : v.call(p, P, null, e, this.state.context)),
            Ue(this, xt, Nt).call(this, {
                type: "success",
                data: P
            }),
            P
        } catch (P) {
            try {
                throw await ((y = (x = E(this, Ve).config).onError) == null ? void 0 : y.call(x, P, e, this.state.context, this)),
                await ((S = (b = this.options).onError) == null ? void 0 : S.call(b, P, e, this.state.context)),
                await ((I = (k = E(this, Ve).config).onSettled) == null ? void 0 : I.call(k, void 0, P, this.state.variables, this.state.context, this)),
                await ((T = (R = this.options).onSettled) == null ? void 0 : T.call(R, void 0, P, e, this.state.context)),
                P
            } finally {
                Ue(this, xt, Nt).call(this, {
                    type: "error",
                    error: P
                })
            }
        } finally {
            E(this, Ve).runNext(this)
        }
    }
}
,
vt = new WeakMap,
Ve = new WeakMap,
cn = new WeakMap,
xt = new WeakSet,
Nt = function(e) {
    const n = i => {
        switch (e.type) {
        case "failed":
            return {
                ...i,
                failureCount: e.failureCount,
                failureReason: e.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: e.error,
                failureCount: i.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    qe.batch( () => {
        E(this, vt).forEach(i => {
            i.onMutationUpdate(e)
        }
        ),
        E(this, Ve).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    }
    )
}
,
_a);
function k6() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var kt, dt, ci, ka, I6 = (ka = class extends ds {
    constructor(e={}) {
        super();
        ae(this, kt);
        ae(this, dt);
        ae(this, ci);
        this.config = e,
        te(this, kt, new Set),
        te(this, dt, new Map),
        te(this, ci, 0)
    }
    build(e, n, i) {
        const s = new _6({
            mutationCache: this,
            mutationId: ++Si(this, ci)._,
            options: e.defaultMutationOptions(n),
            state: i
        });
        return this.add(s),
        s
    }
    add(e) {
        E(this, kt).add(e);
        const n = Ei(e);
        if (typeof n == "string") {
            const i = E(this, dt).get(n);
            i ? i.push(e) : E(this, dt).set(n, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (E(this, kt).delete(e)) {
            const n = Ei(e);
            if (typeof n == "string") {
                const i = E(this, dt).get(n);
                if (i)
                    if (i.length > 1) {
                        const s = i.indexOf(e);
                        s !== -1 && i.splice(s, 1)
                    } else
                        i[0] === e && E(this, dt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const n = Ei(e);
        if (typeof n == "string") {
            const i = E(this, dt).get(n)
              , s = i == null ? void 0 : i.find(r => r.state.status === "pending");
            return !s || s === e
        } else
            return !0
    }
    runNext(e) {
        var i;
        const n = Ei(e);
        if (typeof n == "string") {
            const s = (i = E(this, dt).get(n)) == null ? void 0 : i.find(r => r !== e && r.state.isPaused);
            return (s == null ? void 0 : s.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        qe.batch( () => {
            E(this, kt).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            E(this, kt).clear(),
            E(this, dt).clear()
        }
        )
    }
    getAll() {
        return Array.from(E(this, kt))
    }
    find(e) {
        const n = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => pa(n, i))
    }
    findAll(e={}) {
        return this.getAll().filter(n => pa(e, n))
    }
    notify(e) {
        qe.batch( () => {
            this.listeners.forEach(n => {
                n(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(n => n.state.isPaused);
        return qe.batch( () => Promise.all(e.map(n => n.continue().catch(ct))))
    }
}
,
kt = new WeakMap,
dt = new WeakMap,
ci = new WeakMap,
ka);
function Ei(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
function va(t) {
    return {
        onFetch: (e, n) => {
            var d, h, f, m, g;
            const i = e.options
              , s = (f = (h = (d = e.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : h.fetchMore) == null ? void 0 : f.direction
              , r = ((m = e.state.data) == null ? void 0 : m.pages) || []
              , o = ((g = e.state.data) == null ? void 0 : g.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , c = 0;
            const u = async () => {
                let p = !1;
                const v = b => {
                    Object.defineProperty(b, "signal", {
                        enumerable: !0,
                        get: () => (e.signal.aborted ? p = !0 : e.signal.addEventListener("abort", () => {
                            p = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , x = hl(e.options, e.fetchOptions)
                  , y = async (b, S, k) => {
                    if (p)
                        return Promise.reject();
                    if (S == null && b.pages.length)
                        return Promise.resolve(b);
                    const R = ( () => {
                        const A = {
                            client: e.client,
                            queryKey: e.queryKey,
                            pageParam: S,
                            direction: k ? "backward" : "forward",
                            meta: e.options.meta
                        };
                        return v(A),
                        A
                    }
                    )()
                      , T = await x(R)
                      , {maxPages: P} = e.options
                      , w = k ? f6 : h6;
                    return {
                        pages: w(b.pages, T, P),
                        pageParams: w(b.pageParams, S, P)
                    }
                }
                ;
                if (s && r.length) {
                    const b = s === "backward"
                      , S = b ? vl : br
                      , k = {
                        pages: r,
                        pageParams: o
                    }
                      , I = S(i, k);
                    a = await y(k, I, b)
                } else {
                    const b = t ?? r.length;
                    do {
                        const S = c === 0 ? o[0] ?? i.initialPageParam : br(i, a);
                        if (c > 0 && S == null)
                            break;
                        a = await y(a, S),
                        c++
                    } while (c < b)
                }
                return a
            }
            ;
            e.options.persister ? e.fetchFn = () => {
                var p, v;
                return (v = (p = e.options).persister) == null ? void 0 : v.call(p, u, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, n)
            }
            : e.fetchFn = u
        }
    }
}
function br(t, {pages: e, pageParams: n}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, n[i], n) : void 0
}
function vl(t, {pages: e, pageParams: n}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, n[0], n) : void 0
}
function z9(t, e) {
    return e ? br(t, e) != null : !1
}
function O9(t, e) {
    return !e || !t.getPreviousPageParam ? !1 : vl(t, e) != null
}
var be, Ut, Wt, En, Ln, Ht, Tn, Dn, Ia, $9 = (Ia = class {
    constructor(t={}) {
        ae(this, be);
        ae(this, Ut);
        ae(this, Wt);
        ae(this, En);
        ae(this, Ln);
        ae(this, Ht);
        ae(this, Tn);
        ae(this, Dn);
        te(this, be, t.queryCache || new S6),
        te(this, Ut, t.mutationCache || new I6),
        te(this, Wt, t.defaultOptions || {}),
        te(this, En, new Map),
        te(this, Ln, new Map),
        te(this, Ht, 0)
    }
    mount() {
        Si(this, Ht)._++,
        E(this, Ht) === 1 && (te(this, Tn, fl.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            E(this, be).onFocus())
        }
        )),
        te(this, Dn, Yi.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            E(this, be).onOnline())
        }
        )))
    }
    unmount() {
        var t, e;
        Si(this, Ht)._--,
        E(this, Ht) === 0 && ((t = E(this, Tn)) == null || t.call(this),
        te(this, Tn, void 0),
        (e = E(this, Dn)) == null || e.call(this),
        te(this, Dn, void 0))
    }
    isFetching(t) {
        return E(this, be).findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return E(this, Ut).findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        var n;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (n = E(this, be).get(e.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(t) {
        const e = this.defaultQueryOptions(t)
          , n = E(this, be).build(this, e)
          , i = n.state.data;
        return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && n.isStaleByTime(xr(e.staleTime, n)) && this.prefetchQuery(e),
        Promise.resolve(i))
    }
    getQueriesData(t) {
        return E(this, be).findAll(t).map( ({queryKey: e, state: n}) => {
            const i = n.data;
            return [e, i]
        }
        )
    }
    setQueryData(t, e, n) {
        const i = this.defaultQueryOptions({
            queryKey: t
        })
          , s = E(this, be).get(i.queryHash)
          , r = s == null ? void 0 : s.state.data
          , o = o6(e, r);
        if (o !== void 0)
            return E(this, be).build(this, i).setData(o, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(t, e, n) {
        return qe.batch( () => E(this, be).findAll(t).map( ({queryKey: i}) => [i, this.setQueryData(i, e, n)]))
    }
    getQueryState(t) {
        var n;
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return (n = E(this, be).get(e.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(t) {
        const e = E(this, be);
        qe.batch( () => {
            e.findAll(t).forEach(n => {
                e.remove(n)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const n = E(this, be);
        return qe.batch( () => (n.findAll(t).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...t
        }, e)))
    }
    cancelQueries(t, e={}) {
        const n = {
            revert: !0,
            ...e
        }
          , i = qe.batch( () => E(this, be).findAll(t).map(s => s.cancel(n)));
        return Promise.all(i).then(ct).catch(ct)
    }
    invalidateQueries(t, e={}) {
        return qe.batch( () => (E(this, be).findAll(t).forEach(n => {
            n.invalidate()
        }
        ),
        (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...t,
            type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
        }, e)))
    }
    refetchQueries(t, e={}) {
        const n = {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }
          , i = qe.batch( () => E(this, be).findAll(t).filter(s => !s.isDisabled() && !s.isStatic()).map(s => {
            let r = s.fetch(void 0, n);
            return n.throwOnError || (r = r.catch(ct)),
            s.state.fetchStatus === "paused" ? Promise.resolve() : r
        }
        ));
        return Promise.all(i).then(ct)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = E(this, be).build(this, e);
        return n.isStaleByTime(xr(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(ct).catch(ct)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = va(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(ct).catch(ct)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = va(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return Yi.isOnline() ? E(this, Ut).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return E(this, be)
    }
    getMutationCache() {
        return E(this, Ut)
    }
    getDefaultOptions() {
        return E(this, Wt)
    }
    setDefaultOptions(t) {
        te(this, Wt, t)
    }
    setQueryDefaults(t, e) {
        E(this, En).set(oi(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...E(this, En).values()]
          , n = {};
        return e.forEach(i => {
            ai(t, i.queryKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(t, e) {
        E(this, Ln).set(oi(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...E(this, Ln).values()]
          , n = {};
        return e.forEach(i => {
            ai(t, i.mutationKey) && Object.assign(n, i.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...E(this, Wt).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = qr(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.queryFn === Kr && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...E(this, Wt).mutations,
            ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        E(this, be).clear(),
        E(this, Ut).clear()
    }
}
,
be = new WeakMap,
Ut = new WeakMap,
Wt = new WeakMap,
En = new WeakMap,
Ln = new WeakMap,
Ht = new WeakMap,
Tn = new WeakMap,
Dn = new WeakMap,
Ia), xl = C.createContext(void 0), U9 = t => {
    const e = C.useContext(xl);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
, W9 = ({client: t, children: e}) => (C.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
l.jsx(xl.Provider, {
    value: t,
    children: e
}));
export {V6 as $, Ze as A, $6 as B, St as C, Kh as D, D8 as E, Zh as F, F8 as G, et as H, M as I, B8 as J, ei as K, jt as L, W5 as M, zo as N, zt as O, re as P, $9 as Q, Le as R, ds as S, $r as T, jr as U, X6 as V, F9 as W, c8 as X, u8 as Y, d8 as Z, G6 as _, W9 as a, nh as a$, O6 as a0, Sn as a1, ns as a2, ts as a3, Re as a4, J as a5, J5 as a6, jf as a7, Pf as a8, Ye as a9, j9 as aA, P9 as aB, E9 as aC, h8 as aD, U7 as aE, s9 as aF, ti as aG, i9 as aH, b9 as aI, S9 as aJ, ks as aK, x8 as aL, B7 as aM, hh as aN, Rh as aO, uh as aP, ch as aQ, lh as aR, ah as aS, oh as aT, as as aU, Q1 as aV, D1 as aW, X8 as aX, nr as aY, Pe as aZ, Y3 as a_, O3 as aa, D9 as ab, q8 as ac, Bf as ad, K as ae, mf as af, gf as ag, Af as ah, Ef as ai, Ff as aj, rt as ak, pn as al, Nf as am, zf as an, Of as ao, $f as ap, Gf as aq, Jf as ar, e9 as as, o9 as at, c9 as au, u9 as av, U8 as aw, js as ax, f9 as ay, d9 as az, j7 as b, cl as b$, r8 as b0, Q8 as b1, a8 as b2, dh as b3, Co as b4, mr as b5, Za as b6, Y8 as b7, eh as b8, th as b9, O1 as bA, ls as bB, j2 as bC, T8 as bD, M2 as bE, N6 as bF, L8 as bG, $u as bH, Ur as bI, E8 as bJ, Zn as bK, P8 as bL, g9 as bM, y9 as bN, l7 as bO, L2 as bP, ll as bQ, g8 as bR, t3 as bS, Z5 as bT, p9 as bU, n8 as bV, Je as bW, r7 as bX, v8 as bY, mh as bZ, H6 as b_, J8 as ba, m9 as bb, xh as bc, Me as bd, ni as be, Ch as bf, x7 as bg, V1 as bh, T4 as bi, Qd as bj, U1 as bk, Ah as bl, Yt as bm, jh as bn, Eh as bo, o8 as bp, ri as bq, L1 as br, T1 as bs, Z8 as bt, Do as bu, V7 as bv, G4 as bw, Ys as bx, Zd as by, sh as bz, ct as c, s7 as c$, b7 as c0, i4 as c1, W7 as c2, o7 as c3, bh as c4, Bh as c5, p7 as c6, g7 as c7, Oh as c8, Gc as c9, Kt as cA, t8 as cB, s2 as cC, J6 as cD, i2 as cE, B6 as cF, Y6 as cG, De as cH, $7 as cI, p8 as cJ, Y5 as cK, Us as cL, tt as cM, vf as cN, B4 as cO, a9 as cP, t9 as cQ, Rf as cR, n9 as cS, df as cT, hf as cU, X5 as cV, pf as cW, M7 as cX, Xf as cY, Th as cZ, fh as c_, Mf as ca, _f as cb, kf as cc, bf as cd, G8 as ce, V8 as cf, Uf as cg, Sf as ch, wf as ci, ff as cj, xf as ck, Vf as cl, M8 as cm, I8 as cn, k8 as co, z8 as cp, Q6 as cq, K6 as cr, e8 as cs, j8 as ct, R8 as cu, A8 as cv, s8 as cw, O8 as cx, i8 as cy, Z6 as cz, Be as d, yh as d$, b4 as d0, S7 as d1, Df as d2, Xd as d3, l9 as d4, Mh as d5, Ih as d6, E6 as d7, _4 as d8, u4 as d9, H7 as dA, Yo as dB, z7 as dC, v9 as dD, Jh as dE, d7 as dF, Lh as dG, h7 as dH, f7 as dI, u7 as dJ, m7 as dK, kr as dL, D6 as dM, w9 as dN, ih as dO, O7 as dP, zh as dQ, B1 as dR, z5 as dS, G7 as dT, Nh as dU, q7 as dV, v7 as dW, n4 as dX, Gh as dY, Yd as dZ, Uh as d_, Z7 as da, ef as db, Q7 as dc, Y7 as dd, Fh as de, _8 as df, rh as dg, Wh as dh, qf as di, Kf as dj, ph as dk, vh as dl, e7 as dm, Qh as dn, U6 as dp, K8 as dq, i7 as dr, Dh as ds, Xh as dt, t7 as du, n7 as dv, b8 as dw, N8 as dx, w8 as dy, y7 as dz, B9 as e, cf as e$, qh as e0, Hh as e1, mt as e2, W1 as e3, o3 as e4, H8 as e5, Yh as e6, $h as e7, P6 as e8, us as e9, pr as eA, w7 as eB, Sh as eC, gh as eD, _7 as eE, k7 as eF, s3 as eG, Xa as eH, tn as eI, q5 as eJ, F6 as eK, f8 as eL, I7 as eM, X1 as eN, D4 as eO, W6 as eP, a7 as eQ, D2 as eR, L6 as eS, R7 as eT, ac as eU, tf as eV, sf as eW, rf as eX, of as eY, af as eZ, lf as e_, Q5 as ea, or as eb, W8 as ec, h9 as ed, c7 as ee, C7 as ef, q6 as eg, z4 as eh, kh as ei, Ou as ej, C9 as ek, K7 as el, Vh as em, r9 as en, wh as eo, _h as ep, Yf as eq, S8 as er, J7 as es, X7 as et, l8 as eu, gr as ev, Ph as ew, $8 as ex, m8 as ey, bo as ez, xr as f, M9 as f0, Lf as f1, nf as f2, uf as f3, Cf as f4, F7 as f5, P7 as f6, A7 as f7, E7 as f8, L7 as f9, T7 as fa, D7 as fb, N7 as fc, L9 as fd, T9 as fe, T6 as ff, y8 as fg, S4 as fh, w4 as fi, C8 as fj, k6 as g, oi as h, hs as i, a6 as j, fl as k, b6 as l, d6 as m, qe as n, va as o, g6 as p, O9 as q, c6 as r, N9 as s, l6 as t, U9 as u, z9 as v, dl as w, z6 as x, Fi as y, We as z};
