import { writable } from 'svelte/store';

export const authStore = writable({
	token: null,
	userId: null,
	role: null, // Ajout de la propriété 'role'
	isAuthenticated: false
});
