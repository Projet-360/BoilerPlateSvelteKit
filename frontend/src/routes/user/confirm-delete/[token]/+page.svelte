<script lang="ts">
	import { onMount } from 'svelte';
	import { confirmAccountDeletion } from '$api/auth/userAPI';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let token: string;

	onMount(async () => {
		// Récupérer le jeton de l'URL
		$: token = $page.params.token;

		if (token) {
			// Appeler la fonction de confirmation de suppression de compte
			try {
				await confirmAccountDeletion(token);
				alert('Votre compte a été supprimé avec succès.');
				goto('/'); // Rediriger l'utilisateur vers la page d'accueil
			} catch (error) {
				alert(('Impossible de supprimer le compte: ' + error.message) as string);
			}
		}
	});
</script>

<template>
	<h1>Confirmation de Suppression de Compte</h1>
	<p>Chargement...</p>
</template>
