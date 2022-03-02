import { IPipe } from "../../shared/interfaces/pipe.interface.js";
import { useModalContext } from "../modal/modal.context.jsx"
import "./pipe.scss"

function Pipe( pipe: IPipe ) {
    // @ts-ignore
    const { openModal } = useModalContext();
    const handleModal = () => {
        if(pipe.cards_count !== 0) {
            openModal({ pipe: pipe })
        }
        return;      
    }
    
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
                onClick={handleModal} 
                className={"card__content " + (pipe?.cards_count !== 0 ? 'pointer' : "")}
            >
                <h3 className="card__name">{pipe?.name}</h3>
                <p className="card__count">{(pipe?.cards_count) + " card" + (pipe?.cards_count > 1 ? 's' : "")}</p>
            </div>
        </div>
    )
}

export default Pipe;