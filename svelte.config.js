import { defineConfig } from 'vite';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import sass from 'vite-plugin-sass';

export default defineConfig({
  plugins: [sass({ outputStyle: "compressed" })],
  preprocess: [
    sveltePreprocess({
      scss: {
        includePaths: [
          'src/css'
        ]
      },
    }),
  ],
  kit: {
    adapter: adapter(),
  },
  svelte: {
    emitCssWarnings: false,
  },
});
