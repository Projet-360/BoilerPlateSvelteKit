import { gql } from '@apollo/client/core'

const updateUserInfoGQL = gql`
  mutation UpdateUserInfo($id: String!, $username: String!, $email: String!) {
    updateUserInfo(id: $id, username: $username, email: $email) {
      id
      username
      email
    }
  }
`
export default updateUserInfoGQL
