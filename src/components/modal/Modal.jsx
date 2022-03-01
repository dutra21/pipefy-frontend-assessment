import React, { useState} from "react";
import { useQuery } from "@apollo/client";
import { useModalContext } from "./modal.context.jsx";
import { CARDS } from "../../graphql/cards"
import { LIST_CARD_SIZE } from "../../shared/constants/constants"
import "./modal.scss"

function Modal() {
    const { modalState: { pipe, visible }, closeModal } = useModalContext();
    const [cards, setCards] = useState([]);

    useQuery(CARDS, {
        variables: {
            pipeId: pipe?.id,
            first: LIST_CARD_SIZE
        },
        onCompleted: (result) => {
            setCards(result?.cards?.edges);
        }
    });

    return (
        <div className={`modal ${visible}`}>
            <div className="modal__content">
                <button className="btn__close" onClick={closeModal} aria-label="close">x</button>
                <div className="modal__grid">
                    {cards.map( (card) => 
                        <div className={`card card--${card?.node?.current_phase?.color}`}>
                            <h3 className="card__name">{card?.node?.title}</h3>
                            <p className="card__current-phase">{card?.node?.current_phase?.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal;