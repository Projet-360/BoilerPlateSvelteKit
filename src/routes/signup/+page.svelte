<script>
  import { authStore } from "$stores/authStore";
  import { signup } from "$api/auth";
  import { goto } from "$app/navigation";
  import notificationStore from "$stores/notificationStore";

  let username = "";
  let email = ""; // Nouvelle variable pour l'e-mail
  let password = "";

  async function handleSignup() {
    try {
      const data = await signup(username, email, password);

      authStore.set({ token: data.token, userId: data.userId });

      goto("/");

      notificationStore.addNotification(
        "Vous avez reçue un Email afin de valider votre compte",
        "success"
      );
    } catch (error) {
      notificationStore.addNotification(error.message, "error");
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
