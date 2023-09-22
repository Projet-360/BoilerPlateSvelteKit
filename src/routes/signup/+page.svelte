<script>
  import { signup } from "$api/auth";
  import { goto } from "$app/navigation";
  import notificationStore from "$stores/notificationStore";
  import { t } from "$UITools/translations/index";

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
          errorMessage = $t("validation.EMAIL_EXIST");
          break;
        case "USERNAME_REQUIRED":
          errorMessage = $t("validation.USERNAME_REQUIRED");
          console.log("Translated message:", errorMessage);
          break;
        case "VALID_EMAIL":
          errorMessage = $t("validation.VALID_EMAIL");
          break;
        case "VALID_USERNAME":
          errorMessage = $t("validation.VALID_USERNAME");
          break;
        case "NUMBE_CARAC_PASSWORD":
          errorMessage = $t("validation.NUMBE_CARAC_PASSWORD");
          break;
        case "MIN_PASSWORD":
          errorMessage = $t("validation.MIN_PASSWORD");
          break;
        case "MAJ_PASSWORD":
          errorMessage = $t("validation.MAJ_PASSWORD");
          break;
        case "NUMBER_PASSWORD":
          errorMessage = $t("validation.NUMBER_PASSWORD");
          break;
        case "SPECIAL_CARAC_PASSWORD":
          errorMessage = $t("validation.SPECIAL_CARAC_PASSWORD");
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
