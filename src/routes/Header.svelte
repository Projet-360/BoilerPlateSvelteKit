<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import Switch from '../components/Switch/index.svelte'
	let multiValue;
</script>
<header>
	<nav>
		<ul>
			<li class="test1" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="test1" href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>

			<li class="CursorDezoom" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">test</a>
			</li>
		</ul>
	</nav>

	<Switch bind:value={multiValue} label="Choose a theme" design="multi" options={['light', 'dark']} fontSize={12}/>
	<p>
		Switch is {multiValue}
	</p>
	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" width="30" height="30"/>
		</a>
	</div>
</header>

