import client from "$apollo";
import { resetForgotNewPasswordGQL } from "$apollo/Auth/resetForgotNewPasswordGQL";
import { goto } from "$app/navigation";
import notificationStore from "$stores/UX/notificationStore";

async function ResetForgotNewPasswordAPI(	
    token: string,
    newPassword: string,
    confirmPassword: string,
    $t: TS.TranslationFunction) {   
    try {     
        const { data } = await client.mutate({
            mutation: resetForgotNewPasswordGQL,
            variables: { token, newPassword, confirmPassword}
        });
        console.log(data);
        
        notificationStore.addNotification($t('data.successSendResetPassword'), 'success');
        goto('/');
    } catch (error) {
        console.error('Error checking authentication:', error);
    }
}

export default ResetForgotNewPasswordAPI