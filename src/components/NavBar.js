import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () =>{
    return (
    <ul className="NavBar">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Rules">Rules</Link>
        </li>
        <li>
            <Link to="/Scorecard">Scorecard</Link>
        </li>
    </ul>
    );
}
export default NavBar;