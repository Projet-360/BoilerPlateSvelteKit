<script lang="ts">
  import { page } from '$app/stores'
  import DarkMode from '$UITools/DarkMode/index.svelte'
  import { t, locale, locales } from '$UITools/Translations/index'

  import { authStore } from '$stores/Data/AuthStore/authStore.js'
  import Logout from './Logout.svelte'
  import FullScreen from './FullScreen.svelte'

  const handleChange = (event: Event) => {
    const currentTarget = event.currentTarget as HTMLSelectElement // Cast ici si vous êtes sûr que c'est un élément select
    const { value } = currentTarget

    document.cookie = `lang=${value};`
  }

  let isAuthenticated: boolean

  authStore.subscribe(($authStore) => {
    isAuthenticated = $authStore && $authStore.isAuthenticated ? true : false
  })
</script>

<header>
  <nav>
    <ul>
      <li aria-current="{$page.url.pathname === '/' ? 'page' : undefined}">
        <a href="/">Home</a>
      </li>
      <li aria-current="{$page.url.pathname === '/about' ? 'page' : undefined}">
        <a href="/about">About</a>
      </li>
      <li
        aria-current="{$page.url.pathname === '/transitionAPI'
          ? 'page'
          : undefined}"
      >
        <a href="/transitionAPI">transitionAPI</a>
      </li>
      {#if !isAuthenticated}
        <li
          class="CursorDezoom"
          aria-current="{$page.url.pathname === '/signup' ? 'page' : undefined}"
        >
          <a href="/signup">Signup</a>
        </li>
        <li
          class="CursorDezoom"
          aria-current="{$page.url.pathname === '/login' ? 'page' : undefined}"
        >
          <a href="/login">Login</a>
        </li>
      {/if}
      {#if $authStore.role === 'user'}
        <li
          class="CursorDezoom"
          aria-current="{$page.url.pathname === '/user' ? 'page' : undefined}"
        >
          <a href="/user">user</a>
        </li>
      {/if}
      {#if $authStore.role === 'admin'}
        <li
          class="CursorDezoom"
          aria-current="{$page.url.pathname === '/dashboard'
            ? 'page'
            : undefined}"
        >
          <a href="/dashboard">dashboard</a>
        </li>
      {/if}
    </ul>
  </nav>

  <div class="left-side">
    <label for="localeSelect">{$t('data.language')}</label>
    <select
      id="localeSelect"
      name="locale"
      bind:value="{$locale}"
      on:change="{handleChange}"
    >
      {#each $locales as value}
        <option value="{value}">{$t(`data.${value}`)}</option>
      {/each}
    </select>

    <DarkMode />

    <FullScreen />

    <Logout />
  </div>
</header>
