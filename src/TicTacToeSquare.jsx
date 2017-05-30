class TicTacToeSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = { player: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.player)
            return;
        if (typeof this.props.getPlayer === 'function') {
            let player = this.props.getPlayer();
            this.setState({ player });

            if (typeof this.props.onPlayed === 'function') {
                this.props.onPlayed(this);
            }
        }
    }

    render() {
        return (
            <div className="tictactoe-square">
                <a href="#" onClick={this.handleClick}>{this.state.player}</a>
            </div>
        );
    }
}

export default TicTacToeSquare;