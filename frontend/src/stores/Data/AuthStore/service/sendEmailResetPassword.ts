import client from "$apollo";
import { SENDEMAILRESETPASSWORD } from "$apollo/AuthGQL";
import { goto } from "$app/navigation";
import notificationStore from "$stores/UX/notificationStore";

export async function sendEmailResetPassword(email: string, $t: App.TranslationFunction) {   
    try {     
        const { data } = await client.mutate({
            mutation: SENDEMAILRESETPASSWORD,
            variables: { email}
        });
        console.log(data);
        
        notificationStore.addNotification($t('data.successSendEmailResetPassword'), 'success');
        goto('/');
    } catch (error) {
        console.error('Error checking authentication:', error);
    }
}