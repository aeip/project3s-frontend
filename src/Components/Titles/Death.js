import React from 'react';

export const Death = (prop) => {
    let props = prop.props;
	return (
        <div className='death'>
            <h1>YOU DIED</h1>
            <h3>Cause of Death</h3>
            <button>Try Again</button>
        </div>
    )
};
