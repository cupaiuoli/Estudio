import React, { Component } from 'react';

class Cupa extends Component {
    render() {
        //console.log(this.props);
        const { name, age } = this.props;
        return ( 
            <div className="cupa">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
            </div>
        );
    }
}

export default Cupa;