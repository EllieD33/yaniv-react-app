import React, { useEffect, useState } from "react";
import Button from "./Button";
import './NumberOfPlayers.css'

function NumberOfPlayers ({ onChange }) {
    const [numberOfPlayers, setNumberOfPlayers] = useState(2);

    const handleChange = (event) => {
        const { value } = event.target;
        setNumberOfPlayers(parseInt(value));
    };

    const handleClick = () => {
        onChange(numberOfPlayers);
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="numberOfPlayers">How many players?</label>
                </div>
                <div>
                    <div className="centre-container-items">
                        <div className="select">
                            <select
                                className="dropdown"
                                name="numberOfPlayers"
                                id="numberOfPlayers"
                                onChange={handleChange}
                                >
                                {[2, 3, 4, 5, 6, 7, 8].map((option, index) => (
                                    <option
                                        key={index}
                                        value={option}
                                        >
                                            {option}
                                        </option>
                                ))}
                            </select>
                        </div>
                        <Button text="Add" onClick={handleClick}/>
                    </div>
                </div>
            </form>
        </div>        
    );
}

export default NumberOfPlayers