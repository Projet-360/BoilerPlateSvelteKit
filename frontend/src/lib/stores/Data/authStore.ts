// Importations
import { writable} from 'svelte/store';
import type { Writable } from 'svelte/store';
import client from '$apollo';
import { CHECK_AUTH_STATUS, LOGIN, LOGOUT, SIGNUP, VERIFY_TOKEN } from '$apollo/User';
import { goto } from '$app/navigation';
import notificationStore from '../UX/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

// Initialisation du store
function createAuthStore() {
    const { subscribe, set, update } = writable<App.IAuthStore>({
        userId: null,
        role: null,
        isAuthenticated: false,
        currentSessionId: undefined,
        sessions: []
    });

    let currentState = {
        userId: null,
        role: null,
        isAuthenticated: false,
        currentSessionId: undefined,
        sessions: []
    };


    async function signup(username: string, email: string, password: string, $t: App.TranslationFunction) {
        try {
            const { data } = await client.mutate({
                mutation: SIGNUP,
                variables: { username, email, password }
            });
            notificationStore.addNotification($t('data.signupSuccess'), 'success');
        } catch (error) {
            handleErrors(error, $t, 'signup');
        }
    }

    async function verifyToken(token: string, $t: App.TranslationFunction) {
        try {
            const { data } = await client.query({
                query: VERIFY_TOKEN,
                variables: { token }
            });
            goto('/');
            notificationStore.addNotification($t('validation.emailVerified'), 'success');                
        } catch (error) {
            handleErrors(error, $t, 'verifyToken');
            notificationStore.addNotification($t('validation.emailVerificationFailed'), 'error');
        }
    }

    async function login(email: string, password: string, $t: App.TranslationFunction) {
        try {
            const { data } = await client.mutate({
                mutation: LOGIN,
                variables: { email, password }
            });
            
            if (data.login && data.login.userId && data.login.role && data.login.sessionId) {
                set({   
                    userId: data.login.userId,
                    role: data.login.role,
                    isAuthenticated: true,
                    currentSessionId: data.login.sessionId,
                    sessions: [...currentState.sessions, data.login.sessionId]
                });
                goto('/');
                notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
            } else {
                notificationStore.addNotification($t('validation.FAIL_LOGIN'), 'error');
            }
        } catch (error) {
            handleErrors(error, $t, 'login');
        }
    }

    async function logout($t: App.TranslationFunction) {
        try {
            const { data } = await client.mutate({
                mutation: LOGOUT
            });

            if (data.logout.success) {
                set({
                    userId: null,
                    role: null,
                    isAuthenticated: false,
                    currentSessionId: undefined,
                    sessions: []
                });
                notificationStore.addNotification($t('logout.successLogout'), 'success');
                goto('/');
            } else {
                notificationStore.addNotification(data.logout.message, 'error');
            }
        } catch (error) {
            console.error("Error during logout:", JSON.stringify(error, null, 2));
            notificationStore.addNotification($t('logout.failedLogout'), 'error');
        }
    }

    async function checkAuth() {
        try {
            const { data } = await client.query({
                query: CHECK_AUTH_STATUS,
                fetchPolicy: 'network-only'  // Assurez-vous que cela ne vient pas du cache
            });

            console.log('data', data);
            
            
            if (data && data.checkAuth) {
                update(state => ({
                    ...state,
                    userId: data.checkAuth.userId,
                    role: data.checkAuth.role,
                    isAuthenticated:  data.checkAuth.isAuthenticated,
                }));
            }
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
    }

    const handleErrors = (error: any, $t: App.TranslationFunction, context: string) => {
        console.error(`Error during ${context}:`, JSON.stringify(error, null, 2));
        messageNotification(error, $t);
    };

    return {
        subscribe,
        signup,
        verifyToken,
        login,
        logout,
        checkAuth
    };
}

// Exportation du store
export const authStore = createAuthStore();
