<script>
	import LerpContent from './LerpContent.svelte';
    import { onMount } from "svelte";

    onMount(async () => {
        const lerp = document.getElementById('lerp')

        const animateLerp = (e, lerpInteraction) => {
            let x = e.clientX - lerp.offsetWidth / 2
            let y = e.clientY - lerp.offsetHeight / 2
            

            const keyframes = {
                transform: `
                translate(${x}px, ${y}px) 
                scale(${lerpInteraction ? .2 : 1 })
                `
            }

            lerp.animate(keyframes, {
                duration: 800,
                fill: "forwards"
            })
        }

        window.onmousemove = e => {
            const lerpInteract = e.target.closest('.test1')
            const lerpInteraction = lerpInteract !== null

            animateLerp(e, lerpInteraction)
        }
	});
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
    <LerpContent/>
</div>
