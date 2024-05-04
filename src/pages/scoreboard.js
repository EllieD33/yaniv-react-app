import React, { useState } from "react";
import NavBar from "../components/NavBar";
import PlayerScoreCard from "../components/PlayerScoreCard";
import NumberOfPlayers from "../components/NumberOfPlayers";
import "./scoreboard.css"

const Scoreboard = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const handleNumberOfPlayersChange = (value) => {
        console.log("Number of players:", value);
        setNumberOfPlayers(value);
    };

    const generatePlayerNames = () => {
        const playerNames = [];
        for (let i = 1; i <= numberOfPlayers; i++) {
            playerNames.push(`Player ${i}`);
        }
        return playerNames;
    };

    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <main>
                <div className="flex-scorecards">
                    <NumberOfPlayers onChange={handleNumberOfPlayersChange}/>
                </div>
                <div className="flex-scorecards">
                {generatePlayerNames().map((PlayerName, index) => (
                        <PlayerScoreCard key={index} text={PlayerName} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Scoreboard;