<script>
  import { signup } from "$api/auth";
  import { signupValidation } from "$api/message/signup";
  import { t } from "$UITools/translations/index";

  let username = "Name";
  let email = import.meta.env.VITE_MAIL;
  let password = "Password8,";

  async function handleSignup() {
    const result = await signup(username, email, password);
    signupValidation(result, $t);
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
