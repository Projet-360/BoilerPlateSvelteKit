<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getAllUsers, updateUser } from '$api/auth/adminAPI';
	import notificationStore from '$stores/notificationStore';
	import { t } from '$UITools/Translations';

	// Déclaration du type pour les utilisateurs, si vous avez un tel type défini
	type AppUser = {
		_id: string;
		username: string;
		email: string;
		role: string;
	};

	let users: AppUser[] = [];
	let isLoading = true; // Indicateur de chargement

	function fetchUsers(): void {
		getAllUsers()
			.then((fetchedUsers: AppUser[]) => {
				users = fetchedUsers.filter((user) => user !== null && user._id !== null);
			})
			.catch((error: Error) => {
				console.error('Erreur lors de la récupération des utilisateurs:', error);
				notificationStore.addNotification('Impossible de charger les utilisateurs.', 'error');
			})
			.finally(() => {
				isLoading = false; // Les données sont chargées, nous pouvons enlever l'indicateur de chargement
			});
	}

	onMount(async () => {
		if (!isAuthenticated()) {
			goto('/login');
		} else {
			await fetchUsers();
		}
	});

	function isAuthenticated(): boolean {
		// Remplacez ceci par votre logique réelle d'authentification
		return true;
	}

	async function handleUpdateUser(userId: string): Promise<void> {
		const userToUpdate = users.find((user) => user?._id === userId);

		if (!userToUpdate) {
			console.error('Utilisateur à mettre à jour introuvable');
			notificationStore.addNotification(
				'Erreur : Utilisateur à mettre à jour introuvable.',
				'error'
			);
			return;
		}

		try {
			const { user, notification } = await updateUser(userId, userToUpdate, $t);

			// Vérifiez que la mise à jour a réussi avant d'ajouter la notification de succès.
			if (user && notification) {
				const index = users.findIndex((u) => u._id === userId);
				if (index !== -1) {
					users[index] = user;
					notificationStore.addNotification(
						`Utilisateur mis à jour avec succès: ${notification}`,
						'success'
					);
				}
			} else {
			}
		} catch (error: any) {
			console.error('Error:', error);
			notificationStore.addNotification(
				`Erreur lors de la mise à jour de l'utilisateur: ${error.message}`,
				'error'
			);
		}
	}
</script>

<svelte:head>
	<title>Exemple Page</title>
	<meta name="description" content="Meta description for about page." />
</svelte:head>

<div class="page">
	<div class="page-container">
		<h1>Tableau de bord administrateur</h1>
		{#if isLoading}
			<p>Chargement des utilisateurs...</p>
		{:else}
			{#each users as user (user?._id)}
				{#if user && user._id}
					<div class="page-container">
						<form on:submit|preventDefault={() => handleUpdateUser(user._id)}>
							<label for={`username-${user._id}`}>Nom d'utilisateur</label>
							<input id={`username-${user._id}`} type="text" bind:value={user.username} />

							<label for={`email-${user._id}`}>Email</label>
							<input id={`email-${user._id}`} type="email" bind:value={user.email} />

							<label for={`role-${user._id}`}>Rôle</label>
							<select id={`role-${user._id}`} bind:value={user.role}>
								<option value="user">Utilisateur</option>
								<option value="admin">Admin</option>
								<option value="moderator">Modérateur</option>
							</select>

							<button type="submit">Mettre à jour</button>
						</form>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</div>
