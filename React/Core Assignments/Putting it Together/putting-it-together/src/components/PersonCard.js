import React, { useState } from 'react'


const PersonCard = (props) => {
    const [ age, setAge] = useState(props.age); // initialize useState. 'age' holds the value (getter), 'setAge' is function used to update 'age' (setter) 

    return (
        <div>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ (event) => setAge( age + 1 ) }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default PersonCard;

