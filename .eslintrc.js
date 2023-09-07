module.exports = {
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
    },
    env: {
      es6: true,
      browser: true,
    },
    plugins: ['svelte3', 'prettier'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte3/svelte3',
      },
    ],
    settings: {
      // Indiquez à ESLint que Svelte 3 doit être traité comme une version ECMAScript 2019
      'svelte3/ecmaVersion': 2019,
    },
  };
  