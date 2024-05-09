// deleteGreeting.ts
import client from '$apollo';
import { deleteGreetingGQL } from '$apollo/Greetings/deleteGreetingGQL';
import notificationStore from '$stores/UX/notificationStore';
import { messageNotification } from '$apollo/modelNotifications/messageNotification';

async function deleteGreetingAPI(greeting: App.Greeting, $t: App.TranslationFunction) {
    try {
        const id = greeting.id || greeting._id;
        await client.mutate({
            mutation: deleteGreetingGQL,
            variables: { id }
        });

        notificationStore.addNotification($t('data.greetingsSuccessDeleted'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        messageNotification(error, $t);
        throw error;
    }
}

export default deleteGreetingAPI