import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { authStore } from '$stores/authStore';
import notificationStore from '$stores/notificationStore.js';
import { t } from '$UITools/Translations/index';
import type { TranslationFunction } from '../../typescript';
import { PUBLIC_VERCEL_URL_BACK, PUBLIC_LOCAL_URL_BACK, PUBLIC_ENV } from '$env/static/public';

// Configure Database URL
let BD =
	PUBLIC_ENV === 'prod' ? (PUBLIC_VERCEL_URL_BACK as string) : (PUBLIC_LOCAL_URL_BACK as string);

export async function logout($t: TranslationFunction) {
	try {
		const res = await fetch(`${BD}/auth/logout`, {
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
