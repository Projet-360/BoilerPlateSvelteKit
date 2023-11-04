import { a as addTranslations, s as setRoute, b as setLocale, l as locales, d as defaultLocale, c as loadTranslations, t as translations } from './index-3f0a5fd7.js';
import './index4-d267215c.js';
import './index2-e7c7a387.js';

const load$1 = async ({ data }) => {
  const { i18n, translations } = data;
  const { locale, route } = i18n;
  addTranslations(translations);
  await setRoute(route);
  await setLocale(locale);
  return i18n;
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = async ({
  url,
  cookies,
  request
}) => {
  const { pathname } = url;
  let locale = (cookies.get("lang") || "").toLowerCase();
  if (!locale) {
    locale = `${`${request.headers.get("accept-language")}`.match(
      /[a-zA-Z]+?(?=-|_|,|;)/
    )}`.toLowerCase();
  }
  const supportedLocales = locales.get().map((l) => l.toLowerCase());
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }
  await loadTranslations(locale, pathname);
  return {
    i18n: { locale, route: pathname },
    translations: translations.get()
    // `translations` on server contain all translations loaded by different clients
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-8528a90d.js')).default;
const universal_id = "src/routes/+layout.ts";
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.940987e3.js","_app/immutable/chunks/index.a9363749.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.d28b6c62.js","_app/immutable/chunks/index.958f6a32.js","_app/immutable/chunks/auth.c9fc17a0.js","_app/immutable/chunks/notificationStore.e8f881ab.js","_app/immutable/chunks/singletons.cb73de64.js","_app/immutable/chunks/stores.0052c4ba.js","_app/immutable/chunks/cursorHelpers.05cb0207.js"];
const stylesheets = ["_app/immutable/assets/0.91337714.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-69bf618c.js.map
