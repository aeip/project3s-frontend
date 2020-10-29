import React from 'react';

export const Death = (props) => {
    
    console.log('Death props',props)

    const startOver = () => {
        props.history.push('/')
    }
	return (
        <div className='death'>
            <h1>YOU DIED</h1>
            <h3>Cause of Death</h3>
            <p>{props.death}</p>
            <button onClick={() => startOver()}>Try Again</button>
        </div>
    )
};
