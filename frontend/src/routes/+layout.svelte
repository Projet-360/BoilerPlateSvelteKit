<script lang="ts">
	import { onMount } from 'svelte';

	import App from '$lib/js/index';
	import { registerServiceWorker } from '$UITools/serviceWorker';
	import Header from '$components/Header.svelte';
	import PageTransition from '$UITools/PageTransition/index.svelte';
	import Cursor from '$UITools/Cursor/index.svelte';
	import Loader from '$UITools/InitialLoader/index.svelte';
	import SmoothScroller from '$UITools/SmoothScroller/index.svelte';
	import NotificationWrapper from '$UITools/Notifications/NotificationWrapper.svelte';
	import {
		firstLoadComplete,
		loadingStates,
		setFirstOpen,
		setRessourceToValide
	} from '$stores/initialLoaderStore';

	import { fetchMockData } from '$api/utils/mockService';

	onMount(async () => {
		new App();
		registerServiceWorker();
		// Détermine le premier chargement de l'application
		setFirstOpen(true);

		// Test de chargement de ressource au démarrage de l'application
		const mockData = await fetchMockData();
		if (mockData) {
			setRessourceToValide(true);
			console.log($loadingStates);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width" />
	<link rel="manifest" href="/pwa/manifest.webmanifest" />
	<meta name="theme-color" content="#4285f4" />
</svelte:head>

{#if !$firstLoadComplete}
	<Loader />
{/if}

<Cursor />
<NotificationWrapper />
<Header />

<SmoothScroller>
	<PageTransition>
		<main>
			<slot />
		</main>
	</PageTransition>
</SmoothScroller>

<style lang="scss" global>
	@import './src/css/main';
</style>
