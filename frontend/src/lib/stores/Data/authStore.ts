// Importation des modules nécessaires de Svelte et Apollo
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '$apollo';
import { LOGIN, LOGOUT, SIGNUP, VERIFY_TOKEN } from '$apollo/User';
import { goto } from '$app/navigation';

import notificationStore from '../UX/notificationStore';
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

    let currentState = {
        userId: null,
        role: null,
        isAuthenticated: false,
        currentSessionId: undefined,
        sessions: []
    };


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
        },
        login: async (email: string, password: string, $t: App.TranslationFunction) => {
            try {
                const { data } = await client.mutate({
                    mutation: LOGIN,
                    variables: { email, password }
                });
                if (data.login.success) {
                    set({
                        userId: data.login.userId,
                        role: data.login.role,
                        isAuthenticated: true,
                        currentSessionId: data.login.sessionId,
                        sessions: [...currentState.sessions, data.login.sessionId] // assuming session tracking
                    });
                    goto('/');
                    notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
                } else {
                    notificationStore.addNotification($t('validation.FAIL_LOGIN'), 'error');
                }
            } catch (error) {
                console.error("Error during login:", JSON.stringify(error, null, 2));
                messageNotification(error, $t);
            }
        },
    };
}

// Exportation du store d'authentification
export const authStore = createAuthStore();