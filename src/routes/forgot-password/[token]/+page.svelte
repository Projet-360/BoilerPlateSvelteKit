<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { t } from '$UITools/translations/index';

	import { ResetForgotNewPassword } from '$api/auth';
	import notificationStore from '$stores/notificationStore';

	let newPassword = '';
	let confirmPassword = '';
	let token;

	onMount(async () => {
		token = $page.params.token;
	});

	async function resetPassword() {
		if (newPassword !== confirmPassword) {
			notificationStore.addNotification($t('validation.FORGOT_PASSWORD_INVALID'), 'error');
			return;
		}
		try {
			await ResetForgotNewPassword(token, newPassword);
			goto('/');
			notificationStore.addNotification($t('validation.VALIDATION_FORGOT_PASSWORD'), 'success');
		} catch (error) {
			console.log(error);
			notificationStore.addNotification(error.message, 'error');
		}
	}
</script>

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
