import { useState } from "react";
import './PlayerScoreCard.css';
import Button from "../components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const EditIcon = () => <FontAwesomeIcon icon={faEdit} />;

function PlayerScoreCard({player, onUpdatePlayer, onStatusChange}){
    const { name, score, status } = player;
    const [editing, setEditing] = useState(false);
    const [scoreInput, setScoreInput] = useState("");

    const handleNameChange = (e) => {
        const newName = e.target.value;
        onUpdatePlayer({ ...player, name: newName });
    };

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleBlur = () => {
        setEditing(false);
    };

    const handleOnChange = (e) => {
        setScoreInput(e.target.value);
    };

    const handleAddscore = () => {
        if (scoreInput) {
            const newScore = score + parseInt(scoreInput, 10);

            let updatedPlayer = { ...player, score: newScore };

            if (newScore > 100) {
                updatedPlayer.status = 'bust';
                onStatusChange(false);
            } else if (newScore === 100) {
                updatedPlayer.score = 50;
            }

            onUpdatePlayer(updatedPlayer);
        }
    };

    const handleAsaf = () => {
        const newScore = score + 25;        

        let updatedPlayer = { ...player, score: newScore };

        if (newScore > 100) {
            updatedPlayer.status = 'bust';
            onStatusChange(false);
        } else if (newScore === 100) {
            updatedPlayer.score = 50;
        }

            onUpdatePlayer(updatedPlayer);
    };

    const handleResetBtn = () => {
        setScoreInput("");
        onUpdatePlayer({ ...player, score: 0, status: 'active' });
    };

    return (
        <div className="Player-scorecard">
            <div className="name-container" onDoubleClick={handleDoubleClick}>
                {editing ? (
                    <input
                        className="name-input"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleBlur}
                        placeholder="Enter player name"
                        autoFocus
                    />
                ) : (
                    <h2>{name}</h2>
                )}
                <span className="edit-icon">{<EditIcon />}</span>
            </div>
            <div className="Score-container">
                <div className="Text-Container">
                {status === 'bust' ? 
                    <>
                        <p className="back-content">Bust!</p>
                        <div className="invisible-element" aria-hidden="true">
                        </div>
                    </>
                    : <p>{score}</p>
                }
                </div>
                <div className="Score-btns" >
                    {status !== 'bust' && (
                        <>
                        <input
                            type="text"
                            value={scoreInput}
                            onChange={handleOnChange}
                            className={"score-input"}
                        />
                        <Button name="Add" className={"Btn-small"} onClick={handleAddscore} text="Add"/>                    
                        <Button name="Asaf" className={"Btn-small"} onClick={handleAsaf} text="Asaf!"/>
                    </>
                    )}
                </div>
                <div className="Score-btns">
                    <button name="Reset" className={"Btn-reset"}  onClick={handleResetBtn}>
                    Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerScoreCard;