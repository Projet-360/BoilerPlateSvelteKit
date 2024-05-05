<script lang="ts">
	import { t } from '$UITools/Translations/index';
	import { authStore } from '$stores/Data/authStore';

	let email = '';

	async function handleResetPassword() {
		await authStore.sendEmailResetPassword(email, $t);
	}
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

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
