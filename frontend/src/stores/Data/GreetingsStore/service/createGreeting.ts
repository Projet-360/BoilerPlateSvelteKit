// createGreeting.ts
import client from '$apollo';
import { CREATE_GREETING } from '$apollo/Greetings';
import notificationStore from '$stores/UX/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

export async function createGreeting(name: string, message: string, $t: App.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: CREATE_GREETING,
            variables: { name, message }
        });
        
        notificationStore.addNotification($t('data.greetingsSuccessSent'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        messageNotification(error, $t);
        throw error;
    }
}
