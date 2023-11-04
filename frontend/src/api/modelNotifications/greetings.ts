import notificationStore from '$stores/notificationStore';

export const greetingsValidation = (error: any, $t: App.TranslationFunction) => {
	let errorMessages = [];

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
			case 'NAME_REQUIRED':
				errorMessage = $t('validation.NAME_REQUIRED');
				break;
			case 'NAME_MIN_MAX_CARAC':
				errorMessage = $t('validation.NAME_MIN_MAX_CARAC');
				break;
			case 'MESSAGE_REQUIRED':
				errorMessage = $t('validation.MESSAGE_REQUIRED');
				break;
			case 'MESSAGE_MIN_MAX_CARAC':
				errorMessage = $t('validation.MESSAGE_MIN_MAX_CARAC');
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
