import { IPipe } from "../../shared/interfaces/pipe.interface"
import "./pipe.scss"

type PipeProps = {
    pipe: IPipe
}

function Pipe({ pipe }: PipeProps ) {
    return (
        <div className={`card card--${pipe?.color}`}>
            <div className="card__top-info">
                <button className="card__btn" aria-label="block">
                    <img className="btn__icon" src="/icons/lock.png" aria-hidden="true" />
                </button>
                <button className="card__btn" aria-label="favorite">
                    <img className="btn__icon" src="/icons/star.png" aria-hidden="true" />
                </button>
            </div>
            <div className="card__content">
                <img className="card__icon" src={`/icons/${pipe?.icon}.png`} aria-hidden="true" />
                <h3 className="card__name">{pipe?.name}</h3>
                <p className="card__count">{pipe?.cards_count} cards</p>
            </div>
        </div>
    )
}

export default Pipe;