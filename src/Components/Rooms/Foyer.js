import React, { useState } from 'react';
import '../Styles/Rooms/Foyer.scss'
import '../Styles/UserInterface/GameScreen.scss'

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
			
			<div className='game-screen'>

				<div className='background'>
					<div className='graphic'>
						<img src='https://i.imgur.com/pNOztsH.png'/>
					</div>
				</div>
				<div className='character-pane'>

				</div>
				<div className='text-box'>
					<p>You enter the foyer of the grand estate. A lone beam of moonlight shines down to the center of the room.</p> <p>Within it's pale glow is the flash of metal from a steel knife. Looks like someone dropped this in a hurry.</p>
							{hasKnife ? (
								<p>You picked up a knife</p>
							) : (
								<p>Would you like to pick up a knife?</p>
							)}
					<button onClick={() => pickUpKnife()}>Pick up knife</button>
					<button onClick={() => nextRoom()}>Next Room</button>
				</div>
			</div>
		</div>
	);
};
