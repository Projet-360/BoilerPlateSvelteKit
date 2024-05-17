import { gql } from '@apollo/client/core'

const updateUserInfoGQL = gql`
  mutation UpdateUserInfo($username: String!) {
    updateUserInfo(username: $username) {
      username
    }
  }
`
export default updateUserInfoGQL
