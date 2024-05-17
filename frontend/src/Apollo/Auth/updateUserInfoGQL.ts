import { gql } from '@apollo/client/core'

const updateUserInfoGQL = gql`
  mutation UpdateUserInfo($username: String!, $email: String!) {
    updateUserInfo(username: $username, email: $email) {
      username
      email
    }
  }
`
export default updateUserInfoGQL
