import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { get } from 'svelte/store';
import { authStore } from '$stores/authStore';

export function handleRouteBasedOnAuth(data) {
	const { isAuthenticated } = get(authStore);
	const isUserPage = data.route === '/user';

	if (isUserPage && isAuthenticated === false && browser) {
		goto('/login');
	}
}
