import React from 'react';

export const Death = (props) => {
    
    console.log('Death props',props)
	return (
        <div className='death'>
            <h1>YOU DIED</h1>
            <h3>Cause of Death</h3>
            <button>Try Again</button>
        </div>
    )
};
