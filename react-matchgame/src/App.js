import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import './App.css';
import buildMatch from './utils/buildMatch'

const getInitialState = () => {
  const match = buildMatch();
  return {
    match,
    pairSelected: [],
    isBeingCompared: false,
    attempts: 0
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }
  render() {
    return (
      <div className="App">
        <Header attempts={this.state.attempts} resetMatch={() => this.resetMatch()}/>
        <Board 
          match={this.state.match}
          pairSelected={this.state.pairSelected}
          selectCard={(card) => this.selectCard(card)}
        />
      </div>
    );
  }

  selectCard(card) {
    if (this.state.isBeingCompared 
      || this.state.pairSelected.indexOf(card) > -1
      || card.founded) {
        return;
    }

    const pairSelected = [...this.state.pairSelected, card];
    this.setState({
      pairSelected
    });
    
    if (pairSelected.length === 2) {
      this.comparePair(pairSelected);
    }
  }

  comparePair(pairSelected){
    this.setState({isBeingCompared: true});
    setTimeout(() => {
      const [firstCard, secondCard] = pairSelected;
      let match = this.state.match;

      if (firstCard.icon === secondCard.icon) {
        match = match.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }
          return {...card, founded: true}
        });
      }

      this.verifyEndGame(match);

      this.setState({
        match,
        pairSelected: [],
        isBeingCompared: false,
        attempts: this.state.attempts + 1
      })
    }, 1000)
  }

  verifyEndGame(match) {
      if (match.filter((card) => !card.founded).length === 0) {
        alert(`You win in ${this.state.attempts} attempts`)
      }
  }

  resetMatch() {
    this.setState(getInitialState());

  }
}

export default App;
