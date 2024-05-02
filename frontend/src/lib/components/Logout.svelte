<script lang="ts">
	import { authStore } from '$stores/Data/authStore';
	import { t } from '$UITools/Translations/index';
	import { logout } from '$api/auth/logoutAPI';

	let isAuthenticated: boolean;

	authStore.subscribe(($authStore) => {
		isAuthenticated = $authStore && $authStore.isAuthenticated ? true : false;
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
