import { gql } from "@apollo/client";

export const CARDS = gql`
    query cards(
        $pipeId: ID!
        $first: Int
        $after: String
    ) {
        cards(
            pipe_id: $pipeId
            first: $first
            after: $after
        ) {
            edges {
                node {
                    current_phase {
                        color
                        name
                    }
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