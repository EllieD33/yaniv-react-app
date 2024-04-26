import Button from "../components/Button-large.js";


const Home = () => {
    return (
        <div className="App-index">
            <header className="Home-header">
                <h1>Let's play Yaniv!</h1>
            </header>
            <nav className="Home-nav">
                <Button linkTo="/pages/rules" buttonText="Learn how to play" />
                <Button linkTo="/pages/scoreboard" buttonText="Take me to the scoreboard" />
            </nav>
        </div>
    );
};

export default Home;