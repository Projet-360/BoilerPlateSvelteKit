<script>
	import { goto } from '$app/navigation';

	import { resetPassword } from '$api/auth';

	import { t } from '$UITools/translations/index';
	import notificationStore from '$stores/notificationStore';

	let email = '';

	async function handleResetPassword() {
		try {
			const ll = await resetPassword(email);
			console.log('ll', ll);
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
	<h1>Réinitialisation du mot de passe</h1>
	<form>
		<label for="email">Entrez votre adresse e-mail :</label>
		<input type="email" id="email" bind:value={email} required />
		<button type="button" on:click={handleResetPassword}>Réinitialiser le mot de passe</button>
	</form>
</main>
