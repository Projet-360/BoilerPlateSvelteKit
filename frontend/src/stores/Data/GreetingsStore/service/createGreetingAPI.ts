import client from '$apollo';
import { createGreetingGQL } from '$apollo/Greetings/createGreetingGQL';
import notificationStore from '$stores/UX/notificationStore';
import { messageNotification } from '$lib/utils/messageNotification';

async function createGreetingAPI(name: string, message: string, $t: TS.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: createGreetingGQL,
            variables: { name, message }
        });
        
        notificationStore.addNotification($t('data.greetingsSuccessSent'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        messageNotification(error, $t);
        throw error;
    }
}

export default createGreetingAPI