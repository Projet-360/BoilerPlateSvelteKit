import { apiCall } from '$api/utils/apiCall';
import { authStore } from '$stores/authStore';

let currentState: App.IAuthStore;

authStore.subscribe((state) => {
	currentState = state;
});

export async function checkAuth() {
	try {
		const res = await fetch(`${import.meta.env.VITE_URL_BACK}/auth/check-auth`, {
			credentials: 'include'
		});
		if (res.ok) {
			const data = await res.json();
			authStore.update((state) => ({
				...state,
				isAuthenticated: data.isAuthenticated,
				role: data.role,
				userId: data.userId
			}));
		}
	} catch (error) {}
}
