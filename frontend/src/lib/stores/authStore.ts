// Importation des modules nécessaires de Svelte et Apollo
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '$apollo';
import { LOGIN, LOGOUT, SIGNUP } from '$apollo/User';
import { gql } from "@apollo/client/core";

// Définition du store d'authentification
function createAuthStore() {
    const { subscribe, set }: Writable<App.IAuthStore> = writable({
        userId: null,
        role: null,
        isAuthenticated: false,
        currentSessionId: undefined, // Initialisé à undefined
        sessions: [] // Initialisé avec un tableau vide
    });

    return {
        subscribe,
        // Fonction asynchrone pour l'inscription d'un utilisateur
        signup: async (username: string, email: string, password: string, $t: App.TranslationFunction) => {
            try {
                const { data } = await client.mutate({
                    mutation: SIGNUP,
                    variables: { username, email, password }
                });
            } catch (error) {
                console.error("Signup failed:", error);
            }
        },
    };
}

// Exportation du store d'authentification
export const authStore = createAuthStore();