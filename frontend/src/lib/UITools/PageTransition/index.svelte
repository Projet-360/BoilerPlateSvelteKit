<script lang="ts">
	import { onDestroy } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { ressourceToValide, visible } from '$stores/loaderStore';
	import smoothScrollStore from '$stores/scrollStore';
	import { animateOut, animateIn } from './pages';
	import { afterUpdate } from 'svelte';
	import type Scrollbar from 'smooth-scrollbar';

	let layoutContainer: HTMLElement;
	let smoothScroll: Scrollbar | null;
	let currentUrl: string | undefined;
	let targetUrl: string | undefined;
	let classUrlFrom: string | undefined | null;
	let classUrlto: string | undefined | null;

	const unsubscribe = smoothScrollStore.subscribe(($smoothScroll: any) => {
		smoothScroll = $smoothScroll;
	});

	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});

	onNavigate(async (navigation) => {
		currentUrl = navigation.from?.url?.href;
		targetUrl = navigation.to?.url?.href;
		classUrlFrom = navigation.from?.route?.id;
		classUrlto = navigation.to?.route?.id;

		// Vérifier si l'une des URLs est indéfinie ou si elles sont identiques
		if (!currentUrl || !targetUrl || currentUrl === targetUrl) {
			return;
		}

		if (classUrlFrom === '/') {
			classUrlFrom = 'home';
		}
		if (classUrlto === '/') {
			classUrlto = 'home';
		}

		classUrlFrom = classUrlFrom?.replace(/\//g, '');
		classUrlto = classUrlto?.replace(/\//g, '');

		// Démarrer l'animation de sortie
		await animateOut(classUrlFrom, layoutContainer);
		ressourceToValide.set(true);

		await new Promise<void>((resolve) => {
			const unsubscribe = visible.subscribe(($visible) => {
				if (!$visible) {
					resolve();
				}
			});

			// Nettoyage de l'abonnement
			return () => {
				unsubscribe();
			};
		});

		if (smoothScroll) {
			smoothScroll.scrollTo(0, 0, 500);
		}
	});

	afterUpdate(() => {
		if ($visible) {
			animateIn(classUrlto, layoutContainer);
		}
	});
</script>

<div class="layoutContainer" bind:this={layoutContainer}>
	<slot />
</div>
