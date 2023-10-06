import { writable } from 'svelte/store';

export const authStore = writable({
	token: null,
	userId: null,
	role: null, // Ajout de la propriété 'role'
	isAuthenticated: false
});

export const initializeAuthStore = () => {
	let unsubscribe = null;

	return new Promise((resolve) => {
		unsubscribe = authStore.subscribe(({ isAuthenticated, token }) => {
			if (isAuthenticated !== null && token !== null) {
				resolve(() => {
					if (unsubscribe) {
						unsubscribe();
					}
				});
			}
		});
	});
};
