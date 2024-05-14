import client from '$apollo'
import { verifyTokenGQL } from '$apollo/Auth/verifyTokenGQL'
import { goto } from '$app/navigation'
import notificationStore from '$stores/UX/notificationStore'
import handleErrors from './handleErrors'

async function verifyTokenAPI(token: string, $t: TS.TranslationFunction) {
  try {
    const { data } = await client.query({
      query: verifyTokenGQL,
      variables: { token },
    })
    goto('/')
    notificationStore.addNotification($t('data.EMAIL_VERIFIED'), 'success')
  } catch (error) {
    handleErrors(error, $t, 'verifyToken')
    notificationStore.addNotification(
      $t('data.emailTokenVerifiedFailed'),
      'error',
    )
  }
}

export default verifyTokenAPI
