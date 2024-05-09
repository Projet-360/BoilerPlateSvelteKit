import client from "$apollo";
import { UPDATEUSERINFO } from "$apollo/AuthGQL";
import { messageNotification } from "$modelNotifications/messageNotification";
import notificationStore from "$stores/UX/notificationStore";
import { authStore } from "../authStore";

export async function updateUserInfo(userInfo: App.UserInfo, $t: App.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: UPDATEUSERINFO,
            variables: { userInfo }
        });
        console.log(data);

        if (data.success) {
            notificationStore.addNotification($t('validation.UPDATE_SUCCESS'), 'success');

            if (data.notification) {
                notificationStore.addNotification(data.notification, 'success');
                authStore.logout($t);
            }
            return data;
        } else {
            throw new Error($t('validation.UPDATE_FAILURE'));
        }
    } catch (error) {
        messageNotification(error, $t);
        throw error;
    }
};
