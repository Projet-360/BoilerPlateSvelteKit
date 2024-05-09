import { handleRoleRedirection } from "$api/utils/handleRoleRedirection";
import client from "$apollo";
import { LOGIN } from "$apollo/AuthGQL";
import { collectFingerprint } from "$lib/js/fingerPrint";
import notificationStore from "$stores/UX/notificationStore";
import { handleErrors } from "./handleErrors";
import { authStore } from "../authStore";

export async function login(email: string, password: string, $t: App.TranslationFunction) {
    try {
        const fingerPrint = await collectFingerprint()
        
        const { data } = await client.mutate({
            mutation: LOGIN,
            variables: { email, password , fingerPrint }
        });
        
        if (data.login && data.login.userId && data.login.role && data.login.sessionId) {
            authStore.set({   
                userId: data.login.userId,
                currentSessionId: data.login.sessionId,
                role: data.login.role,
                isAuthenticated: true,
                userData: {
                    username: data.login.userData.username,
                    email: data.login.userData.email,
                }
            });
            notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
            handleRoleRedirection(data.login.role)
        } else {
            notificationStore.addNotification($t('validation.FAIL_LOGIN'), 'error');
        }
    } catch (error) {
        handleErrors(error, $t, 'login');
    }
}
