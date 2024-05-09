import { gql } from 'apollo-server-express';

export const loginType = gql`
  type Mutation {
    login(
      email: String!
      password: String!
      fingerPrint: fingerPrint!
    ): LoginResponse
  }

  input fingerPrint {
    userAgent: String
    screenResolution: String
    timezone: String
    webglVendor: String
    webglRenderer: String
    canvasFingerprint: String
    localIPs: [String]
  }

  type LoginResponse {
    role: String
    userId: String
    sessionId: String
    userData: UserData
  }

  type UserData {
    username: String
    email: String
  }
`;
