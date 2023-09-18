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
