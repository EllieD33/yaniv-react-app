import Button from "../components/Button-large.js";

const Home = () => {
    return (
        <div className="App-index">
            <header className="Home-header">
                <h1>Let's play Yaniv!</h1>
            </header>
            <nav>
                <a href="/pages/rules"><Button text="Learn how to play" /></a>
                <a href="/pages/scorecard"><Button text="Take me to the scorecard" /></a>
            </nav>
        </div>
    );
};

export default Home;