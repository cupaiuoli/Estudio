import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="title">React MatchGame</div>
                <div>
                    <button className="btn-restart" onClick={this.props.resetMatch}>
                    Restart
                    </button>
                </div>
                <div className="title">
                    Attempts: {this.props.attempts}
                </div>
            </header>
        );
    }
}