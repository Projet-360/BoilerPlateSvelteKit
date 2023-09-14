<script>
    import authStore from '$stores/authStore';
    import { signup } from '$services/authService';
    import { goto } from '$app/navigation';

    let username = '';
    let password = '';
  
async function handleSignup() {
  const data = await signup(username, password);
  authStore.set({ token: data.token, userId: data.userId });
  goto('/dashboard'); // Rediriger vers le tableau de bord ou toute autre page
}
    
  </script>
  
  <input type="text" bind:value={username} placeholder="Username" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button on:click={handleSignup}>Sign Up</button>