import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PlayerScoreCard from "../components/PlayerScoreCard";
import NumberOfPlayers from "../components/NumberOfPlayers";
import "./scoreboard.css"

const Scoreboard = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [winner, setWinner] = useState(null);
    const [players, setPlayers] = useState([]);

    const handleNumberOfPlayersChange = (value) => {
        setNumberOfPlayers(value);
        const defaultPlayerNames = Array.from({ length: value }, (_, i) => `Player ${i + 1}`);
        const defaultPlayers = defaultPlayerNames.map((name) => ({
            name,
            score: 0,
            status: 'active'
        }));
        setPlayers(defaultPlayers);
    };

    const handlePlayerNameChange = (index, newName) => {
        setPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            newPlayers[index].name = newName;
            return newPlayers;
        });
    };

    const handleStatusChange = (index, active) => {
        setPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            newPlayers[index].status = active ? 'active' : 'bust';
            return newPlayers;
        });
    };

    const onUpdatePlayer = (updatedPlayer) => {
            setPlayers((prevPlayers) => {
                const newPlayers = [...prevPlayers];
                const index = newPlayers.findIndex(player => player.name === updatedPlayer.name);
                newPlayers[index] = updatedPlayer;
                return newPlayers;
            });
        };

        const declareWinner = () => {
            const winnerPlayer = players.find(player => player.status === 'active');
            setWinner(`${winnerPlayer.name} wins!`);
        };
    
        useEffect(() => {
            const activePlayers = players.filter(player => player.status === 'active');
            if (activePlayers.length === 1) {
                declareWinner();
            }
        }, [players]);


    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <main>
            <div className="flex-scorecards">
                    <NumberOfPlayers onChange={handleNumberOfPlayersChange}/>
                </div>
                {winner && <h2 id="winner">{winner}</h2>}
                <div className="flex-scorecards">
                    {players.map((player, index) => (
                        <PlayerScoreCard
                            key={index}
                            player={player}
                            onChange={(newName) => handlePlayerNameChange(index, newName)}
                            onStatusChange={(active) => handleStatusChange(index, active)}
                            onUpdatePlayer={onUpdatePlayer}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Scoreboard;