<script>
  import { signup } from "$api/auth";
  import { goto } from "$app/navigation";
  import notificationStore from "$stores/notificationStore";

  let username = "Name";
  let email = import.meta.env.VITE_MAIL;
  let password = "Password8,";

  async function handleSignup() {
    const result = await signup(username, email, password);

    if (result.success) {
      goto("/");
      notificationStore.addNotification(
        "Vous avez reçu un email pour valider votre compte.",
        "success"
      );
    } else {
      let errorMessage;
      switch (result.message) {
        case "Email already exists":
          errorMessage = "Cet email existe déjà."; // Vous pouvez ajouter la traduction ici.
          break;
        default:
          errorMessage = "Une erreur inconnue s'est produite.";
      }
      notificationStore.addNotification(errorMessage, "error");
    }
  }
</script>

<div class="signup">
  <form on:submit|preventDefault={handleSignup}>
    <input type="text" bind:value={username} placeholder="Username" />
    <input bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">S'inscrire</button>
  </form>
</div>
