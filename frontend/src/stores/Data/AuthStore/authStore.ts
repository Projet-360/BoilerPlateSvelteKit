// Importations
import { writable} from 'svelte/store';
import client from '$apollo';
import { CHECKAUTH, LOGIN, LOGOUT, RESET_FORGOT_NEW_PASSWORD, SEND_EMAIL_RESET_PASSWORD, SIGNUP, VERIFY_TOKEN } from '$apollo/AuthGQL'; 

import { goto } from '$app/navigation';
import notificationStore from '../../UX/notificationStore';
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
    
    async function checkAuth() {
        try {
            const { data } = await client.query({
                query: CHECKAUTH,
                fetchPolicy: 'network-only'  // Assurez-vous que cela ne vient pas du cache
            });
            
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

                set({
                    userId: null,
                    role: null,
                    isAuthenticated: false,
                    currentSessionId: undefined,
                    sessions: []
                });
                notificationStore.addNotification($t('logout.successLogout'), 'success');
                goto('/');
        } catch (error) {
            console.error("Error during logout:", JSON.stringify(error, null, 2));
            notificationStore.addNotification($t('logout.failedLogout'), 'error');
        }
    }    

    async function verifyToken(token: string, $t: App.TranslationFunction) {
        try {
            const { data } = await client.query({
                query: VERIFY_TOKEN,
                variables: { token }
            });
            goto('/');
            notificationStore.addNotification($t('data.emailTokenVerifiedSuccess'), 'success');                
        } catch (error) {
            handleErrors(error, $t, 'verifyToken');
            notificationStore.addNotification($t('data.emailTokenVerifiedFailed'), 'error');
        }
    }


    async function sendEmailResetPassword(email: string, $t: App.TranslationFunction) {   
        try {     
            const { data } = await client.mutate({
                mutation: SEND_EMAIL_RESET_PASSWORD,
                variables: { email}
            });
            console.log(data);
            
            notificationStore.addNotification($t('data.successSendEmailResetPassword'), 'success');
            goto('/');
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
    }

    async function ResetForgotNewPassword(	
        token: string,
        newPassword: string,
        confirmPassword: string,
        $t: App.TranslationFunction) {   
        try {     
            const { data } = await client.mutate({
                mutation: RESET_FORGOT_NEW_PASSWORD,
                variables: { token, newPassword, confirmPassword}
            });
            console.log(data);
            
            notificationStore.addNotification($t('data.successSendResetPassword'), 'success');
            goto('/');
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
        checkAuth,
        sendEmailResetPassword,
        ResetForgotNewPassword
    };
}

// Exportation du store
export const authStore = createAuthStore();
