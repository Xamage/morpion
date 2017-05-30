var React = require('react');
var Square = require('./Square');

require('./style.css');

class Morpion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { player: 1 };
        this.players = "XO";
        this.getPlayer = this.getPlayer.bind(this);
        this.onPlayed = this.onPlayed.bind(this);
        this.scores = [0, 0, 0, 0, 0, 0, 0, 0]; // row1, row2, row3, col1, col2, col3, right diag, left diag
    }
    
    getPlayer() {
        this.setState(s => s.player = (1 - s.player));
        return this.players[this.state.player];
    }

    onPlayed(square) {
        var increment = this.state.player === 1 ? 1 : -1;

        this.scores[square.props.x] += increment;
        this.scores[square.props.y + 3] += increment; // +3 pour atteindre les valeurs col1, col2 et col3 dans le tableau des scores

        if ((square.props.x === 2 && square.props.y === 0) || (square.props.x === 0 && square.props.y === 2)) {
            this.scores[6] += increment; // this.scores[6] => score de la diagonale droite
        } else if (square.props.x === square.props.y) {
            this.scores[7] += increment; // this.scores[7] => score de la diagonale gauche
            if ((square.props.x === 1) && (square.props.y === 1)) {
                this.scores[6] += increment;
            }
        }

        var winner = this.scores.find(s => s === -3 || s === 3);
        if (winner) {
            this.setState(s => s.winner = (winner === 3) ? "Circle" : "Cross");
        }
    }

    render() {                
        let squares = [];
        for (let y = 0; y < 3; y++)
            for (let x = 0; x < 3; x++) {
                let key = (y+3) * (x+1);
                squares.push(<Square key={key} x={x} y={y} getPlayer={this.getPlayer} onPlayed={this.onPlayed}></Square>);
            }
        
        return (
            <div className="game">
                <div className="board">
                    {squares}
                </div>
                { this.state.winner && <div className="winner">{this.state.winner} win !</div> }
            </div>
        );
    }
}

module.exports = Morpion;