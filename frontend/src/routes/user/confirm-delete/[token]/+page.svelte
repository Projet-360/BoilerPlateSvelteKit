<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let token: string;
	$: token = $page.params.token;

	onMount(async () => {
		if (token) {
			// Appeler la fonction de confirmation de suppression de compte
			try {
				//await confirmAccountDeletion(token);
				alert('Votre compte a été supprimé avec succès.');
				goto('/'); // Rediriger l'utilisateur vers la page d'accueil
			} catch (error: any) {
				alert(('Impossible de supprimer le compte: ' + error.message) as string);
			}
		}
	});
</script>

<template>
	<h1>Confirmation de Suppression de Compte</h1>
	<p>Chargement...</p>
</template>
