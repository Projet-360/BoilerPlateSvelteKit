// deleteGreeting.ts
import client from '$apollo';
import { DELETE_GREETING } from '$apollo/Greetings';
import notificationStore from '$stores/UX/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

export async function deleteGreeting(greeting: App.Greeting, $t: App.TranslationFunction) {
    try {
        const id = greeting.id || greeting._id;
        await client.mutate({
            mutation: DELETE_GREETING,
            variables: { id }
        });

        notificationStore.addNotification($t('data.greetingsSuccessDeleted'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        messageNotification(error, $t);
        throw error;
    }
}
