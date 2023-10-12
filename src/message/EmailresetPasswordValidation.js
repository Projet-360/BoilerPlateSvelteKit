// src/routes/api/message/resetPassword.js
import notificationStore from '$stores/notificationStore';

export const EmailresetPasswordValidation = (error, $t) => {
	let errorMessage;
	switch (error.message) {
		case 'VALID_EMAIL':
			errorMessage = $t('validation.VALID_EMAIL');
			break;
		case 'USER_NOT_FOUND':
			errorMessage = $t('validation.USER_NOT_FOUND');
			break;
		case 'EMAIL_NOT_VERIFIED':
			errorMessage = $t('validation.EMAIL_NOT_VERIFIED');
			break;
		case 'RATE_LIMIT':
			errorMessage = $t('validation.RATE_LIMIT');
			break;
		default:
			errorMessage = "Une erreur inconnue s'est produite.";
	}
	notificationStore.addNotification(errorMessage, 'error');
};