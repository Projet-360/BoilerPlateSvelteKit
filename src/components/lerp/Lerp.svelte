<script>
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  let lerp;
  let durationAnimation = 0.2

  const cursorProps = writable({
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    clipPath: 'circle(50% at 50% 50%)',
    color: 'red',
    transitionDuration: 0,
    iconInside: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg',
    iconScale: 0
  });

  export const animations = [
  {
    name: 'first',
    animation: 'circle(50% at 50% 50%)',
    rotation: 0,
    scale: 6,
    color: 'red',
    transitionDuration: 0.05,
    iconInside:'https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg',
    iconScale:'.5',
  },
];

  const animateLerp = ({ clientX, clientY }) => {
    if (!lerp) return;
    cursorProps.update(props => ({
      ...props,
      x: clientX - lerp.offsetWidth / 2,
      y: clientY - lerp.offsetHeight / 2
    }));
  }

  const updateCursorByName = name => {
    const index = animations.findIndex(animation => animation.name === name);
    if (index !== -1) {
      const { rotation, scale, animation, color, transitionDuration, iconInside, iconScale } = animations[index];
      cursorProps.update(props => ({
        ...props,
        rotation,
        scale,
        clipPath: animation,
        color,
        transitionDuration,
        iconInside,
        iconScale,
      }));
    }
  }

  const resetCursor = () => {
    cursorProps.update(props => ({
      ...props,
      rotation: 0,
      scale: 1,
      clipPath: 'circle(50% at 50% 50%)',
      color: 'red',
      transitionDuration: 0.05,
      iconInside: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/SVG_Simple_Icon.svg',
      iconScale: 0
    }));
  }

  if (typeof window !== 'undefined') {
    onMount(() => {
      lerp = document.getElementById('lerp');
      window.addEventListener('mousemove', animateLerp);
    });

    onDestroy(() => {
      window.removeEventListener('mousemove', animateLerp);
    });
  }
</script>

<div
  bind:this={lerp}
  id="lerp"
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

<div class="box"
  on:mouseover={() => updateCursorByName('first')}
  on:mouseout={resetCursor}></div>