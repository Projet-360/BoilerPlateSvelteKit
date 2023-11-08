import { apiCall } from '$api/utils/apiCall';

import notificationStore from '$stores/notificationStore';

import { messageNotification } from '$modelNotifications/messageNotification';
import { logout } from '$utils/auth/logout.js';

export async function getDashboardData() {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/user`,
			method: 'GET',
			headers: headers,
			credentials: 'include'
		});
		return data;
	} catch (error) {
		throw error;
	}
}

export async function requestAccountDeletion(id: string, $t: App.TranslationFunction) {
	try {
		const response = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/user/request-delete`,
			method: 'POST',
			credentials: 'include',
			body: { id }
		});

		if (response.success) {
			notificationStore.addNotification($t('validation.DELETE_ACCOUNT_EMAIL_SENT'), 'success');
		}
	} catch (error) {
		messageNotification(error, $t);
		throw error;
	}
}

export const updateUserInfo = async (userInfo: App.UserInfo, $t: App.TranslationFunction) => {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/user/update`,
			method: 'PUT',
			headers: headers,
			credentials: 'include',
			body: userInfo
		});

		if (data.success) {
			notificationStore.addNotification($t('validation.UPDATE_SUCCESS'), 'success');

			if (data.notification) {
				notificationStore.addNotification(data.notification, 'success');
				logout($t);
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

export async function confirmAccountDeletion(token: string) {
	try {
		const headers = new Headers();
		const response = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/confirm-delete/${token}`,
			method: 'POST',
			headers
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		try {
			const data = await response.json();
			return data;
		} catch (e) {
			console.error("La réponse n'est pas en JSON :", e);
			throw new Error("La réponse du serveur n'est pas au format JSON.");
		}
	} catch (error) {
		console.error('Erreur lors de la confirmation de suppression du compte :', error);
		throw error;
	}
}
