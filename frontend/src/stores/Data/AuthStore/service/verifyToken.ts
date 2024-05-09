import client from "$apollo";
import { VERIFYTOKEN } from "$apollo/Auth/verifyToken";
import { goto } from "$app/navigation";
import notificationStore from "$stores/UX/notificationStore";
import { handleErrors } from "./handleErrors";

export async function verifyToken(token: string, $t: App.TranslationFunction) {
    try {
        const { data } = await client.query({
            query: VERIFYTOKEN,
            variables: { token }
        });
        goto('/');
        notificationStore.addNotification($t('data.emailTokenVerifiedSuccess'), 'success');                
    } catch (error) {
        handleErrors(error, $t, 'verifyToken');
        notificationStore.addNotification($t('data.emailTokenVerifiedFailed'), 'error');
    }
}
