<script>
	// Importation des modules et fonctions nécessaires
	import { signup } from '$api/auth';
	import { signupValidation } from '$api/message/signup';
	import { t } from '$UITools/translations/index';

	// Initialisation des variables
	let username = '';
	let email = '';
	let password = '';
	let errorMessage = '';

	// Fonction pour gérer l'inscription
	async function handleSignup() {
		// Validation minimale des champs
		if (!username || !email || !password) {
			errorMessage = $t('all_fields_required');
			return;
		}

		try {
			// Appel de la fonction d'inscription et validation
			const result = await signup(username, email, password);
			signupValidation(result, $t);
		} catch (error) {
			// Gestion des erreurs
			errorMessage = error.message || $t('unknown_error');
		}
	}
</script>

<!-- HTML et Svelte template -->
<div class="signup">
	{#if errorMessage}
		<!-- Affichage des messages d'erreur -->
		<p class="error-message">{errorMessage}</p>
	{/if}
	<form class="signup-form" on:submit|preventDefault={handleSignup}>
		<label for="username">{$t('username')}</label>
		<input id="username" type="text" bind:value={username} placeholder={$t('username')} />

		<label for="email">{$t('email')}</label>
		<input id="email" type="email" bind:value={email} placeholder={$t('email')} />

		<label for="password">{$t('password')}</label>
		<input id="password" type="password" bind:value={password} placeholder={$t('password')} />

		<button type="submit">{$t('signup')}</button>
	</form>
</div>

<!-- Styles SCSS -->
<style lang="scss">
	.signup {
		// Votre style SCSS ici pour le conteneur

		.error-message {
			color: red;
			// Ajoutez des styles supplémentaires pour le message d'erreur
		}

		label,
		input,
		button {
			// Votre style SCSS ici pour les éléments du formulaire
		}
	}
</style>
