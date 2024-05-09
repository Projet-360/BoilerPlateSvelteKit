import client from "$apollo";
import { logoutGQL } from "$apollo/Auth/logoutGQL";
import { goto } from "$app/navigation";
import notificationStore from "$stores/UX/notificationStore";
import { writable } from "svelte/store";


const { set } = writable<App.IAuthStore>();

async function logoutAPI($t: App.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: logoutGQL
        });

            set({
                userId: null,
                currentSessionId: undefined,
                role: null,
                isAuthenticated: false,
                sessions: [],
                userData: {
                    username: null,
                    email: null,
                },
            });
            notificationStore.addNotification($t('logout.successLogout'), 'success');
            goto('/');
    } catch (error) {
        console.error("Error during logout:", JSON.stringify(error, null, 2));
        notificationStore.addNotification($t('logout.failedLogout'), 'error');
    }
}

export default logoutAPI