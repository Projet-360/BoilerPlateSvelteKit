import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '$apollo';
import { LOGIN, LOGOUT, SIGNUP } from '$apollo/User';

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
        signup: async (username:string, email:string, password:string, $t: App.TranslationFunction) => {
            const { data } = await client.mutate({
                mutation: SIGNUP,
                variables: { username, email, password }
            });
        },
        login: async (email: string, password: string, $t: App.TranslationFunction) => {
            const { data } = await client.mutate({
                mutation: LOGIN,
                variables: { email, password }
            });
        },
        logout: async () => {
            await client.mutate({
                mutation: LOGOUT
            });
        },
        // Plus de méthodes pour manipuler le state
    };
}

export const authStore = createAuthStore();
