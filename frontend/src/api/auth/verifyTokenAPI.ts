import notificationStore from '$stores/notificationStore';
import { goto } from '$app/navigation';

export async function verifyToken(token: string, $t: App.TranslationFunction) {
	try {
		const response = await fetch(`${import.meta.env.VITE_URL_BACK}/auth/verifyToken/${token}`);
		if (response.ok) {
			goto('/');
			notificationStore.addNotification($t('validation.EMAIL_VERIFIED'), 'success');
		}
	} catch (error) {}
}
