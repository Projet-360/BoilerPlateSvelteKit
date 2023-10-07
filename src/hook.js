export async function handle({ request, resolve }) {
	// Récupérez votre token JWT à partir des cookies et ajoutez-le à la session
	const cookies = request.headers.cookie;
	const token = // Votre logique pour extraire le token JWT des cookies
		(request.locals.session = { token });

	const routes = ['/dashboard', '/user'];
	const url = new URL(request.url);

	// Si la route n'est pas dans la liste et le token JWT est invalide,
	// retournez une erreur 403.
	if (
		!routes.includes(url.pathname) /* && Votre logique pour vérifier si le token JWT est invalide */
	) {
		return {
			status: 403,
			body: "Vous n'êtes pas autorisé à accéder à cette page"
		};
	}

	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers
		}
	};
}
