import client from '$apollo'
import { resetForgotNewPasswordGQL } from '$apollo/Auth/resetForgotNewPasswordGQL'
import { goto } from '$app/navigation'
import { messageNotification } from '$lib/utils/messageNotification'
import notificationStore from '$stores/UX/notificationStore'

async function ResetForgotNewPasswordAPI(
  token: string,
  newPassword: string,
  confirmPassword: string,
  $t: TS.TranslationFunction,
) {
  try {
    const { data } = await client.mutate({
      mutation: resetForgotNewPasswordGQL,
      variables: { token, newPassword, confirmPassword },
    })

    notificationStore.addNotification(
      $t('data.VALIDATION_FORGOT_PASSWORD'),
      'success',
    )
    goto('/')
  } catch (error) {
    console.error('Error checking authentication:', error)
    messageNotification(error, $t)
  }
}

export default ResetForgotNewPasswordAPI
