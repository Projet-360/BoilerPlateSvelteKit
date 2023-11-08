<script lang="ts">
	import { onMount } from 'svelte';
	import { checkAuth } from '$api/auth/checkAuthStatusAPI.js';
	import { registerServiceWorker } from '$UITools/serviceWorker';

	import Header from '$components/Header.svelte';
	import PageTransition from '$UITools/PageTransition/index.svelte';
	import Cursor from '$UITools/Cursor/index.svelte';
	import Preloader from '$UITools/Preloader/index.svelte';
	import SmoothScroller from '$UITools/SmoothScroller/index.svelte';
	import App from '$lib/js/index';
	import NotificationWrapper from '$UITools/Notifications/NotificationWrapper.svelte';

	import { authStore } from '$stores/authStore.js';

	export let data;

	onMount(async () => {
		new App();
		registerServiceWorker();
		await checkAuth();
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
	@import './src/css/main';
</style>
