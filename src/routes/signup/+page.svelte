<script>
  import { authStore } from "$stores/authStore";
  import { signup } from "./signUpFunc";
  import { goto } from "$app/navigation";

  let username = "";
  let email = ""; // Nouvelle variable pour l'e-mail
  let password = "";

  async function handleSignup() {
    const data = await signup(username, email, password); // Inclure l'e-mail lors de l'appel à signup
    authStore.set({ token: data.token, userId: data.userId });
    goto("/"); // Rediriger vers le tableau de bord ou toute autre page
  }
</script>

<div class="signup">
  <form on:submit|preventDefault={handleSignup}>
    <input type="text" bind:value={username} placeholder="Username" />
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button type="submit">S'inscrire</button>
  </form>
</div>
