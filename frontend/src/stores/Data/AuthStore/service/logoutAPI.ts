import client from '$apollo'
import { logoutGQL } from '$apollo/Auth/logoutGQL'
import { goto } from '$app/navigation'
import notificationStore from '$stores/UX/notificationStore'
import { writable } from 'svelte/store'
import { authStore } from '../authStore'

const { set } = writable<App.IAuthStore>()

async function logoutAPI($t: App.TranslationFunction) {
  try {
    const { data } = await client.mutate({
      mutation: logoutGQL,
    })

    notificationStore.addNotification($t('data.logout-logout'), 'success')
    goto('/')
  } catch (error) {
    console.error('Error during logout:', JSON.stringify(error, null, 2))
  }
}

export default logoutAPI
