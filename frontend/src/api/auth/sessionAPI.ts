import { apiCall } from '$api/utils/apiCall';

export async function getUserSessions() {
	return apiCall({
		url: `${import.meta.env.VITE_URL_BACK}/auth/sessions`,
		credentials: 'include',
		handleSuccess: (data) => console.log('Sessions récupérées avec succès :', data),
		handleError: (error) => console.error('Erreur lors de la récupération des sessions :', error)
	});
}

export async function closeUserSession(sessionId: string) {
	return apiCall({
		url: `${import.meta.env.VITE_URL_BACK}/auth/sessions/${sessionId}`,
		method: 'DELETE',
		credentials: 'include',
		handleSuccess: (data) => console.log('Session fermée avec succès :', data),
		handleError: (error) => console.error('Erreur lors de la fermeture de la session :', error)
	});
}
