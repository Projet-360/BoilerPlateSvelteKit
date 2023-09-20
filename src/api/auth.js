import { authStore } from "$stores/authStore";

export async function login(email, password) {
  try {
    const res = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const data = await res.json();
    authStore.set({
      token: data.token,
      userId: data.userId,
      isAuthenticated: true,
    });
  } catch (error) {
    //console.error("Erreur lors de la connexion:", error);
    throw error;
  } finally {
    // Vous pouvez ajouter ici d'autres opérations de nettoyage ou des logs
  }
}

export async function signup(username, email, password) {
  try {
    const res = await fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
      credentials: "include",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const data = await res.json();
    authStore.set({ token: data.token, userId: data.userId });
    return data;
  } catch (error) {
    //console.error("Il y a eu un problème avec l'opération fetch:", error);
    throw error;
  }
}

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
