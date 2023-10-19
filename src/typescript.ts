export interface AuthState {
	userId: string | null;
	role: string | null;
	isAuthenticated: boolean;
}

export interface UserInfo {
	name: string;
	email: string;
}

export interface User {
	_id: string;
	username: string;
	email: string;
	role: string;
}

export interface AnimationOptions {
	x?: number;
	y?: number;
	duration: number;
	delay?: number;
}

export interface Notification {
	id: number;
	message: string;
	type: string; // ou enum si vous avez des types spécifiques
}

export interface ApiCallOptions {
	url: string;
	method?: string;
	headers?: Headers | Record<string, string> | null;
	body?: Record<string, any> | null;
	credentials?: RequestCredentials | null;
	handleSuccess?: ((data: any) => void) | null;
	handleError?: ((error: any) => void) | null;
}

export type TranslationFunction = (key: string, options?: any) => string;
