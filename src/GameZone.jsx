import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import GameScore from './GameScore';
import TicTacToe from './TicTacToe';

const WorkInProgress = () => (
    <div className="board-game">
        This game has not been implemented yet! Please try again later.
    </div>
);

const GameZone = () => (
    <div className="game-zone">
        <Switch>
            <Route path="/tictactoe" component={GameScore} />
        </Switch>
        
        <Switch>
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/power4" component={WorkInProgress} />
            <Route path="/chess" component={WorkInProgress} />
            <Route path="/checkers" component={WorkInProgress} />
            <Redirect to="/tictactoe" />
        </Switch>
    </div>
);

export default withRouter(GameZone);