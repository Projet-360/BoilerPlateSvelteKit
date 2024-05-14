import client from '$apollo'
import { sendEmailResetPasswordGQL } from '$apollo/Auth/sendEmailResetPasswordGQL'
import { goto } from '$app/navigation'
import notificationStore from '$stores/UX/notificationStore'

async function sendEmailResetPasswordAPI(
  email: string,
  $t: TS.TranslationFunction,
) {
  try {
    const { data } = await client.mutate({
      mutation: sendEmailResetPasswordGQL,
      variables: { email },
    })
    if (data.sendEmailResetPassword.message === 'USER_NOT_FOUND') {
      notificationStore.addNotification($t('data.USER_NOT_FOUND'), 'error')
    } else if (data.sendEmailResetPassword.message === 'EMAIL_NOT_VERIFIED') {
      notificationStore.addNotification($t('data.EMAIL_NOT_VERIFIED'), 'error')
    } else {
      notificationStore.addNotification(
        $t('data.successSendEmailResetPassword'),
        'success',
      )
    }
    goto('/')
  } catch (error) {
    console.error('Error checking authentication:', error)
  }
}

export default sendEmailResetPasswordAPI
