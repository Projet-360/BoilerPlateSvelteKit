<script>
	import { onMount } from 'svelte';
  import Header from "./Header.svelte";
  //import Cursor from "../components/Cursor/index.svelte";
  import Preloader from "../components/Preloader/index.svelte";
  import SmoothScroller from "../components/SmoothScroller/index.svelte";
  import App from '$lib/js/index.js'

  onMount(() => {
    new App()

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(registration => {
        //console.log('Service Worker enregistré avec succès:', registration);
      }).catch(error => {
        //console.error("Échec de l'enregistrement du Service Worker:", error);
      });
    }
  })
</script>

<svelte:head>
    <!-- METTRE LE HEAD SUR TOUTE LES PAGES -->
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.png" />
    <meta name="viewport" content="width=device-width" />
  	<link rel="manifest" href="/pwa/manifest.webmanifest">
		<meta name="theme-color" content="#4285f4" />
</svelte:head>


<style lang="scss" global>
  @import '../css/main';
</style>

<Preloader/>
<!-- <Cursor/> -->
<SmoothScroller>
  <main>
    <slot />
  </main>
</SmoothScroller>