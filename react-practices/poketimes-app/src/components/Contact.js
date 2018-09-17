import React from 'react'

const Contact = (props) => {
    console.log(props);
    setTimeout(() => {
        props.history.push('/about');
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate sequi repellat reiciendis eum nobis perspiciatis, minima aperiam, magni eaque ab consectetur, tenetur eos deserunt vel accusantium voluptates veniam sunt!</p>
        
        </div>
    )
}

export default Contact