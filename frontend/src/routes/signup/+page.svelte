<script lang="ts">
	import { signup } from '$api/auth';
	import { t } from '$UITools/Translations/index';

	let username = '';
	let email = '';
	let password = '';

	async function handleSignup() {
		await signup(username, email, password, $t);
	}
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<div class="page">
	<div class="page-container">
		<form on:submit|preventDefault={handleSignup}>
			<input
				data-testid="username-input"
				id="username-input"
				type="text"
				bind:value={username}
				placeholder="Username"
			/>
			<input data-testid="email-input" id="email-input" bind:value={email} placeholder="Email" />
			<input
				data-testid="password-input"
				id="password-input"
				type="password"
				bind:value={password}
				placeholder="Password"
			/>
			<button data-testid="submit-button" type="submit">{$t('signup.button')}</button>
		</form>
	</div>
</div>
