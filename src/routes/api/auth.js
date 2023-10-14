import { apiCall } from '$api/utils/apiCall'; // Assure-toi que le chemin est correct

import { BD } from '$lib/constants';
import { handleRoleRedirection } from '$utils/auth/handleRoleRedirection.js';

import { authStore } from '$stores/authStore';

import notificationStore from '$stores/notificationStore';
import { loginValidation } from '$message/login.js';
import { signupValidation } from '$message/signup.js';
import { EmailresetPasswordValidation } from '$message/EmailresetPasswordValidation.js';

import { goto } from '$app/navigation';
import { logout } from '$lib/logout.js';

let currentState;

authStore.subscribe((state) => {
	currentState = state;
});

export async function checkAuth() {
	try {
		const res = await fetch(`${BD}/auth/check-auth`, {
			credentials: 'include'
		});
		console.log(res);
		if (res.ok) {
			const data = await res.json();
			console.log(data);
			authStore.update((state) => ({
				...state,
				isAuthenticated: data.isAuthenticated,
				role: data.role,
				userId: data.userId
			}));
		}
	} catch (error) {
		console.error("Erreur lors de la vérification de l'authentification:", error);
	}
}

export async function login(email, password, $t) {
	try {
		const data = await apiCall({
			url: `${BD}/auth/login`,
			method: 'POST',
			credentials: 'include',
			body: { email, password }
		});

		authStore.set({
			role: data.role,
			isAuthenticated: true,
			userId: data.userId
		});

		const { role, isAuthenticated } = currentState;

		handleRoleRedirection(role, isAuthenticated);

		notificationStore.addNotification($t('validation.SUCCESS_LOGIN'), 'success');
	} catch (error) {
		console.log('Error caught:', error);
		loginValidation(error, $t);
		throw error;
	}
}

export async function signup(username, email, password, $t) {
	try {
		const response = await apiCall({
			url: `${BD}/auth/signup`,
			method: 'POST',
			credentials: 'include',
			body: { username, email, password }
		});

		if (response.success) {
			goto('/');
			notificationStore.addNotification($t('validation.SUCCESS_INSCRIPTION'), 'success');
		}
	} catch (error) {
		console.log('error received: ', error);
		signupValidation(error, $t);
		throw error;
	}
}

export async function verifyToken(token, $t) {
	try {
		const response = await fetch(`${BD}/auth/verify/${token}`);
		console.log(response);
		if (response.ok) {
			goto('/');
			notificationStore.addNotification($t('validation.EMAIL_VERIFIED'), 'success');
		}
	} catch (error) {
		console.log('Erreur lors de la vérification :', error);
	}
}

export async function sendEmailResetPassword(email, $t) {
	try {
		const data = await apiCall({
			url: `${BD}/auth/forgot-password`,
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

export async function ResetForgotNewPassword(token, newPassword, $t) {
	try {
		const response = await fetch(`${BD}/auth/forgot-password/${token}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ newPassword })
		});

		if (response.ok) {
			goto('/');
			notificationStore.addNotification($t('validation.VALIDATION_FORGOT_PASSWORD'), 'success');
		}
	} catch (error) {
		notificationStore.addNotification(error, 'error');
		throw error;
	}
}

export async function getDashboardData() {
	// Ajoute le token en paramètre
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${BD}/auth/user`,
			method: 'GET',
			headers: headers,
			credentials: 'include'
		});
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export const updateUserInfo = async (userInfo, $t) => {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${BD}/auth/user/update`,
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
		console.error("Erreur lors de la mise à jour des informations de l'utilisateur :", error);
		throw error;
	}
};

export async function getAllUsers() {
	try {
		const data = await apiCall({
			url: `${BD}/auth/admin/users`,
			method: 'GET',
			headers,
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

export async function updateUser(userId, updateData) {
	try {
		const data = await apiCall({
			url: `${BD}/auth/admin/user/${userId}`,
			method: 'PUT',
			headers,
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
