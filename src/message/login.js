import notificationStore from '$stores/notificationStore';

export const loginValidation = (error, $t) => {
	let errorMessage;
	switch (error.message) {
		case 'INVALID_CREDENTIALS':
			errorMessage = $t('validation.INVALID_CREDENTIALS');
			break;
		case 'RATE_LIMIT':
			errorMessage = $t('validation.RATE_LIMIT');
			break;
		case 'EMAIL_NOT_VERIFIED':
			errorMessage = $t('validation.EMAIL_NOT_VERIFIED');
			break;
		default:
			errorMessage = "Une erreur inconnue s'est produite.";
	}
	notificationStore.addNotification(errorMessage, 'error');
};
