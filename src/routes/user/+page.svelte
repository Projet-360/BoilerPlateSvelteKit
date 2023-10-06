<script>
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';
	import { getDashboardData } from '$api/auth.js';
	import { t } from '$UITools/Translations/index';

	let userData;
	let unsubscribe;

	onMount(async () => {
		const authStoreLoaded = new Promise((resolve) => {
			unsubscribe = authStore.subscribe(({ isAuthenticated, token }) => {
				if (isAuthenticated !== null && token !== null) {
					resolve({ isAuthenticated, token });
				}
			});
		});

		const { isAuthenticated, token } = await authStoreLoaded;
		unsubscribe();

		if (!isAuthenticated) {
			goto('/login');
		} else {
			try {
				const data = await getDashboardData(token);
				userData = data.message;
			} catch (error) {
				console.error('Error retrieving data from dashboard:', error);
			}
		}
	});
</script>

<svelte:head>
	<title>{$t('user.title')}</title>
	<meta name="description" content="This is your user dashboard." />
</svelte:head>

<h1>{$t('user.title')}</h1>
{#if userData}
	<h2>{userData}</h2>
{:else}
	<h2>{$t('user.loader')}</h2>
{/if}
<a href="/about" use:hoverable={'first'}>{$t('user.button')}</a>
