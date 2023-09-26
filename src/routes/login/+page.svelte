<script>
	import { login } from '$api/auth';
	import { goto } from '$app/navigation';

	import { t } from '$UITools/translations/index';
	import notificationStore from '$stores/notificationStore';

	let email = '';
	let password = '';

	async function handleLogin() {
		try {
			await login(email, password);
			goto('/dashboard');
			notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
		} catch (error) {
			let errorMessage;
			console.log(error);
			switch (error.message) {
				case 'INVALID_CREDENTIALS':
					errorMessage = $t('validation.INVALID_CREDENTIALS');
					break;
				case 'RATE_LIMIT':
					errorMessage = $t('validation.RATE_LIMIT');
					break;
				case 'EMAIL_NOT_VERIFIED':
					errorMessage = $t('validation.EMAIL_NOT_VERIFIED');
					break;
				default:
					errorMessage = "Une erreur inconnue s'est produite.";
			}
			notificationStore.addNotification(errorMessage, 'error');
		}
	}

	function goToResetPassword() {
		goto('/reset-password');
	}
</script>

<div class="signup">
	<form on:submit|preventDefault={handleLogin}>
		<input id="email" type="text" bind:value={email} placeholder="Email" />
		<input id="password" type="password" bind:value={password} placeholder="Password" />
		<button type="submit">Se connecter</button>
	</form>
	<button on:click={goToResetPassword}>Mot de passe oublié ?</button>
</div>
