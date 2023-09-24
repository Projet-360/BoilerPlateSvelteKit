<script>
  import { page } from "$app/stores";
  import DarkMode from "$UITools/DarkMode/index.svelte";
  import { t, locale, locales } from "$UITools/translations/index";

  import { authStore } from "$stores/authStore";
  import Logout from "$components/Logout.svelte";

  const handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    document.cookie = `lang=${value} ;`;
  };

  let isAuthenticated;

  authStore.subscribe(($authStore) => {
    isAuthenticated = $authStore && $authStore.token ? true : false;
  });
</script>

<header>
  <nav>
    <ul>
      <li
        class="test1"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
      >
        <a class="test1" href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
      {#if !isAuthenticated}
        <li
          class="CursorDezoom"
          aria-current={$page.url.pathname === "/signup" ? "page" : undefined}
        >
          <a href="/signup">Signup</a>
        </li>
        <li
          class="CursorDezoom"
          aria-current={$page.url.pathname === "/login" ? "page" : undefined}
        >
          <a href="/login">Login</a>
        </li>
      {/if}
    </ul>
  </nav>

  <div class="left-side">
    <select
      id="localeSelect"
      name="locale"
      bind:value={$locale}
      on:change={handleChange}
    >
      {#each $locales as value}
        <option {value}>{$t(`lang.${value}`)}</option>
      {/each}
    </select>

    <DarkMode />

    <Logout />
  </div>
</header>
