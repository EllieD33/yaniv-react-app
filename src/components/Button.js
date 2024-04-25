import './Button.css';

function Button({onClick, text}) {
    return <button className={"Btn-small"} onClick={onClick}>{text}</button>;
}

export default Button;