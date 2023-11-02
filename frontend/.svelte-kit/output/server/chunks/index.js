import { w as writable, d as derived } from "./index4.js";
import { f as get_store_value } from "./index2.js";
import C$1 from "@sveltekit-i18n/parser-default";
var H = Object.defineProperty, q = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var x = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var $ = (r, t3, e) => t3 in r ? H(r, t3, { enumerable: true, configurable: true, writable: true, value: e }) : r[t3] = e, l$1 = (r, t3) => {
  for (var e in t3 || (t3 = {}))
    A.call(t3, e) && $(r, e, t3[e]);
  if (x)
    for (var e of x(t3))
      N.call(t3, e) && $(r, e, t3[e]);
  return r;
}, u$1 = (r, t3) => q(r, B(t3));
var T = (r, t3) => {
  var e = {};
  for (var a in r)
    A.call(r, a) && t3.indexOf(a) < 0 && (e[a] = r[a]);
  if (r != null && x)
    for (var a of x(r))
      t3.indexOf(a) < 0 && N.call(r, a) && (e[a] = r[a]);
  return e;
};
var C = ["error", "warn", "debug"], z = ({ logger: r = console, level: t3 = C[1], prefix: e = "[i18n]: " }) => C.reduce((a, s2, o) => u$1(l$1({}, a), { [s2]: (i2) => C.indexOf(t3) >= o && r[s2](`${e}${i2}`) }), {}), d$1 = z({}), V = (r) => {
  d$1 = r;
};
var F = (n2) => {
  var c = n2, { parser: r, key: t3, params: e, translations: a, locale: s2, fallbackLocale: o } = c, i2 = T(c, ["parser", "key", "params", "translations", "locale", "fallbackLocale"]);
  if (!t3)
    return d$1.warn(`No translation key provided ('${s2}' locale). Skipping translation...`), "";
  if (!s2)
    return d$1.warn(`No locale provided for '${t3}' key. Skipping translation...`), "";
  let f2 = (a[s2] || {})[t3];
  return o && f2 === void 0 && (f2 = (a[o] || {})[t3]), i2.hasOwnProperty("fallbackValue") && f2 === void 0 ? i2.fallbackValue : r.parse(f2, e, s2, t3);
}, h = (...r) => r.length ? r.filter((t3) => !!t3).map((t3) => {
  let e = `${t3}`.toLowerCase();
  try {
    let [a] = Intl.Collator.supportedLocalesOf(t3);
    if (!a)
      throw new Error();
    e = a;
  } catch (a) {
    d$1.warn(`'${t3}' locale is non-standard.`);
  }
  return e;
}) : [], w = (r, t3, e) => {
  if (t3 && Array.isArray(r))
    return r.map((a) => w(a, t3));
  if (r && typeof r == "object") {
    let a = Object.keys(r).reduce((s2, o) => {
      let i2 = r[o], n2 = e ? `${e}.${o}` : `${o}`;
      return i2 && typeof i2 == "object" && !(t3 && Array.isArray(i2)) ? l$1(l$1({}, s2), w(i2, t3, n2)) : u$1(l$1({}, s2), { [n2]: w(i2, t3) });
    }, {});
    return Object.keys(a).length ? a : null;
  }
  return r;
}, G = (r) => r.reduce((t3, { key: e, data: a, locale: s2 }) => {
  if (!a)
    return t3;
  let [o] = h(s2), i2 = u$1(l$1({}, t3[o] || {}), { [e]: a });
  return u$1(l$1({}, t3), { [o]: i2 });
}, {}), E = async (r) => {
  try {
    let t3 = await Promise.all(r.map((s2) => {
      var o = s2, { loader: e } = o, a = T(o, ["loader"]);
      return new Promise(async (i2) => {
        let n2;
        try {
          n2 = await e();
        } catch (c) {
          d$1.error(`Failed to load translation. Verify your '${a.locale}' > '${a.key}' Loader.`), d$1.error(c);
        }
        i2(u$1(l$1({ loader: e }, a), { data: n2 }));
      });
    }));
    return G(t3);
  } catch (t3) {
    d$1.error(t3);
  }
  return {};
}, W = (r) => (t3) => {
  try {
    if (typeof t3 == "string")
      return t3 === r;
    if (typeof t3 == "object")
      return t3.test(r);
  } catch (e) {
    d$1.error("Invalid route config!");
  }
  return false;
}, O = (r, t3) => {
  let e = true;
  try {
    e = Object.keys(r).filter((a) => r[a] !== void 0).every((a) => r[a] === t3[a]);
  } catch (a) {
  }
  return e;
};
var D$1 = 1e3 * 60 * 60 * 24, j = class {
  constructor(t3) {
    this.cachedAt = 0;
    this.loadedKeys = {};
    this.currentRoute = writable();
    this.config = writable();
    this.isLoading = writable(false);
    this.promises = /* @__PURE__ */ new Set();
    this.loading = { subscribe: this.isLoading.subscribe, toPromise: (t4, e) => {
      let { fallbackLocale: a } = get_store_value(this.config), s2 = Array.from(this.promises).filter((o) => {
        let i2 = O({ locale: h(t4)[0], route: e }, o);
        return a && (i2 = i2 || O({ locale: h(a)[0], route: e }, o)), i2;
      }).map(({ promise: o }) => o);
      return Promise.all(s2);
    }, get: () => get_store_value(this.isLoading) };
    this.privateRawTranslations = writable({});
    this.rawTranslations = { subscribe: this.privateRawTranslations.subscribe, get: () => get_store_value(this.rawTranslations) };
    this.privateTranslations = writable({});
    this.translations = { subscribe: this.privateTranslations.subscribe, get: () => get_store_value(this.translations) };
    this.locales = u$1(l$1({}, derived([this.config, this.privateTranslations], ([t4, e]) => {
      if (!t4)
        return [];
      let { loaders: a = [] } = t4, s2 = a.map(({ locale: i2 }) => i2), o = Object.keys(e).map((i2) => i2);
      return Array.from(/* @__PURE__ */ new Set([...h(...s2), ...h(...o)]));
    }, [])), { get: () => get_store_value(this.locales) });
    this.internalLocale = writable();
    this.loaderTrigger = derived([this.internalLocale, this.currentRoute], ([t4, e], a) => {
      var s2, o;
      t4 !== void 0 && e !== void 0 && !(t4 === ((s2 = get_store_value(this.loaderTrigger)) == null ? void 0 : s2[0]) && e === ((o = get_store_value(this.loaderTrigger)) == null ? void 0 : o[1])) && (d$1.debug("Triggering translation load..."), a([t4, e]));
    }, []);
    this.localeHelper = writable();
    this.locale = { subscribe: this.localeHelper.subscribe, forceSet: this.localeHelper.set, set: this.internalLocale.set, update: this.internalLocale.update, get: () => get_store_value(this.locale) };
    this.initialized = derived([this.locale, this.currentRoute, this.privateTranslations], ([t4, e, a], s2) => {
      get_store_value(this.initialized) || s2(t4 !== void 0 && e !== void 0 && !!Object.keys(a).length);
    });
    this.translation = derived([this.privateTranslations, this.locale, this.isLoading], ([t4, e, a], s2) => {
      let o = t4[e];
      o && Object.keys(o).length && !a && s2(o);
    }, {});
    this.t = u$1(l$1({}, derived([this.config, this.translation], (s2) => {
      var [o] = s2, i2 = o, { parser: t4, fallbackLocale: e } = i2, a = T(i2, ["parser", "fallbackLocale"]);
      return (n2, ...c) => F(l$1({ parser: t4, key: n2, params: c, translations: this.translations.get(), locale: this.locale.get(), fallbackLocale: e }, a.hasOwnProperty("fallbackValue") ? { fallbackValue: a.fallbackValue } : {}));
    })), { get: (t4, ...e) => get_store_value(this.t)(t4, ...e) });
    this.l = u$1(l$1({}, derived([this.config, this.translations], (o) => {
      var [i2, ...n2] = o, c = i2, { parser: t4, fallbackLocale: e } = c, a = T(c, ["parser", "fallbackLocale"]), [s2] = n2;
      return (f2, b, ...k) => F(l$1({ parser: t4, key: b, params: k, translations: s2, locale: f2, fallbackLocale: e }, a.hasOwnProperty("fallbackValue") ? { fallbackValue: a.fallbackValue } : {}));
    })), { get: (t4, e, ...a) => get_store_value(this.l)(t4, e, ...a) });
    this.getLocale = (t4) => {
      let { fallbackLocale: e } = get_store_value(this.config) || {}, a = t4 || e;
      if (!a)
        return;
      let s2 = this.locales.get();
      return s2.find((i2) => h(a).includes(i2)) || s2.find((i2) => h(e).includes(i2));
    };
    this.setLocale = (t4) => {
      if (t4 && t4 !== get_store_value(this.internalLocale))
        return d$1.debug(`Setting '${t4}' locale.`), this.internalLocale.set(t4), this.loading.toPromise(t4, get_store_value(this.currentRoute));
    };
    this.setRoute = (t4) => {
      if (t4 !== get_store_value(this.currentRoute)) {
        d$1.debug(`Setting '${t4}' route.`), this.currentRoute.set(t4);
        let e = get_store_value(this.internalLocale);
        return this.loading.toPromise(e, t4);
      }
    };
    this.loadConfig = async (t4) => {
      await this.configLoader(t4);
    };
    this.getTranslationProps = async (t4 = this.locale.get(), e = get_store_value(this.currentRoute)) => {
      let a = get_store_value(this.config);
      if (!a || !t4)
        return [];
      let s2 = this.translations.get(), { loaders: o, fallbackLocale: i2 = "", cache: n2 = D$1 } = a || {}, c = Number.isNaN(+n2) ? D$1 : +n2;
      this.cachedAt ? Date.now() > c + this.cachedAt && (d$1.debug("Refreshing cache."), this.loadedKeys = {}, this.cachedAt = 0) : (d$1.debug("Setting cache timestamp."), this.cachedAt = Date.now());
      let [f2, b] = h(t4, i2), k = s2[f2], I = s2[b], R = (o || []).map((K) => {
        var L = K, { locale: p2 } = L, y = T(L, ["locale"]);
        return u$1(l$1({}, y), { locale: h(p2)[0] });
      }).filter(({ routes: p2 }) => !p2 || (p2 || []).some(W(e))).filter(({ key: p2, locale: y }) => y === f2 && (!k || !(this.loadedKeys[f2] || []).includes(p2)) || i2 && y === b && (!I || !(this.loadedKeys[b] || []).includes(p2)));
      if (R.length) {
        this.isLoading.set(true), d$1.debug("Fetching translations...");
        let p2 = await E(R);
        this.isLoading.set(false);
        let y = Object.keys(p2).reduce((L, P2) => u$1(l$1({}, L), { [P2]: Object.keys(p2[P2]) }), {}), K = R.filter(({ key: L, locale: P2 }) => (y[P2] || []).some((S) => `${S}`.startsWith(L))).reduce((L, { key: P2, locale: S }) => u$1(l$1({}, L), { [S]: [...L[S] || [], P2] }), {});
        return [p2, K];
      }
      return [];
    };
    this.addTranslations = (t4, e) => {
      if (!t4)
        return;
      let a = get_store_value(this.config), { preprocess: s2 } = a || {};
      d$1.debug("Adding translations...");
      let o = Object.keys(t4 || {});
      this.privateRawTranslations.update((i2) => o.reduce((n2, c) => u$1(l$1({}, n2), { [c]: l$1(l$1({}, n2[c] || {}), t4[c]) }), i2)), this.privateTranslations.update((i2) => o.reduce((n2, c) => {
        let f2 = true, b = t4[c];
        return typeof s2 == "function" && (b = s2(b)), (typeof s2 == "function" || s2 === "none") && (f2 = false), u$1(l$1({}, n2), { [c]: l$1(l$1({}, n2[c] || {}), f2 ? w(b, s2 === "preserveArrays") : b) });
      }, i2)), o.forEach((i2) => {
        let n2 = Object.keys(t4[i2]).map((c) => `${c}`.split(".")[0]);
        e && (n2 = e[i2]), this.loadedKeys[i2] = Array.from(/* @__PURE__ */ new Set([...this.loadedKeys[i2] || [], ...n2 || []]));
      });
    };
    this.loader = async ([t4, e]) => {
      let a = this.getLocale(t4) || void 0;
      d$1.debug(`Adding loader promise for '${a}' locale and '${e}' route.`);
      let s2 = (async () => {
        let o = await this.getTranslationProps(a, e);
        o.length && this.addTranslations(...o);
      })();
      this.promises.add({ locale: a, route: e, promise: s2 }), s2.then(() => {
        a && this.locale.get() !== a && this.locale.forceSet(a);
      });
    };
    this.loadTranslations = (t4, e = get_store_value(this.currentRoute) || "") => {
      let a = this.getLocale(t4);
      if (a)
        return this.setRoute(e), this.setLocale(a), this.loading.toPromise(a, e);
    };
    this.loaderTrigger.subscribe(this.loader), this.isLoading.subscribe(async (e) => {
      e && this.promises.size && (await this.loading.toPromise(), this.promises.clear(), d$1.debug("Loader promises have been purged."));
    }), t3 && this.loadConfig(t3);
  }
  async configLoader(t3) {
    if (!t3)
      return d$1.error("No config provided!");
    let n2 = t3, { initLocale: e, fallbackLocale: a, translations: s2, log: o } = n2, i2 = T(n2, ["initLocale", "fallbackLocale", "translations", "log"]);
    o && V(z(o)), [e] = h(e), [a] = h(a), d$1.debug("Setting config."), this.config.set(l$1({ initLocale: e, fallbackLocale: a, translations: s2 }, i2)), s2 && this.addTranslations(s2), e && await this.loadTranslations(e);
  }
};
var n = Object.defineProperty, M = Object.defineProperties;
var u = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var i = (r, o, e) => o in r ? n(r, o, { enumerable: true, configurable: true, writable: true, value: e }) : r[o] = e, p = (r, o) => {
  for (var e in o || (o = {}))
    f.call(o, e) && i(r, e, o[e]);
  if (s)
    for (var e of s(o))
      P.call(o, e) && i(r, e, o[e]);
  return r;
}, d = (r, o) => M(r, u(o));
var l = (r, o) => {
  var e = {};
  for (var a in r)
    f.call(r, a) && o.indexOf(a) < 0 && (e[a] = r[a]);
  if (r != null && s)
    for (var a of s(r))
      o.indexOf(a) < 0 && P.call(r, a) && (e[a] = r[a]);
  return e;
};
var m = (e) => {
  var a = e, { parserOptions: r = {} } = a, o = l(a, ["parserOptions"]);
  return d(p({}, o), { parser: C$1(r) });
}, t$1 = class t extends j {
  constructor(e) {
    super(e && m(e));
    this.loadConfig = (e2) => super.configLoader(m(e2));
  }
}, D = t$1;
const en = "English";
const fr = "Francais";
const lang = {
  en,
  fr
};
const defaultLocale = "en";
const config = {
  log: {
    level: "error"
  },
  translations: {
    en: { lang },
    fr: { lang }
  },
  loaders: [
    {
      locale: "en",
      key: "general",
      loader: async () => (await import("./general.js")).default
    },
    {
      locale: "en",
      key: "about",
      loader: async () => (await import("./about.js")).default
    },
    {
      locale: "en",
      key: "home",
      loader: async () => (await import("./home.js")).default
    },
    {
      locale: "en",
      key: "login",
      loader: async () => (await import("./login.js")).default
    },
    {
      locale: "en",
      key: "logout",
      loader: async () => (await import("./logout.js")).default
    },
    {
      locale: "en",
      key: "signup",
      loader: async () => (await import("./signup.js")).default
    },
    {
      locale: "en",
      key: "forgot-password",
      loader: async () => (await import("./forgot-password.js")).default
    },
    {
      locale: "en",
      key: "forgot-password-token",
      loader: async () => (await import("./forgot-password-token.js")).default
    },
    {
      locale: "en",
      key: "user",
      loader: async () => (await import("./user.js")).default
    },
    {
      locale: "en",
      key: "validation",
      loader: async () => (await import("./validation.js")).default
    },
    {
      locale: "fr",
      key: "general",
      loader: async () => (await import("./general2.js")).default
    },
    {
      locale: "fr",
      key: "about",
      loader: async () => (await import("./about2.js")).default
    },
    {
      locale: "fr",
      key: "home",
      loader: async () => (await import("./home2.js")).default
    },
    {
      locale: "fr",
      key: "login",
      loader: async () => (await import("./login2.js")).default
    },
    {
      locale: "fr",
      key: "logout",
      loader: async () => (await import("./logout2.js")).default
    },
    {
      locale: "fr",
      key: "signup",
      loader: async () => (await import("./signup2.js")).default
    },
    {
      locale: "fr",
      key: "forgot-password",
      loader: async () => (await import("./forgot-password2.js")).default
    },
    {
      locale: "fr",
      key: "forgot-password-token",
      loader: async () => (await import("./forgot-password-token2.js")).default
    },
    {
      locale: "fr",
      key: "user",
      loader: async () => (await import("./user2.js")).default
    },
    {
      locale: "fr",
      key: "validation",
      loader: async () => (await import("./validation2.js")).default
    }
  ]
};
const {
  t: t2,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute
} = new D(config);
loading.subscribe(($loading) => $loading && console.log("Loading translations..."));
export {
  addTranslations as a,
  setLocale as b,
  loadTranslations as c,
  defaultLocale as d,
  t2 as e,
  locale as f,
  locales as l,
  setRoute as s,
  translations as t
};
