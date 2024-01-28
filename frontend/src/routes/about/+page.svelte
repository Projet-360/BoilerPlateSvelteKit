<script lang="ts">
	import { t } from '$UITools/Translations/index.js';
	import { onMount } from 'svelte';

	import { enter, exit } from './transition';

	let title: HTMLElement;
	let text: HTMLElement;
	let link: HTMLElement;

	onMount(async () => {});
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
		background-color: blue;
		position: absolute;
	}
</style>
