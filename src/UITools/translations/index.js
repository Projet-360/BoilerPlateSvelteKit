import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	log: {
		level: dev ? 'warn' : 'error'
	},
	translations: {
		en: { lang },
		fr: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'about',
			loader: async () => (await import('./en/about.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'en',
			key: 'login',
			loader: async () => (await import('./en/login.json')).default
		},
		{
			locale: 'en',
			key: 'signup',
			loader: async () => (await import('./en/signup.json')).default
		},
		{
			locale: 'en',
			key: 'forgot-password',
			loader: async () => (await import('./en/forgot-password.json')).default
		},
		{
			locale: 'en',
			key: 'forgot-password-token',
			loader: async () => (await import('./en/forgot-password-token.json')).default
		},
		{
			locale: 'en',
			key: 'validation',
			loader: async () => (await import('./en/validation.json')).default
		},
		{
			locale: 'fr',
			key: 'about',
			loader: async () => (await import('./fr/about.json')).default
		},
		{
			locale: 'fr',
			key: 'home',
			loader: async () => (await import('./fr/home.json')).default
		},
		{
			locale: 'fr',
			key: 'login',
			loader: async () => (await import('./fr/login.json')).default
		},
		{
			locale: 'fr',
			key: 'signup',
			loader: async () => (await import('./fr/signup.json')).default
		},
		{
			locale: 'fr',
			key: 'forgot-password',
			loader: async () => (await import('./fr/forgot-password.json')).default
		},
		{
			locale: 'fr',
			key: 'forgot-password-token',
			loader: async () => (await import('./fr/forgot-password-token.json')).default
		},
		{
			locale: 'fr',
			key: 'validation',
			loader: async () => (await import('./fr/validation.json')).default
		}
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute
} = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
