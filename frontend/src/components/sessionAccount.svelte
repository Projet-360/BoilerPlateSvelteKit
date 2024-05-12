<script lang="ts">
	import { onMount } from 'svelte';
	import notificationStore from '$stores/UX/notificationStore'; // Supposons que vous ayez un store pour les notifications

	let sessions: TS.Session[] = [];

	// Fonction pour charger les sessions de l'utilisateur
	async function loadSessions() {
		try {
			//sessions = await getUserSessions();
		} catch (error) {
			console.error('Erreur lors du chargement des sessions :', error);
			// Afficher un message d'erreur à l'utilisateur
			notificationStore.addNotification('Erreur lors du chargement des sessions.', 'error');
		}
	}

	// Fonction pour gérer la fermeture d'une session
	async function handleCloseSession(sessionId: string) {
		try {
			//await closeUserSession(sessionId);
			sessions = sessions.filter((session) => session.userId !== sessionId);
			// Afficher un message de succès à l'utilisateur
			notificationStore.addNotification('Session fermée avec succès.', 'success');
		} catch (error) {
			console.error('Erreur lors de la fermeture de la session :', error);
			// Afficher un message d'erreur à l'utilisateur
			notificationStore.addNotification('Erreur lors de la fermeture de la session.', 'error');
		}
	}

	// Charger les sessions lorsque le composant est monté
	onMount(loadSessions);
</script>

<!-- La structure HTML -->
<div class="session-manager">
	<h1>Gestion des sessions</h1>
	{#if sessions.length === 0}
		<p>Aucune session active trouvée.</p>
	{:else}
		<ul>
			{#each sessions as session}
				<li class="session">
					<!-- <p>ID de session : {session.id}</p> -->
					<p>Browser : {session.browser?.name ?? 'Inconnu'} {session.browser?.version ?? ''}</p>
					<p>OS : {session.os?.name ?? 'Inconnu'} {session.os?.version ?? ''}</p>
					<!-- <p>Device : {session.device ?? 'Inconnu'}</p> -->
					<!-- <p>IP : {session.ip}</p> -->
					<p>Créé à : {new Date(session.createdAt).toLocaleString()}</p>
					<button on:click={() => handleCloseSession(session.id)}>Fermer la session</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
