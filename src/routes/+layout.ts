import { addTranslations, setLocale, setRoute } from '$UITools/Translations';
import log from '$lib/utils/log.js';
log.layout('+layout.ts');
/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {
	const { i18n, translations } = data;
	const { locale, route } = i18n;

	addTranslations(translations);

	await setRoute(route);
	await setLocale(locale);

	return i18n;
};
