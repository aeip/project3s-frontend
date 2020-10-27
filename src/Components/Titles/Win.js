import React from 'react';

export const Win = (prop) => {
    let props = prop.props;
    return (
        <div className='win'>
            <h1>You Win!</h1>
            <button>Play Again</button>
        </div>
    )
};
