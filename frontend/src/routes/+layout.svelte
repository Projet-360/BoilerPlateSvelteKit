<script lang="ts">
	import { onMount } from 'svelte';

	import App from '$lib/js/index';
	import { registerServiceWorker } from '$UITools/serviceWorker';
	import Header from '$components/Header.svelte';
	import PageTransition from '$UITools/PageTransition/index.svelte';
	import Cursor from '$UITools/Cursor/index.svelte';
	import Preloader from '$UITools/Preloader/index.svelte';
	import Loader from '$UITools/Loader/index.svelte';
	import SmoothScroller from '$UITools/SmoothScroller/index.svelte';
	import NotificationWrapper from '$UITools/Notifications/NotificationWrapper.svelte';
	import { isInitialLoading } from '$stores/loaderStore';

	onMount(async () => {
		new App();
		registerServiceWorker();
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<meta name="viewport" content="width=device-width" />
	<link rel="manifest" href="/pwa/manifest.webmanifest" />
	<meta name="theme-color" content="#4285f4" />
</svelte:head>

{#if $isInitialLoading}
	<Loader />
{:else}
	<Preloader />
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
