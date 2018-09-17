import React, { Component } from 'react';
import Cupa from './Cupa';
import People from './People';
import AddPerson from './AddPerson'

class App extends Component {
  state = {
    people: [
      {id: 1, name: 'Lautaro', age: 36},
      {id: 2, name: 'Yoshi', age: 25},
      {id: 3, name: 'Tom', age: 32}
    ]
  }
  addPerson = (person) => {
    person.id = Math.random();
    let people = [...this.state.people, person];
    this.setState({
      people: people
    }) 
  }
  deletePerson = (id) => {
    let people = this.state.people.filter(person => {
      return person.id !== id;
    });
    this.setState({
      people: people
    })
  }
  componentDidMount() {
    console.log('Component did mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>React tutorial</h1> 
        <Cupa name="Lautaro" age="36" />
        <hr />
        <People people={this.state.people} deletePerson={this.deletePerson} />
        <hr />
        <AddPerson addPerson={this.addPerson}></AddPerson>
      </div>
    );
  }
}

export default App;
