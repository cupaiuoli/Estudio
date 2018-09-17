import React from 'react';

const Rainbow = (WrappedComponent) => {
     const colours = ['red', 'pink', 'orange','blue', 'green', 'yellow'];
     let index = Math.floor(Math.random() * 5);
     const randomColour = colours[index];

     console.log(`${index} - ${randomColour}`);

     const className = randomColour + '-text';

     return (props) => {
         return (
             <div className={className}>
                <WrappedComponent {...props} />
             </div>
         )
     }
}

export default Rainbow