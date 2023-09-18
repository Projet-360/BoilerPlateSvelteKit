<script context="module">
  import { goto } from "$app/navigation";

  export async function load({ page, fetch }) {
    const { token } = page.params;

    // Ajoutez cette ligne pour déboguer
    console.log("Token reçu :", token);

    try {
      const res = await fetch(`http://localhost:3001/auth/verify/${token}`);
      if (res.ok) {
        goto("/verification-success");
      } else {
        return { status: res.status, error: new Error("Verification failed") };
      }
    } catch (error) {
      return { status: 500, error };
    }
  }
</script>

<!-- Vous pouvez ajouter une interface utilisateur pour indiquer que la vérification est en cours -->
<h1>Verification en cours...</h1>
