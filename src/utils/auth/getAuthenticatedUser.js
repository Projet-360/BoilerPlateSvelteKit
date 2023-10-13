export async function getAuthenticatedUser(authStore) {
	return new Promise((resolve, reject) => {
		let unsubscribe = null; // Déclarez unsubscribe ici avec une valeur initiale de null
		unsubscribe = authStore.subscribe(({ isAuthenticated, token }) => {
			// Vous pouvez ajouter une vérification de sécurité supplémentaire ici
			if (unsubscribe && typeof unsubscribe === 'function') {
				if (unsubscribe && typeof unsubscribe === 'function') {
					unsubscribe();
				}
			}
			if (isAuthenticated !== null && token !== null) {
				resolve({ isAuthenticated, token });
			}
		});
	});
}
