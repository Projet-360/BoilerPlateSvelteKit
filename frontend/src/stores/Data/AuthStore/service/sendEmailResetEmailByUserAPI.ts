import client from '$apollo'
import { sendEmailResetEmailByUserGQL } from '$apollo/Auth/sendEmailResetEmailByUserGQL'
import { goto } from '$app/navigation'
import notificationStore from '$stores/UX/notificationStore'

async function sendEmailResetEmailByUserAPI(
  email: string,
  $t: TS.TranslationFunction,
) {
  try {
    const { data } = await client.mutate({
      mutation: sendEmailResetEmailByUserGQL,
      variables: { email },
    })
    notificationStore.addNotification(
      $t('data.success sendEmailResetEmailByUser'),
      'success',
    )
    goto('/')
  } catch (error) {
    console.error('Error checking authentication:', error)
  }
}

export default sendEmailResetEmailByUserAPI
