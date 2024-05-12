import client from '$apollo'
import { getAllUsersGQL } from '$apollo/Auth/getAllUsersGQL'

const getAllUsersAPI = async () => {
  try {
    const { data } = await client.query({
      query: getAllUsersGQL,
      fetchPolicy: 'network-only',
    })
    console.log(data)

    return data
  } catch (error) {
    throw error
  }
}

export default getAllUsersAPI
