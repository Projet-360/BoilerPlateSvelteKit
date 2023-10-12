<script>
	import { goto } from '$app/navigation';
	import { t } from '$UITools/Translations/index';
	import { login } from '$api/auth';

	let email = '';
	let password = '';

	async function handleLogin() {
		await login(email, password, $t);
	}

	function goToResetPassword() {
		goto('/forgot-password');
	}
</script>

<div class="page">
	<div class="page-container">
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
			<button data-testid="submit-button" type="submit">{$t('login.button')}</button>
		</form>
		<button on:click={goToResetPassword}>{$t('login.link')}</button>
	</div>
</div>
