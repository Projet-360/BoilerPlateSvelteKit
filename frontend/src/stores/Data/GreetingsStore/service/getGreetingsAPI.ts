import client from '$apollo';
import { getGreetingsGQL } from '$apollo/Greetings/getGreetingsGQL';
import notificationStore from '$stores/UX/notificationStore';

async function getGreetingsAPI($t: TS.TranslationFunction, set: Function) {
    try {
        const { data } = await client.query({ query: getGreetingsGQL, fetchPolicy: 'network-only' });

        set(data.getGreetings.map((greeting: TS.Greeting) => ({
            ...greeting,
        })));
        
        notificationStore.addNotification($t('data.greetingsSuccessGet'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        notificationStore.addNotification($t('data.greetingsFailedGet'), 'error');
        throw error;
    }
}

export default getGreetingsAPI