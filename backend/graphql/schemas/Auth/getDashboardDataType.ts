import { gql } from 'apollo-server-express';

export const getDashboardDataType = gql`
  type Query {
    getDashboardData: getDashboardDataResponse
  }

  type getDashboardDataResponse {
    userId: String
    role: String
    sessionId: String
    isVerified: Boolean
    userData: UserData
  }

  type UserData {
    username: String
    email: String
  }
`;
