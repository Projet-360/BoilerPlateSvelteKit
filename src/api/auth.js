import { apiCall } from "$api/utils/apiCall"; // Assure-toi que le chemin est correct
import { authStore } from "$stores/authStore";
import { BD } from "$lib/constants";

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
    const response = await apiCall({
      url: `${BD}/auth/signup`,
      method: "POST",
      credentials: "include",
      body: { username, email, password },
    });

    if (response.status === 201) {
      return { success: true };
    } else {
      const data = await response.json();
      return { success: false, message: data.message };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function verifySignup() {
  try {
    const res = await fetch(`${BD}/auth/verify/${token}`);
    if (res.ok) {
      console.log("Token vérifié avec succès"); // Pour le débogage
      goto("/");
      notificationStore.addNotification(
        "Votre adresse mail est bien validée",
        "success",
      );
    } else {
      console.log("Échec de la vérification du token"); // Pour le débogage
      // Gérer l'échec de la vérification ici
    }
  } catch (error) {
    console.log("Erreur lors de la vérification :", error); // Pour le débogage
    // Gérer l'erreur ici
  }
}

export async function resetPassword(email) {
  try {
    const data = await apiCall({
      url: `${BD}/auth/reset-password`,
      method: "POST",
      credentials: "include", // si nécessaire
      body: { email },
    });

    if (data.success) {
      // Afficher un message de succès ou gérer comme tu le souhaites
      return data;
    } else {
      // Gérer les erreurs en fonction du message d'erreur renvoyé par l'API
      throw new Error(
        data.errorMessage ||
          "Erreur lors de la réinitialisation du mot de passe.",
      );
    }
  } catch (error) {
    throw error;
  }
}

export async function resetNewPassword(token, newPassword) {
  try {
    const response = await fetch(`${BD}/auth/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword }),
    });

    if (response.ok) {
      console.log("Mot de passe réinitialisé avec succès.");
      // Redirigez l'utilisateur ou faites quelque chose d'autre ici
    } else {
      console.log("Erreur lors de la réinitialisation du mot de passe.");
    }
  } catch (error) {
    throw error;
  }
}
