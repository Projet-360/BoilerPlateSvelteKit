<script>
  import { onMount, onDestroy } from "svelte";
  import { checkAuth } from "./authLayout";
  import { registerServiceWorker } from "$UITools/serviceWorker";

  import Header from "$components/Header.svelte";
  import PageTransition from "$UITools/PageTransition/index.svelte";
  import Cursor from "$UITools/Cursor/index.svelte";
  import Preloader from "$UITools/Preloader/index.svelte";
  import SmoothScroller from "$UITools/SmoothScroller/index.svelte";
  import App from "$lib/js/index";
  import Notification from "$UITools/notifications/Notification.svelte";
  import notificationStore from "$stores/notificationStore";

  import { authStore } from "$stores/authStore";

  export let data;
  let isAuthenticated = false;

  // Souscription au store
  const unsubscribe = authStore.subscribe((state) => {
    isAuthenticated = state.isAuthenticated;
  });

  onMount(() => {
    new App();
    //registerServiceWorker();
  });

  onMount(async () => {
    await checkAuth();
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

{#each $notificationStore as { id, message, type }}
  <Notification {message} {type} />
{/each}

<SmoothScroller>
  <PageTransition pathname={data.route}>
    <Header />
    <main>
      <slot />
    </main>
  </PageTransition>
</SmoothScroller>

<style lang="scss" global>
  @import "../css/main";
</style>
