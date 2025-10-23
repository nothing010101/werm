import {B as g, L as ge, s as le, t as ye} from "./___vite-browser-external_commonjs-proxy-6ZTq1dOW.js";
function pe(t) {
    return typeof t == "string" ? {
        address: t,
        type: "json-rpc"
    } : t
}
class ve extends g {
    constructor({docsPath: e}={}) {
        super(["Could not find an Account to execute with this Action.", "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."].join(`
`), {
            docsPath: e,
            docsSlug: "account",
            name: "AccountNotFoundError"
        })
    }
}
class Ie extends g {
    constructor({docsPath: e, metaMessages: r, type: s}) {
        super(`Account type "${s}" is not supported.`, {
            docsPath: e,
            metaMessages: r,
            name: "AccountTypeNotSupportedError"
        })
    }
}
const x = (t, e, r) => JSON.stringify(t, (s, c) => typeof c == "bigint" ? c.toString() : c, r)
  , $e = t => t
  , Z = t => t;
class C extends g {
    constructor({body: e, cause: r, details: s, headers: c, status: a, url: i}) {
        super("HTTP request failed.", {
            cause: r,
            details: s,
            metaMessages: [a && `Status: ${a}`, `URL: ${Z(i)}`, e && `Request body: ${x(e)}`].filter(Boolean),
            name: "HttpRequestError"
        }),
        Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.body = e,
        this.headers = c,
        this.status = a,
        this.url = i
    }
}
class Ne extends g {
    constructor({body: e, cause: r, details: s, url: c}) {
        super("WebSocket request failed.", {
            cause: r,
            details: s,
            metaMessages: [`URL: ${Z(c)}`, e && `Request body: ${x(e)}`].filter(Boolean),
            name: "WebSocketRequestError"
        })
    }
}
class he extends g {
    constructor({body: e, error: r, url: s}) {
        super("RPC Request failed.", {
            cause: r,
            details: r.message,
            metaMessages: [`URL: ${Z(s)}`, `Request body: ${x(e)}`],
            name: "RpcRequestError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.code = r.code,
        this.data = r.data
    }
}
class Le extends g {
    constructor({url: e}={}) {
        super("The socket has been closed.", {
            metaMessages: [e && `URL: ${Z(e)}`].filter(Boolean),
            name: "SocketClosedError"
        })
    }
}
class ie extends g {
    constructor({body: e, url: r}) {
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [`URL: ${Z(r)}`, `Request body: ${x(e)}`],
            name: "TimeoutError"
        })
    }
}
const Re = -1;
class f extends g {
    constructor(e, {code: r, docsPath: s, metaMessages: c, name: a, shortMessage: i}) {
        super(i, {
            cause: e,
            docsPath: s,
            metaMessages: c || (e == null ? void 0 : e.metaMessages),
            name: a || "RpcError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.name = a || e.name,
        this.code = e instanceof he ? e.code : r ?? Re
    }
}
class m extends f {
    constructor(e, r) {
        super(e, r),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = r.data
    }
}
class k extends f {
    constructor(e) {
        super(e, {
            code: k.code,
            name: "ParseRpcError",
            shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        })
    }
}
Object.defineProperty(k, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
class A extends f {
    constructor(e) {
        super(e, {
            code: A.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object."
        })
    }
}
Object.defineProperty(A, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
class S extends f {
    constructor(e, {method: r}={}) {
        super(e, {
            code: S.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${r ? ` "${r}"` : ""} does not exist / is not available.`
        })
    }
}
Object.defineProperty(S, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
class U extends f {
    constructor(e) {
        super(e, {
            code: U.code,
            name: "InvalidParamsRpcError",
            shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
}
Object.defineProperty(U, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
class O extends f {
    constructor(e) {
        super(e, {
            code: O.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received."
        })
    }
}
Object.defineProperty(O, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
class I extends f {
    constructor(e) {
        super(e, {
            code: I.code,
            name: "InvalidInputRpcError",
            shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
}
Object.defineProperty(I, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
class $ extends f {
    constructor(e) {
        super(e, {
            code: $.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError"
        })
    }
}
Object.defineProperty($, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
class N extends f {
    constructor(e) {
        super(e, {
            code: N.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available."
        })
    }
}
Object.defineProperty(N, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
class L extends f {
    constructor(e) {
        super(e, {
            code: L.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed."
        })
    }
}
Object.defineProperty(L, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
class E extends f {
    constructor(e, {method: r}={}) {
        super(e, {
            code: E.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${r ? ` "${r}"` : ""} is not supported.`
        })
    }
}
Object.defineProperty(E, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
class M extends f {
    constructor(e) {
        super(e, {
            code: M.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit."
        })
    }
}
Object.defineProperty(M, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
class D extends f {
    constructor(e) {
        super(e, {
            code: D.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported."
        })
    }
}
Object.defineProperty(D, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
class j extends m {
    constructor(e) {
        super(e, {
            code: j.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request."
        })
    }
}
Object.defineProperty(j, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
class W extends m {
    constructor(e) {
        super(e, {
            code: W.code,
            name: "UnauthorizedProviderError",
            shortMessage: "The requested method and/or account has not been authorized by the user."
        })
    }
}
Object.defineProperty(W, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
class H extends m {
    constructor(e, {method: r}={}) {
        super(e, {
            code: H.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${r ? ` " ${r}"` : ""}.`
        })
    }
}
Object.defineProperty(H, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
class J extends m {
    constructor(e) {
        super(e, {
            code: J.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains."
        })
    }
}
Object.defineProperty(J, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
class B extends m {
    constructor(e) {
        super(e, {
            code: B.code,
            name: "ChainDisconnectedError",
            shortMessage: "The Provider is not connected to the requested chain."
        })
    }
}
Object.defineProperty(B, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
class F extends m {
    constructor(e) {
        super(e, {
            code: F.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain."
        })
    }
}
Object.defineProperty(F, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
class z extends m {
    constructor(e) {
        super(e, {
            code: z.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage: "This Wallet does not support a capability that was not marked as optional."
        })
    }
}
Object.defineProperty(z, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5700
});
class V extends m {
    constructor(e) {
        super(e, {
            code: V.code,
            name: "UnsupportedChainIdError",
            shortMessage: "This Wallet does not support the requested chain ID."
        })
    }
}
Object.defineProperty(V, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5710
});
class G extends m {
    constructor(e) {
        super(e, {
            code: G.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID."
        })
    }
}
Object.defineProperty(G, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5720
});
class K extends m {
    constructor(e) {
        super(e, {
            code: K.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted"
        })
    }
}
Object.defineProperty(K, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5730
});
class Q extends m {
    constructor(e) {
        super(e, {
            code: Q.code,
            name: "BundleTooLargeError",
            shortMessage: "The call bundle is too large for the Wallet to process."
        })
    }
}
Object.defineProperty(Q, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5740
});
class X extends m {
    constructor(e) {
        super(e, {
            code: X.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage: "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."
        })
    }
}
Object.defineProperty(X, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5750
});
class Y extends m {
    constructor(e) {
        super(e, {
            code: Y.code,
            name: "AtomicityNotSupportedError",
            shortMessage: "The wallet does not support atomic execution but the request requires it."
        })
    }
}
Object.defineProperty(Y, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5760
});
class Pe extends f {
    constructor(e) {
        super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred."
        })
    }
}
function xe() {
    let t = () => {}
      , e = () => {}
    ;
    return {
        promise: new Promise( (s, c) => {
            t = s,
            e = c
        }
        ),
        resolve: t,
        reject: e
    }
}
const ce = new Map;
function Ee({fn: t, id: e, shouldSplitBatch: r, wait: s=0, sort: c}) {
    const a = async () => {
        const d = b();
        i();
        const h = d.map( ({args: n}) => n);
        h.length !== 0 && t(h).then(n => {
            c && Array.isArray(n) && n.sort(c);
            for (let o = 0; o < d.length; o++) {
                const {resolve: p} = d[o];
                p == null || p([n[o], n])
            }
        }
        ).catch(n => {
            for (let o = 0; o < d.length; o++) {
                const {reject: p} = d[o];
                p == null || p(n)
            }
        }
        )
    }
      , i = () => ce.delete(e)
      , u = () => b().map( ({args: d}) => d)
      , b = () => ce.get(e) || []
      , l = d => ce.set(e, [...b(), d]);
    return {
        flush: i,
        async schedule(d) {
            const {promise: h, resolve: n, reject: o} = xe();
            return (r == null ? void 0 : r([...u(), d])) && a(),
            b().length > 0 ? (l({
                args: d,
                resolve: n,
                reject: o
            }),
            h) : (l({
                args: d,
                resolve: n,
                reject: o
            }),
            setTimeout(a, s),
            h)
        }
    }
}
const ee = new ge(8192);
function je(t, {enabled: e=!0, id: r}) {
    if (!e || !r)
        return t();
    if (ee.get(r))
        return ee.get(r);
    const s = t().finally( () => ee.delete(r));
    return ee.set(r, s),
    s
}
async function Oe(t) {
    return new Promise(e => setTimeout(e, t))
}
function Me(t, {delay: e=100, retryCount: r=2, shouldRetry: s= () => !0}={}) {
    return new Promise( (c, a) => {
        const i = async ({count: u=0}={}) => {
            const b = async ({error: l}) => {
                const d = typeof e == "function" ? e({
                    count: u,
                    error: l
                }) : e;
                d && await Oe(d),
                i({
                    count: u + 1
                })
            }
            ;
            try {
                const l = await t();
                c(l)
            } catch (l) {
                if (u < r && await s({
                    count: u,
                    error: l
                }))
                    return b({
                        error: l
                    });
                a(l)
            }
        }
        ;
        i()
    }
    )
}
function Te(t, e={}) {
    return async (r, s={}) => {
        var h;
        const {dedupe: c=!1, methods: a, retryDelay: i=150, retryCount: u=3, uid: b} = {
            ...e,
            ...s
        }
          , {method: l} = r;
        if ((h = a == null ? void 0 : a.exclude) != null && h.includes(l))
            throw new E(new Error("method not supported"),{
                method: l
            });
        if (a != null && a.include && !a.include.includes(l))
            throw new E(new Error("method not supported"),{
                method: l
            });
        const d = c ? le(`${b}.${x(r)}`) : void 0;
        return je( () => Me(async () => {
            try {
                return await t(r)
            } catch (n) {
                const o = n;
                switch (o.code) {
                case k.code:
                    throw new k(o);
                case A.code:
                    throw new A(o);
                case S.code:
                    throw new S(o,{
                        method: r.method
                    });
                case U.code:
                    throw new U(o);
                case O.code:
                    throw new O(o);
                case I.code:
                    throw new I(o);
                case $.code:
                    throw new $(o);
                case N.code:
                    throw new N(o);
                case L.code:
                    throw new L(o);
                case E.code:
                    throw new E(o,{
                        method: r.method
                    });
                case M.code:
                    throw new M(o);
                case D.code:
                    throw new D(o);
                case j.code:
                    throw new j(o);
                case W.code:
                    throw new W(o);
                case H.code:
                    throw new H(o);
                case J.code:
                    throw new J(o);
                case B.code:
                    throw new B(o);
                case F.code:
                    throw new F(o);
                case z.code:
                    throw new z(o);
                case V.code:
                    throw new V(o);
                case G.code:
                    throw new G(o);
                case K.code:
                    throw new K(o);
                case Q.code:
                    throw new Q(o);
                case X.code:
                    throw new X(o);
                case Y.code:
                    throw new Y(o);
                case 5e3:
                    throw new j(o);
                default:
                    throw n instanceof g ? n : new Pe(o)
                }
            }
        }
        , {
            delay: ({count: n, error: o}) => {
                var p;
                if (o && o instanceof C) {
                    const w = (p = o == null ? void 0 : o.headers) == null ? void 0 : p.get("Retry-After");
                    if (w != null && w.match(/\d/))
                        return Number.parseInt(w) * 1e3
                }
                return ~~(1 << n) * i
            }
            ,
            retryCount: u,
            shouldRetry: ({error: n}) => qe(n)
        }), {
            enabled: c,
            id: d
        })
    }
}
function qe(t) {
    return "code"in t && typeof t.code == "number" ? t.code === -1 || t.code === M.code || t.code === O.code : t instanceof C && t.status ? t.status === 403 || t.status === 408 || t.status === 413 || t.status === 429 || t.status === 500 || t.status === 502 || t.status === 503 || t.status === 504 : !0
}
function Ce(t, {errorInstance: e=new Error("timed out"), timeout: r, signal: s}) {
    return new Promise( (c, a) => {
        (async () => {
            let i;
            try {
                const u = new AbortController;
                r > 0 && (i = setTimeout( () => {
                    s ? u.abort() : a(e)
                }
                , r)),
                c(await t({
                    signal: (u == null ? void 0 : u.signal) || null
                }))
            } catch (u) {
                (u == null ? void 0 : u.name) === "AbortError" && a(e),
                a(u)
            } finally {
                clearTimeout(i)
            }
        }
        )()
    }
    )
}
function ke() {
    return {
        current: 0,
        take() {
            return this.current++
        },
        reset() {
            this.current = 0
        }
    }
}
const de = ke();
function Ae(t, e={}) {
    return {
        async request(r) {
            var h;
            const {body: s, onRequest: c=e.onRequest, onResponse: a=e.onResponse, timeout: i=e.timeout ?? 1e4} = r
              , u = {
                ...e.fetchOptions ?? {},
                ...r.fetchOptions ?? {}
            }
              , {headers: b, method: l, signal: d} = u;
            try {
                const n = await Ce(async ({signal: p}) => {
                    const w = {
                        ...u,
                        body: Array.isArray(s) ? x(s.map(R => ({
                            jsonrpc: "2.0",
                            id: R.id ?? de.take(),
                            ...R
                        }))) : x({
                            jsonrpc: "2.0",
                            id: s.id ?? de.take(),
                            ...s
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            ...b
                        },
                        method: l || "POST",
                        signal: d || (i > 0 ? p : null)
                    }
                      , T = new Request(t,w)
                      , y = await (c == null ? void 0 : c(T, w)) ?? {
                        ...w,
                        url: t
                    };
                    return await fetch(y.url ?? t, y)
                }
                , {
                    errorInstance: new ie({
                        body: s,
                        url: t
                    }),
                    timeout: i,
                    signal: !0
                });
                a && await a(n);
                let o;
                if ((h = n.headers.get("Content-Type")) != null && h.startsWith("application/json"))
                    o = await n.json();
                else {
                    o = await n.text();
                    try {
                        o = JSON.parse(o || "{}")
                    } catch (p) {
                        if (n.ok)
                            throw p;
                        o = {
                            error: o
                        }
                    }
                }
                if (!n.ok)
                    throw new C({
                        body: s,
                        details: x(o.error) || n.statusText,
                        headers: n.headers,
                        status: n.status,
                        url: t
                    });
                return o
            } catch (n) {
                throw n instanceof C || n instanceof ie ? n : new C({
                    body: s,
                    cause: n,
                    url: t
                })
            }
        }
    }
}
async function De(t, {account: e=t.account, message: r}) {
    if (!e)
        throw new ve({
            docsPath: "/docs/actions/wallet/signMessage"
        });
    const s = pe(e);
    if (s.signMessage)
        return s.signMessage({
            message: r
        });
    const c = typeof r == "string" ? le(r) : r.raw instanceof Uint8Array ? ye(r.raw) : r.raw;
    return t.request({
        method: "personal_sign",
        params: [c, s.address]
    }, {
        retryCount: 0
    })
}
const ae = 256;
let te = ae, re;
function be(t=11) {
    if (!re || te + t > ae * 2) {
        re = "",
        te = 0;
        for (let e = 0; e < ae; e++)
            re += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return re.substring(te, te++ + t)
}
function We(t) {
    const {batch: e, chain: r, ccipRead: s, key: c="base", name: a="Base Client", type: i="base"} = t
      , u = t.experimental_blockTag ?? (typeof (r == null ? void 0 : r.experimental_preconfirmationTime) == "number" ? "pending" : void 0)
      , b = (r == null ? void 0 : r.blockTime) ?? 12e3
      , l = Math.min(Math.max(Math.floor(b / 2), 500), 4e3)
      , d = t.pollingInterval ?? l
      , h = t.cacheTime ?? d
      , n = t.account ? pe(t.account) : void 0
      , {config: o, request: p, value: w} = t.transport({
        chain: r,
        pollingInterval: d
    })
      , T = {
        ...o,
        ...w
    }
      , y = {
        account: n,
        batch: e,
        cacheTime: h,
        ccipRead: s,
        chain: r,
        key: c,
        name: a,
        pollingInterval: d,
        request: p,
        transport: T,
        type: i,
        uid: be(),
        ...u ? {
            experimental_blockTag: u
        } : {}
    };
    function v(R) {
        return oe => {
            const _ = oe(R);
            for (const se in y)
                delete _[se];
            const q = {
                ...R,
                ..._
            };
            return Object.assign(q, {
                extend: v(q)
            })
        }
    }
    return Object.assign(y, {
        extend: v(y)
    })
}
function fe({key: t, methods: e, name: r, request: s, retryCount: c=3, retryDelay: a=150, timeout: i, type: u}, b) {
    const l = be();
    return {
        config: {
            key: t,
            methods: e,
            name: r,
            request: s,
            retryCount: c,
            retryDelay: a,
            timeout: i,
            type: u
        },
        request: Te(s, {
            methods: e,
            retryCount: c,
            retryDelay: a,
            uid: l
        }),
        value: b
    }
}
function He(t, e={}) {
    const {key: r="custom", methods: s, name: c="Custom Provider", retryDelay: a} = e;
    return ({retryCount: i}) => fe({
        key: r,
        methods: s,
        name: c,
        request: t.request.bind(t),
        retryCount: e.retryCount ?? i,
        retryDelay: a,
        type: "custom"
    })
}
class Se extends g {
    constructor() {
        super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
            docsPath: "/docs/clients/intro",
            name: "UrlRequiredError"
        })
    }
}
function Je(t, e={}) {
    const {batch: r, fetchOptions: s, key: c="http", methods: a, name: i="HTTP JSON-RPC", onFetchRequest: u, onFetchResponse: b, retryDelay: l, raw: d} = e;
    return ({chain: h, retryCount: n, timeout: o}) => {
        const {batchSize: p=1e3, wait: w=0} = typeof r == "object" ? r : {}
          , T = e.retryCount ?? n
          , y = o ?? e.timeout ?? 1e4
          , v = t || (h == null ? void 0 : h.rpcUrls.default.http[0]);
        if (!v)
            throw new Se;
        const R = Ae(v, {
            fetchOptions: s,
            onRequest: u,
            onResponse: b,
            timeout: y
        });
        return fe({
            key: c,
            methods: a,
            name: i,
            async request({method: oe, params: _}) {
                const q = {
                    method: oe,
                    params: _
                }
                  , {schedule: se} = Ee({
                    id: v,
                    wait: w,
                    shouldSplitBatch(P) {
                        return P.length > p
                    },
                    fn: P => R.request({
                        body: P
                    }),
                    sort: (P, me) => P.id - me.id
                })
                  , we = async P => r ? se(P) : [await R.request({
                    body: P
                })]
                  , [{error: ne, result: ue}] = await we(q);
                if (d)
                    return {
                        error: ne,
                        result: ue
                    };
                if (ne)
                    throw new he({
                        body: q,
                        error: ne,
                        url: v
                    });
                return ue
            },
            retryCount: T,
            retryDelay: l,
            timeout: y,
            type: "http"
        }, {
            fetchOptions: s,
            url: v
        })
    }
}
export {ve as A, B as C, C as H, O as I, J as P, N as R, F as S, L as T, j as U, Ne as W, We as a, He as b, fe as c, De as d, Me as e, Ce as f, Z as g, Je as h, Ee as i, ie as j, de as k, Le as l, Ae as m, Se as n, he as o, pe as p, $e as q, Ie as r, x as s, I as t, z as u, Y as v, Oe as w, xe as x};
