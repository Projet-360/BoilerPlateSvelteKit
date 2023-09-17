<script>
  import { authStore } from "$stores/authStore";

  let isAuthenticated;

  authStore.subscribe(($authStore) => {
    isAuthenticated = $authStore && $authStore.token ? true : false;
  });

  function handleLogout() {
    logout();
  }

  async function logout() {
    try {
      const res = await fetch("http://localhost:3001/auth/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        authStore.set({ token: null, userId: null, isAuthenticated: false });
      }
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  }

  authStore.subscribe(($authStore) => {
    isAuthenticated = $authStore && $authStore.token ? true : false;
  });
</script>

{#if isAuthenticated}
  <button on:click={handleLogout}>Se déconnecter</button>
{/if}
