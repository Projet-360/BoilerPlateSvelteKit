<script lang="ts">
  import { goto } from '$app/navigation'
  import { t } from '$UITools/Translations/index'
  import { onMount } from 'svelte'
  import { setTransitionLoader } from '$stores/UX/transitionLoaderStore'
  import { authStore } from '$stores/Data/AuthStore/authStore.js'

  let email = ''
  let password = ''

  onMount(() => {
    setTransitionLoader(false)
  })

  async function handleLogin() {
    await authStore.loginAPI(email, password, $t)
  }

  function goToResetPassword() {
    goto('/forgot-password')
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
    <form on:submit|preventDefault="{handleLogin}">
      <input
        data-testid="email-input"
        id="email-input"
        type="text"
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
        >{$t('data.login-button')}</button
      >
    </form>
    <button on:click="{goToResetPassword}">{$t('data.login-link')}</button>
  </div>
</div>
