import type { ApiCallOptions } from '../../typescript';

export async function apiCall({
	url,
	method = 'GET',
	headers = null,
	body = null,
	credentials = null,
	handleSuccess = null,
	handleError = null
}: ApiCallOptions): Promise<any> {
	try {
		// Initialise les options de la requête
		const options: RequestInit = {
			method
		};

		// Ajoute les en-têtes seulement s'ils sont fournis
		if (headers) {
			options.headers = headers;
		}

		// Ajoute le corps seulement s'il est fourni
		if (body) {
			options.body = JSON.stringify(body);
			if (!headers || !(headers as Record<string, string>)['Content-Type']) {
				options.headers = {
					...((options.headers as Record<string, string>) || {}),
					'Content-Type': 'application/json'
				};
			}
		}

		// Ajoute l'option credentials seulement si elle est fournie
		if (credentials) {
			options.credentials = credentials;
		}

		// Effectue la requête
		const response = await fetch(url, options);

		// Traite la réponse
		if (response.ok) {
			const data = await response.json();
			if (handleSuccess) {
				handleSuccess(data);
			}
			return data;
		} else {
			const errorData = await response.json();
			if (handleError) {
				handleError(errorData);
			}
			throw new Error(errorData.message || 'Erreur du serveur');
		}
	} catch (error) {
		if (handleError) {
			handleError(error);
		}
		throw error;
	}
}
