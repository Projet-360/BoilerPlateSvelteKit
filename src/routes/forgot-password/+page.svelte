<script>
	import { sendEmailResetPassword } from '$api/auth';

	import { t } from '$UITools/Translations/index';

	import { EmailresetPasswordValidation } from '$message/EmailresetPasswordValidation.js';

	let email = '';

	async function handleResetPassword() {
		try {
			await sendEmailResetPassword(email);
		} catch (error) {
			EmailresetPasswordValidation(error, $t);
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
