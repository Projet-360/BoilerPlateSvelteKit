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
	<h1>Réinitialiser le mot de passe</h1>
	<form>
		<label for="newPassword">Nouveau mot de passe :</label>
		<input
			data-testid="newPassword-input"
			type="password"
			id="newPassword"
			bind:value={newPassword}
			required
		/>

		<label for="confirmPassword">Confirmer le mot de passe :</label>
		<input
			data-testid="confirmPassword-input"
			type="password"
			id="confirmPassword"
			bind:value={confirmPassword}
			required
		/>

		<button data-testid="submit-button" type="button" on:click={resetPassword}
			>Réinitialiser le mot de passe</button
		>
	</form>
</main>
