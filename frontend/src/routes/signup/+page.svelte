<script lang="ts">
  import { onMount } from 'svelte'
  import { setTransitionLoader } from '$stores/UX/transitionLoaderStore'
  import { t } from '$UITools/Translations/index'
  import { authStore } from '$stores/Data/AuthStore/authStore.js'

  let username = ''
  let email = ''
  let password = ''

  onMount(() => {
    setTransitionLoader(false)
  })

  async function handleSignup() {
    await authStore.signupAPI(username, email, password, $t)
  }
</script>

<svelte:head>
  <title>Page d'exemple</title>
  <meta
    name="description"
    content="Ceci est une description de la page d'exemple."
  />
</svelte:head>

<div class="page">
  <div class="page-container">
    <form on:submit|preventDefault="{handleSignup}">
      <input
        data-testid="username-input"
        id="username-input"
        type="text"
        bind:value="{username}"
        placeholder="Username"
      />
      <input
        data-testid="email-input"
        id="email-input"
        bind:value="{email}"
        placeholder="Email"
      />
      <input
        data-testid="password-input"
        id="password-input"
        type="password"
        bind:value="{password}"
        placeholder="Password"
      />
      <button data-testid="submit-button" type="submit"
        >{$t('data.signup-button')}</button
      >
    </form>
  </div>
</div>
