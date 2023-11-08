import { apiCall } from '$api/utils/apiCall';

import { handleRoleRedirection } from '$api/utils/handleRoleRedirection';

import { authStore } from '$stores/authStore';

import notificationStore from '$stores/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

let currentState: App.IAuthStore;

authStore.subscribe((state) => {
	currentState = state;
});

export async function login(email: string, password: string, $t: App.TranslationFunction) {
	try {
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/login`,
			method: 'POST',
			credentials: 'include',
			body: { email, password }
		});

		console.log(data);

		authStore.set({
			role: data.role,
			isAuthenticated: true,
			userId: data.userId,
			sessionId: data.sessionId
		});

		const { role, isAuthenticated } = currentState;

		handleRoleRedirection(role ?? 'defaultRole', isAuthenticated);

		notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
	} catch (error) {
		messageNotification(error, $t);
		throw error;
	}
}
