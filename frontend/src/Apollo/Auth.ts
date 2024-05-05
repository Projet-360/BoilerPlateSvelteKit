
import { gql } from "@apollo/client/core";

export const CHECKAUTH = gql`
query CheckAuth {
    checkAuth {
      isAuthenticated
      role
      userId
    }
  }
`

export const SIGNUP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
      signup(username: $username, email: $email, password: $password) {
        message
      }
    }
`

export const VERIFY_TOKEN = gql`
  query VerifyToken($token: String!) {
    verifyToken(token: $token) {
      message
    }
  }  
`

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      role
      userId
      sessionId
    }
  }  
`;

export const LOGOUT = gql`
mutation Logout {
    logout {
      message
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    allUsers {
      id
      name
      email
      role
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: String!, $userData: UserInput!) {
    updateUser(userId: $userId, userData: $userData) {
      success
      user {
        id
        name
        email
        role
      }
      notification
    }
  }
`;



export const SEND_EMAIL_RESET_PASSWORD = gql`
mutation SendEmailResetPassword($email: String!) {
    sendEmailResetPassword(email: $email) {
      message
    }
  }
`

export const RESET_FORGOT_NEW_PASSWORD = gql`
mutation ResetForgotNewPassword($token: String!, $newPassword: String!, $confirmPassword: String!) {
    resetForgotNewPassword(token: $token, newPassword: $newPassword, confirmPassword: $confirmPassword) {
      message
    }
  }
`

export const GET_USER_SESSION = gql`
query GetUserSessions {
    userSessions {
      id
      device
      location
      createdAt
    }
  }
`

export const CLOSE_USER_SESSION = gql`
mutation CloseUserSession($sessionId: ID!) {
    closeUserSession(sessionId: $sessionId) {
      success
      message
    }
  }
`

export const GET_DASHBOARD_DATA = gql`
query GetDashboardData {
    dashboardData {
      stats
      recentActivities
    }
  }
`

export const REQUEST_ACCOUNT_DELETION = gql`
mutation RequestAccountDeletion($userId: ID!) {
    requestAccountDeletion(userId: $userId) {
      success
      message
    }
  }
`

export const CONFIRM_ACCOUNT_DELETION = gql`
mutation ConfirmAccountDeletion($token: String!) {
    confirmAccountDeletion(token: $token) {
      success
      message
    }
  }  
`

export const UPDATE_USER_INFO = gql`
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


