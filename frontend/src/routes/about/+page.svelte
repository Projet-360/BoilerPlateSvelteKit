<script lang="ts">
	import { t } from '$UITools/Translations/index.js';
	import { fetchMockData } from '$api/utils/mockService';
	import { setTransitionLoader } from '$stores/transitionLoaderStore';
	import { onMount } from 'svelte';

	let data = '';

	onMount(async () => {
		const response = await fetchMockData();
		data = response.data;
		setTransitionLoader(false);
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

{#if data}
	<div>{data}</div>
{:else}
	<div>Chargement...</div>
{/if}
<div>
	<h1>{$t('about.title')}</h1>
	<p>{@html $t('about.text')}</p>
	<a href="/">{$t('about.link')}</a>
</div>
