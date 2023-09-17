<script>
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import PageTransition from "$UITools/PageTransition/index.svelte";
  import Cursor from "$UITools/Cursor/index.svelte";
  import Preloader from "$UITools/Preloader/index.svelte";
  import SmoothScroller from "$UITools/SmoothScroller/index.svelte";
  import App from "$lib/js/index";

  export let data;

  onMount(() => {
    new App();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./sw.js")
        .then((registration) => {
          //console.log('Service Worker enregistré avec succès:', registration);
        })
        .catch((error) => {
          //console.error("Échec de l'enregistrement du Service Worker:", error);
        });
    }
  });
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <meta name="viewport" content="width=device-width" />
  <link rel="manifest" href="/pwa/manifest.webmanifest" />
  <meta name="theme-color" content="#4285f4" />
</svelte:head>

<Preloader />
<Cursor />

<PageTransition pathname={data.route}>
  <SmoothScroller>
    <Header />
    <slot />
  </SmoothScroller>
</PageTransition>

<style lang="scss" global>
  @import "../css/main";
</style>
