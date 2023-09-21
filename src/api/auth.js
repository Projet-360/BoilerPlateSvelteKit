import { apiCall } from "$api/utils/apiCall"; // Assure-toi que le chemin est correct
import { authStore } from "$stores/authStore";
import { BD } from "$lib/constants";

export async function login(email, password) {
  try {
    const data = await apiCall({
      url: `${BD}/auth/login`,
      method: "POST",
      credentials: "include",
      body: { email, password },
    });
    authStore.set({
      token: data.token,
      userId: data.userId,
      isAuthenticated: true,
    });
  } catch (error) {
    throw error;
  }
}

export async function signup(username, email, password) {
  try {
    const data = await apiCall({
      url: `${BD}/auth/signup`,
      method: "POST",
      credentials: "include",
      body: { username, email, password },
    });
    authStore.set({ token: data.token, userId: data.userId });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function checkAuth() {
  try {
    const res = await fetch(`${BD}/auth/check-auth`, {
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
