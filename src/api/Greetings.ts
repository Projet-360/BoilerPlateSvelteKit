import { BD } from '$utils/constants';
import { apiCall } from '$api/utils/apiCall';
import { greetingsValidation } from '$message/greetings';
import type { TranslationFunction } from '../typescript';

export async function sendGreeting(
	name: string,
	message: string,
	editingId: string | null = null,
	$t: TranslationFunction
) {
	try {
		const url = editingId ? `${BD}/api/updateGreeting/${editingId}` : `${BD}/api/saveGreeting`;
		const method = editingId ? 'PUT' : 'POST';

		const isSuccessful = await apiCall({
			url,
			method,
			body: { name, message }
		});

		return isSuccessful !== null;
	} catch (error) {
		greetingsValidation(error, $t);
		throw error;
	}
}

export async function getAllGreetings() {
	const data = await apiCall({
		url: `${BD}/api/getGreetings`,
		method: 'GET'
	});

	return data;
}

export async function deleteGreeting(id: string) {
	const isSuccessful = await apiCall({
		url: `${BD}/api/deleteGreeting/${id}`,
		method: 'DELETE'
	});

	return isSuccessful !== null;
}
