import { useState } from "react";
import './PlayerScoreCard.css';
import Button from "../components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const EditIcon = () => <FontAwesomeIcon icon={faEdit} />;

function PlayerScoreCard({text, onChange}){
    const [name, setName] = useState(text);
    const [editing, setEditing] = useState(false);
    const [incrementedScore, setIncrementedScore] = useState(0);
    const [score, setScore] = useState(0);
    const [showBack, setShowBack] = useState(false);

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        onChange(newName);
    };

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleBlur = () => {
        setEditing(false);
    };

    const handleOnChange = (e) => {
        setScore(e.target.value);
    };

    const handleAddscore = () => {
        if (score) {
            const newScore = incrementedScore + parseInt(score, 10);
            setIncrementedScore(newScore);

            if (newScore > 100) {
                setShowBack(true);
            }
            
            if (newScore === 100) {
                setIncrementedScore(50);
            }
        }
    };

    const handleAsaf = () => {
        const newScore = incrementedScore + 25

        if (newScore > 100) {
            setShowBack(true);
        }

        if (newScore === 100) {
            setIncrementedScore(50)
        } else {
            setIncrementedScore(incrementedScore + 25);            
        }
    };

    const handleResetIncrementedScore = () => {
        setIncrementedScore(0);
        setScore(0);
        setShowBack(false);
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
                {showBack ? 
                    <>
                        <p className="back-content">Bust!</p>
                        <div className="invisible-element" aria-hidden="true">
                        </div>
                    </>
                    : <p>{incrementedScore}</p>
                }
                </div>
                <div className="Score-btns" >
                    {!showBack && (
                        <>
                        <input
                            type="text"
                            value={score}
                            onChange={handleOnChange}
                            className={"score-input"}
                        />
                        <Button name="Add" className={"Btn-small"} onClick={handleAddscore} text="Add"/>                    
                        <Button name="Asaf" className={"Btn-small"} onClick={handleAsaf} text="Asaf!"/>
                    </>
                    )}
                </div>
                <div className="Score-btns">
                    <button name="Reset" className={"Btn-reset"}  onClick={handleResetIncrementedScore}>
                    Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerScoreCard;