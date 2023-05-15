<script>
  import { onMount, onDestroy } from 'svelte';
  import { cursorProps, shaperSVG } from '../../store/cursorStore';
  import { animateCursor, shape } from './CursorHelper';
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
  * {
    cursor: none;
  }

  #Cursor {
    z-index: 1000;
    width: 40px;
    position: fixed;
    pointer-events: none;
  }

  .cursorSvg {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
</style>

<div bind:this={cursorProps.Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px)
">
  <div class="cursorSvg" style="
  transition: all {$cursorProps.durationTransitionCursorSvg}s ease;
  transform: scale({$cursorProps.scale});
  ">
    <svg viewBox="0 0 100 100">
      <path d={$shape}/>
    </svg>
  </div>
</div>