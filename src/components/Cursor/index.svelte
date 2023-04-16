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

  let pathOptions = $cursorProps.pathOptions;
  let currentPathIndex = 0;

  const progress = tweened(0, {
    duration: 600,
    easing: cubicOut
  });

  const animateclick = (path) => {
    animate = !animate;
    if (animate) {
      currentPathIndex = pathOptions.indexOf(path);
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
  button {
    margin-top: 50px;
  }
</style>

<div bind:this={Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px) rotate({$cursorProps.rotation}deg) scale({$cursorProps.scale});
  transition: transform {$cursorProps.transitionDuration}s linear;
  --background-image: url({$cursorProps.iconInside});
  --icon-scale: {$cursorProps.iconScale};
">
<svg viewbox="0 0 60 60" fill="#FBB43E">
  <defs>
    <path id="circle" d="M 0 25 a 25,25 0 1,0 50,0 a 25,25 0 1,0 -50,0" />
    <path id="camera" d="M62.102,12.59c-1.176-0.73-2.645-0.793-3.891-0.176L48,17.516V12c0-2.211-1.789-4-4-4H4  c-2.211,0-4,1.789-4,4v40c0,2.203,1.789,4,4,4h40c2.211,0,4-1.797,4-4v-5.535l10.211,5.105c0.566,0.281,1.176,0.422,1.789,0.422  c0.73,0,1.461-0.199,2.102-0.598c1.18-0.73,1.898-2.016,1.898-3.402v-32C64,14.605,63.281,13.32,62.102,12.59z"/>
    <path  id="comment" d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v12  c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H60c2.211,0,4-1.789,4-4  V4C64,1.789,62.211,0,60,0z"/>
  </defs>
  <path d="{(morph) && morph(path01)}" />
</svg>
</div>

<button on:mouseover={() => animateclick('camera')} on:mouseout={() => animateclick('circle')}>
camera
</button>
<button on:mouseover={() => animateclick('comment')} on:mouseout={() => animateclick('circle')}>
comment
</button>
