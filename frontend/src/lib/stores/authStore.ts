// import { writable } from 'svelte/store';
// import type { Writable } from 'svelte/store';

// // Initialisation du store avec un état initial et un type
// export const authStore: Writable<App.IAuthStore> = writable({
// 	userId: null,
// 	role: null,
// 	isAuthenticated: false,
// 	currentSessionId: undefined, // Initialisez à undefined ou null
// 	sessions: [] // Initialisez avec un tableau vide
// });

// // Fonction pour initialiser le store
// export function initializeAuthStore() {
// 	let unsubscribe: (() => void) | null = null;
// 	return {
// 		promise: new Promise<void>((resolve) => {
// 			unsubscribe = authStore.subscribe(({ isAuthenticated }) => {
// 				if (isAuthenticated !== null) {
// 					resolve();
// 					if (unsubscribe) {
// 						unsubscribe();
// 					}
// 				}
// 			});
// 		}),
// 		unsubscribe: () => {
// 			if (unsubscribe) {
// 				unsubscribe();
// 			}
// 		}
// 	};
// }


import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '@apollo/client';

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
        login: async (username, password) => {
            const { data } = await client.mutate({
                mutation: gql`
                    mutation Login($username: String!, $password: String!) {
                        login(username: $username, password: $password) {
                            user {
                                id
                                username
                                email
                                role
                            }
                            token
                        }
                    }
                `,
                variables: { username, password }
            });
            if (data.login.token) {
                localStorage.setItem('authToken', data.login.token);
            }
            set({ ...data.login, isAuthenticated: true });
        },
        logout: async () => {
            await client.mutate({
                mutation: gql`
                    mutation {
                        logout
                    }
                `
            });
            localStorage.removeItem('authToken');
            set({ user: null, isAuthenticated: false, sessions: [] });
        },
        // Plus de méthodes pour récupérer les données de l'utilisateur, etc.
    };
}

export const authStore = createAuthStore();

