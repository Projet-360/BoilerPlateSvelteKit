import { authStore } from "$stores/authStore";

export async function signup(username, email, password) {
  // Ajoutez l'argument email
  try {
    const res = await fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const data = await res.json();
    authStore.set({ token: data.token, userId: data.userId });
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error("Il y a eu un problème avec l'opération fetch:", error);
    throw error;
  }
}
