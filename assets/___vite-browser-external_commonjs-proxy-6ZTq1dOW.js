import {f as Re, J as _e, $ as qe} from "./farcaster-C92qEBt4.js";
function Ke(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var pe = {
    exports: {}
}, f = pe.exports = {}, g, x;
function Z() {
    throw new Error("setTimeout has not been defined")
}
function ee() {
    throw new Error("clearTimeout has not been defined")
}
(function() {
    try {
        typeof setTimeout == "function" ? g = setTimeout : g = Z
    } catch {
        g = Z
    }
    try {
        typeof clearTimeout == "function" ? x = clearTimeout : x = ee
    } catch {
        x = ee
    }
}
)();
function be(e) {
    if (g === setTimeout)
        return setTimeout(e, 0);
    if ((g === Z || !g) && setTimeout)
        return g = setTimeout,
        setTimeout(e, 0);
    try {
        return g(e, 0)
    } catch {
        try {
            return g.call(null, e, 0)
        } catch {
            return g.call(this, e, 0)
        }
    }
}
function We(e) {
    if (x === clearTimeout)
        return clearTimeout(e);
    if ((x === ee || !x) && clearTimeout)
        return x = clearTimeout,
        clearTimeout(e);
    try {
        return x(e)
    } catch {
        try {
            return x.call(null, e)
        } catch {
            return x.call(this, e)
        }
    }
}
var w = [], S = !1, G, K = -1;
function Ye() {
    !S || !G || (S = !1,
    G.length ? w = G.concat(w) : K = -1,
    w.length && ge())
}
function ge() {
    if (!S) {
        var e = be(Ye);
        S = !0;
        for (var t = w.length; t; ) {
            for (G = w,
            w = []; ++K < t; )
                G && G[K].run();
            K = -1,
            t = w.length
        }
        G = null,
        S = !1,
        We(e)
    }
}
f.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
    w.push(new xe(e,t)),
    w.length === 1 && !S && be(ge)
}
;
function xe(e, t) {
    this.fun = e,
    this.array = t
}
xe.prototype.run = function() {
    this.fun.apply(null, this.array)
}
;
f.title = "browser";
f.browser = !0;
f.env = {};
f.argv = [];
f.version = "";
f.versions = {};
function v() {}
f.on = v;
f.addListener = v;
f.once = v;
f.off = v;
f.removeListener = v;
f.removeAllListeners = v;
f.emit = v;
f.prependListener = v;
f.prependOnceListener = v;
f.listeners = function(e) {
    return []
}
;
f.binding = function(e) {
    throw new Error("process.binding is not supported")
}
;
f.cwd = function() {
    return "/"
}
;
f.chdir = function(e) {
    throw new Error("process.chdir is not supported")
}
;
f.umask = function() {
    return 0
}
;
var Qe = pe.exports;
const vn = Ke(Qe);
function ye(e) {
    return {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        ...e
    }
}
const we = "2.33.3";
let V = {
    getDocsUrl: ({docsBaseUrl: e, docsPath: t="", docsSlug: n}) => t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
    version: `viem@${we}`
};
class a extends Error {
    constructor(t, n={}) {
        var u;
        const s = ( () => {
            var c;
            return n.cause instanceof a ? n.cause.details : (c = n.cause) != null && c.message ? n.cause.message : n.details
        }
        )()
          , r = n.cause instanceof a && n.cause.docsPath || n.docsPath
          , i = (u = V.getDocsUrl) == null ? void 0 : u.call(V, {
            ...n,
            docsPath: r
        })
          , o = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...i ? [`Docs: ${i}`] : [], ...s ? [`Details: ${s}`] : [], ...V.version ? [`Version: ${V.version}`] : []].join(`
`);
        super(o, n.cause ? {
            cause: n.cause
        } : void 0),
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
        Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError"
        }),
        this.details = s,
        this.docsPath = r,
        this.metaMessages = n.metaMessages,
        this.name = n.name ?? this.name,
        this.shortMessage = t,
        this.version = we
    }
    walk(t) {
        return Pe(this, t)
    }
}
function Pe(e, t) {
    return t != null && t(e) ? e : e && typeof e == "object" && "cause"in e && e.cause !== void 0 ? Pe(e.cause, t) : t ? null : e
}
class Je extends a {
    constructor({max: t, min: n, signed: s, size: r, value: i}) {
        super(`Number "${i}" is not in safe ${r ? `${r * 8}-bit ${s ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`, {
            name: "IntegerOutOfRangeError"
        })
    }
}
class Tn extends a {
    constructor(t) {
        super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: "InvalidBytesBooleanError"
        })
    }
}
class Xe extends a {
    constructor(t) {
        super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, {
            name: "InvalidHexBooleanError"
        })
    }
}
class Ze extends a {
    constructor({givenSize: t, maxSize: n}) {
        super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError"
        })
    }
}
function R(e, {strict: t=!0}={}) {
    return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x")
}
function $(e) {
    return R(e, {
        strict: !1
    }) ? Math.ceil((e.length - 2) / 2) : e.length
}
function T(e, {dir: t="left"}={}) {
    let n = typeof e == "string" ? e.replace("0x", "") : e
      , s = 0;
    for (let r = 0; r < n.length - 1 && n[t === "left" ? r : n.length - r - 1].toString() === "0"; r++)
        s++;
    return n = t === "left" ? n.slice(s) : n.slice(0, n.length - s),
    typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`),
    `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n
}
class ve extends a {
    constructor({offset: t, position: n, size: s}) {
        super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${s}).`, {
            name: "SliceOffsetOutOfBoundsError"
        })
    }
}
class Te extends a {
    constructor({size: t, targetSize: n, type: s}) {
        super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, {
            name: "SizeExceedsPaddingSizeError"
        })
    }
}
class $n extends a {
    constructor({size: t, targetSize: n, type: s}) {
        super(`${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()} is expected to be ${n} ${s} long, but is ${t} ${s} long.`, {
            name: "InvalidBytesLengthError"
        })
    }
}
function N(e, {dir: t, size: n=32}={}) {
    return typeof e == "string" ? et(e, {
        dir: t,
        size: n
    }) : tt(e, {
        dir: t,
        size: n
    })
}
function et(e, {dir: t, size: n=32}={}) {
    if (n === null)
        return e;
    const s = e.replace("0x", "");
    if (s.length > n * 2)
        throw new Te({
            size: Math.ceil(s.length / 2),
            targetSize: n,
            type: "hex"
        });
    return `0x${s[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`
}
function tt(e, {dir: t, size: n=32}={}) {
    if (n === null)
        return e;
    if (e.length > n)
        throw new Te({
            size: e.length,
            targetSize: n,
            type: "bytes"
        });
    const s = new Uint8Array(n);
    for (let r = 0; r < n; r++) {
        const i = t === "right";
        s[i ? r : n - r - 1] = e[i ? r : e.length - r - 1]
    }
    return s
}
const nt = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));
function U(e, t={}) {
    return typeof e == "number" || typeof e == "bigint" ? l(e, t) : typeof e == "string" ? it(e, t) : typeof e == "boolean" ? st(e, t) : z(e, t)
}
function st(e, t={}) {
    const n = `0x${Number(e)}`;
    return typeof t.size == "number" ? (B(n, {
        size: t.size
    }),
    N(n, {
        size: t.size
    })) : n
}
function z(e, t={}) {
    let n = "";
    for (let r = 0; r < e.length; r++)
        n += nt[e[r]];
    const s = `0x${n}`;
    return typeof t.size == "number" ? (B(s, {
        size: t.size
    }),
    N(s, {
        dir: "right",
        size: t.size
    })) : s
}
function l(e, t={}) {
    const {signed: n, size: s} = t
      , r = BigInt(e);
    let i;
    s ? n ? i = (1n << BigInt(s) * 8n - 1n) - 1n : i = 2n ** (BigInt(s) * 8n) - 1n : typeof e == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    const o = typeof i == "bigint" && n ? -i - 1n : 0;
    if (i && r > i || r < o) {
        const c = typeof e == "bigint" ? "n" : "";
        throw new Je({
            max: i ? `${i}${c}` : void 0,
            min: `${o}${c}`,
            signed: n,
            size: s,
            value: `${e}${c}`
        })
    }
    const u = `0x${(n && r < 0 ? (1n << BigInt(s * 8)) + BigInt(r) : r).toString(16)}`;
    return s ? N(u, {
        size: s
    }) : u
}
const rt = new TextEncoder;
function it(e, t={}) {
    const n = rt.encode(e);
    return z(n, t)
}
const ot = new TextEncoder;
function $e(e, t={}) {
    return typeof e == "number" || typeof e == "bigint" ? ut(e, t) : typeof e == "boolean" ? at(e, t) : R(e) ? P(e, t) : Ee(e, t)
}
function at(e, t={}) {
    const n = new Uint8Array(1);
    return n[0] = Number(e),
    typeof t.size == "number" ? (B(n, {
        size: t.size
    }),
    N(n, {
        size: t.size
    })) : n
}
const y = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function le(e) {
    if (e >= y.zero && e <= y.nine)
        return e - y.zero;
    if (e >= y.A && e <= y.F)
        return e - (y.A - 10);
    if (e >= y.a && e <= y.f)
        return e - (y.a - 10)
}
function P(e, t={}) {
    let n = e;
    t.size && (B(n, {
        size: t.size
    }),
    n = N(n, {
        dir: "right",
        size: t.size
    }));
    let s = n.slice(2);
    s.length % 2 && (s = `0${s}`);
    const r = s.length / 2
      , i = new Uint8Array(r);
    for (let o = 0, u = 0; o < r; o++) {
        const c = le(s.charCodeAt(u++))
          , d = le(s.charCodeAt(u++));
        if (c === void 0 || d === void 0)
            throw new a(`Invalid byte sequence ("${s[u - 2]}${s[u - 1]}" in "${s}").`);
        i[o] = c * 16 + d
    }
    return i
}
function ut(e, t) {
    const n = l(e, t);
    return P(n)
}
function Ee(e, t={}) {
    const n = ot.encode(e);
    return typeof t.size == "number" ? (B(n, {
        size: t.size
    }),
    N(n, {
        dir: "right",
        size: t.size
    })) : n
}
function B(e, {size: t}) {
    if ($(e) > t)
        throw new Ze({
            givenSize: $(e),
            maxSize: t
        })
}
function En(e, t) {
    const n = {
        to: t
    }
      , s = n.to;
    return s === "number" ? D(e, n) : s === "bigint" ? C(e, n) : s === "string" ? lt(e, n) : s === "boolean" ? ct(e, n) : P(e, n)
}
function C(e, t={}) {
    const {signed: n} = t;
    t.size && B(e, {
        size: t.size
    });
    const s = BigInt(e);
    if (!n)
        return s;
    const r = (e.length - 2) / 2
      , i = (1n << BigInt(r) * 8n - 1n) - 1n;
    return s <= i ? s : s - BigInt(`0x${"f".padStart(r * 2, "f")}`) - 1n
}
function ct(e, t={}) {
    let n = e;
    if (t.size && (B(n, {
        size: t.size
    }),
    n = T(n)),
    T(n) === "0x00")
        return !1;
    if (T(n) === "0x01")
        return !0;
    throw new Xe(n)
}
function D(e, t={}) {
    return Number(C(e, t))
}
function lt(e, t={}) {
    let n = P(e);
    return t.size && (B(n, {
        size: t.size
    }),
    n = T(n, {
        dir: "right"
    })),
    new TextDecoder().decode(n)
}
function te(e, t) {
    return ({exclude: n, format: s}) => ({
        exclude: n,
        format: r => {
            const i = t(r);
            if (n)
                for (const o of n)
                    delete i[o];
            return {
                ...i,
                ...s(r)
            }
        }
        ,
        type: e
    })
}
const Ie = {
    "0x0": "legacy",
    "0x1": "eip2930",
    "0x2": "eip1559",
    "0x3": "eip4844",
    "0x4": "eip7702"
};
function ne(e) {
    const t = {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        chainId: e.chainId ? D(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
        nonce: e.nonce ? D(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        type: e.type ? Ie[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0
    };
    return e.authorizationList && (t.authorizationList = ft(e.authorizationList)),
    t.yParity = ( () => {
        if (e.yParity)
            return Number(e.yParity);
        if (typeof t.v == "bigint") {
            if (t.v === 0n || t.v === 27n)
                return 0;
            if (t.v === 1n || t.v === 28n)
                return 1;
            if (t.v >= 35n)
                return t.v % 2n === 0n ? 1 : 0
        }
    }
    )(),
    t.type === "legacy" && (delete t.accessList,
    delete t.maxFeePerBlobGas,
    delete t.maxFeePerGas,
    delete t.maxPriorityFeePerGas,
    delete t.yParity),
    t.type === "eip2930" && (delete t.maxFeePerBlobGas,
    delete t.maxFeePerGas,
    delete t.maxPriorityFeePerGas),
    t.type === "eip1559" && delete t.maxFeePerBlobGas,
    t
}
const dt = te("transaction", ne);
function ft(e) {
    return e.map(t => ({
        address: t.address,
        chainId: Number(t.chainId),
        nonce: Number(t.nonce),
        r: t.r,
        s: t.s,
        yParity: Number(t.yParity)
    }))
}
function ht(e) {
    const t = (e.transactions ?? []).map(n => typeof n == "string" ? n : ne(n));
    return {
        ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: t,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
    }
}
const mt = te("block", ht);
function pt(e, {args: t, eventName: n}={}) {
    return {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        ...n ? {
            args: t,
            eventName: n
        } : {}
    }
}
const bt = {
    "0x0": "reverted",
    "0x1": "success"
};
function gt(e) {
    const t = {
        ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map(n => pt(n)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? D(e.transactionIndex) : null,
        status: e.status ? bt[e.status] : null,
        type: e.type ? Ie[e.type] || e.type : null
    };
    return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
    t
}
const xt = te("transactionReceipt", gt)
  , In = 2n ** 16n - 1n
  , se = 2n ** 256n - 1n;
function zn(e) {
    return typeof e[0] == "string" ? M(e) : yt(e)
}
function yt(e) {
    let t = 0;
    for (const r of e)
        t += r.length;
    const n = new Uint8Array(t);
    let s = 0;
    for (const r of e)
        n.set(r, s),
        s += r.length;
    return n
}
function M(e) {
    return `0x${e.reduce( (t, n) => t + n.replace("0x", ""), "")}`
}
class de extends a {
    constructor({offset: t}) {
        super(`Offset \`${t}\` cannot be negative.`, {
            name: "NegativeOffsetError"
        })
    }
}
class wt extends a {
    constructor({length: t, position: n}) {
        super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, {
            name: "PositionOutOfBoundsError"
        })
    }
}
class Pt extends a {
    constructor({count: t, limit: n}) {
        super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, {
            name: "RecursiveReadLimitExceededError"
        })
    }
}
const vt = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new Pt({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit
            })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
            throw new wt({
                length: this.bytes.length,
                position: e
            })
    },
    decrementPosition(e) {
        if (e < 0)
            throw new de({
                offset: e
            });
        const t = this.position - e;
        this.assertPosition(t),
        this.position = t
    },
    getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0
    },
    incrementPosition(e) {
        if (e < 0)
            throw new de({
                offset: e
            });
        const t = this.position + e;
        this.assertPosition(t),
        this.position = t
    },
    inspectByte(e) {
        const t = e ?? this.position;
        return this.assertPosition(t),
        this.bytes[t]
    },
    inspectBytes(e, t) {
        const n = t ?? this.position;
        return this.assertPosition(n + e - 1),
        this.bytes.subarray(n, n + e)
    },
    inspectUint8(e) {
        const t = e ?? this.position;
        return this.assertPosition(t),
        this.bytes[t]
    },
    inspectUint16(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 1),
        this.dataView.getUint16(t)
    },
    inspectUint24(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 2),
        (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    },
    inspectUint32(e) {
        const t = e ?? this.position;
        return this.assertPosition(t + 3),
        this.dataView.getUint32(t)
    },
    pushByte(e) {
        this.assertPosition(this.position),
        this.bytes[this.position] = e,
        this.position++
    },
    pushBytes(e) {
        this.assertPosition(this.position + e.length - 1),
        this.bytes.set(e, this.position),
        this.position += e.length
    },
    pushUint8(e) {
        this.assertPosition(this.position),
        this.bytes[this.position] = e,
        this.position++
    },
    pushUint16(e) {
        this.assertPosition(this.position + 1),
        this.dataView.setUint16(this.position, e),
        this.position += 2
    },
    pushUint24(e) {
        this.assertPosition(this.position + 2),
        this.dataView.setUint16(this.position, e >> 8),
        this.dataView.setUint8(this.position + 2, e & 255),
        this.position += 3
    },
    pushUint32(e) {
        this.assertPosition(this.position + 3),
        this.dataView.setUint32(this.position, e),
        this.position += 4
    },
    readByte() {
        this.assertReadLimit(),
        this._touch();
        const e = this.inspectByte();
        return this.position++,
        e
    },
    readBytes(e, t) {
        this.assertReadLimit(),
        this._touch();
        const n = this.inspectBytes(e);
        return this.position += t ?? e,
        n
    },
    readUint8() {
        this.assertReadLimit(),
        this._touch();
        const e = this.inspectUint8();
        return this.position += 1,
        e
    },
    readUint16() {
        this.assertReadLimit(),
        this._touch();
        const e = this.inspectUint16();
        return this.position += 2,
        e
    },
    readUint24() {
        this.assertReadLimit(),
        this._touch();
        const e = this.inspectUint24();
        return this.position += 3,
        e
    },
    readUint32() {
        this.assertReadLimit(),
        this._touch();
        const e = this.inspectUint32();
        return this.position += 4,
        e
    },
    get remaining() {
        return this.bytes.length - this.position
    },
    setPosition(e) {
        const t = this.position;
        return this.assertPosition(e),
        this.position = e,
        () => this.position = t
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
            return;
        const e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1),
        e > 0 && this.recursiveReadCount++
    }
};
function ze(e, {recursiveReadLimit: t=8192}={}) {
    const n = Object.create(vt);
    return n.bytes = e,
    n.dataView = new DataView(e.buffer,e.byteOffset,e.byteLength),
    n.positionReadCount = new Map,
    n.recursiveReadLimit = t,
    n
}
function A(e, t="hex") {
    const n = Be(e)
      , s = ze(new Uint8Array(n.length));
    return n.encode(s),
    t === "hex" ? z(s.bytes) : s.bytes
}
function Be(e) {
    return Array.isArray(e) ? Tt(e.map(t => Be(t))) : $t(e)
}
function Tt(e) {
    const t = e.reduce( (r, i) => r + i.length, 0)
      , n = Fe(t);
    return {
        length: t <= 55 ? 1 + t : 1 + n + t,
        encode(r) {
            t <= 55 ? r.pushByte(192 + t) : (r.pushByte(247 + n),
            n === 1 ? r.pushUint8(t) : n === 2 ? r.pushUint16(t) : n === 3 ? r.pushUint24(t) : r.pushUint32(t));
            for (const {encode: i} of e)
                i(r)
        }
    }
}
function $t(e) {
    const t = typeof e == "string" ? P(e) : e
      , n = Fe(t.length);
    return {
        length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
        encode(r) {
            t.length === 1 && t[0] < 128 ? r.pushBytes(t) : t.length <= 55 ? (r.pushByte(128 + t.length),
            r.pushBytes(t)) : (r.pushByte(183 + n),
            n === 1 ? r.pushUint8(t.length) : n === 2 ? r.pushUint16(t.length) : n === 3 ? r.pushUint24(t.length) : r.pushUint32(t.length),
            r.pushBytes(t))
        }
    }
}
function Fe(e) {
    if (e < 2 ** 8)
        return 1;
    if (e < 2 ** 16)
        return 2;
    if (e < 2 ** 24)
        return 3;
    if (e < 2 ** 32)
        return 4;
    throw new a("Length is too large.")
}
const Et = {
    gwei: 9,
    wei: 18
}
  , It = {
    ether: -9,
    wei: 9
}
  , Bn = {
    ether: -18,
    gwei: -9
};
function Ce(e, t) {
    let n = e.toString();
    const s = n.startsWith("-");
    s && (n = n.slice(1)),
    n = n.padStart(t, "0");
    let[r,i] = [n.slice(0, n.length - t), n.slice(n.length - t)];
    return i = i.replace(/(0+)$/, ""),
    `${s ? "-" : ""}${r || "0"}${i ? `.${i}` : ""}`
}
function zt(e, t="wei") {
    return Ce(e, Et[t])
}
function L(e, t="wei") {
    return Ce(e, It[t])
}
function Ge(e) {
    const t = Object.entries(e).map( ([s,r]) => r === void 0 || r === !1 ? null : [s, r]).filter(Boolean)
      , n = t.reduce( (s, [r]) => Math.max(s, r.length), 0);
    return t.map( ([s,r]) => `  ${`${s}:`.padEnd(n + 1)}  ${r}`).join(`
`)
}
class Fn extends a {
    constructor() {
        super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.", "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`), {
            name: "FeeConflictError"
        })
    }
}
class Bt extends a {
    constructor({v: t}) {
        super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
            name: "InvalidLegacyVError"
        })
    }
}
class Ft extends a {
    constructor({transaction: t}) {
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: ["Provided Transaction:", "{", Ge(t), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- an EIP-7702 Transaction with `authorizationList`, or", "- a Legacy Transaction with `gasPrice`"],
            name: "InvalidSerializableTransactionError"
        })
    }
}
class Ct extends a {
    constructor({storageKey: t}) {
        super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`, {
            name: "InvalidStorageKeySizeError"
        })
    }
}
class Cn extends a {
    constructor(t, {account: n, docsPath: s, chain: r, data: i, gas: o, gasPrice: u, maxFeePerGas: c, maxPriorityFeePerGas: d, nonce: b, to: p, value: h}) {
        var O;
        const m = Ge({
            chain: r && `${r == null ? void 0 : r.name} (id: ${r == null ? void 0 : r.id})`,
            from: n == null ? void 0 : n.address,
            to: p,
            value: typeof h < "u" && `${zt(h)} ${((O = r == null ? void 0 : r.nativeCurrency) == null ? void 0 : O.symbol) || "ETH"}`,
            data: i,
            gas: o,
            gasPrice: typeof u < "u" && `${L(u)} gwei`,
            maxFeePerGas: typeof c < "u" && `${L(c)} gwei`,
            maxPriorityFeePerGas: typeof d < "u" && `${L(d)} gwei`,
            nonce: b
        });
        super(t.shortMessage, {
            cause: t,
            docsPath: s,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Request Arguments:", m].filter(Boolean),
            name: "TransactionExecutionError"
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.cause = t
    }
}
class Gn extends a {
    constructor({blockHash: t, blockNumber: n, blockTag: s, hash: r, index: i}) {
        let o = "Transaction";
        s && i !== void 0 && (o = `Transaction at block time "${s}" at index "${i}"`),
        t && i !== void 0 && (o = `Transaction at block hash "${t}" at index "${i}"`),
        n && i !== void 0 && (o = `Transaction at block number "${n}" at index "${i}"`),
        r && (o = `Transaction with hash "${r}"`),
        super(`${o} could not be found.`, {
            name: "TransactionNotFoundError"
        })
    }
}
class Un extends a {
    constructor({hash: t}) {
        super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: "TransactionReceiptNotFoundError"
        })
    }
}
class Ln extends a {
    constructor({hash: t}) {
        super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, {
            name: "WaitForTransactionReceiptTimeoutError"
        })
    }
}
function Gt(e) {
    if (!e || e.length === 0)
        return [];
    const t = [];
    for (const n of e) {
        const {chainId: s, nonce: r, ...i} = n
          , o = n.address;
        t.push([s ? U(s) : "0x", o, r ? U(r) : "0x", ..._({}, i)])
    }
    return t
}
function Ue(e) {
    const {kzg: t} = e
      , n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes")
      , s = typeof e.blobs[0] == "string" ? e.blobs.map(i => P(i)) : e.blobs
      , r = [];
    for (const i of s)
        r.push(Uint8Array.from(t.blobToKzgCommitment(i)));
    return n === "bytes" ? r : r.map(i => z(i))
}
function Le(e) {
    const {kzg: t} = e
      , n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes")
      , s = typeof e.blobs[0] == "string" ? e.blobs.map(o => P(o)) : e.blobs
      , r = typeof e.commitments[0] == "string" ? e.commitments.map(o => P(o)) : e.commitments
      , i = [];
    for (let o = 0; o < s.length; o++) {
        const u = s[o]
          , c = r[o];
        i.push(Uint8Array.from(t.computeBlobKzgProof(u, c)))
    }
    return n === "bytes" ? i : i.map(o => z(o))
}
function Ut(e, t) {
    const n = t || "hex"
      , s = Re(R(e, {
        strict: !1
    }) ? $e(e) : e);
    return n === "bytes" ? s : U(s)
}
function Lt(e) {
    const {commitment: t, version: n=1} = e
      , s = e.to ?? (typeof t == "string" ? "hex" : "bytes")
      , r = Ut(t, "bytes");
    return r.set([n], 0),
    s === "bytes" ? r : z(r)
}
function At(e) {
    const {commitments: t, version: n} = e
      , s = e.to ?? (typeof t[0] == "string" ? "hex" : "bytes")
      , r = [];
    for (const i of t)
        r.push(Lt({
            commitment: i,
            to: s,
            version: n
        }));
    return r
}
const fe = 6
  , Ae = 32
  , re = 4096
  , Se = Ae * re
  , he = Se * fe - 1 - 1 * re * fe
  , Ne = 1;
class St extends a {
    constructor({maxSize: t, size: n}) {
        super("Blob size is too large.", {
            metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
            name: "BlobSizeTooLargeError"
        })
    }
}
class Me extends a {
    constructor() {
        super("Blob data must not be empty.", {
            name: "EmptyBlobError"
        })
    }
}
class Nt extends a {
    constructor({hash: t, size: n}) {
        super(`Versioned hash "${t}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${n}`],
            name: "InvalidVersionedHashSizeError"
        })
    }
}
class Mt extends a {
    constructor({hash: t, version: n}) {
        super(`Versioned hash "${t}" version is invalid.`, {
            metaMessages: [`Expected: ${Ne}`, `Received: ${n}`],
            name: "InvalidVersionedHashVersionError"
        })
    }
}
function Ot(e) {
    const t = e.to ?? (typeof e.data == "string" ? "hex" : "bytes")
      , n = typeof e.data == "string" ? P(e.data) : e.data
      , s = $(n);
    if (!s)
        throw new Me;
    if (s > he)
        throw new St({
            maxSize: he,
            size: s
        });
    const r = [];
    let i = !0
      , o = 0;
    for (; i; ) {
        const u = ze(new Uint8Array(Se));
        let c = 0;
        for (; c < re; ) {
            const d = n.slice(o, o + (Ae - 1));
            if (u.pushByte(0),
            u.pushBytes(d),
            d.length < 31) {
                u.pushByte(128),
                i = !1;
                break
            }
            c++,
            o += 31
        }
        r.push(u)
    }
    return t === "bytes" ? r.map(u => u.bytes) : r.map(u => z(u.bytes))
}
function Ht(e) {
    const {data: t, kzg: n, to: s} = e
      , r = e.blobs ?? Ot({
        data: t,
        to: s
    })
      , i = e.commitments ?? Ue({
        blobs: r,
        kzg: n,
        to: s
    })
      , o = e.proofs ?? Le({
        blobs: r,
        commitments: i,
        kzg: n,
        to: s
    })
      , u = [];
    for (let c = 0; c < r.length; c++)
        u.push({
            blob: r[c],
            commitment: i[c],
            proof: o[c]
        });
    return u
}
class E extends a {
    constructor({address: t}) {
        super(`Address "${t}" is invalid.`, {
            metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
            name: "InvalidAddressError"
        })
    }
}
class An extends a {
    constructor({blockNumber: t, chain: n, contract: s}) {
        super(`Chain "${n.name}" does not support contract "${s.name}".`, {
            metaMessages: ["This could be due to any of the following:", ...t && s.blockCreated && s.blockCreated > t ? [`- The contract "${s.name}" was not deployed until block ${s.blockCreated} (current block ${t}).`] : [`- The chain does not have the contract "${s.name}" configured.`]],
            name: "ChainDoesNotSupportContract"
        })
    }
}
class Sn extends a {
    constructor({chain: t, currentChainId: n}) {
        super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`, {
            metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${t.id} – ${t.name}`],
            name: "ChainMismatchError"
        })
    }
}
class Nn extends a {
    constructor() {
        super(["No chain was provided to the request.", "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`), {
            name: "ChainNotFoundError"
        })
    }
}
class Mn extends a {
    constructor() {
        super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError"
        })
    }
}
class W extends a {
    constructor({chainId: t}) {
        super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid.", {
            name: "InvalidChainIdError"
        })
    }
}
class Oe extends a {
    constructor({cause: t, message: n}={}) {
        var r;
        const s = (r = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : r.replace("execution reverted", "");
        super(`Execution reverted ${s ? `with reason: ${s}` : "for an unknown reason"}.`, {
            cause: t,
            name: "ExecutionRevertedError"
        })
    }
}
Object.defineProperty(Oe, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
});
Object.defineProperty(Oe, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
class Y extends a {
    constructor({cause: t, maxFeePerGas: n}={}) {
        super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${L(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: t,
            name: "FeeCapTooHighError"
        })
    }
}
Object.defineProperty(Y, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class jt extends a {
    constructor({cause: t, maxFeePerGas: n}={}) {
        super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${L(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
            cause: t,
            name: "FeeCapTooLowError"
        })
    }
}
Object.defineProperty(jt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class Vt extends a {
    constructor({cause: t, nonce: n}={}) {
        super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, {
            cause: t,
            name: "NonceTooHighError"
        })
    }
}
Object.defineProperty(Vt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
class kt extends a {
    constructor({cause: t, nonce: n}={}) {
        super([`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`), {
            cause: t,
            name: "NonceTooLowError"
        })
    }
}
Object.defineProperty(kt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
class Dt extends a {
    constructor({cause: t, nonce: n}={}) {
        super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, {
            cause: t,
            name: "NonceMaxValueError"
        })
    }
}
Object.defineProperty(Dt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
class Rt extends a {
    constructor({cause: t}={}) {
        super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`), {
            cause: t,
            metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."],
            name: "InsufficientFundsError"
        })
    }
}
Object.defineProperty(Rt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds|exceeds transaction sender account balance/
});
class _t extends a {
    constructor({cause: t, gas: n}={}) {
        super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: t,
            name: "IntrinsicGasTooHighError"
        })
    }
}
Object.defineProperty(_t, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
class qt extends a {
    constructor({cause: t, gas: n}={}) {
        super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
            cause: t,
            name: "IntrinsicGasTooLowError"
        })
    }
}
Object.defineProperty(qt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
class Kt extends a {
    constructor({cause: t}) {
        super("The transaction type is not supported for this chain.", {
            cause: t,
            name: "TransactionTypeNotSupportedError"
        })
    }
}
Object.defineProperty(Kt, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
class He extends a {
    constructor({cause: t, maxPriorityFeePerGas: n, maxFeePerGas: s}={}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${L(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s ? ` = ${L(s)} gwei` : ""}).`].join(`
`), {
            cause: t,
            name: "TipAboveFeeCapError"
        })
    }
}
Object.defineProperty(He, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class On extends a {
    constructor({cause: t}) {
        super(`An error occurred while executing: ${t == null ? void 0 : t.shortMessage}`, {
            cause: t,
            name: "UnknownNodeError"
        })
    }
}
class je extends Map {
    constructor(t) {
        super(),
        Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.maxSize = t
    }
    get(t) {
        const n = super.get(t);
        return super.has(t) && n !== void 0 && (this.delete(t),
        super.set(t, n)),
        n
    }
    set(t, n) {
        if (super.set(t, n),
        this.maxSize && this.size > this.maxSize) {
            const s = this.keys().next().value;
            s && this.delete(s)
        }
        return this
    }
}
function Wt(e, t) {
    const n = t || "hex"
      , s = _e(R(e, {
        strict: !1
    }) ? $e(e) : e);
    return n === "bytes" ? s : U(s)
}
const J = new je(8192);
function Ve(e, t) {
    if (J.has(`${e}.${t}`))
        return J.get(`${e}.${t}`);
    const n = e.substring(2).toLowerCase()
      , s = Wt(Ee(n), "bytes")
      , r = n.split("");
    for (let o = 0; o < 40; o += 2)
        s[o >> 1] >> 4 >= 8 && r[o] && (r[o] = r[o].toUpperCase()),
        (s[o >> 1] & 15) >= 8 && r[o + 1] && (r[o + 1] = r[o + 1].toUpperCase());
    const i = `0x${r.join("")}`;
    return J.set(`${e}.${t}`, i),
    i
}
function Hn(e, t) {
    if (!I(e, {
        strict: !1
    }))
        throw new E({
            address: e
        });
    return Ve(e, t)
}
const Yt = /^0x[a-fA-F0-9]{40}$/
  , X = new je(8192);
function I(e, t) {
    const {strict: n=!0} = t ?? {}
      , s = `${e}.${n}`;
    if (X.has(s))
        return X.get(s);
    const r = Yt.test(e) ? e.toLowerCase() === e ? !0 : n ? Ve(e) === e : !0 : !1;
    return X.set(s, r),
    r
}
function Qt(e, t, n, {strict: s}={}) {
    return R(e, {
        strict: !1
    }) ? Xt(e, t, n, {
        strict: s
    }) : Jt(e, t, n, {
        strict: s
    })
}
function ke(e, t) {
    if (typeof t == "number" && t > 0 && t > $(e) - 1)
        throw new ve({
            offset: t,
            position: "start",
            size: $(e)
        })
}
function De(e, t, n) {
    if (typeof t == "number" && typeof n == "number" && $(e) !== n - t)
        throw new ve({
            offset: n,
            position: "end",
            size: $(e)
        })
}
function Jt(e, t, n, {strict: s}={}) {
    ke(e, t);
    const r = e.slice(t, n);
    return s && De(r, t, n),
    r
}
function Xt(e, t, n, {strict: s}={}) {
    ke(e, t);
    const r = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
    return s && De(r, t, n),
    r
}
function Zt(e) {
    const {authorizationList: t} = e;
    if (t)
        for (const n of t) {
            const {chainId: s} = n
              , r = n.address;
            if (!I(r))
                throw new E({
                    address: r
                });
            if (s < 0)
                throw new W({
                    chainId: s
                })
        }
    ie(e)
}
function en(e) {
    const {blobVersionedHashes: t} = e;
    if (t) {
        if (t.length === 0)
            throw new Me;
        for (const n of t) {
            const s = $(n)
              , r = D(Qt(n, 0, 1));
            if (s !== 32)
                throw new Nt({
                    hash: n,
                    size: s
                });
            if (r !== Ne)
                throw new Mt({
                    hash: n,
                    version: r
                })
        }
    }
    ie(e)
}
function ie(e) {
    const {chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: s, to: r} = e;
    if (t <= 0)
        throw new W({
            chainId: t
        });
    if (r && !I(r))
        throw new E({
            address: r
        });
    if (s && s > se)
        throw new Y({
            maxFeePerGas: s
        });
    if (n && s && n > s)
        throw new He({
            maxFeePerGas: s,
            maxPriorityFeePerGas: n
        })
}
function tn(e) {
    const {chainId: t, maxPriorityFeePerGas: n, gasPrice: s, maxFeePerGas: r, to: i} = e;
    if (t <= 0)
        throw new W({
            chainId: t
        });
    if (i && !I(i))
        throw new E({
            address: i
        });
    if (n || r)
        throw new a("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
    if (s && s > se)
        throw new Y({
            maxFeePerGas: s
        })
}
function nn(e) {
    const {chainId: t, maxPriorityFeePerGas: n, gasPrice: s, maxFeePerGas: r, to: i} = e;
    if (i && !I(i))
        throw new E({
            address: i
        });
    if (typeof t < "u" && t <= 0)
        throw new W({
            chainId: t
        });
    if (n || r)
        throw new a("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
    if (s && s > se)
        throw new Y({
            maxFeePerGas: s
        })
}
function sn(e) {
    if (e.type)
        return e.type;
    if (typeof e.authorizationList < "u")
        return "eip7702";
    if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
        return "eip4844";
    if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
        return "eip1559";
    if (typeof e.gasPrice < "u")
        return typeof e.accessList < "u" ? "eip2930" : "legacy";
    throw new Ft({
        transaction: e
    })
}
function Q(e) {
    if (!e || e.length === 0)
        return [];
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const {address: s, storageKeys: r} = e[n];
        for (let i = 0; i < r.length; i++)
            if (r[i].length - 2 !== 64)
                throw new Ct({
                    storageKey: r[i]
                });
        if (!I(s, {
            strict: !1
        }))
            throw new E({
                address: s
            });
        t.push([s, r])
    }
    return t
}
function rn(e, t) {
    const n = sn(e);
    return n === "eip1559" ? un(e, t) : n === "eip2930" ? cn(e, t) : n === "eip4844" ? an(e, t) : n === "eip7702" ? on(e, t) : ln(e, t)
}
function on(e, t) {
    const {authorizationList: n, chainId: s, gas: r, nonce: i, to: o, value: u, maxFeePerGas: c, maxPriorityFeePerGas: d, accessList: b, data: p} = e;
    Zt(e);
    const h = Q(b)
      , m = Gt(n);
    return M(["0x04", A([l(s), i ? l(i) : "0x", d ? l(d) : "0x", c ? l(c) : "0x", r ? l(r) : "0x", o ?? "0x", u ? l(u) : "0x", p ?? "0x", h, m, ..._(e, t)])])
}
function an(e, t) {
    const {chainId: n, gas: s, nonce: r, to: i, value: o, maxFeePerBlobGas: u, maxFeePerGas: c, maxPriorityFeePerGas: d, accessList: b, data: p} = e;
    en(e);
    let h = e.blobVersionedHashes
      , m = e.sidecars;
    if (e.blobs && (typeof h > "u" || typeof m > "u")) {
        const F = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map(j => z(j))
          , q = e.kzg
          , H = Ue({
            blobs: F,
            kzg: q
        });
        if (typeof h > "u" && (h = At({
            commitments: H
        })),
        typeof m > "u") {
            const j = Le({
                blobs: F,
                commitments: H,
                kzg: q
            });
            m = Ht({
                blobs: F,
                commitments: H,
                proofs: j
            })
        }
    }
    const O = Q(b)
      , oe = [l(n), r ? l(r) : "0x", d ? l(d) : "0x", c ? l(c) : "0x", s ? l(s) : "0x", i ?? "0x", o ? l(o) : "0x", p ?? "0x", O, u ? l(u) : "0x", h ?? [], ..._(e, t)]
      , ae = []
      , ue = []
      , ce = [];
    if (m)
        for (let F = 0; F < m.length; F++) {
            const {blob: q, commitment: H, proof: j} = m[F];
            ae.push(q),
            ue.push(H),
            ce.push(j)
        }
    return M(["0x03", A(m ? [oe, ae, ue, ce] : oe)])
}
function un(e, t) {
    const {chainId: n, gas: s, nonce: r, to: i, value: o, maxFeePerGas: u, maxPriorityFeePerGas: c, accessList: d, data: b} = e;
    ie(e);
    const p = Q(d)
      , h = [l(n), r ? l(r) : "0x", c ? l(c) : "0x", u ? l(u) : "0x", s ? l(s) : "0x", i ?? "0x", o ? l(o) : "0x", b ?? "0x", p, ..._(e, t)];
    return M(["0x02", A(h)])
}
function cn(e, t) {
    const {chainId: n, gas: s, data: r, nonce: i, to: o, value: u, accessList: c, gasPrice: d} = e;
    tn(e);
    const b = Q(c)
      , p = [l(n), i ? l(i) : "0x", d ? l(d) : "0x", s ? l(s) : "0x", o ?? "0x", u ? l(u) : "0x", r ?? "0x", b, ..._(e, t)];
    return M(["0x01", A(p)])
}
function ln(e, t) {
    const {chainId: n=0, gas: s, data: r, nonce: i, to: o, value: u, gasPrice: c} = e;
    nn(e);
    let d = [i ? l(i) : "0x", c ? l(c) : "0x", s ? l(s) : "0x", o ?? "0x", u ? l(u) : "0x", r ?? "0x"];
    if (t) {
        const b = ( () => {
            if (t.v >= 35n)
                return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
            if (n > 0)
                return BigInt(n * 2) + BigInt(35n + t.v - 27n);
            const m = 27n + (t.v === 27n ? 0n : 1n);
            if (t.v !== m)
                throw new Bt({
                    v: t.v
                });
            return m
        }
        )()
          , p = T(t.r)
          , h = T(t.s);
        d = [...d, l(b), p === "0x00" ? "0x" : p, h === "0x00" ? "0x" : h]
    } else
        n > 0 && (d = [...d, l(n), "0x", "0x"]);
    return A(d)
}
function _(e, t) {
    const n = t ?? e
      , {v: s, yParity: r} = n;
    if (typeof n.r > "u")
        return [];
    if (typeof n.s > "u")
        return [];
    if (typeof s > "u" && typeof r > "u")
        return [];
    const i = T(n.r)
      , o = T(n.s);
    return [typeof r == "number" ? r ? l(1) : "0x" : s === 0n ? "0x" : s === 1n ? l(1) : s === 27n ? "0x" : l(1), i === "0x00" ? "0x" : i, o === "0x00" ? "0x" : o]
}
const dn = {
    gasPriceOracle: {
        address: "0x420000000000000000000000000000000000000F"
    },
    l1Block: {
        address: "0x4200000000000000000000000000000000000015"
    },
    l2CrossDomainMessenger: {
        address: "0x4200000000000000000000000000000000000007"
    },
    l2Erc721Bridge: {
        address: "0x4200000000000000000000000000000000000014"
    },
    l2StandardBridge: {
        address: "0x4200000000000000000000000000000000000010"
    },
    l2ToL1MessagePasser: {
        address: "0x4200000000000000000000000000000000000016"
    }
}
  , fn = {
    block: mt({
        format(e) {
            var n;
            return {
                transactions: (n = e.transactions) == null ? void 0 : n.map(s => {
                    if (typeof s == "string")
                        return s;
                    const r = ne(s);
                    return r.typeHex === "0x7e" && (r.isSystemTx = s.isSystemTx,
                    r.mint = s.mint ? C(s.mint) : void 0,
                    r.sourceHash = s.sourceHash,
                    r.type = "deposit"),
                    r
                }
                ),
                stateRoot: e.stateRoot
            }
        }
    }),
    transaction: dt({
        format(e) {
            const t = {};
            return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx,
            t.mint = e.mint ? C(e.mint) : void 0,
            t.sourceHash = e.sourceHash,
            t.type = "deposit"),
            t
        }
    }),
    transactionReceipt: xt({
        format(e) {
            return {
                l1GasPrice: e.l1GasPrice ? C(e.l1GasPrice) : null,
                l1GasUsed: e.l1GasUsed ? C(e.l1GasUsed) : null,
                l1Fee: e.l1Fee ? C(e.l1Fee) : null,
                l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
            }
        }
    })
};
function hn(e, t) {
    return bn(e) ? pn(e) : rn(e, t)
}
const mn = {
    transaction: hn
};
function pn(e) {
    gn(e);
    const {sourceHash: t, data: n, from: s, gas: r, isSystemTx: i, mint: o, to: u, value: c} = e
      , d = [t, s, u ?? "0x", o ? U(o) : "0x", c ? U(c) : "0x", r ? U(r) : "0x", i ? "0x1" : "0x", n ?? "0x"];
    return M(["0x7e", A(d)])
}
function bn(e) {
    return e.type === "deposit" || typeof e.sourceHash < "u"
}
function gn(e) {
    const {from: t, to: n} = e;
    if (t && !I(t))
        throw new E({
            address: t
        });
    if (n && !I(n))
        throw new E({
            address: n
        })
}
const me = {
    blockTime: 2e3,
    contracts: dn,
    formatters: fn,
    serializers: mn
}
  , k = 1
  , xn = ye({
    ...me,
    id: 8453,
    name: "Base",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: ["https://mainnet.base.org"]
        }
    },
    blockExplorers: {
        default: {
            name: "Basescan",
            url: "https://basescan.org",
            apiUrl: "https://api.basescan.org/api"
        }
    },
    contracts: {
        ...me.contracts,
        disputeGameFactory: {
            [k]: {
                address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"
            }
        },
        l2OutputOracle: {
            [k]: {
                address: "0x56315b90c40730925ec5485cf004d835058518A0"
            }
        },
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 5022
        },
        portal: {
            [k]: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 17482143
            }
        },
        l1StandardBridge: {
            [k]: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 17482143
            }
        }
    },
    sourceId: k
})
  , jn = ye({
    ...xn,
    experimental_preconfirmationTime: 200,
    rpcUrls: {
        default: {
            http: ["https://mainnet-preconf.base.org"]
        }
    }
});
function Vn(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
const yn = {}
  , wn = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , kn = qe(wn);
export {On as $, I as A, a as B, Nn as C, E as D, Oe as E, et as F, st as G, Je as H, Tn as I, P as J, ze as K, je as L, Ve as M, Jt as N, Ge as O, L as P, zt as Q, Y as R, jt as S, Vt as T, kt as U, Dt as V, Rt as W, _t as X, qt as Y, Kt as Z, He as _, Vn as a, Fn as a0, se as a1, M as a2, A as a3, Cn as a4, ht as a5, $n as a6, Ue as a7, At as a8, Le as a9, _ as aA, dn as aB, fn as aC, jn as aD, Et as aE, Ht as aa, sn as ab, Ee as ac, Mn as ad, wt as ae, pt as af, Gn as ag, ne as ah, Un as ai, gt as aj, Xt as ak, bt as al, Ln as am, ct as an, ye as ao, In as ap, xt as aq, dt as ar, mt as as, W as at, rn as au, Ut as av, N as aw, me as ax, hn as ay, Q as az, xn as b, zn as c, T as d, En as e, Ce as f, Hn as g, lt as h, R as i, D as j, Wt as k, z as l, te as m, l as n, Sn as o, vn as p, An as q, kn as r, it as s, U as t, $ as u, $e as v, Bn as w, Qt as x, B as y, C as z};
