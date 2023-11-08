import { apiCall } from '$api/utils/apiCall';
import { messageNotification } from '$modelNotifications/messageNotification';

export async function getAllUsers() {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/admin/users`,
			method: 'GET',
			headers: headers,
			credentials: 'include'
		});

		if (data.users) {
			return data.users;
		} else {
			throw new Error('Erreur lors de la récupération des utilisateurs');
		}
	} catch (error) {
		throw error;
	}
}

export async function updateUser(
	userId: string,
	updateData: App.User,
	$t: App.TranslationFunction
) {
	try {
		const headers = new Headers();
		const data = await apiCall({
			url: `${import.meta.env.VITE_URL_BACK}/auth/admin/user/${userId}`,
			method: 'PUT',
			headers: headers,
			credentials: 'include',
			body: updateData
		});

		if (data.success) {
			return { success: true, user: data.updatedUser, notification: data.notification };
		} else {
			throw new Error("Erreur lors de la mise à jour de l'utilisateur");
		}
	} catch (error: any) {
		messageNotification(error, $t);
		return { success: false, user: null, notification: 'Une erreur est survenue' };
	}
}
