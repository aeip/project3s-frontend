import React from 'react';

export const Scoreboard = (props) => {

console.log('scoreboard',props.scoreboard)

	return <div className='scoreboard'>
		<h1>Highscores</h1>
		{props.scoreboard[0].players ? props.scoreboard[0].players.map((player) => {
			return(
				<>
					<h5>{player.username}</h5>
					<h5>{player.score}</h5>
				</>
			)
		}) : ''}

	</div>;
};
