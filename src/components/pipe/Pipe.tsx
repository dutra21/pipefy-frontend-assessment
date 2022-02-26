import { IPipe } from "../../shared/interfaces/pipe.interface"

type PipeProps = {
    pipe: IPipe
}

function Pipe({ pipe }: PipeProps ) {
    return (
        <div className={`card card--${pipe?.color}`}>
            <div className="card__top-info">
                <button>block</button>
                <button>favorite</button>
            </div>
            <div className="card__content">
                <h3 className="card__name">{pipe?.name}</h3>
                <p className="card__count">{pipe?.cards_count}</p>
            </div>
        </div>
    )
}

export default Pipe;