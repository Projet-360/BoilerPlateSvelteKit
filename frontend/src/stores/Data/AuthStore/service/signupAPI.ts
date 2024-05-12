import client from "$apollo";
import { signupGQL } from "$apollo/Auth/signupGQL";
import notificationStore from "$stores/UX/notificationStore";
import handleErrors from "./handleErrors";

async function signupAPI(username: string, email: string, password: string, $t: TS.TranslationFunction) {
    try {

        const { data } = await client.mutate({
            mutation: signupGQL,
            variables: { username, email, password }
        });
        notificationStore.addNotification($t('data.signupSuccess'), 'success');
    } catch (error) {
        handleErrors(error, $t, 'signup');
    }
}

export default signupAPI