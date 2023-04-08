<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { animations } from './animations';
  let lerp;

  const cursorProps = writable({
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    clipPath: 'circle(50% at 50% 50%)',
    color: 'red'
  });


  const animateLerp = ({ clientX, clientY }) => {
    if (!lerp) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - lerp.offsetWidth / 2,
      y: clientY - lerp.offsetHeight / 2
    }));
  }

  const updateCursorByName = name => {
    const index = animations.findIndex(shape => shape.name === name);
    if (index !== -1) {
      const { rotation, scale, shape, color } = animations[index];
      cursorProps.update(props => ({
        ...props,
        rotation,
        scale,
        clipPath: shape,
        color
      }));
    }
  }

  const resetCursor = () => {
    cursorProps.update(props => ({
      ...props,
      rotation: 0,
      scale: 1,
      clipPath: 'circle(50% at 50% 50%)',
      color: 'red'
    }));
  }

  onMount(() => {
    lerp = document.getElementById('lerp');
    window.addEventListener('mousemove', animateLerp);
    onDestroy(() => {
      window.removeEventListener('mousemove', animateLerp);
    });
  });
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
  bind:this={lerp}
  id="lerp"
  style="transform: translate({$cursorProps.x}px, {$cursorProps.y}px) rotate({$cursorProps.rotation}deg) scale({$cursorProps.scale}); clip-path: {$cursorProps.clipPath}; background-color: {$cursorProps.color};"
></div>

<div class="box" style="top: calc(15% * 3); left: calc(15% * 3);"
  on:mouseover={() => updateCursorByName('third')}
  on:mouseout={resetCursor}></div>

<div class="box" style="top: calc(15% * 4); left: calc(15% * 4);"
  on:mouseover={() => updateCursorByName('fourth')}
  on:mouseout={resetCursor}></div>
