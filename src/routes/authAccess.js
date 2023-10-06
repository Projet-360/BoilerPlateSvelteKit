import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import notificationStore from '$stores/notificationStore';
import { t } from '$UITools/Translations/index';

export function checkUserAccessAndRedirect(data, isAuthenticated, notificationShown) {
	if (notificationShown) {
		return { notificationShown };
	}

	const isUserPage = data.route === '/user';

	if (isUserPage && !isAuthenticated && browser) {
		goto('/login');
		notificationStore.addNotification(t('validation.ACCESS_DENIED'), 'error');
		notificationShown = true;
	}

	return { notificationShown };
}
