import client from '$apollo'
import { logoutGQL } from '$apollo/Auth/logoutGQL'
import { goto } from '$app/navigation'
import notificationStore from '$stores/UX/notificationStore'
import { authStore } from '../authStore'

async function logoutAPI($t: TS.TranslationFunction) {
  try {
    const { data } = await client.mutate({
      mutation: logoutGQL,
    })

    authStore.set({
      role: null,
      isAuthenticated: false,
    })

    notificationStore.addNotification($t('data.logout-logout'), 'success')
    goto('/')
  } catch (error) {
    console.error('Error during logout:', JSON.stringify(error, null, 2))
  }
}

export default logoutAPI
