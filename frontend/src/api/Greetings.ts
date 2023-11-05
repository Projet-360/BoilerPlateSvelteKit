import { apiCall } from '$api/utils/apiCall';
import { messageNotification } from '$modelNotifications/messageNotification';

export async function sendGreeting(
	name: string,
	message: string,
	editingId: string | null = null,
	$t: App.TranslationFunction
) {
	try {
		const url = editingId
			? `${import.meta.env.VITE_URL_BACK}/api/updateGreeting/${editingId}`
			: `${import.meta.env.VITE_URL_BACK}/api/saveGreeting`;
		const method = editingId ? 'PUT' : 'POST';

		const isSuccessful = await apiCall({
			url,
			method,
			body: { name, message }
		});

		return isSuccessful !== null;
	} catch (error) {
		messageNotification(error, $t);
		throw error;
	}
}

export async function getAllGreetings() {
	const data = await apiCall({
		url: `${import.meta.env.VITE_URL_BACK}/api/getGreetings`,
		method: 'GET'
	});

	return data;
}

export async function deleteGreeting(id: string) {
	const isSuccessful = await apiCall({
		url: `${import.meta.env.VITE_URL_BACK}/api/deleteGreeting/${id}`,
		method: 'DELETE'
	});

	return isSuccessful !== null;
}
