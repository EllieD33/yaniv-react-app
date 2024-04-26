import NavBar from "../components/NavBar";
import Button from "../components/Button-large";

const Rules = () => {
    return (
        <div>
            <nav>
                <NavBar/>
            </nav>
            <main className="App-pages">
                <h1>About Yaniv</h1>
                <div className="Text-Container">
                    <p>Yaniv is a card game for 2+ players, though the ideal number of players is between 2 and 5 people.</p>
                    <p>The game is played with a standard deck of cards, including 2 jokers (54 cards in total).</p>
                    <p>If you are playing with more than 4 players, it is a good idea to use 2 decks of cards shuffled together.</p>
                </div>
                <h2>How to play</h2>
                <div className="Text-Container">
                    <p>The game is played across multiple rounds with a total score tally being kept throughout. The aim of the game is to earn as few points as possible. The player with the fewest points at the end of the game is the winner.</p>
                    <p>Each round ends when a player declares "Yaniv!". Points are allocated to players based on the remaining cards in their hands.</p>
                </div>
                <h3>Dealing</h3>
                <div className="Text-Container">
                    <p>Each player is dealt 5 cards, face-down. Cards are dealt clockwise from the dealer's left. The remaining cards are placed in the centre and the top card is then turned face-up next to the stack to start to discard pile.</p>
                </div>
                <h3>Gameplay</h3>
                <div className="Text-Container">
                    <p>The play proceeds clockwise. For the first round play begins with the person to the dealer's left and in subsequent rounds the winner of the previous round goes first.</p>
                    <p>To take their go, players can either:</p>
                    <ul>
                        <li>Discard a card, or set of cards, and pick up a new card.</li>
                        <li>Call "Yaniv!". But, players can only call "Yaniv!" if the total value of their hand is 5 or lower.</li>
                    </ul>
                </div>
                <div className="Text-Container">
                <h4>Discarding cards</h4>
                    <p>Players must discard BEFORE they pick up. Discarded cards are added face-up to the top of the discard pile.</p>
                    <p>Players can discard the following:</p>
                    <ul>
                        <li>Any one card.</li>
                        <li>One set of 2 or more cards with the same rank (for example, three 9s or four Kings).</li>
                        <li>One run of 3 or more consecutive cards of the same suit (for example, the 4, 5, 6, and 7 of Hearts). Ace is always low and runs cannot go beyond King (you cannot have a run of Queen, King, Ace). A Joker can be used as a substitute for a card within a sequence (for example, 7 of Spades, Joker, 9 of Spades).</li>
                    </ul>
                    <p>Sequences must be placed down in order, but sets can be placed down in any order.</p>
                    <p>Only one card or set/sequence of cards can be laid down in each turn.</p>
                </div>
                <div className="Text-Container">
                <h4>Picking up cards</h4>
                    <p>Players must pick up 1 card after they have discarded (even if they have discarded more than 1 card).</p>
                    <p>Players can pick up a card either from the top of the face-down stack or from top of the discard pile. When the previous player has laid down a set or a sequence, the current player may take either the top or bottom card from that set/sequence. Players are NOT allowed to pick up any cards from the middle of sets/sequences (for example, if the 6, 7, and 8 of Clubs were laid, only the 6 and the 8 can be picked up by the next player).</p>
                    <p>If a player picks up a card of the same rank as the card they just laid, they can slam that card down onto the discard pile (without having to pick up another card) as long as the next player has not yet placed their discarded card down.</p>
                    <p>If the stack is empty before someone calls "Yaniv!", the discard pile is shuffled and replaced as the stack. The last player's drop is kept out as the start of the new discard pile.</p>
                </div>
                <div className="Text-Container">
                <h4>Calling "Yaniv!"</h4>
                    <p>A player can only call "Yaniv!" if the total score of the cards in their hand is 5 or less.</p>
                    <p>"Yaniv!" can only be called at the start of a player's turn, instead of discarding cards.</p>
                    <p>The round ends when a player calls "Yaniv!". All players reveal their cards. Scores are added up and recorded for each player.</p>
                </div>
                <div className="Text-Container">
                <h4>Scoring a round</h4>
                    <ul>
                        <li>Jokers score 0 points.</li>
                        <li>Ace is worth 1 point.</li>
                        <li>Cards 2-10 score points equal to the number on the card (for instance, 3 of Diamonds is worth 3 points, 8 of Clubs is worth 8 points).</li>
                        <li>Face cards (Jack, Queen, King) are 10 points.</li>
                    </ul>
                    <p>The person with the lowest scoring hand is the winner of the round. Everyone apart from the person who called "Yaniv!" gets points equal to the value of their hand. If the person who called "Yaniv!" has the hand worth the fewest points, they win the round and are given a score of zero. If, however, another player has a hand worth equal or fewer points than the person who called "Yaniv!", this is called an "Asaf". When an "Asaf" happens, the player who called "Yaniv!" is given 25 points as a penalty (the player with the lowest scoring hand gets the same points as they otherwise would have - i.e. the value of their hand).</p>
                </div>
                <div className="Text-Container">
                <h4>Ending the game</h4>
                    <p>A total score tally is kept for each round.</p>
                    <p>Once a player's score <strong>exceeds</strong> 100 points, they are out of the game. If a player's score lands on exactly 100 points, their score is halved to 50 points and they can continue to play from that score.</p>
                    <p><strong>The winner of the game is the last remaining player.</strong></p>
                </div>                
                <Button linkTo="/pages/scoreboard" buttonText="Take me to the scorecard" />
            </main>
        </div>
    );
};

export default Rules;