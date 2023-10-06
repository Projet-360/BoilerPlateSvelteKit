<script>
	import { goto } from '$app/navigation';

	import { resetPassword } from '$api/auth';

	import { t } from '$UITools/Translations/index';
	import notificationStore from '$stores/notificationStore';

	let email = '';

	async function handleResetPassword() {
		try {
			await resetPassword(email);
			goto('/');
			notificationStore.addNotification($t('validation.EMAIL_FORGOT_PASSWORD'), 'success');
		} catch (error) {
			let errorMessage;
			console.log(error);
			switch (error.message) {
				case 'VALID_EMAIL':
					errorMessage = $t('validation.VALID_EMAIL');
					break;
				case 'USER_NOT_FOUND':
					errorMessage = $t('validation.USER_NOT_FOUND');
					break;
				case 'EMAIL_NOT_VERIFIED':
					errorMessage = $t('validation.EMAIL_NOT_VERIFIED');
					break;
				case 'RATE_LIMIT':
					errorMessage = $t('validation.RATE_LIMIT');
					break;
				default:
					errorMessage = "Une erreur inconnue s'est produite.";
			}
			notificationStore.addNotification(errorMessage, 'error');
		}
	}
</script>

<main>
	<h1>{$t('forgot-password.title')}</h1>
	<form>
		<label for="email">{$t('forgot-password.subtitle')}</label>
		<input data-testid="email-input" type="email" id="email" bind:value={email} required />
		<button data-testid="submit-button" type="button" on:click={handleResetPassword}
			>{$t('forgot-password.button')}</button
		>
	</form>
</main>
