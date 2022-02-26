import { gql } from "@apollo/client";

export const ORGANIZATION = gql `
    query organization($id: ID!) {
        organization(id: $id) {
            name
            pipes {
                cards_count
                color
                icon
                id
                name
            }
        }
    }
`