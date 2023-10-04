<script>
	import { onMount } from 'svelte';
	import { hoverable } from '$UITools/Cursor/cursorHelpers';
	import { t } from '$UITools/translations/index';
	import Box from '$three/Box.svelte';

	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

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

	onMount(async () => {
		greetings = await getAllGreetings();
	});

	function prepareUpdate(greeting) {
		name = greeting.name;
		message = greeting.message;
		editingId = greeting._id;
	}

	async function handleSendGreeting() {
		const isSuccessful = await sendGreeting(name, message, editingId);
		if (isSuccessful) {
			name = '';
			message = '';
			editingId = null;
			greetings = await getAllGreetings();
		}
	}

	async function handleDeleteGreeting(id) {
		const isSuccessful = await deleteGreeting(id);
		if (isSuccessful) {
			greetings = await getAllGreetings();
		}
	}
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

<form on:submit|preventDefault={handleSendGreeting}>
	<label for="nameInput">
		Nom :
		<input id="nameInput" name="name" type="text" autocomplete="name" bind:value={name} />
	</label>

	<label for="messageInput">
		Message :
		<input id="messageInput" name="message" type="text" autocomplete="on" bind:value={message} />
	</label>
	<button type="submit">Envoyer</button>
</form>

<ul>
	{#each greetings as greeting}
		<li>
			{greeting.name}: {greeting.message}
			<button on:click={() => prepareUpdate(greeting)}>Modifier</button>
			<button on:click={() => handleDeleteGreeting(greeting._id)}>Supprimer</button>
		</li>
	{/each}
</ul>

<Splide options={splideOptions} extensions={{ AutoScroll }} aria-label="My Favorite Images">
	<SplideSlide>
		<img src={github} alt="Image 1" style="height: 50px;" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Image 1" style="height: 50px;" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Image 1" style="height: 50px;" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Image 1" style="height: 50px;" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Image 1" style="height: 50px;" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Image 1" style="height: 50px;" />
	</SplideSlide>
</Splide>
