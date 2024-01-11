<script lang="ts">
	import { onMount } from 'svelte';
	import { domLoader, HandleVisible, visible } from '$stores/loaderStore';

	let preloader: HTMLElement;

	$: if ($domLoader) {
		HandleVisible.set(true);
	}

	$: if (!$domLoader) {
		HandleVisible.set(false);
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
