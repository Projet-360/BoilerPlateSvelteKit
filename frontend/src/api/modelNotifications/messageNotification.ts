import notificationStore from '$lib/stores/UX/notificationStore';
type TranslationFunction = (key: string, options?: any) => string;

export const messageNotification = (error: any, $t: App.TranslationFunction) => {
	let errorMessages: any = [];

    // Gérer le format de l'erreur ApolloError avec les erreurs structurées
    if (error.networkError && error.networkError.result && error.networkError.result.errors) {
        error.networkError.result.errors.forEach((err: { msg: string }) => {
            errorMessages.push(err.msg);  // Collecter les messages d'erreur pour la notification
        });
    } else if (error.message) {
        // Cas où l'erreur n'est pas structurée comme prévu
        errorMessages = error.message.split(',');
    } else {
        // Cas de fallback si l'erreur est inattendue ou mal formée
        errorMessages = ["Une erreur inconnue s'est produite."];
    }


	// Itération sur chaque message d'erreur
	errorMessages.forEach((errorMsg: string) => {
		let errorMessage;
		switch (errorMsg.trim()) {
			case 'NAME_REQUIRED':
				errorMessage = $t('validation.NAME_REQUIRED');
				break;
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
			case 'USER_NOT_FOUND':
				errorMessage = $t('validation.USER_NOT_FOUND');
				break;
			case 'EMAIL_NOT_VERIFIED':
				errorMessage = $t('validation.EMAIL_NOT_VERIFIED');
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
			case 'INVALID_CREDENTIALS':
				errorMessage = $t('validation.INVALID_CREDENTIALS');
				break;
			default:
				errorMessage = "Une erreur inconnue s'est produite.";
		}
		// Ajout de la notification d'erreur
		notificationStore.addNotification(errorMessage, 'error');
	});
};
