<script>
	import { authStore } from '$stores/authStore';
	import { t } from '$UITools/Translations/index';
	import { logout } from '$lib/logout.js';

	let isAuthenticated;

	authStore.subscribe(($authStore) => {
		// Utilisez la propriété qui représente le mieux l'état d'authentification
		// dans votre cas, si ce n'est pas `isAuthenticated`.
		isAuthenticated = $authStore && $authStore.isAuthenticated;
	});

	function handleLogout() {
		logout($t);
	}
</script>

{#if isAuthenticated}
	<button id="button-logout" data-testid="button-logout" on:click={handleLogout}
		>{$t('logout.logout')}</button
	>
{/if}
