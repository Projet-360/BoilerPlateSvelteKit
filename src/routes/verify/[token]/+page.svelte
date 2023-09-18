<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let token;

  onMount(async () => {
    token = $page.params.token;
    console.log("Token reçu :", token); // Pour le débogage

    try {
      const res = await fetch(`http://localhost:3001/auth/verify/${token}`);
      if (res.ok) {
        console.log("Token vérifié avec succès"); // Pour le débogage
        goto("/verifySuccess");
      } else {
        console.log("Échec de la vérification du token"); // Pour le débogage
        // Gérer l'échec de la vérification ici
      }
    } catch (error) {
      console.log("Erreur lors de la vérification :", error); // Pour le débogage
      // Gérer l'erreur ici
    }
  });
</script>

<h1>Verification en cours...</h1>
