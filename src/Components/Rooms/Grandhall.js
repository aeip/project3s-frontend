import React from 'react';

export const Grandhall = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Grandhall');
	const nextRoom = () => {
		props.history.push('/game/courtyard/');
	};
	return (
		<div className='grandhall'>
			<h1>Grandhall</h1>
			<button onClick={() => nextRoom()}>Next Room</button>
		</div>
	);
};
