import { gql } from 'apollo-server-express';

const getDashboardDataType = gql`
  type Query {
    getDashboardData: getDashboardDataResponse
  }

  type getDashboardDataResponse {
    role: String
    sessionId: String
    isVerified: Boolean
    userData: UserData
  }

  type UserData {
    username: String
  }
`;

export default getDashboardDataType;
