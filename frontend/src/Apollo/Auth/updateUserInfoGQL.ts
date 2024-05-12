import { gql } from '@apollo/client/core'

const updateUserInfoGQL = gql`
  mutation UpdateUserInfo($userId: ID!, $userInfo: UpdateUserInfoInput!) {
    updateUserInfo(userId: $userId, userInfo: $userInfo) {
      user {
        id
        username
        email
        role
      }
    }
  }

  input UpdateUserInfoInput {
    username: String!
    email: String!
    role: String!
  }
`
export default updateUserInfoGQL
