// import { getDashboardData } from '$api/auth.js';

// export async function load({ locals }) {
// 	// Log pour déboguer les valeurs des 'locals'
// 	console.log('Valeur de locals:', locals);

// 	const { user } = locals;

// 	// Log pour déboguer la valeur de 'user'
// 	console.log('Valeur de user:', user);

// 	// Vérifiez que 'user' et donc le token sont disponibles
// 	if (user) {
// 		try {
// 			// Si l'utilisateur est disponible, c'est que le token est également valide.
// 			// Vous pouvez maintenant appeler getDashboardData
// 			try {
// 				console.log("Avant l'appel à getDashboardData");
// 				const data = await getDashboardData();
// 				console.log("Après l'appel à getDashboardData, data:", data);
// 				return { props: { user, data } };
// 			} catch (error) {
// 				console.error("Erreur lors de l'appel à getDashboardData:", error);
// 				return { status: 500, error: 'Erreur interne du serveur' };
// 			}

// 			// Log pour déboguer la valeur de 'data'
// 			console.log('Valeur de data:', data);

// 			// Tout s'est bien passé, retournez les données
// 			return { props: { user, data } };
// 		} catch (error) {
// 			// Une erreur s'est produite lors de l'appel à getDashboardData
// 			console.error("Erreur lors de l'obtention des données du tableau de bord:", error);
// 			return { status: 500, error: 'Erreur interne du serveur' };
// 		}
// 	} else {
// 		// L'utilisateur n'est pas disponible, probablement parce que le token n'est pas valide ou pas présent
// 		console.error('Token non disponible ou invalide');
// 		return { status: 302, redirect: '/login' };
// 	}
// }
