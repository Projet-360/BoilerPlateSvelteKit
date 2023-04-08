<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  const cursorProps = writable({ x: 0, y: 0, rotation: 0, scale: 1, clipPath: 'circle(50% at 50% 50%)', color: 'red' });

  let lerp;

  function animateLerp({ clientX, clientY }) {
    cursorProps.update((props) => {
      const { offsetWidth, offsetHeight } = lerp;
      const x = clientX - offsetWidth / 2;
      const y = clientY - offsetHeight / 2;
      return { ...props, x, y };
    });
  }

  const shapes = [
    {
      name: 'first',
      shape: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      rotation: 90,
      scale: 6,
      color: 'green',
    },
    {
      name: 'second',
      shape: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
      rotation: 0,
      scale: 6,
      color: 'blue',
    },
    {
      name: 'third',
      shape: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
      rotation: 0,
      scale: 6,
      color: 'yellow',
    },    
    {
      name: 'fourth',
      shape: 'circle(50% at 50% 50%)',
      rotation: 0,
      scale: 6,
      color: 'red',
    },
  ];

  function updateCursor(index) {
    cursorProps.update((props) => ({
      ...props,
      rotation: shapes[index].rotation,
      scale: shapes[index].scale,
      clipPath: shapes[index].shape,
      color: shapes[index].color,
    }));
  }

  function resetCursor() {
    cursorProps.update((props) => ({
      ...props,
      rotation: 0,
      scale: 1,
      clipPath: 'circle(50% at 50% 50%)',
      color: 'red',
    }));
  }

  function updateCursorByName(name) {
  const index = shapes.findIndex(shape => shape.name === name);
  if (index !== -1) {
    updateCursor(index);
  }
}

  let removeMouseMove = () => {};

  onMount(() => {
    window.addEventListener('mousemove', animateLerp);
    removeMouseMove = () => {
      window.removeEventListener('mousemove', animateLerp);
    };
  });

  onDestroy(removeMouseMove);
</script>

<style lang="scss">
  #lerp {
    height: 20px;
    width: 20px;
    background-color: red;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    pointer-events: none;
    opacity: 0;
    transition: transform .05s linear;
  }

  .box {
    height: 200px;
    width: 200px;
    background-color: black;
    position: absolute;
  }
</style>

<div
  class="box"
  style="top: calc(15% * 1); left: calc(15% * 1);"
  on:mouseover={() => updateCursorByName('first')}
  on:mouseout={resetCursor}
></div>

<div
  class="box"
  style="top: calc(15% * 2); left: calc(15% * 2);"
  on:mouseover={() => updateCursorByName('second')}
  on:mouseout={resetCursor}
></div>

<div
bind:this={lerp}
id="lerp"
style="transform: translate({$cursorProps.x}px, {$cursorProps.y}px) rotate({$cursorProps.rotation}deg) scale({$cursorProps.scale}); clip-path: {$cursorProps.clipPath}; background-color: {$cursorProps.color};"
></div>
