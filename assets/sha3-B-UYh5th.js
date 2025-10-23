var h = {}
  , s = {};
Object.defineProperty(s, "__esModule", {
    value: !0
});
s.toBig = s.shrSL = s.shrSH = s.rotrSL = s.rotrSH = s.rotrBL = s.rotrBH = s.rotr32L = s.rotr32H = s.rotlSL = s.rotlSH = s.rotlBL = s.rotlBH = s.add5L = s.add5H = s.add4L = s.add4H = s.add3L = s.add3H = void 0;
s.add = it;
s.fromBig = F;
s.split = K;
const S = BigInt(2 ** 32 - 1)
  , v = BigInt(32);
function F(t, n=!1) {
    return n ? {
        h: Number(t & S),
        l: Number(t >> v & S)
    } : {
        h: Number(t >> v & S) | 0,
        l: Number(t & S) | 0
    }
}
function K(t, n=!1) {
    const r = t.length;
    let i = new Uint32Array(r)
      , c = new Uint32Array(r);
    for (let u = 0; u < r; u++) {
        const {h: a, l} = F(t[u], n);
        [i[u],c[u]] = [a, l]
    }
    return [i, c]
}
const q = (t, n) => BigInt(t >>> 0) << v | BigInt(n >>> 0);
s.toBig = q;
const z = (t, n, r) => t >>> r;
s.shrSH = z;
const G = (t, n, r) => t << 32 - r | n >>> r;
s.shrSL = G;
const J = (t, n, r) => t >>> r | n << 32 - r;
s.rotrSH = J;
const Q = (t, n, r) => t << 32 - r | n >>> r;
s.rotrSL = Q;
const Y = (t, n, r) => t << 64 - r | n >>> r - 32;
s.rotrBH = Y;
const Z = (t, n, r) => t >>> r - 32 | n << 64 - r;
s.rotrBL = Z;
const $ = (t, n) => n;
s.rotr32H = $;
const tt = (t, n) => t;
s.rotr32L = tt;
const et = (t, n, r) => t << r | n >>> 32 - r;
s.rotlSH = et;
const nt = (t, n, r) => n << r | t >>> 32 - r;
s.rotlSL = nt;
const rt = (t, n, r) => n << r - 32 | t >>> 64 - r;
s.rotlBH = rt;
const ot = (t, n, r) => t << r - 32 | n >>> 64 - r;
s.rotlBL = ot;
function it(t, n, r, i) {
    const c = (n >>> 0) + (i >>> 0);
    return {
        h: t + r + (c / 2 ** 32 | 0) | 0,
        l: c | 0
    }
}
const st = (t, n, r) => (t >>> 0) + (n >>> 0) + (r >>> 0);
s.add3L = st;
const ct = (t, n, r, i) => n + r + i + (t / 2 ** 32 | 0) | 0;
s.add3H = ct;
const at = (t, n, r, i) => (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0);
s.add4L = at;
const ut = (t, n, r, i, c) => n + r + i + c + (t / 2 ** 32 | 0) | 0;
s.add4H = ut;
const ft = (t, n, r, i, c) => (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0) + (c >>> 0);
s.add5L = ft;
const ht = (t, n, r, i, c, u) => n + r + i + c + u + (t / 2 ** 32 | 0) | 0;
s.add5H = ht;
const Ut = {
    fromBig: F,
    split: K,
    toBig: q,
    shrSH: z,
    shrSL: G,
    rotrSH: J,
    rotrSL: Q,
    rotrBH: Y,
    rotrBL: Z,
    rotr32H: $,
    rotr32L: tt,
    rotlSH: et,
    rotlSL: nt,
    rotlBH: rt,
    rotlBL: ot,
    add: it,
    add3L: st,
    add3H: ct,
    add4L: at,
    add4H: ut,
    add5H: ht,
    add5L: ft
};
s.default = Ut;
var lt = {}
  , m = {};
Object.defineProperty(m, "__esModule", {
    value: !0
});
m.crypto = void 0;
m.crypto = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
(function(t) {
    /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.wrapXOFConstructorWithOpts = t.wrapConstructorWithOpts = t.wrapConstructor = t.Hash = t.nextTick = t.swap32IfBE = t.byteSwapIfBE = t.swap8IfBE = t.isLE = void 0,
    t.isBytes = r,
    t.anumber = i,
    t.abytes = c,
    t.ahash = u,
    t.aexists = a,
    t.aoutput = l,
    t.u8 = B,
    t.u32 = k,
    t.clean = g,
    t.createView = E,
    t.rotr = T,
    t.rotl = H,
    t.byteSwap = U,
    t.byteSwap32 = X,
    t.bytesToHex = Bt,
    t.hexToBytes = kt,
    t.asyncLoop = _t,
    t.utf8ToBytes = x,
    t.bytesToUtf8 = Ot,
    t.toBytes = I,
    t.kdfInputToBytes = At,
    t.concatBytes = It,
    t.checkOpts = St,
    t.createHasher = P,
    t.createOptHasher = V,
    t.createXOFer = C,
    t.randomBytes = Et;
    const n = m;
    function r(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array"
    }
    function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
            throw new Error("positive integer expected, got " + e)
    }
    function c(e, ...o) {
        if (!r(e))
            throw new Error("Uint8Array expected");
        if (o.length > 0 && !o.includes(e.length))
            throw new Error("Uint8Array expected of length " + o + ", got length=" + e.length)
    }
    function u(e) {
        if (typeof e != "function" || typeof e.create != "function")
            throw new Error("Hash should be wrapped by utils.createHasher");
        i(e.outputLen),
        i(e.blockLen)
    }
    function a(e, o=!0) {
        if (e.destroyed)
            throw new Error("Hash instance has been destroyed");
        if (o && e.finished)
            throw new Error("Hash#digest() has already been called")
    }
    function l(e, o) {
        c(e);
        const f = o.outputLen;
        if (e.length < f)
            throw new Error("digestInto() expects output buffer of length at least " + f)
    }
    function B(e) {
        return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
    }
    function k(e) {
        return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength / 4))
    }
    function g(...e) {
        for (let o = 0; o < e.length; o++)
            e[o].fill(0)
    }
    function E(e) {
        return new DataView(e.buffer,e.byteOffset,e.byteLength)
    }
    function T(e, o) {
        return e << 32 - o | e >>> o
    }
    function H(e, o) {
        return e << o | e >>> 32 - o >>> 0
    }
    t.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    function U(e) {
        return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255
    }
    t.swap8IfBE = t.isLE ? e => e : e => U(e),
    t.byteSwapIfBE = t.swap8IfBE;
    function X(e) {
        for (let o = 0; o < e.length; o++)
            e[o] = U(e[o]);
        return e
    }
    t.swap32IfBE = t.isLE ? e => e : X;
    const j = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function"
      , bt = Array.from({
        length: 256
    }, (e, o) => o.toString(16).padStart(2, "0"));
    function Bt(e) {
        if (c(e),
        j)
            return e.toHex();
        let o = "";
        for (let f = 0; f < e.length; f++)
            o += bt[e[f]];
        return o
    }
    const L = {
        _0: 48,
        _9: 57,
        A: 65,
        F: 70,
        a: 97,
        f: 102
    };
    function M(e) {
        if (e >= L._0 && e <= L._9)
            return e - L._0;
        if (e >= L.A && e <= L.F)
            return e - (L.A - 10);
        if (e >= L.a && e <= L.f)
            return e - (L.a - 10)
    }
    function kt(e) {
        if (typeof e != "string")
            throw new Error("hex string expected, got " + typeof e);
        if (j)
            return Uint8Array.fromHex(e);
        const o = e.length
          , f = o / 2;
        if (o % 2)
            throw new Error("hex string expected, got unpadded hex of length " + o);
        const d = new Uint8Array(f);
        for (let y = 0, p = 0; y < f; y++,
        p += 2) {
            const N = M(e.charCodeAt(p))
              , R = M(e.charCodeAt(p + 1));
            if (N === void 0 || R === void 0) {
                const Tt = e[p] + e[p + 1];
                throw new Error('hex string expected, got non-hex character "' + Tt + '" at index ' + p)
            }
            d[y] = N * 16 + R
        }
        return d
    }
    const Ht = async () => {}
    ;
    t.nextTick = Ht;
    async function _t(e, o, f) {
        let d = Date.now();
        for (let y = 0; y < e; y++) {
            f(y);
            const p = Date.now() - d;
            p >= 0 && p < o || (await (0,
            t.nextTick)(),
            d += p)
        }
    }
    function x(e) {
        if (typeof e != "string")
            throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(e))
    }
    function Ot(e) {
        return new TextDecoder().decode(e)
    }
    function I(e) {
        return typeof e == "string" && (e = x(e)),
        c(e),
        e
    }
    function At(e) {
        return typeof e == "string" && (e = x(e)),
        c(e),
        e
    }
    function It(...e) {
        let o = 0;
        for (let d = 0; d < e.length; d++) {
            const y = e[d];
            c(y),
            o += y.length
        }
        const f = new Uint8Array(o);
        for (let d = 0, y = 0; d < e.length; d++) {
            const p = e[d];
            f.set(p, y),
            y += p.length
        }
        return f
    }
    function St(e, o) {
        if (o !== void 0 && {}.toString.call(o) !== "[object Object]")
            throw new Error("options should be object or undefined");
        return Object.assign(e, o)
    }
    class mt {
    }
    t.Hash = mt;
    function P(e) {
        const o = d => e().update(I(d)).digest()
          , f = e();
        return o.outputLen = f.outputLen,
        o.blockLen = f.blockLen,
        o.create = () => e(),
        o
    }
    function V(e) {
        const o = (d, y) => e(y).update(I(d)).digest()
          , f = e({});
        return o.outputLen = f.outputLen,
        o.blockLen = f.blockLen,
        o.create = d => e(d),
        o
    }
    function C(e) {
        const o = (d, y) => e(y).update(I(d)).digest()
          , f = e({});
        return o.outputLen = f.outputLen,
        o.blockLen = f.blockLen,
        o.create = d => e(d),
        o
    }
    t.wrapConstructor = P,
    t.wrapConstructorWithOpts = V,
    t.wrapXOFConstructorWithOpts = C;
    function Et(e=32) {
        if (n.crypto && typeof n.crypto.getRandomValues == "function")
            return n.crypto.getRandomValues(new Uint8Array(e));
        if (n.crypto && typeof n.crypto.randomBytes == "function")
            return Uint8Array.from(n.crypto.randomBytes(e));
        throw new Error("crypto.getRandomValues must be defined")
    }
}
)(lt);
Object.defineProperty(h, "__esModule", {
    value: !0
});
h.shake256 = h.shake128 = h.keccak_512 = h.keccak_384 = h.keccak_256 = h.keccak_224 = h.sha3_512 = h.sha3_384 = h.sha3_256 = h.sha3_224 = h.Keccak = void 0;
h.keccakP = gt;
const O = s
  , w = lt
  , xt = BigInt(0)
  , _ = BigInt(1)
  , vt = BigInt(2)
  , Ft = BigInt(7)
  , Xt = BigInt(256)
  , jt = BigInt(113)
  , dt = []
  , yt = []
  , wt = [];
for (let t = 0, n = _, r = 1, i = 0; t < 24; t++) {
    [r,i] = [i, (2 * r + 3 * i) % 5],
    dt.push(2 * (5 * i + r)),
    yt.push((t + 1) * (t + 2) / 2 % 64);
    let c = xt;
    for (let u = 0; u < 7; u++)
        n = (n << _ ^ (n >> Ft) * jt) % Xt,
        n & vt && (c ^= _ << (_ << BigInt(u)) - _);
    wt.push(c)
}
const pt = (0,
O.split)(wt, !0)
  , Mt = pt[0]
  , Pt = pt[1]
  , D = (t, n, r) => r > 32 ? (0,
O.rotlBH)(t, n, r) : (0,
O.rotlSH)(t, n, r)
  , W = (t, n, r) => r > 32 ? (0,
O.rotlBL)(t, n, r) : (0,
O.rotlSL)(t, n, r);
function gt(t, n=24) {
    const r = new Uint32Array(10);
    for (let i = 24 - n; i < 24; i++) {
        for (let a = 0; a < 10; a++)
            r[a] = t[a] ^ t[a + 10] ^ t[a + 20] ^ t[a + 30] ^ t[a + 40];
        for (let a = 0; a < 10; a += 2) {
            const l = (a + 8) % 10
              , B = (a + 2) % 10
              , k = r[B]
              , g = r[B + 1]
              , E = D(k, g, 1) ^ r[l]
              , T = W(k, g, 1) ^ r[l + 1];
            for (let H = 0; H < 50; H += 10)
                t[a + H] ^= E,
                t[a + H + 1] ^= T
        }
        let c = t[2]
          , u = t[3];
        for (let a = 0; a < 24; a++) {
            const l = yt[a]
              , B = D(c, u, l)
              , k = W(c, u, l)
              , g = dt[a];
            c = t[g],
            u = t[g + 1],
            t[g] = B,
            t[g + 1] = k
        }
        for (let a = 0; a < 50; a += 10) {
            for (let l = 0; l < 10; l++)
                r[l] = t[a + l];
            for (let l = 0; l < 10; l++)
                t[a + l] ^= ~r[(l + 2) % 10] & r[(l + 4) % 10]
        }
        t[0] ^= Mt[i],
        t[1] ^= Pt[i]
    }
    (0,
    w.clean)(r)
}
class A extends w.Hash {
    constructor(n, r, i, c=!1, u=24) {
        if (super(),
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        this.enableXOF = !1,
        this.blockLen = n,
        this.suffix = r,
        this.outputLen = i,
        this.enableXOF = c,
        this.rounds = u,
        (0,
        w.anumber)(i),
        !(0 < n && n < 200))
            throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200),
        this.state32 = (0,
        w.u32)(this.state)
    }
    clone() {
        return this._cloneInto()
    }
    keccak() {
        (0,
        w.swap32IfBE)(this.state32),
        gt(this.state32, this.rounds),
        (0,
        w.swap32IfBE)(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(n) {
        (0,
        w.aexists)(this),
        n = (0,
        w.toBytes)(n),
        (0,
        w.abytes)(n);
        const {blockLen: r, state: i} = this
          , c = n.length;
        for (let u = 0; u < c; ) {
            const a = Math.min(r - this.pos, c - u);
            for (let l = 0; l < a; l++)
                i[this.pos++] ^= n[u++];
            this.pos === r && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: n, suffix: r, pos: i, blockLen: c} = this;
        n[i] ^= r,
        r & 128 && i === c - 1 && this.keccak(),
        n[c - 1] ^= 128,
        this.keccak()
    }
    writeInto(n) {
        (0,
        w.aexists)(this, !1),
        (0,
        w.abytes)(n),
        this.finish();
        const r = this.state
          , {blockLen: i} = this;
        for (let c = 0, u = n.length; c < u; ) {
            this.posOut >= i && this.keccak();
            const a = Math.min(i - this.posOut, u - c);
            n.set(r.subarray(this.posOut, this.posOut + a), c),
            this.posOut += a,
            c += a
        }
        return n
    }
    xofInto(n) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(n)
    }
    xof(n) {
        return (0,
        w.anumber)(n),
        this.xofInto(new Uint8Array(n))
    }
    digestInto(n) {
        if ((0,
        w.aoutput)(n, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(n),
        this.destroy(),
        n
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        (0,
        w.clean)(this.state)
    }
    _cloneInto(n) {
        const {blockLen: r, suffix: i, outputLen: c, rounds: u, enableXOF: a} = this;
        return n || (n = new A(r,i,c,a,u)),
        n.state32.set(this.state32),
        n.pos = this.pos,
        n.posOut = this.posOut,
        n.finished = this.finished,
        n.rounds = u,
        n.suffix = i,
        n.outputLen = c,
        n.enableXOF = a,
        n.destroyed = this.destroyed,
        n
    }
}
h.Keccak = A;
const b = (t, n, r) => (0,
w.createHasher)( () => new A(n,t,r));
h.sha3_224 = b(6, 144, 224 / 8);
h.sha3_256 = b(6, 136, 256 / 8);
h.sha3_384 = b(6, 104, 384 / 8);
h.sha3_512 = b(6, 72, 512 / 8);
h.keccak_224 = b(1, 144, 224 / 8);
h.keccak_256 = b(1, 136, 256 / 8);
h.keccak_384 = b(1, 104, 384 / 8);
h.keccak_512 = b(1, 72, 512 / 8);
const Lt = (t, n, r) => (0,
w.createXOFer)( (i={}) => new A(n,t,i.dkLen === void 0 ? r : i.dkLen,!0));
h.shake128 = Lt(31, 168, 128 / 8);
h.shake256 = Lt(31, 136, 256 / 8);
export {h as s, lt as u};
