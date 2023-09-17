<script>
  import { authStore } from "$stores/authStore";

  let isLoggedIn;

  function handleLogout() {
    logout();
  }

  function logout() {
    authStore.set({ token: null, userId: null });
    localStorage.removeItem("token"); // Ajouté cette ligne
  }

  authStore.subscribe(($authStore) => {
    isLoggedIn = $authStore && $authStore.token ? true : false;
  });
</script>

{#if isLoggedIn}
  <button on:click={handleLogout}>Se déconnecter</button>
{/if}
