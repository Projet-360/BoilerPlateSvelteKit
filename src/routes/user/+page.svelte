<script>
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';
	import { getDashboardData, updateUserInfo } from '$api/auth.js';
	import { t } from '$UITools/Translations/index';
	import notificationStore from '$stores/notificationStore';
	import { logout } from '$lib/logout.js';
	import { resetPassword } from '$api/auth.js';

	let userData;
	let unsubscribe;
	let isAuthenticated;

	let token;
	let username = '';
	let email = '';
	let role = '';
	let isVerified = false;

	const handleUpdate = async () => {
		try {
			const response = await updateUserInfo(token, { username, email }); // Récupérez la réponse brute
			console.log('Réponse brute :', response); // Log de la réponse brute

			const { updatedUser, notification } = response; // Destructuration

			notificationStore.addNotification('Information mise à jour', 'success');

			if (notification) {
				notificationStore.addNotification(notification, 'success');

				logout($t);

				authStore.subscribe(($authStore) => {
					isAuthenticated = $authStore && $authStore.token ? true : false;
				});
			}

			const data = await getDashboardData(token);
			userData = data;
			({ username, email, role, isVerified } = userData.userInfo);
		} catch (error) {
			console.error("Erreur lors de la mise à jour des informations de l'utilisateur :", error);
		}
	};

	const handlePasswordReset = async () => {
		try {
			await resetPassword(email);

			notificationStore.addNotification($t('validation.EMAIL_FORGOT_PASSWORD'), 'success');
		} catch (error) {
			console.error('Erreur lors de la réinitialisation du mot de passe:', error);
		}
	};
	onMount(async () => {
		const authStoreLoaded = new Promise((resolve) => {
			unsubscribe = authStore.subscribe(({ isAuthenticated, token }) => {
				if (isAuthenticated !== null && token !== null) {
					resolve({ isAuthenticated, token });
				}
			});
		});

		const { isAuthenticated, token: fetchedToken } = await authStoreLoaded;
		token = fetchedToken;
		unsubscribe();

		if (!isAuthenticated) {
			goto('/login');
		} else {
			try {
				const data = await getDashboardData(token);
				userData = data;
				({ username, email, role, isVerified } = userData.userInfo);
			} catch (error) {
				console.error('Error retrieving data from dashboard:', error);
			}
		}
	});
</script>

<svelte:head>
	<title>{$t('user.title')}</title>
	<meta name="description" content="This is your user dashboard." />
</svelte:head>

<div class="page">
	<div class="page-container">
		<h1>{$t('user.title')}</h1>
		{#if userData}
			<form>
				<label for="username">Username</label>
				<input id="username" type="text" bind:value={username} />

				<label for="email">Email</label>
				<input id="email" type="email" bind:value={email} />

				<button on:click={handlePasswordReset}>Réinitialiser le mot de passe</button>

				<label for="role">Role</label>
				<input id="role" type="text" value={role} onlyRead />

				<label for="isVerified">Is Verified</label>
				<input id="isVerified" type="checkbox" checked={isVerified} disabled />

				<button on:click={handleUpdate}>Mettre à jour</button>
			</form>
		{:else}
			<h2>{$t('user.loader')}</h2>
		{/if}
		<a href="/about" use:hoverable={'first'}>{$t('user.button')}</a>
	</div>
</div>
