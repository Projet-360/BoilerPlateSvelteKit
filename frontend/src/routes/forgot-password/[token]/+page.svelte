<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { t } from '$UITools/Translations/index';
	import notificationStore from '$stores/notificationStore';

	import { ResetForgotNewPassword } from '$api/auth';

	let newPassword = '';
	let confirmPassword = '';
	let token: string;

	onMount(async () => {
		token = $page.params.token;
	});

	async function resetPassword() {
		if (newPassword !== confirmPassword) {
			notificationStore.addNotification($t('validation.FORGOT_PASSWORD_INVALID'), 'error');
			return;
		}

		await ResetForgotNewPassword(token, newPassword, confirmPassword, $t);
	}
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<main>
	<h1>{$t('forgot-password-token.title')}</h1>
	<form>
		<label for="newPassword">{$t('forgot-password-token.newPassword')}</label>
		<input
			data-testid="newPassword-input"
			type="password"
			id="newPassword"
			bind:value={newPassword}
			required
		/>

		<label for="confirmPassword">{$t('forgot-password-token.confirmPassword')}</label>
		<input
			data-testid="confirmPassword-input"
			type="password"
			id="confirmPassword"
			bind:value={confirmPassword}
			required
		/>

		<button data-testid="submit-button" type="button" on:click={resetPassword}
			>{$t('forgot-password-token.link')}</button
		>
	</form>
</main>
