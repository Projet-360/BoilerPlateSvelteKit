import client from '$apollo'
import { getDashboardDataGQL } from '$apollo/Auth/getDashboardDataGQL'

async function getDashboardDataAPI() {
  try {
    const { data } = await client.query({
      query: getDashboardDataGQL,
      fetchPolicy: 'network-only',
    })
    return data
  } catch (error) {
    throw error
  }
}

export default getDashboardDataAPI
