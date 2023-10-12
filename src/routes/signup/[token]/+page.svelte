<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { t } from '$UITools/Translations/index';
	import { verifyToken } from '$api/auth.js';

	let token;

	onMount(() => {
		token = $page.params.token;
		verifyToken(token, $t);
	});
</script>

<h1>{$t('signup.verifytoken')}</h1>
