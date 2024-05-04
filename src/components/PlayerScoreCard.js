import { useState } from "react";
import './PlayerScoreCard.css';
import Button from "../components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const EditIcon = () => <FontAwesomeIcon icon={faEdit} />;

function PlayerScoreCard({text, onChange}){
    const [name, setName] = useState(text);
    const [editing, setEditing] = useState(false);
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(0);

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

    const handleAsaf = () => {
        setCount(count + 25);
    };

    const handleOnChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddQuantity = () => {
        if (quantity) setCount(count + parseInt(quantity, 10));
    };

    const handleResetCounter = () => {
        setCount(0);
        setQuantity(0);
    };

    return (
        <div className="Player-scorecard" onDoubleClick={handleDoubleClick}>
            <div className="name-container">
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
                    <p>{count}</p>
                </div>
                <div className="Score-btns" >
                    <input
                        type="text"
                        value={quantity}
                        onChange={handleOnChange}
                        className={"score-input"}
                    />
                    <Button name="Add" className={"Btn-small"} onClick={handleAddQuantity} text="Add"/>
                
                    <Button name="Asaf" className={"Btn-small"} onClick={handleAsaf} text="Asaf!"/>
                </div>
                <div className="Score-btns">
                    <button name="Reset" className={"Btn-reset"}  onClick={handleResetCounter}>
                    Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayerScoreCard;