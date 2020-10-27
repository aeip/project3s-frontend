import React from 'react'

export const Courtyard = (prop) => {
    let props = prop.props;
    const nextRoom = () => {
        props.history.push('/game/fin/');
    }
    return (
			<div className='courtyard'>
				<h1>Foyer</h1>
				<button onClick={nextRoom()}>Next Room</button>
			</div>
		);
}