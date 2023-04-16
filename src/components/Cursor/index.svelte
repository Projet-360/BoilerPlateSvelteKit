<script>
  import { onMount, onDestroy } from 'svelte';
  import { cursorProps } from '../../store/cursorProps';
  import { animateCursor } from './CursorHelper';
  import { interpolate } from "polymorph-js";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let Cursor;
  let animate = false;
  let morph;
  let path01 = 0;

  let pathOptions = ['circle', 'square'];
  let currentPathIndex = 0;

  const progress = tweened(0, {
    duration: 600,
    easing: cubicOut
  });

  const animateclick = () => {
    animate = !animate;
    if (animate) {
      currentPathIndex = (currentPathIndex + 1) % pathOptions.length;
      morph = interpolate(pathOptions.map(option => `#${option}`), { precision: 1 });
      progress.set(1);
    } else {
      progress.set(0);
    }
  }

  progress.subscribe(val => (path01 = val));

  if (typeof window !== 'undefined') {
    onMount(() => {
      Cursor = document.getElementById('Cursor');
      window.addEventListener('mousemove', animateCursor);
      morph = interpolate(pathOptions.map(option => `#${option}`), { precision: 1 });
    });

    onDestroy(() => {
      window.removeEventListener('mousemove', animateCursor);
    });
  }
</script>

<style>
  #Cursor {
    z-index: 1000;
    width: 100px;
    height: 100px;
    position: fixed;
    pointer-events: none;
  }
</style>

<div bind:this={Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px) rotate({$cursorProps.rotation}deg) scale({$cursorProps.scale});
  transition: transform {$cursorProps.transitionDuration}s linear;
  --background-image: url({$cursorProps.iconInside});
  --icon-scale: {$cursorProps.iconScale};
">
  <svg viewbox="0 0 50 50" fill="#FBB43E">
    <defs>
      <path id="circle" d="M 0 25 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0" />
      <path id="square" d="M 0 0, V 50, H 50 V 0 Z" />
    </defs>
    <path d="{(morph) && morph(path01)}" />
  </svg>
</div>

<button on:mouseover={animateclick} on:mouseout={animateclick}>
  animer
</button>
