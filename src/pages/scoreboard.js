import React, { useState } from "react";
import NavBar from "../components/NavBar";
import PlayerScoreCard from "../components/PlayerScoreCard";
import NumberOfPlayers from "../components/NumberOfPlayers";
import "./scoreboard.css"

const Scoreboard = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [playerNames, setPlayerNames] = useState([]);

    const handleNumberOfPlayersChange = (value) => {
        setNumberOfPlayers(value);
        const defaultPlayerNames = Array.from({ length: value }, (_, i) => `Player ${i + 1}`);
        setPlayerNames(defaultPlayerNames);
    };

    const handlePlayerNameChange = (index, newName) => {
        setPlayerNames((prevNames) => {
            const newPlayerNames = [...prevNames];
            newPlayerNames[index] = newName;
            return newPlayerNames;
        });
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
                {playerNames.map((playerName, index) => (
                        <PlayerScoreCard
                            key={index}
                            text={playerName}
                            onChange={(newName) =>
                                handlePlayerNameChange(index, newName)
                            }
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Scoreboard;