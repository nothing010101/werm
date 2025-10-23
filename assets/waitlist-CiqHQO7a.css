import {j as t, r as $, c as J} from "./client-Ckw6QIE1.js";
import {d as R, C as U, M as z, Q as B, b as X, a as q, W as L, D as T, T as I, F as P} from "./QueryClientProvider-DzLcd1Cv.js";
import {b as _} from "./backendUrl-JTRS_kt1.js";
import {a as O} from "./siwe-vpAHVoGc.js";
import {i as Q, c as K, W as V, u as Y, a as G, b as H, d as Z, e as ee} from "./useSignMessage-BNnY9tuU.js";
import {h as te} from "./http-Cf2zGJXm.js";
import "./farcaster-C92qEBt4.js";
import "./___vite-browser-external_commonjs-proxy-6ZTq1dOW.js";
import "./sha3-B-UYh5th.js";
const se = r => {
    const e = R.c(35)
      , {open: C, onClose: i, connectors: m, connectAsync: f, status: A, variables: y, loading: N, className: M, onConnected: d} = r;
    if (!C)
        return null;
    let b;
    e: {
        const g = y == null ? void 0 : y.connector;
        if (!g) {
            b = void 0;
            break e
        }
        const {id: n} = g;
        if (typeof n == "string") {
            b = n;
            break e
        }
        if (typeof n == "number") {
            let j;
            e[0] !== n ? (j = n.toString(),
            e[0] = n,
            e[1] = j) : j = e[1],
            b = j;
            break e
        }
        b = void 0
    }
    const x = b
      , a = A === "pending";
    let l;
    e[2] !== i ? (l = () => i(),
    e[2] = i,
    e[3] = l) : l = e[3];
    const W = `z-[100] font-sans-serif ${M ?? ""}`;
    let p, E;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (p = t.jsx("span", {
        className: "sr-only",
        children: "Close"
    }),
    E = t.jsx(U, {
        className: "p-[25%]"
    }),
    e[4] = p,
    e[5] = E) : (p = e[4],
    E = e[5]);
    let w;
    e[6] !== i ? (w = t.jsxs("button", {
        "aria-label": "Close",
        className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 icon-[#FFF4] hover:bg-black/10 hover:icon-[#FFF8] focus:outline-none focus:ring-2 focus:ring-indigo-400/60 cursor-pointer",
        onClick: i,
        children: [p, E]
    }),
    e[6] = i,
    e[7] = w) : w = e[7];
    let u;
    e[8] === Symbol.for("react.memo_cache_sentinel") ? (u = t.jsx("div", {
        className: "px-6 pb-4 pt-6 sm:px-8 sm:pt-8 text-center",
        children: t.jsx("h2", {
            className: "text-2xl sm:text-[1.7rem] font-semibold text-slate-900 dark:text-white",
            children: "Select a wallet"
        })
    }),
    e[8] = u) : u = e[8];
    let s;
    if (e[9] !== f || e[10] !== m || e[11] !== a || e[12] !== i || e[13] !== d || e[14] !== x) {
        let g;
        e[16] !== f || e[17] !== a || e[18] !== i || e[19] !== d || e[20] !== x ? (g = (n, j) => {
            var S;
            const c = n.id ?? `${n.name ?? "connector"}-${j}`
              , k = x && `${x}` == `${n.id}` && a;
            return t.jsxs("button", {
                onClick: () => {
                    f && f({
                        connector: n
                    }).then( () => {
                        i(),
                        d == null || d()
                    }
                    ).catch(ne)
                }
                ,
                disabled: !f,
                className: "group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white hover:bg-slate-50 px-4 py-3 text-left text-slate-900 shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 text-base disabled:cursor-not-allowed disabled:opacity-70",
                children: [n != null && n.icon ? t.jsx("img", {
                    src: n.icon,
                    alt: "",
                    className: "h-6 w-6 rounded"
                }) : t.jsx("div", {
                    className: "flex h-6 w-6 items-center justify-center rounded bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-white/80",
                    children: t.jsx("span", {
                        className: "text-xs font-bold",
                        children: ((S = n.name) == null ? void 0 : S[0]) ?? "?"
                    })
                }), t.jsxs("span", {
                    className: "flex-1 truncate font-medium",
                    children: [n.name ?? "Unnamed Wallet", k ? " (connecting...)" : ""]
                })]
            }, c)
        }
        ,
        e[16] = f,
        e[17] = a,
        e[18] = i,
        e[19] = d,
        e[20] = x,
        e[21] = g) : g = e[21],
        s = m.map(g),
        e[9] = f,
        e[10] = m,
        e[11] = a,
        e[12] = i,
        e[13] = d,
        e[14] = x,
        e[15] = s
    } else
        s = e[15];
    let o;
    e[22] !== m.length || e[23] !== N ? (o = m.length === 0 && t.jsx("div", {
        className: "rounded-lg border border-dashed border-slate-300/70 p-4 text-center text-sm text-slate-600 dark:border-white/10 dark:text-white/60",
        children: N ? "Loading wallets..." : "No EVM wallets available"
    }),
    e[22] = m.length,
    e[23] = N,
    e[24] = o) : o = e[24];
    let h;
    e[25] !== s || e[26] !== o ? (h = t.jsx("div", {
        className: "max-h-[70vh] overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8",
        children: t.jsx("section", {
            children: t.jsxs("div", {
                className: "grid grid-cols-1 gap-3",
                children: [s, o]
            })
        })
    }),
    e[25] = s,
    e[26] = o,
    e[27] = h) : h = e[27];
    let v;
    e[28] !== h || e[29] !== w ? (v = t.jsx("div", {
        className: "w-full max-w-lg sm:max-w-xl px-3",
        children: t.jsxs("div", {
            className: "relative w-full rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl ring-1 ring-black/5 dark:ring-white/10",
            children: [w, u, h]
        })
    }),
    e[28] = h,
    e[29] = w,
    e[30] = v) : v = e[30];
    let F;
    return e[31] !== v || e[32] !== l || e[33] !== W ? (F = t.jsx(z, {
        onClose: l,
        className: W,
        children: v
    }),
    e[31] = v,
    e[32] = l,
    e[33] = W,
    e[34] = F) : F = e[34],
    F
}
;
function ne(r) {
    console.error("Failed to connect EVM wallet:", r)
}
const re = new B
  , ae = X({
    createConfig: K,
    http: te,
    injected: Q
})
  , oe = () => {
    const {address: r, isConnected: e, connector: C} = Y()
      , {connectAsync: i, connectors: m, status: f, variables: A, isPending: y} = G()
      , {disconnect: N} = H()
      , {signMessageAsync: M} = Z()
      , d = ee()
      , [b,x] = $.useState(null)
      , [a,l] = $.useState({
        phase: "idle"
    })
      , [W,p] = $.useState(!1);
    $.useEffect( () => {
        (async () => {
            try {
                const s = `${_(window)}/waitlist/`
                  , o = await fetch(s);
                if (!o.ok)
                    throw new Error("Failed to fetch waitlist count");
                const h = await o.json();
                x(h.count)
            } catch (s) {
                console.error("Error fetching waitlist count:", s),
                x(0)
            }
        }
        )()
    }
    , []),
    $.useEffect( () => {
        a.phase === "fetch-nonce" && e && r && (async () => {
            try {
                if (!M)
                    throw new Error("Wallet is not ready to sign messages");
                if (!d)
                    throw new Error("Unable to determine connected chain");
                const s = `${_(window)}/waitlist/nonce`
                  , o = await fetch(s);
                if (!o.ok) {
                    const c = await o.json().catch( () => ({}));
                    if (o.status === 429) {
                        const k = c.retryAfter || o.headers.get("Retry-After")
                          , S = k ? ` Please try again in ${k} seconds.` : " Please try again later.";
                        throw new Error((c.error || "Too many requests.") + S)
                    }
                    throw new Error(c.error || "Failed to fetch nonce")
                }
                const {nonce: h} = await o.json();
                l({
                    phase: "joining"
                });
                const F = new O.SiweMessage({
                    domain: window.location.host,
                    address: r,
                    statement: "Sign in to join the WERM waitlist.",
                    uri: window.location.origin,
                    version: "1",
                    chainId: d,
                    nonce: h
                }).prepareMessage()
                  , g = await M({
                    message: F
                })
                  , n = C == null ? void 0 : C.name
                  , j = `${_(window)}/waitlist/join`
                  , D = await fetch(j, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: F,
                        signature: g,
                        walletName: n,
                        nonce: h
                    })
                });
                if (D.ok) {
                    const c = await D.json();
                    x(c.count),
                    l({
                        phase: "joined",
                        nonce: c.nonce,
                        message: c.message,
                        signature: g
                    });
                    return
                } else {
                    const c = await D.json().catch( () => ({}));
                    if (D.status === 429) {
                        const k = c.retryAfter || D.headers.get("Retry-After")
                          , S = k ? ` Please try again in ${k} seconds.` : " Please try again later.";
                        throw new Error((c.error || "Too many requests.") + S)
                    }
                    throw new Error(c.error || "Failed to join waitlist")
                }
            } catch (s) {
                console.error("Error joining waitlist:", s);
                const o = s instanceof Error ? s.message : "Failed to join waitlist";
                l({
                    phase: "error",
                    error: o
                }),
                s instanceof Error && !s.message.includes("try again") && N()
            }
        }
        )()
    }
    , [a.phase, e, r, M, d, C, N]);
    const E = () => {
        const u = m.length;
        if (u === 1 && i) {
            i({
                connector: m[0]
            }).then( () => {
                l({
                    phase: "fetch-nonce"
                })
            }
            ).catch(s => {
                console.error("Failed to connect:", s),
                p(!0)
            }
            );
            return
        }
        u > 1 && p(!0)
    }
      , w = () => {
        N(),
        l({
            phase: "idle"
        })
    }
    ;
    return t.jsxs("div", {
        className: "min-h-screen relative grid grid-cols-1 grid-rows-1 items-center justify-center justify-items-center p-4 bg-gradient-to-b from-[#BAE1EC] to-[#77D7F3] font-sans-serif",
        children: [t.jsxs("div", {
            className: "relative rounded-xl mx-4 bg-[#FFF4] p-8 md:p-16 max-w-[30em] grid grid-cols-1 grid-rows-1",
            children: [t.jsxs("div", {
                className: `row-start-1 row-span-1 col-start-1 col-span-1 self-center ${a.phase === "joined" ? "invisible" : "z-1"}`,
                children: [t.jsx(L, {
                    className: "[--height:min(10em,min(25dvh,75dvw))] [--padding-block:calc((100dvh-var(--height))/5)]  -mx-8 md:-mx-16"
                }), t.jsxs("div", {
                    className: "text-center mb-4",
                    children: [t.jsx("h2", {
                        className: "text-4xl leading-tight font-bold text-[#051D24] mb-2",
                        children: "Join the WERM waitlist"
                    }), t.jsx("p", {
                        className: "text-base sm:text-lg text-[#051D24/75] mb-8",
                        children: "Connect your wallet for priority access when we go live"
                    }), !e && a.phase !== "joined" && t.jsx("button", {
                        onClick: E,
                        disabled: y,
                        className: "px-4 py-2 text-lg sm:text-xl font-semibold text-white rounded-full shadow-lg bg-[#FF4D8C] enabled:hover:bg-[#E5447F] disabled:opacity-50 disabled:cursor-not-allowed",
                        children: y ? "Connecting..." : "Connect Base wallet"
                    }), e && a.phase === "idle" && t.jsx("button", {
                        onClick: () => l({
                            phase: "fetch-nonce"
                        }),
                        className: "px-4 py-2 text-lg sm:text-xl font-semibold text-white rounded-full shadow-lg bg-[#FF4D8C] hover:bg-[#E5447F]",
                        children: "Join waitlist"
                    }), a.phase === "fetch-nonce" && t.jsx("button", {
                        disabled: !0,
                        className: "px-4 py-2 text-lg sm:text-xl font-semibold text-white rounded-full shadow-lg bg-[#FF4D8C] opacity-50 cursor-not-allowed",
                        children: "Preparing..."
                    }), a.phase === "joining" && t.jsx("button", {
                        disabled: !0,
                        className: "px-4 py-2 text-lg sm:text-xl font-semibold text-white rounded-full shadow-lg bg-[#FF4D8C] opacity-50 cursor-not-allowed",
                        children: "Joining waitlist..."
                    }), a.phase === "joined" && t.jsxs("div", {
                        className: "space-y-4",
                        children: [t.jsx("div", {
                            className: "text-2xl font-bold text-green-600",
                            children: "✓ Successfully joined the waitlist!"
                        }), t.jsxs("div", {
                            className: "text-gray-700",
                            children: ["Connected: ", r == null ? void 0 : r.slice(0, 6), "...", r == null ? void 0 : r.slice(-4)]
                        })]
                    }), a.phase === "error" && t.jsxs("div", {
                        className: "space-y-4",
                        children: [t.jsx("div", {
                            className: "text-red-600 font-semibold",
                            children: a.error
                        }), e && t.jsx("button", {
                            onClick: () => l({
                                phase: "fetch-nonce"
                            }),
                            className: "px-4 py-2 text-lg sm:text-xl font-semibold text-white rounded-full shadow-lg bg-[#FF4D8C] hover:bg-[#E5447F]",
                            children: "Try again"
                        })]
                    }), t.jsx("div", {
                        className: "mt-4 text-[#051D2480]",
                        children: b !== null ? `${b.toLocaleString()} users registered` : "&nbsp;"
                    })]
                }), t.jsxs("div", {
                    className: "flex justify-center gap-4 mt-8",
                    children: [void 0, t.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://discord.gg/TCK9EeXUbj",
                        "aria-label": "Discord",
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors",
                        children: t.jsx(T, {
                            className: "h-5 w-5 icon-[#6b7280]"
                        })
                    }), t.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://x.com/werm_fun",
                        "aria-label": "X (Twitter)",
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors",
                        children: t.jsx(I, {
                            className: "h-5 w-5 icon-[#6b7280]"
                        })
                    }), t.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://farcaster.xyz/werm",
                        "aria-label": "Farcaster",
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors",
                        children: t.jsx(P, {
                            className: "h-5 w-5 icon-[#6b7280]"
                        })
                    })]
                })]
            }), t.jsxs("div", {
                className: `row-start-1 row-span-1 col-start-1 col-span-1 self-center ${a.phase === "joined" ? "z-1" : "invisible"}`,
                children: [t.jsxs("div", {
                    className: "text-center mb-4",
                    children: [t.jsx("h2", {
                        className: "text-4xl leading-tight font-bold text-[#051D24] mb-2",
                        children: "You’ve joined the WERM waitlist"
                    }), t.jsxs("p", {
                        className: "text-base sm:text-lg text-[#051D24/75] mb-8",
                        children: ["You’re on the list!", t.jsx("br", {}), "Follow us for updates on the launch."]
                    })]
                }), t.jsxs("div", {
                    className: "flex flex-col gap-4 mt-8 w-full",
                    children: [t.jsxs("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://x.com/werm_fun",
                        "aria-label": "X (Twitter)",
                        className: "group flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#F1F0F1] text-[#051D24] border-2 border-transparent hover:border-[#1F1F1F]",
                        children: [t.jsx("span", {
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-black",
                            children: t.jsx(I, {
                                className: "h-6 aspect-square icon-[#FFF]"
                            })
                        }), t.jsx("span", {
                            className: "text-xl",
                            children: "Follow @werm_fun on X"
                        })]
                    }), t.jsxs("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://discord.gg/TCK9EeXUbj",
                        "aria-label": "Discord",
                        className: "group flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#F1F0F1] text-[#051D24] border-2 border-transparent hover:border-[#1F1F1F]",
                        children: [t.jsx("span", {
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white",
                            children: t.jsx(T, {
                                className: "h-7 w-7 icon-[#5865F2]"
                            })
                        }), t.jsx("span", {
                            className: "text-xl",
                            children: "Join the Discord"
                        })]
                    }), void 0, t.jsxs("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://farcaster.xyz/werm",
                        "aria-label": "Farcaster",
                        className: "group flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#F1F0F1] text-[#051D24] border-2 border-transparent hover:border-[#1F1F1F]",
                        children: [t.jsx("span", {
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white",
                            children: t.jsx(P, {
                                className: "h-7 w-7 icon-[#2AABEE]"
                            })
                        }), t.jsx("span", {
                            className: "text-xl",
                            children: "Join the Farcaster"
                        })]
                    })]
                })]
            })]
        }), e && t.jsx("button", {
            onClick: w,
            className: "fixed bottom-4 right-4 text-sm text-[#051D24]/60 hover:text-[#051D24] transition-colors",
            children: "Sign out"
        }), t.jsx(se, {
            open: W,
            onClose: () => p(!1),
            connectors: m,
            connectAsync: i,
            status: f,
            variables: A,
            loading: y,
            onConnected: () => l({
                phase: "fetch-nonce"
            })
        })]
    })
}
  , ie = () => {
    const r = R.c(1);
    let e;
    return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = t.jsx(q, {
        client: re,
        children: t.jsx(V, {
            config: ae,
            children: t.jsx(oe, {})
        })
    }),
    r[0] = e) : e = r[0],
    e
}
  , le = J.createRoot(document.getElementById("root"));
le.render(t.jsx(ie, {}));
