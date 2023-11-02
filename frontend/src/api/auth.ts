import { apiCall } from '$api/utils/apiCall';

import { handleRoleRedirection } from '$utils/auth/handleRoleRedirection.js';

import { authStore } from '$stores/authStore';

import notificationStore from '$stores/notificationStore';
import { loginValidation } from '$utils/message/login.js';
import { signupValidation } from '$utils/message/signup.js';
import { EmailresetPasswordValidation } from '$utils/message/EmailresetPasswordValidation.js';

import { goto } from '$app/navigation';
import { logout } from '$utils/auth/logout.js';

import type { IAuthStore } from '../typescript';
import type { UserInfo } from '../typescript';
import type { User } from '../typescript';
import type { TranslationFunction } from '../typescript';

let currentState: IAuthStore;

authStore.subscribe((state) => {
	currentState = state;
});

export async function checkAuth() {
	try {
		const res = await fetch(`${import.meta.env.VITE_URL_BACK}/auth/check-auth`, {
			credentials: 'include'
		});
		if (res.ok) {
			const data = await res.json();
			authStore.update((state) => ({
				...state,
				isAuthenticated: data.isAuthenticated,
				role: data.role,
				userId: data.userId
			}));
		}
	} catch (error) {}
}

export async function login(email: string, password: string, $t: TranslationFunction) {
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
			userId: data.userId
		});

		const { role, isAuthenticated } = currentState;

		handleRoleRedirection(role ?? 'defaultRole', isAuthenticated);

		notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
	} catch (error) {
		loginValidation(error, $t);
		throw error;
	}
}

export async function signup(
	username: string,
	email: string,
	password: string,
	$t: TranslationFunction
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
		signupValidation(error, $t);
		throw error;
	}
}

export async function verifyToken(token: string, $t: TranslationFunction) {
	try {
		const response = await fetch(`${import.meta.env.VITE_URL_BACK}/auth/verify/${token}`);
		if (response.ok) {
			goto('/');
			notificationStore.addNotification($t('validation.EMAIL_VERIFIED'), 'success');
		}
	} catch (error) {}
}

export async function sendEmailResetPassword(email: string, $t: TranslationFunction) {
	try {
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/forgot-password`,
			method: 'POST',
			credentials: 'include', // si nécessaire
			body: { email }
		});

		if (data.success) {
			goto('/');
			notificationStore.addNotification($t('validation.EMAIL_FORGOT_PASSWORD'), 'success');
		}
	} catch (error) {
		EmailresetPasswordValidation(error, $t);
		throw error;
	}
}

export async function ResetForgotNewPassword(
	token: string,
	newPassword: string,
	confirmPassword: string,
	$t: TranslationFunction
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
	// Ajoute le token en paramètre
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

export const updateUserInfo = async (userInfo: UserInfo, $t: TranslationFunction) => {
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
		throw error;
	}
};

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

export async function updateUser(userId: string, updateData: User) {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/admin/user/${userId}`,
			method: 'PUT',
			headers: headers,
			body: updateData
		});

		if (data.success) {
			return { success: true, user: data.updatedUser, notification: data.notification };
		} else {
			throw new Error("Erreur lors de la mise à jour de l'utilisateur");
		}
	} catch (error) {
		throw error;
	}
}
