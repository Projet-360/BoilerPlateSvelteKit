<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { cursorProps } from '../../store/cursorProps';
  import { animateCursor, shape } from './CursorHelper';
  import bankPath from './bankPath/index.js'

  const shaper = writable("circle");
  $: $shape = bankPath[$shaper];

  if (typeof window !== 'undefined') {
    onMount(() => {
      cursorProps.Cursor = document.getElementById('Cursor');
      window.addEventListener('mousemove', animateCursor);
    });

    onDestroy(() => {
      window.removeEventListener('mousemove', animateCursor);
    });
  }
</script>

<style lang="scss">
  #Cursor {
    z-index: 1000;
    width: 50px;
    height: 50px;
    position: fixed;
    pointer-events: none;
  }
  button {
    margin-top: 50px;
  }
</style>

<div bind:this={cursorProps.Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px) rotate({$cursorProps.rotation}deg) scale({$cursorProps.scale});
  transition: transform {$cursorProps.transitionDuration}s linear;
  --icon-scale: {$cursorProps.iconScale};
">
  <svg viewBox="0 0 100 100">
    <path d={$shape}/>
  </svg>
</div>

<button on:mouseover={() => $shaper = 'comment'} on:mouseout={() => $shaper = 'circle'}>
  comment
</button>
<button on:mouseover={() => $shaper = 'camera'} on:mouseout={() => $shaper = 'circle'}>
  camera
</button>
