import React, { useEffect, useState } from "react";
import Button from "./Button";
import './NumberOfPlayers.css'

function NumberOfPlayers ({ onChange }) {
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [hoveredOption, setHoveredOption] = useState(null);

    const handleChange = (event) => {
        const { value } = event.target;
        setNumberOfPlayers(parseInt(value));
    };

    const handleMouseOver = (index) => {
        setHoveredOption(index);
    };

    const handleMouseOut = () => {
        setHoveredOption(null);
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
                        <select 
                            className="dropdown" 
                            name="numberOfPlayers" 
                            id="numberOfPlayers"
                            onChange={handleChange}
                            >
                            {[2, 3, 4, 5, 6, 7, 8].map((option, index) => (
                                <option
                                    key={option}
                                    value={option}
                                    onMouseOver={() => handleMouseOver(index)}
                                    onMouseOut={handleMouseOut}
                                    style={{
                                        backgroundColor: hoveredOption === index ? 'var(--secondary)' : 'var(--light)',
                                        color: hoveredOption === index ? 'var(--secondary)' : 'var(--primary)'
                                    }}
                                    >
                                        {option}
                                    </option>
                            ))}
                        </select>
                        <Button text="Add" onClick={handleClick}/>
                    </div>
                </div>
            </form>
        </div>        
    );
}

export default NumberOfPlayers