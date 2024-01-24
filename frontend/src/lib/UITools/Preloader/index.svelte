<script lang="ts">
	import { onMount } from 'svelte';
	import { domLoader, ressourceToValide, visible } from '$stores/loaderStore';

	let preloader: HTMLElement;

	$: if ($domLoader) {
		ressourceToValide.set(true);
	}

	$: if (!$domLoader) {
		ressourceToValide.set(false);
	}

	onMount(async () => {
		await new Promise<void>((resolve) => {
			if (document.readyState === 'complete') {
				resolve();
			} else {
				window.addEventListener('load', () => resolve());
			}
		});
		domLoader.set(false);
	});
</script>

{#if !$visible}
	<div class="preloader" bind:this={preloader}>
		<div class="inloader"></div>
	</div>
{/if}
