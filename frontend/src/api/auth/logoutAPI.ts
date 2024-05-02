import { goto } from '$app/navigation';
import { authStore } from '$stores/Data/authStore';
import notificationStore from '$lib/stores/UX/notificationStore.js';
import { t } from '$UITools/Translations/index';

export async function logout($t: App.TranslationFunction) {
	try {
		const res = await fetch(`${import.meta.env.VITE_URL_BACK}/auth/logout`, {
			method: 'GET',
			credentials: 'include'
		});

		if (res.ok) {
			notificationStore.addNotification($t('logout.successLogout'), 'success');
			authStore.set({ userId: null, role: null, isAuthenticated: false });
			goto('/');
		}
	} catch (error) {}
}
