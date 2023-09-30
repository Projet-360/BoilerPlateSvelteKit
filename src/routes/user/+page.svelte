<script>
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';
	import { getDashboardData } from '$api/auth.js';

	let userData;
	let unsubscribe; // Pour se désabonner du store

	onMount(async () => {
		const authStoreLoaded = new Promise((resolve) => {
			unsubscribe = authStore.subscribe(({ isAuthenticated, token }) => {
				if (isAuthenticated !== null && token !== null) {
					resolve({ isAuthenticated, token });
				}
			});
		});

		const { isAuthenticated, token } = await authStoreLoaded;
		unsubscribe();

		if (!isAuthenticated) {
			goto('/login');
		} else {
			try {
				const data = await getDashboardData(token);
				userData = data.message;
			} catch (error) {
				// Insérer ici un mécanisme de gestion d'erreurs robuste
				console.error('Erreur lors de la récupération des données du tableau de bord:', error);
			}
		}
	});
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
