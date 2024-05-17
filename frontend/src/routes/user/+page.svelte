<script lang="ts">
  import { authStore } from '$stores/Data/AuthStore/authStore.js'
  import { hoverable } from '$UITools/Cursor/cursorHelpers.js'
  import { onMount } from 'svelte'

  import { t } from '$UITools/Translations/index'
  import SessionAccount from '$components/sessionAccount.svelte'

  let userData: TS.userData
  let username: string = ''
  let email: string = ''
  let role: string = ''
  let isVerified = false

  // const handleUpdate = async () => {
  //   try {
  //     await authStore.updateUserInfoAPI(username, email, $t)
  //     const data = await authStore.getDashboardDataAPI()
  //     userData = data
  //   } catch (error) {
  //     console.error(
  //       "Erreur lors de la mise à jour des informations de l'utilisateur :",
  //       error,
  //     )
  //   }
  // }

  const handlePasswordReset = async () => {
    await authStore.sendEmailResetPasswordAPI(email, $t)
  }

  const DeleteAccount = async (id: string) => {
    await authStore.requestAccountDeletionAPI(id, $t)
  }

  onMount(async () => {
    try {
      const data = await authStore.getDashboardDataAPI()
      userData = data.getDashboardData
      username = data.getDashboardData.userData.username
      email = data.getDashboardData.userData.email
      role = data.getDashboardData.userData.role
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
        <label for="email">Email</label>
        <input id="email" type="email" bind:value="{email}" />
        <button on:click="{handlePasswordReset}"
          >Réinitialiser le mot de passe</button
        >

        <p><label for="role">Role</label>: {role}</p>
        <label for="isVerified">Is Verified</label>
        <input
          id="isVerified"
          type="checkbox"
          checked="{isVerified}"
          disabled
        />

        <!-- <button on:click="{() => DeleteAccount(id)}">Supprimer le compte</button
        > -->

        <!-- <button on:click="{handleUpdate}">Mettre à jour</button> -->
      </form>

      <!-- <SessionAccount /> -->
    {:else}
      <h2>{$t('data.user-loader')}</h2>
    {/if}
    <a href="/about" use:hoverable="{'first'}">{$t('data.user-button')}</a>
  </div>
</div>
