<script>
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	import { checkAuth } from '$api/auth';
	import { registerServiceWorker } from '$UITools/serviceWorker';

	import Header from '$components/Header.svelte';
	import PageTransition from '$UITools/PageTransition/index.svelte';
	import Cursor from '$UITools/Cursor/index.svelte';
	import Preloader from '$UITools/Preloader/index.svelte';
	import SmoothScroller from '$UITools/SmoothScroller/index.svelte';
	import App from '$lib/js/index';
	import NotificationWrapper from '$UITools/Notifications/NotificationWrapper.svelte';
	import { handleRouteBasedOnAuth } from './handleRouteBasedOnAuth.js';
	import { initializeAuthStore } from '$stores/authStore';

	export let data;

	let isStoreInitialized = false;
	let unsubscribe;

	onMount(async () => {
		new App();
		registerServiceWorker();
		await checkAuth();
		const initStore = initializeAuthStore();
		await initStore.promise;
		unsubscribe = initStore.unsubscribe;
		isStoreInitialized = true;
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	$: if (isStoreInitialized) {
		handleRouteBasedOnAuth(data);
	}
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width" />
	<link rel="manifest" href="/pwa/manifest.webmanifest" />
	<meta name="theme-color" content="#4285f4" />
</svelte:head>

<Preloader />
<Cursor />

<NotificationWrapper />
<Header />

<SmoothScroller>
	<PageTransition pathname={data.route}>
		<main>
			<slot />
		</main>
	</PageTransition>
</SmoothScroller>

<style lang="scss" global>
	@import '../css/main';
</style>
