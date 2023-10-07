import { writable } from 'svelte/store';

export const authStore = writable({
	token: null,
	userId: null,
	role: null,
	isAuthenticated: false
});

export function initializeAuthStore() {
	let unsubscribe;
	return {
		promise: new Promise((resolve) => {
			unsubscribe = authStore.subscribe(({ isAuthenticated, token }) => {
				if (isAuthenticated !== null && token !== null) {
					resolve();
					if (unsubscribe) {
						unsubscribe();
					}
				}
			});
		}),
		unsubscribe
	};
}
