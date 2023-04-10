<script>
  import { onMount, onDestroy } from 'svelte';
  import { cursorProps } from '../../store/store';
  import { animateCursor } from './CursorHelper'
  let Cursor;

  if (typeof window !== 'undefined') {
    onMount(() => {
      Cursor = document.getElementById('Cursor');
      window.addEventListener('mousemove', animateCursor);
    });

    onDestroy(() => {
      window.removeEventListener('mousemove', animateCursor);
    });
  }
</script>

<div
  bind:this={Cursor}
  id="Cursor"
  style="transform: 
  translate({$cursorProps.x}px, {$cursorProps.y}px) 
  rotate({$cursorProps.rotation}deg) 
  scale({$cursorProps.scale}); 
  clip-path: {$cursorProps.clipPath}; 
  background-color: {$cursorProps.color}; 
  
  transition: 
  all {$cursorProps.transitionDuration}s linear; 
  --background-image: url({$cursorProps.iconInside}); 
  --icon-scale: {$cursorProps.iconScale};"
></div>

