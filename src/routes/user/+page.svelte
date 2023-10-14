<script context="module">
	// Importez ou définissez votre fonction pour obtenir les données du tableau de bord.
	import { getDashboardData } from '$api/auth.js';

	export async function load({ locals }) {
		// Log pour déboguer les valeurs des 'locals'
		console.log('Valeur de locals:', locals);

		const { user } = locals;

		// Log pour déboguer la valeur de 'user'
		console.log('Valeur de user:', user);

		if (user) {
			try {
				const data = await getDashboardData(); // Votre propre appel API ou fonction pour obtenir les données
				// Log pour déboguer la valeur de 'data'
				console.log('Valeur de data:', data);

				return { props: { user, data } };
			} catch (error) {
				// Log pour déboguer en cas d'erreur lors de l'appel à 'getDashboardData'
				console.error("Erreur lors de l'obtention des données du tableau de bord:", error);
				return { status: 500, error: 'Erreur interne du serveur' };
			}
		} else {
			return { status: 302, redirect: '/login' };
		}
	}
</script>

<script>
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';
	//import { updateUserInfo } from '$api/auth.js';
	import { t } from '$UITools/Translations/index';
	import { sendEmailResetPassword } from '$api/auth.js';
	import { getAuthenticatedUser } from '$utils/auth/getAuthenticatedUser.js';

	let userData;

	export let user;
	export let data;

	console.log('user', user);
	console.log('data', data);

	let username = '';
	let email = '';
	let role = '';
	let isVerified = false;

	// const handleUpdate = async () => {
	// 	try {
	// 		await updateUserInfo(token, { username, email }, $t);
	// 		const data = await getDashboardData(token);
	// 		userData = data;
	// 		({ username, email, role, isVerified } = userData.userInfo);
	// 	} catch (error) {
	// 		console.error("Erreur lors de la mise à jour des informations de l'utilisateur :", error);
	// 	}
	// };

	const handlePasswordReset = async () => {
		await sendEmailResetPassword(email, $t);
	};

	onMount(async () => {
		try {
			// Utilisez le hook serveur pour vérifier si l'utilisateur est authentifié
			const data = await getDashboardData();
			if (data) {
				userData = data;
				({ username, email, role, isVerified } = userData.userInfo);
			} else {
				goto('/login');
			}
		} catch (error) {
			console.error('Error:', error);
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
				<!-- <button on:click={handleUpdate}>Mettre à jour</button> -->
			</form>
		{:else}
			<h2>{$t('user.loader')}</h2>
		{/if}
		<a href="/about" use:hoverable={'first'}>{$t('user.button')}</a>
	</div>
</div>
