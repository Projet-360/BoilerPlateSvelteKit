import { gql } from 'apollo-server-express';

const loginType = gql`
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
  }
`;

export default loginType;
