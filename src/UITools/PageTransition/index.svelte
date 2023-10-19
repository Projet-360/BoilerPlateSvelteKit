<script lang="ts">
	import { fly } from 'svelte/transition';

	interface AnimationOptions {
		x?: number;
		y?: number;
		duration: number;
		delay?: number;
	}

	export let pathname = '';

	let inAnimation: AnimationOptions;
	let outAnimation: AnimationOptions;

	$: {
		switch (pathname) {
			case '/':
				inAnimation = { x: -300, duration: 500, delay: 500 };
				outAnimation = { x: 100, duration: 500 };
				break;
			case '/about':
				inAnimation = { y: -100, duration: 500, delay: 500 };
				outAnimation = { y: 100, duration: 500 };
				break;
			default:
				inAnimation = { x: -10, duration: 500, delay: 500 };
				outAnimation = { x: 5, duration: 500 };
				break;
		}
	}
</script>

{#key pathname}
	<div class="pageTransition" in:fly={inAnimation} out:fly={outAnimation}>
		<slot />
	</div>
{/key}
