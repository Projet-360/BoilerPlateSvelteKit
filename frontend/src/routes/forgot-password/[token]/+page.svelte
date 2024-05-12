<script lang="ts">
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { t } from '$UITools/Translations/index'
  import notificationStore from '$stores/UX/notificationStore'

  import { authStore } from '$stores/Data/AuthStore/authStore.js'

  let newPassword = ''
  let confirmPassword = ''
  let token: string

  onMount(async () => {
    token = $page.params.token
  })

  async function resetPassword() {
    if (newPassword !== confirmPassword) {
      notificationStore.addNotification(
        $t('data.FORGOT_PASSWORD_INVALID'),
        'error',
      )
      return
    }

    await authStore.ResetForgotNewPasswordAPI(
      token,
      newPassword,
      confirmPassword,
      $t,
    )
  }
</script>

<svelte:head>
  <title>Page d'exemple</title>
  <meta
    name="description"
    content="Ceci est une description de la page d'exemple."
  />
</svelte:head>

<main>
  <h1>{$t('data.forgot-password-token-title')}</h1>
  <form>
    <label for="newPassword"
      >{$t('data.forgot-password-token-newPassword')}</label
    >
    <input
      data-testid="newPassword-input"
      type="password"
      id="newPassword"
      bind:value="{newPassword}"
      required
    />

    <label for="confirmPassword"
      >{$t('data.forgot-password-token-confirmPassword')}</label
    >
    <input
      data-testid="confirmPassword-input"
      type="password"
      id="confirmPassword"
      bind:value="{confirmPassword}"
      required
    />

    <button data-testid="submit-button" type="button" on:click="{resetPassword}"
      >{$t('data.forgot-password-token-link')}</button
    >
  </form>
</main>
