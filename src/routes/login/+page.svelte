<script>
	import { login } from '$api/auth';
	import { goto } from '$app/navigation';
	import { authStore } from '$stores/authStore.js';

	import { t } from '$UITools/translations/index';
	import notificationStore from '$stores/notificationStore';

	let email = '';
	let password = '';

	async function handleLogin() {
		try {
			await login(email, password); // Supposons que cela renvoie un objet utilisateur avec un champ 'role'

			const { role, isAuthenticated } = $authStore; // Destructuration pour obtenir le rôle et l'état d'authentification

			if (!isAuthenticated) {
				// Traitez ce cas comme bon vous semble
				return;
			}

			switch (
				role // Redirection selon le rôle
			) {
				case 'admin':
					goto('/admin/dashboard');
					break;
				case 'user':
					goto('/user');
					break;
				default:
					goto('/'); // ou une autre page par défaut
			}

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
		goto('/forgot-password');
	}
</script>

<div class="login">
	<div class="login-container">
		<form on:submit|preventDefault={handleLogin}>
			<input
				data-testid="email-input"
				id="email-input"
				type="text"
				bind:value={email}
				placeholder="Email"
			/>
			<input
				data-testid="password-input"
				id="password-input"
				type="password"
				bind:value={password}
				placeholder="Password"
			/>
			<button data-testid="submit-button" type="submit">Se connecter</button>
		</form>
		<button on:click={goToResetPassword}>Mot de passe oublié ?</button>
	</div>
</div>
