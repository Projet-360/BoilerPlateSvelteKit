<script>
  //https://glitch.com/edit/#!/citrine-agreeable-girdle?path=src%2Fcomponents%2Fapp.html%3A1%3A0
  //https://svelte.dev/repl/a6268cfc4685416998c6e64516546acd?version=3.58.0
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
  z-index: '1000';
  
  transition: 
  transform {$cursorProps.transitionDuration}s linear; 
  --background-image: url({$cursorProps.iconInside}); 
  --icon-scale: {$cursorProps.iconScale};"
>
</div>

