<script>
  import { login } from "./loginFunc";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";

  async function handleLogin() {
    try {
      await login(email, password);
      goto("/dashboard");
      // Rediriger vers la page d'accueil ou afficher un message de réussite
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
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
