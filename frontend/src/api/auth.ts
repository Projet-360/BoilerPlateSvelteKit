import { apiCall } from '$api/utils/apiCall';

import { handleRoleRedirection } from '$utils/auth/handleRoleRedirection.js';

import { authStore } from '$stores/authStore';

import notificationStore from '$stores/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

import { goto } from '$app/navigation';
import { logout } from '$utils/auth/logout.js';

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

export async function verifyToken(token: string, $t: App.TranslationFunction) {
	try {
		const response = await fetch(`${import.meta.env.VITE_URL_BACK}/auth/verify/${token}`);
		if (response.ok) {
			goto('/');
			notificationStore.addNotification($t('validation.EMAIL_VERIFIED'), 'success');
		}
	} catch (error) {}
}

export async function sendEmailResetPassword(email: string, $t: App.TranslationFunction) {
	try {
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/forgot-password`,
			method: 'POST',
			credentials: 'include',
			body: { email }
		});

		if (data.success) {
			goto('/');
			notificationStore.addNotification($t('validation.EMAIL_FORGOT_PASSWORD'), 'success');
		}
	} catch (error) {
		messageNotification(error, $t);
		throw error;
	}
}

export async function ResetForgotNewPassword(
	token: string,
	newPassword: string,
	confirmPassword: string,
	$t: App.TranslationFunction
) {
	try {
		const response = await fetch(`${import.meta.env.VITE_URL_BACK}/auth/forgot-password/${token}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ newPassword, confirmPassword })
		});

		if (response.ok) {
			goto('/');
			notificationStore.addNotification($t('validation.VALIDATION_FORGOT_PASSWORD'), 'success');
		} else {
			const data = await response.json();
			notificationStore.addNotification($t('validation.FORGOT_PASSWORD_INVALID'), 'error');
		}
	} catch (error: any) {
		console.log('Caught error:', error);
		notificationStore.addNotification(error.message, 'error');
	}
}

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

export async function getUserSessions() {
	return apiCall({
		url: `${import.meta.env.VITE_URL_BACK}/auth/sessions`,
		credentials: 'include',
		handleSuccess: (data) => console.log('Sessions récupérées avec succès :', data),
		handleError: (error) => console.error('Erreur lors de la récupération des sessions :', error)
	});
}

export async function closeUserSession(sessionId: string) {
	return apiCall({
		url: `${import.meta.env.VITE_URL_BACK}/auth/sessions/${sessionId}`,
		method: 'DELETE',
		credentials: 'include',
		handleSuccess: (data) => console.log('Session fermée avec succès :', data),
		handleError: (error) => console.error('Erreur lors de la fermeture de la session :', error)
	});
}

export async function getAllUsers() {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/admin/users`,
			method: 'GET',
			headers: headers,
			credentials: 'include'
		});

		if (data.users) {
			return data.users;
		} else {
			throw new Error('Erreur lors de la récupération des utilisateurs');
		}
	} catch (error) {
		throw error;
	}
}

export async function updateUser(
	userId: string,
	updateData: App.User,
	$t: App.TranslationFunction
) {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/admin/user/${userId}`,
			method: 'PUT',
			headers: headers,
			credentials: 'include',
			body: updateData
		});

		if (data.success) {
			return { success: true, user: data.updatedUser, notification: data.notification };
		} else {
			throw new Error("Erreur lors de la mise à jour de l'utilisateur");
		}
	} catch (error: any) {
		messageNotification(error, $t);
		return { success: false, user: null, notification: 'Une erreur est survenue' };
	}
}
