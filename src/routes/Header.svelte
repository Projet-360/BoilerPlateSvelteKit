<script>
	import { page } from '$app/stores';
	import DarkMode from '$UITools/DarkMode/index.svelte'
	import { t, locale, locales } from '$UITools/translations/index.js';
	import { logout } from '$services/authService.js';
	import { authStore } from '$stores/authStore';

	let isLoggedIn

	const handleChange = ({ currentTarget }) => {
		const { value } = currentTarget;

		document.cookie = `lang=${value} ;`;
	};

	function handleLogout() {
		logout();
	}

	authStore.subscribe(($authStore) => {
		isLoggedIn = $authStore && $authStore.token ? true : false;
	});
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
			{#if !isLoggedIn}
				<li class="CursorDezoom" aria-current={$page.url.pathname === '/signup' ? 'page' : undefined}>
					<a href="/signup">signup</a>
				</li>
				<li class="CursorDezoom" aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
					<a href="/login">login</a>
				</li>
			{/if}
		</ul>
	</nav>

	<select bind:value="{$locale}" on:change={handleChange}>
		{#each $locales as value}
		  <option value="{value}">{$t(`lang.${value}`)}</option>
		{/each}
	  </select>
	
	<DarkMode/>

	  
	{#if isLoggedIn}
		<button on:click={handleLogout}>Se déconnecter</button>
	{/if}
	  
</header>

