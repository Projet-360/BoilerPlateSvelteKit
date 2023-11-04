// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare namespace App {
	interface PageData {
		greetings?: { _id: string }[];
	}
	interface IAuthStore {
		userId: string | null;
		role: string | null;
		isAuthenticated: boolean;
	}

	interface UserInfo {
		name: string;
		email: string;
	}

	interface UserSave {
		username: string;
		email: string;
		role: string;
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
