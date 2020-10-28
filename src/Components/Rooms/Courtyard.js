import React from 'react'

export const Courtyard = (prop) => {
    let props = prop.props;
    props.handleUpdateCharacterRoom(props.currentCharacter, 'Courtyard');
    const nextRoom = () => {
        props.history.push('/game/fin/');
    }
    return (
			<div className='courtyard'>
				<h1>Courtyard</h1>
				<button onClick={() => nextRoom()}>Next Room</button>
			</div>
		);
}