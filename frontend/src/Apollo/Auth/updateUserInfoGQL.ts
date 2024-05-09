import { gql } from "@apollo/client/core";

const updateUserInfoGQL = gql`
mutation UpdateUserInfo($userId: ID!, $userInfo: UpdateUserInfoInput!) {
    updateUserInfo(userId: $userId, userInfo: $userInfo) {
      success
      user {
        id
        name
        email
      }
      message
    }
  }  
`
export default updateUserInfoGQL
