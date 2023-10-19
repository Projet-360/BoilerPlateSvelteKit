<script lang="ts">
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	import '@splidejs/svelte-splide/css/core';
	import github from '$lib/images/github.svg';

	const splideOptions = {
		type: 'loop',
		gap: '10px',
		drag: 'free',
		arrows: false,
		pagination: false,
		perPage: 3,
		autoScroll: {
			pauseOnHover: true,
			pauseOnFocus: true,
			rewind: false,
			speed: 1
		}
	};
</script>

<Splide options={splideOptions} extensions={{ AutoScroll }} aria-label="My Favorite Images">
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" width="50" height="50" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" width="50" height="50" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" width="50" height="50" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" width="50" height="50" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" width="50" height="50" />
	</SplideSlide>
	<SplideSlide>
		<img src={github} alt="Logo GitHub" class="imgcarousel" width="50" height="50" />
	</SplideSlide>
</Splide>
