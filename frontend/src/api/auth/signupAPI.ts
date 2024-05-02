import { apiCall } from '$api/utils/apiCall';
import notificationStore from '$lib/stores/UX/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

import { goto } from '$app/navigation';

export async function signup(
	username: string,
	email: string,
	password: string,
	$t: App.TranslationFunction
) {
	try {
		const response = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/signup`,
			method: 'POST',
			credentials: 'include',
			body: { username, email, password }
		});

		if (response.success) {
			goto('/');
			notificationStore.addNotification($t('validation.SUCCESS_INSCRIPTION'), 'success');
		}
	} catch (error) {
		messageNotification(error, $t);
		throw error;
	}
}
