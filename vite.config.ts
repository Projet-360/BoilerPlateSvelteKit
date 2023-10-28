import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		preserveSymlinks: true,
		alias: [
			{
				find: /^~(.*)$/,
				replacement: '$1'
			}
		]
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
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
