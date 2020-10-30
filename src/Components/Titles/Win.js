import React, { useEffect } from 'react';

export const Win = (props) => {
    const url = 'https://project3s-backend.herokuapp.com'
    const handleClick = () => {
        props.history.push('/');
    }
    const toScore = () => {
        props.history.push('/score')
    }

    const calculateScore = () => {
        let score = props.currentCharacter.HP - (props.currentCharacter.MadnessLevel * 2)
        props.handleUpdateCharacterScore(props.currentCharacter, score)
    }

    const handleUpdateScoreboardPlayers = () => {
		fetch(url + '/score/' + props.currentCharacter.username, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

    React.useEffect(() => {
        calculateScore()
        handleUpdateScoreboardPlayers()
    }, [])

    return (
        <div className='win'>
            <h1>You Win!</h1>
            <button onClick={() => handleClick()}>Play Again</button>
            <button onClick={() => toScore()}>HighScores</button>
        </div>
    )
};
