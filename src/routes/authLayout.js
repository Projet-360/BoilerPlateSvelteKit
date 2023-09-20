import { authStore } from "$stores/authStore";

export async function checkAuth() {
  try {
    const res = await fetch(`http://localhost:3001/auth/check-auth`, {
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      authStore.update((state) => ({
        ...state,
        isAuthenticated: data.isAuthenticated,
        token: data.token,
        userId: data.userId,
      }));
    }
  } catch (error) {
    console.error(
      "Erreur lors de la vérification de l'authentification:",
      error,
    );
  }
}
