import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

// Interface pour le store
interface AuthState {
	userId: string | null;
	role: string | null;
	isAuthenticated: boolean;
}

// Initialisation du store avec un état initial et un type
export const authStore: Writable<AuthState> = writable({
	userId: null,
	role: null,
	isAuthenticated: false
});

// Fonction pour initialiser le store
export function initializeAuthStore() {
	let unsubscribe: (() => void) | null = null;
	return {
		promise: new Promise<void>((resolve) => {
			unsubscribe = authStore.subscribe(({ isAuthenticated }) => {
				if (isAuthenticated !== null) {
					resolve();
					if (unsubscribe) {
						unsubscribe();
					}
				}
			});
		}),
		unsubscribe: () => {
			if (unsubscribe) {
				unsubscribe();
			}
		}
	};
}
