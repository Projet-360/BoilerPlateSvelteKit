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
	<form on:submit|preventDefault={handleSignup}>
		<input id="username" type="text" bind:value={username} placeholder="Username" />
		<input id="email" bind:value={email} placeholder="Email" />
		<input id="password" type="password" bind:value={password} placeholder="Password" />
		<button type="submit">S'inscrire</button>
	</form>
</div>
