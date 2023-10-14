export async function getAuthenticatedUser(authStore) {
	return new Promise((resolve, reject) => {
		let unsubscribe = null;
		unsubscribe = authStore.subscribe(({ isAuthenticated }) => {
			// Arrêtons la souscription une fois que nous avons obtenu les données nécessaires
			if (unsubscribe && typeof unsubscribe === 'function') {
				unsubscribe();
			}

			// Si isAuthenticated est initialisé (ne devrait pas être null ou undefined)
			if (isAuthenticated !== null) {
				resolve({ isAuthenticated });
			}
		});
	});
}
