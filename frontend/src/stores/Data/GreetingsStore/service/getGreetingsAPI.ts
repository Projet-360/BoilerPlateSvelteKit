import client from '$apollo';
import { getGreetingsGQL } from '$apollo/Greetings/getGreetingsGQL';
import notificationStore from '$stores/UX/notificationStore';

async function getGreetingsAPI($t: App.TranslationFunction, set: Function) {
    try {
        const { data } = await client.query({ query: getGreetingsGQL, fetchPolicy: 'network-only' });

        set(data.getGreetingsGQL.map((greeting: App.Greeting) => ({
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