var ve = t => {
    throw TypeError(t)
}
;
var te = (t, e, n) => e.has(t) || ve("Cannot " + n);
var _ = (t, e, n) => (te(t, e, "read from private field"),
n ? n.call(t) : e.get(t))
  , q = (t, e, n) => e.has(t) ? ve("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n)
  , L = (t, e, n, r) => (te(t, e, "write to private field"),
r ? r.call(t, n) : e.set(t, n),
n)
  , B = (t, e, n) => (te(t, e, "access private method"),
n);
import {g as H, n as be} from "./___vite-browser-external_commonjs-proxy-6ZTq1dOW.js";
import {p as ze, a as je, b as Fe, d as qe, S as ye, U as x, e as Le, f as Be, R as ne} from "./http-Cf2zGJXm.js";
import {O as Te} from "./farcaster-C92qEBt4.js";
import {r as E} from "./client-Ckw6QIE1.js";
import {S as Ke, s as He, h as we, g as Ve, n as Me, u as Ge, c as Je, e as Qe} from "./QueryClientProvider-DzLcd1Cv.js";
var D, N, M, R, W, Q, ae, Ee, Ze = (Ee = class extends Ke {
    constructor(e, n) {
        super();
        q(this, W);
        q(this, D);
        q(this, N);
        q(this, M);
        q(this, R);
        L(this, D, e),
        this.setOptions(n),
        this.bindMethods(),
        B(this, W, Q).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        var r;
        const n = this.options;
        this.options = _(this, D).defaultMutationOptions(e),
        He(this.options, n) || _(this, D).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: _(this, M),
            observer: this
        }),
        n != null && n.mutationKey && this.options.mutationKey && we(n.mutationKey) !== we(this.options.mutationKey) ? this.reset() : ((r = _(this, M)) == null ? void 0 : r.state.status) === "pending" && _(this, M).setOptions(this.options)
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || (e = _(this, M)) == null || e.removeObserver(this)
    }
    onMutationUpdate(e) {
        B(this, W, Q).call(this),
        B(this, W, ae).call(this, e)
    }
    getCurrentResult() {
        return _(this, N)
    }
    reset() {
        var e;
        (e = _(this, M)) == null || e.removeObserver(this),
        L(this, M, void 0),
        B(this, W, Q).call(this),
        B(this, W, ae).call(this)
    }
    mutate(e, n) {
        var r;
        return L(this, R, n),
        (r = _(this, M)) == null || r.removeObserver(this),
        L(this, M, _(this, D).getMutationCache().build(_(this, D), this.options)),
        _(this, M).addObserver(this),
        _(this, M).execute(e)
    }
}
,
D = new WeakMap,
N = new WeakMap,
M = new WeakMap,
R = new WeakMap,
W = new WeakSet,
Q = function() {
    var n;
    const e = ((n = _(this, M)) == null ? void 0 : n.state) ?? Ve();
    L(this, N, {
        ...e,
        isPending: e.status === "pending",
        isSuccess: e.status === "success",
        isError: e.status === "error",
        isIdle: e.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    })
}
,
ae = function(e) {
    Me.batch( () => {
        var n, r, s, o, c, a, u, i;
        if (_(this, R) && this.hasListeners()) {
            const f = _(this, N).variables
              , d = _(this, N).context;
            (e == null ? void 0 : e.type) === "success" ? ((r = (n = _(this, R)).onSuccess) == null || r.call(n, e.data, f, d),
            (o = (s = _(this, R)).onSettled) == null || o.call(s, e.data, null, f, d)) : (e == null ? void 0 : e.type) === "error" && ((a = (c = _(this, R)).onError) == null || a.call(c, e.error, f, d),
            (i = (u = _(this, R)).onSettled) == null || i.call(u, void 0, e.error, f, d))
        }
        this.listeners.forEach(f => {
            f(_(this, N))
        }
        )
    }
    )
}
,
Ee);
function me(t, e) {
    const n = Ge()
      , [r] = E.useState( () => new Ze(n,t));
    E.useEffect( () => {
        r.setOptions(t)
    }
    , [r, t]);
    const s = E.useSyncExternalStore(E.useCallback(c => r.subscribe(Me.batchCalls(c)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult())
      , o = E.useCallback( (c, a) => {
        r.mutate(c, a).catch(Je)
    }
    , [r]);
    if (s.error && Qe(r.options.throwOnError, [s.error]))
        throw s.error;
    return {
        ...s,
        mutate: o,
        mutateAsync: s.mutate
    }
}
function Xe(t, e, n) {
    const r = t[e.name];
    if (typeof r == "function")
        return r;
    const s = t[n];
    return typeof s == "function" ? s : o => e(t, o)
}
const Z = "2.20.2"
  , Ye = () => `@wagmi/core@${Z}`;
var Ae = function(t, e, n, r) {
    if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t)
}, Y, Pe;
let $ = class ue extends Error {
    get docsBaseUrl() {
        return "https://wagmi.sh/core"
    }
    get version() {
        return Ye()
    }
    constructor(e, n={}) {
        var o;
        super(),
        Y.add(this),
        Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WagmiCoreError"
        });
        const r = n.cause instanceof ue ? n.cause.details : (o = n.cause) != null && o.message ? n.cause.message : n.details
          , s = n.cause instanceof ue && n.cause.docsPath || n.docsPath;
        this.message = [e || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...s ? [`Docs: ${this.docsBaseUrl}${s}.html${n.docsSlug ? `#${n.docsSlug}` : ""}`] : [], ...r ? [`Details: ${r}`] : [], `Version: ${this.version}`].join(`
`),
        n.cause && (this.cause = n.cause),
        this.details = r,
        this.docsPath = s,
        this.metaMessages = n.metaMessages,
        this.shortMessage = e
    }
    walk(e) {
        return Ae(this, Y, "m", Pe).call(this, this, e)
    }
}
;
Y = new WeakSet,
Pe = function t(e, n) {
    return n != null && n(e) ? e : e.cause ? Ae(this, Y, "m", t).call(this, e.cause, n) : e
}
;
class de extends $ {
    constructor() {
        super("Chain not configured."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainNotConfiguredError"
        })
    }
}
class et extends $ {
    constructor() {
        super("Connector already connected."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorAlreadyConnectedError"
        })
    }
}
class tt extends $ {
    constructor() {
        super("Connector not connected."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorNotConnectedError"
        })
    }
}
class gn extends $ {
    constructor() {
        super("Connector not found."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorNotFoundError"
        })
    }
}
class nt extends $ {
    constructor({address: e, connector: n}) {
        super(`Account "${e}" not found for connector "${n.name}".`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorAccountNotFoundError"
        })
    }
}
class rt extends $ {
    constructor({connectionChainId: e, connectorChainId: n}) {
        super(`The current chain of the connector (id: ${n}) does not match the connection's chain (id: ${e}).`, {
            metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${e}`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorChainMismatchError"
        })
    }
}
class st extends $ {
    constructor({connector: e}) {
        super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details: ["During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.", "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.", "This error commonly occurs for connectors that asynchronously inject after reconnection has already started."].join(" ")
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ConnectorUnavailableReconnectingError"
        })
    }
}
async function ot(t, e) {
    var r;
    let n;
    if (typeof e.connector == "function" ? n = t._internal.connectors.setup(e.connector) : n = e.connector,
    n.uid === t.state.current)
        throw new et;
    try {
        t.setState(u => ({
            ...u,
            status: "connecting"
        })),
        n.emitter.emit("message", {
            type: "connecting"
        });
        const {connector: s, ...o} = e
          , c = await n.connect(o)
          , a = c.accounts;
        return n.emitter.off("connect", t._internal.events.connect),
        n.emitter.on("change", t._internal.events.change),
        n.emitter.on("disconnect", t._internal.events.disconnect),
        await ((r = t.storage) == null ? void 0 : r.setItem("recentConnectorId", n.id)),
        t.setState(u => ({
            ...u,
            connections: new Map(u.connections).set(n.uid, {
                accounts: a,
                chainId: c.chainId,
                connector: n
            }),
            current: n.uid,
            status: "connected"
        })),
        {
            accounts: a,
            chainId: c.chainId
        }
    } catch (s) {
        throw t.setState(o => ({
            ...o,
            status: o.current ? "connected" : "disconnected"
        })),
        s
    }
}
async function it(t, e={}) {
    let n;
    if (e.connector) {
        const {connector: i} = e;
        if (t.state.status === "reconnecting" && !i.getAccounts && !i.getChainId)
            throw new st({
                connector: i
            });
        const [f,d] = await Promise.all([i.getAccounts().catch(g => {
            if (e.account === null)
                return [];
            throw g
        }
        ), i.getChainId()]);
        n = {
            accounts: f,
            chainId: d,
            connector: i
        }
    } else
        n = t.state.connections.get(t.state.current);
    if (!n)
        throw new tt;
    const r = e.chainId ?? n.chainId
      , s = await n.connector.getChainId();
    if (s !== r)
        throw new rt({
            connectionChainId: r,
            connectorChainId: s
        });
    const o = n.connector;
    if (o.getClient)
        return o.getClient({
            chainId: r
        });
    const c = ze(e.account ?? n.accounts[0]);
    if (c && (c.address = H(c.address)),
    e.account && !n.accounts.some(i => i.toLowerCase() === c.address.toLowerCase()))
        throw new nt({
            address: c.address,
            connector: o
        });
    const a = t.chains.find(i => i.id === r)
      , u = await n.connector.getProvider({
        chainId: r
    });
    return je({
        account: c,
        chain: a,
        name: "Connector Client",
        transport: i => Fe(u)({
            ...i,
            retryCount: 0
        })
    })
}
async function ct(t, e={}) {
    var s, o;
    let n;
    if (e.connector)
        n = e.connector;
    else {
        const {connections: c, current: a} = t.state
          , u = c.get(a);
        n = u == null ? void 0 : u.connector
    }
    const r = t.state.connections;
    n && (await n.disconnect(),
    n.emitter.off("change", t._internal.events.change),
    n.emitter.off("disconnect", t._internal.events.disconnect),
    n.emitter.on("connect", t._internal.events.connect),
    r.delete(n.uid)),
    t.setState(c => {
        if (r.size === 0)
            return {
                ...c,
                connections: new Map,
                current: null,
                status: "disconnected"
            };
        const a = r.values().next().value;
        return {
            ...c,
            connections: new Map(r),
            current: a.connector.uid
        }
    }
    );
    {
        const c = t.state.current;
        if (!c)
            return;
        const a = (s = t.state.connections.get(c)) == null ? void 0 : s.connector;
        if (!a)
            return;
        await ((o = t.storage) == null ? void 0 : o.setItem("recentConnectorId", a.id))
    }
}
function $e(t) {
    const e = t.state.current
      , n = t.state.connections.get(e)
      , r = n == null ? void 0 : n.accounts
      , s = r == null ? void 0 : r[0]
      , o = t.chains.find(a => a.id === (n == null ? void 0 : n.chainId))
      , c = t.state.status;
    switch (c) {
    case "connected":
        return {
            address: s,
            addresses: r,
            chain: o,
            chainId: n == null ? void 0 : n.chainId,
            connector: n == null ? void 0 : n.connector,
            isConnected: !0,
            isConnecting: !1,
            isDisconnected: !1,
            isReconnecting: !1,
            status: c
        };
    case "reconnecting":
        return {
            address: s,
            addresses: r,
            chain: o,
            chainId: n == null ? void 0 : n.chainId,
            connector: n == null ? void 0 : n.connector,
            isConnected: !!s,
            isConnecting: !1,
            isDisconnected: !1,
            isReconnecting: !0,
            status: c
        };
    case "connecting":
        return {
            address: s,
            addresses: r,
            chain: o,
            chainId: n == null ? void 0 : n.chainId,
            connector: n == null ? void 0 : n.connector,
            isConnected: !1,
            isConnecting: !0,
            isDisconnected: !1,
            isReconnecting: !1,
            status: c
        };
    case "disconnected":
        return {
            address: void 0,
            addresses: void 0,
            chain: void 0,
            chainId: void 0,
            connector: void 0,
            isConnected: !1,
            isConnecting: !1,
            isDisconnected: !0,
            isReconnecting: !1,
            status: c
        }
    }
}
function Ce(t) {
    return t.state.chainId
}
function U(t, e) {
    if (t === e)
        return !0;
    if (t && e && typeof t == "object" && typeof e == "object") {
        if (t.constructor !== e.constructor)
            return !1;
        let n, r;
        if (Array.isArray(t) && Array.isArray(e)) {
            if (n = t.length,
            n !== e.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!U(t[r], e[r]))
                    return !1;
            return !0
        }
        if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === e.valueOf();
        if (t.toString !== Object.prototype.toString)
            return t.toString() === e.toString();
        const s = Object.keys(t);
        if (n = s.length,
        n !== Object.keys(e).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!Object.hasOwn(e, s[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const o = s[r];
            if (o && !U(t[o], e[o]))
                return !1
        }
        return !0
    }
    return t !== t && e !== e
}
let V = [];
function le(t) {
    const e = [...t.state.connections.values()];
    return t.state.status === "reconnecting" || U(V, e) ? V : (V = e,
    e)
}
let re = [];
function Se(t) {
    const e = t.connectors;
    return U(re, e) ? re : (re = e,
    e)
}
let se = !1;
async function at(t, e={}) {
    var i, f;
    if (se)
        return [];
    se = !0,
    t.setState(d => ({
        ...d,
        status: d.current ? "reconnecting" : "connecting"
    }));
    const n = [];
    if ((i = e.connectors) != null && i.length)
        for (const d of e.connectors) {
            let g;
            typeof d == "function" ? g = t._internal.connectors.setup(d) : g = d,
            n.push(g)
        }
    else
        n.push(...t.connectors);
    let r;
    try {
        r = await ((f = t.storage) == null ? void 0 : f.getItem("recentConnectorId"))
    } catch {}
    const s = {};
    for (const [,d] of t.state.connections)
        s[d.connector.id] = 1;
    r && (s[r] = 0);
    const o = Object.keys(s).length > 0 ? [...n].sort( (d, g) => (s[d.id] ?? 10) - (s[g.id] ?? 10)) : n;
    let c = !1;
    const a = []
      , u = [];
    for (const d of o) {
        const g = await d.getProvider().catch( () => {}
        );
        if (!g || u.some(p => p === g) || !await d.isAuthorized())
            continue;
        const C = await d.connect({
            isReconnecting: !0
        }).catch( () => null);
        C && (d.emitter.off("connect", t._internal.events.connect),
        d.emitter.on("change", t._internal.events.change),
        d.emitter.on("disconnect", t._internal.events.disconnect),
        t.setState(p => {
            const y = new Map(c ? p.connections : new Map).set(d.uid, {
                accounts: C.accounts,
                chainId: C.chainId,
                connector: d
            });
            return {
                ...p,
                current: c ? p.current : d.uid,
                connections: y
            }
        }
        ),
        a.push({
            accounts: C.accounts,
            chainId: C.chainId,
            connector: d
        }),
        u.push(g),
        c = !0)
    }
    return (t.state.status === "reconnecting" || t.state.status === "connecting") && (c ? t.setState(d => ({
        ...d,
        status: "connected"
    })) : t.setState(d => ({
        ...d,
        connections: new Map,
        current: null,
        status: "disconnected"
    }))),
    se = !1,
    a
}
async function ut(t, e) {
    const {account: n, connector: r, ...s} = e;
    let o;
    return typeof n == "object" && n.type === "local" ? o = t.getClient() : o = await it(t, {
        account: n,
        connector: r
    }),
    Xe(o, qe, "signMessage")({
        ...s,
        ...n ? {
            account: n
        } : {}
    })
}
class T extends $ {
    constructor() {
        super("Provider not found."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderNotFoundError"
        })
    }
}
class pn extends $ {
    constructor({connector: e}) {
        super(`"${e.name}" does not support programmatic chain switching.`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SwitchChainNotSupportedError"
        })
    }
}
function dt(t, e) {
    const {onChange: n} = e;
    return t.subscribe( () => $e(t), n, {
        equalityFn(r, s) {
            const {connector: o, ...c} = r
              , {connector: a, ...u} = s;
            return U(c, u) && (o == null ? void 0 : o.id) === (a == null ? void 0 : a.id) && (o == null ? void 0 : o.uid) === (a == null ? void 0 : a.uid)
        }
    })
}
function lt(t, e) {
    const {onChange: n} = e;
    return t.subscribe(r => r.chainId, n)
}
function ft(t, e) {
    const {onChange: n} = e;
    return t.subscribe( () => le(t), n, {
        equalityFn: U
    })
}
function ht(t, e) {
    const {onChange: n} = e;
    return t._internal.connectors.subscribe( (r, s) => {
        n(Object.values(r), s)
    }
    )
}
function vn(t) {
    return t
}
ge.type = "injected";
function ge(t={}) {
    const {shimDisconnect: e=!0, unstable_shimAsyncInject: n} = t;
    function r() {
        const u = t.target;
        if (typeof u == "function") {
            const i = u();
            if (i)
                return i
        }
        return typeof u == "object" ? u : typeof u == "string" ? {
            ...mt[u] ?? {
                id: u,
                name: `${u[0].toUpperCase()}${u.slice(1)}`,
                provider: `is${u[0].toUpperCase()}${u.slice(1)}`
            }
        } : {
            id: "injected",
            name: "Injected",
            provider(i) {
                return i == null ? void 0 : i.ethereum
            }
        }
    }
    let s, o, c, a;
    return u => ({
        get icon() {
            return r().icon
        },
        get id() {
            return r().id
        },
        get name() {
            return r().name
        },
        get supportsSimulation() {
            return !0
        },
        type: ge.type,
        async setup() {
            const i = await this.getProvider();
            i != null && i.on && t.target && (c || (c = this.onConnect.bind(this),
            i.on("connect", c)),
            s || (s = this.onAccountsChanged.bind(this),
            i.on("accountsChanged", s)))
        },
        async connect({chainId: i, isReconnecting: f}={}) {
            var b, C, p, y, j, O;
            const d = await this.getProvider();
            if (!d)
                throw new T;
            let g = [];
            if (f)
                g = await this.getAccounts().catch( () => []);
            else if (e)
                try {
                    g = (y = (p = (C = (b = (await d.request({
                        method: "wallet_requestPermissions",
                        params: [{
                            eth_accounts: {}
                        }]
                    }))[0]) == null ? void 0 : b.caveats) == null ? void 0 : C[0]) == null ? void 0 : p.value) == null ? void 0 : y.map(S => H(S)),
                    g.length > 0 && (g = await this.getAccounts())
                } catch (I) {
                    const S = I;
                    if (S.code === x.code)
                        throw new x(S);
                    if (S.code === ne.code)
                        throw S
                }
            try {
                !(g != null && g.length) && !f && (g = (await d.request({
                    method: "eth_requestAccounts"
                })).map(l => H(l))),
                c && (d.removeListener("connect", c),
                c = void 0),
                s || (s = this.onAccountsChanged.bind(this),
                d.on("accountsChanged", s)),
                o || (o = this.onChainChanged.bind(this),
                d.on("chainChanged", o)),
                a || (a = this.onDisconnect.bind(this),
                d.on("disconnect", a));
                let I = await this.getChainId();
                if (i && I !== i) {
                    const S = await this.switchChain({
                        chainId: i
                    }).catch(l => {
                        if (l.code === x.code)
                            throw l;
                        return {
                            id: I
                        }
                    }
                    );
                    I = (S == null ? void 0 : S.id) ?? I
                }
                return e && await ((j = u.storage) == null ? void 0 : j.removeItem(`${this.id}.disconnected`)),
                t.target || await ((O = u.storage) == null ? void 0 : O.setItem("injected.connected", !0)),
                {
                    accounts: g,
                    chainId: I
                }
            } catch (I) {
                const S = I;
                throw S.code === x.code ? new x(S) : S.code === ne.code ? new ne(S) : S
            }
        },
        async disconnect() {
            var f, d;
            const i = await this.getProvider();
            if (!i)
                throw new T;
            o && (i.removeListener("chainChanged", o),
            o = void 0),
            a && (i.removeListener("disconnect", a),
            a = void 0),
            c || (c = this.onConnect.bind(this),
            i.on("connect", c));
            try {
                await Be( () => i.request({
                    method: "wallet_revokePermissions",
                    params: [{
                        eth_accounts: {}
                    }]
                }), {
                    timeout: 100
                })
            } catch {}
            e && await ((f = u.storage) == null ? void 0 : f.setItem(`${this.id}.disconnected`, !0)),
            t.target || await ((d = u.storage) == null ? void 0 : d.removeItem("injected.connected"))
        },
        async getAccounts() {
            const i = await this.getProvider();
            if (!i)
                throw new T;
            return (await i.request({
                method: "eth_accounts"
            })).map(d => H(d))
        },
        async getChainId() {
            const i = await this.getProvider();
            if (!i)
                throw new T;
            const f = await i.request({
                method: "eth_chainId"
            });
            return Number(f)
        },
        async getProvider() {
            if (typeof window > "u")
                return;
            let i;
            const f = r();
            return typeof f.provider == "function" ? i = f.provider(window) : typeof f.provider == "string" ? i = X(window, f.provider) : i = f.provider,
            i && !i.removeListener && ("off"in i && typeof i.off == "function" ? i.removeListener = i.off : i.removeListener = () => {}
            ),
            i
        },
        async isAuthorized() {
            var i, f;
            try {
                if (e && await ((i = u.storage) == null ? void 0 : i.getItem(`${this.id}.disconnected`)) || !t.target && !await ((f = u.storage) == null ? void 0 : f.getItem("injected.connected")))
                    return !1;
                if (!await this.getProvider()) {
                    if (n !== void 0 && n !== !1) {
                        const C = async () => (typeof window < "u" && window.removeEventListener("ethereum#initialized", C),
                        !!await this.getProvider())
                          , p = typeof n == "number" ? n : 1e3;
                        if (await Promise.race([...typeof window < "u" ? [new Promise(j => window.addEventListener("ethereum#initialized", () => j(C()), {
                            once: !0
                        }))] : [], new Promise(j => setTimeout( () => j(C()), p))]))
                            return !0
                    }
                    throw new T
                }
                return !!(await Le( () => this.getAccounts())).length
            } catch {
                return !1
            }
        },
        async switchChain({addEthereumChainParameter: i, chainId: f}) {
            var C, p, y, j;
            const d = await this.getProvider();
            if (!d)
                throw new T;
            const g = u.chains.find(O => O.id === f);
            if (!g)
                throw new ye(new de);
            const b = new Promise(O => {
                const I = S => {
                    "chainId"in S && S.chainId === f && (u.emitter.off("change", I),
                    O())
                }
                ;
                u.emitter.on("change", I)
            }
            );
            try {
                return await Promise.all([d.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: be(f)
                    }]
                }).then(async () => {
                    await this.getChainId() === f && u.emitter.emit("change", {
                        chainId: f
                    })
                }
                ), b]),
                g
            } catch (O) {
                const I = O;
                if (I.code === 4902 || ((p = (C = I == null ? void 0 : I.data) == null ? void 0 : C.originalError) == null ? void 0 : p.code) === 4902)
                    try {
                        const {default: S, ...l} = g.blockExplorers ?? {};
                        let m;
                        i != null && i.blockExplorerUrls ? m = i.blockExplorerUrls : S && (m = [S.url, ...Object.values(l).map(v => v.url)]);
                        let h;
                        (y = i == null ? void 0 : i.rpcUrls) != null && y.length ? h = i.rpcUrls : h = [((j = g.rpcUrls.default) == null ? void 0 : j.http[0]) ?? ""];
                        const w = {
                            blockExplorerUrls: m,
                            chainId: be(f),
                            chainName: (i == null ? void 0 : i.chainName) ?? g.name,
                            iconUrls: i == null ? void 0 : i.iconUrls,
                            nativeCurrency: (i == null ? void 0 : i.nativeCurrency) ?? g.nativeCurrency,
                            rpcUrls: h
                        };
                        return await Promise.all([d.request({
                            method: "wallet_addEthereumChain",
                            params: [w]
                        }).then(async () => {
                            if (await this.getChainId() === f)
                                u.emitter.emit("change", {
                                    chainId: f
                                });
                            else
                                throw new x(new Error("User rejected switch after adding network."))
                        }
                        ), b]),
                        g
                    } catch (S) {
                        throw new x(S)
                    }
                throw I.code === x.code ? new x(I) : new ye(I)
            }
        },
        async onAccountsChanged(i) {
            var f;
            if (i.length === 0)
                this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
                const d = (await this.getChainId()).toString();
                this.onConnect({
                    chainId: d
                }),
                e && await ((f = u.storage) == null ? void 0 : f.removeItem(`${this.id}.disconnected`))
            } else
                u.emitter.emit("change", {
                    accounts: i.map(d => H(d))
                })
        },
        onChainChanged(i) {
            const f = Number(i);
            u.emitter.emit("change", {
                chainId: f
            })
        },
        async onConnect(i) {
            const f = await this.getAccounts();
            if (f.length === 0)
                return;
            const d = Number(i.chainId);
            u.emitter.emit("connect", {
                accounts: f,
                chainId: d
            });
            const g = await this.getProvider();
            g && (c && (g.removeListener("connect", c),
            c = void 0),
            s || (s = this.onAccountsChanged.bind(this),
            g.on("accountsChanged", s)),
            o || (o = this.onChainChanged.bind(this),
            g.on("chainChanged", o)),
            a || (a = this.onDisconnect.bind(this),
            g.on("disconnect", a)))
        },
        async onDisconnect(i) {
            const f = await this.getProvider();
            i && i.code === 1013 && f && (await this.getAccounts()).length || (u.emitter.emit("disconnect"),
            f && (o && (f.removeListener("chainChanged", o),
            o = void 0),
            a && (f.removeListener("disconnect", a),
            a = void 0),
            c || (c = this.onConnect.bind(this),
            f.on("connect", c))))
        }
    })
}
const mt = {
    coinbaseWallet: {
        id: "coinbaseWallet",
        name: "Coinbase Wallet",
        provider(t) {
            return t != null && t.coinbaseWalletExtension ? t.coinbaseWalletExtension : X(t, "isCoinbaseWallet")
        }
    },
    metaMask: {
        id: "metaMask",
        name: "MetaMask",
        provider(t) {
            return X(t, e => {
                if (!e.isMetaMask || e.isBraveWallet && !e._events && !e._state)
                    return !1;
                const n = ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPhantom", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isUniswapWallet", "isZerion"];
                for (const r of n)
                    if (e[r])
                        return !1;
                return !0
            }
            )
        }
    },
    phantom: {
        id: "phantom",
        name: "Phantom",
        provider(t) {
            var e, n;
            return (e = t == null ? void 0 : t.phantom) != null && e.ethereum ? (n = t.phantom) == null ? void 0 : n.ethereum : X(t, "isPhantom")
        }
    }
};
function X(t, e) {
    function n(s) {
        return typeof e == "function" ? e(s) : typeof e == "string" ? s[e] : !0
    }
    const r = t.ethereum;
    if (r != null && r.providers)
        return r.providers.find(s => n(s));
    if (r && n(r))
        return r
}
function gt(t) {
    if (typeof window > "u")
        return;
    const e = n => t(n.detail);
    return window.addEventListener("eip6963:announceProvider", e),
    window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),
    () => window.removeEventListener("eip6963:announceProvider", e)
}
function pt() {
    const t = new Set;
    let e = [];
    const n = () => gt(s => {
        e.some( ({info: o}) => o.uuid === s.info.uuid) || (e = [...e, s],
        t.forEach(o => o(e, {
            added: [s]
        })))
    }
    );
    let r = n();
    return {
        _listeners() {
            return t
        },
        clear() {
            t.forEach(s => s([], {
                removed: [...e]
            })),
            e = []
        },
        destroy() {
            this.clear(),
            t.clear(),
            r == null || r()
        },
        findProvider({rdns: s}) {
            return e.find(o => o.info.rdns === s)
        },
        getProviders() {
            return e
        },
        reset() {
            this.clear(),
            r == null || r(),
            r = n()
        },
        subscribe(s, {emitImmediately: o}={}) {
            return t.add(s),
            o && s(e, {
                added: e
            }),
            () => t.delete(s)
        }
    }
}
const vt = t => (e, n, r) => {
    const s = r.subscribe;
    return r.subscribe = (c, a, u) => {
        let i = c;
        if (a) {
            const f = (u == null ? void 0 : u.equalityFn) || Object.is;
            let d = c(r.getState());
            i = g => {
                const b = c(g);
                if (!f(d, b)) {
                    const C = d;
                    a(d = b, C)
                }
            }
            ,
            u != null && u.fireImmediately && a(d, d)
        }
        return s(i)
    }
    ,
    t(e, n, r)
}
  , bt = vt;
function yt(t, e) {
    let n;
    try {
        n = t()
    } catch {
        return
    }
    return {
        getItem: s => {
            var o;
            const c = u => u === null ? null : JSON.parse(u, void 0)
              , a = (o = n.getItem(s)) != null ? o : null;
            return a instanceof Promise ? a.then(c) : c(a)
        }
        ,
        setItem: (s, o) => n.setItem(s, JSON.stringify(o, void 0)),
        removeItem: s => n.removeItem(s)
    }
}
const fe = t => e => {
    try {
        const n = t(e);
        return n instanceof Promise ? n : {
            then(r) {
                return fe(r)(n)
            },
            catch(r) {
                return this
            }
        }
    } catch (n) {
        return {
            then(r) {
                return this
            },
            catch(r) {
                return fe(r)(n)
            }
        }
    }
}
  , wt = (t, e) => (n, r, s) => {
    let o = {
        storage: yt( () => localStorage),
        partialize: p => p,
        version: 0,
        merge: (p, y) => ({
            ...y,
            ...p
        }),
        ...e
    }
      , c = !1;
    const a = new Set
      , u = new Set;
    let i = o.storage;
    if (!i)
        return t( (...p) => {
            console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),
            n(...p)
        }
        , r, s);
    const f = () => {
        const p = o.partialize({
            ...r()
        });
        return i.setItem(o.name, {
            state: p,
            version: o.version
        })
    }
      , d = s.setState;
    s.setState = (p, y) => {
        d(p, y),
        f()
    }
    ;
    const g = t( (...p) => {
        n(...p),
        f()
    }
    , r, s);
    s.getInitialState = () => g;
    let b;
    const C = () => {
        var p, y;
        if (!i)
            return;
        c = !1,
        a.forEach(O => {
            var I;
            return O((I = r()) != null ? I : g)
        }
        );
        const j = ((y = o.onRehydrateStorage) == null ? void 0 : y.call(o, (p = r()) != null ? p : g)) || void 0;
        return fe(i.getItem.bind(i))(o.name).then(O => {
            if (O)
                if (typeof O.version == "number" && O.version !== o.version) {
                    if (o.migrate)
                        return [!0, o.migrate(O.state, O.version)];
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                } else
                    return [!1, O.state];
            return [!1, void 0]
        }
        ).then(O => {
            var I;
            const [S,l] = O;
            if (b = o.merge(l, (I = r()) != null ? I : g),
            n(b, !0),
            S)
                return f()
        }
        ).then( () => {
            j == null || j(b, void 0),
            b = r(),
            c = !0,
            u.forEach(O => O(b))
        }
        ).catch(O => {
            j == null || j(void 0, O)
        }
        )
    }
    ;
    return s.persist = {
        setOptions: p => {
            o = {
                ...o,
                ...p
            },
            p.storage && (i = p.storage)
        }
        ,
        clearStorage: () => {
            i == null || i.removeItem(o.name)
        }
        ,
        getOptions: () => o,
        rehydrate: () => C(),
        hasHydrated: () => c,
        onHydrate: p => (a.add(p),
        () => {
            a.delete(p)
        }
        ),
        onFinishHydration: p => (u.add(p),
        () => {
            u.delete(p)
        }
        )
    },
    o.skipHydration || C(),
    b || g
}
  , Ct = wt
  , Ie = t => {
    let e;
    const n = new Set
      , r = (i, f) => {
        const d = typeof i == "function" ? i(e) : i;
        if (!Object.is(d, e)) {
            const g = e;
            e = f ?? (typeof d != "object" || d === null) ? d : Object.assign({}, e, d),
            n.forEach(b => b(e, g))
        }
    }
      , s = () => e
      , a = {
        setState: r,
        getState: s,
        getInitialState: () => u,
        subscribe: i => (n.add(i),
        () => n.delete(i))
    }
      , u = e = t(r, s, a);
    return a
}
  , oe = t => t ? Ie(t) : Ie;
class St {
    constructor(e) {
        Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }),
        Object.defineProperty(this, "_emitter", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Te
        })
    }
    on(e, n) {
        this._emitter.on(e, n)
    }
    once(e, n) {
        this._emitter.once(e, n)
    }
    off(e, n) {
        this._emitter.off(e, n)
    }
    emit(e, ...n) {
        const r = n[0];
        this._emitter.emit(e, {
            uid: this.uid,
            ...r
        })
    }
    listenerCount(e) {
        return this._emitter.listenerCount(e)
    }
}
function It(t) {
    return new St(t)
}
function Ot(t, e) {
    return JSON.parse(t, (n, r) => {
        let s = r;
        return (s == null ? void 0 : s.__type) === "bigint" && (s = BigInt(s.value)),
        (s == null ? void 0 : s.__type) === "Map" && (s = new Map(s.value)),
        (e == null ? void 0 : e(n, s)) ?? s
    }
    )
}
function Oe(t, e) {
    return t.slice(0, e).join(".") || "."
}
function _e(t, e) {
    const {length: n} = t;
    for (let r = 0; r < n; ++r)
        if (t[r] === e)
            return r + 1;
    return 0
}
function _t(t, e) {
    const n = typeof t == "function"
      , r = typeof e == "function"
      , s = []
      , o = [];
    return function(a, u) {
        if (typeof u == "object")
            if (s.length) {
                const i = _e(s, this);
                i === 0 ? s[s.length] = this : (s.splice(i),
                o.splice(i)),
                o[o.length] = a;
                const f = _e(s, u);
                if (f !== 0)
                    return r ? e.call(this, a, u, Oe(o, f)) : `[ref=${Oe(o, f)}]`
            } else
                s[0] = u,
                o[0] = a;
        return n ? t.call(this, a, u) : u
    }
}
function Et(t, e, n, r) {
    return JSON.stringify(t, _t( (s, o) => {
        let c = o;
        return typeof c == "bigint" && (c = {
            __type: "bigint",
            value: o.toString()
        }),
        c instanceof Map && (c = {
            __type: "Map",
            value: Array.from(o.entries())
        }),
        (e == null ? void 0 : e(s, c)) ?? c
    }
    , r), n ?? void 0)
}
function jt(t) {
    const {deserialize: e=Ot, key: n="wagmi", serialize: r=Et, storage: s=ke} = t;
    function o(c) {
        return c instanceof Promise ? c.then(a => a).catch( () => null) : c
    }
    return {
        ...s,
        key: n,
        async getItem(c, a) {
            const u = s.getItem(`${n}.${c}`)
              , i = await o(u);
            return i ? e(i) ?? null : a ?? null
        },
        async setItem(c, a) {
            const u = `${n}.${c}`;
            a === null ? await o(s.removeItem(u)) : await o(s.setItem(u, r(a)))
        },
        async removeItem(c) {
            await o(s.removeItem(`${n}.${c}`))
        }
    }
}
const ke = {
    getItem: () => null,
    setItem: () => {}
    ,
    removeItem: () => {}
};
function Mt() {
    const t = typeof window < "u" && window.localStorage ? window.localStorage : ke;
    return {
        getItem(e) {
            return t.getItem(e)
        },
        removeItem(e) {
            t.removeItem(e)
        },
        setItem(e, n) {
            try {
                t.setItem(e, n)
            } catch {}
        }
    }
}
const he = 256;
let G = he, J;
function At(t=11) {
    if (!J || G + t > he * 2) {
        J = "",
        G = 0;
        for (let e = 0; e < he; e++)
            J += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return J.substring(G, G++ + t)
}
function bn(t) {
    const {multiInjectedProviderDiscovery: e=!0, storage: n=jt({
        storage: Mt()
    }), syncConnectedChain: r=!0, ssr: s=!1, ...o} = t
      , c = typeof window < "u" && e ? pt() : void 0
      , a = oe( () => o.chains)
      , u = oe( () => {
        const l = []
          , m = new Set;
        for (const h of o.connectors ?? []) {
            const w = i(h);
            if (l.push(w),
            !s && w.rdns) {
                const v = typeof w.rdns == "string" ? [w.rdns] : w.rdns;
                for (const A of v)
                    m.add(A)
            }
        }
        if (!s && c) {
            const h = c.getProviders();
            for (const w of h)
                m.has(w.info.rdns) || l.push(i(f(w)))
        }
        return l
    }
    );
    function i(l) {
        var w;
        const m = It(At())
          , h = {
            ...l({
                emitter: m,
                chains: a.getState(),
                storage: n,
                transports: o.transports
            }),
            emitter: m,
            uid: m.uid
        };
        return m.on("connect", I),
        (w = h.setup) == null || w.call(h),
        h
    }
    function f(l) {
        const {info: m} = l
          , h = l.provider;
        return ge({
            target: {
                ...m,
                id: m.rdns,
                provider: h
            }
        })
    }
    const d = new Map;
    function g(l={}) {
        const m = l.chainId ?? y.getState().chainId
          , h = a.getState().find(v => v.id === m);
        if (l.chainId && !h)
            throw new de;
        {
            const v = d.get(y.getState().chainId);
            if (v && !h)
                return v;
            if (!h)
                throw new de
        }
        {
            const v = d.get(m);
            if (v)
                return v
        }
        let w;
        if (o.client)
            w = o.client({
                chain: h
            });
        else {
            const v = h.id
              , A = a.getState().map(P => P.id)
              , k = {}
              , pe = Object.entries(o);
            for (const [P,F] of pe)
                if (!(P === "chains" || P === "client" || P === "connectors" || P === "transports"))
                    if (typeof F == "object")
                        if (v in F)
                            k[P] = F[v];
                        else {
                            if (A.some(Ue => Ue in F))
                                continue;
                            k[P] = F
                        }
                    else
                        k[P] = F;
            w = je({
                ...k,
                chain: h,
                batch: k.batch ?? {
                    multicall: !0
                },
                transport: P => o.transports[v]({
                    ...P,
                    connectors: u
                })
            })
        }
        return d.set(m, w),
        w
    }
    function b() {
        return {
            chainId: a.getState()[0].id,
            connections: new Map,
            current: null,
            status: "disconnected"
        }
    }
    let C;
    const p = "0.0.0-canary-";
    Z.startsWith(p) ? C = Number.parseInt(Z.replace(p, "")) : C = Number.parseInt(Z.split(".")[0] ?? "0");
    const y = oe(bt(n ? Ct(b, {
        migrate(l, m) {
            if (m === C)
                return l;
            const h = b()
              , w = j(l, h.chainId);
            return {
                ...h,
                chainId: w
            }
        },
        name: "store",
        partialize(l) {
            return {
                connections: {
                    __type: "Map",
                    value: Array.from(l.connections.entries()).map( ([m,h]) => {
                        const {id: w, name: v, type: A, uid: k} = h.connector;
                        return [m, {
                            ...h,
                            connector: {
                                id: w,
                                name: v,
                                type: A,
                                uid: k
                            }
                        }]
                    }
                    )
                },
                chainId: l.chainId,
                current: l.current
            }
        },
        merge(l, m) {
            typeof l == "object" && l && "status"in l && delete l.status;
            const h = j(l, m.chainId);
            return {
                ...m,
                ...l,
                chainId: h
            }
        },
        skipHydration: s,
        storage: n,
        version: C
    }) : b));
    y.setState(b());
    function j(l, m) {
        return l && typeof l == "object" && "chainId"in l && typeof l.chainId == "number" && a.getState().some(h => h.id === l.chainId) ? l.chainId : m
    }
    r && y.subscribe( ({connections: l, current: m}) => {
        var h;
        return m ? (h = l.get(m)) == null ? void 0 : h.chainId : void 0
    }
    , l => {
        if (a.getState().some(h => h.id === l))
            return y.setState(h => ({
                ...h,
                chainId: l ?? h.chainId
            }))
    }
    ),
    c == null || c.subscribe(l => {
        const m = new Set
          , h = new Set;
        for (const v of u.getState())
            if (m.add(v.id),
            v.rdns) {
                const A = typeof v.rdns == "string" ? [v.rdns] : v.rdns;
                for (const k of A)
                    h.add(k)
            }
        const w = [];
        for (const v of l) {
            if (h.has(v.info.rdns))
                continue;
            const A = i(f(v));
            m.has(A.id) || w.push(A)
        }
        n && !y.persist.hasHydrated() || u.setState(v => [...v, ...w], !0)
    }
    );
    function O(l) {
        y.setState(m => {
            const h = m.connections.get(l.uid);
            return h ? {
                ...m,
                connections: new Map(m.connections).set(l.uid, {
                    accounts: l.accounts ?? h.accounts,
                    chainId: l.chainId ?? h.chainId,
                    connector: h.connector
                })
            } : m
        }
        )
    }
    function I(l) {
        y.getState().status === "connecting" || y.getState().status === "reconnecting" || y.setState(m => {
            const h = u.getState().find(w => w.uid === l.uid);
            return h ? (h.emitter.listenerCount("connect") && h.emitter.off("connect", O),
            h.emitter.listenerCount("change") || h.emitter.on("change", O),
            h.emitter.listenerCount("disconnect") || h.emitter.on("disconnect", S),
            {
                ...m,
                connections: new Map(m.connections).set(l.uid, {
                    accounts: l.accounts,
                    chainId: l.chainId,
                    connector: h
                }),
                current: l.uid,
                status: "connected"
            }) : m
        }
        )
    }
    function S(l) {
        y.setState(m => {
            const h = m.connections.get(l.uid);
            if (h) {
                const v = h.connector;
                v.emitter.listenerCount("change") && h.connector.emitter.off("change", O),
                v.emitter.listenerCount("disconnect") && h.connector.emitter.off("disconnect", S),
                v.emitter.listenerCount("connect") || h.connector.emitter.on("connect", I)
            }
            if (m.connections.delete(l.uid),
            m.connections.size === 0)
                return {
                    ...m,
                    connections: new Map,
                    current: null,
                    status: "disconnected"
                };
            const w = m.connections.values().next().value;
            return {
                ...m,
                connections: new Map(m.connections),
                current: w.connector.uid
            }
        }
        )
    }
    return {
        get chains() {
            return a.getState()
        },
        get connectors() {
            return u.getState()
        },
        storage: n,
        getClient: g,
        get state() {
            return y.getState()
        },
        setState(l) {
            let m;
            typeof l == "function" ? m = l(y.getState()) : m = l;
            const h = b();
            typeof m != "object" && (m = h),
            Object.keys(h).some(v => !(v in m)) && (m = h),
            y.setState(m, !0)
        },
        subscribe(l, m, h) {
            return y.subscribe(l, m, h ? {
                ...h,
                fireImmediately: h.emitImmediately
            } : void 0)
        },
        _internal: {
            mipd: c,
            async revalidate() {
                const l = y.getState()
                  , m = l.connections;
                let h = l.current;
                for (const [,w] of m) {
                    const v = w.connector;
                    v.isAuthorized && await v.isAuthorized() || (m.delete(v.uid),
                    h === v.uid && (h = null))
                }
                y.setState(w => ({
                    ...w,
                    connections: m,
                    current: h
                }))
            },
            store: y,
            ssr: !!s,
            syncConnectedChain: r,
            transports: o.transports,
            chains: {
                setState(l) {
                    const m = typeof l == "function" ? l(a.getState()) : l;
                    if (m.length !== 0)
                        return a.setState(m, !0)
                },
                subscribe(l) {
                    return a.subscribe(l)
                }
            },
            connectors: {
                providerDetailToConnector: f,
                setup: i,
                setState(l) {
                    return u.setState(typeof l == "function" ? l(u.getState()) : l, !0)
                },
                subscribe(l) {
                    return u.subscribe(l)
                }
            },
            events: {
                change: O,
                connect: I,
                disconnect: S
            }
        }
    }
}
function Pt(t, e) {
    const {initialState: n, reconnectOnMount: r} = e;
    return n && !t._internal.store.persist.hasHydrated() && t.setState({
        ...n,
        chainId: t.chains.some(s => s.id === n.chainId) ? n.chainId : t.chains[0].id,
        connections: r ? n.connections : new Map,
        status: r ? "reconnecting" : "disconnected"
    }),
    {
        async onMount() {
            t._internal.ssr && (await t._internal.store.persist.rehydrate(),
            t._internal.mipd && t._internal.connectors.setState(s => {
                var u;
                const o = new Set;
                for (const i of s ?? [])
                    if (i.rdns) {
                        const f = Array.isArray(i.rdns) ? i.rdns : [i.rdns];
                        for (const d of f)
                            o.add(d)
                    }
                const c = []
                  , a = ((u = t._internal.mipd) == null ? void 0 : u.getProviders()) ?? [];
                for (const i of a) {
                    if (o.has(i.info.rdns))
                        continue;
                    const f = t._internal.connectors.providerDetailToConnector(i)
                      , d = t._internal.connectors.setup(f);
                    c.push(d)
                }
                return [...s, ...c]
            }
            )),
            r ? at(t) : t.storage && t.setState(s => ({
                ...s,
                connections: new Map
            }))
        }
    }
}
function $t(t) {
    const {children: e, config: n, initialState: r, reconnectOnMount: s=!0} = t
      , {onMount: o} = Pt(n, {
        initialState: r,
        reconnectOnMount: s
    });
    n._internal.ssr || o();
    const c = E.useRef(!0);
    return E.useEffect( () => {
        if (c.current && n._internal.ssr)
            return o(),
            () => {
                c.current = !1
            }
    }
    , []),
    e
}
const xe = E.createContext(void 0);
function yn(t) {
    const {children: e, config: n} = t
      , r = {
        value: n
    };
    return E.createElement($t, t, E.createElement(xe.Provider, r, e))
}
const kt = "2.16.8"
  , xt = () => `wagmi@${kt}`;
class Rt extends $ {
    constructor() {
        super(...arguments),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WagmiError"
        })
    }
    get docsBaseUrl() {
        return "https://wagmi.sh/react"
    }
    get version() {
        return xt()
    }
}
class Wt extends Rt {
    constructor() {
        super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider"
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WagmiProviderNotFoundError"
        })
    }
}
function z(t={}) {
    const e = t.config ?? E.useContext(xe);
    if (!e)
        throw new Wt;
    return e
}
var Re = {
    exports: {}
}
  , We = {}
  , De = {
    exports: {}
}
  , Ne = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K = E;
function Dt(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Nt = typeof Object.is == "function" ? Object.is : Dt
  , Ut = K.useState
  , zt = K.useEffect
  , Ft = K.useLayoutEffect
  , qt = K.useDebugValue;
function Lt(t, e) {
    var n = e()
      , r = Ut({
        inst: {
            value: n,
            getSnapshot: e
        }
    })
      , s = r[0].inst
      , o = r[1];
    return Ft(function() {
        s.value = n,
        s.getSnapshot = e,
        ie(s) && o({
            inst: s
        })
    }, [t, n, e]),
    zt(function() {
        return ie(s) && o({
            inst: s
        }),
        t(function() {
            ie(s) && o({
                inst: s
            })
        })
    }, [t]),
    qt(n),
    n
}
function ie(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Nt(t, n)
    } catch {
        return !0
    }
}
function Bt(t, e) {
    return e()
}
var Tt = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Bt : Lt;
Ne.useSyncExternalStore = K.useSyncExternalStore !== void 0 ? K.useSyncExternalStore : Tt;
De.exports = Ne;
var Kt = De.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee = E
  , Ht = Kt;
function Vt(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Gt = typeof Object.is == "function" ? Object.is : Vt
  , Jt = Ht.useSyncExternalStore
  , Qt = ee.useRef
  , Zt = ee.useEffect
  , Xt = ee.useMemo
  , Yt = ee.useDebugValue;
We.useSyncExternalStoreWithSelector = function(t, e, n, r, s) {
    var o = Qt(null);
    if (o.current === null) {
        var c = {
            hasValue: !1,
            value: null
        };
        o.current = c
    } else
        c = o.current;
    o = Xt(function() {
        function u(b) {
            if (!i) {
                if (i = !0,
                f = b,
                b = r(b),
                s !== void 0 && c.hasValue) {
                    var C = c.value;
                    if (s(C, b))
                        return d = C
                }
                return d = b
            }
            if (C = d,
            Gt(f, b))
                return C;
            var p = r(b);
            return s !== void 0 && s(C, p) ? (f = b,
            C) : (f = b,
            d = p)
        }
        var i = !1, f, d, g = n === void 0 ? null : n;
        return [function() {
            return u(e())
        }
        , g === null ? void 0 : function() {
            return u(g())
        }
        ]
    }, [e, n, r, s]);
    var a = Jt(t, o[0], o[1]);
    return Zt(function() {
        c.hasValue = !0,
        c.value = a
    }, [a]),
    Yt(a),
    a
}
;
Re.exports = We;
var en = Re.exports;
const ce = t => typeof t == "object" && !Array.isArray(t);
function tn(t, e, n=e, r=U) {
    const s = E.useRef([])
      , o = en.useSyncExternalStoreWithSelector(t, e, n, c => c, (c, a) => {
        if (ce(c) && ce(a) && s.current.length) {
            for (const u of s.current)
                if (!r(c[u], a[u]))
                    return !1;
            return !0
        }
        return r(c, a)
    }
    );
    return E.useMemo( () => {
        if (ce(o)) {
            const c = {
                ...o
            };
            let a = {};
            for (const [u,i] of Object.entries(c))
                a = {
                    ...a,
                    [u]: {
                        configurable: !1,
                        enumerable: !0,
                        get: () => (s.current.includes(u) || s.current.push(u),
                        i)
                    }
                };
            return Object.defineProperties(c, a),
            c
        }
        return o
    }
    , [o])
}
function wn(t={}) {
    const e = z(t);
    return tn(n => dt(e, {
        onChange: n
    }), () => $e(e))
}
function nn(t) {
    return {
        mutationFn(e) {
            return ot(t, e)
        },
        mutationKey: ["connect"]
    }
}
function rn(t) {
    return {
        mutationFn(e) {
            return ct(t, e)
        },
        mutationKey: ["disconnect"]
    }
}
function sn(t) {
    return {
        mutationFn(e) {
            return ut(t, e)
        },
        mutationKey: ["signMessage"]
    }
}
function Cn(t={}) {
    const e = z(t);
    return E.useSyncExternalStore(n => lt(e, {
        onChange: n
    }), () => Ce(e), () => Ce(e))
}
function on(t={}) {
    const e = z(t);
    return E.useSyncExternalStore(n => ht(e, {
        onChange: n
    }), () => Se(e), () => Se(e))
}
function Sn(t={}) {
    const {mutation: e} = t
      , n = z(t)
      , r = nn(n)
      , {mutate: s, mutateAsync: o, ...c} = me({
        ...e,
        ...r
    });
    return E.useEffect( () => n.subscribe( ({status: a}) => a, (a, u) => {
        u === "connected" && a === "disconnected" && c.reset()
    }
    ), [n, c.reset]),
    {
        ...c,
        connect: s,
        connectAsync: o,
        connectors: on({
            config: n
        })
    }
}
function cn(t={}) {
    const e = z(t);
    return E.useSyncExternalStore(n => ft(e, {
        onChange: n
    }), () => le(e), () => le(e))
}
function In(t={}) {
    const {mutation: e} = t
      , n = z(t)
      , r = rn(n)
      , {mutate: s, mutateAsync: o, ...c} = me({
        ...e,
        ...r
    });
    return {
        ...c,
        connectors: cn({
            config: n
        }).map(a => a.connector),
        disconnect: s,
        disconnectAsync: o
    }
}
function On(t={}) {
    const {mutation: e} = t
      , n = z(t)
      , r = sn(n)
      , {mutate: s, mutateAsync: o, ...c} = me({
        ...e,
        ...r
    });
    return {
        ...c,
        signMessage: s,
        signMessageAsync: o
    }
}
export {gn as A, Rt as B, tt as C, st as D, jt as E, ke as F, Et as G, $t as H, kt as I, T as P, pn as S, yn as W, Sn as a, In as b, bn as c, On as d, Cn as e, it as f, Xe as g, U as h, ge as i, $e as j, de as k, vn as l, Ot as m, z as n, en as o, me as p, cn as q, at as r, xe as s, Wt as t, wn as u, on as v, dt as w, nt as x, et as y, rt as z};
