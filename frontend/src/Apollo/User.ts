import { gql } from "@apollo/client/core";


export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            user {
                id
                username
                email
                role
            }
            token
        }
    }
`;

export const LOGOUT = gql`
    mutation {
        logout
    }
`;