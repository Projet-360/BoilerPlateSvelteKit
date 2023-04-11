<script>
  import { writable } from "svelte/store";

  let smoothscroller;
  const scrollY = writable(0);
  const scrollSpeed = 1; // Modifier cette valeur pour ajuster la vitesse de défilement

  function handleScroll(event) {
    scrollY.update((value) => {
      const newPosition = value - event.deltaY * scrollSpeed;
      const maxScroll = smoothscroller.scrollHeight - smoothscroller.clientHeight;

      if (newPosition < 0) {
        event.preventDefault(); // Empêche le défilement natif du navigateur
        return 0; // Bloque le défilement en haut
      } else if (newPosition > maxScroll) {
        return maxScroll; // Bloque le défilement en bas
      } else {
        return newPosition;
      }
    });
  }
</script>

<style>
  .smoothscroller {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .smoothscroller-wrapper {
    will-change: transform;
    transition: transform 0.5s; /* Modifier la durée de la transition pour ajuster la vitesse */
  }
</style>

<div class="smoothscroller" bind:this={smoothscroller} on:wheel={handleScroll}>
  <div class="smoothscroller-wrapper" style="transform: translateY({$scrollY}px)">
    <slot/>
  </div>
</div>
