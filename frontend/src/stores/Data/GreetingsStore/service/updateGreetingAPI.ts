// updateGreeting.ts
import client from '$apollo';
import { updateGreetingGQL } from '$apollo/Greetings/updateGreetingGQL';
import notificationStore from '$stores/UX/notificationStore';
import { messageNotification } from '$lib/utils/messageNotification';

async function updateGreetingAPI(id: string, name: string, message: string, $t: TS.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: updateGreetingGQL,
            variables: { id, name, message }
        });

        notificationStore.addNotification($t('data.greetingsSuccessUpdated'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        messageNotification(error, $t);
        throw error;
    }
}

export default updateGreetingAPI