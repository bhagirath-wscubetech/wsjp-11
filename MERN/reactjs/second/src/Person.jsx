import { useState } from 'react';
// hook -> to create the state

function Person(props) {
    const [votes, setVotes] = useState(10);
    //   state, stateModifier 

    const inc = () => {
        setVotes(votes + 1);
    }
    const desc = () => {
        if (votes == 0) return;
        setVotes(votes - 1);
    }

    return (
        <div className="person-box">
            <div className="highlight" style={
                {
                    display: props.highlight == true ? 'block' : 'none'
                    // ternary operator
                }
            }></div>
            <img src={props.img} alt="" className="profile-img" />
            <h3 style={
                {
                    fontSize: votes
                }
            }>Name: {props.name}</h3>
            <h3 style={
                {
                    color: props.u_age >= 18 ? 'green' : 'red',
                }
            }>Age: {props.u_age}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Votes: {votes}</h3>
            <h3>Paise: {votes * 100}</h3>
            <button onClick={desc}>-</button>
            <button onClick={inc}>+</button>
            {/* inc */}
        </div>
    )
}

export default Person;