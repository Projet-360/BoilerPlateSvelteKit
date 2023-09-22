<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { resetNewPassword } from "$api/auth";
  import notificationStore from "$stores/notificationStore";

  let newPassword = "Password9!";
  let confirmPassword = "Password9!";
  let token;

  onMount(async () => {
    token = $page.params.token;
    console.log("Token reçu :", token); // Pour le débogage
  });

  async function resetPassword() {
    if (newPassword !== confirmPassword) {
      console.error("Les mots de passe ne correspondent pas.");
      return;
    }
    try {
      await resetNewPassword(token, newPassword);
      goto("/");
      notificationStore.addNotification(
        "Votre Email à bien été modifié",
        "success"
      );
    } catch (error) {
      notificationStore.addNotification(error.message, "error");
    }
  }
</script>

<main>
  <h1>Réinitialiser le mot de passe</h1>
  <form>
    <label for="newPassword">Nouveau mot de passe :</label>
    <input type="password" id="newPassword" bind:value={newPassword} required />

    <label for="confirmPassword">Confirmer le mot de passe :</label>
    <input
      type="password"
      id="confirmPassword"
      bind:value={confirmPassword}
      required
    />

    <button type="button" on:click={resetPassword}
      >Réinitialiser le mot de passe</button
    >
  </form>
</main>
