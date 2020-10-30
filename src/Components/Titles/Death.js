import React from 'react';
import '../Styles/Titles/Death.scss'

export const Death = (props) => {
    
    console.log('Death props',props)

    const startOver = () => {
        props.history.push('/')
    }
	return (
        <div className='death'>
            <h1>YOU DIED</h1>
            <img src='https://images.unsplash.com/photo-1536406439303-c65656a6a9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'></img>
            <h3>Cause of Death</h3>
            <p>{props.death}</p>
            <button onClick={() => startOver()}>Try Again</button>
        </div>
    )
};
