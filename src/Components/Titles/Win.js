import React, { useEffect } from 'react';

export const Win = (props) => {
    
    const handleClick = () => {
        props.history.push('/');
    }

    // const calculateScore = () => {
    //     let score = props.currentCharacter.HP - (props.currentCharacter.MadnessLevel * 2)
        
    // }
    // React.useEffect(() => {
    //     calculateScore()
    // }, [])

    return (
        <div className='win'>
            <h1>You Win!</h1>
            <button onClick={() => handleClick()}>Play Again</button>
        </div>
    )
};
