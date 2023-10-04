<script>
	import { hoverable } from '$UITools/Cursor/cursorHelpers.js';
	import { onMount } from 'svelte';
	import { authStore } from '$stores/authStore.js';
	import { goto } from '$app/navigation';

	onMount(() => {
		authStore.subscribe(({ isAuthenticated }) => {
			if (!isAuthenticated) {
				goto('/login'); // redirects to login page if user is not authenticated
			}
		});
	});
</script>

<svelte:head>
	<title>exemple Page</title>
	<meta name="description" content="meta description for about page." />
</svelte:head>

<h1>Dashboard</h1>
<a href="/about" use:hoverable={'first'}>Link to the page about</a>
