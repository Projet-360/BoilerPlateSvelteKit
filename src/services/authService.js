// Store Svelte pour l'authentification (à définir selon votre implementation)
import { authStore } from "$stores/authStore";

export async function signup(username, password) {
  try {
    const res = await fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const data = await res.json();
    authStore.set({ token: data.token, userId: data.userId }); // Ajouté cette ligne
    localStorage.setItem("token", data.token); // Ajouté cette ligne
    return data;
  } catch (error) {
    console.error("Il y a eu un problème avec l'opération fetch:", error);
    throw error;
  }
}

export async function login(username, password) {
  try {
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const data = await res.json();
    authStore.set({ token: data.token, userId: data.userId });
    localStorage.setItem("token", data.token); // Ajouté cette ligne
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    throw error;
  }
}

export function logout() {
  authStore.set({ token: null, userId: null });
  localStorage.removeItem("token"); // Ajouté cette ligne
}
