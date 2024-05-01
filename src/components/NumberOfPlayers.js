import React, { useState } from "react";
import Button from "./Button";
import './NumberOfPlayers.css'

function NumberOfPlayers ({ onChange }) {
    const [numberOfPlayers, setNumberOfPlayers] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        setNumberOfPlayers(parseInt(value));
    };

    const handleClick = () => {
        console.log(numberOfPlayers);
        onChange(numberOfPlayers);
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="numberOfPlayers">How many players?</label>
                </div>
                <div>
                    <div className="centre-container-items">
                        <input className="input" 
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            id="numberOfPlayers"
                            placeholder="0"
                            value={numberOfPlayers}
                            onChange={handleChange}
                        ></input>
                        <Button text="Add" onClick={handleClick}/>
                    </div>
                </div>
            </form>
        </div>        
    );
}

export default NumberOfPlayers