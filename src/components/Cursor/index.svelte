<script>
  import { onMount, onDestroy } from 'svelte';
  import { cursorProps, shaperSVG } from '../../store/cursorStore';
  import { animateCursor, shape, changeCursorShape, resetCursorShape } from './CursorHelper';
  import bankPath from './bankPath/index.js'
   
  $: $shape = bankPath[$shaperSVG];

  onMount(() => {
    if (typeof window !== 'undefined') {
      cursorProps.Cursor = document.getElementById('Cursor');
      window.addEventListener('mousemove', animateCursor);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', animateCursor);
    }
  });
</script>

<style lang="scss">
  #Cursor {
    z-index: 1000;
    width: 150px;
    height: 150px;
    position: fixed;
    pointer-events: none;
  }
  button {
    margin-top: 50px;
  }
</style>

<div bind:this={cursorProps.Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px);
  transition: transform {$cursorProps.transitionDuration}s linear;
">
  <svg viewBox="0 0 100 100">
    <path d={$shape}/>
  </svg>
</div>

<button on:mouseover={() => changeCursorShape('comment')} on:mouseout={resetCursorShape}>
  comment
</button>
