import React from 'react';

export const Grandhall = (prop) => {
	let props = prop.props;
	const nextRoom = () => {
		props.history.push('/game/courtyard/');
	};
	return (
		<div className='grandhall'>
			<h1>Grandhall</h1>
			<p>Hey, {props.currentCharacter.username}</p>
			<button onClick={() => nextRoom()}>Next Room</button>
		</div>
	);
};
