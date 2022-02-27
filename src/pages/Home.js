import PipeList from "../components/pipeList/PipeList"
import "../pages/home.scss"

function Home() {

    return (
        <div className="home">
            <h2 className="home__title">Your pipes</h2>
            <p className="home__text">Here are all your processes <a className="home__link" href="">learn more</a>.</p>
            <PipeList />
        </div>
    )
}

export default Home;