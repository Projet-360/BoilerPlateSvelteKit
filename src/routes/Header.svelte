<script>
	import { page } from '$app/stores';
	import DarkMode from '$UITools/DarkMode/index.svelte'
	import { t, locale, locales } from '$UITools/translations/index.js';

	const handleChange = ({ currentTarget }) => {
		const { value } = currentTarget;

		document.cookie = `lang=${value} ;`;
	};
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

	<h1>exemple translate: :</h1>
	<select bind:value="{$locale}" on:change={handleChange}>
		{#each $locales as value}
		  <option value="{value}">{$t(`lang.${value}`)}</option>
		{/each}
	  </select>
	
	<h1>exemple darkMode: :</h1>
	<DarkMode/>
</header>

