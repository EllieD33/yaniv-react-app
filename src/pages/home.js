import Button from "../components/Button-large.js";

const Home = () => {
    return (
        <div className="App-index">
            <h1>Let's play Yaniv!</h1>
            <a href="/pages/rules"><Button text="Learn how to play" /></a>
            <a href="/pages/scorecard"><Button text="Take me to the scorecard" /></a>
        </div>
    );
};

export default Home;