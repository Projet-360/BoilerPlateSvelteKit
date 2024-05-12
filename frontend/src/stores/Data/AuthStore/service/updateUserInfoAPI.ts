import client from "$apollo";
import updateUserInfoGQL from "$apollo/Auth/updateUserInfoGQL";
import { messageNotification } from "$lib/utils/messageNotification";
import notificationStore from "$stores/UX/notificationStore";
import { authStore } from "../authStore";

async function updateUserInfoAPI(userInfo: App.UserInfo, $t: App.TranslationFunction) {
    try {
        const { data } = await client.mutate({
            mutation: updateUserInfoGQL,
            variables: { userInfo }
        });
        console.log(data);

        if (data.success) {
            notificationStore.addNotification($t('data.UPDATE_SUCCESS'), 'success');

            if (data.notification) {
                notificationStore.addNotification(data.notification, 'success');
                authStore.logoutAPI($t);
            }
            return data;
        } else {
            throw new Error($t('data.UPDATE_FAILURE'));
        }
    } catch (error) {
        messageNotification(error, $t);
        throw error;
    }
};

export default updateUserInfoAPI