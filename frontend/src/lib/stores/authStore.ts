// Importation des modules nécessaires de Svelte et Apollo
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '$apollo';
import { LOGIN, LOGOUT, SIGNUP, VERIFY_TOKEN } from '$apollo/User';
import { goto } from '$app/navigation';

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
        verifyToken: async (token: string, $t: App.TranslationFunction) => {
            try {
                const { data } = await client.query({
                    query: VERIFY_TOKEN,
                    variables: { token }
                });
        
                goto('/');
                notificationStore.addNotification($t('validation.emailVerified'), 'success');                
            } catch (error) {
                // Il est important de gérer les erreurs correctement
                console.error("Error verifying token:", JSON.stringify(error, null, 2));
                notificationStore.addNotification($t('validation.emailVerificationFailed'), 'error');
            }
        }
    };
}

// Exportation du store d'authentification
export const authStore = createAuthStore();