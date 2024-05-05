import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button-large"
import PlayerScoreCard from "../components/PlayerScoreCard";
import NumberOfPlayers from "../components/NumberOfPlayers";
import "./scoreboard.css"

const Scoreboard = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [winner, setWinner] = useState(null);
    const [players, setPlayers] = useState([]);
    const [newGameClicked, setNewGameClicked] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);

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
        console.log("Changing name of player at index", index, "to", newName);
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
            setInputDisabled(true);
        };
    
        useEffect(() => {
            const activePlayers = players.filter(player => player.status === 'active');
            if (activePlayers.length === 1) {
                declareWinner();
            }
        }, [players]);

        const handleNewGameClick = () => {
            setWinner(null); 
            setNewGameClicked(true);
            resetGame()
        };
    
        const resetGame = () => {
            setNumberOfPlayers(0);
            setPlayers([]);
            setNewGameClicked(false);
            setInputDisabled(false);
        };

    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <main>
                <div className="flex-scorecards">
                {numberOfPlayers === 0 && !newGameClicked ? (
                        <NumberOfPlayers onChange={handleNumberOfPlayersChange}/>
                    ) : (
                        <Button name="new-game" buttonText="New Game" onClick={handleNewGameClick}/>
                    )}
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
                            inputDisabled={inputDisabled}
                            
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Scoreboard;