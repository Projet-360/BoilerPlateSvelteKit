// Importations
import { writable } from 'svelte/store'

import * as API from './service'

// Initialisation du store
function AuthStore() {
  const { subscribe, set, update } = writable<TS.IAuthStore>({
    currentSessionId: undefined,
    role: null,
    isAuthenticated: false,
  })

  return {
    subscribe,
    set,
    update,

    ...API,
  }
}

// Exportation du store
export const authStore = AuthStore()
