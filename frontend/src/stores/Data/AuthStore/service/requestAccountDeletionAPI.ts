import client from "$apollo";
import { requestAccountDeletionGQL } from "$apollo/Auth/requestAccountDeletionGQL";
import { messageNotification } from "$apollo/modelNotifications/messageNotification";
import notificationStore from "$stores/UX/notificationStore";

async function requestAccountDeletionAPI(id: string, $t: App.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: requestAccountDeletionGQL,
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

export default requestAccountDeletionAPI