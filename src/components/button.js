import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        return (
            <div className={`collumn-${this.props.cols}`} >
                <button className="calc-button" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
            )
    }
}