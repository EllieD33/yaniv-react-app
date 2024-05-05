import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState)
    };

    return (
        <nav className='NavBar'>
            <div className="NavBar-links">
                <ul className="NavBar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pages/rules">Rules</Link></li>
                    <li><Link to="/pages/scoreboard">Scoreboard</Link></li>
                </ul>
            </div>
            <div className='Burger-menu-container'>
                <div className="NavBar-burger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {isOpen && (
                    <div className="Burger-menu">
                        <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pages/rules">Rules</Link></li>
                        <li><Link to="/pages/scoreboard">Scoreboard</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
export default NavBar;