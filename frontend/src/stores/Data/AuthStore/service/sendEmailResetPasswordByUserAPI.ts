import client from '$apollo'
import { sendEmailResetPasswordByUserGQL } from '$apollo/Auth/sendEmailResetPasswordByUserGQL'
import { goto } from '$app/navigation'
import notificationStore from '$stores/UX/notificationStore'

async function sendEmailResetPasswordByUserAPI($t: TS.TranslationFunction) {
  try {
    const { data } = await client.mutate({
      mutation: sendEmailResetPasswordByUserGQL,
    })
    console.log(data, 'sendEmailResetPasswordByUserAPI')

    if (data.sendEmailResetPasswordByUser.message === 'USER_NOT_FOUND') {
      notificationStore.addNotification($t('data.USER_NOT_FOUND'), 'error')
    } else if (
      data.sendEmailResetPasswordByUser.message === 'EMAIL_NOT_VERIFIED'
    ) {
      notificationStore.addNotification($t('data.EMAIL_NOT_VERIFIED'), 'error')
    } else if (
      data.sendEmailResetPasswordByUser.message ===
      'successSendEmailResetPassword'
    ) {
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

export default sendEmailResetPasswordByUserAPI
