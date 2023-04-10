import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/css/main.scss"',
      },
    },
  },
};

export default config;
