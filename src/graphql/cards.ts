import { gql } from "@apollo/client";

export const CARDS = `
    query cards(
        $card_id: ID!
        $first: Int
        $after: Int
    ) {
        cards(
            pipe_id: $card_id
            first: $first
            after: $after
        ) {
            edges {
                cursor
                node {
                    id
                    title
                }
            }
            pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
            }
        }
    }
`