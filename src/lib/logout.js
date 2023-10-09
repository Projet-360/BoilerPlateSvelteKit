import { goto } from '$app/navigation';
import { authStore } from '$stores/authStore';
import notificationStore from '$stores/notificationStore.js';
import { BD } from '$lib/constants';
import { t } from '$UITools/Translations/index';

export async function logout($t) {
	try {
		const res = await fetch(`${BD}/auth/logout`, {
			method: 'GET',
			credentials: 'include'
		});

		if (res.ok) {
			notificationStore.addNotification($t('logout.successLogout'), 'success');
			authStore.set({ token: null, userId: null, isAuthenticated: false });
			goto('/');
		}
	} catch (error) {
		console.error('Erreur lors de la déconnexion:', error);
	}
}
