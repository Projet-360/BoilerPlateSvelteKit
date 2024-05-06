// updateGreeting.ts
import client from '$apollo';
import { UPDATE_GREETING } from '$apollo/GreetingGQL';
import notificationStore from '$stores/UX/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

export async function updateGreeting(id: string, name: string, message: string, $t: App.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: UPDATE_GREETING,
            variables: { id, name, message }
        });

        notificationStore.addNotification($t('data.greetingsSuccessUpdated'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        messageNotification(error, $t);
        throw error;
    }
}
