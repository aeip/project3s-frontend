import React from 'react';

export const Fin = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Fin');
    const nextRoom = () => {};
	return (
		<div className='fin'>
			<h1>Fin</h1>
			<button onClick={() => nextRoom()}>Next Room (win title)</button>
		</div>
	);
};
