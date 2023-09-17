<script>
  import { onMount, onDestroy } from "svelte";

  // Props du composant
  export let message = "";
  export let type = "info"; // Types possibles : 'success', 'error', 'info'

  // État de la visibilité de la notification
  let isVisible = true;

  // Cycle de vie : monté du composant
  onMount(() => {
    // Définir un timer pour masquer la notification après 5 secondes
    const timer = setTimeout(() => {
      isVisible = false;
    }, 5000);

    // Nettoyage : annuler le timer si le composant est détruit
    return () => clearTimeout(timer);
  });

  onDestroy(() => {
    clearTimeout(timer);
    // Autres nettoyages ici
  });

  // Fonction pour fermer la notification manuellement
  function closeNotification() {
    isVisible = false;
  }
</script>

{#if isVisible}
  <div class={`notification ${type}`} aria-live="assertive">
    <span>{message}</span>
    <button on:click={closeNotification} aria-label="Fermer la notification"
      >X</button
    >
  </div>
{/if}

<style>
  /* Styles de base pour toutes les notifications */
  .notification {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 200px;
    padding: 10px;
    color: white;
  }

  /* Styles spécifiques pour chaque type de notification */
  .notification.success {
    background-color: green;
  }
  .notification.error {
    background-color: red;
  }
  .notification.info {
    background-color: blue;
  }
</style>
