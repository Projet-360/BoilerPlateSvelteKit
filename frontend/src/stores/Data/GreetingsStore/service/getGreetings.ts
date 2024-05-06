// getGreetings.ts
import client from '$apollo';
import { GET_GREETINGS } from '$apollo/Greetings';
import notificationStore from '$stores/UX/notificationStore';

export async function getGreetings($t: App.TranslationFunction, set: Function) {
    try {
        const { data } = await client.query({ query: GET_GREETINGS, fetchPolicy: 'network-only' });

        set(data.getGreetings.map((greeting: App.Greeting) => ({
            ...greeting,
        })));

        notificationStore.addNotification($t('data.greetingsSuccessGet'), 'success');
    } catch (error) {
        console.error("Error greeting:", JSON.stringify(error, null, 2));
        notificationStore.addNotification($t('data.greetingsFailedGet'), 'error');
        throw error;
    }
}
