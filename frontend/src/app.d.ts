// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare namespace App {
	type Greeting = {
		id: string;
		name: string;
		message: string;
		_id?: string;  // `_id` est optionnel, utilisé principalement pour le mapping initial.
	};
	
	interface Session {
		sessionId: string;
		device: string; // Exemple: 'Desktop - Chrome'
		lastActive: Date;
	}

	export interface userData {
		username: string | null;
		email: string | null;
	}

	export interface IAuthStore {
		userId: string | null;
		role: string | null;
		isAuthenticated: boolean;
		currentSessionId?: string; // L'identifiant de la session actuelle
		sessions?: Session[]; // Une liste de toutes les sessions actives de l'utilisateur
		userData: userData;
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
