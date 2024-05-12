// Importations
import { writable } from 'svelte/store'

import checkAuthAPI from './service/checkAuthAPI'
import signupAPI from './service/signupAPI'
import loginAPI from './service/loginAPI'
import logoutAPI from './service/logoutAPI'
import verifyTokenAPI from './service/verifyTokenAPI'
import sendEmailResetPasswordAPI from './service/sendEmailResetPasswordAPI'
import ResetForgotNewPasswordAPI from './service/ResetForgotNewPasswordAPI'
import updateUserInfoAPI from './service/updateUserInfoAPI'
import getDashboardDataAPI from './service/getDashboardDataAPI'
import requestAccountDeletionAPI from './service/requestAccountDeletionAPI'
import getAllUsersAPI from './service/getAllUsersAPI'

// Initialisation du store
function AuthStore() {
  const { subscribe, set, update } = writable<TS.IAuthStore>({
    userId: null,
    currentSessionId: undefined,
    role: null,
    isAuthenticated: false,
    sessions: [],
    userData: {
      username: null,
      email: null,
    },
  })

  return {
    subscribe,
    set,
    update,

    signupAPI,
    verifyTokenAPI,
    loginAPI,
    logoutAPI,
    checkAuthAPI,
    sendEmailResetPasswordAPI,
    ResetForgotNewPasswordAPI,
    updateUserInfoAPI,
    getDashboardDataAPI,
    requestAccountDeletionAPI,
    getAllUsersAPI,
  }
}

// Exportation du store
export const authStore = AuthStore()
