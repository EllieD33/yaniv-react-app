import './Button-large.css';
import { Link } from 'react-router-dom'

function Button({linkTo, buttonText, onClick}) {
    return(
        <Link to={linkTo}>
            <button className='Btn' onClick={onClick}>{buttonText}</button>
        </Link>
    );
};

export default Button;