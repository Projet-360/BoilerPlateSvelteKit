<script>
  import { fly } from "svelte/transition";

  export let pathname = "";

  let inAnimation, outAnimation;

  $: {
    switch (pathname) {
      case "/":
        inAnimation = { x: -300, duration: 5000, delay: 5000 };
        outAnimation = { x: 100, duration: 5000 };
        break;
      case "/about":
        inAnimation = { y: -100, duration: 5000, delay: 5000 };
        outAnimation = { y: 100, duration: 5000 };
        break;
      default:
        inAnimation = { x: -10, duration: 5000, delay: 5000 };
        outAnimation = { x: 5, duration: 5000 };
        break;
    }
  }
</script>

{#key pathname}
  <div class="pageTransition" in:fly={inAnimation} out:fly={outAnimation}>
    <slot />
  </div>
{/key}
