// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface AuthState {
			userId: string | null;
			role: string | null;
			isAuthenticated: boolean;
		}
	}
}

export {};
