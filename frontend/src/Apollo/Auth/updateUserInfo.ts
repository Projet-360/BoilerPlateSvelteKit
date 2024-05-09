import { gql } from "@apollo/client/core";

export const UPDATEUSERINFO = gql`
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

