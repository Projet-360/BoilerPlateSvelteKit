<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';
	import { visible, HandleVisible, isInitialLoading, domLoader } from '$stores/loaderStore';

	let loader: HTMLElement;
	let observer: IntersectionObserver;
	let animationInComplete = false;

	onMount(() => {
		// Initialisation de l'Intersection Observer
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateIn();
						observer.unobserve(loader); // Arrête d'observer après la première animation
					}
				});
			},
			{
				threshold: 0.5 // Déclenche l'observer quand 50% de l'élément est visible
			}
		);

		observer.observe(loader); // Commence à observer l'élément loader
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect(); // Nettoie l'observer lors de la destruction du composant
		}
	});

	function animateIn() {
		if (!loader) return;
		gsap.fromTo(
			loader.querySelectorAll('.letter'),
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.2,
				stagger: 0.1,
				ease: 'power2.out',
				onComplete: () => {
					animationInComplete = true; // Animation d'entrée terminée
					domLoader.set(false);
				}
			}
		);
	}

	function animateOut() {
		if (!loader) return;
		gsap.to(loader.querySelectorAll('.letter'), {
			opacity: 0,
			y: -20,
			duration: 0.2,
			stagger: 0.1,
			ease: 'power2.in',
			onComplete: () => {
				HandleVisible.set(false);
				isInitialLoading.set(false);
			}
		});
	}

	$: if (animationInComplete && !$domLoader) {
		setTimeout(animateOut, 500);
	}
</script>

{#if !$visible && $isInitialLoading}
	<div class="loader" bind:this={loader}>
		{#each Array.from('Bienvenue') as letter, i (letter + i)}
			<span class="letter">{letter}</span>
		{/each}
	</div>
{/if}
