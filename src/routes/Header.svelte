<script>
	import { page } from '$app/stores';
	import DarkMode from '$components/DarkMode/index.svelte'
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

	<!-- <Translate/>
	<h1>exemple translate: :</h1>
	<h3>{languageStore.translate('welcome')}</h3>
	<h3>{languageStore.translate('logout')}</h3> -->
	
	<h1>exemple darkMode: :</h1>
	<DarkMode/>
</header>

