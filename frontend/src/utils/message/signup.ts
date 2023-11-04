import notificationStore from '$stores/notificationStore';
type TranslationFunction = (key: string, options?: any) => string;

export const signupValidation = (error: any, $t: App.TranslationFunction) => {
	let errorMessages: any = [];

	// Gérer le format de l'erreur
	if (typeof error === 'string') {
		errorMessages = error.split(',');
	} else if (error && error.message) {
		errorMessages = error.message.split(',');
	} else {
		errorMessages = ["Une erreur inconnue s'est produite."];
	}

	// Itération sur chaque message d'erreur
	errorMessages.forEach((errorMsg: string) => {
		let errorMessage;
		switch (errorMsg.trim()) {
			case 'EMAIL_EXIST':
				errorMessage = $t('validation.EMAIL_EXIST');
				break;
			case 'USERNAME_REQUIRED':
				errorMessage = $t('validation.USERNAME_REQUIRED');
				break;
			case 'VALID_EMAIL':
				errorMessage = $t('validation.VALID_EMAIL');
				break;
			case 'VALID_USERNAME':
				errorMessage = $t('validation.VALID_USERNAME');
				break;
			case 'NUMBE_CARAC_PASSWORD':
				errorMessage = $t('validation.NUMBE_CARAC_PASSWORD');
				break;
			case 'MIN_PASSWORD':
				errorMessage = $t('validation.MIN_PASSWORD');
				break;
			case 'MAJ_PASSWORD':
				errorMessage = $t('validation.MAJ_PASSWORD');
				break;
			case 'NUMBER_PASSWORD':
				errorMessage = $t('validation.NUMBER_PASSWORD');
				break;
			case 'SPECIAL_CARAC_PASSWORD':
				errorMessage = $t('validation.SPECIAL_CARAC_PASSWORD');
				break;
			case 'RATE_LIMIT':
				errorMessage = $t('validation.RATE_LIMIT');
				break;
			default:
				errorMessage = "Une erreur inconnue s'est produite.";
		}
		// Ajout de la notification d'erreur
		notificationStore.addNotification(errorMessage, 'error');
	});
};
