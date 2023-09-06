<script>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { writable } from 'svelte/store';
  import { interpolate } from 'flubber';
  
  import bankPath from './bankPath/index.js';

const animations = [
  {
    name: 'first',
    rotation: 0,
    scale: 1,
    color: 'red',
    transitionDuration: 2,
    iconInside: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg',
    iconScale: 0,
    pathOptions: ['circle', 'camera']
  },
  {
    name: 'second',
    rotation: 0,
    scale: 1,
    color: 'red',
    transitionDuration: 3,
    iconInside: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg',
    iconScale: 0,
    pathOptions: ['circle', 'comment']
  },
];

  export const cursorProps = writable({
    Cursor: undefined,
    x: 0,
    y: 0,
    transitionDuration: 0,
    shaper: 'circle',
  });

  export const shaper = writable('circle');
  export const shape = tweened(undefined, {
    interpolate,
    easing: cubicInOut,
    duration: 150,
  });

  export const changeShaper = shaper.set;

  let animationFrameId;


  export const animateCursor = ({ clientX, clientY }) => {
    const { Cursor } = cursorProps;
    if (!Cursor) return;
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      cursorProps.update(({ x, y }) => ({
        x: clientX - Cursor.offsetWidth / 2,
        y: clientY - Cursor.offsetHeight / 2,
      }));
    });
  };

  export const updateCursorByName = name => {
    const animation = animations.find(animation => animation.name === name);
    if (animation) {
      const { transitionDuration, shaperForm } = animation;
      cursorProps.update(props => ({
        transitionDuration: 0,
        shaper: 'circle',
        transitionDuration,
      }));
      changeShaper(shaperForm);
    }
  };

  export const resetCursor = () => {
    cursorProps.update(props => ({
      ...props,
      transitionDuration: 0.07,
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
    cursorProps.update(props => ({
      ...props,
      Cursor: document.getElementById('Cursor'),
    }));
    window.addEventListener('mousemove', animateCursor);
  }

  // Remove event listeners
  function removeEventListeners() {
    window.removeEventListener('mousemove', animateCursor);
  }

  let bankPathShape;
  $: {
    bankPathShape = bankPath[$shaper];
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

<div bind:this={cursorProps.Cursor} id="Cursor" style="
  transform: translate({$cursorProps.x}px, {$cursorProps.y}px);
  transition: transform {$cursorProps.transitionDuration}s linear;
  --icon-scale: {$cursorProps.iconScale};
">
  <svg viewBox="0 0 100 100">
  <path d={bankPathShape} />
  </svg>
</div>

<button 
      on:mouseover={() => updateCursorByName('first')}
      on:focus={() => updateCursorByName('first')}
      on:blur={() => updateCursorByName('first')}
      on:mouseout={resetCursor}
 >
  comment
</button>

<button 
      on:mouseover={() => updateCursorByName('second')}
      on:focus={() => updateCursorByName('second')}
      on:blur={() => updateCursorByName('second')}
      on:mouseout={resetCursor}
 >
  comment
</button>