<script>
  import { onMount, onDestroy } from 'svelte';
  import { cursorProps } from '../../store/cursorProps';
  import { animateCursor } from './CursorHelper';
  import bankPath from './bankPath/index.js'

  import { interpolate } from 'flubber';
  import { tweened } from 'svelte/motion';
	import * as eases from 'svelte/easing';

	const shape = tweened(undefined, {
		interpolate,
		easing: eases.cubicInOut,
		duration: 600
	});
	
	let selected = "circle";
	$: $shape = bankPath[selected];

  if (typeof window !== 'undefined') {
    onMount(() => {
      cursorProps.Cursor = document.getElementById('Cursor');
      window.addEventListener('mousemove', animateCursor);
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

<div bind:this={cursorProps.Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px) rotate({$cursorProps.rotation}deg) scale({$cursorProps.scale});
  transition: transform {$cursorProps.transitionDuration}s linear;
  --icon-scale: {$cursorProps.iconScale};
">
<svg viewBox="0 0 100 100">
	<path d={$shape}/>
</svg>

</div>

{#each Object.keys(bankPath) as key}
	<button on:mouseover={() => selected = key} on:mouseout={() => selected = 'circle'}>
		{key}
	</button>
{/each}

