import { apiCall } from '$api/utils/apiCall'; // Assure-toi que le chemin est correct
import { authStore } from '$stores/authStore';
import { BD } from '$lib/constants';

export async function checkAuth() {
	try {
		const res = await fetch(`${BD}/auth/check-auth`, {
			credentials: 'include'
		});
		if (res.ok) {
			const data = await res.json();
			authStore.update((state) => ({
				...state,
				isAuthenticated: data.isAuthenticated,
				token: data.token,
				role: data.role,
				userId: data.userId
			}));
		}
	} catch (error) {
		console.error("Erreur lors de la vérification de l'authentification:", error);
	}
}

export async function login(email, password) {
	try {
		const data = await apiCall({
			url: `${BD}/auth/login`,
			method: 'POST',
			credentials: 'include',
			body: { email, password }
		});
		authStore.set({
			token: data.token,
			userId: data.userId,
			role: data.role,
			isAuthenticated: true
		});
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function signup(username, email, password) {
	try {
		const response = await apiCall({
			url: `${BD}/auth/signup`,
			method: 'POST',
			credentials: 'include',
			body: { username, email, password }
		});

		console.log('Response received: ', response);

		if (response.success) {
			return { success: true };
		} else {
			return { success: false, message: response.message };
		}
	} catch (error) {
		console.log('error received: ', error);
		return { success: false, message: error.message };
	}
}

export async function verifySignup() {
	try {
		const res = await fetch(`${BD}/auth/verify/${token}`);
		if (res.ok) {
			console.log('Token vérifié avec succès'); // Pour le débogage
			goto('/');
			notificationStore.addNotification('Votre adresse mail est bien validée', 'success');
		} else {
			console.log('Échec de la vérification du token'); // Pour le débogage
			// Gérer l'échec de la vérification ici
		}
	} catch (error) {
		console.log('Erreur lors de la vérification :', error); // Pour le débogage
		// Gérer l'erreur ici
	}
}

export async function resetPassword(email) {
	try {
		const data = await apiCall({
			url: `${BD}/auth/forgot-password`,
			method: 'POST',
			credentials: 'include', // si nécessaire
			body: { email }
		});

		if (data.success) {
			// Afficher un message de succès ou gérer comme tu le souhaites
			return data;
		} else {
			// Gérer les erreurs en fonction du message d'erreur renvoyé par l'API
			throw new Error(data.errorMessage || 'Erreur lors de la réinitialisation du mot de passe.');
		}
	} catch (error) {
		throw error;
	}
}

export async function ResetForgotNewPassword(token, newPassword) {
	try {
		const response = await fetch(`${BD}/auth/forgot-password/${token}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ newPassword })
		});

		console.log(response);

		if (response.ok) {
			console.log('Mot de passe réinitialisé avec succès.');
			// Redirigez l'utilisateur ou faites quelque chose d'autre ici
		} else {
			console.log('Erreur lors de la réinitialisation du mot de passe.');
		}
	} catch (error) {
		throw error;
	}
}

export async function getDashboardData(token) {
	// Ajoute le token en paramètre
	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${token}`);

		const data = await apiCall({
			url: `${BD}/auth/user/dashboard`,
			method: 'GET',
			headers: headers,
			credentials: 'include'
		});
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
