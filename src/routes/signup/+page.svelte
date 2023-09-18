<script>
  import { authStore } from "$stores/authStore";
  import { signup } from "./signUpFunc";
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
      notificationStore.addNotification("Inscription réussie", "success");
    } catch (error) {
      console.log(error);
      notificationStore.addNotification(error.message, "error");
    }
  }
  function testNotification() {
    notificationStore.addNotification("Ceci est un test", "info");
  }
</script>

<div class="signup">
  <form on:submit|preventDefault={handleSignup}>
    <input type="text" bind:value={username} placeholder="Username" />
    <input bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">S'inscrire</button>
  </form>
  <button on:click={testNotification}>Ajouter une notification</button>
</div>
