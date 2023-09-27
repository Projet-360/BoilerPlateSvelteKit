<script>
	import { resetPassword } from '$api/auth';

	import { t } from '$UITools/translations/index';
	import notificationStore from '$stores/notificationStore';

	let email = '';

	async function handleResetPassword() {
		try {
			await resetPassword(email);
		} catch (error) {
			let errorMessage;
			console.log(error);
			switch (error.message) {
				case 'USER_NOT_FOUND':
					errorMessage = $t('validation.USER_NOT_FOUND');
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
