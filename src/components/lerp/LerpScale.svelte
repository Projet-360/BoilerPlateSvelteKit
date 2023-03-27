<script>
  export let targetClass;
  let lerp;

  function handleHover(event) {
    if (!lerp) return;
    if (event.target.classList.contains(targetClass)) {
      lerp.classList.add('scale');
    } else {
      lerp.classList.remove('scale');
    }
  }

  function onMount() {
    lerp = document.getElementById('lerp');
    if (!lerp) return;
    lerp.addEventListener('mouseenter', handleHover);
    lerp.addEventListener('mouseleave', handleHover);
  }

  function onDestroy() {
    if (lerp) {
      lerp.removeEventListener('mouseenter', handleHover);
      lerp.removeEventListener('mouseleave', handleHover);
    }
  }
  
  onMount(onMount);
  
  onDestroy(onDestroy);
</script>

<style>
  #lerp.scale {
    transform: scale(0.5);
  }
</style>