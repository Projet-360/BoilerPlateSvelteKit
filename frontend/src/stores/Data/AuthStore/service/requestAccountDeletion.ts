import client from "$apollo";
import { REQUEST_ACCOUNT_DELETION } from "$apollo/AuthGQL";
import { messageNotification } from "$modelNotifications/messageNotification";
import notificationStore from "$stores/UX/notificationStore";

export async function requestAccountDeletion(id: string, $t: App.TranslationFunction) {
    try {
        const headers = new Headers();
        const { data } = await client.mutate({
            mutation: REQUEST_ACCOUNT_DELETION,
            variables: { id }
        });
        console.log(data);

        if (data.success) {
            notificationStore.addNotification($t('validation.DELETE_ACCOUNT_EMAIL_SENT'), 'success');
        }
    } catch (error) {
        messageNotification(error, $t);
        throw error;
    }
}