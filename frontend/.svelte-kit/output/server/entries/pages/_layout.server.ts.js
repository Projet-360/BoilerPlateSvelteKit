import { l as locales, d as defaultLocale, c as loadTranslations, t as translations } from "../../chunks/index.js";
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
export {
  load
};
