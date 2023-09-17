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

<form on:submit|preventDefault={handleLogin}>
  <label>
    Email:
    <input type="text" bind:value={email} />
  </label>
  <label>
    Mot de passe:
    <input type="password" bind:value={password} />
  </label>
  <button type="submit">Se connecter</button>
</form>
