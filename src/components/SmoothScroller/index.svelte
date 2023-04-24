<script>
	// Importer la bibliothèque GSAP
	import gsap from 'gsap';
	// Importer le plugin ScrollTrigger de GSAP
	import ScrollTrigger from "gsap/dist/ScrollTrigger";
	// Importer la bibliothèque Smooth-scrollbar
	import Scrollbar from 'smooth-scrollbar';

	// Importer la fonction onMount de Svelte
	import { onMount } from 'svelte';

	// Exécuter une fonction lors du montage du composant
	onMount(() => {
		// Enregistrer le plugin ScrollTrigger avec GSAP
		gsap.registerPlugin(ScrollTrigger);

		// Sélectionner l'élément ayant l'ID "smoothScoller"
		const scroller = document.querySelector('#smoothScoller');

		// Initialiser Smooth-scrollbar sur l'élément sélectionné avec des options spécifiques
		const smoothScroll = Scrollbar.init(scroller, {
			damping: 0.1,
			delegateTo: document,
			alwaysShowTracks: true,
			//continuousScrolling: false
		});

		// Configurer le proxy ScrollTrigger pour utiliser Smooth-scrollbar
		ScrollTrigger.scrollerProxy(scroller, {
			scrollTop(value) {
				if (arguments.length) {
					smoothScroll.scrollTop = value;
				}
				return smoothScroll.scrollTop;
			}
		});

		// Mettre à jour ScrollTrigger lors de l'événement "scroll" de Smooth-scrollbar
		smoothScroll.addListener(ScrollTrigger.update);

		// Configurer les valeurs par défaut pour ScrollTrigger
		ScrollTrigger.defaults({
			scroller: scroller,
			pinType: 'transform'
		});
	})
</script>

<div id="smoothScoller">
	<slot />
</div>

<style>
	#smoothScoller {
		height: 100%;
		overflow: hidden;
		position: relative;
	}
</style>