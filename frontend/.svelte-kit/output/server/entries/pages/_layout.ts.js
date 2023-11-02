import { a as addTranslations, s as setRoute, b as setLocale } from "../../chunks/index.js";
const load = async ({ data }) => {
  const { i18n, translations } = data;
  const { locale, route } = i18n;
  addTranslations(translations);
  await setRoute(route);
  await setLocale(locale);
  return i18n;
};
export {
  load
};
