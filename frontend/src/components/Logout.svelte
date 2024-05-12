<script lang="ts">
  import { authStore } from '$stores/Data/AuthStore/authStore.js'
  import { t } from '$UITools/Translations/index'

  let isAuthenticated: boolean

  authStore.subscribe(($authStore: TS.IAuthStore) => {
    isAuthenticated = $authStore && $authStore.isAuthenticated ? true : false
  })

  function handleLogout() {
    authStore.logoutAPI($t)
  }
</script>

{#if isAuthenticated}
  <button
    id="button-logout"
    data-testid="button-logout"
    on:click="{handleLogout}">{$t('data.logout-logout')}</button
  >
{/if}
