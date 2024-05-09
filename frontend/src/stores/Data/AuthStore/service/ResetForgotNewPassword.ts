import client from "$apollo";
import { RESETFORGOTNEWPASSWORD } from "$apollo/Auth/resetForgotNewPassword";
import { goto } from "$app/navigation";
import notificationStore from "$stores/UX/notificationStore";

export async function ResetForgotNewPassword(	
    token: string,
    newPassword: string,
    confirmPassword: string,
    $t: App.TranslationFunction) {   
    try {     
        const { data } = await client.mutate({
            mutation: RESETFORGOTNEWPASSWORD,
            variables: { token, newPassword, confirmPassword}
        });
        console.log(data);
        
        notificationStore.addNotification($t('data.successSendResetPassword'), 'success');
        goto('/');
    } catch (error) {
        console.error('Error checking authentication:', error);
    }
}
