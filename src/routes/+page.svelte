<script>
  import { hoverable } from '$components/Cursor/cursorHelpers.js'
  import { t } from '$components/translations/index.js';

  const link = 'https://kit.svelte.dev';
</script>

<svelte:head>
  <title>Page d'exemple</title>
  <meta name="description" content="Ceci est une description de la page d'exemple.">
</svelte:head>

<h1>
    home
</h1>
<a href="/about" use:hoverable={"first"}>Lien vers la page about</a>

<h1>{$t('home.title')}</h1>
<p>{@html $t('home.text', { link })}</p>