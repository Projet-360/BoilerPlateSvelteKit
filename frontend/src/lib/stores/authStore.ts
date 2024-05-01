// Importation des modules nécessaires de Svelte et Apollo
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '$apollo';
import { LOGIN, LOGOUT, SIGNUP } from '$apollo/User';

import notificationStore from './notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

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
                notificationStore.addNotification($t('data.signupSuccess'), 'success');
            } catch (error) {
                console.error("Error greeting:", JSON.stringify(error, null, 2));
                messageNotification(error, $t);
            }
        },
    };
}

// Exportation du store d'authentification
export const authStore = createAuthStore();