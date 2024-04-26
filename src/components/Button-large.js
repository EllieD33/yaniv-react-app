import './Button-large.css';
import { Link } from 'react-router-dom'

function Button({linkTo, buttonText}) {
    return(
        <Link to={linkTo}>
            <button className='Btn'>{buttonText}</button>
        </Link>
    );
};

export default Button;