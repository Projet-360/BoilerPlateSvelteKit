<script lang="ts">
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Scrollbar from 'smooth-scrollbar';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scroller = document.querySelector('#smoothScoller') as HTMLElement;
		if (!scroller) {
			throw new Error('Element #smoothScoller not found');
		}

		const smoothScroll = Scrollbar.init(scroller, {
			damping: 0.1,
			delegateTo: document,
			alwaysShowTracks: true
		}) as Scrollbar;

		ScrollTrigger.scrollerProxy(scroller, {
			scrollTop(value) {
				if (arguments.length) {
					if (typeof smoothScroll.scrollTop === 'number') {
						smoothScroll.scrollTop = value ?? 0;
					}
				}
				return smoothScroll.scrollTop ?? 0;
			}
		});

		smoothScroll.addListener(ScrollTrigger.update);

		ScrollTrigger.defaults({
			scroller: scroller,
			pinType: 'transform'
		});
	});
</script>

<div class="smoothScoller" id="smoothScoller">
	<slot />
</div>
