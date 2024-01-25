<script lang="ts">
	import { onDestroy, afterUpdate, beforeUpdate } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import Preloader from '$UITools/PageTransition/Preloader/index.svelte';
	import smoothScrollStore from '$stores/scrollStore';
	import { animateOut, animateIn } from './pages';
	import type Scrollbar from 'smooth-scrollbar';
	import { setTransitionLoader, transitionLoader } from '$stores/transitionLoaderStore';

	let layoutContainer: HTMLElement;
	let smoothScroll: Scrollbar | null;
	let currentUrl: string | undefined;
	let targetUrl: string | undefined;
	let classUrlFrom: string | undefined | null;
	let classUrlto: string | undefined | null;

	const smoothScrollUnsubscribe = smoothScrollStore.subscribe(($smoothScroll: any) => {
		smoothScroll = $smoothScroll;
	});

	onDestroy(() => {
		smoothScrollUnsubscribe(); // Nettoyage correct
	});

	onNavigate(async (navigation) => {
		console.log('onNavigate');

		currentUrl = navigation.from?.url?.href;
		targetUrl = navigation.to?.url?.href;
		classUrlFrom = navigation.from?.route?.id;
		classUrlto = navigation.to?.route?.id;

		console.log('currentUrl', currentUrl);
		console.log('targetUrl', targetUrl);
		console.log('classUrlFrom', classUrlFrom);
		console.log('classUrlto', classUrlto);

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

		if (smoothScroll) {
			smoothScroll.scrollTo(0, 0, 500);
		}

		// Activer le transitionLoader avant l'animation de sortie
		setTransitionLoader(true);

		let transitionLoaderUnsubscribe: () => void = () => {};

		// S'abonner à transitionLoader
		await new Promise<void>((resolve) => {
			transitionLoaderUnsubscribe = transitionLoader.subscribe(($transitionLoader) => {
				if ($transitionLoader) {
					resolve();
				}
			});
		});

		// Assurez-vous que la fonction de désabonnement est définie avant de l'appeler
		if (typeof transitionLoaderUnsubscribe === 'function') {
			transitionLoaderUnsubscribe();
		}
	});

	afterUpdate(() => {
		if (!$transitionLoader) {
			animateIn(classUrlto, layoutContainer);
		}
	});
</script>

<div class="layoutContainer" bind:this={layoutContainer}>
	{#if $transitionLoader}
		<Preloader />
	{/if}
	<slot />
</div>
