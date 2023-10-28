// Import environment variables here using SvelteKit's best practices
import { browser } from '$app/environment';
import { apiCall } from '$api/utils/apiCall';
import { greetingsValidation } from '$message/greetings';
import type { TranslationFunction } from '../typescript';
import { PUBLIC_VERCEL_URL_BACK, PUBLIC_LOCAL_URL_BACK, PUBLIC_ENV } from '$env/static/public';

let BD: string;

switch (PUBLIC_ENV) {
	case 'prod':
		BD = PUBLIC_VERCEL_URL_BACK as string;
		break;
	case 'dev':
		BD = PUBLIC_LOCAL_URL_BACK as string;
		break;
	default:
		console.error('Environnement inconnu:', PUBLIC_ENV);
		throw new Error('Environnement inconnu');
}

// Function to send greeting
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

// Function to get all greetings
export async function getAllGreetings() {
	const data = await apiCall({
		url: `${BD}/api/getGreetings`,
		method: 'GET'
	});
	return data;
}

// Function to delete greeting
export async function deleteGreeting(id: string) {
	const isSuccessful = await apiCall({
		url: `${BD}/api/deleteGreeting/${id}`,
		method: 'DELETE'
	});
	return isSuccessful !== null;
}
