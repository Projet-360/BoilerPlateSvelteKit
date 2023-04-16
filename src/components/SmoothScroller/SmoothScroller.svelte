<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { sineOut } from 'svelte/easing';

  let container;
  let wrapper;
  let lastY = 0;
  const translateY = tweened(0, { duration: 1000, easing: sineOut });

  onMount(() => {
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      const deltaY = e.deltaY;
      const wrapperHeight = wrapper.offsetHeight;
      const containerHeight = container.offsetHeight;
      const maxScroll = wrapperHeight - containerHeight;

      if (wrapperHeight > containerHeight) {
        lastY += deltaY;
        lastY = Math.min(Math.max(lastY, 0), maxScroll);
        translateY.set(lastY);
        container.scrollTop = lastY;
      }
    });

    // Ajustez la hauteur du wrapper pour éliminer l'espace vide en bas
    wrapper.style.height = `calc(100% - ${wrapper.offsetHeight - container.offsetHeight}px)`;
    console.log(`calc(100% - ${wrapper.offsetHeight - container.offsetHeight}px)`);
  });
</script>

<style>
  .smoothscroller {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .smoothscroller-wrapper {
    transform-origin: top;
    will-change: transform;
  }
</style>

<div bind:this={container} class="smoothscroller">
  <div
    bind:this={wrapper}
    class="smoothscroller-wrapper"
    style="transform: translateY(-{$translateY}px)"
  >
    <slot></slot>
  </div>
</div>
