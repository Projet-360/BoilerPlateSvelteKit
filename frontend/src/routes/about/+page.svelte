<script lang="ts">
	import { t } from '$UITools/Translations/index.js';
	import Box from '$components/three/Box.svelte';
	import { setTransitionLoader } from '$stores/transitionLoaderStore';
	import { onMount } from 'svelte';

	onMount(async () => {
		setTransitionLoader(false);
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<h1>{$t('about.title')}</h1>
	<p>{@html $t('about.text')}</p>
	<a href="/">{$t('about.link')}</a>
</div>

<Box />
