<script>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { writable } from 'svelte/store';
  import { interpolate } from 'flubber';
  
  import bankPath from './bankPath/index.js';
  import animations from './animations.js';
  import { shapeStore } from './../../stores/shapeStore.js';
  import { cursorStore } from './../../stores/cursorStore.js';
  import { animateCursor, updateCursorByName, resetCursor } from './cursorHelpers.js';

  const changeShaper = shapeStore.set;

  let animationFrameId;

  // Initialise and clean up event listeners
  if (typeof window !== 'undefined') {
    onMount(() => {
      initEventListeners();
    });

    onDestroy(() => {
      removeEventListeners();
    });
  }

  // Add event listeners

  if (typeof window !== 'undefined') {
    onMount(() => {
        initEventListeners(document.getElementById('Cursor'));
    });

    onDestroy(() => {
        removeEventListeners(document.getElementById('Cursor'));
    });
}
  
  export function initEventListeners(Cursor) {
      cursorStore.update(props => ({ ...props, Cursor }));
      window.addEventListener('mousemove', (e) => animateCursor(Cursor, e));
  }

  export function removeEventListeners(Cursor) {
      window.removeEventListener('mousemove', (e) => animateCursor(Cursor, e));
  }


  const shape = tweened(bankPath['circle'], {
    duration: 150,
    easing: cubicInOut,
    interpolate: interpolate,
  });

  $: {
    shape.set(bankPath[$shapeStore]);
  }


  export function hoverable(node, animationName) {
      node.addEventListener('mouseover', () => updateCursorByName(animationName, shapeStore.set));
      node.addEventListener('focus', () => updateCursorByName(animationName, shapeStore.set));
      node.addEventListener('blur', () => updateCursorByName(animationName, shapeStore.set));
      node.addEventListener('mouseout', () => resetCursor(shapeStore.set));

      return {
          destroy() {
              node.removeEventListener('mouseover', () => updateCursorByName(animationName, shapeStore.set));
              node.removeEventListener('focus', () => updateCursorByName(animationName, shapeStore.set));
              node.removeEventListener('blur', () => updateCursorByName(animationName, shapeStore.set));
              node.removeEventListener('mouseout', () => resetCursor(shapeStore.set));
          }
      };
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

<div bind:this={cursorStore.Cursor} id="Cursor" style="
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

<div use:hoverable={"first"}>Mon div avec hover</div>