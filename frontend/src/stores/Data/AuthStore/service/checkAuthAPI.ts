// Importations nécessaires
import client from '$apollo'
import { checkAuthGQL } from '$apollo/Auth/checkAuthGQL'
import { authStore } from '../authStore'

// Définition de la fonction checkAuth
async function checkAuthAPI() {
  try {
    const { data } = await client.query({
      query: checkAuthGQL,
      fetchPolicy: 'network-only',
    })

    if (data && data.checkAuth.role !== null) {
      authStore.update((state) => ({
        ...state,
        role: data.checkAuth.role,
        isAuthenticated: data.checkAuth.isAuthenticated,
      }))
    }
  } catch (error) {
    console.error('Error checking authentication:', error)
  }
}

export default checkAuthAPI
