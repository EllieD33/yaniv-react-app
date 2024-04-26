import { useState } from "react";
import './PlayerScoreCard.css';
import Button from "../components/Button"

function PlayerScoreCard({text}){
    const [count, setCount] = useState(0);
    const [quantity, setQuantity] = useState(0);

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
        <div className="Player-scorecard">
            <h2>{text}</h2>
            <div className="Score-container">
                <div className="Text-Container">
                    <p>{count}</p>
                </div>
                <div className="Score-btns" >
                    <input
                        type="text"
                        value={quantity}
                        onChange={handleOnChange}
                        className={"input"}
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