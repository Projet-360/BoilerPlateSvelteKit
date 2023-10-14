<script>
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';
	import { getAllUsers, updateUser } from '$api/auth.js'; // Remplacez par le bon chemin
	import notificationStore from '$stores/notificationStore';
	import { getAuthenticatedUser } from '$utils/auth/getAuthenticatedUser.js';

	let users = [];
	let token;

	function fetchUsers(token) {
		getAllUsers(token)
			.then((fetchedUsers) => {
				users = fetchedUsers;
			})
			.catch((error) => {
				console.error('Erreur lors de la récupération des utilisateurs:', error);
			});
	}

	onMount(async () => {
		try {
			if (!isAuthenticated) {
				goto('/login');
			} else {
				try {
					fetchUsers(fetchedToken);
				} catch (error) {
					console.error('Erreur lors de la récupération des utilisateurs:', error);
				}
			}
		} catch (error) {
			console.error('Error:', error);
		}
	});

	async function handleUpdateUser(userId) {
		const userToUpdate = users.find((user) => user._id === userId);

		if (!userToUpdate) {
			console.error('Utilisateur à mettre à jour introuvable');
			return;
		}

		try {
			const { user, notification } = await updateUser(token, userId, userToUpdate);

			if (!user) {
				console.error(
					"La mise à jour de l'utilisateur a échoué, aucune donnée utilisateur renvoyée"
				);
				return;
			}

			const index = users.findIndex((user) => user._id === userId);
			users[index] = user;
			notificationStore.addNotification('Utilisateur mis à jour avec succès', 'success');
		} catch (error) {
			console.error('Error:', error);
		}
	}
</script>

<svelte:head>
	<title>exemple Page</title>
	<meta name="description" content="meta description for about page." />
</svelte:head>

<div class="page">
	<div class="page-container">
		<h1>Tableau de bord administrateur</h1>

		{#each users as user}
			<div class="page-container">
				<form on:submit|preventDefault={() => handleUpdateUser(user._id)}>
					<label for="username">Nom d'utilisateur</label>
					<input id="username" type="text" bind:value={user.username} />

					<label for="email">Email</label>
					<input id="email" type="email" bind:value={user.email} />

					<label for="role">Rôle</label>
					<select id="role" bind:value={user.role}>
						<option value="user">Utilisateur</option>
						<option value="admin">Admin</option>
						<option value="moderator">Modérateur</option>
					</select>

					<button type="submit">Mettre à jour</button>
				</form>
			</div>
		{/each}
	</div>
</div>
