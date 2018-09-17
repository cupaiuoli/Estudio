import React from 'react';

//const People = (props) => {
//    const people  = props.people;
const People = ({people, deletePerson}) => {
    const peopleList = people.map( person => {
        return ( person.age < 30) ? (
            <div className="person" key={ person.id }>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <button onClick={() => {deletePerson(person.id)}}>Delete person</button>
            </div>
        ) : null;
    })

    return ( 
        <div className="people-list">
            { peopleList }
        </div>
    );
}

export default People;