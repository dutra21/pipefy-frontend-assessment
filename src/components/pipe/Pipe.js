import { IPipe } from "../../shared/interfaces/pipe.interface"
import { useModalContext } from "../modal/modal.context"
import "./pipe.scss"

function Pipe({ pipe } ) {
    const { openModal } = useModalContext();
    const handleModal = () => openModal({ pipe: pipe })
    
    return (
        <div 
            className={`card card--${pipe?.color}`}>
            <div className="card__top-info">
                <button className="btn__lock card__btn" aria-label="block">
                    <img className="btn__icon" src="/icons/lock.png" aria-hidden="true" alt="" />
                </button>
                <button className="btn__fav card__btn" aria-label="favorite">
                    <img className="btn__icon" src="/icons/star.png" aria-hidden="true" alt=""/>
                </button>
            </div>
            <img className="card__icon" src={`/icons/${pipe?.icon}.png`} aria-hidden="true" alt=""/>
            <div 
                className={"card__content " + (pipe?.cards_count !== 0 ? 'pointer' : "")}
                onClick={handleModal}
            >
                <h3 className="card__name">{pipe?.name}</h3>
                <p className="card__count">{pipe?.cards_count} cards</p>
            </div>
        </div>
    )
}

export default Pipe;