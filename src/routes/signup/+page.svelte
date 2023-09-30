<script>
	import { signup } from '$api/auth';
	import { signupValidation } from '$api/message/signup';
	import { t } from '$UITools/translations/index';

	let username = '';
	let email = '';
	let password = '';

	async function handleSignup() {
		const result = await signup(username, email, password);
		signupValidation(result, $t);
	}
</script>

<div class="signup">
	<div class="signup-container">
		<form on:submit|preventDefault={handleSignup}>
			<input
				data-testid="username-input"
				type="text"
				bind:value={username}
				placeholder="Username"
			/>
			<input data-testid="email-input" bind:value={email} placeholder="Email" />
			<input
				data-testid="password-input"
				type="password"
				bind:value={password}
				placeholder="Password"
			/>
			<button data-testid="submit-button" type="submit">S'inscrire</button>
		</form>
	</div>
</div>
