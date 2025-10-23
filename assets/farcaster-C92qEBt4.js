var Af = Object.defineProperty;
var If = (n, e, t) => e in n ? Af(n, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : n[e] = t;
var Oe = (n, e, t) => If(n, typeof e != "symbol" ? e + "" : e, t);
var un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fs(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
function jo(n) {
    if (n.__esModule)
        return n;
    var e = n.default;
    if (typeof e == "function") {
        var t = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else
        t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    Object.keys(n).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(t, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return n[r]
            }
        })
    }),
    t
}
const wr = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ds(n) {
    return n instanceof Uint8Array || ArrayBuffer.isView(n) && n.constructor.name === "Uint8Array"
}
function ei(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error("positive integer expected, got " + n)
}
function Et(n, ...e) {
    if (!ds(n))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(n.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + n.length)
}
function Bf(n) {
    if (typeof n != "function" || typeof n.create != "function")
        throw new Error("Hash should be wrapped by utils.createHasher");
    ei(n.outputLen),
    ei(n.blockLen)
}
function Tr(n, e=!0) {
    if (n.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && n.finished)
        throw new Error("Hash#digest() has already been called")
}
function Oc(n, e) {
    Et(n);
    const t = e.outputLen;
    if (n.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
function Rf(n) {
    return new Uint32Array(n.buffer,n.byteOffset,Math.floor(n.byteLength / 4))
}
function Vn(...n) {
    for (let e = 0; e < n.length; e++)
        n[e].fill(0)
}
function Gs(n) {
    return new DataView(n.buffer,n.byteOffset,n.byteLength)
}
function fn(n, e) {
    return n << 32 - e | n >>> e
}
const Mf = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Tf(n) {
    return n << 24 & 4278190080 | n << 8 & 16711680 | n >>> 8 & 65280 | n >>> 24 & 255
}
function Of(n) {
    for (let e = 0; e < n.length; e++)
        n[e] = Tf(n[e]);
    return n
}
const Pa = Mf ? n => n : Of
  , Cc = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function"
  , Cf = Array.from({
    length: 256
}, (n, e) => e.toString(16).padStart(2, "0"));
function nr(n) {
    if (Et(n),
    Cc)
        return n.toHex();
    let e = "";
    for (let t = 0; t < n.length; t++)
        e += Cf[n[t]];
    return e
}
const _n = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function Ua(n) {
    if (n >= _n._0 && n <= _n._9)
        return n - _n._0;
    if (n >= _n.A && n <= _n.F)
        return n - (_n.A - 10);
    if (n >= _n.a && n <= _n.f)
        return n - (_n.a - 10)
}
function zo(n) {
    if (typeof n != "string")
        throw new Error("hex string expected, got " + typeof n);
    if (Cc)
        return Uint8Array.fromHex(n);
    const e = n.length
      , t = e / 2;
    if (e % 2)
        throw new Error("hex string expected, got unpadded hex of length " + e);
    const r = new Uint8Array(t);
    for (let s = 0, i = 0; s < t; s++,
    i += 2) {
        const o = Ua(n.charCodeAt(i))
          , a = Ua(n.charCodeAt(i + 1));
        if (o === void 0 || a === void 0) {
            const l = n[i] + n[i + 1];
            throw new Error('hex string expected, got non-hex character "' + l + '" at index ' + i)
        }
        r[s] = o * 16 + a
    }
    return r
}
function jr(n) {
    if (typeof n != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(n))
}
function hs(n) {
    return typeof n == "string" && (n = jr(n)),
    Et(n),
    n
}
function Ft(...n) {
    let e = 0;
    for (let r = 0; r < n.length; r++) {
        const s = n[r];
        Et(s),
        e += s.length
    }
    const t = new Uint8Array(e);
    for (let r = 0, s = 0; r < n.length; r++) {
        const i = n[r];
        t.set(i, s),
        s += i.length
    }
    return t
}
class qo {
}
function ps(n) {
    const e = r => n().update(hs(r)).digest()
      , t = n();
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = () => n(),
    e
}
function $o(n=32) {
    if (wr && typeof wr.getRandomValues == "function")
        return wr.getRandomValues(new Uint8Array(n));
    if (wr && typeof wr.randomBytes == "function")
        return Uint8Array.from(wr.randomBytes(n));
    throw new Error("crypto.getRandomValues must be defined")
}
function Lf(n, e, t, r) {
    if (typeof n.setBigUint64 == "function")
        return n.setBigUint64(e, t, r);
    const s = BigInt(32)
      , i = BigInt(4294967295)
      , o = Number(t >> s & i)
      , a = Number(t & i)
      , l = r ? 4 : 0
      , m = r ? 0 : 4;
    n.setUint32(e + l, o, r),
    n.setUint32(e + m, a, r)
}
function Nf(n, e, t) {
    return n & e ^ ~n & t
}
function Pf(n, e, t) {
    return n & e ^ n & t ^ e & t
}
class Lc extends qo {
    constructor(e, t, r, s) {
        super(),
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.blockLen = e,
        this.outputLen = t,
        this.padOffset = r,
        this.isLE = s,
        this.buffer = new Uint8Array(e),
        this.view = Gs(this.buffer)
    }
    update(e) {
        Tr(this),
        e = hs(e),
        Et(e);
        const {view: t, buffer: r, blockLen: s} = this
          , i = e.length;
        for (let o = 0; o < i; ) {
            const a = Math.min(s - this.pos, i - o);
            if (a === s) {
                const l = Gs(e);
                for (; s <= i - o; o += s)
                    this.process(l, o);
                continue
            }
            r.set(e.subarray(o, o + a), this.pos),
            this.pos += a,
            o += a,
            this.pos === s && (this.process(t, 0),
            this.pos = 0)
        }
        return this.length += e.length,
        this.roundClean(),
        this
    }
    digestInto(e) {
        Tr(this),
        Oc(e, this),
        this.finished = !0;
        const {buffer: t, view: r, blockLen: s, isLE: i} = this;
        let {pos: o} = this;
        t[o++] = 128,
        Vn(this.buffer.subarray(o)),
        this.padOffset > s - o && (this.process(r, 0),
        o = 0);
        for (let E = o; E < s; E++)
            t[E] = 0;
        Lf(r, s - 8, BigInt(this.length * 8), i),
        this.process(r, 0);
        const a = Gs(e)
          , l = this.outputLen;
        if (l % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        const m = l / 4
          , h = this.get();
        if (m > h.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let E = 0; E < m; E++)
            a.setUint32(4 * E, h[E], i)
    }
    digest() {
        const {buffer: e, outputLen: t} = this;
        this.digestInto(e);
        const r = e.slice(0, t);
        return this.destroy(),
        r
    }
    _cloneInto(e) {
        e || (e = new this.constructor),
        e.set(...this.get());
        const {blockLen: t, buffer: r, length: s, finished: i, destroyed: o, pos: a} = this;
        return e.destroyed = o,
        e.finished = i,
        e.length = s,
        e.pos = a,
        s % t && e.buffer.set(r),
        e
    }
    clone() {
        return this._cloneInto()
    }
}
const Tn = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , Mt = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])
  , Tt = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209])
  , Ii = BigInt(2 ** 32 - 1)
  , Fa = BigInt(32);
function Uf(n, e=!1) {
    return e ? {
        h: Number(n & Ii),
        l: Number(n >> Fa & Ii)
    } : {
        h: Number(n >> Fa & Ii) | 0,
        l: Number(n & Ii) | 0
    }
}
function Nc(n, e=!1) {
    const t = n.length;
    let r = new Uint32Array(t)
      , s = new Uint32Array(t);
    for (let i = 0; i < t; i++) {
        const {h: o, l: a} = Uf(n[i], e);
        [r[i],s[i]] = [o, a]
    }
    return [r, s]
}
const Da = (n, e, t) => n >>> t
  , ja = (n, e, t) => n << 32 - t | e >>> t
  , br = (n, e, t) => n >>> t | e << 32 - t
  , vr = (n, e, t) => n << 32 - t | e >>> t
  , Bi = (n, e, t) => n << 64 - t | e >>> t - 32
  , Ri = (n, e, t) => n >>> t - 32 | e << 64 - t
  , Ff = (n, e, t) => n << t | e >>> 32 - t
  , Df = (n, e, t) => e << t | n >>> 32 - t
  , jf = (n, e, t) => e << t - 32 | n >>> 64 - t
  , zf = (n, e, t) => n << t - 32 | e >>> 64 - t;
function xn(n, e, t, r) {
    const s = (e >>> 0) + (r >>> 0);
    return {
        h: n + t + (s / 2 ** 32 | 0) | 0,
        l: s | 0
    }
}
const qf = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0)
  , $f = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0
  , Hf = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0)
  , Vf = (n, e, t, r, s) => e + t + r + s + (n / 2 ** 32 | 0) | 0
  , Zf = (n, e, t, r, s) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (s >>> 0)
  , Wf = (n, e, t, r, s, i) => e + t + r + s + i + (n / 2 ** 32 | 0) | 0
  , Kf = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , On = new Uint32Array(64);
class Gf extends Lc {
    constructor(e=32) {
        super(64, e, 8, !1),
        this.A = Tn[0] | 0,
        this.B = Tn[1] | 0,
        this.C = Tn[2] | 0,
        this.D = Tn[3] | 0,
        this.E = Tn[4] | 0,
        this.F = Tn[5] | 0,
        this.G = Tn[6] | 0,
        this.H = Tn[7] | 0
    }
    get() {
        const {A: e, B: t, C: r, D: s, E: i, F: o, G: a, H: l} = this;
        return [e, t, r, s, i, o, a, l]
    }
    set(e, t, r, s, i, o, a, l) {
        this.A = e | 0,
        this.B = t | 0,
        this.C = r | 0,
        this.D = s | 0,
        this.E = i | 0,
        this.F = o | 0,
        this.G = a | 0,
        this.H = l | 0
    }
    process(e, t) {
        for (let E = 0; E < 16; E++,
        t += 4)
            On[E] = e.getUint32(t, !1);
        for (let E = 16; E < 64; E++) {
            const B = On[E - 15]
              , k = On[E - 2]
              , O = fn(B, 7) ^ fn(B, 18) ^ B >>> 3
              , R = fn(k, 17) ^ fn(k, 19) ^ k >>> 10;
            On[E] = R + On[E - 7] + O + On[E - 16] | 0
        }
        let {A: r, B: s, C: i, D: o, E: a, F: l, G: m, H: h} = this;
        for (let E = 0; E < 64; E++) {
            const B = fn(a, 6) ^ fn(a, 11) ^ fn(a, 25)
              , k = h + B + Nf(a, l, m) + Kf[E] + On[E] | 0
              , R = (fn(r, 2) ^ fn(r, 13) ^ fn(r, 22)) + Pf(r, s, i) | 0;
            h = m,
            m = l,
            l = a,
            a = o + k | 0,
            o = i,
            i = s,
            s = r,
            r = k + R | 0
        }
        r = r + this.A | 0,
        s = s + this.B | 0,
        i = i + this.C | 0,
        o = o + this.D | 0,
        a = a + this.E | 0,
        l = l + this.F | 0,
        m = m + this.G | 0,
        h = h + this.H | 0,
        this.set(r, s, i, o, a, l, m, h)
    }
    roundClean() {
        Vn(On)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        Vn(this.buffer)
    }
}
const Pc = Nc(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(n => BigInt(n)))
  , Jf = Pc[0]
  , Yf = Pc[1]
  , Cn = new Uint32Array(80)
  , Ln = new Uint32Array(80);
class Uc extends Lc {
    constructor(e=64) {
        super(128, e, 16, !1),
        this.Ah = Tt[0] | 0,
        this.Al = Tt[1] | 0,
        this.Bh = Tt[2] | 0,
        this.Bl = Tt[3] | 0,
        this.Ch = Tt[4] | 0,
        this.Cl = Tt[5] | 0,
        this.Dh = Tt[6] | 0,
        this.Dl = Tt[7] | 0,
        this.Eh = Tt[8] | 0,
        this.El = Tt[9] | 0,
        this.Fh = Tt[10] | 0,
        this.Fl = Tt[11] | 0,
        this.Gh = Tt[12] | 0,
        this.Gl = Tt[13] | 0,
        this.Hh = Tt[14] | 0,
        this.Hl = Tt[15] | 0
    }
    get() {
        const {Ah: e, Al: t, Bh: r, Bl: s, Ch: i, Cl: o, Dh: a, Dl: l, Eh: m, El: h, Fh: E, Fl: B, Gh: k, Gl: O, Hh: R, Hl: A} = this;
        return [e, t, r, s, i, o, a, l, m, h, E, B, k, O, R, A]
    }
    set(e, t, r, s, i, o, a, l, m, h, E, B, k, O, R, A) {
        this.Ah = e | 0,
        this.Al = t | 0,
        this.Bh = r | 0,
        this.Bl = s | 0,
        this.Ch = i | 0,
        this.Cl = o | 0,
        this.Dh = a | 0,
        this.Dl = l | 0,
        this.Eh = m | 0,
        this.El = h | 0,
        this.Fh = E | 0,
        this.Fl = B | 0,
        this.Gh = k | 0,
        this.Gl = O | 0,
        this.Hh = R | 0,
        this.Hl = A | 0
    }
    process(e, t) {
        for (let q = 0; q < 16; q++,
        t += 4)
            Cn[q] = e.getUint32(t),
            Ln[q] = e.getUint32(t += 4);
        for (let q = 16; q < 80; q++) {
            const X = Cn[q - 15] | 0
              , j = Ln[q - 15] | 0
              , K = br(X, j, 1) ^ br(X, j, 8) ^ Da(X, j, 7)
              , te = vr(X, j, 1) ^ vr(X, j, 8) ^ ja(X, j, 7)
              , Q = Cn[q - 2] | 0
              , N = Ln[q - 2] | 0
              , H = br(Q, N, 19) ^ Bi(Q, N, 61) ^ Da(Q, N, 6)
              , U = vr(Q, N, 19) ^ Ri(Q, N, 61) ^ ja(Q, N, 6)
              , $ = Hf(te, U, Ln[q - 7], Ln[q - 16])
              , w = Vf($, K, H, Cn[q - 7], Cn[q - 16]);
            Cn[q] = w | 0,
            Ln[q] = $ | 0
        }
        let {Ah: r, Al: s, Bh: i, Bl: o, Ch: a, Cl: l, Dh: m, Dl: h, Eh: E, El: B, Fh: k, Fl: O, Gh: R, Gl: A, Hh: F, Hl: z} = this;
        for (let q = 0; q < 80; q++) {
            const X = br(E, B, 14) ^ br(E, B, 18) ^ Bi(E, B, 41)
              , j = vr(E, B, 14) ^ vr(E, B, 18) ^ Ri(E, B, 41)
              , K = E & k ^ ~E & R
              , te = B & O ^ ~B & A
              , Q = Zf(z, j, te, Yf[q], Ln[q])
              , N = Wf(Q, F, X, K, Jf[q], Cn[q])
              , H = Q | 0
              , U = br(r, s, 28) ^ Bi(r, s, 34) ^ Bi(r, s, 39)
              , $ = vr(r, s, 28) ^ Ri(r, s, 34) ^ Ri(r, s, 39)
              , w = r & i ^ r & a ^ i & a
              , c = s & o ^ s & l ^ o & l;
            F = R | 0,
            z = A | 0,
            R = k | 0,
            A = O | 0,
            k = E | 0,
            O = B | 0,
            {h: E, l: B} = xn(m | 0, h | 0, N | 0, H | 0),
            m = a | 0,
            h = l | 0,
            a = i | 0,
            l = o | 0,
            i = r | 0,
            o = s | 0;
            const p = qf(H, $, c);
            r = $f(p, N, U, w),
            s = p | 0
        }
        ({h: r, l: s} = xn(this.Ah | 0, this.Al | 0, r | 0, s | 0)),
        {h: i, l: o} = xn(this.Bh | 0, this.Bl | 0, i | 0, o | 0),
        {h: a, l} = xn(this.Ch | 0, this.Cl | 0, a | 0, l | 0),
        {h: m, l: h} = xn(this.Dh | 0, this.Dl | 0, m | 0, h | 0),
        {h: E, l: B} = xn(this.Eh | 0, this.El | 0, E | 0, B | 0),
        {h: k, l: O} = xn(this.Fh | 0, this.Fl | 0, k | 0, O | 0),
        {h: R, l: A} = xn(this.Gh | 0, this.Gl | 0, R | 0, A | 0),
        {h: F, l: z} = xn(this.Hh | 0, this.Hl | 0, F | 0, z | 0),
        this.set(r, s, i, o, a, l, m, h, E, B, k, O, R, A, F, z)
    }
    roundClean() {
        Vn(Cn, Ln)
    }
    destroy() {
        Vn(this.buffer),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
class Xf extends Uc {
    constructor() {
        super(48),
        this.Ah = Mt[0] | 0,
        this.Al = Mt[1] | 0,
        this.Bh = Mt[2] | 0,
        this.Bl = Mt[3] | 0,
        this.Ch = Mt[4] | 0,
        this.Cl = Mt[5] | 0,
        this.Dh = Mt[6] | 0,
        this.Dl = Mt[7] | 0,
        this.Eh = Mt[8] | 0,
        this.El = Mt[9] | 0,
        this.Fh = Mt[10] | 0,
        this.Fl = Mt[11] | 0,
        this.Gh = Mt[12] | 0,
        this.Gl = Mt[13] | 0,
        this.Hh = Mt[14] | 0,
        this.Hl = Mt[15] | 0
    }
}
const Fc = ps( () => new Gf)
  , ms = ps( () => new Uc)
  , kw = ps( () => new Xf)
  , za = Fc
  , Qf = BigInt(0)
  , Zr = BigInt(1)
  , ed = BigInt(2)
  , td = BigInt(7)
  , nd = BigInt(256)
  , rd = BigInt(113)
  , Dc = []
  , jc = []
  , zc = [];
for (let n = 0, e = Zr, t = 1, r = 0; n < 24; n++) {
    [t,r] = [r, (2 * t + 3 * r) % 5],
    Dc.push(2 * (5 * r + t)),
    jc.push((n + 1) * (n + 2) / 2 % 64);
    let s = Qf;
    for (let i = 0; i < 7; i++)
        e = (e << Zr ^ (e >> td) * rd) % nd,
        e & ed && (s ^= Zr << (Zr << BigInt(i)) - Zr);
    zc.push(s)
}
const qc = Nc(zc, !0)
  , id = qc[0]
  , sd = qc[1]
  , qa = (n, e, t) => t > 32 ? jf(n, e, t) : Ff(n, e, t)
  , $a = (n, e, t) => t > 32 ? zf(n, e, t) : Df(n, e, t);
function od(n, e=24) {
    const t = new Uint32Array(10);
    for (let r = 24 - e; r < 24; r++) {
        for (let o = 0; o < 10; o++)
            t[o] = n[o] ^ n[o + 10] ^ n[o + 20] ^ n[o + 30] ^ n[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const a = (o + 8) % 10
              , l = (o + 2) % 10
              , m = t[l]
              , h = t[l + 1]
              , E = qa(m, h, 1) ^ t[a]
              , B = $a(m, h, 1) ^ t[a + 1];
            for (let k = 0; k < 50; k += 10)
                n[o + k] ^= E,
                n[o + k + 1] ^= B
        }
        let s = n[2]
          , i = n[3];
        for (let o = 0; o < 24; o++) {
            const a = jc[o]
              , l = qa(s, i, a)
              , m = $a(s, i, a)
              , h = Dc[o];
            s = n[h],
            i = n[h + 1],
            n[h] = l,
            n[h + 1] = m
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                t[a] = n[o + a];
            for (let a = 0; a < 10; a++)
                n[o + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10]
        }
        n[0] ^= id[r],
        n[1] ^= sd[r]
    }
    Vn(t)
}
class Ho extends qo {
    constructor(e, t, r, s=!1, i=24) {
        if (super(),
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        this.enableXOF = !1,
        this.blockLen = e,
        this.suffix = t,
        this.outputLen = r,
        this.enableXOF = s,
        this.rounds = i,
        ei(r),
        !(0 < e && e < 200))
            throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200),
        this.state32 = Rf(this.state)
    }
    clone() {
        return this._cloneInto()
    }
    keccak() {
        Pa(this.state32),
        od(this.state32, this.rounds),
        Pa(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        Tr(this),
        e = hs(e),
        Et(e);
        const {blockLen: t, state: r} = this
          , s = e.length;
        for (let i = 0; i < s; ) {
            const o = Math.min(t - this.pos, s - i);
            for (let a = 0; a < o; a++)
                r[this.pos++] ^= e[i++];
            this.pos === t && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        const {state: e, suffix: t, pos: r, blockLen: s} = this;
        e[r] ^= t,
        t & 128 && r === s - 1 && this.keccak(),
        e[s - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        Tr(this, !1),
        Et(e),
        this.finish();
        const t = this.state
          , {blockLen: r} = this;
        for (let s = 0, i = e.length; s < i; ) {
            this.posOut >= r && this.keccak();
            const o = Math.min(r - this.posOut, i - s);
            e.set(t.subarray(this.posOut, this.posOut + o), s),
            this.posOut += o,
            s += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return ei(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (Oc(e, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(e),
        this.destroy(),
        e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        Vn(this.state)
    }
    _cloneInto(e) {
        const {blockLen: t, suffix: r, outputLen: s, rounds: i, enableXOF: o} = this;
        return e || (e = new Ho(t,r,s,o,i)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = i,
        e.suffix = r,
        e.outputLen = s,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
const ad = (n, e, t) => ps( () => new Ho(e,n,t))
  , Aw = ad(1, 136, 256 / 8);
var _t = {}
  , gs = {};
gs.byteLength = ld;
gs.toByteArray = dd;
gs.fromByteArray = md;
var hn = []
  , nn = []
  , cd = typeof Uint8Array < "u" ? Uint8Array : Array
  , Js = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var _r = 0, ud = Js.length; _r < ud; ++_r)
    hn[_r] = Js[_r],
    nn[Js.charCodeAt(_r)] = _r;
nn[45] = 62;
nn[95] = 63;
function $c(n) {
    var e = n.length;
    if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var t = n.indexOf("=");
    t === -1 && (t = e);
    var r = t === e ? 0 : 4 - t % 4;
    return [t, r]
}
function ld(n) {
    var e = $c(n)
      , t = e[0]
      , r = e[1];
    return (t + r) * 3 / 4 - r
}
function fd(n, e, t) {
    return (e + t) * 3 / 4 - t
}
function dd(n) {
    var e, t = $c(n), r = t[0], s = t[1], i = new cd(fd(n, r, s)), o = 0, a = s > 0 ? r - 4 : r, l;
    for (l = 0; l < a; l += 4)
        e = nn[n.charCodeAt(l)] << 18 | nn[n.charCodeAt(l + 1)] << 12 | nn[n.charCodeAt(l + 2)] << 6 | nn[n.charCodeAt(l + 3)],
        i[o++] = e >> 16 & 255,
        i[o++] = e >> 8 & 255,
        i[o++] = e & 255;
    return s === 2 && (e = nn[n.charCodeAt(l)] << 2 | nn[n.charCodeAt(l + 1)] >> 4,
    i[o++] = e & 255),
    s === 1 && (e = nn[n.charCodeAt(l)] << 10 | nn[n.charCodeAt(l + 1)] << 4 | nn[n.charCodeAt(l + 2)] >> 2,
    i[o++] = e >> 8 & 255,
    i[o++] = e & 255),
    i
}
function hd(n) {
    return hn[n >> 18 & 63] + hn[n >> 12 & 63] + hn[n >> 6 & 63] + hn[n & 63]
}
function pd(n, e, t) {
    for (var r, s = [], i = e; i < t; i += 3)
        r = (n[i] << 16 & 16711680) + (n[i + 1] << 8 & 65280) + (n[i + 2] & 255),
        s.push(hd(r));
    return s.join("")
}
function md(n) {
    for (var e, t = n.length, r = t % 3, s = [], i = 16383, o = 0, a = t - r; o < a; o += i)
        s.push(pd(n, o, o + i > a ? a : o + i));
    return r === 1 ? (e = n[t - 1],
    s.push(hn[e >> 2] + hn[e << 4 & 63] + "==")) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1],
    s.push(hn[e >> 10] + hn[e >> 4 & 63] + hn[e << 2 & 63] + "=")),
    s.join("")
}
var Vo = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Vo.read = function(n, e, t, r, s) {
    var i, o, a = s * 8 - r - 1, l = (1 << a) - 1, m = l >> 1, h = -7, E = t ? s - 1 : 0, B = t ? -1 : 1, k = n[e + E];
    for (E += B,
    i = k & (1 << -h) - 1,
    k >>= -h,
    h += a; h > 0; i = i * 256 + n[e + E],
    E += B,
    h -= 8)
        ;
    for (o = i & (1 << -h) - 1,
    i >>= -h,
    h += r; h > 0; o = o * 256 + n[e + E],
    E += B,
    h -= 8)
        ;
    if (i === 0)
        i = 1 - m;
    else {
        if (i === l)
            return o ? NaN : (k ? -1 : 1) * (1 / 0);
        o = o + Math.pow(2, r),
        i = i - m
    }
    return (k ? -1 : 1) * o * Math.pow(2, i - r)
}
;
Vo.write = function(n, e, t, r, s, i) {
    var o, a, l, m = i * 8 - s - 1, h = (1 << m) - 1, E = h >> 1, B = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = r ? 0 : i - 1, O = r ? 1 : -1, R = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e),
    isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
    o = h) : (o = Math.floor(Math.log(e) / Math.LN2),
    e * (l = Math.pow(2, -o)) < 1 && (o--,
    l *= 2),
    o + E >= 1 ? e += B / l : e += B * Math.pow(2, 1 - E),
    e * l >= 2 && (o++,
    l /= 2),
    o + E >= h ? (a = 0,
    o = h) : o + E >= 1 ? (a = (e * l - 1) * Math.pow(2, s),
    o = o + E) : (a = e * Math.pow(2, E - 1) * Math.pow(2, s),
    o = 0)); s >= 8; n[t + k] = a & 255,
    k += O,
    a /= 256,
    s -= 8)
        ;
    for (o = o << s | a,
    m += s; m > 0; n[t + k] = o & 255,
    k += O,
    o /= 256,
    m -= 8)
        ;
    n[t + k - O] |= R * 128
}
;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
    const e = gs
      , t = Vo
      , r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    n.Buffer = h,
    n.SlowBuffer = j,
    n.INSPECT_MAX_BYTES = 50;
    const s = 2147483647;
    n.kMaxLength = s;
    const {Uint8Array: i, ArrayBuffer: o, SharedArrayBuffer: a} = globalThis;
    h.TYPED_ARRAY_SUPPORT = l(),
    !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function l() {
        try {
            const y = new i(1)
              , u = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(u, i.prototype),
            Object.setPrototypeOf(y, u),
            y.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(h.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (h.isBuffer(this))
                return this.buffer
        }
    }),
    Object.defineProperty(h.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (h.isBuffer(this))
                return this.byteOffset
        }
    });
    function m(y) {
        if (y > s)
            throw new RangeError('The value "' + y + '" is invalid for option "size"');
        const u = new i(y);
        return Object.setPrototypeOf(u, h.prototype),
        u
    }
    function h(y, u, f) {
        if (typeof y == "number") {
            if (typeof u == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return O(y)
        }
        return E(y, u, f)
    }
    h.poolSize = 8192;
    function E(y, u, f) {
        if (typeof y == "string")
            return R(y, u);
        if (o.isView(y))
            return F(y);
        if (y == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y);
        if (Kt(y, o) || y && Kt(y.buffer, o) || typeof a < "u" && (Kt(y, a) || y && Kt(y.buffer, a)))
            return z(y, u, f);
        if (typeof y == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        const _ = y.valueOf && y.valueOf();
        if (_ != null && _ !== y)
            return h.from(_, u, f);
        const M = q(y);
        if (M)
            return M;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
            return h.from(y[Symbol.toPrimitive]("string"), u, f);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y)
    }
    h.from = function(y, u, f) {
        return E(y, u, f)
    }
    ,
    Object.setPrototypeOf(h.prototype, i.prototype),
    Object.setPrototypeOf(h, i);
    function B(y) {
        if (typeof y != "number")
            throw new TypeError('"size" argument must be of type number');
        if (y < 0)
            throw new RangeError('The value "' + y + '" is invalid for option "size"')
    }
    function k(y, u, f) {
        return B(y),
        y <= 0 ? m(y) : u !== void 0 ? typeof f == "string" ? m(y).fill(u, f) : m(y).fill(u) : m(y)
    }
    h.alloc = function(y, u, f) {
        return k(y, u, f)
    }
    ;
    function O(y) {
        return B(y),
        m(y < 0 ? 0 : X(y) | 0)
    }
    h.allocUnsafe = function(y) {
        return O(y)
    }
    ,
    h.allocUnsafeSlow = function(y) {
        return O(y)
    }
    ;
    function R(y, u) {
        if ((typeof u != "string" || u === "") && (u = "utf8"),
        !h.isEncoding(u))
            throw new TypeError("Unknown encoding: " + u);
        const f = K(y, u) | 0;
        let _ = m(f);
        const M = _.write(y, u);
        return M !== f && (_ = _.slice(0, M)),
        _
    }
    function A(y) {
        const u = y.length < 0 ? 0 : X(y.length) | 0
          , f = m(u);
        for (let _ = 0; _ < u; _ += 1)
            f[_] = y[_] & 255;
        return f
    }
    function F(y) {
        if (Kt(y, i)) {
            const u = new i(y);
            return z(u.buffer, u.byteOffset, u.byteLength)
        }
        return A(y)
    }
    function z(y, u, f) {
        if (u < 0 || y.byteLength < u)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (y.byteLength < u + (f || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let _;
        return u === void 0 && f === void 0 ? _ = new i(y) : f === void 0 ? _ = new i(y,u) : _ = new i(y,u,f),
        Object.setPrototypeOf(_, h.prototype),
        _
    }
    function q(y) {
        if (h.isBuffer(y)) {
            const u = X(y.length) | 0
              , f = m(u);
            return f.length === 0 || y.copy(f, 0, 0, u),
            f
        }
        if (y.length !== void 0)
            return typeof y.length != "number" || qe(y.length) ? m(0) : A(y);
        if (y.type === "Buffer" && Array.isArray(y.data))
            return A(y.data)
    }
    function X(y) {
        if (y >= s)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
        return y | 0
    }
    function j(y) {
        return +y != y && (y = 0),
        h.alloc(+y)
    }
    h.isBuffer = function(u) {
        return u != null && u._isBuffer === !0 && u !== h.prototype
    }
    ,
    h.compare = function(u, f) {
        if (Kt(u, i) && (u = h.from(u, u.offset, u.byteLength)),
        Kt(f, i) && (f = h.from(f, f.offset, f.byteLength)),
        !h.isBuffer(u) || !h.isBuffer(f))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (u === f)
            return 0;
        let _ = u.length
          , M = f.length;
        for (let C = 0, D = Math.min(_, M); C < D; ++C)
            if (u[C] !== f[C]) {
                _ = u[C],
                M = f[C];
                break
            }
        return _ < M ? -1 : M < _ ? 1 : 0
    }
    ,
    h.isEncoding = function(u) {
        switch (String(u).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ,
    h.concat = function(u, f) {
        if (!Array.isArray(u))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (u.length === 0)
            return h.alloc(0);
        let _;
        if (f === void 0)
            for (f = 0,
            _ = 0; _ < u.length; ++_)
                f += u[_].length;
        const M = h.allocUnsafe(f);
        let C = 0;
        for (_ = 0; _ < u.length; ++_) {
            let D = u[_];
            if (Kt(D, i))
                C + D.length > M.length ? (h.isBuffer(D) || (D = h.from(D)),
                D.copy(M, C)) : i.prototype.set.call(M, D, C);
            else if (h.isBuffer(D))
                D.copy(M, C);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            C += D.length
        }
        return M
    }
    ;
    function K(y, u) {
        if (h.isBuffer(y))
            return y.length;
        if (o.isView(y) || Kt(y, o))
            return y.byteLength;
        if (typeof y != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y);
        const f = y.length
          , _ = arguments.length > 2 && arguments[2] === !0;
        if (!_ && f === 0)
            return 0;
        let M = !1;
        for (; ; )
            switch (u) {
            case "ascii":
            case "latin1":
            case "binary":
                return f;
            case "utf8":
            case "utf-8":
                return ze(y).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return f * 2;
            case "hex":
                return f >>> 1;
            case "base64":
                return Ze(y).length;
            default:
                if (M)
                    return _ ? -1 : ze(y).length;
                u = ("" + u).toLowerCase(),
                M = !0
            }
    }
    h.byteLength = K;
    function te(y, u, f) {
        let _ = !1;
        if ((u === void 0 || u < 0) && (u = 0),
        u > this.length || ((f === void 0 || f > this.length) && (f = this.length),
        f <= 0) || (f >>>= 0,
        u >>>= 0,
        f <= u))
            return "";
        for (y || (y = "utf8"); ; )
            switch (y) {
            case "hex":
                return d(this, u, f);
            case "utf8":
            case "utf-8":
                return b(this, u, f);
            case "ascii":
                return T(this, u, f);
            case "latin1":
            case "binary":
                return v(this, u, f);
            case "base64":
                return g(this, u, f);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return S(this, u, f);
            default:
                if (_)
                    throw new TypeError("Unknown encoding: " + y);
                y = (y + "").toLowerCase(),
                _ = !0
            }
    }
    h.prototype._isBuffer = !0;
    function Q(y, u, f) {
        const _ = y[u];
        y[u] = y[f],
        y[f] = _
    }
    h.prototype.swap16 = function() {
        const u = this.length;
        if (u % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let f = 0; f < u; f += 2)
            Q(this, f, f + 1);
        return this
    }
    ,
    h.prototype.swap32 = function() {
        const u = this.length;
        if (u % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let f = 0; f < u; f += 4)
            Q(this, f, f + 3),
            Q(this, f + 1, f + 2);
        return this
    }
    ,
    h.prototype.swap64 = function() {
        const u = this.length;
        if (u % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let f = 0; f < u; f += 8)
            Q(this, f, f + 7),
            Q(this, f + 1, f + 6),
            Q(this, f + 2, f + 5),
            Q(this, f + 3, f + 4);
        return this
    }
    ,
    h.prototype.toString = function() {
        const u = this.length;
        return u === 0 ? "" : arguments.length === 0 ? b(this, 0, u) : te.apply(this, arguments)
    }
    ,
    h.prototype.toLocaleString = h.prototype.toString,
    h.prototype.equals = function(u) {
        if (!h.isBuffer(u))
            throw new TypeError("Argument must be a Buffer");
        return this === u ? !0 : h.compare(this, u) === 0
    }
    ,
    h.prototype.inspect = function() {
        let u = "";
        const f = n.INSPECT_MAX_BYTES;
        return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(),
        this.length > f && (u += " ... "),
        "<Buffer " + u + ">"
    }
    ,
    r && (h.prototype[r] = h.prototype.inspect),
    h.prototype.compare = function(u, f, _, M, C) {
        if (Kt(u, i) && (u = h.from(u, u.offset, u.byteLength)),
        !h.isBuffer(u))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
        if (f === void 0 && (f = 0),
        _ === void 0 && (_ = u ? u.length : 0),
        M === void 0 && (M = 0),
        C === void 0 && (C = this.length),
        f < 0 || _ > u.length || M < 0 || C > this.length)
            throw new RangeError("out of range index");
        if (M >= C && f >= _)
            return 0;
        if (M >= C)
            return -1;
        if (f >= _)
            return 1;
        if (f >>>= 0,
        _ >>>= 0,
        M >>>= 0,
        C >>>= 0,
        this === u)
            return 0;
        let D = C - M
          , be = _ - f;
        const we = Math.min(D, be)
          , me = this.slice(M, C)
          , Fe = u.slice(f, _);
        for (let de = 0; de < we; ++de)
            if (me[de] !== Fe[de]) {
                D = me[de],
                be = Fe[de];
                break
            }
        return D < be ? -1 : be < D ? 1 : 0
    }
    ;
    function N(y, u, f, _, M) {
        if (y.length === 0)
            return -1;
        if (typeof f == "string" ? (_ = f,
        f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648),
        f = +f,
        qe(f) && (f = M ? 0 : y.length - 1),
        f < 0 && (f = y.length + f),
        f >= y.length) {
            if (M)
                return -1;
            f = y.length - 1
        } else if (f < 0)
            if (M)
                f = 0;
            else
                return -1;
        if (typeof u == "string" && (u = h.from(u, _)),
        h.isBuffer(u))
            return u.length === 0 ? -1 : H(y, u, f, _, M);
        if (typeof u == "number")
            return u = u & 255,
            typeof i.prototype.indexOf == "function" ? M ? i.prototype.indexOf.call(y, u, f) : i.prototype.lastIndexOf.call(y, u, f) : H(y, [u], f, _, M);
        throw new TypeError("val must be string, number or Buffer")
    }
    function H(y, u, f, _, M) {
        let C = 1
          , D = y.length
          , be = u.length;
        if (_ !== void 0 && (_ = String(_).toLowerCase(),
        _ === "ucs2" || _ === "ucs-2" || _ === "utf16le" || _ === "utf-16le")) {
            if (y.length < 2 || u.length < 2)
                return -1;
            C = 2,
            D /= 2,
            be /= 2,
            f /= 2
        }
        function we(Fe, de) {
            return C === 1 ? Fe[de] : Fe.readUInt16BE(de * C)
        }
        let me;
        if (M) {
            let Fe = -1;
            for (me = f; me < D; me++)
                if (we(y, me) === we(u, Fe === -1 ? 0 : me - Fe)) {
                    if (Fe === -1 && (Fe = me),
                    me - Fe + 1 === be)
                        return Fe * C
                } else
                    Fe !== -1 && (me -= me - Fe),
                    Fe = -1
        } else
            for (f + be > D && (f = D - be),
            me = f; me >= 0; me--) {
                let Fe = !0;
                for (let de = 0; de < be; de++)
                    if (we(y, me + de) !== we(u, de)) {
                        Fe = !1;
                        break
                    }
                if (Fe)
                    return me
            }
        return -1
    }
    h.prototype.includes = function(u, f, _) {
        return this.indexOf(u, f, _) !== -1
    }
    ,
    h.prototype.indexOf = function(u, f, _) {
        return N(this, u, f, _, !0)
    }
    ,
    h.prototype.lastIndexOf = function(u, f, _) {
        return N(this, u, f, _, !1)
    }
    ;
    function U(y, u, f, _) {
        f = Number(f) || 0;
        const M = y.length - f;
        _ ? (_ = Number(_),
        _ > M && (_ = M)) : _ = M;
        const C = u.length;
        _ > C / 2 && (_ = C / 2);
        let D;
        for (D = 0; D < _; ++D) {
            const be = parseInt(u.substr(D * 2, 2), 16);
            if (qe(be))
                return D;
            y[f + D] = be
        }
        return D
    }
    function $(y, u, f, _) {
        return Ue(ze(u, y.length - f), y, f, _)
    }
    function w(y, u, f, _) {
        return Ue(Xe(u), y, f, _)
    }
    function c(y, u, f, _) {
        return Ue(Ze(u), y, f, _)
    }
    function p(y, u, f, _) {
        return Ue(Ai(u, y.length - f), y, f, _)
    }
    h.prototype.write = function(u, f, _, M) {
        if (f === void 0)
            M = "utf8",
            _ = this.length,
            f = 0;
        else if (_ === void 0 && typeof f == "string")
            M = f,
            _ = this.length,
            f = 0;
        else if (isFinite(f))
            f = f >>> 0,
            isFinite(_) ? (_ = _ >>> 0,
            M === void 0 && (M = "utf8")) : (M = _,
            _ = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const C = this.length - f;
        if ((_ === void 0 || _ > C) && (_ = C),
        u.length > 0 && (_ < 0 || f < 0) || f > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        M || (M = "utf8");
        let D = !1;
        for (; ; )
            switch (M) {
            case "hex":
                return U(this, u, f, _);
            case "utf8":
            case "utf-8":
                return $(this, u, f, _);
            case "ascii":
            case "latin1":
            case "binary":
                return w(this, u, f, _);
            case "base64":
                return c(this, u, f, _);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return p(this, u, f, _);
            default:
                if (D)
                    throw new TypeError("Unknown encoding: " + M);
                M = ("" + M).toLowerCase(),
                D = !0
            }
    }
    ,
    h.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function g(y, u, f) {
        return u === 0 && f === y.length ? e.fromByteArray(y) : e.fromByteArray(y.slice(u, f))
    }
    function b(y, u, f) {
        f = Math.min(y.length, f);
        const _ = [];
        let M = u;
        for (; M < f; ) {
            const C = y[M];
            let D = null
              , be = C > 239 ? 4 : C > 223 ? 3 : C > 191 ? 2 : 1;
            if (M + be <= f) {
                let we, me, Fe, de;
                switch (be) {
                case 1:
                    C < 128 && (D = C);
                    break;
                case 2:
                    we = y[M + 1],
                    (we & 192) === 128 && (de = (C & 31) << 6 | we & 63,
                    de > 127 && (D = de));
                    break;
                case 3:
                    we = y[M + 1],
                    me = y[M + 2],
                    (we & 192) === 128 && (me & 192) === 128 && (de = (C & 15) << 12 | (we & 63) << 6 | me & 63,
                    de > 2047 && (de < 55296 || de > 57343) && (D = de));
                    break;
                case 4:
                    we = y[M + 1],
                    me = y[M + 2],
                    Fe = y[M + 3],
                    (we & 192) === 128 && (me & 192) === 128 && (Fe & 192) === 128 && (de = (C & 15) << 18 | (we & 63) << 12 | (me & 63) << 6 | Fe & 63,
                    de > 65535 && de < 1114112 && (D = de))
                }
            }
            D === null ? (D = 65533,
            be = 1) : D > 65535 && (D -= 65536,
            _.push(D >>> 10 & 1023 | 55296),
            D = 56320 | D & 1023),
            _.push(D),
            M += be
        }
        return I(_)
    }
    const x = 4096;
    function I(y) {
        const u = y.length;
        if (u <= x)
            return String.fromCharCode.apply(String, y);
        let f = ""
          , _ = 0;
        for (; _ < u; )
            f += String.fromCharCode.apply(String, y.slice(_, _ += x));
        return f
    }
    function T(y, u, f) {
        let _ = "";
        f = Math.min(y.length, f);
        for (let M = u; M < f; ++M)
            _ += String.fromCharCode(y[M] & 127);
        return _
    }
    function v(y, u, f) {
        let _ = "";
        f = Math.min(y.length, f);
        for (let M = u; M < f; ++M)
            _ += String.fromCharCode(y[M]);
        return _
    }
    function d(y, u, f) {
        const _ = y.length;
        (!u || u < 0) && (u = 0),
        (!f || f < 0 || f > _) && (f = _);
        let M = "";
        for (let C = u; C < f; ++C)
            M += Qe[y[C]];
        return M
    }
    function S(y, u, f) {
        const _ = y.slice(u, f);
        let M = "";
        for (let C = 0; C < _.length - 1; C += 2)
            M += String.fromCharCode(_[C] + _[C + 1] * 256);
        return M
    }
    h.prototype.slice = function(u, f) {
        const _ = this.length;
        u = ~~u,
        f = f === void 0 ? _ : ~~f,
        u < 0 ? (u += _,
        u < 0 && (u = 0)) : u > _ && (u = _),
        f < 0 ? (f += _,
        f < 0 && (f = 0)) : f > _ && (f = _),
        f < u && (f = u);
        const M = this.subarray(u, f);
        return Object.setPrototypeOf(M, h.prototype),
        M
    }
    ;
    function J(y, u, f) {
        if (y % 1 !== 0 || y < 0)
            throw new RangeError("offset is not uint");
        if (y + u > f)
            throw new RangeError("Trying to access beyond buffer length")
    }
    h.prototype.readUintLE = h.prototype.readUIntLE = function(u, f, _) {
        u = u >>> 0,
        f = f >>> 0,
        _ || J(u, f, this.length);
        let M = this[u]
          , C = 1
          , D = 0;
        for (; ++D < f && (C *= 256); )
            M += this[u + D] * C;
        return M
    }
    ,
    h.prototype.readUintBE = h.prototype.readUIntBE = function(u, f, _) {
        u = u >>> 0,
        f = f >>> 0,
        _ || J(u, f, this.length);
        let M = this[u + --f]
          , C = 1;
        for (; f > 0 && (C *= 256); )
            M += this[u + --f] * C;
        return M
    }
    ,
    h.prototype.readUint8 = h.prototype.readUInt8 = function(u, f) {
        return u = u >>> 0,
        f || J(u, 1, this.length),
        this[u]
    }
    ,
    h.prototype.readUint16LE = h.prototype.readUInt16LE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 2, this.length),
        this[u] | this[u + 1] << 8
    }
    ,
    h.prototype.readUint16BE = h.prototype.readUInt16BE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 2, this.length),
        this[u] << 8 | this[u + 1]
    }
    ,
    h.prototype.readUint32LE = h.prototype.readUInt32LE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 4, this.length),
        (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216
    }
    ,
    h.prototype.readUint32BE = h.prototype.readUInt32BE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 4, this.length),
        this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3])
    }
    ,
    h.prototype.readBigUInt64LE = an(function(u) {
        u = u >>> 0,
        vn(u, "offset");
        const f = this[u]
          , _ = this[u + 7];
        (f === void 0 || _ === void 0) && Le(u, this.length - 8);
        const M = f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24
          , C = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + _ * 2 ** 24;
        return BigInt(M) + (BigInt(C) << BigInt(32))
    }),
    h.prototype.readBigUInt64BE = an(function(u) {
        u = u >>> 0,
        vn(u, "offset");
        const f = this[u]
          , _ = this[u + 7];
        (f === void 0 || _ === void 0) && Le(u, this.length - 8);
        const M = f * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u]
          , C = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + _;
        return (BigInt(M) << BigInt(32)) + BigInt(C)
    }),
    h.prototype.readIntLE = function(u, f, _) {
        u = u >>> 0,
        f = f >>> 0,
        _ || J(u, f, this.length);
        let M = this[u]
          , C = 1
          , D = 0;
        for (; ++D < f && (C *= 256); )
            M += this[u + D] * C;
        return C *= 128,
        M >= C && (M -= Math.pow(2, 8 * f)),
        M
    }
    ,
    h.prototype.readIntBE = function(u, f, _) {
        u = u >>> 0,
        f = f >>> 0,
        _ || J(u, f, this.length);
        let M = f
          , C = 1
          , D = this[u + --M];
        for (; M > 0 && (C *= 256); )
            D += this[u + --M] * C;
        return C *= 128,
        D >= C && (D -= Math.pow(2, 8 * f)),
        D
    }
    ,
    h.prototype.readInt8 = function(u, f) {
        return u = u >>> 0,
        f || J(u, 1, this.length),
        this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]
    }
    ,
    h.prototype.readInt16LE = function(u, f) {
        u = u >>> 0,
        f || J(u, 2, this.length);
        const _ = this[u] | this[u + 1] << 8;
        return _ & 32768 ? _ | 4294901760 : _
    }
    ,
    h.prototype.readInt16BE = function(u, f) {
        u = u >>> 0,
        f || J(u, 2, this.length);
        const _ = this[u + 1] | this[u] << 8;
        return _ & 32768 ? _ | 4294901760 : _
    }
    ,
    h.prototype.readInt32LE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 4, this.length),
        this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24
    }
    ,
    h.prototype.readInt32BE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 4, this.length),
        this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]
    }
    ,
    h.prototype.readBigInt64LE = an(function(u) {
        u = u >>> 0,
        vn(u, "offset");
        const f = this[u]
          , _ = this[u + 7];
        (f === void 0 || _ === void 0) && Le(u, this.length - 8);
        const M = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (_ << 24);
        return (BigInt(M) << BigInt(32)) + BigInt(f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24)
    }),
    h.prototype.readBigInt64BE = an(function(u) {
        u = u >>> 0,
        vn(u, "offset");
        const f = this[u]
          , _ = this[u + 7];
        (f === void 0 || _ === void 0) && Le(u, this.length - 8);
        const M = (f << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
        return (BigInt(M) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + _)
    }),
    h.prototype.readFloatLE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 4, this.length),
        t.read(this, u, !0, 23, 4)
    }
    ,
    h.prototype.readFloatBE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 4, this.length),
        t.read(this, u, !1, 23, 4)
    }
    ,
    h.prototype.readDoubleLE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 8, this.length),
        t.read(this, u, !0, 52, 8)
    }
    ,
    h.prototype.readDoubleBE = function(u, f) {
        return u = u >>> 0,
        f || J(u, 8, this.length),
        t.read(this, u, !1, 52, 8)
    }
    ;
    function Z(y, u, f, _, M, C) {
        if (!h.isBuffer(y))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (u > M || u < C)
            throw new RangeError('"value" argument is out of bounds');
        if (f + _ > y.length)
            throw new RangeError("Index out of range")
    }
    h.prototype.writeUintLE = h.prototype.writeUIntLE = function(u, f, _, M) {
        if (u = +u,
        f = f >>> 0,
        _ = _ >>> 0,
        !M) {
            const be = Math.pow(2, 8 * _) - 1;
            Z(this, u, f, _, be, 0)
        }
        let C = 1
          , D = 0;
        for (this[f] = u & 255; ++D < _ && (C *= 256); )
            this[f + D] = u / C & 255;
        return f + _
    }
    ,
    h.prototype.writeUintBE = h.prototype.writeUIntBE = function(u, f, _, M) {
        if (u = +u,
        f = f >>> 0,
        _ = _ >>> 0,
        !M) {
            const be = Math.pow(2, 8 * _) - 1;
            Z(this, u, f, _, be, 0)
        }
        let C = _ - 1
          , D = 1;
        for (this[f + C] = u & 255; --C >= 0 && (D *= 256); )
            this[f + C] = u / D & 255;
        return f + _
    }
    ,
    h.prototype.writeUint8 = h.prototype.writeUInt8 = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 1, 255, 0),
        this[f] = u & 255,
        f + 1
    }
    ,
    h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 2, 65535, 0),
        this[f] = u & 255,
        this[f + 1] = u >>> 8,
        f + 2
    }
    ,
    h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 2, 65535, 0),
        this[f] = u >>> 8,
        this[f + 1] = u & 255,
        f + 2
    }
    ,
    h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 4, 4294967295, 0),
        this[f + 3] = u >>> 24,
        this[f + 2] = u >>> 16,
        this[f + 1] = u >>> 8,
        this[f] = u & 255,
        f + 4
    }
    ,
    h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 4, 4294967295, 0),
        this[f] = u >>> 24,
        this[f + 1] = u >>> 16,
        this[f + 2] = u >>> 8,
        this[f + 3] = u & 255,
        f + 4
    }
    ;
    function se(y, u, f, _, M) {
        Ve(u, _, M, y, f, 7);
        let C = Number(u & BigInt(4294967295));
        y[f++] = C,
        C = C >> 8,
        y[f++] = C,
        C = C >> 8,
        y[f++] = C,
        C = C >> 8,
        y[f++] = C;
        let D = Number(u >> BigInt(32) & BigInt(4294967295));
        return y[f++] = D,
        D = D >> 8,
        y[f++] = D,
        D = D >> 8,
        y[f++] = D,
        D = D >> 8,
        y[f++] = D,
        f
    }
    function Ce(y, u, f, _, M) {
        Ve(u, _, M, y, f, 7);
        let C = Number(u & BigInt(4294967295));
        y[f + 7] = C,
        C = C >> 8,
        y[f + 6] = C,
        C = C >> 8,
        y[f + 5] = C,
        C = C >> 8,
        y[f + 4] = C;
        let D = Number(u >> BigInt(32) & BigInt(4294967295));
        return y[f + 3] = D,
        D = D >> 8,
        y[f + 2] = D,
        D = D >> 8,
        y[f + 1] = D,
        D = D >> 8,
        y[f] = D,
        f + 8
    }
    h.prototype.writeBigUInt64LE = an(function(u, f=0) {
        return se(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    h.prototype.writeBigUInt64BE = an(function(u, f=0) {
        return Ce(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    h.prototype.writeIntLE = function(u, f, _, M) {
        if (u = +u,
        f = f >>> 0,
        !M) {
            const we = Math.pow(2, 8 * _ - 1);
            Z(this, u, f, _, we - 1, -we)
        }
        let C = 0
          , D = 1
          , be = 0;
        for (this[f] = u & 255; ++C < _ && (D *= 256); )
            u < 0 && be === 0 && this[f + C - 1] !== 0 && (be = 1),
            this[f + C] = (u / D >> 0) - be & 255;
        return f + _
    }
    ,
    h.prototype.writeIntBE = function(u, f, _, M) {
        if (u = +u,
        f = f >>> 0,
        !M) {
            const we = Math.pow(2, 8 * _ - 1);
            Z(this, u, f, _, we - 1, -we)
        }
        let C = _ - 1
          , D = 1
          , be = 0;
        for (this[f + C] = u & 255; --C >= 0 && (D *= 256); )
            u < 0 && be === 0 && this[f + C + 1] !== 0 && (be = 1),
            this[f + C] = (u / D >> 0) - be & 255;
        return f + _
    }
    ,
    h.prototype.writeInt8 = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 1, 127, -128),
        u < 0 && (u = 255 + u + 1),
        this[f] = u & 255,
        f + 1
    }
    ,
    h.prototype.writeInt16LE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 2, 32767, -32768),
        this[f] = u & 255,
        this[f + 1] = u >>> 8,
        f + 2
    }
    ,
    h.prototype.writeInt16BE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 2, 32767, -32768),
        this[f] = u >>> 8,
        this[f + 1] = u & 255,
        f + 2
    }
    ,
    h.prototype.writeInt32LE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 4, 2147483647, -2147483648),
        this[f] = u & 255,
        this[f + 1] = u >>> 8,
        this[f + 2] = u >>> 16,
        this[f + 3] = u >>> 24,
        f + 4
    }
    ,
    h.prototype.writeInt32BE = function(u, f, _) {
        return u = +u,
        f = f >>> 0,
        _ || Z(this, u, f, 4, 2147483647, -2147483648),
        u < 0 && (u = 4294967295 + u + 1),
        this[f] = u >>> 24,
        this[f + 1] = u >>> 16,
        this[f + 2] = u >>> 8,
        this[f + 3] = u & 255,
        f + 4
    }
    ,
    h.prototype.writeBigInt64LE = an(function(u, f=0) {
        return se(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }),
    h.prototype.writeBigInt64BE = an(function(u, f=0) {
        return Ce(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function Ee(y, u, f, _, M, C) {
        if (f + _ > y.length)
            throw new RangeError("Index out of range");
        if (f < 0)
            throw new RangeError("Index out of range")
    }
    function Se(y, u, f, _, M) {
        return u = +u,
        f = f >>> 0,
        M || Ee(y, u, f, 4),
        t.write(y, u, f, _, 23, 4),
        f + 4
    }
    h.prototype.writeFloatLE = function(u, f, _) {
        return Se(this, u, f, !0, _)
    }
    ,
    h.prototype.writeFloatBE = function(u, f, _) {
        return Se(this, u, f, !1, _)
    }
    ;
    function tn(y, u, f, _, M) {
        return u = +u,
        f = f >>> 0,
        M || Ee(y, u, f, 8),
        t.write(y, u, f, _, 52, 8),
        f + 8
    }
    h.prototype.writeDoubleLE = function(u, f, _) {
        return tn(this, u, f, !0, _)
    }
    ,
    h.prototype.writeDoubleBE = function(u, f, _) {
        return tn(this, u, f, !1, _)
    }
    ,
    h.prototype.copy = function(u, f, _, M) {
        if (!h.isBuffer(u))
            throw new TypeError("argument should be a Buffer");
        if (_ || (_ = 0),
        !M && M !== 0 && (M = this.length),
        f >= u.length && (f = u.length),
        f || (f = 0),
        M > 0 && M < _ && (M = _),
        M === _ || u.length === 0 || this.length === 0)
            return 0;
        if (f < 0)
            throw new RangeError("targetStart out of bounds");
        if (_ < 0 || _ >= this.length)
            throw new RangeError("Index out of range");
        if (M < 0)
            throw new RangeError("sourceEnd out of bounds");
        M > this.length && (M = this.length),
        u.length - f < M - _ && (M = u.length - f + _);
        const C = M - _;
        return this === u && typeof i.prototype.copyWithin == "function" ? this.copyWithin(f, _, M) : i.prototype.set.call(u, this.subarray(_, M), f),
        C
    }
    ,
    h.prototype.fill = function(u, f, _, M) {
        if (typeof u == "string") {
            if (typeof f == "string" ? (M = f,
            f = 0,
            _ = this.length) : typeof _ == "string" && (M = _,
            _ = this.length),
            M !== void 0 && typeof M != "string")
                throw new TypeError("encoding must be a string");
            if (typeof M == "string" && !h.isEncoding(M))
                throw new TypeError("Unknown encoding: " + M);
            if (u.length === 1) {
                const D = u.charCodeAt(0);
                (M === "utf8" && D < 128 || M === "latin1") && (u = D)
            }
        } else
            typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
        if (f < 0 || this.length < f || this.length < _)
            throw new RangeError("Out of range index");
        if (_ <= f)
            return this;
        f = f >>> 0,
        _ = _ === void 0 ? this.length : _ >>> 0,
        u || (u = 0);
        let C;
        if (typeof u == "number")
            for (C = f; C < _; ++C)
                this[C] = u;
        else {
            const D = h.isBuffer(u) ? u : h.from(u, M)
              , be = D.length;
            if (be === 0)
                throw new TypeError('The value "' + u + '" is invalid for argument "value"');
            for (C = 0; C < _ - f; ++C)
                this[C + f] = D[C % be]
        }
        return this
    }
    ;
    const ke = {};
    function je(y, u, f) {
        ke[y] = class extends f {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: u.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${y}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return y
            }
            set code(M) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: M,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${y}]: ${this.message}`
            }
        }
    }
    je("ERR_BUFFER_OUT_OF_BOUNDS", function(y) {
        return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError),
    je("ERR_INVALID_ARG_TYPE", function(y, u) {
        return `The "${y}" argument must be of type number. Received type ${typeof u}`
    }, TypeError),
    je("ERR_OUT_OF_RANGE", function(y, u, f) {
        let _ = `The value of "${y}" is out of range.`
          , M = f;
        return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? M = Vr(String(f)) : typeof f == "bigint" && (M = String(f),
        (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (M = Vr(M)),
        M += "n"),
        _ += ` It must be ${u}. Received ${M}`,
        _
    }, RangeError);
    function Vr(y) {
        let u = ""
          , f = y.length;
        const _ = y[0] === "-" ? 1 : 0;
        for (; f >= _ + 4; f -= 3)
            u = `_${y.slice(f - 3, f)}${u}`;
        return `${y.slice(0, f)}${u}`
    }
    function Je(y, u, f) {
        vn(u, "offset"),
        (y[u] === void 0 || y[u + f] === void 0) && Le(u, y.length - (f + 1))
    }
    function Ve(y, u, f, _, M, C) {
        if (y > f || y < u) {
            const D = typeof u == "bigint" ? "n" : "";
            let be;
            throw u === 0 || u === BigInt(0) ? be = `>= 0${D} and < 2${D} ** ${(C + 1) * 8}${D}` : be = `>= -(2${D} ** ${(C + 1) * 8 - 1}${D}) and < 2 ** ${(C + 1) * 8 - 1}${D}`,
            new ke.ERR_OUT_OF_RANGE("value",be,y)
        }
        Je(_, M, C)
    }
    function vn(y, u) {
        if (typeof y != "number")
            throw new ke.ERR_INVALID_ARG_TYPE(u,"number",y)
    }
    function Le(y, u, f) {
        throw Math.floor(y) !== y ? (vn(y, f),
        new ke.ERR_OUT_OF_RANGE("offset","an integer",y)) : u < 0 ? new ke.ERR_BUFFER_OUT_OF_BOUNDS : new ke.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${u}`,y)
    }
    const Ye = /[^+/0-9A-Za-z-_]/g;
    function ki(y) {
        if (y = y.split("=")[0],
        y = y.trim().replace(Ye, ""),
        y.length < 2)
            return "";
        for (; y.length % 4 !== 0; )
            y = y + "=";
        return y
    }
    function ze(y, u) {
        u = u || 1 / 0;
        let f;
        const _ = y.length;
        let M = null;
        const C = [];
        for (let D = 0; D < _; ++D) {
            if (f = y.charCodeAt(D),
            f > 55295 && f < 57344) {
                if (!M) {
                    if (f > 56319) {
                        (u -= 3) > -1 && C.push(239, 191, 189);
                        continue
                    } else if (D + 1 === _) {
                        (u -= 3) > -1 && C.push(239, 191, 189);
                        continue
                    }
                    M = f;
                    continue
                }
                if (f < 56320) {
                    (u -= 3) > -1 && C.push(239, 191, 189),
                    M = f;
                    continue
                }
                f = (M - 55296 << 10 | f - 56320) + 65536
            } else
                M && (u -= 3) > -1 && C.push(239, 191, 189);
            if (M = null,
            f < 128) {
                if ((u -= 1) < 0)
                    break;
                C.push(f)
            } else if (f < 2048) {
                if ((u -= 2) < 0)
                    break;
                C.push(f >> 6 | 192, f & 63 | 128)
            } else if (f < 65536) {
                if ((u -= 3) < 0)
                    break;
                C.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128)
            } else if (f < 1114112) {
                if ((u -= 4) < 0)
                    break;
                C.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return C
    }
    function Xe(y) {
        const u = [];
        for (let f = 0; f < y.length; ++f)
            u.push(y.charCodeAt(f) & 255);
        return u
    }
    function Ai(y, u) {
        let f, _, M;
        const C = [];
        for (let D = 0; D < y.length && !((u -= 2) < 0); ++D)
            f = y.charCodeAt(D),
            _ = f >> 8,
            M = f % 256,
            C.push(M),
            C.push(_);
        return C
    }
    function Ze(y) {
        return e.toByteArray(ki(y))
    }
    function Ue(y, u, f, _) {
        let M;
        for (M = 0; M < _ && !(M + f >= u.length || M >= y.length); ++M)
            u[M + f] = y[M];
        return M
    }
    function Kt(y, u) {
        return y instanceof u || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === u.name
    }
    function qe(y) {
        return y !== y
    }
    const Qe = function() {
        const y = "0123456789abcdef"
          , u = new Array(256);
        for (let f = 0; f < 16; ++f) {
            const _ = f * 16;
            for (let M = 0; M < 16; ++M)
                u[_ + M] = y[f] + y[M]
        }
        return u
    }();
    function an(y) {
        return typeof BigInt > "u" ? et : y
    }
    function et() {
        throw new Error("BigInt not supported")
    }
}
)(_t);
const xt = _t.Buffer
  , gd = _t.Blob
  , yd = _t.BlobOptions
  , _e = _t.Buffer
  , wd = _t.File
  , bd = _t.FileOptions
  , vd = _t.INSPECT_MAX_BYTES
  , _d = _t.SlowBuffer
  , xd = _t.TranscodeEncoding
  , Ed = _t.atob
  , Sd = _t.btoa
  , kd = _t.constants
  , Ad = _t.isAscii
  , Id = _t.isUtf8
  , Bd = _t.kMaxLength
  , Rd = _t.kStringMaxLength
  , Md = _t.resolveObjectURL
  , Td = _t.transcode
  , Od = Object.freeze(Object.defineProperty({
    __proto__: null,
    Blob: gd,
    BlobOptions: yd,
    Buffer: _e,
    File: wd,
    FileOptions: bd,
    INSPECT_MAX_BYTES: vd,
    SlowBuffer: _d,
    TranscodeEncoding: xd,
    atob: Ed,
    btoa: Sd,
    constants: kd,
    default: xt,
    isAscii: Ad,
    isUtf8: Id,
    kMaxLength: Bd,
    kStringMaxLength: Rd,
    resolveObjectURL: Md,
    transcode: Td
}, Symbol.toStringTag, {
    value: "Module"
}));
var Hc = {
    exports: {}
};
(function(n) {
    var e = Object.prototype.hasOwnProperty
      , t = "~";
    function r() {}
    Object.create && (r.prototype = Object.create(null),
    new r().__proto__ || (t = !1));
    function s(l, m, h) {
        this.fn = l,
        this.context = m,
        this.once = h || !1
    }
    function i(l, m, h, E, B) {
        if (typeof h != "function")
            throw new TypeError("The listener must be a function");
        var k = new s(h,E || l,B)
          , O = t ? t + m : m;
        return l._events[O] ? l._events[O].fn ? l._events[O] = [l._events[O], k] : l._events[O].push(k) : (l._events[O] = k,
        l._eventsCount++),
        l
    }
    function o(l, m) {
        --l._eventsCount === 0 ? l._events = new r : delete l._events[m]
    }
    function a() {
        this._events = new r,
        this._eventsCount = 0
    }
    a.prototype.eventNames = function() {
        var m = [], h, E;
        if (this._eventsCount === 0)
            return m;
        for (E in h = this._events)
            e.call(h, E) && m.push(t ? E.slice(1) : E);
        return Object.getOwnPropertySymbols ? m.concat(Object.getOwnPropertySymbols(h)) : m
    }
    ,
    a.prototype.listeners = function(m) {
        var h = t ? t + m : m
          , E = this._events[h];
        if (!E)
            return [];
        if (E.fn)
            return [E.fn];
        for (var B = 0, k = E.length, O = new Array(k); B < k; B++)
            O[B] = E[B].fn;
        return O
    }
    ,
    a.prototype.listenerCount = function(m) {
        var h = t ? t + m : m
          , E = this._events[h];
        return E ? E.fn ? 1 : E.length : 0
    }
    ,
    a.prototype.emit = function(m, h, E, B, k, O) {
        var R = t ? t + m : m;
        if (!this._events[R])
            return !1;
        var A = this._events[R], F = arguments.length, z, q;
        if (A.fn) {
            switch (A.once && this.removeListener(m, A.fn, void 0, !0),
            F) {
            case 1:
                return A.fn.call(A.context),
                !0;
            case 2:
                return A.fn.call(A.context, h),
                !0;
            case 3:
                return A.fn.call(A.context, h, E),
                !0;
            case 4:
                return A.fn.call(A.context, h, E, B),
                !0;
            case 5:
                return A.fn.call(A.context, h, E, B, k),
                !0;
            case 6:
                return A.fn.call(A.context, h, E, B, k, O),
                !0
            }
            for (q = 1,
            z = new Array(F - 1); q < F; q++)
                z[q - 1] = arguments[q];
            A.fn.apply(A.context, z)
        } else {
            var X = A.length, j;
            for (q = 0; q < X; q++)
                switch (A[q].once && this.removeListener(m, A[q].fn, void 0, !0),
                F) {
                case 1:
                    A[q].fn.call(A[q].context);
                    break;
                case 2:
                    A[q].fn.call(A[q].context, h);
                    break;
                case 3:
                    A[q].fn.call(A[q].context, h, E);
                    break;
                case 4:
                    A[q].fn.call(A[q].context, h, E, B);
                    break;
                default:
                    if (!z)
                        for (j = 1,
                        z = new Array(F - 1); j < F; j++)
                            z[j - 1] = arguments[j];
                    A[q].fn.apply(A[q].context, z)
                }
        }
        return !0
    }
    ,
    a.prototype.on = function(m, h, E) {
        return i(this, m, h, E, !1)
    }
    ,
    a.prototype.once = function(m, h, E) {
        return i(this, m, h, E, !0)
    }
    ,
    a.prototype.removeListener = function(m, h, E, B) {
        var k = t ? t + m : m;
        if (!this._events[k])
            return this;
        if (!h)
            return o(this, k),
            this;
        var O = this._events[k];
        if (O.fn)
            O.fn === h && (!B || O.once) && (!E || O.context === E) && o(this, k);
        else {
            for (var R = 0, A = [], F = O.length; R < F; R++)
                (O[R].fn !== h || B && !O[R].once || E && O[R].context !== E) && A.push(O[R]);
            A.length ? this._events[k] = A.length === 1 ? A[0] : A : o(this, k)
        }
        return this
    }
    ,
    a.prototype.removeAllListeners = function(m) {
        var h;
        return m ? (h = t ? t + m : m,
        this._events[h] && o(this, h)) : (this._events = new r,
        this._eventsCount = 0),
        this
    }
    ,
    a.prototype.off = a.prototype.removeListener,
    a.prototype.addListener = a.prototype.on,
    a.prefixed = t,
    a.EventEmitter = a,
    n.exports = a
}
)(Hc);
var Cd = Hc.exports;
const Or = fs(Cd)
  , Bw = Object.freeze(Object.defineProperty({
    __proto__: null,
    EventEmitter: Or,
    default: Or
}, Symbol.toStringTag, {
    value: "Module"
}));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Zo = BigInt(0)
  , wo = BigInt(1);
function rr(n, e) {
    if (typeof e != "boolean")
        throw new Error(n + " boolean expected, got " + e)
}
function Mi(n) {
    const e = n.toString(16);
    return e.length & 1 ? "0" + e : e
}
function Vc(n) {
    if (typeof n != "string")
        throw new Error("hex string expected, got " + typeof n);
    return n === "" ? Zo : BigInt("0x" + n)
}
function vi(n) {
    return Vc(nr(n))
}
function Zn(n) {
    return Et(n),
    Vc(nr(Uint8Array.from(n).reverse()))
}
function Wo(n, e) {
    return zo(n.toString(16).padStart(e * 2, "0"))
}
function ir(n, e) {
    return Wo(n, e).reverse()
}
function Pe(n, e, t) {
    let r;
    if (typeof e == "string")
        try {
            r = zo(e)
        } catch (i) {
            throw new Error(n + " must be hex string or Uint8Array, cause: " + i)
        }
    else if (ds(e))
        r = Uint8Array.from(e);
    else
        throw new Error(n + " must be hex string or Uint8Array");
    const s = r.length;
    if (typeof t == "number" && s !== t)
        throw new Error(n + " of length " + t + " expected, got " + s);
    return r
}
function Ld(n, e) {
    if (n.length !== e.length)
        return !1;
    let t = 0;
    for (let r = 0; r < n.length; r++)
        t |= n[r] ^ e[r];
    return t === 0
}
const Ys = n => typeof n == "bigint" && Zo <= n;
function Nd(n, e, t) {
    return Ys(n) && Ys(e) && Ys(t) && e <= n && n < t
}
function jn(n, e, t, r) {
    if (!Nd(e, t, r))
        throw new Error("expected valid " + n + ": " + t + " <= n < " + r + ", got " + e)
}
function Pd(n) {
    let e;
    for (e = 0; n > Zo; n >>= wo,
    e += 1)
        ;
    return e
}
const ys = n => (wo << BigInt(n)) - wo;
function Ud(n, e, t) {
    if (typeof n != "number" || n < 2)
        throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2)
        throw new Error("qByteLen must be a number");
    if (typeof t != "function")
        throw new Error("hmacFn must be a function");
    const r = k => new Uint8Array(k)
      , s = k => Uint8Array.of(k);
    let i = r(n)
      , o = r(n)
      , a = 0;
    const l = () => {
        i.fill(1),
        o.fill(0),
        a = 0
    }
      , m = (...k) => t(o, i, ...k)
      , h = (k=r(0)) => {
        o = m(s(0), k),
        i = m(),
        k.length !== 0 && (o = m(s(1), k),
        i = m())
    }
      , E = () => {
        if (a++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let k = 0;
        const O = [];
        for (; k < e; ) {
            i = m();
            const R = i.slice();
            O.push(R),
            k += i.length
        }
        return Ft(...O)
    }
    ;
    return (k, O) => {
        l(),
        h(k);
        let R;
        for (; !(R = O(E())); )
            h();
        return l(),
        R
    }
}
function Fd(n) {
    return typeof n == "function" && Number.isSafeInteger(n.outputLen)
}
function ur(n, e, t={}) {
    if (!n || typeof n != "object")
        throw new Error("expected valid options object");
    function r(s, i, o) {
        const a = n[s];
        if (o && a === void 0)
            return;
        const l = typeof a;
        if (l !== i || a === null)
            throw new Error(`param "${s}" is invalid: expected ${i}, got ${l}`)
    }
    Object.entries(e).forEach( ([s,i]) => r(s, i, !1)),
    Object.entries(t).forEach( ([s,i]) => r(s, i, !0))
}
function Di(n) {
    const e = new WeakMap;
    return (t, ...r) => {
        const s = e.get(t);
        if (s !== void 0)
            return s;
        const i = n(t, ...r);
        return e.set(t, i),
        i
    }
}
class Zc extends qo {
    constructor(e, t) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        Bf(e);
        const r = hs(t);
        if (this.iHash = e.create(),
        typeof this.iHash.update != "function")
            throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen,
        this.outputLen = this.iHash.outputLen;
        const s = this.blockLen
          , i = new Uint8Array(s);
        i.set(r.length > s ? e.create().update(r).digest() : r);
        for (let o = 0; o < i.length; o++)
            i[o] ^= 54;
        this.iHash.update(i),
        this.oHash = e.create();
        for (let o = 0; o < i.length; o++)
            i[o] ^= 106;
        this.oHash.update(i),
        Vn(i)
    }
    update(e) {
        return Tr(this),
        this.iHash.update(e),
        this
    }
    digestInto(e) {
        Tr(this),
        Et(e, this.outputLen),
        this.finished = !0,
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy()
    }
    digest() {
        const e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e),
        e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash: t, iHash: r, finished: s, destroyed: i, blockLen: o, outputLen: a} = this;
        return e = e,
        e.finished = s,
        e.destroyed = i,
        e.blockLen = o,
        e.outputLen = a,
        e.oHash = t._cloneInto(e.oHash),
        e.iHash = r._cloneInto(e.iHash),
        e
    }
    clone() {
        return this._cloneInto()
    }
    destroy() {
        this.destroyed = !0,
        this.oHash.destroy(),
        this.iHash.destroy()
    }
}
const Wc = (n, e, t) => new Zc(n,e).update(t).digest();
Wc.create = (n, e) => new Zc(n,e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Zt = BigInt(0)
  , Bt = BigInt(1)
  , Xn = BigInt(2)
  , Dd = BigInt(3)
  , Kc = BigInt(4)
  , Gc = BigInt(5)
  , Jc = BigInt(8);
function He(n, e) {
    const t = n % e;
    return t >= Zt ? t : e + t
}
function We(n, e, t) {
    let r = n;
    for (; e-- > Zt; )
        r *= r,
        r %= t;
    return r
}
function Ha(n, e) {
    if (n === Zt)
        throw new Error("invert: expected non-zero number");
    if (e <= Zt)
        throw new Error("invert: expected positive modulus, got " + e);
    let t = He(n, e)
      , r = e
      , s = Zt
      , i = Bt;
    for (; t !== Zt; ) {
        const a = r / t
          , l = r % t
          , m = s - i * a;
        r = t,
        t = l,
        s = i,
        i = m
    }
    if (r !== Bt)
        throw new Error("invert: does not exist");
    return He(s, e)
}
function Yc(n, e) {
    const t = (n.ORDER + Bt) / Kc
      , r = n.pow(e, t);
    if (!n.eql(n.sqr(r), e))
        throw new Error("Cannot find square root");
    return r
}
function jd(n, e) {
    const t = (n.ORDER - Gc) / Jc
      , r = n.mul(e, Xn)
      , s = n.pow(r, t)
      , i = n.mul(e, s)
      , o = n.mul(n.mul(i, Xn), s)
      , a = n.mul(i, n.sub(o, n.ONE));
    if (!n.eql(n.sqr(a), e))
        throw new Error("Cannot find square root");
    return a
}
function zd(n) {
    if (n < BigInt(3))
        throw new Error("sqrt is not defined for small field");
    let e = n - Bt
      , t = 0;
    for (; e % Xn === Zt; )
        e /= Xn,
        t++;
    let r = Xn;
    const s = lr(n);
    for (; Va(s, r) === 1; )
        if (r++ > 1e3)
            throw new Error("Cannot find square root: probably non-prime P");
    if (t === 1)
        return Yc;
    let i = s.pow(r, e);
    const o = (e + Bt) / Xn;
    return function(l, m) {
        if (l.is0(m))
            return m;
        if (Va(l, m) !== 1)
            throw new Error("Cannot find square root");
        let h = t
          , E = l.mul(l.ONE, i)
          , B = l.pow(m, e)
          , k = l.pow(m, o);
        for (; !l.eql(B, l.ONE); ) {
            if (l.is0(B))
                return l.ZERO;
            let O = 1
              , R = l.sqr(B);
            for (; !l.eql(R, l.ONE); )
                if (O++,
                R = l.sqr(R),
                O === h)
                    throw new Error("Cannot find square root");
            const A = Bt << BigInt(h - O - 1)
              , F = l.pow(E, A);
            h = O,
            E = l.sqr(F),
            B = l.mul(B, E),
            k = l.mul(k, F)
        }
        return k
    }
}
function qd(n) {
    return n % Kc === Dd ? Yc : n % Jc === Gc ? jd : zd(n)
}
const Un = (n, e) => (He(n, e) & Bt) === Bt
  , $d = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Hd(n) {
    const e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "number",
        BITS: "number"
    }
      , t = $d.reduce( (r, s) => (r[s] = "function",
    r), e);
    return ur(n, t),
    n
}
function Vd(n, e, t) {
    if (t < Zt)
        throw new Error("invalid exponent, negatives unsupported");
    if (t === Zt)
        return n.ONE;
    if (t === Bt)
        return e;
    let r = n.ONE
      , s = e;
    for (; t > Zt; )
        t & Bt && (r = n.mul(r, s)),
        s = n.sqr(s),
        t >>= Bt;
    return r
}
function Ko(n, e, t=!1) {
    const r = new Array(e.length).fill(t ? n.ZERO : void 0)
      , s = e.reduce( (o, a, l) => n.is0(a) ? o : (r[l] = o,
    n.mul(o, a)), n.ONE)
      , i = n.inv(s);
    return e.reduceRight( (o, a, l) => n.is0(a) ? o : (r[l] = n.mul(o, r[l]),
    n.mul(o, a)), i),
    r
}
function Va(n, e) {
    const t = (n.ORDER - Bt) / Xn
      , r = n.pow(e, t)
      , s = n.eql(r, n.ONE)
      , i = n.eql(r, n.ZERO)
      , o = n.eql(r, n.neg(n.ONE));
    if (!s && !i && !o)
        throw new Error("invalid Legendre symbol result");
    return s ? 1 : i ? 0 : -1
}
function Zd(n, e) {
    e !== void 0 && ei(e);
    const t = e !== void 0 ? e : n.toString(2).length
      , r = Math.ceil(t / 8);
    return {
        nBitLength: t,
        nByteLength: r
    }
}
function lr(n, e, t=!1, r={}) {
    if (n <= Zt)
        throw new Error("invalid field: expected ORDER > 0, got " + n);
    let s, i;
    if (typeof e == "object" && e != null) {
        if (r.sqrt || t)
            throw new Error("cannot specify opts in two arguments");
        const h = e;
        h.BITS && (s = h.BITS),
        h.sqrt && (i = h.sqrt),
        typeof h.isLE == "boolean" && (t = h.isLE)
    } else
        typeof e == "number" && (s = e),
        r.sqrt && (i = r.sqrt);
    const {nBitLength: o, nByteLength: a} = Zd(n, s);
    if (a > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let l;
    const m = Object.freeze({
        ORDER: n,
        isLE: t,
        BITS: o,
        BYTES: a,
        MASK: ys(o),
        ZERO: Zt,
        ONE: Bt,
        create: h => He(h, n),
        isValid: h => {
            if (typeof h != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof h);
            return Zt <= h && h < n
        }
        ,
        is0: h => h === Zt,
        isValidNot0: h => !m.is0(h) && m.isValid(h),
        isOdd: h => (h & Bt) === Bt,
        neg: h => He(-h, n),
        eql: (h, E) => h === E,
        sqr: h => He(h * h, n),
        add: (h, E) => He(h + E, n),
        sub: (h, E) => He(h - E, n),
        mul: (h, E) => He(h * E, n),
        pow: (h, E) => Vd(m, h, E),
        div: (h, E) => He(h * Ha(E, n), n),
        sqrN: h => h * h,
        addN: (h, E) => h + E,
        subN: (h, E) => h - E,
        mulN: (h, E) => h * E,
        inv: h => Ha(h, n),
        sqrt: i || (h => (l || (l = qd(n)),
        l(m, h))),
        toBytes: h => t ? ir(h, a) : Wo(h, a),
        fromBytes: h => {
            if (h.length !== a)
                throw new Error("Field.fromBytes: expected " + a + " bytes, got " + h.length);
            return t ? Zn(h) : vi(h)
        }
        ,
        invertBatch: h => Ko(m, h),
        cmov: (h, E, B) => B ? E : h
    });
    return Object.freeze(m)
}
function Wd(n, e) {
    if (!n.isOdd)
        throw new Error("Field doesn't have isOdd");
    const t = n.sqrt(e);
    return n.isOdd(t) ? n.neg(t) : t
}
function Xc(n) {
    if (typeof n != "bigint")
        throw new Error("field order must be bigint");
    const e = n.toString(2).length;
    return Math.ceil(e / 8)
}
function Qc(n) {
    const e = Xc(n);
    return e + Math.ceil(e / 2)
}
function Kd(n, e, t=!1) {
    const r = n.length
      , s = Xc(e)
      , i = Qc(e);
    if (r < 16 || r < i || r > 1024)
        throw new Error("expected " + i + "-1024 bytes of input, got " + r);
    const o = t ? Zn(n) : vi(n)
      , a = He(o, e - Bt) + Bt;
    return t ? ir(a, s) : Wo(a, s)
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Cr = BigInt(0)
  , Qn = BigInt(1);
function Yr(n, e) {
    const t = e.negate();
    return n ? t : e
}
function eu(n, e, t) {
    const r = e === "pz" ? o => o.pz : o => o.ez
      , s = Ko(n.Fp, t.map(r));
    return t.map( (o, a) => o.toAffine(s[a])).map(n.fromAffine)
}
function tu(n, e) {
    if (!Number.isSafeInteger(n) || n <= 0 || n > e)
        throw new Error("invalid window size, expected [1.." + e + "], got W=" + n)
}
function Xs(n, e) {
    tu(n, e);
    const t = Math.ceil(e / n) + 1
      , r = 2 ** (n - 1)
      , s = 2 ** n
      , i = ys(n)
      , o = BigInt(n);
    return {
        windows: t,
        windowSize: r,
        mask: i,
        maxNumber: s,
        shiftBy: o
    }
}
function Za(n, e, t) {
    const {windowSize: r, mask: s, maxNumber: i, shiftBy: o} = t;
    let a = Number(n & s)
      , l = n >> o;
    a > r && (a -= i,
    l += Qn);
    const m = e * r
      , h = m + Math.abs(a) - 1
      , E = a === 0
      , B = a < 0
      , k = e % 2 !== 0;
    return {
        nextN: l,
        offset: h,
        isZero: E,
        isNeg: B,
        isNegF: k,
        offsetF: m
    }
}
function Gd(n, e) {
    if (!Array.isArray(n))
        throw new Error("array expected");
    n.forEach( (t, r) => {
        if (!(t instanceof e))
            throw new Error("invalid point at index " + r)
    }
    )
}
function Jd(n, e) {
    if (!Array.isArray(n))
        throw new Error("array of scalars expected");
    n.forEach( (t, r) => {
        if (!e.isValid(t))
            throw new Error("invalid scalar at index " + r)
    }
    )
}
const Qs = new WeakMap
  , nu = new WeakMap;
function eo(n) {
    return nu.get(n) || 1
}
function Wa(n) {
    if (n !== Cr)
        throw new Error("invalid wNAF")
}
function ru(n, e) {
    return {
        constTimeNegate: Yr,
        hasPrecomputes(t) {
            return eo(t) !== 1
        },
        unsafeLadder(t, r, s=n.ZERO) {
            let i = t;
            for (; r > Cr; )
                r & Qn && (s = s.add(i)),
                i = i.double(),
                r >>= Qn;
            return s
        },
        precomputeWindow(t, r) {
            const {windows: s, windowSize: i} = Xs(r, e)
              , o = [];
            let a = t
              , l = a;
            for (let m = 0; m < s; m++) {
                l = a,
                o.push(l);
                for (let h = 1; h < i; h++)
                    l = l.add(a),
                    o.push(l);
                a = l.double()
            }
            return o
        },
        wNAF(t, r, s) {
            let i = n.ZERO
              , o = n.BASE;
            const a = Xs(t, e);
            for (let l = 0; l < a.windows; l++) {
                const {nextN: m, offset: h, isZero: E, isNeg: B, isNegF: k, offsetF: O} = Za(s, l, a);
                s = m,
                E ? o = o.add(Yr(k, r[O])) : i = i.add(Yr(B, r[h]))
            }
            return Wa(s),
            {
                p: i,
                f: o
            }
        },
        wNAFUnsafe(t, r, s, i=n.ZERO) {
            const o = Xs(t, e);
            for (let a = 0; a < o.windows && s !== Cr; a++) {
                const {nextN: l, offset: m, isZero: h, isNeg: E} = Za(s, a, o);
                if (s = l,
                !h) {
                    const B = r[m];
                    i = i.add(E ? B.negate() : B)
                }
            }
            return Wa(s),
            i
        },
        getPrecomputes(t, r, s) {
            let i = Qs.get(r);
            return i || (i = this.precomputeWindow(r, t),
            t !== 1 && (typeof s == "function" && (i = s(i)),
            Qs.set(r, i))),
            i
        },
        wNAFCached(t, r, s) {
            const i = eo(t);
            return this.wNAF(i, this.getPrecomputes(i, t, s), r)
        },
        wNAFCachedUnsafe(t, r, s, i) {
            const o = eo(t);
            return o === 1 ? this.unsafeLadder(t, r, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, t, s), r, i)
        },
        setWindowSize(t, r) {
            tu(r, e),
            nu.set(t, r),
            Qs.delete(t)
        }
    }
}
function Yd(n, e, t, r) {
    let s = e
      , i = n.ZERO
      , o = n.ZERO;
    for (; t > Cr || r > Cr; )
        t & Qn && (i = i.add(s)),
        r & Qn && (o = o.add(s)),
        s = s.double(),
        t >>= Qn,
        r >>= Qn;
    return {
        p1: i,
        p2: o
    }
}
function Go(n, e, t, r) {
    Gd(t, n),
    Jd(r, e);
    const s = t.length
      , i = r.length;
    if (s !== i)
        throw new Error("arrays of points and scalars must have equal length");
    const o = n.ZERO
      , a = Pd(BigInt(s));
    let l = 1;
    a > 12 ? l = a - 3 : a > 4 ? l = a - 2 : a > 0 && (l = 2);
    const m = ys(l)
      , h = new Array(Number(m) + 1).fill(o)
      , E = Math.floor((e.BITS - 1) / l) * l;
    let B = o;
    for (let k = E; k >= 0; k -= l) {
        h.fill(o);
        for (let R = 0; R < i; R++) {
            const A = r[R]
              , F = Number(A >> BigInt(k) & m);
            h[F] = h[F].add(t[R])
        }
        let O = o;
        for (let R = h.length - 1, A = o; R > 0; R--)
            A = A.add(h[R]),
            O = O.add(A);
        if (B = B.add(O),
        k !== 0)
            for (let R = 0; R < l; R++)
                B = B.double()
    }
    return B
}
function Ka(n, e) {
    if (e) {
        if (e.ORDER !== n)
            throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
        return Hd(e),
        e
    } else
        return lr(n)
}
function iu(n, e, t={}) {
    if (!e || typeof e != "object")
        throw new Error(`expected valid ${n} CURVE object`);
    for (const a of ["p", "n", "h"]) {
        const l = e[a];
        if (!(typeof l == "bigint" && l > Cr))
            throw new Error(`CURVE.${a} must be positive bigint`)
    }
    const r = Ka(e.p, t.Fp)
      , s = Ka(e.n, t.Fn)
      , o = ["Gx", "Gy", "a", n === "weierstrass" ? "b" : "d"];
    for (const a of o)
        if (!r.isValid(e[a]))
            throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
    return {
        Fp: r,
        Fn: s
    }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ga(n) {
    n.lowS !== void 0 && rr("lowS", n.lowS),
    n.prehash !== void 0 && rr("prehash", n.prehash)
}
class Xd extends Error {
    constructor(e="") {
        super(e)
    }
}
const Sn = {
    Err: Xd,
    _tlv: {
        encode: (n, e) => {
            const {Err: t} = Sn;
            if (n < 0 || n > 256)
                throw new t("tlv.encode: wrong tag");
            if (e.length & 1)
                throw new t("tlv.encode: unpadded data");
            const r = e.length / 2
              , s = Mi(r);
            if (s.length / 2 & 128)
                throw new t("tlv.encode: long form length too big");
            const i = r > 127 ? Mi(s.length / 2 | 128) : "";
            return Mi(n) + i + s + e
        }
        ,
        decode(n, e) {
            const {Err: t} = Sn;
            let r = 0;
            if (n < 0 || n > 256)
                throw new t("tlv.encode: wrong tag");
            if (e.length < 2 || e[r++] !== n)
                throw new t("tlv.decode: wrong tlv");
            const s = e[r++]
              , i = !!(s & 128);
            let o = 0;
            if (!i)
                o = s;
            else {
                const l = s & 127;
                if (!l)
                    throw new t("tlv.decode(long): indefinite length not supported");
                if (l > 4)
                    throw new t("tlv.decode(long): byte length is too big");
                const m = e.subarray(r, r + l);
                if (m.length !== l)
                    throw new t("tlv.decode: length bytes not complete");
                if (m[0] === 0)
                    throw new t("tlv.decode(long): zero leftmost byte");
                for (const h of m)
                    o = o << 8 | h;
                if (r += l,
                o < 128)
                    throw new t("tlv.decode(long): not minimal encoding")
            }
            const a = e.subarray(r, r + o);
            if (a.length !== o)
                throw new t("tlv.decode: wrong value length");
            return {
                v: a,
                l: e.subarray(r + o)
            }
        }
    },
    _int: {
        encode(n) {
            const {Err: e} = Sn;
            if (n < Xr)
                throw new e("integer: negative integers are not allowed");
            let t = Mi(n);
            if (Number.parseInt(t[0], 16) & 8 && (t = "00" + t),
            t.length & 1)
                throw new e("unexpected DER parsing assertion: unpadded hex");
            return t
        },
        decode(n) {
            const {Err: e} = Sn;
            if (n[0] & 128)
                throw new e("invalid signature integer: negative");
            if (n[0] === 0 && !(n[1] & 128))
                throw new e("invalid signature integer: unnecessary leading zero");
            return vi(n)
        }
    },
    toSig(n) {
        const {Err: e, _int: t, _tlv: r} = Sn
          , s = Pe("signature", n)
          , {v: i, l: o} = r.decode(48, s);
        if (o.length)
            throw new e("invalid signature: left bytes after parsing");
        const {v: a, l} = r.decode(2, i)
          , {v: m, l: h} = r.decode(2, l);
        if (h.length)
            throw new e("invalid signature: left bytes after parsing");
        return {
            r: t.decode(a),
            s: t.decode(m)
        }
    },
    hexFromSig(n) {
        const {_tlv: e, _int: t} = Sn
          , r = e.encode(2, t.encode(n.r))
          , s = e.encode(2, t.encode(n.s))
          , i = r + s;
        return e.encode(48, i)
    }
}
  , Xr = BigInt(0)
  , Qr = BigInt(1)
  , Qd = BigInt(2)
  , Ti = BigInt(3)
  , eh = BigInt(4);
function th(n, e, t) {
    function r(s) {
        const i = n.sqr(s)
          , o = n.mul(i, s);
        return n.add(n.add(o, n.mul(s, e)), t)
    }
    return r
}
function su(n, e, t) {
    const {BYTES: r} = n;
    function s(i) {
        let o;
        if (typeof i == "bigint")
            o = i;
        else {
            let a = Pe("private key", i);
            if (e) {
                if (!e.includes(a.length * 2))
                    throw new Error("invalid private key");
                const l = new Uint8Array(r);
                l.set(a, l.length - a.length),
                a = l
            }
            try {
                o = n.fromBytes(a)
            } catch {
                throw new Error(`invalid private key: expected ui8a of size ${r}, got ${typeof i}`)
            }
        }
        if (t && (o = n.create(o)),
        !n.isValidNot0(o))
            throw new Error("invalid private key: out of range [1..N-1]");
        return o
    }
    return s
}
function nh(n, e={}) {
    const {Fp: t, Fn: r} = iu("weierstrass", n, e)
      , {h: s, n: i} = n;
    ur(e, {}, {
        allowInfinityPoint: "boolean",
        clearCofactor: "function",
        isTorsionFree: "function",
        fromBytes: "function",
        toBytes: "function",
        endo: "object",
        wrapPrivateKey: "boolean"
    });
    const {endo: o} = e;
    if (o && (!t.is0(n.a) || typeof o.beta != "bigint" || typeof o.splitScalar != "function"))
        throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
    function a() {
        if (!t.isOdd)
            throw new Error("compression is not supported: Field does not have .isOdd()")
    }
    function l(Q, N, H) {
        const {x: U, y: $} = N.toAffine()
          , w = t.toBytes(U);
        if (rr("isCompressed", H),
        H) {
            a();
            const c = !t.isOdd($);
            return Ft(ou(c), w)
        } else
            return Ft(Uint8Array.of(4), w, t.toBytes($))
    }
    function m(Q) {
        Et(Q);
        const N = t.BYTES
          , H = N + 1
          , U = 2 * N + 1
          , $ = Q.length
          , w = Q[0]
          , c = Q.subarray(1);
        if ($ === H && (w === 2 || w === 3)) {
            const p = t.fromBytes(c);
            if (!t.isValid(p))
                throw new Error("bad point: is not on curve, wrong x");
            const g = B(p);
            let b;
            try {
                b = t.sqrt(g)
            } catch (T) {
                const v = T instanceof Error ? ": " + T.message : "";
                throw new Error("bad point: is not on curve, sqrt error" + v)
            }
            a();
            const x = t.isOdd(b);
            return (w & 1) === 1 !== x && (b = t.neg(b)),
            {
                x: p,
                y: b
            }
        } else if ($ === U && w === 4) {
            const p = t.fromBytes(c.subarray(N * 0, N * 1))
              , g = t.fromBytes(c.subarray(N * 1, N * 2));
            if (!k(p, g))
                throw new Error("bad point: is not on curve");
            return {
                x: p,
                y: g
            }
        } else
            throw new Error(`bad point: got length ${$}, expected compressed=${H} or uncompressed=${U}`)
    }
    const h = e.toBytes || l
      , E = e.fromBytes || m
      , B = th(t, n.a, n.b);
    function k(Q, N) {
        const H = t.sqr(N)
          , U = B(Q);
        return t.eql(H, U)
    }
    if (!k(n.Gx, n.Gy))
        throw new Error("bad curve params: generator point");
    const O = t.mul(t.pow(n.a, Ti), eh)
      , R = t.mul(t.sqr(n.b), BigInt(27));
    if (t.is0(t.add(O, R)))
        throw new Error("bad curve params: a or b");
    function A(Q, N, H=!1) {
        if (!t.isValid(N) || H && t.is0(N))
            throw new Error(`bad point coordinate ${Q}`);
        return N
    }
    function F(Q) {
        if (!(Q instanceof j))
            throw new Error("ProjectivePoint expected")
    }
    const z = Di( (Q, N) => {
        const {px: H, py: U, pz: $} = Q;
        if (t.eql($, t.ONE))
            return {
                x: H,
                y: U
            };
        const w = Q.is0();
        N == null && (N = w ? t.ONE : t.inv($));
        const c = t.mul(H, N)
          , p = t.mul(U, N)
          , g = t.mul($, N);
        if (w)
            return {
                x: t.ZERO,
                y: t.ZERO
            };
        if (!t.eql(g, t.ONE))
            throw new Error("invZ was invalid");
        return {
            x: c,
            y: p
        }
    }
    )
      , q = Di(Q => {
        if (Q.is0()) {
            if (e.allowInfinityPoint && !t.is0(Q.py))
                return;
            throw new Error("bad point: ZERO")
        }
        const {x: N, y: H} = Q.toAffine();
        if (!t.isValid(N) || !t.isValid(H))
            throw new Error("bad point: x or y not field elements");
        if (!k(N, H))
            throw new Error("bad point: equation left != right");
        if (!Q.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        return !0
    }
    );
    function X(Q, N, H, U, $) {
        return H = new j(t.mul(H.px, Q),H.py,H.pz),
        N = Yr(U, N),
        H = Yr($, H),
        N.add(H)
    }
    class j {
        constructor(N, H, U) {
            this.px = A("x", N),
            this.py = A("y", H, !0),
            this.pz = A("z", U),
            Object.freeze(this)
        }
        static fromAffine(N) {
            const {x: H, y: U} = N || {};
            if (!N || !t.isValid(H) || !t.isValid(U))
                throw new Error("invalid affine point");
            if (N instanceof j)
                throw new Error("projective point not allowed");
            return t.is0(H) && t.is0(U) ? j.ZERO : new j(H,U,t.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(N) {
            return eu(j, "pz", N)
        }
        static fromBytes(N) {
            return Et(N),
            j.fromHex(N)
        }
        static fromHex(N) {
            const H = j.fromAffine(E(Pe("pointHex", N)));
            return H.assertValidity(),
            H
        }
        static fromPrivateKey(N) {
            const H = su(r, e.allowedPrivateKeyLengths, e.wrapPrivateKey);
            return j.BASE.multiply(H(N))
        }
        static msm(N, H) {
            return Go(j, r, N, H)
        }
        precompute(N=8, H=!0) {
            return te.setWindowSize(this, N),
            H || this.multiply(Ti),
            this
        }
        _setWindowSize(N) {
            this.precompute(N)
        }
        assertValidity() {
            q(this)
        }
        hasEvenY() {
            const {y: N} = this.toAffine();
            if (!t.isOdd)
                throw new Error("Field doesn't support isOdd");
            return !t.isOdd(N)
        }
        equals(N) {
            F(N);
            const {px: H, py: U, pz: $} = this
              , {px: w, py: c, pz: p} = N
              , g = t.eql(t.mul(H, p), t.mul(w, $))
              , b = t.eql(t.mul(U, p), t.mul(c, $));
            return g && b
        }
        negate() {
            return new j(this.px,t.neg(this.py),this.pz)
        }
        double() {
            const {a: N, b: H} = n
              , U = t.mul(H, Ti)
              , {px: $, py: w, pz: c} = this;
            let p = t.ZERO
              , g = t.ZERO
              , b = t.ZERO
              , x = t.mul($, $)
              , I = t.mul(w, w)
              , T = t.mul(c, c)
              , v = t.mul($, w);
            return v = t.add(v, v),
            b = t.mul($, c),
            b = t.add(b, b),
            p = t.mul(N, b),
            g = t.mul(U, T),
            g = t.add(p, g),
            p = t.sub(I, g),
            g = t.add(I, g),
            g = t.mul(p, g),
            p = t.mul(v, p),
            b = t.mul(U, b),
            T = t.mul(N, T),
            v = t.sub(x, T),
            v = t.mul(N, v),
            v = t.add(v, b),
            b = t.add(x, x),
            x = t.add(b, x),
            x = t.add(x, T),
            x = t.mul(x, v),
            g = t.add(g, x),
            T = t.mul(w, c),
            T = t.add(T, T),
            x = t.mul(T, v),
            p = t.sub(p, x),
            b = t.mul(T, I),
            b = t.add(b, b),
            b = t.add(b, b),
            new j(p,g,b)
        }
        add(N) {
            F(N);
            const {px: H, py: U, pz: $} = this
              , {px: w, py: c, pz: p} = N;
            let g = t.ZERO
              , b = t.ZERO
              , x = t.ZERO;
            const I = n.a
              , T = t.mul(n.b, Ti);
            let v = t.mul(H, w)
              , d = t.mul(U, c)
              , S = t.mul($, p)
              , J = t.add(H, U)
              , Z = t.add(w, c);
            J = t.mul(J, Z),
            Z = t.add(v, d),
            J = t.sub(J, Z),
            Z = t.add(H, $);
            let se = t.add(w, p);
            return Z = t.mul(Z, se),
            se = t.add(v, S),
            Z = t.sub(Z, se),
            se = t.add(U, $),
            g = t.add(c, p),
            se = t.mul(se, g),
            g = t.add(d, S),
            se = t.sub(se, g),
            x = t.mul(I, Z),
            g = t.mul(T, S),
            x = t.add(g, x),
            g = t.sub(d, x),
            x = t.add(d, x),
            b = t.mul(g, x),
            d = t.add(v, v),
            d = t.add(d, v),
            S = t.mul(I, S),
            Z = t.mul(T, Z),
            d = t.add(d, S),
            S = t.sub(v, S),
            S = t.mul(I, S),
            Z = t.add(Z, S),
            v = t.mul(d, Z),
            b = t.add(b, v),
            v = t.mul(se, Z),
            g = t.mul(J, g),
            g = t.sub(g, v),
            v = t.mul(J, d),
            x = t.mul(se, x),
            x = t.add(x, v),
            new j(g,b,x)
        }
        subtract(N) {
            return this.add(N.negate())
        }
        is0() {
            return this.equals(j.ZERO)
        }
        multiply(N) {
            const {endo: H} = e;
            if (!r.isValidNot0(N))
                throw new Error("invalid scalar: out of range");
            let U, $;
            const w = c => te.wNAFCached(this, c, j.normalizeZ);
            if (H) {
                const {k1neg: c, k1: p, k2neg: g, k2: b} = H.splitScalar(N)
                  , {p: x, f: I} = w(p)
                  , {p: T, f: v} = w(b);
                $ = I.add(v),
                U = X(H.beta, x, T, c, g)
            } else {
                const {p: c, f: p} = w(N);
                U = c,
                $ = p
            }
            return j.normalizeZ([U, $])[0]
        }
        multiplyUnsafe(N) {
            const {endo: H} = e
              , U = this;
            if (!r.isValid(N))
                throw new Error("invalid scalar: out of range");
            if (N === Xr || U.is0())
                return j.ZERO;
            if (N === Qr)
                return U;
            if (te.hasPrecomputes(this))
                return this.multiply(N);
            if (H) {
                const {k1neg: $, k1: w, k2neg: c, k2: p} = H.splitScalar(N)
                  , {p1: g, p2: b} = Yd(j, U, w, p);
                return X(H.beta, g, b, $, c)
            } else
                return te.wNAFCachedUnsafe(U, N)
        }
        multiplyAndAddUnsafe(N, H, U) {
            const $ = this.multiplyUnsafe(H).add(N.multiplyUnsafe(U));
            return $.is0() ? void 0 : $
        }
        toAffine(N) {
            return z(this, N)
        }
        isTorsionFree() {
            const {isTorsionFree: N} = e;
            return s === Qr ? !0 : N ? N(j, this) : te.wNAFCachedUnsafe(this, i).is0()
        }
        clearCofactor() {
            const {clearCofactor: N} = e;
            return s === Qr ? this : N ? N(j, this) : this.multiplyUnsafe(s)
        }
        toBytes(N=!0) {
            return rr("isCompressed", N),
            this.assertValidity(),
            h(j, this, N)
        }
        toRawBytes(N=!0) {
            return this.toBytes(N)
        }
        toHex(N=!0) {
            return nr(this.toBytes(N))
        }
        toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`
        }
    }
    j.BASE = new j(n.Gx,n.Gy,t.ONE),
    j.ZERO = new j(t.ZERO,t.ONE,t.ZERO),
    j.Fp = t,
    j.Fn = r;
    const K = r.BITS
      , te = ru(j, e.endo ? Math.ceil(K / 2) : K);
    return j
}
function ou(n) {
    return Uint8Array.of(n ? 2 : 3)
}
function rh(n, e, t={}) {
    ur(e, {
        hash: "function"
    }, {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function"
    });
    const r = e.randomBytes || $o
      , s = e.hmac || ( (U, ...$) => Wc(e.hash, U, Ft(...$)))
      , {Fp: i, Fn: o} = n
      , {ORDER: a, BITS: l} = o;
    function m(U) {
        const $ = a >> Qr;
        return U > $
    }
    function h(U) {
        return m(U) ? o.neg(U) : U
    }
    function E(U, $) {
        if (!o.isValidNot0($))
            throw new Error(`invalid signature ${U}: out of range 1..CURVE.n`)
    }
    class B {
        constructor($, w, c) {
            E("r", $),
            E("s", w),
            this.r = $,
            this.s = w,
            c != null && (this.recovery = c),
            Object.freeze(this)
        }
        static fromCompact($) {
            const w = o.BYTES
              , c = Pe("compactSignature", $, w * 2);
            return new B(o.fromBytes(c.subarray(0, w)),o.fromBytes(c.subarray(w, w * 2)))
        }
        static fromDER($) {
            const {r: w, s: c} = Sn.toSig(Pe("DER", $));
            return new B(w,c)
        }
        assertValidity() {}
        addRecoveryBit($) {
            return new B(this.r,this.s,$)
        }
        recoverPublicKey($) {
            const w = i.ORDER
              , {r: c, s: p, recovery: g} = this;
            if (g == null || ![0, 1, 2, 3].includes(g))
                throw new Error("recovery id invalid");
            if (a * Qd < w && g > 1)
                throw new Error("recovery id is ambiguous for h>1 curve");
            const x = g === 2 || g === 3 ? c + a : c;
            if (!i.isValid(x))
                throw new Error("recovery id 2 or 3 invalid");
            const I = i.toBytes(x)
              , T = n.fromHex(Ft(ou((g & 1) === 0), I))
              , v = o.inv(x)
              , d = q(Pe("msgHash", $))
              , S = o.create(-d * v)
              , J = o.create(p * v)
              , Z = n.BASE.multiplyUnsafe(S).add(T.multiplyUnsafe(J));
            if (Z.is0())
                throw new Error("point at infinify");
            return Z.assertValidity(),
            Z
        }
        hasHighS() {
            return m(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new B(this.r,o.neg(this.s),this.recovery) : this
        }
        toBytes($) {
            if ($ === "compact")
                return Ft(o.toBytes(this.r), o.toBytes(this.s));
            if ($ === "der")
                return zo(Sn.hexFromSig(this));
            throw new Error("invalid format")
        }
        toDERRawBytes() {
            return this.toBytes("der")
        }
        toDERHex() {
            return nr(this.toBytes("der"))
        }
        toCompactRawBytes() {
            return this.toBytes("compact")
        }
        toCompactHex() {
            return nr(this.toBytes("compact"))
        }
    }
    const k = su(o, t.allowedPrivateKeyLengths, t.wrapPrivateKey)
      , O = {
        isValidPrivateKey(U) {
            try {
                return k(U),
                !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: k,
        randomPrivateKey: () => {
            const U = a;
            return Kd(r(Qc(U)), U)
        }
        ,
        precompute(U=8, $=n.BASE) {
            return $.precompute(U, !1)
        }
    };
    function R(U, $=!0) {
        return n.fromPrivateKey(U).toBytes($)
    }
    function A(U) {
        if (typeof U == "bigint")
            return !1;
        if (U instanceof n)
            return !0;
        const w = Pe("key", U).length
          , c = i.BYTES
          , p = c + 1
          , g = 2 * c + 1;
        if (!(t.allowedPrivateKeyLengths || o.BYTES === p))
            return w === p || w === g
    }
    function F(U, $, w=!0) {
        if (A(U) === !0)
            throw new Error("first arg must be private key");
        if (A($) === !1)
            throw new Error("second arg must be public key");
        return n.fromHex($).multiply(k(U)).toBytes(w)
    }
    const z = e.bits2int || function(U) {
        if (U.length > 8192)
            throw new Error("input is too large");
        const $ = vi(U)
          , w = U.length * 8 - l;
        return w > 0 ? $ >> BigInt(w) : $
    }
      , q = e.bits2int_modN || function(U) {
        return o.create(z(U))
    }
      , X = ys(l);
    function j(U) {
        return jn("num < 2^" + l, U, Xr, X),
        o.toBytes(U)
    }
    function K(U, $, w=te) {
        if (["recovered", "canonical"].some(J => J in w))
            throw new Error("sign() legacy options not supported");
        const {hash: c} = e;
        let {lowS: p, prehash: g, extraEntropy: b} = w;
        p == null && (p = !0),
        U = Pe("msgHash", U),
        Ga(w),
        g && (U = Pe("prehashed msgHash", c(U)));
        const x = q(U)
          , I = k($)
          , T = [j(I), j(x)];
        if (b != null && b !== !1) {
            const J = b === !0 ? r(i.BYTES) : b;
            T.push(Pe("extraEntropy", J))
        }
        const v = Ft(...T)
          , d = x;
        function S(J) {
            const Z = z(J);
            if (!o.isValidNot0(Z))
                return;
            const se = o.inv(Z)
              , Ce = n.BASE.multiply(Z).toAffine()
              , Ee = o.create(Ce.x);
            if (Ee === Xr)
                return;
            const Se = o.create(se * o.create(d + Ee * I));
            if (Se === Xr)
                return;
            let tn = (Ce.x === Ee ? 0 : 2) | Number(Ce.y & Qr)
              , ke = Se;
            return p && m(Se) && (ke = h(Se),
            tn ^= 1),
            new B(Ee,ke,tn)
        }
        return {
            seed: v,
            k2sig: S
        }
    }
    const te = {
        lowS: e.lowS,
        prehash: !1
    }
      , Q = {
        lowS: e.lowS,
        prehash: !1
    };
    function N(U, $, w=te) {
        const {seed: c, k2sig: p} = K(U, $, w);
        return Ud(e.hash.outputLen, o.BYTES, s)(c, p)
    }
    n.BASE.precompute(8);
    function H(U, $, w, c=Q) {
        const p = U;
        $ = Pe("msgHash", $),
        w = Pe("publicKey", w),
        Ga(c);
        const {lowS: g, prehash: b, format: x} = c;
        if ("strict"in c)
            throw new Error("options.strict was renamed to lowS");
        if (x !== void 0 && !["compact", "der", "js"].includes(x))
            throw new Error('format must be "compact", "der" or "js"');
        const I = typeof p == "string" || ds(p)
          , T = !I && !x && typeof p == "object" && p !== null && typeof p.r == "bigint" && typeof p.s == "bigint";
        if (!I && !T)
            throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let v, d;
        try {
            if (T)
                if (x === void 0 || x === "js")
                    v = new B(p.r,p.s);
                else
                    throw new Error("invalid format");
            if (I) {
                try {
                    x !== "compact" && (v = B.fromDER(p))
                } catch (ke) {
                    if (!(ke instanceof Sn.Err))
                        throw ke
                }
                !v && x !== "der" && (v = B.fromCompact(p))
            }
            d = n.fromHex(w)
        } catch {
            return !1
        }
        if (!v || g && v.hasHighS())
            return !1;
        b && ($ = e.hash($));
        const {r: S, s: J} = v
          , Z = q($)
          , se = o.inv(J)
          , Ce = o.create(Z * se)
          , Ee = o.create(S * se)
          , Se = n.BASE.multiplyUnsafe(Ce).add(d.multiplyUnsafe(Ee));
        return Se.is0() ? !1 : o.create(Se.x) === S
    }
    return Object.freeze({
        getPublicKey: R,
        getSharedSecret: F,
        sign: N,
        verify: H,
        utils: O,
        Point: n,
        Signature: B
    })
}
function ih(n) {
    const e = {
        a: n.a,
        b: n.b,
        p: n.Fp.ORDER,
        n: n.n,
        h: n.h,
        Gx: n.Gx,
        Gy: n.Gy
    }
      , t = n.Fp
      , r = lr(e.n, n.nBitLength)
      , s = {
        Fp: t,
        Fn: r,
        allowedPrivateKeyLengths: n.allowedPrivateKeyLengths,
        allowInfinityPoint: n.allowInfinityPoint,
        endo: n.endo,
        wrapPrivateKey: n.wrapPrivateKey,
        isTorsionFree: n.isTorsionFree,
        clearCofactor: n.clearCofactor,
        fromBytes: n.fromBytes,
        toBytes: n.toBytes
    };
    return {
        CURVE: e,
        curveOpts: s
    }
}
function sh(n) {
    const {CURVE: e, curveOpts: t} = ih(n)
      , r = {
        hash: n.hash,
        hmac: n.hmac,
        randomBytes: n.randomBytes,
        lowS: n.lowS,
        bits2int: n.bits2int,
        bits2int_modN: n.bits2int_modN
    };
    return {
        CURVE: e,
        curveOpts: t,
        ecdsaOpts: r
    }
}
function oh(n, e) {
    return Object.assign({}, e, {
        ProjectivePoint: e.Point,
        CURVE: n
    })
}
function ah(n) {
    const {CURVE: e, curveOpts: t, ecdsaOpts: r} = sh(n)
      , s = nh(e, t)
      , i = rh(s, r, t);
    return oh(n, i)
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ch(n, e) {
    const t = r => ah({
        ...n,
        hash: r
    });
    return {
        ...t(e),
        create: t
    }
}
const uh = vi;
function Fn(n, e) {
    if (ti(n),
    ti(e),
    n < 0 || n >= 1 << 8 * e)
        throw new Error("invalid I2OSP input: " + n);
    const t = Array.from({
        length: e
    }).fill(0);
    for (let r = e - 1; r >= 0; r--)
        t[r] = n & 255,
        n >>>= 8;
    return new Uint8Array(t)
}
function lh(n, e) {
    const t = new Uint8Array(n.length);
    for (let r = 0; r < n.length; r++)
        t[r] = n[r] ^ e[r];
    return t
}
function ti(n) {
    if (!Number.isSafeInteger(n))
        throw new Error("number expected")
}
function au(n, e, t, r) {
    Et(n),
    Et(e),
    ti(t),
    e.length > 255 && (e = r(Ft(jr("H2C-OVERSIZE-DST-"), e)));
    const {outputLen: s, blockLen: i} = r
      , o = Math.ceil(t / s);
    if (t > 65535 || o > 255)
        throw new Error("expand_message_xmd: invalid lenInBytes");
    const a = Ft(e, Fn(e.length, 1))
      , l = Fn(0, i)
      , m = Fn(t, 2)
      , h = new Array(o)
      , E = r(Ft(l, n, m, Fn(0, 1), a));
    h[0] = r(Ft(E, Fn(1, 1), a));
    for (let k = 1; k <= o; k++) {
        const O = [lh(E, h[k - 1]), Fn(k + 1, 1), a];
        h[k] = r(Ft(...O))
    }
    return Ft(...h).slice(0, t)
}
function fh(n, e, t, r, s) {
    if (Et(n),
    Et(e),
    ti(t),
    e.length > 255) {
        const i = Math.ceil(2 * r / 8);
        e = s.create({
            dkLen: i
        }).update(jr("H2C-OVERSIZE-DST-")).update(e).digest()
    }
    if (t > 65535 || e.length > 255)
        throw new Error("expand_message_xof: invalid lenInBytes");
    return s.create({
        dkLen: t
    }).update(n).update(Fn(t, 2)).update(e).update(Fn(e.length, 1)).digest()
}
function Ja(n, e, t) {
    ur(t, {
        p: "bigint",
        m: "number",
        k: "number",
        hash: "function"
    });
    const {p: r, k: s, m: i, hash: o, expand: a, DST: l} = t;
    if (!ds(l) && typeof l != "string")
        throw new Error("DST must be string or uint8array");
    if (!Fd(t.hash))
        throw new Error("expected valid hash");
    Et(n),
    ti(e);
    const m = typeof l == "string" ? jr(l) : l
      , h = r.toString(2).length
      , E = Math.ceil((h + s) / 8)
      , B = e * i * E;
    let k;
    if (a === "xmd")
        k = au(n, m, B, o);
    else if (a === "xof")
        k = fh(n, m, B, s, o);
    else if (a === "_internal_pass")
        k = n;
    else
        throw new Error('expand must be "xmd" or "xof"');
    const O = new Array(e);
    for (let R = 0; R < e; R++) {
        const A = new Array(i);
        for (let F = 0; F < i; F++) {
            const z = E * (F + R * i)
              , q = k.subarray(z, z + E);
            A[F] = He(uh(q), r)
        }
        O[R] = A
    }
    return O
}
function dh(n, e, t) {
    if (typeof e != "function")
        throw new Error("mapToCurve() must be defined");
    function r(i) {
        return n.fromAffine(e(i))
    }
    function s(i) {
        const o = i.clearCofactor();
        return o.equals(n.ZERO) ? n.ZERO : (o.assertValidity(),
        o)
    }
    return {
        defaults: t,
        hashToCurve(i, o) {
            const a = t.DST ? t.DST : {}
              , l = Object.assign({}, t, a, o)
              , m = Ja(i, 2, l)
              , h = r(m[0])
              , E = r(m[1]);
            return s(h.add(E))
        },
        encodeToCurve(i, o) {
            const a = t.encodeDST ? t.encodeDST : {}
              , l = Object.assign({}, t, a, o)
              , m = Ja(i, 1, l);
            return s(r(m[0]))
        },
        mapToCurve(i) {
            if (!Array.isArray(i))
                throw new Error("expected array of bigints");
            for (const o of i)
                if (typeof o != "bigint")
                    throw new Error("expected array of bigints");
            return s(r(i))
        }
    }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ji = {
    p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: BigInt(1),
    a: BigInt(0),
    b: BigInt(7),
    Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
    Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
};
BigInt(0);
const hh = BigInt(1)
  , bo = BigInt(2)
  , Ya = (n, e) => (n + e / bo) / e;
function ph(n) {
    const e = ji.p
      , t = BigInt(3)
      , r = BigInt(6)
      , s = BigInt(11)
      , i = BigInt(22)
      , o = BigInt(23)
      , a = BigInt(44)
      , l = BigInt(88)
      , m = n * n * n % e
      , h = m * m * n % e
      , E = We(h, t, e) * h % e
      , B = We(E, t, e) * h % e
      , k = We(B, bo, e) * m % e
      , O = We(k, s, e) * k % e
      , R = We(O, i, e) * O % e
      , A = We(R, a, e) * R % e
      , F = We(A, l, e) * A % e
      , z = We(F, a, e) * R % e
      , q = We(z, t, e) * h % e
      , X = We(q, o, e) * O % e
      , j = We(X, r, e) * m % e
      , K = We(j, bo, e);
    if (!vo.eql(vo.sqr(K), n))
        throw new Error("Cannot find square root");
    return K
}
const vo = lr(ji.p, void 0, void 0, {
    sqrt: ph
})
  , Jo = ch({
    ...ji,
    Fp: vo,
    lowS: !0,
    endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: n => {
            const e = ji.n
              , t = BigInt("0x3086d221a7d46bcde86c90e49284eb15")
              , r = -hh * BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
              , s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8")
              , i = t
              , o = BigInt("0x100000000000000000000000000000000")
              , a = Ya(i * n, e)
              , l = Ya(-r * n, e);
            let m = He(n - a * t - l * s, e)
              , h = He(-a * r - l * i, e);
            const E = m > o
              , B = h > o;
            if (E && (m = e - m),
            B && (h = e - h),
            m > o || h > o)
                throw new Error("splitScalar: Endomorphism failed, k=" + n);
            return {
                k1neg: E,
                k1: m,
                k2neg: B,
                k2: h
            }
        }
    }
}, Fc)
  , Rw = Object.freeze(Object.defineProperty({
    __proto__: null,
    secp256k1: Jo
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Yo = jo(Od);
var Oi, mh = new Uint8Array(16);
function cu() {
    if (!Oi && (Oi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto),
    !Oi))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Oi(mh)
}
const gh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function ws(n) {
    return typeof n == "string" && gh.test(n)
}
var St = [];
for (var to = 0; to < 256; ++to)
    St.push((to + 256).toString(16).substr(1));
function bs(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      , t = (St[n[e + 0]] + St[n[e + 1]] + St[n[e + 2]] + St[n[e + 3]] + "-" + St[n[e + 4]] + St[n[e + 5]] + "-" + St[n[e + 6]] + St[n[e + 7]] + "-" + St[n[e + 8]] + St[n[e + 9]] + "-" + St[n[e + 10]] + St[n[e + 11]] + St[n[e + 12]] + St[n[e + 13]] + St[n[e + 14]] + St[n[e + 15]]).toLowerCase();
    if (!ws(t))
        throw TypeError("Stringified UUID is invalid");
    return t
}
var Xa, no, ro = 0, io = 0;
function yh(n, e, t) {
    var r = e && t || 0
      , s = e || new Array(16);
    n = n || {};
    var i = n.node || Xa
      , o = n.clockseq !== void 0 ? n.clockseq : no;
    if (i == null || o == null) {
        var a = n.random || (n.rng || cu)();
        i == null && (i = Xa = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]),
        o == null && (o = no = (a[6] << 8 | a[7]) & 16383)
    }
    var l = n.msecs !== void 0 ? n.msecs : Date.now()
      , m = n.nsecs !== void 0 ? n.nsecs : io + 1
      , h = l - ro + (m - io) / 1e4;
    if (h < 0 && n.clockseq === void 0 && (o = o + 1 & 16383),
    (h < 0 || l > ro) && n.nsecs === void 0 && (m = 0),
    m >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    ro = l,
    io = m,
    no = o,
    l += 122192928e5;
    var E = ((l & 268435455) * 1e4 + m) % 4294967296;
    s[r++] = E >>> 24 & 255,
    s[r++] = E >>> 16 & 255,
    s[r++] = E >>> 8 & 255,
    s[r++] = E & 255;
    var B = l / 4294967296 * 1e4 & 268435455;
    s[r++] = B >>> 8 & 255,
    s[r++] = B & 255,
    s[r++] = B >>> 24 & 15 | 16,
    s[r++] = B >>> 16 & 255,
    s[r++] = o >>> 8 | 128,
    s[r++] = o & 255;
    for (var k = 0; k < 6; ++k)
        s[r + k] = i[k];
    return e || bs(s)
}
function uu(n) {
    if (!ws(n))
        throw TypeError("Invalid UUID");
    var e, t = new Uint8Array(16);
    return t[0] = (e = parseInt(n.slice(0, 8), 16)) >>> 24,
    t[1] = e >>> 16 & 255,
    t[2] = e >>> 8 & 255,
    t[3] = e & 255,
    t[4] = (e = parseInt(n.slice(9, 13), 16)) >>> 8,
    t[5] = e & 255,
    t[6] = (e = parseInt(n.slice(14, 18), 16)) >>> 8,
    t[7] = e & 255,
    t[8] = (e = parseInt(n.slice(19, 23), 16)) >>> 8,
    t[9] = e & 255,
    t[10] = (e = parseInt(n.slice(24, 36), 16)) / 1099511627776 & 255,
    t[11] = e / 4294967296 & 255,
    t[12] = e >>> 24 & 255,
    t[13] = e >>> 16 & 255,
    t[14] = e >>> 8 & 255,
    t[15] = e & 255,
    t
}
function wh(n) {
    n = unescape(encodeURIComponent(n));
    for (var e = [], t = 0; t < n.length; ++t)
        e.push(n.charCodeAt(t));
    return e
}
var bh = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
  , vh = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function lu(n, e, t) {
    function r(s, i, o, a) {
        if (typeof s == "string" && (s = wh(s)),
        typeof i == "string" && (i = uu(i)),
        i.length !== 16)
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var l = new Uint8Array(16 + s.length);
        if (l.set(i),
        l.set(s, i.length),
        l = t(l),
        l[6] = l[6] & 15 | e,
        l[8] = l[8] & 63 | 128,
        o) {
            a = a || 0;
            for (var m = 0; m < 16; ++m)
                o[a + m] = l[m];
            return o
        }
        return bs(l)
    }
    try {
        r.name = n
    } catch {}
    return r.DNS = bh,
    r.URL = vh,
    r
}
function _h(n) {
    if (typeof n == "string") {
        var e = unescape(encodeURIComponent(n));
        n = new Uint8Array(e.length);
        for (var t = 0; t < e.length; ++t)
            n[t] = e.charCodeAt(t)
    }
    return xh(Eh(Sh(n), n.length * 8))
}
function xh(n) {
    for (var e = [], t = n.length * 32, r = "0123456789abcdef", s = 0; s < t; s += 8) {
        var i = n[s >> 5] >>> s % 32 & 255
          , o = parseInt(r.charAt(i >>> 4 & 15) + r.charAt(i & 15), 16);
        e.push(o)
    }
    return e
}
function fu(n) {
    return (n + 64 >>> 9 << 4) + 14 + 1
}
function Eh(n, e) {
    n[e >> 5] |= 128 << e % 32,
    n[fu(e) - 1] = e;
    for (var t = 1732584193, r = -271733879, s = -1732584194, i = 271733878, o = 0; o < n.length; o += 16) {
        var a = t
          , l = r
          , m = s
          , h = i;
        t = Ot(t, r, s, i, n[o], 7, -680876936),
        i = Ot(i, t, r, s, n[o + 1], 12, -389564586),
        s = Ot(s, i, t, r, n[o + 2], 17, 606105819),
        r = Ot(r, s, i, t, n[o + 3], 22, -1044525330),
        t = Ot(t, r, s, i, n[o + 4], 7, -176418897),
        i = Ot(i, t, r, s, n[o + 5], 12, 1200080426),
        s = Ot(s, i, t, r, n[o + 6], 17, -1473231341),
        r = Ot(r, s, i, t, n[o + 7], 22, -45705983),
        t = Ot(t, r, s, i, n[o + 8], 7, 1770035416),
        i = Ot(i, t, r, s, n[o + 9], 12, -1958414417),
        s = Ot(s, i, t, r, n[o + 10], 17, -42063),
        r = Ot(r, s, i, t, n[o + 11], 22, -1990404162),
        t = Ot(t, r, s, i, n[o + 12], 7, 1804603682),
        i = Ot(i, t, r, s, n[o + 13], 12, -40341101),
        s = Ot(s, i, t, r, n[o + 14], 17, -1502002290),
        r = Ot(r, s, i, t, n[o + 15], 22, 1236535329),
        t = Ct(t, r, s, i, n[o + 1], 5, -165796510),
        i = Ct(i, t, r, s, n[o + 6], 9, -1069501632),
        s = Ct(s, i, t, r, n[o + 11], 14, 643717713),
        r = Ct(r, s, i, t, n[o], 20, -373897302),
        t = Ct(t, r, s, i, n[o + 5], 5, -701558691),
        i = Ct(i, t, r, s, n[o + 10], 9, 38016083),
        s = Ct(s, i, t, r, n[o + 15], 14, -660478335),
        r = Ct(r, s, i, t, n[o + 4], 20, -405537848),
        t = Ct(t, r, s, i, n[o + 9], 5, 568446438),
        i = Ct(i, t, r, s, n[o + 14], 9, -1019803690),
        s = Ct(s, i, t, r, n[o + 3], 14, -187363961),
        r = Ct(r, s, i, t, n[o + 8], 20, 1163531501),
        t = Ct(t, r, s, i, n[o + 13], 5, -1444681467),
        i = Ct(i, t, r, s, n[o + 2], 9, -51403784),
        s = Ct(s, i, t, r, n[o + 7], 14, 1735328473),
        r = Ct(r, s, i, t, n[o + 12], 20, -1926607734),
        t = Lt(t, r, s, i, n[o + 5], 4, -378558),
        i = Lt(i, t, r, s, n[o + 8], 11, -2022574463),
        s = Lt(s, i, t, r, n[o + 11], 16, 1839030562),
        r = Lt(r, s, i, t, n[o + 14], 23, -35309556),
        t = Lt(t, r, s, i, n[o + 1], 4, -1530992060),
        i = Lt(i, t, r, s, n[o + 4], 11, 1272893353),
        s = Lt(s, i, t, r, n[o + 7], 16, -155497632),
        r = Lt(r, s, i, t, n[o + 10], 23, -1094730640),
        t = Lt(t, r, s, i, n[o + 13], 4, 681279174),
        i = Lt(i, t, r, s, n[o], 11, -358537222),
        s = Lt(s, i, t, r, n[o + 3], 16, -722521979),
        r = Lt(r, s, i, t, n[o + 6], 23, 76029189),
        t = Lt(t, r, s, i, n[o + 9], 4, -640364487),
        i = Lt(i, t, r, s, n[o + 12], 11, -421815835),
        s = Lt(s, i, t, r, n[o + 15], 16, 530742520),
        r = Lt(r, s, i, t, n[o + 2], 23, -995338651),
        t = Nt(t, r, s, i, n[o], 6, -198630844),
        i = Nt(i, t, r, s, n[o + 7], 10, 1126891415),
        s = Nt(s, i, t, r, n[o + 14], 15, -1416354905),
        r = Nt(r, s, i, t, n[o + 5], 21, -57434055),
        t = Nt(t, r, s, i, n[o + 12], 6, 1700485571),
        i = Nt(i, t, r, s, n[o + 3], 10, -1894986606),
        s = Nt(s, i, t, r, n[o + 10], 15, -1051523),
        r = Nt(r, s, i, t, n[o + 1], 21, -2054922799),
        t = Nt(t, r, s, i, n[o + 8], 6, 1873313359),
        i = Nt(i, t, r, s, n[o + 15], 10, -30611744),
        s = Nt(s, i, t, r, n[o + 6], 15, -1560198380),
        r = Nt(r, s, i, t, n[o + 13], 21, 1309151649),
        t = Nt(t, r, s, i, n[o + 4], 6, -145523070),
        i = Nt(i, t, r, s, n[o + 11], 10, -1120210379),
        s = Nt(s, i, t, r, n[o + 2], 15, 718787259),
        r = Nt(r, s, i, t, n[o + 9], 21, -343485551),
        t = zn(t, a),
        r = zn(r, l),
        s = zn(s, m),
        i = zn(i, h)
    }
    return [t, r, s, i]
}
function Sh(n) {
    if (n.length === 0)
        return [];
    for (var e = n.length * 8, t = new Uint32Array(fu(e)), r = 0; r < e; r += 8)
        t[r >> 5] |= (n[r / 8] & 255) << r % 32;
    return t
}
function zn(n, e) {
    var t = (n & 65535) + (e & 65535)
      , r = (n >> 16) + (e >> 16) + (t >> 16);
    return r << 16 | t & 65535
}
function kh(n, e) {
    return n << e | n >>> 32 - e
}
function vs(n, e, t, r, s, i) {
    return zn(kh(zn(zn(e, n), zn(r, i)), s), t)
}
function Ot(n, e, t, r, s, i, o) {
    return vs(e & t | ~e & r, n, e, s, i, o)
}
function Ct(n, e, t, r, s, i, o) {
    return vs(e & r | t & ~r, n, e, s, i, o)
}
function Lt(n, e, t, r, s, i, o) {
    return vs(e ^ t ^ r, n, e, s, i, o)
}
function Nt(n, e, t, r, s, i, o) {
    return vs(t ^ (e | ~r), n, e, s, i, o)
}
var Ah = lu("v3", 48, _h);
function Ih(n, e, t) {
    n = n || {};
    var r = n.random || (n.rng || cu)();
    if (r[6] = r[6] & 15 | 64,
    r[8] = r[8] & 63 | 128,
    e) {
        t = t || 0;
        for (var s = 0; s < 16; ++s)
            e[t + s] = r[s];
        return e
    }
    return bs(r)
}
function Bh(n, e, t, r) {
    switch (n) {
    case 0:
        return e & t ^ ~e & r;
    case 1:
        return e ^ t ^ r;
    case 2:
        return e & t ^ e & r ^ t & r;
    case 3:
        return e ^ t ^ r
    }
}
function so(n, e) {
    return n << e | n >>> 32 - e
}
function Rh(n) {
    var e = [1518500249, 1859775393, 2400959708, 3395469782]
      , t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof n == "string") {
        var r = unescape(encodeURIComponent(n));
        n = [];
        for (var s = 0; s < r.length; ++s)
            n.push(r.charCodeAt(s))
    } else
        Array.isArray(n) || (n = Array.prototype.slice.call(n));
    n.push(128);
    for (var i = n.length / 4 + 2, o = Math.ceil(i / 16), a = new Array(o), l = 0; l < o; ++l) {
        for (var m = new Uint32Array(16), h = 0; h < 16; ++h)
            m[h] = n[l * 64 + h * 4] << 24 | n[l * 64 + h * 4 + 1] << 16 | n[l * 64 + h * 4 + 2] << 8 | n[l * 64 + h * 4 + 3];
        a[l] = m
    }
    a[o - 1][14] = (n.length - 1) * 8 / Math.pow(2, 32),
    a[o - 1][14] = Math.floor(a[o - 1][14]),
    a[o - 1][15] = (n.length - 1) * 8 & 4294967295;
    for (var E = 0; E < o; ++E) {
        for (var B = new Uint32Array(80), k = 0; k < 16; ++k)
            B[k] = a[E][k];
        for (var O = 16; O < 80; ++O)
            B[O] = so(B[O - 3] ^ B[O - 8] ^ B[O - 14] ^ B[O - 16], 1);
        for (var R = t[0], A = t[1], F = t[2], z = t[3], q = t[4], X = 0; X < 80; ++X) {
            var j = Math.floor(X / 20)
              , K = so(R, 5) + Bh(j, A, F, z) + q + e[j] + B[X] >>> 0;
            q = z,
            z = F,
            F = so(A, 30) >>> 0,
            A = R,
            R = K
        }
        t[0] = t[0] + R >>> 0,
        t[1] = t[1] + A >>> 0,
        t[2] = t[2] + F >>> 0,
        t[3] = t[3] + z >>> 0,
        t[4] = t[4] + q >>> 0
    }
    return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255]
}
var Mh = lu("v5", 80, Rh);
const Th = "00000000-0000-0000-0000-000000000000";
function Oh(n) {
    if (!ws(n))
        throw TypeError("Invalid UUID");
    return parseInt(n.substr(14, 1), 16)
}
const Ch = Object.freeze(Object.defineProperty({
    __proto__: null,
    NIL: Th,
    parse: uu,
    stringify: bs,
    v1: yh,
    v3: Ah,
    v4: Ih,
    v5: Mh,
    validate: ws,
    version: Oh
}, Symbol.toStringTag, {
    value: "Module"
}));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const dn = BigInt(0)
  , zt = BigInt(1)
  , oo = BigInt(2)
  , Lh = BigInt(8)
  , Nh = {
    zip215: !0
};
function Ph(n, e, t, r) {
    const s = n.sqr(t)
      , i = n.sqr(r)
      , o = n.add(n.mul(e.a, s), i)
      , a = n.add(n.ONE, n.mul(e.d, n.mul(s, i)));
    return n.eql(o, a)
}
function Uh(n, e={}) {
    const {Fp: t, Fn: r} = iu("edwards", n, e)
      , {h: s, n: i} = n;
    ur(e, {}, {
        uvRatio: "function"
    });
    const o = oo << BigInt(r.BYTES * 8) - zt
      , a = R => t.create(R)
      , l = e.uvRatio || ( (R, A) => {
        try {
            return {
                isValid: !0,
                value: t.sqrt(t.div(R, A))
            }
        } catch {
            return {
                isValid: !1,
                value: dn
            }
        }
    }
    );
    if (!Ph(t, n, n.Gx, n.Gy))
        throw new Error("bad curve params: generator point");
    function m(R, A, F=!1) {
        const z = F ? zt : dn;
        return jn("coordinate " + R, A, z, o),
        A
    }
    function h(R) {
        if (!(R instanceof k))
            throw new Error("ExtendedPoint expected")
    }
    const E = Di( (R, A) => {
        const {ex: F, ey: z, ez: q} = R
          , X = R.is0();
        A == null && (A = X ? Lh : t.inv(q));
        const j = a(F * A)
          , K = a(z * A)
          , te = a(q * A);
        if (X)
            return {
                x: dn,
                y: zt
            };
        if (te !== zt)
            throw new Error("invZ was invalid");
        return {
            x: j,
            y: K
        }
    }
    )
      , B = Di(R => {
        const {a: A, d: F} = n;
        if (R.is0())
            throw new Error("bad point: ZERO");
        const {ex: z, ey: q, ez: X, et: j} = R
          , K = a(z * z)
          , te = a(q * q)
          , Q = a(X * X)
          , N = a(Q * Q)
          , H = a(K * A)
          , U = a(Q * a(H + te))
          , $ = a(N + a(F * a(K * te)));
        if (U !== $)
            throw new Error("bad point: equation left != right (1)");
        const w = a(z * q)
          , c = a(X * j);
        if (w !== c)
            throw new Error("bad point: equation left != right (2)");
        return !0
    }
    );
    class k {
        constructor(A, F, z, q) {
            this.ex = m("x", A),
            this.ey = m("y", F),
            this.ez = m("z", z, !0),
            this.et = m("t", q),
            Object.freeze(this)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(A) {
            if (A instanceof k)
                throw new Error("extended point not allowed");
            const {x: F, y: z} = A || {};
            return m("x", F),
            m("y", z),
            new k(F,z,zt,a(F * z))
        }
        static normalizeZ(A) {
            return eu(k, "ez", A)
        }
        static msm(A, F) {
            return Go(k, r, A, F)
        }
        _setWindowSize(A) {
            this.precompute(A)
        }
        precompute(A=8, F=!0) {
            return O.setWindowSize(this, A),
            F || this.multiply(oo),
            this
        }
        assertValidity() {
            B(this)
        }
        equals(A) {
            h(A);
            const {ex: F, ey: z, ez: q} = this
              , {ex: X, ey: j, ez: K} = A
              , te = a(F * K)
              , Q = a(X * q)
              , N = a(z * K)
              , H = a(j * q);
            return te === Q && N === H
        }
        is0() {
            return this.equals(k.ZERO)
        }
        negate() {
            return new k(a(-this.ex),this.ey,this.ez,a(-this.et))
        }
        double() {
            const {a: A} = n
              , {ex: F, ey: z, ez: q} = this
              , X = a(F * F)
              , j = a(z * z)
              , K = a(oo * a(q * q))
              , te = a(A * X)
              , Q = F + z
              , N = a(a(Q * Q) - X - j)
              , H = te + j
              , U = H - K
              , $ = te - j
              , w = a(N * U)
              , c = a(H * $)
              , p = a(N * $)
              , g = a(U * H);
            return new k(w,c,g,p)
        }
        add(A) {
            h(A);
            const {a: F, d: z} = n
              , {ex: q, ey: X, ez: j, et: K} = this
              , {ex: te, ey: Q, ez: N, et: H} = A
              , U = a(q * te)
              , $ = a(X * Q)
              , w = a(K * z * H)
              , c = a(j * N)
              , p = a((q + X) * (te + Q) - U - $)
              , g = c - w
              , b = c + w
              , x = a($ - F * U)
              , I = a(p * g)
              , T = a(b * x)
              , v = a(p * x)
              , d = a(g * b);
            return new k(I,T,d,v)
        }
        subtract(A) {
            return this.add(A.negate())
        }
        multiply(A) {
            const F = A;
            jn("scalar", F, zt, i);
            const {p: z, f: q} = O.wNAFCached(this, F, k.normalizeZ);
            return k.normalizeZ([z, q])[0]
        }
        multiplyUnsafe(A, F=k.ZERO) {
            const z = A;
            return jn("scalar", z, dn, i),
            z === dn ? k.ZERO : this.is0() || z === zt ? this : O.wNAFCachedUnsafe(this, z, k.normalizeZ, F)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(s).is0()
        }
        isTorsionFree() {
            return O.wNAFCachedUnsafe(this, i).is0()
        }
        toAffine(A) {
            return E(this, A)
        }
        clearCofactor() {
            return s === zt ? this : this.multiplyUnsafe(s)
        }
        static fromBytes(A, F=!1) {
            return Et(A),
            this.fromHex(A, F)
        }
        static fromHex(A, F=!1) {
            const {d: z, a: q} = n
              , X = t.BYTES;
            A = Pe("pointHex", A, X),
            rr("zip215", F);
            const j = A.slice()
              , K = A[X - 1];
            j[X - 1] = K & -129;
            const te = Zn(j)
              , Q = F ? o : t.ORDER;
            jn("pointHex.y", te, dn, Q);
            const N = a(te * te)
              , H = a(N - zt)
              , U = a(z * N - q);
            let {isValid: $, value: w} = l(H, U);
            if (!$)
                throw new Error("Point.fromHex: invalid y coordinate");
            const c = (w & zt) === zt
              , p = (K & 128) !== 0;
            if (!F && w === dn && p)
                throw new Error("Point.fromHex: x=0 and x_0=1");
            return p !== c && (w = a(-w)),
            k.fromAffine({
                x: w,
                y: te
            })
        }
        static fromPrivateScalar(A) {
            return k.BASE.multiply(A)
        }
        toBytes() {
            const {x: A, y: F} = this.toAffine()
              , z = ir(F, t.BYTES);
            return z[z.length - 1] |= A & zt ? 128 : 0,
            z
        }
        toRawBytes() {
            return this.toBytes()
        }
        toHex() {
            return nr(this.toBytes())
        }
        toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`
        }
    }
    k.BASE = new k(n.Gx,n.Gy,zt,a(n.Gx * n.Gy)),
    k.ZERO = new k(dn,zt,zt,dn),
    k.Fp = t,
    k.Fn = r;
    const O = ru(k, r.BYTES * 8);
    return k
}
function Fh(n, e) {
    ur(e, {
        hash: "function"
    }, {
        adjustScalarBytes: "function",
        randomBytes: "function",
        domain: "function",
        prehash: "function",
        mapToCurve: "function"
    });
    const {prehash: t, hash: r} = e
      , {BASE: s, Fp: i, Fn: o} = n
      , a = o.ORDER
      , l = e.randomBytes || $o
      , m = e.adjustScalarBytes || (j => j)
      , h = e.domain || ( (j, K, te) => {
        if (rr("phflag", te),
        K.length || te)
            throw new Error("Contexts/pre-hash are not supported");
        return j
    }
    );
    function E(j) {
        return o.create(j)
    }
    function B(j) {
        return E(Zn(j))
    }
    function k(j) {
        const K = i.BYTES;
        j = Pe("private key", j, K);
        const te = Pe("hashed private key", r(j), 2 * K)
          , Q = m(te.slice(0, K))
          , N = te.slice(K, 2 * K)
          , H = B(Q);
        return {
            head: Q,
            prefix: N,
            scalar: H
        }
    }
    function O(j) {
        const {head: K, prefix: te, scalar: Q} = k(j)
          , N = s.multiply(Q)
          , H = N.toBytes();
        return {
            head: K,
            prefix: te,
            scalar: Q,
            point: N,
            pointBytes: H
        }
    }
    function R(j) {
        return O(j).pointBytes
    }
    function A(j=Uint8Array.of(), ...K) {
        const te = Ft(...K);
        return B(r(h(te, Pe("context", j), !!t)))
    }
    function F(j, K, te={}) {
        j = Pe("message", j),
        t && (j = t(j));
        const {prefix: Q, scalar: N, pointBytes: H} = O(K)
          , U = A(te.context, Q, j)
          , $ = s.multiply(U).toBytes()
          , w = A(te.context, $, H, j)
          , c = E(U + w * N);
        jn("signature.s", c, dn, a);
        const p = i.BYTES
          , g = Ft($, ir(c, p));
        return Pe("result", g, p * 2)
    }
    const z = Nh;
    function q(j, K, te, Q=z) {
        const {context: N, zip215: H} = Q
          , U = i.BYTES;
        j = Pe("signature", j, 2 * U),
        K = Pe("message", K),
        te = Pe("publicKey", te, U),
        H !== void 0 && rr("zip215", H),
        t && (K = t(K));
        const $ = Zn(j.slice(U, 2 * U));
        let w, c, p;
        try {
            w = n.fromHex(te, H),
            c = n.fromHex(j.slice(0, U), H),
            p = s.multiplyUnsafe($)
        } catch {
            return !1
        }
        if (!H && w.isSmallOrder())
            return !1;
        const g = A(N, c.toBytes(), w.toBytes(), K);
        return c.add(w.multiplyUnsafe(g)).subtract(p).clearCofactor().is0()
    }
    return s.precompute(8),
    {
        getPublicKey: R,
        sign: F,
        verify: q,
        utils: {
            getExtendedPublicKey: O,
            randomPrivateKey: () => l(i.BYTES),
            precompute(j=8, K=n.BASE) {
                return K.precompute(j, !1)
            }
        },
        Point: n
    }
}
function Dh(n) {
    const e = {
        a: n.a,
        d: n.d,
        p: n.Fp.ORDER,
        n: n.n,
        h: n.h,
        Gx: n.Gx,
        Gy: n.Gy
    }
      , t = n.Fp
      , r = lr(e.n, n.nBitLength, !0)
      , s = {
        Fp: t,
        Fn: r,
        uvRatio: n.uvRatio
    }
      , i = {
        hash: n.hash,
        randomBytes: n.randomBytes,
        adjustScalarBytes: n.adjustScalarBytes,
        domain: n.domain,
        prehash: n.prehash,
        mapToCurve: n.mapToCurve
    };
    return {
        CURVE: e,
        curveOpts: s,
        eddsaOpts: i
    }
}
function jh(n, e) {
    return Object.assign({}, e, {
        ExtendedPoint: e.Point,
        CURVE: n
    })
}
function Xo(n) {
    const {CURVE: e, curveOpts: t, eddsaOpts: r} = Dh(n)
      , s = Uh(e, t)
      , i = Fh(s, r);
    return jh(n, i)
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Wr = BigInt(0)
  , xr = BigInt(1)
  , Ci = BigInt(2);
function zh(n) {
    return ur(n, {
        adjustScalarBytes: "function",
        powPminus2: "function"
    }),
    Object.freeze({
        ...n
    })
}
function qh(n) {
    const e = zh(n)
      , {P: t, type: r, adjustScalarBytes: s, powPminus2: i, randomBytes: o} = e
      , a = r === "x25519";
    if (!a && r !== "x448")
        throw new Error("invalid type");
    const l = o || $o
      , m = a ? 255 : 448
      , h = a ? 32 : 56
      , E = BigInt(a ? 9 : 5)
      , B = BigInt(a ? 121665 : 39081)
      , k = a ? Ci ** BigInt(254) : Ci ** BigInt(447)
      , O = a ? BigInt(8) * Ci ** BigInt(251) - xr : BigInt(4) * Ci ** BigInt(445) - xr
      , R = k + O + xr
      , A = N => He(N, t)
      , F = z(E);
    function z(N) {
        return ir(A(N), h)
    }
    function q(N) {
        const H = Pe("u coordinate", N, h);
        return a && (H[31] &= 127),
        A(Zn(H))
    }
    function X(N) {
        return Zn(s(Pe("scalar", N, h)))
    }
    function j(N, H) {
        const U = Q(q(H), X(N));
        if (U === Wr)
            throw new Error("invalid private or public key received");
        return z(U)
    }
    function K(N) {
        return j(N, F)
    }
    function te(N, H, U) {
        const $ = A(N * (H - U));
        return H = A(H - $),
        U = A(U + $),
        {
            x_2: H,
            x_3: U
        }
    }
    function Q(N, H) {
        jn("u", N, Wr, t),
        jn("scalar", H, k, R);
        const U = H
          , $ = N;
        let w = xr
          , c = Wr
          , p = N
          , g = xr
          , b = Wr;
        for (let I = BigInt(m - 1); I >= Wr; I--) {
            const T = U >> I & xr;
            b ^= T,
            {x_2: w, x_3: p} = te(b, w, p),
            {x_2: c, x_3: g} = te(b, c, g),
            b = T;
            const v = w + c
              , d = A(v * v)
              , S = w - c
              , J = A(S * S)
              , Z = d - J
              , se = p + g
              , Ce = p - g
              , Ee = A(Ce * v)
              , Se = A(se * S)
              , tn = Ee + Se
              , ke = Ee - Se;
            p = A(tn * tn),
            g = A($ * A(ke * ke)),
            w = A(d * J),
            c = A(Z * (d + A(B * Z)))
        }
        ({x_2: w, x_3: p} = te(b, w, p)),
        {x_2: c, x_3: g} = te(b, c, g);
        const x = i(c);
        return A(w * x)
    }
    return {
        scalarMult: j,
        scalarMultBase: K,
        getSharedSecret: (N, H) => j(N, H),
        getPublicKey: N => K(N),
        utils: {
            randomPrivateKey: () => l(h)
        },
        GuBytes: F.slice()
    }
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const $h = BigInt(0)
  , pn = BigInt(1)
  , zi = BigInt(2)
  , du = BigInt(3)
  , hu = BigInt(5)
  , Qo = BigInt(8)
  , _i = {
    p: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),
    n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
    h: Qo,
    a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
    d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
    Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
    Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
};
function pu(n) {
    const e = BigInt(10)
      , t = BigInt(20)
      , r = BigInt(40)
      , s = BigInt(80)
      , i = _i.p
      , a = n * n % i * n % i
      , l = We(a, zi, i) * a % i
      , m = We(l, pn, i) * n % i
      , h = We(m, hu, i) * m % i
      , E = We(h, e, i) * h % i
      , B = We(E, t, i) * E % i
      , k = We(B, r, i) * B % i
      , O = We(k, s, i) * k % i
      , R = We(O, s, i) * k % i
      , A = We(R, e, i) * h % i;
    return {
        pow_p_5_8: We(A, zi, i) * n % i,
        b2: a
    }
}
function mu(n) {
    return n[0] &= 248,
    n[31] &= 127,
    n[31] |= 64,
    n
}
const _o = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
function ea(n, e) {
    const t = _i.p
      , r = He(e * e * e, t)
      , s = He(r * r * e, t)
      , i = pu(n * s).pow_p_5_8;
    let o = He(n * r * i, t);
    const a = He(e * o * o, t)
      , l = o
      , m = He(o * _o, t)
      , h = a === n
      , E = a === He(-n, t)
      , B = a === He(-n * _o, t);
    return h && (o = l),
    (E || B) && (o = m),
    Un(o, t) && (o = He(-o, t)),
    {
        isValid: h || E,
        value: o
    }
}
const Hh = ["0100000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a", "0000000000000000000000000000000000000000000000000000000000000080", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05", "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85", "0000000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"]
  , ee = lr(_i.p, void 0, !0)
  , ni = {
    ..._i,
    Fp: ee,
    hash: ms,
    adjustScalarBytes: mu,
    uvRatio: ea
}
  , vt = Xo(ni);
function gu(n, e, t) {
    if (e.length > 255)
        throw new Error("Context is too big");
    return Ft(jr("SigEd25519 no Ed25519 collisions"), new Uint8Array([t ? 1 : 0, e.length]), e, n)
}
const Vh = Xo({
    ...ni,
    domain: gu
})
  , Zh = Xo(Object.assign({}, ni, {
    domain: gu,
    prehash: ms
}))
  , Wh = ( () => {
    const n = _i.p;
    return qh({
        P: n,
        type: "x25519",
        powPminus2: e => {
            const {pow_p_5_8: t, b2: r} = pu(e);
            return He(We(t, du, n) * r, n)
        }
        ,
        adjustScalarBytes: mu
    })
}
)();
function yu(n) {
    const e = Pe("pub", n)
      , {y: t} = vt.Point.fromHex(e)
      , r = BigInt(1);
    return ee.toBytes(ee.create((r + t) * ee.inv(r - t)))
}
const Kh = yu;
function Gh(n) {
    const e = ni.hash(n.subarray(0, 32));
    return ni.adjustScalarBytes(e).subarray(0, 32)
}
const Jh = (ee.ORDER + du) / Qo
  , Yh = ee.pow(zi, Jh)
  , Qa = ee.sqrt(ee.neg(ee.ONE));
function Xh(n) {
    const e = (ee.ORDER - hu) / Qo
      , t = BigInt(486662);
    let r = ee.sqr(n);
    r = ee.mul(r, zi);
    let s = ee.add(r, ee.ONE)
      , i = ee.neg(t)
      , o = ee.sqr(s)
      , a = ee.mul(o, s)
      , l = ee.mul(r, t);
    l = ee.mul(l, i),
    l = ee.add(l, o),
    l = ee.mul(l, i);
    let m = ee.sqr(a);
    o = ee.sqr(m),
    m = ee.mul(m, a),
    m = ee.mul(m, l),
    o = ee.mul(o, m);
    let h = ee.pow(o, e);
    h = ee.mul(h, m);
    let E = ee.mul(h, Qa);
    o = ee.sqr(h),
    o = ee.mul(o, a);
    let B = ee.eql(o, l)
      , k = ee.cmov(E, h, B)
      , O = ee.mul(i, r)
      , R = ee.mul(h, n);
    R = ee.mul(R, Yh);
    let A = ee.mul(R, Qa)
      , F = ee.mul(l, r);
    o = ee.sqr(R),
    o = ee.mul(o, a);
    let z = ee.eql(o, F)
      , q = ee.cmov(A, R, z);
    o = ee.sqr(k),
    o = ee.mul(o, a);
    let X = ee.eql(o, l)
      , j = ee.cmov(O, i, X)
      , K = ee.cmov(q, k, X)
      , te = ee.isOdd(K);
    return K = ee.cmov(K, ee.neg(K), X !== te),
    {
        xMn: j,
        xMd: s,
        yMn: K,
        yMd: pn
    }
}
const Qh = Wd(ee, ee.neg(BigInt(486664)));
function e0(n) {
    const {xMn: e, xMd: t, yMn: r, yMd: s} = Xh(n);
    let i = ee.mul(e, s);
    i = ee.mul(i, Qh);
    let o = ee.mul(t, r)
      , a = ee.sub(e, t)
      , l = ee.add(e, t)
      , m = ee.mul(o, l)
      , h = ee.eql(m, ee.ZERO);
    i = ee.cmov(i, ee.ZERO, h),
    o = ee.cmov(o, ee.ONE, h),
    a = ee.cmov(a, ee.ONE, h),
    l = ee.cmov(l, ee.ONE, h);
    const [E,B] = Ko(ee, [o, l], !0);
    return {
        x: ee.mul(i, E),
        y: ee.mul(a, B)
    }
}
const ta = dh(vt.Point, n => e0(n[0]), {
    DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
    encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
    p: ee.ORDER,
    m: 1,
    k: 128,
    expand: "xmd",
    hash: ms
})
  , t0 = ta.hashToCurve
  , n0 = ta.encodeToCurve;
function ao(n) {
    if (!(n instanceof wt))
        throw new Error("RistrettoPoint expected")
}
const xo = _o
  , r0 = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235")
  , i0 = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578")
  , s0 = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838")
  , o0 = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952")
  , ec = n => ea(pn, n)
  , a0 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
  , co = n => vt.CURVE.Fp.create(Zn(n) & a0);
function tc(n) {
    const {d: e} = vt.CURVE
      , t = vt.CURVE.Fp.ORDER
      , r = vt.CURVE.Fp.create
      , s = r(xo * n * n)
      , i = r((s + pn) * s0);
    let o = BigInt(-1);
    const a = r((o - e * s) * r(s + e));
    let {isValid: l, value: m} = ea(i, a)
      , h = r(m * n);
    Un(h, t) || (h = r(-h)),
    l || (m = h),
    l || (o = s);
    const E = r(o * (s - pn) * o0 - a)
      , B = m * m
      , k = r((m + m) * a)
      , O = r(E * r0)
      , R = r(pn - B)
      , A = r(pn + B);
    return new vt.Point(r(k * A),r(R * O),r(O * A),r(k * R))
}
class wt {
    constructor(e) {
        this.ep = e
    }
    static fromAffine(e) {
        return new wt(vt.Point.fromAffine(e))
    }
    static hashToCurve(e) {
        e = Pe("ristrettoHash", e, 64);
        const t = co(e.slice(0, 32))
          , r = tc(t)
          , s = co(e.slice(32, 64))
          , i = tc(s);
        return new wt(r.add(i))
    }
    static fromBytes(e) {
        return Et(e),
        this.fromHex(e)
    }
    static fromHex(e) {
        e = Pe("ristrettoHex", e, 32);
        const {a: t, d: r} = vt.CURVE
          , s = ee.ORDER
          , i = ee.create
          , o = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint"
          , a = co(e);
        if (!Ld(ir(a, 32), e) || Un(a, s))
            throw new Error(o);
        const l = i(a * a)
          , m = i(pn + t * l)
          , h = i(pn - t * l)
          , E = i(m * m)
          , B = i(h * h)
          , k = i(t * r * E - B)
          , {isValid: O, value: R} = ec(i(k * B))
          , A = i(R * h)
          , F = i(R * A * k);
        let z = i((a + a) * A);
        Un(z, s) && (z = i(-z));
        const q = i(m * F)
          , X = i(z * q);
        if (!O || Un(X, s) || q === $h)
            throw new Error(o);
        return new wt(new vt.Point(z,q,pn,X))
    }
    static msm(e, t) {
        const r = lr(vt.CURVE.n, vt.CURVE.nBitLength);
        return Go(wt, r, e, t)
    }
    toBytes() {
        let {ex: e, ey: t, ez: r, et: s} = this.ep;
        const i = ee.ORDER
          , o = ee.create
          , a = o(o(r + t) * o(r - t))
          , l = o(e * t)
          , m = o(l * l)
          , {value: h} = ec(o(a * m))
          , E = o(h * a)
          , B = o(h * l)
          , k = o(E * B * s);
        let O;
        if (Un(s * k, i)) {
            let A = o(t * xo)
              , F = o(e * xo);
            e = A,
            t = F,
            O = o(E * i0)
        } else
            O = B;
        Un(e * k, i) && (t = o(-t));
        let R = o((r - t) * O);
        return Un(R, i) && (R = o(-R)),
        ir(R, 32)
    }
    toRawBytes() {
        return this.toBytes()
    }
    toHex() {
        return nr(this.toBytes())
    }
    toString() {
        return this.toHex()
    }
    equals(e) {
        ao(e);
        const {ex: t, ey: r} = this.ep
          , {ex: s, ey: i} = e.ep
          , o = ee.create
          , a = o(t * i) === o(r * s)
          , l = o(r * i) === o(t * s);
        return a || l
    }
    add(e) {
        return ao(e),
        new wt(this.ep.add(e.ep))
    }
    subtract(e) {
        return ao(e),
        new wt(this.ep.subtract(e.ep))
    }
    multiply(e) {
        return new wt(this.ep.multiply(e))
    }
    multiplyUnsafe(e) {
        return new wt(this.ep.multiplyUnsafe(e))
    }
    double() {
        return new wt(this.ep.double())
    }
    negate() {
        return new wt(this.ep.negate())
    }
}
const c0 = (wt.BASE || (wt.BASE = new wt(vt.Point.BASE)),
wt.ZERO || (wt.ZERO = new wt(vt.Point.ZERO)),
wt)
  , wu = (n, e) => {
    const t = e.DST
      , r = typeof t == "string" ? jr(t) : t
      , s = au(n, r, 64, ms);
    return wt.hashToCurve(s)
}
  , u0 = wu
  , Mw = Object.freeze(Object.defineProperty({
    __proto__: null,
    ED25519_TORSION_SUBGROUP: Hh,
    RistrettoPoint: c0,
    ed25519: vt,
    ed25519_hasher: ta,
    ed25519ctx: Vh,
    ed25519ph: Zh,
    edwardsToMontgomery: Kh,
    edwardsToMontgomeryPriv: Gh,
    edwardsToMontgomeryPub: yu,
    encodeToCurve: n0,
    hashToCurve: t0,
    hashToRistretto255: wu,
    hash_to_ristretto255: u0,
    x25519: Wh
}, Symbol.toStringTag, {
    value: "Module"
}));
var na = {
    exports: {}
};
na.exports;
(function(n) {
    (function(e, t) {
        function r(w, c) {
            if (!w)
                throw new Error(c || "Assertion failed")
        }
        function s(w, c) {
            w.super_ = c;
            var p = function() {};
            p.prototype = c.prototype,
            w.prototype = new p,
            w.prototype.constructor = w
        }
        function i(w, c, p) {
            if (i.isBN(w))
                return w;
            this.negative = 0,
            this.words = null,
            this.length = 0,
            this.red = null,
            w !== null && ((c === "le" || c === "be") && (p = c,
            c = 10),
            this._init(w || 0, c || 10, p || "be"))
        }
        typeof e == "object" ? e.exports = i : t.BN = i,
        i.BN = i,
        i.wordSize = 26;
        var o;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = Yo.Buffer
        } catch {}
        i.isBN = function(c) {
            return c instanceof i ? !0 : c !== null && typeof c == "object" && c.constructor.wordSize === i.wordSize && Array.isArray(c.words)
        }
        ,
        i.max = function(c, p) {
            return c.cmp(p) > 0 ? c : p
        }
        ,
        i.min = function(c, p) {
            return c.cmp(p) < 0 ? c : p
        }
        ,
        i.prototype._init = function(c, p, g) {
            if (typeof c == "number")
                return this._initNumber(c, p, g);
            if (typeof c == "object")
                return this._initArray(c, p, g);
            p === "hex" && (p = 16),
            r(p === (p | 0) && p >= 2 && p <= 36),
            c = c.toString().replace(/\s+/g, "");
            var b = 0;
            c[0] === "-" && (b++,
            this.negative = 1),
            b < c.length && (p === 16 ? this._parseHex(c, b, g) : (this._parseBase(c, p, b),
            g === "le" && this._initArray(this.toArray(), p, g)))
        }
        ,
        i.prototype._initNumber = function(c, p, g) {
            c < 0 && (this.negative = 1,
            c = -c),
            c < 67108864 ? (this.words = [c & 67108863],
            this.length = 1) : c < 4503599627370496 ? (this.words = [c & 67108863, c / 67108864 & 67108863],
            this.length = 2) : (r(c < 9007199254740992),
            this.words = [c & 67108863, c / 67108864 & 67108863, 1],
            this.length = 3),
            g === "le" && this._initArray(this.toArray(), p, g)
        }
        ,
        i.prototype._initArray = function(c, p, g) {
            if (r(typeof c.length == "number"),
            c.length <= 0)
                return this.words = [0],
                this.length = 1,
                this;
            this.length = Math.ceil(c.length / 3),
            this.words = new Array(this.length);
            for (var b = 0; b < this.length; b++)
                this.words[b] = 0;
            var x, I, T = 0;
            if (g === "be")
                for (b = c.length - 1,
                x = 0; b >= 0; b -= 3)
                    I = c[b] | c[b - 1] << 8 | c[b - 2] << 16,
                    this.words[x] |= I << T & 67108863,
                    this.words[x + 1] = I >>> 26 - T & 67108863,
                    T += 24,
                    T >= 26 && (T -= 26,
                    x++);
            else if (g === "le")
                for (b = 0,
                x = 0; b < c.length; b += 3)
                    I = c[b] | c[b + 1] << 8 | c[b + 2] << 16,
                    this.words[x] |= I << T & 67108863,
                    this.words[x + 1] = I >>> 26 - T & 67108863,
                    T += 24,
                    T >= 26 && (T -= 26,
                    x++);
            return this._strip()
        }
        ;
        function a(w, c) {
            var p = w.charCodeAt(c);
            if (p >= 48 && p <= 57)
                return p - 48;
            if (p >= 65 && p <= 70)
                return p - 55;
            if (p >= 97 && p <= 102)
                return p - 87;
            r(!1, "Invalid character in " + w)
        }
        function l(w, c, p) {
            var g = a(w, p);
            return p - 1 >= c && (g |= a(w, p - 1) << 4),
            g
        }
        i.prototype._parseHex = function(c, p, g) {
            this.length = Math.ceil((c.length - p) / 6),
            this.words = new Array(this.length);
            for (var b = 0; b < this.length; b++)
                this.words[b] = 0;
            var x = 0, I = 0, T;
            if (g === "be")
                for (b = c.length - 1; b >= p; b -= 2)
                    T = l(c, p, b) << x,
                    this.words[I] |= T & 67108863,
                    x >= 18 ? (x -= 18,
                    I += 1,
                    this.words[I] |= T >>> 26) : x += 8;
            else {
                var v = c.length - p;
                for (b = v % 2 === 0 ? p + 1 : p; b < c.length; b += 2)
                    T = l(c, p, b) << x,
                    this.words[I] |= T & 67108863,
                    x >= 18 ? (x -= 18,
                    I += 1,
                    this.words[I] |= T >>> 26) : x += 8
            }
            this._strip()
        }
        ;
        function m(w, c, p, g) {
            for (var b = 0, x = 0, I = Math.min(w.length, p), T = c; T < I; T++) {
                var v = w.charCodeAt(T) - 48;
                b *= g,
                v >= 49 ? x = v - 49 + 10 : v >= 17 ? x = v - 17 + 10 : x = v,
                r(v >= 0 && x < g, "Invalid character"),
                b += x
            }
            return b
        }
        i.prototype._parseBase = function(c, p, g) {
            this.words = [0],
            this.length = 1;
            for (var b = 0, x = 1; x <= 67108863; x *= p)
                b++;
            b--,
            x = x / p | 0;
            for (var I = c.length - g, T = I % b, v = Math.min(I, I - T) + g, d = 0, S = g; S < v; S += b)
                d = m(c, S, S + b, p),
                this.imuln(x),
                this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
            if (T !== 0) {
                var J = 1;
                for (d = m(c, S, c.length, p),
                S = 0; S < T; S++)
                    J *= p;
                this.imuln(J),
                this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d)
            }
            this._strip()
        }
        ,
        i.prototype.copy = function(c) {
            c.words = new Array(this.length);
            for (var p = 0; p < this.length; p++)
                c.words[p] = this.words[p];
            c.length = this.length,
            c.negative = this.negative,
            c.red = this.red
        }
        ;
        function h(w, c) {
            w.words = c.words,
            w.length = c.length,
            w.negative = c.negative,
            w.red = c.red
        }
        if (i.prototype._move = function(c) {
            h(c, this)
        }
        ,
        i.prototype.clone = function() {
            var c = new i(null);
            return this.copy(c),
            c
        }
        ,
        i.prototype._expand = function(c) {
            for (; this.length < c; )
                this.words[this.length++] = 0;
            return this
        }
        ,
        i.prototype._strip = function() {
            for (; this.length > 1 && this.words[this.length - 1] === 0; )
                this.length--;
            return this._normSign()
        }
        ,
        i.prototype._normSign = function() {
            return this.length === 1 && this.words[0] === 0 && (this.negative = 0),
            this
        }
        ,
        typeof Symbol < "u" && typeof Symbol.for == "function")
            try {
                i.prototype[Symbol.for("nodejs.util.inspect.custom")] = E
            } catch {
                i.prototype.inspect = E
            }
        else
            i.prototype.inspect = E;
        function E() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var B = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
          , k = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          , O = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        i.prototype.toString = function(c, p) {
            c = c || 10,
            p = p | 0 || 1;
            var g;
            if (c === 16 || c === "hex") {
                g = "";
                for (var b = 0, x = 0, I = 0; I < this.length; I++) {
                    var T = this.words[I]
                      , v = ((T << b | x) & 16777215).toString(16);
                    x = T >>> 24 - b & 16777215,
                    b += 2,
                    b >= 26 && (b -= 26,
                    I--),
                    x !== 0 || I !== this.length - 1 ? g = B[6 - v.length] + v + g : g = v + g
                }
                for (x !== 0 && (g = x.toString(16) + g); g.length % p !== 0; )
                    g = "0" + g;
                return this.negative !== 0 && (g = "-" + g),
                g
            }
            if (c === (c | 0) && c >= 2 && c <= 36) {
                var d = k[c]
                  , S = O[c];
                g = "";
                var J = this.clone();
                for (J.negative = 0; !J.isZero(); ) {
                    var Z = J.modrn(S).toString(c);
                    J = J.idivn(S),
                    J.isZero() ? g = Z + g : g = B[d - Z.length] + Z + g
                }
                for (this.isZero() && (g = "0" + g); g.length % p !== 0; )
                    g = "0" + g;
                return this.negative !== 0 && (g = "-" + g),
                g
            }
            r(!1, "Base should be between 2 and 36")
        }
        ,
        i.prototype.toNumber = function() {
            var c = this.words[0];
            return this.length === 2 ? c += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? c += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
            this.negative !== 0 ? -c : c
        }
        ,
        i.prototype.toJSON = function() {
            return this.toString(16, 2)
        }
        ,
        o && (i.prototype.toBuffer = function(c, p) {
            return this.toArrayLike(o, c, p)
        }
        ),
        i.prototype.toArray = function(c, p) {
            return this.toArrayLike(Array, c, p)
        }
        ;
        var R = function(c, p) {
            return c.allocUnsafe ? c.allocUnsafe(p) : new c(p)
        };
        i.prototype.toArrayLike = function(c, p, g) {
            this._strip();
            var b = this.byteLength()
              , x = g || Math.max(1, b);
            r(b <= x, "byte array longer than desired length"),
            r(x > 0, "Requested array length <= 0");
            var I = R(c, x)
              , T = p === "le" ? "LE" : "BE";
            return this["_toArrayLike" + T](I, b),
            I
        }
        ,
        i.prototype._toArrayLikeLE = function(c, p) {
            for (var g = 0, b = 0, x = 0, I = 0; x < this.length; x++) {
                var T = this.words[x] << I | b;
                c[g++] = T & 255,
                g < c.length && (c[g++] = T >> 8 & 255),
                g < c.length && (c[g++] = T >> 16 & 255),
                I === 6 ? (g < c.length && (c[g++] = T >> 24 & 255),
                b = 0,
                I = 0) : (b = T >>> 24,
                I += 2)
            }
            if (g < c.length)
                for (c[g++] = b; g < c.length; )
                    c[g++] = 0
        }
        ,
        i.prototype._toArrayLikeBE = function(c, p) {
            for (var g = c.length - 1, b = 0, x = 0, I = 0; x < this.length; x++) {
                var T = this.words[x] << I | b;
                c[g--] = T & 255,
                g >= 0 && (c[g--] = T >> 8 & 255),
                g >= 0 && (c[g--] = T >> 16 & 255),
                I === 6 ? (g >= 0 && (c[g--] = T >> 24 & 255),
                b = 0,
                I = 0) : (b = T >>> 24,
                I += 2)
            }
            if (g >= 0)
                for (c[g--] = b; g >= 0; )
                    c[g--] = 0
        }
        ,
        Math.clz32 ? i.prototype._countBits = function(c) {
            return 32 - Math.clz32(c)
        }
        : i.prototype._countBits = function(c) {
            var p = c
              , g = 0;
            return p >= 4096 && (g += 13,
            p >>>= 13),
            p >= 64 && (g += 7,
            p >>>= 7),
            p >= 8 && (g += 4,
            p >>>= 4),
            p >= 2 && (g += 2,
            p >>>= 2),
            g + p
        }
        ,
        i.prototype._zeroBits = function(c) {
            if (c === 0)
                return 26;
            var p = c
              , g = 0;
            return p & 8191 || (g += 13,
            p >>>= 13),
            p & 127 || (g += 7,
            p >>>= 7),
            p & 15 || (g += 4,
            p >>>= 4),
            p & 3 || (g += 2,
            p >>>= 2),
            p & 1 || g++,
            g
        }
        ,
        i.prototype.bitLength = function() {
            var c = this.words[this.length - 1]
              , p = this._countBits(c);
            return (this.length - 1) * 26 + p
        }
        ;
        function A(w) {
            for (var c = new Array(w.bitLength()), p = 0; p < c.length; p++) {
                var g = p / 26 | 0
                  , b = p % 26;
                c[p] = w.words[g] >>> b & 1
            }
            return c
        }
        i.prototype.zeroBits = function() {
            if (this.isZero())
                return 0;
            for (var c = 0, p = 0; p < this.length; p++) {
                var g = this._zeroBits(this.words[p]);
                if (c += g,
                g !== 26)
                    break
            }
            return c
        }
        ,
        i.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }
        ,
        i.prototype.toTwos = function(c) {
            return this.negative !== 0 ? this.abs().inotn(c).iaddn(1) : this.clone()
        }
        ,
        i.prototype.fromTwos = function(c) {
            return this.testn(c - 1) ? this.notn(c).iaddn(1).ineg() : this.clone()
        }
        ,
        i.prototype.isNeg = function() {
            return this.negative !== 0
        }
        ,
        i.prototype.neg = function() {
            return this.clone().ineg()
        }
        ,
        i.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1),
            this
        }
        ,
        i.prototype.iuor = function(c) {
            for (; this.length < c.length; )
                this.words[this.length++] = 0;
            for (var p = 0; p < c.length; p++)
                this.words[p] = this.words[p] | c.words[p];
            return this._strip()
        }
        ,
        i.prototype.ior = function(c) {
            return r((this.negative | c.negative) === 0),
            this.iuor(c)
        }
        ,
        i.prototype.or = function(c) {
            return this.length > c.length ? this.clone().ior(c) : c.clone().ior(this)
        }
        ,
        i.prototype.uor = function(c) {
            return this.length > c.length ? this.clone().iuor(c) : c.clone().iuor(this)
        }
        ,
        i.prototype.iuand = function(c) {
            var p;
            this.length > c.length ? p = c : p = this;
            for (var g = 0; g < p.length; g++)
                this.words[g] = this.words[g] & c.words[g];
            return this.length = p.length,
            this._strip()
        }
        ,
        i.prototype.iand = function(c) {
            return r((this.negative | c.negative) === 0),
            this.iuand(c)
        }
        ,
        i.prototype.and = function(c) {
            return this.length > c.length ? this.clone().iand(c) : c.clone().iand(this)
        }
        ,
        i.prototype.uand = function(c) {
            return this.length > c.length ? this.clone().iuand(c) : c.clone().iuand(this)
        }
        ,
        i.prototype.iuxor = function(c) {
            var p, g;
            this.length > c.length ? (p = this,
            g = c) : (p = c,
            g = this);
            for (var b = 0; b < g.length; b++)
                this.words[b] = p.words[b] ^ g.words[b];
            if (this !== p)
                for (; b < p.length; b++)
                    this.words[b] = p.words[b];
            return this.length = p.length,
            this._strip()
        }
        ,
        i.prototype.ixor = function(c) {
            return r((this.negative | c.negative) === 0),
            this.iuxor(c)
        }
        ,
        i.prototype.xor = function(c) {
            return this.length > c.length ? this.clone().ixor(c) : c.clone().ixor(this)
        }
        ,
        i.prototype.uxor = function(c) {
            return this.length > c.length ? this.clone().iuxor(c) : c.clone().iuxor(this)
        }
        ,
        i.prototype.inotn = function(c) {
            r(typeof c == "number" && c >= 0);
            var p = Math.ceil(c / 26) | 0
              , g = c % 26;
            this._expand(p),
            g > 0 && p--;
            for (var b = 0; b < p; b++)
                this.words[b] = ~this.words[b] & 67108863;
            return g > 0 && (this.words[b] = ~this.words[b] & 67108863 >> 26 - g),
            this._strip()
        }
        ,
        i.prototype.notn = function(c) {
            return this.clone().inotn(c)
        }
        ,
        i.prototype.setn = function(c, p) {
            r(typeof c == "number" && c >= 0);
            var g = c / 26 | 0
              , b = c % 26;
            return this._expand(g + 1),
            p ? this.words[g] = this.words[g] | 1 << b : this.words[g] = this.words[g] & ~(1 << b),
            this._strip()
        }
        ,
        i.prototype.iadd = function(c) {
            var p;
            if (this.negative !== 0 && c.negative === 0)
                return this.negative = 0,
                p = this.isub(c),
                this.negative ^= 1,
                this._normSign();
            if (this.negative === 0 && c.negative !== 0)
                return c.negative = 0,
                p = this.isub(c),
                c.negative = 1,
                p._normSign();
            var g, b;
            this.length > c.length ? (g = this,
            b = c) : (g = c,
            b = this);
            for (var x = 0, I = 0; I < b.length; I++)
                p = (g.words[I] | 0) + (b.words[I] | 0) + x,
                this.words[I] = p & 67108863,
                x = p >>> 26;
            for (; x !== 0 && I < g.length; I++)
                p = (g.words[I] | 0) + x,
                this.words[I] = p & 67108863,
                x = p >>> 26;
            if (this.length = g.length,
            x !== 0)
                this.words[this.length] = x,
                this.length++;
            else if (g !== this)
                for (; I < g.length; I++)
                    this.words[I] = g.words[I];
            return this
        }
        ,
        i.prototype.add = function(c) {
            var p;
            return c.negative !== 0 && this.negative === 0 ? (c.negative = 0,
            p = this.sub(c),
            c.negative ^= 1,
            p) : c.negative === 0 && this.negative !== 0 ? (this.negative = 0,
            p = c.sub(this),
            this.negative = 1,
            p) : this.length > c.length ? this.clone().iadd(c) : c.clone().iadd(this)
        }
        ,
        i.prototype.isub = function(c) {
            if (c.negative !== 0) {
                c.negative = 0;
                var p = this.iadd(c);
                return c.negative = 1,
                p._normSign()
            } else if (this.negative !== 0)
                return this.negative = 0,
                this.iadd(c),
                this.negative = 1,
                this._normSign();
            var g = this.cmp(c);
            if (g === 0)
                return this.negative = 0,
                this.length = 1,
                this.words[0] = 0,
                this;
            var b, x;
            g > 0 ? (b = this,
            x = c) : (b = c,
            x = this);
            for (var I = 0, T = 0; T < x.length; T++)
                p = (b.words[T] | 0) - (x.words[T] | 0) + I,
                I = p >> 26,
                this.words[T] = p & 67108863;
            for (; I !== 0 && T < b.length; T++)
                p = (b.words[T] | 0) + I,
                I = p >> 26,
                this.words[T] = p & 67108863;
            if (I === 0 && T < b.length && b !== this)
                for (; T < b.length; T++)
                    this.words[T] = b.words[T];
            return this.length = Math.max(this.length, T),
            b !== this && (this.negative = 1),
            this._strip()
        }
        ,
        i.prototype.sub = function(c) {
            return this.clone().isub(c)
        }
        ;
        function F(w, c, p) {
            p.negative = c.negative ^ w.negative;
            var g = w.length + c.length | 0;
            p.length = g,
            g = g - 1 | 0;
            var b = w.words[0] | 0
              , x = c.words[0] | 0
              , I = b * x
              , T = I & 67108863
              , v = I / 67108864 | 0;
            p.words[0] = T;
            for (var d = 1; d < g; d++) {
                for (var S = v >>> 26, J = v & 67108863, Z = Math.min(d, c.length - 1), se = Math.max(0, d - w.length + 1); se <= Z; se++) {
                    var Ce = d - se | 0;
                    b = w.words[Ce] | 0,
                    x = c.words[se] | 0,
                    I = b * x + J,
                    S += I / 67108864 | 0,
                    J = I & 67108863
                }
                p.words[d] = J | 0,
                v = S | 0
            }
            return v !== 0 ? p.words[d] = v | 0 : p.length--,
            p._strip()
        }
        var z = function(c, p, g) {
            var b = c.words, x = p.words, I = g.words, T = 0, v, d, S, J = b[0] | 0, Z = J & 8191, se = J >>> 13, Ce = b[1] | 0, Ee = Ce & 8191, Se = Ce >>> 13, tn = b[2] | 0, ke = tn & 8191, je = tn >>> 13, Vr = b[3] | 0, Je = Vr & 8191, Ve = Vr >>> 13, vn = b[4] | 0, Le = vn & 8191, Ye = vn >>> 13, ki = b[5] | 0, ze = ki & 8191, Xe = ki >>> 13, Ai = b[6] | 0, Ze = Ai & 8191, Ue = Ai >>> 13, Kt = b[7] | 0, qe = Kt & 8191, Qe = Kt >>> 13, an = b[8] | 0, et = an & 8191, y = an >>> 13, u = b[9] | 0, f = u & 8191, _ = u >>> 13, M = x[0] | 0, C = M & 8191, D = M >>> 13, be = x[1] | 0, we = be & 8191, me = be >>> 13, Fe = x[2] | 0, de = Fe & 8191, rt = Fe >>> 13, Ra = x[3] | 0, it = Ra & 8191, st = Ra >>> 13, Ma = x[4] | 0, ot = Ma & 8191, at = Ma >>> 13, Ta = x[5] | 0, ct = Ta & 8191, ut = Ta >>> 13, Oa = x[6] | 0, lt = Oa & 8191, ft = Oa >>> 13, Ca = x[7] | 0, dt = Ca & 8191, ht = Ca >>> 13, La = x[8] | 0, pt = La & 8191, mt = La >>> 13, Na = x[9] | 0, gt = Na & 8191, yt = Na >>> 13;
            g.negative = c.negative ^ p.negative,
            g.length = 19,
            v = Math.imul(Z, C),
            d = Math.imul(Z, D),
            d = d + Math.imul(se, C) | 0,
            S = Math.imul(se, D);
            var Ms = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Ms >>> 26) | 0,
            Ms &= 67108863,
            v = Math.imul(Ee, C),
            d = Math.imul(Ee, D),
            d = d + Math.imul(Se, C) | 0,
            S = Math.imul(Se, D),
            v = v + Math.imul(Z, we) | 0,
            d = d + Math.imul(Z, me) | 0,
            d = d + Math.imul(se, we) | 0,
            S = S + Math.imul(se, me) | 0;
            var Ts = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Ts >>> 26) | 0,
            Ts &= 67108863,
            v = Math.imul(ke, C),
            d = Math.imul(ke, D),
            d = d + Math.imul(je, C) | 0,
            S = Math.imul(je, D),
            v = v + Math.imul(Ee, we) | 0,
            d = d + Math.imul(Ee, me) | 0,
            d = d + Math.imul(Se, we) | 0,
            S = S + Math.imul(Se, me) | 0,
            v = v + Math.imul(Z, de) | 0,
            d = d + Math.imul(Z, rt) | 0,
            d = d + Math.imul(se, de) | 0,
            S = S + Math.imul(se, rt) | 0;
            var Os = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Os >>> 26) | 0,
            Os &= 67108863,
            v = Math.imul(Je, C),
            d = Math.imul(Je, D),
            d = d + Math.imul(Ve, C) | 0,
            S = Math.imul(Ve, D),
            v = v + Math.imul(ke, we) | 0,
            d = d + Math.imul(ke, me) | 0,
            d = d + Math.imul(je, we) | 0,
            S = S + Math.imul(je, me) | 0,
            v = v + Math.imul(Ee, de) | 0,
            d = d + Math.imul(Ee, rt) | 0,
            d = d + Math.imul(Se, de) | 0,
            S = S + Math.imul(Se, rt) | 0,
            v = v + Math.imul(Z, it) | 0,
            d = d + Math.imul(Z, st) | 0,
            d = d + Math.imul(se, it) | 0,
            S = S + Math.imul(se, st) | 0;
            var Cs = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Cs >>> 26) | 0,
            Cs &= 67108863,
            v = Math.imul(Le, C),
            d = Math.imul(Le, D),
            d = d + Math.imul(Ye, C) | 0,
            S = Math.imul(Ye, D),
            v = v + Math.imul(Je, we) | 0,
            d = d + Math.imul(Je, me) | 0,
            d = d + Math.imul(Ve, we) | 0,
            S = S + Math.imul(Ve, me) | 0,
            v = v + Math.imul(ke, de) | 0,
            d = d + Math.imul(ke, rt) | 0,
            d = d + Math.imul(je, de) | 0,
            S = S + Math.imul(je, rt) | 0,
            v = v + Math.imul(Ee, it) | 0,
            d = d + Math.imul(Ee, st) | 0,
            d = d + Math.imul(Se, it) | 0,
            S = S + Math.imul(Se, st) | 0,
            v = v + Math.imul(Z, ot) | 0,
            d = d + Math.imul(Z, at) | 0,
            d = d + Math.imul(se, ot) | 0,
            S = S + Math.imul(se, at) | 0;
            var Ls = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Ls >>> 26) | 0,
            Ls &= 67108863,
            v = Math.imul(ze, C),
            d = Math.imul(ze, D),
            d = d + Math.imul(Xe, C) | 0,
            S = Math.imul(Xe, D),
            v = v + Math.imul(Le, we) | 0,
            d = d + Math.imul(Le, me) | 0,
            d = d + Math.imul(Ye, we) | 0,
            S = S + Math.imul(Ye, me) | 0,
            v = v + Math.imul(Je, de) | 0,
            d = d + Math.imul(Je, rt) | 0,
            d = d + Math.imul(Ve, de) | 0,
            S = S + Math.imul(Ve, rt) | 0,
            v = v + Math.imul(ke, it) | 0,
            d = d + Math.imul(ke, st) | 0,
            d = d + Math.imul(je, it) | 0,
            S = S + Math.imul(je, st) | 0,
            v = v + Math.imul(Ee, ot) | 0,
            d = d + Math.imul(Ee, at) | 0,
            d = d + Math.imul(Se, ot) | 0,
            S = S + Math.imul(Se, at) | 0,
            v = v + Math.imul(Z, ct) | 0,
            d = d + Math.imul(Z, ut) | 0,
            d = d + Math.imul(se, ct) | 0,
            S = S + Math.imul(se, ut) | 0;
            var Ns = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Ns >>> 26) | 0,
            Ns &= 67108863,
            v = Math.imul(Ze, C),
            d = Math.imul(Ze, D),
            d = d + Math.imul(Ue, C) | 0,
            S = Math.imul(Ue, D),
            v = v + Math.imul(ze, we) | 0,
            d = d + Math.imul(ze, me) | 0,
            d = d + Math.imul(Xe, we) | 0,
            S = S + Math.imul(Xe, me) | 0,
            v = v + Math.imul(Le, de) | 0,
            d = d + Math.imul(Le, rt) | 0,
            d = d + Math.imul(Ye, de) | 0,
            S = S + Math.imul(Ye, rt) | 0,
            v = v + Math.imul(Je, it) | 0,
            d = d + Math.imul(Je, st) | 0,
            d = d + Math.imul(Ve, it) | 0,
            S = S + Math.imul(Ve, st) | 0,
            v = v + Math.imul(ke, ot) | 0,
            d = d + Math.imul(ke, at) | 0,
            d = d + Math.imul(je, ot) | 0,
            S = S + Math.imul(je, at) | 0,
            v = v + Math.imul(Ee, ct) | 0,
            d = d + Math.imul(Ee, ut) | 0,
            d = d + Math.imul(Se, ct) | 0,
            S = S + Math.imul(Se, ut) | 0,
            v = v + Math.imul(Z, lt) | 0,
            d = d + Math.imul(Z, ft) | 0,
            d = d + Math.imul(se, lt) | 0,
            S = S + Math.imul(se, ft) | 0;
            var Ps = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Ps >>> 26) | 0,
            Ps &= 67108863,
            v = Math.imul(qe, C),
            d = Math.imul(qe, D),
            d = d + Math.imul(Qe, C) | 0,
            S = Math.imul(Qe, D),
            v = v + Math.imul(Ze, we) | 0,
            d = d + Math.imul(Ze, me) | 0,
            d = d + Math.imul(Ue, we) | 0,
            S = S + Math.imul(Ue, me) | 0,
            v = v + Math.imul(ze, de) | 0,
            d = d + Math.imul(ze, rt) | 0,
            d = d + Math.imul(Xe, de) | 0,
            S = S + Math.imul(Xe, rt) | 0,
            v = v + Math.imul(Le, it) | 0,
            d = d + Math.imul(Le, st) | 0,
            d = d + Math.imul(Ye, it) | 0,
            S = S + Math.imul(Ye, st) | 0,
            v = v + Math.imul(Je, ot) | 0,
            d = d + Math.imul(Je, at) | 0,
            d = d + Math.imul(Ve, ot) | 0,
            S = S + Math.imul(Ve, at) | 0,
            v = v + Math.imul(ke, ct) | 0,
            d = d + Math.imul(ke, ut) | 0,
            d = d + Math.imul(je, ct) | 0,
            S = S + Math.imul(je, ut) | 0,
            v = v + Math.imul(Ee, lt) | 0,
            d = d + Math.imul(Ee, ft) | 0,
            d = d + Math.imul(Se, lt) | 0,
            S = S + Math.imul(Se, ft) | 0,
            v = v + Math.imul(Z, dt) | 0,
            d = d + Math.imul(Z, ht) | 0,
            d = d + Math.imul(se, dt) | 0,
            S = S + Math.imul(se, ht) | 0;
            var Us = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Us >>> 26) | 0,
            Us &= 67108863,
            v = Math.imul(et, C),
            d = Math.imul(et, D),
            d = d + Math.imul(y, C) | 0,
            S = Math.imul(y, D),
            v = v + Math.imul(qe, we) | 0,
            d = d + Math.imul(qe, me) | 0,
            d = d + Math.imul(Qe, we) | 0,
            S = S + Math.imul(Qe, me) | 0,
            v = v + Math.imul(Ze, de) | 0,
            d = d + Math.imul(Ze, rt) | 0,
            d = d + Math.imul(Ue, de) | 0,
            S = S + Math.imul(Ue, rt) | 0,
            v = v + Math.imul(ze, it) | 0,
            d = d + Math.imul(ze, st) | 0,
            d = d + Math.imul(Xe, it) | 0,
            S = S + Math.imul(Xe, st) | 0,
            v = v + Math.imul(Le, ot) | 0,
            d = d + Math.imul(Le, at) | 0,
            d = d + Math.imul(Ye, ot) | 0,
            S = S + Math.imul(Ye, at) | 0,
            v = v + Math.imul(Je, ct) | 0,
            d = d + Math.imul(Je, ut) | 0,
            d = d + Math.imul(Ve, ct) | 0,
            S = S + Math.imul(Ve, ut) | 0,
            v = v + Math.imul(ke, lt) | 0,
            d = d + Math.imul(ke, ft) | 0,
            d = d + Math.imul(je, lt) | 0,
            S = S + Math.imul(je, ft) | 0,
            v = v + Math.imul(Ee, dt) | 0,
            d = d + Math.imul(Ee, ht) | 0,
            d = d + Math.imul(Se, dt) | 0,
            S = S + Math.imul(Se, ht) | 0,
            v = v + Math.imul(Z, pt) | 0,
            d = d + Math.imul(Z, mt) | 0,
            d = d + Math.imul(se, pt) | 0,
            S = S + Math.imul(se, mt) | 0;
            var Fs = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Fs >>> 26) | 0,
            Fs &= 67108863,
            v = Math.imul(f, C),
            d = Math.imul(f, D),
            d = d + Math.imul(_, C) | 0,
            S = Math.imul(_, D),
            v = v + Math.imul(et, we) | 0,
            d = d + Math.imul(et, me) | 0,
            d = d + Math.imul(y, we) | 0,
            S = S + Math.imul(y, me) | 0,
            v = v + Math.imul(qe, de) | 0,
            d = d + Math.imul(qe, rt) | 0,
            d = d + Math.imul(Qe, de) | 0,
            S = S + Math.imul(Qe, rt) | 0,
            v = v + Math.imul(Ze, it) | 0,
            d = d + Math.imul(Ze, st) | 0,
            d = d + Math.imul(Ue, it) | 0,
            S = S + Math.imul(Ue, st) | 0,
            v = v + Math.imul(ze, ot) | 0,
            d = d + Math.imul(ze, at) | 0,
            d = d + Math.imul(Xe, ot) | 0,
            S = S + Math.imul(Xe, at) | 0,
            v = v + Math.imul(Le, ct) | 0,
            d = d + Math.imul(Le, ut) | 0,
            d = d + Math.imul(Ye, ct) | 0,
            S = S + Math.imul(Ye, ut) | 0,
            v = v + Math.imul(Je, lt) | 0,
            d = d + Math.imul(Je, ft) | 0,
            d = d + Math.imul(Ve, lt) | 0,
            S = S + Math.imul(Ve, ft) | 0,
            v = v + Math.imul(ke, dt) | 0,
            d = d + Math.imul(ke, ht) | 0,
            d = d + Math.imul(je, dt) | 0,
            S = S + Math.imul(je, ht) | 0,
            v = v + Math.imul(Ee, pt) | 0,
            d = d + Math.imul(Ee, mt) | 0,
            d = d + Math.imul(Se, pt) | 0,
            S = S + Math.imul(Se, mt) | 0,
            v = v + Math.imul(Z, gt) | 0,
            d = d + Math.imul(Z, yt) | 0,
            d = d + Math.imul(se, gt) | 0,
            S = S + Math.imul(se, yt) | 0;
            var Ds = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Ds >>> 26) | 0,
            Ds &= 67108863,
            v = Math.imul(f, we),
            d = Math.imul(f, me),
            d = d + Math.imul(_, we) | 0,
            S = Math.imul(_, me),
            v = v + Math.imul(et, de) | 0,
            d = d + Math.imul(et, rt) | 0,
            d = d + Math.imul(y, de) | 0,
            S = S + Math.imul(y, rt) | 0,
            v = v + Math.imul(qe, it) | 0,
            d = d + Math.imul(qe, st) | 0,
            d = d + Math.imul(Qe, it) | 0,
            S = S + Math.imul(Qe, st) | 0,
            v = v + Math.imul(Ze, ot) | 0,
            d = d + Math.imul(Ze, at) | 0,
            d = d + Math.imul(Ue, ot) | 0,
            S = S + Math.imul(Ue, at) | 0,
            v = v + Math.imul(ze, ct) | 0,
            d = d + Math.imul(ze, ut) | 0,
            d = d + Math.imul(Xe, ct) | 0,
            S = S + Math.imul(Xe, ut) | 0,
            v = v + Math.imul(Le, lt) | 0,
            d = d + Math.imul(Le, ft) | 0,
            d = d + Math.imul(Ye, lt) | 0,
            S = S + Math.imul(Ye, ft) | 0,
            v = v + Math.imul(Je, dt) | 0,
            d = d + Math.imul(Je, ht) | 0,
            d = d + Math.imul(Ve, dt) | 0,
            S = S + Math.imul(Ve, ht) | 0,
            v = v + Math.imul(ke, pt) | 0,
            d = d + Math.imul(ke, mt) | 0,
            d = d + Math.imul(je, pt) | 0,
            S = S + Math.imul(je, mt) | 0,
            v = v + Math.imul(Ee, gt) | 0,
            d = d + Math.imul(Ee, yt) | 0,
            d = d + Math.imul(Se, gt) | 0,
            S = S + Math.imul(Se, yt) | 0;
            var js = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (js >>> 26) | 0,
            js &= 67108863,
            v = Math.imul(f, de),
            d = Math.imul(f, rt),
            d = d + Math.imul(_, de) | 0,
            S = Math.imul(_, rt),
            v = v + Math.imul(et, it) | 0,
            d = d + Math.imul(et, st) | 0,
            d = d + Math.imul(y, it) | 0,
            S = S + Math.imul(y, st) | 0,
            v = v + Math.imul(qe, ot) | 0,
            d = d + Math.imul(qe, at) | 0,
            d = d + Math.imul(Qe, ot) | 0,
            S = S + Math.imul(Qe, at) | 0,
            v = v + Math.imul(Ze, ct) | 0,
            d = d + Math.imul(Ze, ut) | 0,
            d = d + Math.imul(Ue, ct) | 0,
            S = S + Math.imul(Ue, ut) | 0,
            v = v + Math.imul(ze, lt) | 0,
            d = d + Math.imul(ze, ft) | 0,
            d = d + Math.imul(Xe, lt) | 0,
            S = S + Math.imul(Xe, ft) | 0,
            v = v + Math.imul(Le, dt) | 0,
            d = d + Math.imul(Le, ht) | 0,
            d = d + Math.imul(Ye, dt) | 0,
            S = S + Math.imul(Ye, ht) | 0,
            v = v + Math.imul(Je, pt) | 0,
            d = d + Math.imul(Je, mt) | 0,
            d = d + Math.imul(Ve, pt) | 0,
            S = S + Math.imul(Ve, mt) | 0,
            v = v + Math.imul(ke, gt) | 0,
            d = d + Math.imul(ke, yt) | 0,
            d = d + Math.imul(je, gt) | 0,
            S = S + Math.imul(je, yt) | 0;
            var zs = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (zs >>> 26) | 0,
            zs &= 67108863,
            v = Math.imul(f, it),
            d = Math.imul(f, st),
            d = d + Math.imul(_, it) | 0,
            S = Math.imul(_, st),
            v = v + Math.imul(et, ot) | 0,
            d = d + Math.imul(et, at) | 0,
            d = d + Math.imul(y, ot) | 0,
            S = S + Math.imul(y, at) | 0,
            v = v + Math.imul(qe, ct) | 0,
            d = d + Math.imul(qe, ut) | 0,
            d = d + Math.imul(Qe, ct) | 0,
            S = S + Math.imul(Qe, ut) | 0,
            v = v + Math.imul(Ze, lt) | 0,
            d = d + Math.imul(Ze, ft) | 0,
            d = d + Math.imul(Ue, lt) | 0,
            S = S + Math.imul(Ue, ft) | 0,
            v = v + Math.imul(ze, dt) | 0,
            d = d + Math.imul(ze, ht) | 0,
            d = d + Math.imul(Xe, dt) | 0,
            S = S + Math.imul(Xe, ht) | 0,
            v = v + Math.imul(Le, pt) | 0,
            d = d + Math.imul(Le, mt) | 0,
            d = d + Math.imul(Ye, pt) | 0,
            S = S + Math.imul(Ye, mt) | 0,
            v = v + Math.imul(Je, gt) | 0,
            d = d + Math.imul(Je, yt) | 0,
            d = d + Math.imul(Ve, gt) | 0,
            S = S + Math.imul(Ve, yt) | 0;
            var qs = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (qs >>> 26) | 0,
            qs &= 67108863,
            v = Math.imul(f, ot),
            d = Math.imul(f, at),
            d = d + Math.imul(_, ot) | 0,
            S = Math.imul(_, at),
            v = v + Math.imul(et, ct) | 0,
            d = d + Math.imul(et, ut) | 0,
            d = d + Math.imul(y, ct) | 0,
            S = S + Math.imul(y, ut) | 0,
            v = v + Math.imul(qe, lt) | 0,
            d = d + Math.imul(qe, ft) | 0,
            d = d + Math.imul(Qe, lt) | 0,
            S = S + Math.imul(Qe, ft) | 0,
            v = v + Math.imul(Ze, dt) | 0,
            d = d + Math.imul(Ze, ht) | 0,
            d = d + Math.imul(Ue, dt) | 0,
            S = S + Math.imul(Ue, ht) | 0,
            v = v + Math.imul(ze, pt) | 0,
            d = d + Math.imul(ze, mt) | 0,
            d = d + Math.imul(Xe, pt) | 0,
            S = S + Math.imul(Xe, mt) | 0,
            v = v + Math.imul(Le, gt) | 0,
            d = d + Math.imul(Le, yt) | 0,
            d = d + Math.imul(Ye, gt) | 0,
            S = S + Math.imul(Ye, yt) | 0;
            var $s = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + ($s >>> 26) | 0,
            $s &= 67108863,
            v = Math.imul(f, ct),
            d = Math.imul(f, ut),
            d = d + Math.imul(_, ct) | 0,
            S = Math.imul(_, ut),
            v = v + Math.imul(et, lt) | 0,
            d = d + Math.imul(et, ft) | 0,
            d = d + Math.imul(y, lt) | 0,
            S = S + Math.imul(y, ft) | 0,
            v = v + Math.imul(qe, dt) | 0,
            d = d + Math.imul(qe, ht) | 0,
            d = d + Math.imul(Qe, dt) | 0,
            S = S + Math.imul(Qe, ht) | 0,
            v = v + Math.imul(Ze, pt) | 0,
            d = d + Math.imul(Ze, mt) | 0,
            d = d + Math.imul(Ue, pt) | 0,
            S = S + Math.imul(Ue, mt) | 0,
            v = v + Math.imul(ze, gt) | 0,
            d = d + Math.imul(ze, yt) | 0,
            d = d + Math.imul(Xe, gt) | 0,
            S = S + Math.imul(Xe, yt) | 0;
            var Hs = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Hs >>> 26) | 0,
            Hs &= 67108863,
            v = Math.imul(f, lt),
            d = Math.imul(f, ft),
            d = d + Math.imul(_, lt) | 0,
            S = Math.imul(_, ft),
            v = v + Math.imul(et, dt) | 0,
            d = d + Math.imul(et, ht) | 0,
            d = d + Math.imul(y, dt) | 0,
            S = S + Math.imul(y, ht) | 0,
            v = v + Math.imul(qe, pt) | 0,
            d = d + Math.imul(qe, mt) | 0,
            d = d + Math.imul(Qe, pt) | 0,
            S = S + Math.imul(Qe, mt) | 0,
            v = v + Math.imul(Ze, gt) | 0,
            d = d + Math.imul(Ze, yt) | 0,
            d = d + Math.imul(Ue, gt) | 0,
            S = S + Math.imul(Ue, yt) | 0;
            var Vs = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Vs >>> 26) | 0,
            Vs &= 67108863,
            v = Math.imul(f, dt),
            d = Math.imul(f, ht),
            d = d + Math.imul(_, dt) | 0,
            S = Math.imul(_, ht),
            v = v + Math.imul(et, pt) | 0,
            d = d + Math.imul(et, mt) | 0,
            d = d + Math.imul(y, pt) | 0,
            S = S + Math.imul(y, mt) | 0,
            v = v + Math.imul(qe, gt) | 0,
            d = d + Math.imul(qe, yt) | 0,
            d = d + Math.imul(Qe, gt) | 0,
            S = S + Math.imul(Qe, yt) | 0;
            var Zs = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Zs >>> 26) | 0,
            Zs &= 67108863,
            v = Math.imul(f, pt),
            d = Math.imul(f, mt),
            d = d + Math.imul(_, pt) | 0,
            S = Math.imul(_, mt),
            v = v + Math.imul(et, gt) | 0,
            d = d + Math.imul(et, yt) | 0,
            d = d + Math.imul(y, gt) | 0,
            S = S + Math.imul(y, yt) | 0;
            var Ws = (T + v | 0) + ((d & 8191) << 13) | 0;
            T = (S + (d >>> 13) | 0) + (Ws >>> 26) | 0,
            Ws &= 67108863,
            v = Math.imul(f, gt),
            d = Math.imul(f, yt),
            d = d + Math.imul(_, gt) | 0,
            S = Math.imul(_, yt);
            var Ks = (T + v | 0) + ((d & 8191) << 13) | 0;
            return T = (S + (d >>> 13) | 0) + (Ks >>> 26) | 0,
            Ks &= 67108863,
            I[0] = Ms,
            I[1] = Ts,
            I[2] = Os,
            I[3] = Cs,
            I[4] = Ls,
            I[5] = Ns,
            I[6] = Ps,
            I[7] = Us,
            I[8] = Fs,
            I[9] = Ds,
            I[10] = js,
            I[11] = zs,
            I[12] = qs,
            I[13] = $s,
            I[14] = Hs,
            I[15] = Vs,
            I[16] = Zs,
            I[17] = Ws,
            I[18] = Ks,
            T !== 0 && (I[19] = T,
            g.length++),
            g
        };
        Math.imul || (z = F);
        function q(w, c, p) {
            p.negative = c.negative ^ w.negative,
            p.length = w.length + c.length;
            for (var g = 0, b = 0, x = 0; x < p.length - 1; x++) {
                var I = b;
                b = 0;
                for (var T = g & 67108863, v = Math.min(x, c.length - 1), d = Math.max(0, x - w.length + 1); d <= v; d++) {
                    var S = x - d
                      , J = w.words[S] | 0
                      , Z = c.words[d] | 0
                      , se = J * Z
                      , Ce = se & 67108863;
                    I = I + (se / 67108864 | 0) | 0,
                    Ce = Ce + T | 0,
                    T = Ce & 67108863,
                    I = I + (Ce >>> 26) | 0,
                    b += I >>> 26,
                    I &= 67108863
                }
                p.words[x] = T,
                g = I,
                I = b
            }
            return g !== 0 ? p.words[x] = g : p.length--,
            p._strip()
        }
        function X(w, c, p) {
            return q(w, c, p)
        }
        i.prototype.mulTo = function(c, p) {
            var g, b = this.length + c.length;
            return this.length === 10 && c.length === 10 ? g = z(this, c, p) : b < 63 ? g = F(this, c, p) : b < 1024 ? g = q(this, c, p) : g = X(this, c, p),
            g
        }
        ,
        i.prototype.mul = function(c) {
            var p = new i(null);
            return p.words = new Array(this.length + c.length),
            this.mulTo(c, p)
        }
        ,
        i.prototype.mulf = function(c) {
            var p = new i(null);
            return p.words = new Array(this.length + c.length),
            X(this, c, p)
        }
        ,
        i.prototype.imul = function(c) {
            return this.clone().mulTo(c, this)
        }
        ,
        i.prototype.imuln = function(c) {
            var p = c < 0;
            p && (c = -c),
            r(typeof c == "number"),
            r(c < 67108864);
            for (var g = 0, b = 0; b < this.length; b++) {
                var x = (this.words[b] | 0) * c
                  , I = (x & 67108863) + (g & 67108863);
                g >>= 26,
                g += x / 67108864 | 0,
                g += I >>> 26,
                this.words[b] = I & 67108863
            }
            return g !== 0 && (this.words[b] = g,
            this.length++),
            this.length = c === 0 ? 1 : this.length,
            p ? this.ineg() : this
        }
        ,
        i.prototype.muln = function(c) {
            return this.clone().imuln(c)
        }
        ,
        i.prototype.sqr = function() {
            return this.mul(this)
        }
        ,
        i.prototype.isqr = function() {
            return this.imul(this.clone())
        }
        ,
        i.prototype.pow = function(c) {
            var p = A(c);
            if (p.length === 0)
                return new i(1);
            for (var g = this, b = 0; b < p.length && p[b] === 0; b++,
            g = g.sqr())
                ;
            if (++b < p.length)
                for (var x = g.sqr(); b < p.length; b++,
                x = x.sqr())
                    p[b] !== 0 && (g = g.mul(x));
            return g
        }
        ,
        i.prototype.iushln = function(c) {
            r(typeof c == "number" && c >= 0);
            var p = c % 26, g = (c - p) / 26, b = 67108863 >>> 26 - p << 26 - p, x;
            if (p !== 0) {
                var I = 0;
                for (x = 0; x < this.length; x++) {
                    var T = this.words[x] & b
                      , v = (this.words[x] | 0) - T << p;
                    this.words[x] = v | I,
                    I = T >>> 26 - p
                }
                I && (this.words[x] = I,
                this.length++)
            }
            if (g !== 0) {
                for (x = this.length - 1; x >= 0; x--)
                    this.words[x + g] = this.words[x];
                for (x = 0; x < g; x++)
                    this.words[x] = 0;
                this.length += g
            }
            return this._strip()
        }
        ,
        i.prototype.ishln = function(c) {
            return r(this.negative === 0),
            this.iushln(c)
        }
        ,
        i.prototype.iushrn = function(c, p, g) {
            r(typeof c == "number" && c >= 0);
            var b;
            p ? b = (p - p % 26) / 26 : b = 0;
            var x = c % 26
              , I = Math.min((c - x) / 26, this.length)
              , T = 67108863 ^ 67108863 >>> x << x
              , v = g;
            if (b -= I,
            b = Math.max(0, b),
            v) {
                for (var d = 0; d < I; d++)
                    v.words[d] = this.words[d];
                v.length = I
            }
            if (I !== 0)
                if (this.length > I)
                    for (this.length -= I,
                    d = 0; d < this.length; d++)
                        this.words[d] = this.words[d + I];
                else
                    this.words[0] = 0,
                    this.length = 1;
            var S = 0;
            for (d = this.length - 1; d >= 0 && (S !== 0 || d >= b); d--) {
                var J = this.words[d] | 0;
                this.words[d] = S << 26 - x | J >>> x,
                S = J & T
            }
            return v && S !== 0 && (v.words[v.length++] = S),
            this.length === 0 && (this.words[0] = 0,
            this.length = 1),
            this._strip()
        }
        ,
        i.prototype.ishrn = function(c, p, g) {
            return r(this.negative === 0),
            this.iushrn(c, p, g)
        }
        ,
        i.prototype.shln = function(c) {
            return this.clone().ishln(c)
        }
        ,
        i.prototype.ushln = function(c) {
            return this.clone().iushln(c)
        }
        ,
        i.prototype.shrn = function(c) {
            return this.clone().ishrn(c)
        }
        ,
        i.prototype.ushrn = function(c) {
            return this.clone().iushrn(c)
        }
        ,
        i.prototype.testn = function(c) {
            r(typeof c == "number" && c >= 0);
            var p = c % 26
              , g = (c - p) / 26
              , b = 1 << p;
            if (this.length <= g)
                return !1;
            var x = this.words[g];
            return !!(x & b)
        }
        ,
        i.prototype.imaskn = function(c) {
            r(typeof c == "number" && c >= 0);
            var p = c % 26
              , g = (c - p) / 26;
            if (r(this.negative === 0, "imaskn works only with positive numbers"),
            this.length <= g)
                return this;
            if (p !== 0 && g++,
            this.length = Math.min(g, this.length),
            p !== 0) {
                var b = 67108863 ^ 67108863 >>> p << p;
                this.words[this.length - 1] &= b
            }
            return this._strip()
        }
        ,
        i.prototype.maskn = function(c) {
            return this.clone().imaskn(c)
        }
        ,
        i.prototype.iaddn = function(c) {
            return r(typeof c == "number"),
            r(c < 67108864),
            c < 0 ? this.isubn(-c) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= c ? (this.words[0] = c - (this.words[0] | 0),
            this.negative = 0,
            this) : (this.negative = 0,
            this.isubn(c),
            this.negative = 1,
            this) : this._iaddn(c)
        }
        ,
        i.prototype._iaddn = function(c) {
            this.words[0] += c;
            for (var p = 0; p < this.length && this.words[p] >= 67108864; p++)
                this.words[p] -= 67108864,
                p === this.length - 1 ? this.words[p + 1] = 1 : this.words[p + 1]++;
            return this.length = Math.max(this.length, p + 1),
            this
        }
        ,
        i.prototype.isubn = function(c) {
            if (r(typeof c == "number"),
            r(c < 67108864),
            c < 0)
                return this.iaddn(-c);
            if (this.negative !== 0)
                return this.negative = 0,
                this.iaddn(c),
                this.negative = 1,
                this;
            if (this.words[0] -= c,
            this.length === 1 && this.words[0] < 0)
                this.words[0] = -this.words[0],
                this.negative = 1;
            else
                for (var p = 0; p < this.length && this.words[p] < 0; p++)
                    this.words[p] += 67108864,
                    this.words[p + 1] -= 1;
            return this._strip()
        }
        ,
        i.prototype.addn = function(c) {
            return this.clone().iaddn(c)
        }
        ,
        i.prototype.subn = function(c) {
            return this.clone().isubn(c)
        }
        ,
        i.prototype.iabs = function() {
            return this.negative = 0,
            this
        }
        ,
        i.prototype.abs = function() {
            return this.clone().iabs()
        }
        ,
        i.prototype._ishlnsubmul = function(c, p, g) {
            var b = c.length + g, x;
            this._expand(b);
            var I, T = 0;
            for (x = 0; x < c.length; x++) {
                I = (this.words[x + g] | 0) + T;
                var v = (c.words[x] | 0) * p;
                I -= v & 67108863,
                T = (I >> 26) - (v / 67108864 | 0),
                this.words[x + g] = I & 67108863
            }
            for (; x < this.length - g; x++)
                I = (this.words[x + g] | 0) + T,
                T = I >> 26,
                this.words[x + g] = I & 67108863;
            if (T === 0)
                return this._strip();
            for (r(T === -1),
            T = 0,
            x = 0; x < this.length; x++)
                I = -(this.words[x] | 0) + T,
                T = I >> 26,
                this.words[x] = I & 67108863;
            return this.negative = 1,
            this._strip()
        }
        ,
        i.prototype._wordDiv = function(c, p) {
            var g = this.length - c.length
              , b = this.clone()
              , x = c
              , I = x.words[x.length - 1] | 0
              , T = this._countBits(I);
            g = 26 - T,
            g !== 0 && (x = x.ushln(g),
            b.iushln(g),
            I = x.words[x.length - 1] | 0);
            var v = b.length - x.length, d;
            if (p !== "mod") {
                d = new i(null),
                d.length = v + 1,
                d.words = new Array(d.length);
                for (var S = 0; S < d.length; S++)
                    d.words[S] = 0
            }
            var J = b.clone()._ishlnsubmul(x, 1, v);
            J.negative === 0 && (b = J,
            d && (d.words[v] = 1));
            for (var Z = v - 1; Z >= 0; Z--) {
                var se = (b.words[x.length + Z] | 0) * 67108864 + (b.words[x.length + Z - 1] | 0);
                for (se = Math.min(se / I | 0, 67108863),
                b._ishlnsubmul(x, se, Z); b.negative !== 0; )
                    se--,
                    b.negative = 0,
                    b._ishlnsubmul(x, 1, Z),
                    b.isZero() || (b.negative ^= 1);
                d && (d.words[Z] = se)
            }
            return d && d._strip(),
            b._strip(),
            p !== "div" && g !== 0 && b.iushrn(g),
            {
                div: d || null,
                mod: b
            }
        }
        ,
        i.prototype.divmod = function(c, p, g) {
            if (r(!c.isZero()),
            this.isZero())
                return {
                    div: new i(0),
                    mod: new i(0)
                };
            var b, x, I;
            return this.negative !== 0 && c.negative === 0 ? (I = this.neg().divmod(c, p),
            p !== "mod" && (b = I.div.neg()),
            p !== "div" && (x = I.mod.neg(),
            g && x.negative !== 0 && x.iadd(c)),
            {
                div: b,
                mod: x
            }) : this.negative === 0 && c.negative !== 0 ? (I = this.divmod(c.neg(), p),
            p !== "mod" && (b = I.div.neg()),
            {
                div: b,
                mod: I.mod
            }) : this.negative & c.negative ? (I = this.neg().divmod(c.neg(), p),
            p !== "div" && (x = I.mod.neg(),
            g && x.negative !== 0 && x.isub(c)),
            {
                div: I.div,
                mod: x
            }) : c.length > this.length || this.cmp(c) < 0 ? {
                div: new i(0),
                mod: this
            } : c.length === 1 ? p === "div" ? {
                div: this.divn(c.words[0]),
                mod: null
            } : p === "mod" ? {
                div: null,
                mod: new i(this.modrn(c.words[0]))
            } : {
                div: this.divn(c.words[0]),
                mod: new i(this.modrn(c.words[0]))
            } : this._wordDiv(c, p)
        }
        ,
        i.prototype.div = function(c) {
            return this.divmod(c, "div", !1).div
        }
        ,
        i.prototype.mod = function(c) {
            return this.divmod(c, "mod", !1).mod
        }
        ,
        i.prototype.umod = function(c) {
            return this.divmod(c, "mod", !0).mod
        }
        ,
        i.prototype.divRound = function(c) {
            var p = this.divmod(c);
            if (p.mod.isZero())
                return p.div;
            var g = p.div.negative !== 0 ? p.mod.isub(c) : p.mod
              , b = c.ushrn(1)
              , x = c.andln(1)
              , I = g.cmp(b);
            return I < 0 || x === 1 && I === 0 ? p.div : p.div.negative !== 0 ? p.div.isubn(1) : p.div.iaddn(1)
        }
        ,
        i.prototype.modrn = function(c) {
            var p = c < 0;
            p && (c = -c),
            r(c <= 67108863);
            for (var g = (1 << 26) % c, b = 0, x = this.length - 1; x >= 0; x--)
                b = (g * b + (this.words[x] | 0)) % c;
            return p ? -b : b
        }
        ,
        i.prototype.modn = function(c) {
            return this.modrn(c)
        }
        ,
        i.prototype.idivn = function(c) {
            var p = c < 0;
            p && (c = -c),
            r(c <= 67108863);
            for (var g = 0, b = this.length - 1; b >= 0; b--) {
                var x = (this.words[b] | 0) + g * 67108864;
                this.words[b] = x / c | 0,
                g = x % c
            }
            return this._strip(),
            p ? this.ineg() : this
        }
        ,
        i.prototype.divn = function(c) {
            return this.clone().idivn(c)
        }
        ,
        i.prototype.egcd = function(c) {
            r(c.negative === 0),
            r(!c.isZero());
            var p = this
              , g = c.clone();
            p.negative !== 0 ? p = p.umod(c) : p = p.clone();
            for (var b = new i(1), x = new i(0), I = new i(0), T = new i(1), v = 0; p.isEven() && g.isEven(); )
                p.iushrn(1),
                g.iushrn(1),
                ++v;
            for (var d = g.clone(), S = p.clone(); !p.isZero(); ) {
                for (var J = 0, Z = 1; !(p.words[0] & Z) && J < 26; ++J,
                Z <<= 1)
                    ;
                if (J > 0)
                    for (p.iushrn(J); J-- > 0; )
                        (b.isOdd() || x.isOdd()) && (b.iadd(d),
                        x.isub(S)),
                        b.iushrn(1),
                        x.iushrn(1);
                for (var se = 0, Ce = 1; !(g.words[0] & Ce) && se < 26; ++se,
                Ce <<= 1)
                    ;
                if (se > 0)
                    for (g.iushrn(se); se-- > 0; )
                        (I.isOdd() || T.isOdd()) && (I.iadd(d),
                        T.isub(S)),
                        I.iushrn(1),
                        T.iushrn(1);
                p.cmp(g) >= 0 ? (p.isub(g),
                b.isub(I),
                x.isub(T)) : (g.isub(p),
                I.isub(b),
                T.isub(x))
            }
            return {
                a: I,
                b: T,
                gcd: g.iushln(v)
            }
        }
        ,
        i.prototype._invmp = function(c) {
            r(c.negative === 0),
            r(!c.isZero());
            var p = this
              , g = c.clone();
            p.negative !== 0 ? p = p.umod(c) : p = p.clone();
            for (var b = new i(1), x = new i(0), I = g.clone(); p.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
                for (var T = 0, v = 1; !(p.words[0] & v) && T < 26; ++T,
                v <<= 1)
                    ;
                if (T > 0)
                    for (p.iushrn(T); T-- > 0; )
                        b.isOdd() && b.iadd(I),
                        b.iushrn(1);
                for (var d = 0, S = 1; !(g.words[0] & S) && d < 26; ++d,
                S <<= 1)
                    ;
                if (d > 0)
                    for (g.iushrn(d); d-- > 0; )
                        x.isOdd() && x.iadd(I),
                        x.iushrn(1);
                p.cmp(g) >= 0 ? (p.isub(g),
                b.isub(x)) : (g.isub(p),
                x.isub(b))
            }
            var J;
            return p.cmpn(1) === 0 ? J = b : J = x,
            J.cmpn(0) < 0 && J.iadd(c),
            J
        }
        ,
        i.prototype.gcd = function(c) {
            if (this.isZero())
                return c.abs();
            if (c.isZero())
                return this.abs();
            var p = this.clone()
              , g = c.clone();
            p.negative = 0,
            g.negative = 0;
            for (var b = 0; p.isEven() && g.isEven(); b++)
                p.iushrn(1),
                g.iushrn(1);
            do {
                for (; p.isEven(); )
                    p.iushrn(1);
                for (; g.isEven(); )
                    g.iushrn(1);
                var x = p.cmp(g);
                if (x < 0) {
                    var I = p;
                    p = g,
                    g = I
                } else if (x === 0 || g.cmpn(1) === 0)
                    break;
                p.isub(g)
            } while (!0);
            return g.iushln(b)
        }
        ,
        i.prototype.invm = function(c) {
            return this.egcd(c).a.umod(c)
        }
        ,
        i.prototype.isEven = function() {
            return (this.words[0] & 1) === 0
        }
        ,
        i.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1
        }
        ,
        i.prototype.andln = function(c) {
            return this.words[0] & c
        }
        ,
        i.prototype.bincn = function(c) {
            r(typeof c == "number");
            var p = c % 26
              , g = (c - p) / 26
              , b = 1 << p;
            if (this.length <= g)
                return this._expand(g + 1),
                this.words[g] |= b,
                this;
            for (var x = b, I = g; x !== 0 && I < this.length; I++) {
                var T = this.words[I] | 0;
                T += x,
                x = T >>> 26,
                T &= 67108863,
                this.words[I] = T
            }
            return x !== 0 && (this.words[I] = x,
            this.length++),
            this
        }
        ,
        i.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0
        }
        ,
        i.prototype.cmpn = function(c) {
            var p = c < 0;
            if (this.negative !== 0 && !p)
                return -1;
            if (this.negative === 0 && p)
                return 1;
            this._strip();
            var g;
            if (this.length > 1)
                g = 1;
            else {
                p && (c = -c),
                r(c <= 67108863, "Number is too big");
                var b = this.words[0] | 0;
                g = b === c ? 0 : b < c ? -1 : 1
            }
            return this.negative !== 0 ? -g | 0 : g
        }
        ,
        i.prototype.cmp = function(c) {
            if (this.negative !== 0 && c.negative === 0)
                return -1;
            if (this.negative === 0 && c.negative !== 0)
                return 1;
            var p = this.ucmp(c);
            return this.negative !== 0 ? -p | 0 : p
        }
        ,
        i.prototype.ucmp = function(c) {
            if (this.length > c.length)
                return 1;
            if (this.length < c.length)
                return -1;
            for (var p = 0, g = this.length - 1; g >= 0; g--) {
                var b = this.words[g] | 0
                  , x = c.words[g] | 0;
                if (b !== x) {
                    b < x ? p = -1 : b > x && (p = 1);
                    break
                }
            }
            return p
        }
        ,
        i.prototype.gtn = function(c) {
            return this.cmpn(c) === 1
        }
        ,
        i.prototype.gt = function(c) {
            return this.cmp(c) === 1
        }
        ,
        i.prototype.gten = function(c) {
            return this.cmpn(c) >= 0
        }
        ,
        i.prototype.gte = function(c) {
            return this.cmp(c) >= 0
        }
        ,
        i.prototype.ltn = function(c) {
            return this.cmpn(c) === -1
        }
        ,
        i.prototype.lt = function(c) {
            return this.cmp(c) === -1
        }
        ,
        i.prototype.lten = function(c) {
            return this.cmpn(c) <= 0
        }
        ,
        i.prototype.lte = function(c) {
            return this.cmp(c) <= 0
        }
        ,
        i.prototype.eqn = function(c) {
            return this.cmpn(c) === 0
        }
        ,
        i.prototype.eq = function(c) {
            return this.cmp(c) === 0
        }
        ,
        i.red = function(c) {
            return new U(c)
        }
        ,
        i.prototype.toRed = function(c) {
            return r(!this.red, "Already a number in reduction context"),
            r(this.negative === 0, "red works only with positives"),
            c.convertTo(this)._forceRed(c)
        }
        ,
        i.prototype.fromRed = function() {
            return r(this.red, "fromRed works only with numbers in reduction context"),
            this.red.convertFrom(this)
        }
        ,
        i.prototype._forceRed = function(c) {
            return this.red = c,
            this
        }
        ,
        i.prototype.forceRed = function(c) {
            return r(!this.red, "Already a number in reduction context"),
            this._forceRed(c)
        }
        ,
        i.prototype.redAdd = function(c) {
            return r(this.red, "redAdd works only with red numbers"),
            this.red.add(this, c)
        }
        ,
        i.prototype.redIAdd = function(c) {
            return r(this.red, "redIAdd works only with red numbers"),
            this.red.iadd(this, c)
        }
        ,
        i.prototype.redSub = function(c) {
            return r(this.red, "redSub works only with red numbers"),
            this.red.sub(this, c)
        }
        ,
        i.prototype.redISub = function(c) {
            return r(this.red, "redISub works only with red numbers"),
            this.red.isub(this, c)
        }
        ,
        i.prototype.redShl = function(c) {
            return r(this.red, "redShl works only with red numbers"),
            this.red.shl(this, c)
        }
        ,
        i.prototype.redMul = function(c) {
            return r(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, c),
            this.red.mul(this, c)
        }
        ,
        i.prototype.redIMul = function(c) {
            return r(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, c),
            this.red.imul(this, c)
        }
        ,
        i.prototype.redSqr = function() {
            return r(this.red, "redSqr works only with red numbers"),
            this.red._verify1(this),
            this.red.sqr(this)
        }
        ,
        i.prototype.redISqr = function() {
            return r(this.red, "redISqr works only with red numbers"),
            this.red._verify1(this),
            this.red.isqr(this)
        }
        ,
        i.prototype.redSqrt = function() {
            return r(this.red, "redSqrt works only with red numbers"),
            this.red._verify1(this),
            this.red.sqrt(this)
        }
        ,
        i.prototype.redInvm = function() {
            return r(this.red, "redInvm works only with red numbers"),
            this.red._verify1(this),
            this.red.invm(this)
        }
        ,
        i.prototype.redNeg = function() {
            return r(this.red, "redNeg works only with red numbers"),
            this.red._verify1(this),
            this.red.neg(this)
        }
        ,
        i.prototype.redPow = function(c) {
            return r(this.red && !c.red, "redPow(normalNum)"),
            this.red._verify1(this),
            this.red.pow(this, c)
        }
        ;
        var j = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function K(w, c) {
            this.name = w,
            this.p = new i(c,16),
            this.n = this.p.bitLength(),
            this.k = new i(1).iushln(this.n).isub(this.p),
            this.tmp = this._tmp()
        }
        K.prototype._tmp = function() {
            var c = new i(null);
            return c.words = new Array(Math.ceil(this.n / 13)),
            c
        }
        ,
        K.prototype.ireduce = function(c) {
            var p = c, g;
            do
                this.split(p, this.tmp),
                p = this.imulK(p),
                p = p.iadd(this.tmp),
                g = p.bitLength();
            while (g > this.n);
            var b = g < this.n ? -1 : p.ucmp(this.p);
            return b === 0 ? (p.words[0] = 0,
            p.length = 1) : b > 0 ? p.isub(this.p) : p.strip !== void 0 ? p.strip() : p._strip(),
            p
        }
        ,
        K.prototype.split = function(c, p) {
            c.iushrn(this.n, 0, p)
        }
        ,
        K.prototype.imulK = function(c) {
            return c.imul(this.k)
        }
        ;
        function te() {
            K.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        s(te, K),
        te.prototype.split = function(c, p) {
            for (var g = 4194303, b = Math.min(c.length, 9), x = 0; x < b; x++)
                p.words[x] = c.words[x];
            if (p.length = b,
            c.length <= 9) {
                c.words[0] = 0,
                c.length = 1;
                return
            }
            var I = c.words[9];
            for (p.words[p.length++] = I & g,
            x = 10; x < c.length; x++) {
                var T = c.words[x] | 0;
                c.words[x - 10] = (T & g) << 4 | I >>> 22,
                I = T
            }
            I >>>= 22,
            c.words[x - 10] = I,
            I === 0 && c.length > 10 ? c.length -= 10 : c.length -= 9
        }
        ,
        te.prototype.imulK = function(c) {
            c.words[c.length] = 0,
            c.words[c.length + 1] = 0,
            c.length += 2;
            for (var p = 0, g = 0; g < c.length; g++) {
                var b = c.words[g] | 0;
                p += b * 977,
                c.words[g] = p & 67108863,
                p = b * 64 + (p / 67108864 | 0)
            }
            return c.words[c.length - 1] === 0 && (c.length--,
            c.words[c.length - 1] === 0 && c.length--),
            c
        }
        ;
        function Q() {
            K.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        s(Q, K);
        function N() {
            K.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        s(N, K);
        function H() {
            K.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        s(H, K),
        H.prototype.imulK = function(c) {
            for (var p = 0, g = 0; g < c.length; g++) {
                var b = (c.words[g] | 0) * 19 + p
                  , x = b & 67108863;
                b >>>= 26,
                c.words[g] = x,
                p = b
            }
            return p !== 0 && (c.words[c.length++] = p),
            c
        }
        ,
        i._prime = function(c) {
            if (j[c])
                return j[c];
            var p;
            if (c === "k256")
                p = new te;
            else if (c === "p224")
                p = new Q;
            else if (c === "p192")
                p = new N;
            else if (c === "p25519")
                p = new H;
            else
                throw new Error("Unknown prime " + c);
            return j[c] = p,
            p
        }
        ;
        function U(w) {
            if (typeof w == "string") {
                var c = i._prime(w);
                this.m = c.p,
                this.prime = c
            } else
                r(w.gtn(1), "modulus must be greater than 1"),
                this.m = w,
                this.prime = null
        }
        U.prototype._verify1 = function(c) {
            r(c.negative === 0, "red works only with positives"),
            r(c.red, "red works only with red numbers")
        }
        ,
        U.prototype._verify2 = function(c, p) {
            r((c.negative | p.negative) === 0, "red works only with positives"),
            r(c.red && c.red === p.red, "red works only with red numbers")
        }
        ,
        U.prototype.imod = function(c) {
            return this.prime ? this.prime.ireduce(c)._forceRed(this) : (h(c, c.umod(this.m)._forceRed(this)),
            c)
        }
        ,
        U.prototype.neg = function(c) {
            return c.isZero() ? c.clone() : this.m.sub(c)._forceRed(this)
        }
        ,
        U.prototype.add = function(c, p) {
            this._verify2(c, p);
            var g = c.add(p);
            return g.cmp(this.m) >= 0 && g.isub(this.m),
            g._forceRed(this)
        }
        ,
        U.prototype.iadd = function(c, p) {
            this._verify2(c, p);
            var g = c.iadd(p);
            return g.cmp(this.m) >= 0 && g.isub(this.m),
            g
        }
        ,
        U.prototype.sub = function(c, p) {
            this._verify2(c, p);
            var g = c.sub(p);
            return g.cmpn(0) < 0 && g.iadd(this.m),
            g._forceRed(this)
        }
        ,
        U.prototype.isub = function(c, p) {
            this._verify2(c, p);
            var g = c.isub(p);
            return g.cmpn(0) < 0 && g.iadd(this.m),
            g
        }
        ,
        U.prototype.shl = function(c, p) {
            return this._verify1(c),
            this.imod(c.ushln(p))
        }
        ,
        U.prototype.imul = function(c, p) {
            return this._verify2(c, p),
            this.imod(c.imul(p))
        }
        ,
        U.prototype.mul = function(c, p) {
            return this._verify2(c, p),
            this.imod(c.mul(p))
        }
        ,
        U.prototype.isqr = function(c) {
            return this.imul(c, c.clone())
        }
        ,
        U.prototype.sqr = function(c) {
            return this.mul(c, c)
        }
        ,
        U.prototype.sqrt = function(c) {
            if (c.isZero())
                return c.clone();
            var p = this.m.andln(3);
            if (r(p % 2 === 1),
            p === 3) {
                var g = this.m.add(new i(1)).iushrn(2);
                return this.pow(c, g)
            }
            for (var b = this.m.subn(1), x = 0; !b.isZero() && b.andln(1) === 0; )
                x++,
                b.iushrn(1);
            r(!b.isZero());
            var I = new i(1).toRed(this)
              , T = I.redNeg()
              , v = this.m.subn(1).iushrn(1)
              , d = this.m.bitLength();
            for (d = new i(2 * d * d).toRed(this); this.pow(d, v).cmp(T) !== 0; )
                d.redIAdd(T);
            for (var S = this.pow(d, b), J = this.pow(c, b.addn(1).iushrn(1)), Z = this.pow(c, b), se = x; Z.cmp(I) !== 0; ) {
                for (var Ce = Z, Ee = 0; Ce.cmp(I) !== 0; Ee++)
                    Ce = Ce.redSqr();
                r(Ee < se);
                var Se = this.pow(S, new i(1).iushln(se - Ee - 1));
                J = J.redMul(Se),
                S = Se.redSqr(),
                Z = Z.redMul(S),
                se = Ee
            }
            return J
        }
        ,
        U.prototype.invm = function(c) {
            var p = c._invmp(this.m);
            return p.negative !== 0 ? (p.negative = 0,
            this.imod(p).redNeg()) : this.imod(p)
        }
        ,
        U.prototype.pow = function(c, p) {
            if (p.isZero())
                return new i(1).toRed(this);
            if (p.cmpn(1) === 0)
                return c.clone();
            var g = 4
              , b = new Array(1 << g);
            b[0] = new i(1).toRed(this),
            b[1] = c;
            for (var x = 2; x < b.length; x++)
                b[x] = this.mul(b[x - 1], c);
            var I = b[0]
              , T = 0
              , v = 0
              , d = p.bitLength() % 26;
            for (d === 0 && (d = 26),
            x = p.length - 1; x >= 0; x--) {
                for (var S = p.words[x], J = d - 1; J >= 0; J--) {
                    var Z = S >> J & 1;
                    if (I !== b[0] && (I = this.sqr(I)),
                    Z === 0 && T === 0) {
                        v = 0;
                        continue
                    }
                    T <<= 1,
                    T |= Z,
                    v++,
                    !(v !== g && (x !== 0 || J !== 0)) && (I = this.mul(I, b[T]),
                    v = 0,
                    T = 0)
                }
                d = 26
            }
            return I
        }
        ,
        U.prototype.convertTo = function(c) {
            var p = c.umod(this.m);
            return p === c ? p.clone() : p
        }
        ,
        U.prototype.convertFrom = function(c) {
            var p = c.clone();
            return p.red = null,
            p
        }
        ,
        i.mont = function(c) {
            return new $(c)
        }
        ;
        function $(w) {
            U.call(this, w),
            this.shift = this.m.bitLength(),
            this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
            this.r = new i(1).iushln(this.shift),
            this.r2 = this.imod(this.r.sqr()),
            this.rinv = this.r._invmp(this.m),
            this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
            this.minv = this.minv.umod(this.r),
            this.minv = this.r.sub(this.minv)
        }
        s($, U),
        $.prototype.convertTo = function(c) {
            return this.imod(c.ushln(this.shift))
        }
        ,
        $.prototype.convertFrom = function(c) {
            var p = this.imod(c.mul(this.rinv));
            return p.red = null,
            p
        }
        ,
        $.prototype.imul = function(c, p) {
            if (c.isZero() || p.isZero())
                return c.words[0] = 0,
                c.length = 1,
                c;
            var g = c.imul(p)
              , b = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , x = g.isub(b).iushrn(this.shift)
              , I = x;
            return x.cmp(this.m) >= 0 ? I = x.isub(this.m) : x.cmpn(0) < 0 && (I = x.iadd(this.m)),
            I._forceRed(this)
        }
        ,
        $.prototype.mul = function(c, p) {
            if (c.isZero() || p.isZero())
                return new i(0)._forceRed(this);
            var g = c.mul(p)
              , b = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , x = g.isub(b).iushrn(this.shift)
              , I = x;
            return x.cmp(this.m) >= 0 ? I = x.isub(this.m) : x.cmpn(0) < 0 && (I = x.iadd(this.m)),
            I._forceRed(this)
        }
        ,
        $.prototype.invm = function(c) {
            var p = this.imod(c._invmp(this.m).mul(this.r2));
            return p._forceRed(this)
        }
    }
    )(n, un)
}
)(na);
var bu = na.exports;
const nc = fs(bu);
var Eo = {
    exports: {}
};
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(n, e) {
    var t = Yo
      , r = t.Buffer;
    function s(o, a) {
        for (var l in o)
            a[l] = o[l]
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? n.exports = t : (s(t, e),
    e.Buffer = i);
    function i(o, a, l) {
        return r(o, a, l)
    }
    i.prototype = Object.create(r.prototype),
    s(r, i),
    i.from = function(o, a, l) {
        if (typeof o == "number")
            throw new TypeError("Argument must not be a number");
        return r(o, a, l)
    }
    ,
    i.alloc = function(o, a, l) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        var m = r(o);
        return a !== void 0 ? typeof l == "string" ? m.fill(a, l) : m.fill(a) : m.fill(0),
        m
    }
    ,
    i.allocUnsafe = function(o) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        return r(o)
    }
    ,
    i.allocUnsafeSlow = function(o) {
        if (typeof o != "number")
            throw new TypeError("Argument must be a number");
        return t.SlowBuffer(o)
    }
}
)(Eo, Eo.exports);
var l0 = Eo.exports
  , Li = l0.Buffer;
function f0(n) {
    if (n.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
        e[t] = 255;
    for (var r = 0; r < n.length; r++) {
        var s = n.charAt(r)
          , i = s.charCodeAt(0);
        if (e[i] !== 255)
            throw new TypeError(s + " is ambiguous");
        e[i] = r
    }
    var o = n.length
      , a = n.charAt(0)
      , l = Math.log(o) / Math.log(256)
      , m = Math.log(256) / Math.log(o);
    function h(k) {
        if ((Array.isArray(k) || k instanceof Uint8Array) && (k = Li.from(k)),
        !Li.isBuffer(k))
            throw new TypeError("Expected Buffer");
        if (k.length === 0)
            return "";
        for (var O = 0, R = 0, A = 0, F = k.length; A !== F && k[A] === 0; )
            A++,
            O++;
        for (var z = (F - A) * m + 1 >>> 0, q = new Uint8Array(z); A !== F; ) {
            for (var X = k[A], j = 0, K = z - 1; (X !== 0 || j < R) && K !== -1; K--,
            j++)
                X += 256 * q[K] >>> 0,
                q[K] = X % o >>> 0,
                X = X / o >>> 0;
            if (X !== 0)
                throw new Error("Non-zero carry");
            R = j,
            A++
        }
        for (var te = z - R; te !== z && q[te] === 0; )
            te++;
        for (var Q = a.repeat(O); te < z; ++te)
            Q += n.charAt(q[te]);
        return Q
    }
    function E(k) {
        if (typeof k != "string")
            throw new TypeError("Expected String");
        if (k.length === 0)
            return Li.alloc(0);
        for (var O = 0, R = 0, A = 0; k[O] === a; )
            R++,
            O++;
        for (var F = (k.length - O) * l + 1 >>> 0, z = new Uint8Array(F); O < k.length; ) {
            var q = k.charCodeAt(O);
            if (q > 255)
                return;
            var X = e[q];
            if (X === 255)
                return;
            for (var j = 0, K = F - 1; (X !== 0 || j < A) && K !== -1; K--,
            j++)
                X += o * z[K] >>> 0,
                z[K] = X % 256 >>> 0,
                X = X / 256 >>> 0;
            if (X !== 0)
                throw new Error("Non-zero carry");
            A = j,
            O++
        }
        for (var te = F - A; te !== F && z[te] === 0; )
            te++;
        var Q = Li.allocUnsafe(R + (F - te));
        Q.fill(0, 0, R);
        for (var N = R; te !== F; )
            Q[N++] = z[te++];
        return Q
    }
    function B(k) {
        var O = E(k);
        if (O)
            return O;
        throw new Error("Non-base" + o + " character")
    }
    return {
        encode: h,
        decodeUnsafe: E,
        decode: B
    }
}
var d0 = f0
  , h0 = d0
  , p0 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  , vu = h0(p0);
const It = fs(vu);
var At = {};
function kn(n, e, t) {
    return e <= n && n <= t
}
function _s(n) {
    if (n === void 0)
        return {};
    if (n === Object(n))
        return n;
    throw TypeError("Could not convert argument to dictionary")
}
function m0(n) {
    for (var e = String(n), t = e.length, r = 0, s = []; r < t; ) {
        var i = e.charCodeAt(r);
        if (i < 55296 || i > 57343)
            s.push(i);
        else if (56320 <= i && i <= 57343)
            s.push(65533);
        else if (55296 <= i && i <= 56319)
            if (r === t - 1)
                s.push(65533);
            else {
                var o = n.charCodeAt(r + 1);
                if (56320 <= o && o <= 57343) {
                    var a = i & 1023
                      , l = o & 1023;
                    s.push(65536 + (a << 10) + l),
                    r += 1
                } else
                    s.push(65533)
            }
        r += 1
    }
    return s
}
function g0(n) {
    for (var e = "", t = 0; t < n.length; ++t) {
        var r = n[t];
        r <= 65535 ? e += String.fromCharCode(r) : (r -= 65536,
        e += String.fromCharCode((r >> 10) + 55296, (r & 1023) + 56320))
    }
    return e
}
var qi = -1;
function ra(n) {
    this.tokens = [].slice.call(n)
}
ra.prototype = {
    endOfStream: function() {
        return !this.tokens.length
    },
    read: function() {
        return this.tokens.length ? this.tokens.shift() : qi
    },
    prepend: function(n) {
        if (Array.isArray(n))
            for (var e = n; e.length; )
                this.tokens.unshift(e.pop());
        else
            this.tokens.unshift(n)
    },
    push: function(n) {
        if (Array.isArray(n))
            for (var e = n; e.length; )
                this.tokens.push(e.shift());
        else
            this.tokens.push(n)
    }
};
var Lr = -1;
function uo(n, e) {
    if (n)
        throw TypeError("Decoder error");
    return e || 65533
}
var $i = "utf-8";
function Hi(n, e) {
    if (!(this instanceof Hi))
        return new Hi(n,e);
    if (n = n !== void 0 ? String(n).toLowerCase() : $i,
    n !== $i)
        throw new Error("Encoding not supported. Only utf-8 is supported");
    e = _s(e),
    this._streaming = !1,
    this._BOMseen = !1,
    this._decoder = null,
    this._fatal = !!e.fatal,
    this._ignoreBOM = !!e.ignoreBOM,
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    }),
    Object.defineProperty(this, "fatal", {
        value: this._fatal
    }),
    Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    })
}
Hi.prototype = {
    decode: function(e, t) {
        var r;
        typeof e == "object" && e instanceof ArrayBuffer ? r = new Uint8Array(e) : typeof e == "object" && "buffer"in e && e.buffer instanceof ArrayBuffer ? r = new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : r = new Uint8Array(0),
        t = _s(t),
        this._streaming || (this._decoder = new y0({
            fatal: this._fatal
        }),
        this._BOMseen = !1),
        this._streaming = !!t.stream;
        for (var s = new ra(r), i = [], o; !s.endOfStream() && (o = this._decoder.handler(s, s.read()),
        o !== Lr); )
            o !== null && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
        if (!this._streaming) {
            do {
                if (o = this._decoder.handler(s, s.read()),
                o === Lr)
                    break;
                o !== null && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o))
            } while (!s.endOfStream());
            this._decoder = null
        }
        return i.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (i[0] === 65279 ? (this._BOMseen = !0,
        i.shift()) : this._BOMseen = !0),
        g0(i)
    }
};
function Vi(n, e) {
    if (!(this instanceof Vi))
        return new Vi(n,e);
    if (n = n !== void 0 ? String(n).toLowerCase() : $i,
    n !== $i)
        throw new Error("Encoding not supported. Only utf-8 is supported");
    e = _s(e),
    this._streaming = !1,
    this._encoder = null,
    this._options = {
        fatal: !!e.fatal
    },
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    })
}
Vi.prototype = {
    encode: function(e, t) {
        e = e ? String(e) : "",
        t = _s(t),
        this._streaming || (this._encoder = new w0(this._options)),
        this._streaming = !!t.stream;
        for (var r = [], s = new ra(m0(e)), i; !s.endOfStream() && (i = this._encoder.handler(s, s.read()),
        i !== Lr); )
            Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
        if (!this._streaming) {
            for (; i = this._encoder.handler(s, s.read()),
            i !== Lr; )
                Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
            this._encoder = null
        }
        return new Uint8Array(r)
    }
};
function y0(n) {
    var e = n.fatal
      , t = 0
      , r = 0
      , s = 0
      , i = 128
      , o = 191;
    this.handler = function(a, l) {
        if (l === qi && s !== 0)
            return s = 0,
            uo(e);
        if (l === qi)
            return Lr;
        if (s === 0) {
            if (kn(l, 0, 127))
                return l;
            if (kn(l, 194, 223))
                s = 1,
                t = l - 192;
            else if (kn(l, 224, 239))
                l === 224 && (i = 160),
                l === 237 && (o = 159),
                s = 2,
                t = l - 224;
            else if (kn(l, 240, 244))
                l === 240 && (i = 144),
                l === 244 && (o = 143),
                s = 3,
                t = l - 240;
            else
                return uo(e);
            return t = t << 6 * s,
            null
        }
        if (!kn(l, i, o))
            return t = s = r = 0,
            i = 128,
            o = 191,
            a.prepend(l),
            uo(e);
        if (i = 128,
        o = 191,
        r += 1,
        t += l - 128 << 6 * (s - r),
        r !== s)
            return null;
        var m = t;
        return t = s = r = 0,
        m
    }
}
function w0(n) {
    n.fatal,
    this.handler = function(e, t) {
        if (t === qi)
            return Lr;
        if (kn(t, 0, 127))
            return t;
        var r, s;
        kn(t, 128, 2047) ? (r = 1,
        s = 192) : kn(t, 2048, 65535) ? (r = 2,
        s = 224) : kn(t, 65536, 1114111) && (r = 3,
        s = 240);
        for (var i = [(t >> 6 * r) + s]; r > 0; ) {
            var o = t >> 6 * (r - 1);
            i.push(128 | o & 63),
            r -= 1
        }
        return i
    }
}
const b0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    TextDecoder: Hi,
    TextEncoder: Vi
}, Symbol.toStringTag, {
    value: "Module"
}))
  , v0 = jo(b0);
var _0 = un && un.__createBinding || (Object.create ? function(n, e, t, r) {
    r === void 0 && (r = t),
    Object.defineProperty(n, r, {
        enumerable: !0,
        get: function() {
            return e[t]
        }
    })
}
: function(n, e, t, r) {
    r === void 0 && (r = t),
    n[r] = e[t]
}
)
  , x0 = un && un.__setModuleDefault || (Object.create ? function(n, e) {
    Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
    })
}
: function(n, e) {
    n.default = e
}
)
  , yn = un && un.__decorate || function(n, e, t, r) {
    var s = arguments.length, i = s < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(n, e, t, r);
    else
        for (var a = n.length - 1; a >= 0; a--)
            (o = n[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, t, i) : o(e, t)) || i);
    return s > 3 && i && Object.defineProperty(e, t, i),
    i
}
  , E0 = un && un.__importStar || function(n) {
    if (n && n.__esModule)
        return n;
    var e = {};
    if (n != null)
        for (var t in n)
            t !== "default" && Object.hasOwnProperty.call(n, t) && _0(e, n, t);
    return x0(e, n),
    e
}
  , _u = un && un.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
}
;
Object.defineProperty(At, "__esModule", {
    value: !0
});
var xu = At.deserializeUnchecked = Bu = At.deserialize = Iu = At.serialize = At.BinaryReader = At.BinaryWriter = At.BorshError = At.baseDecode = At.baseEncode = void 0;
const qn = _u(bu)
  , Eu = _u(vu)
  , S0 = E0(v0)
  , k0 = typeof TextDecoder != "function" ? S0.TextDecoder : TextDecoder
  , A0 = new k0("utf-8",{
    fatal: !0
});
function I0(n) {
    return typeof n == "string" && (n = xt.from(n, "utf8")),
    Eu.default.encode(xt.from(n))
}
At.baseEncode = I0;
function B0(n) {
    return xt.from(Eu.default.decode(n))
}
At.baseDecode = B0;
const lo = 1024;
class qt extends Error {
    constructor(e) {
        super(e),
        this.fieldPath = [],
        this.originalMessage = e
    }
    addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e),
        this.message = this.originalMessage + ": " + this.fieldPath.join(".")
    }
}
At.BorshError = qt;
class Su {
    constructor() {
        this.buf = xt.alloc(lo),
        this.length = 0
    }
    maybeResize() {
        this.buf.length < 16 + this.length && (this.buf = xt.concat([this.buf, xt.alloc(lo)]))
    }
    writeU8(e) {
        this.maybeResize(),
        this.buf.writeUInt8(e, this.length),
        this.length += 1
    }
    writeU16(e) {
        this.maybeResize(),
        this.buf.writeUInt16LE(e, this.length),
        this.length += 2
    }
    writeU32(e) {
        this.maybeResize(),
        this.buf.writeUInt32LE(e, this.length),
        this.length += 4
    }
    writeU64(e) {
        this.maybeResize(),
        this.writeBuffer(xt.from(new qn.default(e).toArray("le", 8)))
    }
    writeU128(e) {
        this.maybeResize(),
        this.writeBuffer(xt.from(new qn.default(e).toArray("le", 16)))
    }
    writeU256(e) {
        this.maybeResize(),
        this.writeBuffer(xt.from(new qn.default(e).toArray("le", 32)))
    }
    writeU512(e) {
        this.maybeResize(),
        this.writeBuffer(xt.from(new qn.default(e).toArray("le", 64)))
    }
    writeBuffer(e) {
        this.buf = xt.concat([xt.from(this.buf.subarray(0, this.length)), e, xt.alloc(lo)]),
        this.length += e.length
    }
    writeString(e) {
        this.maybeResize();
        const t = xt.from(e, "utf8");
        this.writeU32(t.length),
        this.writeBuffer(t)
    }
    writeFixedArray(e) {
        this.writeBuffer(xt.from(e))
    }
    writeArray(e, t) {
        this.maybeResize(),
        this.writeU32(e.length);
        for (const r of e)
            this.maybeResize(),
            t(r)
    }
    toArray() {
        return this.buf.subarray(0, this.length)
    }
}
At.BinaryWriter = Su;
function wn(n, e, t) {
    const r = t.value;
    t.value = function(...s) {
        try {
            return r.apply(this, s)
        } catch (i) {
            if (i instanceof RangeError) {
                const o = i.code;
                if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(o) >= 0)
                    throw new qt("Reached the end of buffer when deserializing")
            }
            throw i
        }
    }
}
class en {
    constructor(e) {
        this.buf = e,
        this.offset = 0
    }
    readU8() {
        const e = this.buf.readUInt8(this.offset);
        return this.offset += 1,
        e
    }
    readU16() {
        const e = this.buf.readUInt16LE(this.offset);
        return this.offset += 2,
        e
    }
    readU32() {
        const e = this.buf.readUInt32LE(this.offset);
        return this.offset += 4,
        e
    }
    readU64() {
        const e = this.readBuffer(8);
        return new qn.default(e,"le")
    }
    readU128() {
        const e = this.readBuffer(16);
        return new qn.default(e,"le")
    }
    readU256() {
        const e = this.readBuffer(32);
        return new qn.default(e,"le")
    }
    readU512() {
        const e = this.readBuffer(64);
        return new qn.default(e,"le")
    }
    readBuffer(e) {
        if (this.offset + e > this.buf.length)
            throw new qt(`Expected buffer length ${e} isn't within bounds`);
        const t = this.buf.slice(this.offset, this.offset + e);
        return this.offset += e,
        t
    }
    readString() {
        const e = this.readU32()
          , t = this.readBuffer(e);
        try {
            return A0.decode(t)
        } catch (r) {
            throw new qt(`Error decoding UTF-8 string: ${r}`)
        }
    }
    readFixedArray(e) {
        return new Uint8Array(this.readBuffer(e))
    }
    readArray(e) {
        const t = this.readU32()
          , r = Array();
        for (let s = 0; s < t; ++s)
            r.push(e());
        return r
    }
}
yn([wn], en.prototype, "readU8", null);
yn([wn], en.prototype, "readU16", null);
yn([wn], en.prototype, "readU32", null);
yn([wn], en.prototype, "readU64", null);
yn([wn], en.prototype, "readU128", null);
yn([wn], en.prototype, "readU256", null);
yn([wn], en.prototype, "readU512", null);
yn([wn], en.prototype, "readString", null);
yn([wn], en.prototype, "readFixedArray", null);
yn([wn], en.prototype, "readArray", null);
At.BinaryReader = en;
function ku(n) {
    return n.charAt(0).toUpperCase() + n.slice(1)
}
function Gn(n, e, t, r, s) {
    try {
        if (typeof r == "string")
            s[`write${ku(r)}`](t);
        else if (r instanceof Array)
            if (typeof r[0] == "number") {
                if (t.length !== r[0])
                    throw new qt(`Expecting byte array of length ${r[0]}, but got ${t.length} bytes`);
                s.writeFixedArray(t)
            } else if (r.length === 2 && typeof r[1] == "number") {
                if (t.length !== r[1])
                    throw new qt(`Expecting byte array of length ${r[1]}, but got ${t.length} bytes`);
                for (let i = 0; i < r[1]; i++)
                    Gn(n, null, t[i], r[0], s)
            } else
                s.writeArray(t, i => {
                    Gn(n, e, i, r[0], s)
                }
                );
        else if (r.kind !== void 0)
            switch (r.kind) {
            case "option":
                {
                    t == null ? s.writeU8(0) : (s.writeU8(1),
                    Gn(n, e, t, r.type, s));
                    break
                }
            case "map":
                {
                    s.writeU32(t.size),
                    t.forEach( (i, o) => {
                        Gn(n, e, o, r.key, s),
                        Gn(n, e, i, r.value, s)
                    }
                    );
                    break
                }
            default:
                throw new qt(`FieldType ${r} unrecognized`)
            }
        else
            Au(n, t, s)
    } catch (i) {
        throw i instanceof qt && i.addToFieldPath(e),
        i
    }
}
function Au(n, e, t) {
    if (typeof e.borshSerialize == "function") {
        e.borshSerialize(t);
        return
    }
    const r = n.get(e.constructor);
    if (!r)
        throw new qt(`Class ${e.constructor.name} is missing in schema`);
    if (r.kind === "struct")
        r.fields.map( ([s,i]) => {
            Gn(n, s, e[s], i, t)
        }
        );
    else if (r.kind === "enum") {
        const s = e[r.field];
        for (let i = 0; i < r.values.length; ++i) {
            const [o,a] = r.values[i];
            if (o === s) {
                t.writeU8(i),
                Gn(n, o, e[o], a, t);
                break
            }
        }
    } else
        throw new qt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`)
}
function R0(n, e, t=Su) {
    const r = new t;
    return Au(n, e, r),
    r.toArray()
}
var Iu = At.serialize = R0;
function Jn(n, e, t, r) {
    try {
        if (typeof t == "string")
            return r[`read${ku(t)}`]();
        if (t instanceof Array) {
            if (typeof t[0] == "number")
                return r.readFixedArray(t[0]);
            if (typeof t[1] == "number") {
                const s = [];
                for (let i = 0; i < t[1]; i++)
                    s.push(Jn(n, null, t[0], r));
                return s
            } else
                return r.readArray( () => Jn(n, e, t[0], r))
        }
        if (t.kind === "option")
            return r.readU8() ? Jn(n, e, t.type, r) : void 0;
        if (t.kind === "map") {
            let s = new Map;
            const i = r.readU32();
            for (let o = 0; o < i; o++) {
                const a = Jn(n, e, t.key, r)
                  , l = Jn(n, e, t.value, r);
                s.set(a, l)
            }
            return s
        }
        return ia(n, t, r)
    } catch (s) {
        throw s instanceof qt && s.addToFieldPath(e),
        s
    }
}
function ia(n, e, t) {
    if (typeof e.borshDeserialize == "function")
        return e.borshDeserialize(t);
    const r = n.get(e);
    if (!r)
        throw new qt(`Class ${e.name} is missing in schema`);
    if (r.kind === "struct") {
        const s = {};
        for (const [i,o] of n.get(e).fields)
            s[i] = Jn(n, i, o, t);
        return new e(s)
    }
    if (r.kind === "enum") {
        const s = t.readU8();
        if (s >= r.values.length)
            throw new qt(`Enum index: ${s} is out of range`);
        const [i,o] = r.values[s]
          , a = Jn(n, i, o, t);
        return new e({
            [i]: a
        })
    }
    throw new qt(`Unexpected schema kind: ${r.kind} for ${e.constructor.name}`)
}
function M0(n, e, t, r=en) {
    const s = new r(t)
      , i = ia(n, e, s);
    if (s.offset < t.length)
        throw new qt(`Unexpected ${t.length - s.offset} bytes after deserialized data`);
    return i
}
var Bu = At.deserialize = M0;
function T0(n, e, t, r=en) {
    const s = new r(t);
    return ia(n, e, s)
}
xu = At.deserializeUnchecked = T0;
var P = {};
Object.defineProperty(P, "__esModule", {
    value: !0
});
P.s16 = P.s8 = P.nu64be = P.u48be = P.u40be = P.u32be = P.u24be = P.u16be = kt = P.nu64 = P.u48 = P.u40 = le = P.u32 = P.u24 = rn = P.u16 = Me = P.u8 = er = P.offset = P.greedy = P.Constant = P.UTF8 = P.CString = P.Blob = P.Boolean = P.BitField = P.BitStructure = P.VariantLayout = P.Union = P.UnionLayoutDiscriminator = P.UnionDiscriminator = P.Structure = P.Sequence = P.DoubleBE = P.Double = P.FloatBE = P.Float = P.NearInt64BE = P.NearInt64 = P.NearUInt64BE = P.NearUInt64 = P.IntBE = P.Int = P.UIntBE = P.UInt = P.OffsetLayout = P.GreedyCount = P.ExternalLayout = P.bindConstructorLayout = P.nameWithProperty = P.Layout = P.uint8ArrayToBuffer = P.checkUint8Array = void 0;
P.constant = P.utf8 = P.cstr = De = P.blob = P.unionLayoutDiscriminator = P.union = Dt = P.seq = P.bits = ae = P.struct = P.f64be = P.f64 = P.f32be = P.f32 = P.ns64be = P.s48be = P.s40be = P.s32be = P.s24be = P.s16be = Gt = P.ns64 = P.s48 = P.s40 = P.s32 = P.s24 = void 0;
const sa = Yo;
function zr(n) {
    if (!(n instanceof Uint8Array))
        throw new TypeError("b must be a Uint8Array")
}
P.checkUint8Array = zr;
function Re(n) {
    return zr(n),
    sa.Buffer.from(n.buffer, n.byteOffset, n.length)
}
P.uint8ArrayToBuffer = Re;
class Te {
    constructor(e, t) {
        if (!Number.isInteger(e))
            throw new TypeError("span must be an integer");
        this.span = e,
        this.property = t
    }
    makeDestinationObject() {
        return {}
    }
    getSpan(e, t) {
        if (0 > this.span)
            throw new RangeError("indeterminate span");
        return this.span
    }
    replicate(e) {
        const t = Object.create(this.constructor.prototype);
        return Object.assign(t, this),
        t.property = e,
        t
    }
    fromArray(e) {}
}
P.Layout = Te;
function oa(n, e) {
    return e.property ? n + "[" + e.property + "]" : n
}
P.nameWithProperty = oa;
function O0(n, e) {
    if (typeof n != "function")
        throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(n, "layout_"))
        throw new Error("Class is already bound to a layout");
    if (!(e && e instanceof Te))
        throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_"))
        throw new Error("layout is already bound to a constructor");
    n.layout_ = e,
    e.boundConstructor_ = n,
    e.makeDestinationObject = () => new n,
    Object.defineProperty(n.prototype, "encode", {
        value(t, r) {
            return e.encode(this, t, r)
        },
        writable: !0
    }),
    Object.defineProperty(n, "decode", {
        value(t, r) {
            return e.decode(t, r)
        },
        writable: !0
    })
}
P.bindConstructorLayout = O0;
class Vt extends Te {
    isCount() {
        throw new Error("ExternalLayout is abstract")
    }
}
P.ExternalLayout = Vt;
class Ru extends Vt {
    constructor(e=1, t) {
        if (!Number.isInteger(e) || 0 >= e)
            throw new TypeError("elementSpan must be a (positive) integer");
        super(-1, t),
        this.elementSpan = e
    }
    isCount() {
        return !0
    }
    decode(e, t=0) {
        zr(e);
        const r = e.length - t;
        return Math.floor(r / this.elementSpan)
    }
    encode(e, t, r) {
        return 0
    }
}
P.GreedyCount = Ru;
class aa extends Vt {
    constructor(e, t=0, r) {
        if (!(e instanceof Te))
            throw new TypeError("layout must be a Layout");
        if (!Number.isInteger(t))
            throw new TypeError("offset must be integer or undefined");
        super(e.span, r || e.property),
        this.layout = e,
        this.offset = t
    }
    isCount() {
        return this.layout instanceof sn || this.layout instanceof cn
    }
    decode(e, t=0) {
        return this.layout.decode(e, t + this.offset)
    }
    encode(e, t, r=0) {
        return this.layout.encode(e, t, r + this.offset)
    }
}
P.OffsetLayout = aa;
class sn extends Te {
    constructor(e, t) {
        if (super(e, t),
        6 < this.span)
            throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t=0) {
        return Re(e).readUIntLE(t, this.span)
    }
    encode(e, t, r=0) {
        return Re(t).writeUIntLE(e, r, this.span),
        this.span
    }
}
P.UInt = sn;
class cn extends Te {
    constructor(e, t) {
        if (super(e, t),
        6 < this.span)
            throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t=0) {
        return Re(e).readUIntBE(t, this.span)
    }
    encode(e, t, r=0) {
        return Re(t).writeUIntBE(e, r, this.span),
        this.span
    }
}
P.UIntBE = cn;
class fr extends Te {
    constructor(e, t) {
        if (super(e, t),
        6 < this.span)
            throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t=0) {
        return Re(e).readIntLE(t, this.span)
    }
    encode(e, t, r=0) {
        return Re(t).writeIntLE(e, r, this.span),
        this.span
    }
}
P.Int = fr;
class qr extends Te {
    constructor(e, t) {
        if (super(e, t),
        6 < this.span)
            throw new RangeError("span must not exceed 6 bytes")
    }
    decode(e, t=0) {
        return Re(e).readIntBE(t, this.span)
    }
    encode(e, t, r=0) {
        return Re(t).writeIntBE(e, r, this.span),
        this.span
    }
}
P.IntBE = qr;
const So = Math.pow(2, 32);
function xs(n) {
    const e = Math.floor(n / So)
      , t = n - e * So;
    return {
        hi32: e,
        lo32: t
    }
}
function Es(n, e) {
    return n * So + e
}
class Mu extends Te {
    constructor(e) {
        super(8, e)
    }
    decode(e, t=0) {
        const r = Re(e)
          , s = r.readUInt32LE(t)
          , i = r.readUInt32LE(t + 4);
        return Es(i, s)
    }
    encode(e, t, r=0) {
        const s = xs(e)
          , i = Re(t);
        return i.writeUInt32LE(s.lo32, r),
        i.writeUInt32LE(s.hi32, r + 4),
        8
    }
}
P.NearUInt64 = Mu;
class Tu extends Te {
    constructor(e) {
        super(8, e)
    }
    decode(e, t=0) {
        const r = Re(e)
          , s = r.readUInt32BE(t)
          , i = r.readUInt32BE(t + 4);
        return Es(s, i)
    }
    encode(e, t, r=0) {
        const s = xs(e)
          , i = Re(t);
        return i.writeUInt32BE(s.hi32, r),
        i.writeUInt32BE(s.lo32, r + 4),
        8
    }
}
P.NearUInt64BE = Tu;
class Ou extends Te {
    constructor(e) {
        super(8, e)
    }
    decode(e, t=0) {
        const r = Re(e)
          , s = r.readUInt32LE(t)
          , i = r.readInt32LE(t + 4);
        return Es(i, s)
    }
    encode(e, t, r=0) {
        const s = xs(e)
          , i = Re(t);
        return i.writeUInt32LE(s.lo32, r),
        i.writeInt32LE(s.hi32, r + 4),
        8
    }
}
P.NearInt64 = Ou;
class Cu extends Te {
    constructor(e) {
        super(8, e)
    }
    decode(e, t=0) {
        const r = Re(e)
          , s = r.readInt32BE(t)
          , i = r.readUInt32BE(t + 4);
        return Es(s, i)
    }
    encode(e, t, r=0) {
        const s = xs(e)
          , i = Re(t);
        return i.writeInt32BE(s.hi32, r),
        i.writeUInt32BE(s.lo32, r + 4),
        8
    }
}
P.NearInt64BE = Cu;
class Lu extends Te {
    constructor(e) {
        super(4, e)
    }
    decode(e, t=0) {
        return Re(e).readFloatLE(t)
    }
    encode(e, t, r=0) {
        return Re(t).writeFloatLE(e, r),
        4
    }
}
P.Float = Lu;
class Nu extends Te {
    constructor(e) {
        super(4, e)
    }
    decode(e, t=0) {
        return Re(e).readFloatBE(t)
    }
    encode(e, t, r=0) {
        return Re(t).writeFloatBE(e, r),
        4
    }
}
P.FloatBE = Nu;
class Pu extends Te {
    constructor(e) {
        super(8, e)
    }
    decode(e, t=0) {
        return Re(e).readDoubleLE(t)
    }
    encode(e, t, r=0) {
        return Re(t).writeDoubleLE(e, r),
        8
    }
}
P.Double = Pu;
class Uu extends Te {
    constructor(e) {
        super(8, e)
    }
    decode(e, t=0) {
        return Re(e).readDoubleBE(t)
    }
    encode(e, t, r=0) {
        return Re(t).writeDoubleBE(e, r),
        8
    }
}
P.DoubleBE = Uu;
class Fu extends Te {
    constructor(e, t, r) {
        if (!(e instanceof Te))
            throw new TypeError("elementLayout must be a Layout");
        if (!(t instanceof Vt && t.isCount() || Number.isInteger(t) && 0 <= t))
            throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        let s = -1;
        !(t instanceof Vt) && 0 < e.span && (s = t * e.span),
        super(s, r),
        this.elementLayout = e,
        this.count = t
    }
    getSpan(e, t=0) {
        if (0 <= this.span)
            return this.span;
        let r = 0
          , s = this.count;
        if (s instanceof Vt && (s = s.decode(e, t)),
        0 < this.elementLayout.span)
            r = s * this.elementLayout.span;
        else {
            let i = 0;
            for (; i < s; )
                r += this.elementLayout.getSpan(e, t + r),
                ++i
        }
        return r
    }
    decode(e, t=0) {
        const r = [];
        let s = 0
          , i = this.count;
        for (i instanceof Vt && (i = i.decode(e, t)); s < i; )
            r.push(this.elementLayout.decode(e, t)),
            t += this.elementLayout.getSpan(e, t),
            s += 1;
        return r
    }
    encode(e, t, r=0) {
        const s = this.elementLayout
          , i = e.reduce( (o, a) => o + s.encode(a, t, r + o), 0);
        return this.count instanceof Vt && this.count.encode(e.length, t, r),
        i
    }
}
P.Sequence = Fu;
class Du extends Te {
    constructor(e, t, r) {
        if (!(Array.isArray(e) && e.reduce( (i, o) => i && o instanceof Te, !0)))
            throw new TypeError("fields must be array of Layout instances");
        typeof t == "boolean" && r === void 0 && (r = t,
        t = void 0);
        for (const i of e)
            if (0 > i.span && i.property === void 0)
                throw new Error("fields cannot contain unnamed variable-length layout");
        let s = -1;
        try {
            s = e.reduce( (i, o) => i + o.getSpan(), 0)
        } catch {}
        super(s, t),
        this.fields = e,
        this.decodePrefixes = !!r
    }
    getSpan(e, t=0) {
        if (0 <= this.span)
            return this.span;
        let r = 0;
        try {
            r = this.fields.reduce( (s, i) => {
                const o = i.getSpan(e, t);
                return t += o,
                s + o
            }
            , 0)
        } catch {
            throw new RangeError("indeterminate span")
        }
        return r
    }
    decode(e, t=0) {
        zr(e);
        const r = this.makeDestinationObject();
        for (const s of this.fields)
            if (s.property !== void 0 && (r[s.property] = s.decode(e, t)),
            t += s.getSpan(e, t),
            this.decodePrefixes && e.length === t)
                break;
        return r
    }
    encode(e, t, r=0) {
        const s = r;
        let i = 0
          , o = 0;
        for (const a of this.fields) {
            let l = a.span;
            if (o = 0 < l ? l : 0,
            a.property !== void 0) {
                const m = e[a.property];
                m !== void 0 && (o = a.encode(m, t, r),
                0 > l && (l = a.getSpan(t, r)))
            }
            i = r,
            r += l
        }
        return i + o - s
    }
    fromArray(e) {
        const t = this.makeDestinationObject();
        for (const r of this.fields)
            r.property !== void 0 && 0 < e.length && (t[r.property] = e.shift());
        return t
    }
    layoutFor(e) {
        if (typeof e != "string")
            throw new TypeError("property must be string");
        for (const t of this.fields)
            if (t.property === e)
                return t
    }
    offsetOf(e) {
        if (typeof e != "string")
            throw new TypeError("property must be string");
        let t = 0;
        for (const r of this.fields) {
            if (r.property === e)
                return t;
            0 > r.span ? t = -1 : 0 <= t && (t += r.span)
        }
    }
}
P.Structure = Du;
class ca {
    constructor(e) {
        this.property = e
    }
    decode(e, t) {
        throw new Error("UnionDiscriminator is abstract")
    }
    encode(e, t, r) {
        throw new Error("UnionDiscriminator is abstract")
    }
}
P.UnionDiscriminator = ca;
class Zi extends ca {
    constructor(e, t) {
        if (!(e instanceof Vt && e.isCount()))
            throw new TypeError("layout must be an unsigned integer ExternalLayout");
        super(t || e.property || "variant"),
        this.layout = e
    }
    decode(e, t) {
        return this.layout.decode(e, t)
    }
    encode(e, t, r) {
        return this.layout.encode(e, t, r)
    }
}
P.UnionLayoutDiscriminator = Zi;
class ua extends Te {
    constructor(e, t, r) {
        let s;
        if (e instanceof sn || e instanceof cn)
            s = new Zi(new aa(e));
        else if (e instanceof Vt && e.isCount())
            s = new Zi(e);
        else if (e instanceof ca)
            s = e;
        else
            throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        if (t === void 0 && (t = null),
        !(t === null || t instanceof Te))
            throw new TypeError("defaultLayout must be null or a Layout");
        if (t !== null) {
            if (0 > t.span)
                throw new Error("defaultLayout must have constant span");
            t.property === void 0 && (t = t.replicate("content"))
        }
        let i = -1;
        t && (i = t.span,
        0 <= i && (e instanceof sn || e instanceof cn) && (i += s.layout.span)),
        super(i, r),
        this.discriminator = s,
        this.usesPrefixDiscriminator = e instanceof sn || e instanceof cn,
        this.defaultLayout = t,
        this.registry = {};
        let o = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function(a) {
            return o(a)
        }
        ,
        this.configGetSourceVariant = function(a) {
            o = a.bind(this)
        }
    }
    getSpan(e, t=0) {
        if (0 <= this.span)
            return this.span;
        const r = this.getVariant(e, t);
        if (!r)
            throw new Error("unable to determine span for unrecognized variant");
        return r.getSpan(e, t)
    }
    defaultGetSourceVariant(e) {
        if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
            if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property))
                return;
            const t = this.registry[e[this.discriminator.property]];
            if (t && (!t.layout || t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
                return t
        } else
            for (const t in this.registry) {
                const r = this.registry[t];
                if (r.property && Object.prototype.hasOwnProperty.call(e, r.property))
                    return r
            }
        throw new Error("unable to infer src variant")
    }
    decode(e, t=0) {
        let r;
        const s = this.discriminator
          , i = s.decode(e, t)
          , o = this.registry[i];
        if (o === void 0) {
            const a = this.defaultLayout;
            let l = 0;
            this.usesPrefixDiscriminator && (l = s.layout.span),
            r = this.makeDestinationObject(),
            r[s.property] = i,
            r[a.property] = a.decode(e, t + l)
        } else
            r = o.decode(e, t);
        return r
    }
    encode(e, t, r=0) {
        const s = this.getSourceVariant(e);
        if (s === void 0) {
            const i = this.discriminator
              , o = this.defaultLayout;
            let a = 0;
            return this.usesPrefixDiscriminator && (a = i.layout.span),
            i.encode(e[i.property], t, r),
            a + o.encode(e[o.property], t, r + a)
        }
        return s.encode(e, t, r)
    }
    addVariant(e, t, r) {
        const s = new ju(this,e,t,r);
        return this.registry[e] = s,
        s
    }
    getVariant(e, t=0) {
        let r;
        return e instanceof Uint8Array ? r = this.discriminator.decode(e, t) : r = e,
        this.registry[r]
    }
}
P.Union = ua;
class ju extends Te {
    constructor(e, t, r, s) {
        if (!(e instanceof ua))
            throw new TypeError("union must be a Union");
        if (!Number.isInteger(t) || 0 > t)
            throw new TypeError("variant must be a (non-negative) integer");
        if (typeof r == "string" && s === void 0 && (s = r,
        r = null),
        r) {
            if (!(r instanceof Te))
                throw new TypeError("layout must be a Layout");
            if (e.defaultLayout !== null && 0 <= r.span && r.span > e.defaultLayout.span)
                throw new Error("variant span exceeds span of containing union");
            if (typeof s != "string")
                throw new TypeError("variant must have a String property")
        }
        let i = e.span;
        0 > e.span && (i = r ? r.span : 0,
        0 <= i && e.usesPrefixDiscriminator && (i += e.discriminator.layout.span)),
        super(i, s),
        this.union = e,
        this.variant = t,
        this.layout = r || null
    }
    getSpan(e, t=0) {
        if (0 <= this.span)
            return this.span;
        let r = 0;
        this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
        let s = 0;
        return this.layout && (s = this.layout.getSpan(e, t + r)),
        r + s
    }
    decode(e, t=0) {
        const r = this.makeDestinationObject();
        if (this !== this.union.getVariant(e, t))
            throw new Error("variant mismatch");
        let s = 0;
        return this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span),
        this.layout ? r[this.property] = this.layout.decode(e, t + s) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant),
        r
    }
    encode(e, t, r=0) {
        let s = 0;
        if (this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span),
        this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
            throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, t, r);
        let i = s;
        if (this.layout && (this.layout.encode(e[this.property], t, r + s),
        i += this.layout.getSpan(t, r + s),
        0 <= this.union.span && i > this.union.span))
            throw new Error("encoded variant overruns containing union");
        return i
    }
    fromArray(e) {
        if (this.layout)
            return this.layout.fromArray(e)
    }
}
P.VariantLayout = ju;
function Sr(n) {
    return 0 > n && (n += 4294967296),
    n
}
class la extends Te {
    constructor(e, t, r) {
        if (!(e instanceof sn || e instanceof cn))
            throw new TypeError("word must be a UInt or UIntBE layout");
        if (typeof t == "string" && r === void 0 && (r = t,
        t = !1),
        4 < e.span)
            throw new RangeError("word cannot exceed 32 bits");
        super(e.span, r),
        this.word = e,
        this.msb = !!t,
        this.fields = [];
        let s = 0;
        this._packedSetValue = function(i) {
            return s = Sr(i),
            this
        }
        ,
        this._packedGetValue = function() {
            return s
        }
    }
    decode(e, t=0) {
        const r = this.makeDestinationObject()
          , s = this.word.decode(e, t);
        this._packedSetValue(s);
        for (const i of this.fields)
            i.property !== void 0 && (r[i.property] = i.decode(e));
        return r
    }
    encode(e, t, r=0) {
        const s = this.word.decode(t, r);
        this._packedSetValue(s);
        for (const i of this.fields)
            if (i.property !== void 0) {
                const o = e[i.property];
                o !== void 0 && i.encode(o)
            }
        return this.word.encode(this._packedGetValue(), t, r)
    }
    addField(e, t) {
        const r = new fa(this,e,t);
        return this.fields.push(r),
        r
    }
    addBoolean(e) {
        const t = new zu(this,e);
        return this.fields.push(t),
        t
    }
    fieldFor(e) {
        if (typeof e != "string")
            throw new TypeError("property must be string");
        for (const t of this.fields)
            if (t.property === e)
                return t
    }
}
P.BitStructure = la;
class fa {
    constructor(e, t, r) {
        if (!(e instanceof la))
            throw new TypeError("container must be a BitStructure");
        if (!Number.isInteger(t) || 0 >= t)
            throw new TypeError("bits must be positive integer");
        const s = 8 * e.span
          , i = e.fields.reduce( (o, a) => o + a.bits, 0);
        if (t + i > s)
            throw new Error("bits too long for span remainder (" + (s - i) + " of " + s + " remain)");
        this.container = e,
        this.bits = t,
        this.valueMask = (1 << t) - 1,
        t === 32 && (this.valueMask = 4294967295),
        this.start = i,
        this.container.msb && (this.start = s - i - t),
        this.wordMask = Sr(this.valueMask << this.start),
        this.property = r
    }
    decode(e, t) {
        const r = this.container._packedGetValue();
        return Sr(r & this.wordMask) >>> this.start
    }
    encode(e) {
        if (typeof e != "number" || !Number.isInteger(e) || e !== Sr(e & this.valueMask))
            throw new TypeError(oa("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        const t = this.container._packedGetValue()
          , r = Sr(e << this.start);
        this.container._packedSetValue(Sr(t & ~this.wordMask) | r)
    }
}
P.BitField = fa;
let zu = class extends fa {
    constructor(e, t) {
        super(e, 1, t)
    }
    decode(e, t) {
        return !!super.decode(e, t)
    }
    encode(e) {
        typeof e == "boolean" && (e = +e),
        super.encode(e)
    }
}
;
P.Boolean = zu;
class qu extends Te {
    constructor(e, t) {
        if (!(e instanceof Vt && e.isCount() || Number.isInteger(e) && 0 <= e))
            throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        let r = -1;
        e instanceof Vt || (r = e),
        super(r, t),
        this.length = e
    }
    getSpan(e, t) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, t)),
        r
    }
    decode(e, t=0) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(e, t)),
        Re(e).slice(t, t + r)
    }
    encode(e, t, r) {
        let s = this.length;
        if (this.length instanceof Vt && (s = e.length),
        !(e instanceof Uint8Array && s === e.length))
            throw new TypeError(oa("Blob.encode", this) + " requires (length " + s + ") Uint8Array as src");
        if (r + s > t.length)
            throw new RangeError("encoding overruns Uint8Array");
        const i = Re(e);
        return Re(t).write(i.toString("hex"), r, s, "hex"),
        this.length instanceof Vt && this.length.encode(s, t, r),
        s
    }
}
P.Blob = qu;
class $u extends Te {
    constructor(e) {
        super(-1, e)
    }
    getSpan(e, t=0) {
        zr(e);
        let r = t;
        for (; r < e.length && e[r] !== 0; )
            r += 1;
        return 1 + r - t
    }
    decode(e, t=0) {
        const r = this.getSpan(e, t);
        return Re(e).slice(t, t + r - 1).toString("utf-8")
    }
    encode(e, t, r=0) {
        typeof e != "string" && (e = String(e));
        const s = sa.Buffer.from(e, "utf8")
          , i = s.length;
        if (r + i > t.length)
            throw new RangeError("encoding overruns Buffer");
        const o = Re(t);
        return s.copy(o, r),
        o[r + i] = 0,
        i + 1
    }
}
P.CString = $u;
class Hu extends Te {
    constructor(e, t) {
        if (typeof e == "string" && t === void 0 && (t = e,
        e = void 0),
        e === void 0)
            e = -1;
        else if (!Number.isInteger(e))
            throw new TypeError("maxSpan must be an integer");
        super(-1, t),
        this.maxSpan = e
    }
    getSpan(e, t=0) {
        return zr(e),
        e.length - t
    }
    decode(e, t=0) {
        const r = this.getSpan(e, t);
        if (0 <= this.maxSpan && this.maxSpan < r)
            throw new RangeError("text length exceeds maxSpan");
        return Re(e).slice(t, t + r).toString("utf-8")
    }
    encode(e, t, r=0) {
        typeof e != "string" && (e = String(e));
        const s = sa.Buffer.from(e, "utf8")
          , i = s.length;
        if (0 <= this.maxSpan && this.maxSpan < i)
            throw new RangeError("text length exceeds maxSpan");
        if (r + i > t.length)
            throw new RangeError("encoding overruns Buffer");
        return s.copy(Re(t), r),
        i
    }
}
P.UTF8 = Hu;
class Vu extends Te {
    constructor(e, t) {
        super(0, t),
        this.value = e
    }
    decode(e, t) {
        return this.value
    }
    encode(e, t, r) {
        return 0
    }
}
P.Constant = Vu;
P.greedy = (n, e) => new Ru(n,e);
var er = P.offset = (n, e, t) => new aa(n,e,t)
  , Me = P.u8 = n => new sn(1,n)
  , rn = P.u16 = n => new sn(2,n);
P.u24 = n => new sn(3,n);
var le = P.u32 = n => new sn(4,n);
P.u40 = n => new sn(5,n);
P.u48 = n => new sn(6,n);
var kt = P.nu64 = n => new Mu(n);
P.u16be = n => new cn(2,n);
P.u24be = n => new cn(3,n);
P.u32be = n => new cn(4,n);
P.u40be = n => new cn(5,n);
P.u48be = n => new cn(6,n);
P.nu64be = n => new Tu(n);
P.s8 = n => new fr(1,n);
P.s16 = n => new fr(2,n);
P.s24 = n => new fr(3,n);
P.s32 = n => new fr(4,n);
P.s40 = n => new fr(5,n);
P.s48 = n => new fr(6,n);
var Gt = P.ns64 = n => new Ou(n);
P.s16be = n => new qr(2,n);
P.s24be = n => new qr(3,n);
P.s32be = n => new qr(4,n);
P.s40be = n => new qr(5,n);
P.s48be = n => new qr(6,n);
P.ns64be = n => new Cu(n);
P.f32 = n => new Lu(n);
P.f32be = n => new Nu(n);
P.f64 = n => new Pu(n);
P.f64be = n => new Uu(n);
var ae = P.struct = (n, e, t) => new Du(n,e,t);
P.bits = (n, e, t) => new la(n,e,t);
var Dt = P.seq = (n, e, t) => new Fu(n,e,t);
P.union = (n, e, t) => new ua(n,e,t);
P.unionLayoutDiscriminator = (n, e) => new Zi(n,e);
var De = P.blob = (n, e) => new qu(n,e);
P.cstr = n => new $u(n);
P.utf8 = (n, e) => new Hu(n,e);
P.constant = (n, e) => new Vu(n,e);
var C0 = 8078e3
  , L0 = 8078001
  , N0 = 8078004
  , P0 = 8078005
  , U0 = 8078006
  , F0 = 8078011;
function Zu(n) {
    return Array.isArray(n) ? "%5B" + n.map(Zu).join("%2C%20") + "%5D" : typeof n == "bigint" ? `${n}n` : encodeURIComponent(String(n != null && Object.getPrototypeOf(n) === null ? {
        ...n
    } : n))
}
function D0([n,e]) {
    return `${n}=${Zu(e)}`
}
function j0(n) {
    const e = Object.entries(n).map(D0).join("&");
    return btoa(e)
}
function z0(n, e={}) {
    {
        let t = `Solana error #${n}; Decode this error by running \`npx @solana/errors decode -- ${n}`;
        return Object.keys(e).length && (t += ` '${j0(e)}'`),
        `${t}\``
    }
}
var Rr = class extends Error {
    constructor(...[e,t]) {
        let r, s;
        if (t) {
            const {cause: o, ...a} = t;
            o && (s = {
                cause: o
            }),
            Object.keys(a).length > 0 && (r = a)
        }
        const i = z0(e, r);
        super(i, s);
        Oe(this, "cause", this.cause);
        Oe(this, "context");
        this.context = {
            __code: e,
            ...r
        },
        this.name = "SolanaError"
    }
}
;
function q0(n, e) {
    return "fixedSize"in e ? e.fixedSize : e.getSizeFromValue(n)
}
function $0(n) {
    return Object.freeze({
        ...n,
        encode: e => {
            const t = new Uint8Array(q0(e, n));
            return n.write(e, t, 0),
            t
        }
    })
}
function H0(n) {
    return Object.freeze({
        ...n,
        decode: (e, t=0) => n.read(e, t)[0]
    })
}
function Er(n) {
    return "fixedSize"in n && typeof n.fixedSize == "number"
}
function V0(n, e) {
    if (Er(n) !== Er(e))
        throw new Rr(N0);
    if (Er(n) && Er(e) && n.fixedSize !== e.fixedSize)
        throw new Rr(P0,{
            decoderFixedSize: e.fixedSize,
            encoderFixedSize: n.fixedSize
        });
    if (!Er(n) && !Er(e) && n.maxSize !== e.maxSize)
        throw new Rr(U0,{
            decoderMaxSize: e.maxSize,
            encoderMaxSize: n.maxSize
        });
    return {
        ...e,
        ...n,
        decode: e.decode,
        encode: n.encode,
        read: e.read,
        write: n.write
    }
}
function Z0(n, e, t=0) {
    if (e.length - t <= 0)
        throw new Rr(C0,{
            codecDescription: n
        })
}
function W0(n, e, t, r=0) {
    const s = t.length - r;
    if (s < e)
        throw new Rr(L0,{
            bytesLength: s,
            codecDescription: n,
            expected: e
        })
}
function K0(n, e, t, r) {
    if (r < e || r > t)
        throw new Rr(F0,{
            codecDescription: n,
            max: t,
            min: e,
            value: r
        })
}
function Wu(n) {
    return (n == null ? void 0 : n.endian) !== 1
}
function G0(n) {
    return $0({
        fixedSize: n.size,
        write(e, t, r) {
            n.range && K0(n.name, n.range[0], n.range[1], e);
            const s = new ArrayBuffer(n.size);
            return n.set(new DataView(s), e, Wu(n.config)),
            t.set(new Uint8Array(s), r),
            r + n.size
        }
    })
}
function J0(n) {
    return H0({
        fixedSize: n.size,
        read(e, t=0) {
            Z0(n.name, e, t),
            W0(n.name, n.size, e, t);
            const r = new DataView(Y0(e, t, n.size));
            return [n.get(r, Wu(n.config)), t + n.size]
        }
    })
}
function Y0(n, e, t) {
    const r = n.byteOffset + (e ?? 0)
      , s = t ?? n.byteLength;
    return n.buffer.slice(r, r + s)
}
var X0 = (n={}) => G0({
    config: n,
    name: "u64",
    range: [0n, BigInt("0xffffffffffffffff")],
    set: (e, t, r) => e.setBigUint64(0, BigInt(t), r),
    size: 8
})
  , Q0 = (n={}) => J0({
    config: n,
    get: (e, t) => e.getBigUint64(0, t),
    name: "u64",
    size: 8
})
  , ep = (n={}) => V0(X0(n), Q0(n));
class tp extends TypeError {
    constructor(e, t) {
        let r;
        const {message: s, explanation: i, ...o} = e
          , {path: a} = e
          , l = a.length === 0 ? s : `At path: ${a.join(".")} -- ${s}`;
        super(i ?? l),
        i != null && (this.cause = l),
        Object.assign(this, o),
        this.name = this.constructor.name,
        this.failures = () => r ?? (r = [e, ...t()])
    }
}
function np(n) {
    return xi(n) && typeof n[Symbol.iterator] == "function"
}
function xi(n) {
    return typeof n == "object" && n != null
}
function Wi(n) {
    return xi(n) && !Array.isArray(n)
}
function ln(n) {
    return typeof n == "symbol" ? n.toString() : typeof n == "string" ? JSON.stringify(n) : `${n}`
}
function rp(n) {
    const {done: e, value: t} = n.next();
    return e ? void 0 : t
}
function ip(n, e, t, r) {
    if (n === !0)
        return;
    n === !1 ? n = {} : typeof n == "string" && (n = {
        message: n
    });
    const {path: s, branch: i} = e
      , {type: o} = t
      , {refinement: a, message: l=`Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${ln(r)}\``} = n;
    return {
        value: r,
        type: o,
        refinement: a,
        key: s[s.length - 1],
        path: s,
        branch: i,
        ...n,
        message: l
    }
}
function *rc(n, e, t, r) {
    np(n) || (n = [n]);
    for (const s of n) {
        const i = ip(s, e, t, r);
        i && (yield i)
    }
}
function *da(n, e, t={}) {
    const {path: r=[], branch: s=[n], coerce: i=!1, mask: o=!1} = t
      , a = {
        path: r,
        branch: s,
        mask: o
    };
    i && (n = e.coercer(n, a));
    let l = "valid";
    for (const m of e.validator(n, a))
        m.explanation = t.message,
        l = "not_valid",
        yield[m, void 0];
    for (let[m,h,E] of e.entries(n, a)) {
        const B = da(h, E, {
            path: m === void 0 ? r : [...r, m],
            branch: m === void 0 ? s : [...s, h],
            coerce: i,
            mask: o,
            message: t.message
        });
        for (const k of B)
            k[0] ? (l = k[0].refinement != null ? "not_refined" : "not_valid",
            yield[k[0], void 0]) : i && (h = k[1],
            m === void 0 ? n = h : n instanceof Map ? n.set(m, h) : n instanceof Set ? n.add(h) : xi(n) && (h !== void 0 || m in n) && (n[m] = h))
    }
    if (l !== "not_valid")
        for (const m of e.refiner(n, a))
            m.explanation = t.message,
            l = "not_refined",
            yield[m, void 0];
    l === "valid" && (yield[void 0, n])
}
let bn = class {
    constructor(e) {
        const {type: t, schema: r, validator: s, refiner: i, coercer: o=l => l, entries: a=function*() {}
        } = e;
        this.type = t,
        this.schema = r,
        this.entries = a,
        this.coercer = o,
        s ? this.validator = (l, m) => {
            const h = s(l, m);
            return rc(h, m, this, l)
        }
        : this.validator = () => [],
        i ? this.refiner = (l, m) => {
            const h = i(l, m);
            return rc(h, m, this, l)
        }
        : this.refiner = () => []
    }
    assert(e, t) {
        return sp(e, this, t)
    }
    create(e, t) {
        return Y(e, this, t)
    }
    is(e) {
        return Ku(e, this)
    }
    mask(e, t) {
        return op(e, this, t)
    }
    validate(e, t={}) {
        return Ei(e, this, t)
    }
}
;
function sp(n, e, t) {
    const r = Ei(n, e, {
        message: t
    });
    if (r[0])
        throw r[0]
}
function Y(n, e, t) {
    const r = Ei(n, e, {
        coerce: !0,
        message: t
    });
    if (r[0])
        throw r[0];
    return r[1]
}
function op(n, e, t) {
    const r = Ei(n, e, {
        coerce: !0,
        mask: !0,
        message: t
    });
    if (r[0])
        throw r[0];
    return r[1]
}
function Ku(n, e) {
    return !Ei(n, e)[0]
}
function Ei(n, e, t={}) {
    const r = da(n, e, t)
      , s = rp(r);
    return s[0] ? [new tp(s[0],function*() {
        for (const o of r)
            o[0] && (yield o[0])
    }
    ), void 0] : [void 0, s[1]]
}
function dr(n, e) {
    return new bn({
        type: n,
        schema: null,
        validator: e
    })
}
function ap() {
    return dr("any", () => !0)
}
function ne(n) {
    return new bn({
        type: "array",
        schema: n,
        *entries(e) {
            if (n && Array.isArray(e))
                for (const [t,r] of e.entries())
                    yield[t, r, n]
        },
        coercer(e) {
            return Array.isArray(e) ? e.slice() : e
        },
        validator(e) {
            return Array.isArray(e) || `Expected an array value, but received: ${ln(e)}`
        }
    })
}
function gn() {
    return dr("boolean", n => typeof n == "boolean")
}
function ha(n) {
    return dr("instance", e => e instanceof n || `Expected a \`${n.name}\` instance, but received: ${ln(e)}`)
}
function Ke(n) {
    const e = ln(n)
      , t = typeof n;
    return new bn({
        type: "literal",
        schema: t === "string" || t === "number" || t === "boolean" ? n : null,
        validator(r) {
            return r === n || `Expected the literal \`${e}\`, but received: ${ln(r)}`
        }
    })
}
function cp() {
    return dr("never", () => !1)
}
function re(n) {
    return new bn({
        ...n,
        validator: (e, t) => e === null || n.validator(e, t),
        refiner: (e, t) => e === null || n.refiner(e, t)
    })
}
function L() {
    return dr("number", n => typeof n == "number" && !isNaN(n) || `Expected a number, but received: ${ln(n)}`)
}
function fe(n) {
    return new bn({
        ...n,
        validator: (e, t) => e === void 0 || n.validator(e, t),
        refiner: (e, t) => e === void 0 || n.refiner(e, t)
    })
}
function Gu(n, e) {
    return new bn({
        type: "record",
        schema: null,
        *entries(t) {
            if (xi(t))
                for (const r in t) {
                    const s = t[r];
                    yield[r, r, n],
                    yield[r, s, e]
                }
        },
        validator(t) {
            return Wi(t) || `Expected an object, but received: ${ln(t)}`
        },
        coercer(t) {
            return Wi(t) ? {
                ...t
            } : t
        }
    })
}
function G() {
    return dr("string", n => typeof n == "string" || `Expected a string, but received: ${ln(n)}`)
}
function pa(n) {
    const e = cp();
    return new bn({
        type: "tuple",
        schema: null,
        *entries(t) {
            if (Array.isArray(t)) {
                const r = Math.max(n.length, t.length);
                for (let s = 0; s < r; s++)
                    yield[s, t[s], n[s] || e]
            }
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array, but received: ${ln(t)}`
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        }
    })
}
function V(n) {
    const e = Object.keys(n);
    return new bn({
        type: "type",
        schema: n,
        *entries(t) {
            if (xi(t))
                for (const r of e)
                    yield[r, t[r], n[r]]
        },
        validator(t) {
            return Wi(t) || `Expected an object, but received: ${ln(t)}`
        },
        coercer(t) {
            return Wi(t) ? {
                ...t
            } : t
        }
    })
}
function $t(n) {
    const e = n.map(t => t.type).join(" | ");
    return new bn({
        type: "union",
        schema: null,
        coercer(t, r) {
            for (const s of n) {
                const [i,o] = s.validate(t, {
                    coerce: !0,
                    mask: r.mask
                });
                if (!i)
                    return o
            }
            return t
        },
        validator(t, r) {
            const s = [];
            for (const i of n) {
                const [...o] = da(t, i, r)
                  , [a] = o;
                if (a[0])
                    for (const [l] of o)
                        l && s.push(l);
                else
                    return []
            }
            return [`Expected the value to satisfy a union of \`${e}\`, but received: ${ln(t)}`, ...s]
        }
    })
}
function $r() {
    return dr("unknown", () => !0)
}
function Si(n, e, t) {
    return new bn({
        ...n,
        coercer: (r, s) => Ku(r, e) ? n.coercer(t(r, s), s) : n.coercer(r, s)
    })
}
const Ju = jo(Ch)
  , up = Ju.v4
  , lp = function(n, e, t, r) {
    if (typeof n != "string")
        throw new TypeError(n + " must be a string");
    r = r || {};
    const s = typeof r.version == "number" ? r.version : 2;
    if (s !== 1 && s !== 2)
        throw new TypeError(s + " must be 1 or 2");
    const i = {
        method: n
    };
    if (s === 2 && (i.jsonrpc = "2.0"),
    e) {
        if (typeof e != "object" && !Array.isArray(e))
            throw new TypeError(e + " must be an object, array or omitted");
        i.params = e
    }
    if (typeof t > "u") {
        const o = typeof r.generator == "function" ? r.generator : function() {
            return up()
        }
        ;
        i.id = o(i, r)
    } else
        s === 2 && t === null ? r.notificationIdNull && (i.id = null) : i.id = t;
    return i
};
var fp = lp;
const dp = Ju.v4
  , hp = fp
  , ri = function(n, e) {
    if (!(this instanceof ri))
        return new ri(n,e);
    e || (e = {}),
    this.options = {
        reviver: typeof e.reviver < "u" ? e.reviver : null,
        replacer: typeof e.replacer < "u" ? e.replacer : null,
        generator: typeof e.generator < "u" ? e.generator : function() {
            return dp()
        }
        ,
        version: typeof e.version < "u" ? e.version : 2,
        notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
    },
    this.callServer = n
};
var pp = ri;
ri.prototype.request = function(n, e, t, r) {
    const s = this;
    let i = null;
    const o = Array.isArray(n) && typeof e == "function";
    if (this.options.version === 1 && o)
        throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (o || !o && n && typeof n == "object" && typeof e == "function")
        r = e,
        i = n;
    else {
        typeof t == "function" && (r = t,
        t = void 0);
        const m = typeof r == "function";
        try {
            i = hp(n, e, t, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull
            })
        } catch (h) {
            if (m)
                return r(h);
            throw h
        }
        if (!m)
            return i
    }
    let l;
    try {
        l = JSON.stringify(i, this.options.replacer)
    } catch (m) {
        return r(m)
    }
    return this.callServer(l, function(m, h) {
        s._parseResponse(m, h, r)
    }),
    i
}
;
ri.prototype._parseResponse = function(n, e, t) {
    if (n) {
        t(n);
        return
    }
    if (!e)
        return t();
    let r;
    try {
        r = JSON.parse(e, this.options.reviver)
    } catch (s) {
        return t(s)
    }
    if (t.length === 3)
        if (Array.isArray(r)) {
            const s = function(o) {
                return typeof o.error < "u"
            }
              , i = function(o) {
                return !s(o)
            };
            return t(null, r.filter(s), r.filter(i))
        } else
            return t(null, r.error, r.result);
    t(null, r)
}
;
const mp = fs(pp);
var gp = class extends Or {
    constructor(e, t, r) {
        super();
        Oe(this, "socket");
        this.socket = new window.WebSocket(e,r),
        this.socket.onopen = () => this.emit("open"),
        this.socket.onmessage = s => this.emit("message", s.data),
        this.socket.onerror = s => this.emit("error", s),
        this.socket.onclose = s => {
            this.emit("close", s.code, s.reason)
        }
    }
    send(e, t, r) {
        const s = r || t;
        try {
            this.socket.send(e),
            s()
        } catch (i) {
            s(i)
        }
    }
    close(e, t) {
        this.socket.close(e, t)
    }
    addEventListener(e, t, r) {
        this.socket.addEventListener(e, t, r)
    }
}
;
function yp(n, e) {
    return new gp(n,e)
}
var wp = class {
    encode(n) {
        return JSON.stringify(n)
    }
    decode(n) {
        return JSON.parse(n)
    }
}
  , bp = class extends Or {
    constructor(e, t="ws://localhost:8080", {autoconnect: r=!0, reconnect: s=!0, reconnect_interval: i=1e3, max_reconnects: o=5, ...a}={}, l, m) {
        super();
        Oe(this, "address");
        Oe(this, "rpc_id");
        Oe(this, "queue");
        Oe(this, "options");
        Oe(this, "autoconnect");
        Oe(this, "ready");
        Oe(this, "reconnect");
        Oe(this, "reconnect_timer_id");
        Oe(this, "reconnect_interval");
        Oe(this, "max_reconnects");
        Oe(this, "rest_options");
        Oe(this, "current_reconnects");
        Oe(this, "generate_request_id");
        Oe(this, "socket");
        Oe(this, "webSocketFactory");
        Oe(this, "dataPack");
        this.webSocketFactory = e,
        this.queue = {},
        this.rpc_id = 0,
        this.address = t,
        this.autoconnect = r,
        this.ready = !1,
        this.reconnect = s,
        this.reconnect_timer_id = void 0,
        this.reconnect_interval = i,
        this.max_reconnects = o,
        this.rest_options = a,
        this.current_reconnects = 0,
        this.generate_request_id = l || ( () => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1),
        m ? this.dataPack = m : this.dataPack = new wp,
        this.autoconnect && this._connect(this.address, {
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects,
            ...this.rest_options
        })
    }
    connect() {
        this.socket || this._connect(this.address, {
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects,
            ...this.rest_options
        })
    }
    call(e, t, r, s) {
        return !s && typeof r == "object" && (s = r,
        r = null),
        new Promise( (i, o) => {
            if (!this.ready)
                return o(new Error("socket not ready"));
            const a = this.generate_request_id(e, t)
              , l = {
                jsonrpc: "2.0",
                method: e,
                params: t || void 0,
                id: a
            };
            this.socket.send(this.dataPack.encode(l), s, m => {
                if (m)
                    return o(m);
                this.queue[a] = {
                    promise: [i, o]
                },
                r && (this.queue[a].timeout = setTimeout( () => {
                    delete this.queue[a],
                    o(new Error("reply timeout"))
                }
                , r))
            }
            )
        }
        )
    }
    async login(e) {
        const t = await this.call("rpc.login", e);
        if (!t)
            throw new Error("authentication failed");
        return t
    }
    async listMethods() {
        return await this.call("__listMethods")
    }
    notify(e, t) {
        return new Promise( (r, s) => {
            if (!this.ready)
                return s(new Error("socket not ready"));
            const i = {
                jsonrpc: "2.0",
                method: e,
                params: t
            };
            this.socket.send(this.dataPack.encode(i), o => {
                if (o)
                    return s(o);
                r()
            }
            )
        }
        )
    }
    async subscribe(e) {
        typeof e == "string" && (e = [e]);
        const t = await this.call("rpc.on", e);
        if (typeof e == "string" && t[e] !== "ok")
            throw new Error("Failed subscribing to an event '" + e + "' with: " + t[e]);
        return t
    }
    async unsubscribe(e) {
        typeof e == "string" && (e = [e]);
        const t = await this.call("rpc.off", e);
        if (typeof e == "string" && t[e] !== "ok")
            throw new Error("Failed unsubscribing from an event with: " + t);
        return t
    }
    close(e, t) {
        this.socket.close(e || 1e3, t)
    }
    setAutoReconnect(e) {
        this.reconnect = e
    }
    setReconnectInterval(e) {
        this.reconnect_interval = e
    }
    setMaxReconnects(e) {
        this.max_reconnects = e
    }
    _connect(e, t) {
        clearTimeout(this.reconnect_timer_id),
        this.socket = this.webSocketFactory(e, t),
        this.socket.addEventListener("open", () => {
            this.ready = !0,
            this.emit("open"),
            this.current_reconnects = 0
        }
        ),
        this.socket.addEventListener("message", ({data: r}) => {
            r instanceof ArrayBuffer && (r = _e.from(r).toString());
            try {
                r = this.dataPack.decode(r)
            } catch {
                return
            }
            if (r.notification && this.listeners(r.notification).length) {
                if (!Object.keys(r.params).length)
                    return this.emit(r.notification);
                const s = [r.notification];
                if (r.params.constructor === Object)
                    s.push(r.params);
                else
                    for (let i = 0; i < r.params.length; i++)
                        s.push(r.params[i]);
                return Promise.resolve().then( () => {
                    this.emit.apply(this, s)
                }
                )
            }
            if (!this.queue[r.id])
                return r.method ? Promise.resolve().then( () => {
                    this.emit(r.method, r == null ? void 0 : r.params)
                }
                ) : void 0;
            "error"in r == "result"in r && this.queue[r.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),
            this.queue[r.id].timeout && clearTimeout(this.queue[r.id].timeout),
            r.error ? this.queue[r.id].promise[1](r.error) : this.queue[r.id].promise[0](r.result),
            delete this.queue[r.id]
        }
        ),
        this.socket.addEventListener("error", r => this.emit("error", r)),
        this.socket.addEventListener("close", ({code: r, reason: s}) => {
            this.ready && setTimeout( () => this.emit("close", r, s), 0),
            this.ready = !1,
            this.socket = void 0,
            r !== 1e3 && (this.current_reconnects++,
            this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) && (this.reconnect_timer_id = setTimeout( () => this._connect(e, t), this.reconnect_interval)))
        }
        )
    }
}
;
vt.utils.randomPrivateKey;
vt.getPublicKey;
function ic(n) {
    try {
        return vt.ExtendedPoint.fromHex(n),
        !0
    } catch {
        return !1
    }
}
const Yu = (n, e) => vt.sign(n, e.slice(0, 32))
  , vp = vt.verify
  , Nr = n => _e.isBuffer(n) ? n : n instanceof Uint8Array ? _e.from(n.buffer, n.byteOffset, n.byteLength) : _e.from(n);
class _p {
    constructor(e) {
        Object.assign(this, e)
    }
    encode() {
        return _e.from(Iu(Ui, this))
    }
    static decode(e) {
        return Bu(Ui, this, e)
    }
    static decodeUnchecked(e) {
        return xu(Ui, this, e)
    }
}
const Ui = new Map;
var Xu;
const xp = 32
  , Hn = 32;
function Ep(n) {
    return n._bn !== void 0
}
let sc = 1;
class he extends _p {
    constructor(e) {
        if (super({}),
        this._bn = void 0,
        Ep(e))
            this._bn = e._bn;
        else {
            if (typeof e == "string") {
                const t = It.decode(e);
                if (t.length != Hn)
                    throw new Error("Invalid public key input");
                this._bn = new nc(t)
            } else
                this._bn = new nc(e);
            if (this._bn.byteLength() > Hn)
                throw new Error("Invalid public key input")
        }
    }
    static unique() {
        const e = new he(sc);
        return sc += 1,
        new he(e.toBuffer())
    }
    equals(e) {
        return this._bn.eq(e._bn)
    }
    toBase58() {
        return It.encode(this.toBytes())
    }
    toJSON() {
        return this.toBase58()
    }
    toBytes() {
        const e = this.toBuffer();
        return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
    }
    toBuffer() {
        const e = this._bn.toArrayLike(_e);
        if (e.length === Hn)
            return e;
        const t = _e.alloc(32);
        return e.copy(t, 32 - e.length),
        t
    }
    get[Symbol.toStringTag]() {
        return `PublicKey(${this.toString()})`
    }
    toString() {
        return this.toBase58()
    }
    static async createWithSeed(e, t, r) {
        const s = _e.concat([e.toBuffer(), _e.from(t), r.toBuffer()])
          , i = za(s);
        return new he(i)
    }
    static createProgramAddressSync(e, t) {
        let r = _e.alloc(0);
        e.forEach(function(i) {
            if (i.length > xp)
                throw new TypeError("Max seed length exceeded");
            r = _e.concat([r, Nr(i)])
        }),
        r = _e.concat([r, t.toBuffer(), _e.from("ProgramDerivedAddress")]);
        const s = za(r);
        if (ic(s))
            throw new Error("Invalid seeds, address must fall off the curve");
        return new he(s)
    }
    static async createProgramAddress(e, t) {
        return this.createProgramAddressSync(e, t)
    }
    static findProgramAddressSync(e, t) {
        let r = 255, s;
        for (; r != 0; ) {
            try {
                const i = e.concat(_e.from([r]));
                s = this.createProgramAddressSync(i, t)
            } catch (i) {
                if (i instanceof TypeError)
                    throw i;
                r--;
                continue
            }
            return [s, r]
        }
        throw new Error("Unable to find a viable program address nonce")
    }
    static async findProgramAddress(e, t) {
        return this.findProgramAddressSync(e, t)
    }
    static isOnCurve(e) {
        const t = new he(e);
        return ic(t.toBytes())
    }
}
Xu = he;
he.default = new Xu("11111111111111111111111111111111");
Ui.set(he, {
    kind: "struct",
    fields: [["_bn", "u256"]]
});
new he("BPFLoader1111111111111111111111111111111111");
const Mr = 1232
  , ma = 127
  , Ki = 64;
class Qu extends Error {
    constructor(e) {
        super(`Signature ${e} has expired: block height exceeded.`),
        this.signature = void 0,
        this.signature = e
    }
}
Object.defineProperty(Qu.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
});
class el extends Error {
    constructor(e, t) {
        super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`),
        this.signature = void 0,
        this.signature = e
    }
}
Object.defineProperty(el.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
});
class Gr extends Error {
    constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`),
        this.signature = void 0,
        this.signature = e
    }
}
Object.defineProperty(Gr.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
});
class Gi {
    constructor(e, t) {
        this.staticAccountKeys = void 0,
        this.accountKeysFromLookups = void 0,
        this.staticAccountKeys = e,
        this.accountKeysFromLookups = t
    }
    keySegments() {
        const e = [this.staticAccountKeys];
        return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable),
        e.push(this.accountKeysFromLookups.readonly)),
        e
    }
    get(e) {
        for (const t of this.keySegments()) {
            if (e < t.length)
                return t[e];
            e -= t.length
        }
    }
    get length() {
        return this.keySegments().flat().length
    }
    compileInstructions(e) {
        if (this.length > 256)
            throw new Error("Account index overflow encountered during compilation");
        const r = new Map;
        this.keySegments().flat().forEach( (i, o) => {
            r.set(i.toBase58(), o)
        }
        );
        const s = i => {
            const o = r.get(i.toBase58());
            if (o === void 0)
                throw new Error("Encountered an unknown instruction account key during compilation");
            return o
        }
        ;
        return e.map(i => ({
            programIdIndex: s(i.programId),
            accountKeyIndexes: i.keys.map(o => s(o.pubkey)),
            data: i.data
        }))
    }
}
const Ae = (n="publicKey") => De(32, n)
  , Sp = (n="signature") => De(64, n)
  , Br = (n="string") => {
    const e = ae([le("length"), le("lengthPadding"), De(er(le(), -8), "chars")], n)
      , t = e.decode.bind(e)
      , r = e.encode.bind(e)
      , s = e;
    return s.decode = (i, o) => t(i, o).chars.toString(),
    s.encode = (i, o, a) => {
        const l = {
            chars: _e.from(i, "utf8")
        };
        return r(l, o, a)
    }
    ,
    s.alloc = i => le().span + le().span + _e.from(i, "utf8").length,
    s
}
  , kp = (n="authorized") => ae([Ae("staker"), Ae("withdrawer")], n)
  , Ap = (n="lockup") => ae([Gt("unixTimestamp"), Gt("epoch"), Ae("custodian")], n)
  , Ip = (n="voteInit") => ae([Ae("nodePubkey"), Ae("authorizedVoter"), Ae("authorizedWithdrawer"), Me("commission")], n)
  , Bp = (n="voteAuthorizeWithSeedArgs") => ae([le("voteAuthorizationType"), Ae("currentAuthorityDerivedKeyOwnerPubkey"), Br("currentAuthorityDerivedKeySeed"), Ae("newAuthorized")], n);
function Jt(n) {
    let e = 0
      , t = 0;
    for (; ; ) {
        let r = n.shift();
        if (e |= (r & 127) << t * 7,
        t += 1,
        !(r & 128))
            break
    }
    return e
}
function Yt(n, e) {
    let t = e;
    for (; ; ) {
        let r = t & 127;
        if (t >>= 7,
        t == 0) {
            n.push(r);
            break
        } else
            r |= 128,
            n.push(r)
    }
}
function $e(n, e) {
    if (!n)
        throw new Error(e || "Assertion failed")
}
class Ss {
    constructor(e, t) {
        this.payer = void 0,
        this.keyMetaMap = void 0,
        this.payer = e,
        this.keyMetaMap = t
    }
    static compile(e, t) {
        const r = new Map
          , s = o => {
            const a = o.toBase58();
            let l = r.get(a);
            return l === void 0 && (l = {
                isSigner: !1,
                isWritable: !1,
                isInvoked: !1
            },
            r.set(a, l)),
            l
        }
          , i = s(t);
        i.isSigner = !0,
        i.isWritable = !0;
        for (const o of e) {
            s(o.programId).isInvoked = !0;
            for (const a of o.keys) {
                const l = s(a.pubkey);
                l.isSigner || (l.isSigner = a.isSigner),
                l.isWritable || (l.isWritable = a.isWritable)
            }
        }
        return new Ss(t,r)
    }
    getMessageComponents() {
        const e = [...this.keyMetaMap.entries()];
        $e(e.length <= 256, "Max static account keys length exceeded");
        const t = e.filter( ([,l]) => l.isSigner && l.isWritable)
          , r = e.filter( ([,l]) => l.isSigner && !l.isWritable)
          , s = e.filter( ([,l]) => !l.isSigner && l.isWritable)
          , i = e.filter( ([,l]) => !l.isSigner && !l.isWritable)
          , o = {
            numRequiredSignatures: t.length + r.length,
            numReadonlySignedAccounts: r.length,
            numReadonlyUnsignedAccounts: i.length
        };
        {
            $e(t.length > 0, "Expected at least one writable signer key");
            const [l] = t[0];
            $e(l === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
        }
        const a = [...t.map( ([l]) => new he(l)), ...r.map( ([l]) => new he(l)), ...s.map( ([l]) => new he(l)), ...i.map( ([l]) => new he(l))];
        return [o, a]
    }
    extractTableLookup(e) {
        const [t,r] = this.drainKeysFoundInLookupTable(e.state.addresses, o => !o.isSigner && !o.isInvoked && o.isWritable)
          , [s,i] = this.drainKeysFoundInLookupTable(e.state.addresses, o => !o.isSigner && !o.isInvoked && !o.isWritable);
        if (!(t.length === 0 && s.length === 0))
            return [{
                accountKey: e.key,
                writableIndexes: t,
                readonlyIndexes: s
            }, {
                writable: r,
                readonly: i
            }]
    }
    drainKeysFoundInLookupTable(e, t) {
        const r = new Array
          , s = new Array;
        for (const [i,o] of this.keyMetaMap.entries())
            if (t(o)) {
                const a = new he(i)
                  , l = e.findIndex(m => m.equals(a));
                l >= 0 && ($e(l < 256, "Max lookup table index exceeded"),
                r.push(l),
                s.push(a),
                this.keyMetaMap.delete(i))
            }
        return [r, s]
    }
}
const tl = "Reached end of buffer unexpectedly";
function An(n) {
    if (n.length === 0)
        throw new Error(tl);
    return n.shift()
}
function Xt(n, ...e) {
    const [t] = e;
    if (e.length === 2 ? t + (e[1] ?? 0) > n.length : t >= n.length)
        throw new Error(tl);
    return n.splice(...e)
}
class Rn {
    constructor(e) {
        this.header = void 0,
        this.accountKeys = void 0,
        this.recentBlockhash = void 0,
        this.instructions = void 0,
        this.indexToProgramIds = new Map,
        this.header = e.header,
        this.accountKeys = e.accountKeys.map(t => new he(t)),
        this.recentBlockhash = e.recentBlockhash,
        this.instructions = e.instructions,
        this.instructions.forEach(t => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]))
    }
    get version() {
        return "legacy"
    }
    get staticAccountKeys() {
        return this.accountKeys
    }
    get compiledInstructions() {
        return this.instructions.map(e => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: It.decode(e.data)
        }))
    }
    get addressTableLookups() {
        return []
    }
    getAccountKeys() {
        return new Gi(this.staticAccountKeys)
    }
    static compile(e) {
        const t = Ss.compile(e.instructions, e.payerKey)
          , [r,s] = t.getMessageComponents()
          , o = new Gi(s).compileInstructions(e.instructions).map(a => ({
            programIdIndex: a.programIdIndex,
            accounts: a.accountKeyIndexes,
            data: It.encode(a.data)
        }));
        return new Rn({
            header: r,
            accountKeys: s,
            recentBlockhash: e.recentBlockhash,
            instructions: o
        })
    }
    isAccountSigner(e) {
        return e < this.header.numRequiredSignatures
    }
    isAccountWritable(e) {
        const t = this.header.numRequiredSignatures;
        if (e >= this.header.numRequiredSignatures) {
            const r = e - t
              , i = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
            return r < i
        } else {
            const r = t - this.header.numReadonlySignedAccounts;
            return e < r
        }
    }
    isProgramId(e) {
        return this.indexToProgramIds.has(e)
    }
    programIds() {
        return [...this.indexToProgramIds.values()]
    }
    nonProgramIds() {
        return this.accountKeys.filter( (e, t) => !this.isProgramId(t))
    }
    serialize() {
        const e = this.accountKeys.length;
        let t = [];
        Yt(t, e);
        const r = this.instructions.map(E => {
            const {accounts: B, programIdIndex: k} = E
              , O = Array.from(It.decode(E.data));
            let R = [];
            Yt(R, B.length);
            let A = [];
            return Yt(A, O.length),
            {
                programIdIndex: k,
                keyIndicesCount: _e.from(R),
                keyIndices: B,
                dataLength: _e.from(A),
                data: O
            }
        }
        );
        let s = [];
        Yt(s, r.length);
        let i = _e.alloc(Mr);
        _e.from(s).copy(i);
        let o = s.length;
        r.forEach(E => {
            const k = ae([Me("programIdIndex"), De(E.keyIndicesCount.length, "keyIndicesCount"), Dt(Me("keyIndex"), E.keyIndices.length, "keyIndices"), De(E.dataLength.length, "dataLength"), Dt(Me("userdatum"), E.data.length, "data")]).encode(E, i, o);
            o += k
        }
        ),
        i = i.slice(0, o);
        const a = ae([De(1, "numRequiredSignatures"), De(1, "numReadonlySignedAccounts"), De(1, "numReadonlyUnsignedAccounts"), De(t.length, "keyCount"), Dt(Ae("key"), e, "keys"), Ae("recentBlockhash")])
          , l = {
            numRequiredSignatures: _e.from([this.header.numRequiredSignatures]),
            numReadonlySignedAccounts: _e.from([this.header.numReadonlySignedAccounts]),
            numReadonlyUnsignedAccounts: _e.from([this.header.numReadonlyUnsignedAccounts]),
            keyCount: _e.from(t),
            keys: this.accountKeys.map(E => Nr(E.toBytes())),
            recentBlockhash: It.decode(this.recentBlockhash)
        };
        let m = _e.alloc(2048);
        const h = a.encode(l, m);
        return i.copy(m, h),
        m.slice(0, h + i.length)
    }
    static from(e) {
        let t = [...e];
        const r = An(t);
        if (r !== (r & ma))
            throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
        const s = An(t)
          , i = An(t)
          , o = Jt(t);
        let a = [];
        for (let B = 0; B < o; B++) {
            const k = Xt(t, 0, Hn);
            a.push(new he(_e.from(k)))
        }
        const l = Xt(t, 0, Hn)
          , m = Jt(t);
        let h = [];
        for (let B = 0; B < m; B++) {
            const k = An(t)
              , O = Jt(t)
              , R = Xt(t, 0, O)
              , A = Jt(t)
              , F = Xt(t, 0, A)
              , z = It.encode(_e.from(F));
            h.push({
                programIdIndex: k,
                accounts: R,
                data: z
            })
        }
        const E = {
            header: {
                numRequiredSignatures: r,
                numReadonlySignedAccounts: s,
                numReadonlyUnsignedAccounts: i
            },
            recentBlockhash: It.encode(_e.from(l)),
            accountKeys: a,
            instructions: h
        };
        return new Rn(E)
    }
}
class ii {
    constructor(e) {
        this.header = void 0,
        this.staticAccountKeys = void 0,
        this.recentBlockhash = void 0,
        this.compiledInstructions = void 0,
        this.addressTableLookups = void 0,
        this.header = e.header,
        this.staticAccountKeys = e.staticAccountKeys,
        this.recentBlockhash = e.recentBlockhash,
        this.compiledInstructions = e.compiledInstructions,
        this.addressTableLookups = e.addressTableLookups
    }
    get version() {
        return 0
    }
    get numAccountKeysFromLookups() {
        let e = 0;
        for (const t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
        return e
    }
    getAccountKeys(e) {
        let t;
        if (e && "accountKeysFromLookups"in e && e.accountKeysFromLookups) {
            if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length)
                throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
            t = e.accountKeysFromLookups
        } else if (e && "addressLookupTableAccounts"in e && e.addressLookupTableAccounts)
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
        else if (this.addressTableLookups.length > 0)
            throw new Error("Failed to get account keys because address table lookups were not resolved");
        return new Gi(this.staticAccountKeys,t)
    }
    isAccountSigner(e) {
        return e < this.header.numRequiredSignatures
    }
    isAccountWritable(e) {
        const t = this.header.numRequiredSignatures
          , r = this.staticAccountKeys.length;
        if (e >= r) {
            const s = e - r
              , i = this.addressTableLookups.reduce( (o, a) => o + a.writableIndexes.length, 0);
            return s < i
        } else if (e >= this.header.numRequiredSignatures) {
            const s = e - t
              , o = r - t - this.header.numReadonlyUnsignedAccounts;
            return s < o
        } else {
            const s = t - this.header.numReadonlySignedAccounts;
            return e < s
        }
    }
    resolveAddressTableLookups(e) {
        const t = {
            writable: [],
            readonly: []
        };
        for (const r of this.addressTableLookups) {
            const s = e.find(i => i.key.equals(r.accountKey));
            if (!s)
                throw new Error(`Failed to find address lookup table account for table key ${r.accountKey.toBase58()}`);
            for (const i of r.writableIndexes)
                if (i < s.state.addresses.length)
                    t.writable.push(s.state.addresses[i]);
                else
                    throw new Error(`Failed to find address for index ${i} in address lookup table ${r.accountKey.toBase58()}`);
            for (const i of r.readonlyIndexes)
                if (i < s.state.addresses.length)
                    t.readonly.push(s.state.addresses[i]);
                else
                    throw new Error(`Failed to find address for index ${i} in address lookup table ${r.accountKey.toBase58()}`)
        }
        return t
    }
    static compile(e) {
        const t = Ss.compile(e.instructions, e.payerKey)
          , r = new Array
          , s = {
            writable: new Array,
            readonly: new Array
        }
          , i = e.addressLookupTableAccounts || [];
        for (const h of i) {
            const E = t.extractTableLookup(h);
            if (E !== void 0) {
                const [B,{writable: k, readonly: O}] = E;
                r.push(B),
                s.writable.push(...k),
                s.readonly.push(...O)
            }
        }
        const [o,a] = t.getMessageComponents()
          , m = new Gi(a,s).compileInstructions(e.instructions);
        return new ii({
            header: o,
            staticAccountKeys: a,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: m,
            addressTableLookups: r
        })
    }
    serialize() {
        const e = Array();
        Yt(e, this.staticAccountKeys.length);
        const t = this.serializeInstructions()
          , r = Array();
        Yt(r, this.compiledInstructions.length);
        const s = this.serializeAddressTableLookups()
          , i = Array();
        Yt(i, this.addressTableLookups.length);
        const o = ae([Me("prefix"), ae([Me("numRequiredSignatures"), Me("numReadonlySignedAccounts"), Me("numReadonlyUnsignedAccounts")], "header"), De(e.length, "staticAccountKeysLength"), Dt(Ae(), this.staticAccountKeys.length, "staticAccountKeys"), Ae("recentBlockhash"), De(r.length, "instructionsLength"), De(t.length, "serializedInstructions"), De(i.length, "addressTableLookupsLength"), De(s.length, "serializedAddressTableLookups")])
          , a = new Uint8Array(Mr)
          , m = o.encode({
            prefix: 128,
            header: this.header,
            staticAccountKeysLength: new Uint8Array(e),
            staticAccountKeys: this.staticAccountKeys.map(h => h.toBytes()),
            recentBlockhash: It.decode(this.recentBlockhash),
            instructionsLength: new Uint8Array(r),
            serializedInstructions: t,
            addressTableLookupsLength: new Uint8Array(i),
            serializedAddressTableLookups: s
        }, a);
        return a.slice(0, m)
    }
    serializeInstructions() {
        let e = 0;
        const t = new Uint8Array(Mr);
        for (const r of this.compiledInstructions) {
            const s = Array();
            Yt(s, r.accountKeyIndexes.length);
            const i = Array();
            Yt(i, r.data.length);
            const o = ae([Me("programIdIndex"), De(s.length, "encodedAccountKeyIndexesLength"), Dt(Me(), r.accountKeyIndexes.length, "accountKeyIndexes"), De(i.length, "encodedDataLength"), De(r.data.length, "data")]);
            e += o.encode({
                programIdIndex: r.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(s),
                accountKeyIndexes: r.accountKeyIndexes,
                encodedDataLength: new Uint8Array(i),
                data: r.data
            }, t, e)
        }
        return t.slice(0, e)
    }
    serializeAddressTableLookups() {
        let e = 0;
        const t = new Uint8Array(Mr);
        for (const r of this.addressTableLookups) {
            const s = Array();
            Yt(s, r.writableIndexes.length);
            const i = Array();
            Yt(i, r.readonlyIndexes.length);
            const o = ae([Ae("accountKey"), De(s.length, "encodedWritableIndexesLength"), Dt(Me(), r.writableIndexes.length, "writableIndexes"), De(i.length, "encodedReadonlyIndexesLength"), Dt(Me(), r.readonlyIndexes.length, "readonlyIndexes")]);
            e += o.encode({
                accountKey: r.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(s),
                writableIndexes: r.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(i),
                readonlyIndexes: r.readonlyIndexes
            }, t, e)
        }
        return t.slice(0, e)
    }
    static deserialize(e) {
        let t = [...e];
        const r = An(t)
          , s = r & ma;
        $e(r !== s, "Expected versioned message but received legacy message");
        const i = s;
        $e(i === 0, `Expected versioned message with version 0 but found version ${i}`);
        const o = {
            numRequiredSignatures: An(t),
            numReadonlySignedAccounts: An(t),
            numReadonlyUnsignedAccounts: An(t)
        }
          , a = []
          , l = Jt(t);
        for (let O = 0; O < l; O++)
            a.push(new he(Xt(t, 0, Hn)));
        const m = It.encode(Xt(t, 0, Hn))
          , h = Jt(t)
          , E = [];
        for (let O = 0; O < h; O++) {
            const R = An(t)
              , A = Jt(t)
              , F = Xt(t, 0, A)
              , z = Jt(t)
              , q = new Uint8Array(Xt(t, 0, z));
            E.push({
                programIdIndex: R,
                accountKeyIndexes: F,
                data: q
            })
        }
        const B = Jt(t)
          , k = [];
        for (let O = 0; O < B; O++) {
            const R = new he(Xt(t, 0, Hn))
              , A = Jt(t)
              , F = Xt(t, 0, A)
              , z = Jt(t)
              , q = Xt(t, 0, z);
            k.push({
                accountKey: R,
                writableIndexes: F,
                readonlyIndexes: q
            })
        }
        return new ii({
            header: o,
            staticAccountKeys: a,
            recentBlockhash: m,
            compiledInstructions: E,
            addressTableLookups: k
        })
    }
}
const ga = {
    deserializeMessageVersion(n) {
        const e = n[0]
          , t = e & ma;
        return t === e ? "legacy" : t
    },
    deserialize: n => {
        const e = ga.deserializeMessageVersion(n);
        if (e === "legacy")
            return Rn.from(n);
        if (e === 0)
            return ii.deserialize(n);
        throw new Error(`Transaction message version ${e} deserialization is not supported`)
    }
};
let Nn = function(n) {
    return n[n.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED",
    n[n.PROCESSED = 1] = "PROCESSED",
    n[n.TIMED_OUT = 2] = "TIMED_OUT",
    n[n.NONCE_INVALID = 3] = "NONCE_INVALID",
    n
}({});
const Rp = _e.alloc(Ki).fill(0);
class oc {
    constructor(e) {
        this.keys = void 0,
        this.programId = void 0,
        this.data = _e.alloc(0),
        this.programId = e.programId,
        this.keys = e.keys,
        e.data && (this.data = e.data)
    }
    toJSON() {
        return {
            keys: this.keys.map( ({pubkey: e, isSigner: t, isWritable: r}) => ({
                pubkey: e.toJSON(),
                isSigner: t,
                isWritable: r
            })),
            programId: this.programId.toJSON(),
            data: [...this.data]
        }
    }
}
class In {
    get signature() {
        return this.signatures.length > 0 ? this.signatures[0].signature : null
    }
    constructor(e) {
        if (this.signatures = [],
        this.feePayer = void 0,
        this.instructions = [],
        this.recentBlockhash = void 0,
        this.lastValidBlockHeight = void 0,
        this.nonceInfo = void 0,
        this.minNonceContextSlot = void 0,
        this._message = void 0,
        this._json = void 0,
        !!e)
            if (e.feePayer && (this.feePayer = e.feePayer),
            e.signatures && (this.signatures = e.signatures),
            Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                const {minContextSlot: t, nonceInfo: r} = e;
                this.minNonceContextSlot = t,
                this.nonceInfo = r
            } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
                const {blockhash: t, lastValidBlockHeight: r} = e;
                this.recentBlockhash = t,
                this.lastValidBlockHeight = r
            } else {
                const {recentBlockhash: t, nonceInfo: r} = e;
                r && (this.nonceInfo = r),
                this.recentBlockhash = t
            }
    }
    toJSON() {
        return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
            } : null,
            instructions: this.instructions.map(e => e.toJSON()),
            signers: this.signatures.map( ({publicKey: e}) => e.toJSON())
        }
    }
    add(...e) {
        if (e.length === 0)
            throw new Error("No instructions");
        return e.forEach(t => {
            "instructions"in t ? this.instructions = this.instructions.concat(t.instructions) : "data"in t && "programId"in t && "keys"in t ? this.instructions.push(t) : this.instructions.push(new oc(t))
        }
        ),
        this
    }
    compileMessage() {
        if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
            return this._message;
        let e, t;
        if (this.nonceInfo ? (e = this.nonceInfo.nonce,
        this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [this.nonceInfo.nonceInstruction, ...this.instructions] : t = this.instructions) : (e = this.recentBlockhash,
        t = this.instructions),
        !e)
            throw new Error("Transaction recentBlockhash required");
        t.length < 1 && console.warn("No instructions provided");
        let r;
        if (this.feePayer)
            r = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey)
            r = this.signatures[0].publicKey;
        else
            throw new Error("Transaction fee payer required");
        for (let R = 0; R < t.length; R++)
            if (t[R].programId === void 0)
                throw new Error(`Transaction instruction index ${R} has undefined program id`);
        const s = []
          , i = [];
        t.forEach(R => {
            R.keys.forEach(F => {
                i.push({
                    ...F
                })
            }
            );
            const A = R.programId.toString();
            s.includes(A) || s.push(A)
        }
        ),
        s.forEach(R => {
            i.push({
                pubkey: new he(R),
                isSigner: !1,
                isWritable: !1
            })
        }
        );
        const o = [];
        i.forEach(R => {
            const A = R.pubkey.toString()
              , F = o.findIndex(z => z.pubkey.toString() === A);
            F > -1 ? (o[F].isWritable = o[F].isWritable || R.isWritable,
            o[F].isSigner = o[F].isSigner || R.isSigner) : o.push(R)
        }
        ),
        o.sort(function(R, A) {
            if (R.isSigner !== A.isSigner)
                return R.isSigner ? -1 : 1;
            if (R.isWritable !== A.isWritable)
                return R.isWritable ? -1 : 1;
            const F = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower"
            };
            return R.pubkey.toBase58().localeCompare(A.pubkey.toBase58(), "en", F)
        });
        const a = o.findIndex(R => R.pubkey.equals(r));
        if (a > -1) {
            const [R] = o.splice(a, 1);
            R.isSigner = !0,
            R.isWritable = !0,
            o.unshift(R)
        } else
            o.unshift({
                pubkey: r,
                isSigner: !0,
                isWritable: !0
            });
        for (const R of this.signatures) {
            const A = o.findIndex(F => F.pubkey.equals(R.publicKey));
            if (A > -1)
                o[A].isSigner || (o[A].isSigner = !0,
                console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
            else
                throw new Error(`unknown signer: ${R.publicKey.toString()}`)
        }
        let l = 0
          , m = 0
          , h = 0;
        const E = []
          , B = [];
        o.forEach( ({pubkey: R, isSigner: A, isWritable: F}) => {
            A ? (E.push(R.toString()),
            l += 1,
            F || (m += 1)) : (B.push(R.toString()),
            F || (h += 1))
        }
        );
        const k = E.concat(B)
          , O = t.map(R => {
            const {data: A, programId: F} = R;
            return {
                programIdIndex: k.indexOf(F.toString()),
                accounts: R.keys.map(z => k.indexOf(z.pubkey.toString())),
                data: It.encode(A)
            }
        }
        );
        return O.forEach(R => {
            $e(R.programIdIndex >= 0),
            R.accounts.forEach(A => $e(A >= 0))
        }
        ),
        new Rn({
            header: {
                numRequiredSignatures: l,
                numReadonlySignedAccounts: m,
                numReadonlyUnsignedAccounts: h
            },
            accountKeys: k,
            recentBlockhash: e,
            instructions: O
        })
    }
    _compile() {
        const e = this.compileMessage()
          , t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
        return this.signatures.length === t.length && this.signatures.every( (s, i) => t[i].equals(s.publicKey)) || (this.signatures = t.map(r => ({
            signature: null,
            publicKey: r
        }))),
        e
    }
    serializeMessage() {
        return this._compile().serialize()
    }
    async getEstimatedFee(e) {
        return (await e.getFeeForMessage(this.compileMessage())).value
    }
    setSigners(...e) {
        if (e.length === 0)
            throw new Error("No signers");
        const t = new Set;
        this.signatures = e.filter(r => {
            const s = r.toString();
            return t.has(s) ? !1 : (t.add(s),
            !0)
        }
        ).map(r => ({
            signature: null,
            publicKey: r
        }))
    }
    sign(...e) {
        if (e.length === 0)
            throw new Error("No signers");
        const t = new Set
          , r = [];
        for (const i of e) {
            const o = i.publicKey.toString();
            t.has(o) || (t.add(o),
            r.push(i))
        }
        this.signatures = r.map(i => ({
            signature: null,
            publicKey: i.publicKey
        }));
        const s = this._compile();
        this._partialSign(s, ...r)
    }
    partialSign(...e) {
        if (e.length === 0)
            throw new Error("No signers");
        const t = new Set
          , r = [];
        for (const i of e) {
            const o = i.publicKey.toString();
            t.has(o) || (t.add(o),
            r.push(i))
        }
        const s = this._compile();
        this._partialSign(s, ...r)
    }
    _partialSign(e, ...t) {
        const r = e.serialize();
        t.forEach(s => {
            const i = Yu(r, s.secretKey);
            this._addSignature(s.publicKey, Nr(i))
        }
        )
    }
    addSignature(e, t) {
        this._compile(),
        this._addSignature(e, t)
    }
    _addSignature(e, t) {
        $e(t.length === 64);
        const r = this.signatures.findIndex(s => e.equals(s.publicKey));
        if (r < 0)
            throw new Error(`unknown signer: ${e.toString()}`);
        this.signatures[r].signature = _e.from(t)
    }
    verifySignatures(e=!0) {
        return !this._getMessageSignednessErrors(this.serializeMessage(), e)
    }
    _getMessageSignednessErrors(e, t) {
        const r = {};
        for (const {signature: s, publicKey: i} of this.signatures)
            s === null ? t && (r.missing || (r.missing = [])).push(i) : vp(s, e, i.toBytes()) || (r.invalid || (r.invalid = [])).push(i);
        return r.invalid || r.missing ? r : void 0
    }
    serialize(e) {
        const {requireAllSignatures: t, verifySignatures: r} = Object.assign({
            requireAllSignatures: !0,
            verifySignatures: !0
        }, e)
          , s = this.serializeMessage();
        if (r) {
            const i = this._getMessageSignednessErrors(s, t);
            if (i) {
                let o = "Signature verification failed.";
                throw i.invalid && (o += `
Invalid signature for public key${i.invalid.length === 1 ? "" : "(s)"} [\`${i.invalid.map(a => a.toBase58()).join("`, `")}\`].`),
                i.missing && (o += `
Missing signature for public key${i.missing.length === 1 ? "" : "(s)"} [\`${i.missing.map(a => a.toBase58()).join("`, `")}\`].`),
                new Error(o)
            }
        }
        return this._serialize(s)
    }
    _serialize(e) {
        const {signatures: t} = this
          , r = [];
        Yt(r, t.length);
        const s = r.length + t.length * 64 + e.length
          , i = _e.alloc(s);
        return $e(t.length < 256),
        _e.from(r).copy(i, 0),
        t.forEach( ({signature: o}, a) => {
            o !== null && ($e(o.length === 64, "signature has invalid length"),
            _e.from(o).copy(i, r.length + a * 64))
        }
        ),
        e.copy(i, r.length + t.length * 64),
        $e(i.length <= Mr, `Transaction too large: ${i.length} > ${Mr}`),
        i
    }
    get keys() {
        return $e(this.instructions.length === 1),
        this.instructions[0].keys.map(e => e.pubkey)
    }
    get programId() {
        return $e(this.instructions.length === 1),
        this.instructions[0].programId
    }
    get data() {
        return $e(this.instructions.length === 1),
        this.instructions[0].data
    }
    static from(e) {
        let t = [...e];
        const r = Jt(t);
        let s = [];
        for (let i = 0; i < r; i++) {
            const o = Xt(t, 0, Ki);
            s.push(It.encode(_e.from(o)))
        }
        return In.populate(Rn.from(t), s)
    }
    static populate(e, t=[]) {
        const r = new In;
        return r.recentBlockhash = e.recentBlockhash,
        e.header.numRequiredSignatures > 0 && (r.feePayer = e.accountKeys[0]),
        t.forEach( (s, i) => {
            const o = {
                signature: s == It.encode(Rp) ? null : It.decode(s),
                publicKey: e.accountKeys[i]
            };
            r.signatures.push(o)
        }
        ),
        e.instructions.forEach(s => {
            const i = s.accounts.map(o => {
                const a = e.accountKeys[o];
                return {
                    pubkey: a,
                    isSigner: r.signatures.some(l => l.publicKey.toString() === a.toString()) || e.isAccountSigner(o),
                    isWritable: e.isAccountWritable(o)
                }
            }
            );
            r.instructions.push(new oc({
                keys: i,
                programId: e.accountKeys[s.programIdIndex],
                data: It.decode(s.data)
            }))
        }
        ),
        r._message = e,
        r._json = r.toJSON(),
        r
    }
}
class ya {
    get version() {
        return this.message.version
    }
    constructor(e, t) {
        if (this.signatures = void 0,
        this.message = void 0,
        t !== void 0)
            $e(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"),
            this.signatures = t;
        else {
            const r = [];
            for (let s = 0; s < e.header.numRequiredSignatures; s++)
                r.push(new Uint8Array(Ki));
            this.signatures = r
        }
        this.message = e
    }
    serialize() {
        const e = this.message.serialize()
          , t = Array();
        Yt(t, this.signatures.length);
        const r = ae([De(t.length, "encodedSignaturesLength"), Dt(Sp(), this.signatures.length, "signatures"), De(e.length, "serializedMessage")])
          , s = new Uint8Array(2048)
          , i = r.encode({
            encodedSignaturesLength: new Uint8Array(t),
            signatures: this.signatures,
            serializedMessage: e
        }, s);
        return s.slice(0, i)
    }
    static deserialize(e) {
        let t = [...e];
        const r = []
          , s = Jt(t);
        for (let o = 0; o < s; o++)
            r.push(new Uint8Array(Xt(t, 0, Ki)));
        const i = ga.deserialize(new Uint8Array(t));
        return new ya(i,r)
    }
    sign(e) {
        const t = this.message.serialize()
          , r = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
        for (const s of e) {
            const i = r.findIndex(o => o.equals(s.publicKey));
            $e(i >= 0, `Cannot sign with non signer key ${s.publicKey.toBase58()}`),
            this.signatures[i] = Yu(t, s.secretKey)
        }
    }
    addSignature(e, t) {
        $e(t.byteLength === 64, "Signature must be 64 bytes long");
        const s = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(i => i.equals(e));
        $e(s >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`),
        this.signatures[s] = t
    }
}
const Mp = 160
  , Tp = 64
  , Op = Mp / Tp
  , Cp = 1e3 / Op;
new he("SysvarC1ock11111111111111111111111111111111");
new he("SysvarEpochSchedu1e111111111111111111111111");
new he("Sysvar1nstructions1111111111111111111111111");
new he("SysvarRecentB1ockHashes11111111111111111111");
new he("SysvarRent111111111111111111111111111111111");
new he("SysvarRewards111111111111111111111111111111");
new he("SysvarS1otHashes111111111111111111111111111");
new he("SysvarS1otHistory11111111111111111111111111");
new he("SysvarStakeHistory1111111111111111111111111");
class ac extends Error {
    constructor({action: e, signature: t, transactionMessage: r, logs: s}) {
        const i = s ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. ` : ""
          , o = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.";
        let a;
        switch (e) {
        case "send":
            a = `Transaction ${t} resulted in an error. 
${r}. ` + i + o;
            break;
        case "simulate":
            a = `Simulation failed. 
Message: ${r}. 
` + i + o;
            break;
        default:
            a = `Unknown action '${(l => l)(e)}'`
        }
        super(a),
        this.signature = void 0,
        this.transactionMessage = void 0,
        this.transactionLogs = void 0,
        this.signature = t,
        this.transactionMessage = r,
        this.transactionLogs = s || void 0
    }
    get transactionError() {
        return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
        }
    }
    get logs() {
        const e = this.transactionLogs;
        if (!(e != null && typeof e == "object" && "then"in e))
            return e
    }
    async getLogs(e) {
        return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise( (t, r) => {
            e.getTransaction(this.signature).then(s => {
                if (s && s.meta && s.meta.logMessages) {
                    const i = s.meta.logMessages;
                    this.transactionLogs = i,
                    t(i)
                } else
                    r(new Error("Log messages not found"))
            }
            ).catch(r)
        }
        )),
        await this.transactionLogs
    }
}
class ue extends Error {
    constructor({code: e, message: t, data: r}, s) {
        super(s != null ? `${s}: ${t}` : t),
        this.code = void 0,
        this.data = void 0,
        this.code = e,
        this.data = r,
        this.name = "SolanaJSONRPCError"
    }
}
function kr(n) {
    return new Promise(e => setTimeout(e, n))
}
const Lp = kt("lamportsPerSignature")
  , nl = ae([le("version"), le("state"), Ae("authorizedPubkey"), Ae("nonce"), ae([Lp], "feeCalculator")]);
nl.span;
class wa {
    constructor(e) {
        this.authorizedPubkey = void 0,
        this.nonce = void 0,
        this.feeCalculator = void 0,
        this.authorizedPubkey = e.authorizedPubkey,
        this.nonce = e.nonce,
        this.feeCalculator = e.feeCalculator
    }
    static fromAccountData(e) {
        const t = nl.decode(Nr(e), 0);
        return new wa({
            authorizedPubkey: new he(t.authorizedPubkey),
            nonce: new he(t.nonce).toString(),
            feeCalculator: t.feeCalculator
        })
    }
}
function Pr(n) {
    const e = De(8, n)
      , t = e.decode.bind(e)
      , r = e.encode.bind(e)
      , s = e
      , i = ep();
    return s.decode = (o, a) => {
        const l = t(o, a);
        return i.decode(l)
    }
    ,
    s.encode = (o, a, l) => {
        const m = i.encode(o);
        return r(m, a, l)
    }
    ,
    s
}
Object.freeze({
    Create: {
        index: 0,
        layout: ae([le("instruction"), Gt("lamports"), Gt("space"), Ae("programId")])
    },
    Assign: {
        index: 1,
        layout: ae([le("instruction"), Ae("programId")])
    },
    Transfer: {
        index: 2,
        layout: ae([le("instruction"), Pr("lamports")])
    },
    CreateWithSeed: {
        index: 3,
        layout: ae([le("instruction"), Ae("base"), Br("seed"), Gt("lamports"), Gt("space"), Ae("programId")])
    },
    AdvanceNonceAccount: {
        index: 4,
        layout: ae([le("instruction")])
    },
    WithdrawNonceAccount: {
        index: 5,
        layout: ae([le("instruction"), Gt("lamports")])
    },
    InitializeNonceAccount: {
        index: 6,
        layout: ae([le("instruction"), Ae("authorized")])
    },
    AuthorizeNonceAccount: {
        index: 7,
        layout: ae([le("instruction"), Ae("authorized")])
    },
    Allocate: {
        index: 8,
        layout: ae([le("instruction"), Gt("space")])
    },
    AllocateWithSeed: {
        index: 9,
        layout: ae([le("instruction"), Ae("base"), Br("seed"), Gt("space"), Ae("programId")])
    },
    AssignWithSeed: {
        index: 10,
        layout: ae([le("instruction"), Ae("base"), Br("seed"), Ae("programId")])
    },
    TransferWithSeed: {
        index: 11,
        layout: ae([le("instruction"), Pr("lamports"), Br("seed"), Ae("programId")])
    },
    UpgradeNonceAccount: {
        index: 12,
        layout: ae([le("instruction")])
    }
});
new he("11111111111111111111111111111111");
new he("BPFLoader2111111111111111111111111111111111");
function Np(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var fo, cc;
function Pp() {
    if (cc)
        return fo;
    cc = 1;
    var n = Object.prototype.toString
      , e = Object.keys || function(r) {
        var s = [];
        for (var i in r)
            s.push(i);
        return s
    }
    ;
    function t(r, s) {
        var i, o, a, l, m, h, E;
        if (r === !0)
            return "true";
        if (r === !1)
            return "false";
        switch (typeof r) {
        case "object":
            if (r === null)
                return null;
            if (r.toJSON && typeof r.toJSON == "function")
                return t(r.toJSON(), s);
            if (E = n.call(r),
            E === "[object Array]") {
                for (a = "[",
                o = r.length - 1,
                i = 0; i < o; i++)
                    a += t(r[i], !0) + ",";
                return o > -1 && (a += t(r[i], !0)),
                a + "]"
            } else if (E === "[object Object]") {
                for (l = e(r).sort(),
                o = l.length,
                a = "",
                i = 0; i < o; )
                    m = l[i],
                    h = t(r[m], !1),
                    h !== void 0 && (a && (a += ","),
                    a += JSON.stringify(m) + ":" + h),
                    i++;
                return "{" + a + "}"
            } else
                return JSON.stringify(r);
        case "function":
        case "undefined":
            return s ? null : void 0;
        case "string":
            return JSON.stringify(r);
        default:
            return isFinite(r) ? r : null
        }
    }
    return fo = function(r) {
        var s = t(r, !1);
        if (s !== void 0)
            return "" + s
    }
    ,
    fo
}
var Up = Pp()
  , uc = Np(Up);
const Kr = 32;
function ho(n) {
    let e = 0;
    for (; n > 1; )
        n /= 2,
        e++;
    return e
}
function Fp(n) {
    return n === 0 ? 1 : (n--,
    n |= n >> 1,
    n |= n >> 2,
    n |= n >> 4,
    n |= n >> 8,
    n |= n >> 16,
    n |= n >> 32,
    n + 1)
}
class Dp {
    constructor(e, t, r, s, i) {
        this.slotsPerEpoch = void 0,
        this.leaderScheduleSlotOffset = void 0,
        this.warmup = void 0,
        this.firstNormalEpoch = void 0,
        this.firstNormalSlot = void 0,
        this.slotsPerEpoch = e,
        this.leaderScheduleSlotOffset = t,
        this.warmup = r,
        this.firstNormalEpoch = s,
        this.firstNormalSlot = i
    }
    getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0]
    }
    getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
            const t = ho(Fp(e + Kr + 1)) - ho(Kr) - 1
              , r = this.getSlotsInEpoch(t)
              , s = e - (r - Kr);
            return [t, s]
        } else {
            const t = e - this.firstNormalSlot
              , r = Math.floor(t / this.slotsPerEpoch)
              , s = this.firstNormalEpoch + r
              , i = t % this.slotsPerEpoch;
            return [s, i]
        }
    }
    getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * Kr : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
    }
    getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
    }
    getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch ? Math.pow(2, e + ho(Kr)) : this.slotsPerEpoch
    }
}
var jp = globalThis.fetch;
class zp extends bp {
    constructor(e, t, r) {
        const s = i => {
            const o = yp(i, {
                autoconnect: !0,
                max_reconnects: 5,
                reconnect: !0,
                reconnect_interval: 1e3,
                ...t
            });
            return "socket"in o ? this.underlyingSocket = o.socket : this.underlyingSocket = o,
            o
        }
        ;
        super(s, e, t, r),
        this.underlyingSocket = void 0
    }
    call(...e) {
        var r;
        const t = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
        return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
    }
    notify(...e) {
        var r;
        const t = (r = this.underlyingSocket) == null ? void 0 : r.readyState;
        return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
    }
}
function qp(n, e) {
    let t;
    try {
        t = n.layout.decode(e)
    } catch (r) {
        throw new Error("invalid instruction; " + r)
    }
    if (t.typeIndex !== n.index)
        throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${n.index}`);
    return t
}
const lc = 56;
class fc {
    constructor(e) {
        this.key = void 0,
        this.state = void 0,
        this.key = e.key,
        this.state = e.state
    }
    isActive() {
        const e = BigInt("0xffffffffffffffff");
        return this.state.deactivationSlot === e
    }
    static deserialize(e) {
        const t = qp($p, e)
          , r = e.length - lc;
        $e(r >= 0, "lookup table is invalid"),
        $e(r % 32 === 0, "lookup table is invalid");
        const s = r / 32
          , {addresses: i} = ae([Dt(Ae(), s, "addresses")]).decode(e.slice(lc));
        return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority: t.authority.length !== 0 ? new he(t.authority[0]) : void 0,
            addresses: i.map(o => new he(o))
        }
    }
}
const $p = {
    index: 1,
    layout: ae([le("typeIndex"), Pr("deactivationSlot"), kt("lastExtendedSlot"), Me("lastExtendedStartIndex"), Me(), Dt(Ae(), er(Me(), -1), "authority")])
}
  , Hp = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function Vp(n) {
    const e = n.match(Hp);
    if (e == null)
        throw TypeError(`Failed to validate endpoint URL \`${n}\``);
    const [t,r,s,i] = e
      , o = n.startsWith("https:") ? "wss:" : "ws:"
      , a = s == null ? null : parseInt(s.slice(1), 10)
      , l = a == null ? "" : `:${a + 1}`;
    return `${o}//${r}${l}${i}`
}
const Ge = Si(ha(he), G(), n => new he(n))
  , rl = pa([G(), Ke("base64")])
  , ba = Si(ha(_e), rl, n => _e.from(n[0], "base64"))
  , Zp = 30 * 1e3;
function Wp(n) {
    if (/^https?:/.test(n) === !1)
        throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return n
}
function Ne(n) {
    let e, t;
    if (typeof n == "string")
        e = n;
    else if (n) {
        const {commitment: r, ...s} = n;
        e = r,
        t = s
    }
    return {
        commitment: e,
        config: t
    }
}
function dc(n) {
    return n.map(e => "memcmp"in e ? {
        ...e,
        memcmp: {
            ...e.memcmp,
            encoding: e.memcmp.encoding ?? "base58"
        }
    } : e)
}
function il(n) {
    return $t([V({
        jsonrpc: Ke("2.0"),
        id: G(),
        result: n
    }), V({
        jsonrpc: Ke("2.0"),
        id: G(),
        error: V({
            code: $r(),
            message: G(),
            data: fe(ap())
        })
    })])
}
const Kp = il($r());
function ve(n) {
    return Si(il(n), Kp, e => "error"in e ? e : {
        ...e,
        result: Y(e.result, n)
    })
}
function nt(n) {
    return ve(V({
        context: V({
            slot: L()
        }),
        value: n
    }))
}
function ks(n) {
    return V({
        context: V({
            slot: L()
        }),
        value: n
    })
}
function po(n, e) {
    return n === 0 ? new ii({
        header: e.header,
        staticAccountKeys: e.accountKeys.map(t => new he(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map(t => ({
            programIdIndex: t.programIdIndex,
            accountKeyIndexes: t.accounts,
            data: It.decode(t.data)
        })),
        addressTableLookups: e.addressTableLookups
    }) : new Rn(e)
}
const Gp = V({
    foundation: L(),
    foundationTerm: L(),
    initial: L(),
    taper: L(),
    terminal: L()
})
  , Jp = ve(ne(re(V({
    epoch: L(),
    effectiveSlot: L(),
    amount: L(),
    postBalance: L(),
    commission: fe(re(L()))
}))))
  , Yp = ne(V({
    slot: L(),
    prioritizationFee: L()
}))
  , Xp = V({
    total: L(),
    validator: L(),
    foundation: L(),
    epoch: L()
})
  , Qp = V({
    epoch: L(),
    slotIndex: L(),
    slotsInEpoch: L(),
    absoluteSlot: L(),
    blockHeight: fe(L()),
    transactionCount: fe(L())
})
  , em = V({
    slotsPerEpoch: L(),
    leaderScheduleSlotOffset: L(),
    warmup: gn(),
    firstNormalEpoch: L(),
    firstNormalSlot: L()
})
  , tm = Gu(G(), ne(L()))
  , hr = re($t([V({}), G()]))
  , nm = V({
    err: hr
})
  , rm = Ke("receivedSignature")
  , im = V({
    "solana-core": G(),
    "feature-set": fe(L())
})
  , sm = V({
    program: G(),
    programId: Ge,
    parsed: $r()
})
  , om = V({
    programId: Ge,
    accounts: ne(Ge),
    data: G()
})
  , hc = nt(V({
    err: re($t([V({}), G()])),
    logs: re(ne(G())),
    accounts: fe(re(ne(re(V({
        executable: gn(),
        owner: G(),
        lamports: L(),
        data: ne(G()),
        rentEpoch: fe(L())
    }))))),
    unitsConsumed: fe(L()),
    returnData: fe(re(V({
        programId: G(),
        data: pa([G(), Ke("base64")])
    }))),
    innerInstructions: fe(re(ne(V({
        index: L(),
        instructions: ne($t([sm, om]))
    }))))
}))
  , am = nt(V({
    byIdentity: Gu(G(), ne(L())),
    range: V({
        firstSlot: L(),
        lastSlot: L()
    })
}));
function cm(n, e, t, r, s, i) {
    const o = t || jp;
    let a;
    i != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let l;
    return r && (l = async (h, E) => {
        const B = await new Promise( (k, O) => {
            try {
                r(h, E, (R, A) => k([R, A]))
            } catch (R) {
                O(R)
            }
        }
        );
        return await o(...B)
    }
    ),
    new mp(async (h, E) => {
        const B = {
            method: "POST",
            body: h,
            agent: a,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, e || {}, cg)
        };
        try {
            let k = 5, O, R = 500;
            for (; l ? O = await l(n, B) : O = await o(n, B),
            !(O.status !== 429 || s === !0 || (k -= 1,
            k === 0)); )
                console.error(`Server responded with ${O.status} ${O.statusText}.  Retrying after ${R}ms delay...`),
                await kr(R),
                R *= 2;
            const A = await O.text();
            O.ok ? E(null, A) : E(new Error(`${O.status} ${O.statusText}: ${A}`))
        } catch (k) {
            k instanceof Error && E(k)
        }
    }
    ,{})
}
function um(n) {
    return (e, t) => new Promise( (r, s) => {
        n.request(e, t, (i, o) => {
            if (i) {
                s(i);
                return
            }
            r(o)
        }
        )
    }
    )
}
function lm(n) {
    return e => new Promise( (t, r) => {
        e.length === 0 && t([]);
        const s = e.map(i => n.request(i.methodName, i.args));
        n.request(s, (i, o) => {
            if (i) {
                r(i);
                return
            }
            t(o)
        }
        )
    }
    )
}
const fm = ve(Gp)
  , dm = ve(Xp)
  , hm = ve(Yp)
  , pm = ve(Qp)
  , mm = ve(em)
  , gm = ve(tm)
  , ym = ve(L())
  , wm = nt(V({
    total: L(),
    circulating: L(),
    nonCirculating: L(),
    nonCirculatingAccounts: ne(Ge)
}))
  , ko = V({
    amount: G(),
    uiAmount: re(L()),
    decimals: L(),
    uiAmountString: fe(G())
})
  , bm = nt(ne(V({
    address: Ge,
    amount: G(),
    uiAmount: re(L()),
    decimals: L(),
    uiAmountString: fe(G())
})))
  , vm = nt(ne(V({
    pubkey: Ge,
    account: V({
        executable: gn(),
        owner: Ge,
        lamports: L(),
        data: ba,
        rentEpoch: L()
    })
})))
  , Ao = V({
    program: G(),
    parsed: $r(),
    space: L()
})
  , _m = nt(ne(V({
    pubkey: Ge,
    account: V({
        executable: gn(),
        owner: Ge,
        lamports: L(),
        data: Ao,
        rentEpoch: L()
    })
})))
  , xm = nt(ne(V({
    lamports: L(),
    address: Ge
})))
  , si = V({
    executable: gn(),
    owner: Ge,
    lamports: L(),
    data: ba,
    rentEpoch: L()
})
  , Em = V({
    pubkey: Ge,
    account: si
})
  , Sm = Si($t([ha(_e), Ao]), $t([rl, Ao]), n => Array.isArray(n) ? Y(n, ba) : n)
  , Io = V({
    executable: gn(),
    owner: Ge,
    lamports: L(),
    data: Sm,
    rentEpoch: L()
})
  , km = V({
    pubkey: Ge,
    account: Io
})
  , Am = V({
    state: $t([Ke("active"), Ke("inactive"), Ke("activating"), Ke("deactivating")]),
    active: L(),
    inactive: L()
})
  , Im = ve(ne(V({
    signature: G(),
    slot: L(),
    err: hr,
    memo: re(G()),
    blockTime: fe(re(L()))
})))
  , Bm = ve(ne(V({
    signature: G(),
    slot: L(),
    err: hr,
    memo: re(G()),
    blockTime: fe(re(L()))
})))
  , Rm = V({
    subscription: L(),
    result: ks(si)
})
  , Mm = V({
    pubkey: Ge,
    account: si
})
  , Tm = V({
    subscription: L(),
    result: ks(Mm)
})
  , Om = V({
    parent: L(),
    slot: L(),
    root: L()
})
  , Cm = V({
    subscription: L(),
    result: Om
})
  , Lm = $t([V({
    type: $t([Ke("firstShredReceived"), Ke("completed"), Ke("optimisticConfirmation"), Ke("root")]),
    slot: L(),
    timestamp: L()
}), V({
    type: Ke("createdBank"),
    parent: L(),
    slot: L(),
    timestamp: L()
}), V({
    type: Ke("frozen"),
    slot: L(),
    timestamp: L(),
    stats: V({
        numTransactionEntries: L(),
        numSuccessfulTransactions: L(),
        numFailedTransactions: L(),
        maxTransactionsPerEntry: L()
    })
}), V({
    type: Ke("dead"),
    slot: L(),
    timestamp: L(),
    err: G()
})])
  , Nm = V({
    subscription: L(),
    result: Lm
})
  , Pm = V({
    subscription: L(),
    result: ks($t([nm, rm]))
})
  , Um = V({
    subscription: L(),
    result: L()
})
  , Fm = V({
    pubkey: G(),
    gossip: re(G()),
    tpu: re(G()),
    rpc: re(G()),
    version: re(G())
})
  , pc = V({
    votePubkey: G(),
    nodePubkey: G(),
    activatedStake: L(),
    epochVoteAccount: gn(),
    epochCredits: ne(pa([L(), L(), L()])),
    commission: L(),
    lastVote: L(),
    rootSlot: re(L())
})
  , Dm = ve(V({
    current: ne(pc),
    delinquent: ne(pc)
}))
  , jm = $t([Ke("processed"), Ke("confirmed"), Ke("finalized")])
  , zm = V({
    slot: L(),
    confirmations: re(L()),
    err: hr,
    confirmationStatus: fe(jm)
})
  , qm = nt(ne(re(zm)))
  , $m = ve(L())
  , sl = V({
    accountKey: Ge,
    writableIndexes: ne(L()),
    readonlyIndexes: ne(L())
})
  , va = V({
    signatures: ne(G()),
    message: V({
        accountKeys: ne(G()),
        header: V({
            numRequiredSignatures: L(),
            numReadonlySignedAccounts: L(),
            numReadonlyUnsignedAccounts: L()
        }),
        instructions: ne(V({
            accounts: ne(L()),
            data: G(),
            programIdIndex: L()
        })),
        recentBlockhash: G(),
        addressTableLookups: fe(ne(sl))
    })
})
  , ol = V({
    pubkey: Ge,
    signer: gn(),
    writable: gn(),
    source: fe($t([Ke("transaction"), Ke("lookupTable")]))
})
  , al = V({
    accountKeys: ne(ol),
    signatures: ne(G())
})
  , cl = V({
    parsed: $r(),
    program: G(),
    programId: Ge
})
  , ul = V({
    accounts: ne(Ge),
    data: G(),
    programId: Ge
})
  , Hm = $t([ul, cl])
  , Vm = $t([V({
    parsed: $r(),
    program: G(),
    programId: G()
}), V({
    accounts: ne(G()),
    data: G(),
    programId: G()
})])
  , ll = Si(Hm, Vm, n => "accounts"in n ? Y(n, ul) : Y(n, cl))
  , fl = V({
    signatures: ne(G()),
    message: V({
        accountKeys: ne(ol),
        instructions: ne(ll),
        recentBlockhash: G(),
        addressTableLookups: fe(re(ne(sl)))
    })
})
  , Ji = V({
    accountIndex: L(),
    mint: G(),
    owner: fe(G()),
    programId: fe(G()),
    uiTokenAmount: ko
})
  , dl = V({
    writable: ne(Ge),
    readonly: ne(Ge)
})
  , As = V({
    err: hr,
    fee: L(),
    innerInstructions: fe(re(ne(V({
        index: L(),
        instructions: ne(V({
            accounts: ne(L()),
            data: G(),
            programIdIndex: L()
        }))
    })))),
    preBalances: ne(L()),
    postBalances: ne(L()),
    logMessages: fe(re(ne(G()))),
    preTokenBalances: fe(re(ne(Ji))),
    postTokenBalances: fe(re(ne(Ji))),
    loadedAddresses: fe(dl),
    computeUnitsConsumed: fe(L())
})
  , _a = V({
    err: hr,
    fee: L(),
    innerInstructions: fe(re(ne(V({
        index: L(),
        instructions: ne(ll)
    })))),
    preBalances: ne(L()),
    postBalances: ne(L()),
    logMessages: fe(re(ne(G()))),
    preTokenBalances: fe(re(ne(Ji))),
    postTokenBalances: fe(re(ne(Ji))),
    loadedAddresses: fe(dl),
    computeUnitsConsumed: fe(L())
})
  , Hr = $t([Ke(0), Ke("legacy")])
  , pr = V({
    pubkey: G(),
    lamports: L(),
    postBalance: re(L()),
    rewardType: re(G()),
    commission: fe(re(L()))
})
  , Zm = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    transactions: ne(V({
        transaction: va,
        meta: re(As),
        version: fe(Hr)
    })),
    rewards: fe(ne(pr)),
    blockTime: re(L()),
    blockHeight: re(L())
})))
  , Wm = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    rewards: fe(ne(pr)),
    blockTime: re(L()),
    blockHeight: re(L())
})))
  , Km = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    transactions: ne(V({
        transaction: al,
        meta: re(As),
        version: fe(Hr)
    })),
    rewards: fe(ne(pr)),
    blockTime: re(L()),
    blockHeight: re(L())
})))
  , Gm = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    transactions: ne(V({
        transaction: fl,
        meta: re(_a),
        version: fe(Hr)
    })),
    rewards: fe(ne(pr)),
    blockTime: re(L()),
    blockHeight: re(L())
})))
  , Jm = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    transactions: ne(V({
        transaction: al,
        meta: re(_a),
        version: fe(Hr)
    })),
    rewards: fe(ne(pr)),
    blockTime: re(L()),
    blockHeight: re(L())
})))
  , Ym = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    rewards: fe(ne(pr)),
    blockTime: re(L()),
    blockHeight: re(L())
})))
  , Xm = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    transactions: ne(V({
        transaction: va,
        meta: re(As)
    })),
    rewards: fe(ne(pr)),
    blockTime: re(L())
})))
  , mc = ve(re(V({
    blockhash: G(),
    previousBlockhash: G(),
    parentSlot: L(),
    signatures: ne(G()),
    blockTime: re(L())
})))
  , mo = ve(re(V({
    slot: L(),
    meta: re(As),
    blockTime: fe(re(L())),
    transaction: va,
    version: fe(Hr)
})))
  , Ni = ve(re(V({
    slot: L(),
    transaction: fl,
    meta: re(_a),
    blockTime: fe(re(L())),
    version: fe(Hr)
})))
  , Qm = nt(V({
    blockhash: G(),
    lastValidBlockHeight: L()
}))
  , eg = nt(gn())
  , tg = V({
    slot: L(),
    numTransactions: L(),
    numSlots: L(),
    samplePeriodSecs: L()
})
  , ng = ve(ne(tg))
  , rg = nt(re(V({
    feeCalculator: V({
        lamportsPerSignature: L()
    })
})))
  , ig = ve(G())
  , sg = ve(G())
  , og = V({
    err: hr,
    logs: ne(G()),
    signature: G()
})
  , ag = V({
    result: ks(og),
    subscription: L()
})
  , cg = {
    "solana-client": "js/1.0.0-maintenance"
};
class ug {
    constructor(e, t) {
        this._commitment = void 0,
        this._confirmTransactionInitialTimeout = void 0,
        this._rpcEndpoint = void 0,
        this._rpcWsEndpoint = void 0,
        this._rpcClient = void 0,
        this._rpcRequest = void 0,
        this._rpcBatchRequest = void 0,
        this._rpcWebSocket = void 0,
        this._rpcWebSocketConnected = !1,
        this._rpcWebSocketHeartbeat = null,
        this._rpcWebSocketIdleTimeout = null,
        this._rpcWebSocketGeneration = 0,
        this._disableBlockhashCaching = !1,
        this._pollingBlockhash = !1,
        this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: []
        },
        this._nextClientSubscriptionId = 0,
        this._subscriptionDisposeFunctionsByClientSubscriptionId = {},
        this._subscriptionHashByClientSubscriptionId = {},
        this._subscriptionStateChangeCallbacksByHash = {},
        this._subscriptionCallbacksByServerSubscriptionId = {},
        this._subscriptionsByHash = {},
        this._subscriptionsAutoDisposedByRpc = new Set,
        this.getBlockHeight = ( () => {
            const m = {};
            return async h => {
                const {commitment: E, config: B} = Ne(h)
                  , k = this._buildArgs([], E, void 0, B)
                  , O = uc(k);
                return m[O] = m[O] ?? (async () => {
                    try {
                        const R = await this._rpcRequest("getBlockHeight", k)
                          , A = Y(R, ve(L()));
                        if ("error"in A)
                            throw new ue(A.error,"failed to get block height information");
                        return A.result
                    } finally {
                        delete m[O]
                    }
                }
                )(),
                await m[O]
            }
        }
        )();
        let r, s, i, o, a, l;
        t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment,
        this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout,
        r = t.wsEndpoint,
        s = t.httpHeaders,
        i = t.fetch,
        o = t.fetchMiddleware,
        a = t.disableRetryOnRateLimit,
        l = t.httpAgent),
        this._rpcEndpoint = Wp(e),
        this._rpcWsEndpoint = r || Vp(e),
        this._rpcClient = cm(e, s, i, o, a, l),
        this._rpcRequest = um(this._rpcClient),
        this._rpcBatchRequest = lm(this._rpcClient),
        this._rpcWebSocket = new zp(this._rpcWsEndpoint,{
            autoconnect: !1,
            max_reconnects: 1 / 0
        }),
        this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
        this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
        this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
        this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)),
        this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)),
        this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)),
        this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)),
        this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)),
        this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)),
        this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
    }
    get commitment() {
        return this._commitment
    }
    get rpcEndpoint() {
        return this._rpcEndpoint
    }
    async getBalanceAndContext(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgs([e.toBase58()], r, void 0, s)
          , o = await this._rpcRequest("getBalance", i)
          , a = Y(o, nt(L()));
        if ("error"in a)
            throw new ue(a.error,`failed to get balance for ${e.toBase58()}`);
        return a.result
    }
    async getBalance(e, t) {
        return await this.getBalanceAndContext(e, t).then(r => r.value).catch(r => {
            throw new Error("failed to get balance of account " + e.toBase58() + ": " + r)
        }
        )
    }
    async getBlockTime(e) {
        const t = await this._rpcRequest("getBlockTime", [e])
          , r = Y(t, ve(re(L())));
        if ("error"in r)
            throw new ue(r.error,`failed to get block time for slot ${e}`);
        return r.result
    }
    async getMinimumLedgerSlot() {
        const e = await this._rpcRequest("minimumLedgerSlot", [])
          , t = Y(e, ve(L()));
        if ("error"in t)
            throw new ue(t.error,"failed to get minimum ledger slot");
        return t.result
    }
    async getFirstAvailableBlock() {
        const e = await this._rpcRequest("getFirstAvailableBlock", [])
          , t = Y(e, ym);
        if ("error"in t)
            throw new ue(t.error,"failed to get first available block");
        return t.result
    }
    async getSupply(e) {
        let t = {};
        typeof e == "string" ? t = {
            commitment: e
        } : e ? t = {
            ...e,
            commitment: e && e.commitment || this.commitment
        } : t = {
            commitment: this.commitment
        };
        const r = await this._rpcRequest("getSupply", [t])
          , s = Y(r, wm);
        if ("error"in s)
            throw new ue(s.error,"failed to get supply");
        return s.result
    }
    async getTokenSupply(e, t) {
        const r = this._buildArgs([e.toBase58()], t)
          , s = await this._rpcRequest("getTokenSupply", r)
          , i = Y(s, nt(ko));
        if ("error"in i)
            throw new ue(i.error,"failed to get token supply");
        return i.result
    }
    async getTokenAccountBalance(e, t) {
        const r = this._buildArgs([e.toBase58()], t)
          , s = await this._rpcRequest("getTokenAccountBalance", r)
          , i = Y(s, nt(ko));
        if ("error"in i)
            throw new ue(i.error,"failed to get token account balance");
        return i.result
    }
    async getTokenAccountsByOwner(e, t, r) {
        const {commitment: s, config: i} = Ne(r);
        let o = [e.toBase58()];
        "mint"in t ? o.push({
            mint: t.mint.toBase58()
        }) : o.push({
            programId: t.programId.toBase58()
        });
        const a = this._buildArgs(o, s, "base64", i)
          , l = await this._rpcRequest("getTokenAccountsByOwner", a)
          , m = Y(l, vm);
        if ("error"in m)
            throw new ue(m.error,`failed to get token accounts owned by account ${e.toBase58()}`);
        return m.result
    }
    async getParsedTokenAccountsByOwner(e, t, r) {
        let s = [e.toBase58()];
        "mint"in t ? s.push({
            mint: t.mint.toBase58()
        }) : s.push({
            programId: t.programId.toBase58()
        });
        const i = this._buildArgs(s, r, "jsonParsed")
          , o = await this._rpcRequest("getTokenAccountsByOwner", i)
          , a = Y(o, _m);
        if ("error"in a)
            throw new ue(a.error,`failed to get token accounts owned by account ${e.toBase58()}`);
        return a.result
    }
    async getLargestAccounts(e) {
        const t = {
            ...e,
            commitment: e && e.commitment || this.commitment
        }
          , r = t.filter || t.commitment ? [t] : []
          , s = await this._rpcRequest("getLargestAccounts", r)
          , i = Y(s, xm);
        if ("error"in i)
            throw new ue(i.error,"failed to get largest accounts");
        return i.result
    }
    async getTokenLargestAccounts(e, t) {
        const r = this._buildArgs([e.toBase58()], t)
          , s = await this._rpcRequest("getTokenLargestAccounts", r)
          , i = Y(s, bm);
        if ("error"in i)
            throw new ue(i.error,"failed to get token largest accounts");
        return i.result
    }
    async getAccountInfoAndContext(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgs([e.toBase58()], r, "base64", s)
          , o = await this._rpcRequest("getAccountInfo", i)
          , a = Y(o, nt(re(si)));
        if ("error"in a)
            throw new ue(a.error,`failed to get info about account ${e.toBase58()}`);
        return a.result
    }
    async getParsedAccountInfo(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgs([e.toBase58()], r, "jsonParsed", s)
          , o = await this._rpcRequest("getAccountInfo", i)
          , a = Y(o, nt(re(Io)));
        if ("error"in a)
            throw new ue(a.error,`failed to get info about account ${e.toBase58()}`);
        return a.result
    }
    async getAccountInfo(e, t) {
        try {
            return (await this.getAccountInfoAndContext(e, t)).value
        } catch (r) {
            throw new Error("failed to get info about account " + e.toBase58() + ": " + r)
        }
    }
    async getMultipleParsedAccounts(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = e.map(m => m.toBase58())
          , o = this._buildArgs([i], r, "jsonParsed", s)
          , a = await this._rpcRequest("getMultipleAccounts", o)
          , l = Y(a, nt(ne(re(Io))));
        if ("error"in l)
            throw new ue(l.error,`failed to get info for accounts ${i}`);
        return l.result
    }
    async getMultipleAccountsInfoAndContext(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = e.map(m => m.toBase58())
          , o = this._buildArgs([i], r, "base64", s)
          , a = await this._rpcRequest("getMultipleAccounts", o)
          , l = Y(a, nt(ne(re(si))));
        if ("error"in l)
            throw new ue(l.error,`failed to get info for accounts ${i}`);
        return l.result
    }
    async getMultipleAccountsInfo(e, t) {
        return (await this.getMultipleAccountsInfoAndContext(e, t)).value
    }
    async getStakeActivation(e, t, r) {
        const {commitment: s, config: i} = Ne(t)
          , o = this._buildArgs([e.toBase58()], s, void 0, {
            ...i,
            epoch: r ?? (i == null ? void 0 : i.epoch)
        })
          , a = await this._rpcRequest("getStakeActivation", o)
          , l = Y(a, ve(Am));
        if ("error"in l)
            throw new ue(l.error,`failed to get Stake Activation ${e.toBase58()}`);
        return l.result
    }
    async getProgramAccounts(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , {encoding: i, ...o} = s || {}
          , a = this._buildArgs([e.toBase58()], r, i || "base64", {
            ...o,
            ...o.filters ? {
                filters: dc(o.filters)
            } : null
        })
          , l = await this._rpcRequest("getProgramAccounts", a)
          , m = ne(Em)
          , h = o.withContext === !0 ? Y(l, nt(m)) : Y(l, ve(m));
        if ("error"in h)
            throw new ue(h.error,`failed to get accounts owned by program ${e.toBase58()}`);
        return h.result
    }
    async getParsedProgramAccounts(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgs([e.toBase58()], r, "jsonParsed", s)
          , o = await this._rpcRequest("getProgramAccounts", i)
          , a = Y(o, ve(ne(km)));
        if ("error"in a)
            throw new ue(a.error,`failed to get accounts owned by program ${e.toBase58()}`);
        return a.result
    }
    async confirmTransaction(e, t) {
        var i;
        let r;
        if (typeof e == "string")
            r = e;
        else {
            const o = e;
            if ((i = o.abortSignal) != null && i.aborted)
                return Promise.reject(o.abortSignal.reason);
            r = o.signature
        }
        let s;
        try {
            s = It.decode(r)
        } catch {
            throw new Error("signature must be base58 encoded: " + r)
        }
        return $e(s.length === 64, "signature has invalid length"),
        typeof e == "string" ? await this.confirmTransactionUsingLegacyTimeoutStrategy({
            commitment: t || this.commitment,
            signature: r
        }) : "lastValidBlockHeight"in e ? await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
            commitment: t || this.commitment,
            strategy: e
        }) : await this.confirmTransactionUsingDurableNonceStrategy({
            commitment: t || this.commitment,
            strategy: e
        })
    }
    getCancellationPromise(e) {
        return new Promise( (t, r) => {
            e != null && (e.aborted ? r(e.reason) : e.addEventListener("abort", () => {
                r(e.reason)
            }
            ))
        }
        )
    }
    getTransactionConfirmationPromise({commitment: e, signature: t}) {
        let r, s, i = !1;
        const o = new Promise( (l, m) => {
            try {
                r = this.onSignature(t, (E, B) => {
                    r = void 0;
                    const k = {
                        context: B,
                        value: E
                    };
                    l({
                        __type: Nn.PROCESSED,
                        response: k
                    })
                }
                , e);
                const h = new Promise(E => {
                    r == null ? E() : s = this._onSubscriptionStateChange(r, B => {
                        B === "subscribed" && E()
                    }
                    )
                }
                );
                (async () => {
                    if (await h,
                    i)
                        return;
                    const E = await this.getSignatureStatus(t);
                    if (i || E == null)
                        return;
                    const {context: B, value: k} = E;
                    if (k != null)
                        if (k != null && k.err)
                            m(k.err);
                        else {
                            switch (e) {
                            case "confirmed":
                            case "single":
                            case "singleGossip":
                                {
                                    if (k.confirmationStatus === "processed")
                                        return;
                                    break
                                }
                            case "finalized":
                            case "max":
                            case "root":
                                {
                                    if (k.confirmationStatus === "processed" || k.confirmationStatus === "confirmed")
                                        return;
                                    break
                                }
                            case "processed":
                            case "recent":
                            }
                            i = !0,
                            l({
                                __type: Nn.PROCESSED,
                                response: {
                                    context: B,
                                    value: k
                                }
                            })
                        }
                }
                )()
            } catch (h) {
                m(h)
            }
        }
        );
        return {
            abortConfirmation: () => {
                s && (s(),
                s = void 0),
                r != null && (this.removeSignatureListener(r),
                r = void 0)
            }
            ,
            confirmationPromise: o
        }
    }
    async confirmTransactionUsingBlockHeightExceedanceStrategy({commitment: e, strategy: {abortSignal: t, lastValidBlockHeight: r, signature: s}}) {
        let i = !1;
        const o = new Promise(E => {
            const B = async () => {
                try {
                    return await this.getBlockHeight(e)
                } catch {
                    return -1
                }
            }
            ;
            (async () => {
                let k = await B();
                if (!i) {
                    for (; k <= r; )
                        if (await kr(1e3),
                        i || (k = await B(),
                        i))
                            return;
                    E({
                        __type: Nn.BLOCKHEIGHT_EXCEEDED
                    })
                }
            }
            )()
        }
        )
          , {abortConfirmation: a, confirmationPromise: l} = this.getTransactionConfirmationPromise({
            commitment: e,
            signature: s
        })
          , m = this.getCancellationPromise(t);
        let h;
        try {
            const E = await Promise.race([m, l, o]);
            if (E.__type === Nn.PROCESSED)
                h = E.response;
            else
                throw new Qu(s)
        } finally {
            i = !0,
            a()
        }
        return h
    }
    async confirmTransactionUsingDurableNonceStrategy({commitment: e, strategy: {abortSignal: t, minContextSlot: r, nonceAccountPubkey: s, nonceValue: i, signature: o}}) {
        let a = !1;
        const l = new Promise(k => {
            let O = i
              , R = null;
            const A = async () => {
                try {
                    const {context: F, value: z} = await this.getNonceAndContext(s, {
                        commitment: e,
                        minContextSlot: r
                    });
                    return R = F.slot,
                    z == null ? void 0 : z.nonce
                } catch {
                    return O
                }
            }
            ;
            (async () => {
                if (O = await A(),
                !a)
                    for (; ; ) {
                        if (i !== O) {
                            k({
                                __type: Nn.NONCE_INVALID,
                                slotInWhichNonceDidAdvance: R
                            });
                            return
                        }
                        if (await kr(2e3),
                        a || (O = await A(),
                        a))
                            return
                    }
            }
            )()
        }
        )
          , {abortConfirmation: m, confirmationPromise: h} = this.getTransactionConfirmationPromise({
            commitment: e,
            signature: o
        })
          , E = this.getCancellationPromise(t);
        let B;
        try {
            const k = await Promise.race([E, h, l]);
            if (k.__type === Nn.PROCESSED)
                B = k.response;
            else {
                let O;
                for (; ; ) {
                    const R = await this.getSignatureStatus(o);
                    if (R == null)
                        break;
                    if (R.context.slot < (k.slotInWhichNonceDidAdvance ?? r)) {
                        await kr(400);
                        continue
                    }
                    O = R;
                    break
                }
                if (O != null && O.value) {
                    const R = e || "finalized"
                      , {confirmationStatus: A} = O.value;
                    switch (R) {
                    case "processed":
                    case "recent":
                        if (A !== "processed" && A !== "confirmed" && A !== "finalized")
                            throw new Gr(o);
                        break;
                    case "confirmed":
                    case "single":
                    case "singleGossip":
                        if (A !== "confirmed" && A !== "finalized")
                            throw new Gr(o);
                        break;
                    case "finalized":
                    case "max":
                    case "root":
                        if (A !== "finalized")
                            throw new Gr(o);
                        break;
                    default:
                    }
                    B = {
                        context: O.context,
                        value: {
                            err: O.value.err
                        }
                    }
                } else
                    throw new Gr(o)
            }
        } finally {
            a = !0,
            m()
        }
        return B
    }
    async confirmTransactionUsingLegacyTimeoutStrategy({commitment: e, signature: t}) {
        let r;
        const s = new Promise(l => {
            let m = this._confirmTransactionInitialTimeout || 6e4;
            switch (e) {
            case "processed":
            case "recent":
            case "single":
            case "confirmed":
            case "singleGossip":
                {
                    m = this._confirmTransactionInitialTimeout || 3e4;
                    break
                }
            }
            r = setTimeout( () => l({
                __type: Nn.TIMED_OUT,
                timeoutMs: m
            }), m)
        }
        )
          , {abortConfirmation: i, confirmationPromise: o} = this.getTransactionConfirmationPromise({
            commitment: e,
            signature: t
        });
        let a;
        try {
            const l = await Promise.race([o, s]);
            if (l.__type === Nn.PROCESSED)
                a = l.response;
            else
                throw new el(t,l.timeoutMs / 1e3)
        } finally {
            clearTimeout(r),
            i()
        }
        return a
    }
    async getClusterNodes() {
        const e = await this._rpcRequest("getClusterNodes", [])
          , t = Y(e, ve(ne(Fm)));
        if ("error"in t)
            throw new ue(t.error,"failed to get cluster nodes");
        return t.result
    }
    async getVoteAccounts(e) {
        const t = this._buildArgs([], e)
          , r = await this._rpcRequest("getVoteAccounts", t)
          , s = Y(r, Dm);
        if ("error"in s)
            throw new ue(s.error,"failed to get vote accounts");
        return s.result
    }
    async getSlot(e) {
        const {commitment: t, config: r} = Ne(e)
          , s = this._buildArgs([], t, void 0, r)
          , i = await this._rpcRequest("getSlot", s)
          , o = Y(i, ve(L()));
        if ("error"in o)
            throw new ue(o.error,"failed to get slot");
        return o.result
    }
    async getSlotLeader(e) {
        const {commitment: t, config: r} = Ne(e)
          , s = this._buildArgs([], t, void 0, r)
          , i = await this._rpcRequest("getSlotLeader", s)
          , o = Y(i, ve(G()));
        if ("error"in o)
            throw new ue(o.error,"failed to get slot leader");
        return o.result
    }
    async getSlotLeaders(e, t) {
        const r = [e, t]
          , s = await this._rpcRequest("getSlotLeaders", r)
          , i = Y(s, ve(ne(Ge)));
        if ("error"in i)
            throw new ue(i.error,"failed to get slot leaders");
        return i.result
    }
    async getSignatureStatus(e, t) {
        const {context: r, value: s} = await this.getSignatureStatuses([e], t);
        $e(s.length === 1);
        const i = s[0];
        return {
            context: r,
            value: i
        }
    }
    async getSignatureStatuses(e, t) {
        const r = [e];
        t && r.push(t);
        const s = await this._rpcRequest("getSignatureStatuses", r)
          , i = Y(s, qm);
        if ("error"in i)
            throw new ue(i.error,"failed to get signature status");
        return i.result
    }
    async getTransactionCount(e) {
        const {commitment: t, config: r} = Ne(e)
          , s = this._buildArgs([], t, void 0, r)
          , i = await this._rpcRequest("getTransactionCount", s)
          , o = Y(i, ve(L()));
        if ("error"in o)
            throw new ue(o.error,"failed to get transaction count");
        return o.result
    }
    async getTotalSupply(e) {
        return (await this.getSupply({
            commitment: e,
            excludeNonCirculatingAccountsList: !0
        })).value.total
    }
    async getInflationGovernor(e) {
        const t = this._buildArgs([], e)
          , r = await this._rpcRequest("getInflationGovernor", t)
          , s = Y(r, fm);
        if ("error"in s)
            throw new ue(s.error,"failed to get inflation");
        return s.result
    }
    async getInflationReward(e, t, r) {
        const {commitment: s, config: i} = Ne(r)
          , o = this._buildArgs([e.map(m => m.toBase58())], s, void 0, {
            ...i,
            epoch: t ?? (i == null ? void 0 : i.epoch)
        })
          , a = await this._rpcRequest("getInflationReward", o)
          , l = Y(a, Jp);
        if ("error"in l)
            throw new ue(l.error,"failed to get inflation reward");
        return l.result
    }
    async getInflationRate() {
        const e = await this._rpcRequest("getInflationRate", [])
          , t = Y(e, dm);
        if ("error"in t)
            throw new ue(t.error,"failed to get inflation rate");
        return t.result
    }
    async getEpochInfo(e) {
        const {commitment: t, config: r} = Ne(e)
          , s = this._buildArgs([], t, void 0, r)
          , i = await this._rpcRequest("getEpochInfo", s)
          , o = Y(i, pm);
        if ("error"in o)
            throw new ue(o.error,"failed to get epoch info");
        return o.result
    }
    async getEpochSchedule() {
        const e = await this._rpcRequest("getEpochSchedule", [])
          , t = Y(e, mm);
        if ("error"in t)
            throw new ue(t.error,"failed to get epoch schedule");
        const r = t.result;
        return new Dp(r.slotsPerEpoch,r.leaderScheduleSlotOffset,r.warmup,r.firstNormalEpoch,r.firstNormalSlot)
    }
    async getLeaderSchedule() {
        const e = await this._rpcRequest("getLeaderSchedule", [])
          , t = Y(e, gm);
        if ("error"in t)
            throw new ue(t.error,"failed to get leader schedule");
        return t.result
    }
    async getMinimumBalanceForRentExemption(e, t) {
        const r = this._buildArgs([e], t)
          , s = await this._rpcRequest("getMinimumBalanceForRentExemption", r)
          , i = Y(s, $m);
        return "error"in i ? (console.warn("Unable to fetch minimum balance for rent exemption"),
        0) : i.result
    }
    async getRecentBlockhashAndContext(e) {
        const {context: t, value: {blockhash: r}} = await this.getLatestBlockhashAndContext(e);
        return {
            context: t,
            value: {
                blockhash: r,
                feeCalculator: {
                    get lamportsPerSignature() {
                        throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.")
                    },
                    toJSON() {
                        return {}
                    }
                }
            }
        }
    }
    async getRecentPerformanceSamples(e) {
        const t = await this._rpcRequest("getRecentPerformanceSamples", e ? [e] : [])
          , r = Y(t, ng);
        if ("error"in r)
            throw new ue(r.error,"failed to get recent performance samples");
        return r.result
    }
    async getFeeCalculatorForBlockhash(e, t) {
        const r = this._buildArgs([e], t)
          , s = await this._rpcRequest("getFeeCalculatorForBlockhash", r)
          , i = Y(s, rg);
        if ("error"in i)
            throw new ue(i.error,"failed to get fee calculator");
        const {context: o, value: a} = i.result;
        return {
            context: o,
            value: a !== null ? a.feeCalculator : null
        }
    }
    async getFeeForMessage(e, t) {
        const r = Nr(e.serialize()).toString("base64")
          , s = this._buildArgs([r], t)
          , i = await this._rpcRequest("getFeeForMessage", s)
          , o = Y(i, nt(re(L())));
        if ("error"in o)
            throw new ue(o.error,"failed to get fee for message");
        if (o.result === null)
            throw new Error("invalid blockhash");
        return o.result
    }
    async getRecentPrioritizationFees(e) {
        var o;
        const t = (o = e == null ? void 0 : e.lockedWritableAccounts) == null ? void 0 : o.map(a => a.toBase58())
          , r = t != null && t.length ? [t] : []
          , s = await this._rpcRequest("getRecentPrioritizationFees", r)
          , i = Y(s, hm);
        if ("error"in i)
            throw new ue(i.error,"failed to get recent prioritization fees");
        return i.result
    }
    async getRecentBlockhash(e) {
        try {
            return (await this.getRecentBlockhashAndContext(e)).value
        } catch (t) {
            throw new Error("failed to get recent blockhash: " + t)
        }
    }
    async getLatestBlockhash(e) {
        try {
            return (await this.getLatestBlockhashAndContext(e)).value
        } catch (t) {
            throw new Error("failed to get recent blockhash: " + t)
        }
    }
    async getLatestBlockhashAndContext(e) {
        const {commitment: t, config: r} = Ne(e)
          , s = this._buildArgs([], t, void 0, r)
          , i = await this._rpcRequest("getLatestBlockhash", s)
          , o = Y(i, Qm);
        if ("error"in o)
            throw new ue(o.error,"failed to get latest blockhash");
        return o.result
    }
    async isBlockhashValid(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgs([e], r, void 0, s)
          , o = await this._rpcRequest("isBlockhashValid", i)
          , a = Y(o, eg);
        if ("error"in a)
            throw new ue(a.error,"failed to determine if the blockhash `" + e + "`is valid");
        return a.result
    }
    async getVersion() {
        const e = await this._rpcRequest("getVersion", [])
          , t = Y(e, ve(im));
        if ("error"in t)
            throw new ue(t.error,"failed to get version");
        return t.result
    }
    async getGenesisHash() {
        const e = await this._rpcRequest("getGenesisHash", [])
          , t = Y(e, ve(G()));
        if ("error"in t)
            throw new ue(t.error,"failed to get genesis hash");
        return t.result
    }
    async getBlock(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgsAtLeastConfirmed([e], r, void 0, s)
          , o = await this._rpcRequest("getBlock", i);
        try {
            switch (s == null ? void 0 : s.transactionDetails) {
            case "accounts":
                {
                    const a = Y(o, Km);
                    if ("error"in a)
                        throw a.error;
                    return a.result
                }
            case "none":
                {
                    const a = Y(o, Wm);
                    if ("error"in a)
                        throw a.error;
                    return a.result
                }
            default:
                {
                    const a = Y(o, Zm);
                    if ("error"in a)
                        throw a.error;
                    const {result: l} = a;
                    return l ? {
                        ...l,
                        transactions: l.transactions.map( ({transaction: m, meta: h, version: E}) => ({
                            meta: h,
                            transaction: {
                                ...m,
                                message: po(E, m.message)
                            },
                            version: E
                        }))
                    } : null
                }
            }
        } catch (a) {
            throw new ue(a,"failed to get confirmed block")
        }
    }
    async getParsedBlock(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", s)
          , o = await this._rpcRequest("getBlock", i);
        try {
            switch (s == null ? void 0 : s.transactionDetails) {
            case "accounts":
                {
                    const a = Y(o, Jm);
                    if ("error"in a)
                        throw a.error;
                    return a.result
                }
            case "none":
                {
                    const a = Y(o, Ym);
                    if ("error"in a)
                        throw a.error;
                    return a.result
                }
            default:
                {
                    const a = Y(o, Gm);
                    if ("error"in a)
                        throw a.error;
                    return a.result
                }
            }
        } catch (a) {
            throw new ue(a,"failed to get block")
        }
    }
    async getBlockProduction(e) {
        let t, r;
        if (typeof e == "string")
            r = e;
        else if (e) {
            const {commitment: a, ...l} = e;
            r = a,
            t = l
        }
        const s = this._buildArgs([], r, "base64", t)
          , i = await this._rpcRequest("getBlockProduction", s)
          , o = Y(i, am);
        if ("error"in o)
            throw new ue(o.error,"failed to get block production information");
        return o.result
    }
    async getTransaction(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgsAtLeastConfirmed([e], r, void 0, s)
          , o = await this._rpcRequest("getTransaction", i)
          , a = Y(o, mo);
        if ("error"in a)
            throw new ue(a.error,"failed to get transaction");
        const l = a.result;
        return l && {
            ...l,
            transaction: {
                ...l.transaction,
                message: po(l.version, l.transaction.message)
            }
        }
    }
    async getParsedTransaction(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = this._buildArgsAtLeastConfirmed([e], r, "jsonParsed", s)
          , o = await this._rpcRequest("getTransaction", i)
          , a = Y(o, Ni);
        if ("error"in a)
            throw new ue(a.error,"failed to get transaction");
        return a.result
    }
    async getParsedTransactions(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = e.map(l => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([l], r, "jsonParsed", s)
        }));
        return (await this._rpcBatchRequest(i)).map(l => {
            const m = Y(l, Ni);
            if ("error"in m)
                throw new ue(m.error,"failed to get transactions");
            return m.result
        }
        )
    }
    async getTransactions(e, t) {
        const {commitment: r, config: s} = Ne(t)
          , i = e.map(l => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([l], r, void 0, s)
        }));
        return (await this._rpcBatchRequest(i)).map(l => {
            const m = Y(l, mo);
            if ("error"in m)
                throw new ue(m.error,"failed to get transactions");
            const h = m.result;
            return h && {
                ...h,
                transaction: {
                    ...h.transaction,
                    message: po(h.version, h.transaction.message)
                }
            }
        }
        )
    }
    async getConfirmedBlock(e, t) {
        const r = this._buildArgsAtLeastConfirmed([e], t)
          , s = await this._rpcRequest("getBlock", r)
          , i = Y(s, Xm);
        if ("error"in i)
            throw new ue(i.error,"failed to get confirmed block");
        const o = i.result;
        if (!o)
            throw new Error("Confirmed block " + e + " not found");
        const a = {
            ...o,
            transactions: o.transactions.map( ({transaction: l, meta: m}) => {
                const h = new Rn(l.message);
                return {
                    meta: m,
                    transaction: {
                        ...l,
                        message: h
                    }
                }
            }
            )
        };
        return {
            ...a,
            transactions: a.transactions.map( ({transaction: l, meta: m}) => ({
                meta: m,
                transaction: In.populate(l.message, l.signatures)
            }))
        }
    }
    async getBlocks(e, t, r) {
        const s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], r)
          , i = await this._rpcRequest("getBlocks", s)
          , o = Y(i, ve(ne(L())));
        if ("error"in o)
            throw new ue(o.error,"failed to get blocks");
        return o.result
    }
    async getBlockSignatures(e, t) {
        const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
            transactionDetails: "signatures",
            rewards: !1
        })
          , s = await this._rpcRequest("getBlock", r)
          , i = Y(s, mc);
        if ("error"in i)
            throw new ue(i.error,"failed to get block");
        const o = i.result;
        if (!o)
            throw new Error("Block " + e + " not found");
        return o
    }
    async getConfirmedBlockSignatures(e, t) {
        const r = this._buildArgsAtLeastConfirmed([e], t, void 0, {
            transactionDetails: "signatures",
            rewards: !1
        })
          , s = await this._rpcRequest("getBlock", r)
          , i = Y(s, mc);
        if ("error"in i)
            throw new ue(i.error,"failed to get confirmed block");
        const o = i.result;
        if (!o)
            throw new Error("Confirmed block " + e + " not found");
        return o
    }
    async getConfirmedTransaction(e, t) {
        const r = this._buildArgsAtLeastConfirmed([e], t)
          , s = await this._rpcRequest("getTransaction", r)
          , i = Y(s, mo);
        if ("error"in i)
            throw new ue(i.error,"failed to get transaction");
        const o = i.result;
        if (!o)
            return o;
        const a = new Rn(o.transaction.message)
          , l = o.transaction.signatures;
        return {
            ...o,
            transaction: In.populate(a, l)
        }
    }
    async getParsedConfirmedTransaction(e, t) {
        const r = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed")
          , s = await this._rpcRequest("getTransaction", r)
          , i = Y(s, Ni);
        if ("error"in i)
            throw new ue(i.error,"failed to get confirmed transaction");
        return i.result
    }
    async getParsedConfirmedTransactions(e, t) {
        const r = e.map(o => ({
            methodName: "getTransaction",
            args: this._buildArgsAtLeastConfirmed([o], t, "jsonParsed")
        }));
        return (await this._rpcBatchRequest(r)).map(o => {
            const a = Y(o, Ni);
            if ("error"in a)
                throw new ue(a.error,"failed to get confirmed transactions");
            return a.result
        }
        )
    }
    async getConfirmedSignaturesForAddress(e, t, r) {
        let s = {}
          , i = await this.getFirstAvailableBlock();
        for (; !("until"in s) && (t--,
        !(t <= 0 || t < i)); )
            try {
                const l = await this.getConfirmedBlockSignatures(t, "finalized");
                l.signatures.length > 0 && (s.until = l.signatures[l.signatures.length - 1].toString())
            } catch (l) {
                if (l instanceof Error && l.message.includes("skipped"))
                    continue;
                throw l
            }
        let o = await this.getSlot("finalized");
        for (; !("before"in s) && (r++,
        !(r > o)); )
            try {
                const l = await this.getConfirmedBlockSignatures(r);
                l.signatures.length > 0 && (s.before = l.signatures[l.signatures.length - 1].toString())
            } catch (l) {
                if (l instanceof Error && l.message.includes("skipped"))
                    continue;
                throw l
            }
        return (await this.getConfirmedSignaturesForAddress2(e, s)).map(l => l.signature)
    }
    async getConfirmedSignaturesForAddress2(e, t, r) {
        const s = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t)
          , i = await this._rpcRequest("getConfirmedSignaturesForAddress2", s)
          , o = Y(i, Im);
        if ("error"in o)
            throw new ue(o.error,"failed to get confirmed signatures for address");
        return o.result
    }
    async getSignaturesForAddress(e, t, r) {
        const s = this._buildArgsAtLeastConfirmed([e.toBase58()], r, void 0, t)
          , i = await this._rpcRequest("getSignaturesForAddress", s)
          , o = Y(i, Bm);
        if ("error"in o)
            throw new ue(o.error,"failed to get signatures for address");
        return o.result
    }
    async getAddressLookupTable(e, t) {
        const {context: r, value: s} = await this.getAccountInfoAndContext(e, t);
        let i = null;
        return s !== null && (i = new fc({
            key: e,
            state: fc.deserialize(s.data)
        })),
        {
            context: r,
            value: i
        }
    }
    async getNonceAndContext(e, t) {
        const {context: r, value: s} = await this.getAccountInfoAndContext(e, t);
        let i = null;
        return s !== null && (i = wa.fromAccountData(s.data)),
        {
            context: r,
            value: i
        }
    }
    async getNonce(e, t) {
        return await this.getNonceAndContext(e, t).then(r => r.value).catch(r => {
            throw new Error("failed to get nonce for account " + e.toBase58() + ": " + r)
        }
        )
    }
    async requestAirdrop(e, t) {
        const r = await this._rpcRequest("requestAirdrop", [e.toBase58(), t])
          , s = Y(r, ig);
        if ("error"in s)
            throw new ue(s.error,`airdrop to ${e.toBase58()} failed`);
        return s.result
    }
    async _blockhashWithExpiryBlockHeight(e) {
        if (!e) {
            for (; this._pollingBlockhash; )
                await kr(100);
            const r = Date.now() - this._blockhashInfo.lastFetch >= Zp;
            if (this._blockhashInfo.latestBlockhash !== null && !r)
                return this._blockhashInfo.latestBlockhash
        }
        return await this._pollNewBlockhash()
    }
    async _pollNewBlockhash() {
        this._pollingBlockhash = !0;
        try {
            const e = Date.now()
              , t = this._blockhashInfo.latestBlockhash
              , r = t ? t.blockhash : null;
            for (let s = 0; s < 50; s++) {
                const i = await this.getLatestBlockhash("finalized");
                if (r !== i.blockhash)
                    return this._blockhashInfo = {
                        latestBlockhash: i,
                        lastFetch: Date.now(),
                        transactionSignatures: [],
                        simulatedSignatures: []
                    },
                    i;
                await kr(Cp / 2)
            }
            throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`)
        } finally {
            this._pollingBlockhash = !1
        }
    }
    async getStakeMinimumDelegation(e) {
        const {commitment: t, config: r} = Ne(e)
          , s = this._buildArgs([], t, "base64", r)
          , i = await this._rpcRequest("getStakeMinimumDelegation", s)
          , o = Y(i, nt(L()));
        if ("error"in o)
            throw new ue(o.error,"failed to get stake minimum delegation");
        return o.result
    }
    async simulateTransaction(e, t, r) {
        if ("message"in e) {
            const R = e.serialize()
              , A = _e.from(R).toString("base64");
            if (Array.isArray(t) || r !== void 0)
                throw new Error("Invalid arguments");
            const F = t || {};
            F.encoding = "base64",
            "commitment"in F || (F.commitment = this.commitment),
            t && typeof t == "object" && "innerInstructions"in t && (F.innerInstructions = t.innerInstructions);
            const z = [A, F]
              , q = await this._rpcRequest("simulateTransaction", z)
              , X = Y(q, hc);
            if ("error"in X)
                throw new Error("failed to simulate transaction: " + X.error.message);
            return X.result
        }
        let s;
        if (e instanceof In) {
            let O = e;
            s = new In,
            s.feePayer = O.feePayer,
            s.instructions = e.instructions,
            s.nonceInfo = O.nonceInfo,
            s.signatures = O.signatures
        } else
            s = In.populate(e),
            s._message = s._json = void 0;
        if (t !== void 0 && !Array.isArray(t))
            throw new Error("Invalid arguments");
        const i = t;
        if (s.nonceInfo && i)
            s.sign(...i);
        else {
            let O = this._disableBlockhashCaching;
            for (; ; ) {
                const R = await this._blockhashWithExpiryBlockHeight(O);
                if (s.lastValidBlockHeight = R.lastValidBlockHeight,
                s.recentBlockhash = R.blockhash,
                !i)
                    break;
                if (s.sign(...i),
                !s.signature)
                    throw new Error("!signature");
                const A = s.signature.toString("base64");
                if (!this._blockhashInfo.simulatedSignatures.includes(A) && !this._blockhashInfo.transactionSignatures.includes(A)) {
                    this._blockhashInfo.simulatedSignatures.push(A);
                    break
                } else
                    O = !0
            }
        }
        const o = s._compile()
          , a = o.serialize()
          , m = s._serialize(a).toString("base64")
          , h = {
            encoding: "base64",
            commitment: this.commitment
        };
        if (r) {
            const O = (Array.isArray(r) ? r : o.nonProgramIds()).map(R => R.toBase58());
            h.accounts = {
                encoding: "base64",
                addresses: O
            }
        }
        i && (h.sigVerify = !0),
        t && typeof t == "object" && "innerInstructions"in t && (h.innerInstructions = t.innerInstructions);
        const E = [m, h]
          , B = await this._rpcRequest("simulateTransaction", E)
          , k = Y(B, hc);
        if ("error"in k) {
            let O;
            if ("data"in k.error && (O = k.error.data.logs,
            O && Array.isArray(O))) {
                const R = `
    `
                  , A = R + O.join(R);
                console.error(k.error.message, A)
            }
            throw new ac({
                action: "simulate",
                signature: "",
                transactionMessage: k.error.message,
                logs: O
            })
        }
        return k.result
    }
    async sendTransaction(e, t, r) {
        if ("version"in e) {
            if (t && Array.isArray(t))
                throw new Error("Invalid arguments");
            const o = e.serialize();
            return await this.sendRawTransaction(o, t)
        }
        if (t === void 0 || !Array.isArray(t))
            throw new Error("Invalid arguments");
        const s = t;
        if (e.nonceInfo)
            e.sign(...s);
        else {
            let o = this._disableBlockhashCaching;
            for (; ; ) {
                const a = await this._blockhashWithExpiryBlockHeight(o);
                if (e.lastValidBlockHeight = a.lastValidBlockHeight,
                e.recentBlockhash = a.blockhash,
                e.sign(...s),
                !e.signature)
                    throw new Error("!signature");
                const l = e.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(l))
                    o = !0;
                else {
                    this._blockhashInfo.transactionSignatures.push(l);
                    break
                }
            }
        }
        const i = e.serialize();
        return await this.sendRawTransaction(i, r)
    }
    async sendRawTransaction(e, t) {
        const r = Nr(e).toString("base64");
        return await this.sendEncodedTransaction(r, t)
    }
    async sendEncodedTransaction(e, t) {
        const r = {
            encoding: "base64"
        }
          , s = t && t.skipPreflight
          , i = s === !0 ? "processed" : t && t.preflightCommitment || this.commitment;
        t && t.maxRetries != null && (r.maxRetries = t.maxRetries),
        t && t.minContextSlot != null && (r.minContextSlot = t.minContextSlot),
        s && (r.skipPreflight = s),
        i && (r.preflightCommitment = i);
        const o = [e, r]
          , a = await this._rpcRequest("sendTransaction", o)
          , l = Y(a, sg);
        if ("error"in l) {
            let m;
            throw "data"in l.error && (m = l.error.data.logs),
            new ac({
                action: s ? "send" : "simulate",
                signature: "",
                transactionMessage: l.error.message,
                logs: m
            })
        }
        return l.result
    }
    _wsOnOpen() {
        this._rpcWebSocketConnected = !0,
        this._rpcWebSocketHeartbeat = setInterval( () => {
            (async () => {
                try {
                    await this._rpcWebSocket.notify("ping")
                } catch {}
            }
            )()
        }
        , 5e3),
        this._updateSubscriptions()
    }
    _wsOnError(e) {
        this._rpcWebSocketConnected = !1,
        console.error("ws error:", e.message)
    }
    _wsOnClose(e) {
        if (this._rpcWebSocketConnected = !1,
        this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER,
        this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout),
        this._rpcWebSocketIdleTimeout = null),
        this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat),
        this._rpcWebSocketHeartbeat = null),
        e === 1e3) {
            this._updateSubscriptions();
            return
        }
        this._subscriptionCallbacksByServerSubscriptionId = {},
        Object.entries(this._subscriptionsByHash).forEach( ([t,r]) => {
            this._setSubscription(t, {
                ...r,
                state: "pending"
            })
        }
        )
    }
    _setSubscription(e, t) {
        var s;
        const r = (s = this._subscriptionsByHash[e]) == null ? void 0 : s.state;
        if (this._subscriptionsByHash[e] = t,
        r !== t.state) {
            const i = this._subscriptionStateChangeCallbacksByHash[e];
            i && i.forEach(o => {
                try {
                    o(t.state)
                } catch {}
            }
            )
        }
    }
    _onSubscriptionStateChange(e, t) {
        var i;
        const r = this._subscriptionHashByClientSubscriptionId[e];
        if (r == null)
            return () => {}
            ;
        const s = (i = this._subscriptionStateChangeCallbacksByHash)[r] || (i[r] = new Set);
        return s.add(t),
        () => {
            s.delete(t),
            s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[r]
        }
    }
    async _updateSubscriptions() {
        if (Object.keys(this._subscriptionsByHash).length === 0) {
            this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1,
            this._rpcWebSocketIdleTimeout = setTimeout( () => {
                this._rpcWebSocketIdleTimeout = null;
                try {
                    this._rpcWebSocket.close()
                } catch (r) {
                    r instanceof Error && console.log(`Error when closing socket connection: ${r.message}`)
                }
            }
            , 500));
            return
        }
        if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout),
        this._rpcWebSocketIdleTimeout = null,
        this._rpcWebSocketConnected = !0),
        !this._rpcWebSocketConnected) {
            this._rpcWebSocket.connect();
            return
        }
        const e = this._rpcWebSocketGeneration
          , t = () => e === this._rpcWebSocketGeneration;
        await Promise.all(Object.keys(this._subscriptionsByHash).map(async r => {
            const s = this._subscriptionsByHash[r];
            if (s !== void 0)
                switch (s.state) {
                case "pending":
                case "unsubscribed":
                    if (s.callbacks.size === 0) {
                        delete this._subscriptionsByHash[r],
                        s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId],
                        await this._updateSubscriptions();
                        return
                    }
                    await (async () => {
                        const {args: i, method: o} = s;
                        try {
                            this._setSubscription(r, {
                                ...s,
                                state: "subscribing"
                            });
                            const a = await this._rpcWebSocket.call(o, i);
                            this._setSubscription(r, {
                                ...s,
                                serverSubscriptionId: a,
                                state: "subscribed"
                            }),
                            this._subscriptionCallbacksByServerSubscriptionId[a] = s.callbacks,
                            await this._updateSubscriptions()
                        } catch (a) {
                            if (console.error(`Received ${ainstanceof Error ? "" : "JSON-RPC "}error calling \`${o}\``, {
                                args: i,
                                error: a
                            }),
                            !t())
                                return;
                            this._setSubscription(r, {
                                ...s,
                                state: "pending"
                            }),
                            await this._updateSubscriptions()
                        }
                    }
                    )();
                    break;
                case "subscribed":
                    s.callbacks.size === 0 && await (async () => {
                        const {serverSubscriptionId: i, unsubscribeMethod: o} = s;
                        if (this._subscriptionsAutoDisposedByRpc.has(i))
                            this._subscriptionsAutoDisposedByRpc.delete(i);
                        else {
                            this._setSubscription(r, {
                                ...s,
                                state: "unsubscribing"
                            }),
                            this._setSubscription(r, {
                                ...s,
                                state: "unsubscribing"
                            });
                            try {
                                await this._rpcWebSocket.call(o, [i])
                            } catch (a) {
                                if (a instanceof Error && console.error(`${o} error:`, a.message),
                                !t())
                                    return;
                                this._setSubscription(r, {
                                    ...s,
                                    state: "subscribed"
                                }),
                                await this._updateSubscriptions();
                                return
                            }
                        }
                        this._setSubscription(r, {
                            ...s,
                            state: "unsubscribed"
                        }),
                        await this._updateSubscriptions()
                    }
                    )();
                    break
                }
        }
        ))
    }
    _handleServerNotification(e, t) {
        const r = this._subscriptionCallbacksByServerSubscriptionId[e];
        r !== void 0 && r.forEach(s => {
            try {
                s(...t)
            } catch (i) {
                console.error(i)
            }
        }
        )
    }
    _wsOnAccountNotification(e) {
        const {result: t, subscription: r} = Y(e, Rm);
        this._handleServerNotification(r, [t.value, t.context])
    }
    _makeSubscription(e, t) {
        const r = this._nextClientSubscriptionId++
          , s = uc([e.method, t])
          , i = this._subscriptionsByHash[s];
        return i === void 0 ? this._subscriptionsByHash[s] = {
            ...e,
            args: t,
            callbacks: new Set([e.callback]),
            state: "pending"
        } : i.callbacks.add(e.callback),
        this._subscriptionHashByClientSubscriptionId[r] = s,
        this._subscriptionDisposeFunctionsByClientSubscriptionId[r] = async () => {
            delete this._subscriptionDisposeFunctionsByClientSubscriptionId[r],
            delete this._subscriptionHashByClientSubscriptionId[r];
            const o = this._subscriptionsByHash[s];
            $e(o !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${r}`),
            o.callbacks.delete(e.callback),
            await this._updateSubscriptions()
        }
        ,
        this._updateSubscriptions(),
        r
    }
    onAccountChange(e, t, r) {
        const {commitment: s, config: i} = Ne(r)
          , o = this._buildArgs([e.toBase58()], s || this._commitment || "finalized", "base64", i);
        return this._makeSubscription({
            callback: t,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe"
        }, o)
    }
    async removeAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "account change")
    }
    _wsOnProgramAccountNotification(e) {
        const {result: t, subscription: r} = Y(e, Tm);
        this._handleServerNotification(r, [{
            accountId: t.value.pubkey,
            accountInfo: t.value.account
        }, t.context])
    }
    onProgramAccountChange(e, t, r, s) {
        const {commitment: i, config: o} = Ne(r)
          , a = this._buildArgs([e.toBase58()], i || this._commitment || "finalized", "base64", o || (s ? {
            filters: dc(s)
        } : void 0));
        return this._makeSubscription({
            callback: t,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe"
        }, a)
    }
    async removeProgramAccountChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "program account change")
    }
    onLogs(e, t, r) {
        const s = this._buildArgs([typeof e == "object" ? {
            mentions: [e.toString()]
        } : e], r || this._commitment || "finalized");
        return this._makeSubscription({
            callback: t,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe"
        }, s)
    }
    async removeOnLogsListener(e) {
        await this._unsubscribeClientSubscription(e, "logs")
    }
    _wsOnLogsNotification(e) {
        const {result: t, subscription: r} = Y(e, ag);
        this._handleServerNotification(r, [t.value, t.context])
    }
    _wsOnSlotNotification(e) {
        const {result: t, subscription: r} = Y(e, Cm);
        this._handleServerNotification(r, [t])
    }
    onSlotChange(e) {
        return this._makeSubscription({
            callback: e,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe"
        }, [])
    }
    async removeSlotChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "slot change")
    }
    _wsOnSlotUpdatesNotification(e) {
        const {result: t, subscription: r} = Y(e, Nm);
        this._handleServerNotification(r, [t])
    }
    onSlotUpdate(e) {
        return this._makeSubscription({
            callback: e,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe"
        }, [])
    }
    async removeSlotUpdateListener(e) {
        await this._unsubscribeClientSubscription(e, "slot update")
    }
    async _unsubscribeClientSubscription(e, t) {
        const r = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
        r ? await r() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
    }
    _buildArgs(e, t, r, s) {
        const i = t || this._commitment;
        if (i || r || s) {
            let o = {};
            r && (o.encoding = r),
            i && (o.commitment = i),
            s && (o = Object.assign(o, s)),
            e.push(o)
        }
        return e
    }
    _buildArgsAtLeastConfirmed(e, t, r, s) {
        const i = t || this._commitment;
        if (i && !["confirmed", "finalized"].includes(i))
            throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
        return this._buildArgs(e, t, r, s)
    }
    _wsOnSignatureNotification(e) {
        const {result: t, subscription: r} = Y(e, Pm);
        t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(r),
        this._handleServerNotification(r, t.value === "receivedSignature" ? [{
            type: "received"
        }, t.context] : [{
            type: "status",
            result: t.value
        }, t.context])
    }
    onSignature(e, t, r) {
        const s = this._buildArgs([e], r || this._commitment || "finalized")
          , i = this._makeSubscription({
            callback: (o, a) => {
                if (o.type === "status") {
                    t(o.result, a);
                    try {
                        this.removeSignatureListener(i)
                    } catch {}
                }
            }
            ,
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, s);
        return i
    }
    onSignatureWithOptions(e, t, r) {
        const {commitment: s, ...i} = {
            ...r,
            commitment: r && r.commitment || this._commitment || "finalized"
        }
          , o = this._buildArgs([e], s, void 0, i)
          , a = this._makeSubscription({
            callback: (l, m) => {
                t(l, m);
                try {
                    this.removeSignatureListener(a)
                } catch {}
            }
            ,
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, o);
        return a
    }
    async removeSignatureListener(e) {
        await this._unsubscribeClientSubscription(e, "signature result")
    }
    _wsOnRootNotification(e) {
        const {result: t, subscription: r} = Y(e, Um);
        this._handleServerNotification(r, [t])
    }
    onRootChange(e) {
        return this._makeSubscription({
            callback: e,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe"
        }, [])
    }
    async removeRootChangeListener(e) {
        await this._unsubscribeClientSubscription(e, "root change")
    }
}
Object.freeze({
    CreateLookupTable: {
        index: 0,
        layout: ae([le("instruction"), Pr("recentSlot"), Me("bumpSeed")])
    },
    FreezeLookupTable: {
        index: 1,
        layout: ae([le("instruction")])
    },
    ExtendLookupTable: {
        index: 2,
        layout: ae([le("instruction"), Pr(), Dt(Ae(), er(le(), -8), "addresses")])
    },
    DeactivateLookupTable: {
        index: 3,
        layout: ae([le("instruction")])
    },
    CloseLookupTable: {
        index: 4,
        layout: ae([le("instruction")])
    }
});
new he("AddressLookupTab1e1111111111111111111111111");
Object.freeze({
    RequestUnits: {
        index: 0,
        layout: ae([Me("instruction"), le("units"), le("additionalFee")])
    },
    RequestHeapFrame: {
        index: 1,
        layout: ae([Me("instruction"), le("bytes")])
    },
    SetComputeUnitLimit: {
        index: 2,
        layout: ae([Me("instruction"), le("units")])
    },
    SetComputeUnitPrice: {
        index: 3,
        layout: ae([Me("instruction"), Pr("microLamports")])
    }
});
new he("ComputeBudget111111111111111111111111111111");
ae([Me("numSignatures"), Me("padding"), rn("signatureOffset"), rn("signatureInstructionIndex"), rn("publicKeyOffset"), rn("publicKeyInstructionIndex"), rn("messageDataOffset"), rn("messageDataSize"), rn("messageInstructionIndex")]);
new he("Ed25519SigVerify111111111111111111111111111");
Jo.utils.isValidPrivateKey;
Jo.getPublicKey;
ae([Me("numSignatures"), rn("signatureOffset"), Me("signatureInstructionIndex"), rn("ethAddressOffset"), Me("ethAddressInstructionIndex"), rn("messageDataOffset"), rn("messageDataSize"), Me("messageInstructionIndex"), De(20, "ethAddress"), De(64, "signature"), Me("recoveryId")]);
new he("KeccakSecp256k11111111111111111111111111111");
var hl;
new he("StakeConfig11111111111111111111111111111111");
class pl {
    constructor(e, t, r) {
        this.unixTimestamp = void 0,
        this.epoch = void 0,
        this.custodian = void 0,
        this.unixTimestamp = e,
        this.epoch = t,
        this.custodian = r
    }
}
hl = pl;
pl.default = new hl(0,0,he.default);
Object.freeze({
    Initialize: {
        index: 0,
        layout: ae([le("instruction"), kp(), Ap()])
    },
    Authorize: {
        index: 1,
        layout: ae([le("instruction"), Ae("newAuthorized"), le("stakeAuthorizationType")])
    },
    Delegate: {
        index: 2,
        layout: ae([le("instruction")])
    },
    Split: {
        index: 3,
        layout: ae([le("instruction"), Gt("lamports")])
    },
    Withdraw: {
        index: 4,
        layout: ae([le("instruction"), Gt("lamports")])
    },
    Deactivate: {
        index: 5,
        layout: ae([le("instruction")])
    },
    Merge: {
        index: 7,
        layout: ae([le("instruction")])
    },
    AuthorizeWithSeed: {
        index: 8,
        layout: ae([le("instruction"), Ae("newAuthorized"), le("stakeAuthorizationType"), Br("authoritySeed"), Ae("authorityOwner")])
    }
});
new he("Stake11111111111111111111111111111111111111");
Object.freeze({
    InitializeAccount: {
        index: 0,
        layout: ae([le("instruction"), Ip()])
    },
    Authorize: {
        index: 1,
        layout: ae([le("instruction"), Ae("newAuthorized"), le("voteAuthorizationType")])
    },
    Withdraw: {
        index: 3,
        layout: ae([le("instruction"), Gt("lamports")])
    },
    UpdateValidatorIdentity: {
        index: 4,
        layout: ae([le("instruction")])
    },
    AuthorizeWithSeed: {
        index: 10,
        layout: ae([le("instruction"), Bp()])
    }
});
new he("Vote111111111111111111111111111111111111111");
new he("Va1idator1nfo111111111111111111111111111111");
V({
    name: G(),
    website: fe(G()),
    details: fe(G()),
    iconUrl: fe(G()),
    keybaseUsername: fe(G())
});
new he("Vote111111111111111111111111111111111111111");
ae([Ae("nodePubkey"), Ae("authorizedWithdrawer"), Me("commission"), kt(), Dt(ae([kt("slot"), le("confirmationCount")]), er(le(), -8), "votes"), Me("rootSlotValid"), kt("rootSlot"), kt(), Dt(ae([kt("epoch"), Ae("authorizedVoter")]), er(le(), -8), "authorizedVoters"), ae([Dt(ae([Ae("authorizedPubkey"), kt("epochOfLastAuthorizedSwitch"), kt("targetEpoch")]), 32, "buf"), kt("idx"), Me("isEmpty")], "priorVoters"), kt(), Dt(ae([kt("epoch"), kt("credits"), kt("prevCredits")]), er(le(), -8), "epochCredits"), ae([kt("slot"), kt("timestamp")], "lastTimestamp")]);
let mr = class extends Error {
    constructor(t, r={}) {
        super(t, r.cause ? {
            cause: r.cause
        } : void 0);
        Oe(this, "name", "BaseError");
        Oe(this, "cause");
        this.cause = r.cause
    }
}
;
const lg = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseError: mr
}, Symbol.toStringTag, {
    value: "Module"
}));
class ml extends mr {
    constructor() {
        super("Invalid domain manifest");
        Oe(this, "name", "AddMiniApp.InvalidDomainManifest")
    }
}
let gl = class extends mr {
    constructor() {
        super("Add miniapp rejected by user");
        Oe(this, "name", "AddMiniApp.RejectedByUser")
    }
}
;
const fg = Object.freeze(Object.defineProperty({
    __proto__: null,
    InvalidDomainManifest: ml,
    RejectedByUser: gl
}, Symbol.toStringTag, {
    value: "Module"
}))
  , dg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , hg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , pg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , yl = {
    disableNativeGestures: !1
}
  , mg = Object.freeze(Object.defineProperty({
    __proto__: null,
    DEFAULT_READY_OPTIONS: yl
}, Symbol.toStringTag, {
    value: "Module"
}))
  , gg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , yg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}));
let xa = class extends mr {
    constructor() {
        super("Sign in rejected by user");
        Oe(this, "name", "SignIn.RejectedByUser")
    }
}
;
const wg = Object.freeze(Object.defineProperty({
    __proto__: null,
    RejectedByUser: xa
}, Symbol.toStringTag, {
    value: "Module"
}));
class wl extends mr {
    constructor() {
        super("Sign manifest rejected by user");
        Oe(this, "name", "SignManifest.RejectedByUser")
    }
}
class bl extends mr {
    constructor() {
        super("Invalid domain provided");
        Oe(this, "name", "SignManifest.InvalidDomain")
    }
}
class vl extends mr {
    constructor(t="Manifest signing failed") {
        super(t);
        Oe(this, "name", "SignManifest.GenericError")
    }
}
const bg = Object.freeze(Object.defineProperty({
    __proto__: null,
    GenericError: vl,
    InvalidDomain: bl,
    RejectedByUser: wl
}, Symbol.toStringTag, {
    value: "Module"
}))
  , vg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _g = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Eg = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Sg = {
    visible: !1
}
  , kg = Object.freeze(Object.defineProperty({
    __proto__: null,
    DEFAULT_BACK_STATE: Sg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ag = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}));
function Ig(n) {
    return n.miniapp || n.frame
}
const Bg = Object.freeze(Object.defineProperty({
    __proto__: null,
    getMiniAppConfig: Ig
}, Symbol.toStringTag, {
    value: "Module"
}));
var Be;
(function(n) {
    n.assertEqual = s => {}
    ;
    function e(s) {}
    n.assertIs = e;
    function t(s) {
        throw new Error
    }
    n.assertNever = t,
    n.arrayToEnum = s => {
        const i = {};
        for (const o of s)
            i[o] = o;
        return i
    }
    ,
    n.getValidEnumValues = s => {
        const i = n.objectKeys(s).filter(a => typeof s[s[a]] != "number")
          , o = {};
        for (const a of i)
            o[a] = s[a];
        return n.objectValues(o)
    }
    ,
    n.objectValues = s => n.objectKeys(s).map(function(i) {
        return s[i]
    }),
    n.objectKeys = typeof Object.keys == "function" ? s => Object.keys(s) : s => {
        const i = [];
        for (const o in s)
            Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
        return i
    }
    ,
    n.find = (s, i) => {
        for (const o of s)
            if (i(o))
                return o
    }
    ,
    n.isInteger = typeof Number.isInteger == "function" ? s => Number.isInteger(s) : s => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
    function r(s, i=" | ") {
        return s.map(o => typeof o == "string" ? `'${o}'` : o).join(i)
    }
    n.joinValues = r,
    n.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i
}
)(Be || (Be = {}));
var gc;
(function(n) {
    n.mergeShapes = (e, t) => ({
        ...e,
        ...t
    })
}
)(gc || (gc = {}));
const oe = Be.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , Dn = n => {
    switch (typeof n) {
    case "undefined":
        return oe.undefined;
    case "string":
        return oe.string;
    case "number":
        return Number.isNaN(n) ? oe.nan : oe.number;
    case "boolean":
        return oe.boolean;
    case "function":
        return oe.function;
    case "bigint":
        return oe.bigint;
    case "symbol":
        return oe.symbol;
    case "object":
        return Array.isArray(n) ? oe.array : n === null ? oe.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? oe.promise : typeof Map < "u" && n instanceof Map ? oe.map : typeof Set < "u" && n instanceof Set ? oe.set : typeof Date < "u" && n instanceof Date ? oe.date : oe.object;
    default:
        return oe.unknown
    }
}
  , W = Be.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
class Mn extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = r => {
            this.issues = [...this.issues, r]
        }
        ,
        this.addIssues = (r=[]) => {
            this.issues = [...this.issues, ...r]
        }
        ;
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t,
        this.name = "ZodError",
        this.issues = e
    }
    format(e) {
        const t = e || function(i) {
            return i.message
        }
          , r = {
            _errors: []
        }
          , s = i => {
            for (const o of i.issues)
                if (o.code === "invalid_union")
                    o.unionErrors.map(s);
                else if (o.code === "invalid_return_type")
                    s(o.returnTypeError);
                else if (o.code === "invalid_arguments")
                    s(o.argumentsError);
                else if (o.path.length === 0)
                    r._errors.push(t(o));
                else {
                    let a = r
                      , l = 0;
                    for (; l < o.path.length; ) {
                        const m = o.path[l];
                        l === o.path.length - 1 ? (a[m] = a[m] || {
                            _errors: []
                        },
                        a[m]._errors.push(t(o))) : a[m] = a[m] || {
                            _errors: []
                        },
                        a = a[m],
                        l++
                    }
                }
        }
        ;
        return s(this),
        r
    }
    static assert(e) {
        if (!(e instanceof Mn))
            throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Be.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=t => t.message) {
        const t = {}
          , r = [];
        for (const s of this.issues)
            s.path.length > 0 ? (t[s.path[0]] = t[s.path[0]] || [],
            t[s.path[0]].push(e(s))) : r.push(e(s));
        return {
            formErrors: r,
            fieldErrors: t
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
Mn.create = n => new Mn(n);
const Bo = (n, e) => {
    let t;
    switch (n.code) {
    case W.invalid_type:
        n.received === oe.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
        break;
    case W.invalid_literal:
        t = `Invalid literal value, expected ${JSON.stringify(n.expected, Be.jsonStringifyReplacer)}`;
        break;
    case W.unrecognized_keys:
        t = `Unrecognized key(s) in object: ${Be.joinValues(n.keys, ", ")}`;
        break;
    case W.invalid_union:
        t = "Invalid input";
        break;
    case W.invalid_union_discriminator:
        t = `Invalid discriminator value. Expected ${Be.joinValues(n.options)}`;
        break;
    case W.invalid_enum_value:
        t = `Invalid enum value. Expected ${Be.joinValues(n.options)}, received '${n.received}'`;
        break;
    case W.invalid_arguments:
        t = "Invalid function arguments";
        break;
    case W.invalid_return_type:
        t = "Invalid function return type";
        break;
    case W.invalid_date:
        t = "Invalid date";
        break;
    case W.invalid_string:
        typeof n.validation == "object" ? "includes"in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`,
        typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith"in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith"in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : Be.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
        break;
    case W.too_small:
        n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
        break;
    case W.too_big:
        n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
        break;
    case W.custom:
        t = "Invalid input";
        break;
    case W.invalid_intersection_types:
        t = "Intersection results could not be merged";
        break;
    case W.not_multiple_of:
        t = `Number must be a multiple of ${n.multipleOf}`;
        break;
    case W.not_finite:
        t = "Number must be finite";
        break;
    default:
        t = e.defaultError,
        Be.assertNever(n)
    }
    return {
        message: t
    }
}
;
let Rg = Bo;
function Mg() {
    return Rg
}
const Tg = n => {
    const {data: e, path: t, errorMaps: r, issueData: s} = n
      , i = [...t, ...s.path || []]
      , o = {
        ...s,
        path: i
    };
    if (s.message !== void 0)
        return {
            ...s,
            path: i,
            message: s.message
        };
    let a = "";
    const l = r.filter(m => !!m).slice().reverse();
    for (const m of l)
        a = m(o, {
            data: e,
            defaultError: a
        }).message;
    return {
        ...s,
        path: i,
        message: a
    }
}
;
function ie(n, e) {
    const t = Mg()
      , r = Tg({
        issueData: e,
        data: n.data,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, t, t === Bo ? void 0 : Bo].filter(s => !!s)
    });
    n.common.issues.push(r)
}
class Qt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, t) {
        const r = [];
        for (const s of t) {
            if (s.status === "aborted")
                return pe;
            s.status === "dirty" && e.dirty(),
            r.push(s.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, t) {
        const r = [];
        for (const s of t) {
            const i = await s.key
              , o = await s.value;
            r.push({
                key: i,
                value: o
            })
        }
        return Qt.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, t) {
        const r = {};
        for (const s of t) {
            const {key: i, value: o} = s;
            if (i.status === "aborted" || o.status === "aborted")
                return pe;
            i.status === "dirty" && e.dirty(),
            o.status === "dirty" && e.dirty(),
            i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (r[i.value] = o.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const pe = Object.freeze({
    status: "aborted"
})
  , Jr = n => ({
    status: "dirty",
    value: n
})
  , on = n => ({
    status: "valid",
    value: n
})
  , yc = n => n.status === "aborted"
  , wc = n => n.status === "dirty"
  , Ur = n => n.status === "valid"
  , Yi = n => typeof Promise < "u" && n instanceof Promise;
var ce;
(function(n) {
    n.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {},
    n.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
}
)(ce || (ce = {}));
class Wn {
    constructor(e, t, r, s) {
        this._cachedPath = [],
        this.parent = e,
        this.data = t,
        this._path = r,
        this._key = s
    }
    get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const bc = (n, e) => {
    if (Ur(e))
        return {
            success: !0,
            data: e.value
        };
    if (!n.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const t = new Mn(n.common.issues);
            return this._error = t,
            this._error
        }
    }
}
;
function xe(n) {
    if (!n)
        return {};
    const {errorMap: e, invalid_type_error: t, required_error: r, description: s} = n;
    if (e && (t || r))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: s
    } : {
        errorMap: (o, a) => {
            const {message: l} = n;
            return o.code === "invalid_enum_value" ? {
                message: l ?? a.defaultError
            } : typeof a.data > "u" ? {
                message: l ?? r ?? a.defaultError
            } : o.code !== "invalid_type" ? {
                message: a.defaultError
            } : {
                message: l ?? t ?? a.defaultError
            }
        }
        ,
        description: s
    }
}
class Ie {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return Dn(e.data)
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: Dn(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new Qt,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: Dn(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (Yi(t))
            throw new Error("Synchronous parse encountered promise.");
        return t
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t)
    }
    parse(e, t) {
        const r = this.safeParse(e, t);
        if (r.success)
            return r.data;
        throw r.error
    }
    safeParse(e, t) {
        const r = {
            common: {
                issues: [],
                async: (t == null ? void 0 : t.async) ?? !1,
                contextualErrorMap: t == null ? void 0 : t.errorMap
            },
            path: (t == null ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Dn(e)
        }
          , s = this._parseSync({
            data: e,
            path: r.path,
            parent: r
        });
        return bc(r, s)
    }
    "~validate"(e) {
        var r, s;
        const t = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Dn(e)
        };
        if (!this["~standard"].async)
            try {
                const i = this._parseSync({
                    data: e,
                    path: [],
                    parent: t
                });
                return Ur(i) ? {
                    value: i.value
                } : {
                    issues: t.common.issues
                }
            } catch (i) {
                (s = (r = i == null ? void 0 : i.message) == null ? void 0 : r.toLowerCase()) != null && s.includes("encountered") && (this["~standard"].async = !0),
                t.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: e,
            path: [],
            parent: t
        }).then(i => Ur(i) ? {
            value: i.value
        } : {
            issues: t.common.issues
        })
    }
    async parseAsync(e, t) {
        const r = await this.safeParseAsync(e, t);
        if (r.success)
            return r.data;
        throw r.error
    }
    async safeParseAsync(e, t) {
        const r = {
            common: {
                issues: [],
                contextualErrorMap: t == null ? void 0 : t.errorMap,
                async: !0
            },
            path: (t == null ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Dn(e)
        }
          , s = this._parse({
            data: e,
            path: r.path,
            parent: r
        })
          , i = await (Yi(s) ? s : Promise.resolve(s));
        return bc(r, i)
    }
    refine(e, t) {
        const r = s => typeof t == "string" || typeof t > "u" ? {
            message: t
        } : typeof t == "function" ? t(s) : t;
        return this._refinement( (s, i) => {
            const o = e(s)
              , a = () => i.addIssue({
                code: W.custom,
                ...r(s)
            });
            return typeof Promise < "u" && o instanceof Promise ? o.then(l => l ? !0 : (a(),
            !1)) : o ? !0 : (a(),
            !1)
        }
        )
    }
    refinement(e, t) {
        return this._refinement( (r, s) => e(r) ? !0 : (s.addIssue(typeof t == "function" ? t(r, s) : t),
        !1))
    }
    _refinement(e) {
        return new ar({
            schema: this,
            typeName: ye.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: t => this["~validate"](t)
        }
    }
    optional() {
        return Bn.create(this, this._def)
    }
    nullable() {
        return cr.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return mn.create(this)
    }
    promise() {
        return ns.create(this, this._def)
    }
    or(e) {
        return Qi.create([this, e], this._def)
    }
    and(e) {
        return es.create(this, e, this._def)
    }
    transform(e) {
        return new ar({
            ...xe(this._def),
            schema: this,
            typeName: ye.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const t = typeof e == "function" ? e : () => e;
        return new rs({
            ...xe(this._def),
            innerType: this,
            defaultValue: t,
            typeName: ye.ZodDefault
        })
    }
    brand() {
        return new Sl({
            typeName: ye.ZodBranded,
            type: this,
            ...xe(this._def)
        })
    }
    catch(e) {
        const t = typeof e == "function" ? e : () => e;
        return new is({
            ...xe(this._def),
            innerType: this,
            catchValue: t,
            typeName: ye.ZodCatch
        })
    }
    describe(e) {
        const t = this.constructor;
        return new t({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return Sa.create(this, e)
    }
    readonly() {
        return ss.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Og = /^c[^\s-]{8,}$/i
  , Cg = /^[0-9a-z]+$/
  , Lg = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , Ng = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , Pg = /^[a-z0-9_-]{21}$/i
  , Ug = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , Fg = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , Dg = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , jg = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let go;
const zg = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , qg = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , $g = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , Hg = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , Vg = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , Zg = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , _l = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , Wg = new RegExp(`^${_l}$`);
function xl(n) {
    let e = "[0-5]\\d";
    n.precision ? e = `${e}\\.\\d{${n.precision}}` : n.precision == null && (e = `${e}(\\.\\d+)?`);
    const t = n.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`
}
function Kg(n) {
    return new RegExp(`^${xl(n)}$`)
}
function Gg(n) {
    let e = `${_l}T${xl(n)}`;
    const t = [];
    return t.push(n.local ? "Z?" : "Z"),
    n.offset && t.push("([+-]\\d{2}:?\\d{2})"),
    e = `${e}(${t.join("|")})`,
    new RegExp(`^${e}$`)
}
function Jg(n, e) {
    return !!((e === "v4" || !e) && zg.test(n) || (e === "v6" || !e) && $g.test(n))
}
function Yg(n, e) {
    if (!Ug.test(n))
        return !1;
    try {
        const [t] = n.split(".")
          , r = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "=")
          , s = JSON.parse(atob(r));
        return !(typeof s != "object" || s === null || "typ"in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || e && s.alg !== e)
    } catch {
        return !1
    }
}
function Xg(n, e) {
    return !!((e === "v4" || !e) && qg.test(n) || (e === "v6" || !e) && Hg.test(n))
}
class $n extends Ie {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== oe.string) {
            const i = this._getOrReturnCtx(e);
            return ie(i, {
                code: W.invalid_type,
                expected: oe.string,
                received: i.parsedType
            }),
            pe
        }
        const r = new Qt;
        let s;
        for (const i of this._def.checks)
            if (i.kind === "min")
                e.data.length < i.value && (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.too_small,
                    minimum: i.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "max")
                e.data.length > i.value && (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.too_big,
                    maximum: i.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "length") {
                const o = e.data.length > i.value
                  , a = e.data.length < i.value;
                (o || a) && (s = this._getOrReturnCtx(e, s),
                o ? ie(s, {
                    code: W.too_big,
                    maximum: i.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: i.message
                }) : a && ie(s, {
                    code: W.too_small,
                    minimum: i.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: i.message
                }),
                r.dirty())
            } else if (i.kind === "email")
                Dg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "email",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "emoji")
                go || (go = new RegExp(jg,"u")),
                go.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "emoji",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "uuid")
                Ng.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "uuid",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "nanoid")
                Pg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "nanoid",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "cuid")
                Og.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "cuid",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "cuid2")
                Cg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "cuid2",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "ulid")
                Lg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "ulid",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty());
            else if (i.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    s = this._getOrReturnCtx(e, s),
                    ie(s, {
                        validation: "url",
                        code: W.invalid_string,
                        message: i.message
                    }),
                    r.dirty()
                }
            else
                i.kind === "regex" ? (i.regex.lastIndex = 0,
                i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "regex",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.invalid_string,
                    validation: {
                        includes: i.value,
                        position: i.position
                    },
                    message: i.message
                }),
                r.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.invalid_string,
                    validation: {
                        startsWith: i.value
                    },
                    message: i.message
                }),
                r.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.invalid_string,
                    validation: {
                        endsWith: i.value
                    },
                    message: i.message
                }),
                r.dirty()) : i.kind === "datetime" ? Gg(i).test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.invalid_string,
                    validation: "datetime",
                    message: i.message
                }),
                r.dirty()) : i.kind === "date" ? Wg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.invalid_string,
                    validation: "date",
                    message: i.message
                }),
                r.dirty()) : i.kind === "time" ? Kg(i).test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    code: W.invalid_string,
                    validation: "time",
                    message: i.message
                }),
                r.dirty()) : i.kind === "duration" ? Fg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "duration",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty()) : i.kind === "ip" ? Jg(e.data, i.version) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "ip",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty()) : i.kind === "jwt" ? Yg(e.data, i.alg) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "jwt",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty()) : i.kind === "cidr" ? Xg(e.data, i.version) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "cidr",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty()) : i.kind === "base64" ? Vg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "base64",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty()) : i.kind === "base64url" ? Zg.test(e.data) || (s = this._getOrReturnCtx(e, s),
                ie(s, {
                    validation: "base64url",
                    code: W.invalid_string,
                    message: i.message
                }),
                r.dirty()) : Be.assertNever(i);
        return {
            status: r.value,
            value: e.data
        }
    }
    _regex(e, t, r) {
        return this.refinement(s => e.test(s), {
            validation: t,
            code: W.invalid_string,
            ...ce.errToObj(r)
        })
    }
    _addCheck(e) {
        return new $n({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...ce.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...ce.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...ce.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...ce.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...ce.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...ce.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...ce.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...ce.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...ce.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...ce.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...ce.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...ce.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...ce.errToObj(e)
        })
    }
    datetime(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (e == null ? void 0 : e.offset) ?? !1,
            local: (e == null ? void 0 : e.local) ?? !1,
            ...ce.errToObj(e == null ? void 0 : e.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            ...ce.errToObj(e == null ? void 0 : e.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...ce.errToObj(e)
        })
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...ce.errToObj(t)
        })
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: t == null ? void 0 : t.position,
            ...ce.errToObj(t == null ? void 0 : t.message)
        })
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...ce.errToObj(t)
        })
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...ce.errToObj(t)
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...ce.errToObj(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...ce.errToObj(t)
        })
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...ce.errToObj(t)
        })
    }
    nonempty(e) {
        return this.min(1, ce.errToObj(e))
    }
    trim() {
        return new $n({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new $n({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new $n({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(e => e.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(e => e.kind === "base64url")
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
$n.create = n => new $n({
    checks: [],
    typeName: ye.ZodString,
    coerce: (n == null ? void 0 : n.coerce) ?? !1,
    ...xe(n)
});
function Qg(n, e) {
    const t = (n.toString().split(".")[1] || "").length
      , r = (e.toString().split(".")[1] || "").length
      , s = t > r ? t : r
      , i = Number.parseInt(n.toFixed(s).replace(".", ""))
      , o = Number.parseInt(e.toFixed(s).replace(".", ""));
    return i % o / 10 ** s
}
class Fr extends Ie {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== oe.number) {
            const i = this._getOrReturnCtx(e);
            return ie(i, {
                code: W.invalid_type,
                expected: oe.number,
                received: i.parsedType
            }),
            pe
        }
        let r;
        const s = new Qt;
        for (const i of this._def.checks)
            i.kind === "int" ? Be.isInteger(e.data) || (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.invalid_type,
                expected: "integer",
                received: "float",
                message: i.message
            }),
            s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.too_small,
                minimum: i.value,
                type: "number",
                inclusive: i.inclusive,
                exact: !1,
                message: i.message
            }),
            s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.too_big,
                maximum: i.value,
                type: "number",
                inclusive: i.inclusive,
                exact: !1,
                message: i.message
            }),
            s.dirty()) : i.kind === "multipleOf" ? Qg(e.data, i.value) !== 0 && (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.not_multiple_of,
                multipleOf: i.value,
                message: i.message
            }),
            s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.not_finite,
                message: i.message
            }),
            s.dirty()) : Be.assertNever(i);
        return {
            status: s.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, ce.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, ce.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, ce.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, ce.toString(t))
    }
    setLimit(e, t, r, s) {
        return new Fr({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: ce.toString(s)
            }]
        })
    }
    _addCheck(e) {
        return new Fr({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: ce.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: ce.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: ce.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: ce.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: ce.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ce.toString(t)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: ce.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: ce.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: ce.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && Be.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , t = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
                return !0;
            r.kind === "min" ? (t === null || r.value > t) && (t = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(t) && Number.isFinite(e)
    }
}
Fr.create = n => new Fr({
    checks: [],
    typeName: ye.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...xe(n)
});
class oi extends Ie {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce)
            try {
                e.data = BigInt(e.data)
            } catch {
                return this._getInvalidInput(e)
            }
        if (this._getType(e) !== oe.bigint)
            return this._getInvalidInput(e);
        let r;
        const s = new Qt;
        for (const i of this._def.checks)
            i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.too_small,
                type: "bigint",
                minimum: i.value,
                inclusive: i.inclusive,
                message: i.message
            }),
            s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.too_big,
                type: "bigint",
                maximum: i.value,
                inclusive: i.inclusive,
                message: i.message
            }),
            s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r),
            ie(r, {
                code: W.not_multiple_of,
                multipleOf: i.value,
                message: i.message
            }),
            s.dirty()) : Be.assertNever(i);
        return {
            status: s.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        const t = this._getOrReturnCtx(e);
        return ie(t, {
            code: W.invalid_type,
            expected: oe.bigint,
            received: t.parsedType
        }),
        pe
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, ce.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, ce.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, ce.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, ce.toString(t))
    }
    setLimit(e, t, r, s) {
        return new oi({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: r,
                message: ce.toString(s)
            }]
        })
    }
    _addCheck(e) {
        return new oi({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: ce.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: ce.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: ce.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: ce.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ce.toString(t)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
oi.create = n => new oi({
    checks: [],
    typeName: ye.ZodBigInt,
    coerce: (n == null ? void 0 : n.coerce) ?? !1,
    ...xe(n)
});
class Ro extends Ie {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== oe.boolean) {
            const r = this._getOrReturnCtx(e);
            return ie(r, {
                code: W.invalid_type,
                expected: oe.boolean,
                received: r.parsedType
            }),
            pe
        }
        return on(e.data)
    }
}
Ro.create = n => new Ro({
    typeName: ye.ZodBoolean,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...xe(n)
});
class Xi extends Ie {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== oe.date) {
            const i = this._getOrReturnCtx(e);
            return ie(i, {
                code: W.invalid_type,
                expected: oe.date,
                received: i.parsedType
            }),
            pe
        }
        if (Number.isNaN(e.data.getTime())) {
            const i = this._getOrReturnCtx(e);
            return ie(i, {
                code: W.invalid_date
            }),
            pe
        }
        const r = new Qt;
        let s;
        for (const i of this._def.checks)
            i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s),
            ie(s, {
                code: W.too_small,
                message: i.message,
                inclusive: !0,
                exact: !1,
                minimum: i.value,
                type: "date"
            }),
            r.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s),
            ie(s, {
                code: W.too_big,
                message: i.message,
                inclusive: !0,
                exact: !1,
                maximum: i.value,
                type: "date"
            }),
            r.dirty()) : Be.assertNever(i);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new Xi({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: ce.toString(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: ce.toString(t)
        })
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
}
Xi.create = n => new Xi({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: ye.ZodDate,
    ...xe(n)
});
class vc extends Ie {
    _parse(e) {
        if (this._getType(e) !== oe.symbol) {
            const r = this._getOrReturnCtx(e);
            return ie(r, {
                code: W.invalid_type,
                expected: oe.symbol,
                received: r.parsedType
            }),
            pe
        }
        return on(e.data)
    }
}
vc.create = n => new vc({
    typeName: ye.ZodSymbol,
    ...xe(n)
});
class Mo extends Ie {
    _parse(e) {
        if (this._getType(e) !== oe.undefined) {
            const r = this._getOrReturnCtx(e);
            return ie(r, {
                code: W.invalid_type,
                expected: oe.undefined,
                received: r.parsedType
            }),
            pe
        }
        return on(e.data)
    }
}
Mo.create = n => new Mo({
    typeName: ye.ZodUndefined,
    ...xe(n)
});
class To extends Ie {
    _parse(e) {
        if (this._getType(e) !== oe.null) {
            const r = this._getOrReturnCtx(e);
            return ie(r, {
                code: W.invalid_type,
                expected: oe.null,
                received: r.parsedType
            }),
            pe
        }
        return on(e.data)
    }
}
To.create = n => new To({
    typeName: ye.ZodNull,
    ...xe(n)
});
class _c extends Ie {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return on(e.data)
    }
}
_c.create = n => new _c({
    typeName: ye.ZodAny,
    ...xe(n)
});
class xc extends Ie {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return on(e.data)
    }
}
xc.create = n => new xc({
    typeName: ye.ZodUnknown,
    ...xe(n)
});
class Kn extends Ie {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return ie(t, {
            code: W.invalid_type,
            expected: oe.never,
            received: t.parsedType
        }),
        pe
    }
}
Kn.create = n => new Kn({
    typeName: ye.ZodNever,
    ...xe(n)
});
class Ec extends Ie {
    _parse(e) {
        if (this._getType(e) !== oe.undefined) {
            const r = this._getOrReturnCtx(e);
            return ie(r, {
                code: W.invalid_type,
                expected: oe.void,
                received: r.parsedType
            }),
            pe
        }
        return on(e.data)
    }
}
Ec.create = n => new Ec({
    typeName: ye.ZodVoid,
    ...xe(n)
});
class mn extends Ie {
    _parse(e) {
        const {ctx: t, status: r} = this._processInputParams(e)
          , s = this._def;
        if (t.parsedType !== oe.array)
            return ie(t, {
                code: W.invalid_type,
                expected: oe.array,
                received: t.parsedType
            }),
            pe;
        if (s.exactLength !== null) {
            const o = t.data.length > s.exactLength.value
              , a = t.data.length < s.exactLength.value;
            (o || a) && (ie(t, {
                code: o ? W.too_big : W.too_small,
                minimum: a ? s.exactLength.value : void 0,
                maximum: o ? s.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: s.exactLength.message
            }),
            r.dirty())
        }
        if (s.minLength !== null && t.data.length < s.minLength.value && (ie(t, {
            code: W.too_small,
            minimum: s.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.minLength.message
        }),
        r.dirty()),
        s.maxLength !== null && t.data.length > s.maxLength.value && (ie(t, {
            code: W.too_big,
            maximum: s.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.maxLength.message
        }),
        r.dirty()),
        t.common.async)
            return Promise.all([...t.data].map( (o, a) => s.type._parseAsync(new Wn(t,o,t.path,a)))).then(o => Qt.mergeArray(r, o));
        const i = [...t.data].map( (o, a) => s.type._parseSync(new Wn(t,o,t.path,a)));
        return Qt.mergeArray(r, i)
    }
    get element() {
        return this._def.type
    }
    min(e, t) {
        return new mn({
            ...this._def,
            minLength: {
                value: e,
                message: ce.toString(t)
            }
        })
    }
    max(e, t) {
        return new mn({
            ...this._def,
            maxLength: {
                value: e,
                message: ce.toString(t)
            }
        })
    }
    length(e, t) {
        return new mn({
            ...this._def,
            exactLength: {
                value: e,
                message: ce.toString(t)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
mn.create = (n, e) => new mn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ye.ZodArray,
    ...xe(e)
});
function Ar(n) {
    if (n instanceof bt) {
        const e = {};
        for (const t in n.shape) {
            const r = n.shape[t];
            e[t] = Bn.create(Ar(r))
        }
        return new bt({
            ...n._def,
            shape: () => e
        })
    } else
        return n instanceof mn ? new mn({
            ...n._def,
            type: Ar(n.element)
        }) : n instanceof Bn ? Bn.create(Ar(n.unwrap())) : n instanceof cr ? cr.create(Ar(n.unwrap())) : n instanceof sr ? sr.create(n.items.map(e => Ar(e))) : n
}
class bt extends Ie {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
          , t = Be.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        },
        this._cached
    }
    _parse(e) {
        if (this._getType(e) !== oe.object) {
            const m = this._getOrReturnCtx(e);
            return ie(m, {
                code: W.invalid_type,
                expected: oe.object,
                received: m.parsedType
            }),
            pe
        }
        const {status: r, ctx: s} = this._processInputParams(e)
          , {shape: i, keys: o} = this._getCached()
          , a = [];
        if (!(this._def.catchall instanceof Kn && this._def.unknownKeys === "strip"))
            for (const m in s.data)
                o.includes(m) || a.push(m);
        const l = [];
        for (const m of o) {
            const h = i[m]
              , E = s.data[m];
            l.push({
                key: {
                    status: "valid",
                    value: m
                },
                value: h._parse(new Wn(s,E,s.path,m)),
                alwaysSet: m in s.data
            })
        }
        if (this._def.catchall instanceof Kn) {
            const m = this._def.unknownKeys;
            if (m === "passthrough")
                for (const h of a)
                    l.push({
                        key: {
                            status: "valid",
                            value: h
                        },
                        value: {
                            status: "valid",
                            value: s.data[h]
                        }
                    });
            else if (m === "strict")
                a.length > 0 && (ie(s, {
                    code: W.unrecognized_keys,
                    keys: a
                }),
                r.dirty());
            else if (m !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const m = this._def.catchall;
            for (const h of a) {
                const E = s.data[h];
                l.push({
                    key: {
                        status: "valid",
                        value: h
                    },
                    value: m._parse(new Wn(s,E,s.path,h)),
                    alwaysSet: h in s.data
                })
            }
        }
        return s.common.async ? Promise.resolve().then(async () => {
            const m = [];
            for (const h of l) {
                const E = await h.key
                  , B = await h.value;
                m.push({
                    key: E,
                    value: B,
                    alwaysSet: h.alwaysSet
                })
            }
            return m
        }
        ).then(m => Qt.mergeObjectSync(r, m)) : Qt.mergeObjectSync(r, l)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return ce.errToObj,
        new bt({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (t, r) => {
                    var i, o;
                    const s = ((o = (i = this._def).errorMap) == null ? void 0 : o.call(i, t, r).message) ?? r.defaultError;
                    return t.code === "unrecognized_keys" ? {
                        message: ce.errToObj(e).message ?? s
                    } : {
                        message: s
                    }
                }
            } : {}
        })
    }
    strip() {
        return new bt({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new bt({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new bt({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new bt({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: ye.ZodObject
        })
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        })
    }
    catchall(e) {
        return new bt({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const t = {};
        for (const r of Be.objectKeys(e))
            e[r] && this.shape[r] && (t[r] = this.shape[r]);
        return new bt({
            ...this._def,
            shape: () => t
        })
    }
    omit(e) {
        const t = {};
        for (const r of Be.objectKeys(this.shape))
            e[r] || (t[r] = this.shape[r]);
        return new bt({
            ...this._def,
            shape: () => t
        })
    }
    deepPartial() {
        return Ar(this)
    }
    partial(e) {
        const t = {};
        for (const r of Be.objectKeys(this.shape)) {
            const s = this.shape[r];
            e && !e[r] ? t[r] = s : t[r] = s.optional()
        }
        return new bt({
            ...this._def,
            shape: () => t
        })
    }
    required(e) {
        const t = {};
        for (const r of Be.objectKeys(this.shape))
            if (e && !e[r])
                t[r] = this.shape[r];
            else {
                let i = this.shape[r];
                for (; i instanceof Bn; )
                    i = i._def.innerType;
                t[r] = i
            }
        return new bt({
            ...this._def,
            shape: () => t
        })
    }
    keyof() {
        return El(Be.objectKeys(this.shape))
    }
}
bt.create = (n, e) => new bt({
    shape: () => n,
    unknownKeys: "strip",
    catchall: Kn.create(),
    typeName: ye.ZodObject,
    ...xe(e)
});
bt.strictCreate = (n, e) => new bt({
    shape: () => n,
    unknownKeys: "strict",
    catchall: Kn.create(),
    typeName: ye.ZodObject,
    ...xe(e)
});
bt.lazycreate = (n, e) => new bt({
    shape: n,
    unknownKeys: "strip",
    catchall: Kn.create(),
    typeName: ye.ZodObject,
    ...xe(e)
});
class Qi extends Ie {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e)
          , r = this._def.options;
        function s(i) {
            for (const a of i)
                if (a.result.status === "valid")
                    return a.result;
            for (const a of i)
                if (a.result.status === "dirty")
                    return t.common.issues.push(...a.ctx.common.issues),
                    a.result;
            const o = i.map(a => new Mn(a.ctx.common.issues));
            return ie(t, {
                code: W.invalid_union,
                unionErrors: o
            }),
            pe
        }
        if (t.common.async)
            return Promise.all(r.map(async i => {
                const o = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await i._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: o
                    }),
                    ctx: o
                }
            }
            )).then(s);
        {
            let i;
            const o = [];
            for (const l of r) {
                const m = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }
                  , h = l._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: m
                });
                if (h.status === "valid")
                    return h;
                h.status === "dirty" && !i && (i = {
                    result: h,
                    ctx: m
                }),
                m.common.issues.length && o.push(m.common.issues)
            }
            if (i)
                return t.common.issues.push(...i.ctx.common.issues),
                i.result;
            const a = o.map(l => new Mn(l));
            return ie(t, {
                code: W.invalid_union,
                unionErrors: a
            }),
            pe
        }
    }
    get options() {
        return this._def.options
    }
}
Qi.create = (n, e) => new Qi({
    options: n,
    typeName: ye.ZodUnion,
    ...xe(e)
});
const En = n => n instanceof Co ? En(n.schema) : n instanceof ar ? En(n.innerType()) : n instanceof ts ? [n.value] : n instanceof or ? n.options : n instanceof Lo ? Be.objectValues(n.enum) : n instanceof rs ? En(n._def.innerType) : n instanceof Mo ? [void 0] : n instanceof To ? [null] : n instanceof Bn ? [void 0, ...En(n.unwrap())] : n instanceof cr ? [null, ...En(n.unwrap())] : n instanceof Sl || n instanceof ss ? En(n.unwrap()) : n instanceof is ? En(n._def.innerType) : [];
class Ea extends Ie {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== oe.object)
            return ie(t, {
                code: W.invalid_type,
                expected: oe.object,
                received: t.parsedType
            }),
            pe;
        const r = this.discriminator
          , s = t.data[r]
          , i = this.optionsMap.get(s);
        return i ? t.common.async ? i._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
        }) : i._parseSync({
            data: t.data,
            path: t.path,
            parent: t
        }) : (ie(t, {
            code: W.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r]
        }),
        pe)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, t, r) {
        const s = new Map;
        for (const i of t) {
            const o = En(i.shape[e]);
            if (!o.length)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const a of o) {
                if (s.has(a))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                s.set(a, i)
            }
        }
        return new Ea({
            typeName: ye.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: s,
            ...xe(r)
        })
    }
}
function Oo(n, e) {
    const t = Dn(n)
      , r = Dn(e);
    if (n === e)
        return {
            valid: !0,
            data: n
        };
    if (t === oe.object && r === oe.object) {
        const s = Be.objectKeys(e)
          , i = Be.objectKeys(n).filter(a => s.indexOf(a) !== -1)
          , o = {
            ...n,
            ...e
        };
        for (const a of i) {
            const l = Oo(n[a], e[a]);
            if (!l.valid)
                return {
                    valid: !1
                };
            o[a] = l.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (t === oe.array && r === oe.array) {
        if (n.length !== e.length)
            return {
                valid: !1
            };
        const s = [];
        for (let i = 0; i < n.length; i++) {
            const o = n[i]
              , a = e[i]
              , l = Oo(o, a);
            if (!l.valid)
                return {
                    valid: !1
                };
            s.push(l.data)
        }
        return {
            valid: !0,
            data: s
        }
    } else
        return t === oe.date && r === oe.date && +n == +e ? {
            valid: !0,
            data: n
        } : {
            valid: !1
        }
}
class es extends Ie {
    _parse(e) {
        const {status: t, ctx: r} = this._processInputParams(e)
          , s = (i, o) => {
            if (yc(i) || yc(o))
                return pe;
            const a = Oo(i.value, o.value);
            return a.valid ? ((wc(i) || wc(o)) && t.dirty(),
            {
                status: t.value,
                value: a.data
            }) : (ie(r, {
                code: W.invalid_intersection_types
            }),
            pe)
        }
        ;
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then( ([i,o]) => s(i, o)) : s(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
es.create = (n, e, t) => new es({
    left: n,
    right: e,
    typeName: ye.ZodIntersection,
    ...xe(t)
});
class sr extends Ie {
    _parse(e) {
        const {status: t, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== oe.array)
            return ie(r, {
                code: W.invalid_type,
                expected: oe.array,
                received: r.parsedType
            }),
            pe;
        if (r.data.length < this._def.items.length)
            return ie(r, {
                code: W.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            pe;
        !this._def.rest && r.data.length > this._def.items.length && (ie(r, {
            code: W.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        t.dirty());
        const i = [...r.data].map( (o, a) => {
            const l = this._def.items[a] || this._def.rest;
            return l ? l._parse(new Wn(r,o,r.path,a)) : null
        }
        ).filter(o => !!o);
        return r.common.async ? Promise.all(i).then(o => Qt.mergeArray(t, o)) : Qt.mergeArray(t, i)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new sr({
            ...this._def,
            rest: e
        })
    }
}
sr.create = (n, e) => {
    if (!Array.isArray(n))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new sr({
        items: n,
        typeName: ye.ZodTuple,
        rest: null,
        ...xe(e)
    })
}
;
class Sc extends Ie {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: t, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== oe.map)
            return ie(r, {
                code: W.invalid_type,
                expected: oe.map,
                received: r.parsedType
            }),
            pe;
        const s = this._def.keyType
          , i = this._def.valueType
          , o = [...r.data.entries()].map( ([a,l], m) => ({
            key: s._parse(new Wn(r,a,r.path,[m, "key"])),
            value: i._parse(new Wn(r,l,r.path,[m, "value"]))
        }));
        if (r.common.async) {
            const a = new Map;
            return Promise.resolve().then(async () => {
                for (const l of o) {
                    const m = await l.key
                      , h = await l.value;
                    if (m.status === "aborted" || h.status === "aborted")
                        return pe;
                    (m.status === "dirty" || h.status === "dirty") && t.dirty(),
                    a.set(m.value, h.value)
                }
                return {
                    status: t.value,
                    value: a
                }
            }
            )
        } else {
            const a = new Map;
            for (const l of o) {
                const m = l.key
                  , h = l.value;
                if (m.status === "aborted" || h.status === "aborted")
                    return pe;
                (m.status === "dirty" || h.status === "dirty") && t.dirty(),
                a.set(m.value, h.value)
            }
            return {
                status: t.value,
                value: a
            }
        }
    }
}
Sc.create = (n, e, t) => new Sc({
    valueType: e,
    keyType: n,
    typeName: ye.ZodMap,
    ...xe(t)
});
class ai extends Ie {
    _parse(e) {
        const {status: t, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== oe.set)
            return ie(r, {
                code: W.invalid_type,
                expected: oe.set,
                received: r.parsedType
            }),
            pe;
        const s = this._def;
        s.minSize !== null && r.data.size < s.minSize.value && (ie(r, {
            code: W.too_small,
            minimum: s.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.minSize.message
        }),
        t.dirty()),
        s.maxSize !== null && r.data.size > s.maxSize.value && (ie(r, {
            code: W.too_big,
            maximum: s.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.maxSize.message
        }),
        t.dirty());
        const i = this._def.valueType;
        function o(l) {
            const m = new Set;
            for (const h of l) {
                if (h.status === "aborted")
                    return pe;
                h.status === "dirty" && t.dirty(),
                m.add(h.value)
            }
            return {
                status: t.value,
                value: m
            }
        }
        const a = [...r.data.values()].map( (l, m) => i._parse(new Wn(r,l,r.path,m)));
        return r.common.async ? Promise.all(a).then(l => o(l)) : o(a)
    }
    min(e, t) {
        return new ai({
            ...this._def,
            minSize: {
                value: e,
                message: ce.toString(t)
            }
        })
    }
    max(e, t) {
        return new ai({
            ...this._def,
            maxSize: {
                value: e,
                message: ce.toString(t)
            }
        })
    }
    size(e, t) {
        return this.min(e, t).max(e, t)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
ai.create = (n, e) => new ai({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: ye.ZodSet,
    ...xe(e)
});
class Co extends Ie {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        })
    }
}
Co.create = (n, e) => new Co({
    getter: n,
    typeName: ye.ZodLazy,
    ...xe(e)
});
class ts extends Ie {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return ie(t, {
                received: t.data,
                code: W.invalid_literal,
                expected: this._def.value
            }),
            pe
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
ts.create = (n, e) => new ts({
    value: n,
    typeName: ye.ZodLiteral,
    ...xe(e)
});
function El(n, e) {
    return new or({
        values: n,
        typeName: ye.ZodEnum,
        ...xe(e)
    })
}
class or extends Ie {
    _parse(e) {
        if (typeof e.data != "string") {
            const t = this._getOrReturnCtx(e)
              , r = this._def.values;
            return ie(t, {
                expected: Be.joinValues(r),
                received: t.parsedType,
                code: W.invalid_type
            }),
            pe
        }
        if (this._cache || (this._cache = new Set(this._def.values)),
        !this._cache.has(e.data)) {
            const t = this._getOrReturnCtx(e)
              , r = this._def.values;
            return ie(t, {
                received: t.data,
                code: W.invalid_enum_value,
                options: r
            }),
            pe
        }
        return on(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const t of this._def.values)
            e[t] = t;
        return e
    }
    get Values() {
        const e = {};
        for (const t of this._def.values)
            e[t] = t;
        return e
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values)
            e[t] = t;
        return e
    }
    extract(e, t=this._def) {
        return or.create(e, {
            ...this._def,
            ...t
        })
    }
    exclude(e, t=this._def) {
        return or.create(this.options.filter(r => !e.includes(r)), {
            ...this._def,
            ...t
        })
    }
}
or.create = El;
class Lo extends Ie {
    _parse(e) {
        const t = Be.getValidEnumValues(this._def.values)
          , r = this._getOrReturnCtx(e);
        if (r.parsedType !== oe.string && r.parsedType !== oe.number) {
            const s = Be.objectValues(t);
            return ie(r, {
                expected: Be.joinValues(s),
                received: r.parsedType,
                code: W.invalid_type
            }),
            pe
        }
        if (this._cache || (this._cache = new Set(Be.getValidEnumValues(this._def.values))),
        !this._cache.has(e.data)) {
            const s = Be.objectValues(t);
            return ie(r, {
                received: r.data,
                code: W.invalid_enum_value,
                options: s
            }),
            pe
        }
        return on(e.data)
    }
    get enum() {
        return this._def.values
    }
}
Lo.create = (n, e) => new Lo({
    values: n,
    typeName: ye.ZodNativeEnum,
    ...xe(e)
});
class ns extends Ie {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== oe.promise && t.common.async === !1)
            return ie(t, {
                code: W.invalid_type,
                expected: oe.promise,
                received: t.parsedType
            }),
            pe;
        const r = t.parsedType === oe.promise ? t.data : Promise.resolve(t.data);
        return on(r.then(s => this._def.type.parseAsync(s, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        })))
    }
}
ns.create = (n, e) => new ns({
    type: n,
    typeName: ye.ZodPromise,
    ...xe(e)
});
class ar extends Ie {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === ye.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {status: t, ctx: r} = this._processInputParams(e)
          , s = this._def.effect || null
          , i = {
            addIssue: o => {
                ie(r, o),
                o.fatal ? t.abort() : t.dirty()
            }
            ,
            get path() {
                return r.path
            }
        };
        if (i.addIssue = i.addIssue.bind(i),
        s.type === "preprocess") {
            const o = s.transform(r.data, i);
            if (r.common.async)
                return Promise.resolve(o).then(async a => {
                    if (t.value === "aborted")
                        return pe;
                    const l = await this._def.schema._parseAsync({
                        data: a,
                        path: r.path,
                        parent: r
                    });
                    return l.status === "aborted" ? pe : l.status === "dirty" || t.value === "dirty" ? Jr(l.value) : l
                }
                );
            {
                if (t.value === "aborted")
                    return pe;
                const a = this._def.schema._parseSync({
                    data: o,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? pe : a.status === "dirty" || t.value === "dirty" ? Jr(a.value) : a
            }
        }
        if (s.type === "refinement") {
            const o = a => {
                const l = s.refinement(a, i);
                if (r.common.async)
                    return Promise.resolve(l);
                if (l instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return a
            }
            ;
            if (r.common.async === !1) {
                const a = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? pe : (a.status === "dirty" && t.dirty(),
                o(a.value),
                {
                    status: t.value,
                    value: a.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(a => a.status === "aborted" ? pe : (a.status === "dirty" && t.dirty(),
                o(a.value).then( () => ({
                    status: t.value,
                    value: a.value
                }))))
        }
        if (s.type === "transform")
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!Ur(o))
                    return pe;
                const a = s.transform(o.value, i);
                if (a instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: t.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(o => Ur(o) ? Promise.resolve(s.transform(o.value, i)).then(a => ({
                    status: t.value,
                    value: a
                })) : pe);
        Be.assertNever(s)
    }
}
ar.create = (n, e, t) => new ar({
    schema: n,
    typeName: ye.ZodEffects,
    effect: e,
    ...xe(t)
});
ar.createWithPreprocess = (n, e, t) => new ar({
    schema: e,
    effect: {
        type: "preprocess",
        transform: n
    },
    typeName: ye.ZodEffects,
    ...xe(t)
});
class Bn extends Ie {
    _parse(e) {
        return this._getType(e) === oe.undefined ? on(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
Bn.create = (n, e) => new Bn({
    innerType: n,
    typeName: ye.ZodOptional,
    ...xe(e)
});
class cr extends Ie {
    _parse(e) {
        return this._getType(e) === oe.null ? on(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
cr.create = (n, e) => new cr({
    innerType: n,
    typeName: ye.ZodNullable,
    ...xe(e)
});
class rs extends Ie {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        let r = t.data;
        return t.parsedType === oe.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
rs.create = (n, e) => new rs({
    innerType: n,
    typeName: ye.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...xe(e)
});
class is extends Ie {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e)
          , r = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }
          , s = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return Yi(s) ? s.then(i => ({
            status: "valid",
            value: i.status === "valid" ? i.value : this._def.catchValue({
                get error() {
                    return new Mn(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new Mn(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
is.create = (n, e) => new is({
    innerType: n,
    typeName: ye.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...xe(e)
});
class kc extends Ie {
    _parse(e) {
        if (this._getType(e) !== oe.nan) {
            const r = this._getOrReturnCtx(e);
            return ie(r, {
                code: W.invalid_type,
                expected: oe.nan,
                received: r.parsedType
            }),
            pe
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
kc.create = n => new kc({
    typeName: ye.ZodNaN,
    ...xe(n)
});
class Sl extends Ie {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e)
          , r = t.data;
        return this._def.type._parse({
            data: r,
            path: t.path,
            parent: t
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Sa extends Ie {
    _parse(e) {
        const {status: t, ctx: r} = this._processInputParams(e);
        if (r.common.async)
            return (async () => {
                const i = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return i.status === "aborted" ? pe : i.status === "dirty" ? (t.dirty(),
                Jr(i.value)) : this._def.out._parseAsync({
                    data: i.value,
                    path: r.path,
                    parent: r
                })
            }
            )();
        {
            const s = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return s.status === "aborted" ? pe : s.status === "dirty" ? (t.dirty(),
            {
                status: "dirty",
                value: s.value
            }) : this._def.out._parseSync({
                data: s.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, t) {
        return new Sa({
            in: e,
            out: t,
            typeName: ye.ZodPipeline
        })
    }
}
class ss extends Ie {
    _parse(e) {
        const t = this._def.innerType._parse(e)
          , r = s => (Ur(s) && (s.value = Object.freeze(s.value)),
        s);
        return Yi(t) ? t.then(s => r(s)) : r(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
ss.create = (n, e) => new ss({
    innerType: n,
    typeName: ye.ZodReadonly,
    ...xe(e)
});
var ye;
(function(n) {
    n.ZodString = "ZodString",
    n.ZodNumber = "ZodNumber",
    n.ZodNaN = "ZodNaN",
    n.ZodBigInt = "ZodBigInt",
    n.ZodBoolean = "ZodBoolean",
    n.ZodDate = "ZodDate",
    n.ZodSymbol = "ZodSymbol",
    n.ZodUndefined = "ZodUndefined",
    n.ZodNull = "ZodNull",
    n.ZodAny = "ZodAny",
    n.ZodUnknown = "ZodUnknown",
    n.ZodNever = "ZodNever",
    n.ZodVoid = "ZodVoid",
    n.ZodArray = "ZodArray",
    n.ZodObject = "ZodObject",
    n.ZodUnion = "ZodUnion",
    n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    n.ZodIntersection = "ZodIntersection",
    n.ZodTuple = "ZodTuple",
    n.ZodRecord = "ZodRecord",
    n.ZodMap = "ZodMap",
    n.ZodSet = "ZodSet",
    n.ZodFunction = "ZodFunction",
    n.ZodLazy = "ZodLazy",
    n.ZodLiteral = "ZodLiteral",
    n.ZodEnum = "ZodEnum",
    n.ZodEffects = "ZodEffects",
    n.ZodNativeEnum = "ZodNativeEnum",
    n.ZodOptional = "ZodOptional",
    n.ZodNullable = "ZodNullable",
    n.ZodDefault = "ZodDefault",
    n.ZodCatch = "ZodCatch",
    n.ZodPromise = "ZodPromise",
    n.ZodBranded = "ZodBranded",
    n.ZodPipeline = "ZodPipeline",
    n.ZodReadonly = "ZodReadonly"
}
)(ye || (ye = {}));
const tt = $n.create
  , kl = Fr.create
  , ey = Ro.create;
Kn.create;
const tr = mn.create
  , Rt = bt.create
  , os = Qi.create
  , Al = Ea.create;
es.create;
sr.create;
const jt = ts.create
  , ka = or.create;
ns.create;
Bn.create;
cr.create;
const ty = /[@#$%^&*+=/\\|~«»]/
  , ny = /(!{2,}|\?{2,}|-{2,})/
  , ry = /[\u{1F300}-\u{1F9FF}]|[\u{2702}-\u{27B0}]|[\u{2600}-\u{26FF}]|[\u{2B00}-\u{2BFF}]/u
  , gr = ({max: n, noSpaces: e}={}) => (e ? tt().max(n ?? Number.POSITIVE_INFINITY).regex(/^\S*$/, "Spaces are not allowed") : tt().max(n ?? Number.POSITIVE_INFINITY)).refine(r => !ry.test(r), {
    message: "Emojis and symbols are not allowed"
}).refine(r => !ty.test(r), {
    message: "Special characters (@, #, $, %, ^, &, *, +, =, /, \\, |, ~, «, ») are not allowed"
}).refine(r => !ny.test(r), {
    message: "Repeated punctuations (!!, ??, --) are not allowed"
})
  , Pt = tt().url().startsWith("https://", {
    message: "Must be an https url"
}).max(1024).refine(n => !n.includes(" "), {
    message: "URL must not contain spaces"
}).refine(n => {
    try {
        const e = new URL(n).hostname;
        return !(e === "localhost" || e.endsWith(".localhost") || /^(\d{1,3}\.){3}\d{1,3}$/.test(e) || e.startsWith("[") && e.endsWith("]"))
    } catch {
        return !1
    }
}
, {
    message: "URL must not use IP addresses or localhost"
})
  , Is = tt().max(32)
  , Aa = tt().max(32)
  , iy = /^[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}\/(?:[-a-z0-9]{3,8}:[-.%a-zA-Z0-9]{1,128}(?:\/[-.%a-zA-Z0-9]{1,78})?|native)$/
  , Il = tt().regex(iy, {
    message: "Invalid CAIP-19 asset ID"
})
  , Bs = tt().regex(/^#([0-9A-F]{3}|[0-9A-F]{6})$/i, {
    message: "Invalid hex color code. It should be in the format #RRGGBB or #RGB."
})
  , sy = /^(?!.*\.\.)([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/
  , Bl = tt().max(1024).regex(sy, {
    message: "Must be a valid domain name (e.g., example.com, sub.example.com)"
}).refine(n => !n.includes("://"), {
    message: "Domain must not include protocol (http://, https://, etc.)"
}).refine(n => !n.includes("/"), {
    message: "Domain must not include path separators"
}).refine(n => !n.includes("@"), {
    message: "Domain must not include @ symbol"
}).refine(n => !n.includes(":"), {
    message: "Domain must not include port numbers"
})
  , Rl = os([jt("1:1"), jt("3:2")])
  , Ml = Rt({
    header: tt(),
    payload: tt(),
    signature: tt()
})
  , oy = Rt({
    fid: kl(),
    type: jt("app_key"),
    key: tt().startsWith("0x")
})
  , Tl = Rt({
    type: jt("launch_frame"),
    name: Is,
    url: Pt.optional(),
    splashImageUrl: Pt.optional(),
    splashBackgroundColor: Bs.optional()
})
  , Ol = Rt({
    type: jt("launch_miniapp"),
    name: Is,
    url: Pt.optional(),
    splashImageUrl: Pt.optional(),
    splashBackgroundColor: Bs.optional()
})
  , Cl = Rt({
    type: jt("view_token"),
    token: Il
})
  , Ll = Al("type", [Ol, Cl, Tl])
  , Nl = Rt({
    title: Aa,
    action: Ll
})
  , Pl = Rt({
    version: os([tt(), kl()]).transform(n => String(n)).pipe(os([jt("next"), jt("1")])),
    imageUrl: Pt,
    aspectRatio: Rl.optional(),
    button: Nl
})
  , Ul = n => Pl.safeParse(n)
  , ay = Ul
  , Ia = Rt({
    url: tt(),
    token: tt()
})
  , cy = Rt({
    notificationId: tt().max(128),
    title: tt().max(32),
    body: tt().max(128),
    targetUrl: Pt,
    tokens: tt().array().max(100)
})
  , uy = Rt({
    result: Rt({
        successfulTokens: tr(tt()),
        invalidTokens: tr(tt()),
        rateLimitedTokens: tr(tt())
    })
})
  , Fl = Rt({
    event: jt("miniapp_added"),
    notificationDetails: Ia.optional()
})
  , Dl = Rt({
    event: jt("miniapp_removed")
})
  , jl = Rt({
    event: jt("notifications_enabled"),
    notificationDetails: Ia.required()
})
  , zl = Rt({
    event: jt("notifications_disabled")
})
  , ly = Al("event", [Fl, Dl, jl, zl])
  , fy = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ql = ["wallet.getEthereumProvider", "wallet.getSolanaProvider", "actions.ready", "actions.openUrl", "actions.close", "actions.setPrimaryButton", "actions.addMiniApp", "actions.signIn", "actions.viewCast", "actions.viewProfile", "actions.composeCast", "actions.viewToken", "actions.sendToken", "actions.swapToken", "actions.openMiniApp", "actions.requestCameraAndMicrophoneAccess", "experimental.signManifest", "haptics.impactOccurred", "haptics.notificationOccurred", "haptics.selectionChanged", "back"]
  , $l = ["games", "social", "finance", "utility", "productivity", "health-fitness", "news-media", "music", "shopping", "education", "developer-tools", "entertainment", "art-creativity"]
  , Hl = ka($l)
  , Vl = os([jt("0.0.0"), jt("0.0.1"), jt("1"), jt("next")])
  , Zl = gr({
    max: 30
})
  , Wl = gr({
    max: 170
})
  , Kl = tr(Pt).max(3)
  , Gl = tr(gr({
    max: 20,
    noSpaces: !0
})).max(5)
  , Jl = gr({
    max: 30
})
  , Yl = gr({
    max: 30
})
  , Xl = gr({
    max: 100
})
  , Ql = ey()
  , ef = ["eip155:1", "eip155:8453", "eip155:42161", "eip155:421614", "eip155:84532", "eip155:666666666", "eip155:100", "eip155:10", "eip155:11155420", "eip155:137", "eip155:11155111", "eip155:7777777", "eip155:130", "eip155:10143", "eip155:42220", "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"];
function tf(n) {
    const e = new Set(n);
    return Array.from(e)
}
const nf = tr(ka(ef)).transform(tf)
  , rf = tr(ka(ql)).transform(tf)
  , No = Rt({
    version: Vl,
    name: Is,
    iconUrl: Pt,
    homeUrl: Pt,
    imageUrl: Pt.optional(),
    buttonTitle: Aa.optional(),
    splashImageUrl: Pt.optional(),
    splashBackgroundColor: Bs.optional(),
    webhookUrl: Pt.optional(),
    subtitle: Zl.optional(),
    description: Wl.optional(),
    screenshotUrls: Kl.optional(),
    primaryCategory: Hl.optional(),
    tags: Gl.optional(),
    heroImageUrl: Pt.optional(),
    tagline: Jl.optional(),
    ogTitle: Yl.optional(),
    ogDescription: Xl.optional(),
    ogImageUrl: Pt.optional(),
    noindex: Ql.optional(),
    requiredChains: nf.optional(),
    requiredCapabilities: rf.optional(),
    castShareUrl: Pt.optional(),
    canonicalDomain: Bl.optional()
}).refine(n => {
    if (n.castShareUrl === void 0)
        return !0;
    try {
        const e = new URL(n.homeUrl).hostname
          , t = new URL(n.castShareUrl).hostname;
        return e === t
    } catch {
        return !1
    }
}
, {
    message: "castShareUrl must have the same domain as homeUrl",
    path: ["castShareUrl"]
})
  , dy = Rt({
    accountAssociation: Ml,
    miniapp: No.optional(),
    frame: No.optional()
}).refine(n => n.frame && n.miniapp ? JSON.stringify(n.frame) === JSON.stringify(n.miniapp) : !0, {
    message: 'If both "frame" and "miniapp" are provided, they must be identical',
    path: ["frame", "miniapp"]
}).transform(n => ({
    ...n,
    frame: n.frame ?? n.miniapp
}))
  , sf = n => ({
    request: n,
    signMessage: e => n({
        method: "signMessage",
        params: {
            message: e
        }
    }),
    signTransaction: e => n({
        method: "signTransaction",
        params: {
            transaction: e
        }
    }),
    signAndSendTransaction: e => n({
        method: "signAndSendTransaction",
        params: e
    })
});
function Po(n) {
    return xt.from(n.serialize({
        verifySignatures: !1
    })).toString("base64")
}
function Uo(n) {
    const e = xt.from(n, "base64");
    return ga.deserializeMessageVersion(e) === "legacy" ? ya.deserialize(e) : In.from(e)
}
function hy(n) {
    return async t => {
        if (t.method === "connect")
            return await n(t);
        if (t.method === "signMessage")
            return await n(t);
        if (t.method === "signAndSendTransaction") {
            const {transaction: r, options: s} = t.params
              , i = {
                transaction: Uo(r),
                options: s
            };
            return await n({
                method: "signAndSendTransaction",
                params: i
            })
        }
        if (t.method === "signTransaction") {
            const {transaction: r} = t.params
              , s = {
                transaction: Uo(r)
            }
              , {signedTransaction: i} = await n({
                method: "signTransaction",
                params: s
            });
            return {
                signedTransaction: Po(i)
            }
        }
    }
}
function of(n) {
    return async t => {
        if (t.method === "connect")
            return await n(t);
        if (t.method === "signMessage")
            return await n(t);
        if (t.method === "signAndSendTransaction") {
            const {transaction: r} = t.params
              , s = {
                transaction: Po(r)
            };
            return await n({
                method: "signAndSendTransaction",
                params: s
            })
        }
        if (t.method === "signTransaction") {
            const {transaction: r} = t.params
              , s = {
                transaction: Po(r)
            }
              , {signedTransaction: i} = await n({
                method: "signTransaction",
                params: s
            });
            return {
                signedTransaction: Uo(i)
            }
        }
    }
}
const py = ({miniAppHost: n, emitter: e}) => {
    let t, r = null;
    return {
        visible: !1,
        get onback() {
            return r
        },
        set onback(s) {
            r && e.removeListener("backNavigationTriggered", r),
            r = s,
            s && e.addListener("backNavigationTriggered", s)
        },
        async show() {
            await n.updateBackState({
                visible: !0
            }),
            this.visible = !0
        },
        async hide() {
            await n.updateBackState({
                visible: !1
            }),
            this.visible = !1
        },
        async enableWebNavigation() {
            t = my({
                back: this,
                emitter: e
            })
        },
        async disableWebNavigation() {
            t == null || t(),
            t = void 0
        }
    }
}
;
function my({emitter: n, back: e}) {
    const t = gy();
    if (t)
        return yy({
            emitter: n,
            back: e,
            navigation: t
        });
    if (typeof window < "u")
        return wy({
            emitter: n,
            back: e,
            window
        })
}
function gy() {
    if (typeof window < "u" && window.navigation !== void 0)
        return window.navigation
}
function yy({emitter: n, back: e, navigation: t}) {
    function r() {
        t.canGoBack ? e.show() : e.hide()
    }
    function s() {
        e.visible && t.canGoBack && t.back()
    }
    return t.addEventListener("navigatesuccess", r),
    n.addListener("backNavigationTriggered", s),
    () => {
        t.removeEventListener("navigatesuccess", r),
        n.removeListener("backNavigationTriggered", s)
    }
}
function wy({emitter: n, back: e, window: t}) {
    e.show();
    function r() {
        e.visible && t.history.back()
    }
    return n.addListener("backNavigationTriggered", r),
    () => {
        n.removeListener("backNavigationTriggered", r)
    }
}
const by = "0.1.1";
function vy() {
    return by
}
let _y = class Fo extends Error {
    constructor(e, t={}) {
        const r = ( () => {
            var l;
            if (t.cause instanceof Fo) {
                if (t.cause.details)
                    return t.cause.details;
                if (t.cause.shortMessage)
                    return t.cause.shortMessage
            }
            return (l = t.cause) != null && l.message ? t.cause.message : t.details
        }
        )()
          , s = t.cause instanceof Fo && t.cause.docsPath || t.docsPath
          , o = `https://oxlib.sh${s ?? ""}`
          , a = [e || "An error occurred.", ...t.metaMessages ? ["", ...t.metaMessages] : [], ...r || s ? ["", r ? `Details: ${r}` : void 0, s ? `See: ${o}` : void 0] : []].filter(l => typeof l == "string").join(`
`);
        super(a, t.cause ? {
            cause: t.cause
        } : void 0),
        Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "docs", {
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
        Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "cause", {
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
        Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: `ox@${vy()}`
        }),
        this.cause = t.cause,
        this.details = r,
        this.docs = o,
        this.docsPath = s,
        this.shortMessage = e
    }
    walk(e) {
        return af(this, e)
    }
}
;
function af(n, e) {
    return e != null && e(n) ? n : n && typeof n == "object" && "cause"in n && n.cause ? af(n.cause, e) : e ? null : n
}
function cf(n, e={}) {
    const {raw: t=!1} = e
      , r = n;
    if (t)
        return n;
    if (r.error) {
        const {code: s} = r.error
          , i = s === Dr.code ? Dr : s === ci.code ? ci : s === yi.code ? yi : s === mi.code ? mi : s === hi.code ? hi : s === gi.code ? gi : s === di.code ? di : s === wi.code ? wi : s === ui.code ? ui : s === li.code ? li : s === fi.code ? fi : s === pi.code ? pi : Wt;
        throw new i(r.error)
    }
    return r.result
}
let Wt = class extends Error {
    constructor(e) {
        const {code: t, message: r, data: s} = e;
        super(r),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.BaseError"
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
        this.code = t,
        this.data = s
    }
}
;
class ci extends Wt {
    constructor(e={}) {
        super({
            message: "Missing or invalid parameters.",
            ...e,
            code: ci.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32e3
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InvalidInputError"
        })
    }
}
Object.defineProperty(ci, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
class ui extends Wt {
    constructor(e={}) {
        super({
            message: "Requested resource not found.",
            ...e,
            code: ui.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32001
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.ResourceNotFoundError"
        })
    }
}
Object.defineProperty(ui, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
class li extends Wt {
    constructor(e={}) {
        super({
            message: "Requested resource not available.",
            ...e,
            code: li.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32002
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.ResourceUnavailableError"
        })
    }
}
Object.defineProperty(li, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
class fi extends Wt {
    constructor(e={}) {
        super({
            message: "Transaction creation failed.",
            ...e,
            code: fi.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32003
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.TransactionRejectedError"
        })
    }
}
Object.defineProperty(fi, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
class di extends Wt {
    constructor(e={}) {
        super({
            message: "Method is not implemented.",
            ...e,
            code: di.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32004
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.MethodNotSupportedError"
        })
    }
}
Object.defineProperty(di, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
class hi extends Wt {
    constructor(e={}) {
        super({
            message: "Rate limit exceeded.",
            ...e,
            code: hi.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32005
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.LimitExceededError"
        })
    }
}
Object.defineProperty(hi, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
class pi extends Wt {
    constructor(e={}) {
        super({
            message: "JSON-RPC version not supported.",
            ...e,
            code: pi.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32006
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.VersionNotSupportedError"
        })
    }
}
Object.defineProperty(pi, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
class mi extends Wt {
    constructor(e={}) {
        super({
            message: "Input is not a valid JSON-RPC request.",
            ...e,
            code: mi.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32600
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InvalidRequestError"
        })
    }
}
Object.defineProperty(mi, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
class gi extends Wt {
    constructor(e={}) {
        super({
            message: "Method does not exist.",
            ...e,
            code: gi.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32601
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.MethodNotFoundError"
        })
    }
}
Object.defineProperty(gi, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
class yi extends Wt {
    constructor(e={}) {
        super({
            message: "Invalid method parameters.",
            ...e,
            code: yi.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32602
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InvalidParamsError"
        })
    }
}
Object.defineProperty(yi, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
class Dr extends Wt {
    constructor(e={}) {
        super({
            message: "Internal JSON-RPC error.",
            ...e,
            code: Dr.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32603
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.InternalErrorError"
        })
    }
}
Object.defineProperty(Dr, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
class wi extends Wt {
    constructor(e={}) {
        super({
            message: "Failed to parse JSON-RPC response.",
            ...e,
            code: wi.code
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: -32700
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcResponse.ParseError"
        })
    }
}
Object.defineProperty(wi, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
class yr extends Error {
    constructor(e, t) {
        super(t),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderRpcError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.code = e,
        this.details = t
    }
}
class uf extends yr {
    constructor({message: e="The user rejected the request."}={}) {
        super(4001, e),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UserRejectedRequestError"
        })
    }
}
Object.defineProperty(uf, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
class lf extends yr {
    constructor({message: e="The requested method and/or account has not been authorized by the user."}={}) {
        super(4100, e),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UnauthorizedError"
        })
    }
}
Object.defineProperty(lf, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
class ff extends yr {
    constructor({message: e="The provider does not support the requested method."}={}) {
        super(4200, e),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.UnsupportedMethodError"
        })
    }
}
Object.defineProperty(ff, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
class df extends yr {
    constructor({message: e="The provider is disconnected from all chains."}={}) {
        super(4900, e),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.DisconnectedError"
        })
    }
}
Object.defineProperty(df, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
class hf extends yr {
    constructor({message: e="The provider is not connected to the requested chain."}={}) {
        super(4901, e),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.ChainDisconnectedError"
        })
    }
}
Object.defineProperty(hf, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
function xy() {
    const n = new Or;
    return {
        get eventNames() {
            return n.eventNames.bind(n)
        },
        get listenerCount() {
            return n.listenerCount.bind(n)
        },
        get listeners() {
            return n.listeners.bind(n)
        },
        addListener: n.addListener.bind(n),
        emit: n.emit.bind(n),
        off: n.off.bind(n),
        on: n.on.bind(n),
        once: n.once.bind(n),
        removeAllListeners: n.removeAllListeners.bind(n),
        removeListener: n.removeListener.bind(n)
    }
}
function Ey(n, e={}) {
    var r, s;
    const {includeEvents: t=!0} = e;
    if (!n)
        throw new Sy;
    return {
        ...t ? {
            on: (r = n.on) == null ? void 0 : r.bind(n),
            removeListener: (s = n.removeListener) == null ? void 0 : s.bind(n)
        } : {},
        async request(i) {
            const o = await n.request(i);
            return o && typeof o == "object" && "jsonrpc"in o ? cf(o) : o
        }
    }
}
class Sy extends _y {
    constructor() {
        super("`provider` is undefined."),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Provider.IsUndefinedError"
        })
    }
}
function ky(n={}) {
    let e = n.id ?? 0;
    return {
        prepare(t) {
            return Ay({
                id: e++,
                ...t
            })
        },
        get id() {
            return e
        }
    }
}
function Ay(n) {
    return {
        ...n,
        jsonrpc: "2.0"
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const pf = Symbol("Comlink.proxy")
  , Iy = Symbol("Comlink.endpoint")
  , By = Symbol("Comlink.releaseProxy")
  , yo = Symbol("Comlink.finalizer")
  , Fi = Symbol("Comlink.thrown")
  , mf = n => typeof n == "object" && n !== null || typeof n == "function"
  , Ry = {
    canHandle: n => mf(n) && n[pf],
    serialize(n) {
        const {port1: e, port2: t} = new MessageChannel;
        return yf(n, e),
        [t, [t]]
    },
    deserialize(n) {
        return n.start(),
        bf(n)
    }
}
  , My = {
    canHandle: n => mf(n) && Fi in n,
    serialize({value: n}) {
        let e;
        return n instanceof Error ? e = {
            isError: !0,
            value: {
                message: n.message,
                name: n.name,
                stack: n.stack
            }
        } : e = {
            isError: !1,
            value: n
        },
        [e, []]
    },
    deserialize(n) {
        throw n.isError ? Object.assign(new Error(n.value.message), n.value) : n.value
    }
}
  , gf = new Map([["proxy", Ry], ["throw", My]]);
function Ty(n, e) {
    for (const t of n)
        if (e === t || t === "*" || t instanceof RegExp && t.test(e))
            return !0;
    return !1
}
function yf(n, e=globalThis, t=["*"]) {
    e.addEventListener("message", function r(s) {
        if (!s || !s.data)
            return;
        if (!Ty(t, s.origin)) {
            console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
            return
        }
        const {id: i, type: o, path: a} = Object.assign({
            path: []
        }, s.data)
          , l = (s.data.argumentList || []).map(Yn);
        let m;
        try {
            const h = a.slice(0, -1).reduce( (B, k) => B[k], n)
              , E = a.reduce( (B, k) => B[k], n);
            switch (o) {
            case "GET":
                m = E;
                break;
            case "SET":
                h[a.slice(-1)[0]] = Yn(s.data.value),
                m = !0;
                break;
            case "APPLY":
                m = E.apply(h, l);
                break;
            case "CONSTRUCT":
                {
                    const B = new E(...l);
                    m = Uy(B)
                }
                break;
            case "ENDPOINT":
                {
                    const {port1: B, port2: k} = new MessageChannel;
                    yf(n, k),
                    m = Py(B, [B])
                }
                break;
            case "RELEASE":
                m = void 0;
                break;
            default:
                return
            }
        } catch (h) {
            m = {
                value: h,
                [Fi]: 0
            }
        }
        Promise.resolve(m).catch(h => ({
            value: h,
            [Fi]: 0
        })).then(h => {
            const [E,B] = us(h);
            e.postMessage(Object.assign(Object.assign({}, E), {
                id: i
            }), B),
            o === "RELEASE" && (e.removeEventListener("message", r),
            wf(e),
            yo in n && typeof n[yo] == "function" && n[yo]())
        }
        ).catch(h => {
            const [E,B] = us({
                value: new TypeError("Unserializable return value"),
                [Fi]: 0
            });
            e.postMessage(Object.assign(Object.assign({}, E), {
                id: i
            }), B)
        }
        )
    }),
    e.start && e.start()
}
function Oy(n) {
    return n.constructor.name === "MessagePort"
}
function wf(n) {
    Oy(n) && n.close()
}
function bf(n, e) {
    const t = new Map;
    return n.addEventListener("message", function(s) {
        const {data: i} = s;
        if (!i || !i.id)
            return;
        const o = t.get(i.id);
        if (o)
            try {
                o(i)
            } finally {
                t.delete(i.id)
            }
    }),
    Do(n, t, [], e)
}
function Pi(n) {
    if (n)
        throw new Error("Proxy has been released and is not useable")
}
function vf(n) {
    return Ir(n, new Map, {
        type: "RELEASE"
    }).then( () => {
        wf(n)
    }
    )
}
const as = new WeakMap
  , cs = "FinalizationRegistry"in globalThis && new FinalizationRegistry(n => {
    const e = (as.get(n) || 0) - 1;
    as.set(n, e),
    e === 0 && vf(n)
}
);
function Cy(n, e) {
    const t = (as.get(e) || 0) + 1;
    as.set(e, t),
    cs && cs.register(n, e, n)
}
function Ly(n) {
    cs && cs.unregister(n)
}
function Do(n, e, t=[], r=function() {}
) {
    let s = !1;
    const i = new Proxy(r,{
        get(o, a) {
            if (Pi(s),
            a === By)
                return () => {
                    Ly(i),
                    vf(n),
                    e.clear(),
                    s = !0
                }
                ;
            if (a === "then") {
                if (t.length === 0)
                    return {
                        then: () => i
                    };
                const l = Ir(n, e, {
                    type: "GET",
                    path: t.map(m => m.toString())
                }).then(Yn);
                return l.then.bind(l)
            }
            return Do(n, e, [...t, a])
        },
        set(o, a, l) {
            Pi(s);
            const [m,h] = us(l);
            return Ir(n, e, {
                type: "SET",
                path: [...t, a].map(E => E.toString()),
                value: m
            }, h).then(Yn)
        },
        apply(o, a, l) {
            Pi(s);
            const m = t[t.length - 1];
            if (m === Iy)
                return Ir(n, e, {
                    type: "ENDPOINT"
                }).then(Yn);
            if (m === "bind")
                return Do(n, e, t.slice(0, -1));
            const [h,E] = Ac(l);
            return Ir(n, e, {
                type: "APPLY",
                path: t.map(B => B.toString()),
                argumentList: h
            }, E).then(Yn)
        },
        construct(o, a) {
            Pi(s);
            const [l,m] = Ac(a);
            return Ir(n, e, {
                type: "CONSTRUCT",
                path: t.map(h => h.toString()),
                argumentList: l
            }, m).then(Yn)
        }
    });
    return Cy(i, n),
    i
}
function Ny(n) {
    return Array.prototype.concat.apply([], n)
}
function Ac(n) {
    const e = n.map(us);
    return [e.map(t => t[0]), Ny(e.map(t => t[1]))]
}
const _f = new WeakMap;
function Py(n, e) {
    return _f.set(n, e),
    n
}
function Uy(n) {
    return Object.assign(n, {
        [pf]: !0
    })
}
function Fy(n, e=globalThis, t="*") {
    return {
        postMessage: (r, s) => n.postMessage(r, t, s),
        addEventListener: e.addEventListener.bind(e),
        removeEventListener: e.removeEventListener.bind(e)
    }
}
function us(n) {
    for (const [e,t] of gf)
        if (t.canHandle(n)) {
            const [r,s] = t.serialize(n);
            return [{
                type: "HANDLER",
                name: e,
                value: r
            }, s]
        }
    return [{
        type: "RAW",
        value: n
    }, _f.get(n) || []]
}
function Yn(n) {
    switch (n.type) {
    case "HANDLER":
        return gf.get(n.name).deserialize(n.value);
    case "RAW":
        return n.value
    }
}
function Ir(n, e, t, r) {
    return new Promise(s => {
        const i = Dy();
        e.set(i, s),
        n.start && n.start(),
        n.postMessage(Object.assign({
            id: i
        }, t), r)
    }
    )
}
function Dy() {
    return new Array(4).fill(0).map( () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
}
const jy = {
    postMessage() {},
    addEventListener: () => {}
    ,
    removeEventListener: () => {}
}
  , zy = {
    postMessage: n => {
        window.ReactNativeWebView.postMessage(JSON.stringify(n))
    }
    ,
    addEventListener: (n, e, ...t) => {
        document.addEventListener("FarcasterFrameCallback", e, ...t)
    }
    ,
    removeEventListener: (n, e) => {
        document.removeEventListener("FarcasterFrameCallback", e)
    }
}
  , qy = typeof window > "u" ? jy : window != null && window.ReactNativeWebView ? zy : Fy((window == null ? void 0 : window.parent) ?? window)
  , ge = bf(qy)
  , $y = ge
  , Ba = xy()
  , Hy = ky();
function Vy({code: n, details: e}) {
    switch (n) {
    case 4001:
        return new uf;
    case 4100:
        return new lf;
    case 4200:
        return new ff;
    case 4900:
        return new df;
    case 4901:
        return new hf;
    default:
        return new yr(n,e ?? "Unknown provider RPC error")
    }
}
const bi = Ey({
    ...Ba,
    async request(n) {
        const e = Hy.prepare(n);
        try {
            const t = await ge.ethProviderRequestV2(e).then(r => cf(r, {
                request: e,
                raw: !0
            }));
            if (t.error)
                throw Vy(t.error);
            return t.result
        } catch (t) {
            if (t instanceof Error && t.message.match(/cannot read property 'apply'/i))
                return await ge.ethProviderRequest(e);
            throw t instanceof yr || t instanceof Wt ? t : new Dr({
                message: t instanceof Error ? t.message : void 0
            })
        }
    }
});
async function Zy() {
    try {
        const n = await ge.getCapabilities();
        return !n.includes("wallet.getEthereumProvider") && !n.includes("wallet.getEvmProvider") ? void 0 : bi
    } catch {
        return bi
    }
}
function xf(n) {
    const e = new CustomEvent("eip6963:announceProvider",{
        detail: Object.freeze(n)
    });
    window.dispatchEvent(e);
    const t = () => window.dispatchEvent(e);
    return window.addEventListener("eip6963:requestProvider", t),
    () => window.removeEventListener("eip6963:requestProvider", t)
}
typeof document < "u" && (document.addEventListener("eip6963:requestProvider", () => {
    ge.eip6963RequestProvider()
}
),
document.addEventListener("FarcasterFrameEthProviderEvent", n => {
    if (n instanceof MessageEvent) {
        const e = n.data;
        Ba.emit(e.event, ...e.params)
    }
}
),
document.addEventListener("FarcasterFrameEvent", n => {
    if (n instanceof MessageEvent) {
        const e = n.data;
        e.event === "eip6963:announceProvider" && xf({
            info: e.info,
            provider: bi
        })
    }
}
));
typeof window < "u" && (window.addEventListener("eip6963:requestProvider", () => {
    ge.eip6963RequestProvider()
}
),
window.addEventListener("message", n => {
    if (n instanceof MessageEvent && n.data.type === "frameEthProviderEvent") {
        const e = n.data;
        Ba.emit(e.event, ...e.params)
    }
}
),
window.addEventListener("message", n => {
    if (n instanceof MessageEvent && n.data.type === "frameEvent") {
        const e = n.data.event;
        e.event === "eip6963:announceProvider" && xf({
            info: e.info,
            provider: bi
        })
    }
}
));
new TextEncoder;
const Ef = new TextDecoder
  , Wy = n => {
    const e = atob(n)
      , t = new Uint8Array(e.length);
    for (let r = 0; r < e.length; r++)
        t[r] = e.charCodeAt(r);
    return t
}
  , Ky = n => {
    let e = n;
    e instanceof Uint8Array && (e = Ef.decode(e)),
    e = e.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
        return Wy(e)
    } catch {
        throw new TypeError("The input to be decoded is not correctly encoded.")
    }
}
  , Gy = Ky;
function Jy(n) {
    return typeof n == "object" && n !== null
}
function Yy(n) {
    if (!Jy(n) || Object.prototype.toString.call(n) !== "[object Object]")
        return !1;
    if (Object.getPrototypeOf(n) === null)
        return !0;
    let e = n;
    for (; Object.getPrototypeOf(e) !== null; )
        e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(n) === e
}
class Ht extends Error {
    constructor(e, t) {
        var r;
        super(e, t),
        this.code = "ERR_JOSE_GENERIC",
        this.name = this.constructor.name,
        (r = Error.captureStackTrace) == null || r.call(Error, this, this.constructor)
    }
}
Ht.code = "ERR_JOSE_GENERIC";
class Xy extends Ht {
    constructor(e, t, r="unspecified", s="unspecified") {
        super(e, {
            cause: {
                claim: r,
                reason: s,
                payload: t
            }
        }),
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED",
        this.claim = r,
        this.reason = s,
        this.payload = t
    }
}
Xy.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
class Qy extends Ht {
    constructor(e, t, r="unspecified", s="unspecified") {
        super(e, {
            cause: {
                claim: r,
                reason: s,
                payload: t
            }
        }),
        this.code = "ERR_JWT_EXPIRED",
        this.claim = r,
        this.reason = s,
        this.payload = t
    }
}
Qy.code = "ERR_JWT_EXPIRED";
class ew extends Ht {
    constructor() {
        super(...arguments),
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
    }
}
ew.code = "ERR_JOSE_ALG_NOT_ALLOWED";
class tw extends Ht {
    constructor() {
        super(...arguments),
        this.code = "ERR_JOSE_NOT_SUPPORTED"
    }
}
tw.code = "ERR_JOSE_NOT_SUPPORTED";
class nw extends Ht {
    constructor(e="decryption operation failed", t) {
        super(e, t),
        this.code = "ERR_JWE_DECRYPTION_FAILED"
    }
}
nw.code = "ERR_JWE_DECRYPTION_FAILED";
class rw extends Ht {
    constructor() {
        super(...arguments),
        this.code = "ERR_JWE_INVALID"
    }
}
rw.code = "ERR_JWE_INVALID";
class iw extends Ht {
    constructor() {
        super(...arguments),
        this.code = "ERR_JWS_INVALID"
    }
}
iw.code = "ERR_JWS_INVALID";
class Pn extends Ht {
    constructor() {
        super(...arguments),
        this.code = "ERR_JWT_INVALID"
    }
}
Pn.code = "ERR_JWT_INVALID";
class sw extends Ht {
    constructor() {
        super(...arguments),
        this.code = "ERR_JWK_INVALID"
    }
}
sw.code = "ERR_JWK_INVALID";
class ow extends Ht {
    constructor() {
        super(...arguments),
        this.code = "ERR_JWKS_INVALID"
    }
}
ow.code = "ERR_JWKS_INVALID";
class aw extends Ht {
    constructor(e="no applicable key found in the JSON Web Key Set", t) {
        super(e, t),
        this.code = "ERR_JWKS_NO_MATCHING_KEY"
    }
}
aw.code = "ERR_JWKS_NO_MATCHING_KEY";
class cw extends Ht {
    constructor(e="multiple matching keys found in the JSON Web Key Set", t) {
        super(e, t),
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
    }
}
cw.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
class uw extends Ht {
    constructor(e="request timed out", t) {
        super(e, t),
        this.code = "ERR_JWKS_TIMEOUT"
    }
}
uw.code = "ERR_JWKS_TIMEOUT";
class lw extends Ht {
    constructor(e="signature verification failed", t) {
        super(e, t),
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
    }
}
lw.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
function fw(n) {
    if (typeof n != "string")
        throw new Pn("JWTs must use Compact JWS serialization, JWT must be a string");
    const {1: e, length: t} = n.split(".");
    if (t === 5)
        throw new Pn("Only JWTs using Compact JWS serialization can be decoded");
    if (t !== 3)
        throw new Pn("Invalid JWT");
    if (!e)
        throw new Pn("JWTs must contain a payload");
    let r;
    try {
        r = Gy(e)
    } catch {
        throw new Pn("Failed to base64url decode the payload")
    }
    let s;
    try {
        s = JSON.parse(Ef.decode(r))
    } catch {
        throw new Pn("Failed to parse the decoded payload as JSON")
    }
    if (!Yy(s))
        throw new Pn("Invalid JWT Claims Set");
    return s
}
function dw(n) {
    return fw(n)
}
class Rs extends Error {
    constructor(e, t={}) {
        const r = ( () => {
            var i;
            if (t.cause instanceof Rs) {
                if (t.cause.details)
                    return t.cause.details;
                if (t.cause.shortMessage)
                    return t.cause.shortMessage
            }
            return t.cause && "details"in t.cause && typeof t.cause.details == "string" ? t.cause.details : (i = t.cause) != null && i.message ? t.cause.message : t.details
        }
        )()
          , s = [e || "An error occurred.", ...t.metaMessages ? ["", ...t.metaMessages] : [], ...r ? ["", r ? `Details: ${r}` : void 0] : []].filter(i => typeof i == "string").join(`
`);
        super(s, t.cause ? {
            cause: t.cause
        } : void 0),
        this.name = "BaseError",
        this.cause = t.cause,
        this.details = r,
        this.shortMessage = e
    }
}
class Sf extends Rs {
    constructor({status: e}) {
        super(`Request failed with status ${e}`),
        this.name = "RequestFailedError"
    }
}
class hw extends Rs {
    constructor(e) {
        super(e),
        this.name = "InvalidToken"
    }
}
async function pw({origin: n}) {
    const e = await fetch(`${n}/nonce`, {
        method: "POST"
    });
    if (!e.ok)
        throw new Sf({
            status: e.status
        });
    return await e.json()
}
async function mw({origin: n}, e) {
    const t = await fetch(`${n}/verify-siwf`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(e)
    });
    if (!t.ok)
        throw new Sf({
            status: t.status
        });
    const r = await t.json();
    if (r.valid === !1)
        throw new hw(r.message ?? "unknown");
    return {
        token: r.token
    }
}
function gw(n={}) {
    return {
        origin: n.origin ?? "https://auth.farcaster.xyz"
    }
}
function yw(n={}) {
    const e = gw(n);
    return {
        generateNonce: () => pw(e),
        verifySiwf: t => mw(e, t)
    }
}
const ww = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/
  , bw = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function vw(n) {
    var E, B, k;
    const {scheme: e, statement: t, ...r} = ((E = n.match(ww)) == null ? void 0 : E.groups) ?? {}
      , {chainId: s, expirationTime: i, issuedAt: o, notBefore: a, requestId: l, ...m} = ((B = n.match(bw)) == null ? void 0 : B.groups) ?? {}
      , h = (k = n.split("Resources:")[1]) == null ? void 0 : k.split(`
- `).slice(1);
    return {
        ...r,
        ...m,
        ...s ? {
            chainId: Number(s)
        } : {},
        ...i ? {
            expirationTime: new Date(i)
        } : {},
        ...o ? {
            issuedAt: new Date(o)
        } : {},
        ...a ? {
            notBefore: new Date(a)
        } : {},
        ...l ? {
            requestId: l
        } : {},
        ...h ? {
            resources: h
        } : {},
        ...e ? {
            scheme: e
        } : {},
        ...t ? {
            statement: t
        } : {}
    }
}
const ls = ( () => {
    let n, e;
    async function t(r) {
        const s = yw({
            origin: r.quickAuthServerOrigin
        })
          , {nonce: i} = await s.generateNonce()
          , o = await ge.signIn({
            nonce: i,
            acceptAuthAddress: !0
        });
        if (o.result) {
            const a = vw(o.result.message);
            if (!a.domain)
                throw new Error("Missing domain on SIWE message");
            const l = await s.verifySiwf({
                domain: a.domain,
                message: o.result.message,
                signature: o.result.signature
            });
            return n = {
                token: l.token,
                payload: dw(l.token)
            },
            l
        }
        throw o.error.type === "rejected_by_user" ? new xa : new Error("Unreachable")
    }
    return {
        get token() {
            if (n && new Date(n.payload.exp * 1e3) > new Date(Date.now() + 15e3))
                return n.token
        },
        async getToken(r={}) {
            const s = r.force ?? !1;
            return n && !s && new Date(n.payload.exp * 1e3) > new Date(Date.now() + 15e3) ? {
                token: n.token
            } : (e || (e = t(r)),
            e.finally( () => {
                e = void 0
            }
            ),
            e)
        },
        async fetch(r, s) {
            const {token: i} = await this.getToken()
              , o = new Headers(s == null ? void 0 : s.headers);
            return o.set("Authorization", `Bearer ${i}`),
            fetch(r, {
                ...s,
                headers: o
            })
        }
    }
}
)()
  , _w = Object.freeze(Object.defineProperty({
    __proto__: null,
    quickAuth: ls
}, Symbol.toStringTag, {
    value: "Module"
}));
function xw() {
    const n = new Or;
    return {
        get eventNames() {
            return n.eventNames.bind(n)
        },
        get listenerCount() {
            return n.listenerCount.bind(n)
        },
        get listeners() {
            return n.listeners.bind(n)
        },
        addListener: n.addListener.bind(n),
        emit: n.emit.bind(n),
        off: n.off.bind(n),
        on: n.on.bind(n),
        once: n.once.bind(n),
        removeAllListeners: n.removeAllListeners.bind(n),
        removeListener: n.removeListener.bind(n)
    }
}
const Ut = xw()
  , {solanaProviderRequest: Ic} = ge;
let kf;
Ic && (kf = sf(of(Ic)));
async function Bc() {
    let n;
    try {
        n = await ge.getCapabilities()
    } catch {}
    if (n != null && n.includes("wallet.getSolanaProvider"))
        return kf
}
let Rc = null;
async function Ew(n=1e3) {
    if (Rc === !0)
        return !0;
    if (typeof window > "u" || !window.ReactNativeWebView && window === window.parent)
        return !1;
    const e = await Promise.race([ge.context.then(t => !!t), new Promise(t => {
        setTimeout( () => t(!1), n)
    }
    )]).catch( () => !1);
    return e && (Rc = !0),
    e
}
const Mc = async () => {
    const n = await ge.addFrame();
    if (n.result)
        return n.result;
    throw n.error.type === "invalid_domain_manifest" ? new ml : n.error.type === "rejected_by_user" ? new gl : new Error("Unreachable")
}
  , Tc = {
    ...Ut,
    getCapabilities: ge.getCapabilities,
    getChains: ge.getChains,
    isInMiniApp: Ew,
    context: ge.context,
    back: py({
        miniAppHost: ge,
        emitter: Ut
    }),
    quickAuth: ls,
    actions: {
        setPrimaryButton: ge.setPrimaryButton.bind(ge),
        ready: async (n={}) => await ge.ready(n),
        close: ge.close.bind(ge),
        viewCast: ge.viewCast.bind(ge),
        viewProfile: ge.viewProfile.bind(ge),
        openMiniApp: ge.openMiniApp.bind(ge),
        signIn: async n => {
            const e = await ge.signIn(n);
            if (e.result)
                return e.result;
            throw e.error.type === "rejected_by_user" ? new xa : new Error("Unreachable")
        }
        ,
        openUrl: n => {
            const e = typeof n == "string" ? n : n.url;
            return ge.openUrl(e.trim())
        }
        ,
        addFrame: Mc,
        addMiniApp: Mc,
        composeCast(n={}) {
            return ge.composeCast(n)
        },
        viewToken: ge.viewToken.bind(ge),
        sendToken: ge.sendToken.bind(ge),
        swapToken: ge.swapToken.bind(ge),
        requestCameraAndMicrophoneAccess: ge.requestCameraAndMicrophoneAccess.bind(ge)
    },
    experimental: {
        getSolanaProvider: Bc,
        signManifest: async n => {
            const e = await ge.signManifest(n);
            if (e.result)
                return e.result;
            throw e.error.type === "rejected_by_user" ? new wl : e.error.type === "invalid_domain" ? new bl : e.error.type === "generic_error" ? new vl(e.error.message) : new Error("Unreachable")
        }
        ,
        quickAuth(n) {
            return ls.getToken(n)
        }
    },
    wallet: {
        ethProvider: bi,
        getEthereumProvider: Zy,
        getSolanaProvider: Bc
    },
    haptics: {
        impactOccurred: ge.impactOccurred.bind(ge),
        notificationOccurred: ge.notificationOccurred.bind(ge),
        selectionChanged: ge.selectionChanged.bind(ge)
    }
};
typeof document < "u" && document.addEventListener("FarcasterFrameEvent", n => {
    if (n instanceof MessageEvent) {
        const e = n.data;
        e.event === "primary_button_clicked" ? Ut.emit("primaryButtonClicked") : e.event === "miniapp_added" ? Ut.emit("miniAppAdded", {
            notificationDetails: e.notificationDetails
        }) : e.event === "miniapp_add_rejected" ? Ut.emit("miniAppAddRejected", {
            reason: e.reason
        }) : e.event === "miniapp_removed" ? Ut.emit("miniAppRemoved") : e.event === "notifications_enabled" ? Ut.emit("notificationsEnabled", {
            notificationDetails: e.notificationDetails
        }) : e.event === "notifications_disabled" ? Ut.emit("notificationsDisabled") : e.event === "back_navigation_triggered" && Ut.emit("backNavigationTriggered")
    }
}
);
typeof window < "u" && window.addEventListener("message", n => {
    if (n instanceof MessageEvent && n.data.type === "frameEvent") {
        const e = n.data.event;
        e.event === "primary_button_clicked" ? Ut.emit("primaryButtonClicked") : e.event === "miniapp_added" ? Ut.emit("miniAppAdded", {
            notificationDetails: e.notificationDetails
        }) : e.event === "miniapp_add_rejected" ? Ut.emit("miniAppAddRejected", {
            reason: e.reason
        }) : e.event === "miniapp_removed" ? Ut.emit("miniAppRemoved") : e.event === "notifications_enabled" ? Ut.emit("notificationsEnabled", {
            notificationDetails: e.notificationDetails
        }) : e.event === "notifications_disabled" ? Ut.emit("notificationsDisabled") : e.event === "back_navigation_triggered" && Ut.emit("backNavigationTriggered")
    }
}
);
const Uw = Object.freeze(Object.defineProperty({
    __proto__: null,
    AddMiniApp: fg,
    Back: kg,
    ComposeCast: dg,
    Context: Ag,
    DEFAULT_READY_OPTIONS: yl,
    Errors: lg,
    Ethereum: fy,
    Haptics: hg,
    Manifest: Bg,
    OpenMiniApp: pg,
    QuickAuth: _w,
    Ready: mg,
    RequestCameraAndMicrophoneAccess: gg,
    SendToken: yg,
    SignIn: wg,
    SignManifest: bg,
    SolanaConnection: ug,
    SwapToken: vg,
    ViewCast: _g,
    ViewProfile: xg,
    ViewToken: Eg,
    actionLaunchFrameSchema: Tl,
    actionLaunchMiniAppSchema: Ol,
    actionSchema: Ll,
    actionViewTokenSchema: Cl,
    aspectRatioSchema: Rl,
    buttonSchema: Nl,
    buttonTitleSchema: Aa,
    caip19TokenSchema: Il,
    chains: ef,
    createSimpleStringSchema: gr,
    createSolanaWalletProvider: sf,
    default: Tc,
    descriptionSchema: Wl,
    domainManifestSchema: dy,
    domainMiniAppConfigSchema: No,
    domainSchema: Bl,
    encodedJsonFarcasterSignatureSchema: Ml,
    eventMiniAppAddedSchema: Fl,
    eventMiniAppRemovedSchema: Dl,
    eventNotificationsEnabledSchema: jl,
    frameHost: $y,
    hexColorSchema: Bs,
    jsonFarcasterSignatureHeaderSchema: oy,
    miniAppEmbedNextSchema: Pl,
    miniAppHost: ge,
    miniAppHostCapabilityList: ql,
    miniAppNameSchema: Is,
    noindexSchema: Ql,
    notificationDetailsSchema: Ia,
    notificationsDisabledSchema: zl,
    ogDescriptionSchema: Xl,
    ogTitleSchema: Yl,
    primaryCategories: $l,
    primaryCategorySchema: Hl,
    quickAuth: ls,
    requiredCapabilitiesSchema: rf,
    requiredChainsSchema: nf,
    safeParseFrameEmbed: ay,
    safeParseMiniAppEmbed: Ul,
    screenshotUrlsSchema: Kl,
    sdk: Tc,
    secureUrlSchema: Pt,
    sendNotificationRequestSchema: cy,
    sendNotificationResponseSchema: uy,
    serverEventSchema: ly,
    subtitleSchema: Zl,
    taglineSchema: Jl,
    tagsSchema: Gl,
    unwrapSolanaProviderRequest: of,
    versionSchema: Vl,
    wrapSolanaProviderRequest: hy
}, Symbol.toStringTag, {
    value: "Module"
}));
export {jo as $, $t as A, nc as B, bp as C, Gu as D, pa as E, Ke as F, $r as G, ap as H, X0 as I, Aw as J, Jo as K, sp as L, rn as M, xt as N, Or as O, ch as P, Fc as Q, mp as R, lr as S, kw as T, ms as U, fs as V, yp as W, ei as X, $o as Y, Wc as Z, Ft as _, Dt as a, Bw as a0, un as a1, Mw as a2, Yo as a3, nr as a4, Ih as a5, ws as a6, he as a7, ya as a8, In as a9, Rw as aa, Uw as ab, De as b, It as c, _e as d, vt as e, za as f, Iu as g, Bu as h, xu as i, kt as j, Me as k, Y as l, L as m, Gt as n, re as o, ne as p, G as q, Si as r, ae as s, V as t, le as u, ep as v, er as w, gn as x, fe as y, ha as z};
