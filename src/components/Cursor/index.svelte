<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import bankPath from './bankPath/index.js'
  import { interpolate } from 'flubber';
  import { tweened } from 'svelte/motion';
  import * as eases from 'svelte/easing';
  import animations from './animations.js';
  
  const defaultCursorProps = {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 3,
    color: 'red',
    transitionDuration: 0,
    iconScale: 0,
  };
  
  const shaper = writable("circle");
  $: $shape = bankPath[$shaper];
  
  export const shape = tweened(undefined, {
    interpolate,
    easing: eases.cubicInOut,
    duration: 150
  });
  
  let Cursor;
  export const cursorProps = writable(defaultCursorProps);
  
  export const animateCursor = ({ clientX, clientY }) => {
    if (!Cursor) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - Cursor.offsetWidth / 2,
      y: clientY - Cursor.offsetHeight / 2
    }));
  }

export const setAnimationByName = (name) => {
  console.log(animations);
  animations.find(a => a.name === name);
  console.log(a);
  cursorProps.set({
    ...defaultCursorProps,
    ...animation
  });
  shaper.set(animation.pathOptions[0]);  // Met à jour la première forme dans pathOptions
};

  
  if (typeof window !== 'undefined') {
    onMount(() => {
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

<div bind:this={Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px) rotate({$cursorProps.rotation}deg) scale({$cursorProps.scale});
  transition: transform {$cursorProps.transitionDuration}s linear;
  --icon-scale: {$cursorProps.iconScale};
  ">
  <svg viewBox="0 0 100 100">
    <path d={$shape}/>
  </svg>
</div>

<button on:mouseover={() => setAnimationByName('first')} on:mouseout={() => setAnimationByName('second')}>
  First Animation
</button>
<button on:mouseover={() => setAnimationByName('second')} on:mouseout={() => setAnimationByName('first')}>
  Second Animation
</button>