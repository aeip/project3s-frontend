import React, { useEffect } from 'react';
import '../Styles/Titles/Win.scss'
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
            <img src='https://i.imgur.com/ydtr3nn.jpg'></img>
            <h3>You entered the crypt and found a horid monster.</h3>
            <h3>With your knife you ended it's life and made the mansion safe again</h3>
            <button onClick={() => handleClick()}>Play Again</button>
            <button onClick={() => toScore()}>HighScores</button>
        </div>
    )
};
