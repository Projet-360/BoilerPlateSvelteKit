import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "src/css/main.scss"'
			}
		}
	},

	server: {
		port: 1000
	}
};

export default config;
