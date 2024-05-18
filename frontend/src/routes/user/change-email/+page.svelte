<script lang="ts">
  import { t } from '$UITools/Translations/index'
  import { authStore } from '$stores/Data/AuthStore/authStore.js'

  let email = ''
  let confirmEmail = '' // Ajout d'une variable pour la confirmation de l'email

  async function handleResetEmail() {
    if (email !== confirmEmail) {
      alert($t('error.emails-do-not-match')) // Alert si les emails ne correspondent pas
      return
    }
    await authStore.sendEmailResetEmailByUserAPI(email, $t)
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
  <h1>{$t('data.forgot-password-title')}</h1>
  <form>
    <label for="email">{$t('data.forgot-password-subtitle')}</label>
    <input
      data-testid="email-input"
      type="email"
      id="email"
      bind:value="{email}"
      required
    />

    <!-- Champ pour la confirmation de l'email -->
    <label for="confirmEmail">{$t('data.confirm-email')}</label>
    <input
      data-testid="confirm-email-input"
      type="email"
      id="confirmEmail"
      bind:value="{confirmEmail}"
      required
    />

    <button
      data-testid="submit-button"
      type="button"
      on:click="{handleResetEmail}"
      disabled="{email !== confirmEmail || !email || !confirmEmail}"
      >{$t('data.forgot-password-button')}</button
    >
  </form>
</main>
