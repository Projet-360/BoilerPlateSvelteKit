<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { onMount } from 'svelte';
	import { hoverable } from '$UITools/Cursor/cursorHelpers';
	import { t } from '$UITools/Translations/index';
	import Box from '$three/Box.svelte';

	import Greetings from '$components/Greetings.svelte';
	import Slider from '$components/Slider.svelte';
	import { setTransitionLoader } from '$stores/transitionLoaderStore';

	const link: string = 'https://kit.svelte.dev';

	onMount(() => {
		setTransitionLoader(false);
	});
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<h1>{$t('home.title')}</h1>
<p>{@html $t('home.text', { link })}</p>

<a href="/about" use:hoverable={'first'}>{$t('home.link')}</a>

<Greetings />
<Slider />

<div>
	<Canvas>
		<Box />
	</Canvas>
</div>
