<script>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { writable } from 'svelte/store';
  import { interpolate } from 'flubber';
  
  import bankPath from './bankPath/index.js';
  import animations from './animations.js';
  import {shapeStore} from './../../stores/shapeStore.js';
  import {cursorStore} from './../../stores/cursorStore.js';


  const changeShaper = shapeStore.set;
  let animationFrameId;
  
  const animateCursor = ({ clientX, clientY }) => {
    const { Cursor } = cursorStore;
    if (!Cursor) return;
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      cursorStore.update(({ x, y }) => ({
        x: clientX - Cursor.offsetWidth / 2,
        y: clientY - Cursor.offsetHeight / 2,
      }));
    });
  };

  export const updateCursorByName = name => {
    const animation = animations.find(animation => animation.name === name);
    if (animation) {
      const { transitionDuration, shaperForm, scaleSvg, transitionDurationSvg } = animation;
      cursorStore.update(props => ({
        transitionDuration,
        transitionDurationSvg,
        scaleSvg,
      }));
      changeShaper(shaperForm);
    }
  };

  export const resetCursor = () => {
    cursorStore.update(props => ({
      ...props,
      transitionDuration: 0.07,
      transitionDurationSvg: 0.07,
      scaleSvg: 1,
    }));
    changeShaper('circle');
  };

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
  function initEventListeners() {
    cursorStore.update(props => ({
      ...props,
      Cursor: document.getElementById('Cursor'),
    }));
    window.addEventListener('mousemove', animateCursor);
  }

  // Remove event listeners
  function removeEventListeners() {
    window.removeEventListener('mousemove', animateCursor);
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
    node.addEventListener('mouseover', () => updateCursorByName(animationName));
    node.addEventListener('focus', () => updateCursorByName(animationName));
    node.addEventListener('blur', () => updateCursorByName(animationName));
    node.addEventListener('mouseout', resetCursor);

    return {
        destroy() {
            node.removeEventListener('mouseover', () => updateCursorByName(animationName));
            node.removeEventListener('focus', () => updateCursorByName(animationName));
            node.removeEventListener('blur', () => updateCursorByName(animationName));
            node.removeEventListener('mouseout', resetCursor);
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