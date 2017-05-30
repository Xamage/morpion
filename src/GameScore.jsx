import GameCurrentPlayer from './GameCurrentPlayer';
import GameWinner from './GameWinner';

const GameScore = ({winner}) => (
    <div className="game-score">
        { !winner && <GameCurrentPlayer /> }
        { winner && <GameWinner /> }
    </div>
);

export default GameScore;