import client from "$apollo";
import { SIGNUP } from "$apollo/AuthGQL";
import notificationStore from "$stores/UX/notificationStore";
import { handleErrors } from "./handleErrors";

export async function signup(username: string, email: string, password: string, $t: App.TranslationFunction) {
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