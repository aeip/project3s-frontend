import React from 'react';
import '../Styles/Titles/Score.scss'

export const Scoreboard = (props) => {
	const handleClick = () => {
        props.history.push('/');
    }
	console.log('scoreboard',props.scoreboard)

	return <div className='scoreboard'>
		<h1>Highscores</h1>
		<button onClick={() => handleClick()}>Back</button>
		<div className='titles'>
			<h3>player</h3>
			<h5>score</h5>
		</div>
		{props.scoreboard[0].players ? props.scoreboard[0].players.map((player) => {
			return(
				<div className='scores'>
					<h3>{player.username}</h3>
					<h5>{player.score}</h5>
				</div>
			)
		}) : ''}
		
	</div>;
};
