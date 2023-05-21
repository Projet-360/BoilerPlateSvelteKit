<script>
  import onMount from 'svelte/onMount';
  import onDestroy from 'svelte/onDestroy';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import { writable } from 'svelte/store';

  import animations from './animations.js';
  import bankPath from './bankPath/index.js';

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

  export const animCursor = (animation) => {
    return {
      onmouseover: () => updateCursorByName(animation),
      onfocus: () => updateCursorByName(animation),
      onblur: () => updateCursorByName(animation),
      onmouseout: resetCursor
    };
  };

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
        ...props,
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
  .cursor {
    z-index: 1000;
    width: 50px;
    height: 50px;
    position: fixed;
    pointer-events: none;
    transform: translate({$cursorProps.x}px, {$cursorProps.y}px);
    transition: transform {$cursorProps.transitionDuration}s linear;
  }

  button {
    margin-top: 50px;
  }
</style>

<div
  bind:this={cursorProps.Cursor}
  id="Cursor"
  class="cursor"
>
  <svg viewBox="0 0 100 100">
    <path d={bankPathShape} />
  </svg>
</div>

<button {...animCursor('second')} >
  comment
</button>