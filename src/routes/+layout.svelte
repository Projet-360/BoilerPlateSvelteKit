<script>
  import { onMount } from 'svelte';

  onMount(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(registration => {
        console.log('Service Worker enregistré avec succès:', registration);
      }).catch(error => {
        console.error("Échec de l'enregistrement du Service Worker:", error);
      });
    }
  });
</script>

<svelte:head>
  <!-- METTRE LE HEAD SUR TOUTE LES PAGES -->
  <link rel="shortcut icon" type="image/png" href="/favicon/favicon.png"/>
</svelte:head>

<style lang="scss" global>
  // IMPORTE LE FICHIER MAIN CSS
  @import '../css/main';
</style>

<main>
  <slot />
</main>
