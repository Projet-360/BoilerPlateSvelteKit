import { apiCall } from '$api/utils/apiCall';
import notificationStore from '$stores/notificationStore';
import { messageNotification } from '$modelNotifications/messageNotification';

import { goto } from '$app/navigation';

export async function sendEmailResetPassword(email: string, $t: App.TranslationFunction) {
	try {
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/sendEmailResetPassword`,
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
		const response = await fetch(
			`${import.meta.env.VITE_URL_BACK}/auth/ResetForgotNewPassword/${token}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ newPassword, confirmPassword })
			}
		);

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
