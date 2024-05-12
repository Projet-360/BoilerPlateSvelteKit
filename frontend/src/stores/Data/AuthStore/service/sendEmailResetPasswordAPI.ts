import client from "$apollo";
import { sendEmailResetPasswordGQL } from "$apollo/Auth/sendEmailResetPasswordGQL";
import { goto } from "$app/navigation";
import notificationStore from "$stores/UX/notificationStore";

async function sendEmailResetPasswordAPI(email: string, $t: TS.TranslationFunction) {   
    try {     
        const { data } = await client.mutate({
            mutation: sendEmailResetPasswordGQL,
            variables: { email}
        });        
        notificationStore.addNotification($t('data.successSendEmailResetPassword'), 'success');
        goto('/');
    } catch (error) {
        console.error('Error checking authentication:', error);
    }
}

export default sendEmailResetPasswordAPI