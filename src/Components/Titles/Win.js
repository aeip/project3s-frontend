import React from 'react';

export const Win = (prop) => {
    let props = prop.props;
    const handleClick = () => {
        props.history.push('/');
    }
    return (
        <div className='win'>
            <h1>You Win!</h1>
            <button onClick={() => handleClick()}>Play Again</button>
        </div>
    )
};
