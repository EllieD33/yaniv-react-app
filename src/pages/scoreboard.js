import NavBar from "../components/NavBar";
import PlayerScoreCard from "../components/PlayerScoreCard";
import "./scoreboard.css"

const Scoreboard = () => {
    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <main className="flex-scorecards">
                <PlayerScoreCard text="Player 1" />
                <PlayerScoreCard text="Player 2" />
                <PlayerScoreCard text="Player 3" />
                <PlayerScoreCard text="Player 4" />
            </main>
        </div>
    );
};

export default Scoreboard;