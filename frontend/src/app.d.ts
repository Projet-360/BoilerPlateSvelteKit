// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare namespace App {
	type Greeting = {
		_id: string;
		name: string;
		message: string;
	};

	interface Session {
		sessionId: string;
		device: string; // Exemple: 'Desktop - Chrome'
		lastActive: Date;
	}

	export interface IAuthStore {
		userId: string | null;
		role: string | null;
		isAuthenticated: boolean;
		sessionId?: string;
	}

	// Mettez à jour votre interface IAuthStore pour inclure les détails de session
	export interface IAuthStore {
		userId: string | null;
		role: string | null;
		isAuthenticated: boolean;
		currentSessionId?: string; // L'identifiant de la session actuelle
		sessions?: Session[]; // Une liste de toutes les sessions actives de l'utilisateur
	}

	interface UserInfo {
		name: string;
		email: string;
	}

	interface User {
		_id: string;
		username: string;
		email: string;
		role: string;
	}

	interface AnimationOptions {
		x?: number;
		y?: number;
		duration: number;
		delay?: number;
	}

	interface Notification {
		id: number;
		message: string;
		type: string; // ou enum si vous avez des types spécifiques
	}

	interface ApiCallOptions {
		url: string;
		method?: string;
		headers?: Headers | Record<string, string> | null;
		body?: Record<string, any> | null;
		credentials?: RequestCredentials | null;
		handleSuccess?: ((data: any) => void) | null;
		handleError?: ((error: any) => void) | null;
	}

	export type TranslationFunction = (key: string, options?: any) => string;
}
