<script>
    import { login } from '$services/authService';
    import { goto } from '$app/navigation';
    
    let username = "";
    let password = "";
  
    async function handleLogin() {
      try {
        await login(username, password);
        goto('/dashboard');
        // Rediriger vers la page d'accueil ou afficher un message de réussite
      } catch (error) {
        console.error("Erreur lors de la connexion:", error);
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleLogin}>
    <label>
      Nom d'utilisateur:
      <input type="text" bind:value={username} />
    </label>
    <label>
      Mot de passe:
      <input type="password" bind:value={password} />
    </label>
    <button type="submit">Se connecter</button>
  </form>
  