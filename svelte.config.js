import { defineConfig } from 'vite';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import sass from 'vite-plugin-sass';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [sass({ outputStyle: "compressed" })],
  preprocess: [
    sveltePreprocess({
      scss: {
        includePaths: [
          'src/css'
        ]
      },
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
  ],
  kit: {
    adapter: adapter(),
  },
});
