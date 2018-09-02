import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
    render() {
        return(
            <div className="board">
                 {
                    this.props.match.map(
                        (card, index) => {
                            const isBeingCompared = this.props.pairSelected.indexOf(card) > -1;
                            return <Card 
                                key={index}
                                icon={card.icon}
                                isBeingCompared={isBeingCompared}
                                selectCard={() => this.props.selectCard(card)}
                                founded={card.founded}
                            />;
                        }
                    )
                }
            </div>
        );
    }
};