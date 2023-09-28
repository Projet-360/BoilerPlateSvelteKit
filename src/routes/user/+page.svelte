<script>
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';
	import { getDashboardData } from '$api/auth.js';

	let userData;

	onMount(() => {
		const unsubscribe = authStore.subscribe(({ isAuthenticated, token }) => {
			console.log('lors du controle', isAuthenticated);

			if (!isAuthenticated) {
				goto('/login');
			} else {
				getDashboardData(token) // Passe le token ici
					.then((data) => {
						userData = data.message;
					})
					.catch((error) => {
						console.log('Erreur lors de la récupération des données du tableau de bord:', error);
					});
			}
		});

		return () => {
			// cleanup
			unsubscribe();
		};
	});
	console.log(userData);
</script>

<svelte:head>
	<title>Tableau de bord utilisateur</title>
	<meta name="description" content="Ceci est votre tableau de bord utilisateur." />
</svelte:head>

<h1>Dashboard User</h1>
{#if userData}
	<h2>{userData}</h2>
{:else}
	<h2>Chargement...</h2>
{/if}
<a href="/about" use:hoverable={'first'}>Lien vers la page about</a>
