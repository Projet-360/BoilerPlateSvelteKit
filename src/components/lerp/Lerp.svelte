<script>
  import { onMount } from 'svelte';

  let lerp;
  let box;
  let rotation = 0;
  let scale = 1;
  let path
  let color

  function animateLerp({ clientX, clientY }) {
    const { offsetWidth, offsetHeight } = lerp;
    const x = clientX - offsetWidth / 2;
    const y = clientY - offsetHeight / 2;
    lerp.style.setProperty(
      'transform', `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
    );
    lerp.style.setProperty(
      'transform', `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
    );

    lerp.style.setProperty(
      'transition', `transform .04s linear`
      );
    }

    function rotate(deg) {
      rotation = deg;
    }

    function lerpScale(size) {
      scale = size;
    }

    function Parallelogram() {
      lerp.style.setProperty(
        'clip-path', `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`
      );
    }

    function Message() {
      lerp.style.setProperty(
        'clip-path', `polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)`
      );
    }

    function Trapezoid() {
      lerp.style.setProperty(
        'clip-path', `polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)`
      );
    }

    
    function normal() {
      rotation = 0;
      scale = 1;
      lerp.style.setProperty(
        'clip-path', `circle(50% at 50% 50%)`
      );
    }

    onMount(() => {
      lerp = document.getElementById('lerp');
      box = document.getElementById('box');
      window.addEventListener('mousemove', animateLerp);
    });
</script>

<style lang='scss'>
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
    clip-path: circle(50% at 50% 50%);
  }

  #box {
    height: 200px;
    width: 200px;
    background-color: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:nth-of-type(2) {
      top: 33% !important;
      left: 33% !important;
    }
    &:nth-of-type(3) {
      top: 73% !important;
      left: 73% !important;
    }
  }
</style>

<div id="box" 
  on:mouseover={() => {
    lerpScale(6)
    rotate(90)

    Parallelogram()
    }} 
  on:mouseout={normal}>
</div>

<div id="box" 
  on:mouseover={() => {
    lerpScale(6)
    Message()
    }} 

  on:mouseout={normal}>
</div>

<div id="box" 
  on:mouseover={() => {
    lerpScale(6)
    Trapezoid()
    }} 

  on:mouseout={normal}>
</div>


<div id="lerp">

</div>