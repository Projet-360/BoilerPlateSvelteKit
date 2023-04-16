<script>
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	import Scrollbar from 'smooth-scrollbar';

	import {
		onMount
	} from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger)

		const scroller = document.querySelector('#smoothScoller');

		const smoothScroll = Scrollbar.init(scroller, {
			damping: 0.1,
			delegateTo: document,
			alwaysShowTracks: true
		})

		ScrollTrigger.scrollerProxy(scroller, {
			scrollTop(value) {
				if (arguments.length) {
					smoothScroll.scrollTop = value;
				}
				return smoothScroll.scrollTop
			}
		})

		smoothScroll.addListener(ScrollTrigger.update);

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