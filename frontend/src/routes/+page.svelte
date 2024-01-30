<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { onDestroy, onMount } from 'svelte';
	import { hoverable } from '$UITools/Cursor/cursorHelpers';
	import { t } from '$UITools/Translations/index';
	import Box from '$three/Box.svelte';
	import gsap from 'gsap';

	import Greetings from '$components/Greetings.svelte';
	import Slider from '$components/Slider.svelte';
	import { setTransitionLoader } from '$stores/transitionLoaderStore';
	import { fetchMockData } from '$api/utils/mockService';
	import { enter, exit } from './transition';

	const linkUrl: string = 'https://kit.svelte.dev';
	let title: HTMLElement;
	let text: HTMLElement;
	let link: HTMLElement;

	onMount(() => {
		setTransitionLoader(false);
		fetchMockData;

		const tl = gsap.timeline();

		tl.from(title, { duration: 0.7, autoAlpha: 0, y: -30, ease: 'back.out(1.7)' })
			.from(text, { duration: 0.7, autoAlpha: 0, y: -30, ease: 'back.out(1.7)' }, '-=0.5')
			.from(link, { duration: 0.7, autoAlpha: 0, x: -30, ease: 'back.out(1.7)' }, '-=0.5');
	});
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<div class="home">
	<h1 bind:this={title}>{$t('home.title')}</h1>
	<p bind:this={text}>{@html $t('home.text', { linkUrl })}</p>
	<div class="linkhome" bind:this={link}>
		<a href="/about" use:hoverable={'first'}>{$t('home.link')}</a>
	</div>
	<img class="logo" src="logo.svg" alt="" style:--logo="logo" />

	<Greetings />
	<Slider />
</div>

<style>
	.home {
		width: 100vw;
		position: absolute;
		background-color: red;
	}
</style>
