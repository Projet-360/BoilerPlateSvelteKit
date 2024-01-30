<script lang="ts">
	import gsap from 'gsap';
	import { t } from '$UITools/Translations/index.js';
	import { onDestroy, onMount } from 'svelte';

	import { enter, exit } from './transition';

	let title: HTMLElement;
	let text: HTMLElement;
	let link: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline();

		tl.from(title, { duration: 0.7, autoAlpha: 0, y: -30, ease: 'back.out(1.7)' })
			.from(text, { duration: 0.7, autoAlpha: 0, y: -30, ease: 'back.out(1.7)' }, '-=0.5')
			.from(link, { duration: 0.7, autoAlpha: 0, x: -30, ease: 'back.out(1.7)' }, '-=0.5');
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div
	class="about"
	in:enter={{ duration: 1, title, text, link }}
	out:exit={{ duration: 1, title, text, link }}
>
	<div>
		<h1 bind:this={title}>{$t('about.title')}</h1>
		<p bind:this={text}>{@html $t('about.text')}</p>
		<div class="linkabout" bind:this={link}>
			<a href="/">{$t('about.link')}</a>
		</div>
	</div>
</div>

<style>
	.linkabout {
		transform-origin: center;
	}
	.about {
		background-color: rgb(80, 80, 80);
		position: absolute;
		width: 100vw;
	}
	.logo {
		position: relative;
		margin-right: auto;
		margin-left: auto;
		transform: scale(2);
	}
</style>
