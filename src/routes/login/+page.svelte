<script>
  import { login } from "$api/auth";
  import { goto } from "$app/navigation";
  import notificationStore from "$stores/notificationStore";

  let email = import.meta.env.VITE_MAIL;
  let password = "Password3,";

  async function handleLogin() {
    try {
      await login(email, password);
      goto("/dashboard");
      // Rediriger vers la page d'accueil ou afficher un message de réussite
    } catch (error) {
      notificationStore.addNotification(error.message, "error");
    }
  }
</script>

<div class="signup">
  <form on:submit|preventDefault={handleLogin}>
    <input type="text" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">Se connecter</button>
  </form>
</div>
