<script>
    import { onMount } from "svelte";

    let lerp;

    onMount(() => {
        lerp = document.getElementById('lerp');
    });

    function animateLerp(e) {
        let x = e.clientX - lerp.offsetWidth / 2;
        let y = e.clientY - lerp.offsetHeight / 2;

        lerp.style.transform = `translate(${x}px, ${y}px)`;
    }

    window.addEventListener('mousemove', animateLerp);
</script>

<style lang="scss">
    #lerp {
        height: 50px;
        width: 50px;
        background-color: red;
        border-radius: 50%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: opacity .5s ease;

        @include ccc;
    }
</style>

<div id="lerp">
</div>