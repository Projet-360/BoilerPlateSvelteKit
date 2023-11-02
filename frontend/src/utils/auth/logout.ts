import { goto } from '$app/navigation';
import { authStore } from '$stores/authStore';
import notificationStore from '$stores/notificationStore.js';
import { t } from '$UITools/Translations/index';
import type { TranslationFunction } from '../../typescript';

export async function logout($t: TranslationFunction) {
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
