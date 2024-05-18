<script lang="ts">
  import { authStore } from '$stores/Data/AuthStore/authStore.js'
  import { hoverable } from '$UITools/Cursor/cursorHelpers.js'
  import { onMount } from 'svelte'

  import { t } from '$UITools/Translations/index'
  import SessionAccount from '$components/sessionAccount.svelte'

  let userData: TS.userData
  let username: string = ''
  let role: string = ''
  let isVerified = false

  const handleUpdate = async () => {
    try {
      await authStore.updateUserInfoAPI(username, $t)
      const data = await authStore.getDashboardDataAPI()
      userData = data
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour des informations de l'utilisateur :",
        error,
      )
    }
  }

  const handlePasswordReset = async () => {
    await authStore.sendEmailResetPasswordByUserAPI($t)
  }

  const DeleteAccount = async () => {
    await authStore.requestAccountDeletionAPI($t)
  }

  onMount(async () => {
    try {
      const data = await authStore.getDashboardDataAPI()
      userData = data.getDashboardData
      username = data.getDashboardData.userData.username
      role = data.getDashboardData.role
      isVerified = data.getDashboardData.isVerified
    } catch (error) {
      console.error('Error:', error)
    }
  })
</script>

<svelte:head>
  <title>{$t('data.user-title')}</title>
  <meta name="description" content="This is your user dashboard." />
</svelte:head>

<div class="page">
  <div class="page-container">
    <h1>{$t('data.user-title')}</h1>
    {#if userData}
      <form>
        <label for="username">Username</label>
        <input id="username" type="text" bind:value="{username}" />
        <button on:click="{handleUpdate}">Mettre à jour le username</button>
        <button on:click="{handlePasswordReset}">Changer le mot de passe</button
        >
        <a href="/user/change-email" use:hoverable="{'first'}"
          >changer votre email</a
        >

        <button on:click="{() => DeleteAccount()}">Supprimer le compte</button>

        <p><label for="role">Role</label>: {role}</p>
        <label for="isVerified">Is Verified</label>
        <input
          id="isVerified"
          type="checkbox"
          checked="{isVerified}"
          disabled
        />
      </form>

      <!-- <SessionAccount /> -->
    {:else}
      <h2>{$t('data.user-loader')}</h2>
    {/if}
    <a href="/about" use:hoverable="{'first'}">{$t('data.user-button')}</a>
  </div>
</div>
