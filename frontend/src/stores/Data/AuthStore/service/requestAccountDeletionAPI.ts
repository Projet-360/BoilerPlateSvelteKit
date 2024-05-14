import client from '$apollo'
import { requestAccountDeletionGQL } from '$apollo/Auth/requestAccountDeletionGQL'
import { messageNotification } from '$lib/utils/messageNotification'
import notificationStore from '$stores/UX/notificationStore'

async function requestAccountDeletionAPI(
  id: string,
  $t: TS.TranslationFunction,
) {
  try {
    const { data } = await client.mutate({
      mutation: requestAccountDeletionGQL,
      variables: { id },
    })

    notificationStore.addNotification(
      $t('data.DELETE_ACCOUNT_EMAIL_SENT'),
      'success',
    )
  } catch (error) {
    messageNotification(error, $t)
    throw error
  }
}

export default requestAccountDeletionAPI
