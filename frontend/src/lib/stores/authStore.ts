import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '$apollo';
import { LOGIN, LOGOUT } from '$apollo/User';

function createAuthStore() {
    const { subscribe, set }: Writable<App.IAuthStore> = writable({
		userId: null,
		role: null,
		isAuthenticated: false,
		currentSessionId: undefined, // Initialisez à undefined ou null
		sessions: [] // Initialisez avec un tableau vide
    });

    return {
        subscribe,
        login: async (username: string, password: string) => {
            const { data } = await client.mutate({
                mutation: LOGIN,
                variables: { username, password }
            });
            if (data.login.token) {
                localStorage.setItem('authToken', data.login.token);
                set({ user: data.login.user, isAuthenticated: true, token: data.login.token });
            }
        },
        logout: async () => {
            await client.mutate({
                mutation: LOGOUT
            });
            localStorage.removeItem('authToken');
            set({ user: null, isAuthenticated: false, token: null });
        },
        // Plus de méthodes pour manipuler le state
    };
}

export const authStore = createAuthStore();


