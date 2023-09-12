<script>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { writable } from 'svelte/store';
  import { interpolate } from 'flubber';
  
  import bankPath from './bankPath/index.js';
  import { shapeStore } from '$stores/shapeStore.js';
  import { cursorStore } from '$stores/cursorStore.js';
  import { animateCursor, updateCursorByName, resetCursor, hoverable } from './cursorHelpers.js';

  const changeShaper = shapeStore.set;
  let cursorElement;

  let animationFrameId;
  let throttledMove;

  function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }
  // Initialise and clean up event listeners
  if (typeof window !== 'undefined') {
    onMount(() => {
        cursorElement = document.getElementById('Cursor');
        initEventListeners(cursorElement);
    });

    onDestroy(() => {
        removeEventListeners(cursorElement);
    });
  }
  
  export function initEventListeners(Cursor) {
      throttledMove = throttle((e) => animateCursor(Cursor, e), 16);
      cursorStore.update(props => ({ ...props, Cursor }));
      window.addEventListener('mousemove', throttledMove);
  }

  export function removeEventListeners() {
      window.removeEventListener('mousemove', throttledMove);
  }

  const shape = tweened(bankPath['circle'], {
    duration: 150,
    easing: cubicInOut,
    interpolate: interpolate,
  });

  $: shape.set(bankPath[$shapeStore]);
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

<div bind:this={cursorElement} id="Cursor" style="
  transform: translate({$cursorStore.x}px, {$cursorStore.y}px);
  transition: transform {$cursorStore.transitionDuration}s linear;
  --icon-scale: {$cursorStore.iconScale};
  ">
  <svg viewBox="0 0 100 100" style="
  transform: scale({$cursorStore.scaleSvg});
  transition: transform {$cursorStore.transitionDurationSvg}s linear;
  ">
    {#if $shape}
      <path d={$shape} />
    {/if}
  </svg>
</div>
