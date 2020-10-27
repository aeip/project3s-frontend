import React, { useState } from 'react';

export const Foyer = (prop) => {
	let props = prop.props;
	const [hasKnife, setHasKnife] = useState(false);
	const nextRoom = () => {
		props.history.push('/game/grandhall/');
	};
	const pickUpKnife = () => {
        props.currentCharacter.inventory.push('knife');
        props.handleUpdateCharacter(props.currentCharacter);
		setHasKnife(true);
	};
	return (
		<div className='foyer'>
			<h1>Foyer</h1>
			{hasKnife ? (
				<p>You picked up a knife</p>
			) : (
				<p>Would you like to pick up a knife?</p>
			)}
			<button onClick={() => pickUpKnife()}>Pick up knife</button>
			<button onClick={() => nextRoom()}>Next Room</button>
		</div>
	);
};
