<script>
  import { onMount, onDestroy } from "svelte";
  import Header from "./Header.svelte";
  import PageTransition from "$UITools/PageTransition/index.svelte";
  import Cursor from "$UITools/Cursor/index.svelte";
  import Preloader from "$UITools/Preloader/index.svelte";
  import SmoothScroller from "$UITools/SmoothScroller/index.svelte";
  import App from "$lib/js/index";

  import { authStore } from "$stores/authStore";

  export let data;
  let isAuthenticated = false;

  // Souscription au store
  const unsubscribe = authStore.subscribe((state) => {
    isAuthenticated = state.isAuthenticated;
    console.log("Valeur du store:", state);
  });

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

  onMount(async () => {
    try {
      const res = await fetch("http://localhost:3001/auth/check-auth", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        authStore.update((state) => ({
          ...state,
          isAuthenticated: data.isAuthenticated,
          token: data.token,
          userId: data.userId,
        }));
      }
    } catch (error) {
      console.error(
        "Erreur lors de la vérification de l'authentification:",
        error
      );
    }
  });

  onDestroy(() => {
    unsubscribe();
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
