<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let show = true;

  onMount(async () => {
    $page; // Utilisez le store pour réagir aux changements de page
    const hidePreloader = () => {
      show = false;
    };

    // Attendez que toutes les ressources soient chargées
    await new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve);
      }
    });

    // Masquez le preloader
    hidePreloader();
  });
</script>

{#if show}
  <div class="preloader">
    <div class="spinner" />
  </div>
{/if}

<style>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #000;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
</style>
