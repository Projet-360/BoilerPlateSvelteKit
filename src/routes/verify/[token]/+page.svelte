<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import notificationStore from '$stores/notificationStore';
	import { BD } from '$lib/constants';

	let token;

	onMount(async () => {
		token = $page.params.token;

		try {
			const res = await fetch(`${BD}/auth/verify/${token}`);
			if (res.ok) {
				console.log('Token vérifié avec succès'); // Pour le débogage
				goto('/');
				notificationStore.addNotification('Votre adresse mail est bien validée', 'success');
			} else {
				console.log('Échec de la vérification du token'); // Pour le débogage
				// Gérer l'échec de la vérification ici
			}
		} catch (error) {
			console.log('Erreur lors de la vérification :', error); // Pour le débogage
			// Gérer l'erreur ici
		}
	});
</script>

<h1>Verification en cours...</h1>
