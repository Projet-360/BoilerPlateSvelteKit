import { handleRoleRedirection } from '$lib/utils/handleRoleRedirection'
import client from '$apollo'
import { loginGQL } from '$apollo/Auth/loginGQL'
import { collectFingerprint } from '$lib/js/fingerPrint'
import notificationStore from '$stores/UX/notificationStore'
import handleErrors from './handleErrors'
import { authStore } from '../authStore'

async function loginAPI(
  email: string,
  password: string,
  $t: TS.TranslationFunction,
) {
  try {
    const fingerPrint = await collectFingerprint()

    const { data } = await client.mutate({
      mutation: loginGQL,
      variables: { email, password, fingerPrint },
    })

    if (data.login && data.login.role) {
      authStore.set({
        role: data.login.role,
        isAuthenticated: true,
      })
      notificationStore.addNotification($t('data.SUCCESS_LOGIN'), 'success')
      handleRoleRedirection(data.login.role)
    } else {
      notificationStore.addNotification($t('data.FAIL_LOGIN'), 'error')
    }
  } catch (error) {
    handleErrors(error, $t, 'login')
  }
}

export default loginAPI
