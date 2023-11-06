<script lang="ts">
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { getDashboardData, updateUserInfo } from '$api/auth.js';
	import { t } from '$UITools/Translations/index';
	import { sendEmailResetPassword, requestAccountDeletion } from '$api/auth.js';

	let userData: App.User;
	let id: string = '';
	let username: string = '';
	let email: string = '';
	let role: string = '';
	let isVerified = false;

	const handleUpdate = async () => {
		try {
			await updateUserInfo({ username, email }, $t);
			const data = await getDashboardData();
			userData = data;
			({ id, username, email, role, isVerified } = userData.userInfo);
		} catch (error) {
			console.error("Erreur lors de la mise à jour des informations de l'utilisateur :", error);
		}
	};

	const handlePasswordReset = async () => {
		await sendEmailResetPassword(email, $t);
	};

	const DeleteAccount = async (id: string) => {
		await requestAccountDeletion(id, $t);
	};

	onMount(async () => {
		try {
			const data = await getDashboardData();
			userData = data;
			({ id, username, email, role, isVerified } = userData.userInfo);
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

				<p><label for="role">Role</label>: {role}</p>
				<label for="isVerified">Is Verified</label>
				<input id="isVerified" type="checkbox" checked={isVerified} disabled />

				<button on:click={() => DeleteAccount(id)}>Supprimer le compte</button>

				<button on:click={handleUpdate}>Mettre à jour</button>
			</form>
		{:else}
			<h2>{$t('user.loader')}</h2>
		{/if}
		<a href="/about" use:hoverable={'first'}>{$t('user.button')}</a>
	</div>
</div>
