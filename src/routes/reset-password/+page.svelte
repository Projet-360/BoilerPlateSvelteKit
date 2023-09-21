<script>
  import { resetPassword } from "$api/auth";

  let email = "";

  async function handleResetPassword() {
    await resetPassword(email);
  }
</script>

<main>
  <h1>Réinitialisation du mot de passe</h1>
  <form>
    <label for="email">Entrez votre adresse e-mail :</label>
    <input type="email" id="email" bind:value={email} required />
    <button type="button" on:click={handleResetPassword}
      >Réinitialiser le mot de passe</button
    >
  </form>
</main>
