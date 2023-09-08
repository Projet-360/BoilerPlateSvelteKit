<script>
  import { hoverable } from './../components/Cursor/cursorHelpers.js'
</script>

<svelte:head>
 <title>Page d'exemple</title>
  <meta name="description" content="Ceci est une description de la page d'exemple.">
</svelte:head>

<h1>
    home
</h1>
<a href="/about" use:hoverable={"first"}>Lien vers la page about</a>