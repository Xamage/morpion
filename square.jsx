var React = require('react');

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { player: "" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
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
            <div className="square">
                {/*<button onClick={this.handleClick}>{this.state.player}</button>*/}
                <a onClick={this.handleClick}>{this.state.player}</a>
            </div>
        );
    }
}

module.exports = Square;