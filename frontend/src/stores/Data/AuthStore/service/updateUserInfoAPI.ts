import client from '$apollo'
import updateUserInfoGQL from '$apollo/Auth/updateUserInfoGQL'
import { messageNotification } from '$lib/utils/messageNotification'
import notificationStore from '$stores/UX/notificationStore'
import { authStore } from '../authStore'

async function updateUserInfoAPI(
  id: string,
  username: string,
  email: string,
  $t: TS.TranslationFunction,
) {
  try {
    const { data } = await client.mutate({
      mutation: updateUserInfoGQL,
      variables: { id, username, email },
    })

    if (
      (data.updateUserInfo.email,
      data.updateUserInfo.id,
      data.updateUserInfo.username)
    ) {
      notificationStore.addNotification($t('data.UPDATE_SUCCESS'), 'success')
    } else {
      throw new Error($t('data.UPDATE_FAILURE'))
    }
  } catch (error) {
    messageNotification(error, $t)
    throw error
  }
}

export default updateUserInfoAPI
