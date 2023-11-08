<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { t } from '$UITools/Translations/index';
	import { verifyToken } from '$api/auth/verifyTokenAPI';

	let token;

	onMount(() => {
		token = $page.params.token;
		verifyToken(token, $t);
	});
</script>

<svelte:head>
	<title>Page d'exemple</title>
	<meta name="description" content="Ceci est une description de la page d'exemple." />
</svelte:head>

<h1>{$t('signup.verifytoken')}</h1>
