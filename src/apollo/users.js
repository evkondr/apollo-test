import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query getUsers {
        allUsers{
            id,
            login,
            fullName,
            email
        }
    }
`