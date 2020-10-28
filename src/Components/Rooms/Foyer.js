import React, { useState } from 'react';
import '../Styles/Rooms/Foyer.scss';
import '../Styles/UserInterface/GameScreen.scss';

export const Foyer = (prop) => {
	let props = prop.props;
	const [hasKnife, setHasKnife] = useState(false);
	const nextRoom = () => {
		props.history.push('/game/grandhall/');
	};
	if (!hasKnife) {
	}
	const pickUpKnife = () => {
		if (!hasKnife) {
			props.currentCharacter.inventory.push('knife');
			props.handleUpdateCharacter(props.currentCharacter);
			setHasKnife(true);
		}
	};
	return (
		<div className='foyer'>
			<h1>Foyer</h1>

			<div className='game-screen'>
				<div className='background'>
					<div className='graphic'>
						<img src='https://i.imgur.com/pNOztsH.png' />
					</div>
				</div>
				<div className='text-box'>
					{hasKnife ? (
						<p>You picked up a knife</p>
					) : (
                        <>
						<p>Would you like to pick up a knife?</p>
                        <button onClick={() => pickUpKnife()}>Pick up knife</button>
                        </>
					)}
					<button onClick={() => nextRoom()}>Next Room</button>
				</div>
			</div>
		</div>
	);
};
