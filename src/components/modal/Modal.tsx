import React, { useCallback, useState} from "react";
import { ApolloQueryResult, useQuery } from "@apollo/client";
import { useModalContext } from "./modal.context.jsx";
import { CARDS } from "../../graphql/cards"
import { LIST_CARD_SIZE } from "../../shared/constants/constants"
import "./modal.scss"
import { ICard } from "../../shared/interfaces/card.interface.js";
import { ICardsResult } from "../../shared/interfaces/cards. interface.js";

function Modal() {
    // @ts-ignore
    const { modalState: { pipe, visible }, closeModal } = useModalContext();
    const [cards, setCards] = useState([]);
    const [hasNextPage, setNextPage] = useState<boolean>();

    const { data, fetchMore } = useQuery(CARDS, {
        variables: {
            pipeId: pipe?.id,
            first: LIST_CARD_SIZE
        },
        onCompleted: (result) => {
            setCards(result?.cards?.edges);
            setNextPage(result?.cards?.pageInfo?.hasNextPage);
        }
    });

    const page = data?.cards.pageInfo

    const handleNextPage = useCallback(async () => {
        const result = await fetchMore({
            variables: {
                after: page.endCursor
            }
        }) as ApolloQueryResult<ICardsResult>;
        // @ts-ignore
        setCards((prev): any[] => [
            ...prev,
            ...result.data?.cards?.edges
        ])
        // @ts-ignore
        setNextPage(result?.data?.cards?.pageInfo?.hasNextPage);
    }, [page, fetchMore, setCards, setNextPage])

    return (
        <div className={`modal ${visible}`}>
            <div className="modal__content">
                <button className="btn__close" onClick={closeModal} aria-label="close">x</button>
                <div className="modal__grid">
                    {cards.map( (card: ICard) => 
                        <div className={`card card--${card.node.current_phase.color}`}>
                            <h3 className="card__name">{card.node.title}</h3>
                            <p className="card__current-phase">{card?.node.current_phase?.name}</p>
                        </div>
                    )}
                </div>
                { hasNextPage ?
                    (<div className="modal__footer">
                        <button 
                            className="btn btn__show-more-cards"
                            onClick={handleNextPage}
                        >
                            show more cards
                        </button>
                    </div>) : null
                }
            </div>
        </div>
    )
}

export default Modal;