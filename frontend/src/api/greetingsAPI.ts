// greetingsAPI.ts

import { apiCall } from '$api/utils/apiCall';
import { messageNotification } from '$modelNotifications/messageNotification';

interface ApiResponse {
	success: boolean;
	data?: any;
	error?: Error;
}

export async function saveGreeting(
	name: string,
	message: string,
	editingId: string | null,
	$t: App.TranslationFunction
): Promise<ApiResponse> {
	try {
		const url = editingId
			? `${import.meta.env.VITE_URL_BACK}/api/greetings/${editingId}`
			: `${import.meta.env.VITE_URL_BACK}/api/greetings`;
		const method = editingId ? 'PUT' : 'POST';

		const response = await apiCall({
			url,
			method,
			body: { name, message }
		});

		return { success: response !== null, data: response };
	} catch (error) {
		messageNotification(error, $t);
		return { success: false, error: error as Error };
	}
}

export async function getAllGreetings(): Promise<ApiResponse> {
	try {
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/api/greetings`,
			method: 'GET'
		});

		return { success: true, data };
	} catch (error) {
		return { success: false, error: error as Error };
	}
}

export async function deleteGreeting(id: string): Promise<ApiResponse> {
	try {
		const response = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/api/greetings/${id}`,
			method: 'DELETE'
		});

		return { success: response !== null };
	} catch (error) {
		return { success: false, error: error as Error };
	}
}
