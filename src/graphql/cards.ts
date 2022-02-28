import { gql } from "@apollo/client";

export const CARDS = gql`
    query cards(
        $pipeId: ID!
        $first: Int
    ) {
        cards(
            pipe_id: $pipeId
            first: $first
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
        }
    }
`