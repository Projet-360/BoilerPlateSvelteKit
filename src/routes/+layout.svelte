<script>
	import { onMount, onDestroy } from 'svelte';

	import { checkAuth } from '$api/auth';
	import { authStore, initializeAuthStore } from '$stores/authStore';

	import { checkUserAccessAndRedirect } from './authAccess';

	import { registerServiceWorker } from '$UITools/ServiceWorker';
	import PageTransition from '$UITools/PageTransition/index.svelte';
	import SmoothScroller from '$UITools/SmoothScroller/index.svelte';
	import Cursor from '$UITools/Cursor/index.svelte';
	import Preloader from '$UITools/Preloader/index.svelte';
	import NotificationWrapper from '$UITools/Notifications/NotificationWrapper.svelte';

	import Header from '$components/Header.svelte';
	import App from '$lib/js/index';

	export let data;

	let isStoreInitialized = false;
	let notificationShown = false;
	let unsubscribe;

	onMount(async () => {
		try {
			new App();
			registerServiceWorker();
			await checkAuth();
			unsubscribe = await initializeAuthStore();
			isStoreInitialized = true;
		} catch (error) {
			console.error("Erreur lors de l'initialisation :", error);
		}
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	$: if (isStoreInitialized) {
		({ notificationShown } = checkUserAccessAndRedirect(
			data,
			$authStore.isAuthenticated,
			notificationShown
		));
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
