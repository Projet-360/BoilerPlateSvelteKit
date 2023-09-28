<script>
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';

	onMount(() => {
		authStore.subscribe(({ isAuthenticated }) => {
			if (!isAuthenticated) {
				goto('/login'); // redirige vers la page de connexion si l'utilisateur n'est pas authentifié
			}
		});
	});
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<h1>Dashboard</h1>
<a href="/about" use:hoverable={'first'}>Lien vers la page about</a>
