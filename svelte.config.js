import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/CSS/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
