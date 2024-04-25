import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () =>{
    return (
    <ul className="NavBar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/pages/rules">Rules</Link>
        </li>
        <li>
            <Link to="/pages/scoreboard">Scoreboard</Link>
        </li>
    </ul>
    );
}
export default NavBar;