<script>
	import { onMount } from 'svelte';
	import { hoverable } from '$UITools/Cursor/cursorHelpers';
	import { t } from '$UITools/translations/index';
	import Box from '$three/Box.svelte';

	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	import Greetings from '$components/Greetings.svelte';

	import github from '$lib/images/github.svg';

	// or only core styles
	import '@splidejs/svelte-splide/css/core';

	import { sendGreeting, getAllGreetings, deleteGreeting } from '$api/Greetings'; // Import les fonctions

	const link = 'https://kit.svelte.dev';

	let editingId = null;
	let name = '';
	let message = '';
	let greetings = [];

	const splideOptions = {
		type: 'loop',
		gap: '10px',
		drag: 'free',
		arrows: false,
		pagination: false,
		perPage: 3,
		autoScroll: {
			pauseOnHover: true,
			pauseOnFocus: true,
			rewind: false,
			speed: 1
		}
	};
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<h1>home</h1>
<a href="/about" use:hoverable={'first'}>Lien vers la page about</a>

<h1>{$t('home.title')}</h1>
<p>{@html $t('home.text', { link })}</p>

<Box />

<Greetings />

<Splide options={splideOptions} extensions={{ AutoScroll }} aria-label="My Favorite Images">
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" />
	</SplideSlide>
</Splide>

<style>
	.imgcarousel {
		height: 50px;
		width: auto;
	}
</style>
